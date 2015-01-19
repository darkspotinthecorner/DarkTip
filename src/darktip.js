(function(globalScope) {

	/* # INIT ################################################## */

	var DarkTip = {};

	var q      = require('q'),
		dust   = require('dustjs-linkedin'),
		tether = require('tether');

	//require('dustjs-linkedin/lib/parser');
	require('dustjs-linkedin/lib/compiler');
	require('dustjs-helpers');
	require('./dustjs-darktip');

	DarkTip.q      = q;
	DarkTip.dust   = dust;
	DarkTip.tether = tether;

	DarkTip.modules          = {};
	DarkTip.triggerGroups    = {};
	DarkTip.MutationObserver = globalScope.MutationObserver || globalScope.WebkitMutationObserver || false;

	/* # SETTINGS ############################################## */

	DarkTip._settings = {
		'module': {
			'locale': 'en_GB',
			'setting': {
				'template': {
					'index': 'index',
					'error': 'error'
				}
			},
			'tether': {
				'classPrefix': 'darktip',
				'attachment': 'bottom center',
				'targetAttachment': 'top center',
				'constraints':[
					{
						'to': 'scrollParent',
						'attachment': 'together'
					}
				]
			},
			'hoverintent': {
				'timeout': 300,
				'interval': 75,
				'sensitivity': 7
			}
		}
	};

	DarkTip.settings  = dust.makeBase().push(DarkTip._settings);

	DarkTip.setting = function(key, data) {
		var tplNames = [];
		if (typeof data === 'undefined') {
			return DarkTip.settings.get(key);
		}
		tplNames = key.match(/^module\.template\.([^\.].*)$/);
		if (tplNames.length)
		{
			data = dust.loadSource(dust.compile(data, tplNames[1]));
		}
		DarkTip.settings.set(key, data);
		return this;
	};

	DarkTip.setting('module.template.loading', '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20mm" height="20mm" viewBox="0 0 40 40" fill="currentColor"><path opacity="0.2" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946 s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634 c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/><path d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0 C22.32,8.481,24.301,9.057,26.013,10.047z"><animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="0.5s" repeatCount="indefinite"/></path></svg>');

	/* # TOOLS ################################################# */

	var log = (function() {
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

	var merge = function(target, src) {
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

	/* ######################################################### */

	DarkTip.dataReceiveFn = function(url, successFn, errorFn, cacheDuration, callBackName) {
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

	DarkTip.jsonp = (function() {
		var callbackId = 0;
		var jsonp = function(url, successFn, errorFn, cacheDuration, remoteCallbackParam, timeout) {
			remoteCallbackParam = remoteCallbackParam || 'callback';
			timeout = timeout || 5000;
			var callBackName = '_cb' + callbackId++;
			var queryString = '?' + remoteCallbackParam + '=DarkTip.jsonp.' + callBackName;
			var doc = globalScope.document;
			var scr = doc.createElement('script');
			scr.type = 'text/javascript';
			scr.src = url + queryString;
			var head = doc.querySelector('head');
			head.insertBefore(scr, head.firstChild);
			jsonp[callBackName] = DarkTip.dataReceiveFn(url, successFn, errorFn, cacheDuration, callBackName);
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
			cache.key = function(region, key) {
				return ('DarkTip_cache_' + region + '_' + key);
			};
			cache.read = function(region, key) {
				var result = undefined;
				var rawitem = globalScope.localStorage.getItem(cache.key(region, key));
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
					globalScope.localStorage.setItem(cache.key(region, key), JSON.stringify({'maxtime': maxtime, 'content': data}));
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

	DarkTip.callApi = function(url, successFn, errorFn, cacheDuration, validationFn, processFn) {
		successFn.processFn = processFn;
		successFn.validationFn = validationFn;
		var cache = DarkTip.cache('apicall', url);
		if (typeof cache !== 'undefined') {
			return DarkTip.dataReceiveFn(url, successFn, errorFn, false)(cache);
		}
		return DarkTip.jsonp(url, successFn, errorFn, cacheDuration);
	};

	DarkTip.triggerGroup = function(triggerGroupId) {
		if (typeof DarkTip.triggerGroups[triggerGroupId] !== 'undefined') {
			return DarkTip.triggerGroups[triggerGroupId];
		}
		var TriggerGroup = function(triggerGroupId) {
			this.id = triggerGroupId;
			this.triggers = [];
			this.generateExtractorFn = function(moduleId, extractorFn, extractorPayload) {
				if (typeof extractorFn === 'function') {
					return extractorFn;
				}
				if (typeof extractorFn === 'string') {
					if (typeof extractorPayload !== 'object') {
						log('TriggerGroup.trigger: Invalid RegExp payload! 3rd argument must be an object.');
						return false;
					}
					// Treat extractorFn as a dust template and pass
					DarkTip.dust

					extractorFn = new RegExp(extractorFn);
					return function(candidate) {
						var data = {};
						var result = extractorFn.exec(candidate);
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
			};
			this.event = function(selector, event, accessFn) {
				if (typeof selector !== 'string') {
					log('TriggerGroup.event: Invalid selector! 1st argument must be selector string.');
					return this;
				}
				if (typeof event !== 'string') {
					log('TriggerGroup.event: Invalid show event! 2nd argument must be event type string.');
					return this;
				}
				if (typeof accessFn !== 'function') {
					log('TriggerGroup.event: Invalid access function! 3rd argument must be a function.');
					return this;
				}
				DarkTip.bindEvent(event, selector, accessFn, this);
				return this;
			};
			this.trigger = function(moduleId, extractorFn, extractorPayload) {
				extractorFn = this.generateExtractorFn(moduleId, extractorFn, extractorPayload);
				if (typeof extractorFn !== 'function') {
					log('TriggerGroup.trigger: Invalid extractor payload! 2nd argument must be a function or a valid extractor build object.');
					return this;
				}
				this.triggers.push({ 'module': moduleId, 'extractor': extractorFn });
				return this;
			};
			this.findFirstTrigger = function(candidate) {
				var i, result, trigger, triggerlen = this.triggers.length;
				for (i = (triggerlen - 1); i >= 0; i--) {
					trigger = this.triggers[i];
					result  = trigger.extractor(candidate);
					if (result) {
						return {'module': trigger.module, 'params': result}
					}
				}
			};
		}
		return (DarkTip.triggerGroups[triggerGroupId] = new TriggerGroup(triggerGroupId));
	};

	DarkTip.module = function(moduleId, dependencies)
	{
		var numdeps = 0;
		if (typeof DarkTip.modules[moduleId] !== 'undefined') {
			return DarkTip.modules[moduleId];
		}
		if (typeof dependencies === 'string') {
			dependencies = [dependencies];
		}
		if (dust.isArray(dependencies)) {
			numdeps = dependencies.length;
		}
		var Module = function(moduleId, dependencies) {
			if (numdeps > 0) {
				for (var i = 0; i < numdeps; i++) {
					if (typeof DarkTip.modules[dependencies[i]] === 'undefined') {
						log('Module "' + moduleId + '" could not be created! Dependant module "' + dependencies[i] + '" was not found.');
						return;
					}
				};
			}
			this.data = {
				'name'    : moduleId,
				'map'     : {},
				'i18n'    : {},
				'setting' : {},
				'template': {},
				'apicall' : {}
			};
			this.buildContext = function(context) {
				if (numdeps > 0) {
					for (var i = numdeps - 1; i >= 0; i--) {
						context = DarkTip.modules[dependencies[i]].buildContext(context);
					}
				}
				context = context.push({'module': this.data});
				return context;
			};
			this.buildKey = function() {
				var args = Array.prototype.slice.call(arguments);
				args.unshift('module');
				return args.join('.');
			};
			this.dataHandler = function(region, key, data) {
				key = this.buildKey(region, key);
				if (typeof data === 'undefined') {
					return this.context.get(key);
				}
				this.context.set(key, data);
				return this;
			};
			this.map = function(key, data) {
				return this.dataHandler('map', key, data);
			};
			this.i18n = function(locale, key, data) {
				return this.dataHandler(('i18n.' + locale), key, data);
			};
			this.setting = function(key, data) {
				return this.dataHandler('setting', key, data);
			};
			this.template = function(tplName, data) {
				var key = this.buildKey('template', tplName);
				if (typeof data === 'undefined') {
					return this.context.get(key);
				}
				this.context.set(key, dust.loadSource(dust.compile(data, tplName)));
				return this;
			};
			this.apicall = function(key, url, caching, validationFn, processFn) {
				key = this.buildKey('apicall', key);
				if (typeof url === 'undefined') {
					return this.context.get(key);
				} else {
					this.context.set(key, {
						'url'         : url,
						'caching'     : caching || false,
						'validationFn': validationFn || false,
						'processFn'   : processFn || false
					});
				}
				return this;
			};
			this.trigger = function(triggerGroupId, extractorFn, extractorPayload) {
				var triggerGroup = DarkTip.triggerGroup(triggerGroupId);
				if (triggerGroup) {
					if (typeof extractorFn === 'string') {
						DarkTip.dust.renderSource(extractorFn, this.context, function(err, out) {
							triggerGroup.trigger(moduleId, out, extractorPayload);
						});
					} else {
						triggerGroup.trigger(moduleId, extractorFn, extractorPayload);
					}
				} else {
					log('Trigger for module "' + moduleId + '" could not be created! Trigger group "' + triggerGroupId + '" was not found.');
				}
				return this;
			};
			this.test = function(locale, data, callbackFn) {
				var newContext = this.context.push(data);
				newContext.set('module.locale', locale);
				dust.render('index', this.context.push(data), callbackFn);
			};
			this.start = function(elem, params) {
				log('starting module '+moduleId);
				if (!elem.DarkTip) {
					elem.DarkTip = {
						'status': 'started',
						'tether': false
					};
				}
				var doc = globalScope.document;
				var newContext = this.context.push(params);
				var tetheroptions = {
					'target'          : elem,
					'attachment'      : this.context.get('module.tether.attachment'),
					'targetAttachment': this.context.get('module.tether.targetAttachment'),
					//'offset'          : this.context.get('module.tether.offset'),
					//'targetOffset'    : this.context.get('module.tether.targetOffset'),
					//'targetModifier'  : this.context.get('module.tether.targetModifier'),
					'constraints'     : this.context.get('module.tether.constraints'),
					//'optimizations'   : this.context.get('module.tether.optimizations'),
					'classPrefix'     : this.context.get('module.tether.classPrefix')
				};
				var displayFn = function(err, content) {
					console.log(['displayFn', tetheroptions]);
					if (!err && content) {
						if (elem.DarkTip.status !== 'stopped') {
							if (elem.DarkTip.tether) {
								elem.DarkTip.tip.innerHTML = content;
								elem.DarkTip.tether.position();
							} else {
								var tip = doc.createElement('div');
								tip.innerHTML = content;
								doc.body.appendChild(tip);
								elem.DarkTip.tip = tetheroptions.element = tip;
								elem.DarkTip.tether = new tether(tetheroptions);
							}
						}
					}
				};
				var displayTempFn = function(err, content) {
					if (elem.DarkTip.status === 'started') {
						displayFn(err, content);
					}
				};

				dust.render('loading', this.context.push(params), displayTempFn);
				dust.render('index', this.context.push(params), displayFn);

				// elem['DarkTip'] = new tether( ... );
				// Start async render of "loading" template
				// Start async render of "index" template
				// whatever is ready, put into dom and tether it

				// start render tooltip
				// -> callback: display tooltip
			}
			this.stop = function(elem, params) {
				log('stopping module '+moduleId);
				if (!elem.DarkTip) {
					return;
				}
				elem.DarkTip.status = 'stopped';
				if (elem.DarkTip.tether) {
					elem.DarkTip.tether.destroy();
				}

				// stop rendering tooltip
				// if already rendered, hide it
			}
			this.context = this.buildContext(dust.makeBase().push(DarkTip._settings));
		}
		return (DarkTip.modules[moduleId] = new Module(moduleId, dependencies));
	};

	DarkTip.bindEvent = function(event, selector, accessFn, triggerGroup) {
		var doc = globalScope.document;
		DarkTip.domReady(function() {
			var elems = doc.querySelectorAll(selector);
			Array.prototype.forEach.call(elems, function(elem) {
				DarkTip.addEventListeners(elem, event, accessFn, triggerGroup);
			});
		});
		if (DarkTip.MutationObserver) {
			var observedAddFn = function(elem) {
				console.log({'do': 'added elements', 'elem': elem, 'elems matching selector': elems});
				if (!elem || elem.nodeType !== 1) {
					return;
				}
				var elems = elem.querySelectorAll(selector);
				Array.prototype.forEach.call(elems, function(elem) {
					DarkTip.addEventListeners(elem, event, accessFn, triggerGroup);
				});
			};
			var observedRemoveFn = function(elem) {
				console.log({'do': 'removed elements', 'elem': elem, 'elems matching selector': elems});
				if (!elem || elem.nodeType !== 1) {
					return;
				}
				var elems = elem.querySelectorAll(selector);
				Array.prototype.forEach.call(elems, function(elem) {
					DarkTip.removeEventListeners(elem, event, accessFn, triggerGroup);
				});
			};
			var observeFn = function(mutations) {
				console.log({'do': 'DarkTip.MutationObserver', 'mutations': mutations});
				var added, removed, i, l;
				for (var m = 0, ml = mutations.length; m < ml; m++) {
					added = mutations[m].addedNodes;
					removed = mutations[m].removedNodes;
					for (i = 0, l = added.length; i < l; i++) {
						observedAddFn(added[i]);
					}
					for (i = 0, l = removed.length; i < l; i++) {
						observedRemoveFn(added[i]);
					}
				}
			};
			var observer = new DarkTip.MutationObserver(observeFn);
			// observer.observe(doc, {childList: true, subtree: true});
		}


		// If MutationObserver: Bind it
			// If new content comes in: document.querySelectorAll(newroot, selector...) for each triggergroup
				// Foreach element found, check each trigger on the triggergroup for events to bind
				// triggers are checked from last to first, so the newest wins
	};

	DarkTip.addEventListeners = function(elem, event, accessFn, triggerGroup) {
		var eventOnFn = function() {
			var accessed = accessFn(this);
			if (accessed) {
				DarkTip.handleEventFire(event, this, accessed, triggerGroup, true);
			}
		};
		var eventOffFn = function() {
			var accessed = accessFn(this);
			if (accessed) {
				DarkTip.handleEventFire(event, this, accessed, triggerGroup, false);
			}
		};
		if (event === 'hover') {
			elem.addEventListener('mouseenter', eventOnFn,  false);
			elem.addEventListener('mouseleave', eventOffFn, false);
		}
		if (event === 'hoverintent') {
			var opt = {
				'timeout': DarkTip.settings.get('module.hoverintent.timeout'),
				'interval': DarkTip.settings.get('module.hoverintent.interval'),
				'sensitivity': DarkTip.settings.get('module.hoverintent.sensitivity')
			};
			console.log(opt);
			DarkTip.hoverintent(elem, eventOnFn, eventOffFn).options(opt);
		}
		// if (event === 'hover&stay') {}
		// if (event === 'hoverintent&stay') {}
		// if (event === 'click') {}
		// if (event === 'click&hover') {}
	};

	DarkTip.removeEventListeners = function(elem, event, accessFn, triggerGroup) {

	};

	DarkTip.handleEventFire = function(event, elem, accessed, triggerGroup, on) {
		if (typeof on === 'undefined') on = false;
		// if element already has a tooltip attached, access it
		var result = triggerGroup.findFirstTrigger(accessed);
		if (result) {
			var module = DarkTip.module(result.module);
			if (module) {
				if (on) {
					module.start(elem, result.params);
				} else {
					module.stop(elem, result.params);
				}
			}
		}
		log({'event': event, 'elem': elem, 'accessed': accessed, 'foundTrigger': result});
	};

	DarkTip.domReady = (function () {
		var listener;
		var queue = [];
		var doc = globalScope.document;
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

	DarkTip.hoverintent = (function() {
		var hoverintent = function(el, over, out) {
			var x, y, pX, pY,
				h = {},
				state = 0,
				timer = 0,
				options = {
					sensitivity: 7,
					interval: 100,
					timeout: 0
				};

			var track = function(e) { x = e.clientX; y = e.clientY; };

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

			var dispatchOver = function(e) { dispatch(e, over, true); }
			var dispatchOut = function(e) { dispatch(e, out); }

			h.options = function(opt) {
				options = merge(options, opt || {});
			};

			h.remove = function() {
				if (!el) return;
				el.removeEventListener('mouseover', dispatchOver);
				el.removeEventListener('mouseout', dispatchOut);
			}

			if (el) {
				el.addEventListener('mouseover', dispatchOver);
				el.addEventListener('mouseout', dispatchOut);
			}

			return h;
		};
		return hoverintent;
	})();

	if (typeof exports === 'object') {
		module.exports = DarkTip;
	}

	globalScope.DarkTip = DarkTip;

})((function(){return this;})())