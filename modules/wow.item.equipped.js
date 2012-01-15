DarkTip.registerModule('wow.item.equipped', {
	
	'triggers': {
		'explicit': {
			'match' : /item\-equipped:(us|eu|kr|tw|cn)\.([^\.]+)\.([^\.]+)\.(head|neck|shoulder|back|chest|shirt|tabard|wrist|hands|waist|legs|feet|finger1|finger2|trinket1|trinket2|mainhand|offhand|ranged)\((en|de|fr|es|ru|ko|zh)\)/i,
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
			'call'     : 'http://<%= this["host"] %>/api/wow/character/<%= this["realm"] %>/<%= this["character"] %>?fields=items&locale=<%= this["locale"] %>'
		},
		'item': {
			'required' : true,
			'condition': 'character.items.<%= DarkTip.map("wow.item.equipped", "maps.slot", this["slot"].toLowerCase()) %>',
			'call'     : 'http://<%= this["host"] %>/api/wow/item/<%= this["condition"]["id"] %>?locale=<%= this["locale"] %>'
		},
		'gem0': {
			'required' : false,
			'condition': 'character.items.<%= DarkTip.map("wow.item.equipped", "maps.slot", this["slot"].toLowerCase()) %>.tooltipParams.gem0',
			'call'    : 'http://<%= this["host"] %>/api/wow/item/<%= this["condition"] %>?locale=<%= this["locale"] %>'
		},
		'gem1': {
			'required' : false,
			'condition': 'character.items.<%= DarkTip.map("wow.item.equipped", "maps.slot", this["slot"].toLowerCase()) %>.tooltipParams.gem1',
			'call'   : 'http://<%= this["host"] %>/api/wow/item/<%= this["condition"] %>?locale=<%= this["locale"] %>'
		},
		'gem2': {
			'required' : false,
			'condition': 'character.items.<%= DarkTip.map("wow.item.equipped", "maps.slot", this["slot"].toLowerCase()) %>.tooltipParams.gem2',
			'call'   : 'http://<%= this["host"] %>/api/wow/item/<%= this["condition"] %>?locale=<%= this["locale"] %>'
		},
		'transmog': {
			'required' : false,
			'condition': 'character.items.<%= DarkTip.map("wow.item.equipped", "maps.slot", this["slot"].toLowerCase()) %>.tooltipParams.transmogItem',
			'call'   : 'http://<%= this["host"] %>/api/wow/item/<%= this["condition"] %>?locale=<%= this["locale"] %>'
		}
		/*
		'enchant': {
			'required' : false,
			'condition': 'character.items.<%= DarkTip.map("wow.item.equipped", "maps.slot", this["slot"].toLowerCase()) %>.tooltipParams.enchant',
			'call'   : 'http://<%= this["host"] %>/api/wow/spell/<%= this["condition"] %>?locale=<%= this["locale"] %>'
		},
		'reforge': {
			'required' : false,
			'condition': 'character.items.<%= DarkTip.map("wow.item.equipped", "maps.slot", this["slot"].toLowerCase()) %>.tooltipParams.reforge',
			'call'   : 'http://<%= this["host"] %>/api/wow/reforge/<%= this["condition"] %>?locale=<%= this["locale"] %>'
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
			'offhand' : 'offHand',
			'ranged'  : 'ranged'
		},
		'reforge': {
			'113': { 'source': 6,  'target': 13 }, // Spiri => Dodge Rating
			'114': { 'source': 6,  'target': 14 }, // Spirit => Parry Rating
			'115': { 'source': 6,  'target': 31 }, // Spirit => Hit Rating
			'116': { 'source': 6,  'target': 32 }, // Spirit => Crit Rating
			'117': { 'source': 6,  'target': 36 }, // Spirit => Haste Rating
			'118': { 'source': 6,  'target': 37 }, // Spirit => Expertise Rating
			'119': { 'source': 6,  'target': 49 }, // Spirit => Mastery
			'120': { 'source': 13, 'target': 6  }, // Dodge Rating => Spirit
			'121': { 'source': 13, 'target': 14 }, // Dodge Rating => Parry Rating
			'122': { 'source': 13, 'target': 31 }, // Dodge Rating => Hit Rating
			'123': { 'source': 13, 'target': 32 }, // Dodge Rating => Crit Rating
			'124': { 'source': 13, 'target': 36 }, // Dodge Rating => Haste Rating
			'125': { 'source': 13, 'target': 37 }, // Dodge Rating => Expertise Rating
			'126': { 'source': 13, 'target': 49 }, // Dodge Rating => Mastery
			'127': { 'source': 14, 'target': 6  }, // Parry Rating => Spirit
			'128': { 'source': 14, 'target': 13 }, // Parry Rating => Dodge Rating
			'129': { 'source': 14, 'target': 31 }, // Parry Rating => Hit Rating
			'130': { 'source': 14, 'target': 32 }, // Parry Rating => Crit Rating
			'131': { 'source': 14, 'target': 36 }, // Parry Rating => Haste Rating
			'132': { 'source': 14, 'target': 37 }, // Parry Rating => Expertise Rating
			'133': { 'source': 14, 'target': 49 }, // Parry Rating => Mastery
			'134': { 'source': 31, 'target': 6  }, // Hit Rating => Spirit
			'135': { 'source': 31, 'target': 13 }, // Hit Rating => Dodge Rating
			'136': { 'source': 31, 'target': 14 }, // Hit Rating => Parry Rating
			'137': { 'source': 31, 'target': 32 }, // Hit Rating => Crit Rating
			'138': { 'source': 31, 'target': 36 }, // Hit Rating => Haste Rating
			'139': { 'source': 31, 'target': 37 }, // Hit Rating => Expertise Rating
			'140': { 'source': 31, 'target': 49 }, // Hit Rating => Mastery
			'141': { 'source': 32, 'target': 6  }, // Crit Rating => Spirit
			'142': { 'source': 32, 'target': 13 }, // Crit Rating => Dodge Rating
			'143': { 'source': 32, 'target': 14 }, // Crit Rating => Parry Rating
			'144': { 'source': 32, 'target': 31 }, // Crit Rating => Hit Rating
			'145': { 'source': 32, 'target': 36 }, // Crit Rating => Haste Rating
			'146': { 'source': 32, 'target': 37 }, // Crit Rating => Expertise Rating
			'147': { 'source': 32, 'target': 49 }, // Crit Rating => Mastery
			'148': { 'source': 36, 'target': 6  }, // Haste Rating => Spirit
			'149': { 'source': 36, 'target': 13 }, // Haste Rating => Dodge Rating
			'150': { 'source': 36, 'target': 14 }, // Haste Rating => Parry Rating
			'151': { 'source': 36, 'target': 31 }, // Haste Rating => Hit Rating
			'152': { 'source': 36, 'target': 32 }, // Haste Rating => Crit Rating
			'153': { 'source': 36, 'target': 37 }, // Haste Rating => Expertise Rating
			'154': { 'source': 36, 'target': 49 }, // Haste Rating => Mastery
			'155': { 'source': 37, 'target': 6  }, // Expertise Rating => Spirit
			'156': { 'source': 37, 'target': 13 }, // Expertise Rating => Dodge Rating
			'157': { 'source': 37, 'target': 14 }, // Expertise Rating => Parry Rating
			'158': { 'source': 37, 'target': 31 }, // Expertise Rating => Hit Rating
			'159': { 'source': 37, 'target': 32 }, // Expertise Rating => Crit Rating
			'160': { 'source': 37, 'target': 36 }, // Expertise Rating => Haste Rating
			'161': { 'source': 37, 'target': 49 }, // Expertise Rating => Mastery
			'162': { 'source': 49, 'target': 6  }, // Mastery => Spirit
			'163': { 'source': 49, 'target': 13 }, // Mastery => Dodge Rating
			'164': { 'source': 49, 'target': 14 }, // Mastery => Parry Rating
			'165': { 'source': 49, 'target': 31 }, // Mastery => Hit Rating
			'166': { 'source': 49, 'target': 32 }, // Mastery => Crit Rating
			'167': { 'source': 49, 'target': 36 }, // Mastery => Haste Rating
			'168': { 'source': 49, 'target': 37 }  // Mastery => Expertise Rating			
		}
	},
	
	'prepareData': function(state) {
		
		if(Object.keys(state['data']).length === 0)
		{
			return false;
		}
		
		var slot = DarkTip.map("wow.item.equipped", "maps.slot", state['repo']['params']['slot'].toLowerCase());
		
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
		
		var reforgeid = DarkTip.compareRule(state['data'], ('character.items.'+slot+'.tooltipParams.reforge'));
		
		if(reforgeid)
		{
			var reforgemap    = DarkTip.map("wow.item.equipped", "maps.reforge", reforgeid);
			var index_source  = -1;
			var index_target  = -1;
			var reforgeamount = 0;
			
			for(i = 0; i < state['data']['item']['bonusStats'].length; i++)
			{
				if(state['data']['item']['bonusStats'][i]['stat'] == reforgemap['source'])
				{
					index_source = i;
				}
				if(state['data']['item']['bonusStats'][i]['stat'] == reforgemap['target'])
				{
					index_target = i;
				}
			}
			
			if((index_source >= 0))
			{
				reforgeamount = Math.floor(parseInt(state['data']['item']['bonusStats'][index_source]['amount']) * 0.4);
				
				state['data']['item']['bonusStats'][index_source]['amount']   = state['data']['item']['bonusStats'][index_source]['amount'] - reforgeamount;
				state['data']['item']['bonusStats'][index_source]['reforged'] = true;
				
				if(index_target >= 0)
				{
					state['data']['item']['bonusStats'][index_target]['amount']   = state['data']['item']['bonusStats'][index_target]['amount'] + reforgeamount;
					state['data']['item']['bonusStats'][index_target]['reforged'] = true;
				}
				else
				{
					state['data']['item']['bonusStats'].push({
						'stat'    : reforgemap['target'],
						'reforged': true,
						'amount'  : reforgeamount
					});
				}
				
				state['data']['item']['reforge'] = {
					'source': reforgemap['source'],
					'target': reforgemap['target'],
					'amount': reforgeamount
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
								'<div class="pos-right"><%= this._loc("itemClass." + this["item"]["itemClass"] + "." + this["item"]["itemSubClass"]) %></div>' +
							'<% } else { %>' +
								'<%= this._loc("itemClass." + this["item"]["itemClass"] + "." + this["item"]["itemSubClass"]) %>' +
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
					'<% if(this["item"]["gemInfo"]) { %><div class="darktip-row"><%= this["item"]["gemInfo"]["bonus"]["name"] %></div><% } %>' +
					'<% if(this["item"]["socketInfo"]) { %><div class="block sockets"><%= this._subLoop("templates.fragments.socket", this["item"]["socketInfo"]["sockets"]) %></div><% } %>' +
					'<% if(this["item"]["allowableClasses"]) { %><div class="darktip-row"><%= this._loc("allowableClasses") %></div><% } %>' +
					'<% if(this["item"]["allowableRaces"]) { %><div class="darktip-row"><%= this._loc("allowableRaces") %></div><% } %>' +
					'<% if(this["item"]["requiredLevel"]) { %><div class="darktip-row"><%= this._loc("requiredLevel") %></div><% } %>' +
					'<% if(this["item"]["requiredSkill"]) { %><div class="darktip-row"><%= this._loc("requiredSkill") %></div><% } %>' +
					'<% if(this["item"]["requiredAbility"]) { %><div class="darktip-row"><%= this._loc("requiredAbility") %></div><% } %>' +
					'<% if(this["item"]["minFactionId"]) { %><div class="darktip-row"><%= this._loc("minFactionId") %></div><% } %>' +
					'<%= this._subLoop("templates.fragments.stat.secondary", this["item"]["bonusStats"]) %>' +
					'<%= this._subLoop("templates.fragments.stat.spell", this["item"]["itemSpells"]) %>' +
					'<% if(this["item"]["description"]) { %><div class="darktip-row highlight-medium">&quot;<%= this["item"]["description"] %>&quot;</div><% } %>' +
			    	'<% if(this["_meta"]["extendedActive"]) { %><div class="darktip-row info-meta"><%= this._loc("extendedInactive") %></div><% } %>' +
				'</div>' +
				// --- END simple mode -------------------------------------
				// --- START extended mode ---------------------------------
			    '<% if(this["_meta"]["extendedActive"]) { %>' +
					'<div class="col-70 darktip-only-x">' +
						'<div class="headline-right"><%= this["item"]["itemLevel"] %></div>' +
						'<div class="darktip-row headline cquality-<%= this["item"]["quality"] %>"><%= this["item"]["name"] %></div>' +
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
			'allowableClass': '<span class="cclass-<%= this["_value"] %>"><%= this._loc("characterClass." + this["_value"] + ".0")%></span>',
			'allowableRace' : '<span class="crace-<%= this["_value"] %>"><%= this._loc("characterRace." + this["_value"] + ".0")%></span>',
			'coins'         : (
				'<% if(this["gold"] > -1) { %><span class="icon-gold"><%= this["gold"] %></span><% } %>' +
				'<% if(this["silver"] > -1) { %><span class="icon-silver"><%= this["silver"] %></span><% } %>' +
				'<% if(this["copper"]) { %><span class="icon-copper"><%= this["copper"] %></span><% } else { %>' +
				'<span class="icon-copper">0</span><% } %>'
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
			'stat': {
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
						'<div class="darktip-row highlight-custom"><%= this._loc("itemSpell") %></div>' +
					'<% } %>'
				)
			},
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
			'transmogged': 'Transmogrified to: <%= this["transmog"]["name"] %>',
			'reforged'   : 'Reforged (<%= this["item"]["reforge"]["amount"] %> <%= this._loc("itemStatName." + this["item"]["reforge"]["source"]) %> → <%= this["item"]["reforge"]["amount"] %> <%= this._loc("itemStatName." + this["item"]["reforge"]["target"]) %>)',
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
			'transmogged': 'Transmogrifiziert zu: <%= this["transmog"]["name"] %>',
			'reforged'   : 'Umgeschmiedet (<%= this["item"]["reforge"]["amount"] %> <%= this._loc("itemStatName." + this["item"]["reforge"]["source"]) %> → <%= this["item"]["reforge"]["amount"] %> <%= this._loc("itemStatName." + this["item"]["reforge"]["target"]) %>)',
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
			'not-found'  : 'Objets introuvable',
			'transmogged': 'Transmogrifié(e) en : <%= this["transmog"]["name"] %>',
			'reforged'   : 'Reforged (<%= this["item"]["reforge"]["amount"] %> <%= this._loc("itemStatName." + this["item"]["reforge"]["source"]) %> → <%= this["item"]["reforge"]["amount"] %> <%= this._loc("itemStatName." + this["item"]["reforge"]["target"]) %>)'
		},
		'es_ES': {
			'loading'    : 'Cargando objeto...',
			'not-found'  : 'Objeto no encontrado',
			'transmogged': 'Transfigurado a: <%= this["transmog"]["name"] %>',
			'reforged'   : 'Reforged (<%= this["item"]["reforge"]["amount"] %> <%= this._loc("itemStatName." + this["item"]["reforge"]["source"]) %> → <%= this["item"]["reforge"]["amount"] %> <%= this._loc("itemStatName." + this["item"]["reforge"]["target"]) %>)'
		}
	}
	
});