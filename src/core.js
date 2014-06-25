/* DarkTip by Martin Gelder (Dark Spot in the Corner), Copyright (c) 2014 */
window.___DarkTipSettings = window.___DarkTipSettings || {};

window.DarkTip = {

	'jq': undefined,

	'debug': false,

	'version': '@@darktip_version',

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
