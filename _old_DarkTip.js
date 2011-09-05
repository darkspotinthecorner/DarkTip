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

// Check if yepnope.js is defined, if not, we need to define it
if(!window.yepnope) {
	/*yepnope1.0.2|WTFPL|webkit-fix*/
	(function(a,b,c){function H(){var a=z;a.loader={load:G,i:0};return a}function G(a,b,c){var e=b=="c"?r:q;i=0,b=b||"j",u(a)?F(e,a,b,this.i++,d,c):(h.splice(this.i++,0,a),h.length==1&&E());return this}function F(a,c,d,g,j,l){function q(){!o&&A(n.readyState)&&(p.r=o=1,!i&&B(),n.onload=n.onreadystatechange=null,e(function(){m.removeChild(n)},0))}var n=b.createElement(a),o=0,p={t:d,s:c,e:l};n.src=n.data=c,!k&&(n.style.display="none"),n.width=n.height="0",a!="object"&&(n.type=d),n.onload=n.onreadystatechange=q,a=="img"?n.onerror=q:a=="script"&&(n.onerror=function(){p.e=p.r=1,E()}),h.splice(g,0,p),m.insertBefore(n,k?null:f),e(function(){o||(m.removeChild(n),p.r=p.e=o=1,B())},z.errorTimeout)}function E(){var a=h.shift();i=1,a?a.t?e(function(){a.t=="c"?D(a):C(a)},0):(a(),B()):i=0}function D(a){var c=b.createElement("link"),d;c.href=a.s,c.rel="stylesheet",c.type="text/css";if(!a.e&&(o||j)){var g=function(a){e(function(){if(!d)try{((o&&a.sheet!==null)||(j&&a.sheet.cssRules.length))?(d=1,B()):g(a)}catch(b){b.code==1e3||b.message=="security"||b.message=="denied"?(d=1,e(function(){B()},0)):g(a)}},0)};g(c)}else c.onload=function(){d||(d=1,e(function(){B()},0))},a.e&&c.onload();e(function(){d||(d=1,B())},z.errorTimeout),!a.e&&f.parentNode.insertBefore(c,f)}function C(a){var c=b.createElement("script"),d;c.src=a.s,c.onreadystatechange=c.onload=function(){!d&&A(c.readyState)&&(d=1,B(),c.onload=c.onreadystatechange=null)},e(function(){d||(d=1,B())},z.errorTimeout),a.e?c.onload():f.parentNode.insertBefore(c,f)}function B(){var a=1,b=-1;while(h.length- ++b)if(h[b].s&&!(a=h[b].r))break;a&&E()}function A(a){return!a||a=="loaded"||a=="complete"}var d=b.documentElement,e=a.setTimeout,f=b.getElementsByTagName("script")[0],g={}.toString,h=[],i=0,j="MozAppearance"in d.style,k=j&&!!b.createRange().compareNode,l=j&&!k,m=k?d:f.parentNode,n=a.opera&&g.call(a.opera)=="[object Opera]",o="webkitAppearance"in d.style,p=o&&"async"in b.createElement("script"),q=j?"object":n||p?"img":"script",r=o?"img":q,s=Array.isArray||function(a){return g.call(a)=="[object Array]"},t=function(a){return Object(a)===a},u=function(a){return typeof a=="string"},v=function(a){return g.call(a)=="[object Function]"},w=[],x={},y,z;z=function(a){function h(a,b){function i(a){if(u(a))g(a,f,b,0,c);else if(t(a))for(h in a)a.hasOwnProperty(h)&&g(a[h],f,b,h,c)}var c=!!a.test,d=c?a.yep:a.nope,e=a.load||a.both,f=a.callback,h;i(d),i(e),a.complete&&b.load(a.complete)}function g(a,b,d,e,g){var h=f(a),i=h.autoCallback;if(!h.bypass){b&&(b=v(b)?b:b[a]||b[e]||b[a.split("/").pop().split("?")[0]]);if(h.instead)return h.instead(a,b,d,e,g);d.load(h.url,h.forceCSS||!h.forceJS&&/css$/.test(h.url)?"c":c,h.noexec),(v(b)||v(i))&&d.load(function(){H(),b&&b(h.origUrl,g,e),i&&i(h.origUrl,g,e)})}}function f(a){var b=a.split("!"),c=w.length,d=b.pop(),e=b.length,f={url:d,origUrl:d,prefixes:b},g,h;for(h=0;h<e;h++)g=x[b[h]],g&&(f=g(f));for(h=0;h<c;h++)f=w[h](f);return f}var b,d,e=this.yepnope.loader;if(u(a))g(a,0,e,0);else if(s(a))for(b=0;b<a.length;b++)d=a[b],u(d)?g(d,0,e,0):s(d)?z(d):t(d)&&h(d,e);else t(a)&&h(a,e)},z.addPrefix=function(a,b){x[a]=b},z.addFilter=function(a){w.push(a)},z.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",y=function(){b.removeEventListener("DOMContentLoaded",y,0),b.readyState="complete"},0)),a.yepnope=H()})(this,this.document)
}

if(typeof window.___DarkTipConfig === 'undefined') {
	window.___DarkTipConfig = {};
}

yepnope([{
	'test'    : window.jQuery,
	'nope'    : window.___DarkTipConfig['jquery'] || 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js',
	'complete': function() {
		if(!window.jQuery.jsonp){
			/* jquery.jsonp 2.1.4 (c)2010 Julian Aubourg | MIT License | http://code.google.com/p/jquery-jsonp/ */
			(function(e,b){function d(){}function t(C){c=[C]}function m(C){f.insertBefore(C,f.firstChild)}function l(E,C,D){return E&&E.apply(C.context||C,D)}function k(C){return/\?/.test(C)?"&":"?"}var n="async",s="charset",q="",A="error",r="_jqjsp",w="on",o=w+"click",p=w+A,a=w+"load",i=w+"readystatechange",z="removeChild",g="<script/>",v="success",y="timeout",x=e.browser,f=e("head")[0]||document.documentElement,u={},j=0,c,h={callback:r,url:location.href};function B(C){C=e.extend({},h,C);var Q=C.complete,E=C.dataFilter,M=C.callbackParameter,R=C.callback,G=C.cache,J=C.pageCache,I=C.charset,D=C.url,L=C.data,P=C.timeout,O,K=0,H=d;C.abort=function(){!K++&&H()};if(l(C.beforeSend,C,[C])===false||K){return C}D=D||q;L=L?((typeof L)=="string"?L:e.param(L,C.traditional)):q;D+=L?(k(D)+L):q;M&&(D+=k(D)+encodeURIComponent(M)+"=?");!G&&!J&&(D+=k(D)+"_"+(new Date()).getTime()+"=");D=D.replace(/=\?(&|$)/,"="+R+"$1");function N(S){!K++&&b(function(){H();J&&(u[D]={s:[S]});E&&(S=E.apply(C,[S]));l(C.success,C,[S,v]);l(Q,C,[C,v])},0)}function F(S){!K++&&b(function(){H();J&&S!=y&&(u[D]=S);l(C.error,C,[C,S]);l(Q,C,[C,S])},0)}J&&(O=u[D])?(O.s?N(O.s[0]):F(O)):b(function(T,S,U){if(!K){U=P>0&&b(function(){F(y)},P);H=function(){U&&clearTimeout(U);T[i]=T[o]=T[a]=T[p]=null;f[z](T);S&&f[z](S)};window[R]=t;T=e(g)[0];T.id=r+j++;if(I){T[s]=I}function V(W){(T[o]||d)();W=c;c=undefined;W?N(W[0]):F(A)}if(x.msie){T.event=o;T.htmlFor=T.id;T[i]=function(){/loaded|complete/.test(T.readyState)&&V()}}else{T[p]=T[a]=V;x.opera?((S=e(g)[0]).text="jQuery('#"+T.id+"')[0]."+p+"()"):T[n]=n}T.src=D;m(T);S&&m(S)}},0);return C}B.setup=function(C){e.extend(h,C)};e.jsonp=B})(jQuery,setTimeout);
		}
		if(!window.jQuery.jqote){
			/* jQote2 - client-side Javascript templating engine | Copyright (C) 2010, aefxx | http://aefxx.com/ | Dual licensed under the WTFPL v2 or MIT (X11) licenses | WTFPL v2 Copyright (C) 2004, Sam Hocevar | Date: Thu, Oct 21st, 2010 | Version: 0.9.7 */
			(function($){var _=false,E1="UndefinedTemplateError",E2="TemplateCompilationError",E3="TemplateExecutionError",A="[object Array]",S="[object String]",F="[object Function]",n=1,c="%",q=/^[^<]*(<[\w\W]+>)[^>]*$/,ts=Object.prototype.toString;function r(e,x){throw ($.extend(e,x),e)}function dns(f) {var a=[];if(ts.call(f)!==A)return _;for(var i=0,l=f.length;i<l;i++)a[i]=f[i].jqote_id;return a.length?a.sort().join('.').replace(/(\b\d+\b)\.(?:\1(\.|$))+/g,"$1$2"):_}function l(s,t){var f,g=[],t=t||c,x=ts.call(s);if(x===F)return s.jqote_id?[s]:_;if(x!==A)return[$.jqotec(s,t)];if(x===A)for(var i=0,l=s.length;i<l;i++)return g.length?g:_}$.fn.extend({jqote:function(x,y){var x=ts.call(x)===A?x:[x],d="";this.each(function(i){var f=$.jqotec(this,y);for(var j=0;j<x.length;j++)d+=f.call(x[j],i,j,x,f)});return d}});$.each({app:"append",pre:"prepend",sub:"html"},function(x,y){$.fn["jqote"+x]=function(e,d,t){var p,r,s=$.jqote(e,d,t),$$=!q.test(s)?function(s){return $(document.createTextNode(s))}:$;if(!!(p=dns(l(e))))r=new RegExp("(^|\\.)"+p.split(".").join("\\.(.*)?")+"(\\.|$)");return this.each(function(){var z=$$(s);$(this)[y](z);(z[0].nodeType===3?$(this):z).trigger("jqote."+x,[z,r])})}});$.extend({jqote:function(e,d,t){var s="",t=t||c,f=l(e);if(f===_)r(new Error("Empty or undefined template passed to $.jqote"),{type:E1});d=ts.call(d)!==A?[d]:d;for(var i=0,m=f.length;i<m;i++)for(var j=0;j<d.length;j++)s+=f[i].call(d[j],i,j,d,f[i]);return s},jqotec:function(x,t){var h,e,y,t=t||c,z=ts.call(x);if(z===S&&q.test(x)){e=y=x;if(h=$.jqotecache[x])return h}else{e=z===S||x.nodeType?$(x):x instanceof jQuery?x:null;if(!e[0]||!(y=e[0].innerHTML)&&!(y=e.text()))r(new Error("Empty or undefined template passed to $.jqotec"),{type:E1});if(h=$.jqotecache[$.data(e[0],"jqote_id")])return h}var s="",i,a=y.replace(/\s*<!\[CDATA\[\s*|\s*\]\]>\s*|[\r\n\t]/g,"").split("<"+t).join(t+">\x1b").split(t+">");for(var m=0,k=a.length;m<k;m++)s+=a[m].charAt(0)!=="\x1b"?"out+='"+a[m].replace(/(\\|["'])/g,"\\$1")+"'":(a[m].charAt(1)==="="?";out+=("+a[m].substr(2)+");":(a[m].charAt(1)==="!"?";out+=$.jqotenc(("+a[m].substr(2)+"));":";"+a[m].substr(1)));s="try{"+('var out="";'+s+";return out;").split("out+='';").join("").split('var out="";out+=').join("var out=")+'}catch(e){e.type="'+E3+'";e.args=arguments;e.template=arguments.callee.toString();throw e;}';try{var f=new Function("i, j, data, fn",s)}catch(e){r(e,{type:E2})}i=e instanceof jQuery?$.data(e[0],"jqote_id",n):e;return $.jqotecache[i]=(f.jqote_id=n++,f)},jqotefn:function(e){var t=ts.call(e),i=t===S&&q.test(e)?e:$.data($(e)[0],"jqote_id");return $.jqotecache[i]||_},jqotetag:function(s){if(ts.call(s)===S)c=s},jqotenc:function(s){return s.toString().replace(/&(?!\w+;)/g,'&#38;').split('<').join('&#60;').split('>').join('&#62;').split('"').join('&#34;').split("'").join('&#39;')},jqotecache:{}});$.event.special.jqote={add:function(o){var n,h=o.handler,d=!o.data?[]:ts.call(o.data)!==A?[o.data]:o.data;if(!o.namespace)o.namespace="app.pre.sub";if(!d.length||!(n=dns(l(d))))return;o.handler=function(e,m,r){return !r||r.test(n)?h.apply(this,[e,m]):null}}}})(jQuery);
		}
		DarkTip.init();
	}
}]);

window.DarkTip = {
	
	'version': {
		'major': 1,
		'minor': 0,
		'patch': 0
	},
	
	'data': {
		/* ------------------------------------------------------------------ *\
		 * Configuration
		\* ------------------------------------------------------------------ */
		'settings': {
			'default': {
				'jquery'   : 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js',
				'resources': {
					'modules': 'modules/',
					'qtip2'  : [
						'qtip2/jquery.qtip.min.js',
						'qtip2/jquery.qtip.min.css'
					],
					'extras': [
						'DarkTip.css'
					]
				},
				'applyTo': {
					'explicit': true,
					'implicit': true
				},
				'extendedMode': {
					'active'      : true,
					'keyCode'     : 16,
					'keyCodeLabel': 'SHIFT'
				},
				// These modules will be loaded async
				'modules': [
					'wow',
					'wow-realm',
					'wow-quest',
					'wow-item',
					'wow-character',
					'wow-guild',
					'wow-arenateam'
				]
			},
			'user'     : {},
			'effective': {}
		},
		
		
		/* ------------------------------------------------------------------ *\
		 * Loaded Modules
		\* ------------------------------------------------------------------ */
		'modules': {},
		
		
		/* ------------------------------------------------------------------ *\
		 * Triggers
		\* ------------------------------------------------------------------ */
		'triggers': {
			'explicit': {},
			'implicit': {}
		},
		
		
		/* ------------------------------------------------------------------ *\
		 * Global Maps
		\* ------------------------------------------------------------------ */
		'maps': {},
		
		
		/* ------------------------------------------------------------------ *\
		 * Translations
		\* ------------------------------------------------------------------ */
		'i18n': {},
	},
	
	'init': function() {
		
		this.buildSettings();
		this.startUp();
		
		console.log('DarkTip on init end:');
		console.log(DarkTip);
		
	},
	
	'buildSettings': function() {
		this['data']['settings']['user']      = window.___DarkTipConfig || {};
		this['data']['settings']['effective'] = jQuery.extend(true, {}, this['data']['settings']['default'], this['data']['settings']['user']);
	}, 
	
	'resolveRoute': function(route, object, fuzzy) {
		if(typeof fuzzy === 'undefined') {
			fuzzy = 0;
		}
		if(route === '') {
			return object;
		}
		var segments = route.split('.');
		var current  = object;
		for(var i = 0; i < segments.length; i++) {
			if(typeof current[segments[i]] === 'undefined') {
				if((i + fuzzy) >= segments.length) {
					return current;
				}
				return undefined;
			} else {
				current = current[segments[i]];
			}
		}
		return current;
	},
	
	'setting': function(route) {
		return this.resolveRoute(route, this['data']['settings']['effective']);
	},
	
	'map': function(module, route, value, to) {
		route = route + '.' + to + '.' + value;
		if(module === false) {
			return this.resolveRoute(route, this['data']['maps']);
		} else {
			return this.resolveRoute(route, this['data']['modules'][module]['maps']);
		}
	},
	
	'parseParams': function(result, route){
		var params = {};
		var map    = this.resolveRoute(route, this['data']['modules']);
		if(map) {
			for(var p in map){
				params[map[p]]=result[p];
			}
			return params;
		}
		return {};
	},
	
	'startUp': function() {
		var filesToLoad = [];
		if(!window.jQuery.qtip) {
			var files = this.setting('resources.qtip2');
			for(var i = 0; i < files.length; i++) {
				filesToLoad.push(files[i]);
			}
		}
		var files = this.setting('resources.extras');
		for (var i = 0; i < files.length; i++) {
			filesToLoad.push(files[i]);
		}
		var files = this.setting('modules');
		for (var i = 0; i < files.length; i++) {
			filesToLoad.push(this.setting('resources.modules') + files[i] + '.js');
		}
		yepnope({
			'load': filesToLoad,	
			'complete': function() {
				jQuery(function() {
					if(DarkTip.setting('extendedMode.active')) {
						jQuery(document).keydown(function(event) {
							if(event.keyCode == DarkTip.setting('extendedMode.keyCode')) {
								jQuery('body').addClass('dtip-extended-mode');
								DarkTip.repositionActiveTooltips();
							}
						});
						jQuery(document).keyup(function(event) {
							if(event.keyCode == DarkTip.setting('extendedMode.keyCode')) {
								jQuery('body').removeClass('dtip-extended-mode');
								DarkTip.repositionActiveTooltips();
							}
						});
					}
					if(DarkTip.setting('applyTo.explicit')) {
						jQuery('[data-darktip]').live('mouseover', function() {
							DarkTip.handleHover('explicit', this);
						});
					}
					if(DarkTip.setting('applyTo.implicit')) {
						jQuery('[href]').live('mouseover', function() {
							DarkTip.handleHover('implicit', this);
						});
					}
				});
			}
		});		
	},
	
	'handleHover': function(type, element) {
		if(typeof jQuery(element).data('qtip') === 'object') {
			jQuery(element).qtip('show');
		} else {
			var triggers = this.resolveRoute(('triggers.' + type), this['data']);
			if(triggers !== undefined) {
				for(module in triggers) {
					if(type === 'explicit') {
						var testme = new String(jQuery(element).data('darktip'));
					}
					if(type === 'implicit') {
						var testme = new String(jQuery(element).attr('href'));
					}
					var result = testme.match(triggers[module]['match']);
					if(result) {
						var params = this.parseParams(result, (module + '.patterns.' + type + '.params'));
						this.initTooltip(module, type, params, element);
					}
				}
			}
		}
	},
	
	'loadCache': function(module, hash) {
		return this.resolveRoute((module + '.cache.' + hash), this['data']['modules']);
	},
	
	'saveCache': function(module, hash, content) {
		
	},
	
	'initTooltip': function(module, type, params, element) {
		// console.log({'module': module, 'type': type, 'element': element});
		var prepareParamsFunc = this.resolveRoute((module + '.prepareParams.' + type), this['data']['modules']);
		if(prepareParamsFunc != undefined) {
			params = prepareParamsFunc(params);
		}
		if(typeof params['locale'] === 'undefined') {
			params['locale'] = 'en_US';
		}
		apicall = jQuery.jqote(
			this.resolveRoute((module + '.patterns.api'), this['data']['modules']),
			jQuery.extend(true, {}, params, this.getTemplateTools(params['lcoale']))
		);
		hash =  jQuery.jqote(
			this.resolveRoute((module + '.patterns.hash'), this['data']['modules']),
			jQuery.extend(true, {}, params, this.getTemplateTools(params['lcoale']))
		);
		var content = this.loadCache(module, hash);
		if(content) {
			this.attachTooltip(element, content, module);
		} else {
			content = this.localize(params['locale'], ('modules.' + module + '.loading'));
			this.attachTooltip(element, content, module);
			jQuery.jsonp({
				'url': apicall,
				'callbackParameter': 'jsonp',
				'success': function(data) {
					DarkTip.renderTooltip(module, params, element, data);
				},
				'error'  : function(options) {
					DarkTip.renderTooltip(module, params, element);
				}
			});
		}
		
		
	},
	
	'attachTooltip': function(element, content, module){
		var width = this.resolveRoute((module + '.layout.width.core'), this['data']['modules']);
		if(width == undefined) {
			width = 300;
		}
		jQuery(element).qtip({
			'overwrite': false,
			'show': {
				'ready': true
			},
			'events': {
				'render':function(event, api){
					var tooltip = api['elements']['tooltip'];
					tooltip.bind('tooltipshow', function(event, api) {
						DarkTip.addToActiveTooltips(api['id']);
					});
					tooltip.bind('tooltiphide', function(event, api) {
						DarkTip.removeFromActiveTooltips(api['id']);
					});
				}
			},
			'content': {
				'text': content
			},
			'position': {
				'my'      : DarkTip.resolveRoute((module + '.layout.position.my'),     DarkTip['data']['modules']),
				'at'      : DarkTip.resolveRoute((module + '.layout.position.at'),     DarkTip['data']['modules']),
				'target'  : DarkTip.resolveRoute((module + '.layout.position.target'), DarkTip['data']['modules']),
				'viewport': jQuery(window),
				'effect'  : false
			},
			'hide' :'mouseout',
			'style': {
				'width'  : width+'px',
				'classes': 'darktip-tooltip ui-tooltip-cluetip'
			}
		});
	},
	
	'renderTooltip': function(module, params, element, data) {
		
	},
	
	'registerModule': function(key, moduleData) {
		
		console.log('Register Module "' + key + '":');
		console.log(moduleData);
		
		if(typeof this['data']['modules'][key] === 'undefined') {
			
			this['data']['modules'][key] = moduleData;
			
			var patternExplicit = this.resolveRoute('patterns.explicit', moduleData);
			if((patternExplicit !== undefined) && (patternExplicit !== false)) {
				this['data']['triggers']['explicit'][key] = patternExplicit;
			}
			
			var patternImplicit = this.resolveRoute('patterns.implicit', moduleData);
			if((patternImplicit !== undefined) && (patternImplicit !== false)) {
				this['data']['triggers']['implicit'][key] = patternImplicit;
			}
			
			if(typeof moduleData['i18n'] !== 'undefined') {
				for (locale in moduleData['i18n']) {
					if(this.resolveRoute(('data.i18n.' + locale), this) === undefined) {
						this['data']['i18n'][locale] = {
							'meta': {
								'locale': locale
							},
							'modules': {}
						};
					}
					if(this.resolveRoute(('data.i18n.' + locale + '.modules'), this) === undefined) {
						this['data']['i18n'][locale]['modules'] = {};
					}
					this['data']['i18n'][locale]['modules'][key] = jQuery.extend(true, {}, moduleData['i18n'][locale]);
				}
			}
		}
	},
	
	'localize': function(locale, route, fuzzy) {
		
		var localeData = this.getLocaleData(locale);
		var result     = this.resolveRoute(route, localeData, fuzzy);
		
		if((result === undefined) && (typeof localeData['meta']['fallback'] !== 'undefined')) {
			localeData = this.getLocaleData(localeData['meta']['fallback']);
			result     = this.resolveRoute(route, localeData, fuzzy);
		}
		
		if((result === undefined) && (localeData['meta']['locale'] !== 'en_US')) {
			localeData = this.getLocaleData('en_US');
			result     = this.resolveRoute(route, localeData, fuzzy);
		}
		
		return result || '';
	},
	
	'getTemplateTools': function(locale) {
		return {
			'extendedActive'      : this.setting('extendedMode.active'),
			'extendedKeyCodeLabel': this.setting('extendedMode.keyCodeLabel'),
			'___': {
				'sub': function(route, data){
					return jQuery.jqote(
						DarkTip.getTemplate('fragments.' + route),
						jQuery.extend(true, {}, DarkTip.getTemplateTools(locale), data)
					);
				},
				'loc': function(route, data){
					return jQuery.jqote(
						DarkTip.localize(locale, route),
						jQuery.extend(true, {}, DarkTip.getTemplateTools(locale), data)
					);
				}
			}
		};		
	},
	
	
	
}
