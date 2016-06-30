(function(globalScope) {

	/* # INIT ################################################## */

	var log, merge, domReady, settings, settingsContext,
		doc                     = globalScope.document,
		MutationObserver        = globalScope.MutationObserver || globalScope.WebkitMutationObserver || false,
		DarkTip                 = {},
		repositoryStyles        = {},
		repositoryModules       = {},
		repositoryTriggerGroups = {},
		queueFnInit             = [],
		queueFnObserveAdd       = [],
		queueFnObserveRemove    = [];

	var q      = require('q'),
		dust   = require('dustjs-linkedin'),
		tether = require('tether')
		tools  = require('./darktip-tools');

	require('dustjs-linkedin/lib/compiler');
	require('dustjs-helpers');

	require('./dustjs-darktip');

	DarkTip.q      = q;
	DarkTip.dust   = dust;
	DarkTip.tether = tether;

	/* # TOOLS ################################################# */

	log = (function() {
		var logger = {},
			originalLog,
			loggerContext;
		if (globalScope && globalScope.console && globalScope.console.log) {
			loggerContext = globalScope.console;
			originalLog = globalScope.console.log;
		}
		if (!loggerContext) {
			return function() {};
		}
		if (typeof originalLog === 'function') {
			return function() {
				originalLog.apply(loggerContext, arguments);
			};
		}
		return function() {
			var message = Array.prototype.slice.apply(arguments).join(' ');
			originalLog(message);
		};
	})();

	merge = function(target, src) {
		var array = dust.isArray(src);
		var dst = array && [] || {};
		if (array) {
			target = target || [];
			dst = dst.concat(target);
			src.forEach(function(e, i) {
				if (typeof dst[i] === 'undefined') {
					dst[i] = e;
				} else if (typeof e === 'object') {
					dst[i] = merge(target[i], e);
				} else {
					if (target.indexOf(e) === -1) {
						dst.push(e);
					}
				}
			});
		} else {
			if (target && typeof target === 'object') {
				Object.keys(target).forEach(function (key) {
					dst[key] = target[key];
				})
			}
			Object.keys(src).forEach(function (key) {
				if (typeof src[key] !== 'object' || !src[key]) {
					dst[key] = src[key];
				}
				else {
					if (!target[key]) {
						dst[key] = src[key];
					} else {
						dst[key] = merge(target[key], src[key]);
					}
				}
			});
		}
		return dst;
	}

	domReady = (function () {
		var listener;
		var queue = [];
		var domContentLoaded = 'DOMContentLoaded';
		var loaded = /^loaded|^i|^c/.test(doc.readyState);
		if (!loaded) {
			doc.addEventListener(domContentLoaded, listener = function () {
				doc.removeEventListener(domContentLoaded, listener);
				loaded = true;
				while (listener = queue.shift()) {
					listener();
				}
			});
		}
		return function (callbackFn) {
			if (loaded) {
				callbackFn();
			} else {
				queue.push(callbackFn);
			}
		};
	})();

	/* hoverintent v0.1.0 (2013-05-20) | http://tristen.ca/hoverintent | Copyright (c) 2013 ; Licensed MIT */

	var hoverintent = (function() {
		var hoverintent = function(el, over, out) {
			var x, y, pX, pY,
				h = {},
				state = 0,
				timer = 0,
				cleanupFns = [],
				options = {
					sensitivity: 7,
					interval: 100,
					timeout: 0
				};
			var track = function(e) {
				x = e.clientX;
				y = e.clientY;
			};
			var delay = function(el, outEvent, e) {
				if (timer) timer = clearTimeout(timer);
				state = 0;
				return outEvent.call(el, e);
			};
			var dispatch = function(e, event, over) {
				if (timer) timer = clearTimeout(timer);
				if (over) {
					pX = e.clientX;
					pY = e.clientY;
					el.addEventListener('mousemove', track);
					if (state !== 1) {
						timer = setTimeout(function() {
							compare(el, event, e);
						}, options.interval);
					}
				} else {
					el.removeEventListener('mousemove', track);
					if (state === 1) {
						timer = setTimeout(function() {
							delay(el, event, e);
						}, options.timeout);
					}
				}
				return this;
			};
			var compare = function(el, overEvent, e) {
				if (timer) timer = clearTimeout(timer);
				if ((Math.abs(pX - x) + Math.abs(pY - y)) < options.sensitivity) {
					state = 1;
					return overEvent.call(el, e);
				} else {
					pX = x; pY = y;
					timer = setTimeout(function () {
						compare(el, overEvent, e);
					}, options.interval);
				}
			};
			var dispatchOver = function(e) {
				dispatch(e, over, true);
			}
			var dispatchOut = function(e) {
				dispatch(e, out);
			}
			h.options = function(opt) {
				options = merge(options, opt || {});
			};
			h.remove = function() {
				for (var i = cleanupFns.length - 1; i >= 0; i--) {
					cleanupFns[i]();
				};
			}
			h.add = function(newElem) {
				newElem.addEventListener('mouseover', dispatchOver);
				newElem.addEventListener('mouseout', dispatchOut);
				cleanupFns.push(function() {
					newElem.removeEventListener('mouseover', dispatchOver);
					newElem.removeEventListener('mouseout', dispatchOut);
				});
			}
			if (el) {
				el.addEventListener('mouseover', dispatchOver);
				el.addEventListener('mouseout', dispatchOut);
				cleanupFns.push(function() {
					el.removeEventListener('mouseover', dispatchOver);
					el.removeEventListener('mouseout', dispatchOut);
				});
			}
			return h;
		};
		return hoverintent;
	})();

	/* # SETTINGS ############################################## */

	settings = {
		'cache': true,
		'locale': {
			'default': 'en_GB',
			'fallback': {
				'es_MX': 'es_ES'
			}
		},
		'module': {
			'setting': {
				'apicall': {
					'remoteCallbackParam': 'callback'
				},
				'template': {
					'loading': 'loading',
					'index'  : 'index',
					'error'  : 'error'
				},
				'tether': {
					'classPrefix': 'darktip-tether',
					'attachment': 'bottom center',
					'targetAttachment': 'top center',
					'constraints':[
						{
							'to': 'window',
							'attachment': 'together',
							'pin': true
						}
					]
				}
			},
			'hoverintent': {
				'timeout': 300,
				'interval': 75,
				'sensitivity': 7
			}
		}
	};

	settingsContext = dust.makeBase().push(settings);

	DarkTip.setting = function(key, data) {
		var tplNames = [];
		if (typeof data === 'undefined') {
			return settingsContext.get(key);
		}
		tplNames = key.match(/^module\.template\.([^\.].*)$/);
		if (tplNames && tplNames.length)
		{
			data = dust.loadSource(dust.compile(data, tplNames[1]));
		}
		settingsContext.set(key, data);
		return this;
	};

	DarkTip.css = (function() {
		var styleSheet,
			api        = {},
			styleTag   = doc.createElement('style');
		styleTag.setAttribute('media', 'screen');
		styleTag.setAttribute('type', 'text/css');
		domReady(function() {
			doc.head.appendChild(styleTag);
			styleSheet = styleTag.sheet;
		});
		api.add = function(selector, rules) {
			domReady(function() {
				var index = styleSheet.cssRules.length;
				if (styleSheet.insertRule) {
					styleSheet.insertRule(selector + '{' + rules + '}', index);
				} else if (styleSheet.addRule) {
					styleSheet.addRule(selector, rules, index);
				}
			});
			return api;
		};
		return api;
	})();

	DarkTip.init = function() {
		for (var i = 0, j = queueFnInit.length; i < j; i++) {
			queueFnInit[i]();
		}
		domReady(function() {
			if (MutationObserver) {
				var watcher = new MutationObserver(function(mutations) {
					var added, removed, i, l, n, o;
					for (var m = 0, ml = mutations.length; m < ml; m++) {
						added = mutations[m].addedNodes;
						removed = mutations[m].removedNodes;
						for (i = 0, l = added.length; i < l; i++) {
							for (n = 0, o = queueFnObserveAdd.length; n < o; n++) {
								queueFnObserveAdd[n](added[i]);
							}
						}
						for (i = 0, l = removed.length; i < l; i++) {
							for (n = 0, o = queueFnObserveRemove.length; n < o; n++) {
								queueFnObserveRemove[n](removed[i]);
							}
						}
					}
				});
				watcher.observe(doc, {childList: true, subtree: true});
			}
		});
	};

	/* # PRIMING ############################################### */

	DarkTip.css.add('.darktip-tooltip', 'opacity:0; pointer-events:none;')
		.add('.darktip-active', 'opacity:1; pointer-events:auto;');

	DarkTip.setting('module.template.loading', '<div class="loading"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="12mm" height="12mm" viewBox="0 0 40 40" preserveAspectRatio="xMidYMid meet" fill="currentColor"><path opacity="0.2" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946 s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634 c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/><path d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0 C22.32,8.481,24.301,9.057,26.013,10.047z"><animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="0.5s" repeatCount="indefinite"/></path></svg></div>');

	/* # JSONP & API ########################################### */

	var dataReceiveFn = function(url, successFn, errorFn, cacheDuration, callBackName) {
		return function(data) {
			if (typeof callBackName !== 'undefined') {
				delete DarkTip.jsonp[callBackName];
			}
			if (data.error) {
				if (errorFn) {
					data.error.callback = callBackName;
					errorFn(data.error);
				}
			} else {
				if ((typeof successFn.validationFn === 'function') && (!successFn.validationFn(data))) {
					return errorFn({code: 500, message: 'Requested content did not validate'});
				}
				DarkTip.cache('apicall', url, data, cacheDuration);
				if (typeof successFn.processFn === 'function') {
					data = successFn.processFn(data);
				}
				successFn(data);
			}
		};
	};

	DarkTip.callApi = function(url, successFn, errorFn, cacheDuration, validationFn, processFn, remoteCallbackParam) {
		successFn.processFn = processFn;
		successFn.validationFn = validationFn;
		var cache = DarkTip.cache('apicall', url);
		if (typeof cache !== 'undefined') {
			return dataReceiveFn(url, successFn, errorFn, false)(cache);
		}
		return DarkTip.jsonp(url, successFn, errorFn, cacheDuration, remoteCallbackParam);
	};

	DarkTip.jsonp = (function() {
		var callbackId = 0;
		var jsonp = function(url, successFn, errorFn, cacheDuration, remoteCallbackParam, timeout) {
			remoteCallbackParam = remoteCallbackParam || 'callback';
			timeout = timeout || 5000;
			var callBackName = '_cb' + callbackId++;
			var queryString = '?' + remoteCallbackParam + '=DarkTip.jsonp.' + callBackName;
			var scr = doc.createElement('script');
			scr.type = 'text/javascript';
			scr.src = url + queryString;
			var head = doc.querySelector('head');
			head.insertBefore(scr, head.firstChild);
			jsonp[callBackName] = dataReceiveFn(url, successFn, errorFn, cacheDuration, callBackName);
			globalScope.setTimeout(function() {
				if (typeof jsonp[callBackName] !== 'undefined') {
					jsonp[callBackName] = function(data) {
						delete jsonp[callBackName];
					};
					errorFn({ code: 408, message: 'Request Timeout', callback: callBackName });
					globalScope.setTimeout(function() {
						if (typeof jsonp[callBackName] !== 'undefined') {
							delete jsonp[callBackName];
						};
					}, 60000);
				}
			}, timeout);
		};
		return jsonp;
	})();

	/* # CACHE ################################################# */

	DarkTip.cache = (function() {
		var cache = function(region, key, data, duration) {
			if (typeof data === 'undefined') {
				return cache.read(region, key);
			} else {
				if (duration === false) {
					return;
				}
				return cache.write(region, key, data, duration);
			}
		}
		if (typeof globalScope.localStorage !== 'undefined') {
			var getKey = function(region, key) {
				return ('DarkTip_cache_' + region + '_' + key);
			};
			cache.read = function(region, key) {
				if (!DarkTip.setting('cache')) {
					return undefined;
				}
				var result = undefined;
				var rawitem = globalScope.localStorage.getItem(getKey(region, key));
				if (typeof rawitem !== 'undefined')
				{
					var item = JSON.parse(rawitem);
					if (item !== null)
					{
						var curtime = Math.round((new Date()).getTime() / 1000);
						if ((!item.maxtime) || (curtime < item.maxtime)) {
							result = item.content;
						}
					}
				}
				return result;
			};
			cache.write = function(region, key, data, duration) {
				var maxtime = (duration === 0 ? 0 : (Math.round((new Date()).getTime() / 1000) + duration));
				try {
					globalScope.localStorage.setItem(getKey(region, key), JSON.stringify({'maxtime': maxtime, 'content': data}));
				} catch (e) {
					if (e == QUOTA_EXCEEDED_ERR) {
						log('Writing to localStorage failed! Quote exeeded for region/key "' + region + '/' + key + '".');
					}
					return false;
				}
				return true;
			};
		} else {
			cache.storage = {};
			cache.read = function(region, key) {
				if (!DarkTip.setting('cache')) {
					return undefined;
				}
				var result = undefined;
				if (typeof cache.storage[region][key] !== 'undefined') {
					var curtime = Math.round((new Date()).getTime() / 1000);
					if ((cache.storage[region][key].maxtime === 0) || (curtime < cache.storage[region][key].maxtime)) {
						result = item.content;
					}
				}
				return result;
			};
			cache.write = function(region, key, data, duration) {
				var maxtime = (duration === 0 ? 0 : (Math.round((new Date()).getTime() / 1000) + duration));
				cache.storage['region'][key] = { 'maxtime': maxtime, 'content': data };
				return true;
			};
		}
		return cache;
	})();

	/* # STYLE ################################################# */

	DarkTip.style = function(styleId) {
		if (typeof repositoryStyles[styleId] !== 'undefined') {
			return repositoryStyles[styleId];
		}
		var Style = function() {
			var self = this,
				styleContext = dust.makeBase().push({}),
				wrappperTplIndex,
				wrappperTplLoading;
			var getCssClass = function() {
				return ('darktip-style-' + styleId);
			};
			this.cssClass = function() {
				return getCssClass();
			};
			this.var = function(key, value) {
				styleContext.set(key, value);
				return self;
			};
			this.css = function(selector, rules) {
				selector = '.' + getCssClass() + (selector ? ' ' + selector : '');
				dust.renderSource(rules, styleContext, function(err, compiledRules) {
					if (!err) {
						DarkTip.css.add(selector, compiledRules);
					}
				});
				return self;
			};
			this.wrapper = function(before, after) {
				before = before || '';
				after  = after  || '';
				wrappperTplIndex   = dust.loadSource(dust.compile((before + '{>"{module.setting.template.index}" /}'   + after), 'wrapper-index'));
				wrappperTplLoading = dust.loadSource(dust.compile((before + '{>"{module.setting.template.loading}" /}' + after), 'wrapper-loading'));
				return self;
			};
			this.getWrappedIndexTplName = function() {
				return 'wrapper-index-style-' + styleId;
			};
			this.getWrappedIndexTpl = function() {
				return wrappperTplIndex || false;
			};
			this.getWrappedLoadingTplName = function() {
				return 'wrapper-loading-style-' + styleId;
			};
			this.getWrappedLoadingTpl = function() {
				return wrappperTplLoading || false;
			};
		};
		return (repositoryStyles[styleId] = new Style());
	};

	/* # TRIGGER GROUP ######################################### */

	DarkTip.triggerGroup = function(triggerGroupId) {
		if (typeof repositoryTriggerGroups[triggerGroupId] !== 'undefined') {
			return repositoryTriggerGroups[triggerGroupId];
		}
		var TriggerGroup = function() {
			var self     = this,
				triggers = [];
			var findFirstTrigger = function(candidate) {
				var i, result, trigger;
				for (i = (triggers.length - 1); i >= 0; i--) {
					trigger = triggers[i];
					result  = trigger.extractor(candidate);
					if (result) {
						return {'module': trigger.module, 'params': result}
					}
				}
			};
			var bindEvent = function(event, selector, accessFn, triggerGroup) {
				var addEventListeners = function(elem) {
					var handleEventFire = function(evt, accessed, on) {
						if (typeof on === 'undefined') on = false;
						var result = findFirstTrigger(accessed);
						if (result) {
							var module = DarkTip.module(result.module);
							if (module) {
								evt.preventDefault();
								if (on) {
									evt.stopPropagation();
									module.start(elem, result.params);
								} else {
									module.stop(elem, result.params);
								}
							}
						}
					};
					if (!elem.DarkTip) {
						elem.DarkTip = {
							cleanupFns: []
						};
						var eventOnFn = function(evt) {
							var accessed = accessFn(this);
							if (accessed) {
								handleEventFire(evt, accessed, true);
							}
						};
						var eventOffFn = function(evt) {
							var accessed = accessFn(this);
							if (accessed) {
								handleEventFire(evt, accessed, false);
							}
						};
						var eventClickOnFn = function(evt) {
							var source = this;
							var eventClickOffFn = function(evt) {
								eventOffFn.call(source, evt);
								doc.removeEventListener('click', eventClickOffFn);
							};
							doc.removeEventListener('click', eventClickOffFn);
							doc.addEventListener('click', eventClickOffFn, false);
							eventOnFn.call(this, evt);
						};
						switch (event) {
							case 'hover':
								elem.addEventListener('mouseenter', eventOnFn,  false);
								elem.addEventListener('mouseleave', eventOffFn, false);
								elem.DarkTip.cleanupFns.push(function() {
									elem.removeEventListener('mouseenter', eventOnFn);
									elem.removeEventListener('mouseleave', eventOffFn);
								});
								break;
							case 'hoverintent':
								var opt = {
									'timeout'    : DarkTip.setting('module.hoverintent.timeout'),
									'interval'   : DarkTip.setting('module.hoverintent.interval'),
									'sensitivity': DarkTip.setting('module.hoverintent.sensitivity')
								};
								elem.DarkTip.hoverintent = hoverintent(elem, eventOnFn, eventOffFn);
								elem.DarkTip.hoverintent.options(opt);
								elem.DarkTip.cleanupFns.push(function() {
									elem.DarkTip.hoverintent.remove();
								});
								break;
							case 'click':
								elem.addEventListener('click', eventClickOnFn, false);
								elem.DarkTip.cleanupFns.push(function() {
									elem.removeEventListener('click', eventClickOnFn);
								});
								break;
						}
					}
				};
				var removeEventListeners = function(elem) {
					if (elem.DarkTip) {
						for (var i = 0, j = elem.DarkTip.cleanupFns.length; i < j; i++) {
							elem.DarkTip.cleanupFns[i]();
						}
					}
				};
				queueFnInit.push(function() {
					var elems = doc.querySelectorAll(selector);
					Array.prototype.forEach.call(elems, function(elem) {
						if (!elem.DarkTip) {
							addEventListeners(elem);
						}
					});
				});
				if (MutationObserver) {
					queueFnInit.push(function() {
						queueFnObserveAdd.push(function(elem) {
							if (!elem || elem.nodeType !== 1) {
								return;
							}
							var elems = elem.querySelectorAll(selector);
							Array.prototype.forEach.call(elems, function(elem) {
								if (!elem.DarkTip) {
									addEventListeners(elem);
								}
							});
						});
						queueFnObserveRemove.push(function(elem) {
							if (!elem || elem.nodeType !== 1) {
								return;
							}
							var elems = elem.querySelectorAll(selector);
							Array.prototype.forEach.call(elems, function(elem) {
								if (elem.DarkTip) {
									DarkTip.removeEventListeners(elem, event, accessFn, triggerGroup);
								}
							});
						});
					});
				}
			};
			this.event = function(selector, event, accessFn) {
				if (typeof selector !== 'string')   { log('TriggerGroup.event: Invalid selector! 1st argument must be selector string.');     return this; }
				if (typeof event    !== 'string')   { log('TriggerGroup.event: Invalid show event! 2nd argument must be event type string.'); return this; }
				if (typeof accessFn !== 'function') { log('TriggerGroup.event: Invalid access function! 3rd argument must be a function.');   return this; }
				bindEvent(event, selector, accessFn, this);
				return this;
			};
			this.trigger = function(moduleId, extractorFn, extractorPayload) {
				var builtExtractorFn = (function() {
					var newFn;
					if (typeof extractorFn === 'function') {
						return extractorFn;
					}
					if (typeof extractorFn === 'string') {
						if (typeof extractorPayload === 'undefined') {
							extractorPayload = {};
						}
						if (typeof extractorPayload !== 'object') {
							log('TriggerGroup.trigger: Invalid RegExp payload! 3rd argument must be an object.');
							return false;
						}
						newFn = new RegExp(extractorFn);
						return function(candidate) {
							var data = {};
							var result = newFn.exec(candidate);
							if (result) {
								for (var key in extractorPayload) {
									if (extractorPayload.hasOwnProperty(key)) {
										data[extractorPayload[key]] = result[key];
									}
								}
								return data;
							}
							return false;
						};
					}
					log('TriggerGroup.trigger: Invalid extractor payload! 2nd argument must be a function or a valid extractor build object.');
					return false;
				})();
				if (typeof builtExtractorFn === 'function') {
					triggers.push({ 'module': moduleId, 'extractor': builtExtractorFn });
				}
				return this;
			};
		};
		return (repositoryTriggerGroups[triggerGroupId] = new TriggerGroup());
	};

	/* # MODULE ################################################ */

	DarkTip.module = function(moduleId, dependencies) {
		var numdeps = 0;
		if (typeof repositoryModules[moduleId] !== 'undefined') {
			return repositoryModules[moduleId];
		}
		if (typeof dependencies === 'string') {
			dependencies = [dependencies];
		}
		if (dust.isArray(dependencies)) {
			numdeps = dependencies.length;
		}
		var Module = function(moduleId, dependencies) {
			var self       = this,
				cssClasses = [('darktip-module-' + moduleId)];
			if (numdeps > 0) {
				for (var i = 0; i < numdeps; i++) {
					if (typeof repositoryModules[dependencies[i]] === 'undefined') {
						log('Module "' + moduleId + '" could not be created! Dependant module "' + dependencies[i] + '" was not found.');
						return;
					} else {
						cssClasses.push('darktip-module-' + dependencies[i]);
					}
				};
			}
			var createTooltipElement = function(content) {
				var tip   = doc.createElement('div'),
					style = moduleContext.get('module.style');
				tools.element.addClass(tip, 'darktip-tooltip');
				if (style) {
					tools.element.addClass(tip, style.cssClass());
				}
				for (var i = cssClasses.length - 1; i >= 0; i--) {
					tools.element.addClass(tip, cssClasses[i]);
				}
				tip.innerHTML = content;
				doc.body.appendChild(tip);
				return tip;
			};
			var buildKey = function() {
				var args = Array.prototype.slice.call(arguments);
				args.unshift('module');
				return args.join('.');
			};
			var dataHandler = function(region, key, data) {
				key = buildKey(region, key);
				if (typeof data === 'undefined') {
					return moduleContext.get(key);
				}
				moduleContext.set(key, data);
				return self;
			};
			var moduleData = {
				'name'    : moduleId,
				'style'   : undefined,
				'map'     : {},
				'i18n'    : {},
				'setting' : {},
				'template': {},
				'apicall' : {}
			};
			var moduleContext = {};
			this.buildContext = function(context) {
				if (numdeps > 0) {
					for (var i = numdeps - 1; i >= 0; i--) {
						context = repositoryModules[dependencies[i]].buildContext(context);
					}
				}
				context = context.push({'module': moduleData});
				return context;
			};
			this.style = function(styleId) {
				var key   = buildKey('style');
				if (typeof styleId !== 'undefined')
				{
					var style = repositoryStyles[styleId];
					if (style) {
						moduleContext.set(key, style);
						moduleContext.set(buildKey('template', style.getWrappedIndexTplName()),   style.getWrappedIndexTpl());
						moduleContext.set(buildKey('template', style.getWrappedLoadingTplName()), style.getWrappedLoadingTpl());
					} else {
						log('Style "' + styleId + '" could not be attached to module "' + moduleId + '"! Style was not found.');
					}
					return self;
				}
				return moduleContext.get(key);
			}
			this.map = function(key, data) {
				return dataHandler('map', key, data);
			};
			this.setting = function(key, data) {
				return dataHandler('setting', key, data);
			};
			this.i18n = function(locale, tplName, data) {
				var key = buildKey('i18n', locale, tplName);
				if (typeof data === 'undefined') {
					return moduleContext.get(key);
				}
				moduleContext.set(key, dust.loadSource(dust.compile(data, tplName)));
				return self;
			};
			this.template = function(tplName, data) {
				var key = buildKey('template', tplName);
				if (typeof data === 'undefined') {
					return moduleContext.get(key);
				}
				moduleContext.set(key, dust.loadSource(dust.compile(data, tplName)));
				return self;
			};
			this.apicall = function(key, url, caching, validationFn, processFn) {
				key = buildKey('apicall', key);
				if (typeof url === 'undefined') {
					return moduleContext.get(key);
				} else {
					moduleContext.set(key, {
						'url'         : url,
						'caching'     : caching || false,
						'validationFn': validationFn || false,
						'processFn'   : processFn || false
					});
				}
				return self;
			};
			this.trigger = function(triggerGroupId, extractorFn, extractorPayload) {
				var triggerGroup = DarkTip.triggerGroup(triggerGroupId);
				if (triggerGroup) {
					if (typeof extractorFn === 'string') {
						DarkTip.dust.renderSource(extractorFn, moduleContext, function(err, out) {
							triggerGroup.trigger(moduleId, out, extractorPayload);
						});
					} else {
						triggerGroup.trigger(moduleId, extractorFn, extractorPayload);
					}
				} else {
					log('Trigger for module "' + moduleId + '" could not be created! Trigger group "' + triggerGroupId + '" was not found.');
				}
				return self;
			};
			this.css = function(selector, rules) {
				effectiveSelector = '.darktip-tooltip' + ((cssClasses && cssClasses.length) ? ('.' + cssClasses.join('.')) : '') + (selector ? ' ' + selector : '');
				DarkTip.css.add(effectiveSelector, rules);
				return self;
			};
			this.start = function(elem, params) {
				log('module start', elem, params);
				var r, style, templateIndex, templateLoading;
				if (!elem.DarkTip.init) {
					elem.DarkTip.init   = true;
					elem.DarkTip.active = true;
					elem.DarkTip.tether = false;
					elem.DarkTip.tip    = false;
					var newContext      = moduleContext.push(params);
					var tetheroptions   = {
						'target': elem
					};
					r = self.setting('tether.attachment');       if (typeof r !== 'undefined' && r !== false) tetheroptions.attachment       = r;
					r = self.setting('tether.targetAttachment'); if (typeof r !== 'undefined' && r !== false) tetheroptions.targetAttachment = r;
					r = self.setting('tether.offset');           if (typeof r !== 'undefined' && r !== false) tetheroptions.offset           = r;
					r = self.setting('tether.targetOffset');     if (typeof r !== 'undefined' && r !== false) tetheroptions.targetOffset     = r;
					r = self.setting('tether.targetModifier');   if (typeof r !== 'undefined' && r !== false) tetheroptions.targetModifier   = r;
					r = self.setting('tether.constraints');      if (typeof r !== 'undefined' && r !== false) tetheroptions.constraints      = r;
					r = self.setting('tether.optimizations');    if (typeof r !== 'undefined' && r !== false) tetheroptions.optimizations    = r;
					r = self.setting('tether.classPrefix');      if (typeof r !== 'undefined' && r !== false) tetheroptions.classPrefix      = r;
					var displayFn = function(err, content) {
						if (!err && content) {
							if (elem.DarkTip.tip && elem.DarkTip.tether) {
								elem.DarkTip.tip.innerHTML = content;
								if (elem.DarkTip.active) {
									tools.element.addClass(elem.DarkTip.tip, 'darktip-active');
									elem.DarkTip.tether.position();
								}
							} else {
								var tip = createTooltipElement(content);
								if (elem.DarkTip.hoverintent) {
									elem.DarkTip.hoverintent.add(tip);
								}
								elem.DarkTip.tip = tetheroptions.element = tip;
								elem.DarkTip.tether = new tether(tetheroptions);
								elem.DarkTip.cleanupFns.push(function() {
									elem.DarkTip.tether.destroy();
								});
								if (!elem.DarkTip.active) {
									elem.DarkTip.tether.disable();
								} else {
									tools.element.addClass(elem.DarkTip.tip, 'darktip-active');
									elem.DarkTip.tether.position();
								}
							}
						}
					};
					var displayTempFn = function(err, content) {
						if (!elem.DarkTip.tip) {
							displayFn(err, content);
						}
					};
					style = self.style();
					console.log('style', style);
					if (style) {
						templateLoading = style.getWrappedLoadingTplName();
						templateIndex   = style.getWrappedIndexTplName();
					} else {
						templateLoading = self.setting('template.loading');
						templateIndex   = self.setting('template.index');
					}
					dust.render(templateLoading, newContext, displayTempFn);
					dust.render(templateIndex, newContext, displayFn);
				} else {
					elem.DarkTip.active = true;
					if (elem.DarkTip.tether) {
						elem.DarkTip.tether.enable();
					}
					if (elem.DarkTip.tip) {
						tools.element.addClass(elem.DarkTip.tip, 'darktip-active');
						elem.DarkTip.tether.position();
					}
				}
			}
			this.stop = function(elem, params) {
				if (!elem.DarkTip.init) {
					elem.DarkTip.active = false;
					elem.DarkTip.tether = false;
					elem.DarkTip.tip    = false;
					return;
				}
				elem.DarkTip.active = false;
				if (elem.DarkTip.tip) {
					tools.element.removeClass(elem.DarkTip.tip, 'darktip-active');
				}
				if (elem.DarkTip.tether) {
					elem.DarkTip.tether.disable();
				}
			}
			moduleContext = self.buildContext(settingsContext);
		};
		return (repositoryModules[moduleId] = new Module(moduleId, dependencies));
	};

	/* ######################################################### */

	if (typeof exports === 'object') {
		module.exports = DarkTip;
	}

	globalScope.DarkTip = DarkTip;

})((function(){return this;})())