DarkTip.registerModule('wow.character', {
	'patterns': {
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
			'match' : /http:\/\/(us\.battle\.net|eu\.battle\.net|kr\.battle\.net|tw\.battle\.net|www\.battlenet\.com\.cn)\/wow\/(en|de|fr|es|ru|ko|zh)\/character\/([^\/]+)\/([^\/#]+).*/i,
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
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.character', 'patterns.explicit.params')));
			params['host']   = DarkTip.map('wow', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		},
		'implicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.character', 'patterns.implicit.params')));
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
		    	'<img class="thumbnail" src="<%= this["_meta"]["path_host"] %>/static-render/<%= this["_meta"]["region"] %>/<%= this["thumbnail"] %>?alt=/wow/static/images/2d/avatar/<%= this["race"] %>-<%= this["gender"] %>.jpg" />' +
		    	 /* --- START simple mode -------------------------------- */
				'<div class="data darktip-only-s">' +
					'<div class="achievementpoints"><span class="icon-achievenemtpoints"><%= this["achievementPoints"] %></span></div>' +
		    		'<div class="row name cclass-<%= this["class"] %>"><%= this["name"] %></div>' +
		    		'<div class="row classification"><%= this._loc("classification") %></div>' +
					'<%= this._subLoop("templates.fragments.talentSpec", this["talents"]) %>' +
					'<% if(this["guild"]) { %>' +
						'<div class="row guild">' +
							'<div class="guildname">' +
								'&lt;<%= this["guild"]["name"] %>&gt;' +
								'<% if(this["guild"]["level"]) { %><span class="guildlevel"> (<%= this["guild"]["level"] %>)</span><% } %>' +
							'</div>' +
						'</div>' +
					'<% } %>' +
					'<div class="row realm"><%= this["realm"] %></div>' +
					'<% if(this["items"]) { %><div class="row itemlevel"><%= this._loc("itemLevel", this["items"]) %></div><% } %>' +
			    	'<% if(this["_meta"]["extendedActive"]) { %><div class="row info-meta"><%= this._loc("extendedInactive") %></div><% } %>' +
		    	'</div>' +
				 /* --- END simple mode ---------------------------------- */
				 /* --- START extended mode ------------------------------ */
			    '<% if(this["_meta"]["extendedActive"]) { %>' +
					'<div class="data darktip-only-x">' +
						'<div class="achievementpoints"><span class="icon-achievenemtpoints"><%= this["achievementPoints"] %></span></div>' +
			    		'<div class="row name cclass-<%= this["class"] %>"><%= this["name"] %></div>' +
						'<% if(this["professions"]) { %>' +
							'<div class="professions">' +
								'<%= this._subLoop("templates.fragments.profession.primary", this["professions"]["primary"]) %>' +
								'<%= this._subLoop("templates.fragments.profession.secondary", this["professions"]["secondary"]) %>' +
							'</div>' +
						'<% } %>' +
						'<% if(this["mounts"]) { %><div class="row mounts"><%= this._loc("mounts") %></div><% } %>' +
						'<% if(this["companions"]) { %><div class="row companions"><%= this._loc("companions") %></div><% } %>' +
						'<div class="row lastModified"><%= this._loc("lastModified") %></div>' +
						'<div class="row info-meta"><%= this._loc("extendedActive") %></div>' +
			    	'</div>' +
		    	'<% } %>' +
				 /* --- END extended mode -------------------------------- */
		    '</div>'
		),
		'404': (
			'<div class="tooltip-character tooltip-404">' +
				'<div class="title">404<span class="sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="row character"><span class="label"><%= this._loc("label.character") %></span> <span class="value"><%= this["character"] %></span></div>' +
				'<div class="row realm"><span class="label"><%= this._loc("label.realm") %></span> <span class="value"><%= this["realm"] %></span></div>' +
				'<div class="row region"><span class="label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
		    '</div>'
		),
		'fragments': {
			'talentSpec': (
				'<div class="row talentspec <% if(this["selected"]) { %> active<% } %>">' +
					'<img class="icon-talentspec" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/<% if(this["icon"]) { %><%= this["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg"/> ' +
					'<% if(this["name"]) { %><%= this["name"] %><% } else { %><%= this._loc("not-used") %><% } %>' +
				'</div>'
			),
			'profession': {
				'primary'  : (
					'<% if(this["rank"] > 0) { %>' +
						'<div class="row profession-primary">' +
							'<img class="icon-profession" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/<% if(this["icon"]) { %><%= this["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg"/> ' +
							'<%= this["name"] %>: <%= this["rank"] %>' +
						'</div>' +
					'<% } %>'
				),
				'secondary': (
					'<% if(this["rank"] > 0) { %>' +
						'<div class="row profession-secondary">' +
							'<img class="icon-profession" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/<% if(this["icon"]) { %><%= this["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg"/> ' +
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
		}
	}
});