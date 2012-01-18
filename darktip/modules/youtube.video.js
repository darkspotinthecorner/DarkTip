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
			'call'     : 'http://gdata.youtube.com/feeds/api/videos?v=2&alt=jsonc&q=%22<%= this["videoid"] %>%22&max-results=1&safesearch=strict'
		}
	},
	
	'getParams': {
		'explicit': function(result) {
			var params = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('youtube.video', 'triggers.explicit.params')));
			return params;
		},
		'implicit': function(result) {
			var params = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('youtube.video', 'triggers.implicit.params')));
			return params;
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