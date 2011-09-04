DarkTip.registerModule('wow-realm', {
	'patterns': {
		'explicit': '...' || false,
		'implicit': '...' || false,
		'api'     : '...',
		'helpers' : {
			'one'  : '...',
			'two'  : '...',
			'three': '...'
		}
	},
	
	'prepareParams': function(params) {
		// ...
	},
	
	'validateData': function(data) {
		// ...
	},
	
	'templateTools': {
		'aaa': function(route) { /* ... */ },
		'bbb': function(route) { /* ... */ },
		'ccc': function(route) { /* ... */ }
	},
	
	'maps': {
		// ...
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