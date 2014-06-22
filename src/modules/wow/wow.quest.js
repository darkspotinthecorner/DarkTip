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

DarkTip.registerModule('wow.quest', {

	'triggers': {
		'explicit': {
			'match' : /wow\.quest:(us|eu|kr|tw|cn)\.([^\(]+)\((en|de|fr|es|ru|pt|it|ko|zh)\)/i,
			'params': {
				'1': 'region',
				'2': 'questid',
				'3': 'lang'
			}
		}
	},

	'queries': {
		'quest': {
			'required' : true,
			'condition': true,
			'call'     : '//<%= this["host"] %>/api/wow/quest/<%= this["questid"] %>?locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 90)
		}
	},

	'getParams': {
		'explicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.quest', 'triggers.explicit.params')));
			params['host']   = DarkTip.map('wow.realm', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow.realm', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		}
	},

	'layout': {
		'width': {
			'core': 350
		}
	},

	'templates': {
		'core':(
			'<div class="tooltip-quest">' +
				'<div class="darktip-headline-right"><%= this["quest"]["level"] %></div>' +
				'<div class="darktip-row darktip-headline darktip-highlight-medium"><%= this["quest"]["title"] %></div>' +
				'<div class="darktip-row darktip-highlight-strong"><%= this["quest"]["category"] %></div>' +
				'<div class="darktip-row"><%= this._loc("reqLevel") %></div>' +
				'<% if(this["quest"]["suggestedPartyMembers"] > 1) { %><div class="darktip-row"><%= this._loc("suggestedPartyMembers") %></div><% } %>' +
			'</div>'
		),
		'404':(
			'<div class="tooltip-quest darktip-tooltip-404">' +
				'<div class="darktip-title">404<span class="darktip-sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.quest") %></span> <span class="value"><%= this["questid"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
			'</div>'
		)
	},

	'i18n': {
		'en_US': {
			'loading'              : 'Loading quest...',
			'not-found'            : 'Quest not found',
			'reqLevel'             : 'Requires Level <%= this["quest"]["reqLevel"] %>',
			'suggestedPartyMembers': 'Group Quest (<%= this["quest"]["suggestedPartyMembers"] %>)'
		},
		'de_DE': {
			'loading'              : 'Lade Quest...',
			'not-found'            : 'Quest nicht gefunden',
			'reqLevel'             : 'Ben&ouml;tigt Stufe <%= this["quest"]["reqLevel"] %>',
			'suggestedPartyMembers': 'Gruppenquest (<%= this["quest"]["suggestedPartyMembers"] %>)'
		},
		'fr_FR': {
			'loading'              : 'Chargement...',
			'not-found'            : 'Quête introuvable',
			'reqLevel'             : 'Niveau requis <%= this["quest"]["reqLevel"] %>',
			'suggestedPartyMembers': 'Qu&ecirc;te de groupe (<%= this["quest"]["suggestedPartyMembers"] %>)'
		},
		'es_ES': {
			'loading'              : 'Cargando misi&oacute;n...',
			'not-found'            : 'Misi&oacute;n no encontrada',
			'reqLevel'             : 'Requiere nivel <%= this["quest"]["reqLevel"] %>',
			'suggestedPartyMembers': 'Misi&oacute;n de Grupo (<%= this["quest"]["suggestedPartyMembers"] %>)'
		},
		'it_IT': {
			'loading'              : 'Caricamento missione...',
			'not-found'            : 'Missione non trovata',
			'reqLevel'             : 'Richiede il livello <%= this["quest"]["reqLevel"] %>',
			'suggestedPartyMembers': 'Missione di gruppo (<%= this["quest"]["suggestedPartyMembers"] %>)'
		}		
	}

});
