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

	DarkTip.jsonp = (function() {
		var callbackId = 0;
		var jsonp = function(url, successFn, errorFn, timeout) {
			var callBackName = "_callback" + callbackId++;
			var queryString  = "?callback=DarkTip.jsonp." + callBackName;
			// setup the callback
			jsonp[callBackName] = function(data) {
				delete jsonp[callBackName];
				if (data.error) {
					if (errorFn) {
						data.error.callback = callBackName;
						errorFn(data.error);
					}
				} else {
					// hard coded, needs pluginable verification
					if (data.meta.status == 200)
					{
						successFn(data);
					} else {
						errorFn('narf');
					}
				}
			};

			var scr = document.createElement("script");
			scr.type = "text/javascript";
			scr.src = url + queryString;
			var head = document.getElementsByTagName("head")[0];
			head.insertBefore(scr, head.firstChild);

			timeout = timeout || 5000;
			window.setTimeout(function() {
				if (typeof jsonp[callBackName] == "function") {
					jsonp[callBackName] = function(data) {
						delete jsonp[callBackName];
					};
					errorFn({ code: 408, message: "Request Timeout", callback: callBackName });
					window.setTimeout(function() {
						if (typeof jsonp[callBackName] == "function") {
							delete jsonp[callBackName];
						};
					}, 60000);
				}
			}, timeout);
		};
		return jsonp;
	})();

	DarkTip.getApicall = function(apicallId) {
		console.log({'apicallId': apicallId});

		if (apicallId == 'github.user') {
			return '//api.github.com/users/{username}';
		}
		if (apicallId == 'github.user.repos') {
			return '//api.github.com/users/{username}/repos';
		}
	};

	DarkTip.callApi = function(url, successFn, errorFn) {
		return DarkTip.jsonp(url, successFn, errorFn);
	};





	if (typeof exports === 'object') {
		module.exports = DarkTip;
	} else {
		globalScope.DarkTip = DarkTip;
	}
})((function(){return this;})())