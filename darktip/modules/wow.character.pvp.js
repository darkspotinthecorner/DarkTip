DarkTip.registerModule('wow.character.pvp', {
	
	'triggers': {
		'explicit': {
			'match' : /character\-pvp:(us|eu|kr|tw|cn)\.([^\.]+)\.([^\(]+)\((en|de|fr|es|ru|ko|zh)\)/i,
			'params': {
				'1': 'region',
				'2': 'realm',
				'3': 'character',
				'4': 'lang'
			}
		},
		'implicit': {
			'match' : /http:\/\/(us\.battle\.net|eu\.battle\.net|kr\.battle\.net|tw\.battle\.net|cn\.battle\.net|www\.battlenet\.com\.cn)\/wow\/(en|de|fr|es|ru|ko|zh)\/character\/([^\/]+)\/([^\/]+)\/pvp.*/i,
			'params': {
				'1': 'host',
				'2': 'lang',
				'3': 'realm',
				'4': 'character'
			}
		},
		'api'	 : 'http://<%= this["host"] %>/api/wow/character/<%= this["realm"] %>/<%= this["character"] %>?fields=guild,talents,items,pvp&locale=<%= this["locale"] %>',
		'hash'	: '<%= this["host"] %>#<%= this["realm"] %>#<%= this["character"] %>#<%= this["locale"] %>'
	},

	'getParams': {
		'explicit': function(result) {
			var params	   = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.character.pvp', 'triggers.explicit.params')));
			params['host']   = DarkTip.map('wow', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		},
		'implicit': function(result) {
			var params	   = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.character.pvp', 'triggers.implicit.params')));
			params['region'] = DarkTip.map('wow', 'maps.host.region', params['host']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		}
	},

	'layout': {
		'width': {
			'core': 400
		}
	},

	'templates': {
		'core': (
			'<div class="tooltip-character tooltip-pvp">' +
				'<img class="icon" src="<%= this["_meta"]["path_host"] %>/static-render/<%= this["_meta"]["region"] %>/<%= this["thumbnail"] %>?alt=/wow/static/images/2d/avatar/<%= this["race"] %>-<%= this["gender"] %>.jpg" />' +
				 /* --- START simple mode -------------------------------- */
				'<div class="col-98 darktip-only-s">' +
					'<div class="headline-right"><span class="icon-achievenemtpoints"><%= this["achievementPoints"] %></span></div>' +
					'<div class="darktip-row headline cclass-<%= this["class"] %>"><%= this["name"] %></div>' +
					'<div class="darktip-row"><%= this._loc("classification") %></div>' +
					'<%= this._subLoop("templates.fragments.talentSpec", this["talents"]) %>' +
					'<% if(this["pvp"]) { %>' +
						'<div class="darktip-row highlight-medium"><%= this._loc("totalHonorableKills", this["pvp"]) %></div>' +
						'<%= this._sub("templates.fragments.arenaTeams") %>' +
						'<%= this._sub("templates.fragments.ratedBattlegrounds", this["pvp"]["ratedBattlegrounds"]) %>' +
					'<% } %>' +
					'<% if(this["_meta"]["extendedActive"]) { %><div class="darktip-row info-meta"><%= this._loc("extendedInactive") %></div><% } %>' +
				'</div>' +
				 /* --- END simple mode ---------------------------------- */
				 /* --- START extended mode ------------------------------ */
				'<% if(this["_meta"]["extendedActive"]) { %>' +
					'<div class="col-98 darktip-only-x">' +
						'<div class="headline-right"><span class="icon-achievenemtpoints"><%= this["achievementPoints"] %></span></div>' +
						'<div class="darktip-row headline cclass-<%= this["class"] %>"><%= this["name"] %></div>' +
						'<div class="darktip-row"><%= this["realm"] %></div>' +
						'<% if(this["guild"]) { %><div class="darktip-row highlight-medium">&lt;<%= this["guild"]["name"] %>&gt;<% if(this["guild"]["level"]) { %> (<%= this["guild"]["level"] %>)<% } %></div><% } %>' +
						'<% if(this["items"]) { %><div class="darktip-row highlight-weak"><%= this._loc("itemLevel", this["items"]) %></div><% } %>' +
						'<div class="darktip-row highlight-reduced"><%= this._loc("lastModified") %></div>' +
						'<div class="darktip-row info-meta"><%= this._loc("extendedActive") %></div>' +
					'</div>' +
				'<% } %>' +
				 /* --- END extended mode -------------------------------- */
			'</div>'
		),
		'404': (
			'<div class="tooltip-character tooltip-pvp tooltip-404">' +
				'<div class="title">404<span class="sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.character") %></span> <span class="value"><%= this["character"] %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.realm") %></span> <span class="value"><%= this["realm"] %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
			'</div>'
		),
		'fragments': {
			'arenaTeams': (
				'<div class="highlight-weak"><%= this._loc("arenaTeams") %></div>' +
				'<div class="block padded">' +
					'<%= this._subLoop("templates.fragments.arenaTeam", this["pvp"]["arenaTeams"]) %>' +
				'</div>'
			),
			'ratedBattlegrounds': (
				'<div class="highlight-weak"><%= this._loc("ratedBattlegrounds") %></div>' +
				'<div class="block padded">' +
					'<%= this._subLoop("templates.fragments.ratedBattleground", this["battlegrounds"]) %>' +
				'</div>'
			),
			'arenaTeam': (
				'<div class="darktip-row padded<% if(this["_loop"] % 2 == 0) { %> alt<% } %>">' +
					'<div class="pos-right highlight-weak"><%= this["personalRating"] %></div>' +
					'<span><span class="sub highlight-strong"><%= this["size"] %></span> <%= this["name"] %></span> <span class="sub highlight-reduced">(<%= this["teamRating"] %>)</span>' +
				'</div>'
			),
			'ratedBattleground': (
				'<div class="darktip-row padded<% if(this["_loop"] % 2 == 0) { %> alt<% } %>">' +
					'<div class="pos-right">' +
						'<span class="highlight-won"><%= this["won"] %></span> - <span class="highlight-lost"><%= this["played"] - this["won"] %></span>' +
						'<% if(this["played"] > 0) { %> | <span class="highlight-weak"><%= ((this["won"] / this["played"])*100).toFixed(0) %>%</span><% } %>' +
					'</div>' +
					'<span><%= this["name"] %></span>' +
				'</div>'
			)
		}
	},

	'i18n': {
		'en_US': {
			'totalHonorableKills': 'Honorable Kills: <%= this["totalHonorableKills"] %>',
			'arenaTeams'         : 'Arena teams:',
			'ratedBattlegrounds' : 'Rated Battlegrounds: <%= this["personalRating"] %>'
		},
		'de_DE': {
			'totalHonorableKills': 'Ehrenhafte Siege: <%= this["totalHonorableKills"] %>',
			'arenaTeams'         : 'Arenateams:',
			'ratedBattlegrounds' : 'Gewertete Schlachtfelder: <%= this["personalRating"] %>'
		},
		'fr_FR': {
			'totalHonorableKills': 'Victoires honorables: <%= this["totalHonorableKills"] %>',
			'arenaTeams'         : 'Team d\'arènes:',
			'ratedBattlegrounds' : 'Classement en champ de bataille: <%= this["personalRating"] %>'
		}
	}
	
});