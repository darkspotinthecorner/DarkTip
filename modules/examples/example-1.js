DarkTip.registerModule('example-1', {
	
	'triggers': {
		'explicit': {
			'match' : /example1:(^\.)+\.([^\.]+)\.([^\.])+/i,
			'params': {
				'1': 'first',
				'2': 'second',
				'3': 'third'
			}
		},
		'api'     : 'http://www.google.de/#q=<%= this["first"] %>+<%= this["second"] %>+<%= this["third"] %>',
		'hash'    : '<%= this["first"] %>.<%= this["second"] %>.<%= this["third"] %>'
	},
	
	'templates': {
		'core':(
			'<div class="tooltip-example-1">' +
				'<div>Something...</div>' +
			'</div>'
		),
		'404':(
			'<div class="tooltip-realm tooltip-404">' +
				'<div>404 / <%= this._loc("not-found") %></div>' +
		    '</div>'
		)
	},
	
	'i18n': {
		'en_US': {
			'loading': 'Loading google...',
			'not-found': 'Query did not return JSON'
		}
	}
	
});