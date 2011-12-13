DarkTip.registerModule('wow.quest', {
	
	'triggers': {
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
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.quest', 'triggers.explicit.params')));
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
				'<div class="headline-right"><%= this["level"] %></div>' +
				'<div class="darktip-row headline highlight-medium"><%= this["title"] %></div>' +
				'<div class="darktip-row highlight-strong"><%= this["category"] %></div>' +
				'<div class="darktip-row"><%= this._loc("reqLevel") %></div>' +
				'<% if(this["suggestedPartyMembers"] > 1) { %><div class="darktip-row"><%= this._loc("suggestedPartyMembers") %></div><% } %>' +
			'</div>'				
		),
		'404':(
			'<div class="tooltip-quest tooltip-404">' +
				'<div class="title">404<span class="sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.quest") %></span> <span class="value"><%= this["questid"] %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
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
		},
		'fr_FR': {
			'loading'              : 'Chargement...',
			'not-found'            : 'Aucun résultat',
			'reqLevel'             : 'Niveau requis <%= this["reqLevel"] %>',
			'suggestedPartyMembers': 'Quête de groupe (<%= this["suggestedPartyMembers"] %>)'
		},
		'es_ES': {
			'loading'              : 'Cargando misión...',
			'not-found'            : 'Misión no encontrada',
			'reqLevel'             : 'Requiere nivel <%= this["reqLevel"] %>',
			'suggestedPartyMembers': 'Misión de Grupo (<%= this["suggestedPartyMembers"] %>)'
		}
	}
	
});