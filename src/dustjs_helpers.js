(function(dust){

dust.helpers.i18n = function(chunk, context, bodies, params) {
  // console.log({'params.t': params.t, 'params.t.tapped': dust.helpers.tap(params.t, chunk, context)});
  var newContext = dust.makeBase(dust.helpers.i18n.context()).push(context);
  var i18nstring = dust.helpers.tap(params.t, chunk, context);
  if (i18nstring) {
    var contextlookup = '_i18n_.' + i18nstring;
    var localized     = newContext.get(contextlookup);
    if (localized) {
      var newParams = params;
      delete newParams.t;
      dust.loadSource(dust.compile(localized, contextlookup));
      return chunk.partial(contextlookup, context, newParams);
    }
    return chunk.write('**' + i18nstring + '**');
  }
  return chunk;
};

dust.helpers.i18n.context = function(context) {
  if (typeof context === 'undefined') return { '_i18n_': dust.helpers.i18n._context_ || {} };
  return dust.helpers.i18n._context_ = context;
}

})(dust);