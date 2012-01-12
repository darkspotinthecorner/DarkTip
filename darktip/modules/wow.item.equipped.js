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
			'transmogged': 'Transmogrified to: <%= this["transmog"]["name"] %>'
		},
		'de_DE': {
			'loading'    : 'Lade Gegenstand...',
			'not-found'  : 'Gegenstand nicht gefunden',
			'transmogged': 'Transmogrifiziert zu: <%= this["transmog"]["name"] %>'
		},
		'fr_FR': {
			'loading'    : 'Chargement Objets...',
			'not-found'  : 'Objets introuvable',
			'transmogged': 'Transmogrifié(e) en : <%= this["transmog"]["name"] %>'
		},
		'es_ES': {
			'loading'    : 'Cargando objeto...',
			'not-found'  : 'Objeto no encontrado',
			'transmogged': 'Transfigurado a: <%= this["transmog"]["name"] %>'
		}
	}
	
});