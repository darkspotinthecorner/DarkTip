DarkTip.registerModule('wow.quest', {
	'patterns': {
		'explicit': {
			'match' : /quest:(us|eu|kr|tw|cn)\.([^\(]+)\((en|de|fr|es|ru|ko|zh)\)/i,
			'params': {
				'1': 'region',
				'2': 'questid',
				'3': 'lang'
			}
		},
		'api'     : 'http://<%= this["host"] %>/api/wow/quest/<%= this["questid"] %>?locale=<%= this["locale"] %>',
		'hash'    : '<%= this["host"] %>#<%= this["questid"] %>#<%= this["locale"] %>'
	},
	
	'getParams': {
		'explicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.quest', 'patterns.explicit.params')));
			params['host']   = DarkTip.map('wow.realm', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow.realm', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		}
	},
	
	'layout': {
		'width': {
			'core': 350
		}
	},
	
	'templates': {
		'core':(
			'<div class="tooltip-quest">' +
				'<div class="row level"><%= this["level"] %></div>' +
				'<div class="row name"><%= this["title"] %></div>' +
				'<div class="row category"><%= this["category"] %></div>' +
				'<div class="row reqLevel"><%= this._loc("reqLevel") %></div>' +
				'<% if(this["suggestedPartyMembers"] > 1) { %><%= this._loc("suggestedPartyMembers") %><% } %>' +
			'</div>'				
		),
		'404':(
			'<div class="tooltip-quest tooltip-404">' +
				'<div class="title">404<span class="sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="row quest"><span class="label"><%= this._loc("label.quest") %></span> <span class="value"><%= this["questid"] %></span></div>' +
				'<div class="row region"><span class="label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
		    '</div>'
		)
	},
	
	'i18n': {
		'en_US': {
			'loading'              : 'Loading quest...',
			'not-found'            : 'Quest not found',
			'reqLevel'             : 'Requires Level <%= this["reqLevel"] %>',
			'suggestedPartyMembers': 'Group Quest (<%= this["suggestedPartyMembers"] %>)'
		},
		'de_DE': {
			'loading'              : 'Lade Quest...',
			'not-found'            : 'Quest nicht gefunden',
			'reqLevel'             : 'Benötigt Stufe <%= this["reqLevel"] %>',
			'suggestedPartyMembers': 'Gruppenquest (<%= this["suggestedPartyMembers"] %>)'
			
		}
	}
});