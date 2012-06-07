DarkTip.registerModule('wow.achievement', {
	
	'triggers': {
		'explicit': {
			'match' : /achievement:(us|eu|kr|tw|cn)\.([^\(]+)\((en|de|fr|es|ru|ko|zh)\)/i,
			'params': {
				'1': 'region',
				'2': 'achievementid',
				'3': 'lang'
			}
		}
	},
	
	'queries': {
		'achievement': {
			'required' : true,
			'condition': true,
			'call'     : 'http://<%= this["host"] %>/api/wow/achievement/<%= this["achievementid"] %>?locale=<%= this["locale"] %>'
		}
	},

	'getParams': {
		'explicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.achievement', 'triggers.explicit.params')));
			params['host']   = DarkTip.map('wow', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		},
		'implicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.achievement', 'triggers.implicit.params')));
			params['region'] = DarkTip.map('wow', 'maps.host.region', params['host']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		}
	},

	'layout': {
		'width': {
			'core': 425
		}
	},

	'templates': {
		'core': (
			'<div class="tooltip-achievement">' +
				'<img class="icon" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/56/<% if(this["achievement"]["icon"]) { %><%= this["achievement"]["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg" />' +
    			'<div class="col-70">' +
					'<div class="headline-right"><span class="icon-achievenemtpoints"><%= this["achievement"]["points"] %></span></div>' +
					'<div class="darktip-row headline"><%= this["achievement"]["title"] %></div>' +
					'<div class="darktip-row highlight-reduced"><%= this["achievement"]["description"] %></div>' +
				'</div>' +
			'</div>'
		),
		'404': (
			'<div class="tooltip-achievement tooltip-404">' +
				'<div class="title">404<span class="sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.achievement") %></span> <span class="value"><%= this["achievementid"] %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
		    '</div>'
		)
	},

	'i18n': {
		'en_US': {
			'loading'       : 'Loading Achievement...',
			'not-found'     : 'Achievement not found'
		},
		'de_DE': {
			'loading'       : 'Lade Erfolg...',
			'not-found'     : 'Erfolg nicht gefunden'
		},
		'fr_FR': {
			'loading'       : 'Chargement Avantage...',
			'not-found'     : 'Aucune Avantage trouvée'
		},
		'es_ES': {
			'loading'       : 'Cargando ventaja...',
			'not-found'     : 'Ventaja no encontrada'
		}
	}
	
});