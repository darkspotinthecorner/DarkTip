DarkTip.registerModule('wow.item', {
	
	'triggers': {
		'explicit': {
			'match' : /item:(us|eu|kr|tw|cn)\.([^\(]+)\((en|de|fr|es|ru|ko|zh)\)/i,
			'params': {
				'1': 'region',
				'2': 'itemid',
				'3': 'lang'
			}
		},
		'implicit': {
			'match' : /http:\/\/(us\.battle\.net|eu\.battle\.net|kr\.battle\.net|tw\.battle\.net|cn\.battle\.net|www\.battlenet\.com\.cn)\/wow\/(en|de|fr|es|ru|ko|zh)\/item\/([^\/#]+).*/i,
			'params': {
				'1': 'host',
				'2': 'lang',
				'3': 'itemid'
			},
			'decorate': function(element, params, data) {
				
				var color_quality = DarkTip.map('wow.item', 'maps.quality.color', data['item']['quality']);
				var mediahost     = DarkTip.map('wow', 'maps.region.mediahost', params['region']);
				var icon_item     = 'http://' + mediahost + '/wow/icons/18/' + data['item']['icon'] + '.jpg';
				
				DarkTip.jq(element).css(DarkTip['data']['settings']['decorativeMode']['default']);
				DarkTip.jq(element).css({'color': color_quality});
				DarkTip.jq(element).prepend('<img src="' + icon_item + '" style="vertical-align: middle;" /> ');
			}
		}
	},
	
	'queries': {
		'item': {
			'required' : true,
			'condition': true,
			'call'     : 'http://<%= this["host"] %>/api/wow/item/<%= this["itemid"] %>?locale=<%= this["locale"] %>'
		}/* ,
		'itemset': {
			'required' : false,
			'condition': 'item.itemSet',
			'call'     : 'http://<%= this["host"] %>/api/wow/item/set/<%= this["condition"]["id"] %>?locale=<%= this["locale"] %>'
		}*/
	},
	
	'patterns': {
		'money': /^([0-9]+)([0-9]{2})([0-9]{2})$|([0-9]{1,2})([0-9]{2})$|([0-9]{1,2})$/i
	},
	
	'maps': {
		'quality': {
			'color': {
				'0': '#9D9D9D',
				'1': '#FFFFFF',
				'2': '#1EFF00',
				'3': '#0070FF',
				'4': '#C600FF',
				'5': '#FF8000',
				'6': '#E6CC80',
				'7': '#E6CC80'
			}
		},
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
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.item', 'triggers.explicit.params')));
			params['host']   = DarkTip.map('wow', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		},
		'implicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.item', 'triggers.implicit.params')));
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
				return (result !== undefined);
			},
			'_isStatSecondary': function(statid) {
				var result = DarkTip.map(this['_meta']['module'], 'maps.stats.secondary', statid);
				return (result !== undefined);
			},
			'_renderCoins': function(total) {
				var temp   = total.toString();
				var result = temp.match(DarkTip.read(this['_meta']['module'], 'patterns.money'));
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
				'<img class="icon" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/56/<% if(this["item"]["icon"]) { %><%= this["item"]["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg" />' +
				 // --- START simple mode -----------------------------------
				'<div class="col-70 darktip-only-s">' +
					'<div class="headline-right"><%= this["item"]["itemLevel"] %></div>' +
					'<div class="darktip-row headline cquality-<%= this["item"]["quality"] %>"><%= this["item"]["name"] %></div>' +
					'<% if(this["item"]["heroic"]) { %><div class="darktip-row"><%= this._loc("heroic") %></div><% } %>' +
					'<% if(this["item"]["boundZone"]) { %><div class="darktip-row"><%= this["item"]["boundZone"]["name"] %></div><% } %>' +
					'<% if(this["item"]["itemBind"]) { %>' +
						'<div class="darktip-row">' +
							'<% if(this["item"]["quality"] == 7) { %>' +
								'<%= this._loc("itemBind.4") %>' +
							'<% } else { %>' +
								'<%= this._loc("itemBind." + this["item"]["itemBind"]) %>' +
							'<% } %>' +
						'</div>' +
					'<% } %>' +
					'<% if(this["item"]["maxCount"]) { %><div class="darktip-row"><%= this._loc("maxCount") %></div><% } %>' +
					'<div class="darktip-row classification">' +
						'<% if(this["item"]["containerSlots"]) { %>' +
							'<%= this._loc("containerSlots") %>' +
						'<% } else { %>' +
							'<% if(this["item"]["equippable"]) { %>' +
								'<%= this._loc("inventoryType." + this["item"]["inventoryType"]) %>' +
								'<div class="pos-right"><%= this._loc("itemClass." + this["item"]["itemClass"] + "." + this["item"]["itemSubClass"]) %></div>' +
							'<% } else { %>' +
								'<%= this._loc("itemClass." + this["item"]["itemClass"] + "." + this["item"]["itemSubClass"]) %>' +
							'<% } %>' +
						'<% } %>' +
					'</div>' +
					'<% if(this["item"]["baseArmor"]) { %><div class="darktip-row"><%= this._loc("baseArmor") %></div><% } %>' +
					'<% if(this["item"]["weaponInfo"]) { %>' +
						'<div>' +
							'<div class="darktip-row"><%= this._loc("damage", this["item"]["weaponInfo"]["damage"]) %></div>' +
							'<div class="pos-right"><%= this._loc("weaponSpeed", this["item"]["weaponInfo"]) %></div>' +
							'<div class="darktip-row"><%= this._loc("dps", this["item"]["weaponInfo"]) %></div>' +
						'</div>' +
					'<% } %>' +
					'<%= this._subLoop("templates.fragments.stat.primary", this["item"]["bonusStats"]) %>' +
					'<% if(this["item"]["gemInfo"]) { %><div class="darktip-row"><%= this["item"]["gemInfo"]["bonus"]["name"] %></div><% } %>' +
					'<% if(this["item"]["socketInfo"]) { %><div class="block sockets"><%= this._subLoop("templates.fragments.socket", this["item"]["socketInfo"]["sockets"]) %></div><% if(this["item"]["socketInfo"]["socketBonus"]) { %><div class="darktip-row highlight-reduced"><%= this._loc("socketBonus") %></div><% } %><% } %>' +
					'<% if(this["item"]["allowableClasses"]) { %><div class="darktip-row"><%= this._loc("allowableClasses") %></div><% } %>' +
					'<% if(this["item"]["allowableRaces"]) { %><div class="darktip-row"><%= this._loc("allowableRaces") %></div><% } %>' +
					'<% if(this["item"]["requiredLevel"]) { %><div class="darktip-row"><%= this._loc("requiredLevel") %></div><% } %>' +
					'<% if(this["item"]["requiredSkill"]) { %><div class="darktip-row"><%= this._loc("requiredSkill") %></div><% } %>' +
					'<% if(this["item"]["requiredAbility"]) { %><div class="darktip-row"><%= this._loc("requiredAbility") %></div><% } %>' +
					'<% if(this["item"]["minFactionId"]) { %><div class="darktip-row"><%= this._loc("minFactionId") %></div><% } %>' +
					'<%= this._subLoop("templates.fragments.stat.secondary", this["item"]["bonusStats"]) %>' +
					'<%= this._subLoop("templates.fragments.stat.spell", this["item"]["itemSpells"]) %>' +
					'<% if(this["item"]["description"]) { %><div class="darktip-row highlight-medium">&quot;<%= this["item"]["description"] %>&quot;</div><% } %>' +
					'<% if(this["item"]["itemSet"]) { %><div class="darktip-row padded-above">' +
						'<div class="darktip-row highlight-medium"><%= this["item"]["itemSet"]["name"] %></div>' +
						'<div class="darktip-row padded-above"><%= this._subLoop("templates.fragments.stat.setBonus", this["item"]["itemSet"]["setBonuses"]) %></div>' +
					'</div><% } %>' +
			    	'<% if(this["_meta"]["extendedActive"]) { %><div class="darktip-row info-meta"><%= this._loc("extendedInactive") %></div><% } %>' +
				'</div>' +
				// --- END simple mode -------------------------------------
				// --- START extended mode ---------------------------------
				'<% if(this["_meta"]["extendedActive"]) { %>' +
					'<div class="col-70 darktip-only-x">' +
						'<div class="headline-right"><%= this["item"]["itemLevel"] %></div>' +
						'<div class="darktip-row headline cquality-<%= this["item"]["quality"] %>"><%= this["item"]["name"] %></div>' +
						'<div class="darktip-row highlight-strong"><%= this._loc("itemId") %></div>' +
						'<% if(this["item"]["maxDurability"]) { %><div class="darktip-row"><%= this._loc("maxDurability") %></div><% } %>' +
						'<% if(this["item"]["isAuctionable"]) { %><div class="darktip-row"><%= this._loc("auctionable") %></div><% } %>' +
						'<div class="darktip-row"><%= this._loc("disenchantable") %></div>' +
						'<% if(this["item"]["stackable"] > 1) { %><div class="darktip-row"><%= this._loc("stackable") %></div><% } %>' +
						'<div class="darktip-row"><%= this._loc("sellPrice") %></div>' +
						'<div class="darktip-row info-meta"><%= this._loc("extendedActive") %></div>' +
					'</div>' +
				'<% } %>' +
				// --- END extended mode -----------------------------------
			'</div>'
		),
		'404': (
			'<div class="tooltip-item tooltip-404">' +
				'<div class="title">404<span class="sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.item") %></span> <span class="value"><%= this["itemid"] %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
			'</div>'
		),
		'fragments': {
			'allowableClass': '<span class="cclass-<%= this["_value"] %>"><%= this._loc("characterClass." + this["_value"] + ".0")%></span>',
			'allowableRace' : '<span class="crace-<%= this["_value"] %>"><%= this._loc("characterRace." + this["_value"] + ".0")%></span>',
			'coins'         : (
				'<% if(this["gold"] > -1) { %><span class="icon-gold"><%= this["gold"] %></span><% } %>' +
				'<% if(this["silver"] > -1) { %><span class="icon-silver"><%= this["silver"] %></span><% } %>' +
				'<% if(this["copper"]) { %><span class="icon-copper"><%= this["copper"] %></span><% } else { %>' +
				'<span class="icon-copper">0</span><% } %>'
			),
			'stat'          : {
				'primary'  : (
					'<% if(this._isStatPrimary(this["stat"])) { %>' +
						'<div class="darktip-row">' +
							'<% if(this["amount"] >= 0) { %>+<% } %><%= this["amount"] %> <%= this._loc("itemStat." + this["stat"]) %>' +
						'</div>' +
					'<% }'
				),
				'secondary': (
					'<% if(this._isStatSecondary(this["stat"])) { %>' +
						'<div class="darktip-row highlight-custom">' +
							'<%= this._loc("itemStat." + this["stat"]) %>' +
						'</div>' +
					'<% }'
				),
				'spell'    : (
					'<% if(this["spell"]["description"]) { %>' +
						'<div class="darktip-row highlight-custom">' +
							'<% if(this["trigger"] == "ON_EQUIP") { %>' +
								'<%= this._loc("itemSpell.onEquip") %>' +
							'<% } else if(this["trigger"] == "ON_USE") { %>' +
								'<%= this._loc("itemSpell.onUse") %>' +
							'<% } else if(this["trigger"] == "ON_PROC") { %>' +
								'<%= this._loc("itemSpell.onProc") %>' +
							'<% } else { %>' +
								'<%= this._loc("itemSpell.unknown") %>' +
							'<% } %>' +
						'</div>' +
					'<% } %>'
				),
				'setBonus' : '<div class="darktip-row <% if(this["active"]) { %>highlight-custom<% } else { %>highlight-reduced<% } %>"><%= this._loc("setBonus") %></div>'
			},
			'socket': (
				'<div class="darktip-row socket highlight-reduced">' +
					'<span class="icon-socket socket-<%= this["type"] %>">' +
						'<span class="empty"></span><span class="frame"></span>' +
					'</span>' +
					'<%= this._loc("itemSocket." + this["type"]) %>' +
				'</div>'
			)
		}
	},
	
	'i18n': {
		'en_US': {
			'loading'          : 'Loading item...',
			'not-found'        : 'Item not found',
			'itemId'           : 'Item ID: <%= this["item"]["id"] %>',
			'heroic'           : 'Heroic',
			'maxCount'         : 'Unique<% if(this["item"]["maxCount"] > 1) { %> (<%= this["item"]["maxCount"] %>)<% } %>',
			'containerSlots'   : '<%= this["item"]["containerSlots"] %> Slot <%= this._loc("itemClass." + this["item"]["itemClass"] + "." + this["item"]["itemSubClass"]) %>',
			'damage'           : '<%= this["min"] %> - <%= this["max"] %> Damage',
			'weaponSpeed'      : 'Speed <%= this["weaponSpeed"] %>',
			'dps'              : '(<%= this["dps"].toFixed(2) %> damage per second)',
			'baseArmor'        : '<%= this["item"]["baseArmor"] %> Armor',
			'maxDurability'    : 'Durability <%= this["item"]["maxDurability"] %> / <%= this["item"]["maxDurability"] %>',
			'requiredLevel'    : 'Requires Level <%= this["item"]["requiredLevel"] %>',
			'requiredSkill'    : 'Requires <%= this._loc("characterSkill." + this["item"]["requiredSkill"]) %> (<%= this["requiredSkillRank"] %>)',
			'requiredAbility'  : 'Requires <%= this["item"]["requiredAbility"]["name"] %>',
			'minFactionId'     : 'Requires Faction ID <%= this["item"]["minFactionId"] %> - <%= this._loc("reputationLevel." + this["item"]["minReputation"]) %>',
			'allowableClasses' : 'Classes: <%= this._subLoop("templates.fragments.allowableClass", this["item"]["allowableClasses"], ", ") %>',
			'allowableRaces'   : 'Races: <%= this._subLoop("templates.fragments.allowableRace", this["item"]["allowableRaces"], ", ") %>',
			'itemStatName'     : {
				'3' : 'Agility',
				'4' : 'Strength',
				'5' : 'Intellect',
				'6' : 'Spirit',
				'7' : 'Stamina',
				'13': 'Dodge Rating',
				'14': 'Parry Rating',
				'31': 'Hit Rating',
				'32': 'Critical Strike Rating',
				'35': 'Resilience Rating',
				'36': 'Haste Rating',
				'37': 'Expertise Rating',
				'38': 'Attack Power',
				'46': 'Health Regeneration',
				'45': 'Spell Power',
				'47': 'Spell Penetration',
				'49': 'Mastery Rating'
			},
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
			'itemSpell'        : {
				'onEquip': 'Equip: <%= this["spell"]["description"] %>',
				'onUse'  : 'Use: <%= this["spell"]["description"] %>',
				'onProc' : 'Chance on hit: <%= this["spell"]["description"] %>',
				'unknown': 'Unknown: <%= this["spell"]["description"] %>'
			},
			'setBonus'         : '(<%= this["threshold"] %>) Set: <%= this["description"] %>',
			'sellPrice'        : 'Sell Price: <%= this._renderCoins(this["item"]["sellPrice"]) %>',
			'stackable'        : 'Stackable (<%= this["item"]["stackable"] %>)',
			'disenchantable'   : '<% if(this["item"]["disenchantingSkillRank"]) { %>Can be disenchanted (<%= this["item"]["disenchantingSkillRank"] %>)<% } else { %>Cannot be disenchanted<% } %>',
			'auctionable'      : 'Can be auctioned',
			'itemBind'         : { '1': 'Binds when picked up', '2': 'Binds when equipped', '3': 'Binds when used', '4': 'Binds to Battle.net account' },
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
			'socketBonus'      : 'Socket Bonus: <%= this["item"]["socketInfo"]["socketBonus"] %>',
			'reputationLevel'  : { '0': 'Hated', '1': 'Hostile', '2': 'Unfriendly', '3': 'Neutral', '4': 'Friendly', '5': 'Honored', '6': 'Revered', '7': 'Exalted' },
			'itemClass'        : {
				'0' : { '0': 'Consumeable', '1': 'Potion', '2': 'Elixir', '3': 'Flask', '4': 'Scroll', '5': 'Food &amp; Drink', '6': 'Item Enhancement', '7': 'Bandage', '8': 'Other' },
				'1' : { '0': 'Bag', '1': 'Soul Bag', '2': 'Herb Bag', '3': 'Enchanting Bag', '4': 'Engineering Bag', '5': 'Gem Bag', '6': 'Mining Bag', '7': 'Leatherworking Bag', '8': 'Inscription Bag', '9': 'Tackle Box' },
				'2' : { '0': 'Axe' /* 1H */, '1': 'Axe' /* 2H */, '2': 'Bow', '3': 'Gun', '4': 'Mace' /* 1H */, '5': 'Mace' /* 2H */, '6': 'Polearm', '7': 'Sword' /* 1H */, '8': 'Sword' /* 2H */, '10': 'Staff', '13': 'Fist Weapon', '14': 'Miscellaneous', '15': 'Dagger', '16': 'Thrown', '18': 'Crossbow', '19': 'Wand', '20': 'Fishing Pole' },
				'3' : { '0': 'Red Gem', '1': 'Blue Gem', '2': 'Yellow Gem', '3': 'Purple Gem', '4': 'Green Gem', '5': 'Orange Gem', '6': 'Meta Gem', '7': 'Simple Gem', '8': 'Prismatic Gem', '9': 'Hydraulic Gem', '10': 'Cogwheel Gem' },
				'4' : { '0': 'Miscellaneous', '1': 'Cloth', '2': 'Leather', '3': 'Mail', '4': 'Plate', '6': 'Shield', '7': 'Libram', '8': 'Idol', '9': 'Totem', '10': 'Sigil', '11': 'Relic' },
				'7' : { '0': 'Trade Goods', '1': 'Parts', '2': 'Explosives', '3': 'Devices', '4': 'Jewelcrafting', '5': 'Cloth', '6': 'Leather', '7': 'Metal &amp; Stone', '8': 'Meat', '9': 'Herb', '10': 'Elemental', '11': 'Other', '12': 'Enchanting', '13': 'Materials', '14': 'Item Enchantment' },
				'9' : { '0': 'Book', '1': 'Leatherworking', '2': 'Tailoring', '3': 'Engineering', '4': 'Blacksmithing', '5': 'Cooking', '6': 'Alchemy', '7': 'First Aid', '8': 'Enchanting', '9': 'Fishing', '10': 'Jewelcrafting', '11': 'Inscription' },
				'12': { '0': 'Quest Item' },
				'13': { '0': 'Key' },
				'15': { '0': 'Junk', '1': 'Reagent', '2': 'Pet', '3': 'Holiday', '4': 'Other', '5': 'Mount' },
				'16': { '0': 'Glyph', '1': 'Warrior', '2': 'Paladin', '3': 'Hunter', '4': 'Rogue', '5': 'Priest', '6': 'Death Knight', '7': 'Shaman', '8': 'Mage', '9': 'Warlock', '11': 'Druid' }
			},
			'inventoryType'   : { '1': 'Head', '2': 'Neck', '3': 'Shoulder', '4': 'Shirt', '5': 'Chest', '6': 'Waist', '7': 'Legs', '8': 'Feet', '9': 'Wrist', '10': 'Hands', '11': 'Finger', '12': 'Trinket', '13': 'One-Hand', '15': 'Ranged' /* Bow */, '16': 'Back', '17': 'Two-Hand', '18': 'Bag', '21': 'Main-hand', '22': 'Off-hand', '23': 'Held in off-hand', '25': 'Ranged' /* Thrown */, '26': 'Ranged' /* Gun, Crossbow, Wand */ }
		},
		'de_DE': {
			'loading'          : 'Lade Gegenstand...',
			'not-found'        : 'Gegenstand nicht gefunden',
			'itemId'           : 'Gegenstands ID: <%= this["item"]["id"] %>',
			'heroic'           : 'Heroisch',
			'maxCount'         : 'Einzigartig<% if(this["item"]["maxCount"] > 1) { %> (<%= this["item"]["maxCount"] %>)<% } %>',
			'containerSlots'   : '<%= this["item"]["containerSlots"] %> Platz <%= this._loc("itemClass." + this["item"]["itemClass"] + "." + this["item"]["itemSubClass"]) %>',
			'damage'           : '<%= this["min"] %> - <%= this["max"] %> Schaden',
			'weaponSpeed'      : 'Geschwindigkeit <%= this["weaponSpeed"] %>',
			'dps'              : '(<%= this["dps"].toFixed(2) %> Schaden pro Sekunde)',
			'baseArmor'        : '<%= this["item"]["baseArmor"] %> R&uuml;stung',
			'maxDurability'    : 'Haltbarkeit <%= this["item"]["maxDurability"] %> / <%= this["item"]["maxDurability"] %>',
			'requiredLevel'    : 'Erfordert Stufe <%= this["item"]["requiredLevel"] %>',
			'requiredSkill'    : 'Erfordert <%= this._loc("characterSkill." + this["item"]["requiredSkill"]) %> (<%= this["item"][requiredSkillRank] %>)',
			'requiredAbility'  : 'Erfordert <%= this["item"]["requiredAbility"]["name"] %>',
			'minFactionId'     : 'Erfordert Fraktion ID <%= this["item"]["minFactionId"] %> - <%= this._loc("reputationLevel." + this["item"]["minReputation"]) %>',
			'allowableClasses' : 'Klassen: <%= this._subLoop("templates.fragments.allowableClass", this["item"]["allowableClasses"], ", ") %>',
			'allowableRaces'   : 'Rassen: <%= this._subLoop("templates.fragments.allowableRace", this["item"]["allowableRaces"], ", ") %>',
			'itemStatName'     : {
				'3' : 'Beweglichkeit',
				'4' : 'St&auml;rke',
				'5' : 'Intellekt',
				'6' : 'Willenskraft',
				'7' : 'Ausdauer',
				'13': 'Ausweichwertung',
				'14': 'Parrierwertung',
				'31': 'Trefferwertung',
				'32': 'Kritische Trefferwertung',
				'35': 'Abh&auml;rtungswertung',
				'36': 'Tempowertung',
				'37': 'Waffenkundewertung',
				'38': 'Angriffskraft',
				'46': 'Gesundheitsregenartion',
				'45': 'Zaubermacht',
				'47': 'Zauberdurchschlagskraft',
				'49': 'Meisterschaftswertung'
			},
			'itemStat'         : {
				'3' : 'Beweglichkeit',
				'4' : 'St&auml;rke',
				'5' : 'Intellekt',
				'6' : 'Willenskraft',
				'7' : 'Ausdauer',
				'13': 'Anlegen: Erh&ouml;ht eure Ausweichwertung um <%= this["amount"] %>.',
				'14': 'Anlegen: Erh&ouml;ht eure Parrierwertung um <%= this["amount"] %>.',
				'31': 'Anlegen: Erh&ouml;ht eure Trefferwertung um <%= this["amount"] %>.',
				'32': 'Anlegen: Erh&ouml;ht eure kritische Trefferwertung um <%= this["amount"] %>.',
				'35': 'Anlegen: Erh&ouml;ht eure Abh&auml;rtungswertung um <%= this["amount"] %>.',
				'36': 'Anlegen: Erh&ouml;ht eure Tempowertung um <%= this["amount"] %>.',
				'37': 'Anlegen: Erh&ouml;ht eure Waffenkundewertung um <%= this["amount"] %>.',
				'38': 'Anlegen: Erh&ouml;ht eure Angriffswertung um <%= this["amount"] %>.',
				'46': 'Anlegen: Erh&ouml;ht eure Gesundheitsregenartion um <%= this["amount"] %>.',
				'45': 'Anlegen: Erh&ouml;ht Zaubermacht um <%= this["amount"] %>.',
				'47': 'Anlegen: Erh&ouml;ht Zauberdurchschlagskraft um <%= this["amount"] %>.',
				'49': 'Anlegen: Erh&ouml;ht eure Meisterschaftswertung um <%= this["amount"] %>.'
			},
			'itemSpell'        : {
				'onEquip': 'Anlegen: <%= this["spell"]["description"] %>',
				'onUse'  : 'Benutzen: <%= this["spell"]["description"] %>',
				'onProc' : 'Trefferchance: <%= this["spell"]["description"] %>',
				'unknown': 'Unbekannt: <%= this["spell"]["description"] %>'
			},
			'setBonus'         : '(<%= this["threshold"] %>) Set: <%= this["description"] %>',
			'sellPrice'        : 'Verkaufspreis: <%= this._renderCoins(this["item"]["sellPrice"]) %>',
			'stackable'        : 'Stapelbar (<%= this["item"]["stackable"] %>)',
			'disenchantable'   : '<% if(this["item"]["disenchantingSkillRank"]) { %>Kann entzaubert werden (<%= this["item"]["disenchantingSkillRank"] %>)<% } else { %>Kann nicht entzaubert werden<% } %>',
			'auctionable'      : 'Kann versteigert werden',
			'itemBind'         : { '1': 'Wird beim Aufheben gebunden', '2': 'Wird beim Anlegen gebunden', '3': 'Wird bei Benutzung gebunden', '4': 'Wird an Battle.net-Account gebunden' },
			'itemSocket'       : {
				'BLUE'     : 'Blauer Sockel',
				'RED'      : 'Roter Sockel',
				'YELLOW'   : 'Gelber Sockel',
				'META'     : 'Meta Sockel',
				'ORANGE'   : 'Orangener Sockel',
				'PURPLE'   : 'Lila Sockel',
				'GREEN'    : 'Gr&uuml;ner Sockel',
				'PRISMATIC': 'Prismatischer Sockel',
				'HYDRAULIC': 'Hydraulischer Sockel',
				'COGWHEEL' : 'Zahnrad Sockel'
			},
			'socketBonus'      : 'Sockelbonus: <%= this["item"]["socketInfo"]["socketBonus"] %>',
			'reputationLevel'  : { '0': 'Haßerf&szlig;uuml;llt', '1': 'Feindselig', '2': 'Unfreundlich', '3': 'Neutral', '4': 'Freundlich', '5': 'Wohlwollend', '6': 'Respektvoll', '7': 'Ehrf&uuml;rchtig' },
			'itemClass'        : {
				'0' : { '0': 'Verbrauchbar', '1': 'Trank', '2': 'Elixier', '3': 'Fl&auml;schchen', '4': 'Schriftrolle', '5': 'Essen &amp; Drinken', '6': 'Gegenstandsverzauberung', '7': 'Verband', '8': 'Anderes' },
				'1' : { '0': 'Tasche', '1': 'Seelentasche', '2': 'Kr&auml;utertasche', '3': 'Verzauberertasche', '4': 'Ingenierstasche', '5': 'Edelsteintasche', '6': 'Bergbautasche', '7': 'Ledertasche', '8': 'Schreibertasche', '9': 'Spinnerkasten' },
				'2' : { '0': 'Axt' /* 1H */, '1' : 'Axt' /* 2H */, '2': 'Bogen', '3': 'Gewehr', '4': 'Streitkolben' /* 1H */, '5': 'Streitkolben' /* 2H */, '6': 'Stangenwaffe', '7': 'Schwert' /* 1H */, '8': 'Schwert' /* 2H */, '10': 'Stab', '13': 'Faustwaffe', '14': 'Verschiedenes', '15': 'Dolch', '16': 'Wurfwaffe', '18': 'Armbrust', '19': 'Zauberstab', '20': 'Angelrute' },
				'3' : { '0': 'Roter Edelstein', '1': 'Blauer Edelstein', '2': 'Gelber Edelstein', '3': 'Violetter Edelstein', '4': 'Gr&uuml;ner Edelstein', '5': 'Orangener Edelstein', '6': 'Meta Edelstein', '7': 'Einfacher Edelstein', '8': 'Prismatischer Edelstein', '9': 'Hydraulischer Edelstein', '10': 'Zahnrad Edelstein' },
				'4' : { '0': 'Verschiedenes', '1': 'Stoff', '2': 'Leder', '3': 'Schwere R&uuml;stung', '4': 'Platte', '6': 'Schild', '7': 'Libram', '8': 'Idol', '9': 'Totem', '10': 'Siegel', '11': 'Relikt' },
				'7' : { '0': 'Handelswaren', '1': 'Teile', '2': 'Sprengstoff', '3': 'Ger&auml;te', '4': 'Juwelenschleifen', '5': 'Stoff', '6': 'Leder', '7': 'Metall &amp; Stein', '8': 'Fleisch', '9': 'Kr&auml;uter', '10': 'Elementar', '11': 'Anderes', '12': 'Verzauberkunst', '13': 'Materialien', '14': 'Gegenstandsverzauberungen' },
				'9' : { '0': 'Buch', '1': 'Lederverarbeitung', '2': 'Schneiderei', '3': 'Ingenieurskunst', '4': 'Schmiedekunst', '5': 'Kochen', '6': 'Alchemie', '7': 'Erste Hilfe', '8': 'Verzauberkunst', '9': 'Angeln', '10': 'Juwelenschleifen', '11': 'Inschriftenkunde' },
				'12': { '0': 'Questgegenstand' },
				'13': { '0': 'Schl&uuml;ssel' },
				'15': { '0': 'Plunder', '1': 'Reagenz', '2': 'Haustier', '3': 'Feiertag', '4': 'Anderes', '5': 'Reittier' },
				'16': { '0': 'Glyphe', '1': 'Krieger', '2': 'Paladin', '3': 'J&auml;ger', '4': 'Schurke', '5': 'Priester', '6': 'Todesritter', '7': 'Schamane', '8': 'Magier', '9': 'Hexenmeister', '11': 'Druide' }
			},
			'inventoryType'    : { '1': 'Kopf', '2': 'Nacken', '3': 'Schulter', '4': 'Hemd', '5': 'Brust', '6': 'Taille', '7': 'Beine', '8': 'F&uuml;&szlig;e', '9': 'Handgelenke', '10': 'H&auml;nde', '11': 'Finger', '12': 'Schmuckst&uuml;ck', '13': 'Einh&auml;ndig', '15': 'Distanz' /* Bogen */, '16': 'R&uuml;cken', '17': 'Zweih&auml;ndig', '18': 'Tasche', '21': 'Waffenhand', '22': 'Schildhand', '23': 'In Schildhand gef&uuml;hrt', '25': 'Distanz' /* Wurfwaffe */, '26': 'Distanz' /* Gewehr, Armbrust, Zauberstab */ }
		},
		'fr_FR': {
			'loading'          : 'Chargement Objets...',
			'not-found'        : 'Objets introuvable',
			'itemId'           : 'ID Objets: <%= this["item"]["id"] %>',
			'heroic'           : 'H&eacute;roïc',
			'maxCount'         : 'Unique<% if(this["item"]["maxCount"] > 1) { %> (<%= this["item"]["maxCount"] %>)<% } %>',
			'containerSlots'   : '<%= this["item"]["containerSlots"] %> Slot <%= this._loc("itemClass." + this["item"]["itemClass"] + "." + this["item"]["itemSubClass"]) %>',
			'damage'           : '<%= this["min"] %> - <%= this["max"] %> D&eacute;g&acirc;ts',
			'weaponSpeed'      : 'Vitesse <%= this["weaponSpeed"] %>',
			'dps'              : '(<%= this["dps"].toFixed(2) %> domage par second)',
			'baseArmor'        : '<%= this["item"]["baseArmor"] %> Armure',
			'maxDurability'    : 'Durabilit&eacute; <%= this["item"]["maxDurability"] %> / <%= this["item"]["maxDurability"] %>',
			'requiredLevel'    : 'Niveau <%= this["item"]["requiredLevel"] %> requis',
			'requiredSkill'    : 'Requiert <%= this._loc("characterSkill." + this["item"]["requiredSkill"]) %> (<%= this["item"]["requiredSkillRank"] %>)',
			'requiredAbility'  : 'Requiert <%= this["item"]["requiredAbility"]["name"] %>',
			'minFactionId'     : 'Requiert Faction ID <%= this["item"]["minFactionId"] %> - <%= this._loc("reputationLevel." + this["item"]["minReputation"]) %>',
			'allowableClasses' : 'Classes: <%= this._subLoop("templates.fragments.allowableClass", this["item"]["allowableClasses"], ", ") %>',
			'allowableRaces'   : 'Races: <%= this._subLoop("templates.fragments.allowableRace", this["item"]["allowableRaces"], ", ") %>',
			'itemStatName'     : {
				'3' : 'Agilit&eacute;',
				'4' : 'Force',
				'5' : 'Intelligence',
				'6' : 'Esprit',
				'7' : 'Endurance',
				'13': 'Score d\'esquive',
				'14': 'Score de parade',
				'31': 'Score de toucher',
				'32': 'Score de coup critique',
				'35': 'Score de resilience',
				'36': 'Score de h&acirc;te',
				'37': 'Score d\'expertise',
				'38': 'Puissance d\'attaque',
				'46': 'R&eacute;g&eacute;n&eacute;ration de vie',
				'45': 'Puissance des sorts',
				'47': 'P&eacute;n&eacute;tration des sorts',
				'49': 'Score maîtrise'
			},
			'itemStat'         : {
				'3' : 'Agilit&eacute;',
				'4' : 'Force',
				'5' : 'Intelligence',
				'6' : 'Esprit',
				'7' : 'Endurance',
				'13': 'Equip&eacute;: augmente le score d\'esquive de <%= this["amount"] %>.',
				'14': 'Equip&eacute;: augmente le score de parade de <%= this["amount"] %>.',
				'31': 'Equip&eacute;: augmente votre score de toucher de <%= this["amount"] %>.',
				'32': 'Equip&eacute;: augmente votre score de coup critique de <%= this["amount"] %>.',
				'35': 'Equip&eacute;: augmente votre score de resilience de <%= this["amount"] %>.',
				'36': 'Equip&eacute;: augmente votre score de h&acirc;te de <%= this["amount"] %>.',
				'37': 'Equip&eacute;: augmente votre score d\'expertise de <%= this["amount"] %>.',
				'38': 'Equip&eacute;: augmente de <%= this["amount"] %> la puissance d\'attaque.',
				'46': 'Equip&eacute;: augmente votre r&eacute;g&eacute;n&eacute;ration de vie de <%= this["amount"] %>.',
				'45': 'Equip&eacute;: augmente votre puissance des sorts de <%= this["amount"] %>.',
				'47': 'Equip&eacute;: augmente la p&eacute;n&eacute;tration des sorts de <%= this["amount"] %>.',
				'49': 'Equip&eacute;: augmente votre score maîtrise de <%= this["amount"] %>.'
			},
			'itemSpell'        : {
				'onEquip': 'Equip&eacute; : <%= this["spell"]["description"] %>',
				'onUse'  : 'Utilis&eacute; : <%= this["spell"]["description"] %>',
				'onProc' : 'Chances quand vous touchez : <%= this["spell"]["description"] %>',
				'unknown': 'Inconnu : <%= this["spell"]["description"] %>'
			},
			'setBonus'         : '(<%= this["threshold"] %>) Ensemble : <%= this["description"] %>',
			'sellPrice'        : 'Prix de vente: <%= this._renderCoins(this["item"]["sellPrice"]) %>',
			'stackable'        : 'Empilable (<%= this["item"]["stackable"] %>)',
			'disenchantable'   : '<% if(this["item"]["disenchantingSkillRank"]) { %>Peut &ecirc;tre d&eacute;senchant&eacute; (<%= this["item"]["disenchantingSkillRank"] %>)<% } else { %>Ne peut pas &ecirc;tre d&eacute;senchant&eacute;<% } %>',
			'auctionable'      : 'Peut &ecirc;tre vendu',
			'itemBind'         : { '1': 'Li&eacute; quand ramass&eacute;', '2': 'Li&eacute; quand &eacute;quip&eacute;', '3': 'Li&eacute; quand utilis&eacute;', '4': 'Li&eacute; au compte Battle.net' },
			'itemSocket'       : {
				'BLUE'     : 'Ch&acirc;sse bleue',
				'RED'      : 'Ch&acirc;sse rouge',
				'YELLOW'   : 'Ch&acirc;sse jaune',
				'META'     : 'M&eacute;ta-ch&acirc;sse',
				'ORANGE'   : 'Ch&acirc;sse orange',
				'PURPLE'   : 'Ch&acirc;sse Violette',
				'GREEN'    : 'Ch&acirc;sse verte',
				'PRISMATIC': 'Ch&acirc;sse prismatique',
				'HYDRAULIC': 'Ch&acirc;sse Hydraulique',
				'COGWHEEL' : 'Chambre de roue dent&eacute;e'
			},
			'socketBonus'      : 'Bonues de sertissage: <%= this["item"]["socketInfo"]["socketBonus"] %>',
			'reputationLevel'  : { '0': 'Haï', '1': 'Hostile', '2': 'Inamical', '3': 'Neutre', '4': 'Amical', '5': 'Honor&eacute;', '6': 'R&eacute;v&eacute;r&eacute;', '7': 'Exalt&eacute;' },
			'itemClass'        : {
				'0' : { '0': 'Consommable', '1': 'Potion', '2': 'Elixir', '3': 'Flacon', '4': 'Parchemin', '5': 'Nourriture &amp; boissons', '6': 'Am&eacute;lioration d\'objet', '7': 'Bandage', '8': 'Autre' },
				'1' : { '0': 'Sac', '1': 'Sac d\'&acirc;me', '2': 'Sac d\'herbes', '3': 'Sac d\'enchanteur', '4': 'Sac d\'ing&eacute;nieur', '5': 'Sac de gemmes', '6': 'Sac de mineur', '7': 'Sac de travail du cuir', '8': 'Sac de calligraphie', '9': 'Boîte d\'app&acirc;ts' },
				'2' : { '0': 'Axe' /* 1H */, '1': 'Axe' /* 2H */, '2': 'Bow', '3': 'Gun', '4': 'Mace' /* 1H */, '5': 'Mace' /* 2H */, '6': 'Polearm', '7': 'Sword' /* 1H */, '8': 'Sword' /* 2H */, '10': 'Staff', '13': 'Fist Weapon', '14': 'Miscellaneous', '15': 'Dagger', '16': 'Thrown', '18': 'Crossbow', '19': 'Wand', '20': 'Fishing Pole' },
				'3' : { '0': 'Gemme rouge', '1': 'Gemme bleue', '2': 'Gemme jaune', '3': 'Gemme Violette', '4': 'Gemme verte', '5': 'Gemme orange', '6': 'Gemme M&eacute;ta', '7': 'Gemme simple', '8': 'Gemme Prismatique', '9': 'Gemme Hydraulique', '10': 'Gemme Roue dent&eacute;e' },
				'4' : { '0': 'Divers', '1': 'Cloth', '2': 'Leather', '3': 'Mail', '4': 'Plate', '6': 'Shield', '7': 'Libram', '8': 'Idol', '9': 'Totem', '10': 'Sigil', '11': 'Relic' },
				'7' : { '0': 'Artisanat', '1': 'El&eacute;ments', '2': 'Explosifs', '3': 'Appareils', '4': 'Joaillerie', '5': 'Tissu', '6': 'Cuir', '7': 'M&eacute;tal &amp; pierre', '8': 'Viande', '9': 'Herbes', '10': 'El&eacute;mentaire', '11': 'Autre', '12': 'Enchantement', '13': 'Mat&eacute;riaux', '14': 'Enchantement d\'objet' },
				'9' : { '0': 'Livre', '1': 'Travail du cuir', '2': 'Couture', '3': 'Ing&eacute;nierie', '4': 'Forge', '5': 'Cuisine', '6': 'Alchimie', '7': 'Secourisme', '8': 'Enchantement', '9': 'P&ecirc;che', '10': 'Joaillerie', '11': 'Calligraphie' },
				'12': { '0': 'Qu&ecirc;te' },
				'13': { '0': 'Key' },
				'15': { '0': 'Camelote', '1': 'R&eacute;actif', '2': 'Familier', '3': 'F&ecirc;te', '4': 'Autre', '5': 'Monture' },
				'16': { '0': 'Glyphe', '1': 'Guerrier', '2': 'Paladin', '3': 'Chasseur', '4': 'Voleur', '5': 'Pr&ecirc;tre', '6': 'Chevalier de la mort', '7': 'Chaman', '8': 'Mage', '9': 'D&eacute;moniste', '11': 'Druide' }
			},
			'inventoryType'   : { '1': 'T&ecirc;te', '2': 'Cou', '3': 'Epaule', '4': 'Chemise', '5': 'Torse', '6': 'Taille', '7': 'Jambes', '8': 'Pieds', '9': 'Poignets', '10': 'Mains', '11': 'Doigt', '12': 'Bijou', '13': 'A une mains', '15': 'Ranged' /* Bow */, '16': 'Back', '17': 'A deux mains', '18': 'Sac', '21': 'Main-hand', '22': 'Off-hand', '23': 'Held in off-hand', '25': 'Ranged' /* Thrown */, '26': 'Ranged' /* Gun, Crossbow, Wand */ }
		},
		'es_ES': {
			'loading'          : 'Cargando objeto...',
			'not-found'        : 'Objeto no encontrado',
			'itemId'           : 'ID de Objeto: <%= this["item"]["id"] %>',
			'heroic'           : 'Heroico',
			'maxCount'         : '&Uacute;nico<% if(this["item"]["maxCount"] > 1) { %> (<%= this["item"]["maxCount"] %>)<% } %>',
			'containerSlots'   : '<%= this._loc("itemClass." + this["item"]["itemClass"] + "." + this["item"]["itemSubClass"]) %> con <%= this["item"]["containerSlots"] %> Casillas',
			'damage'           : '<%= this["min"] %> - <%= this["max"] %> Da&ntilde;o',
			'weaponSpeed'      : 'Velocidad <%= this["weaponSpeed"] %>',
			'dps'              : '(<%= this["dps"].toFixed(2) %> da&ntilde;o por segundo)',
			'baseArmor'        : '<%= this["item"]["baseArmor"] %> de armadura',
			'maxDurability'    : 'Durabilidad <%= this["item"]["maxDurability"] %> / <%= this["item"]["maxDurability"] %>',
			'requiredLevel'    : 'Requiere nivel <%= this["item"]["requiredLevel"] %>',
			'requiredSkill'    : 'Requiere <%= this._loc("characterSkill." + this["item"]["requiredSkill"]) %> (<%= this["item"]["requiredSkillRank"] %>)',
			'requiredAbility'  : 'Requiere <%= this["item"]["requiredAbility"]["name"] %>',
			'minFactionId'     : 'Requiere facci&oacute;n con ID <%= this["item"]["minFactionId"] %> - <%= this._loc("reputationLevel." + this["item"]["minReputation"]) %>',
			'allowableClasses' : 'Clases: <%= this._subLoop("templates.fragments.allowableClass", this["item"]["allowableClasses"], ", ") %>',
			'allowableRaces'   : 'Razas: <%= this._subLoop("templates.fragments.allowableRace", this["item"]["allowableRaces"], ", ") %>',
			'itemStatName'     : {
				'3' : 'de agilidad',
				'4' : 'de fuerza',
				'5' : 'de intelecto',
				'6' : 'de esp&iacute;ritu',
				'7' : 'de aguante',
				'13': 'de esquivar',
				'14': 'de parada',
				'31': 'de golpe',
				'32': 'de golpe cr&iacute;tico',
				'35': 'de temple',
				'36': 'de celeridad',
				'37': 'de pericia',
				'38': 'poder de ataque',
				'46': 'regeneraci&oacute;n de salud',
				'45': 'poder con hechizos',
				'47': 'penetraci&oacute;n de hechizos',
				'49': '&iacute;ndice de maestr&iacute;a'
			},
			'itemStat'         : {
				'3' : 'de agilidad',
				'4' : 'de fuerza',
				'5' : 'de intelecto',
				'6' : 'de esp&iacute;ritu',
				'7' : 'de aguante',
				'13': 'Equipar: Aumenta tu &iacute;ndice de esquivar en <%= this["amount"] %>.',
				'14': 'Equipar: Aumenta tu &iacute;ndice de parada en <%= this["amount"] %>.',
				'31': 'Equipar: Aumenta tu &iacute;ndice de golpe en <%= this["amount"] %>.',
				'32': 'Equipar: Aumenta tu &iacute;ndice de golpe cr&iacute;tico en <%= this["amount"] %>.',
				'35': 'Equipar: Aumenta tu &iacute;ndice de temple en <%= this["amount"] %>.',
				'36': 'Equipar: Aumenta tu &iacute;ndice de celeridad en <%= this["amount"] %>.',
				'37': 'Equipar: Aumenta tu &iacute;ndice de pericia en <%= this["amount"] %>.',
				'38': 'Equipar: Aumenta el poder de ataque en <%= this["amount"] %>.',
				'46': 'Equipar: Aumenta la regeneraci&oacute;n de salud en <%= this["amount"] %>.',
				'45': 'Equipar: Aumenta el poder con hechizos en <%= this["amount"] %>.',
				'47': 'Equipar: Aumenta la penetraci&oacute;n de hechizos en <%= this["amount"] %>.',
				'49': 'Equipar: Aumenta tu &iacute;ndice de maestr&iacute;a en <%= this["amount"] %>.'
			},
			'itemSpell'        : {
				'onEquip': 'Equipar: <%= this["spell"]["description"] %>',
				'onUse'  : 'Uso: <%= this["spell"]["description"] %>',
				'onProc' : 'Probabilidad al acertar: <%= this["spell"]["description"] %>',
				'unknown': 'Desconocido: <%= this["spell"]["description"] %>'
			},
			'setBonus'         : '(<%= this["threshold"] %>) Conjunto: <%= this["description"] %>',
			'sellPrice'        : 'Precio de venta: <%= this._renderCoins(this["item"]["sellPrice"]) %>',
			'stackable'        : 'Se puede apilar (<%= this["item"]["stackable"] %>)',
			'disenchantable'   : '<% if(this["item"]["disenchantingSkillRank"]) { %>Se puede desencantar (<%= this["item"]["disenchantingSkillRank"] %>)<% } else { %>No se puede desencantar<% } %>',
			'auctionable'      : 'Se puede subastar',
			'itemBind'         : { '1': 'Se liga al recogerlo', '2': 'Se liga al equiparlo', '3': 'Se liga al usarlo', '4': 'Se liga a la cuenta de Battle.net' },
			'itemSocket'       : {
				'BLUE'     : 'Ranura azul',
				'RED'      : 'Ranura roja',
				'YELLOW'   : 'Ranura amarilla',
				'META'     : 'Ranura meta',
				'ORANGE'   : 'Ranura naranja',
				'PURPLE'   : 'Ranura púrpura',
				'GREEN'    : 'Ranura verde',
				'PRISMATIC': 'Ranura prismática',
				'HYDRAULIC': 'Ranura hidráulica',
				'COGWHEEL' : 'Ranura de engranaje'
			},
			'socketBonus'      : 'Bonus ranura: <%= this["item"]["socketInfo"]["socketBonus"] %>',
			'reputationLevel'  : { '0': 'Odiado', '1': 'Hostil', '2': 'Adverso', '3': 'Neutral', '4': 'Amistoso', '5': 'Honorable', '6': 'Venerado', '7': 'Exaltado' },
			'itemClass'        : {
				'0' :{ '0': 'Consumible', '1': 'Poci&oacute;n', '2': 'Elixir', '3': 'Frasco', '4': 'Pergamino', '5': 'Comida y bebida', '6': 'Mejora de Objetos', '7': 'Venda', '8': 'Otros' },
				'1' :{ '0': 'Bolsa', '1': 'Bolsa de almas', '2': 'Bolsa de hierbas', '3': 'Bolsa de encantamiento', '4': 'Bolsa de ingenier&iacute;a', '5': 'Bolsa de gemas', '6': 'Bolsa de miner&iacute;a', '7': 'Bolsa de peleter&iacute;a', '8': 'Bolsa de inscripci&oacute;n', '9': 'Caja de aparejos' },
				'2' :{ '0': 'Hacha' /* 1H */,'1': 'Hacha' /* 2H */,'2': 'Arco', '3': 'Arma de fuego', '4': 'Maza' /* 1H */,'5': 'Maza' /* 2H */,'6': 'Arma de asta', '7': 'Espada' /* 1H */,'8': 'Espada' /* 2H */,'10': 'Bast&oacute;n', '13': 'Arma de pu&ntilde;o', '14': 'Miscelánea', '15': 'Daga', '16': 'Arma arrojadiza', '18': 'Ballesta', '19': 'Varita', '20': 'Ca&ntilde;a de pescar' },
				'3' :{ '0': 'Gema roja', '1': 'Gema azul', '2': 'Gema amarilla', '3': 'Gema púrpura', '4': 'Gema verde', '5': 'Gema naranja', '6': 'Gema meta', '7': 'Gema simple', '8': 'Gema prismática', '9': 'Gema hidráulica', '10': 'Gema de engranaje' },
				'4' :{ '0': 'Miscelánea', '1': 'Tela', '2': 'Cuero', '3': 'Malla', '4': 'Placas', '6': 'Escudo', '7': 'Tratado', '8': 'Ídolo', '9': 'T&oacute;tem', '10': 'Sigilo', '11': 'Reliquia' },
				'7' :{ '0': 'Objeto Comerciable', '1': 'Piezas', '2': 'Explosivos', '3': 'Instrumentos', '4': 'Joyer&iacute;a', '5': 'Tela', '6': 'Cuero', '7': 'Metal y piedra', '8': 'Carne', '9': 'Hierba', '10': 'Elemental', '11': 'Otro', '12': 'Encantamiento', '13': 'Materiales', '14': 'Encantamiento de objeto' },
				'9' :{ '0': 'Libro', '1': 'Peleter&iacute;a', '2': 'Sastrer&iacute;a', '3': 'Ingenier&iacute;a', '4': 'Herrer&iacute;a', '5': 'Cocina', '6': 'Alquimia', '7': 'Primeros auxilios', '8': 'Encantamiento', '9': 'Pesca', '10': 'Joyer&iacute;a', '11': 'Inscripci&oacute;n' },
				'12':{ '0': 'Objeto de misi&oacute;n' },
				'13':{ '0': 'Llave' },
				'15':{ '0': 'Chatarra', '1': 'Componente', '2': 'Mascota', '3': 'Vacaciones', '4': 'Otros', '5': 'Montura' },
				'16':{ '0': 'Glifo', '1': 'Guerrero', '2': 'Palad&iacute;n', '3': 'Cazador', '4': 'P&iacute;caro', '5': 'Sacerdote', '6': 'Caballero de la Muerte', '7': 'Chamán', '8': 'Mago', '9': 'Brujo', '11': 'Druida' }
			},
			'inventoryType'    : { '1': 'Cabeza', '2': 'Cuello', '3': 'Hombros', '4': 'Camisa', '5': 'Pecho', '6': 'Cintura', '7': 'Piernas', '8': 'Pies', '9': 'Mu&ntilde;equeras', '10': 'Manos', '11': 'Dedo', '12': 'Abalorio', '13': 'Una mano', '15': 'A distancia' /* Bow */, '16': 'Espalda', '17': 'Dos manos', '18': 'Bolsa', '21': 'Mano derecha', '22': 'Mano izquierda', '23': 'Sostener en mano izquierda', '25': 'Arrojadizas' /* Thrown */, '26': 'Arma a distancia' /* Gun,Crossbow,Wand */ }
		}
	}
	
});
