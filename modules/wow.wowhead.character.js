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

DarkTip.registerModule('wow.wowhead.character', {

	'triggers': {
		'implicit': {
			'match' : /http:\/\/(www\.wowhead\.com|de\.wowhead\.com|es\.wowhead\.com|fr\.wowhead\.com|ru\.wowhead\.com)\/profile=(us|eu)\.([^\.]+)\.([^\.#]+).*/i,
			'params': {
				'1': 'wowheadhost',
				'2': 'region',
				'3': 'realm',
				'4': 'character'
			},
			'decorate': function(element, params, data) {

				var color_class     = DarkTip.map('wow.character', 'maps.class.color', data['character']['class']);
				var mediahost       = DarkTip.map('wow', 'maps.region.mediahost', params['region']);
				var icon_racegender = 'http://' + mediahost + '/wow/icons/18/race_' + data['character']['race'] + '_' + data['character']['gender'] + '.jpg';
				var icon_class      = 'http://' + mediahost + '/wow/icons/18/class_' + data['character']['class'] + '.jpg';

				DarkTip.jq(element).css(DarkTip['data']['settings']['decorativeMode']['default']);
				DarkTip.jq(element).css({'color': color_class});
				DarkTip.jq(element).prepend('<img src="' + icon_racegender + '" style="vertical-align: middle;" /> <img src="' + icon_class + '" style="vertical-align: middle;" /> ');
			}
		}
	},

	'queries': {
		'character': {
			'required' : true,
			'condition': true,
			'call'     : 'http://<%= this["host"] %>/api/wow/character/<%= this["realm"] %>/<%= this["character"] %>?fields=guild,talents,items,professions,pets,mounts&locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 1)
		}
		/*
		'races'    : {
			'required' : false,
			'condition': 'character.race',
			'call'     : 'http://<%= this["host"] %>/api/wow/data/character/races?locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 90)
		},
		'classes'  : {
			'required' : false,
			'condition': 'character.class',
			'call'     : 'http://<%= this["host"] %>/api/wow/data/character/classes?locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 90)
		},
		// */
	},

	'prepareData': function(state) {

		if(Object.keys(state['data']).length === 0)
		{
			return false;
		}

		state['data']['character']['talentSpecCount'] = 0;

		if((typeof state['data']['character'] !== 'undefined') && (typeof state['data']['character']['talents'] !== 'undefined'))
		{
			for(var i = 0; i < state['data']['character']['talents'].length; i++)
			{
				var cspec   = state['data']['character']['talents'][i];
				var temp    = {};
				var maxtier = -1;
				var ordered = [];

				if(typeof cspec['spec'] !== 'undefined')
				{
					state['data']['character']['talentSpecCount'] = state['data']['character']['talentSpecCount'] + 1;
				}

				if((typeof cspec['talents'] !== 'undefined') && (cspec['talents'].length > 0))
				{
					for(var j = 0; j < cspec['talents'].length; j++)
					{
						temp[cspec['talents'][j]['tier']] = cspec['talents'][j];

						if(cspec['talents'][j]['tier'] > maxtier)
						{
							maxtier = cspec['talents'][j]['tier'];
						}
					}
				}

				if(maxtier >= 0)
				{
					for(var j = 0; j <= maxtier; j++)
					{
						if(typeof temp[j] !== 'undefined')
						{
							ordered.push(temp[j]);
						}
					}
				}

				cspec['talents_ordered'] = ordered;
			}
		}

		return state['data'];
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
						'<% if(this["character"]["pets"]) { %><div class="darktip-row"><%= this._loc("pets") %></div><% } %>' +
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
				'<% if(this["spec"]) { %>' +
					'<div class="block spec darktip-row<% if(this["selected"]) { %> highlight-strong<% } else { %> highlight-reduced<% } %>">' +
						'<img class="icon-10x10" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/<% if(this["spec"]["icon"]) { %><%= this["spec"]["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg"/> ' +
						'<%= this["spec"]["name"] %> <span class="role">(<%= this["spec"]["role"] %>)</span>' +
						'<% if(this["talents"].length > 0) { %>' +
							'<%= this._subLoop("templates.fragments.talent", this["talents_ordered"]) %>' +
						'<% } %>' +
					'</div>' +
				'<% } %>'
			),
			'talent': (
				'<div class="block talent">' +
					'<img class="icon-10x10" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/<% if(this["spell"]["icon"]) { %><%= this["spell"]["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg"/> ' +
					'<%= this["spell"]["name"] %>' +
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
			'mounts'        : 'Mounts: <%= this["character"]["mounts"]["numCollected"] %> / <%= this["character"]["mounts"]["numCollected"] + this["character"]["mounts"]["numNotCollected"] %>',
			'pets'          : 'Pets: <%= this["character"]["pets"]["numCollected"] %> / <%= this["character"]["pets"]["numCollected"] + this["character"]["pets"]["numNotCollected"] %>',
			'lastModified'  : 'Last modified: <%= this._renderDateTime(this["character"]["lastModified"]) %>'
		},
		'de_DE': {
			'loading'       : 'Lade Charakter...',
			'not-found'     : 'Charakter nicht gefunden',
			'classification': '<%= this["character"]["level"] %>, <%= this._loc("characterRace." + this["character"]["race"] + "." + this["character"]["gender"]) %>, <%= this._loc("characterClass." + this["character"]["class"] + "." + this["character"]["gender"]) %>',
			'itemLevel'     : '<%= this["averageItemLevelEquipped"] %> Durchschnittliche Gegenstandsstufe (<%= this["averageItemLevel"] %>)',
			'mounts'        : 'Reittiere: <%= this["character"]["mounts"]["numCollected"] %> / <%= this["character"]["mounts"]["numCollected"] + this["character"]["mounts"]["numNotCollected"] %>',
			'pets'          : 'Haustiere: <%= this["character"]["pets"]["numCollected"] %> / <%= this["character"]["pets"]["numCollected"] + this["character"]["pets"]["numNotCollected"] %>',
			'lastModified'  : 'Stand vom <%= this._renderDateTime(this["character"]["lastModified"]) %>'
		},
		'fr_FR': {
			'loading'       : 'Chargement personnage...',
			'not-found'     : 'Aucun personnage trouv&eacute;',
			'classification': '<%= this._loc("characterRace." + this["character"]["race"] + "." + this["character"]["gender"]) %> <%= this._loc("characterClass." + this["character"]["class"] + "." + this["character"]["gender"]) %> de niveau <%= this["character"]["level"] %>',
			'itemLevel'     : '<%= this["averageItemLevelEquipped"] %> Niveau moyen des objets (<%= this["averageItemLevel"] %>)',
			'mounts'        : 'Montures: <%= this["character"]["mounts"]["numCollected"] %> / <%= this["character"]["mounts"]["numCollected"] + this["character"]["mounts"]["numNotCollected"] %>',
			'pets'          : 'Mascottes: <%= this["character"]["pets"]["numCollected"] %> / <%= this["character"]["pets"]["numCollected"] + this["character"]["pets"]["numNotCollected"] %>',
			'lastModified'  : 'Derni&egrave;re mise à jour: <%= this._renderDateTime(this["character"]["lastModified"]) %>'
		},
		'es_ES': {
			'loading'       : 'Cargando personaje...',
			'not-found'     : 'Personaje no encontrado',
			'classification': '<%= this._loc("characterRace." + this["character"]["race"] + "." + this["character"]["gender"]) %> <%= this._loc("characterClass." + this["character"]["class"] + "." + this["character"]["gender"]) %> de nivel <%= this["character"]["level"] %>',
			'itemLevel'     : '<%= this["averageItemLevelEquipped"] %> nivel medio de objeto (<%= this["averageItemLevel"] %>)',
			'mounts'        : 'Monturas: <%= this["character"]["mounts"]["numCollected"] %> / <%= this["character"]["mounts"]["numCollected"] + this["character"]["mounts"]["numNotCollected"] %>',
			'pets'          : 'Compa&ntilde;eros: <%= this["character"]["pets"]["numCollected"] %> / <%= this["character"]["pets"]["numCollected"] + this["character"]["pets"]["numNotCollected"] %>',
			'lastModified'  : '&Uacute;ltima modificaci&oacute;n: <%= this._renderDateTime(this["character"]["lastModified"]) %>'
		},
		'es_MX': {
			'classification': '<%= this._loc("characterClass." + this["character"]["class"] + "." + this["character"]["gender"]) %> de <%= this._loc("characterRace." + this["character"]["race"] + "." + this["character"]["gender"]) %>, nivel <%= this["character"]["level"] %>'
		}
	}

});
