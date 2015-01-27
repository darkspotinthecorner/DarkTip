(function(dust) {

	var getResult = function(obj, key) {
		if (obj && hasOwnProperty.call(obj, key)) {
			return obj[key];
		}
	};

	var helpers = {
		i18n: function(chunk, context, bodies, params) {
			var contextlookup, localized, i, il,
				newParams      = params,
				i18nkey        = dust.helpers.tap(params.t, chunk, context),
				locale         = context.get('module.locale'),
				localeFallback = DarkTip.settings.get('locale.fallback.'+locale),
				localeDefault  = DarkTip.settings.get('locale.default'),
				lookups        = [locale];
			if (i18nkey) {
				delete newParams.t;
				if (localeFallback && localeFallback != locale && (!localeDefault || localeFallback != localeDefault)) {
					lookups.push(localeFallback);
				}
				if (localeDefault && locale != localeDefault) {
					lookups.push(localeDefault);
				}
				for (i = 0, il = lookups.length; i < il; i++) {
					contextlookup = 'module.i18n.' + lookups[i] + '.' + i18nkey;
					localized = context.get(contextlookup);
					if (localized) {
						return chunk.write(dust.helpers.tap(localized, chunk, context.push(newParams)));
					}
				};
				return chunk.write('**' + locale + '.' + i18nkey + '**');
			}
			return chunk;
		},
		api: function(chunk, context, bodies, params) {
			var body = bodies['block'];
			var skip = bodies['else'];
			if (body && params && params.query) {
				var queries = params.query.split('|');
				var queriesCount = queries.length;
				var queryStack = [];
				delete params.query;
				var newContext = context.push(params);
				for (var i = 0; i < queriesCount; i++) {
					(function(item) {
						var alias = item;
						var query = item;
						var aliasSeperatorPosition = query.indexOf(':', 1);
						if (aliasSeperatorPosition > 0) {
							alias = query.substr(0, aliasSeperatorPosition);
							query = query.substr((aliasSeperatorPosition + 1));
						}
						var queryId = dust.helpers.tap(query, chunk, context);
						var rawcallData = context.get('module.apicall.' + queryId);
						queryStack.push((function() {
							var deferred = DarkTip.q.defer();
							dust.renderSource(rawcallData.url, newContext, function(err, apicall) {
								if (err) {
									deferred.reject();
								}
								deferred.resolve((function(apicall) {
									var deferred = DarkTip.q.defer();
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
										rawcallData.processFn,
										newContext.get('module.setting.apicall.remoteCallbackParam')
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
					DarkTip.q.all(queryStack).spread(function() {
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
		}
	};

	for (var key in helpers) {
		dust.helpers[key] = helpers[key];
	}

	/* ==========---------- Modify core dust functions ----------========== */

	dust.load = function(name, chunk, context) {
		var tmpl = context.get('module.template.' + name);
		if (tmpl) {
			if (typeof tmpl !== 'function') {
				return chunk.setError(new Error('Template Not Compiled: ' + name));
			}
			return tmpl(chunk, context);
		}
		return chunk.setError(new Error('Template Not Found: ' + name));
	};

	var Context = dust.makeBase().constructor;

	Context.prototype.getPath = function(cur, down) {
		if (cur) {
			return this._get(cur, down);
		}
		return this._gget(down);
	};

	Context.prototype.get = function(path, cur) {
		if (typeof path === 'string') {
			if (path[0] === '.') {
				cur = true;
				path = path.substr(1);
			}
			path = path.split('.');
		}
		if (cur) {
			return this._get(cur, path);
		}
		return this._gget(path);
	};

	Context.prototype._gget = function(down) {
		var ctx = this.stack,
			i = 1,
			value, first, len, ctxThis, fn;
		first = down[0];
		len = down.length;
		loop:
			while (ctx) {
				i = 1;
				if (ctx.isObject) {
					ctxThis = ctx.head;
					value = getResult(ctx.head, first);
					if (value !== undefined) {

						while (value && i < len) {
							ctxThis = value;
							value = getResult(value, down[i]);
							i++;
						}
						if (value !== undefined) {
							ctx = value;
							break loop;
						}
					}
				}
				ctx = ctx.tail;
			}
		if (typeof ctx === 'function') {
			fn = function() {
				try {
					return ctx.apply(ctxThis, arguments);
				} catch (err) {
					dust.log(err, dust.ERROR);
					throw err;
				}
			};
			fn.__dustBody = !!ctx.__dustBody;
			return fn;
		} else {
			if (ctx === undefined) {
				dust.log('Cannot find the value for reference [{' + down.join('.') + '}] in template [' + this.getTemplateName() + ']');
			}
			return ctx;
		}
	};

	Context.prototype.set = function(path, value) {
		if (typeof path === 'string') {
			path = path.split('.');
		}
		return this._set(path, value);
	};

	Context.prototype._set = function(down, value) {
		var len = down.length;
		var cur = this.stack.head
		for (var i = 0; i <= len; i++) {
			if ((i + 1) == len) {
				var oldvalue = cur[down[i]];
				cur[down[i]] = value;
				return oldvalue;
			} else {
				if (typeof cur[down[i]] !== 'object') {
					cur[down[i]] = {};
				}
				cur = cur[down[i]];
			}
		}
	}

	if (typeof exports !== 'undefined') {
		module.exports = dust;
	}

})(typeof exports !== 'undefined' ? require('dustjs-linkedin') : dust);
