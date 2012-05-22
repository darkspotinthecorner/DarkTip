/* **************************************************************************
 * The DarkTip plugin is a javascript based tooltip framework that enables
 * quick and easy development of modules that hook into specific aspects of a
 * webpage and display context sensitive tooltips.
 * 
 * Copyright (C) 2011  Martin Gelder
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

// Paul Irish's console.log() wrapper // http://paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
if(!window.log)
{
	window.log=function(){log.history=log.history||[];log.history.push(arguments);if(this.console){console.log(Array.prototype.slice.call(arguments))}};
}

// Check if yepnope.js is defined, if not, we need to define it
if(!window.yepnope)
{
	/*yepnope1.5.3|WTFPL*/
	(function(a,b,c){function d(a){return o.call(a)=="[object Function]"}function e(a){return typeof a=="string"}function f(){}function g(a){return!a||a=="loaded"||a=="complete"||a=="uninitialized"}function h(){var a=p.shift();q=1,a?a.t?m(function(){(a.t=="c"?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){a!="img"&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l={},o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};y[c]===1&&(r=1,y[c]=[],l=b.createElement(a)),a=="object"?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),a!="img"&&(r||y[c]===2?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i(b=="c"?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),p.length==1&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&o.call(a.opera)=="[object Opera]",l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return o.call(a)=="[object Array]"},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,i){var j=b(a),l=j.autoCallback;j.url.split(".").pop().split("?").shift(),j.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]||h),j.instead?j.instead(a,e,f,g,i):(y[j.url]?j.noexec=!0:y[j.url]=1,f.load(j.url,j.forceCSS||!j.forceJS&&"css"==j.url.split(".").pop().split("?").shift()?"c":c,j.noexec,j.attrs,j.timeout),(d(e)||d(l))&&f.load(function(){k(),e&&e(j.origUrl,i,g),l&&l(j.origUrl,i,g),y[j.url]=2})))}function i(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var j,l,m=this.yepnope.loader;if(e(a))g(a,0,m,0);else if(w(a))for(j=0;j<a.length;j++)l=a[j],e(l)?g(l,0,m,0):w(l)?B(l):Object(l)===l&&i(l,m);else Object(a)===a&&i(a,m)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}})(this,document);
	
}

if(typeof window.___DarkTipSettings === 'undefined')
{
	window.___DarkTipSettings = {};
}

