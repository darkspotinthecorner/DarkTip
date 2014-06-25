/* DarkTip (v1.2.1) by Martin Gelder (Dark Spot in the Corner), Copyright (c) 2014 */

// Paul Irish's console.log() wrapper // http://paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
if(!window.log) {
	window.log=function(){log.history=log.history||[];log.history.push(arguments);if(this.console){console.log(Array.prototype.slice.call(arguments))}};
}

// Check if yepnope.js is defined, if not, we need to define it
if(!window.yepnope) {
	/* yepnope 1.5.4pre with pull request from github/lightsfury (mootools compability) */
	(function(a,b,c){function A(a){return!a||a=="loaded"||a=="complete"||a=="uninitialized"}function B(a,c,d,g,h,i){var k=b.createElement("script"),l,m;g=g||z["errorTimeout"];k.src=a;for(m in d){k.setAttribute(m,d[m])}c=i?D:c||j;k.onreadystatechange=k.onload=function(){if(!l&&A(k.readyState)){l=1;c();k.onload=k.onreadystatechange=null}};e(function(){if(!l){l=1;c(1)}},g);h?k.onload():f.parentNode.insertBefore(k,f)}function C(a,c,d,g,h,i){var k=b.createElement("link"),l,m;g=g||z["errorTimeout"];c=i?D:c||j;k.href=a;k.rel="stylesheet";k.type="text/css";for(m in d){k.setAttribute(m,d[m])}if(!h){f.parentNode.insertBefore(k,f);e(c,0)}}function D(){var a=h.shift();i=1;if(a){if(a["t"]){e(function(){(a["t"]=="c"?z["injectCss"]:z["injectJs"])(a["s"],0,a["a"],a["x"],a["e"],1)},0)}else{a();D()}}else{i=0}}function E(a,c,d,g,j,k,n){function s(b){if(!p&&A(o.readyState)){r["r"]=p=1;!i&&D();o.onload=o.onreadystatechange=null;if(b){if(a!="img"){e(function(){m.removeChild(o)},50)}for(var d in w[c]){if(w[c].hasOwnProperty(d)){w[c][d].onload()}}}}}n=n||z["errorTimeout"];var o=b.createElement(a),p=0,q=0,r={t:d,s:c,e:j,a:k,x:n};if(w[c]===1){q=1;w[c]=[]}if(a=="object"){o.data=c;o.setAttribute("type","text/css")}else{o.src=c;o.type=a}o.width=o.height="0";o.onerror=o.onload=o.onreadystatechange=function(){s.call(this,q)};h.splice(g,0,r);if(a!="img"){if(q||w[c]===2){m.insertBefore(o,l?null:f);e(s,n)}else{w[c].push(o)}}}function F(a,b,c,d,e){i=0;b=b||"j";if(t(a)){E(b=="c"?q:p,a,b,this["i"]++,c,d,e)}else{h.splice(this["i"]++,0,a);h.length==1&&D()}return this}function G(){var a=z;a["loader"]={load:F,i:0};return a}var d=b.documentElement,e=a.setTimeout,f=b.getElementsByTagName("script")[0],g={}.toString,h=[],i=0,j=function(){},k="MozAppearance"in d.style,l=k&&!!b.createRange().compareNode,m=l?d:f.parentNode,n=a.opera&&g.call(a.opera)=="[object Opera]",o=!!b.attachEvent&&!n,p=k?"object":o?"script":"img",q=o?"script":p,r=Array.isArray||function(a){return g.call(a)=="[object Array]"},s=function(a){return Object(a)===a},t=function(a){return typeof a=="string"},u=function(a){return g.call(a)=="[object Function]"},v=[],w={},x={timeout:function(a,b){if(b.length){a["timeout"]=b[0]}return a}},y,z;z=function(a){function f(a){var b=a.split("!"),c=v.length,d=b.pop(),e=b.length,f={url:d,origUrl:d,prefixes:b},g,h,i;for(h=0;h<e;h++){i=b[h].split("=");g=x[i.shift()];if(g){f=g(f,i)}}for(h=0;h<c;h++){f=v[h](f)}return f}function g(a){var b=a.split("?")[0];return b.substr(b.lastIndexOf(".")+1)}function h(a,b,d,e,h){var i=f(a),j=i["autoCallback"],k=g(i["url"]);if(i["bypass"]){return}if(b){b=u(b)?b:b[a]||b[e]||b[a.split("/").pop().split("?")[0]]}if(i["instead"]){return i["instead"](a,b,d,e,h)}else{if(w[i["url"]]){i["noexec"]=true}else{w[i["url"]]=1}d.load(i["url"],i["forceCSS"]||!i["forceJS"]&&"css"==g(i["url"])?"c":c,i["noexec"],i["attrs"],i["timeout"]);if(u(b)||u(j)){d["load"](function(){G();b&&b(i["origUrl"],h,e);j&&j(i["origUrl"],h,e);w[i["url"]]=2})}}}function i(a,b){function m(a,d){if(!a){!d&&i()}else if(t(a)){if(!d){f=function(){var a=[].slice.call(arguments);g.apply(this,a);i()}}h(a,f,b,0,c)}else if(r(a)){k=a.length;for(l=0;l<k;l++){if(a.hasOwnProperty(l)){if(!d&&l+1==k){if(!u(f)){f[l]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b);i()}}(g[l])}else{f=function(){var a=[].slice.call(arguments);g.apply(this,a);i()}}}h(a[l],f,b,l,c)}}}else if(s(a)){k=function(){var b=0,c;for(c in a){if(a.hasOwnProperty(c)){b++}}return b}();for(l in a){if(a.hasOwnProperty(l)){if(!d&&!--k){if(!u(f)){f[l]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b);i()}}(g[l])}else{f=function(){var a=[].slice.call(arguments);g.apply(this,a);i()}}}h(a[l],f,b,l,c)}}}}var c=!!a["test"],d=c?a["yep"]:a["nope"],e=a["load"]||a["both"],f=a["callback"]||j,g=f,i=a["complete"]||j,k,l;m(d,!!e);e&&m(e)}var b,d,e=this["yepnope"]["loader"];if(t(a)){h(a,0,e,0)}else if(r(a)){for(b=0;b<a.length;b++){d=a[b];if(t(d)){h(d,0,e,0)}else if(r(d)){z(d)}else if(s(d)){i(d,e)}}}else if(s(a)){i(a,e)}};z["addPrefix"]=function(a,b){x[a]=b};z["addFilter"]=function(a){v.push(a)};z["errorTimeout"]=1e4;if(b.readyState==null&&b.addEventListener){b.readyState="loading";b.addEventListener("DOMContentLoaded",y=function(){b.removeEventListener("DOMContentLoaded",y,0);b.readyState="complete"},0)}a["yepnope"]=G();a["yepnope"]["executeStack"]=D;a["yepnope"]["injectJs"]=B;a["yepnope"]["injectCss"]=C})(this,document)
}

window.___DarkTipSettings = window.___DarkTipSettings || {};

window.DarkTip = {

	'jq': undefined,

	'debug': false,

	'version': '1.2.1',

	'requirements': {
		'jquery': '>=1.7'
	},

	'data': {
		'settings': {
			'jquery': 'http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js',
			'resources': {
				'qtip2': [],
				'extras': []
			},
			'applyTo': {
				'explicit': true,
				'implicit': true
			},
			'decorativeMode': {
				'active': false,
				'default': {
					'background-color': 'rgba(0,0,0,0.9)',
					'padding': '2px 4px',
					'display': 'inline-block',
					'margin': '1px',
					'border-radius': '4px',
					'text-decoration': 'none'
				}
			},
			'extendedMode': {
				'active': true,
				'keyCode': 16,
				'keyCodeLabel': 'SHIFT'
			}
		},

		'triggers': {
			'explicit': [],
			'implicit': []
		},

		'layout': {
			'position': {
				'my': 'bottom middle',
				'at': 'top middle',
				'target': false
			},
			'width': {
				'core': 300,
				'404': 250
			}
		},

		'templates': {
			'tools': {
				'_sub': function(route, data) {
					if (typeof data === 'undefined') {
						data = this;
					} else {
						data['_meta'] = {};
						DarkTip.jq.extend(true, data['_meta'], this['_meta']);
					}
					var template = DarkTip.read(this['_meta']['module'], route);
					if (DarkTip.isTemplateString(template)) {
						return DarkTip.jq.jqote(
						template, DarkTip.jq.extend(true, {}, DarkTip.getTemplateTools(this['_meta']['module'], this['_meta']['locale']), data));
					} else {
						return template;
					}
				},
				'_subLoop': function(route, data, concat) {
					if (typeof concat === 'undefined') {
						concat = '';
					}
					var template = DarkTip.read(this['_meta']['module'], route);
					var collect = [];
					if (DarkTip.isTemplateString(template)) {
						for (var i = 0; i < data.length; i++) {
							if (typeof data[i] !== 'object') {
								data[i] = {
									'_value': data[i]
								}
							}

							data[i]['_meta'] = {};
							DarkTip.jq.extend(true, data[i]['_meta'], this['_meta']);

							collect.push(DarkTip.jq.jqote(
							template, DarkTip.jq.extend(true, {}, DarkTip.getTemplateTools(this['_meta']['module'], this['_meta']['locale']), {
								'_loop': i
							}, data[i])));
						}
					} else {
						for (var i = 0; i < data.length; i++) {
							collect.push(template);
						}
					}
					return collect.join(concat);
				},
				'_loc': function(route, data, fuzzy) {
					if (typeof data === 'undefined') {
						data = this;
					} else {
						data['_meta'] = {};
						DarkTip.jq.extend(true, data['_meta'], this['_meta']);
					}
					var template = DarkTip.localize(this['_meta']['module'], this['_meta']['locale'], route, fuzzy);
					if (DarkTip.isTemplateString(template)) {
						return DarkTip.jq.jqote(
						template, DarkTip.jq.extend(true, {}, DarkTip.getTemplateTools(this['_meta']['module'], this['_meta']['locale']), data));
					} else {
						return template;
					}
				},
				'_locLoop': function(route, data, concat) {
					if (typeof concat === 'undefined') {
						concat = '';
					}
					var template = DarkTip.localize(this['_meta']['module'], this['_meta']['locale'], route);
					var collect = [];
					if (DarkTip.isTemplateString(template)) {
						for (var i = 0; i < data.length; i++) {
							if (typeof data[i] !== 'object') {
								data[i] = {
									'_value': data[i]
								}
							}

							data[i]['_meta'] = {};
							DarkTip.jq.extend(true, data[i]['_meta'], this['_meta']);

							collect.push(DarkTip.jq.jqote(
							template, DarkTip.jq.extend(true, {}, DarkTip.getTemplateTools(this['_meta']['module'], this['_meta']['locale']), {
								'_loop': i
							}, data[i])));
						}
					} else {
						for (var i = 0; i < data.length; i++) {
							collect.push(template);
						}
					}
					return collect.join(concat);
				}
			}
		},

		'i18n': {
			'en_US': {
				'loading': 'Loading...',
				'not-found': 'Nothing found',
				'extendedInactive': 'Hold [<%= this["_meta"]["extendedKeyCodeLabel"] %>] to switch modes',
				'extendedActive': 'Release [<%= this["_meta"]["extendedKeyCodeLabel"] %>] to switch modes'
			},
			'en_GB': {
				'meta': {
					'redirect': 'en_US'
				}
			},
			'de_DE': {
				'loading': 'Laden...',
				'not-found': 'Nichts gefunden',
				'extendedInactive': '[<%= this["_meta"]["extendedKeyCodeLabel"] %>] gedr&uuml;ckt halten um den Modus zu wechseln',
				'extendedActive': '[<%= this["_meta"]["extendedKeyCodeLabel"] %>] loslassen um den Modus zu wechseln!'
			},
			'fr_FR': {
				'loading': 'Chargement...',
				'not-found': 'Aucun r&eacute;sultat',
				'extendedInactive': 'Appuyez sur [<%= this["_meta"]["extendedKeyCodeLabel"] %>] pour changer de mode',
				'extendedActive': 'Relacher [<%= this["_meta"]["extendedKeyCodeLabel"] %>] pour changer de mode'
			},
			'es_ES': {
				'loading': 'Cargando...',
				'not-found': 'No he encontrado nada',
				'extendedInactive': '&iexcl;Manten pulsado [<%= this["_meta"]["extendedKeyCodeLabel"] %>] para cambiar de modo!',
				'extendedActive': '&iexcl;Suelta [<%= this["_meta"]["extendedKeyCodeLabel"] %>] para cambiar de modo!'
			},
			'it_IT': {
				'loading': 'Caricamento...',
				'not-found': 'Non è stato trovato',
				'extendedActive': 'Rilascia [<%= this["_meta"]["extendedKeyCodeLabel"] %>] per cambiare modalità',
				'extendedInactive': 'Tieni premuto [<%= this["_meta"]["extendedKeyCodeLabel"] %>] per cambiare modalità'
			},
			'pt_PT': {
			},
			'es_MX': {
				'meta': {
					'fallback': 'es_ES'
				}
			},
			'pt_BR': {
				'meta': {
					'fallback': 'pt_PT'
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
		'cache': {
			'apicall': {}
		},
		'modules': {}
	},

	'log': function(message) {
		if ((typeof this['debug'] !== 'undefined') && (this['debug'] === true)) {
			window.log(message);
		}
	},

	'setting': function(route) {
		if (route != '') {
			return this._read('data.settings.' + route);
		}
		return this._read('data.settings');
	},

	'compareRule': function(data, rule) {
		// mandatory always true
		if (rule === true) {
			return true;
		}
		// simple existance check (aaa.bbb.ccc)
		if (rule.match(/^[a-z0-9_\-]+(\.[a-z0-9_\-]+)*$/i)) {
			var segments = rule.split('.');
			var current = data;

			for (var i = 0; i < segments.length; i++) {
				if (typeof current[segments[i]] === 'undefined') {
					return undefined;
				} else {
					current = current[segments[i]];
				}
			}
			return current;
		}
		return undefined;
	},

	'_read': function(route, fuzzy) {
		if (typeof fuzzy === 'undefined') {
			fuzzy = 0;
		}

		if (route === '') {
			return this;
		}

		var segments = route.split('.');
		var current = this;

		for (var i = 0; i < segments.length; i++) {
			if (typeof current[segments[i]] === 'undefined') {
				if ((i + fuzzy) >= segments.length) {
					return current;
				}
				// this.log('Reading of route "'+route+'" (fuzzy: '+fuzzy+') failed!');
				return undefined;
			} else {
				current = current[segments[i]];
			}
		}
		return current;
	},

	'read': function(module, route, fuzzy) {
		var modules = module.split('.');
		var baseRoutes = ['data'];

		for (var i = 0; i < modules.length; i++) {
			var temp = baseRoutes[0];
			baseRoutes.unshift(temp + '.modules.' + modules[i]);
		}

		for (var i = 0; i < baseRoutes.length; i++) {
			var currentRoute = baseRoutes[i] + '.' + route;
			var result = this._read(currentRoute, fuzzy);

			if (result !== undefined) {
				return result;
			}
		}

		return undefined;
	},

	'collect': function(module, route) {
		var modules = module.split('.');
		var baseRoutes = ['data'];

		for (var i = 0; i < modules.length; i++) {
			var temp = baseRoutes[0];
			baseRoutes.unshift(temp + '.modules.' + modules[i]);
		}

		var collector = {};

		for (var i = 0; i < baseRoutes.length; i++) {
			var currentRoute = baseRoutes[i] + '.' + route;
			var result = this._read(currentRoute);
			if (result !== undefined) {
				this.jq.extend(true, collector, result);
			}
		}

		return collector;
	},

	'route': function(module, route) {
		var modules = module.split('.');
		var builder = 'data';

		for (var i = 0; i < modules.length; i++) {
			if (modules[i] != '') {
				builder = builder + '.modules.' + modules[i];
			}
		}

		if (typeof route !== 'undefined') {
			builder = builder + '.' + route;
		}

		return (builder);
	},

	'localize': function(module, locale, route, fuzzy) {
		var activeLocale = locale;
		var redirect = this.read(module, ('i18n.' + locale + '.meta.redirect'));
		var fallback = this.read(module, ('i18n.' + locale + '.meta.fallback'));

		if (redirect != undefined) {
			activeLocale = redirect;
		}

		var result = this.read(module, ('i18n.' + activeLocale + '.' + route), fuzzy);

		if ((result === undefined) && (fallback != undefined)) {
			activeLocale = fallback;
			result = this.read(module, ('i18n.' + activeLocale + '.' + route), fuzzy);
		}

		if ((result === undefined) && (fallback != 'en_US')) {
			activeLocale = 'en_US';
			result = this.read(module, ('i18n.' + activeLocale + '.' + route), fuzzy);
		}

		if (result === undefined) {
			this.log('Translation missing! Module: "' + module + '", Locale: "' + locale + '", Route: "' + route + '" (Fuzzy: ' + fuzzy + ')');
			return '';
		}

		return result;
	},

	'write': function(route, data) {
		var segments = route.split('.');
		var current = this;

		for (var i = 0; i < segments.length; i++) {
			if (i == (segments.length - 1)) {
				// if last segment ends with "+", data container is an array and data will be pushed
				if (segments[i].match(/^.+\+$/)) {
					segments[i] = segments[i].slice(0, (segments[i].length - 1));
					if (typeof current[segments[i]] === 'undefined') {
						current[segments[i]] = [];
					}
					current[segments[i]].push(data);
				}
				// if last segment starts with "+", data container is an array and data will be unshifted
				else if (segments[i].match(/^\+.+$/)) {
					segments[i] = segments[i].slice(1, segments[i].length);
					if (typeof current[segments[i]] === 'undefined') {
						current[segments[i]] = [];
					}
					current[segments[i]].unshift(data);
				} else {
					current[segments[i]] = data;
				}
				return true;
			} else {
				if (typeof current[segments[i]] === 'undefined') {
					current[segments[i]] = {};
				}
				current = current[segments[i]];
			}
		}
		return false;
	},

	'buildSettings': function() {
		jQuery.extend(true, this['data']['settings'], window.___DarkTipSettings);
	},

	'map': function(module, route, value) {
		var map = this.read(module, route);
		if (map) {
			if (typeof map[value] !== 'undefined') {
				return map[value];
			}
		}
		return undefined;
	},

	'mapRegex': function(result, map) {
		var params = {};
		if (map) {
			for (var p in map) {
				params[map[p]] = result[p];
			}
			return params;
		}
		return {};
	},

	'isTemplateString': function(test) {
		if (typeof test === 'string') {
			if (test.match(/<%=?.+%>/i)) {
				return true;
			}
		}
		return false;
	},

	'isLocalStorageUseable': function() {
		return (typeof window.localStorage !== 'undefined');
	},

	'readFromLocalStorage': function(key) {
		var item = window.localStorage.getItem(key);
		if (typeof item !== 'undefined') {
			return JSON.parse(item);
		}
		return undefined;
	},

	'writeToLocalStorage': function(key, data) {
		try {
			window.localStorage.setItem(key, JSON.stringify(data));
		} catch (e) {
			if (e == QUOTA_EXCEEDED_ERR) {
				this.log('Writing to localStorage failes, quote exeeded for key "' + key + '".');
			}
			return false;
		}
		return true;
	},

	'getCache': function(region, key) {
		var result = undefined;
		if (this.isLocalStorageUseable()) {
			var maxtime = this.readFromLocalStorage('darktip_cache_maxtime_' + region + '_' + key);
			var curtime = Math.round((new Date()).getTime() / 1000);
			if ((maxtime === null) || (curtime < maxtime)) {
				result = this.readFromLocalStorage('darktip_cache_' + region + '_' + key);
			}
		} else {
			if (typeof this['data']['cache'][region][key] !== 'undefined') {
				result = this['data']['cache'][region][key];
			}
		}
		if (result === null) {
			result = undefined;
		}
		return result;
	},

	'setCache': function(region, key, data, cache_lifetime) {
		cache_lifetime = cache_lifetime || 0;
		if (this.isLocalStorageUseable()) {
			var maxtime = Math.round((new Date()).getTime() / 1000) + cache_lifetime;
			if ((cache_lifetime == 0) || (this.writeToLocalStorage(('darktip_cache_maxtime_' + region + '_' + key), maxtime))) {
				return this.writeToLocalStorage(('darktip_cache_' + region + '_' + key), data);
			}
			return false;
		}
		this['data']['cache']['region'][key] = data;
		return true;
	},

	'startUp': function() {
		if (this.setting('unbindJQuery')) {
			this.jq = jQuery.noConflict(this.setting('unbindJQuery'));
		} else {
			this.jq = jQuery;
		}

		this.jq(function() {
			if (DarkTip.setting('extendedMode.active')) {
				DarkTip.jq(document).keydown(function(event) {
					if (event.keyCode == DarkTip.setting('extendedMode.keyCode')) {
						DarkTip.jq('body').addClass('darktip-extended-mode');
						DarkTip.repositionActiveTooltips();
					}
				});

				DarkTip.jq(document).keyup(function(event) {
					if (event.keyCode == DarkTip.setting('extendedMode.keyCode')) {
						DarkTip.jq('body').removeClass('darktip-extended-mode');
						DarkTip.repositionActiveTooltips();
					}
				});
			}

			if (DarkTip.setting('applyTo.explicit')) {
				DarkTip.jq('body').on('mouseenter', '[data-darktip]', function() {
					DarkTip.handleHover('explicit', DarkTip.jq(this));
				});
			}

			if (DarkTip.setting('applyTo.implicit')) {
				DarkTip.jq('body').on('mouseenter', 'a[href]', function() {
					DarkTip.handleHover('implicit', DarkTip.jq(this));
				});
			}
		});
	},

	'handleHover': function(type, element) {
		if (typeof element.data('qtip') !== 'object') {
			var triggers = this._read(this.route('', 'triggers.' + type));
			var testme = '';

			if (triggers !== undefined && (type === 'explicit' || type === 'implicit')) {
				if (type === 'explicit') {
					testme = new String(element.data('darktip'));
				} else {
					testme = element.attr('href');
				}

				for (var i = 0; i < triggers.length; i++) {
					var result = testme.match(triggers[i]['pattern']['match']);

					if (result) {
						var paramFunc = this._read(this.route(triggers[i]['module'], 'getParams.' + type));
						var params = {};
						if (paramFunc) {
							params = paramFunc(result);
						}
						this.initTooltip(triggers[i]['module'], type, params, element);
						break;
					}
				}
			}
		}
	},

	'initTooltip': function(module, type, params, element) {
		if (typeof params['locale'] === 'undefined') {
			params['locale'] = 'en_US';
		}
		var content = this.localize(module, params['locale'], 'loading');
		this.attachTooltip(element, content, module);
		this.startDataCollect(module, params, element, type);
	},

	'initDataCollectState': function(module, params, element, type) {
		var collectionState = {

			'repo': {
				'module': module,
				'type': type,
				'params': params,
				'element': element,
				'templateTools': this.getTemplateTools(module, params['locale']),
				'callbackParam': this.read(module, 'triggers.apiParams.callback'),
				'requiredData': []
			},

			'status': 'pending',

			'queries': {
				'sleeping': {},
				'running': {},
				'done': {}
			},

			'data': {},

			'awakenQuery': function(key) {
				if (typeof this.queries.sleeping[key] !== 'undefined') {
					this.queries.running[key] = this.queries.sleeping[key];
					delete this.queries.sleeping[key];
				}
			},

			'completeQuery': function(key) {
				if (typeof this.queries.running[key] !== 'undefined') {
					this.queries.done[key] = this.queries.running[key];
					delete this.queries.running[key];
				}
				this.run();
				this.finish();
			},

			'buildCallbackQuerySuccess': function(key, apicall, cache_lifetime) {
				var state = this;
				return function(data, options) {
					state.data[key] = data;
					DarkTip.setCache('apicall', apicall, data, cache_lifetime);
					state.completeQuery(key);
				}
			},

			'buildCallbackQueryError': function(key) {
				var state = this;
				return function(options) {
					if (state.queries.running[key]['required']) {
						state.status = 'error';
					}
					state.completeQuery(key);
				}
			},

			'done': function() {
				return DarkTip.jq.isEmptyObject(this.queries.running);
			},

			'finish': function() {
				if (this.done()) {
					if ((this.status === 'error') || (this.status === 'pending')) {
						this.status = 'done';
						DarkTip.renderTooltip(this);
					}
				}
			},

			'run': function() {
				var state = this;

				DarkTip.jq.each(state.queries.sleeping, function(key, query) {
					var condition = query.condition;

					if (DarkTip.isTemplateString(condition)) {
						condition = DarkTip.jq.jqote(condition, DarkTip.jq.extend(true, {}, state.repo.params, state.repo.templateTools));
					}

					condition = DarkTip.compareRule(state.data, condition);

					if (typeof condition !== 'undefined') {
						var apicall = DarkTip.jq.jqote(query['call'], DarkTip.jq.extend(true, {}, state.repo.params, {
							'condition': condition
						}, state.repo.templateTools));

						state.awakenQuery(key);

						var cache = DarkTip.getCache('apicall', apicall);

						if (typeof cache !== 'undefined') {
							state.buildCallbackQuerySuccess(key, apicall, query['caching'])(cache);
						} else {
							DarkTip.jq.jsonp({
								'url': apicall,
								'callbackParameter': state.repo.callbackParam,
								'success': state.buildCallbackQuerySuccess(key, apicall, query['caching']),
								'error': state.buildCallbackQueryError(key)
							});
						}
					}

				});

				this.finish();
			}

		};

		var apicalls = this._read(this.route(module, 'queries'));

		this.jq.each(apicalls, function(key, payload) {
			if (typeof payload === 'object') {
				if (typeof payload['required'] === 'undefined') {
					payload['required'] = true;
				}

				if (typeof payload['condition'] === 'undefined') {
					payload['condition'] = true;
				}

				collectionState.queries.sleeping[key] = {
					'required': (payload['required'] == true),
					'condition': payload['condition'],
					'call': payload['call'],
					'caching': payload['caching']
				};
			} else {
				collectionState.queries.sleeping[key] = {
					'required': true,
					'condition': true,
					'call': payload,
					'caching': 0
				};
			}

			if (collectionState.queries.sleeping[key].required) {
				collectionState.repo.requiredData.push(key);
			}

		});

		return collectionState;
	},

	'startDataCollect': function(module, params, element, type) {
		var state = this.initDataCollectState(module, params, element, type);
		state.run();
	},

	'renderTooltip': function(state) {
		var module = state.repo.module,
			type = state.repo.type,
			params = state.repo.params,
			element = state.repo.element,
			data = state.data,
			error = false,
			content = '';

		DarkTip.jq.each(state['repo']['requiredData'], function(nothing, key) {
			if (typeof state['data'][key] === 'undefined') {
				error = true;
			}
		});

		var prepareDataFunc = this.read(module, 'prepareData');

		if (typeof prepareDataFunc !== 'undefined') {
			data = prepareDataFunc(state);
		}

		if (!error && data) {
			// call module func to enhance template data
			var enhanceDataFunc = this.read(module, 'enhanceData');

			if (typeof enhanceDataFunc !== 'undefined') {
				data = enhanceDataFunc(module, params, data);
			}

			if (this['data']['settings']['decorativeMode']['active']) {
				var decorateFunc = this.read(module, ('triggers.' + type + '.decorate'));

				if (typeof decorateFunc !== 'undefined') {
					decorateFunc(element.get(0), params, data);
				}
			}

			element.qtip('api').set('style.width', this.read(module, 'layout.width.core'));

			content = this.jq.jqote(
				this.read(module, 'templates.core'),
				this.jq.extend(true, {}, this.getTemplateTools(module, params['locale']), data)
			);

		} else {
			element.qtip('api').set('style.width', this.read(module, 'layout.width.404'));

			content = this.jq.jqote(
				this.read(module, 'templates.404'),
				this.jq.extend(true, {}, this.getTemplateTools(module, params['locale']), params)
			);
		}

		element.qtip('api').set('content.text', content);
	},

	'attachTooltip': function(element, content, module) {
		var width    = this.read(module, 'layout.width.core');
		var cssclass = this.read(module, 'layout.css.class');

		if (width == undefined) {
			width = 300;
		}
		if (cssclass == undefined) {
			cssclass = '';
		}

		element.qtip({
			'overwrite': false,
			'show': {
				'solo': true,
				'ready': true
			},
			'content': {
				'text': content
			},
			'position': {
				'my': DarkTip.read(module, 'layout.position.my'),
				'at': DarkTip.read(module, 'layout.position.at'),
				'target': DarkTip.read(module, 'layout.position.target'),
				'viewport': DarkTip.jq(window),
				'effect': false
			},
			'hide': 'mouseleave',
			'style': {
				'width': width + 'px',
				'classes': ('ui-tooltip-cluetip darktip-tooltip ' + cssclass)
			}
		});

		DarkTip.log(element.qtip)
		DarkTip.log(typeof element.data('qtip'));
	},

	'repositionActiveTooltips': function() {
		this.jq('body > div.qtip:visible').qtip('reposition');
	},

	'getTemplateTools': function(module, locale) {
		var collection = this.collect(module, 'templates.tools'),
			tools = {
				'_meta': {
					'extendedActive': this.setting('extendedMode.active'),
					'extendedKeyCodeLabel': this.setting('extendedMode.keyCodeLabel'),
					'locale': locale,
					'module': module
				}
			};
		if (collection) {
			this.jq.extend(true, tools, collection);
		}
		return tools;
	},

	'verifyParentModule': function(module) {
		var segments = module.split('.');
		if (segments.length < 2) {
			return true;
		}
		segments.pop();
		var parentModule = segments.join('.');
		if (this._read(this.route(parentModule, 'registered'))) {
			return true;
		}
		this.log('Parent module missing! Module: "' + module + '", Parent: "' + parentModule + '"');
		return false;
	},

	'registerModule': function(moduleKey, moduleData) {
		var submodules = {};
		// The module seems to come with included submodules, split the off, to include them later
		if (typeof moduleData['modules'] !== 'undefined') {
			this.jq.extend(true, submodules, moduleData['modules']);
		}

		// Sanitize - clean submodules
		moduleData['modules'] = {};
		moduleData['registered'] = true;

		// check if parent modules are loaded
		if (this.verifyParentModule(moduleKey)) {
			this.write(this.route(moduleKey), moduleData);

			var patternExplicit = this._read(this.route(moduleKey, 'triggers.explicit'));
			if (patternExplicit) {
				this.write(('data.triggers.+explicit'), {
					'module': moduleKey,
					'pattern': patternExplicit
				});
			}

			var patternImplicit = this._read(this.route(moduleKey, 'triggers.implicit'));
			if (patternImplicit) {
				this.write(('data.triggers.+implicit'), {
					'module': moduleKey,
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

		// this.dustTest();
	},

	'dustTest': function() {
		var i18n = {
			'en_US': {
				'foo'  : 'foo(en)',
				'one'  : 'One small house',
				'two'  : 'Two more to go',
				'three': 'Three are here',
				'four' : {
					'one': 'The letter A for {x} --{narf}--',
					'two': 'The letter B for {x} --{narf}--',
					'three': 'The letter C for {x} --{narf}--'
				}
			},
			'de_DE': {
				'foo'  : 'foo(de)',
				'one'  : 'Ein kleines Haus',
				'two'  : 'Zwei passen noch rein',
				'three': 'Drei sind hier',
				'four' : {
					'one': 'Der Buchstabe A für ({@i18n t="foo" /}) {x} --{narf}--',
					'two': 'Der Buchstabe B für {x} --{narf}--',
					'three': 'Der Buchstabe C für {x} --{narf}--'
				}
			}
		};

		dust.loadSource(dust.compile('{#users}({$idx}) Hello {name}! ({@i18n t="four.{bar}" x="{name}" /}){/users}', 'intro'));
		console.log('narf');

		dust.helpers.i18n.context(i18n['de_DE']);
		dust.render('intro', {
			'name': 'Fred',
			'test': 'B',
			'users': [
				{ 'name': 'Wilma',  'bar': 'one',   'narf': '111'},
				{ 'name': 'Barney', 'bar': 'two',   'narf': '222'},
				{ 'name': 'Dino',   'bar': 'three', 'narf': '333'},
			]
		}, function(err, out) {
			console.log(out);
		});
	},

	'checkRequirements': function(requirement, version) {
		if (typeof this.requirements[requirement] === 'undefined') {
			return true;
		}

		return this.compareVersion(version, this.requirements[requirement]);
	},

	'compareVersion': function(current, target) {
		var type    = '=';
		var version = {
			'current': [],
			'target' : []
		};

		var regex   = /^(>=|<=|>|<)/i;
		var matches = regex.exec(target);

		if (matches != null)
		{
			type = matches[1];
		}

		var regex   = /(\d+)/gi;
		matches     = regex.exec(target);

		while (matches != null) {
			version['target'].push(matches[1]);
			matches = regex.exec(target);
		}

		regex.lastIndex = 0;
		matches         = regex.exec(current);
		while (matches != null) {
			version['current'].push(matches[1]);
			matches = regex.exec(current);
		}

		var compare = this.doCompare(version['current'], version['target']);

		switch (type) {
			case '>=':
				if (compare == 0 || compare == 1) return true;
				break;
			case '>':
				if (compare == 1) return true;
				break;
			case '<=':
				if (compare == 0 || compare == -1) return true;
				break;
			case '<':
				if (compare == -1) return true;
				break;
			default:
				if (compare == 0) return true;
				break;
		}

		return false;
	},

	'doCompare': function(left, right) {
		var len = Math.max(left.length, right.length);

		for (i = 0; i < len; i++) {
			if ((left[i] && !right[i] && parseInt(left[i]) > 0) || (parseInt(left[i]) > parseInt(right[i]))) {
				return 1;
			} else if ((right[i] && !left[i] && parseInt(right[i]) > 0) || (parseInt(left[i]) < parseInt(right[i]))) {
				return -1;
			}
		}

		return 0;
	}

};


window.___DarkTipSettings['unbindJQuery'] = ((window.jQuery && !DarkTip.checkRequirements('jquery', window.jQuery().jquery)) ? true : false);

yepnope([{
	'test'    : (window.jQuery && DarkTip.checkRequirements('jquery', window.jQuery().jquery)),
	'nope'    : (window.___DarkTipSettings['jquery'] || 'http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'),
	'complete': function() {

/*! Dust - Asynchronous Templating - v2.4.0
* http://linkedin.github.io/dustjs/
* Copyright (c) 2014 Aleksander Williams; Released under the MIT License */
(function(root) {
  var dust = {},
      NONE = 'NONE',
      ERROR = 'ERROR',
      WARN = 'WARN',
      INFO = 'INFO',
      DEBUG = 'DEBUG',
      loggingLevels = [DEBUG, INFO, WARN, ERROR, NONE],
      EMPTY_FUNC = function() {},
      logger = {},
      originalLog,
      loggerContext,
      hasOwnProperty = Object.prototype.hasOwnProperty,
      getResult;

  dust.debugLevel = NONE;

  /**
   * Given an object and a key, return the value. Use this instead of obj[key] in order to:
   *     prevent looking up the prototype chain
   *     fail nicely when the object is falsy
   * @param {Object} obj the object to inspect
   * @param {String} key the name of the property to resolve
   * @return {*} the resolved value
   */
  getResult = function(obj, key) {
    if (obj && hasOwnProperty.call(obj, key)) {
      return obj[key];
    }
  };


  // Try to find the console in global scope
  if (root && root.console && root.console.log) {
    loggerContext = root.console;
    originalLog = root.console.log;
  }

  // robust logger for node.js, modern browsers, and IE <= 9.
  logger.log = loggerContext ? function() {
      // Do this for normal browsers
      if (typeof originalLog === 'function') {
        logger.log = function() {
          originalLog.apply(loggerContext, arguments);
        };
      } else {
        // Do this for IE <= 9
        logger.log = function() {
          var message = Array.prototype.slice.apply(arguments).join(' ');
          originalLog(message);
        };
      }
      logger.log.apply(this, arguments);
  } : function() { /* no op */ };

  /**
   * Log dust debug statements, info statements, warning statements, and errors.
   * Filters out the messages based on the dust.debuglevel.
   * This default implementation will print to the console if it exists.
   * @param {String|Error} message the message to print/throw
   * @param {String} type the severity of the message(ERROR, WARN, INFO, or DEBUG)
   * @public
   */
  dust.log = function(message, type) {
    type = type || INFO;
    if (dust.debugLevel !== NONE && dust.indexInArray(loggingLevels, type) >= dust.indexInArray(loggingLevels, dust.debugLevel)) {
      if(!dust.logQueue) {
        dust.logQueue = [];
      }
      dust.logQueue.push({message: message, type: type});
      logger.log('[DUST ' + type + ']: ' + message);
    }
  };

  dust.helpers = {};

  dust.cache = {};

  dust.register = function(name, tmpl) {
    if (!name) {
      return;
    }
    dust.cache[name] = tmpl;
  };

  dust.render = function(name, context, callback) {
    var chunk = new Stub(callback).head;
    try {
      dust.load(name, chunk, Context.wrap(context, name)).end();
    } catch (err) {
      chunk.setError(err);
    }
  };

  dust.stream = function(name, context) {
    var stream = new Stream(),
        chunk = stream.head;
    dust.nextTick(function() {
      try {
        dust.load(name, stream.head, Context.wrap(context, name)).end();
      } catch (err) {
        chunk.setError(err);
      }
    });
    return stream;
  };

  dust.renderSource = function(source, context, callback) {
    return dust.compileFn(source)(context, callback);
  };

  dust.compileFn = function(source, name) {
    // name is optional. When name is not provided the template can only be rendered using the callable returned by this function.
    // If a name is provided the compiled template can also be rendered by name.
    name = name || null;
    var tmpl = dust.loadSource(dust.compile(source, name));
    return function(context, callback) {
      var master = callback ? new Stub(callback) : new Stream();
      dust.nextTick(function() {
        if(typeof tmpl === 'function') {
          tmpl(master.head, Context.wrap(context, name)).end();
        }
        else {
          dust.log(new Error('Template [' + name + '] cannot be resolved to a Dust function'), ERROR);
        }
      });
      return master;
    };
  };

  dust.load = function(name, chunk, context) {
    var tmpl = dust.cache[name];
    if (tmpl) {
      return tmpl(chunk, context);
    } else {
      if (dust.onLoad) {
        return chunk.map(function(chunk) {
          dust.onLoad(name, function(err, src) {
            if (err) {
              return chunk.setError(err);
            }
            if (!dust.cache[name]) {
              dust.loadSource(dust.compile(src, name));
            }
            dust.cache[name](chunk, context).end();
          });
        });
      }
      return chunk.setError(new Error('Template Not Found: ' + name));
    }
  };

  dust.loadSource = function(source, path) {
    return eval(source);
  };

  if (Array.isArray) {
    dust.isArray = Array.isArray;
  } else {
    dust.isArray = function(arr) {
      return Object.prototype.toString.call(arr) === '[object Array]';
    };
  }

  // indexOf shim for arrays for IE <= 8
  // source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
  dust.indexInArray = function(arr, item, fromIndex) {
    fromIndex = +fromIndex || 0;
    if (Array.prototype.indexOf) {
      return arr.indexOf(item, fromIndex);
    } else {
    if ( arr === undefined || arr === null ) {
      throw new TypeError( 'cannot call method "indexOf" of null' );
    }

    var length = arr.length; // Hack to convert object.length to a UInt32

    if (Math.abs(fromIndex) === Infinity) {
      fromIndex = 0;
    }

    if (fromIndex < 0) {
      fromIndex += length;
      if (fromIndex < 0) {
        fromIndex = 0;
      }
    }

    for (;fromIndex < length; fromIndex++) {
      if (arr[fromIndex] === item) {
        return fromIndex;
      }
    }

    return -1;
    }
  };

  dust.nextTick = (function() {
    return function(callback) {
      setTimeout(callback,0);
    };
  } )();

  dust.isEmpty = function(value) {
    if (dust.isArray(value) && !value.length) {
      return true;
    }
    if (value === 0) {
      return false;
    }
    return (!value);
  };

  // apply the filter chain and return the output string
  dust.filter = function(string, auto, filters) {
    if (filters) {
      for (var i=0, len=filters.length; i<len; i++) {
        var name = filters[i];
        if (name === 's') {
          auto = null;
        }
        else if (typeof dust.filters[name] === 'function') {
          string = dust.filters[name](string);
        }
        else {
          dust.log('Invalid filter [' + name + ']', WARN);
        }
      }
    }
    // by default always apply the h filter, unless asked to unescape with |s
    if (auto) {
      string = dust.filters[auto](string);
    }
    return string;
  };

  dust.filters = {
    h: function(value) { return dust.escapeHtml(value); },
    j: function(value) { return dust.escapeJs(value); },
    u: encodeURI,
    uc: encodeURIComponent,
    js: function(value) {
      if (!JSON) {
        dust.log('JSON is undefined.  JSON stringify has not been used on [' + value + ']', WARN);
        return value;
      } else {
        return JSON.stringify(value);
      }
    },
    jp: function(value) {
      if (!JSON) {dust.log('JSON is undefined.  JSON parse has not been used on [' + value + ']', WARN);
        return value;
      } else {
        return JSON.parse(value);
      }
    }
  };

  function Context(stack, global, blocks, templateName) {
    this.stack  = stack;
    this.global = global;
    this.blocks = blocks;
    this.templateName = templateName;
  }

  dust.makeBase = function(global) {
    return new Context(new Stack(), global);
  };

  Context.wrap = function(context, name) {
    if (context instanceof Context) {
      return context;
    }
    return new Context(new Stack(context), {}, null, name);
  };

  /**
   * Public API for getting a value from the context.
   * @method get
   * @param {string|array} path The path to the value. Supported formats are:
   * 'key'
   * 'path.to.key'
   * '.path.to.key'
   * ['path', 'to', 'key']
   * ['key']
   * @param {boolean} [cur=false] Boolean which determines if the search should be limited to the
   * current context (true), or if get should search in parent contexts as well (false).
   * @public
   * @returns {string|object}
   */
  Context.prototype.get = function(path, cur) {
    if (typeof path === 'string') {
      if (path[0] === '.') {
        cur = true;
        path = path.substr(1);
      }
      path = path.split('.');
    }
    return this._get(cur, path);
  };

  /**
   * Get a value from the context
   * @method _get
   * @param {boolean} cur Get only from the current context
   * @param {array} down An array of each step in the path
   * @private
   * @return {string | object}
   */
  Context.prototype._get = function(cur, down) {
    var ctx = this.stack,
        i = 1,
        value, first, len, ctxThis;
    first = down[0];
    len = down.length;

    if (cur && len === 0) {
      ctxThis = ctx;
      ctx = ctx.head;
    } else {
      if (!cur) {
        // Search up the stack for the first value
        while (ctx) {
          if (ctx.isObject) {
            ctxThis = ctx.head;
            value = getResult(ctx.head, first);
            if (value !== undefined) {
              break;
            }
          }
          ctx = ctx.tail;
        }

        if (value !== undefined) {
          ctx = value;
        } else {
          ctx = getResult(this.global, first);
        }
      } else if (ctx) {
        // if scope is limited by a leading dot, don't search up the tree
        ctx = getResult(ctx.head, first);
      }

      while (ctx && i < len) {
        ctxThis = ctx;
        ctx = getResult(ctx, down[i]);
        i++;
      }
    }

    // Return the ctx or a function wrapping the application of the context.
    if (typeof ctx === 'function') {
      return function() {
        try {
          return ctx.apply(ctxThis, arguments);
        } catch (err) {
          return dust.log(err, ERROR);
        }
      };
    } else {
      if (ctx === undefined) {
        dust.log('Cannot find the value for reference [{' + down.join('.') + '}] in template [' + this.getTemplateName() + ']');
      }
      return ctx;
    }
  };

  Context.prototype.getPath = function(cur, down) {
    return this._get(cur, down);
  };

  Context.prototype.push = function(head, idx, len) {
    return new Context(new Stack(head, this.stack, idx, len), this.global, this.blocks, this.getTemplateName());
  };

  Context.prototype.rebase = function(head) {
    return new Context(new Stack(head), this.global, this.blocks, this.getTemplateName());
  };

  Context.prototype.current = function() {
    return this.stack.head;
  };

  Context.prototype.getBlock = function(key, chk, ctx) {
    if (typeof key === 'function') {
      var tempChk = new Chunk();
      key = key(tempChk, this).data.join('');
    }

    var blocks = this.blocks;

    if (!blocks) {
      dust.log('No blocks for context[{' + key + '}] in template [' + this.getTemplateName() + ']', DEBUG);
      return;
    }
    var len = blocks.length, fn;
    while (len--) {
      fn = blocks[len][key];
      if (fn) {
        return fn;
      }
    }
  };

  Context.prototype.shiftBlocks = function(locals) {
    var blocks = this.blocks,
        newBlocks;

    if (locals) {
      if (!blocks) {
        newBlocks = [locals];
      } else {
        newBlocks = blocks.concat([locals]);
      }
      return new Context(this.stack, this.global, newBlocks, this.getTemplateName());
    }
    return this;
  };

  Context.prototype.getTemplateName = function() {
    return this.templateName;
  };

  function Stack(head, tail, idx, len) {
    this.tail = tail;
    this.isObject = head && typeof head === 'object';
    this.head = head;
    this.index = idx;
    this.of = len;
  }

  function Stub(callback) {
    this.head = new Chunk(this);
    this.callback = callback;
    this.out = '';
  }

  Stub.prototype.flush = function() {
    var chunk = this.head;

    while (chunk) {
      if (chunk.flushable) {
        this.out += chunk.data.join(''); //ie7 perf
      } else if (chunk.error) {
        this.callback(chunk.error);
        dust.log('Chunk error [' + chunk.error + '] thrown. Ceasing to render this template.', WARN);
        this.flush = EMPTY_FUNC;
        return;
      } else {
        return;
      }
      chunk = chunk.next;
      this.head = chunk;
    }
    this.callback(null, this.out);
  };

  function Stream() {
    this.head = new Chunk(this);
  }

  Stream.prototype.flush = function() {
    var chunk = this.head;

    while(chunk) {
      if (chunk.flushable) {
        this.emit('data', chunk.data.join('')); //ie7 perf
      } else if (chunk.error) {
        this.emit('error', chunk.error);
        dust.log('Chunk error [' + chunk.error + '] thrown. Ceasing to render this template.', WARN);
        this.flush = EMPTY_FUNC;
        return;
      } else {
        return;
      }
      chunk = chunk.next;
      this.head = chunk;
    }
    this.emit('end');
  };

  Stream.prototype.emit = function(type, data) {
    if (!this.events) {
      dust.log('No events to emit', INFO);
      return false;
    }
    var handler = this.events[type];
    if (!handler) {
      dust.log('Event type [' + type + '] does not exist', WARN);
      return false;
    }
    if (typeof handler === 'function') {
      handler(data);
    } else if (dust.isArray(handler)) {
      var listeners = handler.slice(0);
      for (var i = 0, l = listeners.length; i < l; i++) {
        listeners[i](data);
      }
    } else {
      dust.log('Event Handler [' + handler + '] is not of a type that is handled by emit', WARN);
    }
  };

  Stream.prototype.on = function(type, callback) {
    if (!this.events) {
      this.events = {};
    }
    if (!this.events[type]) {
      dust.log('Event type [' + type + '] does not exist. Using just the specified callback.', WARN);
      if(callback) {
        this.events[type] = callback;
      } else {
        dust.log('Callback for type [' + type + '] does not exist. Listener not registered.', WARN);
      }
    } else if(typeof this.events[type] === 'function') {
      this.events[type] = [this.events[type], callback];
    } else {
      this.events[type].push(callback);
    }
    return this;
  };

  Stream.prototype.pipe = function(stream) {
    this.on('data', function(data) {
      try {
        stream.write(data, 'utf8');
      } catch (err) {
        dust.log(err, ERROR);
      }
    }).on('end', function() {
      try {
        return stream.end();
      } catch (err) {
        dust.log(err, ERROR);
      }
    }).on('error', function(err) {
      stream.error(err);
    });
    return this;
  };

  function Chunk(root, next, taps) {
    this.root = root;
    this.next = next;
    this.data = []; //ie7 perf
    this.flushable = false;
    this.taps = taps;
  }

  Chunk.prototype.write = function(data) {
    var taps  = this.taps;

    if (taps) {
      data = taps.go(data);
    }
    this.data.push(data);
    return this;
  };

  Chunk.prototype.end = function(data) {
    if (data) {
      this.write(data);
    }
    this.flushable = true;
    this.root.flush();
    return this;
  };

  Chunk.prototype.map = function(callback) {
    var cursor = new Chunk(this.root, this.next, this.taps),
        branch = new Chunk(this.root, cursor, this.taps);

    this.next = branch;
    this.flushable = true;
    callback(branch);
    return cursor;
  };

  Chunk.prototype.tap = function(tap) {
    var taps = this.taps;

    if (taps) {
      this.taps = taps.push(tap);
    } else {
      this.taps = new Tap(tap);
    }
    return this;
  };

  Chunk.prototype.untap = function() {
    this.taps = this.taps.tail;
    return this;
  };

  Chunk.prototype.render = function(body, context) {
    return body(this, context);
  };

  Chunk.prototype.reference = function(elem, context, auto, filters) {
    if (typeof elem === 'function') {
      // Changed the function calling to use apply with the current context to make sure
      // that "this" is wat we expect it to be inside the function
      elem = elem.apply(context.current(), [this, context, null, {auto: auto, filters: filters}]);
      if (elem instanceof Chunk) {
        return elem;
      }
    }
    if (!dust.isEmpty(elem)) {
      return this.write(dust.filter(elem, auto, filters));
    } else {
      return this;
    }
  };

  Chunk.prototype.section = function(elem, context, bodies, params) {
    // anonymous functions
    if (typeof elem === 'function') {
      elem = elem.apply(context.current(), [this, context, bodies, params]);
      // functions that return chunks are assumed to have handled the body and/or have modified the chunk
      // use that return value as the current chunk and go to the next method in the chain
      if (elem instanceof Chunk) {
        return elem;
      }
    }
    var body = bodies.block,
        skip = bodies['else'];

    // a.k.a Inline parameters in the Dust documentations
    if (params) {
      context = context.push(params);
    }

    /*
    Dust's default behavior is to enumerate over the array elem, passing each object in the array to the block.
    When elem resolves to a value or object instead of an array, Dust sets the current context to the value
    and renders the block one time.
    */
    //non empty array is truthy, empty array is falsy
    if (dust.isArray(elem)) {
      if (body) {
        var len = elem.length, chunk = this;
        if (len > 0) {
          // any custom helper can blow up the stack
          // and store a flattened context, guard defensively
          if(context.stack.head) {
            context.stack.head['$len'] = len;
          }
          for (var i=0; i<len; i++) {
            if(context.stack.head) {
              context.stack.head['$idx'] = i;
            }
            chunk = body(chunk, context.push(elem[i], i, len));
          }
          if(context.stack.head) {
            context.stack.head['$idx'] = undefined;
            context.stack.head['$len'] = undefined;
          }
          return chunk;
        }
        else if (skip) {
          return skip(this, context);
        }
      }
    } else if (elem  === true) {
     // true is truthy but does not change context
      if (body) {
        return body(this, context);
      }
    } else if (elem || elem === 0) {
       // everything that evaluates to true are truthy ( e.g. Non-empty strings and Empty objects are truthy. )
       // zero is truthy
       // for anonymous functions that did not returns a chunk, truthiness is evaluated based on the return value
      if (body) {
        return body(this, context.push(elem));
      }
     // nonexistent, scalar false value, scalar empty string, null,
     // undefined are all falsy
    } else if (skip) {
      return skip(this, context);
    }
    dust.log('Not rendering section (#) block in template [' + context.getTemplateName() + '], because above key was not found', DEBUG);
    return this;
  };

  Chunk.prototype.exists = function(elem, context, bodies) {
    var body = bodies.block,
        skip = bodies['else'];

    if (!dust.isEmpty(elem)) {
      if (body) {
        return body(this, context);
      }
    } else if (skip) {
      return skip(this, context);
    }
    dust.log('Not rendering exists (?) block in template [' + context.getTemplateName() + '], because above key was not found', DEBUG);
    return this;
  };

  Chunk.prototype.notexists = function(elem, context, bodies) {
    var body = bodies.block,
        skip = bodies['else'];

    if (dust.isEmpty(elem)) {
      if (body) {
        return body(this, context);
      }
    } else if (skip) {
      return skip(this, context);
    }
    dust.log('Not rendering not exists (^) block check in template [' + context.getTemplateName() + '], because above key was found', DEBUG);
    return this;
  };

  Chunk.prototype.block = function(elem, context, bodies) {
    var body = bodies.block;

    if (elem) {
      body = elem;
    }

    if (body) {
      return body(this, context);
    }
    return this;
  };

  Chunk.prototype.partial = function(elem, context, params) {
    var partialContext;
    //put the params context second to match what section does. {.} matches the current context without parameters
    // start with an empty context
    partialContext = dust.makeBase(context.global);
    partialContext.blocks = context.blocks;
    if (context.stack && context.stack.tail){
      // grab the stack(tail) off of the previous context if we have it
      partialContext.stack = context.stack.tail;
    }
    if (params){
      //put params on
      partialContext = partialContext.push(params);
    }

    if(typeof elem === 'string') {
      partialContext.templateName = elem;
    }

    //reattach the head
    partialContext = partialContext.push(context.stack.head);

    var partialChunk;
    if (typeof elem === 'function') {
      partialChunk = this.capture(elem, partialContext, function(name, chunk) {
        partialContext.templateName = partialContext.templateName || name;
        dust.load(name, chunk, partialContext).end();
      });
    } else {
      partialChunk = dust.load(elem, this, partialContext);
    }
    return partialChunk;
  };

  Chunk.prototype.helper = function(name, context, bodies, params) {
    var chunk = this;
    // handle invalid helpers, similar to invalid filters
    try {
      if(dust.helpers[name]) {
        return dust.helpers[name](chunk, context, bodies, params);
      } else {
        dust.log('Invalid helper [' + name + ']', WARN);
        return chunk;
      }
    } catch (err) {
      chunk.setError(err);
      return chunk;
    }
  };

  Chunk.prototype.capture = function(body, context, callback) {
    return this.map(function(chunk) {
      var stub = new Stub(function(err, out) {
        if (err) {
          chunk.setError(err);
        } else {
          callback(out, chunk);
        }
      });
      body(stub.head, context).end();
    });
  };

  Chunk.prototype.setError = function(err) {
    this.error = err;
    this.root.flush();
    return this;
  };

  function Tap(head, tail) {
    this.head = head;
    this.tail = tail;
  }

  Tap.prototype.push = function(tap) {
    return new Tap(tap, this);
  };

  Tap.prototype.go = function(value) {
    var tap = this;

    while(tap) {
      value = tap.head(value);
      tap = tap.tail;
    }
    return value;
  };

  var HCHARS = new RegExp(/[&<>\"\']/),
      AMP    = /&/g,
      LT     = /</g,
      GT     = />/g,
      QUOT   = /\"/g,
      SQUOT  = /\'/g;

  dust.escapeHtml = function(s) {
    if (typeof s === 'string') {
      if (!HCHARS.test(s)) {
        return s;
      }
      return s.replace(AMP,'&amp;').replace(LT,'&lt;').replace(GT,'&gt;').replace(QUOT,'&quot;').replace(SQUOT, '&#39;');
    }
    return s;
  };

  var BS = /\\/g,
      FS = /\//g,
      CR = /\r/g,
      LS = /\u2028/g,
      PS = /\u2029/g,
      NL = /\n/g,
      LF = /\f/g,
      SQ = /'/g,
      DQ = /"/g,
      TB = /\t/g;

  dust.escapeJs = function(s) {
    if (typeof s === 'string') {
      return s
        .replace(BS, '\\\\')
        .replace(FS, '\\/')
        .replace(DQ, '\\"')
        .replace(SQ, '\\\'')
        .replace(CR, '\\r')
        .replace(LS, '\\u2028')
        .replace(PS, '\\u2029')
        .replace(NL, '\\n')
        .replace(LF, '\\f')
        .replace(TB, '\\t');
    }
    return s;
  };


  if (typeof exports === 'object') {
    module.exports = dust;
  } else {
    root.dust = dust;
  }

})((function(){return this;})());

(function(root, factory) {
  if (typeof exports === 'object') {
    // in Node, require this file if we want to use the parser as a standalone module
    module.exports = factory(require('./dust'));
    // @see server file for parser methods exposed in node
  } else {
    // in the browser, store the factory output if we want to use the parser directly
    factory(root.dust);
  }
}(this, function(dust) {
  var parser = (function(){
  /*
   * Generated by PEG.js 0.7.0.
   *
   * http://pegjs.majda.cz/
   */

  function quote(s) {
    /*
     * ECMA-262, 5th ed., 7.8.4: All characters may appear literally in a
     * string literal except for the closing quote character, backslash,
     * carriage return, line separator, paragraph separator, and line feed.
     * Any character may appear in the form of an escape sequence.
     *
     * For portability, we also escape escape all control and non-ASCII
     * characters. Note that "\0" and "\v" escape sequences are not used
     * because JSHint does not like the first and IE the second.
     */
     return '"' + s
      .replace(/\\/g, '\\\\')  // backslash
      .replace(/"/g, '\\"')    // closing quote character
      .replace(/\x08/g, '\\b') // backspace
      .replace(/\t/g, '\\t')   // horizontal tab
      .replace(/\n/g, '\\n')   // line feed
      .replace(/\f/g, '\\f')   // form feed
      .replace(/\r/g, '\\r')   // carriage return
      .replace(/[\x00-\x07\x0B\x0E-\x1F\x80-\uFFFF]/g, escape)
      + '"';
  }

  var result = {
    /*
     * Parses the input with a generated parser. If the parsing is successfull,
     * returns a value explicitly or implicitly specified by the grammar from
     * which the parser was generated (see |PEG.buildParser|). If the parsing is
     * unsuccessful, throws |PEG.parser.SyntaxError| describing the error.
     */
    parse: function(input, startRule) {
      var parseFunctions = {
        "body": parse_body,
        "part": parse_part,
        "section": parse_section,
        "sec_tag_start": parse_sec_tag_start,
        "end_tag": parse_end_tag,
        "context": parse_context,
        "params": parse_params,
        "bodies": parse_bodies,
        "reference": parse_reference,
        "partial": parse_partial,
        "filters": parse_filters,
        "special": parse_special,
        "identifier": parse_identifier,
        "number": parse_number,
        "float": parse_float,
        "integer": parse_integer,
        "path": parse_path,
        "key": parse_key,
        "array": parse_array,
        "array_part": parse_array_part,
        "inline": parse_inline,
        "inline_part": parse_inline_part,
        "buffer": parse_buffer,
        "literal": parse_literal,
        "esc": parse_esc,
        "raw": parse_raw,
        "comment": parse_comment,
        "tag": parse_tag,
        "ld": parse_ld,
        "rd": parse_rd,
        "lb": parse_lb,
        "rb": parse_rb,
        "eol": parse_eol,
        "ws": parse_ws
      };

      if (startRule !== undefined) {
        if (parseFunctions[startRule] === undefined) {
          throw new Error("Invalid rule name: " + quote(startRule) + ".");
        }
      } else {
        startRule = "body";
      }

      var pos = { offset: 0, line: 1, column: 1, seenCR: false };
      var reportFailures = 0;
      var rightmostFailuresPos = { offset: 0, line: 1, column: 1, seenCR: false };
      var rightmostFailuresExpected = [];

      function padLeft(input, padding, length) {
        var result = input;

        var padLength = length - input.length;
        for (var i = 0; i < padLength; i++) {
          result = padding + result;
        }

        return result;
      }

      function escape(ch) {
        var charCode = ch.charCodeAt(0);
        var escapeChar;
        var length;

        if (charCode <= 0xFF) {
          escapeChar = 'x';
          length = 2;
        } else {
          escapeChar = 'u';
          length = 4;
        }

        return '\\' + escapeChar + padLeft(charCode.toString(16).toUpperCase(), '0', length);
      }

      function clone(object) {
        var result = {};
        for (var key in object) {
          result[key] = object[key];
        }
        return result;
      }

      function advance(pos, n) {
        var endOffset = pos.offset + n;

        for (var offset = pos.offset; offset < endOffset; offset++) {
          var ch = input.charAt(offset);
          if (ch === "\n") {
            if (!pos.seenCR) { pos.line++; }
            pos.column = 1;
            pos.seenCR = false;
          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
            pos.line++;
            pos.column = 1;
            pos.seenCR = true;
          } else {
            pos.column++;
            pos.seenCR = false;
          }
        }

        pos.offset += n;
      }

      function matchFailed(failure) {
        if (pos.offset < rightmostFailuresPos.offset) {
          return;
        }

        if (pos.offset > rightmostFailuresPos.offset) {
          rightmostFailuresPos = clone(pos);
          rightmostFailuresExpected = [];
        }

        rightmostFailuresExpected.push(failure);
      }

      function parse_body() {
        var result0, result1;
        var pos0;

        pos0 = clone(pos);
        result0 = [];
        result1 = parse_part();
        while (result1 !== null) {
          result0.push(result1);
          result1 = parse_part();
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, p) { return ["body"].concat(p).concat([['line', line], ['col', column]]) })(pos0.offset, pos0.line, pos0.column, result0);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        return result0;
      }

      function parse_part() {
        var result0;

        result0 = parse_raw();
        if (result0 === null) {
          result0 = parse_comment();
          if (result0 === null) {
            result0 = parse_section();
            if (result0 === null) {
              result0 = parse_partial();
              if (result0 === null) {
                result0 = parse_special();
                if (result0 === null) {
                  result0 = parse_reference();
                  if (result0 === null) {
                    result0 = parse_buffer();
                  }
                }
              }
            }
          }
        }
        return result0;
      }

      function parse_section() {
        var result0, result1, result2, result3, result4, result5, result6;
        var pos0, pos1;

        reportFailures++;
        pos0 = clone(pos);
        pos1 = clone(pos);
        result0 = parse_sec_tag_start();
        if (result0 !== null) {
          result1 = [];
          result2 = parse_ws();
          while (result2 !== null) {
            result1.push(result2);
            result2 = parse_ws();
          }
          if (result1 !== null) {
            result2 = parse_rd();
            if (result2 !== null) {
              result3 = parse_body();
              if (result3 !== null) {
                result4 = parse_bodies();
                if (result4 !== null) {
                  result5 = parse_end_tag();
                  result5 = result5 !== null ? result5 : "";
                  if (result5 !== null) {
                    result6 = (function(offset, line, column, t, b, e, n) {if( (!n) || (t[1].text !== n.text) ) { throw new Error("Expected end tag for "+t[1].text+" but it was not found. At line : "+line+", column : " + column)} return true;})(pos.offset, pos.line, pos.column, result0, result3, result4, result5) ? "" : null;
                    if (result6 !== null) {
                      result0 = [result0, result1, result2, result3, result4, result5, result6];
                    } else {
                      result0 = null;
                      pos = clone(pos1);
                    }
                  } else {
                    result0 = null;
                    pos = clone(pos1);
                  }
                } else {
                  result0 = null;
                  pos = clone(pos1);
                }
              } else {
                result0 = null;
                pos = clone(pos1);
              }
            } else {
              result0 = null;
              pos = clone(pos1);
            }
          } else {
            result0 = null;
            pos = clone(pos1);
          }
        } else {
          result0 = null;
          pos = clone(pos1);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, t, b, e, n) { e.push(["param", ["literal", "block"], b]); t.push(e); return t.concat([['line', line], ['col', column]]) })(pos0.offset, pos0.line, pos0.column, result0[0], result0[3], result0[4], result0[5]);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        if (result0 === null) {
          pos0 = clone(pos);
          pos1 = clone(pos);
          result0 = parse_sec_tag_start();
          if (result0 !== null) {
            result1 = [];
            result2 = parse_ws();
            while (result2 !== null) {
              result1.push(result2);
              result2 = parse_ws();
            }
            if (result1 !== null) {
              if (input.charCodeAt(pos.offset) === 47) {
                result2 = "/";
                advance(pos, 1);
              } else {
                result2 = null;
                if (reportFailures === 0) {
                  matchFailed("\"/\"");
                }
              }
              if (result2 !== null) {
                result3 = parse_rd();
                if (result3 !== null) {
                  result0 = [result0, result1, result2, result3];
                } else {
                  result0 = null;
                  pos = clone(pos1);
                }
              } else {
                result0 = null;
                pos = clone(pos1);
              }
            } else {
              result0 = null;
              pos = clone(pos1);
            }
          } else {
            result0 = null;
            pos = clone(pos1);
          }
          if (result0 !== null) {
            result0 = (function(offset, line, column, t) { t.push(["bodies"]); return t.concat([['line', line], ['col', column]]) })(pos0.offset, pos0.line, pos0.column, result0[0]);
          }
          if (result0 === null) {
            pos = clone(pos0);
          }
        }
        reportFailures--;
        if (reportFailures === 0 && result0 === null) {
          matchFailed("section");
        }
        return result0;
      }

      function parse_sec_tag_start() {
        var result0, result1, result2, result3, result4, result5;
        var pos0, pos1;

        pos0 = clone(pos);
        pos1 = clone(pos);
        result0 = parse_ld();
        if (result0 !== null) {
          if (/^[#?^<+@%]/.test(input.charAt(pos.offset))) {
            result1 = input.charAt(pos.offset);
            advance(pos, 1);
          } else {
            result1 = null;
            if (reportFailures === 0) {
              matchFailed("[#?^<+@%]");
            }
          }
          if (result1 !== null) {
            result2 = [];
            result3 = parse_ws();
            while (result3 !== null) {
              result2.push(result3);
              result3 = parse_ws();
            }
            if (result2 !== null) {
              result3 = parse_identifier();
              if (result3 !== null) {
                result4 = parse_context();
                if (result4 !== null) {
                  result5 = parse_params();
                  if (result5 !== null) {
                    result0 = [result0, result1, result2, result3, result4, result5];
                  } else {
                    result0 = null;
                    pos = clone(pos1);
                  }
                } else {
                  result0 = null;
                  pos = clone(pos1);
                }
              } else {
                result0 = null;
                pos = clone(pos1);
              }
            } else {
              result0 = null;
              pos = clone(pos1);
            }
          } else {
            result0 = null;
            pos = clone(pos1);
          }
        } else {
          result0 = null;
          pos = clone(pos1);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, t, n, c, p) { return [t, n, c, p] })(pos0.offset, pos0.line, pos0.column, result0[1], result0[3], result0[4], result0[5]);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        return result0;
      }

      function parse_end_tag() {
        var result0, result1, result2, result3, result4, result5;
        var pos0, pos1;

        reportFailures++;
        pos0 = clone(pos);
        pos1 = clone(pos);
        result0 = parse_ld();
        if (result0 !== null) {
          if (input.charCodeAt(pos.offset) === 47) {
            result1 = "/";
            advance(pos, 1);
          } else {
            result1 = null;
            if (reportFailures === 0) {
              matchFailed("\"/\"");
            }
          }
          if (result1 !== null) {
            result2 = [];
            result3 = parse_ws();
            while (result3 !== null) {
              result2.push(result3);
              result3 = parse_ws();
            }
            if (result2 !== null) {
              result3 = parse_identifier();
              if (result3 !== null) {
                result4 = [];
                result5 = parse_ws();
                while (result5 !== null) {
                  result4.push(result5);
                  result5 = parse_ws();
                }
                if (result4 !== null) {
                  result5 = parse_rd();
                  if (result5 !== null) {
                    result0 = [result0, result1, result2, result3, result4, result5];
                  } else {
                    result0 = null;
                    pos = clone(pos1);
                  }
                } else {
                  result0 = null;
                  pos = clone(pos1);
                }
              } else {
                result0 = null;
                pos = clone(pos1);
              }
            } else {
              result0 = null;
              pos = clone(pos1);
            }
          } else {
            result0 = null;
            pos = clone(pos1);
          }
        } else {
          result0 = null;
          pos = clone(pos1);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, n) { return n })(pos0.offset, pos0.line, pos0.column, result0[3]);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        reportFailures--;
        if (reportFailures === 0 && result0 === null) {
          matchFailed("end tag");
        }
        return result0;
      }

      function parse_context() {
        var result0, result1;
        var pos0, pos1, pos2;

        pos0 = clone(pos);
        pos1 = clone(pos);
        pos2 = clone(pos);
        if (input.charCodeAt(pos.offset) === 58) {
          result0 = ":";
          advance(pos, 1);
        } else {
          result0 = null;
          if (reportFailures === 0) {
            matchFailed("\":\"");
          }
        }
        if (result0 !== null) {
          result1 = parse_identifier();
          if (result1 !== null) {
            result0 = [result0, result1];
          } else {
            result0 = null;
            pos = clone(pos2);
          }
        } else {
          result0 = null;
          pos = clone(pos2);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, n) {return n})(pos1.offset, pos1.line, pos1.column, result0[1]);
        }
        if (result0 === null) {
          pos = clone(pos1);
        }
        result0 = result0 !== null ? result0 : "";
        if (result0 !== null) {
          result0 = (function(offset, line, column, n) { return n ? ["context", n] : ["context"] })(pos0.offset, pos0.line, pos0.column, result0);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        return result0;
      }

      function parse_params() {
        var result0, result1, result2, result3, result4;
        var pos0, pos1, pos2;

        reportFailures++;
        pos0 = clone(pos);
        result0 = [];
        pos1 = clone(pos);
        pos2 = clone(pos);
        result2 = parse_ws();
        if (result2 !== null) {
          result1 = [];
          while (result2 !== null) {
            result1.push(result2);
            result2 = parse_ws();
          }
        } else {
          result1 = null;
        }
        if (result1 !== null) {
          result2 = parse_key();
          if (result2 !== null) {
            if (input.charCodeAt(pos.offset) === 61) {
              result3 = "=";
              advance(pos, 1);
            } else {
              result3 = null;
              if (reportFailures === 0) {
                matchFailed("\"=\"");
              }
            }
            if (result3 !== null) {
              result4 = parse_number();
              if (result4 === null) {
                result4 = parse_identifier();
                if (result4 === null) {
                  result4 = parse_inline();
                }
              }
              if (result4 !== null) {
                result1 = [result1, result2, result3, result4];
              } else {
                result1 = null;
                pos = clone(pos2);
              }
            } else {
              result1 = null;
              pos = clone(pos2);
            }
          } else {
            result1 = null;
            pos = clone(pos2);
          }
        } else {
          result1 = null;
          pos = clone(pos2);
        }
        if (result1 !== null) {
          result1 = (function(offset, line, column, k, v) {return ["param", ["literal", k], v]})(pos1.offset, pos1.line, pos1.column, result1[1], result1[3]);
        }
        if (result1 === null) {
          pos = clone(pos1);
        }
        while (result1 !== null) {
          result0.push(result1);
          pos1 = clone(pos);
          pos2 = clone(pos);
          result2 = parse_ws();
          if (result2 !== null) {
            result1 = [];
            while (result2 !== null) {
              result1.push(result2);
              result2 = parse_ws();
            }
          } else {
            result1 = null;
          }
          if (result1 !== null) {
            result2 = parse_key();
            if (result2 !== null) {
              if (input.charCodeAt(pos.offset) === 61) {
                result3 = "=";
                advance(pos, 1);
              } else {
                result3 = null;
                if (reportFailures === 0) {
                  matchFailed("\"=\"");
                }
              }
              if (result3 !== null) {
                result4 = parse_number();
                if (result4 === null) {
                  result4 = parse_identifier();
                  if (result4 === null) {
                    result4 = parse_inline();
                  }
                }
                if (result4 !== null) {
                  result1 = [result1, result2, result3, result4];
                } else {
                  result1 = null;
                  pos = clone(pos2);
                }
              } else {
                result1 = null;
                pos = clone(pos2);
              }
            } else {
              result1 = null;
              pos = clone(pos2);
            }
          } else {
            result1 = null;
            pos = clone(pos2);
          }
          if (result1 !== null) {
            result1 = (function(offset, line, column, k, v) {return ["param", ["literal", k], v]})(pos1.offset, pos1.line, pos1.column, result1[1], result1[3]);
          }
          if (result1 === null) {
            pos = clone(pos1);
          }
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, p) { return ["params"].concat(p) })(pos0.offset, pos0.line, pos0.column, result0);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        reportFailures--;
        if (reportFailures === 0 && result0 === null) {
          matchFailed("params");
        }
        return result0;
      }

      function parse_bodies() {
        var result0, result1, result2, result3, result4, result5;
        var pos0, pos1, pos2;

        reportFailures++;
        pos0 = clone(pos);
        result0 = [];
        pos1 = clone(pos);
        pos2 = clone(pos);
        result1 = parse_ld();
        if (result1 !== null) {
          if (input.charCodeAt(pos.offset) === 58) {
            result2 = ":";
            advance(pos, 1);
          } else {
            result2 = null;
            if (reportFailures === 0) {
              matchFailed("\":\"");
            }
          }
          if (result2 !== null) {
            result3 = parse_key();
            if (result3 !== null) {
              result4 = parse_rd();
              if (result4 !== null) {
                result5 = parse_body();
                if (result5 !== null) {
                  result1 = [result1, result2, result3, result4, result5];
                } else {
                  result1 = null;
                  pos = clone(pos2);
                }
              } else {
                result1 = null;
                pos = clone(pos2);
              }
            } else {
              result1 = null;
              pos = clone(pos2);
            }
          } else {
            result1 = null;
            pos = clone(pos2);
          }
        } else {
          result1 = null;
          pos = clone(pos2);
        }
        if (result1 !== null) {
          result1 = (function(offset, line, column, k, v) {return ["param", ["literal", k], v]})(pos1.offset, pos1.line, pos1.column, result1[2], result1[4]);
        }
        if (result1 === null) {
          pos = clone(pos1);
        }
        while (result1 !== null) {
          result0.push(result1);
          pos1 = clone(pos);
          pos2 = clone(pos);
          result1 = parse_ld();
          if (result1 !== null) {
            if (input.charCodeAt(pos.offset) === 58) {
              result2 = ":";
              advance(pos, 1);
            } else {
              result2 = null;
              if (reportFailures === 0) {
                matchFailed("\":\"");
              }
            }
            if (result2 !== null) {
              result3 = parse_key();
              if (result3 !== null) {
                result4 = parse_rd();
                if (result4 !== null) {
                  result5 = parse_body();
                  if (result5 !== null) {
                    result1 = [result1, result2, result3, result4, result5];
                  } else {
                    result1 = null;
                    pos = clone(pos2);
                  }
                } else {
                  result1 = null;
                  pos = clone(pos2);
                }
              } else {
                result1 = null;
                pos = clone(pos2);
              }
            } else {
              result1 = null;
              pos = clone(pos2);
            }
          } else {
            result1 = null;
            pos = clone(pos2);
          }
          if (result1 !== null) {
            result1 = (function(offset, line, column, k, v) {return ["param", ["literal", k], v]})(pos1.offset, pos1.line, pos1.column, result1[2], result1[4]);
          }
          if (result1 === null) {
            pos = clone(pos1);
          }
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, p) { return ["bodies"].concat(p) })(pos0.offset, pos0.line, pos0.column, result0);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        reportFailures--;
        if (reportFailures === 0 && result0 === null) {
          matchFailed("bodies");
        }
        return result0;
      }

      function parse_reference() {
        var result0, result1, result2, result3;
        var pos0, pos1;

        reportFailures++;
        pos0 = clone(pos);
        pos1 = clone(pos);
        result0 = parse_ld();
        if (result0 !== null) {
          result1 = parse_identifier();
          if (result1 !== null) {
            result2 = parse_filters();
            if (result2 !== null) {
              result3 = parse_rd();
              if (result3 !== null) {
                result0 = [result0, result1, result2, result3];
              } else {
                result0 = null;
                pos = clone(pos1);
              }
            } else {
              result0 = null;
              pos = clone(pos1);
            }
          } else {
            result0 = null;
            pos = clone(pos1);
          }
        } else {
          result0 = null;
          pos = clone(pos1);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, n, f) { return ["reference", n, f].concat([['line', line], ['col', column]]) })(pos0.offset, pos0.line, pos0.column, result0[1], result0[2]);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        reportFailures--;
        if (reportFailures === 0 && result0 === null) {
          matchFailed("reference");
        }
        return result0;
      }

      function parse_partial() {
        var result0, result1, result2, result3, result4, result5, result6, result7, result8;
        var pos0, pos1, pos2;

        reportFailures++;
        pos0 = clone(pos);
        pos1 = clone(pos);
        result0 = parse_ld();
        if (result0 !== null) {
          if (input.charCodeAt(pos.offset) === 62) {
            result1 = ">";
            advance(pos, 1);
          } else {
            result1 = null;
            if (reportFailures === 0) {
              matchFailed("\">\"");
            }
          }
          if (result1 === null) {
            if (input.charCodeAt(pos.offset) === 43) {
              result1 = "+";
              advance(pos, 1);
            } else {
              result1 = null;
              if (reportFailures === 0) {
                matchFailed("\"+\"");
              }
            }
          }
          if (result1 !== null) {
            result2 = [];
            result3 = parse_ws();
            while (result3 !== null) {
              result2.push(result3);
              result3 = parse_ws();
            }
            if (result2 !== null) {
              pos2 = clone(pos);
              result3 = parse_key();
              if (result3 !== null) {
                result3 = (function(offset, line, column, k) {return ["literal", k]})(pos2.offset, pos2.line, pos2.column, result3);
              }
              if (result3 === null) {
                pos = clone(pos2);
              }
              if (result3 === null) {
                result3 = parse_inline();
              }
              if (result3 !== null) {
                result4 = parse_context();
                if (result4 !== null) {
                  result5 = parse_params();
                  if (result5 !== null) {
                    result6 = [];
                    result7 = parse_ws();
                    while (result7 !== null) {
                      result6.push(result7);
                      result7 = parse_ws();
                    }
                    if (result6 !== null) {
                      if (input.charCodeAt(pos.offset) === 47) {
                        result7 = "/";
                        advance(pos, 1);
                      } else {
                        result7 = null;
                        if (reportFailures === 0) {
                          matchFailed("\"/\"");
                        }
                      }
                      if (result7 !== null) {
                        result8 = parse_rd();
                        if (result8 !== null) {
                          result0 = [result0, result1, result2, result3, result4, result5, result6, result7, result8];
                        } else {
                          result0 = null;
                          pos = clone(pos1);
                        }
                      } else {
                        result0 = null;
                        pos = clone(pos1);
                      }
                    } else {
                      result0 = null;
                      pos = clone(pos1);
                    }
                  } else {
                    result0 = null;
                    pos = clone(pos1);
                  }
                } else {
                  result0 = null;
                  pos = clone(pos1);
                }
              } else {
                result0 = null;
                pos = clone(pos1);
              }
            } else {
              result0 = null;
              pos = clone(pos1);
            }
          } else {
            result0 = null;
            pos = clone(pos1);
          }
        } else {
          result0 = null;
          pos = clone(pos1);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, s, n, c, p) { var key = (s ===">")? "partial" : s; return [key, n, c, p].concat([['line', line], ['col', column]]) })(pos0.offset, pos0.line, pos0.column, result0[1], result0[3], result0[4], result0[5]);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        reportFailures--;
        if (reportFailures === 0 && result0 === null) {
          matchFailed("partial");
        }
        return result0;
      }

      function parse_filters() {
        var result0, result1, result2;
        var pos0, pos1, pos2;

        reportFailures++;
        pos0 = clone(pos);
        result0 = [];
        pos1 = clone(pos);
        pos2 = clone(pos);
        if (input.charCodeAt(pos.offset) === 124) {
          result1 = "|";
          advance(pos, 1);
        } else {
          result1 = null;
          if (reportFailures === 0) {
            matchFailed("\"|\"");
          }
        }
        if (result1 !== null) {
          result2 = parse_key();
          if (result2 !== null) {
            result1 = [result1, result2];
          } else {
            result1 = null;
            pos = clone(pos2);
          }
        } else {
          result1 = null;
          pos = clone(pos2);
        }
        if (result1 !== null) {
          result1 = (function(offset, line, column, n) {return n})(pos1.offset, pos1.line, pos1.column, result1[1]);
        }
        if (result1 === null) {
          pos = clone(pos1);
        }
        while (result1 !== null) {
          result0.push(result1);
          pos1 = clone(pos);
          pos2 = clone(pos);
          if (input.charCodeAt(pos.offset) === 124) {
            result1 = "|";
            advance(pos, 1);
          } else {
            result1 = null;
            if (reportFailures === 0) {
              matchFailed("\"|\"");
            }
          }
          if (result1 !== null) {
            result2 = parse_key();
            if (result2 !== null) {
              result1 = [result1, result2];
            } else {
              result1 = null;
              pos = clone(pos2);
            }
          } else {
            result1 = null;
            pos = clone(pos2);
          }
          if (result1 !== null) {
            result1 = (function(offset, line, column, n) {return n})(pos1.offset, pos1.line, pos1.column, result1[1]);
          }
          if (result1 === null) {
            pos = clone(pos1);
          }
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, f) { return ["filters"].concat(f) })(pos0.offset, pos0.line, pos0.column, result0);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        reportFailures--;
        if (reportFailures === 0 && result0 === null) {
          matchFailed("filters");
        }
        return result0;
      }

      function parse_special() {
        var result0, result1, result2, result3;
        var pos0, pos1;

        reportFailures++;
        pos0 = clone(pos);
        pos1 = clone(pos);
        result0 = parse_ld();
        if (result0 !== null) {
          if (input.charCodeAt(pos.offset) === 126) {
            result1 = "~";
            advance(pos, 1);
          } else {
            result1 = null;
            if (reportFailures === 0) {
              matchFailed("\"~\"");
            }
          }
          if (result1 !== null) {
            result2 = parse_key();
            if (result2 !== null) {
              result3 = parse_rd();
              if (result3 !== null) {
                result0 = [result0, result1, result2, result3];
              } else {
                result0 = null;
                pos = clone(pos1);
              }
            } else {
              result0 = null;
              pos = clone(pos1);
            }
          } else {
            result0 = null;
            pos = clone(pos1);
          }
        } else {
          result0 = null;
          pos = clone(pos1);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, k) { return ["special", k].concat([['line', line], ['col', column]]) })(pos0.offset, pos0.line, pos0.column, result0[2]);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        reportFailures--;
        if (reportFailures === 0 && result0 === null) {
          matchFailed("special");
        }
        return result0;
      }

      function parse_identifier() {
        var result0;
        var pos0;

        reportFailures++;
        pos0 = clone(pos);
        result0 = parse_path();
        if (result0 !== null) {
          result0 = (function(offset, line, column, p) { var arr = ["path"].concat(p); arr.text = p[1].join('.'); return arr; })(pos0.offset, pos0.line, pos0.column, result0);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        if (result0 === null) {
          pos0 = clone(pos);
          result0 = parse_key();
          if (result0 !== null) {
            result0 = (function(offset, line, column, k) { var arr = ["key", k]; arr.text = k; return arr; })(pos0.offset, pos0.line, pos0.column, result0);
          }
          if (result0 === null) {
            pos = clone(pos0);
          }
        }
        reportFailures--;
        if (reportFailures === 0 && result0 === null) {
          matchFailed("identifier");
        }
        return result0;
      }

      function parse_number() {
        var result0;
        var pos0;

        reportFailures++;
        pos0 = clone(pos);
        result0 = parse_float();
        if (result0 === null) {
          result0 = parse_integer();
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, n) { return ['literal', n]; })(pos0.offset, pos0.line, pos0.column, result0);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        reportFailures--;
        if (reportFailures === 0 && result0 === null) {
          matchFailed("number");
        }
        return result0;
      }

      function parse_float() {
        var result0, result1, result2, result3;
        var pos0, pos1;

        reportFailures++;
        pos0 = clone(pos);
        pos1 = clone(pos);
        result0 = parse_integer();
        if (result0 !== null) {
          if (input.charCodeAt(pos.offset) === 46) {
            result1 = ".";
            advance(pos, 1);
          } else {
            result1 = null;
            if (reportFailures === 0) {
              matchFailed("\".\"");
            }
          }
          if (result1 !== null) {
            result3 = parse_integer();
            if (result3 !== null) {
              result2 = [];
              while (result3 !== null) {
                result2.push(result3);
                result3 = parse_integer();
              }
            } else {
              result2 = null;
            }
            if (result2 !== null) {
              result0 = [result0, result1, result2];
            } else {
              result0 = null;
              pos = clone(pos1);
            }
          } else {
            result0 = null;
            pos = clone(pos1);
          }
        } else {
          result0 = null;
          pos = clone(pos1);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, l, r) { return parseFloat(l + "." + r.join('')); })(pos0.offset, pos0.line, pos0.column, result0[0], result0[2]);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        reportFailures--;
        if (reportFailures === 0 && result0 === null) {
          matchFailed("float");
        }
        return result0;
      }

      function parse_integer() {
        var result0, result1;
        var pos0;

        reportFailures++;
        pos0 = clone(pos);
        if (/^[0-9]/.test(input.charAt(pos.offset))) {
          result1 = input.charAt(pos.offset);
          advance(pos, 1);
        } else {
          result1 = null;
          if (reportFailures === 0) {
            matchFailed("[0-9]");
          }
        }
        if (result1 !== null) {
          result0 = [];
          while (result1 !== null) {
            result0.push(result1);
            if (/^[0-9]/.test(input.charAt(pos.offset))) {
              result1 = input.charAt(pos.offset);
              advance(pos, 1);
            } else {
              result1 = null;
              if (reportFailures === 0) {
                matchFailed("[0-9]");
              }
            }
          }
        } else {
          result0 = null;
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, digits) { return parseInt(digits.join(""), 10); })(pos0.offset, pos0.line, pos0.column, result0);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        reportFailures--;
        if (reportFailures === 0 && result0 === null) {
          matchFailed("integer");
        }
        return result0;
      }

      function parse_path() {
        var result0, result1, result2;
        var pos0, pos1;

        reportFailures++;
        pos0 = clone(pos);
        pos1 = clone(pos);
        result0 = parse_key();
        result0 = result0 !== null ? result0 : "";
        if (result0 !== null) {
          result2 = parse_array_part();
          if (result2 === null) {
            result2 = parse_array();
          }
          if (result2 !== null) {
            result1 = [];
            while (result2 !== null) {
              result1.push(result2);
              result2 = parse_array_part();
              if (result2 === null) {
                result2 = parse_array();
              }
            }
          } else {
            result1 = null;
          }
          if (result1 !== null) {
            result0 = [result0, result1];
          } else {
            result0 = null;
            pos = clone(pos1);
          }
        } else {
          result0 = null;
          pos = clone(pos1);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, k, d) {
            d = d[0];
            if (k && d) {
              d.unshift(k);
              return [false, d].concat([['line', line], ['col', column]]);
            }
            return [true, d].concat([['line', line], ['col', column]]);
          })(pos0.offset, pos0.line, pos0.column, result0[0], result0[1]);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        if (result0 === null) {
          pos0 = clone(pos);
          pos1 = clone(pos);
          if (input.charCodeAt(pos.offset) === 46) {
            result0 = ".";
            advance(pos, 1);
          } else {
            result0 = null;
            if (reportFailures === 0) {
              matchFailed("\".\"");
            }
          }
          if (result0 !== null) {
            result1 = [];
            result2 = parse_array_part();
            if (result2 === null) {
              result2 = parse_array();
            }
            while (result2 !== null) {
              result1.push(result2);
              result2 = parse_array_part();
              if (result2 === null) {
                result2 = parse_array();
              }
            }
            if (result1 !== null) {
              result0 = [result0, result1];
            } else {
              result0 = null;
              pos = clone(pos1);
            }
          } else {
            result0 = null;
            pos = clone(pos1);
          }
          if (result0 !== null) {
            result0 = (function(offset, line, column, d) {
              if (d.length > 0) {
                return [true, d[0]].concat([['line', line], ['col', column]]);
              }
              return [true, []].concat([['line', line], ['col', column]]);
            })(pos0.offset, pos0.line, pos0.column, result0[1]);
          }
          if (result0 === null) {
            pos = clone(pos0);
          }
        }
        reportFailures--;
        if (reportFailures === 0 && result0 === null) {
          matchFailed("path");
        }
        return result0;
      }

      function parse_key() {
        var result0, result1, result2;
        var pos0, pos1;

        reportFailures++;
        pos0 = clone(pos);
        pos1 = clone(pos);
        if (/^[a-zA-Z_$]/.test(input.charAt(pos.offset))) {
          result0 = input.charAt(pos.offset);
          advance(pos, 1);
        } else {
          result0 = null;
          if (reportFailures === 0) {
            matchFailed("[a-zA-Z_$]");
          }
        }
        if (result0 !== null) {
          result1 = [];
          if (/^[0-9a-zA-Z_$\-]/.test(input.charAt(pos.offset))) {
            result2 = input.charAt(pos.offset);
            advance(pos, 1);
          } else {
            result2 = null;
            if (reportFailures === 0) {
              matchFailed("[0-9a-zA-Z_$\\-]");
            }
          }
          while (result2 !== null) {
            result1.push(result2);
            if (/^[0-9a-zA-Z_$\-]/.test(input.charAt(pos.offset))) {
              result2 = input.charAt(pos.offset);
              advance(pos, 1);
            } else {
              result2 = null;
              if (reportFailures === 0) {
                matchFailed("[0-9a-zA-Z_$\\-]");
              }
            }
          }
          if (result1 !== null) {
            result0 = [result0, result1];
          } else {
            result0 = null;
            pos = clone(pos1);
          }
        } else {
          result0 = null;
          pos = clone(pos1);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, h, t) { return h + t.join('') })(pos0.offset, pos0.line, pos0.column, result0[0], result0[1]);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        reportFailures--;
        if (reportFailures === 0 && result0 === null) {
          matchFailed("key");
        }
        return result0;
      }

      function parse_array() {
        var result0, result1, result2;
        var pos0, pos1, pos2, pos3, pos4;

        reportFailures++;
        pos0 = clone(pos);
        pos1 = clone(pos);
        pos2 = clone(pos);
        pos3 = clone(pos);
        result0 = parse_lb();
        if (result0 !== null) {
          pos4 = clone(pos);
          if (/^[0-9]/.test(input.charAt(pos.offset))) {
            result2 = input.charAt(pos.offset);
            advance(pos, 1);
          } else {
            result2 = null;
            if (reportFailures === 0) {
              matchFailed("[0-9]");
            }
          }
          if (result2 !== null) {
            result1 = [];
            while (result2 !== null) {
              result1.push(result2);
              if (/^[0-9]/.test(input.charAt(pos.offset))) {
                result2 = input.charAt(pos.offset);
                advance(pos, 1);
              } else {
                result2 = null;
                if (reportFailures === 0) {
                  matchFailed("[0-9]");
                }
              }
            }
          } else {
            result1 = null;
          }
          if (result1 !== null) {
            result1 = (function(offset, line, column, n) {return n.join('')})(pos4.offset, pos4.line, pos4.column, result1);
          }
          if (result1 === null) {
            pos = clone(pos4);
          }
          if (result1 === null) {
            result1 = parse_identifier();
          }
          if (result1 !== null) {
            result2 = parse_rb();
            if (result2 !== null) {
              result0 = [result0, result1, result2];
            } else {
              result0 = null;
              pos = clone(pos3);
            }
          } else {
            result0 = null;
            pos = clone(pos3);
          }
        } else {
          result0 = null;
          pos = clone(pos3);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, a) {return a; })(pos2.offset, pos2.line, pos2.column, result0[1]);
        }
        if (result0 === null) {
          pos = clone(pos2);
        }
        if (result0 !== null) {
          result1 = parse_array_part();
          result1 = result1 !== null ? result1 : "";
          if (result1 !== null) {
            result0 = [result0, result1];
          } else {
            result0 = null;
            pos = clone(pos1);
          }
        } else {
          result0 = null;
          pos = clone(pos1);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, i, nk) { if(nk) { nk.unshift(i); } else {nk = [i] } return nk; })(pos0.offset, pos0.line, pos0.column, result0[0], result0[1]);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        reportFailures--;
        if (reportFailures === 0 && result0 === null) {
          matchFailed("array");
        }
        return result0;
      }

      function parse_array_part() {
        var result0, result1, result2;
        var pos0, pos1, pos2, pos3;

        reportFailures++;
        pos0 = clone(pos);
        pos1 = clone(pos);
        pos2 = clone(pos);
        pos3 = clone(pos);
        if (input.charCodeAt(pos.offset) === 46) {
          result1 = ".";
          advance(pos, 1);
        } else {
          result1 = null;
          if (reportFailures === 0) {
            matchFailed("\".\"");
          }
        }
        if (result1 !== null) {
          result2 = parse_key();
          if (result2 !== null) {
            result1 = [result1, result2];
          } else {
            result1 = null;
            pos = clone(pos3);
          }
        } else {
          result1 = null;
          pos = clone(pos3);
        }
        if (result1 !== null) {
          result1 = (function(offset, line, column, k) {return k})(pos2.offset, pos2.line, pos2.column, result1[1]);
        }
        if (result1 === null) {
          pos = clone(pos2);
        }
        if (result1 !== null) {
          result0 = [];
          while (result1 !== null) {
            result0.push(result1);
            pos2 = clone(pos);
            pos3 = clone(pos);
            if (input.charCodeAt(pos.offset) === 46) {
              result1 = ".";
              advance(pos, 1);
            } else {
              result1 = null;
              if (reportFailures === 0) {
                matchFailed("\".\"");
              }
            }
            if (result1 !== null) {
              result2 = parse_key();
              if (result2 !== null) {
                result1 = [result1, result2];
              } else {
                result1 = null;
                pos = clone(pos3);
              }
            } else {
              result1 = null;
              pos = clone(pos3);
            }
            if (result1 !== null) {
              result1 = (function(offset, line, column, k) {return k})(pos2.offset, pos2.line, pos2.column, result1[1]);
            }
            if (result1 === null) {
              pos = clone(pos2);
            }
          }
        } else {
          result0 = null;
        }
        if (result0 !== null) {
          result1 = parse_array();
          result1 = result1 !== null ? result1 : "";
          if (result1 !== null) {
            result0 = [result0, result1];
          } else {
            result0 = null;
            pos = clone(pos1);
          }
        } else {
          result0 = null;
          pos = clone(pos1);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, d, a) { if (a) { return d.concat(a); } else { return d; } })(pos0.offset, pos0.line, pos0.column, result0[0], result0[1]);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        reportFailures--;
        if (reportFailures === 0 && result0 === null) {
          matchFailed("array_part");
        }
        return result0;
      }

      function parse_inline() {
        var result0, result1, result2;
        var pos0, pos1;

        reportFailures++;
        pos0 = clone(pos);
        pos1 = clone(pos);
        if (input.charCodeAt(pos.offset) === 34) {
          result0 = "\"";
          advance(pos, 1);
        } else {
          result0 = null;
          if (reportFailures === 0) {
            matchFailed("\"\\\"\"");
          }
        }
        if (result0 !== null) {
          if (input.charCodeAt(pos.offset) === 34) {
            result1 = "\"";
            advance(pos, 1);
          } else {
            result1 = null;
            if (reportFailures === 0) {
              matchFailed("\"\\\"\"");
            }
          }
          if (result1 !== null) {
            result0 = [result0, result1];
          } else {
            result0 = null;
            pos = clone(pos1);
          }
        } else {
          result0 = null;
          pos = clone(pos1);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column) { return ["literal", ""].concat([['line', line], ['col', column]]) })(pos0.offset, pos0.line, pos0.column);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        if (result0 === null) {
          pos0 = clone(pos);
          pos1 = clone(pos);
          if (input.charCodeAt(pos.offset) === 34) {
            result0 = "\"";
            advance(pos, 1);
          } else {
            result0 = null;
            if (reportFailures === 0) {
              matchFailed("\"\\\"\"");
            }
          }
          if (result0 !== null) {
            result1 = parse_literal();
            if (result1 !== null) {
              if (input.charCodeAt(pos.offset) === 34) {
                result2 = "\"";
                advance(pos, 1);
              } else {
                result2 = null;
                if (reportFailures === 0) {
                  matchFailed("\"\\\"\"");
                }
              }
              if (result2 !== null) {
                result0 = [result0, result1, result2];
              } else {
                result0 = null;
                pos = clone(pos1);
              }
            } else {
              result0 = null;
              pos = clone(pos1);
            }
          } else {
            result0 = null;
            pos = clone(pos1);
          }
          if (result0 !== null) {
            result0 = (function(offset, line, column, l) { return ["literal", l].concat([['line', line], ['col', column]]) })(pos0.offset, pos0.line, pos0.column, result0[1]);
          }
          if (result0 === null) {
            pos = clone(pos0);
          }
          if (result0 === null) {
            pos0 = clone(pos);
            pos1 = clone(pos);
            if (input.charCodeAt(pos.offset) === 34) {
              result0 = "\"";
              advance(pos, 1);
            } else {
              result0 = null;
              if (reportFailures === 0) {
                matchFailed("\"\\\"\"");
              }
            }
            if (result0 !== null) {
              result2 = parse_inline_part();
              if (result2 !== null) {
                result1 = [];
                while (result2 !== null) {
                  result1.push(result2);
                  result2 = parse_inline_part();
                }
              } else {
                result1 = null;
              }
              if (result1 !== null) {
                if (input.charCodeAt(pos.offset) === 34) {
                  result2 = "\"";
                  advance(pos, 1);
                } else {
                  result2 = null;
                  if (reportFailures === 0) {
                    matchFailed("\"\\\"\"");
                  }
                }
                if (result2 !== null) {
                  result0 = [result0, result1, result2];
                } else {
                  result0 = null;
                  pos = clone(pos1);
                }
              } else {
                result0 = null;
                pos = clone(pos1);
              }
            } else {
              result0 = null;
              pos = clone(pos1);
            }
            if (result0 !== null) {
              result0 = (function(offset, line, column, p) { return ["body"].concat(p).concat([['line', line], ['col', column]]) })(pos0.offset, pos0.line, pos0.column, result0[1]);
            }
            if (result0 === null) {
              pos = clone(pos0);
            }
          }
        }
        reportFailures--;
        if (reportFailures === 0 && result0 === null) {
          matchFailed("inline");
        }
        return result0;
      }

      function parse_inline_part() {
        var result0;
        var pos0;

        result0 = parse_special();
        if (result0 === null) {
          result0 = parse_reference();
          if (result0 === null) {
            pos0 = clone(pos);
            result0 = parse_literal();
            if (result0 !== null) {
              result0 = (function(offset, line, column, l) { return ["buffer", l] })(pos0.offset, pos0.line, pos0.column, result0);
            }
            if (result0 === null) {
              pos = clone(pos0);
            }
          }
        }
        return result0;
      }

      function parse_buffer() {
        var result0, result1, result2, result3, result4, result5;
        var pos0, pos1, pos2, pos3;

        reportFailures++;
        pos0 = clone(pos);
        pos1 = clone(pos);
        result0 = parse_eol();
        if (result0 !== null) {
          result1 = [];
          result2 = parse_ws();
          while (result2 !== null) {
            result1.push(result2);
            result2 = parse_ws();
          }
          if (result1 !== null) {
            result0 = [result0, result1];
          } else {
            result0 = null;
            pos = clone(pos1);
          }
        } else {
          result0 = null;
          pos = clone(pos1);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, e, w) { return ["format", e, w.join('')].concat([['line', line], ['col', column]]) })(pos0.offset, pos0.line, pos0.column, result0[0], result0[1]);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        if (result0 === null) {
          pos0 = clone(pos);
          pos1 = clone(pos);
          pos2 = clone(pos);
          pos3 = clone(pos);
          reportFailures++;
          result1 = parse_tag();
          reportFailures--;
          if (result1 === null) {
            result1 = "";
          } else {
            result1 = null;
            pos = clone(pos3);
          }
          if (result1 !== null) {
            pos3 = clone(pos);
            reportFailures++;
            result2 = parse_raw();
            reportFailures--;
            if (result2 === null) {
              result2 = "";
            } else {
              result2 = null;
              pos = clone(pos3);
            }
            if (result2 !== null) {
              pos3 = clone(pos);
              reportFailures++;
              result3 = parse_comment();
              reportFailures--;
              if (result3 === null) {
                result3 = "";
              } else {
                result3 = null;
                pos = clone(pos3);
              }
              if (result3 !== null) {
                pos3 = clone(pos);
                reportFailures++;
                result4 = parse_eol();
                reportFailures--;
                if (result4 === null) {
                  result4 = "";
                } else {
                  result4 = null;
                  pos = clone(pos3);
                }
                if (result4 !== null) {
                  if (input.length > pos.offset) {
                    result5 = input.charAt(pos.offset);
                    advance(pos, 1);
                  } else {
                    result5 = null;
                    if (reportFailures === 0) {
                      matchFailed("any character");
                    }
                  }
                  if (result5 !== null) {
                    result1 = [result1, result2, result3, result4, result5];
                  } else {
                    result1 = null;
                    pos = clone(pos2);
                  }
                } else {
                  result1 = null;
                  pos = clone(pos2);
                }
              } else {
                result1 = null;
                pos = clone(pos2);
              }
            } else {
              result1 = null;
              pos = clone(pos2);
            }
          } else {
            result1 = null;
            pos = clone(pos2);
          }
          if (result1 !== null) {
            result1 = (function(offset, line, column, c) {return c})(pos1.offset, pos1.line, pos1.column, result1[4]);
          }
          if (result1 === null) {
            pos = clone(pos1);
          }
          if (result1 !== null) {
            result0 = [];
            while (result1 !== null) {
              result0.push(result1);
              pos1 = clone(pos);
              pos2 = clone(pos);
              pos3 = clone(pos);
              reportFailures++;
              result1 = parse_tag();
              reportFailures--;
              if (result1 === null) {
                result1 = "";
              } else {
                result1 = null;
                pos = clone(pos3);
              }
              if (result1 !== null) {
                pos3 = clone(pos);
                reportFailures++;
                result2 = parse_raw();
                reportFailures--;
                if (result2 === null) {
                  result2 = "";
                } else {
                  result2 = null;
                  pos = clone(pos3);
                }
                if (result2 !== null) {
                  pos3 = clone(pos);
                  reportFailures++;
                  result3 = parse_comment();
                  reportFailures--;
                  if (result3 === null) {
                    result3 = "";
                  } else {
                    result3 = null;
                    pos = clone(pos3);
                  }
                  if (result3 !== null) {
                    pos3 = clone(pos);
                    reportFailures++;
                    result4 = parse_eol();
                    reportFailures--;
                    if (result4 === null) {
                      result4 = "";
                    } else {
                      result4 = null;
                      pos = clone(pos3);
                    }
                    if (result4 !== null) {
                      if (input.length > pos.offset) {
                        result5 = input.charAt(pos.offset);
                        advance(pos, 1);
                      } else {
                        result5 = null;
                        if (reportFailures === 0) {
                          matchFailed("any character");
                        }
                      }
                      if (result5 !== null) {
                        result1 = [result1, result2, result3, result4, result5];
                      } else {
                        result1 = null;
                        pos = clone(pos2);
                      }
                    } else {
                      result1 = null;
                      pos = clone(pos2);
                    }
                  } else {
                    result1 = null;
                    pos = clone(pos2);
                  }
                } else {
                  result1 = null;
                  pos = clone(pos2);
                }
              } else {
                result1 = null;
                pos = clone(pos2);
              }
              if (result1 !== null) {
                result1 = (function(offset, line, column, c) {return c})(pos1.offset, pos1.line, pos1.column, result1[4]);
              }
              if (result1 === null) {
                pos = clone(pos1);
              }
            }
          } else {
            result0 = null;
          }
          if (result0 !== null) {
            result0 = (function(offset, line, column, b) { return ["buffer", b.join('')].concat([['line', line], ['col', column]]) })(pos0.offset, pos0.line, pos0.column, result0);
          }
          if (result0 === null) {
            pos = clone(pos0);
          }
        }
        reportFailures--;
        if (reportFailures === 0 && result0 === null) {
          matchFailed("buffer");
        }
        return result0;
      }

      function parse_literal() {
        var result0, result1, result2;
        var pos0, pos1, pos2, pos3;

        reportFailures++;
        pos0 = clone(pos);
        pos1 = clone(pos);
        pos2 = clone(pos);
        pos3 = clone(pos);
        reportFailures++;
        result1 = parse_tag();
        reportFailures--;
        if (result1 === null) {
          result1 = "";
        } else {
          result1 = null;
          pos = clone(pos3);
        }
        if (result1 !== null) {
          result2 = parse_esc();
          if (result2 === null) {
            if (/^[^"]/.test(input.charAt(pos.offset))) {
              result2 = input.charAt(pos.offset);
              advance(pos, 1);
            } else {
              result2 = null;
              if (reportFailures === 0) {
                matchFailed("[^\"]");
              }
            }
          }
          if (result2 !== null) {
            result1 = [result1, result2];
          } else {
            result1 = null;
            pos = clone(pos2);
          }
        } else {
          result1 = null;
          pos = clone(pos2);
        }
        if (result1 !== null) {
          result1 = (function(offset, line, column, c) {return c})(pos1.offset, pos1.line, pos1.column, result1[1]);
        }
        if (result1 === null) {
          pos = clone(pos1);
        }
        if (result1 !== null) {
          result0 = [];
          while (result1 !== null) {
            result0.push(result1);
            pos1 = clone(pos);
            pos2 = clone(pos);
            pos3 = clone(pos);
            reportFailures++;
            result1 = parse_tag();
            reportFailures--;
            if (result1 === null) {
              result1 = "";
            } else {
              result1 = null;
              pos = clone(pos3);
            }
            if (result1 !== null) {
              result2 = parse_esc();
              if (result2 === null) {
                if (/^[^"]/.test(input.charAt(pos.offset))) {
                  result2 = input.charAt(pos.offset);
                  advance(pos, 1);
                } else {
                  result2 = null;
                  if (reportFailures === 0) {
                    matchFailed("[^\"]");
                  }
                }
              }
              if (result2 !== null) {
                result1 = [result1, result2];
              } else {
                result1 = null;
                pos = clone(pos2);
              }
            } else {
              result1 = null;
              pos = clone(pos2);
            }
            if (result1 !== null) {
              result1 = (function(offset, line, column, c) {return c})(pos1.offset, pos1.line, pos1.column, result1[1]);
            }
            if (result1 === null) {
              pos = clone(pos1);
            }
          }
        } else {
          result0 = null;
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, b) { return b.join('') })(pos0.offset, pos0.line, pos0.column, result0);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        reportFailures--;
        if (reportFailures === 0 && result0 === null) {
          matchFailed("literal");
        }
        return result0;
      }

      function parse_esc() {
        var result0;
        var pos0;

        pos0 = clone(pos);
        if (input.substr(pos.offset, 2) === "\\\"") {
          result0 = "\\\"";
          advance(pos, 2);
        } else {
          result0 = null;
          if (reportFailures === 0) {
            matchFailed("\"\\\\\\\"\"");
          }
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column) { return '"' })(pos0.offset, pos0.line, pos0.column);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        return result0;
      }

      function parse_raw() {
        var result0, result1, result2, result3;
        var pos0, pos1, pos2, pos3, pos4;

        reportFailures++;
        pos0 = clone(pos);
        pos1 = clone(pos);
        if (input.substr(pos.offset, 2) === "{`") {
          result0 = "{`";
          advance(pos, 2);
        } else {
          result0 = null;
          if (reportFailures === 0) {
            matchFailed("\"{`\"");
          }
        }
        if (result0 !== null) {
          result1 = [];
          pos2 = clone(pos);
          pos3 = clone(pos);
          pos4 = clone(pos);
          reportFailures++;
          if (input.substr(pos.offset, 2) === "`}") {
            result2 = "`}";
            advance(pos, 2);
          } else {
            result2 = null;
            if (reportFailures === 0) {
              matchFailed("\"`}\"");
            }
          }
          reportFailures--;
          if (result2 === null) {
            result2 = "";
          } else {
            result2 = null;
            pos = clone(pos4);
          }
          if (result2 !== null) {
            if (input.length > pos.offset) {
              result3 = input.charAt(pos.offset);
              advance(pos, 1);
            } else {
              result3 = null;
              if (reportFailures === 0) {
                matchFailed("any character");
              }
            }
            if (result3 !== null) {
              result2 = [result2, result3];
            } else {
              result2 = null;
              pos = clone(pos3);
            }
          } else {
            result2 = null;
            pos = clone(pos3);
          }
          if (result2 !== null) {
            result2 = (function(offset, line, column, char) {return char})(pos2.offset, pos2.line, pos2.column, result2[1]);
          }
          if (result2 === null) {
            pos = clone(pos2);
          }
          while (result2 !== null) {
            result1.push(result2);
            pos2 = clone(pos);
            pos3 = clone(pos);
            pos4 = clone(pos);
            reportFailures++;
            if (input.substr(pos.offset, 2) === "`}") {
              result2 = "`}";
              advance(pos, 2);
            } else {
              result2 = null;
              if (reportFailures === 0) {
                matchFailed("\"`}\"");
              }
            }
            reportFailures--;
            if (result2 === null) {
              result2 = "";
            } else {
              result2 = null;
              pos = clone(pos4);
            }
            if (result2 !== null) {
              if (input.length > pos.offset) {
                result3 = input.charAt(pos.offset);
                advance(pos, 1);
              } else {
                result3 = null;
                if (reportFailures === 0) {
                  matchFailed("any character");
                }
              }
              if (result3 !== null) {
                result2 = [result2, result3];
              } else {
                result2 = null;
                pos = clone(pos3);
              }
            } else {
              result2 = null;
              pos = clone(pos3);
            }
            if (result2 !== null) {
              result2 = (function(offset, line, column, char) {return char})(pos2.offset, pos2.line, pos2.column, result2[1]);
            }
            if (result2 === null) {
              pos = clone(pos2);
            }
          }
          if (result1 !== null) {
            if (input.substr(pos.offset, 2) === "`}") {
              result2 = "`}";
              advance(pos, 2);
            } else {
              result2 = null;
              if (reportFailures === 0) {
                matchFailed("\"`}\"");
              }
            }
            if (result2 !== null) {
              result0 = [result0, result1, result2];
            } else {
              result0 = null;
              pos = clone(pos1);
            }
          } else {
            result0 = null;
            pos = clone(pos1);
          }
        } else {
          result0 = null;
          pos = clone(pos1);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, rawText) { return ["raw", rawText.join('')].concat([['line', line], ['col', column]]) })(pos0.offset, pos0.line, pos0.column, result0[1]);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        reportFailures--;
        if (reportFailures === 0 && result0 === null) {
          matchFailed("raw");
        }
        return result0;
      }

      function parse_comment() {
        var result0, result1, result2, result3;
        var pos0, pos1, pos2, pos3, pos4;

        reportFailures++;
        pos0 = clone(pos);
        pos1 = clone(pos);
        if (input.substr(pos.offset, 2) === "{!") {
          result0 = "{!";
          advance(pos, 2);
        } else {
          result0 = null;
          if (reportFailures === 0) {
            matchFailed("\"{!\"");
          }
        }
        if (result0 !== null) {
          result1 = [];
          pos2 = clone(pos);
          pos3 = clone(pos);
          pos4 = clone(pos);
          reportFailures++;
          if (input.substr(pos.offset, 2) === "!}") {
            result2 = "!}";
            advance(pos, 2);
          } else {
            result2 = null;
            if (reportFailures === 0) {
              matchFailed("\"!}\"");
            }
          }
          reportFailures--;
          if (result2 === null) {
            result2 = "";
          } else {
            result2 = null;
            pos = clone(pos4);
          }
          if (result2 !== null) {
            if (input.length > pos.offset) {
              result3 = input.charAt(pos.offset);
              advance(pos, 1);
            } else {
              result3 = null;
              if (reportFailures === 0) {
                matchFailed("any character");
              }
            }
            if (result3 !== null) {
              result2 = [result2, result3];
            } else {
              result2 = null;
              pos = clone(pos3);
            }
          } else {
            result2 = null;
            pos = clone(pos3);
          }
          if (result2 !== null) {
            result2 = (function(offset, line, column, c) {return c})(pos2.offset, pos2.line, pos2.column, result2[1]);
          }
          if (result2 === null) {
            pos = clone(pos2);
          }
          while (result2 !== null) {
            result1.push(result2);
            pos2 = clone(pos);
            pos3 = clone(pos);
            pos4 = clone(pos);
            reportFailures++;
            if (input.substr(pos.offset, 2) === "!}") {
              result2 = "!}";
              advance(pos, 2);
            } else {
              result2 = null;
              if (reportFailures === 0) {
                matchFailed("\"!}\"");
              }
            }
            reportFailures--;
            if (result2 === null) {
              result2 = "";
            } else {
              result2 = null;
              pos = clone(pos4);
            }
            if (result2 !== null) {
              if (input.length > pos.offset) {
                result3 = input.charAt(pos.offset);
                advance(pos, 1);
              } else {
                result3 = null;
                if (reportFailures === 0) {
                  matchFailed("any character");
                }
              }
              if (result3 !== null) {
                result2 = [result2, result3];
              } else {
                result2 = null;
                pos = clone(pos3);
              }
            } else {
              result2 = null;
              pos = clone(pos3);
            }
            if (result2 !== null) {
              result2 = (function(offset, line, column, c) {return c})(pos2.offset, pos2.line, pos2.column, result2[1]);
            }
            if (result2 === null) {
              pos = clone(pos2);
            }
          }
          if (result1 !== null) {
            if (input.substr(pos.offset, 2) === "!}") {
              result2 = "!}";
              advance(pos, 2);
            } else {
              result2 = null;
              if (reportFailures === 0) {
                matchFailed("\"!}\"");
              }
            }
            if (result2 !== null) {
              result0 = [result0, result1, result2];
            } else {
              result0 = null;
              pos = clone(pos1);
            }
          } else {
            result0 = null;
            pos = clone(pos1);
          }
        } else {
          result0 = null;
          pos = clone(pos1);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, c) { return ["comment", c.join('')].concat([['line', line], ['col', column]]) })(pos0.offset, pos0.line, pos0.column, result0[1]);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        reportFailures--;
        if (reportFailures === 0 && result0 === null) {
          matchFailed("comment");
        }
        return result0;
      }

      function parse_tag() {
        var result0, result1, result2, result3, result4, result5, result6, result7;
        var pos0, pos1, pos2;

        pos0 = clone(pos);
        result0 = parse_ld();
        if (result0 !== null) {
          result1 = [];
          result2 = parse_ws();
          while (result2 !== null) {
            result1.push(result2);
            result2 = parse_ws();
          }
          if (result1 !== null) {
            if (/^[#?^><+%:@\/~%]/.test(input.charAt(pos.offset))) {
              result2 = input.charAt(pos.offset);
              advance(pos, 1);
            } else {
              result2 = null;
              if (reportFailures === 0) {
                matchFailed("[#?^><+%:@\\/~%]");
              }
            }
            if (result2 !== null) {
              result3 = [];
              result4 = parse_ws();
              while (result4 !== null) {
                result3.push(result4);
                result4 = parse_ws();
              }
              if (result3 !== null) {
                pos1 = clone(pos);
                pos2 = clone(pos);
                reportFailures++;
                result5 = parse_rd();
                reportFailures--;
                if (result5 === null) {
                  result5 = "";
                } else {
                  result5 = null;
                  pos = clone(pos2);
                }
                if (result5 !== null) {
                  pos2 = clone(pos);
                  reportFailures++;
                  result6 = parse_eol();
                  reportFailures--;
                  if (result6 === null) {
                    result6 = "";
                  } else {
                    result6 = null;
                    pos = clone(pos2);
                  }
                  if (result6 !== null) {
                    if (input.length > pos.offset) {
                      result7 = input.charAt(pos.offset);
                      advance(pos, 1);
                    } else {
                      result7 = null;
                      if (reportFailures === 0) {
                        matchFailed("any character");
                      }
                    }
                    if (result7 !== null) {
                      result5 = [result5, result6, result7];
                    } else {
                      result5 = null;
                      pos = clone(pos1);
                    }
                  } else {
                    result5 = null;
                    pos = clone(pos1);
                  }
                } else {
                  result5 = null;
                  pos = clone(pos1);
                }
                if (result5 !== null) {
                  result4 = [];
                  while (result5 !== null) {
                    result4.push(result5);
                    pos1 = clone(pos);
                    pos2 = clone(pos);
                    reportFailures++;
                    result5 = parse_rd();
                    reportFailures--;
                    if (result5 === null) {
                      result5 = "";
                    } else {
                      result5 = null;
                      pos = clone(pos2);
                    }
                    if (result5 !== null) {
                      pos2 = clone(pos);
                      reportFailures++;
                      result6 = parse_eol();
                      reportFailures--;
                      if (result6 === null) {
                        result6 = "";
                      } else {
                        result6 = null;
                        pos = clone(pos2);
                      }
                      if (result6 !== null) {
                        if (input.length > pos.offset) {
                          result7 = input.charAt(pos.offset);
                          advance(pos, 1);
                        } else {
                          result7 = null;
                          if (reportFailures === 0) {
                            matchFailed("any character");
                          }
                        }
                        if (result7 !== null) {
                          result5 = [result5, result6, result7];
                        } else {
                          result5 = null;
                          pos = clone(pos1);
                        }
                      } else {
                        result5 = null;
                        pos = clone(pos1);
                      }
                    } else {
                      result5 = null;
                      pos = clone(pos1);
                    }
                  }
                } else {
                  result4 = null;
                }
                if (result4 !== null) {
                  result5 = [];
                  result6 = parse_ws();
                  while (result6 !== null) {
                    result5.push(result6);
                    result6 = parse_ws();
                  }
                  if (result5 !== null) {
                    result6 = parse_rd();
                    if (result6 !== null) {
                      result0 = [result0, result1, result2, result3, result4, result5, result6];
                    } else {
                      result0 = null;
                      pos = clone(pos0);
                    }
                  } else {
                    result0 = null;
                    pos = clone(pos0);
                  }
                } else {
                  result0 = null;
                  pos = clone(pos0);
                }
              } else {
                result0 = null;
                pos = clone(pos0);
              }
            } else {
              result0 = null;
              pos = clone(pos0);
            }
          } else {
            result0 = null;
            pos = clone(pos0);
          }
        } else {
          result0 = null;
          pos = clone(pos0);
        }
        if (result0 === null) {
          result0 = parse_reference();
        }
        return result0;
      }

      function parse_ld() {
        var result0;

        if (input.charCodeAt(pos.offset) === 123) {
          result0 = "{";
          advance(pos, 1);
        } else {
          result0 = null;
          if (reportFailures === 0) {
            matchFailed("\"{\"");
          }
        }
        return result0;
      }

      function parse_rd() {
        var result0;

        if (input.charCodeAt(pos.offset) === 125) {
          result0 = "}";
          advance(pos, 1);
        } else {
          result0 = null;
          if (reportFailures === 0) {
            matchFailed("\"}\"");
          }
        }
        return result0;
      }

      function parse_lb() {
        var result0;

        if (input.charCodeAt(pos.offset) === 91) {
          result0 = "[";
          advance(pos, 1);
        } else {
          result0 = null;
          if (reportFailures === 0) {
            matchFailed("\"[\"");
          }
        }
        return result0;
      }

      function parse_rb() {
        var result0;

        if (input.charCodeAt(pos.offset) === 93) {
          result0 = "]";
          advance(pos, 1);
        } else {
          result0 = null;
          if (reportFailures === 0) {
            matchFailed("\"]\"");
          }
        }
        return result0;
      }

      function parse_eol() {
        var result0;

        if (input.charCodeAt(pos.offset) === 10) {
          result0 = "\n";
          advance(pos, 1);
        } else {
          result0 = null;
          if (reportFailures === 0) {
            matchFailed("\"\\n\"");
          }
        }
        if (result0 === null) {
          if (input.substr(pos.offset, 2) === "\r\n") {
            result0 = "\r\n";
            advance(pos, 2);
          } else {
            result0 = null;
            if (reportFailures === 0) {
              matchFailed("\"\\r\\n\"");
            }
          }
          if (result0 === null) {
            if (input.charCodeAt(pos.offset) === 13) {
              result0 = "\r";
              advance(pos, 1);
            } else {
              result0 = null;
              if (reportFailures === 0) {
                matchFailed("\"\\r\"");
              }
            }
            if (result0 === null) {
              if (input.charCodeAt(pos.offset) === 8232) {
                result0 = "\u2028";
                advance(pos, 1);
              } else {
                result0 = null;
                if (reportFailures === 0) {
                  matchFailed("\"\\u2028\"");
                }
              }
              if (result0 === null) {
                if (input.charCodeAt(pos.offset) === 8233) {
                  result0 = "\u2029";
                  advance(pos, 1);
                } else {
                  result0 = null;
                  if (reportFailures === 0) {
                    matchFailed("\"\\u2029\"");
                  }
                }
              }
            }
          }
        }
        return result0;
      }

      function parse_ws() {
        var result0;

        if (/^[\t\x0B\f \xA0\uFEFF]/.test(input.charAt(pos.offset))) {
          result0 = input.charAt(pos.offset);
          advance(pos, 1);
        } else {
          result0 = null;
          if (reportFailures === 0) {
            matchFailed("[\\t\\x0B\\f \\xA0\\uFEFF]");
          }
        }
        if (result0 === null) {
          result0 = parse_eol();
        }
        return result0;
      }


      function cleanupExpected(expected) {
        expected.sort();

        var lastExpected = null;
        var cleanExpected = [];
        for (var i = 0; i < expected.length; i++) {
          if (expected[i] !== lastExpected) {
            cleanExpected.push(expected[i]);
            lastExpected = expected[i];
          }
        }
        return cleanExpected;
      }



      var result = parseFunctions[startRule]();

      /*
       * The parser is now in one of the following three states:
       *
       * 1. The parser successfully parsed the whole input.
       *
       *    - |result !== null|
       *    - |pos.offset === input.length|
       *    - |rightmostFailuresExpected| may or may not contain something
       *
       * 2. The parser successfully parsed only a part of the input.
       *
       *    - |result !== null|
       *    - |pos.offset < input.length|
       *    - |rightmostFailuresExpected| may or may not contain something
       *
       * 3. The parser did not successfully parse any part of the input.
       *
       *   - |result === null|
       *   - |pos.offset === 0|
       *   - |rightmostFailuresExpected| contains at least one failure
       *
       * All code following this comment (including called functions) must
       * handle these states.
       */
      if (result === null || pos.offset !== input.length) {
        var offset = Math.max(pos.offset, rightmostFailuresPos.offset);
        var found = offset < input.length ? input.charAt(offset) : null;
        var errorPosition = pos.offset > rightmostFailuresPos.offset ? pos : rightmostFailuresPos;

        throw new parser.SyntaxError(
          cleanupExpected(rightmostFailuresExpected),
          found,
          offset,
          errorPosition.line,
          errorPosition.column
        );
      }

      return result;
    },

    /* Returns the parser source code. */
    toSource: function() { return this._source; }
  };

  /* Thrown when a parser encounters a syntax error. */

  result.SyntaxError = function(expected, found, offset, line, column) {
    function buildMessage(expected, found) {
      var expectedHumanized, foundHumanized;

      switch (expected.length) {
        case 0:
          expectedHumanized = "end of input";
          break;
        case 1:
          expectedHumanized = expected[0];
          break;
        default:
          expectedHumanized = expected.slice(0, expected.length - 1).join(", ")
            + " or "
            + expected[expected.length - 1];
      }

      foundHumanized = found ? quote(found) : "end of input";

      return "Expected " + expectedHumanized + " but " + foundHumanized + " found.";
    }

    this.name = "SyntaxError";
    this.expected = expected;
    this.found = found;
    this.message = buildMessage(expected, found);
    this.offset = offset;
    this.line = line;
    this.column = column;
  };

  result.SyntaxError.prototype = Error.prototype;

  return result;
})();

  // expose parser methods
  dust.parse = parser.parse;

  return parser;
}));



(function(root, factory) {
  if (typeof exports === 'object') {
    // in Node, require this file if we want to use the compiler as a standalone module
    module.exports = factory(require('./parser').parse, require('./dust'));
  } else {
    // in the browser, store the factory output if we want to use the compiler directly
    factory(root.dust.parse, root.dust);
  }
}(this, function(parse, dust) {
  var compiler = {},
      isArray = dust.isArray;


  compiler.compile = function(source, name) {
    // the name parameter is optional.
    // this can happen for templates that are rendered immediately (renderSource which calls compileFn) or
    // for templates that are compiled as a callable (compileFn)
    //
    // for the common case (using compile and render) a name is required so that templates will be cached by name and rendered later, by name.
    if (!name && name !== null) {
      throw new Error('Template name parameter cannot be undefined when calling dust.compile');
    }

    try {
      var ast = filterAST(parse(source));
      return compile(ast, name);
    }
    catch (err)
    {
      if (!err.line || !err.column) {
        throw err;
      }
      throw new SyntaxError(err.message + ' At line : ' + err.line + ', column : ' + err.column);
    }
  };

  function filterAST(ast) {
    var context = {};
    return compiler.filterNode(context, ast);
  }

  compiler.filterNode = function(context, node) {
    return compiler.optimizers[node[0]](context, node);
  };

  compiler.optimizers = {
    body:      compactBuffers,
    buffer:    noop,
    special:   convertSpecial,
    format:    nullify,        // TODO: convert format
    reference: visit,
    '#':       visit,
    '?':       visit,
    '^':       visit,
    '<':       visit,
    '+':       visit,
    '@':       visit,
    '%':       visit,
    partial:   visit,
    context:   visit,
    params:    visit,
    bodies:    visit,
    param:     visit,
    filters:   noop,
    key:       noop,
    path:      noop,
    literal:   noop,
    raw:       noop,
    comment:   nullify,
    line:      nullify,
    col:       nullify
  };

  compiler.pragmas = {
    esc: function(compiler, context, bodies, params) {
      var old = compiler.auto,
          out;
      if (!context) {
        context = 'h';
      }
      compiler.auto = (context === 's') ? '' : context;
      out = compileParts(compiler, bodies.block);
      compiler.auto = old;
      return out;
    }
  };

  function visit(context, node) {
    var out = [node[0]],
        i, len, res;
    for (i=1, len=node.length; i<len; i++) {
      res = compiler.filterNode(context, node[i]);
      if (res) {
        out.push(res);
      }
    }
    return out;
  }

  // Compacts consecutive buffer nodes into a single node
  function compactBuffers(context, node) {
    var out = [node[0]],
        memo, i, len, res;
    for (i=1, len=node.length; i<len; i++) {
      res = compiler.filterNode(context, node[i]);
      if (res) {
        if (res[0] === 'buffer') {
          if (memo) {
            memo[1] += res[1];
          } else {
            memo = res;
            out.push(res);
          }
        } else {
          memo = null;
          out.push(res);
        }
      }
    }
    return out;
  }

  var specialChars = {
    's': ' ',
    'n': '\n',
    'r': '\r',
    'lb': '{',
    'rb': '}'
  };

  function convertSpecial(context, node) {
    return ['buffer', specialChars[node[1]]];
  }

  function noop(context, node) {
    return node;
  }

  function nullify(){}

  function compile(ast, name) {
    var context = {
      name: name,
      bodies: [],
      blocks: {},
      index: 0,
      auto: 'h'
    };

    return '(function(){dust.register(' +
        (name ? '"' + name + '"' : 'null') + ',' +
        compiler.compileNode(context, ast) +
        ');' +
        compileBlocks(context) +
        compileBodies(context) +
        'return body_0;' +
        '})();';
  }

  function compileBlocks(context) {
    var out = [],
        blocks = context.blocks,
        name;

    for (name in blocks) {
      out.push('"' + name + '":' + blocks[name]);
    }
    if (out.length) {
      context.blocks = 'ctx=ctx.shiftBlocks(blocks);';
      return 'var blocks={' + out.join(',') + '};';
    }
    return context.blocks = '';
  }

  function compileBodies(context) {
    var out = [],
        bodies = context.bodies,
        blx = context.blocks,
        i, len;

    for (i=0, len=bodies.length; i<len; i++) {
      out[i] = 'function body_' + i + '(chk,ctx){' +
          blx + 'return chk' + bodies[i] + ';}';
    }
    return out.join('');
  }

  function compileParts(context, body) {
    var parts = '',
        i, len;
    for (i=1, len=body.length; i<len; i++) {
      parts += compiler.compileNode(context, body[i]);
    }
    return parts;
  }

  compiler.compileNode = function(context, node) {
    return compiler.nodes[node[0]](context, node);
  };

  compiler.nodes = {
    body: function(context, node) {
      var id = context.index++,
          name = 'body_' + id;
      context.bodies[id] = compileParts(context, node);
      return name;
    },

    buffer: function(context, node) {
      return '.write(' + escape(node[1]) + ')';
    },

    format: function(context, node) {
      return '.write(' + escape(node[1] + node[2]) + ')';
    },

    reference: function(context, node) {
      return '.reference(' + compiler.compileNode(context, node[1]) +
        ',ctx,' + compiler.compileNode(context, node[2]) + ')';
    },

    '#': function(context, node) {
      return compileSection(context, node, 'section');
    },

    '?': function(context, node) {
      return compileSection(context, node, 'exists');
    },

    '^': function(context, node) {
      return compileSection(context, node, 'notexists');
    },

    '<': function(context, node) {
      var bodies = node[4];
      for (var i=1, len=bodies.length; i<len; i++) {
        var param = bodies[i],
            type = param[1][1];
        if (type === 'block') {
          context.blocks[node[1].text] = compiler.compileNode(context, param[2]);
          return '';
        }
      }
      return '';
    },

    '+': function(context, node) {
      if (typeof(node[1].text) === 'undefined'  && typeof(node[4]) === 'undefined'){
        return '.block(ctx.getBlock(' +
              compiler.compileNode(context, node[1]) +
              ',chk, ctx),' + compiler.compileNode(context, node[2]) + ', {},' +
              compiler.compileNode(context, node[3]) +
              ')';
      } else {
        return '.block(ctx.getBlock(' +
            escape(node[1].text) +
            '),' + compiler.compileNode(context, node[2]) + ',' +
            compiler.compileNode(context, node[4]) + ',' +
            compiler.compileNode(context, node[3]) +
            ')';
      }
    },

    '@': function(context, node) {
      return '.helper(' +
        escape(node[1].text) +
        ',' + compiler.compileNode(context, node[2]) + ',' +
        compiler.compileNode(context, node[4]) + ',' +
        compiler.compileNode(context, node[3]) +
        ')';
    },

    '%': function(context, node) {
      // TODO: Move these hacks into pragma precompiler
      var name = node[1][1],
          rawBodies,
          bodies,
          rawParams,
          params,
          ctx, b, p, i, len;
      if (!compiler.pragmas[name]) {
        return '';
      }

      rawBodies = node[4];
      bodies = {};
      for (i=1, len=rawBodies.length; i<len; i++) {
        b = rawBodies[i];
        bodies[b[1][1]] = b[2];
      }

      rawParams = node[3];
      params = {};
      for (i=1, len=rawParams.length; i<len; i++) {
        p = rawParams[i];
        params[p[1][1]] = p[2][1];
      }

      ctx = node[2][1] ? node[2][1].text : null;

      return compiler.pragmas[name](context, ctx, bodies, params);
    },

    partial: function(context, node) {
      return '.partial(' +
          compiler.compileNode(context, node[1]) +
          ',' + compiler.compileNode(context, node[2]) +
          ',' + compiler.compileNode(context, node[3]) + ')';
    },

    context: function(context, node) {
      if (node[1]) {
        return 'ctx.rebase(' + compiler.compileNode(context, node[1]) + ')';
      }
      return 'ctx';
    },

    params: function(context, node) {
      var out = [];
      for (var i=1, len=node.length; i<len; i++) {
        out.push(compiler.compileNode(context, node[i]));
      }
      if (out.length) {
        return '{' + out.join(',') + '}';
      }
      return '{}';
    },

    bodies: function(context, node) {
      var out = [];
      for (var i=1, len=node.length; i<len; i++) {
        out.push(compiler.compileNode(context, node[i]));
      }
      return '{' + out.join(',') + '}';
    },

    param: function(context, node) {
      return compiler.compileNode(context, node[1]) + ':' + compiler.compileNode(context, node[2]);
    },

    filters: function(context, node) {
      var list = [];
      for (var i=1, len=node.length; i<len; i++) {
        var filter = node[i];
        list.push('"' + filter + '"');
      }
      return '"' + context.auto + '"' +
        (list.length ? ',[' + list.join(',') + ']' : '');
    },

    key: function(context, node) {
      return 'ctx.get(["' + node[1] + '"], false)';
    },

    path: function(context, node) {
      var current = node[1],
          keys = node[2],
          list = [];

      for (var i=0,len=keys.length; i<len; i++) {
        if (isArray(keys[i])) {
          list.push(compiler.compileNode(context, keys[i]));
        } else {
          list.push('"' + keys[i] + '"');
        }
      }
      return 'ctx.getPath(' + current + ', [' + list.join(',') + '])';
    },

    literal: function(context, node) {
      return escape(node[1]);
    },
    raw: function(context, node) {
      return ".write(" + escape(node[1]) + ")";
    }
  };

  function compileSection(context, node, cmd) {
    return '.' + cmd + '(' +
      compiler.compileNode(context, node[1]) +
      ',' + compiler.compileNode(context, node[2]) + ',' +
      compiler.compileNode(context, node[4]) + ',' +
      compiler.compileNode(context, node[3]) +
      ')';
  }

  var BS = /\\/g,
      DQ = /"/g,
      LF = /\f/g,
      NL = /\n/g,
      CR = /\r/g,
      TB = /\t/g;
  function escapeToJsSafeString(str) {
    return str.replace(BS, '\\\\')
              .replace(DQ, '\\"')
              .replace(LF, '\\f')
              .replace(NL, '\\n')
              .replace(CR, '\\r')
              .replace(TB, '\\t');
  }

  var escape = (typeof JSON === 'undefined') ?
                  function(str) { return '"' + escapeToJsSafeString(str) + '"';} :
                  JSON.stringify;

  // expose compiler methods
  dust.compile = compiler.compile;
  dust.filterNode = compiler.filterNode;
  dust.optimizers = compiler.optimizers;
  dust.pragmas = compiler.pragmas;
  dust.compileNode = compiler.compileNode;
  dust.nodes = compiler.nodes;

  return compiler;

}));



/*! dustjs-helpers - v1.2.0
* https://github.com/linkedin/dustjs-helpers
* Copyright (c) 2014 Aleksander Williams; Released under the MIT License */
!function(dust){function isSelect(a){var b=a.current();return"object"==typeof b&&b.isSelect===!0}function jsonFilter(a,b){return"function"==typeof b?b.toString().replace(/(^\s+|\s+$)/gm,"").replace(/\n/gm,"").replace(/,\s*/gm,", ").replace(/\)\{/gm,") {"):b}function filter(a,b,c,d,e){d=d||{};var f,g,h=c.block,i=d.filterOpType||"";if("undefined"!=typeof d.key)f=dust.helpers.tap(d.key,a,b);else{if(!isSelect(b))return _console.log("No key specified for filter in:"+i+" helper "),a;f=b.current().selectKey,b.current().isResolved&&(e=function(){return!1})}return g=dust.helpers.tap(d.value,a,b),e(coerce(g,d.type,b),coerce(f,d.type,b))?(isSelect(b)&&(b.current().isResolved=!0),h?a.render(h,b):(_console.log("Missing body block in the "+i+" helper "),a)):c["else"]?a.render(c["else"],b):a}function coerce(a,b,c){if(a)switch(b||typeof a){case"number":return+a;case"string":return String(a);case"boolean":return a="false"===a?!1:a,Boolean(a);case"date":return new Date(a);case"context":return c.get(a)}return a}var _console="undefined"!=typeof console?console:{log:function(){}},helpers={tap:function(a,b,c){if("function"!=typeof a)return a;var d,e="";return d=b.tap(function(a){return e+=a,""}).render(a,c),b.untap(),d.constructor!==b.constructor?d:""===e?!1:e},sep:function(a,b,c){var d=c.block;return b.stack.index===b.stack.of-1?a:d?c.block(a,b):a},idx:function(a,b,c){var d=c.block;return d?c.block(a,b.push(b.stack.index)):a},contextDump:function(a,b,c,d){var e,f=d||{},g=f.to||"output",h=f.key||"current";return g=dust.helpers.tap(g,a,b),h=dust.helpers.tap(h,a,b),e="full"===h?JSON.stringify(b.stack,jsonFilter,2):JSON.stringify(b.stack.head,jsonFilter,2),"console"===g?(_console.log(e),a):a.write(e)},"if":function(chunk,context,bodies,params){var body=bodies.block,skip=bodies["else"];if(params&&params.cond){var cond=params.cond;if(cond=dust.helpers.tap(cond,chunk,context),eval(cond))return body?chunk.render(bodies.block,context):(_console.log("Missing body block in the if helper!"),chunk);if(skip)return chunk.render(bodies["else"],context)}else _console.log("No condition given in the if helper!");return chunk},math:function(a,b,c,d){if(d&&"undefined"!=typeof d.key&&d.method){var e=d.key,f=d.method,g=d.operand,h=d.round,i=null;switch(e=dust.helpers.tap(e,a,b),g=dust.helpers.tap(g,a,b),f){case"mod":(0===g||g===-0)&&_console.log("operand for divide operation is 0/-0: expect Nan!"),i=parseFloat(e)%parseFloat(g);break;case"add":i=parseFloat(e)+parseFloat(g);break;case"subtract":i=parseFloat(e)-parseFloat(g);break;case"multiply":i=parseFloat(e)*parseFloat(g);break;case"divide":(0===g||g===-0)&&_console.log("operand for divide operation is 0/-0: expect Nan/Infinity!"),i=parseFloat(e)/parseFloat(g);break;case"ceil":i=Math.ceil(parseFloat(e));break;case"floor":i=Math.floor(parseFloat(e));break;case"round":i=Math.round(parseFloat(e));break;case"abs":i=Math.abs(parseFloat(e));break;default:_console.log("method passed is not supported")}return null!==i?(h&&(i=Math.round(i)),c&&c.block?a.render(c.block,b.push({isSelect:!0,isResolved:!1,selectKey:i})):a.write(i)):a}return _console.log("Key is a required parameter for math helper along with method/operand!"),a},select:function(a,b,c,d){var e=c.block;if(d&&"undefined"!=typeof d.key){var f=dust.helpers.tap(d.key,a,b);return e?a.render(c.block,b.push({isSelect:!0,isResolved:!1,selectKey:f})):(_console.log("Missing body block in the select helper "),a)}return _console.log("No key given in the select helper!"),a},eq:function(a,b,c,d){return d&&(d.filterOpType="eq"),filter(a,b,c,d,function(a,b){return b===a})},ne:function(a,b,c,d){return d?(d.filterOpType="ne",filter(a,b,c,d,function(a,b){return b!==a})):a},lt:function(a,b,c,d){return d?(d.filterOpType="lt",filter(a,b,c,d,function(a,b){return a>b})):void 0},lte:function(a,b,c,d){return d?(d.filterOpType="lte",filter(a,b,c,d,function(a,b){return a>=b})):a},gt:function(a,b,c,d){return d?(d.filterOpType="gt",filter(a,b,c,d,function(a,b){return b>a})):a},gte:function(a,b,c,d){return d?(d.filterOpType="gte",filter(a,b,c,d,function(a,b){return b>=a})):a},"default":function(a,b,c,d){return d&&(d.filterOpType="default"),filter(a,b,c,d,function(){return!0})},size:function(a,b,c,d){var e,f,g,h=0;if(d=d||{},e=d.key,e&&e!==!0)if(dust.isArray(e))h=e.length;else if(!isNaN(parseFloat(e))&&isFinite(e))h=e;else if("object"==typeof e){f=0;for(g in e)Object.hasOwnProperty.call(e,g)&&f++;h=f}else h=(e+"").length;else h=0;return a.write(h)}};dust.helpers=helpers}("undefined"!=typeof exports?module.exports=require("dustjs-linkedin"):dust);

(function(dust){

dust.helpers.i18n = function(chunk, context, bodies, params) {
  // console.log({'params.t': params.t, 'params.t.tapped': dust.helpers.tap(params.t, chunk, context)});
  var newContext = dust.makeBase(dust.helpers.i18n.context()).push(context);
  var i18nstring = dust.helpers.tap(params.t, chunk, context);
  if (i18nstring) {
    var contextlookup = '_i18n_.' + i18nstring;
    var localized     = newContext.get(contextlookup);
    if (localized) {
      var newParams = params;
      delete newParams.t;
      dust.loadSource(dust.compile(localized, contextlookup));
      return chunk.partial(contextlookup, context, newParams);
    }
    return chunk.write('**' + i18nstring + '**');
  }
  return chunk;
};

dust.helpers.i18n.context = function(context) {
  if (typeof context === 'undefined') return { '_i18n_': dust.helpers.i18n._context_ || {} };
  return dust.helpers.i18n._context_ = context;
}

})(dust);

if(!window.jQuery.jsonp){
	/* jquery.jsonp 2.2.0 (c)2010 Julian Aubourg | MIT License | http://code.google.com/p/jquery-jsonp/ */
	(function(a){function b(){}function c(a){A=[a]}function d(a,b,c,d){try{d=a&&a.apply(b.context||b,c)}catch(e){d=!1}return d}function e(a){return/\?/.test(a)?"&":"?"}function D(l){function V(a){O++||(P(),I&&(y[K]={s:[a]}),E&&(a=E.apply(l,[a])),d(l.success,l,[a,t]),d(D,l,[l,t]))}function W(a){O++||(P(),I&&a!=u&&(y[K]=a),d(l.error,l,[l,a]),d(D,l,[l,a]))}l=a.extend({},B,l);var D=l.complete,E=l.dataFilter,F=l.callbackParameter,G=l.callback,H=l.cache,I=l.pageCache,J=l.charset,K=l.url,L=l.data,M=l.timeout,N,O=0,P=b,Q,R,S,T,U;return l.abort=function(){!(O++)&&P()},d(l.beforeSend,l,[l])===!1||O?l:(K=K||h,L=L?typeof L=="string"?L:a.param(L,l.traditional):h,K+=L?e(K)+L:h,F&&(K+=e(K)+encodeURIComponent(F)+"=?"),!H&&!I&&(K+=e(K)+"_"+(new Date).getTime()+"="),K=K.replace(/=\?(&|$)/,"="+G+"$1"),I&&(N=y[K])?N.s?V(N.s[0]):W(N):(v[G]=c,S=a(s)[0],S.id=k+z++,J&&(S[g]=J),C&&C.version()<11.6?(T=a(s)[0]).text="document.getElementById('"+S.id+"')."+n+"()":S[f]=f,!(o in S)&&p in S&&(S.htmlFor=S.id,S.event=m),S[o]=S[n]=S[p]=function(a){if(!S[q]||/loaded|complete/.test(S[q])){try{S[m]&&S[m]()}catch(b){}a=A,A=0,a?V(a[0]):W(i)}},S.src=K,P=function(a){U&&clearTimeout(U),S[p]=S[o]=S[n]=null,w[r](S),T&&w[r](T)},w[j](S,x),T&&w[j](T,x),U=M>0&&setTimeout(function(){W(u)},M)),l)}var f="async",g="charset",h="",i="error",j="insertBefore",k="_jqjsp",l="on",m=l+"click",n=l+i,o=l+"load",p=l+"readystatechange",q="readyState",r="removeChild",s="<script>",t="success",u="timeout",v=window,w=a("head")[0]||document.documentElement,x=w.firstChild,y={},z=0,A,B={callback:k,url:location.href},C=v.opera;D.setup=function(b){a.extend(B,b)},a.jsonp=D})(jQuery)
}

if(!window.jQuery.jqote){
	/* jQote2 - client-side Javascript templating engine | Copyright (C) 2010, aefxx | http://aefxx.com/ | Dual licensed under the WTFPL v2 or MIT (X11) licenses | WTFPL v2 Copyright (C) 2004, Sam Hocevar | Date: Thu, Oct 21st, 2010 | Version: 0.9.7 */
	(function($){var _=false,E1="UndefinedTemplateError",E2="TemplateCompilationError",E3="TemplateExecutionError",A="[object Array]",S="[object String]",F="[object Function]",n=1,c="%",q=/^[^<]*(<[\w\W]+>)[^>]*$/,ts=Object.prototype.toString;function r(e,x){throw ($.extend(e,x),e)}function dns(f) {var a=[];if(ts.call(f)!==A)return _;for(var i=0,l=f.length;i<l;i++)a[i]=f[i].jqote_id;return a.length?a.sort().join('.').replace(/(\b\d+\b)\.(?:\1(\.|$))+/g,"$1$2"):_}function l(s,t){var f,g=[],t=t||c,x=ts.call(s);if(x===F)return s.jqote_id?[s]:_;if(x!==A)return[$.jqotec(s,t)];if(x===A)for(var i=0,l=s.length;i<l;i++)return g.length?g:_}$.fn.extend({jqote:function(x,y){var x=ts.call(x)===A?x:[x],d="";this.each(function(i){var f=$.jqotec(this,y);for(var j=0;j<x.length;j++)d+=f.call(x[j],i,j,x,f)});return d}});$.each({app:"append",pre:"prepend",sub:"html"},function(x,y){$.fn["jqote"+x]=function(e,d,t){var p,r,s=$.jqote(e,d,t),$$=!q.test(s)?function(s){return $(document.createTextNode(s))}:$;if(!!(p=dns(l(e))))r=new RegExp("(^|\\.)"+p.split(".").join("\\.(.*)?")+"(\\.|$)");return this.each(function(){var z=$$(s);$(this)[y](z);(z[0].nodeType===3?$(this):z).trigger("jqote."+x,[z,r])})}});$.extend({jqote:function(e,d,t){var s="",t=t||c,f=l(e);if(f===_)r(new Error("Empty or undefined template passed to $.jqote"),{type:E1});d=ts.call(d)!==A?[d]:d;for(var i=0,m=f.length;i<m;i++)for(var j=0;j<d.length;j++)s+=f[i].call(d[j],i,j,d,f[i]);return s},jqotec:function(x,t){var h,e,y,t=t||c,z=ts.call(x);if(z===S&&q.test(x)){e=y=x;if(h=$.jqotecache[x])return h}else{e=z===S||x.nodeType?$(x):x instanceof jQuery?x:null;if(!e[0]||!(y=e[0].innerHTML)&&!(y=e.text()))r(new Error("Empty or undefined template passed to $.jqotec"),{type:E1});if(h=$.jqotecache[$.data(e[0],"jqote_id")])return h}var s="",i,a=y.replace(/\s*<!\[CDATA\[\s*|\s*\]\]>\s*|[\r\n\t]/g,"").split("<"+t).join(t+">\x1b").split(t+">");for(var m=0,k=a.length;m<k;m++)s+=a[m].charAt(0)!=="\x1b"?"out+='"+a[m].replace(/(\\|["'])/g,"\\$1")+"'":(a[m].charAt(1)==="="?";out+=("+a[m].substr(2)+");":(a[m].charAt(1)==="!"?";out+=$.jqotenc(("+a[m].substr(2)+"));":";"+a[m].substr(1)));s="try{"+('var out="";'+s+";return out;").split("out+='';").join("").split('var out="";out+=').join("var out=")+'}catch(e){e.type="'+E3+'";e.args=arguments;e.template=arguments.callee.toString();throw e;}';try{var f=new Function("i, j, data, fn",s)}catch(e){r(e,{type:E2})}i=e instanceof jQuery?$.data(e[0],"jqote_id",n):e;return $.jqotecache[i]=(f.jqote_id=n++,f)},jqotefn:function(e){var t=ts.call(e),i=t===S&&q.test(e)?e:$.data($(e)[0],"jqote_id");return $.jqotecache[i]||_},jqotetag:function(s){if(ts.call(s)===S)c=s},jqotenc:function(s){return s.toString().replace(/&(?!\w+;)/g,'&#38;').split('<').join('&#60;').split('>').join('&#62;').split('"').join('&#34;').split("'").join('&#39;')},jqotecache:{}});$.event.special.jqote={add:function(o){var n,h=o.handler,d=!o.data?[]:ts.call(o.data)!==A?[o.data]:o.data;if(!o.namespace)o.namespace="app.pre.sub";if(!d.length||!(n=dns(l(d))))return;o.handler=function(e,m,r){return !r||r.test(n)?h.apply(this,[e,m]):null}}}})(jQuery);
}

/*!
 * qTip2 - Pretty powerful tooltips - v2.0.1-28-
 * http://qtip2.com
 *
 * Copyright (c) 2013 Craig Michael Thompson
 * Released under the MIT, GPL licenses
 * http://jquery.org/license
 *
 * Date: Fri Mar 1 2013 10:50 GMT+0000
 * Plugins: svg ajax tips modal viewport imagemap ie6
 * Styles: basic css3
 */

/*jslint browser: true, onevar: true, undef: true, nomen: true, bitwise: true, regexp: true, newcap: true, immed: true, strict: true */
/*global window: false, jQuery: false, console: false, define: false */

/* Cache window, document, undefined */
(function( window, document, undefined ) {

// Uses AMD or browser globals to create a jQuery plugin.
(function( factory ) {
	"use strict";
	if(typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	}
	else if(jQuery && !jQuery.fn.qtip) {
		factory(jQuery);
	}
}
(function($) {
	/* This currently causes issues with Safari 6, so for it's disabled */
	//"use strict"; // (Dis)able ECMAScript "strict" operation for this function. See more: http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/

	// Munge the primitives - Paul Irish tip
	var TRUE = true,
		FALSE = false,
		NULL = null,

		// Common variables
		X = 'x', Y = 'y',
		WIDTH = 'width',
		HEIGHT = 'height',

		// Positioning sides
		TOP = 'top',
		LEFT = 'left',
		BOTTOM = 'bottom',
		RIGHT = 'right',
		CENTER = 'center',

		// Position adjustment types
		FLIP = 'flip',
		FLIPINVERT = 'flipinvert',
		SHIFT = 'shift',

		// Used by image load detection (see core.js)
		BLANKIMG = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==',

		// Shortcut vars
		QTIP, PLUGINS, MOUSE,
		NAMESPACE = 'qtip',
		HASATTR = 'data-hasqtip',
		usedIDs = {},
		widget = ['ui-widget', 'ui-tooltip'],
		selector = 'div.qtip.'+NAMESPACE,
		defaultClass = NAMESPACE + '-default',
		focusClass = NAMESPACE + '-focus',
		hoverClass = NAMESPACE + '-hover',
		replaceSuffix = '_replacedByqTip',
		oldtitle = 'oldtitle',
		trackingBound;

	// Store mouse coordinates
	function storeMouse(event)
	{
		MOUSE = {
			pageX: event.pageX,
			pageY: event.pageY,
			type: 'mousemove',
			scrollX: window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft,
			scrollY: window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop
		};
	}
// Option object sanitizer
function sanitizeOptions(opts)
{
	var invalid = function(a) { return a === NULL || 'object' !== typeof a; },
		invalidContent = function(c) { return !$.isFunction(c) && ((!c && !c.attr) || c.length < 1 || ('object' === typeof c && !c.jquery && !c.then)); };

	if(!opts || 'object' !== typeof opts) { return FALSE; }

	if(invalid(opts.metadata)) {
		opts.metadata = { type: opts.metadata };
	}

	if('content' in opts) {
		if(invalid(opts.content) || opts.content.jquery) {
			opts.content = { text: opts.content };
		}

		if(invalidContent(opts.content.text || FALSE)) {
			opts.content.text = FALSE;
		}

		if('title' in opts.content) {
			if(invalid(opts.content.title)) {
				opts.content.title = { text: opts.content.title };
			}

			if(invalidContent(opts.content.title.text || FALSE)) {
				opts.content.title.text = FALSE;
			}
		}
	}

	if('position' in opts && invalid(opts.position)) {
		opts.position = { my: opts.position, at: opts.position };
	}

	if('show' in opts && invalid(opts.show)) {
		opts.show = opts.show.jquery ? { target: opts.show } :
			opts.show === TRUE ? { ready: TRUE } : { event: opts.show };
	}

	if('hide' in opts && invalid(opts.hide)) {
		opts.hide = opts.hide.jquery ? { target: opts.hide } : { event: opts.hide };
	}

	if('style' in opts && invalid(opts.style)) {
		opts.style = { classes: opts.style };
	}

	// Sanitize plugin options
	$.each(PLUGINS, function() {
		if(this.sanitize) { this.sanitize(opts); }
	});

	return opts;
}

/*
* Core plugin implementation
*/
function QTip(target, options, id, attr)
{
	// Declare this reference
	var self = this,
		docBody = document.body,
		tooltipID = NAMESPACE + '-' + id,
		isPositioning = 0,
		isDrawing = 0,
		tooltip = $(),
		namespace = '.qtip-' + id,
		disabledClass = 'qtip-disabled',
		elements, cache;

	// Setup class attributes
	self.id = id;
	self.rendered = FALSE;
	self.destroyed = FALSE;
	self.elements = elements = { target: target };
	self.timers = { img: {} };
	self.options = options;
	self.checks = {};
	self.plugins = {};
	self.cache = cache = {
		event: {},
		target: $(),
		disabled: FALSE,
		attr: attr,
		onTarget: FALSE,
		lastClass: ''
	};

	function convertNotation(notation)
	{
		var i = 0, obj, option = options,

		// Split notation into array
		levels = notation.split('.');

		// Loop through
		while( option = option[ levels[i++] ] ) {
			if(i < levels.length) { obj = option; }
		}

		return [obj || options, levels.pop()];
	}

	function createWidgetClass(cls)
	{
		return widget.concat('').join(cls ? '-'+cls+' ' : ' ');
	}

	function setWidget()
	{
		var on = options.style.widget,
			disabled = tooltip.hasClass(disabledClass);

		tooltip.removeClass(disabledClass);
		disabledClass = on ? 'ui-state-disabled' : 'qtip-disabled';
		tooltip.toggleClass(disabledClass, disabled);

		tooltip.toggleClass('ui-helper-reset '+createWidgetClass(), on).toggleClass(defaultClass, options.style.def && !on);

		if(elements.content) {
			elements.content.toggleClass( createWidgetClass('content'), on);
		}
		if(elements.titlebar) {
			elements.titlebar.toggleClass( createWidgetClass('header'), on);
		}
		if(elements.button) {
			elements.button.toggleClass(NAMESPACE+'-icon', !on);
		}
	}

	function removeTitle(reposition)
	{
		if(elements.title) {
			elements.titlebar.remove();
			elements.titlebar = elements.title = elements.button = NULL;

			// Reposition if enabled
			if(reposition !== FALSE) { self.reposition(); }
		}
	}

	function createButton()
	{
		var button = options.content.title.button,
			isString = typeof button === 'string',
			close = isString ? button : 'Close tooltip';

		if(elements.button) { elements.button.remove(); }

		// Use custom button if one was supplied by user, else use default
		if(button.jquery) {
			elements.button = button;
		}
		else {
			elements.button = $('<a />', {
				'class': 'qtip-close ' + (options.style.widget ? '' : NAMESPACE+'-icon'),
				'title': close,
				'aria-label': close
			})
			.prepend(
				$('<span />', {
					'class': 'ui-icon ui-icon-close',
					'html': '&times;'
				})
			);
		}

		// Create button and setup attributes
		elements.button.appendTo(elements.titlebar || tooltip)
			.attr('role', 'button')
			.click(function(event) {
				if(!tooltip.hasClass(disabledClass)) { self.hide(event); }
				return FALSE;
			});
	}

	function createTitle()
	{
		var id = tooltipID+'-title';

		// Destroy previous title element, if present
		if(elements.titlebar) { removeTitle(); }

		// Create title bar and title elements
		elements.titlebar = $('<div />', {
			'class': NAMESPACE + '-titlebar ' + (options.style.widget ? createWidgetClass('header') : '')
		})
		.append(
			elements.title = $('<div />', {
				'id': id,
				'class': NAMESPACE + '-title',
				'aria-atomic': TRUE
			})
		)
		.insertBefore(elements.content)

		// Button-specific events
		.delegate('.qtip-close', 'mousedown keydown mouseup keyup mouseout', function(event) {
			$(this).toggleClass('ui-state-active ui-state-focus', event.type.substr(-4) === 'down');
		})
		.delegate('.qtip-close', 'mouseover mouseout', function(event){
			$(this).toggleClass('ui-state-hover', event.type === 'mouseover');
		});

		// Create button if enabled
		if(options.content.title.button) { createButton(); }
	}

	function updateButton(button)
	{
		var elem = elements.button;

		// Make sure tooltip is rendered and if not, return
		if(!self.rendered) { return FALSE; }

		if(!button) {
			elem.remove();
		}
		else {
			createButton();
		}
	}

	function updateTitle(content, reposition)
	{
		var elem = elements.title;

		// Make sure tooltip is rendered and if not, return
		if(!self.rendered || !content) { return FALSE; }

		// Use function to parse content
		if($.isFunction(content)) {
			content = content.call(target, cache.event, self);
		}

		// Remove title if callback returns false or null/undefined (but not '')
		if(content === FALSE || (!content && content !== '')) { return removeTitle(FALSE); }

		// Append new content if its a DOM array and show it if hidden
		else if(content.jquery && content.length > 0) {
			elem.empty().append(content.css({ display: 'block' }));
		}

		// Content is a regular string, insert the new content
		else { elem.html(content); }

		// Reposition if rnedered
		if(reposition !== FALSE && self.rendered && tooltip[0].offsetWidth > 0) {
			self.reposition(cache.event);
		}
	}

	function deferredContent(deferred)
	{
		if(deferred && $.isFunction(deferred.done)) {
			deferred.done(function(c) {
				updateContent(c, null, FALSE);
			});
		}
	}

	function updateContent(content, reposition, checkDeferred)
	{
		var elem = elements.content;

		// Make sure tooltip is rendered and content is defined. If not return
		if(!self.rendered || !content) { return FALSE; }

		// Use function to parse content
		if($.isFunction(content)) {
			content = content.call(target, cache.event, self) || '';
		}

		// Handle deferred content
		if(checkDeferred !== FALSE) {
			deferredContent(options.content.deferred);
		}

		// Append new content if its a DOM array and show it if hidden
		if(content.jquery && content.length > 0) {
			elem.empty().append(content.css({ display: 'block' }));
		}

		// Content is a regular string, insert the new content
		else { elem.html(content); }

		/*
		 * New images loaded detection method slimmed down from David DeSandro's plugin
		 *    GitHub: https://github.com/desandro/imagesloaded/
		 */
		function imagesLoaded(next) {
			var elem = $(this),
				images = elem.find('img').add( elem.filter('img') ),
				loaded = [];

			function imgLoaded( img ) {
				// don't proceed if BLANKIMG image, or image is already loaded
				if(img.src === BLANKIMG || $.inArray(img, loaded) !== -1) { return; }

				// store element in loaded images array
				loaded.push(img);

				// cache image and its state for future calls
				$.data(img, 'imagesLoaded', { src: img.src });

				// call doneLoading and clean listeners if all images are loaded
				if(images.length === loaded.length) {
					setTimeout(next);
					images.unbind('.imagesLoaded');
				}
			}

			// No images? Proceed with next
			if(!images.length) { return next(); }

			images.bind('load.imagesLoaded error.imagesLoaded', function(event) {
				imgLoaded(event.target);
			})
			.each(function(i, el) {
				var src = el.src, cached = $.data(el, 'imagesLoaded');

				/*
				 * Find out if this image has been already checked for status, and
				 * if it was and src has not changed, call imgLoaded on it. Also,
				 * if complete is true and browser supports natural sizes, try to
				 * check for image status manually
				 */
				if((cached && cached.src === src) || (el.complete && el.naturalWidth)) {
					imgLoaded(el);
				}

				/*
				 * Cached images don't fire load sometimes, so we reset src, but only when
				 * dealing with IE, or image is complete (loaded) and failed manual check
				 *
				 * Webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
				 */
				else if(el.readyState || el.complete) {
					el.src = BLANKIMG; el.src = src;
				}
			});
		}

		/*
		 * If we're still rendering... insert into 'fx' queue our image dimension
		 * checker which will halt the showing of the tooltip until image dimensions
		 * can be detected properly.
		 */
		if(self.rendered < 0) { tooltip.queue('fx', imagesLoaded); }

		// We're fully rendered, so reset isDrawing flag and proceed without queue delay
		else { isDrawing = 0; imagesLoaded.call(tooltip[0], $.noop); }

		return self;
	}

	function assignEvents()
	{
		var posOptions = options.position,
			targets = {
				show: options.show.target,
				hide: options.hide.target,
				viewport: $(posOptions.viewport),
				document: $(document),
				body: $(document.body),
				window: $(window)
			},
			events = {
				show: $.trim('' + options.show.event).split(' '),
				hide: $.trim('' + options.hide.event).split(' ')
			},
			IE6 = PLUGINS.ie === 6;

		// Define show event method
		function showMethod(event)
		{
			if(tooltip.hasClass(disabledClass)) { return FALSE; }

			// Clear hide timers
			clearTimeout(self.timers.show);
			clearTimeout(self.timers.hide);

			// Start show timer
			var callback = function(){ self.toggle(TRUE, event); };
			if(options.show.delay > 0) {
				self.timers.show = setTimeout(callback, options.show.delay);
			}
			else{ callback(); }
		}

		// Define hide method
		function hideMethod(event)
		{
			if(tooltip.hasClass(disabledClass) || isPositioning || isDrawing) { return FALSE; }

			// Check if new target was actually the tooltip element
			var relatedTarget = $(event.relatedTarget),
				ontoTooltip = relatedTarget.closest(selector)[0] === tooltip[0],
				ontoTarget = relatedTarget[0] === targets.show[0];

			// Clear timers and stop animation queue
			clearTimeout(self.timers.show);
			clearTimeout(self.timers.hide);

			// Prevent hiding if tooltip is fixed and event target is the tooltip. Or if mouse positioning is enabled and cursor momentarily overlaps
			if(this !== relatedTarget[0] &&
				(posOptions.target === 'mouse' && ontoTooltip) ||
				(options.hide.fixed && (
					(/mouse(out|leave|move)/).test(event.type) && (ontoTooltip || ontoTarget))
				)) {
				try { event.preventDefault(); event.stopImmediatePropagation(); } catch(e) {} return;
			}

			// If tooltip has displayed, start hide timer
			if(options.hide.delay > 0) {
				self.timers.hide = setTimeout(function(){ self.hide(event); }, options.hide.delay);
			}
			else{ self.hide(event); }
		}

		// Define inactive method
		function inactiveMethod(event)
		{
			if(tooltip.hasClass(disabledClass)) { return FALSE; }

			// Clear timer
			clearTimeout(self.timers.inactive);
			self.timers.inactive = setTimeout(function(){ self.hide(event); }, options.hide.inactive);
		}

		function repositionMethod(event) {
			if(self.rendered && tooltip[0].offsetWidth > 0) { self.reposition(event); }
		}

		// On mouseenter/mouseleave...
		tooltip.bind('mouseenter'+namespace+' mouseleave'+namespace, function(event) {
			var state = event.type === 'mouseenter';

			// Focus the tooltip on mouseenter (z-index stacking)
			if(state) { self.focus(event); }

			// Add hover class
			tooltip.toggleClass(hoverClass, state);
		});

		// If using mouseout/mouseleave as a hide event...
		if(/mouse(out|leave)/i.test(options.hide.event)) {
			// Hide tooltips when leaving current window/frame (but not select/option elements)
			if(options.hide.leave === 'window') {
				targets.document.bind('mouseout'+namespace+' blur'+namespace, function(event) {
					if(!/select|option/.test(event.target.nodeName) && !event.relatedTarget) {
						self.hide(event);
					}
				});
			}
		}

		// Enable hide.fixed
		if(options.hide.fixed) {
			// Add tooltip as a hide target
			targets.hide = targets.hide.add(tooltip);

			// Clear hide timer on tooltip hover to prevent it from closing
			tooltip.bind('mouseover'+namespace, function() {
				if(!tooltip.hasClass(disabledClass)) { clearTimeout(self.timers.hide); }
			});
		}

		/*
		 * Make sure hoverIntent functions properly by using mouseleave to clear show timer if
		 * mouseenter/mouseout is used for show.event, even if it isn't in the users options.
		 */
		else if(/mouse(over|enter)/i.test(options.show.event)) {
			targets.hide.bind('mouseleave'+namespace, function(event) {
				clearTimeout(self.timers.show);
			});
		}

		// Hide tooltip on document mousedown if unfocus events are enabled
		if(('' + options.hide.event).indexOf('unfocus') > -1) {
			posOptions.container.closest('html').bind('mousedown'+namespace+' touchstart'+namespace, function(event) {
				var elem = $(event.target),
					enabled = self.rendered && !tooltip.hasClass(disabledClass) && tooltip[0].offsetWidth > 0,
					isAncestor = elem.parents(selector).filter(tooltip[0]).length > 0;

				if(elem[0] !== target[0] && elem[0] !== tooltip[0] && !isAncestor &&
					!target.has(elem[0]).length && enabled
				) {
					self.hide(event);
				}
			});
		}

		// Check if the tooltip hides when inactive
		if('number' === typeof options.hide.inactive) {
			// Bind inactive method to target as a custom event
			targets.show.bind('qtip-'+id+'-inactive', inactiveMethod);

			// Define events which reset the 'inactive' event handler
			$.each(QTIP.inactiveEvents, function(index, type){
				targets.hide.add(elements.tooltip).bind(type+namespace+'-inactive', inactiveMethod);
			});
		}

		// Apply hide events
		$.each(events.hide, function(index, type) {
			var showIndex = $.inArray(type, events.show),
					targetHide = $(targets.hide);

			// Both events and targets are identical, apply events using a toggle
			if((showIndex > -1 && targetHide.add(targets.show).length === targetHide.length) || type === 'unfocus')
			{
				targets.show.bind(type+namespace, function(event) {
					if(tooltip[0].offsetWidth > 0) { hideMethod(event); }
					else { showMethod(event); }
				});

				// Don't bind the event again
				delete events.show[ showIndex ];
			}

			// Events are not identical, bind normally
			else { targets.hide.bind(type+namespace, hideMethod); }
		});

		// Apply show events
		$.each(events.show, function(index, type) {
			targets.show.bind(type+namespace, showMethod);
		});

		// Check if the tooltip hides when mouse is moved a certain distance
		if('number' === typeof options.hide.distance) {
			// Bind mousemove to target to detect distance difference
			targets.show.add(tooltip).bind('mousemove'+namespace, function(event) {
				var origin = cache.origin || {},
					limit = options.hide.distance,
					abs = Math.abs;

				// Check if the movement has gone beyond the limit, and hide it if so
				if(abs(event.pageX - origin.pageX) >= limit || abs(event.pageY - origin.pageY) >= limit) {
					self.hide(event);
				}
			});
		}

		// Mouse positioning events
		if(posOptions.target === 'mouse') {
			// Cache mousemove coords on show targets
			targets.show.bind('mousemove'+namespace, storeMouse);

			// If mouse adjustment is on...
			if(posOptions.adjust.mouse) {
				// Apply a mouseleave event so we don't get problems with overlapping
				if(options.hide.event) {
					// Hide when we leave the tooltip and not onto the show target
					tooltip.bind('mouseleave'+namespace, function(event) {
						if((event.relatedTarget || event.target) !== targets.show[0]) { self.hide(event); }
					});

					// Track if we're on the target or not
					elements.target.bind('mouseenter'+namespace+' mouseleave'+namespace, function(event) {
						cache.onTarget = event.type === 'mouseenter';
					});
				}

				// Update tooltip position on mousemove
				targets.document.bind('mousemove'+namespace, function(event) {
					// Update the tooltip position only if the tooltip is visible and adjustment is enabled
					if(self.rendered && cache.onTarget && !tooltip.hasClass(disabledClass) && tooltip[0].offsetWidth > 0) {
						self.reposition(event || MOUSE);
					}
				});
			}
		}

		// Adjust positions of the tooltip on window resize if enabled
		if(posOptions.adjust.resize || targets.viewport.length) {
			($.event.special.resize ? targets.viewport : targets.window).bind('resize'+namespace, repositionMethod);
		}

		// Adjust tooltip position on scroll of the window or viewport element if present
		if(posOptions.adjust.scroll) {
			targets.window.add(posOptions.container).bind('scroll'+namespace, repositionMethod);
		}
	}

	function unassignEvents()
	{
		var targets = [
			options.show.target[0],
			options.hide.target[0],
			self.rendered && elements.tooltip[0],
			options.position.container[0],
			options.position.viewport[0],
			options.position.container.closest('html')[0], // unfocus
			window,
			document
		];

		// Check if tooltip is rendered
		if(self.rendered) {
			$([]).pushStack( $.grep(targets, function(i){ return typeof i === 'object'; }) ).unbind(namespace);
		}

		// Tooltip isn't yet rendered, remove render event
		else { options.show.target.unbind(namespace+'-create'); }
	}

	// Setup builtin .set() option checks
	self.checks.builtin = {
		// Core checks
		'^id$': function(obj, o, v) {
			var id = v === TRUE ? QTIP.nextid : v,
				tooltipID = NAMESPACE + '-' + id;

			if(id !== FALSE && id.length > 0 && !$('#'+tooltipID).length) {
				tooltip[0].id = tooltipID;
				elements.content[0].id = tooltipID + '-content';
				elements.title[0].id = tooltipID + '-title';
			}
		},

		// Content checks
		'^content.text$': function(obj, o, v) { updateContent(options.content.text); },
		'^content.deferred$': function(obj, o, v) { deferredContent(options.content.deferred); },
		'^content.title.text$': function(obj, o, v) {
			// Remove title if content is null
			if(!v) { return removeTitle(); }

			// If title isn't already created, create it now and update
			if(!elements.title && v) { createTitle(); }
			updateTitle(v);
		},
		'^content.title.button$': function(obj, o, v){ updateButton(v); },

		// Position checks
		'^position.(my|at)$': function(obj, o, v){
			// Parse new corner value into Corner objecct
			if('string' === typeof v) {
				obj[o] = new PLUGINS.Corner(v);
			}
		},
		'^position.container$': function(obj, o, v){
			if(self.rendered) { tooltip.appendTo(v); }
		},

		// Show checks
		'^show.ready$': function() {
			if(!self.rendered) { self.render(1); }
			else { self.toggle(TRUE); }
		},

		// Style checks
		'^style.classes$': function(obj, o, v) {
			tooltip.attr('class', NAMESPACE + ' qtip ' + v);
		},
		'^style.width|height': function(obj, o, v) {
			tooltip.css(o, v);
		},
		'^style.widget|content.title': setWidget,

		// Events check
		'^events.(render|show|move|hide|focus|blur)$': function(obj, o, v) {
			tooltip[($.isFunction(v) ? '' : 'un') + 'bind']('tooltip'+o, v);
		},

		// Properties which require event reassignment
		'^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)': function() {
			var posOptions = options.position;

			// Set tracking flag
			tooltip.attr('tracking', posOptions.target === 'mouse' && posOptions.adjust.mouse);

			// Reassign events
			unassignEvents(); assignEvents();
		}
	};

	$.extend(self, {
		/*
		 * Psuedo-private API methods
		 */
		_triggerEvent: function(type, args, event)
		{
			var callback = $.Event('tooltip'+type);
			callback.originalEvent = (event ? $.extend({}, event) : NULL) || cache.event || NULL;
			tooltip.trigger(callback, [self].concat(args || []));

			return !callback.isDefaultPrevented();
		},

		/*
		 * Public API methods
		 */
		render: function(show)
		{
			if(self.rendered) { return self; } // If tooltip has already been rendered, exit

			var text = options.content.text,
				title = options.content.title,
				posOptions = options.position;

			// Add ARIA attributes to target
			$.attr(target[0], 'aria-describedby', tooltipID);

			// Create tooltip element
			tooltip = elements.tooltip = $('<div/>', {
					'id': tooltipID,
					'class': [ NAMESPACE, defaultClass, options.style.classes, NAMESPACE + '-pos-' + options.position.my.abbrev() ].join(' '),
					'width': options.style.width || '',
					'height': options.style.height || '',
					'tracking': posOptions.target === 'mouse' && posOptions.adjust.mouse,

					/* ARIA specific attributes */
					'role': 'alert',
					'aria-live': 'polite',
					'aria-atomic': FALSE,
					'aria-describedby': tooltipID + '-content',
					'aria-hidden': TRUE
				})
				.toggleClass(disabledClass, cache.disabled)
				.data('qtip', self)
				.appendTo(options.position.container)
				.append(
					// Create content element
					elements.content = $('<div />', {
						'class': NAMESPACE + '-content',
						'id': tooltipID + '-content',
						'aria-atomic': TRUE
					})
				);

			// Set rendered flag and prevent redundant reposition calls for now
			self.rendered = -1;
			isPositioning = 1;

			// Create title...
			if(title.text) {
				createTitle();

				// Update title only if its not a callback (called in toggle if so)
				if(!$.isFunction(title.text)) { updateTitle(title.text, FALSE); }
			}

			// Create button
			else if(title.button) { createButton(); }

			// Set proper rendered flag and update content if not a callback function (called in toggle)
			if(!$.isFunction(text) || text.then) { updateContent(text, FALSE); }
			self.rendered = TRUE;

			// Setup widget classes
			setWidget();

			// Assign passed event callbacks (before plugins!)
			$.each(options.events, function(name, callback) {
				if($.isFunction(callback)) {
					tooltip.bind(name === 'toggle' ? 'tooltipshow tooltiphide' : 'tooltip'+name, callback);
				}
			});

			// Initialize 'render' plugins
			$.each(PLUGINS, function() {
				if(this.initialize === 'render') { this(self); }
			});

			// Assign events
			assignEvents();

			/* Queue this part of the render process in our fx queue so we can
			 * load images before the tooltip renders fully.
			 *
			 * See: updateContent method
			 */
			tooltip.queue('fx', function(next) {
				// tooltiprender event
				self._triggerEvent('render');

				// Reset flags
				isPositioning = 0;

				// Show tooltip if needed
				if(options.show.ready || show) {
					self.toggle(TRUE, cache.event, FALSE);
				}

				next(); // Move on to next method in queue
			});

			return self;
		},

		get: function(notation)
		{
			var result, o;

			switch(notation.toLowerCase())
			{
				case 'dimensions':
					result = {
						height: tooltip.outerHeight(FALSE),
						width: tooltip.outerWidth(FALSE)
					};
				break;

				case 'offset':
					result = PLUGINS.offset(tooltip, options.position.container);
				break;

				default:
					o = convertNotation(notation.toLowerCase());
					result = o[0][ o[1] ];
					result = result.precedance ? result.string() : result;
				break;
			}

			return result;
		},

		set: function(option, value)
		{
			var rmove = /^position\.(my|at|adjust|target|container)|style|content|show\.ready/i,
				rdraw = /^content\.(title|attr)|style/i,
				reposition = FALSE,
				checks = self.checks,
				name;

			function callback(notation, args) {
				var category, rule, match;

				for(category in checks) {
					for(rule in checks[category]) {
						if(match = (new RegExp(rule, 'i')).exec(notation)) {
							args.push(match);
							checks[category][rule].apply(self, args);
						}
					}
				}
			}

			// Convert singular option/value pair into object form
			if('string' === typeof option) {
				name = option; option = {}; option[name] = value;
			}
			else { option = $.extend(TRUE, {}, option); }

			// Set all of the defined options to their new values
			$.each(option, function(notation, value) {
				var obj = convertNotation( notation.toLowerCase() ), previous;

				// Set new obj value
				previous = obj[0][ obj[1] ];
				obj[0][ obj[1] ] = 'object' === typeof value && value.nodeType ? $(value) : value;

				// Set the new params for the callback
				option[notation] = [obj[0], obj[1], value, previous];

				// Also check if we need to reposition
				reposition = rmove.test(notation) || reposition;
			});

			// Re-sanitize options
			sanitizeOptions(options);

			/*
			 * Execute any valid callbacks for the set options
			 * Also set isPositioning/isDrawing so we don't get loads of redundant repositioning calls.
			 */
			isPositioning = 1; $.each(option, callback); isPositioning = 0;

			// Update position if needed
			if(self.rendered && tooltip[0].offsetWidth > 0 && reposition) {
				self.reposition( options.position.target === 'mouse' ? NULL : cache.event );
			}

			return self;
		},

		toggle: function(state, event)
		{
			// Try to prevent flickering when tooltip overlaps show element
			if(event) {
				if((/over|enter/).test(event.type) && (/out|leave/).test(cache.event.type) &&
					options.show.target.add(event.target).length === options.show.target.length &&
					tooltip.has(event.relatedTarget).length) {
					return self;
				}

				// Cache event
				cache.event = $.extend({}, event);
			}

			// Render the tooltip if showing and it isn't already
			if(!self.rendered) { return state ? self.render(1) : self; }

			var type = state ? 'show' : 'hide',
				opts = options[type],
				otherOpts = options[ !state ? 'show' : 'hide' ],
				posOptions = options.position,
				contentOptions = options.content,
				width = tooltip.css('width'),
				visible = tooltip[0].offsetWidth > 0,
				animate = state || opts.target.length === 1,
				sameTarget = !event || opts.target.length < 2 || cache.target[0] === event.target,
				showEvent, delay;

			// Detect state if valid one isn't provided
			if((typeof state).search('boolean|number')) { state = !visible; }

			// Return if element is already in correct state
			if(!tooltip.is(':animated') && visible === state && sameTarget) { return self; }

			// tooltipshow/tooltiphide events
			if(!self._triggerEvent(type, [90])) { return self; }

			// Set ARIA hidden status attribute
			$.attr(tooltip[0], 'aria-hidden', !!!state);

			// Execute state specific properties
			if(state) {
				// Store show origin coordinates
				cache.origin = $.extend({}, MOUSE);

				// Focus the tooltip
				self.focus(event);

				// Update tooltip content & title if it's a dynamic function
				if($.isFunction(contentOptions.text)) { updateContent(contentOptions.text, FALSE); }
				if($.isFunction(contentOptions.title.text)) { updateTitle(contentOptions.title.text, FALSE); }

				// Cache mousemove events for positioning purposes (if not already tracking)
				if(!trackingBound && posOptions.target === 'mouse' && posOptions.adjust.mouse) {
					$(document).bind('mousemove.qtip', storeMouse);
					trackingBound = TRUE;
				}

				// Update the tooltip position (set width first to prevent viewport/max-width issues)
				if(!width) { tooltip.css('width', tooltip.outerWidth()); }
				self.reposition(event, arguments[2]);
				if(!width) { tooltip.css('width', ''); }

				// Hide other tooltips if tooltip is solo
				if(!!opts.solo) {
					(typeof opts.solo === 'string' ? $(opts.solo) : $(selector, opts.solo))
						.not(tooltip).not(opts.target).qtip('hide', $.Event('tooltipsolo'));
				}
			}
			else {
				// Clear show timer if we're hiding
				clearTimeout(self.timers.show);

				// Remove cached origin on hide
				delete cache.origin;

				// Remove mouse tracking event if not needed (all tracking qTips are hidden)
				if(trackingBound && !$(selector+'[tracking="true"]:visible', opts.solo).not(tooltip).length) {
					$(document).unbind('mousemove.qtip');
					trackingBound = FALSE;
				}

				// Blur the tooltip
				self.blur(event);
			}

			// Define post-animation, state specific properties
			function after() {
				if(state) {
					// Prevent antialias from disappearing in IE by removing filter
					if(PLUGINS.ie) { tooltip[0].style.removeAttribute('filter'); }

					// Remove overflow setting to prevent tip bugs
					tooltip.css('overflow', '');

					// Autofocus elements if enabled
					if('string' === typeof opts.autofocus) {
						$(opts.autofocus, tooltip).focus();
					}

					// If set, hide tooltip when inactive for delay period
					opts.target.trigger('qtip-'+id+'-inactive');
				}
				else {
					// Reset CSS states
					tooltip.css({
						display: '',
						visibility: '',
						opacity: '',
						left: '',
						top: ''
					});
				}

				// tooltipvisible/tooltiphidden events
				self._triggerEvent(state ? 'visible' : 'hidden');
			}

			// If no effect type is supplied, use a simple toggle
			if(opts.effect === FALSE || animate === FALSE) {
				tooltip[ type ]();
				after.call(tooltip);
			}

			// Use custom function if provided
			else if($.isFunction(opts.effect)) {
				tooltip.stop(1, 1);
				opts.effect.call(tooltip, self);
				tooltip.queue('fx', function(n){ after(); n(); });
			}

			// Use basic fade function by default
			else { tooltip.fadeTo(90, state ? 1 : 0, after); }

			// If inactive hide method is set, active it
			if(state) { opts.target.trigger('qtip-'+id+'-inactive'); }

			return self;
		},

		show: function(event){ return self.toggle(TRUE, event); },

		hide: function(event){ return self.toggle(FALSE, event); },

		focus: function(event)
		{
			if(!self.rendered) { return self; }

			var qtips = $(selector),
				curIndex = parseInt(tooltip[0].style.zIndex, 10),
				newIndex = QTIP.zindex + qtips.length,
				cachedEvent = $.extend({}, event),
				focusedElem;

			// Only update the z-index if it has changed and tooltip is not already focused
			if(!tooltip.hasClass(focusClass))
			{
				// tooltipfocus event
				if(self._triggerEvent('focus', [newIndex], cachedEvent)) {
					// Only update z-index's if they've changed
					if(curIndex !== newIndex) {
						// Reduce our z-index's and keep them properly ordered
						qtips.each(function() {
							if(this.style.zIndex > curIndex) {
								this.style.zIndex = this.style.zIndex - 1;
							}
						});

						// Fire blur event for focused tooltip
						qtips.filter('.' + focusClass).qtip('blur', cachedEvent);
					}

					// Set the new z-index
					tooltip.addClass(focusClass)[0].style.zIndex = newIndex;
				}
			}

			return self;
		},

		blur: function(event) {
			// Set focused status to FALSE
			tooltip.removeClass(focusClass);

			// tooltipblur event
			self._triggerEvent('blur', [tooltip.css('zIndex')], event);

			return self;
		},

		reposition: function(event, effect)
		{
			if(!self.rendered || isPositioning) { return self; }

			// Set positioning flag
			isPositioning = 1;

			var target = options.position.target,
				posOptions = options.position,
				my = posOptions.my,
				at = posOptions.at,
				adjust = posOptions.adjust,
				method = adjust.method.split(' '),
				elemWidth = tooltip.outerWidth(FALSE),
				elemHeight = tooltip.outerHeight(FALSE),
				targetWidth = 0,
				targetHeight = 0,
				type = tooltip.css('position'),
				viewport = posOptions.viewport,
				position = { left: 0, top: 0 },
				container = posOptions.container,
				visible = tooltip[0].offsetWidth > 0,
				isScroll = event && event.type === 'scroll',
				win = $(window),
				adjusted, offset;

			// Check if absolute position was passed
			if($.isArray(target) && target.length === 2) {
				// Force left top and set position
				at = { x: LEFT, y: TOP };
				position = { left: target[0], top: target[1] };
			}

			// Check if mouse was the target
			else if(target === 'mouse' && ((event && event.pageX) || cache.event.pageX)) {
				// Force left top to allow flipping
				at = { x: LEFT, y: TOP };

				// Use cached event if one isn't available for positioning
				event = MOUSE && MOUSE.pageX && (adjust.mouse || !event || !event.pageX) ? { pageX: MOUSE.pageX, pageY: MOUSE.pageY } :
					(event && (event.type === 'resize' || event.type === 'scroll') ? cache.event :
					event && event.pageX && event.type === 'mousemove' ? event :
					(!adjust.mouse || options.show.distance) && cache.origin && cache.origin.pageX ? cache.origin :
					event) || event || cache.event || MOUSE || {};

				// Use event coordinates for position
				if(type !== 'static') { position = container.offset(); }
				position = { left: event.pageX - position.left, top: event.pageY - position.top };

				// Scroll events are a pain, some browsers
				if(adjust.mouse && isScroll) {
					position.left -= MOUSE.scrollX - win.scrollLeft();
					position.top -= MOUSE.scrollY - win.scrollTop();
				}
			}

			// Target wasn't mouse or absolute...
			else {
				// Check if event targetting is being used
				if(target === 'event' && event && event.target && event.type !== 'scroll' && event.type !== 'resize') {
					cache.target = $(event.target);
				}
				else if(target !== 'event'){
					cache.target = $(target.jquery ? target : elements.target);
				}
				target = cache.target;

				// Parse the target into a jQuery object and make sure there's an element present
				target = $(target).eq(0);
				if(target.length === 0) { return self; }

				// Check if window or document is the target
				else if(target[0] === document || target[0] === window) {
					targetWidth = PLUGINS.iOS ? window.innerWidth : target.width();
					targetHeight = PLUGINS.iOS ? window.innerHeight : target.height();

					if(target[0] === window) {
						position = {
							top: (viewport || target).scrollTop(),
							left: (viewport || target).scrollLeft()
						};
					}
				}

				// Use Imagemap/SVG plugins if needed
				else if(PLUGINS.imagemap && target.is('area')) {
					adjusted = PLUGINS.imagemap(self, target, at, PLUGINS.viewport ? method : FALSE);
				}
				else if(PLUGINS.svg && target[0].ownerSVGElement) {
					adjusted = PLUGINS.svg(self, target, at, PLUGINS.viewport ? method : FALSE);
				}

				else {
					targetWidth = target.outerWidth(FALSE);
					targetHeight = target.outerHeight(FALSE);

					position = PLUGINS.offset(target, container);
				}

				// Parse returned plugin values into proper variables
				if(adjusted) {
					targetWidth = adjusted.width;
					targetHeight = adjusted.height;
					offset = adjusted.offset;
					position = adjusted.position;
				}

				// Adjust for position.fixed tooltips (and also iOS scroll bug in v3.2-4.0 & v4.3-4.3.2)
				if((PLUGINS.iOS > 3.1 && PLUGINS.iOS < 4.1) ||
					(PLUGINS.iOS >= 4.3 && PLUGINS.iOS < 4.33) ||
					(!PLUGINS.iOS && type === 'fixed')
				){
					position.left -= win.scrollLeft();
					position.top -= win.scrollTop();
				}

				// Adjust position relative to target
				position.left += at.x === RIGHT ? targetWidth : at.x === CENTER ? targetWidth / 2 : 0;
				position.top += at.y === BOTTOM ? targetHeight : at.y === CENTER ? targetHeight / 2 : 0;
			}

			// Adjust position relative to tooltip
			position.left += adjust.x + (my.x === RIGHT ? -elemWidth : my.x === CENTER ? -elemWidth / 2 : 0);
			position.top += adjust.y + (my.y === BOTTOM ? -elemHeight : my.y === CENTER ? -elemHeight / 2 : 0);

			// Use viewport adjustment plugin if enabled
			if(PLUGINS.viewport) {
				position.adjusted = PLUGINS.viewport(
					self, position, posOptions, targetWidth, targetHeight, elemWidth, elemHeight
				);

				// Apply offsets supplied by positioning plugin (if used)
				if(offset && position.adjusted.left) { position.left += offset.left; }
				if(offset && position.adjusted.top) {  position.top += offset.top; }
			}

			// Viewport adjustment is disabled, set values to zero
			else { position.adjusted = { left: 0, top: 0 }; }

			// tooltipmove event
			if(!self._triggerEvent('move', [position, viewport.elem || viewport], event)) { return self; }
			delete position.adjusted;

			// If effect is disabled, target it mouse, no animation is defined or positioning gives NaN out, set CSS directly
			if(effect === FALSE || !visible || isNaN(position.left) || isNaN(position.top) || target === 'mouse' || !$.isFunction(posOptions.effect)) {
				tooltip.css(position);
			}

			// Use custom function if provided
			else if($.isFunction(posOptions.effect)) {
				posOptions.effect.call(tooltip, self, $.extend({}, position));
				tooltip.queue(function(next) {
					// Reset attributes to avoid cross-browser rendering bugs
					$(this).css({ opacity: '', height: '' });
					if(PLUGINS.ie) { this.style.removeAttribute('filter'); }

					next();
				});
			}

			// Set positioning flagwtf
			isPositioning = 0;

			return self;
		},

		disable: function(state)
		{
			if('boolean' !== typeof state) {
				state = !(tooltip.hasClass(disabledClass) || cache.disabled);
			}

			if(self.rendered) {
				tooltip.toggleClass(disabledClass, state);
				$.attr(tooltip[0], 'aria-disabled', state);
			}
			else {
				cache.disabled = !!state;
			}

			return self;
		},

		enable: function() { return self.disable(FALSE); },

		destroy: function(immediate)
		{
			// Set flag the signify destroy is taking place to plugins
			// and ensure it only gets destroyed once!
			if(self.destroyed) { return; }
			self.destroyed = TRUE;

			function process() {
				var t = target[0],
					title = $.attr(t, oldtitle),
					elemAPI = target.data('qtip');

				// Destroy tooltip and  any associated plugins if rendered
				if(self.rendered) {
					// Destroy all plugins
					$.each(self.plugins, function(name) {
						if(this.destroy) { this.destroy(); }
						delete self.plugins[name];
					});

					// Remove all descendants and tooltip element
					tooltip.stop(1,0).find('*').remove().end().remove();

					// Set rendered flag
					self.rendered = FALSE;
				}

				// Clear timers and remove bound events
				clearTimeout(self.timers.show);
				clearTimeout(self.timers.hide);
				unassignEvents();

				// If the API if actually this qTip API...
				if(!elemAPI || self === elemAPI) {
					// Remove api object
					target.removeData('qtip').removeAttr(HASATTR);

					// Reset old title attribute if removed
					if(options.suppress && title) {
						target.attr('title', title);
						target.removeAttr(oldtitle);
					}

					// Remove ARIA attributes
					target.removeAttr('aria-describedby');
				}

				// Remove qTip events associated with this API
				target.unbind('.qtip-'+id);

				// Remove ID from used id objects, and delete object references
				// for better garbage collection and leak protection
				delete usedIDs[self.id];
				delete self.options; delete self.elements;
				delete self.cache; delete self.timers;
				delete self.checks;
			}

			// Destroy after hide if no immediate
			if(immediate === TRUE) { process(); }
			else {
				tooltip.bind('tooltiphidden', process);
				self.hide();
			}

			return target;
		}
	});
}

// Initialization method
function init(elem, id, opts)
{
	var obj, posOptions, attr, config, title,

	// Setup element references
	docBody = $(document.body),

	// Use document body instead of document element if needed
	newTarget = elem[0] === document ? docBody : elem,

	// Grab metadata from element if plugin is present
	metadata = (elem.metadata) ? elem.metadata(opts.metadata) : NULL,

	// If metadata type if HTML5, grab 'name' from the object instead, or use the regular data object otherwise
	metadata5 = opts.metadata.type === 'html5' && metadata ? metadata[opts.metadata.name] : NULL,

	// Grab data from metadata.name (or data-qtipopts as fallback) using .data() method,
	html5 = elem.data(opts.metadata.name || 'qtipopts');

	// If we don't get an object returned attempt to parse it manualyl without parseJSON
	try { html5 = typeof html5 === 'string' ? $.parseJSON(html5) : html5; } catch(e) {}

	// Merge in and sanitize metadata
	config = $.extend(TRUE, {}, QTIP.defaults, opts,
		typeof html5 === 'object' ? sanitizeOptions(html5) : NULL,
		sanitizeOptions(metadata5 || metadata));

	// Re-grab our positioning options now we've merged our metadata and set id to passed value
	posOptions = config.position;
	config.id = id;

	// Setup missing content if none is detected
	if('boolean' === typeof config.content.text) {
		attr = elem.attr(config.content.attr);

		// Grab from supplied attribute if available
		if(config.content.attr !== FALSE && attr) { config.content.text = attr; }

		// No valid content was found, abort render
		else { return FALSE; }
	}

	// Setup target options
	if(!posOptions.container.length) { posOptions.container = docBody; }
	if(posOptions.target === FALSE) { posOptions.target = newTarget; }
	if(config.show.target === FALSE) { config.show.target = newTarget; }
	if(config.show.solo === TRUE) { config.show.solo = posOptions.container.closest('body'); }
	if(config.hide.target === FALSE) { config.hide.target = newTarget; }
	if(config.position.viewport === TRUE) { config.position.viewport = posOptions.container; }

	// Ensure we only use a single container
	posOptions.container = posOptions.container.eq(0);

	// Convert position corner values into x and y strings
	posOptions.at = new PLUGINS.Corner(posOptions.at);
	posOptions.my = new PLUGINS.Corner(posOptions.my);

	// Destroy previous tooltip if overwrite is enabled, or skip element if not
	if(elem.data('qtip')) {
		if(config.overwrite) {
			elem.qtip('destroy');
		}
		else if(config.overwrite === FALSE) {
			return FALSE;
		}
	}

	// Add has-qtip attribute
	elem.attr(HASATTR, true);

	// Remove title attribute and store it if present
	if(config.suppress && (title = elem.attr('title'))) {
		// Final attr call fixes event delegatiom and IE default tooltip showing problem
		elem.removeAttr('title').attr(oldtitle, title).attr('title', '');
	}

	// Initialize the tooltip and add API reference
	obj = new QTip(elem, config, id, !!attr);
	elem.data('qtip', obj);

	// Catch remove/removeqtip events on target element to destroy redundant tooltip
	elem.one('remove.qtip-'+id+' removeqtip.qtip-'+id, function() {
		var api; if((api = $(this).data('qtip'))) { api.destroy(); }
	});

	return obj;
}

// jQuery $.fn extension method
QTIP = $.fn.qtip = function(options, notation, newValue)
{
	var command = ('' + options).toLowerCase(), // Parse command
		returned = NULL,
		args = $.makeArray(arguments).slice(1),
		event = args[args.length - 1],
		opts = this[0] ? $.data(this[0], 'qtip') : NULL;

	// Check for API request
	if((!arguments.length && opts) || command === 'api') {
		return opts;
	}

	// Execute API command if present
	else if('string' === typeof options)
	{
		this.each(function()
		{
			var api = $.data(this, 'qtip');
			if(!api) { return TRUE; }

			// Cache the event if possible
			if(event && event.timeStamp) { api.cache.event = event; }

			// Check for specific API commands
			if((command === 'option' || command === 'options') && notation) {
				if($.isPlainObject(notation) || newValue !== undefined) {
					api.set(notation, newValue);
				}
				else {
					returned = api.get(notation);
					return FALSE;
				}
			}

			// Execute API command
			else if(api[command]) {
				api[command].apply(api[command], args);
			}
		});

		return returned !== NULL ? returned : this;
	}

	// No API commands. validate provided options and setup qTips
	else if('object' === typeof options || !arguments.length)
	{
		opts = sanitizeOptions($.extend(TRUE, {}, options));

		// Bind the qTips
		return QTIP.bind.call(this, opts, event);
	}
};

// $.fn.qtip Bind method
QTIP.bind = function(opts, event)
{
	return this.each(function(i) {
		var options, targets, events, namespace, api, id;

		// Find next available ID, or use custom ID if provided
		id = $.isArray(opts.id) ? opts.id[i] : opts.id;
		id = !id || id === FALSE || id.length < 1 || usedIDs[id] ? QTIP.nextid++ : (usedIDs[id] = id);

		// Setup events namespace
		namespace = '.qtip-'+id+'-create';

		// Initialize the qTip and re-grab newly sanitized options
		api = init($(this), id, opts);
		if(api === FALSE) { return TRUE; }
		options = api.options;

		// Initialize plugins
		$.each(PLUGINS, function() {
			if(this.initialize === 'initialize') { this(api); }
		});

		// Determine hide and show targets
		targets = { show: options.show.target, hide: options.hide.target };
		events = {
			show: $.trim('' + options.show.event).replace(/ /g, namespace+' ') + namespace,
			hide: $.trim('' + options.hide.event).replace(/ /g, namespace+' ') + namespace
		};

		/*
		 * Make sure hoverIntent functions properly by using mouseleave as a hide event if
		 * mouseenter/mouseout is used for show.event, even if it isn't in the users options.
		 */
		if(/mouse(over|enter)/i.test(events.show) && !/mouse(out|leave)/i.test(events.hide)) {
			events.hide += ' mouseleave' + namespace;
		}

		/*
		 * Also make sure initial mouse targetting works correctly by caching mousemove coords
		 * on show targets before the tooltip has rendered.
		 *
		 * Also set onTarget when triggered to keep mouse tracking working
		 */
		targets.show.bind('mousemove'+namespace, function(event) {
			storeMouse(event);
			api.cache.onTarget = TRUE;
		});

		// Define hoverIntent function
		function hoverIntent(event) {
			function render() {
				// Cache mouse coords,render and render the tooltip
				api.render(typeof event === 'object' || options.show.ready);

				// Unbind show and hide events
				targets.show.add(targets.hide).unbind(namespace);
			}

			// Only continue if tooltip isn't disabled
			if(api.cache.disabled) { return FALSE; }

			// Cache the event data
			api.cache.event = $.extend({}, event);
			api.cache.target = event ? $(event.target) : [undefined];

			// Start the event sequence
			if(options.show.delay > 0) {
				clearTimeout(api.timers.show);
				api.timers.show = setTimeout(render, options.show.delay);
				if(events.show !== events.hide) {
					targets.hide.bind(events.hide, function() { clearTimeout(api.timers.show); });
				}
			}
			else { render(); }
		}

		// Bind show events to target
		targets.show.bind(events.show, hoverIntent);

		// Prerendering is enabled, create tooltip now
		if(options.show.ready || options.prerender) { hoverIntent(event); }
	});
};

// Setup base plugins
PLUGINS = QTIP.plugins = {
	// Corner object parser
	Corner: function(corner) {
		corner = ('' + corner).replace(/([A-Z])/, ' $1').replace(/middle/gi, CENTER).toLowerCase();
		this.x = (corner.match(/left|right/i) || corner.match(/center/) || ['inherit'])[0].toLowerCase();
		this.y = (corner.match(/top|bottom|center/i) || ['inherit'])[0].toLowerCase();

		var f = corner.charAt(0); this.precedance = (f === 't' || f === 'b' ? Y : X);

		this.string = function() { return this.precedance === Y ? this.y+this.x : this.x+this.y; };
		this.abbrev = function() {
			var x = this.x.substr(0,1), y = this.y.substr(0,1);
			return x === y ? x : this.precedance === Y ? y + x : x + y;
		};

		this.invertx = function(center) { this.x = this.x === LEFT ? RIGHT : this.x === RIGHT ? LEFT : center || this.x; };
		this.inverty = function(center) { this.y = this.y === TOP ? BOTTOM : this.y === BOTTOM ? TOP : center || this.y; };

		this.clone = function() {
			return {
				x: this.x, y: this.y, precedance: this.precedance,
				string: this.string, abbrev: this.abbrev, clone: this.clone,
				invertx: this.invertx, inverty: this.inverty
			};
		};
	},

	// Custom (more correct for qTip!) offset calculator
	offset: function(elem, container) {
		var pos = elem.offset(),
			docBody = elem.closest('body'),
			quirks = PLUGINS.ie && document.compatMode !== 'CSS1Compat',
			parent = container, scrolled,
			coffset, overflow;

		function scroll(e, i) {
			pos.left += i * e.scrollLeft();
			pos.top += i * e.scrollTop();
		}

		if(parent) {
			// Compensate for non-static containers offset
			do {
				if(parent.css('position') !== 'static') {
					coffset = parent.position();

					// Account for element positioning, borders and margins
					pos.left -= coffset.left + (parseInt(parent.css('borderLeftWidth'), 10) || 0) + (parseInt(parent.css('marginLeft'), 10) || 0);
					pos.top -= coffset.top + (parseInt(parent.css('borderTopWidth'), 10) || 0) + (parseInt(parent.css('marginTop'), 10) || 0);

					// If this is the first parent element with an overflow of "scroll" or "auto", store it
					if(!scrolled && (overflow = parent.css('overflow')) !== 'hidden' && overflow !== 'visible') { scrolled = parent; }
				}
			}
			while((parent = $(parent[0].offsetParent)).length);

			// Compensate for containers scroll if it also has an offsetParent (or in IE quirks mode)
			if(scrolled && scrolled[0] !== docBody[0] || quirks) {
				scroll( scrolled || docBody, 1 );
			}
		}

		return pos;
	},

	/*
	 * IE version detection
	 *
	 * Adapted from: http://ajaxian.com/archives/attack-of-the-ie-conditional-comment
	 * Credit to James Padolsey for the original implemntation!
	 */
	ie: (function(){
		var v = 3, div = document.createElement('div');
		while ((div.innerHTML = '<!--[if gt IE '+(++v)+']><i></i><![endif]-->')) {
			if(!div.getElementsByTagName('i')[0]) { break; }
		}
		return v > 4 ? v : FALSE;
	}()),

	/*
	 * iOS version detection
	 */
	iOS: parseFloat(
		('' + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0,''])[1])
		.replace('undefined', '3_2').replace('_', '.').replace('_', '')
	) || FALSE,

	/*
	 * jQuery-specific $.fn overrides
	 */
	fn: {
		/* Allow other plugins to successfully retrieve the title of an element with a qTip applied */
		attr: function(attr, val) {
			if(this.length) {
				var self = this[0],
					title = 'title',
					api = $.data(self, 'qtip');

				if(attr === title && api && 'object' === typeof api && api.options.suppress) {
					if(arguments.length < 2) {
						return $.attr(self, oldtitle);
					}

					// If qTip is rendered and title was originally used as content, update it
					if(api && api.options.content.attr === title && api.cache.attr) {
						api.set('content.text', val);
					}

					// Use the regular attr method to set, then cache the result
					return this.attr(oldtitle, val);
				}
			}

			return $.fn['attr'+replaceSuffix].apply(this, arguments);
		},

		/* Allow clone to correctly retrieve cached title attributes */
		clone: function(keepData) {
			var titles = $([]), title = 'title',

			// Clone our element using the real clone method
			elems = $.fn['clone'+replaceSuffix].apply(this, arguments);

			// Grab all elements with an oldtitle set, and change it to regular title attribute, if keepData is false
			if(!keepData) {
				elems.filter('['+oldtitle+']').attr('title', function() {
					return $.attr(this, oldtitle);
				})
				.removeAttr(oldtitle);
			}

			return elems;
		}
	}
};

// Apply the fn overrides above
$.each(PLUGINS.fn, function(name, func) {
	if(!func || $.fn[name+replaceSuffix]) { return TRUE; }

	var old = $.fn[name+replaceSuffix] = $.fn[name];
	$.fn[name] = function() {
		return func.apply(this, arguments) || old.apply(this, arguments);
	};
});

/* Fire off 'removeqtip' handler in $.cleanData if jQuery UI not present (it already does similar).
 * This snippet is taken directly from jQuery UI source code found here:
 *     http://code.jquery.com/ui/jquery-ui-git.js
 */
if(!$.ui) {
	$['cleanData'+replaceSuffix] = $.cleanData;
	$.cleanData = function( elems ) {
		for(var i = 0, elem; (elem = elems[i]) !== undefined && elem.getAttribute(HASATTR); i++) {
			try { $( elem ).triggerHandler('removeqtip');}
			catch( e ) {}
		}
		$['cleanData'+replaceSuffix]( elems );
	};
}

// Set global qTip properties
QTIP.version = '2.0.1-28-';
QTIP.nextid = 0;
QTIP.inactiveEvents = 'click dblclick mousedown mouseup mousemove mouseleave mouseenter'.split(' ');
QTIP.zindex = 15000;

// Define configuration defaults
QTIP.defaults = {
	prerender: FALSE,
	id: FALSE,
	overwrite: TRUE,
	suppress: TRUE,
	content: {
		text: TRUE,
		attr: 'title',
		deferred: FALSE,
		title: {
			text: FALSE,
			button: FALSE
		}
	},
	position: {
		my: 'top left',
		at: 'bottom right',
		target: FALSE,
		container: FALSE,
		viewport: FALSE,
		adjust: {
			x: 0, y: 0,
			mouse: TRUE,
			scroll: TRUE,
			resize: TRUE,
			method: 'flipinvert flipinvert'
		},
		effect: function(api, pos, viewport) {
			$(this).animate(pos, {
				duration: 200,
				queue: FALSE
			});
		}
	},
	show: {
		target: FALSE,
		event: 'mouseenter',
		effect: TRUE,
		delay: 90,
		solo: FALSE,
		ready: FALSE,
		autofocus: FALSE
	},
	hide: {
		target: FALSE,
		event: 'mouseleave',
		effect: TRUE,
		delay: 0,
		fixed: FALSE,
		inactive: FALSE,
		leave: 'window',
		distance: FALSE
	},
	style: {
		classes: '',
		widget: FALSE,
		width: FALSE,
		height: FALSE,
		def: TRUE
	},
	events: {
		render: NULL,
		move: NULL,
		show: NULL,
		hide: NULL,
		toggle: NULL,
		visible: NULL,
		hidden: NULL,
		focus: NULL,
		blur: NULL
	}
};


PLUGINS.svg = function(api, svg, corner, adjustMethod)
{
	var doc = $(document),
		elem = svg[0],
		result = {
			width: 0, height: 0,
			position: { top: 1e10, left: 1e10 }
		},
		box, mtx, root, point, tPoint;

	// Ascend the parentNode chain until we find an element with getBBox()
	while(!elem.getBBox) { elem = elem.parentNode; }

	// Check for a valid bounding box method
	if (elem.getBBox && elem.parentNode) {
		box = elem.getBBox();
		mtx = elem.getScreenCTM();
		root = elem.farthestViewportElement || elem;

		// Return if no method is found
		if(!root.createSVGPoint) { return result; }

		// Create our point var
		point = root.createSVGPoint();

		// Adjust top and left
		point.x = box.x;
		point.y = box.y;
		tPoint = point.matrixTransform(mtx);
		result.position.left = tPoint.x;
		result.position.top = tPoint.y;

		// Adjust width and height
		point.x += box.width;
		point.y += box.height;
		tPoint = point.matrixTransform(mtx);
		result.width = tPoint.x - result.position.left;
		result.height = tPoint.y - result.position.top;

		// Adjust by scroll offset
		result.position.left += doc.scrollLeft();
		result.position.top += doc.scrollTop();
	}

	return result;
};


var AJAX,
	AJAXNS = '.qtip-ajax',
	RSCRIPT = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

function Ajax(api)
{
	var self = this,
		tooltip = api.elements.tooltip,
		opts = api.options.content.ajax,
		defaults = QTIP.defaults.content.ajax,
		first = TRUE,
		stop = FALSE,
		xhr;

	api.checks.ajax = {
		'^content.ajax': function(obj, name, v) {
			// If content.ajax object was reset, set our local var
			if(name === 'ajax') { opts = v; }

			if(name === 'once') {
				self.init();
			}
			else if(opts && opts.url) {
				self.load();
			}
			else {
				tooltip.unbind(AJAXNS);
			}
		}
	};

	$.extend(self, {
		init: function() {
			// Make sure ajax options are enabled and bind event
			if(opts && opts.url) {
				tooltip.unbind(AJAXNS)[ opts.once ? 'one' : 'bind' ]('tooltipshow'+AJAXNS, self.load);
			}

			return self;
		},

		load: function(event) {
			if(stop) {stop = FALSE; return; }

			var hasSelector = opts.url.lastIndexOf(' '),
				url = opts.url,
				selector,
				hideFirst = !opts.loading && first;

			// If loading option is disabled, prevent the tooltip showing until we've completed the request
			if(hideFirst) { try{ event.preventDefault(); } catch(e) {} }

			// Make sure default event hasn't been prevented
			else if(event && event.isDefaultPrevented()) { return self; }

			// Cancel old request
			if(xhr && xhr.abort) { xhr.abort(); }

			// Check if user delcared a content selector like in .load()
			if(hasSelector > -1) {
				selector = url.substr(hasSelector);
				url = url.substr(0, hasSelector);
			}

			// Define common after callback for both success/error handlers
			function after() {
				var complete;

				// Don't proceed if tooltip is destroyed
				if(api.destroyed) { return; }

				// Set first flag to false
				first = FALSE;

				// Re-display tip if loading and first time, and reset first flag
				if(hideFirst) { stop = TRUE; api.show(event.originalEvent); }

				// Call users complete method if it was defined
				if((complete = defaults.complete || opts.complete) && $.isFunction(complete)) {
					complete.apply(opts.context || api, arguments);
				}
			}

			// Define success handler
			function successHandler(content, status, jqXHR) {
				var success;

				// Don't proceed if tooltip is destroyed
				if(api.destroyed) { return; }

				// If URL contains a selector
				if(selector && 'string' === typeof content) {
					// Create a dummy div to hold the results and grab the selector element
					content = $('<div/>')
						// inject the contents of the document in, removing the scripts
						// to avoid any 'Permission Denied' errors in IE
						.append(content.replace(RSCRIPT, ""))

						// Locate the specified elements
						.find(selector);
				}

				// Call the success function if one is defined
				if((success = defaults.success || opts.success) && $.isFunction(success)) {
					success.call(opts.context || api, content, status, jqXHR);
				}

				// Otherwise set the content
				else { api.set('content.text', content); }
			}

			// Error handler
			function errorHandler(xhr, status, error) {
				if(api.destroyed || xhr.status === 0) { return; }
				api.set('content.text', status + ': ' + error);
			}

			// Setup $.ajax option object and process the request
			xhr = $.ajax(
				$.extend({
					error: defaults.error || errorHandler,
					context: api
				},
				opts, { url: url, success: successHandler, complete: after })
			);
		},

		destroy: function() {
			// Cancel ajax request if possible
			if(xhr && xhr.abort) { xhr.abort(); }

			// Set api.destroyed flag
			api.destroyed = TRUE;
		}
	});

	self.init();
}

AJAX = PLUGINS.ajax = function(api)
{
	var self = api.plugins.ajax;

	return 'object' === typeof self ? self : (api.plugins.ajax = new Ajax(api));
};

AJAX.initialize = 'render';

// Setup plugin sanitization
AJAX.sanitize = function(options)
{
	var content = options.content, opts;
	if(content && 'ajax' in content) {
		opts = content.ajax;
		if(typeof opts !== 'object') { opts = options.content.ajax = { url: opts }; }
		if('boolean' !== typeof opts.once && opts.once) { opts.once = !!opts.once; }
	}
};

// Extend original api defaults
$.extend(TRUE, QTIP.defaults, {
	content: {
		ajax: {
			loading: TRUE,
			once: TRUE
		}
	}
});


var TIP,
	TIPNS = '.qtip-tip',
	HASCANVAS = !!document.createElement('canvas').getContext;

// Tip coordinates calculator
function calculateTip(corner, width, height)
{
	var width2 = Math.ceil(width / 2), height2 = Math.ceil(height / 2),

	// Define tip coordinates in terms of height and width values
	tips = {
		bottomright:	[[0,0],				[width,height],		[width,0]],
		bottomleft:		[[0,0],				[width,0],				[0,height]],
		topright:		[[0,height],		[width,0],				[width,height]],
		topleft:			[[0,0],				[0,height],				[width,height]],
		topcenter:		[[0,height],		[width2,0],				[width,height]],
		bottomcenter:	[[0,0],				[width,0],				[width2,height]],
		rightcenter:	[[0,0],				[width,height2],		[0,height]],
		leftcenter:		[[width,0],			[width,height],		[0,height2]]
	};

	// Set common side shapes
	tips.lefttop = tips.bottomright; tips.righttop = tips.bottomleft;
	tips.leftbottom = tips.topright; tips.rightbottom = tips.topleft;

	return tips[ corner.string() ];
}


function Tip(qTip, command)
{
	var self = this,
		opts = qTip.options.style.tip,
		elems = qTip.elements,
		tooltip = elems.tooltip,
		cache = { top: 0, left: 0 },
		size = {
			width: opts.width,
			height: opts.height
		},
		color = { },
		border = opts.border || 0,
		tiphtml;

	self.corner = NULL;
	self.mimic = NULL;
	self.border = border;
	self.offset = opts.offset;
	self.size = size;

	// Add new option checks for the plugin
	qTip.checks.tip = {
		'^position.my|style.tip.(corner|mimic|border)$': function() {
			// Make sure a tip can be drawn
			if(!self.init()) {
				self.destroy();
			}

			// Reposition the tooltip
			qTip.reposition();
		},
		'^style.tip.(height|width)$': function() {
			// Re-set dimensions and redraw the tip
			size = {
				width: opts.width,
				height: opts.height
			};
			self.create();
			self.update();

			// Reposition the tooltip
			qTip.reposition();
		},
		'^content.title.text|style.(classes|widget)$': function() {
			if(elems.tip && elems.tip.length) {
				self.update();
			}
		}
	};

	function whileVisible(callback) {
		var visible = tooltip.is(':visible');
		tooltip.show(); callback(); tooltip.toggle(visible);
	}

	function swapDimensions() {
		size.width = opts.height;
		size.height = opts.width;
	}

	function resetDimensions() {
		size.width = opts.width;
		size.height = opts.height;
	}

	function reposition(event, api, pos, viewport) {
		if(!elems.tip) { return; }

		var newCorner = self.corner.clone(),
			adjust = pos.adjusted,
			method = qTip.options.position.adjust.method.split(' '),
			horizontal = method[0],
			vertical = method[1] || method[0],
			shift = { left: FALSE, top: FALSE, x: 0, y: 0 },
			offset, css = {}, props;

		// If our tip position isn't fixed e.g. doesn't adjust with viewport...
		if(self.corner.fixed !== TRUE) {
			// Horizontal - Shift or flip method
			if(horizontal === SHIFT && newCorner.precedance === X && adjust.left && newCorner.y !== CENTER) {
				newCorner.precedance = newCorner.precedance === X ? Y : X;
			}
			else if(horizontal !== SHIFT && adjust.left){
				newCorner.x = newCorner.x === CENTER ? (adjust.left > 0 ? LEFT : RIGHT) : (newCorner.x === LEFT ? RIGHT : LEFT);
			}

			// Vertical - Shift or flip method
			if(vertical === SHIFT && newCorner.precedance === Y && adjust.top && newCorner.x !== CENTER) {
				newCorner.precedance = newCorner.precedance === Y ? X : Y;
			}
			else if(vertical !== SHIFT && adjust.top) {
				newCorner.y = newCorner.y === CENTER ? (adjust.top > 0 ? TOP : BOTTOM) : (newCorner.y === TOP ? BOTTOM : TOP);
			}

			// Update and redraw the tip if needed (check cached details of last drawn tip)
			if(newCorner.string() !== cache.corner.string() && (cache.top !== adjust.top || cache.left !== adjust.left)) {
				self.update(newCorner, FALSE);
			}
		}

		// Setup tip offset properties
		offset = self.position(newCorner, adjust);
		offset[ newCorner.x ] += parseWidth(newCorner, newCorner.x);
		offset[ newCorner.y ] += parseWidth(newCorner, newCorner.y);

		// Readjust offset object to make it left/top
		if(offset.right !== undefined) { offset.left = -offset.right; }
		if(offset.bottom !== undefined) { offset.top = -offset.bottom; }
		offset.user = Math.max(0, opts.offset);

		// Viewport "shift" specific adjustments
		if(shift.left = (horizontal === SHIFT && !!adjust.left)) {
			if(newCorner.x === CENTER) {
				css['margin-left'] = shift.x = offset['margin-left'] - adjust.left;
			}
			else {
				props = offset.right !== undefined ?
					[ adjust.left, -offset.left ] : [ -adjust.left, offset.left ];

				if( (shift.x = Math.max(props[0], props[1])) > props[0] ) {
					pos.left -= adjust.left;
					shift.left = FALSE;
				}

				css[ offset.right !== undefined ? RIGHT : LEFT ] = shift.x;
			}
		}
		if(shift.top = (vertical === SHIFT && !!adjust.top)) {
			if(newCorner.y === CENTER) {
				css['margin-top'] = shift.y = offset['margin-top'] - adjust.top;
			}
			else {
				props = offset.bottom !== undefined ?
					[ adjust.top, -offset.top ] : [ -adjust.top, offset.top ];

				if( (shift.y = Math.max(props[0], props[1])) > props[0] ) {
					pos.top -= adjust.top;
					shift.top = FALSE;
				}

				css[ offset.bottom !== undefined ? BOTTOM : TOP ] = shift.y;
			}
		}

		/*
		* If the tip is adjusted in both dimensions, or in a
		* direction that would cause it to be anywhere but the
		* outer border, hide it!
		*/
		elems.tip.css(css).toggle(
			!((shift.x && shift.y) || (newCorner.x === CENTER && shift.y) || (newCorner.y === CENTER && shift.x))
		);

		// Adjust position to accomodate tip dimensions
		pos.left -= offset.left.charAt ? offset.user : horizontal !== SHIFT || shift.top || !shift.left && !shift.top ? offset.left : 0;
		pos.top -= offset.top.charAt ? offset.user : vertical !== SHIFT || shift.left || !shift.left && !shift.top ? offset.top : 0;

		// Cache details
		cache.left = adjust.left; cache.top = adjust.top;
		cache.corner = newCorner.clone();
	}

	function parseCorner() {
		var corner = opts.corner,
			posOptions = qTip.options.position,
			at = posOptions.at,
			my = posOptions.my.string ? posOptions.my.string() : posOptions.my;

		// Detect corner and mimic properties
		if(corner === FALSE || (my === FALSE && at === FALSE)) {
			return FALSE;
		}
		else {
			if(corner === TRUE) {
				self.corner = new PLUGINS.Corner(my);
			}
			else if(!corner.string) {
				self.corner = new PLUGINS.Corner(corner);
				self.corner.fixed = TRUE;
			}
		}

		// Cache it
		cache.corner = new PLUGINS.Corner( self.corner.string() );

		return self.corner.string() !== 'centercenter';
	}

	/* border width calculator */
	function parseWidth(corner, side, use) {
		side = !side ? corner[corner.precedance] : side;

		var isTitleTop = elems.titlebar && corner.y === TOP,
			elem = isTitleTop ? elems.titlebar : tooltip,
			borderSide = 'border-' + side + '-width',
			css = function(elem) { return parseInt(elem.css(borderSide), 10); },
			val;

		// Grab the border-width value (make tooltip visible first)
		whileVisible(function() {
			val = (use ? css(use) : (css(elems.content) || css(elem) || css(tooltip))) || 0;
		});
		return val;
	}

	function parseRadius(corner) {
		var isTitleTop = elems.titlebar && corner.y === TOP,
			elem = isTitleTop ? elems.titlebar : elems.content,
			mozPrefix = '-moz-', webkitPrefix = '-webkit-',
			nonStandard = 'border-radius-' + corner.y + corner.x,
			standard = 'border-' + corner.y + '-' + corner.x + '-radius',
			css = function(c) { return parseInt(elem.css(c), 10) || parseInt(tooltip.css(c), 10); },
			val;

		whileVisible(function() {
			val = css(standard) || css(nonStandard) ||
				css(mozPrefix + standard) || css(mozPrefix + nonStandard) ||
				css(webkitPrefix + standard) || css(webkitPrefix + nonStandard) || 0;
		});
		return val;
	}

	function parseColours(actual) {
		var i, fill, border,
			tip = elems.tip.css('cssText', ''),
			corner = actual || self.corner,
			invalid = /rgba?\(0, 0, 0(, 0)?\)|transparent|#123456/i,
			borderSide = 'border-' + corner[ corner.precedance ] + '-color',
			bgColor = 'background-color',
			transparent = 'transparent',
			important = ' !important',

			titlebar = elems.titlebar,
			useTitle = titlebar && (corner.y === TOP || (corner.y === CENTER && tip.position().top + (size.height / 2) + opts.offset < titlebar.outerHeight(TRUE))),
			colorElem = useTitle ? titlebar : elems.content;

		function css(elem, prop, compare) {
			var val = elem.css(prop) || transparent;
			if(compare && val === elem.css(compare)) { return FALSE; }
			else { return invalid.test(val) ? FALSE : val; }
		}

		// Ensure tooltip is visible then...
		whileVisible(function() {
			// Attempt to detect the background colour from various elements, left-to-right precedance
			color.fill = css(tip, bgColor) || css(colorElem, bgColor) || css(elems.content, bgColor) ||
				css(tooltip, bgColor) || tip.css(bgColor);

			// Attempt to detect the correct border side colour from various elements, left-to-right precedance
			color.border = css(tip, borderSide, 'color') || css(colorElem, borderSide, 'color') ||
				css(elems.content, borderSide, 'color') || css(tooltip, borderSide, 'color') || tooltip.css(borderSide);

			// Reset background and border colours
			$('*', tip).add(tip).css('cssText', bgColor+':'+transparent+important+';border:0'+important+';');
		});
	}

	function calculateSize(corner) {
		var y = corner.precedance === Y,
			width = size [ y ? WIDTH : HEIGHT ],
			height = size [ y ? HEIGHT : WIDTH ],
			isCenter = corner.string().indexOf(CENTER) > -1,
			base = width * (isCenter ? 0.5 : 1),
			pow = Math.pow,
			round = Math.round,
			bigHyp, ratio, result,

		smallHyp = Math.sqrt( pow(base, 2) + pow(height, 2) ),

		hyp = [
			(border / base) * smallHyp, (border / height) * smallHyp
		];
		hyp[2] = Math.sqrt( pow(hyp[0], 2) - pow(border, 2) );
		hyp[3] = Math.sqrt( pow(hyp[1], 2) - pow(border, 2) );

		bigHyp = smallHyp + hyp[2] + hyp[3] + (isCenter ? 0 : hyp[0]);
		ratio = bigHyp / smallHyp;

		result = [ round(ratio * height), round(ratio * width) ];
		return { height: result[ y ? 0 : 1 ], width: result[ y ? 1 : 0 ] };
	}

	function createVML(tag, props, style) {
		return '<qvml:'+tag+' xmlns="urn:schemas-microsoft.com:vml" class="qtip-vml" '+(props||'')+
			' style="behavior: url(#default#VML); '+(style||'')+ '" />';
	}

	$.extend(self, {
		init: function()
		{
			var enabled = parseCorner() && (HASCANVAS || PLUGINS.ie);

			// Determine tip corner and type
			if(enabled) {
				// Create a new tip and draw it
				self.create();
				self.update();

				// Bind update events
				tooltip.unbind(TIPNS).bind('tooltipmove'+TIPNS, reposition);
			}

			return enabled;
		},

		create: function()
		{
			var width = size.width,
				height = size.height,
				vml;

			// Remove previous tip element if present
			if(elems.tip) { elems.tip.remove(); }

			// Create tip element and prepend to the tooltip
			elems.tip = $('<div />', { 'class': 'qtip-tip' }).css({ width: width, height: height }).prependTo(tooltip);

			// Create tip drawing element(s)
			if(HASCANVAS) {
				// save() as soon as we create the canvas element so FF2 doesn't bork on our first restore()!
				$('<canvas />').appendTo(elems.tip)[0].getContext('2d').save();
			}
			else {
				vml = createVML('shape', 'coordorigin="0,0"', 'position:absolute;');
				elems.tip.html(vml + vml);

				// Prevent mousing down on the tip since it causes problems with .live() handling in IE due to VML
				$('*', elems.tip).bind('click'+TIPNS+' mousedown'+TIPNS, function(event) { event.stopPropagation(); });
			}
		},

		update: function(corner, position)
		{
			var tip = elems.tip,
				inner = tip.children(),
				width = size.width,
				height = size.height,
				mimic = opts.mimic,
				round = Math.round,
				precedance, context, coords, translate, newSize;

			// Re-determine tip if not already set
			if(!corner) { corner = cache.corner || self.corner; }

			// Use corner property if we detect an invalid mimic value
			if(mimic === FALSE) { mimic = corner; }

			// Otherwise inherit mimic properties from the corner object as necessary
			else {
				mimic = new PLUGINS.Corner(mimic);
				mimic.precedance = corner.precedance;

				if(mimic.x === 'inherit') { mimic.x = corner.x; }
				else if(mimic.y === 'inherit') { mimic.y = corner.y; }
				else if(mimic.x === mimic.y) {
					mimic[ corner.precedance ] = corner[ corner.precedance ];
				}
			}
			precedance = mimic.precedance;

			// Ensure the tip width.height are relative to the tip position
			if(corner.precedance === X) { swapDimensions(); }
			else { resetDimensions(); }

			// Set the tip dimensions
			elems.tip.css({
				width: (width = size.width),
				height: (height = size.height)
			});

			// Update our colours
			parseColours(corner);

			// Detect border width, taking into account colours
			if(color.border !== 'transparent') {
				// Grab border width
				border = parseWidth(corner, NULL);

				// If border width isn't zero, use border color as fill (1.0 style tips)
				if(opts.border === 0 && border > 0) { color.fill = color.border; }

				// Set border width (use detected border width if opts.border is true)
				self.border = border = opts.border !== TRUE ? opts.border : border;
			}

			// Border colour was invalid, set border to zero
			else { self.border = border = 0; }

			// Calculate coordinates
			coords = calculateTip(mimic, width , height);

			// Determine tip size
			self.size = newSize = calculateSize(corner);
			tip.css(newSize).css('line-height', newSize.height+'px');

			// Calculate tip translation
			if(corner.precedance === Y) {
				translate = [
					round(mimic.x === LEFT ? border : mimic.x === RIGHT ? newSize.width - width - border : (newSize.width - width) / 2),
					round(mimic.y === TOP ? newSize.height - height : 0)
				];
			}
			else {
				translate = [
					round(mimic.x === LEFT ? newSize.width - width : 0),
					round(mimic.y === TOP ? border : mimic.y === BOTTOM ? newSize.height - height - border : (newSize.height - height) / 2)
				];
			}

			// Canvas drawing implementation
			if(HASCANVAS) {
				// Set the canvas size using calculated size
				inner.attr(newSize);

				// Grab canvas context and clear/save it
				context = inner[0].getContext('2d');
				context.restore(); context.save();
				context.clearRect(0,0,3000,3000);

				// Set properties
				context.fillStyle = color.fill;
				context.strokeStyle = color.border;
				context.lineWidth = border * 2;
				context.lineJoin = 'miter';
				context.miterLimit = 100;

				// Translate origin
				context.translate(translate[0], translate[1]);

				// Draw the tip
				context.beginPath();
				context.moveTo(coords[0][0], coords[0][1]);
				context.lineTo(coords[1][0], coords[1][1]);
				context.lineTo(coords[2][0], coords[2][1]);
				context.closePath();

				// Apply fill and border
				if(border) {
					// Make sure transparent borders are supported by doing a stroke
					// of the background colour before the stroke colour
					if(tooltip.css('background-clip') === 'border-box') {
						context.strokeStyle = color.fill;
						context.stroke();
					}
					context.strokeStyle = color.border;
					context.stroke();
				}
				context.fill();
			}

			// VML (IE Proprietary implementation)
			else {
				// Setup coordinates string
				coords = 'm' + coords[0][0] + ',' + coords[0][1] + ' l' + coords[1][0] +
					',' + coords[1][1] + ' ' + coords[2][0] + ',' + coords[2][1] + ' xe';

				// Setup VML-specific offset for pixel-perfection
				translate[2] = border && /^(r|b)/i.test(corner.string()) ?
					PLUGINS.ie === 8 ? 2 : 1 : 0;

				// Set initial CSS
				inner.css({
					coordsize: (width+border) + ' ' + (height+border),
					antialias: ''+(mimic.string().indexOf(CENTER) > -1),
					left: translate[0],
					top: translate[1],
					width: width + border,
					height: height + border
				})
				.each(function(i) {
					var $this = $(this);

					// Set shape specific attributes
					$this[ $this.prop ? 'prop' : 'attr' ]({
						coordsize: (width+border) + ' ' + (height+border),
						path: coords,
						fillcolor: color.fill,
						filled: !!i,
						stroked: !i
					})
					.toggle(!!(border || i));

					// Check if border is enabled and add stroke element
					if(!i && $this.html() === '') {
						$this.html(
							createVML('stroke', 'weight="'+(border*2)+'px" color="'+color.border+'" miterlimit="1000" joinstyle="miter"')
						);
					}
				});
			}

			// Opera bug #357 - Incorrect tip position
			// https://github.com/Craga89/qTip2/issues/367
			setTimeout(function() {
				elems.tip.css({
					display: 'inline-block',
					visibility: 'visible'
				});
			}, 1);

			// Position if needed
			if(position !== FALSE) { self.position(corner); }

		},

		// Tip positioning method
		position: function(corner)
		{
			var tip = elems.tip,
				position = {},
				userOffset = Math.max(0, opts.offset),
				precedance, dimensions, corners;

			// Return if tips are disabled or tip is not yet rendered
			if(opts.corner === FALSE || !tip) { return FALSE; }

			// Inherit corner if not provided
			corner = corner || self.corner;
			precedance = corner.precedance;

			// Determine which tip dimension to use for adjustment
			dimensions = calculateSize(corner);

			// Setup corners and offset array
			corners = [ corner.x, corner.y ];
			if(precedance === X) { corners.reverse(); }

			// Calculate tip position
			$.each(corners, function(i, side) {
				var b, bc, br;

				if(side === CENTER) {
					b = precedance === Y ? LEFT : TOP;
					position[ b ] = '50%';
					position['margin-' + b] = -Math.round(dimensions[ precedance === Y ? WIDTH : HEIGHT ] / 2) + userOffset;
				}
				else {
					b = parseWidth(corner, side);
					bc = parseWidth(corner, side, elems.content);
					br = parseRadius(corner);

					position[ side ] = i ? bc : (userOffset + (br > b ? br : -b));
				}
			});

			// Adjust for tip dimensions
			position[ corner[precedance] ] -= dimensions[ precedance === X ? WIDTH : HEIGHT ];

			// Set and return new position
			tip.css({ top: '', bottom: '', left: '', right: '', margin: '' }).css(position);
			return position;
		},

		destroy: function()
		{
			// Unbind events
			tooltip.unbind(TIPNS);

			// Remove the tip element(s)
			if(elems.tip) {
				elems.tip.find('*').remove()
					.end().remove();
			}

			// Delete references
			delete self.corner;
			delete self.mimic;
			delete self.size;
		}
	});

	self.init();
}

TIP = PLUGINS.tip = function(api)
{
	var self = api.plugins.tip;

	return 'object' === typeof self ? self : (api.plugins.tip = new Tip(api));
};

// Initialize tip on render
TIP.initialize = 'render';

// Setup plugin sanitization options
TIP.sanitize = function(options)
{
	var style = options.style, opts;
	if(style && 'tip' in style) {
		opts = options.style.tip;
		if(typeof opts !== 'object'){ options.style.tip = { corner: opts }; }
		if(!(/string|boolean/i).test(typeof opts.corner)) { opts.corner = TRUE; }
		if(typeof opts.width !== 'number'){ delete opts.width; }
		if(typeof opts.height !== 'number'){ delete opts.height; }
		if(typeof opts.border !== 'number' && opts.border !== TRUE){ delete opts.border; }
		if(typeof opts.offset !== 'number'){ delete opts.offset; }
	}
};

// Extend original qTip defaults
$.extend(TRUE, QTIP.defaults, {
	style: {
		tip: {
			corner: TRUE,
			mimic: FALSE,
			width: 6,
			height: 6,
			border: TRUE,
			offset: 0
		}
	}
});


var MODAL, OVERLAY,
	MODALATTR = 'is-modal-qtip',
	MODALSELECTOR = selector + '['+MODALATTR+']',
	MODALNS = '.qtipmodal';

OVERLAY = function()
{
	var self = this,
		focusableElems = {},
		current, onLast,
		prevState, elem;

	// Modified code from jQuery UI 1.10.0 source
	// http://code.jquery.com/ui/1.10.0/jquery-ui.js
	function focusable(element) {
		// Use the defined focusable checker when possible
		if($.expr[':'].focusable) { return $.expr[':'].focusable; }

		var isTabIndexNotNaN = !isNaN($.attr(element, 'tabindex')),
			nodeName = element.nodeName.toLowerCase(),
			map, mapName, img;

		if('area' === nodeName) {
			map = element.parentNode;
			mapName = map.name;
			if(!element.href || !mapName || map.nodeName.toLowerCase() !== 'map') {
				return false;
			}
			img = $('img[usemap=#' + mapName + ']')[0];
			return !!img && img.is(':visible');
		}
		return (/input|select|textarea|button|object/.test( nodeName ) ?
				!element.disabled :
				'a' === nodeName ?
					element.href || isTabIndexNotNaN :
					isTabIndexNotNaN
			);
	}

	// Focus inputs using cached focusable elements (see update())
	function focusInputs(blurElems) {
		// Blurring body element in IE causes window.open windows to unfocus!
		if(focusableElems.length < 1 && blurElems.length) { blurElems.not('body').blur(); }

		// Focus the inputs
		else { focusableElems.first().focus(); }
	}

	// Steal focus from elements outside tooltip
	function stealFocus(event) {
		if(!elem.is(':visible')) { return; }

		var target = $(event.target),
			tooltip = current.elements.tooltip,
			container = target.closest(selector),
			targetOnTop;

		// Determine if input container target is above this
		targetOnTop = container.length < 1 ? FALSE :
			(parseInt(container[0].style.zIndex, 10) > parseInt(tooltip[0].style.zIndex, 10));

		// If we're showing a modal, but focus has landed on an input below
		// this modal, divert focus to the first visible input in this modal
		// or if we can't find one... the tooltip itself
		if(!targetOnTop && target.closest(selector)[0] !== tooltip[0]) {
			focusInputs(target);
		}

		// Detect when we leave the last focusable element...
		onLast = event.target === focusableElems[focusableElems.length - 1];
	}

	$.extend(self, {
		init: function()
		{
			// Create document overlay
			elem = self.elem = $('<div />', {
				id: 'qtip-overlay',
				html: '<div></div>',
				mousedown: function() { return FALSE; }
			})
			.hide();

			// Update position on window resize or scroll
			function resize() {
				var win = $(this);
				elem.css({
					height: win.height(),
					width: win.width()
				});
			}
			$(window).bind('resize'+MODALNS, resize);
			resize(); // Fire it initially too

			// Make sure we can't focus anything outside the tooltip
			$(document.body).bind('focusin'+MODALNS, stealFocus);

			// Apply keyboard "Escape key" close handler
			$(document).bind('keydown'+MODALNS, function(event) {
				if(current && current.options.show.modal.escape && event.keyCode === 27) {
					current.hide(event);
				}
			});

			// Apply click handler for blur option
			elem.bind('click'+MODALNS, function(event) {
				if(current && current.options.show.modal.blur) {
					current.hide(event);
				}
			});

			return self;
		},

		update: function(api) {
			// Update current API reference
			current = api;

			// Update focusable elements if enabled
			if(api.options.show.modal.stealfocus !== FALSE) {
				focusableElems = api.elements.tooltip.find('*').filter(function() {
					return focusable(this);
				});
			}
			else { focusableElems = []; }
		},

		toggle: function(api, state, duration)
		{
			var docBody = $(document.body),
				tooltip = api.elements.tooltip,
				options = api.options.show.modal,
				effect = options.effect,
				type = state ? 'show': 'hide',
				visible = elem.is(':visible'),
				modals = $(MODALSELECTOR).filter(':visible:not(:animated)').not(tooltip),
				zindex;

			// Set active tooltip API reference
			self.update(api);

			// If the modal can steal the focus...
			// Blur the current item and focus anything in the modal we an
			if(state && options.stealfocus !== FALSE) {
				focusInputs( $(':focus') );
			}

			// Toggle backdrop cursor style on show
			elem.toggleClass('blurs', options.blur);

			// Set position and append to body on show
			if(state) {
				elem.css({ left: 0, top: 0 })
					.appendTo(document.body);
			}

			// Prevent modal from conflicting with show.solo, and don't hide backdrop is other modals are visible
			if((elem.is(':animated') && visible === state && prevState !== FALSE) || (!state && modals.length)) {
				return self;
			}

			// Stop all animations
			elem.stop(TRUE, FALSE);

			// Use custom function if provided
			if($.isFunction(effect)) {
				effect.call(elem, state);
			}

			// If no effect type is supplied, use a simple toggle
			else if(effect === FALSE) {
				elem[ type ]();
			}

			// Use basic fade function
			else {
				elem.fadeTo( parseInt(duration, 10) || 90, state ? 1 : 0, function() {
					if(!state) { elem.hide(); }
				});
			}

			// Reset position and detach from body on hide
			if(!state) {
				elem.queue(function(next) {
					elem.css({ left: '', top: '' });
					if(!modals.length) { elem.detach(); }
					next();
				});
			}

			// Cache the state
			prevState = state;

			// If the tooltip is destroyed, set referenceto null
			if(current.destroyed) { current = NULL; }

			return self;
		}
	});

	self.init();
};
OVERLAY = new OVERLAY();

function Modal(api)
{
	var self = this,
		options = api.options.show.modal,
		elems = api.elements,
		tooltip = elems.tooltip,
		namespace = MODALNS + api.id,
		overlay;

	// Setup option set checks
	api.checks.modal = {
		'^show.modal.(on|blur)$': function() {
			// Initialise
			self.destroy();
			self.init();

			// Show the modal if not visible already and tooltip is visible
			overlay.toggle( tooltip.is(':visible') );
		}
	};

	$.extend(self, {
		init: function()
		{
			// If modal is disabled... return
			if(!options.on) { return self; }

			// Set overlay reference
			overlay = elems.overlay = OVERLAY.elem;

			// Add unique attribute so we can grab modal tooltips easily via a selector
			tooltip.attr(MODALATTR, TRUE)

			// Set z-index
			.css('z-index', PLUGINS.modal.zindex + $(MODALSELECTOR).length)

			// Apply our show/hide/focus modal events
			.bind('tooltipshow'+namespace+' tooltiphide'+namespace, function(event, api, duration) {
				var oEvent = event.originalEvent;

				// Make sure mouseout doesn't trigger a hide when showing the modal and mousing onto backdrop
				if(event.target === tooltip[0]) {
					if(oEvent && event.type === 'tooltiphide' && /mouse(leave|enter)/.test(oEvent.type) && $(oEvent.relatedTarget).closest(overlay[0]).length) {
						try { event.preventDefault(); } catch(e) {}
					}
					else if(!oEvent || (oEvent && !oEvent.solo)) {
						self.toggle(event, event.type === 'tooltipshow', duration);
					}
				}
			})

			// Adjust modal z-index on tooltip focus
			.bind('tooltipfocus'+namespace, function(event, api) {
				// If focus was cancelled before it reached us, don't do anything
				if(event.isDefaultPrevented() || event.target !== tooltip[0]) { return; }

				var qtips = $(MODALSELECTOR),

				// Keep the modal's lower than other, regular qtips
				newIndex = PLUGINS.modal.zindex + qtips.length,
				curIndex = parseInt(tooltip[0].style.zIndex, 10);

				// Set overlay z-index
				overlay[0].style.zIndex = newIndex - 1;

				// Reduce modal z-index's and keep them properly ordered
				qtips.each(function() {
					if(this.style.zIndex > curIndex) {
						this.style.zIndex -= 1;
					}
				});

				// Fire blur event for focused tooltip
				qtips.filter('.' + focusClass).qtip('blur', event.originalEvent);

				// Set the new z-index
				tooltip.addClass(focusClass)[0].style.zIndex = newIndex;

				// Set current
				OVERLAY.update(api);

				// Prevent default handling
				try { event.preventDefault(); } catch(e) {}
			})

			// Focus any other visible modals when this one hides
			.bind('tooltiphide'+namespace, function(event) {
				if(event.target === tooltip[0]) {
					$(MODALSELECTOR).filter(':visible').not(tooltip).last().qtip('focus', event);
				}
			});

			return self;
		},

		toggle: function(event, state, duration)
		{
			// Make sure default event hasn't been prevented
			if(event && event.isDefaultPrevented()) { return self; }

			// Toggle it
			OVERLAY.toggle(api, !!state, duration);

			return self;
		},

		destroy: function() {
			// Remove bound events
			$([document, tooltip]).removeAttr(MODALATTR).unbind(namespace);

			// Delete element reference
			OVERLAY.toggle(api, FALSE);
			delete elems.overlay;
		}
	});

	self.init();
}

MODAL = PLUGINS.modal = function(api) {
	var self = api.plugins.modal;

	return 'object' === typeof self ? self : (api.plugins.modal = new Modal(api));
};

// Setup sanitiztion rules
MODAL.sanitize = function(opts) {
	if(opts.show) {
		if(typeof opts.show.modal !== 'object') { opts.show.modal = { on: !!opts.show.modal }; }
		else if(typeof opts.show.modal.on === 'undefined') { opts.show.modal.on = TRUE; }
	}
};

// Base z-index for all modal tooltips (use qTip core z-index as a base)
MODAL.zindex = QTIP.zindex - 200;

// Plugin needs to be initialized on render
MODAL.initialize = 'render';

// Extend original api defaults
$.extend(TRUE, QTIP.defaults, {
	show: {
		modal: {
			on: FALSE,
			effect: TRUE,
			blur: TRUE,
			stealfocus: TRUE,
			escape: TRUE
		}
	}
});


PLUGINS.viewport = function(api, position, posOptions, targetWidth, targetHeight, elemWidth, elemHeight)
{
	var target = posOptions.target,
		tooltip = api.elements.tooltip,
		my = posOptions.my,
		at = posOptions.at,
		adjust = posOptions.adjust,
		method = adjust.method.split(' '),
		methodX = method[0],
		methodY = method[1] || method[0],
		viewport = posOptions.viewport,
		container = posOptions.container,
		cache = api.cache,
		tip = api.plugins.tip,
		adjusted = { left: 0, top: 0 },
		fixed, newMy, newClass;

	// If viewport is not a jQuery element, or it's the window/document or no adjustment method is used... return
	if(!viewport.jquery || target[0] === window || target[0] === document.body || adjust.method === 'none') {
		return adjusted;
	}

	// Cache our viewport details
	fixed = tooltip.css('position') === 'fixed';
	viewport = {
		elem: viewport,
		height: viewport[ (viewport[0] === window ? 'h' : 'outerH') + 'eight' ](),
		width: viewport[ (viewport[0] === window ? 'w' : 'outerW') + 'idth' ](),
		scrollleft: fixed ? 0 : viewport.scrollLeft(),
		scrolltop: fixed ? 0 : viewport.scrollTop(),
		offset: viewport.offset() || { left: 0, top: 0 }
	};
	container = {
		elem: container,
		scrollLeft: container.scrollLeft(),
		scrollTop: container.scrollTop(),
		offset: container.offset() || { left: 0, top: 0 }
	};

	// Generic calculation method
	function calculate(side, otherSide, type, adjust, side1, side2, lengthName, targetLength, elemLength) {
		var initialPos = position[side1],
			mySide = my[side], atSide = at[side],
			isShift = type === SHIFT,
			viewportScroll = -container.offset[side1] + viewport.offset[side1] + viewport['scroll'+side1],
			myLength = mySide === side1 ? elemLength : mySide === side2 ? -elemLength : -elemLength / 2,
			atLength = atSide === side1 ? targetLength : atSide === side2 ? -targetLength : -targetLength / 2,
			tipLength = tip && tip.size ? tip.size[lengthName] || 0 : 0,
			tipAdjust = tip && tip.corner && tip.corner.precedance === side && !isShift ? tipLength : 0,
			overflow1 = viewportScroll - initialPos + tipAdjust,
			overflow2 = initialPos + elemLength - viewport[lengthName] - viewportScroll + tipAdjust,
			offset = myLength - (my.precedance === side || mySide === my[otherSide] ? atLength : 0) - (atSide === CENTER ? targetLength / 2 : 0);

		// shift
		if(isShift) {
			tipAdjust = tip && tip.corner && tip.corner.precedance === otherSide ? tipLength : 0;
			offset = (mySide === side1 ? 1 : -1) * myLength - tipAdjust;

			// Adjust position but keep it within viewport dimensions
			position[side1] += overflow1 > 0 ? overflow1 : overflow2 > 0 ? -overflow2 : 0;
			position[side1] = Math.max(
				-container.offset[side1] + viewport.offset[side1] + (tipAdjust && tip.corner[side] === CENTER ? tip.offset : 0),
				initialPos - offset,
				Math.min(
					Math.max(-container.offset[side1] + viewport.offset[side1] + viewport[lengthName], initialPos + offset),
					position[side1]
				)
			);
		}

		// flip/flipinvert
		else {
			// Update adjustment amount depending on if using flipinvert or flip
			adjust *= (type === FLIPINVERT ? 2 : 0);

			// Check for overflow on the left/top
			if(overflow1 > 0 && (mySide !== side1 || overflow2 > 0)) {
				position[side1] -= offset + adjust;
				newMy['invert'+side](side1);
			}

			// Check for overflow on the bottom/right
			else if(overflow2 > 0 && (mySide !== side2 || overflow1 > 0)  ) {
				position[side1] -= (mySide === CENTER ? -offset : offset) + adjust;
				newMy['invert'+side](side2);
			}

			// Make sure we haven't made things worse with the adjustment and reset if so
			if(position[side1] < viewportScroll && -position[side1] > overflow2) {
				position[side1] = initialPos; newMy = my.clone();
			}
		}

		return position[side1] - initialPos;
	}

	// Set newMy if using flip or flipinvert methods
	if(methodX !== 'shift' || methodY !== 'shift') { newMy = my.clone(); }

	// Adjust position based onviewport and adjustment options
	adjusted = {
		left: methodX !== 'none' ? calculate( X, Y, methodX, adjust.x, LEFT, RIGHT, WIDTH, targetWidth, elemWidth ) : 0,
		top: methodY !== 'none' ? calculate( Y, X, methodY, adjust.y, TOP, BOTTOM, HEIGHT, targetHeight, elemHeight ) : 0
	};

	// Set tooltip position class if it's changed
	if(newMy && cache.lastClass !== (newClass = NAMESPACE + '-pos-' + newMy.abbrev())) {
		tooltip.removeClass(api.cache.lastClass).addClass( (api.cache.lastClass = newClass) );
	}

	return adjusted;
};
PLUGINS.imagemap = function(api, area, corner, adjustMethod)
{
	if(!area.jquery) { area = $(area); }

	var cache = (api.cache.areas = {}),
		shape = (area[0].shape || area.attr('shape')).toLowerCase(),
		coordsString = area[0].coords || area.attr('coords'),
		baseCoords = coordsString.split(','),
		coords = [],
		image = $('img[usemap="#'+area.parent('map').attr('name')+'"]'),
		imageOffset = image.offset(),
		result = {
			width: 0, height: 0,
			position: {
				top: 1e10, right: 0,
				bottom: 0, left: 1e10
			}
		},
		i = 0, next = 0, dimensions;

	// POLY area coordinate calculator
	//	Special thanks to Ed Cradock for helping out with this.
	//	Uses a binary search algorithm to find suitable coordinates.
	function polyCoordinates(result, coords, corner)
	{
		var i = 0,
			compareX = 1, compareY = 1,
			realX = 0, realY = 0,
			newWidth = result.width,
			newHeight = result.height;

		// Use a binary search algorithm to locate most suitable coordinate (hopefully)
		while(newWidth > 0 && newHeight > 0 && compareX > 0 && compareY > 0)
		{
			newWidth = Math.floor(newWidth / 2);
			newHeight = Math.floor(newHeight / 2);

			if(corner.x === LEFT){ compareX = newWidth; }
			else if(corner.x === RIGHT){ compareX = result.width - newWidth; }
			else{ compareX += Math.floor(newWidth / 2); }

			if(corner.y === TOP){ compareY = newHeight; }
			else if(corner.y === BOTTOM){ compareY = result.height - newHeight; }
			else{ compareY += Math.floor(newHeight / 2); }

			i = coords.length; while(i--)
			{
				if(coords.length < 2){ break; }

				realX = coords[i][0] - result.position.left;
				realY = coords[i][1] - result.position.top;

				if((corner.x === LEFT && realX >= compareX) ||
				(corner.x === RIGHT && realX <= compareX) ||
				(corner.x === CENTER && (realX < compareX || realX > (result.width - compareX))) ||
				(corner.y === TOP && realY >= compareY) ||
				(corner.y === BOTTOM && realY <= compareY) ||
				(corner.y === CENTER && (realY < compareY || realY > (result.height - compareY)))) {
					coords.splice(i, 1);
				}
			}
		}

		return { left: coords[0][0], top: coords[0][1] };
	}

	// Make sure we account for padding and borders on the image
	imageOffset.left += Math.ceil((image.outerWidth() - image.width()) / 2);
	imageOffset.top += Math.ceil((image.outerHeight() - image.height()) / 2);

	// Parse coordinates into proper array
	if(shape === 'poly') {
		i = baseCoords.length; while(i--)
		{
			next = [ parseInt(baseCoords[--i], 10), parseInt(baseCoords[i+1], 10) ];

			if(next[0] > result.position.right){ result.position.right = next[0]; }
			if(next[0] < result.position.left){ result.position.left = next[0]; }
			if(next[1] > result.position.bottom){ result.position.bottom = next[1]; }
			if(next[1] < result.position.top){ result.position.top = next[1]; }

			coords.push(next);
		}
	}
	else {
		i = -1; while(i++ < baseCoords.length) {
			coords.push( parseInt(baseCoords[i], 10) );
		}
	}

	// Calculate details
	switch(shape)
	{
		case 'rect':
			result = {
				width: Math.abs(coords[2] - coords[0]),
				height: Math.abs(coords[3] - coords[1]),
				position: {
					left: Math.min(coords[0], coords[2]),
					top: Math.min(coords[1], coords[3])
				}
			};
		break;

		case 'circle':
			result = {
				width: coords[2] + 2,
				height: coords[2] + 2,
				position: { left: coords[0], top: coords[1] }
			};
		break;

		case 'poly':
			result.width = Math.abs(result.position.right - result.position.left);
			result.height = Math.abs(result.position.bottom - result.position.top);

			if(corner.abbrev() === 'c') {
				result.position = {
					left: result.position.left + (result.width / 2),
					top: result.position.top + (result.height / 2)
				};
			}
			else {
				// Calculate if we can't find a cached value
				if(!cache[corner+coordsString]) {
					result.position = polyCoordinates(result, coords.slice(), corner);

					// If flip adjustment is enabled, also calculate the closest opposite point
					if(adjustMethod && (adjustMethod[0] === 'flip' || adjustMethod[1] === 'flip')) {
						result.offset = polyCoordinates(result, coords.slice(), {
							x: corner.x === LEFT ? RIGHT : corner.x === RIGHT ? LEFT : CENTER,
							y: corner.y === TOP ? BOTTOM : corner.y === BOTTOM ? TOP : CENTER
						});

						result.offset.left -= result.position.left;
						result.offset.top -= result.position.top;
					}

					// Store the result
					cache[corner+coordsString] = result;
				}

				// Grab the cached result
				result = cache[corner+coordsString];
			}

			result.width = result.height = 0;
		break;
	}

	// Add image position to offset coordinates
	result.position.left += imageOffset.left;
	result.position.top += imageOffset.top;

	return result;
};


var IE6;

/*
 * BGIFrame adaption (http://plugins.jquery.com/project/bgiframe)
 * Special thanks to Brandon Aaron
 */
function Ie6(api)
{
	var self = this,
		elems = api.elements,
		options = api.options,
		tooltip = elems.tooltip,
		namespace = '.ie6-' + api.id,
		bgiframe = $('select, object').length < 1,
		isDrawing = 0,
		modalProcessed = FALSE,
		redrawContainer;

	api.checks.ie6 = {
		'^content|style$': function(obj, o, v){ redraw(); }
	};

	$.extend(self, {
		init: function()
		{
			var win = $(window), scroll;

			// Create the BGIFrame element if needed
			if(bgiframe) {
				elems.bgiframe = $('<iframe class="qtip-bgiframe" frameborder="0" tabindex="-1" src="javascript:\'\';" ' +
					' style="display:block; position:absolute; z-index:-1; filter:alpha(opacity=0); ' +
						'-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";"></iframe>');

				// Append the new element to the tooltip
				elems.bgiframe.appendTo(tooltip);

				// Update BGIFrame on tooltip move
				tooltip.bind('tooltipmove'+namespace, self.adjustBGIFrame);
			}

			// redraw() container for width/height calculations
			redrawContainer = $('<div/>', { id: 'qtip-rcontainer' })
				.appendTo(document.body);

			// Set dimensions
			self.redraw();

			// Fixup modal plugin if present too
			if(elems.overlay && !modalProcessed) {
				scroll = function() {
					elems.overlay[0].style.top = win.scrollTop() + 'px';
				};
				win.bind('scroll.qtip-ie6, resize.qtip-ie6', scroll);
				scroll(); // Fire it initially too

				elems.overlay.addClass('qtipmodal-ie6fix'); // Add fix class

				modalProcessed = TRUE; // Set flag
			}
		},

		adjustBGIFrame: function()
		{
			var dimensions = api.get('dimensions'), // Determine current tooltip dimensions
				plugin = api.plugins.tip,
				tip = elems.tip,
				tipAdjust, offset;

			// Adjust border offset
			offset = parseInt(tooltip.css('border-left-width'), 10) || 0;
			offset = { left: -offset, top: -offset };

			// Adjust for tips plugin
			if(plugin && tip) {
				tipAdjust = (plugin.corner.precedance === 'x') ? ['width', 'left'] : ['height', 'top'];
				offset[ tipAdjust[1] ] -= tip[ tipAdjust[0] ]();
			}

			// Update bgiframe
			elems.bgiframe.css(offset).css(dimensions);
		},

		// Max/min width simulator function
		redraw: function()
		{
			if(api.rendered < 1 || isDrawing) { return self; }

			var style = options.style,
				container = options.position.container,
				perc, width, max, min;

			// Set drawing flag
			isDrawing = 1;

			// If tooltip has a set height/width, just set it... like a boss!
			if(style.height) { tooltip.css(HEIGHT, style.height); }
			if(style.width) { tooltip.css(WIDTH, style.width); }

			// Simulate max/min width if not set width present...
			else {
				// Reset width and add fluid class
				tooltip.css(WIDTH, '').appendTo(redrawContainer);

				// Grab our tooltip width (add 1 if odd so we don't get wrapping problems.. huzzah!)
				width = tooltip.width();
				if(width % 2 < 1) { width += 1; }

				// Grab our max/min properties
				max = tooltip.css('max-width') || '';
				min = tooltip.css('min-width') || '';

				// Parse into proper pixel values
				perc = (max + min).indexOf('%') > -1 ? container.width() / 100 : 0;
				max = ((max.indexOf('%') > -1 ? perc : 1) * parseInt(max, 10)) || width;
				min = ((min.indexOf('%') > -1 ? perc : 1) * parseInt(min, 10)) || 0;

				// Determine new dimension size based on max/min/current values
				width = max + min ? Math.min(Math.max(width, min), max) : width;

				// Set the newly calculated width and remvoe fluid class
				tooltip.css(WIDTH, Math.round(width)).appendTo(container);
			}

			// Set drawing flag
			isDrawing = 0;

			return self;
		},

		destroy: function()
		{
			// Remove iframe
			if(bgiframe) { elems.bgiframe.remove(); }

			// Remove bound events
			tooltip.unbind(namespace);
		}
	});

	self.init();
}

IE6 = PLUGINS.ie6 = function(api)
{
	var self = api.plugins.ie6;

	// Proceed only if the browser is IE6
	if(PLUGINS.ie !== 6) { return FALSE; }

	return 'object' === typeof self ? self : (api.plugins.ie6 = new Ie6(api));
};

IE6.initialize = 'render';


}));
}( window, document ));

		if (this.dust) {
			this.dust.isDebug    = true;
			this.dust.debugLevel = 'DEBUG';
		}

		DarkTip.init();
	}
}]);

DarkTip.registerModule('wow', {

	'triggers': {
		'apiParams': {
			'callback': 'jsonp'
		}
	},

	'maps': {
		'host': {
			'region': {
				'us.battle.net'       : 'us',
				'eu.battle.net'       : 'eu',
				'kr.battle.net'       : 'kr',
				'tw.battle.net'       : 'tw',
				'cn.battle.net'       : 'cn',
				'www.battlenet.com.cn': 'cn'
			}
		},
		'region': {
			'host': {
				'us': 'us.battle.net',
				'eu': 'eu.battle.net',
				'kr': 'kr.battle.net',
				'tw': 'tw.battle.net',
				'cn': 'www.battlenet.com.cn' /* 'cn.battle.net' */
			},
			'mediahost': {
				'us': 'us.media.blizzard.com',
				'eu': 'eu.media.blizzard.com',
				'kr': 'kr.media.blizzard.com',
				'tw': 'us.media.blizzard.com',
				'cn': 'content.battlenet.com.cn'
			}
		},
		'region+lang': {
			'locale': {
				'us+en': 'en_US',
				'us+es': 'es_MX',
				'us+pt': 'pt_BR',
				'eu+en': 'en_GB',
				'eu+es': 'es_ES',
				'eu+fr': 'fr_FR',
				'eu+ru': 'ru_RU',
				'eu+de': 'de_DE',
				'eu+pt': 'pt_PT',
				'eu+it': 'it_IT',
				'kr+ko': 'ko_KR',
				'kr+en': 'en_US',
				'tw+zh': 'zh_TW',
				'tw+en': 'en_US',
				'cn+en': 'en_US',
				'cn+zh': 'zh_CN'
			}
		}
	},

	'layout': {
		'css': {
			'class': 'darktip-tooltip-wow'
		}
	},

	'prepareData': function(state) {
		if(Object.keys(state['data']).length === 0) {
			return false;
		}
		return state['data'];
	},

	'enhanceData': function(module, params, data) {
		var add = {
			'_meta': {
				'path_host'      : 'http://' + params['host'],
				'path_host_media': 'http://' + DarkTip.map('wow', 'maps.region.mediahost', params['region']),
				'region'         : params['region'],
				'locale'         : params['locale'],
				'module'         : module
			}
		};
		DarkTip.jq.extend(true, data, add);
		return data;
	},

	'templates': {
		'tools': {
			'_renderDateTime': function(datetime) {
				var date = new Date(datetime);
				var temp = {
					'year'  : date.getFullYear(),
					'month' : date.getMonth() + 1,
					'day'   : date.getDate(),
					'hour'  : date.getHours(),
					'minute': date.getMinutes(),
					'second': date.getSeconds(),
					'ampm'  : { 'flag': '', 'hour': 0 }
				};
				if(temp['hour'] == 0)
				{
					temp['ampm']['flag'] = 'AM';
					temp['ampm']['hour'] = temp['hour'] + 12;
				}
				else if(temp['hour'] < 12)
				{
					temp['ampm']['flag'] = 'AM';
					temp['ampm']['hour'] = temp['hour'];
				}
				else if(temp['hour'] == 12)
				{
					temp['ampm']['flag'] = 'PM';
					temp['ampm']['hour'] = temp['hour'];
				}
				else
				{
					temp['ampm']['flag'] = 'PM';
					temp['ampm']['hour'] = temp['hour'] - 12;
				}
				return this._loc('datetime', temp);
			},
			'_padZero': function(number, width) {
				width -= number.toString().length;
				if(width > 0)
				{
					return new Array(width + (/\./.test(number) ? 2 : 1)).join('0') + number;
				}
				return number;
			}
		}
	},

	'i18n': {
		'en_US': {
			'loading'  : 'Loading wow data...',
			'not-found': 'Data not found',
			'not-used' : 'Not used',
			'label'    : {
				'slot'       : 'Slot:',
				'realm'      : 'Realm:',
				'quest'      : 'Quest:',
				'region'     : 'Region:',
				'item'       : 'Item:',
				'character'  : 'Character:',
				'guild'      : 'Guild:',
				'teamname'   : 'Team name:',
				'teamsize'   : 'Team size:',
				'achievement': 'Achievement:',
				'spell'      : 'Spell:'
			},
			'factionSide': {
				'0'       : 'Alliance',
				'1'       : 'Horde',
				'alliance': 'Alliance',
				'horde'   : 'Horde'
			},
			'characterClass': {
				'1' : { '0': 'Warrior',      '1': 'Warrior' },
				'2' : { '0': 'Paladin',      '1': 'Paladin' },
				'3' : { '0': 'Hunter',       '1': 'Hunter' },
				'4' : { '0': 'Rogue',        '1': 'Rogue' },
				'5' : { '0': 'Priest',       '1': 'Priest' },
				'6' : { '0': 'Death Knight', '1': 'Death Knight' },
				'7' : { '0': 'Shaman',       '1': 'Shaman' },
				'8' : { '0': 'Mage',         '1': 'Mage' },
				'9' : { '0': 'Warlock',      '1': 'Warlock' },
				'10': { '0': 'Monk',         '1': 'Monk' },
				'11': { '0': 'Druid',        '1': 'Druid' }
			},
			'characterRace': {
				'1' : { '0': 'Human',     '1': 'Human' },
				'2' : { '0': 'Orc',       '1': 'Orc' },
				'3' : { '0': 'Dwarf',     '1': 'Dwarf' },
				'4' : { '0': 'Night Elf', '1': 'Night Elf' },
				'5' : { '0': 'Forsaken',  '1': 'Forsaken' },
				'6' : { '0': 'Tauren',    '1': 'Tauren' },
				'7' : { '0': 'Gnome',     '1': 'Gnome' },
				'8' : { '0': 'Troll',     '1': 'Troll' },
				'9' : { '0': 'Goblin',    '1': 'Goblin' },
				'10': { '0': 'Blood Elf', '1': 'Blood Elf' },
				'11': { '0': 'Draenei',   '1': 'Draenei' },
				'22': {	'0': 'Worgen',    '1': 'Worgen' },
				'24': {	'0': 'Pandaren',  '1': 'Pandaren' },
				'25': {	'0': 'Pandaren',  '1': 'Pandaren' },
				'26': {	'0': 'Pandaren',  '1': 'Pandaren' }
			},
			'characterSkill': {
				'129': 'First Aid',
				'164': 'Blacksmithing',
				'165': 'Leatherworking',
				'171': 'Alchemy',
				'182': 'Herbalism',
				'185': 'Cooking',
				'186': 'Mining',
				'197': 'Tailoring',
				'202': 'Engineering',
				'333': 'Enchanting',
				'356': 'Fishing',
				'393': 'Skinning',
				'755': 'Jewelcrafting',
				'762': 'Riding',
				'773': 'Inscription',
				'794': 'Archeology'
			},
			'datetime': '<%= this._loc("date") %> <%= this._loc("time") %> ',
			'date'    : '<%= this._padZero(this["month"], 2) %>/<%= this._padZero(this["day"], 2) %>/<%= this["year"] %>',
			'time'    : '<%= this._padZero(this["ampm"]["hour"], 2) %>:<%= this._padZero(this["minute"], 2) %>:<%= this._padZero(this["second"], 2) %> <%= this["ampm"]["flag"] %>'
		},
		'de_DE': {
			'loading'  : 'Lade WoW Daten...',
			'not-found': 'Keine Daten gefunden',
			'not-used' : 'Ungenutzt',
			'label'    : {
				'slot'       : 'Slot:',
				'realm'      : 'Realm:',
				'quest'      : 'Quest:',
				'region'     : 'Region:',
				'item'       : 'Gegenstand:',
				'character'  : 'Charakter:',
				'guild'      : 'Gilde:',
				'teamname'   : 'Teamname:',
				'teamsize'   : 'Teamgr&ouml;&szlig;e:',
				'achievement': 'Erfolg:',
				'spell'      : 'Zauber:'
			},
			'factionSide': {
				'0'       :'Allianz',
				'1'       :'Horde',
				'alliance':'Allianz',
				'horde'   :'Horde'
			},
			'characterClass': {
				'1' : { '0': 'Krieger',      '1': 'Kriegerin' },
				'2' : { '0': 'Paladin',      '1': 'Paladin' },
				'3' : { '0': 'J&auml;ger',        '1': 'J&auml;gerin' },
				'4' : { '0': 'Schurke',      '1': 'Schurkin' },
				'5' : { '0': 'Priester',     '1': 'Priesterin' },
				'6' : { '0': 'Todesritter',  '1': 'Todesritter' },
				'7' : { '0': 'Schamane',     '1': 'Schamanin' },
				'8' : { '0': 'Magier',       '1': 'Magierin' },
				'9' : { '0': 'Hexenmeister', '1': 'Hexenmeisterin' },
				'10': { '0': 'Mönch',        '1': 'Mönch' },
				'11': { '0': 'Druide',       '1': 'Druidin' }
			},
			'characterRace': {
				'1' : { '0': 'Mensch',    '1': 'Mensch' },
				'2' : { '0': 'Orc',       '1': 'Orc' },
				'3' : { '0': 'Zwerg',     '1': 'Zwerg' },
				'4' : { '0': 'Nachtelf',  '1': 'Nachtelfe' },
				'5' : { '0': 'Untoter',   '1': 'Untote' },
				'6' : { '0': 'Tauren',    '1': 'Tauren' },
				'7' : { '0': 'Gnom',      '1': 'Gnom' },
				'8' : { '0': 'Troll',     '1': 'Troll' },
				'9' : { '0': 'Goblin',    '1': 'Goblin' },
				'10': { '0': 'Blutelf',   '1': 'Blutelfe' },
				'11': { '0': 'Draenei',   '1': 'Draenei' },
				'22': { '0': 'Worgen',    '1': 'Worgen' },
				'24': {	'0': 'Pandaren',  '1': 'Pandarin' },
				'25': {	'0': 'Pandaren',  '1': 'Pandarin' },
				'26': {	'0': 'Pandaren',  '1': 'Pandarin' }
			},
			'characterSkill': {
				'129': 'Erste Hilfe',
				'164': 'Schmiedekunst',
				'165': 'Lederverarbeitung',
				'171': 'Alchemie',
				'182': 'Kr&auml;uterkunde',
				'185': 'Kochkunst',
				'186': 'Bergbau',
				'197': 'Schneiderei',
				'202': 'Ingenieurskunst',
				'333': 'Verzauberkunst',
				'356': 'Angeln',
				'393': 'K&uuml;rschnerei',
				'755': 'Juwelenschleifen',
				'762': 'Reiten',
				'773': 'Inschriftenkunde',
				'794': 'Arch&auml;ologie'
			},
			'datetime': '<%= this._loc("date") %> <%= this._loc("time") %> ',
			'date'    : '<%= this._padZero(this["day"], 2) %>.<%= this._padZero(this["month"], 2) %>.<%= this["year"] %>',
			'time'    : '<%= this._padZero(this["hour"], 2) %>:<%= this._padZero(this["minute"], 2) %>:<%= this._padZero(this["second"], 2) %>'
		},
		'fr_FR': {
			'loading'  : 'Chargement des donn&eacute;es WoW...',
			'not-found': 'WoW Aucune donn&eacute;e trouv&eacute;e',
			'not-used' : 'Inutilis&eacute;es',
			'label'    : {
				'slot'       : 'Slot :',
				'realm'      : 'Royaume :',
				'quest'      : 'Qu&ecirc;te :',
				'region'     : 'R&eacute;gion :',
				'item'       : 'Objet :',
				'character'  : 'Personnage :',
				'guild'      : 'Guilde :',
				'teamname'   : 'Nom :',
				'teamsize'   : 'Taille :',
				'achievement': 'Avantage :',
				'spell'      : 'Sorts :'
			},
			'factionSide': {
				'0'       : 'Alliance',
				'1'       : 'Horde',
				'alliance': 'Alliance',
				'horde'   : 'Horde'
			},
			'characterClass': {
				'1' : { '0': 'Guerrier',             '1': 'Guerri&egrave;re' },
				'2' : { '0': 'Paladin',              '1': 'Paladin' },
				'3' : { '0': 'Chasseur',             '1': 'Chasseresse' },
				'4' : { '0': 'Voleur',               '1': 'Voleuse' },
				'5' : { '0': 'Pr&ecirc;tre',         '1': 'Pr&ecirc;tresse' },
				'6' : { '0': 'Chevalier de la mort', '1': 'Chevalier de la mort' },
				'7' : { '0': 'Chaman',               '1': 'Chamane' },
				'8' : { '0': 'Mage',                 '1': 'Mage' },
				'9' : { '0': 'D&eacute;moniste',     '1': 'D&eacute;moniste' },
				'10': { '0': 'Moine',                '1': 'Moniale' },
				'11': { '0': 'Druide',               '1': 'Druidesse' }
			},
			'characterRace': {
				'1' : { '0': 'Humain',          '1': 'Humaine' },
				'2' : { '0': 'Orc',             '1': 'Orque' },
				'3' : { '0': 'Nain',            '1': 'Naine' },
				'4' : { '0': 'Elfe de la nuit', '1': 'Elfe de la nuit' },
				'5' : { '0': 'Mort-vivant',     '1': 'Morte-vivante' },
				'6' : { '0': 'Tauren',          '1': 'Tauren' },
				'7' : { '0': 'Gnome',           '1': 'Gnome' },
				'8' : { '0': 'Troll',           '1': 'Trollesse' },
				'9' : { '0': 'Gobelin',         '1': 'Gobeline' },
				'10': { '0': 'Elfe de sang',    '1': 'Elfe de sang' },
				'11': { '0': 'Draeneï',         '1': 'Draeneï' },
				'22': { '0': 'Worgen',          '1': 'Worgen' },
				'24': {	'0': 'Pandaren',        '1': 'Pandarène' },
				'25': {	'0': 'Pandaren',        '1': 'Pandarène' },
				'26': {	'0': 'Pandaren',        '1': 'Pandarène' }
			},
			'characterSkill': {
				'129': 'Secourisme',
				'164': 'Forge',
				'165': 'Travail du cuir',
				'171': 'Alchimie',
				'182': 'Herboristerie',
				'185': 'Cuisine',
				'186': 'Minage',
				'197': 'Couture',
				'202': 'Ing&eacute;nierie',
				'333': 'Enchantement',
				'356': 'P&ecirc;che',
				'393': 'D&eacute;peçage',
				'755': 'Joaillerie',
				'762': 'Riding',
				'773': 'Calligraphie',
				'794': 'Arch&eacute;ologie'
			},
			'datetime': '<%= this._loc("date") %> <%= this._loc("time") %> ',
			'date'    : '<%= this._padZero(this["day"], 2) %>-<%= this._padZero(this["month"], 2) %>-<%= this["year"] %>',
			'time'    : '<%= this._padZero(this["hour"], 2) %>:<%= this._padZero(this["minute"], 2) %>:<%= this._padZero(this["second"], 2) %>'
		},
		'es_ES': {
			'loading'  : 'WoW carga de datos...',
			'not-found': 'No se encontraron datos',
			'not-used' : 'Sin usar',
			'label'    : {
				'slot'       : 'Ranura:',
				'realm'      : 'Reinos:',
				'quest'      : 'Misi&oacute;n:',
				'region'     : 'Regi&oacute;n:',
				'item'       : 'Objeto:',
				'character'  : 'Personaje:',
				'guild'      : 'Hermandad:',
				'teamname'   : 'Nombre:',
				'teamsize'   : 'Tama&ntilde;o:',
				'achievement': 'Ventaja:',
				'spell'      : 'Hechizos:'
			},
			'factionSide': {
				'0'       : 'Alianza',
				'1'       : 'Horda',
				'alliance': 'Alianza',
				'horde'   : 'Horda'
			},
			'characterClass': {
				'1' : { '0': 'Guerrero',               '1': 'Guerrera' },
				'2' : { '0': 'Palad&iacute;n',         '1': 'Palad&iacute;n' },
				'3' : { '0': 'Cazador',                '1': 'Cazadora' },
				'4' : { '0': 'P&iacute;caro',          '1': 'P&iacute;cara' },
				'5' : { '0': 'Sacerdote',              '1': 'Sacerdotisa' },
				'6' : { '0': 'Caballero de la Muerte', '1': 'Caballero de la Muerte' },
				'7' : { '0': 'Chamán',                 '1': 'Chamán' },
				'8' : { '0': 'Mago',                   '1': 'Maga' },
				'9' : { '0': 'Brujo',                  '1': 'Bruja' },
				'10': { '0': 'Monje',                  '1': 'Monje' },
				'11': { '0': 'Druida',                 '1': 'Druida' }
			},
			'characterRace': {
				'1' : { '0': 'Humano',           '1': 'Humana' },
				'2' : { '0': 'Orco',             '1': 'Orco' },
				'3' : { '0': 'Enano',            '1': 'Enana' },
				'4' : { '0': 'Elfo de la noche', '1': 'Elfa de la noche' },
				'5' : { '0': 'No-muerto',        '1': 'No-muerta' },
				'6' : { '0': 'Tauren',           '1': 'Tauren' },
				'7' : { '0': 'Gnomo',            '1': 'Gnoma' },
				'8' : { '0': 'Trol',             '1': 'Trol' },
				'9' : { '0': 'Goblin',           '1': 'Goblin' },
				'10': { '0': 'Elfo de sangre',   '1': 'Elfa de sangre' },
				'11': { '0': 'Draenei',          '1': 'Draenei' },
				'22': { '0': 'Huargen',          '1': 'Huargen' },
				'24': {	'0': 'Pandaren',         '1': 'Pandaren' },
				'25': {	'0': 'Pandaren',         '1': 'Pandaren' },
				'26': {	'0': 'Pandaren',         '1': 'Pandaren' }
			},
			'characterSkill': {
				'129': 'Primeros auxilios',
				'164': 'Herrer&iacute;a',
				'165': 'Peleter&iacute;a',
				'171': 'Alquimia',
				'182': 'Herborister&iacute;a',
				'185': 'Cocina',
				'186': 'Miner&iacute;a',
				'197': 'Sastrer&iacute;a',
				'202': 'Ingenier&iacute;a',
				'333': 'Encantamiento',
				'356': 'Pesca',
				'393': 'Desuello',
				'755': 'Joyer&iacute;a',
				'762': 'Equitaci&oacute;n',
				'773': 'Inscripci&oacute;n',
				'794': 'Arqueolog&iacute;a'
			},
			'datetime': '<%= this._loc("date") %> <%= this._loc("time") %> ',
			'date'    : '<%= this._padZero(this["day"], 2) %>/<%= this._padZero(this["month"], 2) %>/<%= this["year"] %>',
			'time'    : '<%= this._padZero(this["hour"], 2) %>:<%= this._padZero(this["minute"], 2) %>:<%= this._padZero(this["second"], 2) %>'
		},
		'it_IT': {
			'loading'  : 'Caricamento dei dati...',
			'not-found': 'Dati non trovati',
			'not-used' : 'Non utilizzato',
			'label'    : {
				'slot'       : 'Scomparto:',
				'realm'      : 'Reame:',
				'quest'      : 'Missione:',
				'region'     : 'Regione:',
				'item'       : 'Oggetto:',
				'character'  : 'Personaggio:',
				'guild'      : 'Gilda:',
				'teamname'   : 'Nome Squadra:',
				'teamsize'   : 'Dimension Squadra:',
				'achievement': 'Impresa:',
				'spell'      : 'Incantesimo:'
			},
			'factionSide'   : {
				'0'       : 'Alleanza',
				'1'       : 'Orda',
				'alliance': 'Alleanza',
				'horde'   : 'Orda'
			},
			'characterClass': {
				'1' : { '0': 'Guerriero',      '1': 'Guerriera' },
				'2' : { '0': 'Paladino',      '1': 'Paladina' },
				'3' : { '0': 'Cacciatore',       '1': 'Cacciatrice' },
				'4' : { '0': 'Ladro',        '1': 'Ladra' },
				'5' : { '0': 'Sacerdote',       '1': 'Sacerdotessa' },
				'6' : { '0': 'Cavaliere della Morte', '1': 'Cavaliera della Morte' },
				'7' : { '0': 'Sciamano',       '1': 'Sciamana' },
				'8' : { '0': 'Mago',         '1': 'Maga' },
				'9' : { '0': 'Sregone',      '1': 'Strega' },
				'10': { '0': 'Monaco',         '1': 'Monaca' },
				'11': { '0': 'Druido',        '1': 'Druida' }
			},
			'characterRace' : {
				'1' : { '0': 'Umano',     '1': 'Umana' },
				'2' : { '0': 'Orco',       '1': 'Orca' },
				'3' : { '0': 'Nano',     '1': 'Nana' },
				'4' : { '0': 'Elfo della Notte', '1': 'Elfa della Notte' },
				'5' : { '0': 'Non Morto',  '1': 'Non Morta' },
				'6' : { '0': 'Tauren',    '1': 'Tauren' },
				'7' : { '0': 'Gnomo',     '1': 'Gnoma' },
				'8' : { '0': 'Troll',     '1': 'Troll' },
				'9' : { '0': 'Goblin',    '1': 'Goblin' },
				'10': { '0': 'Elfo del Sangue', '1': 'Elfa del Sangue' },
				'11': { '0': 'Draenei',   '1': 'Draenei' },
				'22': {	'0': 'Worgen',    '1': 'Worgen' },
				'24': {	'0': 'Pandaren',  '1': 'Pandaren' },
				'25': {	'0': 'Pandaren',  '1': 'Pandaren' },
				'26': {	'0': 'Pandaren',  '1': 'Pandaren' }
			},
			'characterSkill'   : {
				'129': 'Primo Soccorso',
				'164': 'Forgiatura',
				'165': 'Conciatura',
				'171': 'Alchimia',
				'182': 'Erbalismo',
				'185': 'Cucina',
				'186': 'Estrazione',
				'197': 'Sartoria',
				'202': 'Ingegneria',
				'333': 'Incantamento',
				'356': 'Pesca',
				'393': 'Scuoiatura',
				'755': 'Oreficeria',
				'762': 'Cavalcatura',
				'773': 'Runografia',
				'794': 'Archeologia'
			},
			'datetime': '<%= this._loc("date") %> <%= this._loc("time") %> ',
			'date'    : '<%= this._padZero(this["month"], 2) %>/<%= this._padZero(this["day"], 2) %>/<%= this["year"] %>',
			'time'    : '<%= this._padZero(this["ampm"]["hour"], 2) %>:<%= this._padZero(this["minute"], 2) %>:<%= this._padZero(this["second"], 2) %> <%= this["ampm"]["flag"] %>'
		}
	}

});

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
				'<div class="darktip-headline-right darktip-crealmtype-<%= this["type"] %>"><%= this._loc("type." + this["type"]) %></div>'+
				'<div class="darktip-row darktip-headline"><%= this["name"] %> <span class="darktip-sub">(<%= this._loc("locales." + this["locale"]) %>)</span></div>' +
				'<div class="darktip-row darktip-highlight-strong"><%= this["battlegroup"] %></div>' +
				'<div class="darktip-row">' +
					'<span class="darktip-crealmstatus-<%= this["status"] %>"><%= this._loc("status." + this["status"]) %></span>' +
					'<% if(this["queue"]) { %> (<span class="darktip-crealmqueue-<%= this["queue"] %>"><%= this._loc("queue." + this["queue"]) %></span>)<% } %>' +
				'</div>' +
				'<div class="darktip-row"><%= this._loc("population." + this["population"]) %></div>' +
				'<div class="darktip-row"><%= this._loc("timezone") %>: <%= this._loc("timezones." + this["timezone"]) %></div>' +
				'<%= this._sub("templates.fragments.worldPvpZones") %>' +
				'<% if(this["_meta"]["extendedActive"]) { %>' +
					'<div class="darktip-row darktip-info-meta darktip-only-s"><%= this._loc("extendedInactive") %></div>' +
					'<div class="darktip-row darktip-info-meta darktip-only-x"><%= this._loc("extendedActive") %></div>' +
				'<% } %>' +
			'</div>'
		),
		'404': (
			'<div class="tooltip-realm darktip-tooltip-404">' +
				'<div class="darktip-title">404<span class="darktip-sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.realm") %></span> <span class="value"><%= this["realm"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
			'</div>'
		),
		'fragments': {
			'worldPvpZones': (
				'<div class="darktip-block">' +
				'<% if(this["wintergrasp"]) { %><div class="darktip-row darktip-highlight-weak">' +
					'<%= this._loc("zones.wintergrasp") %>: ' +
					'<span class="darkstip-cside-<%= this["wintergrasp"]["controlling-faction"] %>">' +
						'<span class="darktip-only-s"><%= this._loc("worldpvpstatus."+this["wintergrasp"]["status"]+"."+this["wintergrasp"]["controlling-faction"]) %></span>' +
						'<span class="darktip-only-x"><%= this._loc("world-pvp-zone-next-battle") %>: <%= this._renderDateTime(this["wintergrasp"]["next"]) %></span>' +
					'</span>' +
				'</div><% } %>' +
				'<% if(this["tol-barad"]) { %><div class="darktip-row darktip-highlight-weak">' +
					'<%= this._loc("zones.tol-barad") %>: ' +
					'<span class="darkstip-cside-<%= this["tol-barad"]["controlling-faction"] %>">' +
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
			'locales': {
				'de_DE': 'German',
				'en_GB': 'British',
				'pt_BR': 'Portugese',
				'fr_FR': 'French',
				'ru_RU': 'Russian',
				'es_ES': 'Spanish',
				'it_IT': 'Italian',
				'en_US': 'American',
				'es_MX': 'Mexican',
				'ko_KR': 'Korean',
				'zh_TW': 'Taiwan',
				'zh_CN': 'Chinese'
			},
			'timezones': {
				'Europe/Paris'       : 'Europe, Paris',
				'America/Los_Angeles': 'America, Los Angeles',
				'America/Sao_Paulo'  : 'America, Sao Paulo',
				'Australia/Melbourne': 'Australia, Melbourne',
				'Asia/Seoul'         : 'Asia, Seoul',
				'Asia/Taipei'        : 'Asia, Taipei',
				'Asia/Shanghai'      : 'Asia, Shanghai'
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
			'world-pvp-zone-next-battle': 'Next battle',
			'timezone'                  : 'Timezone'
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
			'locales': {
				'de_DE': 'Deutsch',
				'en_GB': 'Britisch',
				'pt_BR': 'Portugiesisch',
				'fr_FR': 'Französisch',
				'ru_RU': 'Russisch',
				'es_ES': 'Spanisch',
				'it_IT': 'Italienisch',
				'en_US': 'Amerikanisch',
				'es_MX': 'Mexikanisch',
				'ko_KR': 'Koreanisch',
				'zh_TW': 'Taiwanesisch',
				'zh_CN': 'Chinesisch'
			},
			'timezones': {
				'Europe/Paris'       : 'Europa, Paris',
				'America/Los_Angeles': 'Amerika, Los Angeles',
				'America/Sao_Paulo'  : 'Amerika, Sao Paulo',
				'Australia/Melbourne': 'Australien, Melbourne',
				'Asia/Seoul'         : 'Asien, Seoul',
				'Asia/Taipei'        : 'Asien, Taipei',
				'Asia/Shanghai'      : 'Asien, Shanghai'
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
			'world-pvp-zone-next-battle': 'N&auml;chste Schlacht',
			'timezone'                  : 'Zeitzone'
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
		},
		'it_IT': {
			'loading': 'Caricamento...',
			'not-found': 'Non trovato',
			'type': {
				'pve'  : 'PvA',
				'pvp'  : 'PvP',
				'rp'   : 'GR',
				'rppvp': 'GR PvA'
			},
			'queue': {
				'false': 'Nessuna coda',
				'true' : 'Coda'
			},
			'status': {
				'false': 'Offline',
				'true' : 'Online'
			},
			'population': {
				'low'   : 'Popolazione Bassa',
				'medium': 'Popolazione Media',
				'high'  : 'Popolazione Alta'
			},
			'zones': {
				'wintergrasp': 'Lungoinverno',
				'tol-barad'  : 'Tol Barad'
			},
			'worldpvpstatus': {
				'-1': { '0': 'Sconosciuto',             '1': 'Sconosciuto' },
				'0' : { '0': 'Controllato dall\'Alleanza', '1': 'Controllato dall\'Orda' },
				'1' : { '0': 'Attaccato dall\'Orda',     '1': 'Attaccato dall\'Alleanza' },
				'2' : { '0': 'Attaccato dall\'Orda',     '1': 'Attaccato dall\'Alleanza' },
				'3' : { '0': 'Controllato dall\'Alleanza', '1': 'Controllato dall\'Orda' }
			},
			'world-pvp-zone-status'     : 'Status del PvP esterno',
			'world-pvp-zone-next-battle': 'Prossima Battaglia'
		}
	}

});


DarkTip.registerModule('wow.quest', {

	'triggers': {
		'explicit': {
			'match' : /wow\.quest:(us|eu|kr|tw|cn)\.([^\(]+)\((en|de|fr|es|ru|pt|it|ko|zh)\)/i,
			'params': {
				'1': 'region',
				'2': 'questid',
				'3': 'lang'
			}
		}
	},

	'queries': {
		'quest': {
			'required' : true,
			'condition': true,
			'call'     : '//<%= this["host"] %>/api/wow/quest/<%= this["questid"] %>?locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 90)
		}
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
				'<div class="darktip-headline-right"><%= this["quest"]["level"] %></div>' +
				'<div class="darktip-row darktip-headline darktip-highlight-medium"><%= this["quest"]["title"] %></div>' +
				'<div class="darktip-row darktip-highlight-strong"><%= this["quest"]["category"] %></div>' +
				'<div class="darktip-row"><%= this._loc("reqLevel") %></div>' +
				'<% if(this["quest"]["suggestedPartyMembers"] > 1) { %><div class="darktip-row"><%= this._loc("suggestedPartyMembers") %></div><% } %>' +
			'</div>'
		),
		'404':(
			'<div class="tooltip-quest darktip-tooltip-404">' +
				'<div class="darktip-title">404<span class="darktip-sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.quest") %></span> <span class="value"><%= this["questid"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
			'</div>'
		)
	},

	'i18n': {
		'en_US': {
			'loading'              : 'Loading quest...',
			'not-found'            : 'Quest not found',
			'reqLevel'             : 'Requires Level <%= this["quest"]["reqLevel"] %>',
			'suggestedPartyMembers': 'Group Quest (<%= this["quest"]["suggestedPartyMembers"] %>)'
		},
		'de_DE': {
			'loading'              : 'Lade Quest...',
			'not-found'            : 'Quest nicht gefunden',
			'reqLevel'             : 'Ben&ouml;tigt Stufe <%= this["quest"]["reqLevel"] %>',
			'suggestedPartyMembers': 'Gruppenquest (<%= this["quest"]["suggestedPartyMembers"] %>)'
		},
		'fr_FR': {
			'loading'              : 'Chargement...',
			'not-found'            : 'Quête introuvable',
			'reqLevel'             : 'Niveau requis <%= this["quest"]["reqLevel"] %>',
			'suggestedPartyMembers': 'Qu&ecirc;te de groupe (<%= this["quest"]["suggestedPartyMembers"] %>)'
		},
		'es_ES': {
			'loading'              : 'Cargando misi&oacute;n...',
			'not-found'            : 'Misi&oacute;n no encontrada',
			'reqLevel'             : 'Requiere nivel <%= this["quest"]["reqLevel"] %>',
			'suggestedPartyMembers': 'Misi&oacute;n de Grupo (<%= this["quest"]["suggestedPartyMembers"] %>)'
		},
		'it_IT': {
			'loading'              : 'Caricamento missione...',
			'not-found'            : 'Missione non trovata',
			'reqLevel'             : 'Richiede il livello <%= this["quest"]["reqLevel"] %>',
			'suggestedPartyMembers': 'Missione di gruppo (<%= this["quest"]["suggestedPartyMembers"] %>)'
		}		
	}

});


DarkTip.registerModule('wow.spell', {

	'triggers': {
		'explicit': {
			'match' : /wow\.spell:(us|eu|kr|tw|cn)\.([^\(]+)\((en|de|fr|es|ru|pt|it|ko|zh)\)/i,
			'params': {
				'1': 'region',
				'2': 'spellid',
				'3': 'lang'
			}
		}
	},

	'queries': {
		'spell': {
			'required' : true,
			'condition': true,
			'call'     : '//<%= this["host"] %>/api/wow/spell/<%= this["spellid"] %>?locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 90)
		}
	},

	'prepareData': function(state) {

		if(Object.keys(state['data']).length === 0)
		{
			return false;
		}

		return state['data'];
	},

	'getParams': {
		'explicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.spell', 'triggers.explicit.params')));
			params['host']   = DarkTip.map('wow', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		},
		'implicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.spell', 'triggers.implicit.params')));
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
			'<div class="tooltip-spell">' +
				'<img class="darktip-icon" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/56/<% if(this["spell"]["icon"]) { %><%= this["spell"]["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg" />' +
				'<div class="darktip-col-70">' +
					'<div class="darktip-row darktip-headline"><%= this["spell"]["name"] %></div>' +
					'<div class="darktip-split-row">' +
						'<div class="darktip-row"><% if(this["spell"]["powerCost"]) { %><%= this["spell"]["powerCost"] %><% } %></div>' +
						'<div class="darktip-pos-right"><% if(this["spell"]["range"]) { %><%= this["spell"]["range"] %><% } %></div>' +
					'</div>' +
					'<div class="darktip-split-row">' +
						'<div class="darktip-row"><% if(this["spell"]["castTime"]) { %><%= this["spell"]["castTime"] %><% } %></div>' +
						'<div class="darktip-pos-right"><% if(this["spell"]["cooldown"]) { %><%= this["spell"]["cooldown"] %><% } %></div>' +
					'</div>' +
					'<div class="darktip-row darktip-highlight-medium"><%= this["spell"]["description"] %></div>' +
				'</div>' +
			'</div>'
		),
		'404': (
			'<div class="tooltip-spell darktip-tooltip-404">' +
				'<div class="darktip-title">404<span class="darktip-sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.spell") %></span> <span class="value"><%= this["spellid"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
			'</div>'
		),
		'fragments': {
		}
	},

	'i18n': {
		'en_US': {
			'loading'          : 'Loading spell...',
			'not-found'        : 'Spell not found'
		},
		'de_DE': {
			'loading'          : 'Lade Zauber...',
			'not-found'        : 'Zauber nicht gefunden'
		},
		'fr_FR': {
			'loading'          : 'Chargement Sorts...',
			'not-found'        : 'Sort introuvable'
		},
		'es_ES': {
			'loading'          : 'Cargando Hechizos...',
			'not-found'        : 'Hechizos no encontrado'
		},
		'it_IT': {
			'loading'          : 'Caricamento incantesimo...',
			'not-found'        : 'Incantesimo non trovato'
		}		
	}

});


DarkTip.registerModule('wow.guild', {

	'triggers': {
		'explicit': {
			'match' : /wow\.guild:(us|eu|kr|tw|cn)\.([^\.]+)\.([^\(]+)\((en|de|fr|es|ru|pt|it|ko|zh)\)/i,
			'params': {
				'1': 'region',
				'2': 'realm',
				'3': 'guild',
				'4': 'lang'
			}
		},
		'implicit': {
			'match' : /(?:https?:\/\/)?(us\.battle\.net|eu\.battle\.net|kr\.battle\.net|tw\.battle\.net|cn\.battle\.net|www\.battlenet\.com\.cn)\/wow\/(en|de|fr|es|ru|pt|it|ko|zh)\/guild\/([^\/]+)\/([^\/#]+).*/i,
			'params': {
				'1': 'host',
				'2': 'lang',
				'3': 'realm',
				'4': 'guild'
			}
		}
	},

	'queries': {
		'guild': {
			'required' : true,
			'condition': true,
			'call'     : '//<%= this["host"] %>/api/wow/guild/<%= this["realm"] %>/<%= this["guild"] %>?fields=members&locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 3)
		}
	},

	'getParams': {
		'explicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.guild', 'triggers.explicit.params')));
			params['guild']  = params['guild'].replace(/_/g, ' ');
			params['host']   = DarkTip.map('wow', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		},
		'implicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.guild', 'triggers.implicit.params')));
			params['guild']  = params['guild'].replace(/_/g, ' ');
			params['region'] = DarkTip.map('wow', 'maps.host.region', params['host']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		}
	},

	'layout': {
		'width': {
			'core': 275
		}
	},

	'templates': {
		'core': (
			'<div class="tooltip-guild">' +
				'<div class="darktip-headline-right"><span class="darktip-icon-achievenemtpoints"><%= this["guild"]["achievementPoints"] %></span></div>' +
				'<div class="darktip-row darktip-headline darkstip-cside-<%= this["guild"]["side"] %>"><%= this["guild"]["name"] %></div>' +
				'<div class="darktip-row darktip-highlight-medium"><%= this._loc("classification") %></div>' +
				'<% if(this["guild"]["members"]) { %><div class="darktip-row"><%= this._loc("members") %></div><% } %>' +
			'</div>'
		),
		'404': (
			'<div class="tooltip-guild darktip-tooltip-404">' +
				'<div class="darktip-title">404<span class="darktip-sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.guild") %></span> <span class="value"><%= this["guild"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.realm") %></span> <span class="value"><%= this["realm"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
			'</div>'
		)
	},

	'i18n': {
		'en_US': {
			'loading'       : 'Loading Guild...',
			'not-found'     : 'Guild not found',
			'classification': 'Level <%= this["guild"]["level"] %> <%= this._loc("factionSide." + this["guild"]["side"]) %> Guild, <%= this["guild"]["realm"] %>',
			'members'       : '<%= this["guild"]["members"].length %> members'
		},
		'de_DE': {
			'loading'       : 'Lade Gilde...',
			'not-found'     : 'Gilde nicht gefunden',
			'classification': 'Stufe <%= this["guild"]["level"] %> <%= this._loc("factionSide." + this["guild"]["side"]) %>-Gilde, <%= this["guild"]["realm"] %>',
			'members'       : '<%= this["guild"]["members"].length %> Mitglieder'
		},
		'fr_FR': {
			'loading'       : 'Chargement Guilde...',
			'not-found'     : 'Aucune Guilde trouv&eacute;e',
			'classification': 'Niveau <%= this["guild"]["level"] %> Faction <%= this._loc("factionSide." + this["guild"]["side"]) %> , <%= this["guild"]["realm"] %>',
			'members'       : '<%= this["guild"]["members"].length %> membres'
		},
		'es_ES': {
			'loading'       : 'Cargando hermandad...',
			'not-found'     : 'Hermandad no encontrada',
			'classification': 'Hermandad (<%= this._loc("factionSide." + this["guild"]["side"]) %>), nivel <%= this["guild"]["level"] %>, <%= this["guild"]["realm"] %>',
			'members'       : '<%= this["guild"]["members"].length %> miembros'
		},
		'it_IT': {
			'loading'       : 'Caricamento Gilda...',
			'not-found'     : 'Gilda non trovata',
			'classification': 'Gilda (<%= this._loc("factionSide." + this["guild"]["side"]) %>) livello <%= this["guild"]["level"] %>, <%= this["guild"]["realm"] %>',
			'members'       : '<%= this["guild"]["members"].length %> membri'
		}
	}

});


DarkTip.registerModule('wow.arena', {

	'triggers': {
		'explicit': {
			'match' : /wow\.arena:(us|eu|kr|tw|cn)\.([^\.]+)\.(2v2|3v3|5v5)\.([^\(]+)\((en|de|fr|es|ru|pt|it|ko|zh)\)/i,
			'params': {
				'1': 'region',
				'2': 'realm',
				'3': 'teamsize',
				'4': 'teamname',
				'5': 'lang'
			}
		},
		'implicit': {
			'match' : /(?:https?:\/\/)?(us\.battle\.net|eu\.battle\.net|kr\.battle\.net|tw\.battle\.net|cn\.battle\.net|www\.battlenet\.com\.cn)\/wow\/(en|de|fr|es|ru|pt|it|ko|zh)\/arena\/([^\/]+)\/(2v2|3v3|5v5)\/([^\/#]+).*/i,
			'params': {
				'1': 'host',
				'2': 'lang',
				'3': 'realm',
				'4': 'teamsize',
				'5': 'teamname'
			}
		}
	},

	'queries': {
		'arena': {
			'required' : true,
			'condition': true,
			'call'     : '//<%= this["host"] %>/api/wow/arena/<%= this["realm"] %>/<%= this["teamsize"] %>/<%= this["teamname"] %>?locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 1)
		}
	},

	'getParams': {
		'explicit': function(result) {
			var params         = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.arena', 'triggers.explicit.params')));
			params['teamname'] = params['teamname'].replace(/_/g, ' ');
			params['host']     = DarkTip.map('wow', 'maps.region.host', params['region']);
			params['locale']   = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		},
		'implicit': function(result) {
			var params         = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.arena', 'triggers.implicit.params')));
			params['teamname'] = params['teamname'].replace(/_/g, ' ');
			params['region']   = DarkTip.map('wow', 'maps.host.region', params['host']);
			params['locale']   = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		}
	},

	'layout': {
		'width': {
			'core': 325
		}
	},

	'templates': {
		'core': (
			'<div class="tooltip-arena">' +
				'<div class="darktip-headline-right"><%= this._loc("rank-current") %></div>' +
				'<div class="darktip-row darktip-headline darkstip-cside-<%= this["arena"]["side"] %>"><%= this["arena"]["name"] %></div>' +
				'<% if(this["_meta"]["extendedActive"]) { %><div class="darktip-row darktip-highlight-strong darktip-only-x"><%= this._loc("view-mode-current") %></div><% } %>' +
				'<div class="darktip-row darktip-highlight-strong darktip-only-s"><%= this._loc("view-mode-season") %></div>' +
				'<div class="darktip-row"><%= this._loc("classification") %></div>' +
				'<div class="darktip-row"><%= this._loc("rank-previous") %></div>' +
				'<div class="darktip-row"><%= this._loc("rating-team") %></div>' +
				'<% if(this["_meta"]["extendedActive"]) { %><div class="darktip-row darktip-only-x"><%= this._loc("matches-current") %></div><% } %>' +
				'<div class="darktip-row darktip-only-s"><%= this._loc("matches-season") %></div>' +
				'<div class="members"><%= this._subLoop("templates.fragments.member", this["arena"]["members"]) %></div>' +
				'<% if(this["_meta"]["extendedActive"]) { %><div class="darktip-row darktip-info-meta darktip-only-x"><%= this._loc("extendedActive") %></div><% } %>' +
				'<% if(this["_meta"]["extendedActive"]) { %><div class="darktip-row darktip-info-meta darktip-only-s"><%= this._loc("extendedInactive") %></div><% } %>' +
			'</div>'
		),
		'404': (
			'<div class="tooltip-arena darktip-tooltip-404">' +
				'<div class="darktip-title">404<span class="darktip-sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.teamname") %></span> <span class="value"><%= this["teamname"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.teamsize") %></span> <span class="value"><%= this["teamsize"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.realm") %></span> <span class="value"><%= this["realm"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
			'</div>'
		),
		'fragments': {
			'member': (
				'<div class="darktip-row darktip-padded<% if(this["_loop"] % 2 == 0) { %> alt<% } %>">' +
					'<% if(this["_meta"]["extendedActive"]) { %><div class="darktip-pos-right darktip-only-x"><%= this._loc("matches-current-short") %></div><% } %>' +
					'<div class="darktip-pos-right darktip-only-s"><%= this._loc("matches-season-short") %></div>' +
					'<img class="darktip-icon-18x18" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/race_<%= this["character"]["race"] %>_<%= this["character"]["gender"] %>.jpg" /> ' +
					'<img class="darktip-icon-18x18" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/class_<%= this["character"]["class"] %>.jpg" /> ' +
					'<span class="darktip-cclass-<%= this["character"]["class"] %><% if(this["rank"]==0) { %> darktip-icon-leader-pvp<% } %>"><%= this["character"]["name"] %></span> <span class="sub darktip-highlight-reduced">(<%= this["personalRating"] %>)</span>' +
				'</div>'
			)
		}
	},

	'i18n': {
		'en_US': {
			'loading'              : 'Loading arena team...',
			'not-found'            : 'Arena team not found',
			'view-mode-current'    : 'Viewing current week',
			'view-mode-season'     : 'Viewing complete season',
			'classification'       : '<%= this["arena"]["teamsize"] %>v<%= this["arena"]["teamsize"] %> <%= this._loc("factionSide." + this["arena"]["side"]) %> Arena Team, <%= this["arena"]["realm"] %>',
			'rating-team'          : 'Rating: <%= this["arena"]["rating"] %>',
			'rank-current'         : 'Rank #<%= this["arena"]["ranking"] %>',
			'rank-previous'        : 'Last week\'s rank: <% if(this["arena"]["lastSessionRanking"] > 0) { %>#<%= this["arena"]["lastSessionRanking"] %><% } else { %>None<% } %>',
			'matches-current'      : 'Matches: <span class="darktip-highlight-won"><%= this["arena"]["gamesWon"] %></span> - <span class="darktip-highlight-lost"><%= this["arena"]["gamesLost"] %></span> <span class="darktip-highlight-weak">(Total: <%= this["arena"]["gamesPlayed"] %><% if(this["arena"]["gamesPlayed"] > 0) { %>, <%= ((this["arena"]["gamesWon"] / this["arena"]["gamesPlayed"])*100).toFixed(0) %>% won<% } %>)</span>',
			'matches-current-short': '<span class="darktip-highlight-won"><%= this["gamesWon"] %></span> - <span class="darktip-highlight-lost"><%= this["gamesLost"] %></span><% if(this["gamesPlayed"] > 0) { %> | <span class="darktip-highlight-weak"><%= ((this["gamesWon"] / this["gamesPlayed"])*100).toFixed(0) %>%</span><% } %>',
			'matches-season'       : 'Matches: <span class="darktip-highlight-won"><%= this["arena"]["sessionGamesWon"] %></span> - <span class="darktip-highlight-lost"><%= this["arena"]["sessionGamesLost"] %></span> <span class="darktip-highlight-weak">(Total: <%= this["arena"]["sessionGamesPlayed"] %><% if(this["arena"]["sessionGamesPlayed"] > 0) { %>, <%= ((this["arena"]["sessionGamesWon"] / this["arena"]["sessionGamesPlayed"])*100).toFixed(0) %>% won<% } %>)</span>',
			'matches-season-short' : '<span class="darktip-highlight-won"><%= this["sessionGamesWon"] %></span> - <span class="darktip-highlight-lost"><%= this["sessionGamesLost"] %></span><% if(this["sessionGamesPlayed"] > 0) { %> | <span class="darktip-highlight-weak"><%= ((this["sessionGamesWon"] / this["sessionGamesPlayed"])*100).toFixed(0) %>%</span><% } %>',
			'extendedInactive'     : 'Hold [<%= this["_meta"]["extendedKeyCodeLabel"] %>] to view current statistics',
			'extendedActive'       : 'Release [<%= this["_meta"]["extendedKeyCodeLabel"] %>] to view seasonal statistics'
		},
		'de_DE': {
			'loading'              : 'Lade Arenateam...',
			'not-found'            : 'Arenateam nicht gefunden',
			'view-mode-current'    : 'Wochenansicht',
			'view-mode-season'     : 'Saisonansicht',
			'classification'       : '<%= this["arena"]["teamsize"] %>v<%= this["arena"]["teamsize"] %> <%= this._loc("factionSide." + this["arena"]["side"]) %> Arenateam, <%= this["arena"]["realm"] %>',
			'rating-team'          : 'Wertung: <%= this["arena"]["rating"] %>',
			'rank-current'         : 'Rang #<%= this["arena"]["ranking"] %>',
			'rank-previous'        : 'Rang der letzten Woche: <% if(this["lastSessionRanking"] > 0) { %>#<%= this["lastSessionRanking"] %><% } else { %>Keiner<% } %>',
			'matches-current'      : 'Spiele: <span class="darktip-highlight-won"><%= this["arena"]["gamesWon"] %></span> - <span class="darktip-highlight-lost"><%= this["arena"]["gamesLost"] %></span> <span class="darktip-highlight-weak">(Gesamt: <%= this["arena"]["gamesPlayed"] %><% if(this["arena"]["gamesPlayed"] > 0) { %>, <%= ((this["arena"]["gamesWon"] / this["arena"]["gamesPlayed"])*100).toFixed(0) %>% gewonnen<% } %>)</span>',
			'matches-current-short': '<span class="darktip-highlight-won"><%= this["gamesWon"] %></span> - <span class="darktip-highlight-lost"><%= this["gamesLost"] %></span><% if(this["gamesPlayed"] > 0) { %> | <span class="darktip-highlight-weak"><%= ((this["gamesWon"] / this["gamesPlayed"])*100).toFixed(0) %>%</span><% } %>',
			'matches-season'       : 'Spiele: <span class="darktip-highlight-won"><%= this["arena"]["sessionGamesWon"] %></span> - <span class="darktip-highlight-lost"><%= this["arena"]["sessionGamesLost"] %></span> <span class="darktip-highlight-weak">(Gesamt: <%= this["arena"]["sessionGamesPlayed"] %><% if(this["arena"]["sessionGamesPlayed"] > 0) { %>, <%= ((this["arena"]["sessionGamesWon"] / this["arena"]["sessionGamesPlayed"])*100).toFixed(0) %>% gewonnen<% } %>)</span>',
			'matches-season-short' : '<span class="darktip-highlight-won"><%= this["sessionGamesWon"] %></span> - <span class="darktip-highlight-lost"><%= this["sessionGamesLost"] %></span><% if(this["sessionGamesPlayed"] > 0) { %> | <span class="darktip-highlight-weak"><%= ((this["sessionGamesWon"] / this["sessionGamesPlayed"])*100).toFixed(0) %>%</span><% } %>',
			'extendedInactive'     : '[<%= this["_meta"]["extendedKeyCodeLabel"] %>] gedr&uuml;ckt halten f&uuml;r aktuelle Wochenwerte',
			'extendedActive'       : '[<%= this["_meta"]["extendedKeyCodeLabel"] %>] loslassen f&uuml;r Saisonwerte'
		},
		'fr_FR': {
			'loading'              : 'Chargement team d\'ar&egrave;nes...',
			'not-found'            : 'Aucune team d\'ar&egrave;nes trouv&eacute;e',
			'view-mode-current'    : 'Voir la semaine en cours',
			'view-mode-season'     : 'Voir la saison',
			'classification'       : 'Equipe d\'arène <%= this["arena"]["teamsize"] %>v<%= this["arena"]["teamsize"] %>, <%= this._loc("factionSide." + this["arena"]["side"]) %> (<%= this["arena"]["realm"] %>)',
			'rating-team'          : 'Côte: <%= this["arena"]["rating"] %>',
			'rank-current'         : 'Classement #<%= this["arena"]["ranking"] %>',
			'rank-previous'        : 'Classement semaine derni&egrave;re: <% if(this["lastSessionRanking"] > 0) { %>#<%= this["lastSessionRanking"] %><% } else { %>None<% } %>',
			'matches-current'      : 'Matches: <span class="darktip-highlight-won"><%= this["arena"]["gamesWon"] %></span> - <span class="darktip-highlight-lost"><%= this["arena"]["gamesLost"] %></span> <span class="darktip-highlight-weak">(Total: <%= this["arena"]["gamesPlayed"] %><% if(this["arena"]["gamesPlayed"] > 0) { %>, <%= ((this["arena"]["gamesWon"] / this["arena"]["gamesPlayed"])*100).toFixed(0) %>% won<% } %>)</span>',
			'matches-current-short': '<span class="darktip-highlight-won"><%= this["gamesWon"] %></span> - <span class="darktip-highlight-lost"><%= this["gamesLost"] %></span><% if(this["gamesPlayed"] > 0) { %> | <span class="darktip-highlight-weak"><%= ((this["gamesWon"] / this["gamesPlayed"])*100).toFixed(0) %>%</span><% } %>',
			'matches-season'       : 'Matches: <span class="darktip-highlight-won"><%= this["arena"]["sessionGamesWon"] %></span> - <span class="darktip-highlight-lost"><%= this["arena"]["sessionGamesLost"] %></span> <span class="darktip-highlight-weak">(Total: <%= this["arena"]["sessionGamesPlayed"] %><% if(this["arena"]["sessionGamesPlayed"] > 0) { %>, <%= ((this["arena"]["sessionGamesWon"] / this["arena"]["sessionGamesPlayed"])*100).toFixed(0) %>% won<% } %>)</span>',
			'matches-season-short' : '<span class="darktip-highlight-won"><%= this["sessionGamesWon"] %></span> - <span class="darktip-highlight-lost"><%= this["sessionGamesLost"] %></span><% if(this["sessionGamesPlayed"] > 0) { %> | <span class="darktip-highlight-weak"><%= ((this["sessionGamesWon"] / this["sessionGamesPlayed"])*100).toFixed(0) %>%</span><% } %>',
			'extendedInactive'     : 'Appyuez sur [<%= this["_meta"]["extendedKeyCodeLabel"] %>] pour voir les statistiques actuelles',
			'extendedActive'       : 'Relâchez [<%= this["_meta"]["extendedKeyCodeLabel"] %>] pour voir les statistiques de la saison'
		},
		'es_ES': {
			'loading'              : 'Cargando equipo de arenas...',
			'not-found'            : 'Equipo de arenas no encontrado',
			'view-mode-current'    : 'Esta Semana',
			'view-mode-season'     : 'Temporada',
			'classification'       : '<%= this["arena"]["teamsize"] %>v<%= this["arena"]["teamsize"] %> <%= this._loc("factionSide." + this["arena"]["side"]) %> Arena Team, <%= this["arena"]["realm"] %>',
			'rating-team'          : 'Puntuaci&oacute;n: <%= this["arena"]["rating"] %>',
			'rank-current'         : 'Rango #<%= this["arena"]["ranking"] %>',
			'rank-previous'        : 'Rango de la semana pasada: <% if(this["lastSessionRanking"] > 0) { %>#<%= this["lastSessionRanking"] %><% } else { %>no<% } %>',
			'matches-current'      : 'Partidas: <span class="darktip-highlight-won"><%= this["arena"]["gamesWon"] %></span> - <span class="darktip-highlight-lost"><%= this["arena"]["gamesLost"] %></span> <span class="darktip-highlight-weak">(Total: <%= this["arena"]["gamesPlayed"] %><% if(this["arena"]["gamesPlayed"] > 0) { %>, <%= ((this["arena"]["gamesWon"] / this["arena"]["gamesPlayed"])*100).toFixed(0) %>% gewonnen<% } %>)</span>',
			'matches-current-short': '<span class="darktip-highlight-won"><%= this["gamesWon"] %></span> - <span class="darktip-highlight-lost"><%= this["gamesLost"] %></span><% if(this["gamesPlayed"] > 0) { %> | <span class="darktip-highlight-weak"><%= ((this["gamesWon"] / this["gamesPlayed"])*100).toFixed(0) %>%</span><% } %>',
			'matches-season'       : 'Partidas: <span class="darktip-highlight-won"><%= this["arena"]["sessionGamesWon"] %></span> - <span class="darktip-highlight-lost"><%= this["arena"]["sessionGamesLost"] %></span> <span class="darktip-highlight-weak">(Total: <%= this["arena"]["sessionGamesPlayed"] %><% if(this["arena"]["sessionGamesPlayed"] > 0) { %>, <%= ((this["arena"]["sessionGamesWon"] / this["arena"]["sessionGamesPlayed"])*100).toFixed(0) %>% gewonnen<% } %>)</span>',
			'matches-season-short' : '<span class="darktip-highlight-won"><%= this["sessionGamesWon"] %></span> - <span class="darktip-highlight-lost"><%= this["sessionGamesLost"] %></span><% if(this["sessionGamesPlayed"] > 0) { %> | <span class="darktip-highlight-weak"><%= ((this["sessionGamesWon"] / this["sessionGamesPlayed"])*100).toFixed(0) %>%</span><% } %>',
			'extendedInactive'     : '&iexcl;Manten pulsado [<%= this["_meta"]["extendedKeyCodeLabel"] %>] para ver las estad&iacute;sticas actuales!',
			'extendedActive'       : '&iexcl;Suelta [<%= this["_meta"]["extendedKeyCodeLabel"] %>] para ver las estad&iacute;sticas de la temporada!'
		},
		'it_IT': {
			'loading'              : 'Caricamento della squadra arena...',
			'not-found'            : 'Squadra arena non trovata',
			'view-mode-current'    : 'Visualizza la settimana corrente',
			'view-mode-season'     : 'Visualizza la stagione completa',
			'classification'       : '<%= this["arena"]["teamsize"] %>v<%= this["arena"]["teamsize"] %> <%= this._loc("factionSide." + this["arena"]["side"]) %> Squadra Arena, <%= this["arena"]["realm"] %>',
			'rating-team'          : 'Indice d\'arena: <%= this["arena"]["rating"] %>',
			'rank-current'         : 'Posizione #<%= this["arena"]["ranking"] %>',
			'rank-previous'        : 'Posizione dell\'ultima settimana: <% if(this["arena"]["lastSessionRanking"] > 0) { %>#<%= this["arena"]["lastSessionRanking"] %><% } else { %>None<% } %>',
			'matches-current'      : 'Partite: <span class="highlight-won"><%= this["arena"]["gamesWon"] %></span> - <span class="highlight-lost"><%= this["arena"]["gamesLost"] %></span> <span class="highlight-weak">(Total: <%= this["arena"]["gamesPlayed"] %><% if(this["arena"]["gamesPlayed"] > 0) { %>, <%= ((this["arena"]["gamesWon"] / this["arena"]["gamesPlayed"])*100).toFixed(0) %>% won<% } %>)</span>',
			'matches-current-short': '<span class="highlight-won"><%= this["gamesWon"] %></span> - <span class="highlight-lost"><%= this["gamesLost"] %></span><% if(this["gamesPlayed"] > 0) { %> | <span class="highlight-weak"><%= ((this["gamesWon"] / this["gamesPlayed"])*100).toFixed(0) %>%</span><% } %>',
			'matches-season'       : 'Partite: <span class="highlight-won"><%= this["arena"]["sessionGamesWon"] %></span> - <span class="highlight-lost"><%= this["arena"]["sessionGamesLost"] %></span> <span class="highlight-weak">(Total: <%= this["arena"]["sessionGamesPlayed"] %><% if(this["arena"]["sessionGamesPlayed"] > 0) { %>, <%= ((this["arena"]["sessionGamesWon"] / this["arena"]["sessionGamesPlayed"])*100).toFixed(0) %>% won<% } %>)</span>',
			'matches-season-short' : '<span class="highlight-won"><%= this["sessionGamesWon"] %></span> - <span class="highlight-lost"><%= this["sessionGamesLost"] %></span><% if(this["sessionGamesPlayed"] > 0) { %> | <span class="highlight-weak"><%= ((this["sessionGamesWon"] / this["sessionGamesPlayed"])*100).toFixed(0) %>%</span><% } %>',
			'extendedInactive'     : 'Tieni premuto [<%= this["_meta"]["extendedKeyCodeLabel"] %>] per visualizzare le statistiche correnti',
			'extendedActive'       : 'Rilascia [<%= this["_meta"]["extendedKeyCodeLabel"] %>] per visualizzare le statistiche della stagione'
		}
	}

});


DarkTip.registerModule('wow.achievement', {

	'triggers': {
		'explicit': {
			'match' : /wow\.achievement:(us|eu|kr|tw|cn)\.([^\(]+)\((en|de|fr|es|ru|pt|it|ko|zh)\)/i,
			'params': {
				'1': 'region',
				'2': 'achievementid',
				'3': 'lang'
			}
		},
		'implicit': {
			'match' : /(?:https?:\/\/)?(us\.battle\.net|eu\.battle\.net|kr\.battle\.net|tw\.battle\.net|cn\.battle\.net|www\.battlenet\.com\.cn)\/wow\/(en|de|fr|es|ru|pt|it|ko|zh)\/(?:character|guild)\/[^\/]+\/[^\/]+\/achievement#(?:[0-9]+:)+a([0-9]+).*/i,
			'params': {
				'1': 'host',
				'2': 'lang',
				'3': 'achievementid',
			},
		}
	},

	'queries': {
		'achievement': {
			'required' : true,
			'condition': true,
			'call'     : '//<%= this["host"] %>/api/wow/achievement/<%= this["achievementid"] %>?locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 90)
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
				'<img class="darktip-icon" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/56/<% if(this["achievement"]["icon"]) { %><%= this["achievement"]["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg" />' +
				'<div class="darktip-col-70">' +
					'<div class="darktip-headline-right"><span class="darktip-icon-achievenemtpoints"><%= this["achievement"]["points"] %></span></div>' +
					'<div class="darktip-row darktip-headline"><%= this["achievement"]["title"] %></div>' +
					'<div class="darktip-row darktip-highlight-reduced"><%= this["achievement"]["description"] %></div>' +
				'</div>' +
			'</div>'
		),
		'404': (
			'<div class="tooltip-achievement darktip-tooltip-404">' +
				'<div class="darktip-title">404<span class="darktip-sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.achievement") %></span> <span class="value"><%= this["achievementid"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
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
			'not-found'     : 'Haut fait introuvable'
		},
		'es_ES': {
			'loading'       : 'Cargando ventaja...',
			'not-found'     : 'Ventaja no encontrada'
		},
		'it_IT': {
			'loading'       : 'Caricamento Impresa...',
			'not-found'     : 'Impresa non trovata'
		}		
	}

});

DarkTip.registerModule('wow.achievement.character', {

	'triggers': {
		'explicit': {
			'match' : /wow\.achievement\.character:(us|eu|kr|tw|cn)\.([^\.]+)\.([^\.]+)\.([^\(]+)\((en|de|fr|es|ru|pt|it|ko|zh)\)/i,
			'params': {
				'1': 'region',
				'2': 'realm',
				'3': 'character',
				'4': 'achievementid',
				'5': 'lang'
			}
		},
		'implicit': {
			'match' : /(?:https?:\/\/)?(us\.battle\.net|eu\.battle\.net|kr\.battle\.net|tw\.battle\.net|cn\.battle\.net|www\.battlenet\.com\.cn)\/wow\/(en|de|fr|es|ru|pt|it|ko|zh)\/character\/([^\/]+)\/([^\/]+)\/achievement#[0-9]+:a([0-9]+)/i,
			'params': {
				'1': 'host',
				'2': 'lang',
				'3': 'realm',
				'4': 'character',
				'5': 'achievementid'
			}
		}
	},

	'queries': {
		'character': {
			'required' : true,
			'condition': true,
			'call'     : '//<%= this["host"] %>/api/wow/character/<%= this["realm"] %>/<%= this["character"] %>?fields=achievements&locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 1)
		},
		'achievement': {
			'required' : true,
			'condition': true,
			'call'     : '//<%= this["host"] %>/api/wow/achievement/<%= this["achievementid"] %>?locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 90)
		}
	},

	'prepareData': function(state) {

		if(Object.keys(state['data']).length === 0)
		{
			return false;
		}

		return state['data'];
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
				'<img class="darktip-icon" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/56/<% if(this["achievement"]["icon"]) { %><%= this["achievement"]["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg" />' +
				'<div class="darktip-col-70">' +
					'<div class="darktip-headline-right"><span class="darktip-icon-achievenemtpoints"><%= this["achievement"]["points"] %></span></div>' +
					'<div class="darktip-row darktip-headline"><%= this["achievement"]["title"] %></div>' +
					'<div class="darktip-row darktip-highlight-reduced"><%= this["achievement"]["description"] %></div>' +
				'</div>' +
			'</div>'
		),
		'404': (
			'<div class="tooltip-achievement darktip-tooltip-404">' +
				'<div class="darktip-title">404<span class="darktip-sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.achievement") %></span> <span class="value"><%= this["achievementid"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
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
			'not-found'     : 'Haut fait introuvable'
		},
		'es_ES': {
			'loading'       : 'Cargando ventaja...',
			'not-found'     : 'Ventaja no encontrada'
		},
		'it_IT': {
			'loading'       : 'Caricamento Impresa...',
			'not-found'     : 'Impresa non trovata'
		}
	}

});

DarkTip.registerModule('wow.character', {

	'triggers': {
		'explicit': {
			'match' : /wow\.character:(us|eu|kr|tw|cn)\.([^\.]+)\.([^\(]+)\((en|de|fr|es|ru|pt|it|ko|zh)\)/i,
			'params': {
				'1': 'region',
				'2': 'realm',
				'3': 'character',
				'4': 'lang'
			}
		},
		'implicit': {
			'match' : /(?:https?:\/\/)?(us\.battle\.net|eu\.battle\.net|kr\.battle\.net|tw\.battle\.net|cn\.battle\.net|www\.battlenet\.com\.cn)\/wow\/(en|de|fr|es|ru|pt|it|ko|zh)\/character\/([^\/]+)\/([^\/#]+).*/i,
			'params': {
				'1': 'host',
				'2': 'lang',
				'3': 'realm',
				'4': 'character'
			},
			'decorate': function(element, params, data) {

				var color_class     = DarkTip.map('wow.character', 'maps.class.color', data['character']['class']);
				var mediahost       = DarkTip.map('wow', 'maps.region.mediahost', params['region']);
				var icon_racegender = 'http://' + mediahost + '/wow/icons/18/race_' + data['character']['race'] + '_' + data['character']['gender'] + '.jpg';
				var icon_class      = 'http://' + mediahost + '/wow/icons/18/class_' + data['character']['class'] + '.jpg';

				DarkTip.jq(element).css(DarkTip['data']['settings']['decorativeMode']['default']);
				DarkTip.jq(element).css({'color': color_class});
				DarkTip.jq(element).prepend('<img src="' + icon_racegender + '" style="vertical-align: middle;" /> <img src="' + icon_class + '" style="vertical-align: middle;" /> ');
			}
		}
	},

	'queries': {
		'character': {
			'required' : true,
			'condition': true,
			'call'     : '//<%= this["host"] %>/api/wow/character/<%= this["realm"] %>/<%= this["character"] %>?fields=guild,talents,items,professions,pets,mounts,audit&locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 1)
		}
		/*
		'races'    : {
			'required' : false,
			'condition': 'character.race',
			'call'     : '//<%= this["host"] %>/api/wow/data/character/races?locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 90)
		},
		'classes'  : {
			'required' : false,
			'condition': 'character.class',
			'call'     : '//<%= this["host"] %>/api/wow/data/character/classes?locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 90)
		},
		// */
	},

	'maps': {
		'class': {
			'color': {
				'1' : '#C79C6E',
				'2' : '#F58CBA',
				'3' : '#ABD473',
				'4' : '#FFF569',
				'5' : '#FFFFFF',
				'6' : '#C41F3B',
				'7' : '#0070DE',
				'8' : '#69CCF0',
				'9' : '#9482C9',
				'11': '#FF7D0A'
			}
		}
	},

	'prepareData': function(state) {

		if(Object.keys(state['data']).length === 0)
		{
			return false;
		}

		state['data']['character']['talentSpecCount'] = 0;

		if((typeof state['data']['character'] !== 'undefined') && (typeof state['data']['character']['talents'] !== 'undefined'))
		{
			for(var i = 0; i < state['data']['character']['talents'].length; i++)
			{
				var cspec   = state['data']['character']['talents'][i];
				var temp    = {};
				var maxtier = -1;
				var ordered = [];

				if(typeof cspec['spec'] !== 'undefined')
				{
					state['data']['character']['talentSpecCount'] = state['data']['character']['talentSpecCount'] + 1;
				}

				if((typeof cspec['talents'] !== 'undefined') && (cspec['talents'].length > 0))
				{
					for(var j = 0; j < cspec['talents'].length; j++)
					{
						temp[cspec['talents'][j]['tier']] = cspec['talents'][j];

						if(cspec['talents'][j]['tier'] > maxtier)
						{
							maxtier = cspec['talents'][j]['tier'];
						}
					}
				}

				if(maxtier >= 0)
				{
					for(var j = 0; j <= maxtier; j++)
					{
						if(typeof temp[j] !== 'undefined')
						{
							ordered.push(temp[j]);
						}
					}
				}

				cspec['talents_ordered'] = ordered;
			}
		}

		return state['data'];
	},

	'getParams': {
		'explicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.character', 'triggers.explicit.params')));
			params['host']   = DarkTip.map('wow', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		},
		'implicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.character', 'triggers.implicit.params')));
			params['region'] = DarkTip.map('wow', 'maps.host.region', params['host']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		}
	},

	'layout': {
		'width': {
			'core': 325
		}
	},

	'templates': {
		'core': (
			'<div class="tooltip-character">' +
				'<img class="darktip-icon" src="<%= this["_meta"]["path_host"] %>/static-render/<%= this["_meta"]["region"] %>/<%= this["character"]["thumbnail"] %>?alt=/wow/static/images/2d/avatar/<%= this["character"]["race"] %>-<%= this["character"]["gender"] %>.jpg" />' +
				/* --- START simple mode -------------------------------- */
				'<div class="darktip-col-98 darktip-only-s">' +
					'<div class="darktip-headline-right"><span class="darktip-icon-achievenemtpoints"><%= this["character"]["achievementPoints"] %></span></div>' +
					'<div class="darktip-row darktip-headline darktip-cclass-<%= this["character"]["class"] %>"><%= this["character"]["name"] %></div>' +
					'<div class="darktip-row"><%= this._loc("classification") %></div>' +
					'<%= this._subLoop("templates.fragments.talentSpec", this["character"]["talents"]) %>' +
					'<% if(this["character"]["guild"]) { %><div class="darktip-row darktip-highlight-medium">&lt;<%= this["character"]["guild"]["name"] %>&gt;<% if(this["character"]["guild"]["level"]) { %> (<%= this["character"]["guild"]["level"] %>)<% } %></div><% } %>' +
					'<div class="darktip-row"><%= this["character"]["realm"] %></div>' +
					'<% if(this["character"]["items"]) { %><div class="darktip-row darktip-highlight-weak"><%= this._loc("itemLevel", this["character"]["items"]) %></div><% } %>' +
					'<% if(this["_meta"]["extendedActive"]) { %><div class="darktip-row darktip-info-meta"><%= this._loc("extendedInactive") %></div><% } %>' +
				'</div>' +
				/* --- END simple mode ---------------------------------- */
				/* --- START extended mode ------------------------------ */
				'<% if(this["_meta"]["extendedActive"]) { %>' +
					'<div class="darktip-col-98 darktip-only-x">' +
						'<div class="darktip-headline-right"><span class="darktip-icon-achievenemtpoints"><%= this["character"]["achievementPoints"] %></span></div>' +
						'<div class="darktip-row darktip-headline darktip-cclass-<%= this["character"]["class"] %>"><%= this["character"]["name"] %></div>' +
						'<% if(this["character"]["professions"]) { %>' +
							'<div class="darktip-block">' +
								'<%= this._subLoop("templates.fragments.profession.primary", this["character"]["professions"]["primary"]) %>' +
								'<%= this._subLoop("templates.fragments.profession.secondary", this["character"]["professions"]["secondary"]) %>' +
							'</div>' +
						'<% } %>' +
						'<% if(this["character"]["mounts"]) { %><div class="darktip-row"><%= this._loc("mounts") %></div><% } %>' +
						'<% if(this["character"]["pets"]) { %><div class="darktip-row"><%= this._loc("pets") %></div><% } %>' +
						'<div class="darktip-row darktip-highlight-reduced"><%= this._loc("lastModified") %></div>' +
						'<div class="darktip-row darktip-info-meta"><%= this._loc("extendedActive") %></div>' +
					'</div>' +
				'<% } %>' +
				/* --- END extended mode -------------------------------- */
			'</div>'
		),
		'404': (
			'<div class="tooltip-character darktip-tooltip-404">' +
				'<div class="darktip-title">404<span class="darktip-sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.character") %></span> <span class="value"><%= this["character"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.realm") %></span> <span class="value"><%= this["realm"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
			'</div>'
		),
		'fragments': {
			'talentSpec': (
				'<% if(this["spec"]) { %>' +
					'<div class="darktip-block darktip-spec darktip-row<% if(this["selected"]) { %> darktip-highlight-strong<% } else { %> darktip-highlight-reduced<% } %>">' +
						'<img class="darktip-icon-10x10" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/<% if(this["spec"]["icon"]) { %><%= this["spec"]["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg"/> ' +
						'<%= this["spec"]["name"] %> <span class="darktip-role">(<%= this["spec"]["role"] %>)</span>' +
						'<% if(this["talents"].length > 0) { %>' +
							'<%= this._subLoop("templates.fragments.talent", this["talents_ordered"]) %>' +
						'<% } %>' +
					'</div>' +
				'<% } %>'
			),
			'talent': (
				'<div class="darktip-block darktip-talent">' +
					'<img class="darktip-icon-10x10" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/<% if(this["spell"]["icon"]) { %><%= this["spell"]["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg"/> ' +
					'<%= this["spell"]["name"] %>' +
				'</div>'
			),
			'profession': {
				'primary'  : (
					'<% if(this["rank"] > 0) { %>' +
						'<div class="darktip-row darktip-highlight-medium">' +
							'<img class="darktip-icon-10x10" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/<% if(this["icon"]) { %><%= this["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg"/> ' +
							'<%= this["name"] %>: <%= this["rank"] %>' +
						'</div>' +
					'<% } %>'
				),
				'secondary': (
					'<% if(this["rank"] > 0) { %>' +
						'<div class="darktip-row darktip-highlight-weak">' +
							'<img class="darktip-icon-10x10" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/<% if(this["icon"]) { %><%= this["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg"/> ' +
							'<%= this["name"] %>: <%= this["rank"] %>' +
						'</div>' +
					'<% } %>'
				)
			}
		}
	},

	'i18n': {
		'en_US': {
			'loading'       : 'Loading character...',
			'not-found'     : 'Character not found',
			'classification': '<%= this["character"]["level"] %> <%= this._loc("characterRace." + this["character"]["race"] + ".0") %> <%= this._loc("characterClass." + this["character"]["class"] + ".0") %>',
			'itemLevel'     : '<%= this["averageItemLevelEquipped"] %> average item level (<%= this["averageItemLevel"] %>)',
			'mounts'        : 'Mounts: <%= this["character"]["mounts"]["numCollected"] %> / <%= this["character"]["mounts"]["numCollected"] + this["character"]["mounts"]["numNotCollected"] %>',
			'pets'          : 'Pets: <%= this["character"]["pets"]["numCollected"] %> / <%= this["character"]["pets"]["numCollected"] + this["character"]["pets"]["numNotCollected"] %>',
			'lastModified'  : 'Last modified: <%= this._renderDateTime(this["character"]["lastModified"]) %>'
		},
		'de_DE': {
			'loading'       : 'Lade Charakter...',
			'not-found'     : 'Charakter nicht gefunden',
			'classification': '<%= this["character"]["level"] %>, <%= this._loc("characterRace." + this["character"]["race"] + "." + this["character"]["gender"]) %>, <%= this._loc("characterClass." + this["character"]["class"] + "." + this["character"]["gender"]) %>',
			'itemLevel'     : '<%= this["averageItemLevelEquipped"] %> Durchschnittliche Gegenstandsstufe (<%= this["averageItemLevel"] %>)',
			'mounts'        : 'Reittiere: <%= this["character"]["mounts"]["numCollected"] %> / <%= this["character"]["mounts"]["numCollected"] + this["character"]["mounts"]["numNotCollected"] %>',
			'pets'          : 'Haustiere: <%= this["character"]["pets"]["numCollected"] %> / <%= this["character"]["pets"]["numCollected"] + this["character"]["pets"]["numNotCollected"] %>',
			'lastModified'  : 'Stand vom <%= this._renderDateTime(this["character"]["lastModified"]) %>'
		},
		'fr_FR': {
			'loading'       : 'Chargement personnage...',
			'not-found'     : 'Aucun personnage trouv&eacute;',
			'classification': '<%= this._loc("characterRace." + this["character"]["race"] + "." + this["character"]["gender"]) %> <%= this._loc("characterClass." + this["character"]["class"] + "." + this["character"]["gender"]) %> de niveau <%= this["character"]["level"] %>',
			'itemLevel'     : '<%= this["averageItemLevelEquipped"] %> Niveau moyen des objets (<%= this["averageItemLevel"] %>)',
			'mounts'        : 'Montures: <%= this["character"]["mounts"]["numCollected"] %> / <%= this["character"]["mounts"]["numCollected"] + this["character"]["mounts"]["numNotCollected"] %>',
			'pets'          : 'Mascottes: <%= this["character"]["pets"]["numCollected"] %> / <%= this["character"]["pets"]["numCollected"] + this["character"]["pets"]["numNotCollected"] %>',
			'lastModified'  : 'Derni&egrave;re mise à jour: <%= this._renderDateTime(this["character"]["lastModified"]) %>'
		},
		'es_ES': {
			'loading'       : 'Cargando personaje...',
			'not-found'     : 'Personaje no encontrado',
			'classification': '<%= this._loc("characterRace." + this["character"]["race"] + "." + this["character"]["gender"]) %> <%= this._loc("characterClass." + this["character"]["class"] + "." + this["character"]["gender"]) %> de nivel <%= this["character"]["level"] %>',
			'itemLevel'     : '<%= this["averageItemLevelEquipped"] %> nivel medio de objeto (<%= this["averageItemLevel"] %>)',
			'mounts'        : 'Monturas: <%= this["character"]["mounts"]["numCollected"] %> / <%= this["character"]["mounts"]["numCollected"] + this["character"]["mounts"]["numNotCollected"] %>',
			'pets'          : 'Compa&ntilde;eros: <%= this["character"]["pets"]["numCollected"] %> / <%= this["character"]["pets"]["numCollected"] + this["character"]["pets"]["numNotCollected"] %>',
			'lastModified'  : '&Uacute;ltima modificaci&oacute;n: <%= this._renderDateTime(this["character"]["lastModified"]) %>'
		},
		'es_MX': {
			'classification': '<%= this._loc("characterClass." + this["character"]["class"] + "." + this["character"]["gender"]) %> de <%= this._loc("characterRace." + this["character"]["race"] + "." + this["character"]["gender"]) %>, nivel <%= this["character"]["level"] %>'
		},
		'it_IT': {
			'loading'       : 'Caricamento personaggio...',
			'not-found'     : 'Personaggio non trovato',
			'classification': '<%= this["character"]["level"] %> <%= this._loc("characterRace." + this["character"]["race"] + ".0") %> <%= this._loc("characterClass." + this["character"]["class"] + ".0") %>',
			'itemLevel'     : '<%= this["averageItemLevelEquipped"] %> media dei livelli oggetto (<%= this["averageItemLevel"] %>)',
			'mounts'        : 'Cavalcature: <%= this["character"]["mounts"]["numCollected"] %> / <%= this["character"]["mounts"]["numCollected"] + this["character"]["mounts"]["numNotCollected"] %>',
			'pets'          : 'Mascotte: <%= this["character"]["pets"]["numCollected"] %> / <%= this["character"]["pets"]["numCollected"] + this["character"]["pets"]["numNotCollected"] %>',
			'lastModified'  : 'Ultima modifica: <%= this._renderDateTime(this["character"]["lastModified"]) %>'
		}
	}

});


DarkTip.registerModule('wow.character.pvp', {

	'triggers': {
		'explicit': {
			'match' : /wow\.character\.pvp:(us|eu|kr|tw|cn)\.([^\.]+)\.([^\(]+)\((en|de|fr|es|ru|pt|it|ko|zh)\)/i,
			'params': {
				'1': 'region',
				'2': 'realm',
				'3': 'character',
				'4': 'lang'
			}
		},
		'implicit': {
			'match' : /(?:https?:\/\/)?(us\.battle\.net|eu\.battle\.net|kr\.battle\.net|tw\.battle\.net|cn\.battle\.net|www\.battlenet\.com\.cn)\/wow\/(en|de|fr|es|ru|pt|it|ko|zh)\/character\/([^\/]+)\/([^\/]+)\/pvp.*/i,
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
			'call'     : '//<%= this["host"] %>/api/wow/character/<%= this["realm"] %>/<%= this["character"] %>?fields=guild,talents,items,pvp&locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 1)
		}
	},

	'getParams': {
		'explicit': function(result) {
			var params	   = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.character.pvp', 'triggers.explicit.params')));
			params['host']   = DarkTip.map('wow', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		},
		'implicit': function(result) {
			var params	   = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.character.pvp', 'triggers.implicit.params')));
			params['region'] = DarkTip.map('wow', 'maps.host.region', params['host']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		}
	},

	'layout': {
		'width': {
			'core': 400
		}
	},

	'templates': {
		'core': (
			'<div class="tooltip-character tooltip-pvp">' +
				'<img class="darktip-icon" src="<%= this["_meta"]["path_host"] %>/static-render/<%= this["_meta"]["region"] %>/<%= this["character"]["thumbnail"] %>?alt=/wow/static/images/2d/avatar/<%= this["character"]["race"] %>-<%= this["character"]["gender"] %>.jpg" />' +
				 /* --- START simple mode -------------------------------- */
				'<div class="darktip-col-98 darktip-only-s">' +
					'<div class="darktip-headline-right"><span class="darktip-icon-achievenemtpoints"><%= this["character"]["achievementPoints"] %></span></div>' +
					'<div class="darktip-row darktip-headline darktip-cclass-<%= this["character"]["class"] %>"><%= this["character"]["name"] %></div>' +
					'<div class="darktip-row"><%= this._loc("classification") %></div>' +
					'<% if(this["character"]["pvp"]) { %>' +
						'<div class="darktip-row darktip-highlight-medium"><%= this._loc("totalHonorableKills", this["character"]["pvp"]) %></div>' +
						'<%= this._sub("templates.fragments.arenaTeams") %>' +
						'<%= this._sub("templates.fragments.ratedBattlegrounds", this["character"]["pvp"]["ratedBattlegrounds"]) %>' +
					'<% } %>' +
					'<% if(this["_meta"]["extendedActive"]) { %><div class="darktip-row darktip-info-meta"><%= this._loc("extendedInactive") %></div><% } %>' +
				'</div>' +
				 /* --- END simple mode ---------------------------------- */
				 /* --- START extended mode ------------------------------ */
				'<% if(this["_meta"]["extendedActive"]) { %>' +
					'<div class="darktip-col-98 darktip-only-x">' +
						'<div class="darktip-headline-right"><span class="darktip-icon-achievenemtpoints"><%= this["character"]["achievementPoints"] %></span></div>' +
						'<div class="darktip-row darktip-headline darktip-cclass-<%= this["character"]["class"] %>"><%= this["character"]["name"] %></div>' +
						'<div class="darktip-row"><%= this["character"]["realm"] %></div>' +
						'<% if(this["character"]["guild"]) { %><div class="darktip-row darktip-highlight-medium">&lt;<%= this["character"]["guild"]["name"] %>&gt;<% if(this["character"]["guild"]["level"]) { %> (<%= this["character"]["guild"]["level"] %>)<% } %></div><% } %>' +
						'<% if(this["character"]["items"]) { %><div class="darktip-row darktip-highlight-weak"><%= this._loc("itemLevel", this["character"]["items"]) %></div><% } %>' +
						'<div class="darktip-row darktip-highlight-reduced"><%= this._loc("lastModified") %></div>' +
						'<div class="darktip-row darktip-info-meta"><%= this._loc("extendedActive") %></div>' +
					'</div>' +
				'<% } %>' +
				 /* --- END extended mode -------------------------------- */
			'</div>'
		),
		'fragments': {
			'arenaTeams': (
				'<div class="darktip-highlight-weak"><%= this._loc("arenaTeams") %></div>' +
				'<div class="darktip-block darktip-padded">' +
					'<%= this._subLoop("templates.fragments.arenaTeam", this["character"]["pvp"]["arenaTeams"]) %>' +
				'</div>'
			),
			'ratedBattlegrounds': (
				'<div class="darktip-highlight-weak"><%= this._loc("ratedBattlegrounds") %></div>' +
				'<div class="darktip-block darktip-padded">' +
					'<%= this._subLoop("templates.fragments.ratedBattleground", this["battlegrounds"]) %>' +
				'</div>'
			),
			'arenaTeam': (
				'<div class="darktip-row darktip-padded<% if(this["_loop"] % 2 == 0) { %> alt<% } %>">' +
					'<div class="darktip-pos-right darktip-highlight-weak"><%= this["personalRating"] %></div>' +
					'<span><span class="sub darktip-highlight-strong"><%= this["size"] %></span> <%= this["name"] %></span> <span class="sub darktip-highlight-reduced">(<%= this["teamRating"] %>)</span>' +
				'</div>'
			),
			'ratedBattleground': (
				'<div class="darktip-row darktip-padded<% if(this["_loop"] % 2 == 0) { %> alt<% } %>">' +
					'<div class="darktip-pos-right">' +
						'<span class="darktip-highlight-won"><%= this["won"] %></span> - <span class="darktip-highlight-lost"><%= this["played"] - this["won"] %></span>' +
						'<% if(this["played"] > 0) { %> | <span class="darktip-highlight-weak"><%= ((this["won"] / this["played"])*100).toFixed(0) %>%</span><% } %>' +
					'</div>' +
					'<span><%= this["name"] %></span>' +
				'</div>'
			)
		}
	},

	'i18n': {
		'en_US': {
			'totalHonorableKills': 'Honorable Kills: <%= this["totalHonorableKills"] %>',
			'arenaTeams'         : 'Arena teams:',
			'ratedBattlegrounds' : 'Rated Battlegrounds: <%= this["personalRating"] %>'
		},
		'de_DE': {
			'totalHonorableKills': 'Ehrenhafte Siege: <%= this["totalHonorableKills"] %>',
			'arenaTeams'         : 'Arenateams:',
			'ratedBattlegrounds' : 'Gewertete Schlachtfelder: <%= this["personalRating"] %>'
		},
		'fr_FR': {
			'totalHonorableKills': 'Victoires honorables: <%= this["totalHonorableKills"] %>',
			'arenaTeams'         : 'Team d\'ar&egrave;nes:',
			'ratedBattlegrounds' : 'Classement en champ de bataille: <%= this["personalRating"] %>'
		},
		'it_IT': {
			'totalHonorableKills': 'Uccisioni Onorevoli: <%= this["totalHonorableKills"] %>',
			'arenaTeams'         : 'Squadre Arena:',
			'ratedBattlegrounds' : 'Campi di Battaglia Classificati: <%= this["personalRating"] %>'
		}
	}

});

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
				'<img class="darktip-icon" src="<%= this["_meta"]["path_host"] %>/static-render/<%= this["_meta"]["region"] %>/<%= this["character"]["thumbnail"] %>?alt=/wow/static/images/2d/avatar/<%= this["character"]["race"] %>-<%= this["character"]["gender"] %>.jpg" />' +
				/* --- START simple mode -------------------------------- */
				'<div class="darktip-col-98<% if(this["character"]["talentSpecCount"] > 1) { %> darktip-only-s<% } %>">' +
					'<div class="darktip-headline-right"><%= this._loc("specActive") %></div>' +
					'<div class="darktip-row darktip-headline darktip-cclass-<%= this["character"]["class"] %>"><%= this["character"]["name"] %></div>' +
					'<div class="darktip-row"><%= this._loc("classification") %></div>' +
					'<%= this._subLoop("templates.fragments.talentSpecActive", this["character"]["talents"]) %>' +
					'<% if(this["_meta"]["extendedActive"] && (this["character"]["talentSpecCount"] > 1)) { %>' +
						'<div class="darktip-row darktip-info-meta"><%= this._loc("extendedInactive") %></div>' +
					'<% } else { %>' +
						'<div class="darktip-row darktip-info-meta"><%= this._loc("extendedNotAvailable") %></div>' +
					'<% } %>' +
				'</div>' +
				/* --- END simple mode ---------------------------------- */
				/* --- START extended mode ------------------------------ */
				'<% if(this["_meta"]["extendedActive"] && (this["character"]["talentSpecCount"] > 1)) { %>' +
					'<div class="darktip-col-98 darktip-only-x">' +
						'<div class="darktip-headline-right"><%= this._loc("specInactive") %></div>' +
						'<div class="darktip-row darktip-headline darktip-cclass-<%= this["character"]["class"] %>"><%= this["character"]["name"] %></div>' +
						'<div class="darktip-row"><%= this._loc("classification") %></div>' +
						'<%= this._subLoop("templates.fragments.talentSpecInactive", this["character"]["talents"]) %>' +
						'<div class="darktip-row darktip-info-meta"><%= this._loc("extendedActive") %></div>' +
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
					'<div class="darktip-row darktip-spec darktip-block">' +
						'<img class="darktip-icon-18x18" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/<% if(this["spec"]["icon"]) { %><%= this["spec"]["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg"/> ' +
						'<%= this["spec"]["name"] %> <span class="darktip-role">(<%= this["spec"]["role"] %>)</span>' +
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
				'<div class="darktip-block darktip-talent">' +
					'<img class="darktip-icon-10x10" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/<% if(this["spell"]["icon"]) { %><%= this["spell"]["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg"/> ' +
					'<%= this["spell"]["name"] %>' +
				'</div>'
			),
			'talentSpecGlyphMajor': (
				'<div class="darktip-row darktip-spec darktip-block">' +
					'<% if((this["major"]) && (this["major"].length)) { %>' +
						'<div class="darktip-highlight-weak"><%= this._loc("glyphMajor") %></div>' +
						'<%= this._subLoop("templates.fragments.glyph", this["major"]) %>' +
					'<% } else { %>' +
						'<span class="darktip-highlight-weak"><%= this._loc("glyphMajorEmpty") %></span>' +
					'<% } %>' +
				'</div>'
			),
			'talentSpecGlyphMinor': (
				'<div class="darktip-row darktip-spec darktip-block">' +
					'<% if((this["minor"]) && (this["minor"].length)) { %>' +
						'<div class="darktip-highlight-weak"><%= this._loc("glyphMinor") %></div>' +
						'<%= this._subLoop("templates.fragments.glyph", this["minor"]) %>' +
					'<% } else { %>' +
						'<span class="darktip-highlight-weak"><%= this._loc("glyphMinorEmpty") %></span>' +
					'<% } %>' +
				'</div>'
			),
			'glyph': (
				'<div class="darktip-block darktip-glyph">' +
					'<img class="darktip-icon-10x10" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/<% if(this["icon"]) { %><%= this["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg"/> ' +
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
		},
		'it_IT': {
			'loading'             : 'Caricamento personaggio...',
			'not-found'           : 'Personaggio non trovato',
			'extendedInactive'    : 'Tieni premuto [<%= this["_meta"]["extendedKeyCodeLabel"] %>] per visualizzare la specializzazione inattiva',
			'extendedActive'      : 'Rilascia [<%= this["_meta"]["extendedKeyCodeLabel"] %>] per visualizzare la specializzazione attiva',
			'extendedNotAvailable': 'Nessuna specializzazione alternativa disponibile',
			'glyphMajor'          : 'Glifi maggiori:',
			'glyphMinor'          : 'Glifi minori:',
			'glyphMajorEmpty'     : 'Nessun glifo maggiore utilizzato',
			'glyphMinorEmpty'     : 'Nessun glifo minore utilizzato',
			'specActive'          : 'Specializzazione attiva',
			'specInactive'        : 'Specializzazione inattiva'
		}
	}

});


DarkTip.registerModule('wow.item', {

	'triggers': {
		'explicit': {
			'match' : /wow\.item:(us|eu|kr|tw|cn)\.([^\(]+)\((en|de|fr|es|ru|pt|it|ko|zh)\)/i,
			'params': {
				'1': 'region',
				'2': 'itemid',
				'3': 'lang'
			}
		},
		'implicit': {
			'match' : /(?:https?:\/\/)?(us\.battle\.net|eu\.battle\.net|kr\.battle\.net|tw\.battle\.net|cn\.battle\.net|www\.battlenet\.com\.cn)\/wow\/(en|de|fr|es|ru|pt|it|ko|zh)\/item\/([^\/#]+).*/i,
			'params': {
				'1': 'host',
				'2': 'lang',
				'3': 'itemid'
			},
			'decorate': function(element, params, data) {

				var color_quality = DarkTip.map('wow.item', 'maps.quality.color', data['item']['quality']);
				var mediahost     = DarkTip.map('wow', 'maps.region.mediahost', params['region']);
				var icon_item     = 'http://' + mediahost + '/wow/icons/18/' + data['item']['icon'] + '.jpg';

				DarkTip.jq(element).css(DarkTip['data']['settings']['decorativeMode']['default']);
				DarkTip.jq(element).css({'color': color_quality});
				DarkTip.jq(element).prepend('<img src="' + icon_item + '" style="vertical-align: middle;" /> ');
			}
		}
	},

	'queries': {
		'item': {
			'required' : true,
			'condition': true,
			'call'     : '//<%= this["host"] %>/api/wow/item/<%= this["itemid"] %>?locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 90)
		},
		'itemclass': {
			'required' : true,
			'condition': true,
			'call'     : '//<%= this["host"] %>/api/wow/data/item/classes?locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 90)
		},
		'itemset': {
			'required' : false,
			'condition': 'item.itemSet',
			'call'     : '//<%= this["host"] %>/api/wow/item/set/<%= this["condition"]["id"] %>?locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 90)
		}
	},

	'patterns': {
		'money': /^([0-9]+)([0-9]{2})([0-9]{2})$|([0-9]{1,2})([0-9]{2})$|([0-9]{1,2})$/i
	},

	'maps': {
		'quality': {
			'color': {
				'0': '#9D9D9D',
				'1': '#FFFFFF',
				'2': '#1EFF00',
				'3': '#0070FF',
				'4': '#C600FF',
				'5': '#FF8000',
				'6': '#E6CC80',
				'7': '#E6CC80'
			}
		},
		'stats': {
			'primary': {
				'3': 'Agility',
				'4': 'Strength',
				'5': 'Intellect',
				'6': 'Spirit',
				'7': 'Stamina'
			},
			'secondary': {
				'13': 'Dodge rating',
				'14': 'Parry rating',
				'31': 'Hit rating',
				'32': 'Critical strike rating',
				'35': 'PvP resilence rating',
				'36': 'Haste rating',
				'37': 'Expertise rating',
				'38': 'Attack power',
				'46': 'Health regeneration',
				'45': 'Spell power',
				'47': 'Spell penetration',
				'49': 'Mastery rating',
				'57': 'PvP power rating'
			}
		}
	},

	'prepareData': function(state) {

		if(Object.keys(state['data']).length === 0)
		{
			return false;
		}

		if(
			(typeof state['data']['item'] !== 'undefined') &&
			(typeof state['data']['item']['itemClass'] !== 'undefined') &&
			(typeof state['data']['item']['itemSubClass'] !== 'undefined') &&
			(typeof state['data']['itemclass'] !== 'undefined') &&
			(typeof state['data']['itemclass']['classes'] !== 'undefined')
		)
		{
			for(var i = 0; i < state['data']['itemclass']['classes'].length; i++)
			{
				var citemclass = state['data']['itemclass']['classes'][i];

				if(citemclass['class'] == state['data']['item']['itemClass'])
				{
					for (var j = 0; j < citemclass['subclasses'].length; j++)
					{
						var citemsubclass = citemclass['subclasses'][j];

						if(citemsubclass['subclass'] == state['data']['item']['itemSubClass'])
						{
							state['data']['item']['itemClassLoc'] = citemsubclass['name'];
						}
					}
				}
			}
		}

		return state['data'];
	},

	'getParams': {
		'explicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.item', 'triggers.explicit.params')));
			params['host']   = DarkTip.map('wow', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		},
		'implicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.item', 'triggers.implicit.params')));
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
		'tools': {
			'_isStatPrimary': function(statid) {
				var result = DarkTip.map(this['_meta']['module'], 'maps.stats.primary', statid);
				return (result !== undefined);
			},
			'_isStatSecondary': function(statid) {
				var result = DarkTip.map(this['_meta']['module'], 'maps.stats.secondary', statid);
				return (result !== undefined);
			},
			'_renderCoins': function(total) {
				var temp   = total.toString();
				var result = temp.match(DarkTip.read(this['_meta']['module'], 'patterns.money'));
				var split  = {
					'gold'  : -1,
					'silver': -1,
					'copper': 0
				};
				if(result)
				{
					if(result[3] !== undefined)
					{
						split = {
							'gold'  : parseInt(result[1]),
							'silver': parseInt(result[2]),
							'copper': parseInt(result[3])
						};
					}
					else if(result[5] !== undefined)
					{
						split = {
							'gold'  : -1,
							'silver': parseInt(result[4]),
							'copper': parseInt(result[5])
						};
					}
					else
					{
						split = {
							'gold'  : -1,
							'silver': -1,
							'copper': parseInt(result[6])
						};
					}
				}
				return DarkTip.jq.jqote(
					DarkTip.read(this['_meta']['module'], 'templates.fragments.coins'),
					DarkTip.jq.extend(true, {}, DarkTip.getTemplateTools(this['_meta']['module'], this['_meta']['locale']), split)
				);
			}
		},
		'core': (
			'<div class="tooltip-item">' +
				'<img class="darktip-icon" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/56/<% if(this["item"]["icon"]) { %><%= this["item"]["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg" />' +
				 // --- START simple mode -----------------------------------
				'<div class="darktip-col-70 darktip-only-s">' +
					'<div class="darktip-headline-right"><%= this["item"]["itemLevel"] %></div>' +
					'<div class="darktip-row darktip-headline darktip-cquality-<%= this["item"]["quality"] %>"><%= this["item"]["name"] %></div>' +
					'<% if(this["item"]["heroic"]) { %><div class="darktip-row"><%= this._loc("heroic") %></div><% } %>' +
					'<% if(this["item"]["boundZone"]) { %><div class="darktip-row"><%= this["item"]["boundZone"]["name"] %></div><% } %>' +
					'<% if(this["item"]["itemBind"]) { %>' +
						'<div class="darktip-row">' +
							'<% if(this["item"]["quality"] == 7) { %>' +
								'<%= this._loc("itemBind.4") %>' +
							'<% } else { %>' +
								'<%= this._loc("itemBind." + this["item"]["itemBind"]) %>' +
							'<% } %>' +
						'</div>' +
					'<% } %>' +
					'<% if(this["item"]["maxCount"]) { %><div class="darktip-row"><%= this._loc("maxCount") %></div><% } %>' +
					'<div class="darktip-row classification">' +
						'<% if(this["item"]["containerSlots"]) { %>' +
							'<%= this._loc("containerSlots") %>' +
						'<% } else { %>' +
							'<% if(this["item"]["equippable"]) { %>' +
								'<%= this._loc("inventoryType." + this["item"]["inventoryType"]) %>' +
								'<div class="darktip-pos-right"><%= this["item"]["itemClassLoc"] %></div>' +
							'<% } else { %>' +
								'<%= this["item"]["itemClassLoc"] %>' +
							'<% } %>' +
						'<% } %>' +
					'</div>' +
					'<% if(this["item"]["baseArmor"]) { %><div class="darktip-row"><%= this._loc("baseArmor") %></div><% } %>' +
					'<% if(this["item"]["weaponInfo"]) { %>' +
						'<div>' +
							'<div class="darktip-row"><%= this._loc("damage", this["item"]["weaponInfo"]["damage"]) %></div>' +
							'<div class="darktip-pos-right"><%= this._loc("weaponSpeed", this["item"]["weaponInfo"]) %></div>' +
							'<div class="darktip-row"><%= this._loc("dps", this["item"]["weaponInfo"]) %></div>' +
						'</div>' +
					'<% } %>' +
					'<%= this._subLoop("templates.fragments.stat.primary", this["item"]["bonusStats"]) %>' +
					'<%= this._subLoop("templates.fragments.stat.secondary", this["item"]["bonusStats"]) %>' +
					'<% if(this["item"]["gemInfo"]) { %><div class="darktip-row"><%= this["item"]["gemInfo"]["bonus"]["name"] %></div><% } %>' +
					'<% if(this["item"]["socketInfo"]) { %><div class="darktip-block darktip-sockets"><%= this._subLoop("templates.fragments.socket", this["item"]["socketInfo"]["sockets"]) %></div><% if(this["item"]["socketInfo"]["socketBonus"]) { %><div class="darktip-row darktip-highlight-reduced"><%= this._loc("socketBonus") %></div><% } %><% } %>' +
					'<% if(this["item"]["allowableClasses"]) { %><div class="darktip-row"><%= this._loc("allowableClasses") %></div><% } %>' +
					'<% if(this["item"]["allowableRaces"]) { %><div class="darktip-row"><%= this._loc("allowableRaces") %></div><% } %>' +
					'<% if(this["item"]["requiredLevel"] > 1) { %><div class="darktip-row"><%= this._loc("requiredLevel") %></div><% } %>' +
					'<% if(this["item"]["requiredSkill"]) { %><div class="darktip-row"><%= this._loc("requiredSkill") %></div><% } %>' +
					'<% if(this["item"]["requiredAbility"]) { %><div class="darktip-row"><%= this._loc("requiredAbility") %></div><% } %>' +
					'<% if(this["item"]["minFactionId"]) { %><div class="darktip-row"><%= this._loc("minFactionId") %></div><% } %>' +
					'<%= this._subLoop("templates.fragments.stat.spell", this["item"]["itemSpells"]) %>' +
					'<% if(this["item"]["description"]) { %><div class="darktip-row darktip-highlight-medium">&quot;<%= this["item"]["description"] %>&quot;</div><% } %>' +
					'<% if(this["item"]["itemSet"]) { %><div class="darktip-row darktip-padded-above">' +
						'<div class="darktip-row darktip-highlight-medium"><%= this["item"]["itemSet"]["name"] %></div>' +
						'<div class="darktip-row darktip-padded-above"><%= this._subLoop("templates.fragments.stat.setBonus", this["item"]["itemSet"]["setBonuses"]) %></div>' +
					'</div><% } %>' +
					'<% if(this["_meta"]["extendedActive"]) { %><div class="darktip-row darktip-info-meta"><%= this._loc("extendedInactive") %></div><% } %>' +
				'</div>' +
				// --- END simple mode -------------------------------------
				// --- START extended mode ---------------------------------
				'<% if(this["_meta"]["extendedActive"]) { %>' +
					'<div class="darktip-col-70 darktip-only-x">' +
						'<div class="darktip-headline-right"><%= this["item"]["itemLevel"] %></div>' +
						'<div class="darktip-row darktip-headline darktip-cquality-<%= this["item"]["quality"] %>"><%= this["item"]["name"] %></div>' +
						'<div class="darktip-row darktip-highlight-strong"><%= this._loc("itemId") %></div>' +
						'<% if(this["item"]["maxDurability"]) { %><div class="darktip-row"><%= this._loc("maxDurability") %></div><% } %>' +
						'<% if(this["item"]["isAuctionable"]) { %><div class="darktip-row"><%= this._loc("auctionable") %></div><% } %>' +
						'<div class="darktip-row"><%= this._loc("disenchantable") %></div>' +
						'<% if(this["item"]["stackable"] > 1) { %><div class="darktip-row"><%= this._loc("stackable") %></div><% } %>' +
						'<div class="darktip-row"><%= this._loc("sellPrice") %></div>' +
						'<div class="darktip-row darktip-info-meta"><%= this._loc("extendedActive") %></div>' +
					'</div>' +
				'<% } %>' +
				// --- END extended mode -----------------------------------
			'</div>'
		),
		'404': (
			'<div class="tooltip-item darktip-tooltip-404">' +
				'<div class="darktip-title">404<span class="darktip-sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.item") %></span> <span class="value"><%= this["itemid"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
			'</div>'
		),
		'fragments': {
			'allowableClass': '<span class="darktip-cclass-<%= this["_value"] %>"><%= this._loc("characterClass." + this["_value"] + ".0")%></span>',
			'allowableRace' : '<span class="crace-<%= this["_value"] %>"><%= this._loc("characterRace." + this["_value"] + ".0")%></span>',
			'coins'         : (
				'<% if(this["gold"] > -1) { %><span class="darktip-icon-gold"><%= this["gold"] %></span><% } %>' +
				'<% if(this["silver"] > -1) { %><span class="darktip-icon-silver"><%= this["silver"] %></span><% } %>' +
				'<% if(this["copper"]) { %><span class="darktip-icon-copper"><%= this["copper"] %></span><% } else { %>' +
				'<span class="darktip-icon-copper">0</span><% } %>'
			),
			'stat'          : {
				'primary'  : (
					'<% if(this._isStatPrimary(this["stat"])) { %>' +
						'<div class="darktip-row">' +
							'<% if(this["amount"] >= 0) { %>+<% } %><%= this["amount"] %> <%= this._loc("itemStat." + this["stat"]) %>' +
						'</div>' +
					'<% }'
				),
				'secondary': (
					'<% if(this._isStatSecondary(this["stat"])) { %>' +
						'<div class="darktip-row darktip-highlight-custom">' +
							'<% if(this["amount"] >= 0) { %>+<% } %><%= this["amount"] %> <%= this._loc("itemStat." + this["stat"]) %>' +
						'</div>' +
					'<% }'
				),
				'spell'    : (
					'<% if(this["spell"]["description"]) { %>' +
						'<div class="darktip-row darktip-highlight-custom">' +
							'<% if(this["trigger"] == "ON_EQUIP") { %>' +
								'<%= this._loc("itemSpell.onEquip") %>' +
							'<% } else if(this["trigger"] == "ON_USE") { %>' +
								'<%= this._loc("itemSpell.onUse") %>' +
							'<% } else if(this["trigger"] == "ON_PROC") { %>' +
								'<%= this._loc("itemSpell.onProc") %>' +
							'<% } else { %>' +
								'<%= this._loc("itemSpell.unknown") %>' +
							'<% } %>' +
						'</div>' +
					'<% } %>'
				),
				'setBonus' : '<div class="darktip-row <% if(this["active"]) { %>darktip-highlight-custom<% } else { %>darktip-highlight-reduced<% } %>"><%= this._loc("setBonus") %></div>'
			},
			'socket': (
				'<div class="darktip-row darktip-socket darktip-highlight-reduced">' +
					'<span class="darktip-icon-socket darktip-socket-<%= this["type"] %>">' +
						'<span class="darktip-empty"></span><span class="darktip-frame"></span>' +
					'</span>' +
					'<%= this._loc("itemSocket." + this["type"]) %>' +
				'</div>'
			)
		}
	},

	'i18n': {
		'en_US': {
			'loading'          : 'Loading item...',
			'not-found'        : 'Item not found',
			'itemId'           : 'Item ID: <%= this["item"]["id"] %>',
			'heroic'           : 'Heroic',
			'maxCount'         : 'Unique<% if(this["item"]["maxCount"] > 1) { %> (<%= this["item"]["maxCount"] %>)<% } %>',
			'containerSlots'   : '<%= this["item"]["containerSlots"] %> Slot <%= this["item"]["itemClassLoc"] %>',
			'damage'           : '<%= this["min"] %> - <%= this["max"] %> Damage',
			'weaponSpeed'      : 'Speed <%= this["weaponSpeed"] %>',
			'dps'              : '(<%= this["dps"].toFixed(2) %> damage per second)',
			'baseArmor'        : '<%= this["item"]["baseArmor"] %> Armor',
			'maxDurability'    : 'Durability <%= this["item"]["maxDurability"] %> / <%= this["item"]["maxDurability"] %>',
			'requiredLevel'    : 'Requires Level <%= this["item"]["requiredLevel"] %>',
			'requiredSkill'    : 'Requires <%= this._loc("characterSkill." + this["item"]["requiredSkill"]) %> (<%= this["item"]["requiredSkillRank"] %>)',
			'requiredAbility'  : 'Requires <%= this["item"]["requiredAbility"]["name"] %>',
			'minFactionId'     : 'Requires Faction ID <%= this["item"]["minFactionId"] %> - <%= this._loc("reputationLevel." + this["item"]["minReputation"]) %>',
			'allowableClasses' : 'Classes: <%= this._subLoop("templates.fragments.allowableClass", this["item"]["allowableClasses"], ", ") %>',
			'allowableRaces'   : 'Races: <%= this._subLoop("templates.fragments.allowableRace", this["item"]["allowableRaces"], ", ") %>',
			'itemStat'         : {
				'3' : 'Agility',
				'4' : 'Strength',
				'5' : 'Intellect',
				'6' : 'Spirit',
				'7' : 'Stamina',
				'25': 'Arcane Resistance',
				'26': 'Fire Resistance',
				'27': 'Nature Resistance',
				'28': 'Frost Resistance',
				'29': 'Shadow Resistance',
				'30': 'Holy Resistance',
				'13': 'Dodge',
				'14': 'Parry',
				'31': 'Hit',
				'32': 'Critical Strike',
				'35': 'Pvp Resilience',
				'36': 'Haste',
				'37': 'Expertise',
				'38': 'Attack Power',
				'46': 'Health Regeneration',
				'45': 'Spell Power',
				'49': 'Mastery',
				'50': 'Armor',
				'57': 'Pvp Power'
			},
			'itemSpell'        : {
				'onEquip': 'Equip: <%= this["spell"]["description"] %>',
				'onUse'  : 'Use: <%= this["spell"]["description"] %>',
				'onProc' : 'Chance on hit: <%= this["spell"]["description"] %>',
				'unknown': '<%= this["spell"]["description"] %>'
			},
			'setBonus'         : '(<%= this["threshold"] %>) Set: <%= this["description"] %>',
			'sellPrice'        : 'Sell Price: <%= this._renderCoins(this["item"]["sellPrice"]) %>',
			'stackable'        : 'Stackable (<%= this["item"]["stackable"] %>)',
			'disenchantable'   : '<% if(this["item"]["disenchantingSkillRank"]) { %>Can be disenchanted (<%= this["item"]["disenchantingSkillRank"] %>)<% } else { %>Cannot be disenchanted<% } %>',
			'auctionable'      : 'Can be auctioned',
			'itemBind'         : { '1': 'Binds when picked up', '2': 'Binds when equipped', '3': 'Binds when used', '4': 'Binds to Battle.net account' },
			'itemSocket'       : {
				'BLUE'     : 'Blue Socket',
				'RED'      : 'Red Socket',
				'YELLOW'   : 'Yellow Socket',
				'META'     : 'Meta Socket',
				'ORANGE'   : 'Orange Socket',
				'PURPLE'   : 'Purple Socket',
				'GREEN'    : 'Green Socket',
				'PRISMATIC': 'Prismatic Socket',
				'HYDRAULIC': 'Hydraulic Socket',
				'COGWHEEL' : 'Cogwheel Socket'
			},
			'socketBonus'      : 'Socket Bonus: <%= this["item"]["socketInfo"]["socketBonus"] %>',
			'reputationLevel'  : { '0': 'Hated', '1': 'Hostile', '2': 'Unfriendly', '3': 'Neutral', '4': 'Friendly', '5': 'Honored', '6': 'Revered', '7': 'Exalted' },
			'inventoryType'   : { '1': 'Head', '2': 'Neck', '3': 'Shoulder', '4': 'Shirt', '5': 'Chest', '6': 'Waist', '7': 'Legs', '8': 'Feet', '9': 'Wrist', '10': 'Hands', '11': 'Finger', '12': 'Trinket', '13': 'One-Hand', '15': 'Ranged' /* Bow */, '16': 'Back', '17': 'Two-Hand', '18': 'Bag', '20': 'Chest', '21': 'Main-hand', '22': 'Off-hand', '23': 'Held in off-hand', '25': 'Ranged' /* Thrown */, '26': 'Ranged' /* Gun, Crossbow, Wand */ }
		},
		'de_DE': {
			'loading'          : 'Lade Gegenstand...',
			'not-found'        : 'Gegenstand nicht gefunden',
			'itemId'           : 'Gegenstands ID: <%= this["item"]["id"] %>',
			'heroic'           : 'Heroisch',
			'maxCount'         : 'Einzigartig<% if(this["item"]["maxCount"] > 1) { %> (<%= this["item"]["maxCount"] %>)<% } %>',
			'containerSlots'   : '<%= this["item"]["containerSlots"] %> Platz <%= this["item"]["itemClassLoc"] %>',
			'damage'           : '<%= this["min"] %> - <%= this["max"] %> Schaden',
			'weaponSpeed'      : 'Geschwindigkeit <%= this["weaponSpeed"] %>',
			'dps'              : '(<%= this["dps"].toFixed(2) %> Schaden pro Sekunde)',
			'baseArmor'        : '<%= this["item"]["baseArmor"] %> R&uuml;stung',
			'maxDurability'    : 'Haltbarkeit <%= this["item"]["maxDurability"] %> / <%= this["item"]["maxDurability"] %>',
			'requiredLevel'    : 'Erfordert Stufe <%= this["item"]["requiredLevel"] %>',
			'requiredSkill'    : 'Erfordert <%= this._loc("characterSkill." + this["item"]["requiredSkill"]) %> (<%= this["item"]["requiredSkillRank"] %>)',
			'requiredAbility'  : 'Erfordert <%= this["item"]["requiredAbility"]["name"] %>',
			'minFactionId'     : 'Erfordert Fraktion ID <%= this["item"]["minFactionId"] %> - <%= this._loc("reputationLevel." + this["item"]["minReputation"]) %>',
			'allowableClasses' : 'Klassen: <%= this._subLoop("templates.fragments.allowableClass", this["item"]["allowableClasses"], ", ") %>',
			'allowableRaces'   : 'Rassen: <%= this._subLoop("templates.fragments.allowableRace", this["item"]["allowableRaces"], ", ") %>',
			'itemStat'         : {
				'3' : 'Beweglichkeit',
				'4' : 'St&auml;rke',
				'5' : 'Intelligenz',
				'6' : 'Willenskraft',
				'7' : 'Ausdauer',
				'25': 'Arkanwiderstand',
				'26': 'Feuerwiderstand',
				'27': 'Naturwiderstand',
				'28': 'Frostwiderstand',
				'29': 'Schattenwiderstand',
				'30': 'Heiligwiderstand',
				'13': 'Ausweichwen',
				'14': 'Parrieren',
				'31': 'Treffer',
				'32': 'Kritische Treffer',
				'35': 'PvP Abh&auml;rtung',
				'36': 'Tempo',
				'37': 'Waffenkunde',
				'38': 'Angriffskraft',
				'46': 'Gesundheitsregenartion',
				'45': 'Zaubermacht',
				'49': 'Meisterschaftswertung',
				'50': 'R&uml;stung',
				'57': 'PvP Macht'
			},
			'itemSpell'        : {
				'onEquip': 'Anlegen: <%= this["spell"]["description"] %>',
				'onUse'  : 'Benutzen: <%= this["spell"]["description"] %>',
				'onProc' : 'Trefferchance: <%= this["spell"]["description"] %>',
				'unknown': '<%= this["spell"]["description"] %>'
			},
			'setBonus'         : '(<%= this["threshold"] %>) Set: <%= this["description"] %>',
			'sellPrice'        : 'Verkaufspreis: <%= this._renderCoins(this["item"]["sellPrice"]) %>',
			'stackable'        : 'Stapelbar (<%= this["item"]["stackable"] %>)',
			'disenchantable'   : '<% if(this["item"]["disenchantingSkillRank"]) { %>Kann entzaubert werden (<%= this["item"]["disenchantingSkillRank"] %>)<% } else { %>Kann nicht entzaubert werden<% } %>',
			'auctionable'      : 'Kann versteigert werden',
			'itemBind'         : { '1': 'Wird beim Aufheben gebunden', '2': 'Wird beim Anlegen gebunden', '3': 'Wird bei Benutzung gebunden', '4': 'Wird an Battle.net-Account gebunden' },
			'itemSocket'       : {
				'BLUE'     : 'Blauer Sockel',
				'RED'      : 'Roter Sockel',
				'YELLOW'   : 'Gelber Sockel',
				'META'     : 'Meta Sockel',
				'ORANGE'   : 'Orangener Sockel',
				'PURPLE'   : 'Lila Sockel',
				'GREEN'    : 'Gr&uuml;ner Sockel',
				'PRISMATIC': 'Prismatischer Sockel',
				'HYDRAULIC': 'Hydraulischer Sockel',
				'COGWHEEL' : 'Zahnrad Sockel'
			},
			'socketBonus'      : 'Sockelbonus: <%= this["item"]["socketInfo"]["socketBonus"] %>',
			'reputationLevel'  : { '0': 'Haßerf&szlig;uuml;llt', '1': 'Feindselig', '2': 'Unfreundlich', '3': 'Neutral', '4': 'Freundlich', '5': 'Wohlwollend', '6': 'Respektvoll', '7': 'Ehrf&uuml;rchtig' },
			'inventoryType'    : { '1': 'Kopf', '2': 'Nacken', '3': 'Schulter', '4': 'Hemd', '5': 'Brust', '6': 'Taille', '7': 'Beine', '8': 'F&uuml;&szlig;e', '9': 'Handgelenke', '10': 'H&auml;nde', '11': 'Finger', '12': 'Schmuckst&uuml;ck', '13': 'Einh&auml;ndig', '15': 'Distanz' /* Bogen */, '16': 'R&uuml;cken', '17': 'Zweih&auml;ndig', '18': 'Tasche', '20': 'Brust', '21': 'Waffenhand', '22': 'Schildhand', '23': 'In Schildhand gef&uuml;hrt', '25': 'Distanz' /* Wurfwaffe */, '26': 'Distanz' /* Gewehr, Armbrust, Zauberstab */ }
		},
		'fr_FR': {
			'loading'          : 'Chargement Objets...',
			'not-found'        : 'Objet introuvable',
			'itemId'           : 'ID Objets: <%= this["item"]["id"] %>',
			'heroic'           : 'H&eacute;roïc',
			'maxCount'         : 'Unique<% if(this["item"]["maxCount"] > 1) { %> (<%= this["item"]["maxCount"] %>)<% } %>',
			'containerSlots'   : '<%= this["item"]["containerSlots"] %> Slot <%= this["item"]["itemClassLoc"] %>',
			'damage'           : '<%= this["min"] %> - <%= this["max"] %> D&eacute;g&acirc;ts',
			'weaponSpeed'      : 'Vitesse <%= this["weaponSpeed"] %>',
			'dps'              : '(<%= this["dps"].toFixed(2) %> domage par second)',
			'baseArmor'        : '<%= this["item"]["baseArmor"] %> Armure',
			'maxDurability'    : 'Durabilit&eacute; <%= this["item"]["maxDurability"] %> / <%= this["item"]["maxDurability"] %>',
			'requiredLevel'    : 'Niveau <%= this["item"]["requiredLevel"] %> requis',
			'requiredSkill'    : 'Requiert <%= this._loc("characterSkill." + this["item"]["requiredSkill"]) %> (<%= this["item"]["requiredSkillRank"] %>)',
			'requiredAbility'  : 'Requiert <%= this["item"]["requiredAbility"]["name"] %>',
			'minFactionId'     : 'Requiert Faction ID <%= this["item"]["minFactionId"] %> - <%= this._loc("reputationLevel." + this["item"]["minReputation"]) %>',
			'allowableClasses' : 'Classes: <%= this._subLoop("templates.fragments.allowableClass", this["item"]["allowableClasses"], ", ") %>',
			'allowableRaces'   : 'Races: <%= this._subLoop("templates.fragments.allowableRace", this["item"]["allowableRaces"], ", ") %>',
			'itemStat'         : {
				'3' : 'Agilit&eacute;',
				'4' : 'Force',
				'5' : 'Intelligence',
				'6' : 'Esprit',
				'7' : 'Endurance',
				'25': 'Arcane Resistance',
				'26': 'Fire Resistance',
				'27': 'Nature Resistance',
				'28': 'Frost Resistance',
				'29': 'Shadow Resistance',
				'30': 'Holy Resistance',
				'13': 'Score d\'esquive',
				'14': 'Score de parade',
				'31': 'Score de toucher',
				'32': 'Score de coup critique',
				'35': 'Score de pvp resilience',
				'36': 'Score de h&acirc;te',
				'37': 'Score d\'expertise',
				'38': 'Puissance d\'attaque',
				'46': 'R&eacute;g&eacute;n&eacute;ration de vie',
				'45': 'Puissance des sorts',
				'49': 'Score maîtrise',
				'50': 'Armor',
				'57': 'Score de pvp power'
			},
			'itemSpell'        : {
				'onEquip': 'Equip&eacute; : <%= this["spell"]["description"] %>',
				'onUse'  : 'Utilis&eacute; : <%= this["spell"]["description"] %>',
				'onProc' : 'Chances quand vous touchez : <%= this["spell"]["description"] %>',
				'unknown': '<%= this["spell"]["description"] %>'
			},
			'setBonus'         : '(<%= this["threshold"] %>) Ensemble : <%= this["description"] %>',
			'sellPrice'        : 'Prix de vente: <%= this._renderCoins(this["item"]["sellPrice"]) %>',
			'stackable'        : 'Empilable (<%= this["item"]["stackable"] %>)',
			'disenchantable'   : '<% if(this["item"]["disenchantingSkillRank"]) { %>Peut &ecirc;tre d&eacute;senchant&eacute; (<%= this["item"]["disenchantingSkillRank"] %>)<% } else { %>Ne peut pas &ecirc;tre d&eacute;senchant&eacute;<% } %>',
			'auctionable'      : 'Peut &ecirc;tre vendu',
			'itemBind'         : { '1': 'Li&eacute; quand ramass&eacute;', '2': 'Li&eacute; quand &eacute;quip&eacute;', '3': 'Li&eacute; quand utilis&eacute;', '4': 'Li&eacute; au compte Battle.net' },
			'itemSocket'       : {
				'BLUE'     : 'Ch&acirc;sse bleue',
				'RED'      : 'Ch&acirc;sse rouge',
				'YELLOW'   : 'Ch&acirc;sse jaune',
				'META'     : 'M&eacute;ta-ch&acirc;sse',
				'ORANGE'   : 'Ch&acirc;sse orange',
				'PURPLE'   : 'Ch&acirc;sse Violette',
				'GREEN'    : 'Ch&acirc;sse verte',
				'PRISMATIC': 'Ch&acirc;sse prismatique',
				'HYDRAULIC': 'Ch&acirc;sse Hydraulique',
				'COGWHEEL' : 'Chambre de roue dent&eacute;e'
			},
			'socketBonus'      : 'Bonus de sertissage: <%= this["item"]["socketInfo"]["socketBonus"] %>',
			'reputationLevel'  : { '0': 'Haï', '1': 'Hostile', '2': 'Inamical', '3': 'Neutre', '4': 'Amical', '5': 'Honor&eacute;', '6': 'R&eacute;v&eacute;r&eacute;', '7': 'Exalt&eacute;' },
			'inventoryType'   : { '1': 'T&ecirc;te', '2': 'Cou', '3': 'Epaule', '4': 'Chemise', '5': 'Torse', '6': 'Taille', '7': 'Jambes', '8': 'Pieds', '9': 'Poignets', '10': 'Mains', '11': 'Doigt', '12': 'Bijou', '13': 'A une mains', '15': 'Ranged' /* Bow */, '16': 'Back', '17': 'A deux mains', '18': 'Sac', '20': 'Torse', '21': 'Main-hand', '22': 'Off-hand', '23': 'Held in off-hand', '25': 'Ranged' /* Thrown */, '26': 'Ranged' /* Gun, Crossbow, Wand */ }
		},
		'es_ES': {
			'loading'          : 'Cargando objeto...',
			'not-found'        : 'Objeto no encontrado',
			'itemId'           : 'ID de Objeto: <%= this["item"]["id"] %>',
			'heroic'           : 'Heroico',
			'maxCount'         : '&Uacute;nico<% if(this["item"]["maxCount"] > 1) { %> (<%= this["item"]["maxCount"] %>)<% } %>',
			'containerSlots'   : '<%= this["item"]["itemClassLoc"] %> con <%= this["item"]["containerSlots"] %> Casillas',
			'damage'           : '<%= this["min"] %> - <%= this["max"] %> Da&ntilde;o',
			'weaponSpeed'      : 'Velocidad <%= this["weaponSpeed"] %>',
			'dps'              : '(<%= this["dps"].toFixed(2) %> da&ntilde;o por segundo)',
			'baseArmor'        : '<%= this["item"]["baseArmor"] %> de armadura',
			'maxDurability'    : 'Durabilidad <%= this["item"]["maxDurability"] %> / <%= this["item"]["maxDurability"] %>',
			'requiredLevel'    : 'Requiere nivel <%= this["item"]["requiredLevel"] %>',
			'requiredSkill'    : 'Requiere <%= this._loc("characterSkill." + this["item"]["requiredSkill"]) %> (<%= this["item"]["requiredSkillRank"] %>)',
			'requiredAbility'  : 'Requiere <%= this["item"]["requiredAbility"]["name"] %>',
			'minFactionId'     : 'Requiere facci&oacute;n con ID <%= this["item"]["minFactionId"] %> - <%= this._loc("reputationLevel." + this["item"]["minReputation"]) %>',
			'allowableClasses' : 'Clases: <%= this._subLoop("templates.fragments.allowableClass", this["item"]["allowableClasses"], ", ") %>',
			'allowableRaces'   : 'Razas: <%= this._subLoop("templates.fragments.allowableRace", this["item"]["allowableRaces"], ", ") %>',
			'itemStat'         : {
				'3' : 'de agilidad',
				'4' : 'de fuerza',
				'5' : 'de intelecto',
				'6' : 'de esp&iacute;ritu',
				'7' : 'de aguante',
				'25': 'Arcane Resistance',
				'26': 'Fire Resistance',
				'27': 'Nature Resistance',
				'28': 'Frost Resistance',
				'29': 'Shadow Resistance',
				'30': 'Holy Resistance',
				'13': 'de esquivar',
				'14': 'de parada',
				'31': 'de golpe',
				'32': 'de golpe cr&iacute;tico',
				'35': 'de pvp temple',
				'36': 'de celeridad',
				'37': 'de pericia',
				'38': 'poder de ataque',
				'46': 'regeneraci&oacute;n de salud',
				'45': 'poder con hechizos',
				'49': '&iacute;ndice de maestr&iacute;a',
				'50': 'Armor',
				'57': 'de pvp power'
			},
			'itemSpell'        : {
				'onEquip': 'Equipar: <%= this["spell"]["description"] %>',
				'onUse'  : 'Uso: <%= this["spell"]["description"] %>',
				'onProc' : 'Probabilidad al acertar: <%= this["spell"]["description"] %>',
				'unknown': '<%= this["spell"]["description"] %>'
			},
			'setBonus'         : '(<%= this["threshold"] %>) Conjunto: <%= this["description"] %>',
			'sellPrice'        : 'Precio de venta: <%= this._renderCoins(this["item"]["sellPrice"]) %>',
			'stackable'        : 'Se puede apilar (<%= this["item"]["stackable"] %>)',
			'disenchantable'   : '<% if(this["item"]["disenchantingSkillRank"]) { %>Se puede desencantar (<%= this["item"]["disenchantingSkillRank"] %>)<% } else { %>No se puede desencantar<% } %>',
			'auctionable'      : 'Se puede subastar',
			'itemBind'         : { '1': 'Se liga al recogerlo', '2': 'Se liga al equiparlo', '3': 'Se liga al usarlo', '4': 'Se liga a la cuenta de Battle.net' },
			'itemSocket'       : {
				'BLUE'     : 'Ranura azul',
				'RED'      : 'Ranura roja',
				'YELLOW'   : 'Ranura amarilla',
				'META'     : 'Ranura meta',
				'ORANGE'   : 'Ranura naranja',
				'PURPLE'   : 'Ranura púrpura',
				'GREEN'    : 'Ranura verde',
				'PRISMATIC': 'Ranura prismática',
				'HYDRAULIC': 'Ranura hidráulica',
				'COGWHEEL' : 'Ranura de engranaje'
			},
			'socketBonus'      : 'Bonus ranura: <%= this["item"]["socketInfo"]["socketBonus"] %>',
			'reputationLevel'  : { '0': 'Odiado', '1': 'Hostil', '2': 'Adverso', '3': 'Neutral', '4': 'Amistoso', '5': 'Honorable', '6': 'Venerado', '7': 'Exaltado' },
			'inventoryType'    : { '1': 'Cabeza', '2': 'Cuello', '3': 'Hombros', '4': 'Camisa', '5': 'Pecho', '6': 'Cintura', '7': 'Piernas', '8': 'Pies', '9': 'Mu&ntilde;equeras', '10': 'Manos', '11': 'Dedo', '12': 'Abalorio', '13': 'Una mano', '15': 'A distancia' /* Bow */, '16': 'Espalda', '17': 'Dos manos', '18': 'Bolsa', '20': 'Pecho', '21': 'Mano derecha', '22': 'Mano izquierda', '23': 'Sostener en mano izquierda', '25': 'Arrojadizas' /* Thrown */, '26': 'Arma a distancia' /* Gun,Crossbow,Wand */ }
		},
		'it_IT': {
			'loading'          : 'Carico oggetto...',
			'not-found'        : 'Oggetto non trovato',
			'itemId'           : 'ID Oggetto: <%= this["item"]["id"] %>',
			'heroic'           : 'Eeroico',
			'maxCount'         : 'Unico equipaggiabile <% if(this["item"]["maxCount"] > 1) { %> (<%= this["item"]["maxCount"] %>)<% } %>',
			'containerSlots'   : '<%= this["item"]["containerSlots"] %> Scomparto <%= this["item"]["itemClassLoc"] %>',
			'damage'           : '<%= this["min"] %> - <%= this["max"] %> Danni',
			'weaponSpeed'      : 'Velocità <%= this["weaponSpeed"] %>',
			'dps'              : '(<%= this["dps"].toFixed(2) %> danni al secondo)',
			'baseArmor'        : '<%= this["item"]["baseArmor"] %> Armatura',
			'maxDurability'    : 'Integrità <%= this["item"]["maxDurability"] %> / <%= this["item"]["maxDurability"] %>',
			'requiredLevel'    : 'Richiede il livello <%= this["item"]["requiredLevel"] %>',
			'requiredSkill'    : 'Richiede <%= this._loc("characterSkill." + this["item"]["requiredSkill"]) %> (<%= this["item"]["requiredSkillRank"] %>)',
			'requiredAbility'  : 'Richiede <%= this["item"]["requiredAbility"]["name"] %>',
			'minFactionId'     : 'Richiede la Fazione <%= this["item"]["minFactionId"] %> - <%= this._loc("reputationLevel." + this["item"]["minReputation"]) %>',
			'allowableClasses' : 'Classi: <%= this._subLoop("templates.fragments.allowableClass", this["item"]["allowableClasses"], ", ") %>',
			'allowableRaces'   : 'Razze: <%= this._subLoop("templates.fragments.allowableRace", this["item"]["allowableRaces"], ", ") %>',
			'itemStat'         : {
				'3' : 'Agilià',
				'4' : 'Forza',
				'5' : 'Intelletto',
				'6' : 'Spirito',
				'7' : 'Tempra',
				'25': 'Resistenza all\'Arcano',
				'26': 'Resistenza al Fuoco',
				'27': 'Resistenza alla Natura',
				'28': 'Resistenza al gelo',
				'29': 'Resistenza all\'Ombra',
				'30': 'Resistenza al Sacro',
				'13': 'Schivata',
				'14': 'Parata',
				'31': 'Impatto',
				'32': 'Indice di Critico',
				'35': 'Resilienza PvP',
				'36': 'Celerità',
				'37': 'Perizia',
				'38': 'Indice di Attacco',
				'46': 'Rigenerazione Salute',
				'45': 'Potenza Magica',
				'49': 'Maestria',
				'50': 'Armatura',
				'57': 'Potenza PvP'
			},
			'itemSpell'        : {
				'onEquip': 'Equipaggia: <%= this["spell"]["description"] %>',
				'onUse'  : 'Usa: <%= this["spell"]["description"] %>',
				'onProc' : 'Probabilità all\'impatto: <%= this["spell"]["description"] %>',
				'unknown': '<%= this["spell"]["description"] %>'
			},
			'setBonus'         : '(<%= this["threshold"] %>) Completo: <%= this["description"] %>',
			'sellPrice'        : 'Costo: <%= this._renderCoins(this["item"]["sellPrice"]) %>',
			'stackable'        : 'Impilabile (<%= this["item"]["stackable"] %>)',
			'disenchantable'   : '<% if(this["item"]["disenchantingSkillRank"]) { %>Può essere disincantato (<%= this["item"]["disenchantingSkillRank"] %>)<% } else { %>Non può essere disincantato<% } %>',
			'auctionable'      : 'Può essere venduto all\'asta',
			'itemBind'         : { '1': 'Vincola alla raccolta', '2': 'Vincola all\'equipaggiamento', '3': 'Vincola all\'uso', '4': 'Vincola all\'account Battle.net' },
			'itemSocket'       : {
				'BLUE'     : 'Incavo Blu',
				'RED'      : 'Incavo Rosso',
				'YELLOW'   : 'Incavo Giallo',
				'META'     : 'Incavo Meta',
				'ORANGE'   : 'Incavo Arancione',
				'PURPLE'   : 'Incavo Viola',
				'GREEN'    : 'Incavo Verde',
				'PRISMATIC': 'Incavo Prismatico',
				'HYDRAULIC': 'Incavo Idraulico',
				'COGWHEEL' : 'Incavo Ingranaggio'
			},
			'socketBonus'      : 'Bonus incavo: <%= this["item"]["socketInfo"]["socketBonus"] %>',
			'reputationLevel'  : { '0': 'Odiato', '1': 'Ostile', '2': 'Avverso', '3': 'Neutrale', '4': 'Amichevole', '5': 'Onorato', '6': 'Reverito', '7': 'Osannato' },
			'inventoryType'   : { '1': 'Testa', '2': 'Collo', '3': 'Spalle', '4': 'Camicia', '5': 'Torso', '6': 'Fianchi', '7': 'Gambe', '8': 'Piedi', '9': 'Polsi', '10': 'Mani', '11': 'Dita', '12': 'Monile', '13': 'A una Mano', '15': 'A Distanza' /* Bow */, '16': 'Schiena', '17': 'A due mani', '18': 'Borsa', '20': 'Torso', '21': 'Mano primaria', '22': 'Mano secondaria', '23': 'Accessorio', '25': 'Da Tiro' /* Thrown */, '26': 'A distanza' /* Gun, Crossbow, Wand */ }
		}
	}

});


DarkTip.registerModule('wow.item.equipped', {

	'triggers': {
		'explicit': {
			'match' : /wow\.item\.equipped:(us|eu|kr|tw|cn)\.([^\.]+)\.([^\.]+)\.(head|neck|shoulder|back|chest|shirt|tabard|wrist|hands|waist|legs|feet|finger1|finger2|trinket1|trinket2|mainhand|offhand)\((en|de|fr|es|ru|pt|it|ko|zh)\)/i,
			'params': {
				'1': 'region',
				'2': 'realm',
				'3': 'character',
				'4': 'slot',
				'5': 'lang'
			}
		}
	},

	'queries': {
		'character': {
			'required' : true,
			'condition': true,
			'call'     : '//<%= this["host"] %>/api/wow/character/<%= this["realm"] %>/<%= this["character"] %>?fields=items,audit&locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 1)
		},
		'item': {
			'required' : true,
			'condition': 'character.items.<%= DarkTip.map("wow.item.equipped", "maps.slot", this["slot"].toLowerCase()) %>',
			'call'     : '//<%= this["host"] %>/api/wow/item/<%= this["condition"]["id"] %>?locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 90)
		},
		'itemclass': {
			'required' : true,
			'condition': 'character.items.<%= DarkTip.map("wow.item.equipped", "maps.slot", this["slot"].toLowerCase()) %>',
			'call'     : '//<%= this["host"] %>/api/wow/data/item/classes?locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 90)
		},
		'itemset': {
			'required' : false,
			'condition': 'item.itemSet',
			'call'     : '//<%= this["host"] %>/api/wow/item/set/<%= this["condition"]["id"] %>?locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 90)
		},
		'gem0': {
			'required' : false,
			'condition': 'character.items.<%= DarkTip.map("wow.item.equipped", "maps.slot", this["slot"].toLowerCase()) %>.tooltipParams.gem0',
			'call'     : '//<%= this["host"] %>/api/wow/item/<%= this["condition"] %>?locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 90)
		},
		'gem1': {
			'required' : false,
			'condition': 'character.items.<%= DarkTip.map("wow.item.equipped", "maps.slot", this["slot"].toLowerCase()) %>.tooltipParams.gem1',
			'call'   : '//<%= this["host"] %>/api/wow/item/<%= this["condition"] %>?locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 90)
		},
		'gem2': {
			'required' : false,
			'condition': 'character.items.<%= DarkTip.map("wow.item.equipped", "maps.slot", this["slot"].toLowerCase()) %>.tooltipParams.gem2',
			'call'     : '//<%= this["host"] %>/api/wow/item/<%= this["condition"] %>?locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 90)
		},
		'transmog': {
			'required' : false,
			'condition': 'character.items.<%= DarkTip.map("wow.item.equipped", "maps.slot", this["slot"].toLowerCase()) %>.tooltipParams.transmogItem',
			'call'     : '//<%= this["host"] %>/api/wow/item/<%= this["condition"] %>?locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 90)
		}
		/*
		'enchant': {
			'required' : false,
			'condition': 'character.items.<%= DarkTip.map("wow.item.equipped", "maps.slot", this["slot"].toLowerCase()) %>.tooltipParams.enchant',
			'call'     : '//<%= this["host"] %>/api/wow/spell/<%= this["condition"] %>?locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 90)
		},
		'reforge': {
			'required' : false,
			'condition': 'character.items.<%= DarkTip.map("wow.item.equipped", "maps.slot", this["slot"].toLowerCase()) %>.tooltipParams.reforge',
			'call'     : '//<%= this["host"] %>/api/wow/reforge/<%= this["condition"] %>?locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 90)
		}
		// */
	},

	'maps': {
		'slot': {
			'head'    : 'head',
			'neck'    : 'neck',
			'shoulder': 'shoulder',
			'back'    : 'back',
			'chest'   : 'chest',
			'shirt'   : 'shirt',
			'tabard'  : 'tabard',
			'wrist'   : 'wrist',
			'hands'   : 'hands',
			'waist'   : 'waist',
			'legs'    : 'legs',
			'feet'    : 'feet',
			'finger1' : 'finger1',
			'finger2' : 'finger2',
			'trinket1': 'trinket1',
			'trinket2': 'trinket2',
			'mainhand': 'mainHand',
			'offhand' : 'offHand'
		},
		'match': {
			'socket2gem':{
				'META'    : [ 'META' ],
				'RED'     : [ 'PRISMATIC', 'RED',    'PURPLE', 'ORANGE' ],
				'BLUE'    : [ 'PRISMATIC', 'BLUE',   'PURPLE', 'GREEN' ],
				'YELLOW'  : [ 'PRISMATIC', 'YELLOW', 'ORANGE', 'GREEN' ],
				'COGWHEEL': [ 'COGWHEEL' ]
			}
		}
	},

	'prepareData': function(state) {

		if(Object.keys(state['data']).length === 0)
		{
			return false;
		}

		if(
			(typeof state['data']['item'] !== 'undefined') &&
			(typeof state['data']['item']['itemClass'] !== 'undefined') &&
			(typeof state['data']['item']['itemSubClass'] !== 'undefined') &&
			(typeof state['data']['itemclass'] !== 'undefined') &&
			(typeof state['data']['itemclass']['classes'] !== 'undefined')
		)
		{
			for(var i = 0; i < state['data']['itemclass']['classes'].length; i++)
			{
				var citemclass = state['data']['itemclass']['classes'][i];

				if(citemclass['class'] == state['data']['item']['itemClass'])
				{
					for (var j = 0; j < citemclass['subclasses'].length; j++)
					{
						var citemsubclass = citemclass['subclasses'][j];

						if(citemsubclass['subclass'] == state['data']['item']['itemSubClass'])
						{
							state['data']['item']['itemClassLoc'] = citemsubclass['name'];
						}
					}
				}
			}
		}

		var slot = DarkTip.map("wow.item.equipped", "maps.slot", state['repo']['params']['slot'].toLowerCase());

		// check for socket bonus
		if((typeof state['data']['item'] !== 'undefined') && (typeof state['data']['item']['socketInfo'] !== 'undefined') && (typeof state['data']['item']['socketInfo']['socketBonus'] !== 'undefined'))
		{
			state['data']['item']['socketInfo']['mismatchedGems'] = state['data']['item']['socketInfo']['sockets'].length;

			for(var i = 0; i < state['data']['item']['socketInfo']['sockets'].length; i++)
			{
				var gemkey = 'gem' + i;

				if(typeof state['data'][gemkey] !== 'undefined')
				{
					var matchinggems = DarkTip.map("wow.item.equipped", "maps.match.socket2gem", state['data']['item']['socketInfo']['sockets'][i]['type']);

					if(typeof matchinggems !== 'undefined')
					{
						if(DarkTip.jq.inArray(state['data'][gemkey]['gemInfo']['type']['type'], matchinggems) !== -1)
						{
							state['data']['item']['socketInfo']['mismatchedGems'] = state['data']['item']['socketInfo']['mismatchedGems'] - 1;
						}
					}
				}
			}
		}

		if(DarkTip.compareRule(state['data'], ('character.items.'+slot+'.tooltipParams.extraSocket')))
		{
			if(typeof state['data']['item']['socketInfo'] === 'undefined')
			{
				state['data']['item']['socketInfo'] = { 'sockets': [ { 'type': 'PRISMATIC' } ] };
			}
			else
			{
				state['data']['item']['socketInfo']['sockets'].push({ 'type': 'PRISMATIC' });
			}
		}

		if(typeof state['data']['gem0'] !== 'undefined') state['data']['item']['socketInfo']['sockets'][0]['item'] = state['data']['gem0'];
		if(typeof state['data']['gem1'] !== 'undefined') state['data']['item']['socketInfo']['sockets'][1]['item'] = state['data']['gem1'];
		if(typeof state['data']['gem2'] !== 'undefined') state['data']['item']['socketInfo']['sockets'][2]['item'] = state['data']['gem2'];

		var itemLevelOverride = DarkTip.compareRule(state['data'], ('character.items.'+slot+'.itemLevel'));

		if(itemLevelOverride)
		{
			state['data']['item']['itemLevel'] = itemLevelOverride;
		}

		var statsOverride = DarkTip.compareRule(state['data'], ('character.items.'+slot+'.stats'));

		if(statsOverride && (statsOverride.length > 0))
		{
			state['data']['item']['bonusStats'] = statsOverride;
		}

		var upgradeInfo = DarkTip.compareRule(state['data'], ('character.items.'+slot+'.tooltipParams.upgrade'));

		if(upgradeInfo)
		{
			state['data']['item']['upgradeInfo'] = upgradeInfo;
		}

		var reforgeid = DarkTip.compareRule(state['data'], ('character.items.'+slot+'.tooltipParams.reforge'));

		if(reforgeid)
		{
			var index_source  = -1;
			var index_target  = -1;
			var reforgeamount = 0;

			for(var i = 0; i < state['data']['item']['bonusStats'].length; i++)
			{
				if(typeof state['data']['item']['bonusStats'][i]['reforgedAmount'] !== 'undefined')
				{
					index_source  = i;
					reforgeamount = Math.abs(state['data']['item']['bonusStats'][i]['reforgedAmount']);
				}

				if(typeof state['data']['item']['bonusStats'][i]['reforged'] !== 'undefined')
				{
					index_target = i;
				};
			}

			if(index_source >= 0)
			{
				state['data']['item']['reforge'] = {
					'source': state['data']['item']['bonusStats'][index_source]['stat'],
					'target': state['data']['item']['bonusStats'][index_target]['stat'],
					'amount': reforgeamount
				}
			}
		}

		if(DarkTip.compareRule(state['data'], ('character.items.'+slot+'.tooltipParams.set')))
		{
			var set_equipped = state['data']['character']['items'][slot]['tooltipParams']['set'];

			if(typeof state['data']['item']['itemSet'] !== 'undefined')
			{
				state['data']['item']['itemSet']['equipped'] = set_equipped.length;

				for(var i = 0; i < state['data']['item']['itemSet']['setBonuses'].length; i++)
				{
					if(state['data']['item']['itemSet']['equipped'] >= state['data']['item']['itemSet']['setBonuses'][i]['threshold'])
					{
						state['data']['item']['itemSet']['setBonuses'][i]['active'] = true;
					}
				}
			}
		}

		if(DarkTip.compareRule(state['data'], ('character.items.'+slot+'.name')))
		{
			state['data']['item']['name'] = state['data']['character']['items'][slot]['name'];
		}

		return state['data'];
	},

	'getParams': {
		'explicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.item.equipped', 'triggers.explicit.params')));
			params['host']   = DarkTip.map('wow', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		}
	},

	'templates': {
		'core': (
			'<div class="tooltip-item">' +
				'<img class="darktip-icon" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/56/<% if(this["item"]["icon"]) { %><%= this["item"]["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg" />' +
				 // --- START simple mode -----------------------------------
				'<div class="darktip-col-70 darktip-only-s">' +
					'<div class="darktip-headline-right"><%= this["item"]["itemLevel"] %></div>' +
					'<div class="darktip-row darktip-headline darktip-cquality-<%= this["item"]["quality"] %>"><%= this["item"]["name"] %></div>' +
					'<% if(this["item"]["upgradeInfo"]) { %><div class="darktip-row darktip-highlight-medium"><%= this._loc("upgradeInfo") %></div><% } %>' +
					'<% if(this["transmog"]) { %><div class="darktip-row darktip-highlight-transmog"><%= this._loc("transmogged") %></div><% } %>' +
					'<% if(this["item"]["heroic"]) { %><div class="darktip-row"><%= this._loc("heroic") %></div><% } %>' +
					'<% if(this["item"]["boundZone"]) { %><div class="darktip-row"><%= this["item"]["boundZone"]["name"] %></div><% } %>' +
					'<% if(this["item"]["itemBind"]) { %>' +
						'<div class="darktip-row">' +
							'<% if(this["item"]["quality"] == 7) { %>' +
								'<%= this._loc("itemBind.4") %>' +
							'<% } else { %>' +
								'<%= this._loc("itemBind." + this["item"]["itemBind"]) %>' +
							'<% } %>' +
						'</div>' +
					'<% } %>' +
					'<% if(this["item"]["maxCount"]) { %><div class="darktip-row"><%= this._loc("maxCount") %></div><% } %>' +
					'<div class="darktip-row classification">' +
						'<% if(this["item"]["containerSlots"]) { %>' +
							'<%= this._loc("containerSlots") %>' +
						'<% } else { %>' +
							'<% if(this["item"]["equippable"]) { %>' +
								'<%= this._loc("inventoryType." + this["item"]["inventoryType"]) %>' +
								'<div class="darktip-pos-right"><%= this["item"]["itemClassLoc"] %></div>' +
							'<% } else { %>' +
								'<%= this["item"]["itemClassLoc"] %>' +
							'<% } %>' +
						'<% } %>' +
					'</div>' +
					'<% if(this["item"]["reforge"]) { %><div class="darktip-row darktip-highlight-custom"><%= this._loc("reforged") %></div><% } %>' +
					'<% if(this["item"]["baseArmor"]) { %><div class="darktip-row"><%= this._loc("baseArmor") %></div><% } %>' +
					'<% if(this["item"]["weaponInfo"]) { %>' +
						'<div>' +
							'<div class="darktip-row"><%= this._loc("damage", this["item"]["weaponInfo"]["damage"]) %></div>' +
							'<div class="darktip-pos-right"><%= this._loc("weaponSpeed", this["item"]["weaponInfo"]) %></div>' +
							'<div class="darktip-row"><%= this._loc("dps", this["item"]["weaponInfo"]) %></div>' +
						'</div>' +
					'<% } %>' +
					'<%= this._subLoop("templates.fragments.stat.primary", this["item"]["bonusStats"]) %>' +
					'<%= this._subLoop("templates.fragments.stat.secondary", this["item"]["bonusStats"]) %>' +
					'<% if(this["item"]["gemInfo"]) { %><div class="darktip-row"><%= this["item"]["gemInfo"]["bonus"]["name"] %></div><% } %>' +
					'<% if(this["item"]["socketInfo"]) { %><div class="darktip-block darktip-sockets"><%= this._subLoop("templates.fragments.socket", this["item"]["socketInfo"]["sockets"]) %></div><% if(this["item"]["socketInfo"]["socketBonus"]) { %><div class="darktip-row <% if(this["item"]["socketInfo"]["mismatchedGems"] == 0) { %>darktip-highlight-custom<% } else { %>darktip-highlight-reduced<% } %>"><%= this._loc("socketBonus") %></div><% } %><% } %>' +
					'<% if(this["item"]["allowableClasses"]) { %><div class="darktip-row"><%= this._loc("allowableClasses") %></div><% } %>' +
					'<% if(this["item"]["allowableRaces"]) { %><div class="darktip-row"><%= this._loc("allowableRaces") %></div><% } %>' +
					'<% if(this["item"]["requiredLevel"]) { %><div class="darktip-row"><%= this._loc("requiredLevel") %></div><% } %>' +
					'<% if(this["item"]["requiredSkill"]) { %><div class="darktip-row"><%= this._loc("requiredSkill") %></div><% } %>' +
					'<% if(this["item"]["requiredAbility"]) { %><div class="darktip-row"><%= this._loc("requiredAbility") %></div><% } %>' +
					'<% if(this["item"]["minFactionId"]) { %><div class="darktip-row"><%= this._loc("minFactionId") %></div><% } %>' +
					'<%= this._subLoop("templates.fragments.stat.spell", this["item"]["itemSpells"]) %>' +
					'<% if(this["item"]["description"]) { %><div class="darktip-row darktip-highlight-medium">&quot;<%= this["item"]["description"] %>&quot;</div><% } %>' +
					'<% if(this["item"]["itemSet"]) { %><div class="darktip-row darktip-padded-above">' +
						'<div class="darktip-row darktip-highlight-medium"><%= this["item"]["itemSet"]["name"] %> (<%= this["item"]["itemSet"]["equipped"] %>/<%= this["itemset"]["items"].length %>)</div>' +
						'<div class="darktip-row darktip-padded-above"><%= this._subLoop("templates.fragments.stat.setBonus", this["item"]["itemSet"]["setBonuses"]) %></div>' +
					'</div><% } %>' +
					'<% if(this["_meta"]["extendedActive"]) { %><div class="darktip-row darktip-info-meta"><%= this._loc("extendedInactive") %></div><% } %>' +
				'</div>' +
				// --- END simple mode -------------------------------------
				// --- START extended mode ---------------------------------
				'<% if(this["_meta"]["extendedActive"]) { %>' +
					'<div class="darktip-col-70 darktip-only-x">' +
						'<div class="darktip-headline-right"><%= this["item"]["itemLevel"] %></div>' +
						'<div class="darktip-row darktip-headline darktip-cquality-<%= this["item"]["quality"] %>"><%= this["item"]["name"] %></div>' +
						'<div class="darktip-row darktip-padded-below ownerInfo"><%= this._loc("wornBy") %></div>' +
						'<% if(this["character"]["items"]) { %><%= this._sub("templates.fragments.iLevelDiff") %><% } %>' +
						'<div class="darktip-row darktip-highlight-strong"><%= this._loc("itemId") %></div>' +
						'<% if(this["item"]["maxDurability"]) { %><div class="darktip-row"><%= this._loc("maxDurability") %></div><% } %>' +
						'<% if(this["item"]["isAuctionable"]) { %><div class="darktip-row"><%= this._loc("auctionable") %></div><% } %>' +
						'<div class="darktip-row"><%= this._loc("disenchantable") %></div>' +
						'<% if(this["item"]["stackable"] > 1) { %><div class="darktip-row"><%= this._loc("stackable") %></div><% } %>' +
						'<div class="darktip-row"><%= this._loc("sellPrice") %></div>' +
						'<div class="darktip-row darktip-info-meta"><%= this._loc("extendedActive") %></div>' +
					'</div>' +
				'<% } %>' +
				// --- END extended mode -----------------------------------
			'</div>'
		),
		'404': (
			'<div class="tooltip-item darktip-tooltip-404">' +
				'<div class="darktip-title">404<span class="darktip-sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.slot") %></span> <span class="value"><%= this["slot"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.character") %></span> <span class="value"><%= this["character"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.realm") %></span> <span class="value"><%= this["realm"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
			'</div>'
		),
		'fragments': {
			'ownerInfo': (
				'<img class="darktip-icon-18x18" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/race_<%= this["character"]["race"] %>_<%= this["character"]["gender"] %>.jpg" /> ' +
				'<img class="darktip-icon-18x18" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/class_<%= this["character"]["class"] %>.jpg" /> ' +
				'<span class="darktip-cclass-<%= this["character"]["class"] %>"><%= this["character"]["name"] %></span> <span class="sub darktip-highlight-reduced">(<%= this["character"]["level"] %>)</span> ' +
				'@ <span><%= this["character"]["realm"] %></span>'
			),
			'iLevelDiff': (
				'<% this["item"]["iLevelDiff"] = (this["item"]["itemLevel"] - this["character"]["items"]["averageItemLevelEquipped"]); %>' +
				'<% if(this["item"]["iLevelDiff"] < -19) { %>' +
					'<div class="darktip-row darktip-ilvl-2low"><%= this._loc("iLevelDiff.verylow") %></div>' +
				'<% } else if(this["item"]["iLevelDiff"] < 0) { %>' +
					'<div class="darktip-row darktip-ilvl-low"><%= this._loc("iLevelDiff.lower") %></div>' +
				'<% } else if(this["item"]["iLevelDiff"] == 0) { %>' +
					'<div class="darktip-row darktip-ilvl-match"><%= this._loc("iLevelDiff.match") %></div>' +
				'<% } else if(this["item"]["iLevelDiff"] < 20) { %>' +
					'<div class="darktip-row darktip-ilvl-high"><%= this._loc("iLevelDiff.higher") %></div>' +
				'<% } else { %>' +
					'<div class="darktip-row darktip-ilvl-2high"><%= this._loc("iLevelDiff.veryhigh") %></div>' +
				'<% } %>'
			),
			'socket': (
				'<% if(this["item"]) { %>' +
					'<div class="darktip-row darktip-socket">' +
						'<span class="darktip-icon-socket darktip-socket-<%= this["type"] %>">' +
							'<span class="darktip-gem"><img class="darktip-icon" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/56/<% if(this["item"]["icon"]) { %><%= this["item"]["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg" /></span><span class="darktip-frame"></span>' +
						'</span>' +
						'<%= this["item"]["gemInfo"]["bonus"]["name"] %>' +
					'</div>' +
				'<% } else { %>' +
					'<div class="darktip-row darktip-socket darktip-highlight-reduced">' +
						'<span class="darktip-icon-socket darktip-socket-<%= this["type"] %>">' +
							'<span class="darktip-empty"></span><span class="darktip-frame"></span>' +
						'</span>' +
						'<%= this._loc("itemSocket." + this["type"]) %>' +
					'</div>' +
				'<% } %>'
			)
		}
	},

	'i18n': {
		'en_US': {
			'loading'    : 'Loading item...',
			'not-found'  : 'Item not found',
			'upgradeInfo': 'Upgrade Level: <%= this["item"]["upgradeInfo"]["current"] %>/<%= this["item"]["upgradeInfo"]["total"] %>',
			'transmogged': 'Transmogrified to: <%= this["transmog"]["name"] %>',
			'reforged'   : 'Reforged (<%= this["item"]["reforge"]["amount"] %> <%= this._loc("itemStat." + this["item"]["reforge"]["source"]) %> → <%= this["item"]["reforge"]["amount"] %> <%= this._loc("itemStat." + this["item"]["reforge"]["target"]) %>)',
			'wornBy'     : 'Worn by: <%= this._sub("templates.fragments.ownerInfo") %>',
			'iLevelDiff' : {
				'verylow' : 'This item is much below it\'s owner\'s average item level. (<%= Math.abs(this["item"]["iLevelDiff"]) %> item level<% if(Math.abs(this["item"]["iLevelDiff"]) != 1) { %>s<% } %> below)',
				'lower'   : 'This item is slightly below it\'s owner\'s average item level. (<%= Math.abs(this["item"]["iLevelDiff"]) %> item level<% if(Math.abs(this["item"]["iLevelDiff"]) != 1) { %>s<% } %> below)',
				'match'   : 'This item matches it\'s owner\'s average item level.',
				'higher'  : 'This item is slightly above it\'s owner\'s average item level. (<%= Math.abs(this["item"]["iLevelDiff"]) %> item level<% if(Math.abs(this["item"]["iLevelDiff"]) != 1) { %>s<% } %> above)',
				'veryhigh': 'This item is much above it\'s owner\'s average item level. (<%= Math.abs(this["item"]["iLevelDiff"]) %> item level<% if(Math.abs(this["item"]["iLevelDiff"]) != 1) { %>s<% } %> above)'
			}
		},
		'de_DE': {
			'loading'    : 'Lade Gegenstand...',
			'not-found'  : 'Gegenstand nicht gefunden',
			'upgradeInfo': 'Aufwertungsgrad: <%= this["item"]["upgradeInfo"]["current"] %>/<%= this["item"]["upgradeInfo"]["total"] %>',
			'transmogged': 'Transmogrifiziert zu: <%= this["transmog"]["name"] %>',
			'reforged'   : 'Umgeschmiedet (<%= this["item"]["reforge"]["amount"] %> <%= this._loc("itemStat." + this["item"]["reforge"]["source"]) %> → <%= this["item"]["reforge"]["amount"] %> <%= this._loc("itemStat." + this["item"]["reforge"]["target"]) %>)',
			'wornBy'     : 'Getragen von: <%= this._sub("templates.fragments.ownerInfo") %>',
			'iLevelDiff' : {
				'verylow' : 'Dieser Gegenstand ist deutlich unterhalb der durchschnittlichen Gegenstandsstufe seines Besitzers. (<%= Math.abs(this["item"]["iLevelDiff"]) %> Gegenstandsstufe<% if(Math.abs(this["item"]["iLevelDiff"]) != 1) { %>n<% } %> unterhalb)',
				'lower'   : 'Dieser Gegenstand ist unterhalb der durchschnittlichen Gegenstandsstufe seines Besitzers. (<%= Math.abs(this["item"]["iLevelDiff"]) %> Gegenstandsstufe<% if(Math.abs(this["item"]["iLevelDiff"]) != 1) { %>n<% } %> unterhalb)',
				'match'   : 'Dieser Gegenstand entspricht der durchschnittlichen Gegenstandsstufe seines Besitzers.',
				'higher'  : 'Dieser Gegenstand ist oberhalb der durchschnittlichen Gegenstandsstufe seines Besitzers. (<%= Math.abs(this["item"]["iLevelDiff"]) %> Gegenstandsstufe<% if(Math.abs(this["item"]["iLevelDiff"]) != 1) { %>n<% } %> oberhalb)',
				'veryhigh': 'Dieser Gegenstand ist deutlich oberhalb der durchschnittlichen Gegenstandsstufe seines Besitzers. (<%= Math.abs(this["item"]["iLevelDiff"]) %> Gegenstandsstufe<% if(Math.abs(this["item"]["iLevelDiff"]) != 1) { %>n<% } %> oberhalb)'
			}
		},
		'fr_FR': {
			'loading'    : 'Chargement Objets...',
			'not-found'  : 'Objet introuvable',
			'upgradeInfo': 'Niveau d\'am&eacute;lioration: <%= this["item"]["upgradeInfo"]["current"] %>/<%= this["item"]["upgradeInfo"]["total"] %>',
			'transmogged': 'Transmogrifi&eacute;(e) en : <%= this["transmog"]["name"] %>',
			'reforged'   : 'Reforged (<%= this["item"]["reforge"]["amount"] %> <%= this._loc("itemStat." + this["item"]["reforge"]["source"]) %> → <%= this["item"]["reforge"]["amount"] %> <%= this._loc("itemStat." + this["item"]["reforge"]["target"]) %>)',
			'wornBy'     : 'Porté par: <%= this._sub("templates.fragments.ownerInfo") %>',
			'iLevelDiff' : {
				'verylow' : 'This item is much below it\'s owner\'s average item level. (<%= Math.abs(this["item"]["iLevelDiff"]) %> item level<% if(Math.abs(this["item"]["iLevelDiff"]) != 1) { %>s<% } %> below)',
				'lower'   : 'Cet objet est légèrement inférieur au niveau d\'objet moyen du personnage. (<%= Math.abs(this["item"]["iLevelDiff"]) %> point<% if(Math.abs(this["item"]["iLevelDiff"]) != 1) { %>s<% } %> en-dessous)',
				'match'   : 'This item matches it\'s owner\'s average item level.',
				'higher'  : 'This item is slightly above it\'s owner\'s average item level. (<%= Math.abs(this["item"]["iLevelDiff"]) %> item level<% if(Math.abs(this["item"]["iLevelDiff"]) != 1) { %>s<% } %> above)',
				'veryhigh': 'This item is much above it\'s owner\'s average item level. (<%= Math.abs(this["item"]["iLevelDiff"]) %> item level<% if(Math.abs(this["item"]["iLevelDiff"]) != 1) { %>s<% } %> above)'
			}
		},
		'es_ES': {
			'loading'    : 'Cargando objeto...',
			'not-found'  : 'Objeto no encontrado',
			'upgradeInfo': 'Mejorar al nivel: <%= this["item"]["upgradeInfo"]["current"] %>/<%= this["item"]["upgradeInfo"]["total"] %>',
			'transmogged': 'Transfigurado a: <%= this["transmog"]["name"] %>',
			'reforged'   : 'Reforged (<%= this["item"]["reforge"]["amount"] %> <%= this._loc("itemStat." + this["item"]["reforge"]["source"]) %> → <%= this["item"]["reforge"]["amount"] %> <%= this._loc("itemStat." + this["item"]["reforge"]["target"]) %>)'
		},
		'it_IT': {
			'loading'    : 'Carico oggetto...',
			'not-found'  : 'Oggetto non trovato',
			'upgradeInfo': 'Livello di potenziamento: <%= this["item"]["upgradeInfo"]["current"] %>/<%= this["item"]["upgradeInfo"]["total"] %>',
			'transmogged': 'Trasmogrificato in: <%= this["transmog"]["name"] %>',
			'reforged'   : 'Riforgiato (<%= this["item"]["reforge"]["amount"] %> <%= this._loc("itemStat." + this["item"]["reforge"]["source"]) %> → <%= this["item"]["reforge"]["amount"] %> <%= this._loc("itemStat." + this["item"]["reforge"]["target"]) %>)',
			'wornBy'     : 'Indossato da: <%= this._sub("templates.fragments.ownerInfo") %>',
			'iLevelDiff' : {
				'verylow' : 'Questo oggetto è molto al di sotto della media dei livelli oggetto del suo proprietario. (<%= Math.abs(this["item"]["iLevelDiff"]) %> item level<% if(Math.abs(this["item"]["iLevelDiff"]) != 1) { %>s<% } %> below)',
				'lower'   : 'Questo oggetto è leggermente al di sotto della media dei livelli oggetto del suo proprietario. (<%= Math.abs(this["item"]["iLevelDiff"]) %> item level<% if(Math.abs(this["item"]["iLevelDiff"]) != 1) { %>s<% } %> below)',
				'match'   : 'Questo oggetto è pari alla media dei livelli oggetto del suo proprietario.',
				'higher'  : 'Questo oggetto è leggermente al di sopra della media dei livelli oggetto del suo proprietario. (<%= Math.abs(this["item"]["iLevelDiff"]) %> item level<% if(Math.abs(this["item"]["iLevelDiff"]) != 1) { %>s<% } %> above)',
				'veryhigh': 'Questo oggetto è molto al di sopra della media dei livelli oggetto del suo proprietario. (<%= Math.abs(this["item"]["iLevelDiff"]) %> item level<% if(Math.abs(this["item"]["iLevelDiff"]) != 1) { %>s<% } %> above)'
			}
		}
	}

});


DarkTip.registerModule('wow.wowhead', {

	'maps': {
		'wowheadhost': {
			'lang': {
				'www.wowhead.com': 'en',
				'de.wowhead.com' : 'de',
				'es.wowhead.com' : 'es',
				'it.wowhead.com': 'it',
				'fr.wowhead.com' : 'fr',
				'pt.wowhead.com' : 'pt',
				'ru.wowhead.com' : 'ru'
			}
		}
	},

	'enhanceData': function(module, params, data) {
		var add = {
			'_meta': {
				'path_host'      : 'http://' + params['host'],
				'path_host_media': 'http://' + DarkTip.map('wow', 'maps.region.mediahost', params['region']),
				'region'         : params['region'],
				'locale'         : params['locale'],
				'module'         : module
			}
		};
		DarkTip.jq.extend(true, data, add);
		return data;
	}

});

DarkTip.registerModule('wow.wowhead.quest', {

	'triggers': {
		'implicit': {
			'match' : /http:\/\/(www\.wowhead\.com|de\.wowhead\.com|es\.wowhead\.com|fr\.wowhead\.com|it\.wowhead\.com|pt\.wowhead\.com|ru\.wowhead\.com)\/quest=([^\.#]+).*/i,
			'params': {
				'1': 'wowheadhost',
				'2': 'questid'
			}
		}
	},

	'queries': {
		'quest': {
			'required' : true,
			'condition': true,
			'call'     : '//<%= this["host"] %>/api/wow/quest/<%= this["questid"] %>?locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 90)
		}
	},

	'getParams': {
		'implicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.wowhead.quest', 'triggers.implicit.params')));
			params['region'] = 'eu';
			params['lang']   = DarkTip.map('wow.wowhead', 'maps.wowheadhost.lang', params['wowheadhost']);
			params['host']   = DarkTip.map('wow', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
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
				'<div class="darktip-headline-right"><%= this["quest"]["level"] %></div>' +
				'<div class="darktip-row darktip-headline darktip-highlight-medium"><%= this["quest"]["title"] %></div>' +
				'<div class="darktip-row darktip-highlight-strong"><%= this["quest"]["category"] %></div>' +
				'<div class="darktip-row"><%= this._loc("reqLevel") %></div>' +
				'<% if(this["quest"]["suggestedPartyMembers"] > 1) { %><div class="darktip-row"><%= this._loc("suggestedPartyMembers") %></div><% } %>' +
			'</div>'
		),
		'404':(
			'<div class="tooltip-quest darktip-tooltip-404">' +
				'<div class="darktip-title">404<span class="darktip-sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.quest") %></span> <span class="value"><%= this["questid"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
			'</div>'
		)
	},

	'i18n': {
		'en_US': {
			'loading'              : 'Loading quest...',
			'not-found'            : 'Quest not found',
			'reqLevel'             : 'Requires Level <%= this["quest"]["reqLevel"] %>',
			'suggestedPartyMembers': 'Group Quest (<%= this["quest"]["suggestedPartyMembers"] %>)'
		},
		'de_DE': {
			'loading'              : 'Lade Quest...',
			'not-found'            : 'Quest nicht gefunden',
			'reqLevel'             : 'Ben&ouml;tigt Stufe <%= this["quest"]["reqLevel"] %>',
			'suggestedPartyMembers': 'Gruppenquest (<%= this["quest"]["suggestedPartyMembers"] %>)'
		},
		'fr_FR': {
			'loading'              : 'Chargement...',
			'not-found'            : 'Quête introuvable',
			'reqLevel'             : 'Niveau requis <%= this["quest"]["reqLevel"] %>',
			'suggestedPartyMembers': 'Qu&ecirc;te de groupe (<%= this["quest"]["suggestedPartyMembers"] %>)'
		},
		'es_ES': {
			'loading'              : 'Cargando misi&oacute;n...',
			'not-found'            : 'Misi&oacute;n no encontrada',
			'reqLevel'             : 'Requiere nivel <%= this["quest"]["reqLevel"] %>',
			'suggestedPartyMembers': 'Misi&oacute;n de Grupo (<%= this["quest"]["suggestedPartyMembers"] %>)'
		},
		'it_IT': {
			'loading'              : 'Caricamento missione...',
			'not-found'            : 'Missione non trovata',
			'reqLevel'             : 'Richiede il livello <%= this["quest"]["reqLevel"] %>',
			'suggestedPartyMembers': 'Missione di gruppo (<%= this["quest"]["suggestedPartyMembers"] %>)'
		}		
	}

});


DarkTip.registerModule('wow.wowhead.spell', {

	'triggers': {
		'implicit': {
			'match' : /http:\/\/(www\.wowhead\.com|de\.wowhead\.com|es\.wowhead\.com|fr\.wowhead\.com|it\.wowhead\.com|pt\.wowhead\.com|ru\.wowhead\.com)\/spell=([0-9]+).*/i,
			'params': {
				'1': 'wowheadhost',
				'2': 'spellid'
			}
		}
	},

	'queries': {
		'spell': {
			'required' : true,
			'condition': true,
			'call'     : '//<%= this["host"] %>/api/wow/spell/<%= this["spellid"] %>?locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 90)
		}
	},

	'prepareData': function(state) {

		if(Object.keys(state['data']).length === 0)
		{
			return false;
		}

		return state['data'];
	},

	'getParams': {
		'implicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.wowhead.spell', 'triggers.implicit.params')));
			params['region'] = 'eu';
			params['lang']   = DarkTip.map('wow.wowhead', 'maps.wowheadhost.lang', params['wowheadhost']);
			params['host']   = DarkTip.map('wow', 'maps.region.host', params['region']);
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
			'<div class="tooltip-spell">' +
				'<img class="darktip-icon" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/56/<% if(this["spell"]["icon"]) { %><%= this["spell"]["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg" />' +
				'<div class="darktip-col-70">' +
					'<div class="darktip-darktip-row headline"><%= this["spell"]["name"] %></div>' +
					'<div class="darktip-split-row">' +
						'<div class="darktip-row"><% if(this["spell"]["powerCost"]) { %><%= this["spell"]["powerCost"] %><% } %></div>' +
						'<div class="darktip-pos-right"><% if(this["spell"]["range"]) { %><%= this["spell"]["range"] %><% } %></div>' +
					'</div>' +
					'<div class="darktip-split-row">' +
						'<div class="darktip-row"><% if(this["spell"]["castTime"]) { %><%= this["spell"]["castTime"] %><% } %></div>' +
						'<div class="darktip-pos-right"><% if(this["spell"]["cooldown"]) { %><%= this["spell"]["cooldown"] %><% } %></div>' +
					'</div>' +
					'<div class="darktip-row darktip-highlight-medium"><%= this["spell"]["description"] %></div>' +
				'</div>' +
			'</div>'
		),
		'404': (
			'<div class="tooltip-spell darktip-tooltip-404">' +
				'<div class="darktip-title">404<span class="darktip-sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.spell") %></span> <span class="value"><%= this["spellid"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
			'</div>'
		),
		'fragments': {
		}
	},

	'i18n': {
		'en_US': {
			'loading'          : 'Loading spell...',
			'not-found'        : 'Spell not found'
		},
		'de_DE': {
			'loading'          : 'Lade Zauber...',
			'not-found'        : 'Zauber nicht gefunden'
		},
		'fr_FR': {
			'loading'          : 'Chargement Sorts...',
			'not-found'        : 'Sort introuvable'
		},
		'es_ES': {
			'loading'          : 'Cargando Hechizos...',
			'not-found'        : 'Hechizos no encontrado'
		},
		'it_IT': {
			'loading'          : 'Caricamento incantesimo...',
			'not-found'        : 'Incantesimo non trovato'
		}		
	}

});


DarkTip.registerModule('wow.wowhead.guild', {

	'triggers': {
		'implicit': {
			'match' : /http:\/\/(www\.wowhead\.com|de\.wowhead\.com|es\.wowhead\.com|fr\.wowhead\.com|pt\.wowhead\.com|ru\.wowhead\.com)\/guild=(us|eu)\.([^\.]+)\.([^\.#]+).*/i,
			'params': {
				'1': 'wowheadhost',
				'2': 'region',
				'3': 'realm',
				'4': 'guild'
			}
		}
	},

	'queries': {
		'guild': {
			'required' : true,
			'condition': true,
			'call'     : '//<%= this["host"] %>/api/wow/guild/<%= this["realm"] %>/<%= this["guild"] %>?fields=members&locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 3)
		}
	},

	'getParams': {
		'implicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.wowhead.guild', 'triggers.implicit.params')));
			params['guild']  = params['guild'].replace(/_/g, ' ');
			params['lang']   = DarkTip.map('wow.wowhead', 'maps.wowheadhost.lang', params['wowheadhost']);
			params['host']   = DarkTip.map('wow', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		}
	},

	'layout': {
		'width': {
			'core': 275
		}
	},

	'templates': {
		'core': (
			'<div class="tooltip-guild">' +
				'<div class="darktip-headline-right"><span class="darktip-icon-achievenemtpoints"><%= this["guild"]["achievementPoints"] %></span></div>' +
				'<div class="darktip-row darktip-headline darkstip-cside-<%= this["guild"]["side"] %>"><%= this["guild"]["name"] %></div>' +
				'<div class="darktip-row darktip-highlight-medium"><%= this._loc("classification") %></div>' +
				'<% if(this["guild"]["members"]) { %><div class="darktip-row"><%= this._loc("members") %></div><% } %>' +
			'</div>'
		),
		'404': (
			'<div class="tooltip-guild darktip-tooltip-404">' +
				'<div class="darktip-title">404<span class="darktip-sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.guild") %></span> <span class="value"><%= this["guild"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.realm") %></span> <span class="value"><%= this["realm"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
			'</div>'
		)
	},

	'i18n': {
		'en_US': {
			'loading'       : 'Loading Guild...',
			'not-found'     : 'Guild not found',
			'classification': 'Level <%= this["guild"]["level"] %> <%= this._loc("factionSide." + this["guild"]["side"]) %> Guild, <%= this["guild"]["realm"] %>',
			'members'       : '<%= this["guild"]["members"].length %> members'
		},
		'de_DE': {
			'loading'       : 'Lade Gilde...',
			'not-found'     : 'Gilde nicht gefunden',
			'classification': 'Stufe <%= this["guild"]["level"] %> <%= this._loc("factionSide." + this["guild"]["side"]) %>-Gilde, <%= this["guild"]["realm"] %>',
			'members'       : '<%= this["guild"]["members"].length %> Mitglieder'
		},
		'fr_FR': {
			'loading'       : 'Chargement Guilde...',
			'not-found'     : 'Aucune Guilde trouv&eacute;e',
			'classification': 'Niveau <%= this["guild"]["level"] %> Faction <%= this._loc("factionSide." + this["guild"]["side"]) %> , <%= this["guild"]["realm"] %>',
			'members'       : '<%= this["guild"]["members"].length %> membres'
		},
		'es_ES': {
			'loading'       : 'Cargando hermandad...',
			'not-found'     : 'Hermandad no encontrada',
			'classification': 'Hermandad (<%= this._loc("factionSide." + this["guild"]["side"]) %>), nivel <%= this["guild"]["level"] %>, <%= this["guild"]["realm"] %>',
			'members'       : '<%= this["guild"]["members"].length %> miembros'
		},
		'it_IT': {
			'loading'       : 'Caricamento Gilda...',
			'not-found'     : 'Gilda non trovata',
			'classification': 'Livello <%= this["guild"]["level"] %> <%= this._loc("factionSide." + this["guild"]["side"]) %> Gilda, <%= this["guild"]["realm"] %>',
			'members'       : '<%= this["guild"]["members"].length %> membri'
		}		
	}

});


DarkTip.registerModule('wow.wowhead.achievement', {

	'triggers': {
		'implicit': {
			'match' : /http:\/\/(www\.wowhead\.com|de\.wowhead\.com|es\.wowhead\.com|fr\.wowhead\.com|pt\.wowhead\.com|ru\.wowhead\.com)\/achievement=([0-9]+).*/i,
			'params': {
				'1': 'wowheadhost',
				'2': 'achievementid'
			}
		}
	},

	'queries': {
		'achievement': {
			'required' : true,
			'condition': true,
			'call'     : '//<%= this["host"] %>/api/wow/achievement/<%= this["achievementid"] %>?locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 90)
		}
	},

	'getParams': {
		'implicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.wowhead.achievement', 'triggers.implicit.params')));
			params['region'] = 'eu';
			params['lang']   = DarkTip.map('wow.wowhead', 'maps.wowheadhost.lang', params['wowheadhost']);
			params['host']   = DarkTip.map('wow', 'maps.region.host', params['region']);
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
				'<img class="darktip-icon" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/56/<% if(this["achievement"]["icon"]) { %><%= this["achievement"]["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg" />' +
				'<div class="darktip-col-70">' +
					'<div class="darktip-headline-right"><span class="darktip-icon-achievenemtpoints"><%= this["achievement"]["points"] %></span></div>' +
					'<div class="darktip-row darktip-headline"><%= this["achievement"]["title"] %></div>' +
					'<div class="darktip-row darktip-highlight-reduced"><%= this["achievement"]["description"] %></div>' +
				'</div>' +
			'</div>'
		),
		'404': (
			'<div class="tooltip-achievement darktip-tooltip-404">' +
				'<div class="darktip-title">404<span class="darktip-sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.achievement") %></span> <span class="value"><%= this["achievementid"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
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
			'not-found'     : 'Haut fait introuvable'
		},
		'es_ES': {
			'loading'       : 'Cargando ventaja...',
			'not-found'     : 'Ventaja no encontrada'
		},
		'it_IT': {
			'loading'       : 'Caricamento Impresa...',
			'not-found'     : 'Impresa non trovata'
		}			
	}

});

DarkTip.registerModule('wow.wowhead.character', {

	'triggers': {
		'implicit': {
			'match' : /http:\/\/(www\.wowhead\.com|de\.wowhead\.com|es\.wowhead\.com|fr\.wowhead\.com|pt\.wowhead\.com|ru\.wowhead\.com)\/profile=(us|eu)\.([^\.]+)\.([^\.#]+).*/i,
			'params': {
				'1': 'wowheadhost',
				'2': 'region',
				'3': 'realm',
				'4': 'character'
			},
			'decorate': function(element, params, data) {

				var color_class     = DarkTip.map('wow.character', 'maps.class.color', data['character']['class']);
				var mediahost       = DarkTip.map('wow', 'maps.region.mediahost', params['region']);
				var icon_racegender = 'http://' + mediahost + '/wow/icons/18/race_' + data['character']['race'] + '_' + data['character']['gender'] + '.jpg';
				var icon_class      = 'http://' + mediahost + '/wow/icons/18/class_' + data['character']['class'] + '.jpg';

				DarkTip.jq(element).css(DarkTip['data']['settings']['decorativeMode']['default']);
				DarkTip.jq(element).css({'color': color_class});
				DarkTip.jq(element).prepend('<img src="' + icon_racegender + '" style="vertical-align: middle;" /> <img src="' + icon_class + '" style="vertical-align: middle;" /> ');
			}
		}
	},

	'queries': {
		'character': {
			'required' : true,
			'condition': true,
			'call'     : '//<%= this["host"] %>/api/wow/character/<%= this["realm"] %>/<%= this["character"] %>?fields=guild,talents,items,professions,pets,mounts&locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 1)
		}
		/*
		'races'    : {
			'required' : false,
			'condition': 'character.race',
			'call'     : '//<%= this["host"] %>/api/wow/data/character/races?locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 90)
		},
		'classes'  : {
			'required' : false,
			'condition': 'character.class',
			'call'     : '//<%= this["host"] %>/api/wow/data/character/classes?locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 90)
		},
		// */
	},

	'prepareData': function(state) {

		if(Object.keys(state['data']).length === 0)
		{
			return false;
		}

		state['data']['character']['talentSpecCount'] = 0;

		if((typeof state['data']['character'] !== 'undefined') && (typeof state['data']['character']['talents'] !== 'undefined'))
		{
			for(var i = 0; i < state['data']['character']['talents'].length; i++)
			{
				var cspec   = state['data']['character']['talents'][i];
				var temp    = {};
				var maxtier = -1;
				var ordered = [];

				if(typeof cspec['spec'] !== 'undefined')
				{
					state['data']['character']['talentSpecCount'] = state['data']['character']['talentSpecCount'] + 1;
				}

				if((typeof cspec['talents'] !== 'undefined') && (cspec['talents'].length > 0))
				{
					for(var j = 0; j < cspec['talents'].length; j++)
					{
						temp[cspec['talents'][j]['tier']] = cspec['talents'][j];

						if(cspec['talents'][j]['tier'] > maxtier)
						{
							maxtier = cspec['talents'][j]['tier'];
						}
					}
				}

				if(maxtier >= 0)
				{
					for(var j = 0; j <= maxtier; j++)
					{
						if(typeof temp[j] !== 'undefined')
						{
							ordered.push(temp[j]);
						}
					}
				}

				cspec['talents_ordered'] = ordered;
			}
		}

		return state['data'];
	},

	'getParams': {
		'implicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.wowhead.character', 'triggers.implicit.params')));
			params['lang']   = DarkTip.map('wow.wowhead', 'maps.wowheadhost.lang', params['wowheadhost']);
			params['host']   = DarkTip.map('wow', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		}
	},

	'layout': {
		'width': {
			'core': 325
		}
	},

	'templates': {
		'core': (
			'<div class="tooltip-character">' +
				'<img class="darktip-icon" src="<%= this["_meta"]["path_host"] %>/static-render/<%= this["_meta"]["region"] %>/<%= this["character"]["thumbnail"] %>?alt=/wow/static/images/2d/avatar/<%= this["character"]["race"] %>-<%= this["character"]["gender"] %>.jpg" />' +
				/* --- START simple mode -------------------------------- */
				'<div class="darktip-col-98 darktip-only-s">' +
					'<div class="darktip-headline-right"><span class="darktip-icon-achievenemtpoints"><%= this["character"]["achievementPoints"] %></span></div>' +
					'<div class="darktip-row darktip-headline darktip-cclass-<%= this["character"]["class"] %>"><%= this["character"]["name"] %></div>' +
					'<div class="darktip-row"><%= this._loc("classification") %></div>' +
					'<%= this._subLoop("templates.fragments.talentSpec", this["character"]["talents"]) %>' +
					'<% if(this["character"]["guild"]) { %><div class="darktip-row darktip-highlight-medium">&lt;<%= this["character"]["guild"]["name"] %>&gt;<% if(this["character"]["guild"]["level"]) { %> (<%= this["character"]["guild"]["level"] %>)<% } %></div><% } %>' +
					'<div class="darktip-row"><%= this["character"]["realm"] %></div>' +
					'<% if(this["character"]["items"]) { %><div class="darktip-row darktip-highlight-weak"><%= this._loc("itemLevel", this["character"]["items"]) %></div><% } %>' +
					'<% if(this["_meta"]["extendedActive"]) { %><div class="darktip-row darktip-info-meta"><%= this._loc("extendedInactive") %></div><% } %>' +
				'</div>' +
				/* --- END simple mode ---------------------------------- */
				/* --- START extended mode ------------------------------ */
				'<% if(this["_meta"]["extendedActive"]) { %>' +
					'<div class="darktip-col-98 darktip-only-x">' +
						'<div class="darktip-headline-right"><span class="darktip-icon-achievenemtpoints"><%= this["character"]["achievementPoints"] %></span></div>' +
						'<div class="darktip-row darktip-headline darktip-cclass-<%= this["character"]["class"] %>"><%= this["character"]["name"] %></div>' +
						'<% if(this["character"]["professions"]) { %>' +
							'<div class="darktip-block">' +
								'<%= this._subLoop("templates.fragments.profession.primary", this["character"]["professions"]["primary"]) %>' +
								'<%= this._subLoop("templates.fragments.profession.secondary", this["character"]["professions"]["secondary"]) %>' +
							'</div>' +
						'<% } %>' +
						'<% if(this["character"]["mounts"]) { %><div class="darktip-row"><%= this._loc("mounts") %></div><% } %>' +
						'<% if(this["character"]["pets"]) { %><div class="darktip-row"><%= this._loc("pets") %></div><% } %>' +
						'<div class="darktip-row darktip-highlight-reduced"><%= this._loc("lastModified") %></div>' +
						'<div class="darktip-row darktip-info-meta"><%= this._loc("extendedActive") %></div>' +
					'</div>' +
				'<% } %>' +
				/* --- END extended mode -------------------------------- */
			'</div>'
		),
		'404': (
			'<div class="tooltip-character darktip-tooltip-404">' +
				'<div class="darktip-title">404<span class="darktip-sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.character") %></span> <span class="value"><%= this["character"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.realm") %></span> <span class="value"><%= this["realm"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
			'</div>'
		),
		'fragments': {
			'talentSpec': (
				'<% if(this["spec"]) { %>' +
					'<div class="darktip-block darktip-spec darktip-row<% if(this["selected"]) { %> darktip-highlight-strong<% } else { %> darktip-highlight-reduced<% } %>">' +
						'<img class="darktip-icon-10x10" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/<% if(this["spec"]["icon"]) { %><%= this["spec"]["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg"/> ' +
						'<%= this["spec"]["name"] %> <span class="darktip-role">(<%= this["spec"]["role"] %>)</span>' +
						'<% if(this["talents"].length > 0) { %>' +
							'<%= this._subLoop("templates.fragments.talent", this["talents_ordered"]) %>' +
						'<% } %>' +
					'</div>' +
				'<% } %>'
			),
			'talent': (
				'<div class="darktip-block darktip-talent">' +
					'<img class="darktip-icon-10x10" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/<% if(this["spell"]["icon"]) { %><%= this["spell"]["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg"/> ' +
					'<%= this["spell"]["name"] %>' +
				'</div>'
			),
			'profession': {
				'primary'  : (
					'<% if(this["rank"] > 0) { %>' +
						'<div class="darktip-row darktip-highlight-medium">' +
							'<img class="darktip-icon-10x10" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/<% if(this["icon"]) { %><%= this["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg"/> ' +
							'<%= this["name"] %>: <%= this["rank"] %>' +
						'</div>' +
					'<% } %>'
				),
				'secondary': (
					'<% if(this["rank"] > 0) { %>' +
						'<div class="darktip-row darktip-highlight-weak">' +
							'<img class="darktip-icon-10x10" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/<% if(this["icon"]) { %><%= this["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg"/> ' +
							'<%= this["name"] %>: <%= this["rank"] %>' +
						'</div>' +
					'<% } %>'
				)
			}
		}
	},

	'i18n': {
		'en_US': {
			'loading'       : 'Loading character...',
			'not-found'     : 'Character not found',
			'classification': '<%= this["character"]["level"] %> <%= this._loc("characterRace." + this["character"]["race"] + ".0") %> <%= this._loc("characterClass." + this["character"]["class"] + ".0") %>',
			'itemLevel'     : '<%= this["averageItemLevelEquipped"] %> average item level (<%= this["averageItemLevel"] %>)',
			'mounts'        : 'Mounts: <%= this["character"]["mounts"]["numCollected"] %> / <%= this["character"]["mounts"]["numCollected"] + this["character"]["mounts"]["numNotCollected"] %>',
			'pets'          : 'Pets: <%= this["character"]["pets"]["numCollected"] %> / <%= this["character"]["pets"]["numCollected"] + this["character"]["pets"]["numNotCollected"] %>',
			'lastModified'  : 'Last modified: <%= this._renderDateTime(this["character"]["lastModified"]) %>'
		},
		'de_DE': {
			'loading'       : 'Lade Charakter...',
			'not-found'     : 'Charakter nicht gefunden',
			'classification': '<%= this["character"]["level"] %>, <%= this._loc("characterRace." + this["character"]["race"] + "." + this["character"]["gender"]) %>, <%= this._loc("characterClass." + this["character"]["class"] + "." + this["character"]["gender"]) %>',
			'itemLevel'     : '<%= this["averageItemLevelEquipped"] %> Durchschnittliche Gegenstandsstufe (<%= this["averageItemLevel"] %>)',
			'mounts'        : 'Reittiere: <%= this["character"]["mounts"]["numCollected"] %> / <%= this["character"]["mounts"]["numCollected"] + this["character"]["mounts"]["numNotCollected"] %>',
			'pets'          : 'Haustiere: <%= this["character"]["pets"]["numCollected"] %> / <%= this["character"]["pets"]["numCollected"] + this["character"]["pets"]["numNotCollected"] %>',
			'lastModified'  : 'Stand vom <%= this._renderDateTime(this["character"]["lastModified"]) %>'
		},
		'fr_FR': {
			'loading'       : 'Chargement personnage...',
			'not-found'     : 'Aucun personnage trouv&eacute;',
			'classification': '<%= this._loc("characterRace." + this["character"]["race"] + "." + this["character"]["gender"]) %> <%= this._loc("characterClass." + this["character"]["class"] + "." + this["character"]["gender"]) %> de niveau <%= this["character"]["level"] %>',
			'itemLevel'     : '<%= this["averageItemLevelEquipped"] %> Niveau moyen des objets (<%= this["averageItemLevel"] %>)',
			'mounts'        : 'Montures: <%= this["character"]["mounts"]["numCollected"] %> / <%= this["character"]["mounts"]["numCollected"] + this["character"]["mounts"]["numNotCollected"] %>',
			'pets'          : 'Mascottes: <%= this["character"]["pets"]["numCollected"] %> / <%= this["character"]["pets"]["numCollected"] + this["character"]["pets"]["numNotCollected"] %>',
			'lastModified'  : 'Derni&egrave;re mise à jour: <%= this._renderDateTime(this["character"]["lastModified"]) %>'
		},
		'es_ES': {
			'loading'       : 'Cargando personaje...',
			'not-found'     : 'Personaje no encontrado',
			'classification': '<%= this._loc("characterRace." + this["character"]["race"] + "." + this["character"]["gender"]) %> <%= this._loc("characterClass." + this["character"]["class"] + "." + this["character"]["gender"]) %> de nivel <%= this["character"]["level"] %>',
			'itemLevel'     : '<%= this["averageItemLevelEquipped"] %> nivel medio de objeto (<%= this["averageItemLevel"] %>)',
			'mounts'        : 'Monturas: <%= this["character"]["mounts"]["numCollected"] %> / <%= this["character"]["mounts"]["numCollected"] + this["character"]["mounts"]["numNotCollected"] %>',
			'pets'          : 'Compa&ntilde;eros: <%= this["character"]["pets"]["numCollected"] %> / <%= this["character"]["pets"]["numCollected"] + this["character"]["pets"]["numNotCollected"] %>',
			'lastModified'  : '&Uacute;ltima modificaci&oacute;n: <%= this._renderDateTime(this["character"]["lastModified"]) %>'
		},
		'es_MX': {
			'classification': '<%= this._loc("characterClass." + this["character"]["class"] + "." + this["character"]["gender"]) %> de <%= this._loc("characterRace." + this["character"]["race"] + "." + this["character"]["gender"]) %>, nivel <%= this["character"]["level"] %>'
		},
		'it_IT': {
			'loading'       : 'Caricamento personaggio...',
			'not-found'     : 'Personaggio non trovato',
			'classification': '<%= this["character"]["level"] %> <%= this._loc("characterRace." + this["character"]["race"] + ".0") %> <%= this._loc("characterClass." + this["character"]["class"] + ".0") %>',
			'itemLevel'     : '<%= this["averageItemLevelEquipped"] %> media dei livelli oggetto (<%= this["averageItemLevel"] %>)',
			'mounts'        : 'Cavalcature: <%= this["character"]["mounts"]["numCollected"] %> / <%= this["character"]["mounts"]["numCollected"] + this["character"]["mounts"]["numNotCollected"] %>',
			'pets'          : 'Mascotte: <%= this["character"]["pets"]["numCollected"] %> / <%= this["character"]["pets"]["numCollected"] + this["character"]["pets"]["numNotCollected"] %>',
			'lastModified'  : 'Ultima modifica: <%= this._renderDateTime(this["character"]["lastModified"]) %>'
		}		
	}

});


DarkTip.registerModule('wow.wowhead.item', {

	'triggers': {
		'implicit': {
			'match' : /http:\/\/(www\.wowhead\.com|de\.wowhead\.com|es\.wowhead\.com|fr\.wowhead\.com|pt\.wowhead\.com|ru\.wowhead\.com)\/item=([^\.#\/]+).*/i,
			'params': {
				'1': 'wowheadhost',
				'2': 'itemid'
			},
			'decorate': function(element, params, data) {

				var color_quality = DarkTip.map('wow.item', 'maps.quality.color', data['item']['quality']);
				var mediahost     = DarkTip.map('wow', 'maps.region.mediahost', params['region']);
				var icon_item     = 'http://' + mediahost + '/wow/icons/18/' + data['item']['icon'] + '.jpg';

				DarkTip.jq(element).css(DarkTip['data']['settings']['decorativeMode']['default']);
				DarkTip.jq(element).css({'color': color_quality});
				DarkTip.jq(element).prepend('<img src="' + icon_item + '" style="vertical-align: middle;" /> ');
			}
		}
	},

	'queries': {
		'item': {
			'required' : true,
			'condition': true,
			'call'     : '//<%= this["host"] %>/api/wow/item/<%= this["itemid"] %>?locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 90)
		},
		'itemclass': {
			'required' : true,
			'condition': true,
			'call'     : '//<%= this["host"] %>/api/wow/data/item/classes?locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 90)
		},
		'itemset': {
			'required' : false,
			'condition': 'item.itemSet',
			'call'     : '//<%= this["host"] %>/api/wow/item/set/<%= this["condition"]["id"] %>?locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 90)
		}
	},

	'patterns': {
		'money': /^([0-9]+)([0-9]{2})([0-9]{2})$|([0-9]{1,2})([0-9]{2})$|([0-9]{1,2})$/i
	},

	'maps': {
		'quality': {
			'color': {
				'0': '#9D9D9D',
				'1': '#FFFFFF',
				'2': '#1EFF00',
				'3': '#0070FF',
				'4': '#C600FF',
				'5': '#FF8000',
				'6': '#E6CC80',
				'7': '#E6CC80'
			}
		},
		'stats': {
			'primary': {
				'3': 'Agility',
				'4': 'Strength',
				'5': 'Intellect',
				'6': 'Spirit',
				'7': 'Stamina'
			},
			'secondary': {
				'13': 'Dodge rating',
				'14': 'Parry rating',
				'31': 'Hit rating',
				'32': 'Critical strike rating',
				'35': 'PvP resilence rating',
				'36': 'Haste rating',
				'37': 'Expertise rating',
				'38': 'Attack power',
				'46': 'Health regeneration',
				'45': 'Spell power',
				'47': 'Spell penetration',
				'49': 'Mastery rating',
				'57': 'PvP power rating'
			}
		}
	},

	'prepareData': function(state) {

		if(Object.keys(state['data']).length === 0)
		{
			return false;
		}

		if(
			(typeof state['data']['item'] !== 'undefined') &&
			(typeof state['data']['item']['itemClass'] !== 'undefined') &&
			(typeof state['data']['item']['itemSubClass'] !== 'undefined') &&
			(typeof state['data']['itemclass'] !== 'undefined') &&
			(typeof state['data']['itemclass']['classes'] !== 'undefined')
		)
		{
			for(var i = 0; i < state['data']['itemclass']['classes'].length; i++)
			{
				var citemclass = state['data']['itemclass']['classes'][i];

				if(citemclass['class'] == state['data']['item']['itemClass'])
				{
					for (var j = 0; j < citemclass['subclasses'].length; j++)
					{
						var citemsubclass = citemclass['subclasses'][j];

						if(citemsubclass['subclass'] == state['data']['item']['itemSubClass'])
						{
							state['data']['item']['itemClassLoc'] = citemsubclass['name'];
						}
					}
				}
			}
		}

		return state['data'];
	},

	'getParams': {
		'implicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.wowhead.item', 'triggers.implicit.params')));
			params['region'] = 'eu';
			params['lang']   = DarkTip.map('wow.wowhead', 'maps.wowheadhost.lang', params['wowheadhost']);
			params['host']   = DarkTip.map('wow', 'maps.region.host', params['region']);
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
		'tools': {
			'_isStatPrimary': function(statid) {
				var result = DarkTip.map(this['_meta']['module'], 'maps.stats.primary', statid);
				return (result !== undefined);
			},
			'_isStatSecondary': function(statid) {
				var result = DarkTip.map(this['_meta']['module'], 'maps.stats.secondary', statid);
				return (result !== undefined);
			},
			'_renderCoins': function(total) {
				var temp   = total.toString();
				var result = temp.match(DarkTip.read(this['_meta']['module'], 'patterns.money'));
				var split  = {
					'gold'  : -1,
					'silver': -1,
					'copper': 0
				};
				if(result)
				{
					if(result[3] !== undefined)
					{
						split = {
							'gold'  : parseInt(result[1]),
							'silver': parseInt(result[2]),
							'copper': parseInt(result[3])
						};
					}
					else if(result[5] !== undefined)
					{
						split = {
							'gold'  : -1,
							'silver': parseInt(result[4]),
							'copper': parseInt(result[5])
						};
					}
					else
					{
						split = {
							'gold'  : -1,
							'silver': -1,
							'copper': parseInt(result[6])
						};
					}
				}
				return DarkTip.jq.jqote(
					DarkTip.read(this['_meta']['module'], 'templates.fragments.coins'),
					DarkTip.jq.extend(true, {}, DarkTip.getTemplateTools(this['_meta']['module'], this['_meta']['locale']), split)
				);
			}
		},
		'core': (
			'<div class="tooltip-item">' +
				'<img class="darktip-icon" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/56/<% if(this["item"]["icon"]) { %><%= this["item"]["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg" />' +
				 // --- START simple mode -----------------------------------
				'<div class="darktip-col-70 darktip-only-s">' +
					'<div class="darktip-headline-right"><%= this["item"]["itemLevel"] %></div>' +
					'<div class="darktip-row darktip-headline darktip-cquality-<%= this["item"]["quality"] %>"><%= this["item"]["name"] %></div>' +
					'<% if(this["item"]["heroic"]) { %><div class="darktip-row"><%= this._loc("heroic") %></div><% } %>' +
					'<% if(this["item"]["boundZone"]) { %><div class="darktip-row"><%= this["item"]["boundZone"]["name"] %></div><% } %>' +
					'<% if(this["item"]["itemBind"]) { %>' +
						'<div class="darktip-row">' +
							'<% if(this["item"]["quality"] == 7) { %>' +
								'<%= this._loc("itemBind.4") %>' +
							'<% } else { %>' +
								'<%= this._loc("itemBind." + this["item"]["itemBind"]) %>' +
							'<% } %>' +
						'</div>' +
					'<% } %>' +
					'<% if(this["item"]["maxCount"]) { %><div class="darktip-row"><%= this._loc("maxCount") %></div><% } %>' +
					'<div class="darktip-row classification">' +
						'<% if(this["item"]["containerSlots"]) { %>' +
							'<%= this._loc("containerSlots") %>' +
						'<% } else { %>' +
							'<% if(this["item"]["equippable"]) { %>' +
								'<%= this._loc("inventoryType." + this["item"]["inventoryType"]) %>' +
								'<div class="darktip-pos-right"><%= this["item"]["itemClassLoc"] %></div>' +
							'<% } else { %>' +
								'<%= this["item"]["itemClassLoc"] %>' +
							'<% } %>' +
						'<% } %>' +
					'</div>' +
					'<% if(this["item"]["baseArmor"]) { %><div class="darktip-row"><%= this._loc("baseArmor") %></div><% } %>' +
					'<% if(this["item"]["weaponInfo"]) { %>' +
						'<div>' +
							'<div class="darktip-row"><%= this._loc("damage", this["item"]["weaponInfo"]["damage"]) %></div>' +
							'<div class="darktip-pos-right"><%= this._loc("weaponSpeed", this["item"]["weaponInfo"]) %></div>' +
							'<div class="darktip-row"><%= this._loc("dps", this["item"]["weaponInfo"]) %></div>' +
						'</div>' +
					'<% } %>' +
					'<%= this._subLoop("templates.fragments.stat.primary", this["item"]["bonusStats"]) %>' +
					'<%= this._subLoop("templates.fragments.stat.secondary", this["item"]["bonusStats"]) %>' +
					'<% if(this["item"]["gemInfo"]) { %><div class="darktip-row"><%= this["item"]["gemInfo"]["bonus"]["name"] %></div><% } %>' +
					'<% if(this["item"]["socketInfo"]) { %><div class="darktip-block darktip-sockets"><%= this._subLoop("templates.fragments.socket", this["item"]["socketInfo"]["sockets"]) %></div><% if(this["item"]["socketInfo"]["socketBonus"]) { %><div class="darktip-row darktip-highlight-reduced"><%= this._loc("socketBonus") %></div><% } %><% } %>' +
					'<% if(this["item"]["allowableClasses"]) { %><div class="darktip-row"><%= this._loc("allowableClasses") %></div><% } %>' +
					'<% if(this["item"]["allowableRaces"]) { %><div class="darktip-row"><%= this._loc("allowableRaces") %></div><% } %>' +
					'<% if(this["item"]["requiredLevel"] > 1) { %><div class="darktip-row"><%= this._loc("requiredLevel") %></div><% } %>' +
					'<% if(this["item"]["requiredSkill"]) { %><div class="darktip-row"><%= this._loc("requiredSkill") %></div><% } %>' +
					'<% if(this["item"]["requiredAbility"]) { %><div class="darktip-row"><%= this._loc("requiredAbility") %></div><% } %>' +
					'<% if(this["item"]["minFactionId"]) { %><div class="darktip-row"><%= this._loc("minFactionId") %></div><% } %>' +
					'<%= this._subLoop("templates.fragments.stat.spell", this["item"]["itemSpells"]) %>' +
					'<% if(this["item"]["description"]) { %><div class="darktip-row darktip-highlight-medium">&quot;<%= this["item"]["description"] %>&quot;</div><% } %>' +
					'<% if(this["item"]["itemSet"]) { %><div class="darktip-row darktip-padded-above">' +
						'<div class="darktip-row darktip-highlight-medium"><%= this["item"]["itemSet"]["name"] %></div>' +
						'<div class="darktip-row darktip-padded-above"><%= this._subLoop("templates.fragments.stat.setBonus", this["item"]["itemSet"]["setBonuses"]) %></div>' +
					'</div><% } %>' +
					'<% if(this["_meta"]["extendedActive"]) { %><div class="darktip-row darktip-info-meta"><%= this._loc("extendedInactive") %></div><% } %>' +
				'</div>' +
				// --- END simple mode -------------------------------------
				// --- START extended mode ---------------------------------
				'<% if(this["_meta"]["extendedActive"]) { %>' +
					'<div class="darktip-col-70 darktip-only-x">' +
						'<div class="darktip-headline-right"><%= this["item"]["itemLevel"] %></div>' +
						'<div class="darktip-row darktip-headline darktip-cquality-<%= this["item"]["quality"] %>"><%= this["item"]["name"] %></div>' +
						'<div class="darktip-row darktip-highlight-strong"><%= this._loc("itemId") %></div>' +
						'<% if(this["item"]["maxDurability"]) { %><div class="darktip-row"><%= this._loc("maxDurability") %></div><% } %>' +
						'<% if(this["item"]["isAuctionable"]) { %><div class="darktip-row"><%= this._loc("auctionable") %></div><% } %>' +
						'<div class="darktip-row"><%= this._loc("disenchantable") %></div>' +
						'<% if(this["item"]["stackable"] > 1) { %><div class="darktip-row"><%= this._loc("stackable") %></div><% } %>' +
						'<div class="darktip-row"><%= this._loc("sellPrice") %></div>' +
						'<div class="darktip-row darktip-info-meta"><%= this._loc("extendedActive") %></div>' +
					'</div>' +
				'<% } %>' +
				// --- END extended mode -----------------------------------
			'</div>'
		),
		'404': (
			'<div class="tooltip-item darktip-tooltip-404">' +
				'<div class="darktip-title">404<span class="darktip-sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.item") %></span> <span class="value"><%= this["itemid"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
			'</div>'
		),
		'fragments': {
			'allowableClass': '<span class="darktip-cclass-<%= this["_value"] %>"><%= this._loc("characterClass." + this["_value"] + ".0")%></span>',
			'allowableRace' : '<span class="crace-<%= this["_value"] %>"><%= this._loc("characterRace." + this["_value"] + ".0")%></span>',
			'coins'         : (
				'<% if(this["gold"] > -1) { %><span class="darktip-icon-gold"><%= this["gold"] %></span><% } %>' +
				'<% if(this["silver"] > -1) { %><span class="darktip-icon-silver"><%= this["silver"] %></span><% } %>' +
				'<% if(this["copper"]) { %><span class="darktip-icon-copper"><%= this["copper"] %></span><% } else { %>' +
				'<span class="darktip-icon-copper">0</span><% } %>'
			),
			'stat'          : {
				'primary'  : (
					'<% if(this._isStatPrimary(this["stat"])) { %>' +
						'<div class="darktip-row">' +
							'<% if(this["amount"] >= 0) { %>+<% } %><%= this["amount"] %> <%= this._loc("itemStat." + this["stat"]) %>' +
						'</div>' +
					'<% }'
				),
				'secondary': (
					'<% if(this._isStatSecondary(this["stat"])) { %>' +
						'<div class="darktip-row darktip-highlight-custom">' +
							'<% if(this["amount"] >= 0) { %>+<% } %><%= this["amount"] %> <%= this._loc("itemStat." + this["stat"]) %>' +
						'</div>' +
					'<% }'
				),
				'spell'    : (
					'<% if(this["spell"]["description"]) { %>' +
						'<div class="darktip-row darktip-highlight-custom">' +
							'<% if(this["trigger"] == "ON_EQUIP") { %>' +
								'<%= this._loc("itemSpell.onEquip") %>' +
							'<% } else if(this["trigger"] == "ON_USE") { %>' +
								'<%= this._loc("itemSpell.onUse") %>' +
							'<% } else if(this["trigger"] == "ON_PROC") { %>' +
								'<%= this._loc("itemSpell.onProc") %>' +
							'<% } else { %>' +
								'<%= this._loc("itemSpell.unknown") %>' +
							'<% } %>' +
						'</div>' +
					'<% } %>'
				),
				'setBonus' : '<div class="darktip-row <% if(this["active"]) { %>darktip-highlight-custom<% } else { %>darktip-highlight-reduced<% } %>"><%= this._loc("setBonus") %></div>'
			},
			'socket': (
				'<div class="darktip-row darktip-socket darktip-highlight-reduced">' +
					'<span class="darktip-icon-socket darktip-socket-<%= this["type"] %>">' +
						'<span class="darktip-empty"></span><span class="darktip-frame"></span>' +
					'</span>' +
					'<%= this._loc("itemSocket." + this["type"]) %>' +
				'</div>'
			)
		}
	},

	'i18n': {
		'en_US': {
			'loading'          : 'Loading item...',
			'not-found'        : 'Item not found',
			'itemId'           : 'Item ID: <%= this["item"]["id"] %>',
			'heroic'           : 'Heroic',
			'maxCount'         : 'Unique<% if(this["item"]["maxCount"] > 1) { %> (<%= this["item"]["maxCount"] %>)<% } %>',
			'containerSlots'   : '<%= this["item"]["containerSlots"] %> Slot <%= this["item"]["itemClassLoc"] %>',
			'damage'           : '<%= this["min"] %> - <%= this["max"] %> Damage',
			'weaponSpeed'      : 'Speed <%= this["weaponSpeed"] %>',
			'dps'              : '(<%= this["dps"].toFixed(2) %> damage per second)',
			'baseArmor'        : '<%= this["item"]["baseArmor"] %> Armor',
			'maxDurability'    : 'Durability <%= this["item"]["maxDurability"] %> / <%= this["item"]["maxDurability"] %>',
			'requiredLevel'    : 'Requires Level <%= this["item"]["requiredLevel"] %>',
			'requiredSkill'    : 'Requires <%= this._loc("characterSkill." + this["item"]["requiredSkill"]) %> (<%= this["item"]["requiredSkillRank"] %>)',
			'requiredAbility'  : 'Requires <%= this["item"]["requiredAbility"]["name"] %>',
			'minFactionId'     : 'Requires Faction ID <%= this["item"]["minFactionId"] %> - <%= this._loc("reputationLevel." + this["item"]["minReputation"]) %>',
			'allowableClasses' : 'Classes: <%= this._subLoop("templates.fragments.allowableClass", this["item"]["allowableClasses"], ", ") %>',
			'allowableRaces'   : 'Races: <%= this._subLoop("templates.fragments.allowableRace", this["item"]["allowableRaces"], ", ") %>',
			'itemStat'         : {
				'3' : 'Agility',
				'4' : 'Strength',
				'5' : 'Intellect',
				'6' : 'Spirit',
				'7' : 'Stamina',
				'25': 'Arcane Resistance',
				'26': 'Fire Resistance',
				'27': 'Nature Resistance',
				'28': 'Frost Resistance',
				'29': 'Shadow Resistance',
				'30': 'Holy Resistance',
				'13': 'Dodge',
				'14': 'Parry',
				'31': 'Hit',
				'32': 'Critical Strike',
				'35': 'Pvp Resilience',
				'36': 'Haste',
				'37': 'Expertise',
				'38': 'Attack Power',
				'46': 'Health Regeneration',
				'45': 'Spell Power',
				'49': 'Mastery',
				'50': 'Armor',
				'57': 'Pvp Power'
			},
			'itemSpell'        : {
				'onEquip': 'Equip: <%= this["spell"]["description"] %>',
				'onUse'  : 'Use: <%= this["spell"]["description"] %>',
				'onProc' : 'Chance on hit: <%= this["spell"]["description"] %>',
				'unknown': '<%= this["spell"]["description"] %>'
			},
			'setBonus'         : '(<%= this["threshold"] %>) Set: <%= this["description"] %>',
			'sellPrice'        : 'Sell Price: <%= this._renderCoins(this["item"]["sellPrice"]) %>',
			'stackable'        : 'Stackable (<%= this["item"]["stackable"] %>)',
			'disenchantable'   : '<% if(this["item"]["disenchantingSkillRank"]) { %>Can be disenchanted (<%= this["item"]["disenchantingSkillRank"] %>)<% } else { %>Cannot be disenchanted<% } %>',
			'auctionable'      : 'Can be auctioned',
			'itemBind'         : { '1': 'Binds when picked up', '2': 'Binds when equipped', '3': 'Binds when used', '4': 'Binds to Battle.net account' },
			'itemSocket'       : {
				'BLUE'     : 'Blue Socket',
				'RED'      : 'Red Socket',
				'YELLOW'   : 'Yellow Socket',
				'META'     : 'Meta Socket',
				'ORANGE'   : 'Orange Socket',
				'PURPLE'   : 'Purple Socket',
				'GREEN'    : 'Green Socket',
				'PRISMATIC': 'Prismatic Socket',
				'HYDRAULIC': 'Hydraulic Socket',
				'COGWHEEL' : 'Cogwheel Socket'
			},
			'socketBonus'      : 'Socket Bonus: <%= this["item"]["socketInfo"]["socketBonus"] %>',
			'reputationLevel'  : { '0': 'Hated', '1': 'Hostile', '2': 'Unfriendly', '3': 'Neutral', '4': 'Friendly', '5': 'Honored', '6': 'Revered', '7': 'Exalted' },
			'inventoryType'   : { '1': 'Head', '2': 'Neck', '3': 'Shoulder', '4': 'Shirt', '5': 'Chest', '6': 'Waist', '7': 'Legs', '8': 'Feet', '9': 'Wrist', '10': 'Hands', '11': 'Finger', '12': 'Trinket', '13': 'One-Hand', '15': 'Ranged' /* Bow */, '16': 'Back', '17': 'Two-Hand', '18': 'Bag', '20': 'Chest', '21': 'Main-hand', '22': 'Off-hand', '23': 'Held in off-hand', '25': 'Ranged' /* Thrown */, '26': 'Ranged' /* Gun, Crossbow, Wand */ }
		},
		'de_DE': {
			'loading'          : 'Lade Gegenstand...',
			'not-found'        : 'Gegenstand nicht gefunden',
			'itemId'           : 'Gegenstands ID: <%= this["item"]["id"] %>',
			'heroic'           : 'Heroisch',
			'maxCount'         : 'Einzigartig<% if(this["item"]["maxCount"] > 1) { %> (<%= this["item"]["maxCount"] %>)<% } %>',
			'containerSlots'   : '<%= this["item"]["containerSlots"] %> Platz <%= this["item"]["itemClassLoc"] %>',
			'damage'           : '<%= this["min"] %> - <%= this["max"] %> Schaden',
			'weaponSpeed'      : 'Geschwindigkeit <%= this["weaponSpeed"] %>',
			'dps'              : '(<%= this["dps"].toFixed(2) %> Schaden pro Sekunde)',
			'baseArmor'        : '<%= this["item"]["baseArmor"] %> R&uuml;stung',
			'maxDurability'    : 'Haltbarkeit <%= this["item"]["maxDurability"] %> / <%= this["item"]["maxDurability"] %>',
			'requiredLevel'    : 'Erfordert Stufe <%= this["item"]["requiredLevel"] %>',
			'requiredSkill'    : 'Erfordert <%= this._loc("characterSkill." + this["item"]["requiredSkill"]) %> (<%= this["item"]["requiredSkillRank"] %>)',
			'requiredAbility'  : 'Erfordert <%= this["item"]["requiredAbility"]["name"] %>',
			'minFactionId'     : 'Erfordert Fraktion ID <%= this["item"]["minFactionId"] %> - <%= this._loc("reputationLevel." + this["item"]["minReputation"]) %>',
			'allowableClasses' : 'Klassen: <%= this._subLoop("templates.fragments.allowableClass", this["item"]["allowableClasses"], ", ") %>',
			'allowableRaces'   : 'Rassen: <%= this._subLoop("templates.fragments.allowableRace", this["item"]["allowableRaces"], ", ") %>',
			'itemStat'         : {
				'3' : 'Beweglichkeit',
				'4' : 'St&auml;rke',
				'5' : 'Intelligenz',
				'6' : 'Willenskraft',
				'7' : 'Ausdauer',
				'25': 'Arkanwiderstand',
				'26': 'Feuerwiderstand',
				'27': 'Naturwiderstand',
				'28': 'Frostwiderstand',
				'29': 'Schattenwiderstand',
				'30': 'Heiligwiderstand',
				'13': 'Ausweichwen',
				'14': 'Parrieren',
				'31': 'Treffer',
				'32': 'Kritische Treffer',
				'35': 'PvP Abh&auml;rtung',
				'36': 'Tempo',
				'37': 'Waffenkunde',
				'38': 'Angriffskraft',
				'46': 'Gesundheitsregenartion',
				'45': 'Zaubermacht',
				'49': 'Meisterschaftswertung',
				'50': 'R&uml;stung',
				'57': 'PvP Macht'
			},
			'itemSpell'        : {
				'onEquip': 'Anlegen: <%= this["spell"]["description"] %>',
				'onUse'  : 'Benutzen: <%= this["spell"]["description"] %>',
				'onProc' : 'Trefferchance: <%= this["spell"]["description"] %>',
				'unknown': '<%= this["spell"]["description"] %>'
			},
			'setBonus'         : '(<%= this["threshold"] %>) Set: <%= this["description"] %>',
			'sellPrice'        : 'Verkaufspreis: <%= this._renderCoins(this["item"]["sellPrice"]) %>',
			'stackable'        : 'Stapelbar (<%= this["item"]["stackable"] %>)',
			'disenchantable'   : '<% if(this["item"]["disenchantingSkillRank"]) { %>Kann entzaubert werden (<%= this["item"]["disenchantingSkillRank"] %>)<% } else { %>Kann nicht entzaubert werden<% } %>',
			'auctionable'      : 'Kann versteigert werden',
			'itemBind'         : { '1': 'Wird beim Aufheben gebunden', '2': 'Wird beim Anlegen gebunden', '3': 'Wird bei Benutzung gebunden', '4': 'Wird an Battle.net-Account gebunden' },
			'itemSocket'       : {
				'BLUE'     : 'Blauer Sockel',
				'RED'      : 'Roter Sockel',
				'YELLOW'   : 'Gelber Sockel',
				'META'     : 'Meta Sockel',
				'ORANGE'   : 'Orangener Sockel',
				'PURPLE'   : 'Lila Sockel',
				'GREEN'    : 'Gr&uuml;ner Sockel',
				'PRISMATIC': 'Prismatischer Sockel',
				'HYDRAULIC': 'Hydraulischer Sockel',
				'COGWHEEL' : 'Zahnrad Sockel'
			},
			'socketBonus'      : 'Sockelbonus: <%= this["item"]["socketInfo"]["socketBonus"] %>',
			'reputationLevel'  : { '0': 'Haßerf&szlig;uuml;llt', '1': 'Feindselig', '2': 'Unfreundlich', '3': 'Neutral', '4': 'Freundlich', '5': 'Wohlwollend', '6': 'Respektvoll', '7': 'Ehrf&uuml;rchtig' },
			'inventoryType'    : { '1': 'Kopf', '2': 'Nacken', '3': 'Schulter', '4': 'Hemd', '5': 'Brust', '6': 'Taille', '7': 'Beine', '8': 'F&uuml;&szlig;e', '9': 'Handgelenke', '10': 'H&auml;nde', '11': 'Finger', '12': 'Schmuckst&uuml;ck', '13': 'Einh&auml;ndig', '15': 'Distanz' /* Bogen */, '16': 'R&uuml;cken', '17': 'Zweih&auml;ndig', '18': 'Tasche', '20': 'Brust', '21': 'Waffenhand', '22': 'Schildhand', '23': 'In Schildhand gef&uuml;hrt', '25': 'Distanz' /* Wurfwaffe */, '26': 'Distanz' /* Gewehr, Armbrust, Zauberstab */ }
		},
		'fr_FR': {
			'loading'          : 'Chargement Objets...',
			'not-found'        : 'Objet introuvable',
			'itemId'           : 'ID Objets: <%= this["item"]["id"] %>',
			'heroic'           : 'H&eacute;roïc',
			'maxCount'         : 'Unique<% if(this["item"]["maxCount"] > 1) { %> (<%= this["item"]["maxCount"] %>)<% } %>',
			'containerSlots'   : '<%= this["item"]["containerSlots"] %> Slot <%= this["item"]["itemClassLoc"] %>',
			'damage'           : '<%= this["min"] %> - <%= this["max"] %> D&eacute;g&acirc;ts',
			'weaponSpeed'      : 'Vitesse <%= this["weaponSpeed"] %>',
			'dps'              : '(<%= this["dps"].toFixed(2) %> domage par second)',
			'baseArmor'        : '<%= this["item"]["baseArmor"] %> Armure',
			'maxDurability'    : 'Durabilit&eacute; <%= this["item"]["maxDurability"] %> / <%= this["item"]["maxDurability"] %>',
			'requiredLevel'    : 'Niveau <%= this["item"]["requiredLevel"] %> requis',
			'requiredSkill'    : 'Requiert <%= this._loc("characterSkill." + this["item"]["requiredSkill"]) %> (<%= this["item"]["requiredSkillRank"] %>)',
			'requiredAbility'  : 'Requiert <%= this["item"]["requiredAbility"]["name"] %>',
			'minFactionId'     : 'Requiert Faction ID <%= this["item"]["minFactionId"] %> - <%= this._loc("reputationLevel." + this["item"]["minReputation"]) %>',
			'allowableClasses' : 'Classes: <%= this._subLoop("templates.fragments.allowableClass", this["item"]["allowableClasses"], ", ") %>',
			'allowableRaces'   : 'Races: <%= this._subLoop("templates.fragments.allowableRace", this["item"]["allowableRaces"], ", ") %>',
			'itemStat'         : {
				'3' : 'Agilit&eacute;',
				'4' : 'Force',
				'5' : 'Intelligence',
				'6' : 'Esprit',
				'7' : 'Endurance',
				'25': 'Arcane Resistance',
				'26': 'Fire Resistance',
				'27': 'Nature Resistance',
				'28': 'Frost Resistance',
				'29': 'Shadow Resistance',
				'30': 'Holy Resistance',
				'13': 'Score d\'esquive',
				'14': 'Score de parade',
				'31': 'Score de toucher',
				'32': 'Score de coup critique',
				'35': 'Score de pvp resilience',
				'36': 'Score de h&acirc;te',
				'37': 'Score d\'expertise',
				'38': 'Puissance d\'attaque',
				'46': 'R&eacute;g&eacute;n&eacute;ration de vie',
				'45': 'Puissance des sorts',
				'49': 'Score maîtrise',
				'50': 'Armor',
				'57': 'Score de pvp power'
			},
			'itemSpell'        : {
				'onEquip': 'Equip&eacute; : <%= this["spell"]["description"] %>',
				'onUse'  : 'Utilis&eacute; : <%= this["spell"]["description"] %>',
				'onProc' : 'Chances quand vous touchez : <%= this["spell"]["description"] %>',
				'unknown': '<%= this["spell"]["description"] %>'
			},
			'setBonus'         : '(<%= this["threshold"] %>) Ensemble : <%= this["description"] %>',
			'sellPrice'        : 'Prix de vente: <%= this._renderCoins(this["item"]["sellPrice"]) %>',
			'stackable'        : 'Empilable (<%= this["item"]["stackable"] %>)',
			'disenchantable'   : '<% if(this["item"]["disenchantingSkillRank"]) { %>Peut &ecirc;tre d&eacute;senchant&eacute; (<%= this["item"]["disenchantingSkillRank"] %>)<% } else { %>Ne peut pas &ecirc;tre d&eacute;senchant&eacute;<% } %>',
			'auctionable'      : 'Peut &ecirc;tre vendu',
			'itemBind'         : { '1': 'Li&eacute; quand ramass&eacute;', '2': 'Li&eacute; quand &eacute;quip&eacute;', '3': 'Li&eacute; quand utilis&eacute;', '4': 'Li&eacute; au compte Battle.net' },
			'itemSocket'       : {
				'BLUE'     : 'Ch&acirc;sse bleue',
				'RED'      : 'Ch&acirc;sse rouge',
				'YELLOW'   : 'Ch&acirc;sse jaune',
				'META'     : 'M&eacute;ta-ch&acirc;sse',
				'ORANGE'   : 'Ch&acirc;sse orange',
				'PURPLE'   : 'Ch&acirc;sse Violette',
				'GREEN'    : 'Ch&acirc;sse verte',
				'PRISMATIC': 'Ch&acirc;sse prismatique',
				'HYDRAULIC': 'Ch&acirc;sse Hydraulique',
				'COGWHEEL' : 'Chambre de roue dent&eacute;e'
			},
			'socketBonus'      : 'Bonus de sertissage: <%= this["item"]["socketInfo"]["socketBonus"] %>',
			'reputationLevel'  : { '0': 'Haï', '1': 'Hostile', '2': 'Inamical', '3': 'Neutre', '4': 'Amical', '5': 'Honor&eacute;', '6': 'R&eacute;v&eacute;r&eacute;', '7': 'Exalt&eacute;' },
			'inventoryType'   : { '1': 'T&ecirc;te', '2': 'Cou', '3': 'Epaule', '4': 'Chemise', '5': 'Torse', '6': 'Taille', '7': 'Jambes', '8': 'Pieds', '9': 'Poignets', '10': 'Mains', '11': 'Doigt', '12': 'Bijou', '13': 'A une mains', '15': 'Ranged' /* Bow */, '16': 'Back', '17': 'A deux mains', '18': 'Sac', '20': 'Torse', '21': 'Main-hand', '22': 'Off-hand', '23': 'Held in off-hand', '25': 'Ranged' /* Thrown */, '26': 'Ranged' /* Gun, Crossbow, Wand */ }
		},
		'es_ES': {
			'loading'          : 'Cargando objeto...',
			'not-found'        : 'Objeto no encontrado',
			'itemId'           : 'ID de Objeto: <%= this["item"]["id"] %>',
			'heroic'           : 'Heroico',
			'maxCount'         : '&Uacute;nico<% if(this["item"]["maxCount"] > 1) { %> (<%= this["item"]["maxCount"] %>)<% } %>',
			'containerSlots'   : '<%= this["item"]["itemClassLoc"] %> con <%= this["item"]["containerSlots"] %> Casillas',
			'damage'           : '<%= this["min"] %> - <%= this["max"] %> Da&ntilde;o',
			'weaponSpeed'      : 'Velocidad <%= this["weaponSpeed"] %>',
			'dps'              : '(<%= this["dps"].toFixed(2) %> da&ntilde;o por segundo)',
			'baseArmor'        : '<%= this["item"]["baseArmor"] %> de armadura',
			'maxDurability'    : 'Durabilidad <%= this["item"]["maxDurability"] %> / <%= this["item"]["maxDurability"] %>',
			'requiredLevel'    : 'Requiere nivel <%= this["item"]["requiredLevel"] %>',
			'requiredSkill'    : 'Requiere <%= this._loc("characterSkill." + this["item"]["requiredSkill"]) %> (<%= this["item"]["requiredSkillRank"] %>)',
			'requiredAbility'  : 'Requiere <%= this["item"]["requiredAbility"]["name"] %>',
			'minFactionId'     : 'Requiere facci&oacute;n con ID <%= this["item"]["minFactionId"] %> - <%= this._loc("reputationLevel." + this["item"]["minReputation"]) %>',
			'allowableClasses' : 'Clases: <%= this._subLoop("templates.fragments.allowableClass", this["item"]["allowableClasses"], ", ") %>',
			'allowableRaces'   : 'Razas: <%= this._subLoop("templates.fragments.allowableRace", this["item"]["allowableRaces"], ", ") %>',
			'itemStat'         : {
				'3' : 'de agilidad',
				'4' : 'de fuerza',
				'5' : 'de intelecto',
				'6' : 'de esp&iacute;ritu',
				'7' : 'de aguante',
				'25': 'Arcane Resistance',
				'26': 'Fire Resistance',
				'27': 'Nature Resistance',
				'28': 'Frost Resistance',
				'29': 'Shadow Resistance',
				'30': 'Holy Resistance',
				'13': 'de esquivar',
				'14': 'de parada',
				'31': 'de golpe',
				'32': 'de golpe cr&iacute;tico',
				'35': 'de pvp temple',
				'36': 'de celeridad',
				'37': 'de pericia',
				'38': 'poder de ataque',
				'46': 'regeneraci&oacute;n de salud',
				'45': 'poder con hechizos',
				'49': '&iacute;ndice de maestr&iacute;a',
				'50': 'Armor',
				'57': 'de pvp power'
			},
			'itemSpell'        : {
				'onEquip': 'Equipar: <%= this["spell"]["description"] %>',
				'onUse'  : 'Uso: <%= this["spell"]["description"] %>',
				'onProc' : 'Probabilidad al acertar: <%= this["spell"]["description"] %>',
				'unknown': '<%= this["spell"]["description"] %>'
			},
			'setBonus'         : '(<%= this["threshold"] %>) Conjunto: <%= this["description"] %>',
			'sellPrice'        : 'Precio de venta: <%= this._renderCoins(this["item"]["sellPrice"]) %>',
			'stackable'        : 'Se puede apilar (<%= this["item"]["stackable"] %>)',
			'disenchantable'   : '<% if(this["item"]["disenchantingSkillRank"]) { %>Se puede desencantar (<%= this["item"]["disenchantingSkillRank"] %>)<% } else { %>No se puede desencantar<% } %>',
			'auctionable'      : 'Se puede subastar',
			'itemBind'         : { '1': 'Se liga al recogerlo', '2': 'Se liga al equiparlo', '3': 'Se liga al usarlo', '4': 'Se liga a la cuenta de Battle.net' },
			'itemSocket'       : {
				'BLUE'     : 'Ranura azul',
				'RED'      : 'Ranura roja',
				'YELLOW'   : 'Ranura amarilla',
				'META'     : 'Ranura meta',
				'ORANGE'   : 'Ranura naranja',
				'PURPLE'   : 'Ranura púrpura',
				'GREEN'    : 'Ranura verde',
				'PRISMATIC': 'Ranura prismática',
				'HYDRAULIC': 'Ranura hidráulica',
				'COGWHEEL' : 'Ranura de engranaje'
			},
			'socketBonus'      : 'Bonus ranura: <%= this["item"]["socketInfo"]["socketBonus"] %>',
			'reputationLevel'  : { '0': 'Odiado', '1': 'Hostil', '2': 'Adverso', '3': 'Neutral', '4': 'Amistoso', '5': 'Honorable', '6': 'Venerado', '7': 'Exaltado' },
			'inventoryType'    : { '1': 'Cabeza', '2': 'Cuello', '3': 'Hombros', '4': 'Camisa', '5': 'Pecho', '6': 'Cintura', '7': 'Piernas', '8': 'Pies', '9': 'Mu&ntilde;equeras', '10': 'Manos', '11': 'Dedo', '12': 'Abalorio', '13': 'Una mano', '15': 'A distancia' /* Bow */, '16': 'Espalda', '17': 'Dos manos', '18': 'Bolsa', '20': 'Pecho', '21': 'Mano derecha', '22': 'Mano izquierda', '23': 'Sostener en mano izquierda', '25': 'Arrojadizas' /* Thrown */, '26': 'Arma a distancia' /* Gun,Crossbow,Wand */ }
		},
		'it_IT': {
			'loading'          : 'Carico oggetto...',
			'not-found'        : 'Oggetto non trovato',
			'itemId'           : 'ID Oggetto: <%= this["item"]["id"] %>',
			'heroic'           : 'Eeroico',
			'maxCount'         : 'Unico equipaggiabile <% if(this["item"]["maxCount"] > 1) { %> (<%= this["item"]["maxCount"] %>)<% } %>',
			'containerSlots'   : '<%= this["item"]["containerSlots"] %> Scomparto <%= this["item"]["itemClassLoc"] %>',
			'damage'           : '<%= this["min"] %> - <%= this["max"] %> Danni',
			'weaponSpeed'      : 'Velocità <%= this["weaponSpeed"] %>',
			'dps'              : '(<%= this["dps"].toFixed(2) %> danni al secondo)',
			'baseArmor'        : '<%= this["item"]["baseArmor"] %> Armatura',
			'maxDurability'    : 'Integrità <%= this["item"]["maxDurability"] %> / <%= this["item"]["maxDurability"] %>',
			'requiredLevel'    : 'Richiede il livello <%= this["item"]["requiredLevel"] %>',
			'requiredSkill'    : 'Richiede <%= this._loc("characterSkill." + this["item"]["requiredSkill"]) %> (<%= this["item"]["requiredSkillRank"] %>)',
			'requiredAbility'  : 'Richiede <%= this["item"]["requiredAbility"]["name"] %>',
			'minFactionId'     : 'Richiede la Fazione <%= this["item"]["minFactionId"] %> - <%= this._loc("reputationLevel." + this["item"]["minReputation"]) %>',
			'allowableClasses' : 'Classi: <%= this._subLoop("templates.fragments.allowableClass", this["item"]["allowableClasses"], ", ") %>',
			'allowableRaces'   : 'Razze: <%= this._subLoop("templates.fragments.allowableRace", this["item"]["allowableRaces"], ", ") %>',
			'itemStat'         : {
				'3' : 'Agilià',
				'4' : 'Forza',
				'5' : 'Intelletto',
				'6' : 'Spirito',
				'7' : 'Tempra',
				'25': 'Resistenza all\'Arcano',
				'26': 'Resistenza al Fuoco',
				'27': 'Resistenza alla Natura',
				'28': 'Resistenza al gelo',
				'29': 'Resistenza all\'Ombra',
				'30': 'Resistenza al Sacro',
				'13': 'Schivata',
				'14': 'Parata',
				'31': 'Impatto',
				'32': 'Indice di Critico',
				'35': 'Resilienza PvP',
				'36': 'Celerità',
				'37': 'Perizia',
				'38': 'Indice di Attacco',
				'46': 'Rigenerazione Salute',
				'45': 'Potenza Magica',
				'49': 'Maestria',
				'50': 'Armatura',
				'57': 'Potenza PvP'
			},
			'itemSpell'        : {
				'onEquip': 'Equipaggia: <%= this["spell"]["description"] %>',
				'onUse'  : 'Usa: <%= this["spell"]["description"] %>',
				'onProc' : 'Probabilità all\'impatto: <%= this["spell"]["description"] %>',
				'unknown': '<%= this["spell"]["description"] %>'
			},
			'setBonus'         : '(<%= this["threshold"] %>) Completo: <%= this["description"] %>',
			'sellPrice'        : 'Costo: <%= this._renderCoins(this["item"]["sellPrice"]) %>',
			'stackable'        : 'Impilabile (<%= this["item"]["stackable"] %>)',
			'disenchantable'   : '<% if(this["item"]["disenchantingSkillRank"]) { %>Può essere disincantato (<%= this["item"]["disenchantingSkillRank"] %>)<% } else { %>Non può essere disincantato<% } %>',
			'auctionable'      : 'Può essere venduto all\'asta',
			'itemBind'         : { '1': 'Vincola alla raccolta', '2': 'Vincola all\'equipaggiamento', '3': 'Vincola all\'uso', '4': 'Vincola all\'account Battle.net' },
			'itemSocket'       : {
				'BLUE'     : 'Incavo Blu',
				'RED'      : 'Incavo Rosso',
				'YELLOW'   : 'Incavo Giallo',
				'META'     : 'Incavo Meta',
				'ORANGE'   : 'Incavo Arancione',
				'PURPLE'   : 'Incavo Viola',
				'GREEN'    : 'Incavo Verde',
				'PRISMATIC': 'Incavo Prismatico',
				'HYDRAULIC': 'Incavo Idraulico',
				'COGWHEEL' : 'Incavo Ingranaggio'
			},
			'socketBonus'      : 'Bonus incavo: <%= this["item"]["socketInfo"]["socketBonus"] %>',
			'reputationLevel'  : { '0': 'Odiato', '1': 'Ostile', '2': 'Avverso', '3': 'Neutrale', '4': 'Amichevole', '5': 'Onorato', '6': 'Reverito', '7': 'Osannato' },
			'inventoryType'   : { '1': 'Testa', '2': 'Collo', '3': 'Spalle', '4': 'Camicia', '5': 'Torso', '6': 'Fianchi', '7': 'Gambe', '8': 'Piedi', '9': 'Polsi', '10': 'Mani', '11': 'Dita', '12': 'Monile', '13': 'A una Mano', '15': 'A Distanza' /* Bow */, '16': 'Schiena', '17': 'A due mani', '18': 'Borsa', '20': 'Torso', '21': 'Mano primaria', '22': 'Mano secondaria', '23': 'Accessorio', '25': 'Da Tiro' /* Thrown */, '26': 'A distanza' /* Gun, Crossbow, Wand */ }
		}		
	}

});
