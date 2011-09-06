DarkTip.registerModule('wow.realm', {
	'patterns': {
		'explicit': {
			'match' : /realm:(us|eu|kr|tw|cn)\.([^\(]+)\((en|de|fr|es|ru|ko|zh)\)/i,
			'params': {
				'1': 'region',
				'2': 'realm',
				'3': 'lang'
			}
		},
		'api'     : 'http://<%= this["host"] %>/api/wow/realm/status?realm=<%= this["realm"] %>&locale=<%= this["locale"] %>',
		'hash'    : '<%= this["host"] %>#<%= this["realm"] %>#<%= this["locale"] %>'
	},
	
	'getParams': {
		'explicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.realm', 'patterns.explicit.params')));
			params['host']   = DarkTip.map('wow.realm', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow.realm', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
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
	
	'templates': {
		'core':(
			'<div class="tooltip-realm">' +
				'<div class="type crealmtype-<%= this["type"] %>"><%= this.___.loc("wow.realm", ("type." + this["type"]), this) %></div>' +
				'<div class="row name"><%= this["name"] %></div>' +
				'<div class="row battlegroup"><%= this["battlegroup"] %><span class="darktip-only-x"> XXXX</span></div>' +
				'<div class="row status">' +
					'<span class="crealmstatus-<%= this["status"] %>"><%= this.___.loc("wow.realm", ("status." + this["status"]), this) %></span>' +
					'<% if(this["queue"]) { %> (<span class="crealmqueue-<%= this["queue"] %>"><%= this.___.loc("wow.realm", ("queue." + this["queue"]), this) %></span>)<% } %>' +
				'</div>' +
				'<div class="darktip-only-x">I\'m extended only...</div>' +
			'</div>'
		),
		'404':(
			'<div class="tooltip-realm tooltip-404">' +
				'<div class="title">404<span class="sub"> / <%= this.___.loc("wow.realm", "not-found", this) %></span></div>' +
				'<div class="row realm"><span class="label"><%= this.___.loc("wow.realm", "label.realm", this) %></span> <span class="value"><%= this["realm"] %></span></div>' +
				'<div class="row region"><span class="label"><%= this.___.loc("wow.realm", "label.region", this) %></span> <span class="value"><%= this["region"] %></span></div>' +
		    '</div>'
		)
	},
	
	'i18n': {
		'en_US': {
			'loading': 'Loading realm...',
			'not-found': 'Realm not found',
			'type': {
				'pve'  : 'PvE',
				'pvp'  : 'PvP',
				'rp'   : 'RP',
				'rppvp': 'RPPvP'
			},
			'queue': {
				'false': 'No queue',
				'true' : 'Queue'
			},
			'status': {
				'false': 'Offline',
				'true' : 'Online'
			},
			'population': {
				'low'   : 'Low population',
				'medium': 'Medium population',
				'high'  : 'High population'
			}
		},
		'de_DE': {
			'loading': 'Lade Realm...',
			'not-found': 'Realm nicht gefunden',
			'type': {
				'pve'  : 'PvE',
				'pvp'  : 'PvP',
				'rp'   : 'RP',
				'rppvp': 'RPPvP'
			},
			'queue': {
				'false': 'Keine Warteschlange',
				'true' : 'Warteschlange'
			},
			'status': {
				'false': 'Offline',
				'true' : 'Online'
			},
			'population': {
				'low'   : 'Niedrige Bevölkerung',
				'medium': 'Mittlere Bevölkerung',
				'high'  : 'Hoche Bevölkerung'
			}
			
		}
	}
});