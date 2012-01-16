DarkTip.registerModule('google.plus.user', {
	
	'triggers': {
		'explicit': {
			'match' : /^g\+user:(.+)$/i,
			'params': {
				'1': 'userid'
			}
		},
		'implicit': {
			'match' : /^(https:\/\/)?plus.google.com\/u\/[0-9]+\/([0-9]+)([^0-9]?.*)$/i,
			'params': {
				'2': 'userid'
			}
		},
	},
	
	'queries': {
		'user': {
			'required' : true,
			'condition': true,
			'call'     : 'https://www.googleapis.com/plus/v1/people/<%= this["userid"] %>?key=<%= this["apikey"] %>'
		}
	},
	
	'getParams': {
		'explicit': function(result) {
			var params = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('google.plus.user', 'triggers.explicit.params')));
			params['apikey'] = DarkTip._read(DarkTip.route('google', 'apikey'));
			return params;
		},
		'implicit': function(result) {
			var params = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('google.plus.user', 'triggers.implicit.params')));
			params['apikey'] = DarkTip._read(DarkTip.route('google', 'apikey'));
			return params;
		}
	},
	
	'prepareData': function(state) {
		console.log(['prepareData'], state);
		if(Object.keys(state['data']).length === 0)
		{
			return false;
		}
		if(typeof state['data']['user'] === 'undefined')
		{
			return false;
		}
		if(typeof state['data']['user']['error'] !== 'undefined')
		{
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
	
	'layout': {
		'width': {
			'core': 350
		}
	},
	
	'templates': {
		'core':(
			'<div class="tooltip-gplus-user">' +
				'G+ User found! :)' +
			'</div>'				
		),
		'404':(
			'<div class="tooltip-gplus-user tooltip-404">' +
				'<div class="title">404<span class="sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.userid") %></span> <span class="value"><%= this["userid"] %></span></div>' +
		    '</div>'
		)
	},	
	
	'i18n': {
		'en_US': {
			'loading'  : 'Loading Google+ user ...',
			'not-found': 'Google+ user not found',
		}
	}
	
});
