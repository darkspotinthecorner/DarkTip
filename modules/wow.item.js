DarkTip.registerModule('wow.item', {
	'patterns': {
		'explicit': {
			'match' : /item:(us|eu|kr|tw|cn)\.([^\(]+)\((en|de|fr|es|ru|ko|zh)\)/i,
			'params': {
				'1': 'region',
				'2': 'itemid',
				'3': 'lang'
			}
		},
		'implicit': {
			'match' : /http:\/\/(us\.battle\.net|eu\.battle\.net|kr\.battle\.net|tw\.battle\.net|www\.battlenet\.com\.cn)\/wow\/(en|de|fr|es|ru|ko|zh)\/item\/([^\/#]+).*/i,
			'params': {
				'1': 'host',
				'2': 'lang',
				'3': 'itemid'
			}
		},
		'api'     : 'http://<%= this["host"] %>/api/wow/item/<%= this["itemid"] %>?locale=<%= this["locale"] %>',
		'hash'    : '<%= this["host"] %>#<%= this["itemid"] %>#<%= this["locale"] %>',
		'helpers' : {
			'money': /^([0-9]+)([0-9]{2})([0-9]{2})$|([0-9]{1,2})([0-9]{2})$|([0-9]{1,2})$/i
		}
	},
	
	'maps': {
		'stats': {
			'primary': {
				'3': 'Agility',
				'4': 'Strength',
				'5': 'Intellect',
				'6': 'Spirit',
				'7': 'Stamina'
			},
			'secondary': {
				'13': 'Dodge rating',
				'14': 'Parry rating',
				'31': 'Hit rating',
				'32': 'Critical strike rating',
				'35': 'Resilience rating',
				'36': 'Haste rating',
				'37': 'Expertise rating',
				'38': 'Attack power',
				'46': 'Health regeneration',
				'45': 'Spell power',
				'47': 'Spell penetration',
				'49': 'Mastery rating'
			}
		}
	},
	
	'getParams': {
		'explicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.item', 'patterns.explicit.params')));
			params['host']   = DarkTip.map('wow', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		},
		'implicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.item', 'patterns.implicit.params')));
			params['region'] = DarkTip.map('wow', 'maps.host.region', params['host']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		}
	},
	
	'layout': {
		'width': {
			'core': 425
		}
	},
	
	'templates': {
		'tools': {
			'_isStatPrimary': function(statid) {
				var result = DarkTip.map(this['_meta']['module'], 'maps.stats.primary', statid);
				if(result !== undefined)
				{
					return true;
				}
				return false;
			},
			'_isStatSecondary': function(statid) {
				var result = DarkTip.map(this['_meta']['module'], 'maps.stats.secondary', statid);
				if(result !== undefined)
				{
					return true;
				}
				return false;
			},
			'_renderCoins': function(total) {
				var temp   = total.toString();
				var result = temp.match(DarkTip.read(this['_meta']['module'], 'patterns.helpers.money'));
				var split  = {
					'gold'  : -1,
					'silver': -1,
					'copper': 0
				};
				if(result)
				{
					if(result[3] !== undefined)
					{
						split = {
							'gold'  : parseInt(result[1]),
							'silver': parseInt(result[2]),
							'copper': parseInt(result[3])
						};
					}
					else if(result[5] !== undefined)
					{
						split = {
							'gold'  : -1,
							'silver': parseInt(result[4]),
							'copper': parseInt(result[5])
						};
					}
					else
					{
						split = {
							'gold'  : -1,
							'silver': -1,
							'copper': parseInt(result[6])
						};
					}
				}
				return DarkTip.jq.jqote(
					DarkTip.read(this['_meta']['module'], 'templates.fragments.coins'),
					DarkTip.jq.extend(true, {}, DarkTip.getTemplateTools(this['_meta']['module'], this['_meta']['locale']), split)
				);
			}
		},
		'core': (
			'<div class="tooltip-item">' +
	    		'<img class="icon" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/56/<% if(this["icon"]) { %><%= this["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg" />' +
		    	 // --- START simple mode -----------------------------------
				'<div class="data darktip-only-s">' +
					'<div class="row name cquality-<%= this["quality"] %>"><%= this["name"] %></div>' +
					'<% if(this["heroic"]) { %><div class="row heroic"><%= this._loc("heroic") %></div><% } %>' +
					'<% if(this["boundZone"]) { %><div class="row boundZone"><%= this["boundZone"]["name"] %></div><% } %>' +
					'<% if(this["itemBind"]) { %>' +
						'<div class="row itemBind">' +
							'<% if(this["quality"] == 7) { %>' +
								'<%= this._loc("itemBind.4") %>' +
							'<% } else { %>' +
								'<%= this._loc("itemBind." + this["itemBind"]) %>' +
							'<% } %>' +
						'</div>' +
					'<% } %>' +
					'<% if(this["maxCount"]) { %><div class="row maxCount"><%= this._loc("maxCount") %></div><% } %>' +
					'<div class="row classification">' +
						'<% if(this["containerSlots"]) { %>' +
							'<div class="itemClass"><%= this._loc("containerSlots") %></div>' +
						'<% } else { %>' +
							'<% if(this["equippable"]) { %><div class="inventoryType"><%= this._loc("inventoryType." + this["inventoryType"]) %></div><% } %>' +
							'<div class="itemClass"><%= this._loc("itemClass." + this["itemClass"] + "." + this["itemSubClass"]) %></div>' +
						'<% } %>' +
					'</div>' +
					'<% if(this["baseArmor"]) { %><div class="row baseArmor"><%= this._loc("baseArmor") %></div><% } %>' +
					'<% if(this["weaponInfo"]) { %>' +
						'<div class="weaponInfo">' +
							'<%= this._subLoop("templates.fragments.weaponDamage", this["weaponInfo"]["damage"]) %>' +
							'<div class="weaponSpeed"><%= this._loc("weaponSpeed", this["weaponInfo"]) %></div>' +
							'<div class="row dps"><%= this._loc("dps", this["weaponInfo"]) %></div>' +
						'</div>' +
					'<% } %>' +
					'<%= this._subLoop("templates.fragments.stat.primary", this["bonusStats"]) %>' +
					'<% if(this["gemInfo"]) { %><div class="row gemInfo"><%= this["gemInfo"]["bonus"]["name"] %></div><% } %>' +
					'<% if(this["socketInfo"]) { %>' +
						'<div class="socketInfo">' +
							'<% if(this["socketInfo"]["sockets"]) { %>' +
								'<%for(var i = 0; i < this["socketInfo"]["sockets"].length; i++) { %>' +
									'<%var current = this["socketInfo"]["sockets"][i]; %>' +
									'<div class="row socket">' +
										'<span class="icon-socket socket-<%= current["type"] %>">' +
											'<span class="empty"></span><span class="frame"></span>' +
										'</span>' +
										'<%= this._loc("itemSocket." + current["type"]) %>' +
									'</div>' +
								'<% } %>' +
							'<% } %>' +
						'</div>' +
					'<% } %>' +
					'<% if(this["allowableClasses"]) { %><div class="row allowableClasses"><%= this._loc("allowableClasses") %></div><% } %>' +
					'<% if(this["allowableRaces"]) { %><div class="row allowableRaces"><%= this._loc("allowableRaces") %></div><% } %>' +
					'<% if(this["requiredLevel"]) { %><div class="row requiredLevel"><%= this._loc("requiredLevel") %></div><% } %>' +
					'<% if(this["requiredSkill"]) { %><div class="row requiredSkill"><%= this._loc("requiredSkill") %></div><% } %>' +
					'<% if(this["requiredAbility"]) { %><div class="row requiredAbility"><%= this._loc("requiredAbility") %></div><% } %>' +
					'<% if(this["minFactionId"]) { %><div class="row minFactionId"><%= this._loc("minFactionId") %></div><% } %>' +
					'<% if(this["itemLevel"]) { %><div class="row itemLevel"><%= this._loc("itemLevel") %></div><% } %>' +
					'<%= this._subLoop("templates.fragments.stat.secondary", this["bonusStats"]) %>' +
					'<%= this._subLoop("templates.fragments.stat.spell", this["itemSpells"]) %>' +
					'<% if(this["description"]) { %><div class="row description">&quot;<%= this["description"] %>&quot;</div><% } %>' +
			    	'<% if(this["_meta"]["extendedActive"]) { %><div class="row info-meta"><%= this._loc("extendedInactive") %></div><% } %>' +
				'</div>' +
				// --- END simple mode -------------------------------------
				// --- START extended mode ---------------------------------
			    '<% if(this["_meta"]["extendedActive"]) { %>' +
					'<div class="data darktip-only-x">' +
						'<div class="row name cquality-<%= this["quality"] %>"><%= this["name"] %></div>' +
						'<div class="row id"><%= this._loc("itemId") %></div>' +
						'<% if(this["maxDurability"]) { %><div class="row maxDurability"><%= this._loc("maxDurability") %></div><% } %>' +
						'<% if(this["stackable"] > 1) { %><div class="row stackable"><%= this._loc("stackable") %></div><% } %>' +
						// itemSource, maybe...
						'<div class="row sellPrice"><%= this._loc("sellPrice") %></div>' +
						'<% if(this["isAuctionable"]) { %><div class="row isAuctionable"><%= this._loc("isAuctionable") %></div><% } %>' +
						'<div class="row info-meta"><%= this._loc("extendedActive") %></div>' +
			    	'</div>' +
		    	'<% } %>' +
				// --- END extended mode -----------------------------------
			'</div>'
		),
		'404': (
			'<div class="tooltip-item tooltip-404">' +
				'<div class="title">404<span class="sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="row item"><span class="label"><%= this._loc("label.item") %></span> <span class="value"><%= this["itemid"] %></span></div>' +
				'<div class="row region"><span class="label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
		    '</div>'
		),
		'fragments': {
			'allowableClass': '<span class="cclass-<%= this["_value"] %>"><%= this._loc("characterClass." + this["_value"] + ".0")%></span>',
			'allowableRace' : '<span class="crace-<%= this["_value"] %>"><%= this._loc("characterRace." + this["_value"] + ".0")%></span>',
			'weaponDamage'  : '<div class="row damage"><%= this._loc("damage") %></div>',
			'coins'         : (
				'<% if(this["gold"] > -1) { %><span class="icon-gold"><%= this["gold"] %></span><% } %>' +
				'<% if(this["silver"] > -1) { %><span class="icon-silver"><%= this["silver"] %></span><% } %>' +
				'<% if(this["copper"]) { %><span class="icon-copper"><%= this["copper"] %></span><% } else { %>' +
				'<span class="icon-copper">0</span><% } %>'
			),
			'stat'          : {
				'primary'  : (
					'<% if(this._isStatPrimary(this["stat"])) { %>' +
						'<div class="row primaryStat">' +
							'<% if(this["amount"] >= 0) { %>+<% } %><%= this["amount"] %> <%= this._loc("itemStat." + this["stat"]) %>' +
						'</div>' +
					'<% }'
				),
				'secondary': (
					'<% if(this._isStatSecondary(this["stat"])) { %>' +
						'<div class="row secondaryStat">' +
							'<%= this._loc("itemStat." + this["stat"]) %>' +
						'</div>' +
					'<% }'
				),
				'spell'    : (
					'<% if(this["spell"]["description"]) { %>' +
						'<div class="row secondaryStat"><%= this._loc("itemSpell") %></div>' +
					'<% } %>'
				)
			}
		}
	},
	
	'i18n': {
		'en_US': {
			'loading'          : 'Loading item...',
			'not-found'        : 'Item not found',
			'itemId'           : 'Item ID: <%= this["id"] %>',
			'heroic'           : 'Heroic',
			'maxCount'         : 'Unique<% if(this["maxCount"] > 1) { %> (<%= this["maxCount"] %>)<% } %>',
			'containerSlots'   : '<%= this["containerSlots"] %> Slot <%= this._loc("itemClass." + this["itemClass"] + "." + this["itemSubClass"]) %>',
			'damage'           : '<%= this["minDamage"] %> - <%= this["maxDamage"] %> Damage',
			'weaponSpeed'      : 'Speed <%= this["weaponSpeed"] %>',
			'dps'              : '(<%= this["dps"].toFixed(2) %> damage per second)',
			'baseArmor'        : '<%= this["baseArmor"] %> Armor',
			'maxDurability'    : 'Durability <%= this["maxDurability"] %> / <%= this["maxDurability"] %>',
			'requiredLevel'    : 'Requires Level <%= this["requiredLevel"] %>',
			'requiredSkill'    : 'Requires <%= this._loc("characterSkill." + this["requiredSkill"]) %> (<%= this["requiredSkillRank"] %>)',
			'requiredAbility'  : 'Requires <%= this["requiredAbility"]["name"] %>',
			'minFactionId'     : 'Requires Faction ID <%= this["minFactionId"] %> - <%= this._loc("reputationLevel." + this["minReputation"]) %>',
			'itemLevel'        : 'Item Level <%= this["itemLevel"] %>',
			'allowableClasses' : 'Classes: <%= this._subLoop("templates.fragments.allowableClass", this["allowableClasses"], ", ") %>',
			'allowableRaces'   : 'Races: <%= this._subLoop("templates.fragments.allowableRace", this["allowableRaces"], ", ") %>',
			'itemStat'         : {
				'3' : 'Agility',
				'4' : 'Strength',
				'5' : 'Intellect',
				'6' : 'Spirit',
				'7' : 'Stamina',
				'13': 'Equip: Increases your dodge rating by <%= this["amount"] %>.',
				'14': 'Equip: Increases your parry rating by <%= this["amount"] %>.',
				'31': 'Equip: Increases your hit rating by <%= this["amount"] %>.',
				'32': 'Equip: Increases your critical strike rating by <%= this["amount"] %>.',
				'35': 'Equip: Increases your resilience rating by <%= this["amount"] %>.',
				'36': 'Equip: Increases your haste rating by <%= this["amount"] %>.',
				'37': 'Equip: Increases your expertise rating by <%= this["amount"] %>.',
				'38': 'Equip: Increases your attack power by <%= this["amount"] %>.',
				'46': 'Equip: Increases your health regeneration by <%= this["amount"] %>.',
				'45': 'Equip: Increases spell power by <%= this["amount"] %>.',
				'47': 'Equip: Increases spell penetration by <%= this["amount"] %>.',
				'49': 'Equip: Increases your mastery rating by <%= this["amount"] %>.'
			},
			'itemSpell'        : 'Equip / Use / Chance on Hit: <%= this["spell"]["description"] %>',
			'sellPrice'        : 'Sell Price: <%= this._renderCoins(this["sellPrice"]) %>',
			'stackable'        : 'Stackable (<%= this["stackable"] %>)',
			'itemIsAuctionable': 'Can be auctioned',
			'itemBind'         : {
				'1': 'Binds when picked up',
				'2': 'Binds when equipped',
				'3': 'Binds when used',
				'4': 'Binds to Battle.net account'
			},
			'itemSocket'       : {
				'BLUE'     : 'Blue Socket',
				'RED'      : 'Red Socket',
				'YELLOW'   : 'Yellow Socket',
				'META'     : 'Meta Socket',
				'ORANGE'   : 'Orange Socket',
				'PURPLE'   : 'Purple Socket',
				'GREEN'    : 'Green Socket',
				'PRISMATIC': 'Prismatic Socket',
				'HYDRAULIC': 'Hydraulic Socket',
				'COGWHEEL' : 'Cogwheel Socket'
			},
			'reputationFaction': {},
			'reputationLevel'  : {
				'0': 'Hated',
				'1': 'Hostile',
				'2': 'Unfriendly',
				'3': 'Neutral',
				'4': 'Friendly',
				'5': 'Honored',
				'6': 'Revered',
				'7': 'Exalted'
			},
			'itemClass'        : {
				'0' : {
					'0': 'Consumeable',
					'1': 'Potion',
					'2': 'Elixir',
					'3': 'Flask',
					'4': 'Scroll',
					'5': 'Food &amp; Drink',
					'6': 'Item Enhancement',
					'7': 'Bandage',
					'8': 'Other'
				},
				'1' : {
					'0': 'Bag',
					'1': 'Soul Bag',
					'2': 'Herb Bag',
					'3': 'Enchanting Bag',
					'4': 'Engineering Bag',
					'5': 'Gem Bag',
					'6': 'Mining Bag',
					'7': 'Leatherworking Bag',
					'8': 'Inscription Bag',
					'9': 'Tackle Box'
				},
				'2' : {
					'0' : 'Axe', /* 1H */
					'1' : 'Axe', /* 2H */
					'2' : 'Bow',
					'3' : 'Gun',
					'4' : 'Mace', /* 1H */
					'5' : 'Mace', /* 2H */
					'6' : 'Polearm',
					'7' : 'Sword', /* 1H */
					'8' : 'Sword', /* 2H */
					'10': 'Staff',
					'13': 'Fist Weapon',
					'14': 'Miscellaneous',
					'15': 'Dagger',
					'16': 'Thrown',
					'18': 'Crossbow',
					'19': 'Wand',
					'20': 'Fishing Pole'
				},
				'3' : {
					'0' : 'Red Gem',
					'1' : 'Blue Gem',
					'2' : 'Yellow Gem',
					'3' : 'Purple Gem',
					'4' : 'Green Gem',
					'5' : 'Orange Gem',
					'6' : 'Meta Gem',
					'7' : 'Simple Gem',
					'8' : 'Prismatic Gem',
					'9' : 'Hydraulic Gem',
					'10': 'Cogwheel Gem'
				},
				'4' : {
					'0' : 'Miscellaneous',
					'1' : 'Cloth',
					'2' : 'Leather',
					'3' : 'Mail',
					'4' : 'Plate',
					'6' : 'Shield',
					'7' : 'Libram',
					'8' : 'Idol',
					'9' : 'Totem',
					'10': 'Sigil',
					'11': 'Relic'
				},
				'7' : {
					'0' : 'Trade Goods',
					'1' : 'Parts',
					'2' : 'Explosives',
					'3' : 'Devices',
					'4' : 'Jewelcrafting',
					'5' : 'Cloth',
					'6' : 'Leather',
					'7' : 'Metal &amp; Stone',
					'8' : 'Meat',
					'9' : 'Herb',
					'10': 'Elemental',
					'11': 'Other',
					'12': 'Enchanting',
					'13': 'Materials',
					'14': 'Item Enchantment'
				},
				'9' : {
					'0' : 'Book',
					'1' : 'Leatherworking',
					'2' : 'Tailoring',
					'3' : 'Engineering',
					'4' : 'Blacksmithing',
					'5' : 'Cooking',
					'6' : 'Alchemy',
					'7' : 'First Aid',
					'8' : 'Enchanting',
					'9' : 'Fishing',
					'10': 'Jewelcrafting',
					'11': 'Inscription'
				},
				'12': {
					'0': 'Quest Item'
				},
				'13': {
					'0': 'Key'
				},
				'15': {
					'0': 'Junk',
					'1': 'Reagent',
					'2': 'Pet',
					'3': 'Holiday',
					'4': 'Other',
					'5': 'Mount'
				},
				'16': {
					'0' : 'Glyph',
					'1' : 'Warrior',
					'2' : 'Paladin',
					'3' : 'Hunter',
					'4' : 'Rogue',
					'5' : 'Priest',
					'6' : 'Death Knight',
					'7' : 'Shaman',
					'8' : 'Mage',
					'9' : 'Warlock',
					'11': 'Druid'
				}
			},
			'inventoryType'    : {
				'1' : 'Head',
				'2' : 'Neck',
				'3' : 'Shoulder',
				'4' : 'Shirt',
				'5' : 'Chest',
				'6' : 'Waist',
				'7' : 'Legs',
				'8' : 'Feet',
				'9' : 'Wrist',
				'10': 'Hands',
				'11': 'Finger',
				'12': 'Trinket',
				'13': 'One-Hand',
				'15': 'Ranged', /* Bow */
				'16': 'Back',
				'17': 'Two-Hand',
				'18': 'Bag',
				'21': 'Main-hand',
				'22': 'Off-hand',
				'23': 'Held in off-hand',
				'25': 'Ranged', /* Thrown */
				'26': 'Ranged' /* Gun, Crossbow, Wand */
			},
			'characterSkill'   : {
				'129': 'First Aid',
				'164': 'Blacksmithing',
				'165': 'Leatherworking',
				'171': 'Alchemy',
				'182': 'Herbalism',
				'185': 'Cooking',
				'186': 'Mining',
				'197': 'Tailoring',
				'202': 'Engineering',
				'333': 'Enchanting',
				'356': 'Fishing',
				'393': 'Skinning',
				'755': 'Jewelcrafting',
				'762': 'Riding',
				'773': 'Inscription',
				'794': 'Archeology'
			}
		}
	}
	
});