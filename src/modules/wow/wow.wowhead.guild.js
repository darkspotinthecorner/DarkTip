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

DarkTip.registerModule('wow.wowhead.guild', {

	'triggers': {
		'implicit': {
			'match' : /http:\/\/(www\.wowhead\.com|de\.wowhead\.com|es\.wowhead\.com|fr\.wowhead\.com|pt\.wowhead\.com|ru\.wowhead\.com)\/guild=(us|eu)\.([^\.]+)\.([^\.#]+).*/i,
			'params': {
				'1': 'wowheadhost',
				'2': 'region',
				'3': 'realm',
				'4': 'guild'
			}
		}
	},

	'queries': {
		'guild': {
			'required' : true,
			'condition': true,
			'call'     : '//<%= this["host"] %>/api/wow/guild/<%= this["realm"] %>/<%= this["guild"] %>?fields=members&locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 3)
		}
	},

	'getParams': {
		'implicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.wowhead.guild', 'triggers.implicit.params')));
			params['guild']  = params['guild'].replace(/_/g, ' ');
			params['lang']   = DarkTip.map('wow.wowhead', 'maps.wowheadhost.lang', params['wowheadhost']);
			params['host']   = DarkTip.map('wow', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		}
	},

	'layout': {
		'width': {
			'core': 275
		}
	},

	'templates': {
		'core': (
			'<div class="tooltip-guild">' +
				'<div class="darktip-headline-right"><span class="darktip-icon-achievenemtpoints"><%= this["guild"]["achievementPoints"] %></span></div>' +
				'<div class="darktip-row darktip-headline darkstip-cside-<%= this["guild"]["side"] %>"><%= this["guild"]["name"] %></div>' +
				'<div class="darktip-row darktip-highlight-medium"><%= this._loc("classification") %></div>' +
				'<% if(this["guild"]["members"]) { %><div class="darktip-row"><%= this._loc("members") %></div><% } %>' +
			'</div>'
		),
		'404': (
			'<div class="tooltip-guild darktip-tooltip-404">' +
				'<div class="darktip-title">404<span class="darktip-sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.guild") %></span> <span class="value"><%= this["guild"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.realm") %></span> <span class="value"><%= this["realm"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
			'</div>'
		)
	},

	'i18n': {
		'en_US': {
			'loading'       : 'Loading Guild...',
			'not-found'     : 'Guild not found',
			'classification': 'Level <%= this["guild"]["level"] %> <%= this._loc("factionSide." + this["guild"]["side"]) %> Guild, <%= this["guild"]["realm"] %>',
			'members'       : '<%= this["guild"]["members"].length %> members'
		},
		'de_DE': {
			'loading'       : 'Lade Gilde...',
			'not-found'     : 'Gilde nicht gefunden',
			'classification': 'Stufe <%= this["guild"]["level"] %> <%= this._loc("factionSide." + this["guild"]["side"]) %>-Gilde, <%= this["guild"]["realm"] %>',
			'members'       : '<%= this["guild"]["members"].length %> Mitglieder'
		},
		'fr_FR': {
			'loading'       : 'Chargement Guilde...',
			'not-found'     : 'Aucune Guilde trouv&eacute;e',
			'classification': 'Niveau <%= this["guild"]["level"] %> Faction <%= this._loc("factionSide." + this["guild"]["side"]) %> , <%= this["guild"]["realm"] %>',
			'members'       : '<%= this["guild"]["members"].length %> membres'
		},
		'es_ES': {
			'loading'       : 'Cargando hermandad...',
			'not-found'     : 'Hermandad no encontrada',
			'classification': 'Hermandad (<%= this._loc("factionSide." + this["guild"]["side"]) %>), nivel <%= this["guild"]["level"] %>, <%= this["guild"]["realm"] %>',
			'members'       : '<%= this["guild"]["members"].length %> miembros'
		},
		'it_IT': {
			'loading'       : 'Caricamento Gilda...',
			'not-found'     : 'Gilda non trovata',
			'classification': 'Livello <%= this["guild"]["level"] %> <%= this._loc("factionSide." + this["guild"]["side"]) %> Gilda, <%= this["guild"]["realm"] %>',
			'members'       : '<%= this["guild"]["members"].length %> membri'
		}		
	}

});
