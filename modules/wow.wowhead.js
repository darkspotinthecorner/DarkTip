DarkTip.registerModule('wow.wowhead', {
	
	'maps': {
		'wowheadhost': {
			'lang': {
				'www.wowhead.com': 'en',
				'de.wowhead.com' : 'de',
				'es.wowhead.com' : 'es',
				'fr.wowhead.com' : 'fr',
				'ru.wowhead.com' : 'ru'
			}
		}
	},
	
	'enhanceData': function(module, params, data) {
		var add = {
			'_meta': {
				'path_host'      : 'http://' + params['host'],
				'path_host_media': 'http://' + DarkTip.map('wow', 'maps.region.mediahost', params['region']),
				'region'         : params['region'],
				'locale'         : params['locale'],
				'module'         : module
			}
		};
		DarkTip.jq.extend(true, data, add);
		return data;
	}
	
});