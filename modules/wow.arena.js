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

DarkTip.registerModule('wow.arena', {

	'triggers': {
		'explicit': {
			'match' : /wow\.arena:(us|eu|kr|tw|cn)\.([^\.]+)\.(2v2|3v3|5v5)\.([^\(]+)\((en|de|fr|es|ru|pt|it|ko|zh)\)/i,
			'params': {
				'1': 'region',
				'2': 'realm',
				'3': 'teamsize',
				'4': 'teamname',
				'5': 'lang'
			}
		},
		'implicit': {
			'match' : /(?:https?:\/\/)?(us\.battle\.net|eu\.battle\.net|kr\.battle\.net|tw\.battle\.net|cn\.battle\.net|www\.battlenet\.com\.cn)\/wow\/(en|de|fr|es|ru|pt|it|ko|zh)\/arena\/([^\/]+)\/(2v2|3v3|5v5)\/([^\/#]+).*/i,
			'params': {
				'1': 'host',
				'2': 'lang',
				'3': 'realm',
				'4': 'teamsize',
				'5': 'teamname'
			}
		}
	},

	'queries': {
		'arena': {
			'required' : true,
			'condition': true,
			'call'     : '//<%= this["host"] %>/api/wow/arena/<%= this["realm"] %>/<%= this["teamsize"] %>/<%= this["teamname"] %>?locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 1)
		}
	},

	'getParams': {
		'explicit': function(result) {
			var params         = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.arena', 'triggers.explicit.params')));
			params['teamname'] = params['teamname'].replace(/_/g, ' ');
			params['host']     = DarkTip.map('wow', 'maps.region.host', params['region']);
			params['locale']   = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		},
		'implicit': function(result) {
			var params         = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.arena', 'triggers.implicit.params')));
			params['teamname'] = params['teamname'].replace(/_/g, ' ');
			params['region']   = DarkTip.map('wow', 'maps.host.region', params['host']);
			params['locale']   = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
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
				'<div class="headline-right"><%= this._loc("rank-current") %></div>' +
				'<div class="darktip-row headline cside-<%= this["arena"]["side"] %>"><%= this["arena"]["name"] %></div>' +
				'<% if(this["_meta"]["extendedActive"]) { %><div class="darktip-row highlight-strong darktip-only-x"><%= this._loc("view-mode-current") %></div><% } %>' +
				'<div class="darktip-row highlight-strong darktip-only-s"><%= this._loc("view-mode-season") %></div>' +
				'<div class="darktip-row"><%= this._loc("classification") %></div>' +
				'<div class="darktip-row"><%= this._loc("rank-previous") %></div>' +
				'<div class="darktip-row"><%= this._loc("rating-team") %></div>' +
				'<% if(this["_meta"]["extendedActive"]) { %><div class="darktip-row darktip-only-x"><%= this._loc("matches-current") %></div><% } %>' +
				'<div class="darktip-row darktip-only-s"><%= this._loc("matches-season") %></div>' +
				'<div class="members"><%= this._subLoop("templates.fragments.member", this["arena"]["members"]) %></div>' +
				'<% if(this["_meta"]["extendedActive"]) { %><div class="darktip-row info-meta darktip-only-x"><%= this._loc("extendedActive") %></div><% } %>' +
				'<% if(this["_meta"]["extendedActive"]) { %><div class="darktip-row info-meta darktip-only-s"><%= this._loc("extendedInactive") %></div><% } %>' +
			'</div>'
		),
		'404': (
			'<div class="tooltip-arena tooltip-404">' +
				'<div class="title">404<span class="sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.teamname") %></span> <span class="value"><%= this["teamname"] %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.teamsize") %></span> <span class="value"><%= this["teamsize"] %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.realm") %></span> <span class="value"><%= this["realm"] %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
			'</div>'
		),
		'fragments': {
			'member': (
				'<div class="darktip-row padded<% if(this["_loop"] % 2 == 0) { %> alt<% } %>">' +
					'<% if(this["_meta"]["extendedActive"]) { %><div class="pos-right darktip-only-x"><%= this._loc("matches-current-short") %></div><% } %>' +
					'<div class="pos-right darktip-only-s"><%= this._loc("matches-season-short") %></div>' +
					'<img class="icon-18x18" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/race_<%= this["character"]["race"] %>_<%= this["character"]["gender"] %>.jpg" /> ' +
					'<img class="icon-18x18" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/class_<%= this["character"]["class"] %>.jpg" /> ' +
					'<span class="cclass-<%= this["character"]["class"] %><% if(this["rank"]==0) { %> icon-leader-pvp<% } %>"><%= this["character"]["name"] %></span> <span class="sub highlight-reduced">(<%= this["personalRating"] %>)</span>' +
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
			'classification'       : '<%= this["arena"]["teamsize"] %>v<%= this["arena"]["teamsize"] %> <%= this._loc("factionSide." + this["arena"]["side"]) %> Arena Team, <%= this["arena"]["realm"] %>',
			'rating-team'          : 'Rating: <%= this["arena"]["rating"] %>',
			'rank-current'         : 'Rank #<%= this["arena"]["ranking"] %>',
			'rank-previous'        : 'Last week\'s rank: <% if(this["arena"]["lastSessionRanking"] > 0) { %>#<%= this["arena"]["lastSessionRanking"] %><% } else { %>None<% } %>',
			'matches-current'      : 'Matches: <span class="highlight-won"><%= this["arena"]["gamesWon"] %></span> - <span class="highlight-lost"><%= this["arena"]["gamesLost"] %></span> <span class="highlight-weak">(Total: <%= this["arena"]["gamesPlayed"] %><% if(this["arena"]["gamesPlayed"] > 0) { %>, <%= ((this["arena"]["gamesWon"] / this["arena"]["gamesPlayed"])*100).toFixed(0) %>% won<% } %>)</span>',
			'matches-current-short': '<span class="highlight-won"><%= this["gamesWon"] %></span> - <span class="highlight-lost"><%= this["gamesLost"] %></span><% if(this["gamesPlayed"] > 0) { %> | <span class="highlight-weak"><%= ((this["gamesWon"] / this["gamesPlayed"])*100).toFixed(0) %>%</span><% } %>',
			'matches-season'       : 'Matches: <span class="highlight-won"><%= this["arena"]["sessionGamesWon"] %></span> - <span class="highlight-lost"><%= this["arena"]["sessionGamesLost"] %></span> <span class="highlight-weak">(Total: <%= this["arena"]["sessionGamesPlayed"] %><% if(this["arena"]["sessionGamesPlayed"] > 0) { %>, <%= ((this["arena"]["sessionGamesWon"] / this["arena"]["sessionGamesPlayed"])*100).toFixed(0) %>% won<% } %>)</span>',
			'matches-season-short' : '<span class="highlight-won"><%= this["sessionGamesWon"] %></span> - <span class="highlight-lost"><%= this["sessionGamesLost"] %></span><% if(this["sessionGamesPlayed"] > 0) { %> | <span class="highlight-weak"><%= ((this["sessionGamesWon"] / this["sessionGamesPlayed"])*100).toFixed(0) %>%</span><% } %>',
			'extendedInactive'     : 'Hold [<%= this["_meta"]["extendedKeyCodeLabel"] %>] to view current statistics',
			'extendedActive'       : 'Release [<%= this["_meta"]["extendedKeyCodeLabel"] %>] to view seasonal statistics'
		},
		'de_DE': {
			'loading'              : 'Lade Arenateam...',
			'not-found'            : 'Arenateam nicht gefunden',
			'view-mode-current'    : 'Wochenansicht',
			'view-mode-season'     : 'Saisonansicht',
			'classification'       : '<%= this["arena"]["teamsize"] %>v<%= this["arena"]["teamsize"] %> <%= this._loc("factionSide." + this["arena"]["side"]) %> Arenateam, <%= this["arena"]["realm"] %>',
			'rating-team'          : 'Wertung: <%= this["arena"]["rating"] %>',
			'rank-current'         : 'Rang #<%= this["arena"]["ranking"] %>',
			'rank-previous'        : 'Rang der letzten Woche: <% if(this["lastSessionRanking"] > 0) { %>#<%= this["lastSessionRanking"] %><% } else { %>Keiner<% } %>',
			'matches-current'      : 'Spiele: <span class="highlight-won"><%= this["arena"]["gamesWon"] %></span> - <span class="highlight-lost"><%= this["arena"]["gamesLost"] %></span> <span class="highlight-weak">(Gesamt: <%= this["arena"]["gamesPlayed"] %><% if(this["arena"]["gamesPlayed"] > 0) { %>, <%= ((this["arena"]["gamesWon"] / this["arena"]["gamesPlayed"])*100).toFixed(0) %>% gewonnen<% } %>)</span>',
			'matches-current-short': '<span class="highlight-won"><%= this["gamesWon"] %></span> - <span class="highlight-lost"><%= this["gamesLost"] %></span><% if(this["gamesPlayed"] > 0) { %> | <span class="highlight-weak"><%= ((this["gamesWon"] / this["gamesPlayed"])*100).toFixed(0) %>%</span><% } %>',
			'matches-season'       : 'Spiele: <span class="highlight-won"><%= this["arena"]["sessionGamesWon"] %></span> - <span class="highlight-lost"><%= this["arena"]["sessionGamesLost"] %></span> <span class="highlight-weak">(Gesamt: <%= this["arena"]["sessionGamesPlayed"] %><% if(this["arena"]["sessionGamesPlayed"] > 0) { %>, <%= ((this["arena"]["sessionGamesWon"] / this["arena"]["sessionGamesPlayed"])*100).toFixed(0) %>% gewonnen<% } %>)</span>',
			'matches-season-short' : '<span class="highlight-won"><%= this["sessionGamesWon"] %></span> - <span class="highlight-lost"><%= this["sessionGamesLost"] %></span><% if(this["sessionGamesPlayed"] > 0) { %> | <span class="highlight-weak"><%= ((this["sessionGamesWon"] / this["sessionGamesPlayed"])*100).toFixed(0) %>%</span><% } %>',
			'extendedInactive'     : '[<%= this["_meta"]["extendedKeyCodeLabel"] %>] gedr&uuml;ckt halten f&uuml;r aktuelle Wochenwerte',
			'extendedActive'       : '[<%= this["_meta"]["extendedKeyCodeLabel"] %>] loslassen f&uuml;r Saisonwerte'
		},
		'fr_FR': {
			'loading'              : 'Chargement team d\'ar&egrave;nes...',
			'not-found'            : 'Aucune team d\'ar&egrave;nes trouv&eacute;e',
			'view-mode-current'    : 'Voir la semaine en cours',
			'view-mode-season'     : 'Voir la saison',
			'classification'       : 'Equipe d\'arène <%= this["arena"]["teamsize"] %>v<%= this["arena"]["teamsize"] %>, <%= this._loc("factionSide." + this["arena"]["side"]) %> (<%= this["arena"]["realm"] %>)',
			'rating-team'          : 'Côte: <%= this["arena"]["rating"] %>',
			'rank-current'         : 'Classement #<%= this["arena"]["ranking"] %>',
			'rank-previous'        : 'Classement semaine derni&egrave;re: <% if(this["lastSessionRanking"] > 0) { %>#<%= this["lastSessionRanking"] %><% } else { %>None<% } %>',
			'matches-current'      : 'Matches: <span class="highlight-won"><%= this["arena"]["gamesWon"] %></span> - <span class="highlight-lost"><%= this["arena"]["gamesLost"] %></span> <span class="highlight-weak">(Total: <%= this["arena"]["gamesPlayed"] %><% if(this["arena"]["gamesPlayed"] > 0) { %>, <%= ((this["arena"]["gamesWon"] / this["arena"]["gamesPlayed"])*100).toFixed(0) %>% won<% } %>)</span>',
			'matches-current-short': '<span class="highlight-won"><%= this["gamesWon"] %></span> - <span class="highlight-lost"><%= this["gamesLost"] %></span><% if(this["gamesPlayed"] > 0) { %> | <span class="highlight-weak"><%= ((this["gamesWon"] / this["gamesPlayed"])*100).toFixed(0) %>%</span><% } %>',
			'matches-season'       : 'Matches: <span class="highlight-won"><%= this["arena"]["sessionGamesWon"] %></span> - <span class="highlight-lost"><%= this["arena"]["sessionGamesLost"] %></span> <span class="highlight-weak">(Total: <%= this["arena"]["sessionGamesPlayed"] %><% if(this["arena"]["sessionGamesPlayed"] > 0) { %>, <%= ((this["arena"]["sessionGamesWon"] / this["arena"]["sessionGamesPlayed"])*100).toFixed(0) %>% won<% } %>)</span>',
			'matches-season-short' : '<span class="highlight-won"><%= this["sessionGamesWon"] %></span> - <span class="highlight-lost"><%= this["sessionGamesLost"] %></span><% if(this["sessionGamesPlayed"] > 0) { %> | <span class="highlight-weak"><%= ((this["sessionGamesWon"] / this["sessionGamesPlayed"])*100).toFixed(0) %>%</span><% } %>',
			'extendedInactive'     : 'Appyuez sur [<%= this["_meta"]["extendedKeyCodeLabel"] %>] pour voir les statistiques actuelles',
			'extendedActive'       : 'Relâchez [<%= this["_meta"]["extendedKeyCodeLabel"] %>] pour voir les statistiques de la saison'
		},
		'es_ES': {
			'loading'              : 'Cargando equipo de arenas...',
			'not-found'            : 'Equipo de arenas no encontrado',
			'view-mode-current'    : 'Esta Semana',
			'view-mode-season'     : 'Temporada',
			'classification'       : '<%= this["arena"]["teamsize"] %>v<%= this["arena"]["teamsize"] %> <%= this._loc("factionSide." + this["arena"]["side"]) %> Arena Team, <%= this["arena"]["realm"] %>',
			'rating-team'          : 'Puntuaci&oacute;n: <%= this["arena"]["rating"] %>',
			'rank-current'         : 'Rango #<%= this["arena"]["ranking"] %>',
			'rank-previous'        : 'Rango de la semana pasada: <% if(this["lastSessionRanking"] > 0) { %>#<%= this["lastSessionRanking"] %><% } else { %>no<% } %>',
			'matches-current'      : 'Partidas: <span class="highlight-won"><%= this["arena"]["gamesWon"] %></span> - <span class="highlight-lost"><%= this["arena"]["gamesLost"] %></span> <span class="highlight-weak">(Total: <%= this["arena"]["gamesPlayed"] %><% if(this["arena"]["gamesPlayed"] > 0) { %>, <%= ((this["arena"]["gamesWon"] / this["arena"]["gamesPlayed"])*100).toFixed(0) %>% gewonnen<% } %>)</span>',
			'matches-current-short': '<span class="highlight-won"><%= this["gamesWon"] %></span> - <span class="highlight-lost"><%= this["gamesLost"] %></span><% if(this["gamesPlayed"] > 0) { %> | <span class="highlight-weak"><%= ((this["gamesWon"] / this["gamesPlayed"])*100).toFixed(0) %>%</span><% } %>',
			'matches-season'       : 'Partidas: <span class="highlight-won"><%= this["arena"]["sessionGamesWon"] %></span> - <span class="highlight-lost"><%= this["arena"]["sessionGamesLost"] %></span> <span class="highlight-weak">(Total: <%= this["arena"]["sessionGamesPlayed"] %><% if(this["arena"]["sessionGamesPlayed"] > 0) { %>, <%= ((this["arena"]["sessionGamesWon"] / this["arena"]["sessionGamesPlayed"])*100).toFixed(0) %>% gewonnen<% } %>)</span>',
			'matches-season-short' : '<span class="highlight-won"><%= this["sessionGamesWon"] %></span> - <span class="highlight-lost"><%= this["sessionGamesLost"] %></span><% if(this["sessionGamesPlayed"] > 0) { %> | <span class="highlight-weak"><%= ((this["sessionGamesWon"] / this["sessionGamesPlayed"])*100).toFixed(0) %>%</span><% } %>',
			'extendedInactive'     : '&iexcl;Manten pulsado [<%= this["_meta"]["extendedKeyCodeLabel"] %>] para ver las estad&iacute;sticas actuales!',
			'extendedActive'       : '&iexcl;Suelta [<%= this["_meta"]["extendedKeyCodeLabel"] %>] para ver las estad&iacute;sticas de la temporada!'
		}
	}

});
