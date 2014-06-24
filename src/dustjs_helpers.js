(function(dust){

dust.helpers.i18n = function(chunk, context, bodies, params) {
  var i18nstring    = dust.helpers.tap(params.t, chunk, context.push(dust.helpers.i18n.context()));
  var contextlookup = '_i18n_.' + i18nstring;
  if (i18nstring) {
    var localized = context.get(contextlookup);
    if (localized) {
      return chunk.write(localized);
    }
    return chunk.write('**' + i18nstring + '**');
  }
  return chunk;
};

dust.helpers.i18n.context = function(context) {
  if (typeof context === 'undefined')
  {
    var r = { '_i18n_': dust.helpers.i18n._context_ || {} };
    return r
  }
  dust.helpers.i18n._context_ = context;
}

dust.helpers.substr = function (chunk, context, bodies, params) {
  // Get the values of all the parameters. The tap function takes care of resolving any variable references
  // used in parameters (e.g. param="{name}"
  var str   = dust.helpers.tap(params.str, chunk, context),
      begin = dust.helpers.tap(params.begin, chunk, context),
      end   = dust.helpers.tap(params.end, chunk, context),
      len   = dust.helpers.tap(params.len, chunk, context);
  begin = begin || 0; // Default begin to zero if omitted
  // Use JavaScript substr if len is supplied.
  // Helpers need to return some value using chunk. Here we write the substring into chunk.
  // If you have nothing to output, just return chunk.write("");
  if (!(typeof(len) === 'undefined')) {
      return chunk.write(str.substr(begin,len));
  }
  if (!(typeof(end) === 'undefined')) {
      return chunk.write(str.slice(begin,end));
  }
  return chunk.write(str);
}

})(dust);