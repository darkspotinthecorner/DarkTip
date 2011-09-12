DarkTip.registerModule('wow.character', {
	'triggers': {
		'explicit': {
			'match' : /character:(us|eu|kr|tw|cn)\.([^\.]+)\.([^\(]+)\((en|de|fr|es|ru|ko|zh)\)/i,
			'params': {
				'1': 'region',
				'2': 'realm',
				'3': 'character',
				'4': 'lang'
			}
		},
		'implicit': {
			'match' : /http:\/\/(us\.battle\.net|eu\.battle\.net|kr\.battle\.net|tw\.battle\.net|cn\.battle\.net|www\.battlenet\.com\.cn)\/wow\/(en|de|fr|es|ru|ko|zh)\/character\/([^\/]+)\/([^\/#]+).*/i,
			'params': {
				'1': 'host',
				'2': 'lang',
				'3': 'realm',
				'4': 'character'
			}
		},
		'api'     : 'http://<%= this["host"] %>/api/wow/character/<%= this["realm"] %>/<%= this["character"] %>?fields=guild,talents,items,professions,companions,mounts&locale=<%= this["locale"] %>',
		'hash'    : '<%= this["host"] %>#<%= this["realm"] %>#<%= this["character"] %>#<%= this["locale"] %>'
	},

	'getParams': {
		'explicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.character', 'triggers.explicit.params')));
			params['host']   = DarkTip.map('wow', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		},
		'implicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.character', 'triggers.implicit.params')));
			params['region'] = DarkTip.map('wow', 'maps.host.region', params['host']);
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
		'tools': {
			'_renderDateTime': function(datetime) {
				var dto = new Date(datetime);
				return dto.toLocaleString();
			}
		},
		'core': (
			'<div class="tooltip-character">' +
		    	'<img class="icon" src="<%= this["_meta"]["path_host"] %>/static-render/<%= this["_meta"]["region"] %>/<%= this["thumbnail"] %>?alt=/wow/static/images/2d/avatar/<%= this["race"] %>-<%= this["gender"] %>.jpg" />' +
		    	 /* --- START simple mode -------------------------------- */
				'<div class="col-98 darktip-only-s">' +
					'<div class="headline-right"><span class="icon-achievenemtpoints"><%= this["achievementPoints"] %></span></div>' +
		    		'<div class="row headline cclass-<%= this["class"] %>"><%= this["name"] %></div>' +
		    		'<div class="row"><%= this._loc("classification") %></div>' +
					'<%= this._subLoop("templates.fragments.talentSpec", this["talents"]) %>' +
					'<% if(this["guild"]) { %><div class="row highlight-medium">&lt;<%= this["guild"]["name"] %>&gt;<% if(this["guild"]["level"]) { %> (<%= this["guild"]["level"] %>)<% } %></div><% } %>' +
					'<div class="row"><%= this["realm"] %></div>' +
					'<% if(this["items"]) { %><div class="row highlight-weak"><%= this._loc("itemLevel", this["items"]) %></div><% } %>' +
			    	'<% if(this["_meta"]["extendedActive"]) { %><div class="row info-meta"><%= this._loc("extendedInactive") %></div><% } %>' +
		    	'</div>' +
				 /* --- END simple mode ---------------------------------- */
				 /* --- START extended mode ------------------------------ */
			    '<% if(this["_meta"]["extendedActive"]) { %>' +
					'<div class="col-98 darktip-only-x">' +
						'<div class="headline-right"><span class="icon-achievenemtpoints"><%= this["achievementPoints"] %></span></div>' +
			    		'<div class="row headline cclass-<%= this["class"] %>"><%= this["name"] %></div>' +
						'<% if(this["professions"]) { %>' +
							'<div class="block">' +
								'<%= this._subLoop("templates.fragments.profession.primary", this["professions"]["primary"]) %>' +
								'<%= this._subLoop("templates.fragments.profession.secondary", this["professions"]["secondary"]) %>' +
							'</div>' +
						'<% } %>' +
						'<% if(this["mounts"]) { %><div class="row"><%= this._loc("mounts") %></div><% } %>' +
						'<% if(this["companions"]) { %><div class="row"><%= this._loc("companions") %></div><% } %>' +
						'<div class="row highlight-reduced"><%= this._loc("lastModified") %></div>' +
						'<div class="row info-meta"><%= this._loc("extendedActive") %></div>' +
			    	'</div>' +
		    	'<% } %>' +
				 /* --- END extended mode -------------------------------- */
		    '</div>'
		),
		'404': (
			'<div class="tooltip-character tooltip-404">' +
				'<div class="title">404<span class="sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="row"><span class="label"><%= this._loc("label.character") %></span> <span class="value"><%= this["character"] %></span></div>' +
				'<div class="row"><span class="label"><%= this._loc("label.realm") %></span> <span class="value"><%= this["realm"] %></span></div>' +
				'<div class="row"><span class="label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
		    '</div>'
		),
		'fragments': {
			'talentSpec': (
				'<div class="row<% if(this["selected"]) { %> highlight-strong<% } else { %> highlight-reduced<% } %>">' +
					'<img class="icon-10x10" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/<% if(this["icon"]) { %><%= this["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg"/> ' +
					'<% if(this["name"]) { %><%= this["name"] %><% } else { %><%= this._loc("not-used") %><% } %>' +
				'</div>'
			),
			'profession': {
				'primary'  : (
					'<% if(this["rank"] > 0) { %>' +
						'<div class="row highlight-medium">' +
							'<img class="icon-10x10" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/<% if(this["icon"]) { %><%= this["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg"/> ' +
							'<%= this["name"] %>: <%= this["rank"] %>' +
						'</div>' +
					'<% } %>'
				),
				'secondary': (
					'<% if(this["rank"] > 0) { %>' +
						'<div class="row highlight-weak">' +
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
			'classification': '<%= this["level"] %> <%= this._loc("characterRace." + this["race"] + ".0") %> <%= this._loc("characterClass." + this["class"] + ".0") %>',
			'itemLevel'     : '<%= this["averageItemLevelEquipped"] %> average item level (<%= this["averageItemLevel"] %>)',
			'mounts'        : 'Mounts: <%= this["mounts"].length %>',
			'companions'    : 'Companions: <%= this["companions"].length %>',
			'lastModified'  : 'Last modified: <%= this._renderDateTime(this["lastModified"]) %>'
		},
		'de_DE': {
			'loading'       : 'Lade Charakter...',
			'not-found'     : 'Charakter nicht gefunden',
			'classification': '<%= this["level"] %>, <%= this._loc("characterRace." + this["race"] + "." + this["gender"]) %>, <%= this._loc("characterClass." + this["class"] + "." + this["gender"]) %>',
			'itemLevel'     : '<%= this["averageItemLevelEquipped"] %> Durchschnittliche Gegenstandsstufe (<%= this["averageItemLevel"] %>)',
			'mounts'        : 'Reittiere: <%= this["mounts"].length %>',
			'companions'    : 'Begleiter: <%= this["companions"].length %>',
			'lastModified'  : 'Stand von: <%= this._renderDateTime(this["lastModified"]) %>'
		},
		'es_ES': {
			'loading'       : 'Cargando personaje...',
			'not-found'     : 'Personaje no encontrado',
			'classification': '<%= this._loc("characterRace." + this["race"] + "." + this["gender"]) %> <%= this._loc("characterClass." + this["class"] + "." + this["gender"]) %> de nivel <%= this["level"] %>',
			'itemLevel'     : '<%= this["averageItemLevelEquipped"] %> nivel medio de objeto (<%= this["averageItemLevel"] %>)',
			'mounts'        : 'Monturas: <%= this["mounts"].length %>',
			'companions'    : 'Compañeros: <%= this["companions"].length %>',
			'lastModified'  : 'Última modificación: <%= this._renderDateTime(this["lastModified"]) %>'
		},
		'es_MX': {
			'classification': '<%= this._loc("characterClass." + this["class"] + "." + this["gender"]) %> de <%= this._loc("characterRace." + this["race"] + "." + this["gender"]) %>, nivel <%= this["level"] %>'
		}
	}
});