window.DarkTip = {
	
	'jq': undefined,
	
	'debug': true,
	
	'version': {
		'major': 1,
		'minor': 1,
		'patch': 3
	},
	
	'data': {
		'settings': {
			'jquery'   : 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js',
			'resources': {
				'qtip2' : [
					'ext/qtip2/jquery.qtip.min.js',
					'ext/qtip2/jquery.qtip.min.css'
				],
				'extras': []
			},
			'applyTo': {
				'explicit': true,
				'implicit': true
			},
			'decorativeMode': {
				'active' : false,
				'default': {
					'background-color': 'rgba(0,0,0,0.9)',
					'padding'         : '2px 4px',
					'display'         : 'inline-block',
					'margin'          : '1px',
					'border-radius'   : '4px',
					'text-decoration' : 'none'
				}
			},
			'extendedMode'  : {
				'active'      : true,
				'keyCode'     : 16,
				'keyCodeLabel': 'SHIFT'
			}
		},
		
		'triggers': {
			'explicit': [],
			'implicit': []
		},
		
		'layout': {
			'position': {
				'my'    : 'bottom middle',
				'at'    : 'top middle',
				'target': false
			},
			'width': {
				'core': 300,
				'404' : 250
			}
		},
		
		'templates': {
			'tools': {
				'_sub': function(route, data) {
					if(typeof data === 'undefined')
					{
						data = this;
					}
					else
					{
						data['_meta'] = {};
						DarkTip.jq.extend(true, data['_meta'], this['_meta']);
					}
					var template = DarkTip.read(this['_meta']['module'], route);
					if(DarkTip.isTemplateString(template))
					{
						return DarkTip.jq.jqote(
							template,
							DarkTip.jq.extend(true, {}, DarkTip.getTemplateTools(this['_meta']['module'], this['_meta']['locale']), data)
						);
					}
					else
					{
						return template;
					}
				},
				'_subLoop': function(route, data, concat) {
					if(typeof concat === 'undefined')
					{
						concat = '';
					}
					var template = DarkTip.read(this['_meta']['module'], route);
					var collect  = [];
					if(DarkTip.isTemplateString(template))
					{
						for (var i = 0; i < data.length; i++)
						{
							if(typeof data[i] !== 'object')
							{
								data[i] = { '_value': data[i] }
							}
							
							data[i]['_meta'] = {};
							DarkTip.jq.extend(true, data[i]['_meta'], this['_meta']);
							
							collect.push(DarkTip.jq.jqote(
								template,
								DarkTip.jq.extend(true, {}, DarkTip.getTemplateTools(this['_meta']['module'], this['_meta']['locale']), { '_loop': i }, data[i])
							));
						}
					}
					else
					{
						for (var i = 0; i < data.length; i++)
						{
							collect.push(template);
						}
					}
					return collect.join(concat);
				},
				'_loc': function(route, data, fuzzy) {
					if(typeof data === 'undefined')
					{
						data = this;
					}
					else
					{
						data['_meta'] = {};
						DarkTip.jq.extend(true, data['_meta'], this['_meta']);
					}
					var template = DarkTip.localize(this['_meta']['module'], this['_meta']['locale'], route, fuzzy);
					if(DarkTip.isTemplateString(template))
					{
						return DarkTip.jq.jqote(
							template,
							DarkTip.jq.extend(true, {}, DarkTip.getTemplateTools(this['_meta']['module'], this['_meta']['locale']), data)
						);
					}
					else
					{
						return template;
					}
				},
				'_locLoop': function(route, data, concat) {
					if(typeof concat === 'undefined')
					{
						concat = '';
					}
					var template = DarkTip.localize(this['_meta']['module'], this['_meta']['locale'], route);
					var collect  = [];
					if(DarkTip.isTemplateString(template))
					{
						for (var i = 0; i < data.length; i++)
						{
							if(typeof data[i] !== 'object')
							{
								data[i] = { '_value': data[i] }
							}
							
							data[i]['_meta'] = {};
							DarkTip.jq.extend(true, data[i]['_meta'], this['_meta']);
							
							collect.push(DarkTip.jq.jqote(
								template,
								DarkTip.jq.extend(true, {}, DarkTip.getTemplateTools(this['_meta']['module'], this['_meta']['locale']), { '_loop': i }, data[i])
							));
						}
					}
					else
					{
						for (var i = 0; i < data.length; i++)
						{
							collect.push(template);
						}
					}
					return collect.join(concat);
				}
			}
		},
		
		'i18n': {
			'en_US': {
				'loading'         : 'Loading...',
				'not-found'       : 'Nothing found',
				'extendedInactive': 'Hold [<%= this["_meta"]["extendedKeyCodeLabel"] %>] to switch modes',
				'extendedActive'  : 'Release [<%= this["_meta"]["extendedKeyCodeLabel"] %>] to switch modes'
			},
			'en_GB': {
				'meta': {
					'redirect': 'en_US'
				}
			},
			'de_DE': {
				'loading'         : 'Laden...',
				'not-found'       : 'Nichts gefunden',
				'extendedInactive': '[<%= this["_meta"]["extendedKeyCodeLabel"] %>] gedr&uuml;ckt halten um den Modus zu wechseln',
				'extendedActive'  : '[<%= this["_meta"]["extendedKeyCodeLabel"] %>] loslassen um den Modus zu wechseln!'
			},
			'fr_FR': {
				'loading'         : 'Chargement...',
				'not-found'       : 'Aucun r&eacute;sultat',
				'extendedInactive': 'Appuyer [<%= this["_meta"]["extendedKeyCodeLabel"] %>] pour changer de mode',
				'extendedActive'  : 'Relacher [<%= this["_meta"]["extendedKeyCodeLabel"] %>] pour changer de mode'
			},
			'es_ES': {
				'loading'         : 'Cargando...',
				'not-found'       : 'No he encontrado nada',
				'extendedInactive': '&iexcl;Manten pulsado [<%= this["_meta"]["extendedKeyCodeLabel"] %>] para cambiar de modo!',
				'extendedActive'  : '&iexcl;Suelta [<%= this["_meta"]["extendedKeyCodeLabel"] %>] para cambiar de modo!'
			},
			'es_MX': {
				'meta': {
					'fallback': 'es_ES'
				}
			},
			'ru_RU': {
				
			},
			'ko_KR': {
				
			},
			'zh_TW': {
				
			},
			'zh_CN': {
				
			}
		},
		
		'modules': {}
	},
	
	'cacheStorage': {},
	
	'log': function(message) {
		if((typeof this['debug'] !== 'undefined') && (this['debug'] === true))
		{
			window.log(message);
		}
	},
	
	'setting': function(route)
	{
		if(route != '')
		{
			return this._read('data.settings.' + route);
		}
		return this._read('data.settings');
	},
	
	'compareRule': function(data, rule)
	{
		// mandatory always true
		if(rule === true)
		{
			return true;
		}
		// simple existance check (aaa.bbb.ccc)
		if(rule.match(/^[a-z0-9_\-]+(\.[a-z0-9_\-]+)*$/i))
		{
			var segments = rule.split('.');
			var current  = data;

			for(var i = 0; i < segments.length; i++)
			{
				if(typeof current[segments[i]] === 'undefined')
				{
					return undefined;
				}
				else
				{
					current = current[segments[i]];
				}
			}
			return current;		
		}
		return undefined;
	},
	
	'_read': function(route, fuzzy)
	{
		if(typeof fuzzy === 'undefined')
		{
			fuzzy = 0;
		}
		
		if(route === '')
		{
			return this;
		}
		
		var segments = route.split('.');
		var current  = this;
		
		for(var i = 0; i < segments.length; i++)
		{
			if(typeof current[segments[i]] === 'undefined')
			{
				if((i + fuzzy) >= segments.length)
				{
					return current;
				}
				// this.log('Reading of route "'+route+'" (fuzzy: '+fuzzy+') failed!');
				return undefined;
			}
			else
			{
				current = current[segments[i]];
			}
		}
		return current;		
	},
	
	'read': function(module, route, fuzzy)
	{
		var modules    = module.split('.');
		var baseRoutes = ['data'];
		
		for (var i = 0; i < modules.length; i++)
		{
			var temp = baseRoutes[0];
			baseRoutes.unshift(temp + '.modules.' + modules[i]);
		}
		
		for (var i = 0; i < baseRoutes.length; i++)
		{
			var currentRoute = baseRoutes[i] + '.' + route;
			var result       = this._read(currentRoute, fuzzy);
			
			if(result !== undefined)
			{
				return result;
			}
		}
		
		return undefined;
	},
	
	'collect': function(module, route)
	{
		var modules    = module.split('.');
		var baseRoutes = ['data'];
		
		for (var i = 0; i < modules.length; i++)
		{
			var temp = baseRoutes[0];
			baseRoutes.unshift(temp + '.modules.' + modules[i]);
		}
		
		var collector = {};
		
		for (var i = 0; i < baseRoutes.length; i++)
		{
			var currentRoute = baseRoutes[i] + '.' + route;
			var result       = this._read(currentRoute);
			if(result !== undefined)
			{
				this.jq.extend(true, collector, result);
			}
		}
		
		return collector;
	},
	
	'route': function(module, route)
	{
		var modules = module.split('.');
		var builder = 'data';
		
		for (var i = 0; i < modules.length; i++)
		{
			if(modules[i] != '')
			{
				builder = builder + '.modules.' + modules[i];
			}
		}
		
		if(typeof route !== 'undefined')
		{
			builder = builder + '.' + route;
		}
		
		return(builder);
	},
	
	'localize': function(module, locale, route, fuzzy)
	{
		var activeLocale = locale;
		var redirect     = this.read(module, ('i18n.' + locale + '.meta.redirect'));
		var fallback     = this.read(module, ('i18n.' + locale + '.meta.fallback'));
		
		if(redirect != undefined)
		{
			activeLocale = redirect;
		}
		
		var result = this.read(module, ('i18n.' + activeLocale + '.' + route), fuzzy);
		
		if((result === undefined) && (fallback != undefined))
		{
			activeLocale = fallback;
			result = this.read(module, ('i18n.' + activeLocale + '.' + route), fuzzy);
		}
		
		if((result === undefined) && (fallback != 'en_US'))
		{
			activeLocale = 'en_US';
			result = this.read(module, ('i18n.' + activeLocale + '.' + route), fuzzy);
		}
		
		if(result === undefined) {
			this.log('Translation missing! Module: "' + module + '", Locale: "' + locale + '", Route: "' + route + '" (Fuzzy: '+fuzzy+')');
			return '';
		}
		
		return result;
	},
	
	'write': function(route, data)
	{
		var segments = route.split('.');
		var current  = this;
		
		for(var i = 0; i < segments.length; i++)
		{
			if(i == (segments.length - 1))
			{
				// if last segment ends with "+", data container is an array and data will be pushed
				if(segments[i].match(/^.+\+$/))
				{
					segments[i] = segments[i].slice(0, (segments[i].length - 1));
					if(typeof current[segments[i]] === 'undefined')
					{
						current[segments[i]] = [];
					}
					current[segments[i]].push(data);
				}
				// if last segment starts with "+", data container is an array and data will be unshifted
				else if(segments[i].match(/^\+.+$/))
				{
					segments[i] = segments[i].slice(1, segments[i].length);
					if(typeof current[segments[i]] === 'undefined')
					{
						current[segments[i]] = [];
					}
					current[segments[i]].unshift(data);
				}				
				else
				{
					current[segments[i]] = data;
				}
				return true;
			}
			else
			{
				if(typeof current[segments[i]] === 'undefined')
				{
					current[segments[i]] = {};
				}
				current = current[segments[i]];
			}
		}
		return false;
	},
	
	'cache': function(apicall, data)
	{
		if(typeof data === 'undefined')
		{
			// read mode
			if(typeof this['cacheStorage'][apicall] !== 'undefined')
			{
				return this['cacheStorage'][apicall];
			}
			return undefined;
		}
		else
		{
			// write mode
			this['cacheStorage'][apicall] = data;
			
			return true;
		}
	},
	
	'buildSettings': function() {
		jQuery.extend(true, this['data']['settings'], window.___DarkTipSettings);
	},
	
	'map': function(module, route, value)
	{
		var map = this.read(module, route);
		if(map)
		{
			if(typeof map[value] !== 'undefined')
			{
				return map[value];
			}
		}
		return undefined;
	},
	
	'mapRegex': function(result, map)
	{
		var params = {};
		if(map) {
			for(var p in map){
				params[map[p]]=result[p];
			}
			return params;
		}
		return {};
	},
	
	'isTemplateString': function(test)
	{
		if(typeof test === 'string')
		{
			if(test.match(/<%=?.+%>/i))
			{
				return true;
			}
		}
		return false;
	},
	
	'startUp': function()
	{
		yepnope({
			'test'    : window.jQuery.qtip,
			'nope'    : this.setting('resources.qtip2'),
			'both'    : this.setting('resources.extras'),
			'complete': function()
			{
				DarkTip.jq = jQuery.noConflict(DarkTip.setting('unbindJQuery'));
				
				DarkTip.jq(function() {
					
					if(DarkTip.setting('extendedMode.active'))
					{
						DarkTip.jq(document).keydown(function(event) {
							if(event.keyCode == DarkTip.setting('extendedMode.keyCode'))
							{
								DarkTip.jq('body').addClass('darktip-extended-mode');
								DarkTip.repositionActiveTooltips();
							}
						});
						
						DarkTip.jq(document).keyup(function(event) {
							if(event.keyCode == DarkTip.setting('extendedMode.keyCode'))
							{
								DarkTip.jq('body').removeClass('darktip-extended-mode');
								DarkTip.repositionActiveTooltips();
							}
						});
					}
					
					if(DarkTip.setting('applyTo.explicit'))
					{
						DarkTip.jq('[data-darktip]').live('mouseenter', function() {
							DarkTip.handleHover('explicit', DarkTip.jq(this));
						});
					}
					
					if(DarkTip.setting('applyTo.implicit'))
					{
						DarkTip.jq('a[href]').live('mouseenter', function() {
							DarkTip.handleHover('implicit', DarkTip.jq(this));
						});
					}
				});
			}
		});		
	},
	
	'handleHover': function(type, element)
	{
		if(typeof element.data('qtip') !== 'object')
		{
			var triggers = this._read(this.route('', 'triggers.' + type)),
                testme = '';
			
			if(triggers !== undefined && (type === 'explicit' || type === 'implicit'))
			{
                if(type === 'explicit')
                {
                    testme = new String(element.data('darktip'));
                }
                else
                {
                    testme = element.attr('href');
                }

                for(var i = 0; i < triggers.length; i++)
				{
					var result = testme.match(triggers[i]['pattern']['match']);

                    if(result)
					{
						var paramFunc = this._read(this.route(triggers[i]['module'], 'getParams.' + type)),
                            params = {};
						if(paramFunc)
						{
							params = paramFunc(result);
						}
						this.initTooltip(triggers[i]['module'], type, params, element);
						break;
					}
				}
			}
		}
	},
	
	'initTooltip': function(module, type, params, element)
	{
		if(typeof params['locale'] === 'undefined')
		{
			params['locale'] = 'en_US';
		}
		var content = this.localize(module, params['locale'], 'loading');
		
		this.attachTooltip(element, content, module);

        this.startDataCollect(module, params, element, type);
	},
	
	'initDataCollectState': function(module, params, element, type)
	{
		var collectionState = {
			
			'repo': {
				'module'       : module,
				'type'         : type,
				'params'       : params,
				'element'      : element,
				'templateTools': this.getTemplateTools(module, params['locale']),
				'callbackParam': this.read(module, 'triggers.apiParams.callback'),
				'requiredData' : []
			},
			
			'status' : 'pending',
			
			'queries': {
				'sleeping': {},
				'running' : {},
				'done'    : {}
			},
			
			'data': {},
			
			'awakenQuery': function(key)
			{
				if(typeof this.queries.sleeping[key] !== 'undefined')
				{
					this.queries.running[key] = this.queries.sleeping[key];
					return delete this.queries.sleeping[key];
				}
				return false;
			},
			
			'awakenCachedQuery': function(key)
			{
				if(typeof this.queries.sleeping[key] !== 'undefined')
				{
					this.queries.done[key] = this.queries.sleeping[key];
					return delete this.queries.sleeping[key];
				}
				return false;
			},
			
			'completeQuery': function(key)
			{
				if(typeof this.queries.running[key] !== 'undefined')
				{
					this.queries.done[key] = this.queries.running[key];
					return delete this.queries.running[key];
				}
				return false;
			},
			
			'buildCallbackQuerySuccess': function(key, apicall)
			{
                var state = this;
				return function(data, options)
				{
					DarkTip.cache(apicall, data);
					state.data[key] = data;
					state.completeQuery(key);
					state.run();
					state.finish();
				}
			},
			
			'buildCallbackQueryError': function(key)
			{
                var state = this;
				return function(options)
				{
					if(state.queries.running[key]['required'])
					{
						state.status = 'error';
					}
					
					state.completeQuery(key);
					state.run();
					state.finish();
				}
			},
			
			'done': function()
			{
				return DarkTip.jq.isEmptyObject(this.queries.running);
			},
			
			'finish': function()
			{
				if(this.done())
				{
					if((this.status === 'error') || (this.status === 'pending'))
					{
						this.status = 'done';
						DarkTip.renderTooltip(this);
					}
				}
			},
			
			'run': function()
			{
				var state = this;
				
				DarkTip.jq.each(state.queries.sleeping, function(key, query) {
                    var condition = query.condition;
					
					if(DarkTip.isTemplateString(condition))
					{
						condition = DarkTip.jq.jqote(condition, DarkTip.jq.extend(true, {}, state.repo.params, state.repo.templateTools));
					}

                    condition = DarkTip.compareRule(state.data, condition);
					
					if(typeof condition !== 'undefined')
					{
						var apicall = DarkTip.jq.jqote(query['call'], DarkTip.jq.extend(true, {}, state.repo.params, {'condition': condition}, state.repo.templateTools));
						var cache   = DarkTip.cache(apicall);
						
						if(cache)
						{
							state.awakenCachedQuery(key);
							
							state['data'][key] = cache;
						}
						else
						{
							state.awakenQuery(key);
							
							DarkTip.jq.jsonp({
								'url'              : apicall,
								'callbackParameter': state.repo.callbackParam,
								'success'          : state.buildCallbackQuerySuccess(key, apicall),
								'error'            : state.buildCallbackQueryError(key)
							});				
						}
					}
					
				});
				
				this.finish();
			}
			
		};
		
		var apicalls    = this._read(this.route(module, 'queries'));

		this.jq.each(apicalls, function(key, payload)
		{
			if(typeof payload === 'object')
			{
				if(typeof payload['required'] === 'undefined')
				{
					payload.required = true;
				}
				
				if(typeof payload['condition'] === 'undefined')
				{
					payload.condition = true;
				}

                collectionState.queries.sleeping[key] = {
					'required' : (payload.required == true),
					'condition': payload.condition,
					'call'     : payload.call
				};
			}
			else
			{
                collectionState.queries.sleeping[key] = {
					'required' : true,
					'condition': true,
					'call'     : payload
				};
			}
			
			if(collectionState.queries.sleeping[key].required)
			{
                collectionState.repo.requiredData.push(key);
			}
			
		});
		
		return collectionState;
	},
	
	'startDataCollect': function(module, params, element, type)
	{
		var state = this.initDataCollectState(module, params, element, type);
        state.run();
    },
	
	'renderTooltip': function(state)
	{
		var module  = state.repo.module,
            type    = state.repo.type,
            params  = state.repo.params,
            element = state.repo.element,
            data    = state.data,
            error   = false,
            content = '';
		
		DarkTip.jq.each(state['repo']['requiredData'], function(nothing, key) {
			
			if(typeof state['data'][key] === 'undefined')
			{
				error = true;
			}

		});
		
		var prepareDataFunc = this.read(module, 'prepareData');
		
		if(typeof prepareDataFunc !== 'undefined')
		{
			data = prepareDataFunc(state);
		}
		
		if(!error && data)
		{
			// call module func to enhance template data
			var enhanceDataFunc = this.read(module, 'enhanceData');
			
			if(typeof enhanceDataFunc !== 'undefined')
			{
				data = enhanceDataFunc(module, params, data);
			}
			
			if(this['data']['settings']['decorativeMode']['active'])
			{
				var decorateFunc = this.read(module, ('triggers.' + type + '.decorate'));
				
				if (typeof decorateFunc !== 'undefined')
				{
					decorateFunc(element.get(0), params, data);
				}
			}
			
			element.qtip('api').set('style.width', this.read(module, 'layout.width.core'));
			
			content = this.jq.jqote(
				this.read(module, 'templates.core'),
				this.jq.extend(true, {}, this.getTemplateTools(module, params['locale']), data)
			);
		}
		else
		{
			element.qtip('api').set('style.width', this.read(module, 'layout.width.404'));
			
			content = this.jq.jqote(
				this.read(module, 'templates.404'),
				this.jq.extend(true, {}, this.getTemplateTools(module, params['locale']), params)
			);
		}
		
		element.qtip('api').set('content.text', content);
	},
	
	'attachTooltip': function(element, content, module){
		var width    = this.read(module, 'layout.width.core'),
            cssclass = this.read(module, 'layout.css.class');
		if(width == undefined) {
			width = 300;
		}
		if(cssclass == undefined) {
			cssclass = '';
		}
		element.qtip({
			'overwrite': false,
			'show'     : {
				'solo' : true,
				'ready': true
			},
			'content': {
				'text': content
			},
			'position': {
				'my'      : DarkTip.read(module, 'layout.position.my'),
				'at'      : DarkTip.read(module, 'layout.position.at'),
				'target'  : DarkTip.read(module, 'layout.position.target'),
				'viewport': this.jq(window),
				'effect'  : false
			},
			'hide' :'mouseleave',
			'style': {
				'width'  : width+'px',
				'classes': ('ui-tooltip-cluetip darktip-tooltip ' + cssclass)
			}
		});
	},
	
	'repositionActiveTooltips': function()
	{
		this.jq('body > div.qtip:visible').qtip('reposition');
	},
	
	'getTemplateTools': function(module, locale) {
		var collection = this.collect(module, 'templates.tools'),
            tools = {
                '_meta': {
                    'extendedActive'      : this.setting('extendedMode.active'),
                    'extendedKeyCodeLabel': this.setting('extendedMode.keyCodeLabel'),
                    'locale'              : locale,
                    'module'              : module
                }
            };
		if(collection)
		{
			this.jq.extend(true, tools, collection);
		}
		return tools;
	},
	
	'verifyParentModule': function(module)
	{
		var segments = module.split('.');
		if(segments.length < 2)
		{
			return true;
		}
		segments.pop();
		var parentModule = segments.join('.');
		if(this._read(this.route(parentModule, 'registered')))
		{
			return true;
		}
		this.log('Parent module missing! Module: "' + module + '", Parent: "' + parentModule + '"');
		return false;
	},
	
	'registerModule': function(moduleKey, moduleData)
	{
		var submodules = {};
		// The module seems to come with included submodules, split the off, to include them later
		if(typeof moduleData['modules'] !== 'undefined')
		{
			this.jq.extend(true, submodules, moduleData['modules']);
		}
		
		// Sanitize - clean submodules
		moduleData['modules']    = {};
		moduleData['registered'] = true;
		
		// check if parent modules are loaded
		if(this.verifyParentModule(moduleKey))
		{
			this.write(this.route(moduleKey), moduleData);
			
			var patternExplicit = this._read(this.route(moduleKey, 'triggers.explicit'));
			if(patternExplicit)
			{
				this.write(('data.triggers.+explicit'), {
					'module' : moduleKey,
					'pattern': patternExplicit
				});
			}
			
			var patternImplicit = this._read(this.route(moduleKey, 'triggers.implicit'));
			if(patternImplicit)
			{
				this.write(('data.triggers.+implicit'), {
					'module' : moduleKey,
					'pattern': patternImplicit
				});
			}
			
			// Recursively jump into the submodules and register them
			for (var module in submodules) {
				this.registerModule((moduleKey + '.' + module), submodules[module]);
			}
		}
	},
	
	'init': function() {
		this.buildSettings();
		this.startUp();
	}
	
};

