/* **************************************************************************
 * The DarkTip plugin is a javascript based tooltip framework that enables
 * quick and easy development of modules that hook into specific aspects of a
 * webpage and display context sensitive tooltips.
 *
 * Copyright (C) 2012  Martin Gelder
 * (darkspotinthecorner {at} gmail {dot} com)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/gpl.html.
 * ************************************************************************** */

DarkTip.registerModule('wow.realm', {

	'triggers': {
		'explicit': {
			'match' : /wow\.realm:(us|eu|kr|tw|cn)\.([^\(]+)\((en|de|fr|es|ru|pt|it|ko|zh)\)/i,
			'params': {
				'1': 'region',
				'2': 'realm',
				'3': 'lang'
			}
		}
	},

	'queries': {
		'realm': {
			'required' : true,
			'condition': true,
			'call'     : '//<%= this["host"] %>/api/wow/realm/status?realm=<%= this["realm"] %>&locale=<%= this["locale"] %>',
			'caching'  : (60 * 5)
		}
	},

	'getParams': {
		'explicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.realm', 'triggers.explicit.params')));
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

	'prepareData': function(state) {
		if(Object.keys(state['data']).length === 0) {
			return false;
		}
		if(state['data']['realm']['realms'].length === 1) {
			return state['data']['realm']['realms'][0];
		}
		return false;
	},

	'templates': {
		'core': (
			'<div class="tooltip-realm">' +
				'<div class="headline-right crealmtype-<%= this["type"] %>"><%= this._loc("type." + this["type"]) %></div>' +
				'<div class="darktip-row headline"><%= this["name"] %></div>' +
				'<div class="darktip-row highlight-strong"><%= this["battlegroup"] %></div>' +
				'<div class="darktip-row">' +
					'<span class="crealmstatus-<%= this["status"] %>"><%= this._loc("status." + this["status"]) %></span>' +
					'<% if(this["queue"]) { %> (<span class="crealmqueue-<%= this["queue"] %>"><%= this._loc("queue." + this["queue"]) %></span>)<% } %>' +
				'</div>' +
				'<div class="darktip-row"><%= this._loc("population." + this["population"]) %></div>' +
				'<%= this._sub("templates.fragments.worldPvpZones") %>' +
				'<% if(this["_meta"]["extendedActive"]) { %>' +
					'<div class="darktip-row info-meta darktip-only-s"><%= this._loc("extendedInactive") %></div>' +
					'<div class="darktip-row info-meta darktip-only-x"><%= this._loc("extendedActive") %></div>' +
				'<% } %>' +
			'</div>'
		),
		'404': (
			'<div class="tooltip-realm tooltip-404">' +
				'<div class="title">404<span class="sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.realm") %></span> <span class="value"><%= this["realm"] %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
			'</div>'
		),
		'fragments': {
			'worldPvpZones': (
				'<div class="block">' +
				'<% if(this["wintergrasp"]) { %><div class="darktip-row highlight-weak">' +
					'<%= this._loc("zones.wintergrasp") %>: ' +
					'<span class="cside-<%= this["wintergrasp"]["controlling-faction"] %>">' +
						'<span class="darktip-only-s"><%= this._loc("worldpvpstatus."+this["wintergrasp"]["status"]+"."+this["wintergrasp"]["controlling-faction"]) %></span>' +
						'<span class="darktip-only-x"><%= this._loc("world-pvp-zone-next-battle") %>: <%= this._renderDateTime(this["wintergrasp"]["next"]) %></span>' +
					'</span>' +
				'</div><% } %>' +
				'<% if(this["tol-barad"]) { %><div class="darktip-row highlight-weak">' +
					'<%= this._loc("zones.tol-barad") %>: ' +
					'<span class="cside-<%= this["tol-barad"]["controlling-faction"] %>">' +
						'<span class="darktip-only-s"><%= this._loc("worldpvpstatus."+this["tol-barad"]["status"]+"."+this["tol-barad"]["controlling-faction"]) %></span>' +
						'<span class="darktip-only-x"><%= this._loc("world-pvp-zone-next-battle") %>: <%= this._renderDateTime(this["tol-barad"]["next"]) %></span>' +
					'</span>' +
				'</div><% } %>' +
				'</div>'
			)
		}
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
			},
			'zones': {
				'wintergrasp': 'Wintergrasp',
				'tol-barad'  : 'Tol Barad'
			},
			'worldpvpstatus': {
				'-1': { '0': 'Unknown',             '1': 'Unknown' },
				'0' : { '0': 'Alliance controlled', '1': 'Horde controlled' },
				'1' : { '0': 'Horde attacking',     '1': 'Alliance attacking' },
				'2' : { '0': 'Horde attacking',     '1': 'Alliance attacking' },
				'3' : { '0': 'Alliance controlled', '1': 'Horde controlled' }
			},
			'world-pvp-zone-status'     : 'World PvP zone status',
			'world-pvp-zone-next-battle': 'Next battle'
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
				'low'   : 'Geringe Bev&ouml;lkerung',
				'medium': 'Mittlere Bev&ouml;lkerung',
				'high'  : 'Hohe Bev&ouml;lkerung'
			},
			'zones': {
				'wintergrasp': 'Tausendwintersee',
				'tol-barad'  : 'Tol Barad'
			},
			'worldpvpstatus': {
				'-1': { '0': 'Unbekannt',             '1': 'Unbekannt' },
				'0' : { '0': 'In Besitz der Allianz', '1': 'In Besitz der Horde' },
				'1' : { '0': 'Horde greift an',       '1': 'Allianz greift an' },
				'2' : { '0': 'Horde greift an',       '1': 'Allianz greift an' },
				'3' : { '0': 'In Besitz der Allianz', '1': 'In Besitz der Horde' }
			},
			'world-pvp-zone-status'     : 'Status der Welt-PvP Gebiete',
			'world-pvp-zone-next-battle': 'N&auml;chste Schlacht'
		},
		'fr_FR': {
			'loading': 'Chargement...',
			'not-found': 'Royaume introuvable',
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
				'high'  : 'Population &eacute;lev&eacute;e'
			},
			'zones': {
				'wintergrasp': 'Joug-d\'hiver',
				'tol-barad'  : 'Tol Barad'
			},
			'worldpvpstatus': {
				'-1': { '0': 'Unknown',                  '1': 'Unknown' },
				'0' : { '0': 'Contrôlé par l\'Alliance', '1': 'Contrôlé par la Horde' },
				'1' : { '0': 'Horde attacking',          '1': 'Alliance attacking' },
				'2' : { '0': 'Horde attacking',          '1': 'Alliance attacking' },
				'3' : { '0': 'Contrôlé par l\'Alliance', '1': 'Contrôlé par la Horde' }
			},
			'world-pvp-zone-status'     : 'World PvP zone status',
			'world-pvp-zone-next-battle': 'Prochaine bataille'
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
				'low'   : 'baja poblaci&oacute;n',
				'medium': 'poblaci&oacute;n media',
				'high'  : 'alta poblaci&oacute;n'
			},
			'zones': {
				'wintergrasp': 'Conquista del Invierno',
				'tol-barad'  : 'Tol Barad'
			},
			'worldpvpstatus': {
				'-1': { '0': 'Unknown',             '1': 'Unknown' },
				'0' : { '0': 'Alliance controlled', '1': 'Horde controlled' },
				'1' : { '0': 'Horde attacking',     '1': 'Alliance attacking' },
				'2' : { '0': 'Horde attacking',     '1': 'Alliance attacking' },
				'3' : { '0': 'Alliance controlled', '1': 'Horde controlled' }
			},
			'world-pvp-zone-status'     : 'World PvP zone status',
			'world-pvp-zone-next-battle': 'Next battle'
		}
	}

});
