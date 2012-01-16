DarkTip.registerModule('google.plus', {
	
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
			'loading'  : 'Loading data from Google+ ...',
			'not-found': 'Google+ data not found',
			'label'    : {
				'userid': 'User ID:'
			}
		}
	}
	
});
