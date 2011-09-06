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
	
	'templates': {
		'core':(
			'<div class="tooltip-quest">' +
				'<div class="row level"><%= this["level"] %></div>' +
				'<div class="row name"><%= this["title"] %></div>' +
				'<div class="row category"><%= this["category"] %></div>' +
				'<div class="row reqLevel"><%= this._loc("wow.quest", "templates.reqLevel", this) %></div>' +
				'<% if(this["suggestedPartyMembers"] > 1) { %><%= this._loc("wow.quest", "templates.suggestedPartyMembers", this) %><% } %>' +
			'</div>'				
		),
		'404':(
			'<div class="tooltip-quest tooltip-404">' +
				'<div class="title">404<span class="sub"> / <%= this._loc("wow.quest", "not-found", this) %></span></div>' +
				'<div class="row quest"><span class="label"><%= this._loc("wow.quest", "label.quest", this) %></span> <span class="value"><%= this["questid"] %></span></div>' +
				'<div class="row region"><span class="label"><%= this._loc("wow.quest", "label.region", this) %></span> <span class="value"><%= this["region"] %></span></div>' +
		    '</div>'
		)
	},
	
	'i18n': {
		'en_US': {
			'loading': 'Loading quest...',
			'not-found': 'Quest not found',
			'templates': {
				'reqLevel': 'Requires Level <%= this["reqLevel"] %>',
				'suggestedPartyMembers': 'Group Quest (<%= this["suggestedPartyMembers"] %>)'
			}
		},
		'de_DE': {
			'loading': 'Lade Quest...',
			'not-found': 'Quest nicht gefunden',
			'templates': {
				'reqLevel': 'Benötigt Stufe <%= this["reqLevel"] %>',
				'suggestedPartyMembers': 'Gruppenquest (<%= this["suggestedPartyMembers"] %>)'
			}
		}
	}
});