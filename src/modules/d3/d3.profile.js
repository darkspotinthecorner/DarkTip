/* **************************************************************************
 * The DarkTip plugin is a javascript based tooltip framework that enables
 * quick and easy development of modules that hook into specific aspects of a
 * webpage and display context sensitive tooltips.
 *
 * Copyright (C) 2014 Martin Gelder
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

DarkTip.registerModule('d3.profile', {

	'triggers': {
		'explicit': {
			'match' : /d3\.profile:(us|eu|kr|tw|cn)\.([^\-]+)-(\d+)\((en|de|it|fr|es|pt|pl|ru|ko|zh)\)/i,
			'params': {
				'1': 'region',
				'2': 'battletag_name',
				'3': 'battletag_code',
				'4': 'lang'
			}
		},
		'implicit': {
			'match' : /(?:https?:\/\/)?(us\.battle\.net|eu\.battle\.net|kr\.battle\.net|tw\.battle\.net|cn\.battle\.net|www\.battlenet\.com\.cn)\/d3\/(en|de|it|fr|es|pt|pl|ru|ko|zh)\/profile\/([^\-]+)\-(\d+).*/i,
			'params': {
				'1': 'host',
				'2': 'lang',
				'3': 'battletag_name',
				'4': 'battletag_code'
			}
		}
	},

	'queries': {
		'profile': {
			'required' : true,
			'condition': true,
			'call'     : '//<%= this["host"] %>/api/d3/profile/<%= this["battletag_name"] %>-<%= this["battletag_code"] %>/?locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 4)
		}
	},

	'getParams': {
		'explicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('d3.profile', 'triggers.explicit.params')));
			params['host']   = DarkTip.map('d3', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('d3', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		},
		'implicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('d3.profile', 'triggers.implicit.params')));
			params['region'] = DarkTip.map('d3', 'maps.host.region', params['host']);
			params['locale'] = DarkTip.map('d3', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		}
	},

	'layout': {
		'width': {
			'core': 320
		}
	},

	'prepareData': function(state) {
		if((typeof state['data'] === 'object') && (typeof state['data']['profile'] === 'object') && (typeof state['data']['profile']['battleTag'] === 'string'))
		{
			var classorder = ['barbarian', 'crusader', 'demon-hunter', 'monk', 'witch-doctor', 'wizard'];
			var numclasses = classorder.length;

			// #################### BattleTag ####################
			var parsed = {};
			var temp   = state['data']['profile']['battleTag'].split('#', 2);

			parsed['compiled'] = state['data']['profile']['battleTag'];
			parsed['name']     = temp[0];
			parsed['code']     = temp[1];

			state['data']['profile']['battleTag'] = parsed;

			// ################ Hightlighted heroes ################
			state['data']['profile']['heroesHighlighted'] = [];

			numheroes = Math.min(3, state['data']['profile']['heroes'].length);

			for(var i = 0; i < numheroes; i++)
			{
				state['data']['profile']['heroesHighlighted'].push(state['data']['profile']['heroes'][i])
			}

			// #################### Last online ####################
			state['data']['profile']['lastUpdated'] = state['data']['profile']['lastUpdated'] * 1000;

			// #################### Played time ####################
			var time_played_total = 0;

			for (var i = 0; i < numclasses; i++)
			{
				time_played_total += state['data']['profile']['timePlayed'][classorder[i]] || 0;
			}

			if(time_played_total > 0)
			{
				state['data']['profile']['timePlayed']['total']    = time_played_total;
				state['data']['profile']['timePlayed']['perClass'] = [];

				var control = 100;

				for (var i = 0; i < numclasses; i++)
				{
					var payload = {
						'class'          : classorder[i],
						'relative'       : state['data']['profile']['timePlayed'][classorder[i]],
						'relativePercent': state['data']['profile']['timePlayed'][classorder[i]] * 100,
						'absolute'       : Math.round((state['data']['profile']['timePlayed'][classorder[i]] / time_played_total) * 100)
					};

					if (i == (numclasses -1))
					{
						payload['absolute'] = control;
					}
					else
					{
						control -= payload['absolute'];
					}

					state['data']['profile']['timePlayed']['perClass'].push(payload);
				}
			}

			// #################### Fin ####################
			return state['data'];
		}

		return false;

		if(Object.keys(state['data']).length === 0) {
			return false;
		}
		if(typeof state['data']['profile'] === 'undefined') {
			return false;
		}
		if(state['data']['profile']['code'] === 'OOPS') {
			return false;
		}
		return state['data'];
	},

	'templates': {
		'core': (
			'<div class="tooltip-profile">' +
				/* --- START simple mode -------------------------------- */
				'<div class="darktip-only-s">' +
					'<div class="darktip-headline-right"><span class="darktip-icon-paragon"><%= this["profile"]["paragonLevel"] %><% if(this["profile"]["paragonLevelHardcore"] > 0) { %> / <span class="darktip-dcolor-hardcore"><%= this["profile"]["paragonLevelHardcore"] %></span><% } %></span></div>' +
					'<div class="darktip-row darktip-headline"><span class="darktip-battletag-name"><%= this["profile"]["battleTag"]["name"] %></span> <span class="battletag-code sub">#<%= this["profile"]["battleTag"]["code"] %></span></div>' +
					'<% if((this["profile"]["heroesHighlighted"]) && (this["profile"]["heroesHighlighted"].length > 0)) { %>' +
						'<div class="darktip-row darktip-heroes-highlighted">' +
							'<%= this._subLoop("templates.fragments.hero_deco", this["profile"]["heroesHighlighted"]) %>' +
						'</div>' +
					'<% } %>' +
					'<% if(this["profile"]["timePlayed"]["perClass"]) { %>' +
						'<div class="darktip-row darktip-time-played darktip-padded-above">' +
							'<%= this._subLoop("templates.fragments.timeplayed", this["profile"]["timePlayed"]["perClass"]) %>' +
						'</div>' +
					'<% } %>' +
					'<div class="darktip-row darktip-padded-above darktip-highlight-reduced"><%= this._loc("lastOnline") %></div>' +
					'<% if(this["_meta"]["extendedActive"]) { %><div class="darktip-row darktip-info-meta"><%= this._loc("extendedInactive") %></div><% } %>' +
				'</div>' +
				/* --- END simple mode ---------------------------------- */
				/* --- START extended mode ------------------------------ */
				'<% if(this["_meta"]["extendedActive"]) { %>' +
					'<div class="darktip-only-x">' +
						'<div class="darktip-headline-right"><span class="darktip-icon-star"><%= this["profile"]["kills"]["elites"] %></span></div>' +
						'<div class="darktip-row darktip-headline"><span class="darktip-battletag-name"><%= this["profile"]["battleTag"]["name"] %></span> <span class="battletag-code sub">#<%= this["profile"]["battleTag"]["code"] %></span></div>' +
						'<% if((this["profile"]["heroes"]) && (this["profile"]["heroes"].length > 0)) { %>' +
							'<div class="darktip-row darktip-heroes-list">' +
								'<%= this._subLoop("templates.fragments.hero_list", this["profile"]["heroes"]) %>' +
							'</div>' +
						'<% } %>' +
						'<div class="darktip-row darktip-info-meta"><%= this._loc("extendedActive") %></div>' +
					'</div>' +
				'<% } %>' +
				/* --- END extended mode -------------------------------- */
			'</div>'
		),
		'404': (
			'<div class="tooltip-profile darktip-tooltip-404">' +
				'<div class="darktip-title">404<span class="darktip-sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.battletag") %></span> <span class="value"><%= this["battletag_name"] %>-<%= this["battletag_code"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
			'</div>'
		),
		'fragments': {
			'hero_deco': (
				'<div class="darktip-hero-portrait-frame darktip-<% if(this["hardcore"]) { %>hardcore<% } else { %>normal<% } %>">' +
					'<div class="darktip-hero darktip-hero-portrait darktip-<%= this["class"] %>-<%= this["gender"] %>"></div><div class="darktip-textbox"><span class="darktip-level"><%= this["level"] %></span><span class="class darktip-ccolor-<%= this["class"] %>"><%= this["name"] %></span></div>' +
				'</div>'
			),
			'timeplayed': (
				'<div class="darktip-container">' +
					'<div class="darktip-hero-badge darktip-<%= this["class"] %>">' +
						'<% if(this["relative"] > 0) { %>' +
							'<div class="darktip-hero-badge darktip-overlay" style="height: <%= this["relativePercent"] %>%;"></div>' +
						'<% } %>' +
					'</div>' +
					'<div class="darktip-label"><%= this["absolute"] %>%</div>' +
				'</div>'
			),
			'hero_list': (
				'<div class="darktip-row darktip-padded <% if(this["hardcore"]) { %>hardcore<% } else { %>normal<% } %><% if(this["_loop"] % 2 == 0) { %> alt<% } %>">' +
					'<span class="darktip-name"><%= this["name"] %></span>' +
					'<span class="darktip-level"><%= this["level"] %></span>' +
					'<span class="darktip-class darktip-ccolor-<%= this["class"] %>"><%= this._loc("characterClass." + this["class"] + "." + this["gender"]) %></span>' +
				'</div>'
			)
		}
	},

	'i18n': {
		'en_US': {
			'loading'   : 'Loading profile...',
			'not-found' : 'Profile not found',
			'hardcore'  : 'Hardcore',
			'lastOnline': 'Last online: <%= this._renderDateTime(this["profile"]["lastUpdated"]) %>'
		},
		'de_DE': {
			'loading'   : 'Lade Profil...',
			'not-found' : 'Profil nicht gefunden',
			'hardcore'  : 'Hardcore',
			'lastOnline': 'Zuletzt online: <%= this._renderDateTime(this["profile"]["lastUpdated"]) %>'
		},
		'fr_FR': {
		},
		'es_ES': {
		}
	}

});
