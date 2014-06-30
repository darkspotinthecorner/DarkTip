(function(globalScope) {

	var DarkTip = {},
		logger  = {},
		originalLog,
		loggerContext;

	if (globalScope && globalScope.console && globalScope.console.log) {
		loggerContext = globalScope.console;
		originalLog = globalScope.console.log;
	}

	logger.log = loggerContext ? function() {
		if (typeof originalLog === 'function') {
			logger.log = function() {
				originalLog.apply(loggerContext, arguments);
			};
		} else {
			logger.log = function() {
				var message = Array.prototype.slice.apply(arguments).join(' ');
				originalLog(message);
			};
		}
		logger.log.apply(this, arguments);
	} : function() {};

	DarkTip.log = function(message) {
		logger.log(message);
	};

	if (typeof globalScope.dust === 'undefined') {
		DarkTip.log('DarkTip requires dust.js [http://linkedin.github.io/dustjs/] to operate!');
		return;
	}
	/* #################### dust.js helpers #################### */
	(function(dust){
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
				var queryId = dust.helpers.tap(params.query, chunk, context);
				delete params.query;
				var rawcallData = DarkTip.getApicallData(queryId);
				var newContext  = context.push(params);
				return chunk.map(function(chunk) {
					dust.renderSource(rawcallData.url, newContext, function(err, apicall) {
						if (apicall) {
							DarkTip.callApi(
								apicall,
								rawcallData.validationFn || true,
								function(data) {
									return chunk.render(body, newContext.push(data)).end();
								},
								function(data) {
									if (skip) {
										return chunk.render(skip, newContext.push(data)).end();
									}
									return chunk.end();
								}
							);
						} else {
							dust.log('queryId "' + queryId + '" could not be resolved by DarkTip');
							return chunk.render(skip, newContext);
						}
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
					dst[i] = deepmerge(target[i], e);
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
						dst[key] = deepmerge(target[key], src[key]);
					}
				}
			});
		}
		return dst;
	}

	/* ######################################################### */

	DarkTip.modules = {};
	DarkTip.triggerGroups = {};

	DarkTip.data = {
		'cache': {
			'apicall': {}
		}
	};

	DarkTip.jsonp = (function() {
		var callbackId = 0;
		var jsonp = function(url, successFn, errorFn, remoteCallbackParam, timeout) {
			remoteCallbackParam = remoteCallbackParam || 'callback';
			var callBackName    = '_cb' + callbackId++;
			var queryString     = '?' + remoteCallbackParam + '=DarkTip.jsonp.' + callBackName;
			jsonp[callBackName] = function(data) {
				delete jsonp[callBackName];
				if (data.error) {
					if (errorFn) {
						data.error.callback = callBackName;
						errorFn(data.error);
					}
				} else {
					successFn(data);
				}
			};
			var scr = document.createElement('script');
			scr.type = 'text/javascript';
			scr.src = url + queryString;
			var head = document.getElementsByTagName('head')[0];
			head.insertBefore(scr, head.firstChild);
			timeout = timeout || 5000;
			window.setTimeout(function() {
				if (typeof jsonp[callBackName] == 'function') {
					jsonp[callBackName] = function(data) {
						delete jsonp[callBackName];
					};
					errorFn({ code: 408, message: 'Request Timeout', callback: callBackName });
					window.setTimeout(function() {
						if (typeof jsonp[callBackName] == 'function') {
							delete jsonp[callBackName];
						};
					}, 60000);
				}
			}, timeout);
		};
		return jsonp;
	})();

	DarkTip.isLocalStorageUseable = function() {
		return (typeof globalScope.localStorage !== 'undefined');
	};

	DarkTip.readFromLocalStorage = function(key) {
		var item = window.localStorage.getItem(key);
		if (typeof item !== 'undefined') {
			return JSON.parse(item);
		}
		return undefined;
	},

	DarkTip.writeToLocalStorage = function(key, data) {
		try {
			window.localStorage.setItem(key, JSON.stringify(data));
		} catch (e) {
			if (e == QUOTA_EXCEEDED_ERR) {
				DarkTip.log('Writing to localStorage failes, quote exeeded for key "' + key + '".');
			}
			return false;
		}
		return true;
	};

	DarkTip.cache = function(region, key, data, cacheLifetime) {
		if (typeof data === 'undefined')
		{
			var result = undefined;
			if (DarkTip.isLocalStorageUseable()) {
				var maxtime = DarkTip.readFromLocalStorage('darktip_cache_maxtime_' + region + '_' + key);
				var curtime = Math.round((new Date()).getTime() / 1000);
				if ((maxtime === null) || (curtime < maxtime)) {
					result = DarkTip.readFromLocalStorage('darktip_cache_' + region + '_' + key);
				}
			} else {
				if (typeof DarkTip['data']['cache'][region][key] !== 'undefined') {
					result = DarkTip['data']['cache'][region][key];
				}
			}
			if (result === null) {
				result = undefined;
			}
			return result;
		}
		cacheLifetime = cacheLifetime || 0;
		if (DarkTip.isLocalStorageUseable()) {
			var maxtime = Math.round((new Date()).getTime() / 1000) + cacheLifetime;
			if ((cacheLifetime == 0) || (DarkTip.writeToLocalStorage(('darktip_cache_maxtime_' + region + '_' + key), maxtime))) {
				return DarkTip.writeToLocalStorage(('darktip_cache_' + region + '_' + key), data);
			}
			return false;
		}
		DarkTip['data']['cache']['region'][key] = data;
		return true;
	};

	DarkTip.getApicallData = function(apicallId) {
		console.log({'DarkTip.getApicall': apicallId});

		if (apicallId == 'github.user') {
			return {
				url: '//api.github.com/users/{username}',
				validationFn: function(data) { return (data.meta.status == 200); }
			};
		}
		if (apicallId == 'github.user.repos') {
			return {
				url: '//api.github.com/users/{username}/repos',
				validationFn: function(data) { return (data.meta.status == 200); }
			};
		}
	};

	DarkTip.callApi = function(url, validationFn, successFn, errorFn) {
		var cache = DarkTip.cache('apicall', url);
		if (typeof cache !== 'undefined') {

		}
		if (typeof validationFn === 'function')
		{
			var constructedSuccessFn = function(data) {
				if (validationFn(data)) {
					return successFn(data);
				} else {
					return errorFn({code: 500, message: 'Requested content did not validate'});
				}
			};
		}
		return DarkTip.jsonp(url, constructedSuccessFn || successFn, errorFn);
	};

	DarkTip.triggerGroup = function(triggerGroupId, queries, events) {
		if (typeof DarkTip.triggerGroups[triggerGroupId] !== 'undefined') {
			return DarkTip.triggerGroups[triggerGroupId];
		}
		if (typeof queries === 'string') {
			queries = [queries];
		}
		if (typeof events === 'string') {
			events = [events];
		}
		DarkTip.triggerGroups[triggerGroupId] = {
			'queries': queries,
			'events': events
		}
	};

	DarkTip.module = function(moduleId, dependencies)
	{
		if (typeof dependencies === 'string') {
			dependencies = [dependencies];
		}
		if (typeof DarkTip.modules[moduleId] !== 'undefined') {
			return DarkTip.modules[moduleId];
		}
		var moduleFactory = function(moduleId, dependencies) {
			if (dust.isArray(dependencies)) {
				var numdeps = dependencies.length;
				for (var i = 0; i <= numdeps; i++) {
					if (typeof DarkTip.modules[dependencies[i]] === 'undefined') {
						DarkTip.log('Module "' + moduleId + '" could not be created! Dependant module "' + dependencies[i] + '" was not found.');
						return;
					}
				};
			}
			this.registerCollection = {
				'map': {},
				'i18n': {},
				'trigger': {},
				'apicall': {},
				'settings': {},
				'template': {}
			};

			this.map = function(mapKey, data) {
				this.registerCollection.map[mapKey] = data;
				return this;
			};
			this.i18n = function(locale, data) {
				if (typeof this.registerCollection.i18n[locale] === 'undefined')
				{
					this.registerCollection.i18n[locale] = data;
				} else {
					this.registerCollection.i18n[locale] = DarkTip.merge(this.registerCollection.i18n[locale], data);
				}
				return this;
			};
			this.trigger = function(triggerGroupId, extractors) {
				if (DarkTip.triggerGroup(triggerGroupId)) {
					this.registerCollection.trigger[triggerGroupId] = extractors;
				} else {
					DarkTip.log('Trigger for module "' + moduleId + '" could not be created! Trigger group "' + triggerGroupId + '" was not found.');
				}
				return this;
			};
			this.apicall = function(apicallId, url, validationFn) {
				this.registerCollection.apicall[apicallId] = {
					'url': url,
					'validationFn': validationFn
				};
				return this;
			};
			this.settings = function(data) {
				this.registerCollection.settings = DarkTip.merge(this.registerCollection.settings, data);
				return this;
			};
			this.template = function(templateKey, templateCode) {
				return this;
			};
			this.register = function() {
				// integrate all stuff into one module package and push it to DarkTip
				// merge settings into one
				var settings = dust.makeBase();
				// foreach dependency, push it's settings onto this module's settings
				var settings = settings.push(ownSettings);
				// DarkTip.modules[moduleId] =
			};
		}
		return new moduleFactory(moduleId, dependencies);
	};

	if (typeof exports === 'object') {
		module.exports = DarkTip;
	} else {
		globalScope.DarkTip = DarkTip;
	}
})((function(){return this;})())