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
			// #################### BattleTag ####################
			var parsed = {};
			var temp   = state['data']['profile']['battleTag'].split('#', 2);

			parsed['compiled'] = state['data']['profile']['battleTag'];
			parsed['name']     = temp[0];
			parsed['code']     = temp[1];

			state['data']['profile']['battleTag'] = parsed;

			// #################### Played time ####################
			var time_played_total = 0;

			time_played_total += state['data']['profile']['timePlayed']['barbarian'];
			time_played_total += state['data']['profile']['timePlayed']['demon-hunter'];
			time_played_total += state['data']['profile']['timePlayed']['monk'];
			time_played_total += state['data']['profile']['timePlayed']['witch-doctor'];
			time_played_total += state['data']['profile']['timePlayed']['wizard'];

			if(time_played_total > 0)
			{
				state['data']['profile']['timePlayed']['total'] = time_played_total;

				state['data']['profile']['timePlayedPercent'] = {
					'barbarian'   : Math.round((state['data']['profile']['timePlayed']['barbarian']    / time_played_total) * 100),
					'demon-hunter': Math.round((state['data']['profile']['timePlayed']['demon-hunter'] / time_played_total) * 100),
					'monk'        : Math.round((state['data']['profile']['timePlayed']['monk']         / time_played_total) * 100),
					'witch-doctor': Math.round((state['data']['profile']['timePlayed']['witch-doctor'] / time_played_total) * 100),
					'wizard'      : Math.round((state['data']['profile']['timePlayed']['wizard']       / time_played_total) * 100)
				};
			}

			// #################### Progression ####################
			state['data']['profile']['farthestProgression'] = {};

			// ******************** Normal ********************
			var progress = state['data']['profile']['progression'];

			var farthest_dif   = 'normal';
			var farthest_act   = 'act0';
			var farthest_quest = '';

			// cycle through diffs
			for(var difficulty in progress)
			{
				// cycle through acts
				for(var act in progress[difficulty])
				{
					if(progress[difficulty][act]['completedQuests'].length > 0)
					{
						farthest_dif   = difficulty;
						farthest_act   = act;
						farthest_quest = progress[difficulty][act]['completedQuests'][(progress[difficulty][act]['completedQuests'].length - 1)]['name'];
					}
				}
			}

			state['data']['profile']['farthestProgression']['normal'] = {
				'difficulty': farthest_dif,
				'act'       : farthest_act,
				'quest'     : farthest_quest
			};

			// ******************** Hardcore ********************
			progress = state['data']['profile']['hardcoreProgression'];

			farthest_dif   = 'normal';
			farthest_act   = 'act0';
			farthest_quest = '';

			// cycle through diffs
			for(var difficulty in progress)
			{
				// cycle through acts
				for(var act in progress[difficulty])
				{
					if(progress[difficulty][act]['completedQuests'].length > 0)
					{
						farthest_dif   = difficulty;
						farthest_act   = act;
						farthest_quest = progress[difficulty][act]['completedQuests'][(progress[difficulty][act]['completedQuests'].length - 1)]['name'];
					}
				}
			}

			state['data']['profile']['farthestProgression']['hardcore'] = {
				'difficulty': farthest_dif,
				'act'       : farthest_act,
				'quest'     : farthest_quest
			};

			// #################### Artisans ####################

			var artisan_temp = {};

			// ******************** Normal ********************
			if((typeof state['data']['profile']['artisans'] !== 'undefined') && (state['data']['profile']['artisans'].length > 0))
			{
				for(var i = 0; i < state['data']['profile']['artisans'].length; i++)
				{
					var c = state['data']['profile']['artisans'][i];

					artisan_temp[c['slug']] = {
						'slug'        : c['slug'],
						'level-normal': c['level']
					};
				}
			}

			// ******************** Hardcore ********************
			if((typeof state['data']['profile']['hardcoreArtisans'] !== 'undefined') && (state['data']['profile']['hardcoreArtisans'].length > 0))
			{
				for(var i = 0; i < state['data']['profile']['hardcoreArtisans'].length; i++)
				{
					var c = state['data']['profile']['hardcoreArtisans'][i];

					if(typeof artisan_temp[c['slug']] === 'undefined')
					{
						artisan_temp[c['slug']] = {
							'slug': c['slug']
						};
					}

					artisan_temp[c['slug']]['level-hardcore'] = c['level'];
				}
			}

			state['data']['profile']['artisan-info'] = [];

			for(var artisan in artisan_temp)
			{
				state['data']['profile']['artisan-info'].push(artisan_temp[artisan]);
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
					'<div class="darktip-headline-right"><span class="darktip-icon-star"><%= this["profile"]["kills"]["elites"] %></span></div>' +
					'<div class="darktip-row darktip-headline"><span class="darktip-battletag-name"><%= this["profile"]["battleTag"]["name"] %></span> <span class="battletag-code sub">#<%= this["profile"]["battleTag"]["code"] %></span></div>' +
					'<% if((this["profile"]["heroes"]) && (this["profile"]["heroes"].length > 0)) { %>' +
						'<div class="darktip-row darktip-heroes-highlighted">' +
							'<%= this._subLoop("templates.fragments.hero_deco", this["profile"]["heroes"]) %>' +
						'</div>' +
					'<% } %>' +
					'<div class="darktip-row darktip-progression">' +
						'<div class="darktip-progression-bar"><div class="darktip-progress darktip-normal dif-<%= this["profile"]["farthestProgression"]["normal"]["difficulty"] %> darktip-act-<%= this["profile"]["farthestProgression"]["normal"]["act"] %>"><div class="darktip-pin darktip-dif-normal"></div><div class="darktip-pin darktip-dif-nightmare"></div><div class="darktip-pin darktip-dif-hell"></div><div class="darktip-pin darktip-dif-inferno"></div></div></div>' +
						'<div class="darktip-progression-bar"><div class="darktip-progress darktip-hardcore dif-<%= this["profile"]["farthestProgression"]["hardcore"]["difficulty"] %> darktip-act-<%= this["profile"]["farthestProgression"]["hardcore"]["act"] %>"><div class="darktip-pin darktip-dif-normal"></div><div class="darktip-pin darktip-dif-nightmare"></div><div class="darktip-pin darktip-dif-hell"></div><div class="darktip-pin darktip-dif-inferno"></div></div></div>' +
					'</div>' +
					'<% if(this["profile"]["timePlayedPercent"]) { %><div class="darktip-row darktip-time-played darktip-padded-above">' +
						'<div class="darktip-container"><div class="darktip-hero-badge darktip-barbarian"><% if(this["profile"]["timePlayedPercent"]["barbarian"] > 0) { %><div class="hero-badge darktip-overlay<% if(this["profile"]["timePlayed"]["barbarian"] == 1) { %> full<% } %>" style="height: <%= this["profile"]["timePlayed"]["barbarian"] * 100 %>%;"></div><% } %></div><div class="darktip-label"><%= this["profile"]["timePlayedPercent"]["barbarian"] %>%</div></div>' +
						'<div class="darktip-container"><div class="darktip-hero-badge darktip-demon-hunter"><% if(this["profile"]["timePlayedPercent"]["demon-hunter"] > 0) { %><div class="hero-badge darktip-overlay<% if(this["profile"]["timePlayed"]["demon-hunter"] == 1) { %> full<% } %>" style="height: <%= this["profile"]["timePlayed"]["demon-hunter"] * 100 %>%;"></div><% } %></div><div class="darktip-label"><%= this["profile"]["timePlayedPercent"]["demon-hunter"] %>%</div></div>' +
						'<div class="darktip-container"><div class="darktip-hero-badge darktip-monk"><% if(this["profile"]["timePlayedPercent"]["monk"] > 0) { %><div class="hero-badge darktip-overlay<% if(this["profile"]["timePlayed"]["monk"] == 1) { %> full<% } %>" style="height: <%= this["profile"]["timePlayed"]["monk"] * 100 %>%;"></div><% } %></div><div class="darktip-label"><%= this["profile"]["timePlayedPercent"]["monk"] %>%</div></div>' +
						'<div class="darktip-container"><div class="darktip-hero-badge darktip-witch-doctor"><% if(this["profile"]["timePlayedPercent"]["witch-doctor"] > 0) { %><div class="hero-badge darktip-overlay<% if(this["profile"]["timePlayed"]["witch-doctor"] == 1) { %> full<% } %>" style="height: <%= this["profile"]["timePlayed"]["witch-doctor"] * 100 %>%;"></div><% } %></div><div class="darktip-label"><%= this["profile"]["timePlayedPercent"]["witch-doctor"] %>%</div></div>' +
						'<div class="darktip-container"><div class="darktip-hero-badge darktip-wizard"><% if(this["profile"]["timePlayedPercent"]["wizard"] > 0) { %><div class="hero-badge darktip-overlay<% if(this["profile"]["timePlayed"]["wizard"] == 1) { %> full<% } %>" style="height: <%= this["profile"]["timePlayed"]["wizard"] * 100 %>%;"></div><% } %></div><div class="darktip-label"><%= this["profile"]["timePlayedPercent"]["wizard"] %>%</div></div>' +
					'</div><% } %>' +
					'<% if(this["_meta"]["extendedActive"]) { %><div class="darktip-row darktip-info-meta"><%= this._loc("extendedInactive") %></div><% } %>' +
				'</div>' +
				/* --- END simple mode ---------------------------------- */
				/* --- START extended mode ------------------------------ */
				'<% if(this["_meta"]["extendedActive"]) { %>' +
					'<div class="darktip-only-x">' +
						'<div class="darktip-headline-right"><span class="darktip-icon-star"><%= this["profile"]["kills"]["elites"] %></span></div>' +
						'<div class="darktip-row darktip-headline"><span class="darktip-battletag-name"><%= this["profile"]["battleTag"]["name"] %></span> <span class="battletag-code sub">#<%= this["profile"]["battleTag"]["code"] %></span></div>' +
						'<%= this._subLoop("templates.fragments.artisan_info", this["profile"]["artisan-info"]) %>' +
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
				'<% if(this["_loop"] < 3) { %><div class="darktip-hero-portrait-frame <% if(this["hardcore"]) { %>darktip-hardcore<% } else { %>darktip-normal<% } %>">' +
					'<div class="darktip-hero darktip-hero-portrait darktip-<%= this["class"] %>-<%= this["gender"] %>"></div><div class="darktip-textbox"><span class="darktip-level"><%= this["level"] %></span><span class="class darktip-ccolor-<%= this["class"] %>"><%= this["name"] %></span></div>' +
				'</div><% } %>'
			),
			'hero_list': (
				'<div class="darktip-row darktip-padded <% if(this["hardcore"]) { %>hardcore<% } else { %>normal<% } %><% if(this["_loop"] % 2 == 0) { %> alt<% } %>">' +
					'<span class="darktip-name"><%= this["name"] %></span>' +
					'<span class="darktip-level"><%= this["level"] %></span>' +
					'<span class="darktip-class darktip-ccolor-<%= this["class"] %>"><%= this._loc("characterClass." + this["class"] + "." + this["gender"]) %></span>' +
				'</div>'
			),
			'artisan_info': (
				'<div class="darktip-row artisan-info darktip-padded">' +
					'<span class="name"><%= this._loc(this["slug"]) %>:</span> ' +
					'<span class="darktip-level"><%= this["level-normal"] %></span> ' +
					'<span class="darktip-level darktip-dcolor-hardcore">(<%= this._loc("hardcore") %>: <%= this["level-hardcore"] %>)</span>' +
				'</div>'
			)
		}
	},

	'i18n': {
		'en_US': {
			'loading'        : 'Loading profile...',
			'not-found'      : 'Profile not found',
			'hardcore'       : 'Hardcore',
			'blacksmith'     : 'Blacksmith',
			'jeweler'        : 'Jeweler'
		},
		'de_DE': {
			'loading'        : 'Lade Profil...',
			'not-found'      : 'Profil nicht gefunden',
			'hardcore'       : 'Hardcore',
			'blacksmith'     : 'Schmied',
			'jeweler'        : 'Juwelier'
		},
		'fr_FR': {
		},
		'es_ES': {
		}
	}

});
