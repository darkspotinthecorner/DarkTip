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

DarkTip.registerModule('youtube', {

	'triggers': {
		'apiParams': {
			'callback': 'callback'
		}
	},

	// Newest video from user {username}: http://gdata.youtube.com/feeds/api/users/{username}/uploads?v=2&alt=jsonc&max-results=1
	// Search for video by id {videoid}: http://gdata.youtube.com/feeds/api/videos?v=2&alt=jsonc&q={videoid}&max-results=1&safesearch=strict

	'maps': {
	},

	'layout': {
		'css': {
			'class': 'darktip-tooltip-youtube'
		}
	},

	'prepareData': function(state) {
		if(Object.keys(state['data']).length === 0) {
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

	'i18n': {
		'en_US': {
			'loading'  : 'Loading Youtube data...',
			'not-found': 'Youtube data not found',
			'label'    : {
				'video': 'Video:'
			}
		},
		'de_DE': {
			'loading'  : 'Lade Youtube Daten...',
			'not-found': 'Keine Youtube Daten gefunden',
			'label'    : {
				'video': 'Video:'
			}
		}
	}

});