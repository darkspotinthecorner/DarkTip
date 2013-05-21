/* **************************************************************************
 * The DarkTip plugin is a javascript based tooltip framework that enables
 * quick and easy development of modules that hook into specific aspects of a
 * webpage and display context sensitive tooltips.
 *
 * Copyright (C) 2012  Martin Gelder
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

DarkTip.registerModule('wow.item.equipped', {

	'triggers': {
		'explicit': {
			'match' : /wow\.item\.equipped:(us|eu|kr|tw|cn)\.([^\.]+)\.([^\.]+)\.(head|neck|shoulder|back|chest|shirt|tabard|wrist|hands|waist|legs|feet|finger1|finger2|trinket1|trinket2|mainhand|offhand)\((en|de|fr|es|ru|pt|it|ko|zh)\)/i,
			'params': {
				'1': 'region',
				'2': 'realm',
				'3': 'character',
				'4': 'slot',
				'5': 'lang'
			}
		}
	},

	'queries': {
		'character': {
			'required' : true,
			'condition': true,
			'call'     : '//<%= this["host"] %>/api/wow/character/<%= this["realm"] %>/<%= this["character"] %>?fields=items&locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 1)
		},
		'item': {
			'required' : true,
			'condition': 'character.items.<%= DarkTip.map("wow.item.equipped", "maps.slot", this["slot"].toLowerCase()) %>',
			'call'     : '//<%= this["host"] %>/api/wow/item/<%= this["condition"]["id"] %>?locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 90)
		},
		'itemclass': {
			'required' : true,
			'condition': 'character.items.<%= DarkTip.map("wow.item.equipped", "maps.slot", this["slot"].toLowerCase()) %>',
			'call'     : '//<%= this["host"] %>/api/wow/data/item/classes?locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 90)
		},
		'itemset': {
			'required' : false,
			'condition': 'item.itemSet',
			'call'     : '//<%= this["host"] %>/api/wow/item/set/<%= this["condition"]["id"] %>?locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 90)
		},
		'gem0': {
			'required' : false,
			'condition': 'character.items.<%= DarkTip.map("wow.item.equipped", "maps.slot", this["slot"].toLowerCase()) %>.tooltipParams.gem0',
			'call'     : '//<%= this["host"] %>/api/wow/item/<%= this["condition"] %>?locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 90)
		},
		'gem1': {
			'required' : false,
			'condition': 'character.items.<%= DarkTip.map("wow.item.equipped", "maps.slot", this["slot"].toLowerCase()) %>.tooltipParams.gem1',
			'call'   : '//<%= this["host"] %>/api/wow/item/<%= this["condition"] %>?locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 90)
		},
		'gem2': {
			'required' : false,
			'condition': 'character.items.<%= DarkTip.map("wow.item.equipped", "maps.slot", this["slot"].toLowerCase()) %>.tooltipParams.gem2',
			'call'     : '//<%= this["host"] %>/api/wow/item/<%= this["condition"] %>?locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 90)
		},
		'transmog': {
			'required' : false,
			'condition': 'character.items.<%= DarkTip.map("wow.item.equipped", "maps.slot", this["slot"].toLowerCase()) %>.tooltipParams.transmogItem',
			'call'     : '//<%= this["host"] %>/api/wow/item/<%= this["condition"] %>?locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 90)
		}
		/*
		'enchant': {
			'required' : false,
			'condition': 'character.items.<%= DarkTip.map("wow.item.equipped", "maps.slot", this["slot"].toLowerCase()) %>.tooltipParams.enchant',
			'call'     : '//<%= this["host"] %>/api/wow/spell/<%= this["condition"] %>?locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 90)
		},
		'reforge': {
			'required' : false,
			'condition': 'character.items.<%= DarkTip.map("wow.item.equipped", "maps.slot", this["slot"].toLowerCase()) %>.tooltipParams.reforge',
			'call'     : '//<%= this["host"] %>/api/wow/reforge/<%= this["condition"] %>?locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 90)
		}
		// */
	},

	'maps': {
		'slot': {
			'head'    : 'head',
			'neck'    : 'neck',
			'shoulder': 'shoulder',
			'back'    : 'back',
			'chest'   : 'chest',
			'shirt'   : 'shirt',
			'tabard'  : 'tabard',
			'wrist'   : 'wrist',
			'hands'   : 'hands',
			'waist'   : 'waist',
			'legs'    : 'legs',
			'feet'    : 'feet',
			'finger1' : 'finger1',
			'finger2' : 'finger2',
			'trinket1': 'trinket1',
			'trinket2': 'trinket2',
			'mainhand': 'mainHand',
			'offhand' : 'offHand'
		},
		'match': {
			'socket2gem':{
				'META'    : [ 'META' ],
				'RED'     : [ 'PRISMATIC', 'RED',    'PURPLE', 'ORANGE' ],
				'BLUE'    : [ 'PRISMATIC', 'BLUE',   'PURPLE', 'GREEN' ],
				'YELLOW'  : [ 'PRISMATIC', 'YELLOW', 'ORANGE', 'GREEN' ],
				'COGWHEEL': [ 'COGWHEEL' ]
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

		var slot = DarkTip.map("wow.item.equipped", "maps.slot", state['repo']['params']['slot'].toLowerCase());

		// check for socket bonus
		if((typeof state['data']['item'] !== 'undefined') && (typeof state['data']['item']['socketInfo'] !== 'undefined') && (typeof state['data']['item']['socketInfo']['socketBonus'] !== 'undefined'))
		{
			state['data']['item']['socketInfo']['mismatchedGems'] = state['data']['item']['socketInfo']['sockets'].length;

			for(var i = 0; i < state['data']['item']['socketInfo']['sockets'].length; i++)
			{
				var gemkey = 'gem' + i;

				if(typeof state['data'][gemkey] !== 'undefined')
				{
					var matchinggems = DarkTip.map("wow.item.equipped", "maps.match.socket2gem", state['data']['item']['socketInfo']['sockets'][i]['type']);

					if(typeof matchinggems !== 'undefined')
					{
						if(DarkTip.jq.inArray(state['data'][gemkey]['gemInfo']['type']['type'], matchinggems) !== -1)
						{
							state['data']['item']['socketInfo']['mismatchedGems'] = state['data']['item']['socketInfo']['mismatchedGems'] - 1;
						}
					}
				}
			}
		}

		if(DarkTip.compareRule(state['data'], ('character.items.'+slot+'.tooltipParams.extraSocket')))
		{
			if(typeof state['data']['item']['socketInfo'] === 'undefined')
			{
				state['data']['item']['socketInfo'] = { 'sockets': [ { 'type': 'PRISMATIC' } ] };
			}
			else
			{
				state['data']['item']['socketInfo']['sockets'].push({ 'type': 'PRISMATIC' });
			}
		}

		if(typeof state['data']['gem0'] !== 'undefined') state['data']['item']['socketInfo']['sockets'][0]['item'] = state['data']['gem0'];
		if(typeof state['data']['gem1'] !== 'undefined') state['data']['item']['socketInfo']['sockets'][1]['item'] = state['data']['gem1'];
		if(typeof state['data']['gem2'] !== 'undefined') state['data']['item']['socketInfo']['sockets'][2]['item'] = state['data']['gem2'];

		var itemLevelOverride = DarkTip.compareRule(state['data'], ('character.items.'+slot+'.itemLevel'));

		if(itemLevelOverride)
		{
			state['data']['item']['itemLevel'] = itemLevelOverride;
		}

		var statsOverride = DarkTip.compareRule(state['data'], ('character.items.'+slot+'.stats'));

		if(statsOverride && (statsOverride.length > 0))
		{
			state['data']['item']['bonusStats'] = statsOverride;
		}

		var upgradeInfo = DarkTip.compareRule(state['data'], ('character.items.'+slot+'.tooltipParams.upgrade'));

		if(upgradeInfo)
		{
			state['data']['item']['upgradeInfo'] = upgradeInfo;
		}

		var reforgeid = DarkTip.compareRule(state['data'], ('character.items.'+slot+'.tooltipParams.reforge'));

		if(reforgeid)
		{
			var index_source  = -1;
			var index_target  = -1;
			var reforgeamount = 0;

			for(var i = 0; i < state['data']['item']['bonusStats'].length; i++)
			{
				if(typeof state['data']['item']['bonusStats'][i]['reforgedAmount'] !== 'undefined')
				{
					index_source  = i;
					reforgeamount = Math.abs(state['data']['item']['bonusStats'][i]['reforgedAmount']);
				}

				if(typeof state['data']['item']['bonusStats'][i]['reforged'] !== 'undefined')
				{
					index_target = i;
				};
			}

			if(index_source >= 0)
			{
				state['data']['item']['reforge'] = {
					'source': state['data']['item']['bonusStats'][index_source]['stat'],
					'target': state['data']['item']['bonusStats'][index_target]['stat'],
					'amount': reforgeamount
				}
			}
		}

		if(DarkTip.compareRule(state['data'], ('character.items.'+slot+'.tooltipParams.set')))
		{
			var set_equipped = state['data']['character']['items'][slot]['tooltipParams']['set'];

			if(typeof state['data']['item']['itemSet'] !== 'undefined')
			{
				state['data']['item']['itemSet']['equipped'] = set_equipped.length;

				for(var i = 0; i < state['data']['item']['itemSet']['setBonuses'].length; i++)
				{
					if(state['data']['item']['itemSet']['equipped'] >= state['data']['item']['itemSet']['setBonuses'][i]['threshold'])
					{
						state['data']['item']['itemSet']['setBonuses'][i]['active'] = true;
					}
				}
			}
		}

		return state['data'];
	},

	'getParams': {
		'explicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.item.equipped', 'triggers.explicit.params')));
			params['host']   = DarkTip.map('wow', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		}
	},

	'templates': {
		'core': (
			'<div class="tooltip-item">' +
				'<img class="icon" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/56/<% if(this["item"]["icon"]) { %><%= this["item"]["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg" />' +
				 // --- START simple mode -----------------------------------
				'<div class="col-70 darktip-only-s">' +
					'<div class="headline-right"><%= this["item"]["itemLevel"] %></div>' +
					'<div class="darktip-row headline cquality-<%= this["item"]["quality"] %>"><%= this["item"]["name"] %></div>' +
					'<% if(this["item"]["upgradeInfo"]) { %><div class="darktip-row highlight-medium"><%= this._loc("upgradeInfo") %></div><% } %>' +
					'<% if(this["transmog"]) { %><div class="darktip-row highlight-transmog"><%= this._loc("transmogged") %></div><% } %>' +
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
								'<div class="pos-right"><%= this["item"]["itemClassLoc"] %></div>' +
							'<% } else { %>' +
								'<%= this["item"]["itemClassLoc"] %>' +
							'<% } %>' +
						'<% } %>' +
					'</div>' +
					'<% if(this["item"]["reforge"]) { %><div class="darktip-row highlight-custom"><%= this._loc("reforged") %></div><% } %>' +
					'<% if(this["item"]["baseArmor"]) { %><div class="darktip-row"><%= this._loc("baseArmor") %></div><% } %>' +
					'<% if(this["item"]["weaponInfo"]) { %>' +
						'<div>' +
							'<div class="darktip-row"><%= this._loc("damage", this["item"]["weaponInfo"]["damage"]) %></div>' +
							'<div class="pos-right"><%= this._loc("weaponSpeed", this["item"]["weaponInfo"]) %></div>' +
							'<div class="darktip-row"><%= this._loc("dps", this["item"]["weaponInfo"]) %></div>' +
						'</div>' +
					'<% } %>' +
					'<%= this._subLoop("templates.fragments.stat.primary", this["item"]["bonusStats"]) %>' +
					'<%= this._subLoop("templates.fragments.stat.secondary", this["item"]["bonusStats"]) %>' +
					'<% if(this["item"]["gemInfo"]) { %><div class="darktip-row"><%= this["item"]["gemInfo"]["bonus"]["name"] %></div><% } %>' +
					'<% if(this["item"]["socketInfo"]) { %><div class="block sockets"><%= this._subLoop("templates.fragments.socket", this["item"]["socketInfo"]["sockets"]) %></div><% if(this["item"]["socketInfo"]["socketBonus"]) { %><div class="darktip-row <% if(this["item"]["socketInfo"]["mismatchedGems"] == 0) { %>highlight-custom<% } else { %>highlight-reduced<% } %>"><%= this._loc("socketBonus") %></div><% } %><% } %>' +
					'<% if(this["item"]["allowableClasses"]) { %><div class="darktip-row"><%= this._loc("allowableClasses") %></div><% } %>' +
					'<% if(this["item"]["allowableRaces"]) { %><div class="darktip-row"><%= this._loc("allowableRaces") %></div><% } %>' +
					'<% if(this["item"]["requiredLevel"]) { %><div class="darktip-row"><%= this._loc("requiredLevel") %></div><% } %>' +
					'<% if(this["item"]["requiredSkill"]) { %><div class="darktip-row"><%= this._loc("requiredSkill") %></div><% } %>' +
					'<% if(this["item"]["requiredAbility"]) { %><div class="darktip-row"><%= this._loc("requiredAbility") %></div><% } %>' +
					'<% if(this["item"]["minFactionId"]) { %><div class="darktip-row"><%= this._loc("minFactionId") %></div><% } %>' +
					'<%= this._subLoop("templates.fragments.stat.spell", this["item"]["itemSpells"]) %>' +
					'<% if(this["item"]["description"]) { %><div class="darktip-row highlight-medium">&quot;<%= this["item"]["description"] %>&quot;</div><% } %>' +
					'<% if(this["item"]["itemSet"]) { %><div class="darktip-row padded-above">' +
						'<div class="darktip-row highlight-medium"><%= this["item"]["itemSet"]["name"] %> (<%= this["item"]["itemSet"]["equipped"] %>/<%= this["itemset"]["items"].length %>)</div>' +
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
						'<div class="darktip-row padded-below ownerInfo"><%= this._loc("wornBy") %></div>' +
						'<% if(this["character"]["items"]) { %><%= this._sub("templates.fragments.iLevelDiff") %><% } %>' +
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
				'<div class="darktip-row"><span class="label"><%= this._loc("label.slot") %></span> <span class="value"><%= this["slot"] %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.character") %></span> <span class="value"><%= this["character"] %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.realm") %></span> <span class="value"><%= this["realm"] %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
			'</div>'
		),
		'fragments': {
			'ownerInfo': (
				'<img class="icon-18x18" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/race_<%= this["character"]["race"] %>_<%= this["character"]["gender"] %>.jpg" /> ' +
				'<img class="icon-18x18" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/class_<%= this["character"]["class"] %>.jpg" /> ' +
				'<span class="cclass-<%= this["character"]["class"] %>"><%= this["character"]["name"] %></span> <span class="sub highlight-reduced">(<%= this["character"]["level"] %>)</span> ' +
				'@ <span><%= this["character"]["realm"] %></span>'
			),
			'iLevelDiff': (
				'<% this["item"]["iLevelDiff"] = (this["item"]["itemLevel"] - this["character"]["items"]["averageItemLevelEquipped"]); %>' +
				'<% if(this["item"]["iLevelDiff"] < -19) { %>' +
					'<div class="darktip-row darktip-ilvl-2low"><%= this._loc("iLevelDiff.verylow") %></div>' +
				'<% } else if(this["item"]["iLevelDiff"] < 0) { %>' +
					'<div class="darktip-row darktip-ilvl-low"><%= this._loc("iLevelDiff.lower") %></div>' +
				'<% } else if(this["item"]["iLevelDiff"] == 0) { %>' +
					'<div class="darktip-row darktip-ilvl-match"><%= this._loc("iLevelDiff.match") %></div>' +
				'<% } else if(this["item"]["iLevelDiff"] < 20) { %>' +
					'<div class="darktip-row darktip-ilvl-high"><%= this._loc("iLevelDiff.higher") %></div>' +
				'<% } else { %>' +
					'<div class="darktip-row darktip-ilvl-2high"><%= this._loc("iLevelDiff.veryhigh") %></div>' +
				'<% } %>'
			),
			'socket': (
				'<% if(this["item"]) { %>' +
					'<div class="darktip-row socket">' +
						'<span class="icon-socket socket-<%= this["type"] %>">' +
							'<span class="gem"><img class="icon" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/56/<% if(this["item"]["icon"]) { %><%= this["item"]["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg" /></span><span class="frame"></span>' +
						'</span>' +
						'<%= this["item"]["gemInfo"]["bonus"]["name"] %>' +
					'</div>' +
				'<% } else { %>' +
					'<div class="darktip-row socket highlight-reduced">' +
						'<span class="icon-socket socket-<%= this["type"] %>">' +
							'<span class="empty"></span><span class="frame"></span>' +
						'</span>' +
						'<%= this._loc("itemSocket." + this["type"]) %>' +
					'</div>' +
				'<% } %>'
			)
		}
	},

	'i18n': {
		'en_US': {
			'loading'    : 'Loading item...',
			'not-found'  : 'Item not found',
			'upgradeInfo': 'Upgrade Level: <%= this["item"]["upgradeInfo"]["current"] %>/<%= this["item"]["upgradeInfo"]["total"] %>',
			'transmogged': 'Transmogrified to: <%= this["transmog"]["name"] %>',
			'reforged'   : 'Reforged (<%= this["item"]["reforge"]["amount"] %> <%= this._loc("itemStat." + this["item"]["reforge"]["source"]) %> → <%= this["item"]["reforge"]["amount"] %> <%= this._loc("itemStat." + this["item"]["reforge"]["target"]) %>)',
			'wornBy'     : 'Worn by: <%= this._sub("templates.fragments.ownerInfo") %>',
			'iLevelDiff' : {
				'verylow' : 'This item is much below it\'s owner\'s average item level. (<%= Math.abs(this["item"]["iLevelDiff"]) %> item level<% if(Math.abs(this["item"]["iLevelDiff"]) != 1) { %>s<% } %> below)',
				'lower'   : 'This item is slightly below it\'s owner\'s average item level. (<%= Math.abs(this["item"]["iLevelDiff"]) %> item level<% if(Math.abs(this["item"]["iLevelDiff"]) != 1) { %>s<% } %> below)',
				'match'   : 'This item matches it\'s owner\'s average item level.',
				'higher'  : 'This item is slightly above it\'s owner\'s average item level. (<%= Math.abs(this["item"]["iLevelDiff"]) %> item level<% if(Math.abs(this["item"]["iLevelDiff"]) != 1) { %>s<% } %> above)',
				'veryhigh': 'This item is much above it\'s owner\'s average item level. (<%= Math.abs(this["item"]["iLevelDiff"]) %> item level<% if(Math.abs(this["item"]["iLevelDiff"]) != 1) { %>s<% } %> above)'
			}
		},
		'de_DE': {
			'loading'    : 'Lade Gegenstand...',
			'not-found'  : 'Gegenstand nicht gefunden',
			'upgradeInfo': 'Aufwertungsgrad: <%= this["item"]["upgradeInfo"]["current"] %>/<%= this["item"]["upgradeInfo"]["total"] %>',
			'transmogged': 'Transmogrifiziert zu: <%= this["transmog"]["name"] %>',
			'reforged'   : 'Umgeschmiedet (<%= this["item"]["reforge"]["amount"] %> <%= this._loc("itemStat." + this["item"]["reforge"]["source"]) %> → <%= this["item"]["reforge"]["amount"] %> <%= this._loc("itemStat." + this["item"]["reforge"]["target"]) %>)',
			'wornBy'     : 'Getragen von: <%= this._sub("templates.fragments.ownerInfo") %>',
			'iLevelDiff' : {
				'verylow' : 'Dieser Gegenstand ist deutlich unterhalb der durchschnittlichen Gegenstandsstufe seines Besitzers. (<%= Math.abs(this["item"]["iLevelDiff"]) %> Gegenstandsstufe<% if(Math.abs(this["item"]["iLevelDiff"]) != 1) { %>n<% } %> unterhalb)',
				'lower'   : 'Dieser Gegenstand ist unterhalb der durchschnittlichen Gegenstandsstufe seines Besitzers. (<%= Math.abs(this["item"]["iLevelDiff"]) %> Gegenstandsstufe<% if(Math.abs(this["item"]["iLevelDiff"]) != 1) { %>n<% } %> unterhalb)',
				'match'   : 'Dieser Gegenstand entspricht der durchschnittlichen Gegenstandsstufe seines Besitzers.',
				'higher'  : 'Dieser Gegenstand ist oberhalb der durchschnittlichen Gegenstandsstufe seines Besitzers. (<%= Math.abs(this["item"]["iLevelDiff"]) %> Gegenstandsstufe<% if(Math.abs(this["item"]["iLevelDiff"]) != 1) { %>n<% } %> oberhalb)',
				'veryhigh': 'Dieser Gegenstand ist deutlich oberhalb der durchschnittlichen Gegenstandsstufe seines Besitzers. (<%= Math.abs(this["item"]["iLevelDiff"]) %> Gegenstandsstufe<% if(Math.abs(this["item"]["iLevelDiff"]) != 1) { %>n<% } %> oberhalb)'
			}
		},
		'fr_FR': {
			'loading'    : 'Chargement Objets...',
			'not-found'  : 'Objet introuvable',
			'upgradeInfo': 'Niveau d\'am&eacute;lioration: <%= this["item"]["upgradeInfo"]["current"] %>/<%= this["item"]["upgradeInfo"]["total"] %>',
			'transmogged': 'Transmogrifi&eacute;(e) en : <%= this["transmog"]["name"] %>',
			'reforged'   : 'Reforged (<%= this["item"]["reforge"]["amount"] %> <%= this._loc("itemStat." + this["item"]["reforge"]["source"]) %> → <%= this["item"]["reforge"]["amount"] %> <%= this._loc("itemStat." + this["item"]["reforge"]["target"]) %>)',
			'wornBy'     : 'Porté par: <%= this._sub("templates.fragments.ownerInfo") %>',
			'iLevelDiff' : {
				'verylow' : 'This item is much below it\'s owner\'s average item level. (<%= Math.abs(this["item"]["iLevelDiff"]) %> item level<% if(Math.abs(this["item"]["iLevelDiff"]) != 1) { %>s<% } %> below)',
				'lower'   : 'Cet objet est légèrement inférieur au niveau d\'objet moyen du personnage. (<%= Math.abs(this["item"]["iLevelDiff"]) %> point<% if(Math.abs(this["item"]["iLevelDiff"]) != 1) { %>s<% } %> en-dessous)',
				'match'   : 'This item matches it\'s owner\'s average item level.',
				'higher'  : 'This item is slightly above it\'s owner\'s average item level. (<%= Math.abs(this["item"]["iLevelDiff"]) %> item level<% if(Math.abs(this["item"]["iLevelDiff"]) != 1) { %>s<% } %> above)',
				'veryhigh': 'This item is much above it\'s owner\'s average item level. (<%= Math.abs(this["item"]["iLevelDiff"]) %> item level<% if(Math.abs(this["item"]["iLevelDiff"]) != 1) { %>s<% } %> above)'
			}
		},
		'es_ES': {
			'loading'    : 'Cargando objeto...',
			'not-found'  : 'Objeto no encontrado',
			'upgradeInfo': 'Mejorar al nivel: <%= this["item"]["upgradeInfo"]["current"] %>/<%= this["item"]["upgradeInfo"]["total"] %>',
			'transmogged': 'Transfigurado a: <%= this["transmog"]["name"] %>',
			'reforged'   : 'Reforged (<%= this["item"]["reforge"]["amount"] %> <%= this._loc("itemStat." + this["item"]["reforge"]["source"]) %> → <%= this["item"]["reforge"]["amount"] %> <%= this._loc("itemStat." + this["item"]["reforge"]["target"]) %>)'
		}
	}

});
