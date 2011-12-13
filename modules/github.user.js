DarkTip.registerModule('github.user', {
	
	'triggers': {
		'explicit': {
			'match' : /^github\-user:(.+)$/i,
			'params': {
				'1': 'username'
			}
		},
		/*
		'implicit': {
			'match' : /^http:\/\/www\.youtube\.com\/(v\/|watch\?v=)([A-Za-z0-9\-_]+).*$/i,
			'params': {
				'2': 'videoid'
			}
		},
		*/
		'api'     : 'https://api.github.com/users/<%= this["username"] %>',
		'hash'    : '<%= this["username"] %>'
	},
	
	'getParams': {
		'explicit': function(result) {
			var params = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('github.user', 'triggers.explicit.params')));
			return params;
		}/*,
		'implicit': function(result) {
			var params = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('youtube.video', 'triggers.implicit.params')));
			return params;
		}
		*/
	},
	
	'validateData': function(data) {
		if(typeof data === 'undefined') {
			return false;
		}
		if((typeof data['meta'] !== 'undefined') && (typeof data['meta']['status'] !== 'undefined') && (data['meta']['status'] === 200)) {
			return data['data'];
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
				'<div class="avatar"><img src="<%= this["avatar_url"] %>" alt="<%= this["login"] %>" title="<%= this["login"] %>" /></div>' +
				'<div class="col-98">' +
					'<% if(this["name"]) { %><div class="headline-right realname "><%= this["name"] %></div><% } %>' +
					'<div class="darktip-row headline username"><%= this["login"] %></div>' +
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
				'<% if(this["bio"]) { %><div class="darktip-row bio"><%= this["bio"] %></div><% } %>' +
			'</div>'				
		),
		'404':(
			'<div class="tooltip-github-user tooltip-404">' +
				'<div class="title">404<span class="sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.username") %></span> <span class="value"><%= this["username"] %></span></div>' +
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
				'public_repos': 'Öffentliche Repos:',
				'public_gists': 'Öffentliche Gists:',
				'email'       : 'E-Mail:',
				'blog'        : 'Blog:',
				'company'     : 'Unternehmen:',
				'location'    : 'Standort:'
			}
		}
	}
	
});