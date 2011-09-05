DarkTip.registerModule('wow-realm', {
	'patterns': {
		'explicit': {
			'match' : /realm:(us|eu|kr|tw|cn)\.([^\(]+)\((en|de|fr|es|ru|ko|zh)\)/,
			'params': {
				'1': 'region',
				'2': 'realm',
				'3': 'lang'
			}
		},
		'implicit': false,
		'api'     : 'http://<%= this["host"] %>/api/wow/realm/status?realm=<%= this["realm"] %>&locale=<%= this["locale"] %>',
		'hash'    : '<%= this["host"] %>#<%= this["realm"] %>#<%= this["locale"] %>'
	},
	
	'prepareParams': {
		'explicit': function(params) {
			params['host']   = DarkTip.map('wow', 'region', params['region'], 'host');
			params['locale'] = DarkTip.map('wow', 'region+lang', (params['region'] + '+' + params['lang']), 'locale');
			return params;
		}
	},
	
	'validateData': function(data) {
		if(typeof data === 'undefined') {
			return false;
		}
		if(data['realms'].length === 1) {
			return data['realms'][0];
		}
		return false;
	},
	
	'templateTools': {},
	
	'maps': {},
	
	'layout': {
		'width': {
			'core': 250,
			'404' : 300
		}
	},
	
	'templates': {
		'core': ('...'),
		'404' : ('...'),
		'fragments': {
			'foo': ('...'),
			'bar': ('...'),
			'baz': ('...')
		}
	},
	
	'i18n': {
		'en_US': {
			//...
		},
		// ...
	}
});