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

DarkTip.registerModule('google.plus.user', {

	'triggers': {
		'explicit': {
			'match' : /^g\+\.user:(.+)$/i,
			'params': {
				'1': 'userid'
			}
		},
		'implicit': {
			'match' : /^(https:\/\/)?plus.google.com\/u\/[0-9]+\/([0-9]+)([^0-9]?.*)$/i,
			'params': {
				'2': 'userid'
			}
		}
	},

	'queries': {
		'user': {
			'required' : true,
			'condition': true,
			'call'     : 'https://www.googleapis.com/plus/v1/people/<%= this["userid"] %>?key=<%= this["apikey"] %>'
		}
	},

	'getParams': {
		'explicit': function(result) {
			var params = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('google.plus.user', 'triggers.explicit.params')));
			params['apikey'] = DarkTip._read(DarkTip.route('google', 'apikey'));
			return params;
		},
		'implicit': function(result) {
			var params = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('google.plus.user', 'triggers.implicit.params')));
			params['apikey'] = DarkTip._read(DarkTip.route('google', 'apikey'));
			return params;
		}
	},

	'prepareData': function(state) {
		if(Object.keys(state['data']).length === 0)
		{
			return false;
		}
		if(typeof state['data']['user'] === 'undefined')
		{
			return false;
		}
		if(typeof state['data']['user']['error'] !== 'undefined')
		{
			return false;
		}

		return state['data'];
	},

	'enhanceData': function(module, params, data) {
		var add = {
			'_meta': {
				'module': module
			}
		};
		DarkTip.jq.extend(true, data, add);
		return data;
	},

	'layout': {
		'width': {
			'core': 350
		}
	},

	'templates': {
		'core':(
			'<div class="tooltip-gplus-user">' +
				'G+ User found! :)' +
			'</div>'
		),
		'404':(
			'<div class="tooltip-gplus-user tooltip-404">' +
				'<div class="title">404<span class="sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.userid") %></span> <span class="value"><%= this["userid"] %></span></div>' +
			'</div>'
		)
	},

	'i18n': {
		'en_US': {
			'loading'  : 'Loading Google+ user ...',
			'not-found': 'Google+ user not found'
		}
	}

});
