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

DarkTip.registerModule('wow.spell', {

	'triggers': {
		'explicit': {
			'match' : /wow\.spell:(us|eu|kr|tw|cn)\.([^\(]+)\((en|de|fr|es|ru|pt|it|ko|zh)\)/i,
			'params': {
				'1': 'region',
				'2': 'spellid',
				'3': 'lang'
			}
		}
	},

	'queries': {
		'spell': {
			'required' : true,
			'condition': true,
			'call'     : '//<%= this["host"] %>/api/wow/spell/<%= this["spellid"] %>?locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 90)
		}
	},

	'prepareData': function(state) {

		if(Object.keys(state['data']).length === 0)
		{
			return false;
		}

		return state['data'];
	},

	'getParams': {
		'explicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.spell', 'triggers.explicit.params')));
			params['host']   = DarkTip.map('wow', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		},
		'implicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.spell', 'triggers.implicit.params')));
			params['region'] = DarkTip.map('wow', 'maps.host.region', params['host']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		}
	},

	'layout': {
		'width': {
			'core': 425
		}
	},

	'templates': {
		'core': (
			'<div class="tooltip-spell">' +
				'<img class="icon" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/56/<% if(this["spell"]["icon"]) { %><%= this["spell"]["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg" />' +
				'<div class="col-70">' +
					'<div class="darktip-row headline"><%= this["spell"]["name"] %></div>' +
					'<div class="split-row">' +
						'<div class="darktip-row"><% if(this["spell"]["powerCost"]) { %><%= this["spell"]["powerCost"] %><% } %></div>' +
						'<div class="pos-right"><% if(this["spell"]["range"]) { %><%= this["spell"]["range"] %><% } %></div>' +
					'</div>' +
					'<div class="split-row">' +
						'<div class="darktip-row"><% if(this["spell"]["castTime"]) { %><%= this["spell"]["castTime"] %><% } %></div>' +
						'<div class="pos-right"><% if(this["spell"]["cooldown"]) { %><%= this["spell"]["cooldown"] %><% } %></div>' +
					'</div>' +
					'<div class="darktip-row highlight-medium"><%= this["spell"]["description"] %></div>' +
				'</div>' +
			'</div>'
		),
		'404': (
			'<div class="tooltip-spell tooltip-404">' +
				'<div class="title">404<span class="sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.spell") %></span> <span class="value"><%= this["spellid"] %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
			'</div>'
		),
		'fragments': {
		}
	},

	'i18n': {
		'en_US': {
			'loading'          : 'Loading spell...',
			'not-found'        : 'Spell not found'
		},
		'de_DE': {
			'loading'          : 'Lade Zauber...',
			'not-found'        : 'Zauber nicht gefunden'
		},
		'fr_FR': {
			'loading'          : 'Chargement Sorts...',
			'not-found'        : 'Sort introuvable'
		},
		'es_ES': {
			'loading'          : 'Cargando Hechizos...',
			'not-found'        : 'Hechizos no encontrado'
		}
	}

});
