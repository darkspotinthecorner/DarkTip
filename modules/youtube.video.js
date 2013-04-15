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

DarkTip.registerModule('youtube.video', {

	'triggers': {
		'explicit': {
			'match' : /^youtube\-video:(.+)$/i,
			'params': {
				'1': 'videoid'
			}
		},
		'implicit': {
			'match' : /^(http:\/\/)?www\.youtube\.com\/(v\/|watch\?v=)([A-Za-z0-9\-_]+).*$/i,
			'params': {
				'3': 'videoid'
			}
		}
	},

	'queries': {
		'video': {
			'required' : true,
			'condition': true,
			'call'     : '//gdata.youtube.com/feeds/api/videos?v=2&alt=jsonc&q=%22<%= this["videoid"] %>%22&max-results=1&safesearch=strict',
			'caching'  : (60 * 60 * 1)
		}
	},

	'getParams': {
		'explicit': function(result) {
			return DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('youtube.video', 'triggers.explicit.params')));
		},
		'implicit': function(result) {
			return DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('youtube.video', 'triggers.implicit.params')));
		}
	},

	'prepareData': function(state) {
		if(Object.keys(state['data']).length === 0) {
			return false;
		}
		if((typeof state['data']['video']['data'] !== 'undefined') && (typeof state['data']['video']['data']['items'] !== 'undefined') && (state['data']['video']['data']['items'].length > 0)) {
			return state['data']['video']['data']['items'][0];
		}
		return false;
	},

	'layout': {
		'width': {
			'core': 370
		}
	},

	'templates': {
		'core':(
			'<div class="tooltip-youtube-video">' +
				'<object type="application/x-shockwave-flash" style="width:350px; height:287px;" data="http://www.youtube.com/v/<%= this["id"] %>?rel=0&amp;autoplay=1&amp;showsearch=0&amp;showinfo=0">' +
					'<param name="movie" value="http://www.youtube.com/v/<%= this["id"] %>?rel=0&amp;autoplay=1&amp;showsearch=0&amp;showinfo=0" />' +
				'</object>' +
			'</div>'
		),
		'404':(
			'<div class="tooltip-youtube-video tooltip-404">' +
				'<div class="title">404<span class="sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.video") %></span> <span class="value"><%= this["videoid"] %></span></div>' +
			'</div>'
		)
	},

	'i18n': {
		'en_US': {
			'loading'  : 'Loading Youtube video...',
			'not-found': 'Youtube video not found'
		},
		'de_DE': {
			'loading'  : 'Lade Youtube Video...',
			'not-found': 'Youtube Video nicht gefunden'
		}
	}

});
