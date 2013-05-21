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

DarkTip.registerModule('wow.character.spec', {

	'triggers': {
		'explicit': {
			'match' : /wow\.character.spec:(us|eu|kr|tw|cn)\.([^\.]+)\.([^\(]+)\((en|de|fr|es|ru|pt|it|ko|zh)\)/i,
			'params': {
				'1': 'region',
				'2': 'realm',
				'3': 'character',
				'4': 'lang'
			}
		},
		'implicit': {
			'match' : /(?:https?:\/\/)?(us\.battle\.net|eu\.battle\.net|kr\.battle\.net|tw\.battle\.net|cn\.battle\.net|www\.battlenet\.com\.cn)\/wow\/(en|de|fr|es|ru|pt|it|ko|zh)\/character\/([^\/]+)\/([^\/#]+)\/[^#]*#talents/i,
			'params': {
				'1': 'host',
				'2': 'lang',
				'3': 'realm',
				'4': 'character'
			}
		}
	},

	'queries': {
		'character': {
			'required' : true,
			'condition': true,
			'call'     : '//<%= this["host"] %>/api/wow/character/<%= this["realm"] %>/<%= this["character"] %>?fields=guild,talents&locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 1)
		}
	},

	'getParams': {
		'explicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.character.spec', 'triggers.explicit.params')));
			params['host']   = DarkTip.map('wow', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		},
		'implicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.character.spec', 'triggers.implicit.params')));
			params['region'] = DarkTip.map('wow', 'maps.host.region', params['host']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		}
	},

	'layout': {
		'width': {
			'core': 380
		}
	},

	'templates': {
		'core': (
			'<div class="tooltip-character tooltip-spec">' +
				'<img class="icon" src="<%= this["_meta"]["path_host"] %>/static-render/<%= this["_meta"]["region"] %>/<%= this["character"]["thumbnail"] %>?alt=/wow/static/images/2d/avatar/<%= this["character"]["race"] %>-<%= this["character"]["gender"] %>.jpg" />' +
				/* --- START simple mode -------------------------------- */
				'<div class="col-98<% if(this["character"]["talentSpecCount"] > 1) { %> darktip-only-s<% } %>">' +
					'<div class="headline-right"><%= this._loc("specActive") %></div>' +
					'<div class="darktip-row headline cclass-<%= this["character"]["class"] %>"><%= this["character"]["name"] %></div>' +
					'<div class="darktip-row"><%= this._loc("classification") %></div>' +
					'<%= this._subLoop("templates.fragments.talentSpecActive", this["character"]["talents"]) %>' +
					'<% if(this["_meta"]["extendedActive"] && (this["character"]["talentSpecCount"] > 1)) { %>' +
						'<div class="darktip-row info-meta"><%= this._loc("extendedInactive") %></div>' +
					'<% } else { %>' +
						'<div class="darktip-row info-meta"><%= this._loc("extendedNotAvailable") %></div>' +
					'<% } %>' +
				'</div>' +
				/* --- END simple mode ---------------------------------- */
				/* --- START extended mode ------------------------------ */
				'<% if(this["_meta"]["extendedActive"] && (this["character"]["talentSpecCount"] > 1)) { %>' +
					'<div class="col-98 darktip-only-x">' +
						'<div class="headline-right"><%= this._loc("specInactive") %></div>' +
						'<div class="darktip-row headline cclass-<%= this["character"]["class"] %>"><%= this["character"]["name"] %></div>' +
						'<div class="darktip-row"><%= this._loc("classification") %></div>' +
						'<%= this._subLoop("templates.fragments.talentSpecInactive", this["character"]["talents"]) %>' +
						'<div class="darktip-row info-meta"><%= this._loc("extendedActive") %></div>' +
					'</div>' +
				'<% } %>' +
				/* --- END extended mode -------------------------------- */
			'</div>'
		),
		'fragments': {
			'talentSpecActive': (
				'<% if(this["selected"]) { %>' +
					'<%= this._sub("templates.fragments.talentSpec") %>' +
				'<% } %>'
			),
			'talentSpecInactive': (
				'<% if((typeof this["selected"] === "undefined") || (!this["selected"])) { %>' +
					'<%= this._sub("templates.fragments.talentSpec") %>' +
				'<% } %>'
			),
			'talentSpec': (
				'<% if(this["spec"]) { %>' +
					'<div class="darktip-row spec block">' +
						'<img class="icon-18x18" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/<% if(this["spec"]["icon"]) { %><%= this["spec"]["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg"/> ' +
						'<%= this["spec"]["name"] %> <span class="role">(<%= this["spec"]["role"] %>)</span>' +
						'<% if(this["talents"].length > 0) { %>' +
							'<%= this._subLoop("templates.fragments.talent", this["talents_ordered"]) %>' +
						'<% } %>' +
					'</div>' +
					'<% if(this["glyphs"]) { %>' +
						'<%= this._sub("templates.fragments.talentSpecGlyphMajor", this["glyphs"]) %>' +
						'<%= this._sub("templates.fragments.talentSpecGlyphMinor", this["glyphs"]) %>' +
					'<% } %>' +
				'<% } %>'
			),
			'talent': (
				'<div class="block talent">' +
					'<img class="icon-10x10" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/<% if(this["spell"]["icon"]) { %><%= this["spell"]["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg"/> ' +
					'<%= this["spell"]["name"] %>' +
				'</div>'
			),
			'talentSpecGlyphMajor': (
				'<div class="darktip-row spec block">' +
					'<% if((this["major"]) && (this["major"].length)) { %>' +
						'<div class="highlight-weak"><%= this._loc("glyphMajor") %></div>' +
						'<%= this._subLoop("templates.fragments.glyph", this["major"]) %>' +
					'<% } else { %>' +
						'<span class="highlight-weak"><%= this._loc("glyphMajorEmpty") %></span>' +
					'<% } %>' +
				'</div>'
			),
			'talentSpecGlyphMinor': (
				'<div class="darktip-row spec block">' +
					'<% if((this["minor"]) && (this["minor"].length)) { %>' +
						'<div class="highlight-weak"><%= this._loc("glyphMinor") %></div>' +
						'<%= this._subLoop("templates.fragments.glyph", this["minor"]) %>' +
					'<% } else { %>' +
						'<span class="highlight-weak"><%= this._loc("glyphMinorEmpty") %></span>' +
					'<% } %>' +
				'</div>'
			),
			'glyph': (
				'<div class="block glyph">' +
					'<img class="icon-10x10" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/<% if(this["icon"]) { %><%= this["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg"/> ' +
					'<%= this["name"] %>' +
				'</div>'
			)
		}
	},

	'i18n': {
		'en_US': {
			'loading'             : 'Loading character...',
			'not-found'           : 'Character not found',
			'extendedInactive'    : 'Hold [<%= this["_meta"]["extendedKeyCodeLabel"] %>] for inactive spec',
			'extendedActive'      : 'Release [<%= this["_meta"]["extendedKeyCodeLabel"] %>] for active spec',
			'extendedNotAvailable': 'No alternate spec available',
			'glyphMajor'          : 'Major glyphs:',
			'glyphMinor'          : 'Minor glyphs:',
			'glyphMajorEmpty'     : 'No major glyphs used',
			'glyphMinorEmpty'     : 'No minor glyphs used',
			'specActive'          : 'Active spec',
			'specInactive'        : 'Inactive spec'
		},
		'de_DE': {
			'loading'             : 'Lade Charakter...',
			'not-found'           : 'Charakter nicht gefunden',
			'extendedInactive'    : '[<%= this["_meta"]["extendedKeyCodeLabel"] %>] gedr&uuml;ckt für inaktive Skillung',
			'extendedActive'      : '[<%= this["_meta"]["extendedKeyCodeLabel"] %>] loslassen für aktive Skillung',
			'extendedNotAvailable': 'Keine alternative Skillung vorhanden',
			'glyphMajor'          : 'Erhebliche Glyphen:',
			'glyphMinor'          : 'Geringe Glyphen:',
			'glyphMajorEmpty'     : 'Keine erheblichen Glyphen',
			'glyphMinorEmpty'     : 'Keine geringen Glyphen',
			'specActive'          : 'Aktive Skillung',
			'specInactive'        : 'Inaktive Skillung'
		},
		'fr_FR': {
			'loading'             : 'Chargement personnage...',
			'not-found'           : 'Aucun personnage trouv&eacute;',
			'extendedInactive'    : 'Maintenez [<%= this["_meta"]["extendedKeyCodeLabel"] %>] pour spec inactive',
			'extendedActive'      : 'Relâchez [<%= this["_meta"]["extendedKeyCodeLabel"] %>] pour spec actif',
			'extendedNotAvailable': 'Sans spécialisation remplacement disponible',
			'glyphMajor'          : 'Glyphes majeurs:',
			'glyphMinor'          : 'Glyphes mineurs:',
			'glyphMajorEmpty'     : 'Pas de glyphes majeurs utilisés',
			'glyphMinorEmpty'     : 'Pas de glyphes mineurs utilisés',
			'specActive'          : 'Spéc active',
			'specInactive'        : 'Spéc inactive'
		},
		'es_ES': {
			'loading'             : 'Cargando personaje...',
			'not-found'           : 'Personaje no encontrado',
			'extendedInactive'    : 'Mantenga pulsado [<%= this["_meta"]["extendedKeyCodeLabel"] %>] para spec inactivo',
			'extendedActive'      : 'Suelte [<%= this["_meta"]["extendedKeyCodeLabel"] %>] para spec activo',
			'extendedNotAvailable': 'No disponible especialización alternativo',
			'glyphMajor'          : 'Glifos sublimes:',
			'glyphMinor'          : 'Glifos menores:',
			'glyphMajorEmpty'     : 'No hay glifos sublimes',
			'glyphMinorEmpty'     : 'No hay glifos menores',
			'specActive'          : 'Active spec',
			'specInactive'        : 'Inactive spec'
		}
	}

});
