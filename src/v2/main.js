(function(globalScope) {

	// Target browser support - 2 versions back (that's version 9, I'm looking at you, IE!)

	var DarkTip = {};

	var requirements = [
		{ 'id': 'dust', 'name': 'dust.js', 'url': 'https://github.com/linkedin/dustjs' },
		{ 'id': 'Q',    'name': 'Q',       'url': 'http://github.com/kriskowal/q' }
	];

	DarkTip.log = (function() {
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

	var requirementCount = requirements.length;
	for (var i = 0; i < requirementCount; i++) {
		if (typeof globalScope[requirements[i]['id']] === 'undefined') {
			DarkTip.log('DarkTip requires '+requirements[i]['name']+' ['+requirements[i]['url']+'] to operate!');
			return;
		}
	}

	/* #################### dust.js helpers #################### */
	(function(dust){
		if (typeof dust.helpers.tap === 'undefined') {
			DarkTip.log('DarkTip requires dust.js helpers [https://github.com/linkedin/dustjs-helpers] to operate!');
			return;
		}
		dust.helpers.i18n = (function(){
			var helper = function(chunk, context, bodies, params) {
				var newContext = context.push(dust.helpers.i18n.context());
				var i18nstring = dust.helpers.tap(params.t, chunk, context);
				if (i18nstring) {
					var contextlookup = '_i18n_.' + i18nstring;
					var localized = newContext.get(contextlookup);
					if (localized) {
						var newParams = params;
						delete newParams.t;
						dust.loadSource(dust.compile(localized, contextlookup));
						return chunk.partial(contextlookup, context.push(newParams));
					}
					return chunk.write('**' + i18nstring + '**');
				}
				return chunk;
			};
			helper.context = function(context) {
				if (typeof context === 'undefined') return { '_i18n_': dust.helpers.i18n._context_ || {} };
				return dust.helpers.i18n._context_ = context;
			}
			return helper;
		})();
		dust.helpers.api = function(chunk, context, bodies, params) {
			var body = bodies.block;
			var skip = bodies['else'];
			if (body && params && params.query) {
				var queries      = params.query.split('|');
				var queriesCount = queries.length;
				var queryStack   = [];
				delete params.query;
				var newContext   = context.push(params);
				for (var i = 0; i < queriesCount; i++) {
					(function(item) {
						var alias = false;
						var query = item;
						var aliasSeperatorPosition = query.indexOf(':', 1);
						if (aliasSeperatorPosition > 0) {
							alias = query.substr(0, aliasSeperatorPosition);
							query = query.substr((aliasSeperatorPosition + 1));
						}
						var queryId = dust.helpers.tap(query, chunk, context);
						var rawcallData = DarkTip.getApicallData(queryId);
						queryStack.push((function() {
							var deferred = globalScope.Q.defer();
							dust.renderSource(rawcallData.url, newContext, function(err, apicall) {
								if (err) {
									deferred.reject();
								}
								deferred.resolve((function(apicall) {
									var deferred = globalScope.Q.defer();
									DarkTip.callApi(
										apicall,
										function(data) {
											deferred.resolve({
												'alias': alias,
												'data': data
											});
										},
										function(data) {
											deferred.reject();
										},
										rawcallData.caching,
										rawcallData.validationFn,
										rawcallData.processFn
									);
									return deferred.promise;
								})(apicall));
							});
							return deferred.promise;
						})());
					})(queries[i]);
				};
				return chunk.map(function(chunk) {
					var pushData = {};
					globalScope.Q.all(queryStack).spread(function() {
						var argumentsCount = arguments.length;
						for (var i = 0; i < argumentsCount; i++) {
							if (arguments[i]['alias'] !== false) {
								pushData[arguments[i]['alias']] = arguments[i]['data'];
							} else {
								pushData = DarkTip.merge(pushData, arguments[i]['data']);
							}
						}
					}).done(function() {
						return chunk.render(body, newContext.push(pushData)).end();
					}, function() {
						if (skip) {
							return chunk.render(skip, newContext.push(pushData)).end();
						}
						return chunk.end();
					});
				});
			} else {
				dust.log('No "query" parameter given for @api helper');
			}
			return chunk;
		};
	})(globalScope.dust);
	/* ######################################################### */

	DarkTip.merge = function(target, src) {
		var array = dust.isArray(src);
		var dst = array && [] || {};
		if (array) {
			target = target || [];
			dst = dst.concat(target);
			src.forEach(function(e, i) {
				if (typeof dst[i] === 'undefined') {
					dst[i] = e;
				} else if (typeof e === 'object') {
					dst[i] = DarkTip.merge(target[i], e);
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
						dst[key] = DarkTip.merge(target[key], src[key]);
					}
				}
			});
		}
		return dst;
	}

	/* ######################################################### */

	DarkTip.modules = {};
	DarkTip.triggerGroups = {};
	DarkTip.MutationObserver = globalScope.MutationObserver || globalScope.WebkitMutationObserver || false;

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
	}

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
						DarkTip.log('Writing to localStorage failed! Quote exeeded for region/key "' + region + '/' + key + '".');
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

	DarkTip.getApicallData = function(apicallId) {
		if (apicallId == 'github-user') {
			return {
				url: '//api.github.com/users/{username}',
				caching : (60 * 60 * 24 * 1),
				validationFn: function(data) { return (data.meta.status == 200); },
				processFn: function(data) { return (data.data); }
			};
		}
		if (apicallId == 'github-user-repos') {
			return {
				url: '//api.github.com/users/{username}/repos',
				caching : (60 * 60 * 24 * 1),
				validationFn: function(data) { return (data.meta.status == 200); },
				processFn: function(data) { return (data.data); }
			};
		}
		return false;
	};

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
						DarkTip.log('TriggerGroup.trigger: Invalid RegExp payload! 3rd argument must be an object.');
						return false;
					}
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
				DarkTip.log('TriggerGroup.trigger: Invalid extractor payload! 2nd argument must be a function or a valid extractor build object.');
				return false;
			};
			this.event = function(selector, event, accessFn) {
				if (typeof selector !== 'string') {
					DarkTip.log('TriggerGroup.event: Invalid selector! 1st argument must be selector string.');
					return this;
				}
				if (typeof event !== 'string') {
					DarkTip.log('TriggerGroup.event: Invalid show event! 2nd argument must be event type string.');
					return this;
				}
				if (typeof accessFn !== 'function') {
					DarkTip.log('TriggerGroup.event: Invalid access function! 3rd argument must be a function.');
					return this;
				}
				DarkTip.bindEvent(event, selector, accessFn, this);
				return this;
			};
			this.trigger = function(moduleId, extractorFn, extractorPayload) {
				extractorFn = this.generateExtractorFn(moduleId, extractorFn, extractorPayload);
				if (typeof extractorFn !== 'function') {
					DarkTip.log('TriggerGroup.trigger: Invalid extractor payload! 2nd argument must be a function or a valid extractor build object.');
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
						DarkTip.log('Module "' + moduleId + '" could not be created! Dependant module "' + dependencies[i] + '" was not found.');
						return;
					}
				};
			}
			this.contexts = {};
			this.data = {
				'maps'     : {},
				'i18ns'    : {},
				'apicalls' : {},
				'settings' : {},
				'templates': {}
			};
			this.buildContexts = function() {
				this.contexts['maps']      = this.buildContext(dust.makeBase(), 'maps');
				this.contexts['i18ns']     = this.buildContext(dust.makeBase(), 'i18ns');
				this.contexts['apicalls']  = this.buildContext(dust.makeBase(), 'apicalls');
				this.contexts['settings']  = this.buildContext(dust.makeBase(), 'settings');
				this.contexts['templates'] = this.buildContext(dust.makeBase(), 'templates');
			};
			this.buildContext = function(context, region) {
				if (numdeps > 0) {
					for (var i = numdeps - 1; i >= 0; i--) {
						context = DarkTip.modules[dependencies[i]].buildContext(context, region);
					}
				}
				context = context.push(this.data[region]);
				return context;
			}
			this.map = function(key, data) {
				if (typeof data === 'undefined') {
					return this.contexts.maps.gget(key);
				}
				this.contexts.maps.set(key, data);
				return this;
			};
			this.i18n = function(key, data) {
				if (typeof data === 'undefined') {
					return this.contexts.i18ns.gget(key);
				}
				this.contexts.i18ns.set(key, data);
				return this;
			};
			this.trigger = function(triggerGroupId, extractorFn, extractorPayload) {
				var triggerGroup = DarkTip.triggerGroup(triggerGroupId);
				if (triggerGroup) {
					triggerGroup.trigger(moduleId, extractorFn, extractorPayload);
				} else {
					DarkTip.log('Trigger for module "' + moduleId + '" could not be created! Trigger group "' + triggerGroupId + '" was not found.');
				}
				return this;
			};
			this.apicall = function(key, url, caching, validationFn, processFn) {
				if (typeof url === 'undefined') {
					var apicall = this.contexts.apicalls.gget(key);
					if (typeof apicall !== 'undefined') {
						return apicall;
					}
					DarkTip.log('Apicall for module "' + moduleId + '" could not be created! Url was empty.');
				} else {
					this.contexts.templates.set(key, {
						'url'         : url,
						'caching'     : caching || false,
						'validationFn': validationFn || false,
						'processFn'   : processFn || false
					});
				}
				return this;
			};
			this.setting = function(key, data) {
				if (typeof data === 'undefined') {
					return this.contexts.settings.gget(key);
				}
				this.contexts.settings.set(key, data);
				return this;
			};
			this.template = function(key, data) {
				if (typeof data === 'undefined') {
					return this.contexts.templates.gget(key);
				}
				this.contexts.templates.set(key, data);
				return this;
			};
			this.start = function(elem, params) {
				DarkTip.log('starting module '+moduleId);
				// push templates, i18n, maps, apicalls and settings to dust.js
				// start render tooltip
				// -> callback: display tooltip
			}
			this.stop = function(elem, params) {
				DarkTip.log('stopping module '+moduleId);
				// stop rendering tooltip
				// if already rendered, hide it
			}
			this.buildContexts();
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
				if (!elem || elem.nodeType !== 1) {
					return;
				}
				var elems = elem.querySelectorAll(selector);
				console.log({'do': 'added elements', 'elem': elem, 'elems matching selector': elems});
			};
			var observedRemoveFn = function(elem) {
				if (!elem || elem.nodeType !== 1) {
					return;
				}
				var elems = elem.querySelectorAll(selector);
				console.log({'do': 'removed elements', 'elem': elem, 'elems matching selector': elems});
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
		if (event === 'hoverintent') {}
		if (event === 'hover&stay') {}
		if (event === 'hoverintent&stay') {}
		if (event === 'click') {}
		if (event === 'click&hover') {}
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
		DarkTip.log({'event': event, 'elem': elem, 'accessed': accessed, 'foundTrigger': result});
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


	if (typeof exports === 'object') {
		module.exports = DarkTip;
	} else {
		globalScope.DarkTip = DarkTip;
	}
})((function(){return this;})())