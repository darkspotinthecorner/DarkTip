DarkTip.registerModule('github', {
	
	'triggers': {
		'apiParams': {
			'callback': 'callback'
		}
	},
	
	'maps': {
	},
	
	'layout': {
		'css': {
			'class': 'darktip-tooltip-github'
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
			'loading'  : 'Loading GitHub data...',
			'not-found': 'GitHub data not found',
		},
		'de_DE': {
			'loading'  : 'Lade GitHub Daten...',
			'not-found': 'Keine GitHub Daten gefunden',
		}
	}
	
});

/*

https://api.github.com/users/darkspotinthecorner/repos?callback=foo

*/