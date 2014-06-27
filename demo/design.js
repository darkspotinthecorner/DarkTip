/* DarkTip by Martin Gelder (Dark Spot in the Corner), Copyright (c) 2014 */


DarkTip.registerTriggergroup('implicit', ['a[href]'], ['hover']);
DarkTip.registerTriggergroup('explicit', ['[data-darktip]'], ['hover']);

DarkTip.registerModule('wow.item', ['wow'])
	.trigger('implicit', [DarkTip.extractorFn(/regex/i, {'1': 'foo', '2': 'bar'})])
	.trigger('explicit', [DarkTip.extractorFn(/other/i, {'1': 'foo', '2': 'bar'})])
	.settings({'templates': {'success': 'item-200', 'failed': 'item-404'}})
	.template('item-200', 'A template string')
	.template('item-404', 'Other template string')

DarkTip.registerModule('wow.wowhead.item', ['wow.item', 'wow.wowhead'])
	.trigger('implicit', [DarkTip.extractorFn(/regex/i, {'1': 'foo', '2': 'bar'})])

var template = '{@api query="wow.item"}Render item{:else}Render 404{/api}';




dust.helpers.api = function(chunk, context, bodies, params) {
	var body = bodies.block;
	var skip = bodies['else'];

	if (params && params.query) {
		var query = params.query;
		apicall = dust.helpers.tap(query, chunk, context);

		return chunk.map(function(chunk) {
			DarkTip.callApi(
				apicall,
				function(data) {
					// success: async func
					return chunk.render(body, context.push(data)).end();
				},
				function(data) {
					// failure: async func
					if (skip) {
						return chunk.render(skip, context.push(data)).end();
					}
					return chunk.end();
				}
			);
		});
	} else {
		console.log('No query parameter given');
	}
	return chunk;
};

var DarkTip = {
	callApi: function(url, success, error) {
		this.jsonp(
			url,
			success,
			error
		);
	}
};

(function(container) {
	var callbackId = 0;
	var jsonp = container.jsonp = function(url, success, error, timeout) {
		var callBackName = "_callback" + callbackId++;
		var queryString  = "?jsonp=DarkTip.jsonp." + callBackName;
		// setup the callback
		jsonp[callBackName] = function(data) {
			delete jsonp[callBackName];
			if (data.error) {
				if (error) {
					data.error.callback = callBackName;
					error(data.error);
				}
			}
			else {
				success(data);
			}
		};
		// send the request
		var scr = document.createElement("script");
		scr.type = "text/javascript";
		scr.src = url + queryString;
		var head = document.getElementsByTagName("head")[0];
		head.insertBefore(scr, head.firstChild);
		// default to 5 second timeout
		timeout = timeout || 5000;
		window.setTimeout(function() {
			if (typeof jsonp[callBackName] == "function") {
				// replace success with null callback in case the request is just very latent.
				jsonp[callBackName] = function(data) {
					delete jsonp[callBackName];
				};
				// call the error callback
				error({ code: 408, message: "Request Timeout", callback: callBackName });
				// set a longer timeout to safely clean up the unused callback.
				window.setTimeout(function() {
					if (typeof jsonp[callBackName] == "function") {
						delete jsonp[callBackName];
					};
				}, 60000);
			}
		}, timeout);
	};
})(DarkTip);


