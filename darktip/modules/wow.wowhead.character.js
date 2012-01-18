DarkTip.registerModule('wow.wowhead.character', {
	
	'triggers': {
		'implicit': {
			'match' : /http:\/\/(www\.wowhead\.com|de\.wowhead\.com|es\.wowhead\.com|fr\.wowhead\.com|ru\.wowhead\.com)\/profile=(us|eu)\.([^\.]+)\.([^\.#]+).*/i,
			'params': {
				'1': 'wowheadhost',
				'2': 'region',
				'3': 'realm',
				'4': 'character'
			}
		}
	},
	
	'queries': {
		'character': {
			'required' : true,
			'condition': true,
			'call'     : 'http://<%= this["host"] %>/api/wow/character/<%= this["realm"] %>/<%= this["character"] %>?fields=guild,talents,items,professions,companions,mounts&locale=<%= this["locale"] %>'
		}
		/*
		'races'    : {
			'required' : false,
			'condition': 'character.race',
			'call'     : 'http://<%= this["host"] %>/api/wow/data/character/races?locale=<%= this["locale"] %>'
		},
		'classes'  : {
			'required' : false,
			'condition': 'character.class',
			'call'     : 'http://<%= this["host"] %>/api/wow/data/character/classes?locale=<%= this["locale"] %>'
		},
		// */
	},

	'getParams': {
		'implicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.wowhead.character', 'triggers.implicit.params')));
			params['lang']   = DarkTip.map('wow.wowhead', 'maps.wowheadhost.lang', params['wowheadhost']);
			params['host']   = DarkTip.map('wow', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		}
	},

	'layout': {
		'width': {
			'core': 325
		}
	},

	'templates': {
		'core': (
			'<div class="tooltip-character">' +
		    	'<img class="icon" src="<%= this["_meta"]["path_host"] %>/static-render/<%= this["_meta"]["region"] %>/<%= this["character"]["thumbnail"] %>?alt=/wow/static/images/2d/avatar/<%= this["character"]["race"] %>-<%= this["character"]["gender"] %>.jpg" />' +
		    	 /* --- START simple mode -------------------------------- */
				'<div class="col-98 darktip-only-s">' +
					'<div class="headline-right"><span class="icon-achievenemtpoints"><%= this["character"]["achievementPoints"] %></span></div>' +
		    		'<div class="darktip-row headline cclass-<%= this["character"]["class"] %>"><%= this["character"]["name"] %></div>' +
		    		'<div class="darktip-row"><%= this._loc("classification") %></div>' +
					'<%= this._subLoop("templates.fragments.talentSpec", this["character"]["talents"]) %>' +
					'<% if(this["character"]["guild"]) { %><div class="darktip-row highlight-medium">&lt;<%= this["character"]["guild"]["name"] %>&gt;<% if(this["character"]["guild"]["level"]) { %> (<%= this["character"]["guild"]["level"] %>)<% } %></div><% } %>' +
					'<div class="darktip-row"><%= this["character"]["realm"] %></div>' +
					'<% if(this["character"]["items"]) { %><div class="darktip-row highlight-weak"><%= this._loc("itemLevel", this["character"]["items"]) %></div><% } %>' +
			    	'<% if(this["_meta"]["extendedActive"]) { %><div class="darktip-row info-meta"><%= this._loc("extendedInactive") %></div><% } %>' +
		    	'</div>' +
				 /* --- END simple mode ---------------------------------- */
				 /* --- START extended mode ------------------------------ */
			    '<% if(this["_meta"]["extendedActive"]) { %>' +
					'<div class="col-98 darktip-only-x">' +
						'<div class="headline-right"><span class="icon-achievenemtpoints"><%= this["character"]["achievementPoints"] %></span></div>' +
			    		'<div class="darktip-row headline cclass-<%= this["character"]["class"] %>"><%= this["character"]["name"] %></div>' +
						'<% if(this["character"]["professions"]) { %>' +
							'<div class="block">' +
								'<%= this._subLoop("templates.fragments.profession.primary", this["character"]["professions"]["primary"]) %>' +
								'<%= this._subLoop("templates.fragments.profession.secondary", this["character"]["professions"]["secondary"]) %>' +
							'</div>' +
						'<% } %>' +
						'<% if(this["character"]["mounts"]) { %><div class="darktip-row"><%= this._loc("mounts") %></div><% } %>' +
						'<% if(this["character"]["companions"]) { %><div class="darktip-row"><%= this._loc("companions") %></div><% } %>' +
						'<div class="darktip-row highlight-reduced"><%= this._loc("lastModified") %></div>' +
						'<div class="darktip-row info-meta"><%= this._loc("extendedActive") %></div>' +
			    	'</div>' +
		    	'<% } %>' +
				 /* --- END extended mode -------------------------------- */
		    '</div>'
		),
		'404': (
			'<div class="tooltip-character tooltip-404">' +
				'<div class="title">404<span class="sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.character") %></span> <span class="value"><%= this["character"] %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.realm") %></span> <span class="value"><%= this["realm"] %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
		    '</div>'
		),
		'fragments': {
			'talentSpec': (
				'<div class="block darktip-row<% if(this["selected"]) { %> highlight-strong<% } else { %> highlight-reduced<% } %>">' +
					'<img class="icon-10x10" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/<% if(this["icon"]) { %><%= this["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg"/> ' +
					'<% if(this["name"]) { %><%= this["name"] %><% } else { %><%= this._loc("not-used") %><% } %>' +
				'</div>'
			),
			'profession': {
				'primary'  : (
					'<% if(this["rank"] > 0) { %>' +
						'<div class="darktip-row highlight-medium">' +
							'<img class="icon-10x10" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/<% if(this["icon"]) { %><%= this["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg"/> ' +
							'<%= this["name"] %>: <%= this["rank"] %>' +
						'</div>' +
					'<% } %>'
				),
				'secondary': (
					'<% if(this["rank"] > 0) { %>' +
						'<div class="darktip-row highlight-weak">' +
							'<img class="icon-10x10" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/<% if(this["icon"]) { %><%= this["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg"/> ' +
							'<%= this["name"] %>: <%= this["rank"] %>' +
						'</div>' +
					'<% } %>'
				)
			}
		}
	},

	'i18n': {
		'en_US': {
			'loading'       : 'Loading character...',
			'not-found'     : 'Character not found',
			'classification': '<%= this["character"]["level"] %> <%= this._loc("characterRace." + this["character"]["race"] + ".0") %> <%= this._loc("characterClass." + this["character"]["class"] + ".0") %>',
			'itemLevel'     : '<%= this["averageItemLevelEquipped"] %> average item level (<%= this["averageItemLevel"] %>)',
			'mounts'        : 'Mounts: <%= this["character"]["mounts"].length %>',
			'companions'    : 'Companions: <%= this["character"]["companions"].length %>',
			'lastModified'  : 'Last modified: <%= this._renderDateTime(this["character"]["lastModified"]) %>'
		},
		'de_DE': {
			'loading'       : 'Lade Charakter...',
			'not-found'     : 'Charakter nicht gefunden',
			'classification': '<%= this["character"]["level"] %>, <%= this._loc("characterRace." + this["character"]["race"] + "." + this["character"]["gender"]) %>, <%= this._loc("characterClass." + this["character"]["class"] + "." + this["character"]["gender"]) %>',
			'itemLevel'     : '<%= this["averageItemLevelEquipped"] %> Durchschnittliche Gegenstandsstufe (<%= this["averageItemLevel"] %>)',
			'mounts'        : 'Reittiere: <%= this["character"]["mounts"].length %>',
			'companions'    : 'Begleiter: <%= this["character"]["companions"].length %>',
			'lastModified'  : 'Stand vom <%= this._renderDateTime(this["character"]["lastModified"]) %>'
		},
		'fr_FR': {
			'loading'       : 'Chargement personnage...',
			'not-found'     : 'Aucun personnage trouvée',
			'classification': '<%= this._loc("characterRace." + this["character"]["race"] + "." + this["character"]["gender"]) %> <%= this._loc("characterClass." + this["character"]["class"] + "." + this["character"]["gender"]) %> de niveau <%= this["character"]["level"] %>',
			'itemLevel'     : '<%= this["averageItemLevelEquipped"] %> Niveau moyen des objets (<%= this["averageItemLevel"] %>)',
			'mounts'        : 'Montures: <%= this["character"]["mounts"].length %>',
			'companions'    : 'Mascottes: <%= this["character"]["companions"].length %>',
			'lastModified'  : 'Dernière mise à jour: <%= this._renderDateTime(this["character"]["lastModified"]) %>'
		},
		'es_ES': {
			'loading'       : 'Cargando personaje...',
			'not-found'     : 'Personaje no encontrado',
			'classification': '<%= this._loc("characterRace." + this["character"]["race"] + "." + this["character"]["gender"]) %> <%= this._loc("characterClass." + this["character"]["class"] + "." + this["character"]["gender"]) %> de nivel <%= this["character"]["level"] %>',
			'itemLevel'     : '<%= this["averageItemLevelEquipped"] %> nivel medio de objeto (<%= this["averageItemLevel"] %>)',
			'mounts'        : 'Monturas: <%= this["character"]["mounts"].length %>',
			'companions'    : 'Compañeros: <%= this["character"]["companions"].length %>',
			'lastModified'  : 'Última modificación: <%= this._renderDateTime(this["character"]["lastModified"]) %>'
		},
		'es_MX': {
			'classification': '<%= this._loc("characterClass." + this["character"]["class"] + "." + this["character"]["gender"]) %> de <%= this._loc("characterRace." + this["character"]["race"] + "." + this["character"]["gender"]) %>, nivel <%= this["character"]["level"] %>'
		}
	}
	
});