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
	
	'validateData': function(data) {
		if(typeof data === 'undefined') {
			return false;
		}
		return data;
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