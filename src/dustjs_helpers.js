(function(dust){

dust.helpers.i18n = function(chunk, context, bodies, params) {
  var newContext = dust.makeBase(dust.helpers.i18n.context()).push(context);
  var i18nstring = dust.helpers.tap(params.t, chunk, context);
  console.log(['i18n', params.t, chunk, context, '==>', i18nstring]);
  if (i18nstring) {
    var contextlookup = '_i18n_.' + i18nstring;
    var localized     = newContext.get(contextlookup);
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

dust.helpers.i18n.context = function(context) {
  if (typeof context === 'undefined') return { '_i18n_': dust.helpers.i18n._context_ || {} };
  return dust.helpers.i18n._context_ = context;
}

dust.helpers.api = function(chunk, context, bodies, params) {
  var body = bodies.block;
  var skip = bodies['else'];
  if (params && params.query) {
    var queryId = dust.helpers.tap(params.query, chunk, context);
    delete params.query;

    var rawcall    = DarkTip.getApicall(queryId);
    var apicall    = dust.helpers.tap(rawcall, chunk, context);
    console.log(['api', rawcall, chunk, context, '==>', apicall]);


    if (apicall) {

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
      dust.log('queryId "' + queryId + '" could not be resolved by DarkTip');
      return chunk.render(skip, context);
    }
  } else {
    console.log('No query parameter given');
  }
  return chunk;
};

})(dust);