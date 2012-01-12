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
		}
	},
	
	'queries': {
		'character': {
			'required' : true,
			'condition': true,
			'call'     : 'http://<%= this["host"] %>/api/wow/character/<%= this["realm"] %>/<%= this["character"] %>?fields=guild,talents,items,pvp&locale=<%= this["locale"] %>'
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
				'<img class="icon" src="<%= this["_meta"]["path_host"] %>/static-render/<%= this["_meta"]["region"] %>/<%= this["character"]["thumbnail"] %>?alt=/wow/static/images/2d/avatar/<%= this["character"]["race"] %>-<%= this["character"]["gender"] %>.jpg" />' +
				 /* --- START simple mode -------------------------------- */
				'<div class="col-98 darktip-only-s">' +
					'<div class="headline-right"><span class="icon-achievenemtpoints"><%= this["character"]["achievementPoints"] %></span></div>' +
					'<div class="darktip-row headline cclass-<%= this["character"]["class"] %>"><%= this["character"]["name"] %></div>' +
					'<div class="darktip-row"><%= this._loc("classification") %></div>' +
					'<%= this._subLoop("templates.fragments.talentSpec", this["character"]["talents"]) %>' +
					'<% if(this["character"]["pvp"]) { %>' +
						'<div class="darktip-row highlight-medium"><%= this._loc("totalHonorableKills", this["character"]["pvp"]) %></div>' +
						'<%= this._sub("templates.fragments.arenaTeams") %>' +
						'<%= this._sub("templates.fragments.ratedBattlegrounds", this["character"]["pvp"]["ratedBattlegrounds"]) %>' +
					'<% } %>' +
					'<% if(this["_meta"]["extendedActive"]) { %><div class="darktip-row info-meta"><%= this._loc("extendedInactive") %></div><% } %>' +
				'</div>' +
				 /* --- END simple mode ---------------------------------- */
				 /* --- START extended mode ------------------------------ */
				'<% if(this["_meta"]["extendedActive"]) { %>' +
					'<div class="col-98 darktip-only-x">' +
						'<div class="headline-right"><span class="icon-achievenemtpoints"><%= this["character"]["achievementPoints"] %></span></div>' +
						'<div class="darktip-row headline cclass-<%= this["character"]["class"] %>"><%= this["character"]["name"] %></div>' +
						'<div class="darktip-row"><%= this["character"]["realm"] %></div>' +
						'<% if(this["character"]["guild"]) { %><div class="darktip-row highlight-medium">&lt;<%= this["character"]["guild"]["name"] %>&gt;<% if(this["character"]["guild"]["level"]) { %> (<%= this["character"]["guild"]["level"] %>)<% } %></div><% } %>' +
						'<% if(this["character"]["items"]) { %><div class="darktip-row highlight-weak"><%= this._loc("itemLevel", this["character"]["items"]) %></div><% } %>' +
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
					'<%= this._subLoop("templates.fragments.arenaTeam", this["character"]["pvp"]["arenaTeams"]) %>' +
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