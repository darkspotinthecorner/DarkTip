DarkTip.registerModule('wow.realm', {
	
	'triggers': {
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
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.realm', 'triggers.explicit.params')));
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
				'<div class="headline-right crealmtype-<%= this["type"] %>"><%= this._loc("type." + this["type"]) %></div>' +
				'<div class="darktip-row headline"><%= this["name"] %></div>' +
				'<div class="darktip-row highlight-strong"><%= this["battlegroup"] %></div>' +
				'<div class="darktip-row">' +
					'<span class="crealmstatus-<%= this["status"] %>"><%= this._loc("status." + this["status"]) %></span>' +
					'<% if(this["queue"]) { %> (<span class="crealmqueue-<%= this["queue"] %>"><%= this._loc("queue." + this["queue"]) %></span>)<% } %>' +
				'</div>' +
				'<div class="darktip-row"><%= this._loc("population." + this["population"]) %></div>' +
			'</div>'
		),
		'404':(
			'<div class="tooltip-realm tooltip-404">' +
				'<div class="title">404<span class="sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.realm") %></span> <span class="value"><%= this["realm"] %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
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
				'low'   : 'Geringe Bevölkerung',
				'medium': 'Mittlere Bevölkerung',
				'high'  : 'Hohe Bevölkerung'
			}
		},
		'fr_FR': {
			'loading': 'Chargement...',
			'not-found': 'Aucun résultat',
			'type': {
				'pve'  : 'JcE',
				'pvp'  : 'JcJ',
				'rp'   : 'JR',
				'rppvp': 'JR JcJ'
			},
			'queue': {
				'false': 'No queue',
				'true' : 'Queue'
			},
			'status': {
				'false': 'Hors ligne',
				'true' : 'En ligne'
			},
			'population': {
				'low'   : 'Population faible',
				'medium': 'Population moyenne',
				'high'  : 'Population élevée'
			}
		},
		'es_ES': {
			'loading': 'Cargando reino...',
			'not-found': 'Reino no encontrado',
			'type': {
				'pve'  : 'JcE',
				'pvp'  : 'JcJ',
				'rp'   : 'JR',
				'rppvp': 'JR JcJ'
			},
			'queue': {
				'false': 'no hay cola',
				'true' : 'hay cola'
			},
			'status': {
				'false': 'no conectado',
				'true' : 'conectado'
			},
			'population': {
				'low'   : 'baja población',
				'medium': 'población media',
				'high'  : 'alta población'
			}
		}
	}
	
});