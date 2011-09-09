DarkTip.registerModule('wow.arena', {
	'patterns': {
		'explicit': {
			'match' : /arena:(us|eu|kr|tw|cn)\.([^\.]+)\.(2v2|3v3|5v5)\.([^\(]+)\((en|de|fr|es|ru|ko|zh)\)/i,
			'params': {
				'1': 'region',
				'2': 'realm',
				'3': 'teamsize',
				'4': 'teamname',
				'5': 'lang'
			}
		},
		'implicit': {
			'match' : /http:\/\/(us\.battle\.net|eu\.battle\.net|kr\.battle\.net|tw\.battle\.net|www\.battlenet\.com\.cn)\/wow\/(en|de|fr|es|ru|ko|zh)\/arena\/([^\/]+)\/(2v2|3v3|5v5)\/([^\/#]+).*/i,
			'params': {
				'1': 'host',
				'2': 'lang',
				'3': 'realm',
				'4': 'teamsize',
				'5': 'teamname'
			}
		},
		'api'     : 'http://<%= this["host"] %>/api/wow/arena/<%= this["realm"] %>/<%= this["teamsize"] %>/<%= this["teamname"] %>?locale=<%= this["locale"] %>',
		'hash'    : '<%= this["host"] %>#<%= this["realm"] %>#<%= this["teamsize"] %>#<%= this["teamname"] %>#<%= this["locale"] %>'
	},

	'getParams': {
		'explicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.arena', 'patterns.explicit.params')));
			params['host']   = DarkTip.map('wow', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		},
		'implicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.arena', 'patterns.implicit.params')));
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
		'core': (
			'<div class="tooltip-arena">' +
				'<div class="rank-current"><%= this._loc("rank-current") %></div>' +
				'<div class="row name cside-<%= this["side"] %>"><%= this["name"] %></div>' +
				'<% if(this["_meta"]["extendedActive"]) { %><div class="row view-mode darktip-only-x"><%= this._loc("view-mode-current") %></div><% } %>' +
				'<div class="row view-mode darktip-only-s"><%= this._loc("view-mode-season") %></div>' +
				'<div class="row classification"><%= this._loc("classification") %></div>' +
				'<div class="row rank-previous"><%= this._loc("rank-previous") %></div>' +
				'<div class="row rating-team"><%= this._loc("rating-team") %></div>' +
				'<% if(this["_meta"]["extendedActive"]) { %><div class="row matches darktip-only-x"><%= this._loc("matches-current") %></div><% } %>' +
				'<div class="row matches darktip-only-s"><%= this._loc("matches-season") %></div>' +
				'<div class="members"><%= this._subLoop("templates.fragments.member", this["members"]) %></div>' +
				'<% if(this["_meta"]["extendedActive"]) { %><div class="row info-meta darktip-only-x"><%= this._loc("extendedActive") %></div><% } %>' +
				'<% if(this["_meta"]["extendedActive"]) { %><div class="row info-meta darktip-only-s"><%= this._loc("extendedInactive") %></div><% } %>' +
			'</div>'
		),
		'404': (
			'<div class="tooltip-arena tooltip-404">' +
				'<div class="title">404<span class="sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="row teamname"><span class="label"><%= this._loc("label.teamname") %></span> <span class="value"><%= this["teamname"] %></span></div>' +
				'<div class="row teamsize"><span class="label"><%= this._loc("label.teamsize") %></span> <span class="value"><%= this["teamsize"] %></span></div>' +
				'<div class="row realm"><span class="label"><%= this._loc("label.realm") %></span> <span class="value"><%= this["realm"] %></span></div>' +
				'<div class="row region"><span class="label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
		    '</div>'
		),
		'fragments': {
			'member': (
				'<div class="row member<% if(this["_loop"] % 2 == 0) { %> alt<% } %>">' +
					'<% if(this["_meta"]["extendedActive"]) { %><div class="matches darktip-only-x"><%= this._loc("matches-current-short") %></div><% } %>' +
					'<div class="matches darktip-only-s"><%= this._loc("matches-season-short") %></div>' +
					'<img src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/race_<%= this["character"]["race"] %>_<%= this["character"]["gender"] %>.jpg" /> ' +
					'<img src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/class_<%= this["character"]["class"] %>.jpg" /> ' +
					'<span class="cclass-<%= this["character"]["class"] %><% if(this["rank"]==0) { %> icon-leader-pvp<% } %>"><%= this["character"]["name"] %></span> <span class="rating-personal">(<%= this["personalRating"] %>)</span>' +
				'</div>'
			)
		}
	},

	'i18n': {
		'en_US': {
			'loading'              : 'Loading arena team...',
			'not-found'            : 'Arena team not found',
			'view-mode-current'    : 'Viewing current week',
			'view-mode-season'     : 'Viewing complete season',
			'classification'       : '<%= this["teamsize"] %>v<%= this["teamsize"] %> <%= this._loc("factionSide." + this["side"]) %> Arena Team, <%= this["realm"] %>',
			'rating-team'          : 'Rating: <%= this["rating"] %>',
			'rank-current'         : 'Rank #<%= this["ranking"] %>',
			'rank-previous'        : 'Last week\'s rank: <% if(this["lastSessionRanking"] > 0) { %>#<%= this["lastSessionRanking"] %><% } else { %>None<% } %>',
			'matches-current'      : 'Matches: <span class="matches-won"><%= this["gamesWon"] %></span> - <span class="matches-lost"><%= this["gamesLost"] %></span> <span class="matches-stats">(Total: <%= this["gamesPlayed"] %><% if(this["gamesPlayed"] > 0) { %>, <%= ((this["gamesWon"] / this["gamesPlayed"])*100).toFixed(0) %>% won<% } %>)</span>',
			'matches-current-short': '<span class="matches-won"><%= this["gamesWon"] %></span> - <span class="matches-lost"><%= this["gamesLost"] %></span><% if(this["gamesPlayed"] > 0) { %> | <span class="matches-stats"><%= ((this["gamesWon"] / this["gamesPlayed"])*100).toFixed(0) %>%</span><% } %>',
			'matches-season'       : 'Matches: <span class="matches-won"><%= this["sessionGamesWon"] %></span> - <span class="matches-lost"><%= this["sessionGamesLost"] %></span> <span class="matches-stats">(Total: <%= this["sessionGamesPlayed"] %><% if(this["sessionGamesPlayed"] > 0) { %>, <%= ((this["sessionGamesWon"] / this["sessionGamesPlayed"])*100).toFixed(0) %>% won<% } %>)</span>',
			'matches-season-short' : '<span class="matches-won"><%= this["sessionGamesWon"] %></span> - <span class="matches-lost"><%= this["sessionGamesLost"] %></span><% if(this["sessionGamesPlayed"] > 0) { %> | <span class="matches-stats"><%= ((this["sessionGamesWon"] / this["sessionGamesPlayed"])*100).toFixed(0) %>%</span><% } %>',
			'extendedInactive'     : 'Hold [<%= this["_meta"]["extendedKeyCodeLabel"] %>] to view current statistics!',
			'extendedActive'       : 'Release [<%= this["_meta"]["extendedKeyCodeLabel"] %>] to view seasonal statistics!'
		},
		'de_DE': {
			'loading'              : 'Lade Arenateam...',
			'not-found'            : 'Arenateam nicht gefunden',
			'view-mode-current'    : 'Wochenansicht',
			'view-mode-season'     : 'Saisonansicht',
			'classification'       : '<%= this["teamsize"] %>v<%= this["teamsize"] %> <%= this._loc("factionSide." + this["side"]) %> Arenateam, <%= this["realm"] %>',
			'rating-team'          : 'Wertung: <%= this["rating"] %>',
			'rank-current'         : 'Rang #<%= this["ranking"] %>',
			'rank-previous'        : 'Rang der letzten Woche: <% if(this["lastSessionRanking"] > 0) { %>#<%= this["lastSessionRanking"] %><% } else { %>Keiner<% } %>',
			'matches-current'      : 'Spiele: <span class="matches-won"><%= this["gamesWon"] %></span> - <span class="matches-lost"><%= this["gamesLost"] %></span> <span class="matches-stats">(Gesamt: <%= this["gamesPlayed"] %><% if(this["gamesPlayed"] > 0) { %>, <%= ((this["gamesWon"] / this["gamesPlayed"])*100).toFixed(0) %>% gewonnen<% } %>)</span>',
			'matches-current-short': '<span class="matches-won"><%= this["gamesWon"] %></span> - <span class="matches-lost"><%= this["gamesLost"] %></span><% if(this["gamesPlayed"] > 0) { %> | <span class="matches-stats"><%= ((this["gamesWon"] / this["gamesPlayed"])*100).toFixed(0) %>%</span><% } %>',
			'matches-season'       : 'Matches: <span class="matches-won"><%= this["sessionGamesWon"] %></span> - <span class="matches-lost"><%= this["sessionGamesLost"] %></span> <span class="matches-stats">(Gesamt: <%= this["sessionGamesPlayed"] %><% if(this["sessionGamesPlayed"] > 0) { %>, <%= ((this["sessionGamesWon"] / this["sessionGamesPlayed"])*100).toFixed(0) %>% gewonnen<% } %>)</span>',
			'matches-season-short' : '<span class="matches-won"><%= this["sessionGamesWon"] %></span> - <span class="matches-lost"><%= this["sessionGamesLost"] %></span><% if(this["sessionGamesPlayed"] > 0) { %> | <span class="matches-stats"><%= ((this["sessionGamesWon"] / this["sessionGamesPlayed"])*100).toFixed(0) %>%</span><% } %>',
			'extendedInactive'     : '[<%= this["_meta"]["extendedKeyCodeLabel"] %>] gedrückt halten für aktuelle Wochenwerte!',
			'extendedActive'       : '[<%= this["_meta"]["extendedKeyCodeLabel"] %>] loslassen für Saisonwerte!'
			
		}
	}
});