window.___DarkTipSettings['unbindJQuery'] = (window.jQuery ? true : false);

yepnope([{
	'load'    : window.___DarkTipSettings['jquery'] || 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js',
	'complete': function() {
		
		if(!window.jQuery.jsonp){
			/* jquery.jsonp 2.2.0 (c)2010 Julian Aubourg | MIT License | http://code.google.com/p/jquery-jsonp/ */
			(function(a){function b(){}function c(a){A=[a]}function d(a,b,c,d){try{d=a&&a.apply(b.context||b,c)}catch(e){d=!1}return d}function e(a){return/\?/.test(a)?"&":"?"}function D(l){function V(a){O++||(P(),I&&(y[K]={s:[a]}),E&&(a=E.apply(l,[a])),d(l.success,l,[a,t]),d(D,l,[l,t]))}function W(a){O++||(P(),I&&a!=u&&(y[K]=a),d(l.error,l,[l,a]),d(D,l,[l,a]))}l=a.extend({},B,l);var D=l.complete,E=l.dataFilter,F=l.callbackParameter,G=l.callback,H=l.cache,I=l.pageCache,J=l.charset,K=l.url,L=l.data,M=l.timeout,N,O=0,P=b,Q,R,S,T,U;return l.abort=function(){!(O++)&&P()},d(l.beforeSend,l,[l])===!1||O?l:(K=K||h,L=L?typeof L=="string"?L:a.param(L,l.traditional):h,K+=L?e(K)+L:h,F&&(K+=e(K)+encodeURIComponent(F)+"=?"),!H&&!I&&(K+=e(K)+"_"+(new Date).getTime()+"="),K=K.replace(/=\?(&|$)/,"="+G+"$1"),I&&(N=y[K])?N.s?V(N.s[0]):W(N):(v[G]=c,S=a(s)[0],S.id=k+z++,J&&(S[g]=J),C&&C.version()<11.6?(T=a(s)[0]).text="document.getElementById('"+S.id+"')."+n+"()":S[f]=f,!(o in S)&&p in S&&(S.htmlFor=S.id,S.event=m),S[o]=S[n]=S[p]=function(a){if(!S[q]||/loaded|complete/.test(S[q])){try{S[m]&&S[m]()}catch(b){}a=A,A=0,a?V(a[0]):W(i)}},S.src=K,P=function(a){U&&clearTimeout(U),S[p]=S[o]=S[n]=null,w[r](S),T&&w[r](T)},w[j](S,x),T&&w[j](T,x),U=M>0&&setTimeout(function(){W(u)},M)),l)}var f="async",g="charset",h="",i="error",j="insertBefore",k="_jqjsp",l="on",m=l+"click",n=l+i,o=l+"load",p=l+"readystatechange",q="readyState",r="removeChild",s="<script>",t="success",u="timeout",v=window,w=a("head")[0]||document.documentElement,x=w.firstChild,y={},z=0,A,B={callback:k,url:location.href},C=v.opera;D.setup=function(b){a.extend(B,b)},a.jsonp=D})(jQuery)
		}
		
		if(!window.jQuery.jqote){
			/* jQote2 - client-side Javascript templating engine | Copyright (C) 2010, aefxx | http://aefxx.com/ | Dual licensed under the WTFPL v2 or MIT (X11) licenses | WTFPL v2 Copyright (C) 2004, Sam Hocevar | Date: Thu, Oct 21st, 2010 | Version: 0.9.7 */
			(function($){var _=false,E1="UndefinedTemplateError",E2="TemplateCompilationError",E3="TemplateExecutionError",A="[object Array]",S="[object String]",F="[object Function]",n=1,c="%",q=/^[^<]*(<[\w\W]+>)[^>]*$/,ts=Object.prototype.toString;function r(e,x){throw ($.extend(e,x),e)}function dns(f) {var a=[];if(ts.call(f)!==A)return _;for(var i=0,l=f.length;i<l;i++)a[i]=f[i].jqote_id;return a.length?a.sort().join('.').replace(/(\b\d+\b)\.(?:\1(\.|$))+/g,"$1$2"):_}function l(s,t){var f,g=[],t=t||c,x=ts.call(s);if(x===F)return s.jqote_id?[s]:_;if(x!==A)return[$.jqotec(s,t)];if(x===A)for(var i=0,l=s.length;i<l;i++)return g.length?g:_}$.fn.extend({jqote:function(x,y){var x=ts.call(x)===A?x:[x],d="";this.each(function(i){var f=$.jqotec(this,y);for(var j=0;j<x.length;j++)d+=f.call(x[j],i,j,x,f)});return d}});$.each({app:"append",pre:"prepend",sub:"html"},function(x,y){$.fn["jqote"+x]=function(e,d,t){var p,r,s=$.jqote(e,d,t),$$=!q.test(s)?function(s){return $(document.createTextNode(s))}:$;if(!!(p=dns(l(e))))r=new RegExp("(^|\\.)"+p.split(".").join("\\.(.*)?")+"(\\.|$)");return this.each(function(){var z=$$(s);$(this)[y](z);(z[0].nodeType===3?$(this):z).trigger("jqote."+x,[z,r])})}});$.extend({jqote:function(e,d,t){var s="",t=t||c,f=l(e);if(f===_)r(new Error("Empty or undefined template passed to $.jqote"),{type:E1});d=ts.call(d)!==A?[d]:d;for(var i=0,m=f.length;i<m;i++)for(var j=0;j<d.length;j++)s+=f[i].call(d[j],i,j,d,f[i]);return s},jqotec:function(x,t){var h,e,y,t=t||c,z=ts.call(x);if(z===S&&q.test(x)){e=y=x;if(h=$.jqotecache[x])return h}else{e=z===S||x.nodeType?$(x):x instanceof jQuery?x:null;if(!e[0]||!(y=e[0].innerHTML)&&!(y=e.text()))r(new Error("Empty or undefined template passed to $.jqotec"),{type:E1});if(h=$.jqotecache[$.data(e[0],"jqote_id")])return h}var s="",i,a=y.replace(/\s*<!\[CDATA\[\s*|\s*\]\]>\s*|[\r\n\t]/g,"").split("<"+t).join(t+">\x1b").split(t+">");for(var m=0,k=a.length;m<k;m++)s+=a[m].charAt(0)!=="\x1b"?"out+='"+a[m].replace(/(\\|["'])/g,"\\$1")+"'":(a[m].charAt(1)==="="?";out+=("+a[m].substr(2)+");":(a[m].charAt(1)==="!"?";out+=$.jqotenc(("+a[m].substr(2)+"));":";"+a[m].substr(1)));s="try{"+('var out="";'+s+";return out;").split("out+='';").join("").split('var out="";out+=').join("var out=")+'}catch(e){e.type="'+E3+'";e.args=arguments;e.template=arguments.callee.toString();throw e;}';try{var f=new Function("i, j, data, fn",s)}catch(e){r(e,{type:E2})}i=e instanceof jQuery?$.data(e[0],"jqote_id",n):e;return $.jqotecache[i]=(f.jqote_id=n++,f)},jqotefn:function(e){var t=ts.call(e),i=t===S&&q.test(e)?e:$.data($(e)[0],"jqote_id");return $.jqotecache[i]||_},jqotetag:function(s){if(ts.call(s)===S)c=s},jqotenc:function(s){return s.toString().replace(/&(?!\w+;)/g,'&#38;').split('<').join('&#60;').split('>').join('&#62;').split('"').join('&#34;').split("'").join('&#39;')},jqotecache:{}});$.event.special.jqote={add:function(o){var n,h=o.handler,d=!o.data?[]:ts.call(o.data)!==A?[o.data]:o.data;if(!o.namespace)o.namespace="app.pre.sub";if(!d.length||!(n=dns(l(d))))return;o.handler=function(e,m,r){return !r||r.test(n)?h.apply(this,[e,m]):null}}}})(jQuery);
		}
		
		DarkTip.init();
	}
}]);
