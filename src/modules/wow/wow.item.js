/* **************************************************************************
 * The DarkTip plugin is a javascript based tooltip framework that enables
 * quick and easy development of modules that hook into specific aspects of a
 * webpage and display context sensitive tooltips.
 *
 * Copyright (C) 2014 Martin Gelder
 * (darkspotinthecorner {at} gmail {dot} com)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/gpl.html.
 * ************************************************************************** */

DarkTip.registerModule('wow.item', {

	'triggers': {
		'explicit': {
			'match' : /wow\.item:(us|eu|kr|tw|cn)\.([^\(]+)\((en|de|fr|es|ru|pt|it|ko|zh)\)/i,
			'params': {
				'1': 'region',
				'2': 'itemid',
				'3': 'lang'
			}
		},
		'implicit': {
			'match' : /(?:https?:\/\/)?(us\.battle\.net|eu\.battle\.net|kr\.battle\.net|tw\.battle\.net|cn\.battle\.net|www\.battlenet\.com\.cn)\/wow\/(en|de|fr|es|ru|pt|it|ko|zh)\/item\/([^\/#]+).*/i,
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
			'call'     : '//{host}/api/wow/item/{itemid}?locale={locale}',
			'caching'  : (60 * 60 * 24 * 90)
		},
		'itemclass': {
			'required' : true,
			'condition': true,
			'call'     : '//{host}/api/wow/data/item/classes?locale={locale}',
			'caching'  : (60 * 60 * 24 * 90)
		},
		'itemset': {
			'required' : false,
			'condition': 'item.itemSet',
			'call'     : '//{host}/api/wow/item/set/{condition"]["id}?locale={locale}',
			'caching'  : (60 * 60 * 24 * 90)
		}
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
				'35': 'PvP resilence rating',
				'36': 'Haste rating',
				'37': 'Expertise rating',
				'38': 'Attack power',
				'46': 'Health regeneration',
				'45': 'Spell power',
				'47': 'Spell penetration',
				'49': 'Mastery rating',
				'57': 'PvP power rating'
			}
		}
	},

	'prepareData': function(state) {

		if(Object.keys(state['data']).length === 0)
		{
			return false;
		}

		if(
			(typeof state['data']['item'] !== 'undefined') &&
			(typeof state['data']['item']['itemClass'] !== 'undefined') &&
			(typeof state['data']['item']['itemSubClass'] !== 'undefined') &&
			(typeof state['data']['itemclass'] !== 'undefined') &&
			(typeof state['data']['itemclass']['classes'] !== 'undefined')
		)
		{
			for(var i = 0; i < state['data']['itemclass']['classes'].length; i++)
			{
				var citemclass = state['data']['itemclass']['classes'][i];

				if(citemclass['class'] == state['data']['item']['itemClass'])
				{
					for (var j = 0; j < citemclass['subclasses'].length; j++)
					{
						var citemsubclass = citemclass['subclasses'][j];

						if(citemsubclass['subclass'] == state['data']['item']['itemSubClass'])
						{
							state['data']['item']['itemClassLoc'] = citemsubclass['name'];
						}
					}
				}
			}
		}

		return state['data'];
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
				'<img class="darktip-icon" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/56/<% if(this["item"]["icon"]) { %><%= this["item"]["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg" />' +
				 // --- START simple mode -----------------------------------
				'<div class="darktip-col-70 darktip-only-s">' +
					'<div class="darktip-headline-right"><%= this["item"]["itemLevel"] %></div>' +
					'<div class="darktip-row darktip-headline darktip-cquality-<%= this["item"]["quality"] %>"><%= this["item"]["name"] %></div>' +
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
								'<div class="darktip-pos-right"><%= this["item"]["itemClassLoc"] %></div>' +
							'<% } else { %>' +
								'<%= this["item"]["itemClassLoc"] %>' +
							'<% } %>' +
						'<% } %>' +
					'</div>' +
					'<% if(this["item"]["baseArmor"]) { %><div class="darktip-row"><%= this._loc("baseArmor") %></div><% } %>' +
					'<% if(this["item"]["weaponInfo"]) { %>' +
						'<div>' +
							'<div class="darktip-row"><%= this._loc("damage", this["item"]["weaponInfo"]["damage"]) %></div>' +
							'<div class="darktip-pos-right"><%= this._loc("weaponSpeed", this["item"]["weaponInfo"]) %></div>' +
							'<div class="darktip-row"><%= this._loc("dps", this["item"]["weaponInfo"]) %></div>' +
						'</div>' +
					'<% } %>' +
					'<%= this._subLoop("templates.fragments.stat.primary", this["item"]["bonusStats"]) %>' +
					'<%= this._subLoop("templates.fragments.stat.secondary", this["item"]["bonusStats"]) %>' +
					'<% if(this["item"]["gemInfo"]) { %><div class="darktip-row"><%= this["item"]["gemInfo"]["bonus"]["name"] %></div><% } %>' +
					'<% if(this["item"]["socketInfo"]) { %><div class="darktip-block darktip-sockets"><%= this._subLoop("templates.fragments.socket", this["item"]["socketInfo"]["sockets"]) %></div><% if(this["item"]["socketInfo"]["socketBonus"]) { %><div class="darktip-row darktip-highlight-reduced"><%= this._loc("socketBonus") %></div><% } %><% } %>' +
					'<% if(this["item"]["allowableClasses"]) { %><div class="darktip-row"><%= this._loc("allowableClasses") %></div><% } %>' +
					'<% if(this["item"]["allowableRaces"]) { %><div class="darktip-row"><%= this._loc("allowableRaces") %></div><% } %>' +
					'<% if(this["item"]["requiredLevel"] > 1) { %><div class="darktip-row"><%= this._loc("requiredLevel") %></div><% } %>' +
					'<% if(this["item"]["requiredSkill"]) { %><div class="darktip-row"><%= this._loc("requiredSkill") %></div><% } %>' +
					'<% if(this["item"]["requiredAbility"]) { %><div class="darktip-row"><%= this._loc("requiredAbility") %></div><% } %>' +
					'<% if(this["item"]["minFactionId"]) { %><div class="darktip-row"><%= this._loc("minFactionId") %></div><% } %>' +
					'<%= this._subLoop("templates.fragments.stat.spell", this["item"]["itemSpells"]) %>' +
					'<% if(this["item"]["description"]) { %><div class="darktip-row darktip-highlight-medium">&quot;<%= this["item"]["description"] %>&quot;</div><% } %>' +
					'<% if(this["item"]["itemSet"]) { %><div class="darktip-row darktip-padded-above">' +
						'<div class="darktip-row darktip-highlight-medium"><%= this["item"]["itemSet"]["name"] %></div>' +
						'<div class="darktip-row darktip-padded-above"><%= this._subLoop("templates.fragments.stat.setBonus", this["item"]["itemSet"]["setBonuses"]) %></div>' +
					'</div><% } %>' +
					'<% if(this["_meta"]["extendedActive"]) { %><div class="darktip-row darktip-info-meta"><%= this._loc("extendedInactive") %></div><% } %>' +
				'</div>' +
				// --- END simple mode -------------------------------------
				// --- START extended mode ---------------------------------
				'<% if(this["_meta"]["extendedActive"]) { %>' +
					'<div class="darktip-col-70 darktip-only-x">' +
						'<div class="darktip-headline-right"><%= this["item"]["itemLevel"] %></div>' +
						'<div class="darktip-row darktip-headline darktip-cquality-<%= this["item"]["quality"] %>"><%= this["item"]["name"] %></div>' +
						'<div class="darktip-row darktip-highlight-strong"><%= this._loc("itemId") %></div>' +
						'<% if(this["item"]["maxDurability"]) { %><div class="darktip-row"><%= this._loc("maxDurability") %></div><% } %>' +
						'<% if(this["item"]["isAuctionable"]) { %><div class="darktip-row"><%= this._loc("auctionable") %></div><% } %>' +
						'<div class="darktip-row"><%= this._loc("disenchantable") %></div>' +
						'<% if(this["item"]["stackable"] > 1) { %><div class="darktip-row"><%= this._loc("stackable") %></div><% } %>' +
						'<div class="darktip-row"><%= this._loc("sellPrice") %></div>' +
						'<div class="darktip-row darktip-info-meta"><%= this._loc("extendedActive") %></div>' +
					'</div>' +
				'<% } %>' +
				// --- END extended mode -----------------------------------
			'</div>'
		),
		'404': (
			'<div class="tooltip-item darktip-tooltip-404">' +
				'<div class="darktip-title">404<span class="darktip-sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.item") %></span> <span class="value"><%= this["itemid"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
			'</div>'
		),
		'fragments': {
			'allowableClass': '<span class="darktip-cclass-<%= this["_value"] %>"><%= this._loc("characterClass." + this["_value"] + ".0")%></span>',
			'allowableRace' : '<span class="crace-<%= this["_value"] %>"><%= this._loc("characterRace." + this["_value"] + ".0")%></span>',
			'coins'         : (
				'<% if(this["gold"] > -1) { %><span class="darktip-icon-gold"><%= this["gold"] %></span><% } %>' +
				'<% if(this["silver"] > -1) { %><span class="darktip-icon-silver"><%= this["silver"] %></span><% } %>' +
				'<% if(this["copper"]) { %><span class="darktip-icon-copper"><%= this["copper"] %></span><% } else { %>' +
				'<span class="darktip-icon-copper">0</span><% } %>'
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
						'<div class="darktip-row darktip-highlight-custom">' +
							'<% if(this["amount"] >= 0) { %>+<% } %><%= this["amount"] %> <%= this._loc("itemStat." + this["stat"]) %>' +
						'</div>' +
					'<% }'
				),
				'spell'    : (
					'<% if(this["spell"]["description"]) { %>' +
						'<div class="darktip-row darktip-highlight-custom">' +
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
				'setBonus' : '<div class="darktip-row <% if(this["active"]) { %>darktip-highlight-custom<% } else { %>darktip-highlight-reduced<% } %>"><%= this._loc("setBonus") %></div>'
			},
			'socket': (
				'<div class="darktip-row darktip-socket darktip-highlight-reduced">' +
					'<span class="darktip-icon-socket darktip-socket-<%= this["type"] %>">' +
						'<span class="darktip-empty"></span><span class="darktip-frame"></span>' +
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
			'containerSlots'   : '<%= this["item"]["containerSlots"] %> Slot <%= this["item"]["itemClassLoc"] %>',
			'damage'           : '<%= this["min"] %> - <%= this["max"] %> Damage',
			'weaponSpeed'      : 'Speed <%= this["weaponSpeed"] %>',
			'dps'              : '(<%= this["dps"].toFixed(2) %> damage per second)',
			'baseArmor'        : '<%= this["item"]["baseArmor"] %> Armor',
			'maxDurability'    : 'Durability <%= this["item"]["maxDurability"] %> / <%= this["item"]["maxDurability"] %>',
			'requiredLevel'    : 'Requires Level <%= this["item"]["requiredLevel"] %>',
			'requiredSkill'    : 'Requires <%= this._loc("characterSkill." + this["item"]["requiredSkill"]) %> (<%= this["item"]["requiredSkillRank"] %>)',
			'requiredAbility'  : 'Requires <%= this["item"]["requiredAbility"]["name"] %>',
			'minFactionId'     : 'Requires Faction ID <%= this["item"]["minFactionId"] %> - <%= this._loc("reputationLevel." + this["item"]["minReputation"]) %>',
			'allowableClasses' : 'Classes: <%= this._subLoop("templates.fragments.allowableClass", this["item"]["allowableClasses"], ", ") %>',
			'allowableRaces'   : 'Races: <%= this._subLoop("templates.fragments.allowableRace", this["item"]["allowableRaces"], ", ") %>',
			'itemStat'         : {
				'3' : 'Agility',
				'4' : 'Strength',
				'5' : 'Intellect',
				'6' : 'Spirit',
				'7' : 'Stamina',
				'25': 'Arcane Resistance',
				'26': 'Fire Resistance',
				'27': 'Nature Resistance',
				'28': 'Frost Resistance',
				'29': 'Shadow Resistance',
				'30': 'Holy Resistance',
				'13': 'Dodge',
				'14': 'Parry',
				'31': 'Hit',
				'32': 'Critical Strike',
				'35': 'Pvp Resilience',
				'36': 'Haste',
				'37': 'Expertise',
				'38': 'Attack Power',
				'46': 'Health Regeneration',
				'45': 'Spell Power',
				'49': 'Mastery',
				'50': 'Armor',
				'57': 'Pvp Power'
			},
			'itemSpell'        : {
				'onEquip': 'Equip: <%= this["spell"]["description"] %>',
				'onUse'  : 'Use: <%= this["spell"]["description"] %>',
				'onProc' : 'Chance on hit: <%= this["spell"]["description"] %>',
				'unknown': '<%= this["spell"]["description"] %>'
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
			'inventoryType'   : { '1': 'Head', '2': 'Neck', '3': 'Shoulder', '4': 'Shirt', '5': 'Chest', '6': 'Waist', '7': 'Legs', '8': 'Feet', '9': 'Wrist', '10': 'Hands', '11': 'Finger', '12': 'Trinket', '13': 'One-Hand', '15': 'Ranged' /* Bow */, '16': 'Back', '17': 'Two-Hand', '18': 'Bag', '20': 'Chest', '21': 'Main-hand', '22': 'Off-hand', '23': 'Held in off-hand', '25': 'Ranged' /* Thrown */, '26': 'Ranged' /* Gun, Crossbow, Wand */ }
		},
		'de_DE': {
			'loading'          : 'Lade Gegenstand...',
			'not-found'        : 'Gegenstand nicht gefunden',
			'itemId'           : 'Gegenstands ID: <%= this["item"]["id"] %>',
			'heroic'           : 'Heroisch',
			'maxCount'         : 'Einzigartig<% if(this["item"]["maxCount"] > 1) { %> (<%= this["item"]["maxCount"] %>)<% } %>',
			'containerSlots'   : '<%= this["item"]["containerSlots"] %> Platz <%= this["item"]["itemClassLoc"] %>',
			'damage'           : '<%= this["min"] %> - <%= this["max"] %> Schaden',
			'weaponSpeed'      : 'Geschwindigkeit <%= this["weaponSpeed"] %>',
			'dps'              : '(<%= this["dps"].toFixed(2) %> Schaden pro Sekunde)',
			'baseArmor'        : '<%= this["item"]["baseArmor"] %> R&uuml;stung',
			'maxDurability'    : 'Haltbarkeit <%= this["item"]["maxDurability"] %> / <%= this["item"]["maxDurability"] %>',
			'requiredLevel'    : 'Erfordert Stufe <%= this["item"]["requiredLevel"] %>',
			'requiredSkill'    : 'Erfordert <%= this._loc("characterSkill." + this["item"]["requiredSkill"]) %> (<%= this["item"]["requiredSkillRank"] %>)',
			'requiredAbility'  : 'Erfordert <%= this["item"]["requiredAbility"]["name"] %>',
			'minFactionId'     : 'Erfordert Fraktion ID <%= this["item"]["minFactionId"] %> - <%= this._loc("reputationLevel." + this["item"]["minReputation"]) %>',
			'allowableClasses' : 'Klassen: <%= this._subLoop("templates.fragments.allowableClass", this["item"]["allowableClasses"], ", ") %>',
			'allowableRaces'   : 'Rassen: <%= this._subLoop("templates.fragments.allowableRace", this["item"]["allowableRaces"], ", ") %>',
			'itemStat'         : {
				'3' : 'Beweglichkeit',
				'4' : 'St&auml;rke',
				'5' : 'Intelligenz',
				'6' : 'Willenskraft',
				'7' : 'Ausdauer',
				'25': 'Arkanwiderstand',
				'26': 'Feuerwiderstand',
				'27': 'Naturwiderstand',
				'28': 'Frostwiderstand',
				'29': 'Schattenwiderstand',
				'30': 'Heiligwiderstand',
				'13': 'Ausweichwen',
				'14': 'Parrieren',
				'31': 'Treffer',
				'32': 'Kritische Treffer',
				'35': 'PvP Abh&auml;rtung',
				'36': 'Tempo',
				'37': 'Waffenkunde',
				'38': 'Angriffskraft',
				'46': 'Gesundheitsregenartion',
				'45': 'Zaubermacht',
				'49': 'Meisterschaftswertung',
				'50': 'R&uml;stung',
				'57': 'PvP Macht'
			},
			'itemSpell'        : {
				'onEquip': 'Anlegen: <%= this["spell"]["description"] %>',
				'onUse'  : 'Benutzen: <%= this["spell"]["description"] %>',
				'onProc' : 'Trefferchance: <%= this["spell"]["description"] %>',
				'unknown': '<%= this["spell"]["description"] %>'
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
			'inventoryType'    : { '1': 'Kopf', '2': 'Nacken', '3': 'Schulter', '4': 'Hemd', '5': 'Brust', '6': 'Taille', '7': 'Beine', '8': 'F&uuml;&szlig;e', '9': 'Handgelenke', '10': 'H&auml;nde', '11': 'Finger', '12': 'Schmuckst&uuml;ck', '13': 'Einh&auml;ndig', '15': 'Distanz' /* Bogen */, '16': 'R&uuml;cken', '17': 'Zweih&auml;ndig', '18': 'Tasche', '20': 'Brust', '21': 'Waffenhand', '22': 'Schildhand', '23': 'In Schildhand gef&uuml;hrt', '25': 'Distanz' /* Wurfwaffe */, '26': 'Distanz' /* Gewehr, Armbrust, Zauberstab */ }
		},
		'fr_FR': {
			'loading'          : 'Chargement Objets...',
			'not-found'        : 'Objet introuvable',
			'itemId'           : 'ID Objets: <%= this["item"]["id"] %>',
			'heroic'           : 'H&eacute;roïc',
			'maxCount'         : 'Unique<% if(this["item"]["maxCount"] > 1) { %> (<%= this["item"]["maxCount"] %>)<% } %>',
			'containerSlots'   : '<%= this["item"]["containerSlots"] %> Slot <%= this["item"]["itemClassLoc"] %>',
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
			'itemStat'         : {
				'3' : 'Agilit&eacute;',
				'4' : 'Force',
				'5' : 'Intelligence',
				'6' : 'Esprit',
				'7' : 'Endurance',
				'25': 'Arcane Resistance',
				'26': 'Fire Resistance',
				'27': 'Nature Resistance',
				'28': 'Frost Resistance',
				'29': 'Shadow Resistance',
				'30': 'Holy Resistance',
				'13': 'Score d\'esquive',
				'14': 'Score de parade',
				'31': 'Score de toucher',
				'32': 'Score de coup critique',
				'35': 'Score de pvp resilience',
				'36': 'Score de h&acirc;te',
				'37': 'Score d\'expertise',
				'38': 'Puissance d\'attaque',
				'46': 'R&eacute;g&eacute;n&eacute;ration de vie',
				'45': 'Puissance des sorts',
				'49': 'Score maîtrise',
				'50': 'Armor',
				'57': 'Score de pvp power'
			},
			'itemSpell'        : {
				'onEquip': 'Equip&eacute; : <%= this["spell"]["description"] %>',
				'onUse'  : 'Utilis&eacute; : <%= this["spell"]["description"] %>',
				'onProc' : 'Chances quand vous touchez : <%= this["spell"]["description"] %>',
				'unknown': '<%= this["spell"]["description"] %>'
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
			'socketBonus'      : 'Bonus de sertissage: <%= this["item"]["socketInfo"]["socketBonus"] %>',
			'reputationLevel'  : { '0': 'Haï', '1': 'Hostile', '2': 'Inamical', '3': 'Neutre', '4': 'Amical', '5': 'Honor&eacute;', '6': 'R&eacute;v&eacute;r&eacute;', '7': 'Exalt&eacute;' },
			'inventoryType'   : { '1': 'T&ecirc;te', '2': 'Cou', '3': 'Epaule', '4': 'Chemise', '5': 'Torse', '6': 'Taille', '7': 'Jambes', '8': 'Pieds', '9': 'Poignets', '10': 'Mains', '11': 'Doigt', '12': 'Bijou', '13': 'A une mains', '15': 'Ranged' /* Bow */, '16': 'Back', '17': 'A deux mains', '18': 'Sac', '20': 'Torse', '21': 'Main-hand', '22': 'Off-hand', '23': 'Held in off-hand', '25': 'Ranged' /* Thrown */, '26': 'Ranged' /* Gun, Crossbow, Wand */ }
		},
		'es_ES': {
			'loading'          : 'Cargando objeto...',
			'not-found'        : 'Objeto no encontrado',
			'itemId'           : 'ID de Objeto: <%= this["item"]["id"] %>',
			'heroic'           : 'Heroico',
			'maxCount'         : '&Uacute;nico<% if(this["item"]["maxCount"] > 1) { %> (<%= this["item"]["maxCount"] %>)<% } %>',
			'containerSlots'   : '<%= this["item"]["itemClassLoc"] %> con <%= this["item"]["containerSlots"] %> Casillas',
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
			'itemStat'         : {
				'3' : 'de agilidad',
				'4' : 'de fuerza',
				'5' : 'de intelecto',
				'6' : 'de esp&iacute;ritu',
				'7' : 'de aguante',
				'25': 'Arcane Resistance',
				'26': 'Fire Resistance',
				'27': 'Nature Resistance',
				'28': 'Frost Resistance',
				'29': 'Shadow Resistance',
				'30': 'Holy Resistance',
				'13': 'de esquivar',
				'14': 'de parada',
				'31': 'de golpe',
				'32': 'de golpe cr&iacute;tico',
				'35': 'de pvp temple',
				'36': 'de celeridad',
				'37': 'de pericia',
				'38': 'poder de ataque',
				'46': 'regeneraci&oacute;n de salud',
				'45': 'poder con hechizos',
				'49': '&iacute;ndice de maestr&iacute;a',
				'50': 'Armor',
				'57': 'de pvp power'
			},
			'itemSpell'        : {
				'onEquip': 'Equipar: <%= this["spell"]["description"] %>',
				'onUse'  : 'Uso: <%= this["spell"]["description"] %>',
				'onProc' : 'Probabilidad al acertar: <%= this["spell"]["description"] %>',
				'unknown': '<%= this["spell"]["description"] %>'
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
			'inventoryType'    : { '1': 'Cabeza', '2': 'Cuello', '3': 'Hombros', '4': 'Camisa', '5': 'Pecho', '6': 'Cintura', '7': 'Piernas', '8': 'Pies', '9': 'Mu&ntilde;equeras', '10': 'Manos', '11': 'Dedo', '12': 'Abalorio', '13': 'Una mano', '15': 'A distancia' /* Bow */, '16': 'Espalda', '17': 'Dos manos', '18': 'Bolsa', '20': 'Pecho', '21': 'Mano derecha', '22': 'Mano izquierda', '23': 'Sostener en mano izquierda', '25': 'Arrojadizas' /* Thrown */, '26': 'Arma a distancia' /* Gun,Crossbow,Wand */ }
		},
		'it_IT': {
			'loading'          : 'Carico oggetto...',
			'not-found'        : 'Oggetto non trovato',
			'itemId'           : 'ID Oggetto: <%= this["item"]["id"] %>',
			'heroic'           : 'Eeroico',
			'maxCount'         : 'Unico equipaggiabile <% if(this["item"]["maxCount"] > 1) { %> (<%= this["item"]["maxCount"] %>)<% } %>',
			'containerSlots'   : '<%= this["item"]["containerSlots"] %> Scomparto <%= this["item"]["itemClassLoc"] %>',
			'damage'           : '<%= this["min"] %> - <%= this["max"] %> Danni',
			'weaponSpeed'      : 'Velocità <%= this["weaponSpeed"] %>',
			'dps'              : '(<%= this["dps"].toFixed(2) %> danni al secondo)',
			'baseArmor'        : '<%= this["item"]["baseArmor"] %> Armatura',
			'maxDurability'    : 'Integrità <%= this["item"]["maxDurability"] %> / <%= this["item"]["maxDurability"] %>',
			'requiredLevel'    : 'Richiede il livello <%= this["item"]["requiredLevel"] %>',
			'requiredSkill'    : 'Richiede <%= this._loc("characterSkill." + this["item"]["requiredSkill"]) %> (<%= this["item"]["requiredSkillRank"] %>)',
			'requiredAbility'  : 'Richiede <%= this["item"]["requiredAbility"]["name"] %>',
			'minFactionId'     : 'Richiede la Fazione <%= this["item"]["minFactionId"] %> - <%= this._loc("reputationLevel." + this["item"]["minReputation"]) %>',
			'allowableClasses' : 'Classi: <%= this._subLoop("templates.fragments.allowableClass", this["item"]["allowableClasses"], ", ") %>',
			'allowableRaces'   : 'Razze: <%= this._subLoop("templates.fragments.allowableRace", this["item"]["allowableRaces"], ", ") %>',
			'itemStat'         : {
				'3' : 'Agilià',
				'4' : 'Forza',
				'5' : 'Intelletto',
				'6' : 'Spirito',
				'7' : 'Tempra',
				'25': 'Resistenza all\'Arcano',
				'26': 'Resistenza al Fuoco',
				'27': 'Resistenza alla Natura',
				'28': 'Resistenza al gelo',
				'29': 'Resistenza all\'Ombra',
				'30': 'Resistenza al Sacro',
				'13': 'Schivata',
				'14': 'Parata',
				'31': 'Impatto',
				'32': 'Indice di Critico',
				'35': 'Resilienza PvP',
				'36': 'Celerità',
				'37': 'Perizia',
				'38': 'Indice di Attacco',
				'46': 'Rigenerazione Salute',
				'45': 'Potenza Magica',
				'49': 'Maestria',
				'50': 'Armatura',
				'57': 'Potenza PvP'
			},
			'itemSpell'        : {
				'onEquip': 'Equipaggia: <%= this["spell"]["description"] %>',
				'onUse'  : 'Usa: <%= this["spell"]["description"] %>',
				'onProc' : 'Probabilità all\'impatto: <%= this["spell"]["description"] %>',
				'unknown': '<%= this["spell"]["description"] %>'
			},
			'setBonus'         : '(<%= this["threshold"] %>) Completo: <%= this["description"] %>',
			'sellPrice'        : 'Costo: <%= this._renderCoins(this["item"]["sellPrice"]) %>',
			'stackable'        : 'Impilabile (<%= this["item"]["stackable"] %>)',
			'disenchantable'   : '<% if(this["item"]["disenchantingSkillRank"]) { %>Può essere disincantato (<%= this["item"]["disenchantingSkillRank"] %>)<% } else { %>Non può essere disincantato<% } %>',
			'auctionable'      : 'Può essere venduto all\'asta',
			'itemBind'         : { '1': 'Vincola alla raccolta', '2': 'Vincola all\'equipaggiamento', '3': 'Vincola all\'uso', '4': 'Vincola all\'account Battle.net' },
			'itemSocket'       : {
				'BLUE'     : 'Incavo Blu',
				'RED'      : 'Incavo Rosso',
				'YELLOW'   : 'Incavo Giallo',
				'META'     : 'Incavo Meta',
				'ORANGE'   : 'Incavo Arancione',
				'PURPLE'   : 'Incavo Viola',
				'GREEN'    : 'Incavo Verde',
				'PRISMATIC': 'Incavo Prismatico',
				'HYDRAULIC': 'Incavo Idraulico',
				'COGWHEEL' : 'Incavo Ingranaggio'
			},
			'socketBonus'      : 'Bonus incavo: <%= this["item"]["socketInfo"]["socketBonus"] %>',
			'reputationLevel'  : { '0': 'Odiato', '1': 'Ostile', '2': 'Avverso', '3': 'Neutrale', '4': 'Amichevole', '5': 'Onorato', '6': 'Reverito', '7': 'Osannato' },
			'inventoryType'   : { '1': 'Testa', '2': 'Collo', '3': 'Spalle', '4': 'Camicia', '5': 'Torso', '6': 'Fianchi', '7': 'Gambe', '8': 'Piedi', '9': 'Polsi', '10': 'Mani', '11': 'Dita', '12': 'Monile', '13': 'A una Mano', '15': 'A Distanza' /* Bow */, '16': 'Schiena', '17': 'A due mani', '18': 'Borsa', '20': 'Torso', '21': 'Mano primaria', '22': 'Mano secondaria', '23': 'Accessorio', '25': 'Da Tiro' /* Thrown */, '26': 'A distanza' /* Gun, Crossbow, Wand */ }
		}
	}

});
