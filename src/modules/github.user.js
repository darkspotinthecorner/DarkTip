/* **************************************************************************
 * The DarkTip plugin is a javascript based tooltip framework that enables
 * quick and easy development of modules that hook into specific aspects of a
 * webpage and display context sensitive tooltips.
 *
 * Copyright (C) 2014 Martin Gelder
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

DarkTip.registerModule('github.user', {

	'triggers': {
		'explicit': {
			'match' : /^github\.user:(.+)$/i,
			'params': {
				'1': 'username'
			}
		}
	},

	'queries': {
		'user': {
			'required' : true,
			'condition': true,
			'call'     : '//api.github.com/users/<%= this["username"] %>',
			'caching'  : (60 * 60 * 24 * 5)
		}
	},

	'getParams': {
		'explicit': function(result) {
			return DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('github.user', 'triggers.explicit.params')));
		}
		/*
		'implicit': function(result) {
			var params = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('youtube.video', 'triggers.implicit.params')));
			return params;
		}
		*/
	},

	'prepareData': function(state) {
		if(Object.keys(state['data']).length === 0) {
			return false;
		}
		if((typeof state['data']['user']['meta'] !== 'undefined') && (typeof state['data']['user']['meta']['status'] !== 'undefined') && (state['data']['user']['meta']['status'] === 200)) {
			return state['data']['user']['data'];
		}
		return false;
	},

	'layout': {
		'width': {
			'core': 350
		}
	},

	'templates': {
		'core':(
			'<div class="tooltip-github-user">' +
				'<div class="darktip-avatar"><img src="<%= this["avatar_url"] %>" alt="<%= this["login"] %>" title="<%= this["login"] %>" /></div>' +
				'<div class="darktip-col-98">' +
					'<% if(this["name"]) { %><div class="darktip-headline-right darktip-realname "><%= this["name"] %></div><% } %>' +
					'<div class="darktip-row darktip-headline darktip-username"><%= this["login"] %></div>' +
					'<div class="githubbed">' +
						'<% if(this["followers"]) { %><div class="followers"><label><%= this._loc("label.followers") %></label> <%= this["followers"] %></div><% } %>' +
						'<% if(this["following"]) { %><div class="following"><label><%= this._loc("label.following") %></label> <%= this["following"] %></div><% } %>' +
						'<% if(this["public_repos"]) { %><div class="public_repos"><label><%= this._loc("label.public_repos") %></label> <%= this["public_repos"] %></div><% } %>' +
						'<% if(this["public_gists"]) { %><div class="public_gists"><label><%= this._loc("label.public_gists") %></label> <%= this["public_gists"] %></div><% } %>' +
					'</div>' +
					'<div class="personals">' +
						'<% if(this["email"]) { %><div class="email"><label><%= this._loc("label.email") %></label> <%= this["email"] %></div><% } %>' +
						'<% if(this["blog"]) { %><div class="blog"><label><%= this._loc("label.blog") %></label> <%= this["blog"] %></div><% } %>' +
						'<% if(this["company"]) { %><div class="company"><label><%= this._loc("label.company") %></label> <%= this["company"] %></div><% } %>' +
						'<% if(this["location"]) { %><div class="location"><label><%= this._loc("label.location") %></label> <%= this["location"] %></div><% } %>' +
					'</div>' +
				'</div>' +
				'<% if(this["bio"]) { %><div class="darktip-row darktip-bio"><%= this["bio"] %></div><% } %>' +
			'</div>'
		),
		'404':(
			'<div class="tooltip-github-user darktip-tooltip-404">' +
				'<div class="darktip-title">404<span class="darktip-sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.username") %></span> <span class="value"><%= this["username"] %></span></div>' +
			'</div>'
		)
	},

	'i18n': {
		'en_US': {
			'loading'  : 'Loading GitHub user...',
			'not-found': 'GitHub user not found',
			'label'    : {
				'username'    : 'User:',
				'followers'   : 'Followers:',
				'following'   : 'Following:',
				'public_repos': 'Public repos:',
				'public_gists': 'Public gists:',
				'email'       : 'Email:',
				'blog'        : 'Blog:',
				'company'     : 'Company:',
				'location'    : 'Location:'
			}
		},
		'de_DE': {
			'loading'  : 'Lade GitHub Benutzer...',
			'not-found': 'GitHub Benutzer nicht gefunden',
			'label'    : {
				'username'    : 'Benutzer:',
				'followers'   : 'Gefolgt von:',
				'following'   : 'Verfolgt:',
				'public_repos': '&Ouml;ffentliche Repos:',
				'public_gists': '&Ouml;ffentliche Gists:',
				'email'       : 'E-Mail:',
				'blog'        : 'Blog:',
				'company'     : 'Unternehmen:',
				'location'    : 'Standort:'
			}
		}
	}

});
