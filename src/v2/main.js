(function(globalScope) {

	var DarkTip = {},
		logger  = {};

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
				var newContext = dust.makeBase().push(context).push(dust.helpers.i18n.context());
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
								rawcallData.validationFn,
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

	DarkTip.jsonp = (function() {
		var callbackId = 0;
		var jsonp = function(url, validationFn, successFn, errorFn, remoteCallbackParam, timeout) {
			remoteCallbackParam = remoteCallbackParam || 'callback';
			var callBackName    = '_callback' + callbackId++;
			var queryString     = '?' + remoteCallbackParam + '=DarkTip.jsonp.' + callBackName;
			// setup the callback
			jsonp[callBackName] = function(data) {
				delete jsonp[callBackName];
				if (data.error) {
					if (errorFn) {
						data.error.callback = callBackName;
						errorFn(data.error);
					}
				} else {
					if (validationFn(data))
					{
						successFn(data);
					} else {
						errorFn('narf');
					}
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
		return DarkTip.jsonp(url, validationFn, successFn, errorFn);
	};



	if (typeof exports === 'object') {
		module.exports = DarkTip;
	} else {
		globalScope.DarkTip = DarkTip;
	}
})((function(){return this;})())