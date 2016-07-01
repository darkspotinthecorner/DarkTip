(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
 * Anime v1.0.0
 * http://anime-js.com
 * Javascript animation engine
 * Copyright (c) 2016 Julian Garnier
 * http://juliangarnier.com
 * Released under the MIT license
 */
var anime=function(){var x={duration:1E3,delay:0,loop:!1,autoplay:!0,direction:"normal",easing:"easeOutElastic",elasticity:400,round:!1,begin:void 0,update:void 0,complete:void 0},M="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY".split(" "),e=function(){return{array:function(a){return Array.isArray(a)},object:function(a){return-1<Object.prototype.toString.call(a).indexOf("Object")},html:function(a){return a instanceof NodeList||a instanceof
HTMLCollection},node:function(a){return a.nodeType},svg:function(a){return a instanceof SVGElement},number:function(a){return!isNaN(parseInt(a))},string:function(a){return"string"===typeof a},func:function(a){return"function"===typeof a},undef:function(a){return"undefined"===typeof a},"null":function(a){return"null"===typeof a},hex:function(a){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)},rgb:function(a){return/^rgb/.test(a)},rgba:function(a){return/^rgba/.test(a)},hsl:function(a){return/^hsl/.test(a)},
color:function(a){return e.hex(a)||e.rgb(a)||e.rgba(a)||e.hsl(a)}}}(),y=function(){var a={},b={Sine:function(a){return 1-Math.cos(a*Math.PI/2)},Circ:function(a){return 1-Math.sqrt(1-a*a)},Elastic:function(a,b){if(0===a||1===a)return a;var f=1-Math.min(b,998)/1E3,h=a/1-1;return-(Math.pow(2,10*h)*Math.sin(2*(h-f/(2*Math.PI)*Math.asin(1))*Math.PI/f))},Back:function(a){return a*a*(3*a-2)},Bounce:function(a){for(var b,f=4;a<((b=Math.pow(2,--f))-1)/11;);return 1/Math.pow(4,3-f)-7.5625*Math.pow((3*b-2)/
22-a,2)}};["Quad","Cubic","Quart","Quint","Expo"].forEach(function(a,d){b[a]=function(a){return Math.pow(a,d+2)}});Object.keys(b).forEach(function(c){var d=b[c];a["easeIn"+c]=d;a["easeOut"+c]=function(a,b){return 1-d(1-a,b)};a["easeInOut"+c]=function(a,b){return.5>a?d(2*a,b)/2:1-d(-2*a+2,b)/2}});a.linear=function(a){return a};return a}(),r=function(a){return e.string(a)?a:a+""},z=function(a){return a.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()},A=function(a){if(e.color(a))return!1;try{return document.querySelectorAll(a)}catch(b){return!1}},
t=function(a){return a.reduce(function(a,c){return a.concat(e.array(c)?t(c):c)},[])},n=function(a){if(e.array(a))return a;e.string(a)&&(a=A(a)||a);return e.html(a)?[].slice.call(a):[a]},B=function(a,b){return a.some(function(a){return a===b})},N=function(a,b){var c={};a.forEach(function(a){var f=JSON.stringify(b.map(function(b){return a[b]}));c[f]=c[f]||[];c[f].push(a)});return Object.keys(c).map(function(a){return c[a]})},C=function(a){return a.filter(function(a,c,d){return d.indexOf(a)===c})},u=
function(a){var b={},c;for(c in a)b[c]=a[c];return b},q=function(a,b){for(var c in b)a[c]=e.undef(a[c])?b[c]:a[c];return a},O=function(a){a=a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(a,b,c,e){return b+b+c+c+e+e});var b=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);a=parseInt(b[1],16);var c=parseInt(b[2],16),b=parseInt(b[3],16);return"rgb("+a+","+c+","+b+")"},P=function(a){a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a);var b=parseInt(a[1])/360,c=parseInt(a[2])/100,d=parseInt(a[3])/
100;a=function(a,b,c){0>c&&(c+=1);1<c&&--c;return c<1/6?a+6*(b-a)*c:.5>c?b:c<2/3?a+(b-a)*(2/3-c)*6:a};if(0==c)c=d=b=d;else var f=.5>d?d*(1+c):d+c-d*c,h=2*d-f,c=a(h,f,b+1/3),d=a(h,f,b),b=a(h,f,b-1/3);return"rgb("+255*c+","+255*d+","+255*b+")"},k=function(a){return/([\+\-]?[0-9|auto\.]+)(%|px|pt|em|rem|in|cm|mm|ex|pc|vw|vh|deg)?/.exec(a)[2]},D=function(a,b,c){return k(b)?b:-1<a.indexOf("translate")?k(c)?b+k(c):b+"px":-1<a.indexOf("rotate")||-1<a.indexOf("skew")?b+"deg":b},E=function(a,b){if((e.node(a)||
e.svg(a))&&B(M,b))return"transform";if((e.node(a)||e.svg(a))&&"transform"!==b&&v(a,b))return"css";if((e.node(a)||e.svg(a))&&(a.getAttribute(b)||a[b]))return"attribute";if(!e["null"](a[b])&&!e.undef(a[b]))return"object"},v=function(a,b){return getComputedStyle(a).getPropertyValue(z(b))},Q=function(a,b){var c=-1<b.indexOf("scale")?1:0,d=a.style.transform;if(!d)return c;for(var f=/(\w+)\((.+?)\)/g,h=[],e=[],p=[];h=f.exec(d);)e.push(h[1]),p.push(h[2]);d=p.filter(function(a,c){return e[c]===b});return d.length?
d[0]:c},F=function(a,b){switch(E(a,b)){case "transform":return Q(a,b);case "css":return v(a,b);case "attribute":return a.getAttribute(b)}return a[b]||0},G=function(a,b,c){if(e.color(b))return b=e.rgb(b)||e.rgba(b)?b:e.hex(b)?O(b):e.hsl(b)?P(b):void 0,b;if(k(b))return b;a=k(a.to)?k(a.to):k(a.from);!a&&c&&(a=k(c));return a?b+a:b},H=function(a){var b=/-?\d*\.?\d+/g;return{original:a,numbers:r(a).match(b)?r(a).match(b).map(Number):[0],strings:r(a).split(b)}},R=function(a,b,c){return b.reduce(function(b,
f,e){f=f?f:c[e-1];return b+a[e-1]+f})},S=function(a){a=a?t(e.array(a)?a.map(n):n(a)):[];return a.map(function(a,c){return{target:a,id:c}})},T=function(a,b){var c=[],d;for(d in a)if(!x.hasOwnProperty(d)&&"targets"!==d){var f=e.object(a[d])?u(a[d]):{value:a[d]};f.name=d;c.push(q(f,b))}return c},I=function(a,b,c,d){"transform"===c?(c=a+"("+D(a,b.from,b.to)+")",b=a+"("+D(a,b.to)+")"):(a="css"===c?v(d,a):void 0,c=G(b,b.from,a),b=G(b,b.to,a));return{from:H(c),to:H(b)}},U=function(a,b){var c=[];a.forEach(function(d,
f){var h=d.target;return b.forEach(function(b){var p=E(h,b.name);if(p){var k;k=b.name;var g=b.value,g=n(e.func(g)?g(h,f):g);k={from:1<g.length?g[0]:F(h,k),to:1<g.length?g[1]:g[0]};g=u(b);g.animatables=d;g.type=p;g.from=I(b.name,k,g.type,h).from;g.to=I(b.name,k,g.type,h).to;g.round=e.color(k.from)||g.round?1:0;g.delay=(e.func(g.delay)?g.delay(h,f,a.length):g.delay)/l.speed;g.duration=(e.func(g.duration)?g.duration(h,f,a.length):g.duration)/l.speed;c.push(g)}})});return c},V=function(a,b){var c=U(a,
b);return N(c,["name","from","to","delay","duration"]).map(function(a){var b=u(a[0]);b.animatables=a.map(function(a){return a.animatables});b.totalDuration=b.delay+b.duration;return b})},w=function(a,b){a.tweens.forEach(function(c){var d=c.from,f=a.duration-(c.delay+c.duration);c.from=c.to;c.to=d;b&&(c.delay=f)});a.reversed=a.reversed?!1:!0},J=function(a){var b=[],c=[];a.tweens.forEach(function(a){if("css"===a.type||"transform"===a.type)b.push("css"===a.type?z(a.name):"transform"),a.animatables.forEach(function(a){c.push(a.target)})});
return{properties:C(b).join(", "),elements:C(c)}},W=function(a){var b=J(a);b.elements.forEach(function(a){a.style.willChange=b.properties})},X=function(a){J(a).elements.forEach(function(a){a.style.removeProperty("will-change")})},Y=function(a,b){var c=a.path,d=a.value*b,f=function(f){f=f||0;return c.getPointAtLength(1<b?a.value+f:d+f)},e=f(),k=f(-1),f=f(1);switch(a.name){case "translateX":return e.x;case "translateY":return e.y;case "rotate":return 180*Math.atan2(f.y-k.y,f.x-k.x)/Math.PI}},Z=function(a,
b){var c=Math.min(Math.max(b-a.delay,0),a.duration)/a.duration,d=a.to.numbers.map(function(b,d){var e=a.from.numbers[d],k=y[a.easing](c,a.elasticity),e=a.path?Y(a,k):e+k*(b-e);return e=a.round?Math.round(e*a.round)/a.round:e});return R(d,a.to.strings,a.from.strings)},K=function(a,b){var c=void 0;a.time=Math.min(b,a.duration);a.progress=a.time/a.duration*100;a.tweens.forEach(function(a){a.currentValue=Z(a,b);var d=a.currentValue;a.animatables.forEach(function(b){var e=b.id;switch(a.type){case "css":b.target.style[a.name]=
d;break;case "attribute":b.target.setAttribute(a.name,d);break;case "object":b.target[a.name]=d;break;case "transform":c||(c={}),c[e]||(c[e]=[]),c[e].push(d)}})});if(c)for(var d in c)a.animatables[d].target.style.transform=c[d].join(" ");a.settings.update&&a.settings.update(a)},L=function(a){var b={};b.animatables=S(a.targets);b.settings=q(a,x);b.properties=T(a,b.settings);b.tweens=V(b.animatables,b.properties);b.duration=b.tweens.length?Math.max.apply(Math,b.tweens.map(function(a){return a.totalDuration})):
a.duration/l.speed;b.time=0;b.progress=0;b.running=!1;b.ended=!1;return b},m=[],l=function(a){var b=L(a),c={tick:function(){if(b.running){b.ended=!1;c.now=+new Date;c.current=c.last+c.now-c.start;K(b,c.current);var a=b.settings;a.begin&&c.current>=a.delay&&(a.begin(b),a.begin=void 0);c.current>=b.duration?(a.loop?(c.start=+new Date,"alternate"===a.direction&&w(b,!0),e.number(a.loop)&&a.loop--,c.raf=requestAnimationFrame(c.tick)):(b.ended=!0,a.complete&&a.complete(b),b.pause()),c.last=0):c.raf=requestAnimationFrame(c.tick)}}};
b.seek=function(a){K(b,a/100*b.duration)};b.pause=function(){b.running=!1;cancelAnimationFrame(c.raf);X(b);var a=m.indexOf(b);-1<a&&m.splice(a,1)};b.play=function(a){a&&(b=q(L(q(a,b.settings)),b));b.pause();b.running=!0;c.start=+new Date;c.last=b.ended?0:b.time;a=b.settings;"reverse"===a.direction&&w(b);"alternate"!==a.direction||a.loop||(a.loop=1);W(b);m.push(b);c.raf=requestAnimationFrame(c.tick)};b.restart=function(){b.reversed&&w(b);b.pause();b.seek(0);b.play()};b.settings.autoplay&&b.play();
return b};l.speed=1;l.list=m;l.remove=function(a){a=t(e.array(a)?a.map(n):n(a));for(var b=m.length-1;0<=b;b--)for(var c=m[b],d=c.tweens.length-1;0<=d;d--)for(var f=c.tweens[d],h=f.animatables.length-1;0<=h;h--)B(a,f.animatables[h].target)&&(f.animatables.splice(h,1),f.animatables.length||c.tweens.splice(d,1),c.tweens.length||c.pause())};l.easings=y;l.getValue=F;l.path=function(a){a=e.string(a)?A(a)[0]:a;return{path:a,value:a.getTotalLength()}};l.random=function(a,b){return Math.floor(Math.random()*
(b-a+1))+a};return l}();

}).call(this,require("1YiZ5S"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/animejs/anime.min.js","/../node_modules/animejs")
},{"1YiZ5S":9,"buffer":6}],2:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
(function(root, factory) {
  if (typeof define === 'function' && define.amd && define.amd.dust === true) {
    define(['dust.core'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('dustjs-linkedin'));
  } else {
    factory(root.dust);
  }
}(this, function(dust) {

function log(helper, msg, level) {
  level = level || "INFO";
  helper = helper ? '{@' + helper + '}: ' : '';
  dust.log(helper + msg, level);
}

var _deprecatedCache = {};
function _deprecated(target) {
  if(_deprecatedCache[target]) { return; }
  log(target, "Deprecation warning: " + target + " is deprecated and will be removed in a future version of dustjs-helpers", "WARN");
  log(null, "For help and a deprecation timeline, see https://github.com/linkedin/dustjs-helpers/wiki/Deprecated-Features#" + target.replace(/\W+/g, ""), "WARN");
  _deprecatedCache[target] = true;
}

function isSelect(context) {
  return context.stack.tail &&
         context.stack.tail.head &&
         typeof context.stack.tail.head.__select__ !== "undefined";
}

function getSelectState(context) {
  return isSelect(context) && context.get('__select__');
}

/**
 * Adds a special __select__ key behind the head of the context stack. Used to maintain the state
 * of {@select} blocks
 * @param context {Context} add state to this Context
 * @param opts {Object} add these properties to the state (`key` and `type`)
 */
function addSelectState(context, opts) {
  var head = context.stack.head,
      newContext = context.rebase(),
      key;

  if(context.stack && context.stack.tail) {
    newContext.stack = context.stack.tail;
  }

  var state = {
    isPending: false,
    isResolved: false,
    isDeferredComplete: false,
    deferreds: []
  };

  for(key in opts) {
    state[key] = opts[key];
  }

  return newContext
  .push({ "__select__": state })
  .push(head, context.stack.index, context.stack.of);
}

/**
 * After a {@select} or {@math} block is complete, they invoke this function
 */
function resolveSelectDeferreds(state) {
  var x, len;
  state.isDeferredPending = true;
  if(state.deferreds.length) {
    state.isDeferredComplete = true;
    for(x=0, len=state.deferreds.length; x<len; x++) {
      state.deferreds[x]();
    }
  }
  state.isDeferredPending = false;
}

/**
 * Used by {@contextDump}
 */
function jsonFilter(key, value) {
  if (typeof value === "function") {
    return value.toString()
      .replace(/(^\s+|\s+$)/mg, '')
      .replace(/\n/mg, '')
      .replace(/,\s*/mg, ', ')
      .replace(/\)\{/mg, ') {');
  }
  return value;
}

/**
 * Generate a truth test helper
 */
function truthTest(name, test) {
  return function(chunk, context, bodies, params) {
    return filter(chunk, context, bodies, params, name, test);
  };
}

/**
 * This function is invoked by truth test helpers
 */
function filter(chunk, context, bodies, params, helperName, test) {
  var body = bodies.block,
      skip = bodies['else'],
      selectState = getSelectState(context) || {},
      willResolve, key, value, type;

  // Once one truth test in a select passes, short-circuit the rest of the tests
  if (selectState.isResolved && !selectState.isDeferredPending) {
    return chunk;
  }

  // First check for a key on the helper itself, then look for a key on the {@select}
  if (params.hasOwnProperty('key')) {
    key = params.key;
  } else if (selectState.hasOwnProperty('key')) {
    key = selectState.key;
  } else {
    log(helperName, "No key specified", "WARN");
    return chunk;
  }

  type = params.type || selectState.type;

  key = coerce(context.resolve(key), type);
  value = coerce(context.resolve(params.value), type);

  if (test(key, value)) {
    // Once a truth test passes, put the select into "pending" state. Now we can render the body of
    // the truth test (which may contain truth tests) without altering the state of the select.
    if (!selectState.isPending) {
      willResolve = true;
      selectState.isPending = true;
    }
    if (body) {
      chunk = chunk.render(body, context);
    }
    if (willResolve) {
      selectState.isResolved = true;
    }
  } else if (skip) {
    chunk = chunk.render(skip, context);
  }
  return chunk;
}

function coerce(value, type) {
  if (type) {
    type = type.toLowerCase();
  }
  switch (type) {
    case 'number': return +value;
    case 'string': return String(value);
    case 'boolean':
      value = (value === 'false' ? false : value);
      return Boolean(value);
    case 'date': return new Date(value);
  }

  return value;
}

var helpers = {

  // Utility helping to resolve dust references in the given chunk
  // uses native Dust Context#resolve (available since Dust 2.6.2)
  "tap": function(input, chunk, context) {
    // deprecated for removal in 1.8
    _deprecated("tap");
    return context.resolve(input);
  },

  "sep": function(chunk, context, bodies) {
    var body = bodies.block;
    if (context.stack.index === context.stack.of - 1) {
      return chunk;
    }
    if (body) {
      return body(chunk, context);
    } else {
      return chunk;
    }
  },

  "first": function(chunk, context, bodies) {
    if (context.stack.index === 0) {
      return bodies.block(chunk, context);
    }
    return chunk;
  },

  "last": function(chunk, context, bodies) {
    if (context.stack.index === context.stack.of - 1) {
      return bodies.block(chunk, context);
    }
    return chunk;
  },

  /**
   * {@contextDump}
   * @param key {String} set to "full" to the full context stack, otherwise the current context is dumped
   * @param to {String} set to "console" to log to console, otherwise outputs to the chunk
   */
  "contextDump": function(chunk, context, bodies, params) {
    var to = context.resolve(params.to),
        key = context.resolve(params.key),
        target, output;
    switch(key) {
      case 'full':
        target = context.stack;
        break;
      default:
        target = context.stack.head;
    }
    output = JSON.stringify(target, jsonFilter, 2);
    switch(to) {
      case 'console':
        log('contextDump', output);
        break;
      default:
        output = output.replace(/</g, '\\u003c');
        chunk = chunk.write(output);
    }
    return chunk;
  },

  /**
   * {@math}
   * @param key first value
   * @param method {String} operation to perform
   * @param operand second value (not required for operations like `abs`)
   * @param round if truthy, round() the result
   */
  "math": function (chunk, context, bodies, params) {
    var key = params.key,
        method = params.method,
        operand = params.operand,
        round = params.round,
        output, state, x, len;

    if(!params.hasOwnProperty('key') || !params.method) {
      log("math", "`key` or `method` was not provided", "ERROR");
      return chunk;
    }

    key = parseFloat(context.resolve(key));
    operand = parseFloat(context.resolve(operand));

    switch(method) {
      case "mod":
        if(operand === 0) {
          log("math", "Division by 0", "ERROR");
        }
        output = key % operand;
        break;
      case "add":
        output = key + operand;
        break;
      case "subtract":
        output = key - operand;
        break;
      case "multiply":
        output = key * operand;
        break;
      case "divide":
        if(operand === 0) {
          log("math", "Division by 0", "ERROR");
        }
        output = key / operand;
        break;
      case "ceil":
      case "floor":
      case "round":
      case "abs":
        output = Math[method](key);
        break;
      case "toint":
        output = parseInt(key, 10);
        break;
      default:
        log("math", "Method `" + method + "` is not supported", "ERROR");
    }

    if (typeof output !== 'undefined') {
      if (round) {
        output = Math.round(output);
      }
      if (bodies && bodies.block) {
        context = addSelectState(context, { key: output });
        chunk = chunk.render(bodies.block, context);
        resolveSelectDeferreds(getSelectState(context));
      } else {
        chunk = chunk.write(output);
      }
    }

    return chunk;
  },

  /**
   * {@select}
   * Groups a set of truth tests and outputs the first one that passes.
   * Also contains {@any} and {@none} blocks.
   * @param key a value or reference to use as the left-hand side of comparisons
   * @param type coerce all truth test keys without an explicit type to this type
   */
  "select": function(chunk, context, bodies, params) {
    var body = bodies.block,
        state = {};

    if (params.hasOwnProperty('key')) {
      state.key = context.resolve(params.key);
    }
    if (params.hasOwnProperty('type')) {
      state.type = params.type;
    }

    if (body) {
      context = addSelectState(context, state);
      chunk = chunk.render(body, context);
      resolveSelectDeferreds(getSelectState(context));
    } else {
      log("select", "Missing body block", "WARN");
    }
    return chunk;
  },

  /**
   * Truth test helpers
   * @param key a value or reference to use as the left-hand side of comparisons
   * @param value a value or reference to use as the right-hand side of comparisons
   * @param type if specified, `key` and `value` will be forcibly cast to this type
   */
  "eq": truthTest('eq', function(left, right) {
    return left === right;
  }),
  "ne": truthTest('ne', function(left, right) {
    return left !== right;
  }),
  "lt": truthTest('lt', function(left, right) {
    return left < right;
  }),
  "lte": truthTest('lte', function(left, right) {
    return left <= right;
  }),
  "gt": truthTest('gt', function(left, right) {
    return left > right;
  }),
  "gte": truthTest('gte', function(left, right) {
    return left >= right;
  }),

  /**
   * {@any}
   * Outputs as long as at least one truth test inside a {@select} has passed.
   * Must be contained inside a {@select} block.
   * The passing truth test can be before or after the {@any} block.
   */
  "any": function(chunk, context, bodies, params) {
    var selectState = getSelectState(context);

    if(!selectState) {
      log("any", "Must be used inside a {@select} block", "ERROR");
    } else {
      if(selectState.isDeferredComplete) {
        log("any", "Must not be nested inside {@any} or {@none} block", "ERROR");
      } else {
        chunk = chunk.map(function(chunk) {
          selectState.deferreds.push(function() {
            if(selectState.isResolved) {
              chunk = chunk.render(bodies.block, context);
            }
            chunk.end();
          });
        });
      }
    }
    return chunk;
  },

  /**
   * {@none}
   * Outputs if no truth tests inside a {@select} pass.
   * Must be contained inside a {@select} block.
   * The position of the helper does not matter.
   */
  "none": function(chunk, context, bodies, params) {
    var selectState = getSelectState(context);

    if(!selectState) {
      log("none", "Must be used inside a {@select} block", "ERROR");
    } else {
      if(selectState.isDeferredComplete) {
        log("none", "Must not be nested inside {@any} or {@none} block", "ERROR");
      } else {
        chunk = chunk.map(function(chunk) {
          selectState.deferreds.push(function() {
            if(!selectState.isResolved) {
              chunk = chunk.render(bodies.block, context);
            }
            chunk.end();
          });
        });
      }
    }
    return chunk;
  },

  /**
  * {@size}
  * Write the size of the target to the chunk
  * Falsy values and true have size 0
  * Numbers are returned as-is
  * Arrays and Strings have size equal to their length
  * Objects have size equal to the number of keys they contain
  * Dust bodies are evaluated and the length of the string is returned
  * Functions are evaluated and the length of their return value is evaluated
  * @param key find the size of this value or reference
  */
  "size": function(chunk, context, bodies, params) {
    var key = params.key,
        value, k;

    key = context.resolve(params.key);
    if (!key || key === true) {
      value = 0;
    } else if(dust.isArray(key)) {
      value = key.length;
    } else if (!isNaN(parseFloat(key)) && isFinite(key)) {
      value = key;
    } else if (typeof key === "object") {
      value = 0;
      for(k in key){
        if(key.hasOwnProperty(k)){
          value++;
        }
      }
    } else {
      value = (key + '').length;
    }
    return chunk.write(value);
  }

};

for(var key in helpers) {
  dust.helpers[key] = helpers[key];
}

return dust;

}));

}).call(this,require("1YiZ5S"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/dustjs-helpers/lib/dust-helpers.js","/../node_modules/dustjs-helpers/lib")
},{"1YiZ5S":9,"buffer":6,"dustjs-linkedin":4}],3:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
(function(root, factory) {
  if (typeof define === "function" && define.amd && define.amd.dust === true) {
    define("dust.compile", ["dust.core", "dust.parse"], function(dust, parse) {
      return factory(parse, dust).compile;
    });
  } else if (typeof exports === 'object') {
    // in Node, require this file if we want to use the compiler as a standalone module
    module.exports = factory(require('./parser').parse, require('./dust'));
  } else {
    // in the browser, store the factory output if we want to use the compiler directly
    factory(root.dust.parse, root.dust);
  }
}(this, function(parse, dust) {
  var compiler = {},
      isArray = dust.isArray;

  var escape = (typeof JSON === 'undefined') ?
                  function(str) { return '"' + escapeToJsSafeString(str) + '"';} :
                  JSON.stringify;

  compiler.compile = function(source, name) {
    // the name parameter is optional.
    // this can happen for templates that are rendered immediately (renderSource which calls compileFn) or
    // for templates that are compiled as a callable (compileFn)
    //
    // for the common case (using compile and render) a name is required so that templates will be cached by name and rendered later, by name.

    try {
      var ast = filterAST(parse(source));
      return compile(ast, name);
    } catch (err) {
      if (!err.location) {
        throw err;
      }
      throw new SyntaxError(err.message + ' [' + name + ':' + err.location.start.line + ':' + err.location.start.column + ']');
    }
  };

  function filterAST(ast) {
    var context = {};
    return compiler.filterNode(context, ast);
  }

  compiler.filterNode = function(context, node) {
    return compiler.optimizers[node[0]](context, node);
  };

  compiler.optimizers = {
    body:      compactBuffers,
    buffer:    noop,
    special:   convertSpecial,
    format:    format,
    reference: visit,
    '#':       visit,
    '?':       visit,
    '^':       visit,
    '<':       visit,
    '+':       visit,
    '@':       visit,
    '%':       visit,
    partial:   visit,
    context:   visit,
    params:    visit,
    bodies:    visit,
    param:     visit,
    filters:   noop,
    key:       noop,
    path:      noop,
    literal:   noop,
    raw:       noop,
    comment:   nullify,
    line:      nullify,
    col:       nullify
  };

  compiler.pragmas = {
    esc: function(compiler, context, bodies) {
      var old = compiler.auto,
          out;
      if (!context) {
        context = 'h';
      }
      compiler.auto = (context === 's') ? '' : context;
      out = compileParts(compiler, bodies.block);
      compiler.auto = old;
      return out;
    }
  };

  function visit(context, node) {
    var out = [node[0]],
        i, len, res;
    for (i=1, len=node.length; i<len; i++) {
      res = compiler.filterNode(context, node[i]);
      if (res) {
        out.push(res);
      }
    }
    return out;
  }

  // Compacts consecutive buffer nodes into a single node
  function compactBuffers(context, node) {
    var out = [node[0]],
        memo, i, len, res;
    for (i=1, len=node.length; i<len; i++) {
      res = compiler.filterNode(context, node[i]);
      if (res) {
        if (res[0] === 'buffer' || res[0] === 'format') {
          if (memo) {
            memo[0] = (res[0] === 'buffer') ? 'buffer' : memo[0];
            memo[1] += res.slice(1, -2).join('');
          } else {
            memo = res;
            out.push(res);
          }
        } else {
          memo = null;
          out.push(res);
        }
      }
    }
    return out;
  }

  var specialChars = {
    's': ' ',
    'n': '\n',
    'r': '\r',
    'lb': '{',
    'rb': '}'
  };

  function convertSpecial(context, node) {
    return ['buffer', specialChars[node[1]], node[2], node[3]];
  }

  function noop(context, node) {
    return node;
  }

  function nullify(){}

  function format(context, node) {
    if(dust.config.whitespace) {
      // Format nodes are in the form ['format', eol, whitespace, line, col],
      // which is unlike other nodes in that there are two pieces of content
      // Join eol and whitespace together to normalize the node format
      node.splice(1, 2, node.slice(1, -2).join(''));
      return node;
    }
    return null;
  }

  function compile(ast, name) {
    var context = {
      name: name,
      bodies: [],
      blocks: {},
      index: 0,
      auto: 'h'
    },
    escapedName = dust.escapeJs(name),
    AMDName = name? '"' + escapedName + '",' : '',
    compiled = 'function(dust){',
    entry = compiler.compileNode(context, ast),
    iife;

    if(name) {
      compiled += 'dust.register("' + escapedName + '",' + entry + ');';
    }

    compiled += compileBlocks(context) +
                compileBodies(context) +
                'return ' + entry + '}';

    iife = '(' + compiled + '(dust));';

    if(dust.config.amd) {
      return 'define(' + AMDName + '["dust.core"],' + compiled + ');';
    } else if(dust.config.cjs) {
      return 'module.exports=function(dust){' +
             'var tmpl=' + iife +
             'var f=' + loaderFor().toString() + ';' +
             'f.template=tmpl;return f}';
    } else {
      return iife;
    }
  }

  function compileBlocks(context) {
    var out = [],
        blocks = context.blocks,
        name;

    for (name in blocks) {
      out.push('"' + name + '":' + blocks[name]);
    }
    if (out.length) {
      context.blocks = 'ctx=ctx.shiftBlocks(blocks);';
      return 'var blocks={' + out.join(',') + '};';
    } else {
      context.blocks = '';
    }
    return context.blocks;
  }

  function compileBodies(context) {
    var out = [],
        bodies = context.bodies,
        blx = context.blocks,
        i, len;

    for (i=0, len=bodies.length; i<len; i++) {
      out[i] = 'function body_' + i + '(chk,ctx){' +
          blx + 'return chk' + bodies[i] + ';}body_' + i + '.__dustBody=!0;';
    }
    return out.join('');
  }

  function compileParts(context, body) {
    var parts = '',
        i, len;
    for (i=1, len=body.length; i<len; i++) {
      parts += compiler.compileNode(context, body[i]);
    }
    return parts;
  }

  compiler.compileNode = function(context, node) {
    return compiler.nodes[node[0]](context, node);
  };

  compiler.nodes = {
    body: function(context, node) {
      var id = context.index++,
          name = 'body_' + id;
      context.bodies[id] = compileParts(context, node);
      return name;
    },

    buffer: function(context, node) {
      return '.w(' + escape(node[1]) + ')';
    },

    format: function(context, node) {
      return '.w(' + escape(node[1]) + ')';
    },

    reference: function(context, node) {
      return '.f(' + compiler.compileNode(context, node[1]) +
        ',ctx,' + compiler.compileNode(context, node[2]) + ')';
    },

    '#': function(context, node) {
      return compileSection(context, node, 'section');
    },

    '?': function(context, node) {
      return compileSection(context, node, 'exists');
    },

    '^': function(context, node) {
      return compileSection(context, node, 'notexists');
    },

    '<': function(context, node) {
      var bodies = node[4];
      for (var i=1, len=bodies.length; i<len; i++) {
        var param = bodies[i],
            type = param[1][1];
        if (type === 'block') {
          context.blocks[node[1].text] = compiler.compileNode(context, param[2]);
          return '';
        }
      }
      return '';
    },

    '+': function(context, node) {
      if (typeof(node[1].text) === 'undefined'  && typeof(node[4]) === 'undefined'){
        return '.b(ctx.getBlock(' +
              compiler.compileNode(context, node[1]) +
              ',chk, ctx),' + compiler.compileNode(context, node[2]) + ', {},' +
              compiler.compileNode(context, node[3]) +
              ')';
      } else {
        return '.b(ctx.getBlock(' +
            escape(node[1].text) +
            '),' + compiler.compileNode(context, node[2]) + ',' +
            compiler.compileNode(context, node[4]) + ',' +
            compiler.compileNode(context, node[3]) +
            ')';
      }
    },

    '@': function(context, node) {
      return '.h(' +
        escape(node[1].text) +
        ',' + compiler.compileNode(context, node[2]) + ',' +
        compiler.compileNode(context, node[4]) + ',' +
        compiler.compileNode(context, node[3]) + ',' +
        compiler.compileNode(context, node[5]) +
        ')';
    },

    '%': function(context, node) {
      // TODO: Move these hacks into pragma precompiler
      var name = node[1][1],
          rawBodies,
          bodies,
          rawParams,
          params,
          ctx, b, p, i, len;
      if (!compiler.pragmas[name]) {
        return '';
      }

      rawBodies = node[4];
      bodies = {};
      for (i=1, len=rawBodies.length; i<len; i++) {
        b = rawBodies[i];
        bodies[b[1][1]] = b[2];
      }

      rawParams = node[3];
      params = {};
      for (i=1, len=rawParams.length; i<len; i++) {
        p = rawParams[i];
        params[p[1][1]] = p[2][1];
      }

      ctx = node[2][1] ? node[2][1].text : null;

      return compiler.pragmas[name](context, ctx, bodies, params);
    },

    partial: function(context, node) {
      return '.p(' +
          compiler.compileNode(context, node[1]) +
          ',ctx,' + compiler.compileNode(context, node[2]) +
          ',' + compiler.compileNode(context, node[3]) + ')';
    },

    context: function(context, node) {
      if (node[1]) {
        return 'ctx.rebase(' + compiler.compileNode(context, node[1]) + ')';
      }
      return 'ctx';
    },

    params: function(context, node) {
      var out = [];
      for (var i=1, len=node.length; i<len; i++) {
        out.push(compiler.compileNode(context, node[i]));
      }
      if (out.length) {
        return '{' + out.join(',') + '}';
      }
      return '{}';
    },

    bodies: function(context, node) {
      var out = [];
      for (var i=1, len=node.length; i<len; i++) {
        out.push(compiler.compileNode(context, node[i]));
      }
      return '{' + out.join(',') + '}';
    },

    param: function(context, node) {
      return compiler.compileNode(context, node[1]) + ':' + compiler.compileNode(context, node[2]);
    },

    filters: function(context, node) {
      var list = [];
      for (var i=1, len=node.length; i<len; i++) {
        var filter = node[i];
        list.push('"' + filter + '"');
      }
      return '"' + context.auto + '"' +
        (list.length ? ',[' + list.join(',') + ']' : '');
    },

    key: function(context, node) {
      return 'ctx.get(["' + node[1] + '"], false)';
    },

    path: function(context, node) {
      var current = node[1],
          keys = node[2],
          list = [];

      for (var i=0,len=keys.length; i<len; i++) {
        if (isArray(keys[i])) {
          list.push(compiler.compileNode(context, keys[i]));
        } else {
          list.push('"' + keys[i] + '"');
        }
      }
      return 'ctx.getPath(' + current + ', [' + list.join(',') + '])';
    },

    literal: function(context, node) {
      return escape(node[1]);
    },
    raw: function(context, node) {
      return ".w(" + escape(node[1]) + ")";
    }
  };

  function compileSection(context, node, cmd) {
    return '.' + (dust._aliases[cmd] || cmd) + '(' +
      compiler.compileNode(context, node[1]) +
      ',' + compiler.compileNode(context, node[2]) + ',' +
      compiler.compileNode(context, node[4]) + ',' +
      compiler.compileNode(context, node[3]) +
      ')';
  }

  var BS = /\\/g,
      DQ = /"/g,
      LF = /\f/g,
      NL = /\n/g,
      CR = /\r/g,
      TB = /\t/g;
  function escapeToJsSafeString(str) {
    return str.replace(BS, '\\\\')
              .replace(DQ, '\\"')
              .replace(LF, '\\f')
              .replace(NL, '\\n')
              .replace(CR, '\\r')
              .replace(TB, '\\t');
  }

  function renderSource(source, context, callback) {
    var tmpl = dust.loadSource(dust.compile(source));
    return loaderFor(tmpl)(context, callback);
  }

  function compileFn(source, name) {
    var tmpl = dust.loadSource(dust.compile(source, name));
    return loaderFor(tmpl);
  }

  function loaderFor(tmpl) {
    return function load(ctx, cb) {
      var fn = cb ? 'render' : 'stream';
      return dust[fn](tmpl, ctx, cb);
    };
  }

  // expose compiler methods
  dust.compiler = compiler;
  dust.compile = dust.compiler.compile;
  dust.renderSource = renderSource;
  dust.compileFn = compileFn;

  // DEPRECATED legacy names. Removed in 2.8.0
  dust.filterNode = compiler.filterNode;
  dust.optimizers = compiler.optimizers;
  dust.pragmas = compiler.pragmas;
  dust.compileNode = compiler.compileNode;
  dust.nodes = compiler.nodes;

  return compiler;

}));

}).call(this,require("1YiZ5S"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/dustjs-linkedin/lib/compiler.js","/../node_modules/dustjs-linkedin/lib")
},{"./dust":4,"./parser":5,"1YiZ5S":9,"buffer":6}],4:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
(function (root, factory) {
  if (typeof define === 'function' && define.amd && define.amd.dust === true) {
    define('dust.core', [], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.dust = factory();
  }
}(this, function() {
  var dust = {
        "version": "2.7.2"
      },
      NONE = 'NONE', ERROR = 'ERROR', WARN = 'WARN', INFO = 'INFO', DEBUG = 'DEBUG',
      EMPTY_FUNC = function() {};

  dust.config = {
    whitespace: false,
    amd: false,
    cjs: false,
    cache: true
  };

  // Directive aliases to minify code
  dust._aliases = {
    "write": "w",
    "end": "e",
    "map": "m",
    "render": "r",
    "reference": "f",
    "section": "s",
    "exists": "x",
    "notexists": "nx",
    "block": "b",
    "partial": "p",
    "helper": "h"
  };

  (function initLogging() {
    /*global process, console*/
    var loggingLevels = { DEBUG: 0, INFO: 1, WARN: 2, ERROR: 3, NONE: 4 },
        consoleLog,
        log;

    if (typeof console !== 'undefined' && console.log) {
      consoleLog = console.log;
      if(typeof consoleLog === 'function') {
        log = function() {
          consoleLog.apply(console, arguments);
        };
      } else {
        log = function() {
          consoleLog(Array.prototype.slice.apply(arguments).join(' '));
        };
      }
    } else {
      log = EMPTY_FUNC;
    }

    /**
     * Filters messages based on `dust.debugLevel`.
     * This default implementation will print to the console if it exists.
     * @param {String|Error} message the message to print/throw
     * @param {String} type the severity of the message(ERROR, WARN, INFO, or DEBUG)
     * @public
     */
    dust.log = function(message, type) {
      type = type || INFO;
      if (loggingLevels[type] >= loggingLevels[dust.debugLevel]) {
        log('[DUST:' + type + ']', message);
        if (type === ERROR && dust.debugLevel === DEBUG && message instanceof Error && message.stack) {
          log('[DUST:' + type + ']', message.stack);
        }
      }
    };

    dust.debugLevel = NONE;
    if(typeof process !== 'undefined' && process.env && /\bdust\b/.test(process.env.DEBUG)) {
      dust.debugLevel = DEBUG;
    }

  }());

  dust.helpers = {};

  dust.cache = {};

  dust.register = function(name, tmpl) {
    if (!name) {
      return;
    }
    tmpl.templateName = name;
    if (dust.config.cache !== false) {
      dust.cache[name] = tmpl;
    }
  };

  dust.render = function(nameOrTemplate, context, callback) {
    var chunk = new Stub(callback).head;
    try {
      load(nameOrTemplate, chunk, context).end();
    } catch (err) {
      chunk.setError(err);
    }
  };

  dust.stream = function(nameOrTemplate, context) {
    var stream = new Stream(),
        chunk = stream.head;
    dust.nextTick(function() {
      try {
        load(nameOrTemplate, chunk, context).end();
      } catch (err) {
        chunk.setError(err);
      }
    });
    return stream;
  };

  // This may be set to a function to allow external scripts to provide
  // an alternate way to access templates by name
  //  @param {String} templateName
  //  @param {Object} chunk
  //  @param {Object} context
  //  @return {*} Could be:
  //    - {Function} a template function, if found
  //    - {Boolean} false to signal 404 and prevent further lookup
  //    - undefined to signal 404 and let dust do the regular lookup
  dust.templateProvider = false;

  /**
   * Extracts a template function (body_0) from whatever is passed.
   * @param nameOrTemplate {*} Could be:
   *   - the name of a template to load from cache
   *   - a CommonJS-compiled template (a function with a `template` property)
   *   - a template function
   * @param loadFromCache {Boolean} if false, don't look in the cache
   * @return {Function} a template function, if found
   */
  function getTemplate(nameOrTemplate, loadFromCache/*=true*/) {
    if(!nameOrTemplate) {
      return;
    }
    if(typeof nameOrTemplate === 'function' && nameOrTemplate.template) {
      // Sugar away CommonJS module templates
      return nameOrTemplate.template;
    }
    if(dust.isTemplateFn(nameOrTemplate)) {
      // Template functions passed directly
      return nameOrTemplate;
    }
    if(loadFromCache !== false) {
      // Try loading a template with this name from cache
      return dust.cache[nameOrTemplate];
    }
  }

  function load(nameOrTemplate, chunk, context) {
    if(!nameOrTemplate) {
      return chunk.setError(new Error('No template or template name provided to render'));
    }

    var template = false;

    if((typeof dust.templateProvider === 'function') && (!getTemplate(nameOrTemplate, false))) {
      template = dust.templateProvider(nameOrTemplate, chunk, context);
      if(template === false) {
        return chunk.setError(new Error('Template not found in template provider: ' + nameOrTemplate));
      }
    }

    if(!template) {
      template = getTemplate(nameOrTemplate, dust.config.cache);
    }

    if (template) {
      return template(chunk, Context.wrap(context, template.templateName));
    } else {
      if (dust.onLoad) {
        return chunk.map(function(chunk) {
          // Alias just so it's easier to read that this would always be a name
          var name = nameOrTemplate;
          // Three possible scenarios for a successful callback:
          //   - `require(nameOrTemplate)(dust); cb()`
          //   - `src = readFile('src.dust'); cb(null, src)`
          //   - `compiledTemplate = require(nameOrTemplate)(dust); cb(null, compiledTemplate)`
          function done(err, srcOrTemplate) {
            var template;
            if (err) {
              return chunk.setError(err);
            }
            // Prefer a template that is passed via callback over the cached version.
            template = getTemplate(srcOrTemplate, false) || getTemplate(name, dust.config.cache);
            if (!template) {
              // It's a template string, compile it and register under `name`
              if(dust.compile) {
                template = dust.loadSource(dust.compile(srcOrTemplate, name));
              } else {
                return chunk.setError(new Error('Dust compiler not available'));
              }
            }
            template(chunk, Context.wrap(context, template.templateName)).end();
          }

          if(dust.onLoad.length === 3) {
            dust.onLoad(name, context.options, done);
          } else {
            dust.onLoad(name, done);
          }
        });
      }
      return chunk.setError(new Error('Template Not Found: ' + nameOrTemplate));
    }
  }

  dust.loadSource = function(source) {
    /*jshint evil:true*/
    return eval(source);
  };

  if (Array.isArray) {
    dust.isArray = Array.isArray;
  } else {
    dust.isArray = function(arr) {
      return Object.prototype.toString.call(arr) === '[object Array]';
    };
  }

  dust.nextTick = (function() {
    return function(callback) {
      setTimeout(callback, 0);
    };
  })();

  /**
   * Dust has its own rules for what is "empty"-- which is not the same as falsy.
   * Empty arrays, null, and undefined are empty
   */
  dust.isEmpty = function(value) {
    if (value === 0) {
      return false;
    }
    if (dust.isArray(value) && !value.length) {
      return true;
    }
    return !value;
  };

  dust.isEmptyObject = function(obj) {
    var key;
    if (obj === null) {
      return false;
    }
    if (obj === undefined) {
      return false;
    }
    if (obj.length > 0) {
      return false;
    }
    for (key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        return false;
      }
    }
    return true;
  };

  dust.isTemplateFn = function(elem) {
    return typeof elem === 'function' &&
           elem.__dustBody;
  };

  /**
   * Decide somewhat-naively if something is a Thenable.  Matches Promises A+ Spec, section 1.2 “thenable” is an object or function that defines a then method."
   * @param elem {*} object to inspect
   * @return {Boolean} is `elem` a Thenable?
   */
  dust.isThenable = function(elem) {
    return elem &&  /* Beware: `typeof null` is `object` */
           (typeof elem === 'object' || typeof elem === 'function') &&
           typeof elem.then === 'function';
  };

  /**
   * Decide if an element is a function but not Thenable; it is prefereable to resolve a thenable function by its `.then` method.
   * @param elem {*} target of inspection
   * @return {Boolean} is `elem` a function without a `.then` property?
   */
  dust.isNonThenableFunction = function(elem) {
    return typeof elem === 'function' && !dust.isThenable(elem);
  };

  /**
   * Decide very naively if something is a Stream.
   * @param elem {*} object to inspect
   * @return {Boolean} is `elem` a Stream?
   */
  dust.isStreamable = function(elem) {
    return elem &&
           typeof elem.on === 'function' &&
           typeof elem.pipe === 'function';
  };

  // apply the filter chain and return the output string
  dust.filter = function(string, auto, filters, context) {
    var i, len, name, filter;
    if (filters) {
      for (i = 0, len = filters.length; i < len; i++) {
        name = filters[i];
        if (!name.length) {
          continue;
        }
        filter = dust.filters[name];
        if (name === 's') {
          auto = null;
        } else if (typeof filter === 'function') {
          string = filter(string, context);
        } else {
          dust.log('Invalid filter `' + name + '`', WARN);
        }
      }
    }
    // by default always apply the h filter, unless asked to unescape with |s
    if (auto) {
      string = dust.filters[auto](string, context);
    }
    return string;
  };

  dust.filters = {
    h: function(value) { return dust.escapeHtml(value); },
    j: function(value) { return dust.escapeJs(value); },
    u: encodeURI,
    uc: encodeURIComponent,
    js: function(value) { return dust.escapeJSON(value); },
    jp: function(value) {
      if (!JSON) {dust.log('JSON is undefined; could not parse `' + value + '`', WARN);
        return value;
      } else {
        return JSON.parse(value);
      }
    }
  };

  function Context(stack, global, options, blocks, templateName) {
    if(stack !== undefined && !(stack instanceof Stack)) {
      stack = new Stack(stack);
    }
    this.stack = stack;
    this.global = global;
    this.options = options;
    this.blocks = blocks;
    this.templateName = templateName;
  }

  dust.makeBase = dust.context = function(global, options) {
    return new Context(undefined, global, options);
  };

  /**
   * Factory function that creates a closure scope around a Thenable-callback.
   * Returns a function that can be passed to a Thenable that will resume a
   * Context lookup once the Thenable resolves with new data, adding that new
   * data to the lookup stack.
   */
  function getWithResolvedData(ctx, cur, down) {
    return function(data) {
      return ctx.push(data)._get(cur, down);
    };
  }

  Context.wrap = function(context, name) {
    if (context instanceof Context) {
      context.templateName = name;
      return context;
    }
    return new Context(context, {}, {}, null, name);
  };

  /**
   * Public API for getting a value from the context.
   * @method get
   * @param {string|array} path The path to the value. Supported formats are:
   * 'key'
   * 'path.to.key'
   * '.path.to.key'
   * ['path', 'to', 'key']
   * ['key']
   * @param {boolean} [cur=false] Boolean which determines if the search should be limited to the
   * current context (true), or if get should search in parent contexts as well (false).
   * @public
   * @returns {string|object}
   */
  Context.prototype.get = function(path, cur) {
    if (typeof path === 'string') {
      if (path[0] === '.') {
        cur = true;
        path = path.substr(1);
      }
      path = path.split('.');
    }
    return this._get(cur, path);
  };

  /**
   * Get a value from the context
   * @method _get
   * @param {boolean} cur Get only from the current context
   * @param {array} down An array of each step in the path
   * @private
   * @return {string | object}
   */
  Context.prototype._get = function(cur, down) {
    var ctx = this.stack || {},
        i = 1,
        value, first, len, ctxThis, fn;

    first = down[0];
    len = down.length;

    if (cur && len === 0) {
      ctxThis = ctx;
      ctx = ctx.head;
    } else {
      if (!cur) {
        // Search up the stack for the first value
        while (ctx) {
          if (ctx.isObject) {
            ctxThis = ctx.head;
            value = ctx.head[first];
            if (value !== undefined) {
              break;
            }
          }
          ctx = ctx.tail;
        }

        // Try looking in the global context if we haven't found anything yet
        if (value !== undefined) {
          ctx = value;
        } else {
          ctx = this.global && this.global[first];
        }
      } else if (ctx) {
        // if scope is limited by a leading dot, don't search up the tree
        if(ctx.head) {
          ctx = ctx.head[first];
        } else {
          // context's head is empty, value we are searching for is not defined
          ctx = undefined;
        }
      }

      while (ctx && i < len) {
        if (dust.isThenable(ctx)) {
          // Bail early by returning a Thenable for the remainder of the search tree
          return ctx.then(getWithResolvedData(this, cur, down.slice(i)));
        }
        ctxThis = ctx;
        ctx = ctx[down[i]];
        i++;
      }
    }

    if (dust.isNonThenableFunction(ctx)) {
      fn = function() {
        try {
          return ctx.apply(ctxThis, arguments);
        } catch (err) {
          dust.log(err, ERROR);
          throw err;
        }
      };
      fn.__dustBody = !!ctx.__dustBody;
      return fn;
    } else {
      if (ctx === undefined) {
        dust.log('Cannot find reference `{' + down.join('.') + '}` in template `' + this.getTemplateName() + '`', INFO);
      }
      return ctx;
    }
  };

  Context.prototype.getPath = function(cur, down) {
    return this._get(cur, down);
  };

  Context.prototype.push = function(head, idx, len) {
    if(head === undefined) {
      dust.log("Not pushing an undefined variable onto the context", INFO);
      return this;
    }
    return this.rebase(new Stack(head, this.stack, idx, len));
  };

  Context.prototype.pop = function() {
    var head = this.current();
    this.stack = this.stack && this.stack.tail;
    return head;
  };

  Context.prototype.rebase = function(head) {
    return new Context(head, this.global, this.options, this.blocks, this.getTemplateName());
  };

  Context.prototype.clone = function() {
    var context = this.rebase();
    context.stack = this.stack;
    return context;
  };

  Context.prototype.current = function() {
    return this.stack && this.stack.head;
  };

  Context.prototype.getBlock = function(key) {
    var blocks, len, fn;

    if (typeof key === 'function') {
      key = key(new Chunk(), this).data.join('');
    }

    blocks = this.blocks;

    if (!blocks) {
      dust.log('No blocks for context `' + key + '` in template `' + this.getTemplateName() + '`', DEBUG);
      return false;
    }

    len = blocks.length;
    while (len--) {
      fn = blocks[len][key];
      if (fn) {
        return fn;
      }
    }

    dust.log('Malformed template `' + this.getTemplateName() + '` was missing one or more blocks.');
    return false;
  };

  Context.prototype.shiftBlocks = function(locals) {
    var blocks = this.blocks,
        newBlocks;

    if (locals) {
      if (!blocks) {
        newBlocks = [locals];
      } else {
        newBlocks = blocks.concat([locals]);
      }
      return new Context(this.stack, this.global, this.options, newBlocks, this.getTemplateName());
    }
    return this;
  };

  Context.prototype.resolve = function(body) {
    var chunk;

    if(typeof body !== 'function') {
      return body;
    }
    chunk = new Chunk().render(body, this);
    if(chunk instanceof Chunk) {
      return chunk.data.join(''); // ie7 perf
    }
    return chunk;
  };

  Context.prototype.getTemplateName = function() {
    return this.templateName;
  };

  function Stack(head, tail, idx, len) {
    this.tail = tail;
    this.isObject = head && typeof head === 'object';
    this.head = head;
    this.index = idx;
    this.of = len;
  }

  function Stub(callback) {
    this.head = new Chunk(this);
    this.callback = callback;
    this.out = '';
  }

  Stub.prototype.flush = function() {
    var chunk = this.head;

    while (chunk) {
      if (chunk.flushable) {
        this.out += chunk.data.join(''); //ie7 perf
      } else if (chunk.error) {
        this.callback(chunk.error);
        dust.log('Rendering failed with error `' + chunk.error + '`', ERROR);
        this.flush = EMPTY_FUNC;
        return;
      } else {
        return;
      }
      chunk = chunk.next;
      this.head = chunk;
    }
    this.callback(null, this.out);
  };

  /**
   * Creates an interface sort of like a Streams2 ReadableStream.
   */
  function Stream() {
    this.head = new Chunk(this);
  }

  Stream.prototype.flush = function() {
    var chunk = this.head;

    while(chunk) {
      if (chunk.flushable) {
        this.emit('data', chunk.data.join('')); //ie7 perf
      } else if (chunk.error) {
        this.emit('error', chunk.error);
        this.emit('end');
        dust.log('Streaming failed with error `' + chunk.error + '`', ERROR);
        this.flush = EMPTY_FUNC;
        return;
      } else {
        return;
      }
      chunk = chunk.next;
      this.head = chunk;
    }
    this.emit('end');
  };

  /**
   * Executes listeners for `type` by passing data. Note that this is different from a
   * Node stream, which can pass an arbitrary number of arguments
   * @return `true` if event had listeners, `false` otherwise
   */
  Stream.prototype.emit = function(type, data) {
    var events = this.events || {},
        handlers = events[type] || [],
        i, l;

    if (!handlers.length) {
      dust.log('Stream broadcasting, but no listeners for `' + type + '`', DEBUG);
      return false;
    }

    handlers = handlers.slice(0);
    for (i = 0, l = handlers.length; i < l; i++) {
      handlers[i](data);
    }
    return true;
  };

  Stream.prototype.on = function(type, callback) {
    var events = this.events = this.events || {},
        handlers = events[type] = events[type] || [];

    if(typeof callback !== 'function') {
      dust.log('No callback function provided for `' + type + '` event listener', WARN);
    } else {
      handlers.push(callback);
    }
    return this;
  };

  /**
   * Pipes to a WritableStream. Note that backpressure isn't implemented,
   * so we just write as fast as we can.
   * @param stream {WritableStream}
   * @return self
   */
  Stream.prototype.pipe = function(stream) {
    if(typeof stream.write !== 'function' ||
       typeof stream.end !== 'function') {
      dust.log('Incompatible stream passed to `pipe`', WARN);
      return this;
    }

    var destEnded = false;

    if(typeof stream.emit === 'function') {
      stream.emit('pipe', this);
    }

    if(typeof stream.on === 'function') {
      stream.on('error', function() {
        destEnded = true;
      });
    }

    return this
    .on('data', function(data) {
      if(destEnded) {
        return;
      }
      try {
        stream.write(data, 'utf8');
      } catch (err) {
        dust.log(err, ERROR);
      }
    })
    .on('end', function() {
      if(destEnded) {
        return;
      }
      try {
        stream.end();
        destEnded = true;
      } catch (err) {
        dust.log(err, ERROR);
      }
    });
  };

  function Chunk(root, next, taps) {
    this.root = root;
    this.next = next;
    this.data = []; //ie7 perf
    this.flushable = false;
    this.taps = taps;
  }

  Chunk.prototype.write = function(data) {
    var taps = this.taps;

    if (taps) {
      data = taps.go(data);
    }
    this.data.push(data);
    return this;
  };

  Chunk.prototype.end = function(data) {
    if (data) {
      this.write(data);
    }
    this.flushable = true;
    this.root.flush();
    return this;
  };

  Chunk.prototype.map = function(callback) {
    var cursor = new Chunk(this.root, this.next, this.taps),
        branch = new Chunk(this.root, cursor, this.taps);

    this.next = branch;
    this.flushable = true;
    try {
      callback(branch);
    } catch(err) {
      dust.log(err, ERROR);
      branch.setError(err);
    }
    return cursor;
  };

  Chunk.prototype.tap = function(tap) {
    var taps = this.taps;

    if (taps) {
      this.taps = taps.push(tap);
    } else {
      this.taps = new Tap(tap);
    }
    return this;
  };

  Chunk.prototype.untap = function() {
    this.taps = this.taps.tail;
    return this;
  };

  Chunk.prototype.render = function(body, context) {
    return body(this, context);
  };

  Chunk.prototype.reference = function(elem, context, auto, filters) {
    if (dust.isNonThenableFunction(elem)) {
      elem = elem.apply(context.current(), [this, context, null, {auto: auto, filters: filters}]);
      if (elem instanceof Chunk) {
        return elem;
      } else {
        return this.reference(elem, context, auto, filters);
      }
    }
    if (dust.isThenable(elem)) {
      return this.await(elem, context, null, auto, filters);
    } else if (dust.isStreamable(elem)) {
      return this.stream(elem, context, null, auto, filters);
    } else if (!dust.isEmpty(elem)) {
      return this.write(dust.filter(elem, auto, filters, context));
    } else {
      return this;
    }
  };

  Chunk.prototype.section = function(elem, context, bodies, params) {
    var body = bodies.block,
        skip = bodies['else'],
        chunk = this,
        i, len, head;

    if (dust.isNonThenableFunction(elem) && !dust.isTemplateFn(elem)) {
      try {
        elem = elem.apply(context.current(), [this, context, bodies, params]);
      } catch(err) {
        dust.log(err, ERROR);
        return this.setError(err);
      }
      // Functions that return chunks are assumed to have handled the chunk manually.
      // Make that chunk the current one and go to the next method in the chain.
      if (elem instanceof Chunk) {
        return elem;
      }
    }

    if (dust.isEmptyObject(bodies)) {
      // No bodies to render, and we've already invoked any function that was available in
      // hopes of returning a Chunk.
      return chunk;
    }

    if (!dust.isEmptyObject(params)) {
      context = context.push(params);
    }

    /*
    Dust's default behavior is to enumerate over the array elem, passing each object in the array to the block.
    When elem resolves to a value or object instead of an array, Dust sets the current context to the value
    and renders the block one time.
    */
    if (dust.isArray(elem)) {
      if (body) {
        len = elem.length;
        if (len > 0) {
          head = context.stack && context.stack.head || {};
          head.$len = len;
          for (i = 0; i < len; i++) {
            head.$idx = i;
            chunk = body(chunk, context.push(elem[i], i, len));
          }
          head.$idx = undefined;
          head.$len = undefined;
          return chunk;
        } else if (skip) {
          return skip(this, context);
        }
      }
    } else if (dust.isThenable(elem)) {
      return this.await(elem, context, bodies);
    } else if (dust.isStreamable(elem)) {
      return this.stream(elem, context, bodies);
    } else if (elem === true) {
     // true is truthy but does not change context
      if (body) {
        return body(this, context);
      }
    } else if (elem || elem === 0) {
       // everything that evaluates to true are truthy ( e.g. Non-empty strings and Empty objects are truthy. )
       // zero is truthy
       // for anonymous functions that did not returns a chunk, truthiness is evaluated based on the return value
      if (body) {
        return body(this, context.push(elem));
      }
     // nonexistent, scalar false value, scalar empty string, null,
     // undefined are all falsy
    } else if (skip) {
      return skip(this, context);
    }
    dust.log('Section without corresponding key in template `' + context.getTemplateName() + '`', DEBUG);
    return this;
  };

  Chunk.prototype.exists = function(elem, context, bodies) {
    var body = bodies.block,
        skip = bodies['else'];

    if (!dust.isEmpty(elem)) {
      if (body) {
        return body(this, context);
      }
      dust.log('No block for exists check in template `' + context.getTemplateName() + '`', DEBUG);
    } else if (skip) {
      return skip(this, context);
    }
    return this;
  };

  Chunk.prototype.notexists = function(elem, context, bodies) {
    var body = bodies.block,
        skip = bodies['else'];

    if (dust.isEmpty(elem)) {
      if (body) {
        return body(this, context);
      }
      dust.log('No block for not-exists check in template `' + context.getTemplateName() + '`', DEBUG);
    } else if (skip) {
      return skip(this, context);
    }
    return this;
  };

  Chunk.prototype.block = function(elem, context, bodies) {
    var body = elem || bodies.block;

    if (body) {
      return body(this, context);
    }
    return this;
  };

  Chunk.prototype.partial = function(elem, context, partialContext, params) {
    var head;

    if(params === undefined) {
      // Compatibility for < 2.7.0 where `partialContext` did not exist
      params = partialContext;
      partialContext = context;
    }

    if (!dust.isEmptyObject(params)) {
      partialContext = partialContext.clone();
      head = partialContext.pop();
      partialContext = partialContext.push(params)
                                     .push(head);
    }

    if (dust.isTemplateFn(elem)) {
      // The eventual result of evaluating `elem` is a partial name
      // Load the partial after getting its name and end the async chunk
      return this.capture(elem, context, function(name, chunk) {
        load(name, chunk, partialContext).end();
      });
    } else {
      return load(elem, this, partialContext);
    }
  };

  Chunk.prototype.helper = function(name, context, bodies, params, auto) {
    var chunk = this,
        filters = params.filters,
        ret;

    // Pre-2.7.1 compat: if auto is undefined, it's an old template. Automatically escape
    if (auto === undefined) {
      auto = 'h';
    }

    // handle invalid helpers, similar to invalid filters
    if(dust.helpers[name]) {
      try {
        ret = dust.helpers[name](chunk, context, bodies, params);
        if (ret instanceof Chunk) {
          return ret;
        }
        if(typeof filters === 'string') {
          filters = filters.split('|');
        }
        if (!dust.isEmptyObject(bodies)) {
          return chunk.section(ret, context, bodies, params);
        }
        // Helpers act slightly differently from functions in context in that they will act as
        // a reference if they are self-closing (due to grammar limitations)
        // In the Chunk.await function we check to make sure bodies is null before acting as a reference
        return chunk.reference(ret, context, auto, filters);
      } catch(err) {
        dust.log('Error in helper `' + name + '`: ' + err.message, ERROR);
        return chunk.setError(err);
      }
    } else {
      dust.log('Helper `' + name + '` does not exist', WARN);
      return chunk;
    }
  };

  /**
   * Reserve a chunk to be evaluated once a thenable is resolved or rejected
   * @param thenable {Thenable} the target thenable to await
   * @param context {Context} context to use to render the deferred chunk
   * @param bodies {Object} must contain a "body", may contain an "error"
   * @param auto {String} automatically apply this filter if the Thenable is a reference
   * @param filters {Array} apply these filters if the Thenable is a reference
   * @return {Chunk}
   */
  Chunk.prototype.await = function(thenable, context, bodies, auto, filters) {
    return this.map(function(chunk) {
      thenable.then(function(data) {
        if (bodies) {
          chunk = chunk.section(data, context, bodies);
        } else {
          // Actually a reference. Self-closing sections don't render
          chunk = chunk.reference(data, context, auto, filters);
        }
        chunk.end();
      }, function(err) {
        var errorBody = bodies && bodies.error;
        if(errorBody) {
          chunk.render(errorBody, context.push(err)).end();
        } else {
          dust.log('Unhandled promise rejection in `' + context.getTemplateName() + '`', INFO);
          chunk.end();
        }
      });
    });
  };

  /**
   * Reserve a chunk to be evaluated with the contents of a streamable.
   * Currently an error event will bomb out the stream. Once an error
   * is received, we push it to an {:error} block if one exists, and log otherwise,
   * then stop listening to the stream.
   * @param streamable {Streamable} the target streamable that will emit events
   * @param context {Context} context to use to render each thunk
   * @param bodies {Object} must contain a "body", may contain an "error"
   * @return {Chunk}
   */
  Chunk.prototype.stream = function(stream, context, bodies, auto, filters) {
    var body = bodies && bodies.block,
        errorBody = bodies && bodies.error;
    return this.map(function(chunk) {
      var ended = false;
      stream
        .on('data', function data(thunk) {
          if(ended) {
            return;
          }
          if(body) {
            // Fork a new chunk out of the blockstream so that we can flush it independently
            chunk = chunk.map(function(chunk) {
              chunk.render(body, context.push(thunk)).end();
            });
          } else if(!bodies) {
            // When actually a reference, don't fork, just write into the master async chunk
            chunk = chunk.reference(thunk, context, auto, filters);
          }
        })
        .on('error', function error(err) {
          if(ended) {
            return;
          }
          if(errorBody) {
            chunk.render(errorBody, context.push(err));
          } else {
            dust.log('Unhandled stream error in `' + context.getTemplateName() + '`', INFO);
          }
          if(!ended) {
            ended = true;
            chunk.end();
          }
        })
        .on('end', function end() {
          if(!ended) {
            ended = true;
            chunk.end();
          }
        });
    });
  };

  Chunk.prototype.capture = function(body, context, callback) {
    return this.map(function(chunk) {
      var stub = new Stub(function(err, out) {
        if (err) {
          chunk.setError(err);
        } else {
          callback(out, chunk);
        }
      });
      body(stub.head, context).end();
    });
  };

  Chunk.prototype.setError = function(err) {
    this.error = err;
    this.root.flush();
    return this;
  };

  // Chunk aliases
  for(var f in Chunk.prototype) {
    if(dust._aliases[f]) {
      Chunk.prototype[dust._aliases[f]] = Chunk.prototype[f];
    }
  }

  function Tap(head, tail) {
    this.head = head;
    this.tail = tail;
  }

  Tap.prototype.push = function(tap) {
    return new Tap(tap, this);
  };

  Tap.prototype.go = function(value) {
    var tap = this;

    while(tap) {
      value = tap.head(value);
      tap = tap.tail;
    }
    return value;
  };

  var HCHARS = /[&<>"']/,
      AMP    = /&/g,
      LT     = /</g,
      GT     = />/g,
      QUOT   = /\"/g,
      SQUOT  = /\'/g;

  dust.escapeHtml = function(s) {
    if (typeof s === "string" || (s && typeof s.toString === "function")) {
      if (typeof s !== "string") {
        s = s.toString();
      }
      if (!HCHARS.test(s)) {
        return s;
      }
      return s.replace(AMP,'&amp;').replace(LT,'&lt;').replace(GT,'&gt;').replace(QUOT,'&quot;').replace(SQUOT, '&#39;');
    }
    return s;
  };

  var BS = /\\/g,
      FS = /\//g,
      CR = /\r/g,
      LS = /\u2028/g,
      PS = /\u2029/g,
      NL = /\n/g,
      LF = /\f/g,
      SQ = /'/g,
      DQ = /"/g,
      TB = /\t/g;

  dust.escapeJs = function(s) {
    if (typeof s === 'string') {
      return s
        .replace(BS, '\\\\')
        .replace(FS, '\\/')
        .replace(DQ, '\\"')
        .replace(SQ, '\\\'')
        .replace(CR, '\\r')
        .replace(LS, '\\u2028')
        .replace(PS, '\\u2029')
        .replace(NL, '\\n')
        .replace(LF, '\\f')
        .replace(TB, '\\t');
    }
    return s;
  };

  dust.escapeJSON = function(o) {
    if (!JSON) {
      dust.log('JSON is undefined; could not escape `' + o + '`', WARN);
      return o;
    } else {
      return JSON.stringify(o)
        .replace(LS, '\\u2028')
        .replace(PS, '\\u2029')
        .replace(LT, '\\u003c');
    }
  };

  return dust;

}));

}).call(this,require("1YiZ5S"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/dustjs-linkedin/lib/dust.js","/../node_modules/dustjs-linkedin/lib")
},{"1YiZ5S":9,"buffer":6}],5:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/* Do not edit this file directly. It is automatically generated from src/dust.pegjs */
(function(root, factory) {
  if (typeof define === "function" && define.amd && define.amd.dust === true) {
    define("dust.parse", ["dust.core"], function(dust) {
      return factory(dust).parse;
    });
  } else if (typeof exports === 'object') {
    // in Node, require this file if we want to use the parser as a standalone module
    module.exports = factory(require('./dust'));
    // @see server file for parser methods exposed in node
  } else {
    // in the browser, store the factory output if we want to use the parser directly
    factory(root.dust);
  }
}(this, function(dust) {
  var parser = (function() {
  "use strict";

  /*
   * Generated by PEG.js 0.9.0.
   *
   * http://pegjs.org/
   */

  function peg$subclass(child, parent) {
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function peg$SyntaxError(message, expected, found, location) {
    this.message  = message;
    this.expected = expected;
    this.found    = found;
    this.location = location;
    this.name     = "SyntaxError";

    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, peg$SyntaxError);
    }
  }

  peg$subclass(peg$SyntaxError, Error);

  function peg$parse(input) {
    var options = arguments.length > 1 ? arguments[1] : {},
        parser  = this,

        peg$FAILED = {},

        peg$startRuleFunctions = { start: peg$parsestart },
        peg$startRuleFunction  = peg$parsestart,

        peg$c0 = function(p) {
            var body = ["body"].concat(p);
            return withPosition(body);
          },
        peg$c1 = { type: "other", description: "section" },
        peg$c2 = function(t, b, e, n) {
            if( (!n) || (t[1].text !== n.text) ) {
              error("Expected end tag for "+t[1].text+" but it was not found.");
            }
            return true;
          },
        peg$c3 = function(t, b, e, n) {
            e.push(["param", ["literal", "block"], b]);
            t.push(e, ["filters"]);
            return withPosition(t)
          },
        peg$c4 = "/",
        peg$c5 = { type: "literal", value: "/", description: "\"/\"" },
        peg$c6 = function(t) {
            t.push(["bodies"], ["filters"]);
            return withPosition(t)
          },
        peg$c7 = /^[#?\^<+@%]/,
        peg$c8 = { type: "class", value: "[#?^<+@%]", description: "[#?^<+@%]" },
        peg$c9 = function(t, n, c, p) { return [t, n, c, p] },
        peg$c10 = { type: "other", description: "end tag" },
        peg$c11 = function(n) { return n },
        peg$c12 = ":",
        peg$c13 = { type: "literal", value: ":", description: "\":\"" },
        peg$c14 = function(n) {return n},
        peg$c15 = function(n) { return n ? ["context", n] : ["context"] },
        peg$c16 = { type: "other", description: "params" },
        peg$c17 = "=",
        peg$c18 = { type: "literal", value: "=", description: "\"=\"" },
        peg$c19 = function(k, v) {return ["param", ["literal", k], v]},
        peg$c20 = function(p) { return ["params"].concat(p) },
        peg$c21 = { type: "other", description: "bodies" },
        peg$c22 = function(p) { return ["bodies"].concat(p) },
        peg$c23 = { type: "other", description: "reference" },
        peg$c24 = function(n, f) { return withPosition(["reference", n, f]) },
        peg$c25 = { type: "other", description: "partial" },
        peg$c26 = ">",
        peg$c27 = { type: "literal", value: ">", description: "\">\"" },
        peg$c28 = "+",
        peg$c29 = { type: "literal", value: "+", description: "\"+\"" },
        peg$c30 = function(s, k) {return ["literal", k]},
        peg$c31 = function(s, n, c, p) {
            var key = (s === ">") ? "partial" : s;
            return withPosition([key, n, c, p])
          },
        peg$c32 = { type: "other", description: "filters" },
        peg$c33 = "|",
        peg$c34 = { type: "literal", value: "|", description: "\"|\"" },
        peg$c35 = function(f) { return ["filters"].concat(f) },
        peg$c36 = { type: "other", description: "special" },
        peg$c37 = "~",
        peg$c38 = { type: "literal", value: "~", description: "\"~\"" },
        peg$c39 = function(k) { return withPosition(["special", k]) },
        peg$c40 = { type: "other", description: "identifier" },
        peg$c41 = function(p) {
            var arr = ["path"].concat(p);
            arr.text = p[1].join('.').replace(/,line,\d+,col,\d+/g,'');
            return arr;
          },
        peg$c42 = function(k) {
            var arr = ["key", k];
            arr.text = k;
            return arr;
          },
        peg$c43 = { type: "other", description: "number" },
        peg$c44 = function(n) { return ['literal', n]; },
        peg$c45 = { type: "other", description: "float" },
        peg$c46 = ".",
        peg$c47 = { type: "literal", value: ".", description: "\".\"" },
        peg$c48 = function(l, r) { return parseFloat(l + "." + r); },
        peg$c49 = { type: "other", description: "unsigned_integer" },
        peg$c50 = /^[0-9]/,
        peg$c51 = { type: "class", value: "[0-9]", description: "[0-9]" },
        peg$c52 = function(digits) { return makeInteger(digits); },
        peg$c53 = { type: "other", description: "signed_integer" },
        peg$c54 = "-",
        peg$c55 = { type: "literal", value: "-", description: "\"-\"" },
        peg$c56 = function(sign, n) { return n * -1; },
        peg$c57 = { type: "other", description: "integer" },
        peg$c58 = { type: "other", description: "path" },
        peg$c59 = function(k, d) {
            d = d[0];
            if (k && d) {
              d.unshift(k);
              return withPosition([false, d])
            }
            return withPosition([true, d])
          },
        peg$c60 = function(d) {
            if (d.length > 0) {
              return withPosition([true, d[0]])
            }
            return withPosition([true, []])
          },
        peg$c61 = { type: "other", description: "key" },
        peg$c62 = /^[a-zA-Z_$]/,
        peg$c63 = { type: "class", value: "[a-zA-Z_$]", description: "[a-zA-Z_$]" },
        peg$c64 = /^[0-9a-zA-Z_$\-]/,
        peg$c65 = { type: "class", value: "[0-9a-zA-Z_$-]", description: "[0-9a-zA-Z_$-]" },
        peg$c66 = function(h, t) { return h + t.join('') },
        peg$c67 = { type: "other", description: "array" },
        peg$c68 = function(n) {return n.join('')},
        peg$c69 = function(a) {return a; },
        peg$c70 = function(i, nk) { if(nk) { nk.unshift(i); } else {nk = [i] } return nk; },
        peg$c71 = { type: "other", description: "array_part" },
        peg$c72 = function(k) {return k},
        peg$c73 = function(d, a) { if (a) { return d.concat(a); } else { return d; } },
        peg$c74 = { type: "other", description: "inline" },
        peg$c75 = "\"",
        peg$c76 = { type: "literal", value: "\"", description: "\"\\\"\"" },
        peg$c77 = function() { return withPosition(["literal", ""]) },
        peg$c78 = function(l) { return withPosition(["literal", l]) },
        peg$c79 = function(p) { return withPosition(["body"].concat(p)) },
        peg$c80 = function(l) { return ["buffer", l] },
        peg$c81 = { type: "other", description: "buffer" },
        peg$c82 = function(e, w) { return withPosition(["format", e, w.join('')]) },
        peg$c83 = { type: "any", description: "any character" },
        peg$c84 = function(c) {return c},
        peg$c85 = function(b) { return withPosition(["buffer", b.join('')]) },
        peg$c86 = { type: "other", description: "literal" },
        peg$c87 = /^[^"]/,
        peg$c88 = { type: "class", value: "[^\"]", description: "[^\"]" },
        peg$c89 = function(b) { return b.join('') },
        peg$c90 = "\\\"",
        peg$c91 = { type: "literal", value: "\\\"", description: "\"\\\\\\\"\"" },
        peg$c92 = function() { return '"' },
        peg$c93 = { type: "other", description: "raw" },
        peg$c94 = "{`",
        peg$c95 = { type: "literal", value: "{`", description: "\"{`\"" },
        peg$c96 = "`}",
        peg$c97 = { type: "literal", value: "`}", description: "\"`}\"" },
        peg$c98 = function(character) {return character},
        peg$c99 = function(rawText) { return withPosition(["raw", rawText.join('')]) },
        peg$c100 = { type: "other", description: "comment" },
        peg$c101 = "{!",
        peg$c102 = { type: "literal", value: "{!", description: "\"{!\"" },
        peg$c103 = "!}",
        peg$c104 = { type: "literal", value: "!}", description: "\"!}\"" },
        peg$c105 = function(c) { return withPosition(["comment", c.join('')]) },
        peg$c106 = /^[#?\^><+%:@\/~%]/,
        peg$c107 = { type: "class", value: "[#?^><+%:@/~%]", description: "[#?^><+%:@/~%]" },
        peg$c108 = "{",
        peg$c109 = { type: "literal", value: "{", description: "\"{\"" },
        peg$c110 = "}",
        peg$c111 = { type: "literal", value: "}", description: "\"}\"" },
        peg$c112 = "[",
        peg$c113 = { type: "literal", value: "[", description: "\"[\"" },
        peg$c114 = "]",
        peg$c115 = { type: "literal", value: "]", description: "\"]\"" },
        peg$c116 = "\n",
        peg$c117 = { type: "literal", value: "\n", description: "\"\\n\"" },
        peg$c118 = "\r\n",
        peg$c119 = { type: "literal", value: "\r\n", description: "\"\\r\\n\"" },
        peg$c120 = "\r",
        peg$c121 = { type: "literal", value: "\r", description: "\"\\r\"" },
        peg$c122 = "\u2028",
        peg$c123 = { type: "literal", value: "\u2028", description: "\"\\u2028\"" },
        peg$c124 = "\u2029",
        peg$c125 = { type: "literal", value: "\u2029", description: "\"\\u2029\"" },
        peg$c126 = /^[\t\x0B\f \xA0\uFEFF]/,
        peg$c127 = { type: "class", value: "[\\t\\v\\f \\u00A0\\uFEFF]", description: "[\\t\\v\\f \\u00A0\\uFEFF]" },

        peg$currPos          = 0,
        peg$savedPos         = 0,
        peg$posDetailsCache  = [{ line: 1, column: 1, seenCR: false }],
        peg$maxFailPos       = 0,
        peg$maxFailExpected  = [],
        peg$silentFails      = 0,

        peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleFunctions)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
    }

    function text() {
      return input.substring(peg$savedPos, peg$currPos);
    }

    function location() {
      return peg$computeLocation(peg$savedPos, peg$currPos);
    }

    function expected(description) {
      throw peg$buildException(
        null,
        [{ type: "other", description: description }],
        input.substring(peg$savedPos, peg$currPos),
        peg$computeLocation(peg$savedPos, peg$currPos)
      );
    }

    function error(message) {
      throw peg$buildException(
        message,
        null,
        input.substring(peg$savedPos, peg$currPos),
        peg$computeLocation(peg$savedPos, peg$currPos)
      );
    }

    function peg$computePosDetails(pos) {
      var details = peg$posDetailsCache[pos],
          p, ch;

      if (details) {
        return details;
      } else {
        p = pos - 1;
        while (!peg$posDetailsCache[p]) {
          p--;
        }

        details = peg$posDetailsCache[p];
        details = {
          line:   details.line,
          column: details.column,
          seenCR: details.seenCR
        };

        while (p < pos) {
          ch = input.charAt(p);
          if (ch === "\n") {
            if (!details.seenCR) { details.line++; }
            details.column = 1;
            details.seenCR = false;
          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
            details.line++;
            details.column = 1;
            details.seenCR = true;
          } else {
            details.column++;
            details.seenCR = false;
          }

          p++;
        }

        peg$posDetailsCache[pos] = details;
        return details;
      }
    }

    function peg$computeLocation(startPos, endPos) {
      var startPosDetails = peg$computePosDetails(startPos),
          endPosDetails   = peg$computePosDetails(endPos);

      return {
        start: {
          offset: startPos,
          line:   startPosDetails.line,
          column: startPosDetails.column
        },
        end: {
          offset: endPos,
          line:   endPosDetails.line,
          column: endPosDetails.column
        }
      };
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) { return; }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildException(message, expected, found, location) {
      function cleanupExpected(expected) {
        var i = 1;

        expected.sort(function(a, b) {
          if (a.description < b.description) {
            return -1;
          } else if (a.description > b.description) {
            return 1;
          } else {
            return 0;
          }
        });

        while (i < expected.length) {
          if (expected[i - 1] === expected[i]) {
            expected.splice(i, 1);
          } else {
            i++;
          }
        }
      }

      function buildMessage(expected, found) {
        function stringEscape(s) {
          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }

          return s
            .replace(/\\/g,   '\\\\')
            .replace(/"/g,    '\\"')
            .replace(/\x08/g, '\\b')
            .replace(/\t/g,   '\\t')
            .replace(/\n/g,   '\\n')
            .replace(/\f/g,   '\\f')
            .replace(/\r/g,   '\\r')
            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
            .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
            .replace(/[\u0100-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
            .replace(/[\u1000-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
        }

        var expectedDescs = new Array(expected.length),
            expectedDesc, foundDesc, i;

        for (i = 0; i < expected.length; i++) {
          expectedDescs[i] = expected[i].description;
        }

        expectedDesc = expected.length > 1
          ? expectedDescs.slice(0, -1).join(", ")
              + " or "
              + expectedDescs[expected.length - 1]
          : expectedDescs[0];

        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";

        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
      }

      if (expected !== null) {
        cleanupExpected(expected);
      }

      return new peg$SyntaxError(
        message !== null ? message : buildMessage(expected, found),
        expected,
        found,
        location
      );
    }

    function peg$parsestart() {
      var s0;

      s0 = peg$parsebody();

      return s0;
    }

    function peg$parsebody() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsepart();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsepart();
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c0(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parsepart() {
      var s0;

      s0 = peg$parseraw();
      if (s0 === peg$FAILED) {
        s0 = peg$parsecomment();
        if (s0 === peg$FAILED) {
          s0 = peg$parsesection();
          if (s0 === peg$FAILED) {
            s0 = peg$parsepartial();
            if (s0 === peg$FAILED) {
              s0 = peg$parsespecial();
              if (s0 === peg$FAILED) {
                s0 = peg$parsereference();
                if (s0 === peg$FAILED) {
                  s0 = peg$parsebuffer();
                }
              }
            }
          }
        }
      }

      return s0;
    }

    function peg$parsesection() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = peg$parsesec_tag_start();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parsews();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parsews();
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parserd();
          if (s3 !== peg$FAILED) {
            s4 = peg$parsebody();
            if (s4 !== peg$FAILED) {
              s5 = peg$parsebodies();
              if (s5 !== peg$FAILED) {
                s6 = peg$parseend_tag();
                if (s6 === peg$FAILED) {
                  s6 = null;
                }
                if (s6 !== peg$FAILED) {
                  peg$savedPos = peg$currPos;
                  s7 = peg$c2(s1, s4, s5, s6);
                  if (s7) {
                    s7 = void 0;
                  } else {
                    s7 = peg$FAILED;
                  }
                  if (s7 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c3(s1, s4, s5, s6);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parsesec_tag_start();
        if (s1 !== peg$FAILED) {
          s2 = [];
          s3 = peg$parsews();
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            s3 = peg$parsews();
          }
          if (s2 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 47) {
              s3 = peg$c4;
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c5); }
            }
            if (s3 !== peg$FAILED) {
              s4 = peg$parserd();
              if (s4 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c6(s1);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c1); }
      }

      return s0;
    }

    function peg$parsesec_tag_start() {
      var s0, s1, s2, s3, s4, s5, s6;

      s0 = peg$currPos;
      s1 = peg$parseld();
      if (s1 !== peg$FAILED) {
        if (peg$c7.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c8); }
        }
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parsews();
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parsews();
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseidentifier();
            if (s4 !== peg$FAILED) {
              s5 = peg$parsecontext();
              if (s5 !== peg$FAILED) {
                s6 = peg$parseparams();
                if (s6 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c9(s2, s4, s5, s6);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseend_tag() {
      var s0, s1, s2, s3, s4, s5, s6;

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = peg$parseld();
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 47) {
          s2 = peg$c4;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c5); }
        }
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parsews();
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parsews();
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseidentifier();
            if (s4 !== peg$FAILED) {
              s5 = [];
              s6 = peg$parsews();
              while (s6 !== peg$FAILED) {
                s5.push(s6);
                s6 = peg$parsews();
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parserd();
                if (s6 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c11(s4);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c10); }
      }

      return s0;
    }

    function peg$parsecontext() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 58) {
        s2 = peg$c12;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c13); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseidentifier();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s1;
          s2 = peg$c14(s3);
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      if (s1 === peg$FAILED) {
        s1 = null;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c15(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseparams() {
      var s0, s1, s2, s3, s4, s5, s6;

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = [];
      s2 = peg$currPos;
      s3 = [];
      s4 = peg$parsews();
      if (s4 !== peg$FAILED) {
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parsews();
        }
      } else {
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        s4 = peg$parsekey();
        if (s4 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 61) {
            s5 = peg$c17;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c18); }
          }
          if (s5 !== peg$FAILED) {
            s6 = peg$parsenumber();
            if (s6 === peg$FAILED) {
              s6 = peg$parseidentifier();
              if (s6 === peg$FAILED) {
                s6 = peg$parseinline();
              }
            }
            if (s6 !== peg$FAILED) {
              peg$savedPos = s2;
              s3 = peg$c19(s4, s6);
              s2 = s3;
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$currPos;
        s3 = [];
        s4 = peg$parsews();
        if (s4 !== peg$FAILED) {
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parsews();
          }
        } else {
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parsekey();
          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 61) {
              s5 = peg$c17;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c18); }
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parsenumber();
              if (s6 === peg$FAILED) {
                s6 = peg$parseidentifier();
                if (s6 === peg$FAILED) {
                  s6 = peg$parseinline();
                }
              }
              if (s6 !== peg$FAILED) {
                peg$savedPos = s2;
                s3 = peg$c19(s4, s6);
                s2 = s3;
              } else {
                peg$currPos = s2;
                s2 = peg$FAILED;
              }
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c20(s1);
      }
      s0 = s1;
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c16); }
      }

      return s0;
    }

    function peg$parsebodies() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = [];
      s2 = peg$currPos;
      s3 = peg$parseld();
      if (s3 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 58) {
          s4 = peg$c12;
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c13); }
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parsekey();
          if (s5 !== peg$FAILED) {
            s6 = peg$parserd();
            if (s6 !== peg$FAILED) {
              s7 = peg$parsebody();
              if (s7 !== peg$FAILED) {
                peg$savedPos = s2;
                s3 = peg$c19(s5, s7);
                s2 = s3;
              } else {
                peg$currPos = s2;
                s2 = peg$FAILED;
              }
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$currPos;
        s3 = peg$parseld();
        if (s3 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 58) {
            s4 = peg$c12;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c13); }
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parsekey();
            if (s5 !== peg$FAILED) {
              s6 = peg$parserd();
              if (s6 !== peg$FAILED) {
                s7 = peg$parsebody();
                if (s7 !== peg$FAILED) {
                  peg$savedPos = s2;
                  s3 = peg$c19(s5, s7);
                  s2 = s3;
                } else {
                  peg$currPos = s2;
                  s2 = peg$FAILED;
                }
              } else {
                peg$currPos = s2;
                s2 = peg$FAILED;
              }
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c22(s1);
      }
      s0 = s1;
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c21); }
      }

      return s0;
    }

    function peg$parsereference() {
      var s0, s1, s2, s3, s4;

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = peg$parseld();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseidentifier();
        if (s2 !== peg$FAILED) {
          s3 = peg$parsefilters();
          if (s3 !== peg$FAILED) {
            s4 = peg$parserd();
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c24(s2, s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c23); }
      }

      return s0;
    }

    function peg$parsepartial() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = peg$parseld();
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 62) {
          s2 = peg$c26;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c27); }
        }
        if (s2 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 43) {
            s2 = peg$c28;
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c29); }
          }
        }
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parsews();
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parsews();
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$currPos;
            s5 = peg$parsekey();
            if (s5 !== peg$FAILED) {
              peg$savedPos = s4;
              s5 = peg$c30(s2, s5);
            }
            s4 = s5;
            if (s4 === peg$FAILED) {
              s4 = peg$parseinline();
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parsecontext();
              if (s5 !== peg$FAILED) {
                s6 = peg$parseparams();
                if (s6 !== peg$FAILED) {
                  s7 = [];
                  s8 = peg$parsews();
                  while (s8 !== peg$FAILED) {
                    s7.push(s8);
                    s8 = peg$parsews();
                  }
                  if (s7 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 47) {
                      s8 = peg$c4;
                      peg$currPos++;
                    } else {
                      s8 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c5); }
                    }
                    if (s8 !== peg$FAILED) {
                      s9 = peg$parserd();
                      if (s9 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c31(s2, s4, s5, s6);
                        s0 = s1;
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c25); }
      }

      return s0;
    }

    function peg$parsefilters() {
      var s0, s1, s2, s3, s4;

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = [];
      s2 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 124) {
        s3 = peg$c33;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c34); }
      }
      if (s3 !== peg$FAILED) {
        s4 = peg$parsekey();
        if (s4 !== peg$FAILED) {
          peg$savedPos = s2;
          s3 = peg$c14(s4);
          s2 = s3;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 124) {
          s3 = peg$c33;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c34); }
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parsekey();
          if (s4 !== peg$FAILED) {
            peg$savedPos = s2;
            s3 = peg$c14(s4);
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c35(s1);
      }
      s0 = s1;
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c32); }
      }

      return s0;
    }

    function peg$parsespecial() {
      var s0, s1, s2, s3, s4;

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = peg$parseld();
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 126) {
          s2 = peg$c37;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c38); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parsekey();
          if (s3 !== peg$FAILED) {
            s4 = peg$parserd();
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c39(s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c36); }
      }

      return s0;
    }

    function peg$parseidentifier() {
      var s0, s1;

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = peg$parsepath();
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c41(s1);
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parsekey();
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c42(s1);
        }
        s0 = s1;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c40); }
      }

      return s0;
    }

    function peg$parsenumber() {
      var s0, s1;

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = peg$parsefloat();
      if (s1 === peg$FAILED) {
        s1 = peg$parseinteger();
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c44(s1);
      }
      s0 = s1;
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c43); }
      }

      return s0;
    }

    function peg$parsefloat() {
      var s0, s1, s2, s3;

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = peg$parseinteger();
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 46) {
          s2 = peg$c46;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c47); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseunsigned_integer();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c48(s1, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c45); }
      }

      return s0;
    }

    function peg$parseunsigned_integer() {
      var s0, s1, s2;

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = [];
      if (peg$c50.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c51); }
      }
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          if (peg$c50.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c51); }
          }
        }
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c52(s1);
      }
      s0 = s1;
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c49); }
      }

      return s0;
    }

    function peg$parsesigned_integer() {
      var s0, s1, s2;

      peg$silentFails++;
      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 45) {
        s1 = peg$c54;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c55); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseunsigned_integer();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c56(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c53); }
      }

      return s0;
    }

    function peg$parseinteger() {
      var s0, s1;

      peg$silentFails++;
      s0 = peg$parsesigned_integer();
      if (s0 === peg$FAILED) {
        s0 = peg$parseunsigned_integer();
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c57); }
      }

      return s0;
    }

    function peg$parsepath() {
      var s0, s1, s2, s3;

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = peg$parsekey();
      if (s1 === peg$FAILED) {
        s1 = null;
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parsearray_part();
        if (s3 === peg$FAILED) {
          s3 = peg$parsearray();
        }
        if (s3 !== peg$FAILED) {
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            s3 = peg$parsearray_part();
            if (s3 === peg$FAILED) {
              s3 = peg$parsearray();
            }
          }
        } else {
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c59(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 46) {
          s1 = peg$c46;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c47); }
        }
        if (s1 !== peg$FAILED) {
          s2 = [];
          s3 = peg$parsearray_part();
          if (s3 === peg$FAILED) {
            s3 = peg$parsearray();
          }
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            s3 = peg$parsearray_part();
            if (s3 === peg$FAILED) {
              s3 = peg$parsearray();
            }
          }
          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c60(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c58); }
      }

      return s0;
    }

    function peg$parsekey() {
      var s0, s1, s2, s3;

      peg$silentFails++;
      s0 = peg$currPos;
      if (peg$c62.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c63); }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        if (peg$c64.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c65); }
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          if (peg$c64.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c65); }
          }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c66(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c61); }
      }

      return s0;
    }

    function peg$parsearray() {
      var s0, s1, s2, s3, s4, s5;

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = peg$currPos;
      s2 = peg$parselb();
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        s4 = [];
        if (peg$c50.test(input.charAt(peg$currPos))) {
          s5 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c51); }
        }
        if (s5 !== peg$FAILED) {
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            if (peg$c50.test(input.charAt(peg$currPos))) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c51); }
            }
          }
        } else {
          s4 = peg$FAILED;
        }
        if (s4 !== peg$FAILED) {
          peg$savedPos = s3;
          s4 = peg$c68(s4);
        }
        s3 = s4;
        if (s3 === peg$FAILED) {
          s3 = peg$parseidentifier();
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parserb();
          if (s4 !== peg$FAILED) {
            peg$savedPos = s1;
            s2 = peg$c69(s3);
            s1 = s2;
          } else {
            peg$currPos = s1;
            s1 = peg$FAILED;
          }
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parsearray_part();
        if (s2 === peg$FAILED) {
          s2 = null;
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c70(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c67); }
      }

      return s0;
    }

    function peg$parsearray_part() {
      var s0, s1, s2, s3, s4;

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = [];
      s2 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 46) {
        s3 = peg$c46;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c47); }
      }
      if (s3 !== peg$FAILED) {
        s4 = peg$parsekey();
        if (s4 !== peg$FAILED) {
          peg$savedPos = s2;
          s3 = peg$c72(s4);
          s2 = s3;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 46) {
            s3 = peg$c46;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c47); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parsekey();
            if (s4 !== peg$FAILED) {
              peg$savedPos = s2;
              s3 = peg$c72(s4);
              s2 = s3;
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        }
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parsearray();
        if (s2 === peg$FAILED) {
          s2 = null;
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c73(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c71); }
      }

      return s0;
    }

    function peg$parseinline() {
      var s0, s1, s2, s3;

      peg$silentFails++;
      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 34) {
        s1 = peg$c75;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c76); }
      }
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 34) {
          s2 = peg$c75;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c76); }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c77();
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 34) {
          s1 = peg$c75;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c76); }
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parseliteral();
          if (s2 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 34) {
              s3 = peg$c75;
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c76); }
            }
            if (s3 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c78(s2);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 34) {
            s1 = peg$c75;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c76); }
          }
          if (s1 !== peg$FAILED) {
            s2 = [];
            s3 = peg$parseinline_part();
            if (s3 !== peg$FAILED) {
              while (s3 !== peg$FAILED) {
                s2.push(s3);
                s3 = peg$parseinline_part();
              }
            } else {
              s2 = peg$FAILED;
            }
            if (s2 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 34) {
                s3 = peg$c75;
                peg$currPos++;
              } else {
                s3 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c76); }
              }
              if (s3 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c79(s2);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c74); }
      }

      return s0;
    }

    function peg$parseinline_part() {
      var s0, s1;

      s0 = peg$parsespecial();
      if (s0 === peg$FAILED) {
        s0 = peg$parsereference();
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$parseliteral();
          if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c80(s1);
          }
          s0 = s1;
        }
      }

      return s0;
    }

    function peg$parsebuffer() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = peg$parseeol();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parsews();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parsews();
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c82(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = [];
        s2 = peg$currPos;
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parsetag();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = void 0;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$currPos;
          peg$silentFails++;
          s5 = peg$parseraw();
          peg$silentFails--;
          if (s5 === peg$FAILED) {
            s4 = void 0;
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$currPos;
            peg$silentFails++;
            s6 = peg$parsecomment();
            peg$silentFails--;
            if (s6 === peg$FAILED) {
              s5 = void 0;
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$currPos;
              peg$silentFails++;
              s7 = peg$parseeol();
              peg$silentFails--;
              if (s7 === peg$FAILED) {
                s6 = void 0;
              } else {
                peg$currPos = s6;
                s6 = peg$FAILED;
              }
              if (s6 !== peg$FAILED) {
                if (input.length > peg$currPos) {
                  s7 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c83); }
                }
                if (s7 !== peg$FAILED) {
                  peg$savedPos = s2;
                  s3 = peg$c84(s7);
                  s2 = s3;
                } else {
                  peg$currPos = s2;
                  s2 = peg$FAILED;
                }
              } else {
                peg$currPos = s2;
                s2 = peg$FAILED;
              }
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          while (s2 !== peg$FAILED) {
            s1.push(s2);
            s2 = peg$currPos;
            s3 = peg$currPos;
            peg$silentFails++;
            s4 = peg$parsetag();
            peg$silentFails--;
            if (s4 === peg$FAILED) {
              s3 = void 0;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
            if (s3 !== peg$FAILED) {
              s4 = peg$currPos;
              peg$silentFails++;
              s5 = peg$parseraw();
              peg$silentFails--;
              if (s5 === peg$FAILED) {
                s4 = void 0;
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
              if (s4 !== peg$FAILED) {
                s5 = peg$currPos;
                peg$silentFails++;
                s6 = peg$parsecomment();
                peg$silentFails--;
                if (s6 === peg$FAILED) {
                  s5 = void 0;
                } else {
                  peg$currPos = s5;
                  s5 = peg$FAILED;
                }
                if (s5 !== peg$FAILED) {
                  s6 = peg$currPos;
                  peg$silentFails++;
                  s7 = peg$parseeol();
                  peg$silentFails--;
                  if (s7 === peg$FAILED) {
                    s6 = void 0;
                  } else {
                    peg$currPos = s6;
                    s6 = peg$FAILED;
                  }
                  if (s6 !== peg$FAILED) {
                    if (input.length > peg$currPos) {
                      s7 = input.charAt(peg$currPos);
                      peg$currPos++;
                    } else {
                      s7 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c83); }
                    }
                    if (s7 !== peg$FAILED) {
                      peg$savedPos = s2;
                      s3 = peg$c84(s7);
                      s2 = s3;
                    } else {
                      peg$currPos = s2;
                      s2 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s2;
                    s2 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s2;
                  s2 = peg$FAILED;
                }
              } else {
                peg$currPos = s2;
                s2 = peg$FAILED;
              }
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          }
        } else {
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c85(s1);
        }
        s0 = s1;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c81); }
      }

      return s0;
    }

    function peg$parseliteral() {
      var s0, s1, s2, s3, s4;

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = [];
      s2 = peg$currPos;
      s3 = peg$currPos;
      peg$silentFails++;
      s4 = peg$parsetag();
      peg$silentFails--;
      if (s4 === peg$FAILED) {
        s3 = void 0;
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        s4 = peg$parseesc();
        if (s4 === peg$FAILED) {
          if (peg$c87.test(input.charAt(peg$currPos))) {
            s4 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c88); }
          }
        }
        if (s4 !== peg$FAILED) {
          peg$savedPos = s2;
          s3 = peg$c84(s4);
          s2 = s3;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$currPos;
          s3 = peg$currPos;
          peg$silentFails++;
          s4 = peg$parsetag();
          peg$silentFails--;
          if (s4 === peg$FAILED) {
            s3 = void 0;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseesc();
            if (s4 === peg$FAILED) {
              if (peg$c87.test(input.charAt(peg$currPos))) {
                s4 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s4 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c88); }
              }
            }
            if (s4 !== peg$FAILED) {
              peg$savedPos = s2;
              s3 = peg$c84(s4);
              s2 = s3;
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        }
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c89(s1);
      }
      s0 = s1;
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c86); }
      }

      return s0;
    }

    function peg$parseesc() {
      var s0, s1;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c90) {
        s1 = peg$c90;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c91); }
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c92();
      }
      s0 = s1;

      return s0;
    }

    function peg$parseraw() {
      var s0, s1, s2, s3, s4, s5;

      peg$silentFails++;
      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c94) {
        s1 = peg$c94;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c95); }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$currPos;
        peg$silentFails++;
        if (input.substr(peg$currPos, 2) === peg$c96) {
          s5 = peg$c96;
          peg$currPos += 2;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c97); }
        }
        peg$silentFails--;
        if (s5 === peg$FAILED) {
          s4 = void 0;
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        if (s4 !== peg$FAILED) {
          if (input.length > peg$currPos) {
            s5 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c83); }
          }
          if (s5 !== peg$FAILED) {
            peg$savedPos = s3;
            s4 = peg$c98(s5);
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$currPos;
          peg$silentFails++;
          if (input.substr(peg$currPos, 2) === peg$c96) {
            s5 = peg$c96;
            peg$currPos += 2;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c97); }
          }
          peg$silentFails--;
          if (s5 === peg$FAILED) {
            s4 = void 0;
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
          if (s4 !== peg$FAILED) {
            if (input.length > peg$currPos) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c83); }
            }
            if (s5 !== peg$FAILED) {
              peg$savedPos = s3;
              s4 = peg$c98(s5);
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        if (s2 !== peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c96) {
            s3 = peg$c96;
            peg$currPos += 2;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c97); }
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c99(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c93); }
      }

      return s0;
    }

    function peg$parsecomment() {
      var s0, s1, s2, s3, s4, s5;

      peg$silentFails++;
      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c101) {
        s1 = peg$c101;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c102); }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$currPos;
        peg$silentFails++;
        if (input.substr(peg$currPos, 2) === peg$c103) {
          s5 = peg$c103;
          peg$currPos += 2;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c104); }
        }
        peg$silentFails--;
        if (s5 === peg$FAILED) {
          s4 = void 0;
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        if (s4 !== peg$FAILED) {
          if (input.length > peg$currPos) {
            s5 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c83); }
          }
          if (s5 !== peg$FAILED) {
            peg$savedPos = s3;
            s4 = peg$c84(s5);
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$currPos;
          peg$silentFails++;
          if (input.substr(peg$currPos, 2) === peg$c103) {
            s5 = peg$c103;
            peg$currPos += 2;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c104); }
          }
          peg$silentFails--;
          if (s5 === peg$FAILED) {
            s4 = void 0;
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
          if (s4 !== peg$FAILED) {
            if (input.length > peg$currPos) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c83); }
            }
            if (s5 !== peg$FAILED) {
              peg$savedPos = s3;
              s4 = peg$c84(s5);
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        if (s2 !== peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c103) {
            s3 = peg$c103;
            peg$currPos += 2;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c104); }
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c105(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c100); }
      }

      return s0;
    }

    function peg$parsetag() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

      s0 = peg$currPos;
      s1 = peg$parseld();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parsews();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parsews();
        }
        if (s2 !== peg$FAILED) {
          if (peg$c106.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c107); }
          }
          if (s3 !== peg$FAILED) {
            s4 = [];
            s5 = peg$parsews();
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              s5 = peg$parsews();
            }
            if (s4 !== peg$FAILED) {
              s5 = [];
              s6 = peg$currPos;
              s7 = peg$currPos;
              peg$silentFails++;
              s8 = peg$parserd();
              peg$silentFails--;
              if (s8 === peg$FAILED) {
                s7 = void 0;
              } else {
                peg$currPos = s7;
                s7 = peg$FAILED;
              }
              if (s7 !== peg$FAILED) {
                s8 = peg$currPos;
                peg$silentFails++;
                s9 = peg$parseeol();
                peg$silentFails--;
                if (s9 === peg$FAILED) {
                  s8 = void 0;
                } else {
                  peg$currPos = s8;
                  s8 = peg$FAILED;
                }
                if (s8 !== peg$FAILED) {
                  if (input.length > peg$currPos) {
                    s9 = input.charAt(peg$currPos);
                    peg$currPos++;
                  } else {
                    s9 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c83); }
                  }
                  if (s9 !== peg$FAILED) {
                    s7 = [s7, s8, s9];
                    s6 = s7;
                  } else {
                    peg$currPos = s6;
                    s6 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s6;
                  s6 = peg$FAILED;
                }
              } else {
                peg$currPos = s6;
                s6 = peg$FAILED;
              }
              if (s6 !== peg$FAILED) {
                while (s6 !== peg$FAILED) {
                  s5.push(s6);
                  s6 = peg$currPos;
                  s7 = peg$currPos;
                  peg$silentFails++;
                  s8 = peg$parserd();
                  peg$silentFails--;
                  if (s8 === peg$FAILED) {
                    s7 = void 0;
                  } else {
                    peg$currPos = s7;
                    s7 = peg$FAILED;
                  }
                  if (s7 !== peg$FAILED) {
                    s8 = peg$currPos;
                    peg$silentFails++;
                    s9 = peg$parseeol();
                    peg$silentFails--;
                    if (s9 === peg$FAILED) {
                      s8 = void 0;
                    } else {
                      peg$currPos = s8;
                      s8 = peg$FAILED;
                    }
                    if (s8 !== peg$FAILED) {
                      if (input.length > peg$currPos) {
                        s9 = input.charAt(peg$currPos);
                        peg$currPos++;
                      } else {
                        s9 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c83); }
                      }
                      if (s9 !== peg$FAILED) {
                        s7 = [s7, s8, s9];
                        s6 = s7;
                      } else {
                        peg$currPos = s6;
                        s6 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s6;
                      s6 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s6;
                    s6 = peg$FAILED;
                  }
                }
              } else {
                s5 = peg$FAILED;
              }
              if (s5 !== peg$FAILED) {
                s6 = [];
                s7 = peg$parsews();
                while (s7 !== peg$FAILED) {
                  s6.push(s7);
                  s7 = peg$parsews();
                }
                if (s6 !== peg$FAILED) {
                  s7 = peg$parserd();
                  if (s7 !== peg$FAILED) {
                    s1 = [s1, s2, s3, s4, s5, s6, s7];
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parsereference();
      }

      return s0;
    }

    function peg$parseld() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 123) {
        s0 = peg$c108;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c109); }
      }

      return s0;
    }

    function peg$parserd() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 125) {
        s0 = peg$c110;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c111); }
      }

      return s0;
    }

    function peg$parselb() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 91) {
        s0 = peg$c112;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c113); }
      }

      return s0;
    }

    function peg$parserb() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 93) {
        s0 = peg$c114;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c115); }
      }

      return s0;
    }

    function peg$parseeol() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 10) {
        s0 = peg$c116;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c117); }
      }
      if (s0 === peg$FAILED) {
        if (input.substr(peg$currPos, 2) === peg$c118) {
          s0 = peg$c118;
          peg$currPos += 2;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c119); }
        }
        if (s0 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 13) {
            s0 = peg$c120;
            peg$currPos++;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c121); }
          }
          if (s0 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 8232) {
              s0 = peg$c122;
              peg$currPos++;
            } else {
              s0 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c123); }
            }
            if (s0 === peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 8233) {
                s0 = peg$c124;
                peg$currPos++;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c125); }
              }
            }
          }
        }
      }

      return s0;
    }

    function peg$parsews() {
      var s0;

      if (peg$c126.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c127); }
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseeol();
      }

      return s0;
    }


      function makeInteger(arr) {
        return parseInt(arr.join(''), 10);
      }
      function withPosition(arr) {
        return arr.concat([['line', location().start.line], ['col', location().start.column]]);
      }


    peg$result = peg$startRuleFunction();

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail({ type: "end", description: "end of input" });
      }

      throw peg$buildException(
        null,
        peg$maxFailExpected,
        peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
        peg$maxFailPos < input.length
          ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
          : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
      );
    }
  }

  return {
    SyntaxError: peg$SyntaxError,
    parse:       peg$parse
  };
})();

  // expose parser methods
  dust.parse = parser.parse;

  return parser;
}));

}).call(this,require("1YiZ5S"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/dustjs-linkedin/lib/parser.js","/../node_modules/dustjs-linkedin/lib")
},{"./dust":4,"1YiZ5S":9,"buffer":6}],6:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

var base64 = require('base64-js')
var ieee754 = require('ieee754')

exports.Buffer = Buffer
exports.SlowBuffer = Buffer
exports.INSPECT_MAX_BYTES = 50
Buffer.poolSize = 8192

/**
 * If `Buffer._useTypedArrays`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (compatible down to IE6)
 */
Buffer._useTypedArrays = (function () {
  // Detect if browser supports Typed Arrays. Supported browsers are IE 10+, Firefox 4+,
  // Chrome 7+, Safari 5.1+, Opera 11.6+, iOS 4.2+. If the browser does not support adding
  // properties to `Uint8Array` instances, then that's the same as no `Uint8Array` support
  // because we need to be able to add all the node Buffer API methods. This is an issue
  // in Firefox 4-29. Now fixed: https://bugzilla.mozilla.org/show_bug.cgi?id=695438
  try {
    var buf = new ArrayBuffer(0)
    var arr = new Uint8Array(buf)
    arr.foo = function () { return 42 }
    return 42 === arr.foo() &&
        typeof arr.subarray === 'function' // Chrome 9-10 lack `subarray`
  } catch (e) {
    return false
  }
})()

/**
 * Class: Buffer
 * =============
 *
 * The Buffer constructor returns instances of `Uint8Array` that are augmented
 * with function properties for all the node `Buffer` API functions. We use
 * `Uint8Array` so that square bracket notation works as expected -- it returns
 * a single octet.
 *
 * By augmenting the instances, we can avoid modifying the `Uint8Array`
 * prototype.
 */
function Buffer (subject, encoding, noZero) {
  if (!(this instanceof Buffer))
    return new Buffer(subject, encoding, noZero)

  var type = typeof subject

  // Workaround: node's base64 implementation allows for non-padded strings
  // while base64-js does not.
  if (encoding === 'base64' && type === 'string') {
    subject = stringtrim(subject)
    while (subject.length % 4 !== 0) {
      subject = subject + '='
    }
  }

  // Find the length
  var length
  if (type === 'number')
    length = coerce(subject)
  else if (type === 'string')
    length = Buffer.byteLength(subject, encoding)
  else if (type === 'object')
    length = coerce(subject.length) // assume that object is array-like
  else
    throw new Error('First argument needs to be a number, array or string.')

  var buf
  if (Buffer._useTypedArrays) {
    // Preferred: Return an augmented `Uint8Array` instance for best performance
    buf = Buffer._augment(new Uint8Array(length))
  } else {
    // Fallback: Return THIS instance of Buffer (created by `new`)
    buf = this
    buf.length = length
    buf._isBuffer = true
  }

  var i
  if (Buffer._useTypedArrays && typeof subject.byteLength === 'number') {
    // Speed optimization -- use set if we're copying from a typed array
    buf._set(subject)
  } else if (isArrayish(subject)) {
    // Treat array-ish objects as a byte array
    for (i = 0; i < length; i++) {
      if (Buffer.isBuffer(subject))
        buf[i] = subject.readUInt8(i)
      else
        buf[i] = subject[i]
    }
  } else if (type === 'string') {
    buf.write(subject, 0, encoding)
  } else if (type === 'number' && !Buffer._useTypedArrays && !noZero) {
    for (i = 0; i < length; i++) {
      buf[i] = 0
    }
  }

  return buf
}

// STATIC METHODS
// ==============

Buffer.isEncoding = function (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.isBuffer = function (b) {
  return !!(b !== null && b !== undefined && b._isBuffer)
}

Buffer.byteLength = function (str, encoding) {
  var ret
  str = str + ''
  switch (encoding || 'utf8') {
    case 'hex':
      ret = str.length / 2
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8ToBytes(str).length
      break
    case 'ascii':
    case 'binary':
    case 'raw':
      ret = str.length
      break
    case 'base64':
      ret = base64ToBytes(str).length
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = str.length * 2
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.concat = function (list, totalLength) {
  assert(isArray(list), 'Usage: Buffer.concat(list, [totalLength])\n' +
      'list should be an Array.')

  if (list.length === 0) {
    return new Buffer(0)
  } else if (list.length === 1) {
    return list[0]
  }

  var i
  if (typeof totalLength !== 'number') {
    totalLength = 0
    for (i = 0; i < list.length; i++) {
      totalLength += list[i].length
    }
  }

  var buf = new Buffer(totalLength)
  var pos = 0
  for (i = 0; i < list.length; i++) {
    var item = list[i]
    item.copy(buf, pos)
    pos += item.length
  }
  return buf
}

// BUFFER INSTANCE METHODS
// =======================

function _hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  assert(strLen % 2 === 0, 'Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; i++) {
    var byte = parseInt(string.substr(i * 2, 2), 16)
    assert(!isNaN(byte), 'Invalid hex string')
    buf[offset + i] = byte
  }
  Buffer._charsWritten = i * 2
  return i
}

function _utf8Write (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(utf8ToBytes(string), buf, offset, length)
  return charsWritten
}

function _asciiWrite (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(asciiToBytes(string), buf, offset, length)
  return charsWritten
}

function _binaryWrite (buf, string, offset, length) {
  return _asciiWrite(buf, string, offset, length)
}

function _base64Write (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(base64ToBytes(string), buf, offset, length)
  return charsWritten
}

function _utf16leWrite (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(utf16leToBytes(string), buf, offset, length)
  return charsWritten
}

Buffer.prototype.write = function (string, offset, length, encoding) {
  // Support both (string, offset, length, encoding)
  // and the legacy (string, encoding, offset, length)
  if (isFinite(offset)) {
    if (!isFinite(length)) {
      encoding = length
      length = undefined
    }
  } else {  // legacy
    var swap = encoding
    encoding = offset
    offset = length
    length = swap
  }

  offset = Number(offset) || 0
  var remaining = this.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }
  encoding = String(encoding || 'utf8').toLowerCase()

  var ret
  switch (encoding) {
    case 'hex':
      ret = _hexWrite(this, string, offset, length)
      break
    case 'utf8':
    case 'utf-8':
      ret = _utf8Write(this, string, offset, length)
      break
    case 'ascii':
      ret = _asciiWrite(this, string, offset, length)
      break
    case 'binary':
      ret = _binaryWrite(this, string, offset, length)
      break
    case 'base64':
      ret = _base64Write(this, string, offset, length)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = _utf16leWrite(this, string, offset, length)
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.prototype.toString = function (encoding, start, end) {
  var self = this

  encoding = String(encoding || 'utf8').toLowerCase()
  start = Number(start) || 0
  end = (end !== undefined)
    ? Number(end)
    : end = self.length

  // Fastpath empty strings
  if (end === start)
    return ''

  var ret
  switch (encoding) {
    case 'hex':
      ret = _hexSlice(self, start, end)
      break
    case 'utf8':
    case 'utf-8':
      ret = _utf8Slice(self, start, end)
      break
    case 'ascii':
      ret = _asciiSlice(self, start, end)
      break
    case 'binary':
      ret = _binarySlice(self, start, end)
      break
    case 'base64':
      ret = _base64Slice(self, start, end)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = _utf16leSlice(self, start, end)
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.prototype.toJSON = function () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function (target, target_start, start, end) {
  var source = this

  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (!target_start) target_start = 0

  // Copy 0 bytes; we're done
  if (end === start) return
  if (target.length === 0 || source.length === 0) return

  // Fatal error conditions
  assert(end >= start, 'sourceEnd < sourceStart')
  assert(target_start >= 0 && target_start < target.length,
      'targetStart out of bounds')
  assert(start >= 0 && start < source.length, 'sourceStart out of bounds')
  assert(end >= 0 && end <= source.length, 'sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length)
    end = this.length
  if (target.length - target_start < end - start)
    end = target.length - target_start + start

  var len = end - start

  if (len < 100 || !Buffer._useTypedArrays) {
    for (var i = 0; i < len; i++)
      target[i + target_start] = this[i + start]
  } else {
    target._set(this.subarray(start, start + len), target_start)
  }
}

function _base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function _utf8Slice (buf, start, end) {
  var res = ''
  var tmp = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    if (buf[i] <= 0x7F) {
      res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i])
      tmp = ''
    } else {
      tmp += '%' + buf[i].toString(16)
    }
  }

  return res + decodeUtf8Char(tmp)
}

function _asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++)
    ret += String.fromCharCode(buf[i])
  return ret
}

function _binarySlice (buf, start, end) {
  return _asciiSlice(buf, start, end)
}

function _hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; i++) {
    out += toHex(buf[i])
  }
  return out
}

function _utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i+1] * 256)
  }
  return res
}

Buffer.prototype.slice = function (start, end) {
  var len = this.length
  start = clamp(start, len, 0)
  end = clamp(end, len, len)

  if (Buffer._useTypedArrays) {
    return Buffer._augment(this.subarray(start, end))
  } else {
    var sliceLen = end - start
    var newBuf = new Buffer(sliceLen, undefined, true)
    for (var i = 0; i < sliceLen; i++) {
      newBuf[i] = this[i + start]
    }
    return newBuf
  }
}

// `get` will be removed in Node 0.13+
Buffer.prototype.get = function (offset) {
  console.log('.get() is deprecated. Access using array indexes instead.')
  return this.readUInt8(offset)
}

// `set` will be removed in Node 0.13+
Buffer.prototype.set = function (v, offset) {
  console.log('.set() is deprecated. Access using array indexes instead.')
  return this.writeUInt8(v, offset)
}

Buffer.prototype.readUInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'Trying to read beyond buffer length')
  }

  if (offset >= this.length)
    return

  return this[offset]
}

function _readUInt16 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val
  if (littleEndian) {
    val = buf[offset]
    if (offset + 1 < len)
      val |= buf[offset + 1] << 8
  } else {
    val = buf[offset] << 8
    if (offset + 1 < len)
      val |= buf[offset + 1]
  }
  return val
}

Buffer.prototype.readUInt16LE = function (offset, noAssert) {
  return _readUInt16(this, offset, true, noAssert)
}

Buffer.prototype.readUInt16BE = function (offset, noAssert) {
  return _readUInt16(this, offset, false, noAssert)
}

function _readUInt32 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val
  if (littleEndian) {
    if (offset + 2 < len)
      val = buf[offset + 2] << 16
    if (offset + 1 < len)
      val |= buf[offset + 1] << 8
    val |= buf[offset]
    if (offset + 3 < len)
      val = val + (buf[offset + 3] << 24 >>> 0)
  } else {
    if (offset + 1 < len)
      val = buf[offset + 1] << 16
    if (offset + 2 < len)
      val |= buf[offset + 2] << 8
    if (offset + 3 < len)
      val |= buf[offset + 3]
    val = val + (buf[offset] << 24 >>> 0)
  }
  return val
}

Buffer.prototype.readUInt32LE = function (offset, noAssert) {
  return _readUInt32(this, offset, true, noAssert)
}

Buffer.prototype.readUInt32BE = function (offset, noAssert) {
  return _readUInt32(this, offset, false, noAssert)
}

Buffer.prototype.readInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null,
        'missing offset')
    assert(offset < this.length, 'Trying to read beyond buffer length')
  }

  if (offset >= this.length)
    return

  var neg = this[offset] & 0x80
  if (neg)
    return (0xff - this[offset] + 1) * -1
  else
    return this[offset]
}

function _readInt16 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val = _readUInt16(buf, offset, littleEndian, true)
  var neg = val & 0x8000
  if (neg)
    return (0xffff - val + 1) * -1
  else
    return val
}

Buffer.prototype.readInt16LE = function (offset, noAssert) {
  return _readInt16(this, offset, true, noAssert)
}

Buffer.prototype.readInt16BE = function (offset, noAssert) {
  return _readInt16(this, offset, false, noAssert)
}

function _readInt32 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val = _readUInt32(buf, offset, littleEndian, true)
  var neg = val & 0x80000000
  if (neg)
    return (0xffffffff - val + 1) * -1
  else
    return val
}

Buffer.prototype.readInt32LE = function (offset, noAssert) {
  return _readInt32(this, offset, true, noAssert)
}

Buffer.prototype.readInt32BE = function (offset, noAssert) {
  return _readInt32(this, offset, false, noAssert)
}

function _readFloat (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  return ieee754.read(buf, offset, littleEndian, 23, 4)
}

Buffer.prototype.readFloatLE = function (offset, noAssert) {
  return _readFloat(this, offset, true, noAssert)
}

Buffer.prototype.readFloatBE = function (offset, noAssert) {
  return _readFloat(this, offset, false, noAssert)
}

function _readDouble (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset + 7 < buf.length, 'Trying to read beyond buffer length')
  }

  return ieee754.read(buf, offset, littleEndian, 52, 8)
}

Buffer.prototype.readDoubleLE = function (offset, noAssert) {
  return _readDouble(this, offset, true, noAssert)
}

Buffer.prototype.readDoubleBE = function (offset, noAssert) {
  return _readDouble(this, offset, false, noAssert)
}

Buffer.prototype.writeUInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'trying to write beyond buffer length')
    verifuint(value, 0xff)
  }

  if (offset >= this.length) return

  this[offset] = value
}

function _writeUInt16 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'trying to write beyond buffer length')
    verifuint(value, 0xffff)
  }

  var len = buf.length
  if (offset >= len)
    return

  for (var i = 0, j = Math.min(len - offset, 2); i < j; i++) {
    buf[offset + i] =
        (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
            (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function (value, offset, noAssert) {
  _writeUInt16(this, value, offset, true, noAssert)
}

Buffer.prototype.writeUInt16BE = function (value, offset, noAssert) {
  _writeUInt16(this, value, offset, false, noAssert)
}

function _writeUInt32 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'trying to write beyond buffer length')
    verifuint(value, 0xffffffff)
  }

  var len = buf.length
  if (offset >= len)
    return

  for (var i = 0, j = Math.min(len - offset, 4); i < j; i++) {
    buf[offset + i] =
        (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function (value, offset, noAssert) {
  _writeUInt32(this, value, offset, true, noAssert)
}

Buffer.prototype.writeUInt32BE = function (value, offset, noAssert) {
  _writeUInt32(this, value, offset, false, noAssert)
}

Buffer.prototype.writeInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7f, -0x80)
  }

  if (offset >= this.length)
    return

  if (value >= 0)
    this.writeUInt8(value, offset, noAssert)
  else
    this.writeUInt8(0xff + value + 1, offset, noAssert)
}

function _writeInt16 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7fff, -0x8000)
  }

  var len = buf.length
  if (offset >= len)
    return

  if (value >= 0)
    _writeUInt16(buf, value, offset, littleEndian, noAssert)
  else
    _writeUInt16(buf, 0xffff + value + 1, offset, littleEndian, noAssert)
}

Buffer.prototype.writeInt16LE = function (value, offset, noAssert) {
  _writeInt16(this, value, offset, true, noAssert)
}

Buffer.prototype.writeInt16BE = function (value, offset, noAssert) {
  _writeInt16(this, value, offset, false, noAssert)
}

function _writeInt32 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7fffffff, -0x80000000)
  }

  var len = buf.length
  if (offset >= len)
    return

  if (value >= 0)
    _writeUInt32(buf, value, offset, littleEndian, noAssert)
  else
    _writeUInt32(buf, 0xffffffff + value + 1, offset, littleEndian, noAssert)
}

Buffer.prototype.writeInt32LE = function (value, offset, noAssert) {
  _writeInt32(this, value, offset, true, noAssert)
}

Buffer.prototype.writeInt32BE = function (value, offset, noAssert) {
  _writeInt32(this, value, offset, false, noAssert)
}

function _writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length')
    verifIEEE754(value, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }

  var len = buf.length
  if (offset >= len)
    return

  ieee754.write(buf, value, offset, littleEndian, 23, 4)
}

Buffer.prototype.writeFloatLE = function (value, offset, noAssert) {
  _writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function (value, offset, noAssert) {
  _writeFloat(this, value, offset, false, noAssert)
}

function _writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 7 < buf.length,
        'Trying to write beyond buffer length')
    verifIEEE754(value, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }

  var len = buf.length
  if (offset >= len)
    return

  ieee754.write(buf, value, offset, littleEndian, 52, 8)
}

Buffer.prototype.writeDoubleLE = function (value, offset, noAssert) {
  _writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function (value, offset, noAssert) {
  _writeDouble(this, value, offset, false, noAssert)
}

// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill = function (value, start, end) {
  if (!value) value = 0
  if (!start) start = 0
  if (!end) end = this.length

  if (typeof value === 'string') {
    value = value.charCodeAt(0)
  }

  assert(typeof value === 'number' && !isNaN(value), 'value is not a number')
  assert(end >= start, 'end < start')

  // Fill 0 bytes; we're done
  if (end === start) return
  if (this.length === 0) return

  assert(start >= 0 && start < this.length, 'start out of bounds')
  assert(end >= 0 && end <= this.length, 'end out of bounds')

  for (var i = start; i < end; i++) {
    this[i] = value
  }
}

Buffer.prototype.inspect = function () {
  var out = []
  var len = this.length
  for (var i = 0; i < len; i++) {
    out[i] = toHex(this[i])
    if (i === exports.INSPECT_MAX_BYTES) {
      out[i + 1] = '...'
      break
    }
  }
  return '<Buffer ' + out.join(' ') + '>'
}

/**
 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
 */
Buffer.prototype.toArrayBuffer = function () {
  if (typeof Uint8Array !== 'undefined') {
    if (Buffer._useTypedArrays) {
      return (new Buffer(this)).buffer
    } else {
      var buf = new Uint8Array(this.length)
      for (var i = 0, len = buf.length; i < len; i += 1)
        buf[i] = this[i]
      return buf.buffer
    }
  } else {
    throw new Error('Buffer.toArrayBuffer not supported in this browser')
  }
}

// HELPER FUNCTIONS
// ================

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

var BP = Buffer.prototype

/**
 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
 */
Buffer._augment = function (arr) {
  arr._isBuffer = true

  // save reference to original Uint8Array get/set methods before overwriting
  arr._get = arr.get
  arr._set = arr.set

  // deprecated, will be removed in node 0.13+
  arr.get = BP.get
  arr.set = BP.set

  arr.write = BP.write
  arr.toString = BP.toString
  arr.toLocaleString = BP.toString
  arr.toJSON = BP.toJSON
  arr.copy = BP.copy
  arr.slice = BP.slice
  arr.readUInt8 = BP.readUInt8
  arr.readUInt16LE = BP.readUInt16LE
  arr.readUInt16BE = BP.readUInt16BE
  arr.readUInt32LE = BP.readUInt32LE
  arr.readUInt32BE = BP.readUInt32BE
  arr.readInt8 = BP.readInt8
  arr.readInt16LE = BP.readInt16LE
  arr.readInt16BE = BP.readInt16BE
  arr.readInt32LE = BP.readInt32LE
  arr.readInt32BE = BP.readInt32BE
  arr.readFloatLE = BP.readFloatLE
  arr.readFloatBE = BP.readFloatBE
  arr.readDoubleLE = BP.readDoubleLE
  arr.readDoubleBE = BP.readDoubleBE
  arr.writeUInt8 = BP.writeUInt8
  arr.writeUInt16LE = BP.writeUInt16LE
  arr.writeUInt16BE = BP.writeUInt16BE
  arr.writeUInt32LE = BP.writeUInt32LE
  arr.writeUInt32BE = BP.writeUInt32BE
  arr.writeInt8 = BP.writeInt8
  arr.writeInt16LE = BP.writeInt16LE
  arr.writeInt16BE = BP.writeInt16BE
  arr.writeInt32LE = BP.writeInt32LE
  arr.writeInt32BE = BP.writeInt32BE
  arr.writeFloatLE = BP.writeFloatLE
  arr.writeFloatBE = BP.writeFloatBE
  arr.writeDoubleLE = BP.writeDoubleLE
  arr.writeDoubleBE = BP.writeDoubleBE
  arr.fill = BP.fill
  arr.inspect = BP.inspect
  arr.toArrayBuffer = BP.toArrayBuffer

  return arr
}

// slice(start, end)
function clamp (index, len, defaultValue) {
  if (typeof index !== 'number') return defaultValue
  index = ~~index;  // Coerce to integer.
  if (index >= len) return len
  if (index >= 0) return index
  index += len
  if (index >= 0) return index
  return 0
}

function coerce (length) {
  // Coerce length to a number (possibly NaN), round up
  // in case it's fractional (e.g. 123.456) then do a
  // double negate to coerce a NaN to 0. Easy, right?
  length = ~~Math.ceil(+length)
  return length < 0 ? 0 : length
}

function isArray (subject) {
  return (Array.isArray || function (subject) {
    return Object.prototype.toString.call(subject) === '[object Array]'
  })(subject)
}

function isArrayish (subject) {
  return isArray(subject) || Buffer.isBuffer(subject) ||
      subject && typeof subject === 'object' &&
      typeof subject.length === 'number'
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    var b = str.charCodeAt(i)
    if (b <= 0x7F)
      byteArray.push(str.charCodeAt(i))
    else {
      var start = i
      if (b >= 0xD800 && b <= 0xDFFF) i++
      var h = encodeURIComponent(str.slice(start, i+1)).substr(1).split('%')
      for (var j = 0; j < h.length; j++)
        byteArray.push(parseInt(h[j], 16))
    }
  }
  return byteArray
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(str)
}

function blitBuffer (src, dst, offset, length) {
  var pos
  for (var i = 0; i < length; i++) {
    if ((i + offset >= dst.length) || (i >= src.length))
      break
    dst[i + offset] = src[i]
  }
  return i
}

function decodeUtf8Char (str) {
  try {
    return decodeURIComponent(str)
  } catch (err) {
    return String.fromCharCode(0xFFFD) // UTF 8 invalid char
  }
}

/*
 * We have to make sure that the value is a valid integer. This means that it
 * is non-negative. It has no fractional component and that it does not
 * exceed the maximum allowed value.
 */
function verifuint (value, max) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value >= 0, 'specified a negative value for writing an unsigned value')
  assert(value <= max, 'value is larger than maximum value for type')
  assert(Math.floor(value) === value, 'value has a fractional component')
}

function verifsint (value, max, min) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value <= max, 'value larger than maximum allowed value')
  assert(value >= min, 'value smaller than minimum allowed value')
  assert(Math.floor(value) === value, 'value has a fractional component')
}

function verifIEEE754 (value, max, min) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value <= max, 'value larger than maximum allowed value')
  assert(value >= min, 'value smaller than minimum allowed value')
}

function assert (test, message) {
  if (!test) throw new Error(message || 'Failed assertion')
}

}).call(this,require("1YiZ5S"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/index.js","/../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer")
},{"1YiZ5S":9,"base64-js":7,"buffer":6,"ieee754":8}],7:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

;(function (exports) {
	'use strict';

  var Arr = (typeof Uint8Array !== 'undefined')
    ? Uint8Array
    : Array

	var PLUS   = '+'.charCodeAt(0)
	var SLASH  = '/'.charCodeAt(0)
	var NUMBER = '0'.charCodeAt(0)
	var LOWER  = 'a'.charCodeAt(0)
	var UPPER  = 'A'.charCodeAt(0)
	var PLUS_URL_SAFE = '-'.charCodeAt(0)
	var SLASH_URL_SAFE = '_'.charCodeAt(0)

	function decode (elt) {
		var code = elt.charCodeAt(0)
		if (code === PLUS ||
		    code === PLUS_URL_SAFE)
			return 62 // '+'
		if (code === SLASH ||
		    code === SLASH_URL_SAFE)
			return 63 // '/'
		if (code < NUMBER)
			return -1 //no match
		if (code < NUMBER + 10)
			return code - NUMBER + 26 + 26
		if (code < UPPER + 26)
			return code - UPPER
		if (code < LOWER + 26)
			return code - LOWER + 26
	}

	function b64ToByteArray (b64) {
		var i, j, l, tmp, placeHolders, arr

		if (b64.length % 4 > 0) {
			throw new Error('Invalid string. Length must be a multiple of 4')
		}

		// the number of equal signs (place holders)
		// if there are two placeholders, than the two characters before it
		// represent one byte
		// if there is only one, then the three characters before it represent 2 bytes
		// this is just a cheap hack to not do indexOf twice
		var len = b64.length
		placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

		// base64 is 4/3 + up to two characters of the original data
		arr = new Arr(b64.length * 3 / 4 - placeHolders)

		// if there are placeholders, only get up to the last complete 4 chars
		l = placeHolders > 0 ? b64.length - 4 : b64.length

		var L = 0

		function push (v) {
			arr[L++] = v
		}

		for (i = 0, j = 0; i < l; i += 4, j += 3) {
			tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
			push((tmp & 0xFF0000) >> 16)
			push((tmp & 0xFF00) >> 8)
			push(tmp & 0xFF)
		}

		if (placeHolders === 2) {
			tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
			push(tmp & 0xFF)
		} else if (placeHolders === 1) {
			tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
			push((tmp >> 8) & 0xFF)
			push(tmp & 0xFF)
		}

		return arr
	}

	function uint8ToBase64 (uint8) {
		var i,
			extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
			output = "",
			temp, length

		function encode (num) {
			return lookup.charAt(num)
		}

		function tripletToBase64 (num) {
			return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
		}

		// go through the array every three bytes, we'll deal with trailing stuff later
		for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
			temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
			output += tripletToBase64(temp)
		}

		// pad the end with zeros, but make sure to not forget the extra bytes
		switch (extraBytes) {
			case 1:
				temp = uint8[uint8.length - 1]
				output += encode(temp >> 2)
				output += encode((temp << 4) & 0x3F)
				output += '=='
				break
			case 2:
				temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
				output += encode(temp >> 10)
				output += encode((temp >> 4) & 0x3F)
				output += encode((temp << 2) & 0x3F)
				output += '='
				break
		}

		return output
	}

	exports.toByteArray = b64ToByteArray
	exports.fromByteArray = uint8ToBase64
}(typeof exports === 'undefined' ? (this.base64js = {}) : exports))

}).call(this,require("1YiZ5S"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib/b64.js","/../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib")
},{"1YiZ5S":9,"buffer":6}],8:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

}).call(this,require("1YiZ5S"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/ieee754/index.js","/../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/ieee754")
},{"1YiZ5S":9,"buffer":6}],9:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

}).call(this,require("1YiZ5S"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/gulp-browserify/node_modules/browserify/node_modules/process/browser.js","/../node_modules/gulp-browserify/node_modules/browserify/node_modules/process")
},{"1YiZ5S":9,"buffer":6}],10:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
// vim:ts=4:sts=4:sw=4:
/*!
 *
 * Copyright 2009-2012 Kris Kowal under the terms of the MIT
 * license found at http://github.com/kriskowal/q/raw/master/LICENSE
 *
 * With parts by Tyler Close
 * Copyright 2007-2009 Tyler Close under the terms of the MIT X license found
 * at http://www.opensource.org/licenses/mit-license.html
 * Forked at ref_send.js version: 2009-05-11
 *
 * With parts by Mark Miller
 * Copyright (C) 2011 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

(function (definition) {
    "use strict";

    // This file will function properly as a <script> tag, or a module
    // using CommonJS and NodeJS or RequireJS module formats.  In
    // Common/Node/RequireJS, the module exports the Q API and when
    // executed as a simple <script>, it creates a Q global instead.

    // Montage Require
    if (typeof bootstrap === "function") {
        bootstrap("promise", definition);

    // CommonJS
    } else if (typeof exports === "object" && typeof module === "object") {
        module.exports = definition();

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
        define(definition);

    // SES (Secure EcmaScript)
    } else if (typeof ses !== "undefined") {
        if (!ses.ok()) {
            return;
        } else {
            ses.makeQ = definition;
        }

    // <script>
    } else if (typeof window !== "undefined" || typeof self !== "undefined") {
        // Prefer window over self for add-on scripts. Use self for
        // non-windowed contexts.
        var global = typeof window !== "undefined" ? window : self;

        // Get the `window` object, save the previous Q global
        // and initialize Q as a global.
        var previousQ = global.Q;
        global.Q = definition();

        // Add a noConflict function so Q can be removed from the
        // global namespace.
        global.Q.noConflict = function () {
            global.Q = previousQ;
            return this;
        };

    } else {
        throw new Error("This environment was not anticipated by Q. Please file a bug.");
    }

})(function () {
"use strict";

var hasStacks = false;
try {
    throw new Error();
} catch (e) {
    hasStacks = !!e.stack;
}

// All code after this point will be filtered from stack traces reported
// by Q.
var qStartingLine = captureLine();
var qFileName;

// shims

// used for fallback in "allResolved"
var noop = function () {};

// Use the fastest possible means to execute a task in a future turn
// of the event loop.
var nextTick =(function () {
    // linked list of tasks (single, with head node)
    var head = {task: void 0, next: null};
    var tail = head;
    var flushing = false;
    var requestTick = void 0;
    var isNodeJS = false;
    // queue for late tasks, used by unhandled rejection tracking
    var laterQueue = [];

    function flush() {
        /* jshint loopfunc: true */
        var task, domain;

        while (head.next) {
            head = head.next;
            task = head.task;
            head.task = void 0;
            domain = head.domain;

            if (domain) {
                head.domain = void 0;
                domain.enter();
            }
            runSingle(task, domain);

        }
        while (laterQueue.length) {
            task = laterQueue.pop();
            runSingle(task);
        }
        flushing = false;
    }
    // runs a single function in the async queue
    function runSingle(task, domain) {
        try {
            task();

        } catch (e) {
            if (isNodeJS) {
                // In node, uncaught exceptions are considered fatal errors.
                // Re-throw them synchronously to interrupt flushing!

                // Ensure continuation if the uncaught exception is suppressed
                // listening "uncaughtException" events (as domains does).
                // Continue in next event to avoid tick recursion.
                if (domain) {
                    domain.exit();
                }
                setTimeout(flush, 0);
                if (domain) {
                    domain.enter();
                }

                throw e;

            } else {
                // In browsers, uncaught exceptions are not fatal.
                // Re-throw them asynchronously to avoid slow-downs.
                setTimeout(function () {
                    throw e;
                }, 0);
            }
        }

        if (domain) {
            domain.exit();
        }
    }

    nextTick = function (task) {
        tail = tail.next = {
            task: task,
            domain: isNodeJS && process.domain,
            next: null
        };

        if (!flushing) {
            flushing = true;
            requestTick();
        }
    };

    if (typeof process === "object" &&
        process.toString() === "[object process]" && process.nextTick) {
        // Ensure Q is in a real Node environment, with a `process.nextTick`.
        // To see through fake Node environments:
        // * Mocha test runner - exposes a `process` global without a `nextTick`
        // * Browserify - exposes a `process.nexTick` function that uses
        //   `setTimeout`. In this case `setImmediate` is preferred because
        //    it is faster. Browserify's `process.toString()` yields
        //   "[object Object]", while in a real Node environment
        //   `process.nextTick()` yields "[object process]".
        isNodeJS = true;

        requestTick = function () {
            process.nextTick(flush);
        };

    } else if (typeof setImmediate === "function") {
        // In IE10, Node.js 0.9+, or https://github.com/NobleJS/setImmediate
        if (typeof window !== "undefined") {
            requestTick = setImmediate.bind(window, flush);
        } else {
            requestTick = function () {
                setImmediate(flush);
            };
        }

    } else if (typeof MessageChannel !== "undefined") {
        // modern browsers
        // http://www.nonblocking.io/2011/06/windownexttick.html
        var channel = new MessageChannel();
        // At least Safari Version 6.0.5 (8536.30.1) intermittently cannot create
        // working message ports the first time a page loads.
        channel.port1.onmessage = function () {
            requestTick = requestPortTick;
            channel.port1.onmessage = flush;
            flush();
        };
        var requestPortTick = function () {
            // Opera requires us to provide a message payload, regardless of
            // whether we use it.
            channel.port2.postMessage(0);
        };
        requestTick = function () {
            setTimeout(flush, 0);
            requestPortTick();
        };

    } else {
        // old browsers
        requestTick = function () {
            setTimeout(flush, 0);
        };
    }
    // runs a task after all other tasks have been run
    // this is useful for unhandled rejection tracking that needs to happen
    // after all `then`d tasks have been run.
    nextTick.runAfter = function (task) {
        laterQueue.push(task);
        if (!flushing) {
            flushing = true;
            requestTick();
        }
    };
    return nextTick;
})();

// Attempt to make generics safe in the face of downstream
// modifications.
// There is no situation where this is necessary.
// If you need a security guarantee, these primordials need to be
// deeply frozen anyway, and if you don’t need a security guarantee,
// this is just plain paranoid.
// However, this **might** have the nice side-effect of reducing the size of
// the minified code by reducing x.call() to merely x()
// See Mark Miller’s explanation of what this does.
// http://wiki.ecmascript.org/doku.php?id=conventions:safe_meta_programming
var call = Function.call;
function uncurryThis(f) {
    return function () {
        return call.apply(f, arguments);
    };
}
// This is equivalent, but slower:
// uncurryThis = Function_bind.bind(Function_bind.call);
// http://jsperf.com/uncurrythis

var array_slice = uncurryThis(Array.prototype.slice);

var array_reduce = uncurryThis(
    Array.prototype.reduce || function (callback, basis) {
        var index = 0,
            length = this.length;
        // concerning the initial value, if one is not provided
        if (arguments.length === 1) {
            // seek to the first value in the array, accounting
            // for the possibility that is is a sparse array
            do {
                if (index in this) {
                    basis = this[index++];
                    break;
                }
                if (++index >= length) {
                    throw new TypeError();
                }
            } while (1);
        }
        // reduce
        for (; index < length; index++) {
            // account for the possibility that the array is sparse
            if (index in this) {
                basis = callback(basis, this[index], index);
            }
        }
        return basis;
    }
);

var array_indexOf = uncurryThis(
    Array.prototype.indexOf || function (value) {
        // not a very good shim, but good enough for our one use of it
        for (var i = 0; i < this.length; i++) {
            if (this[i] === value) {
                return i;
            }
        }
        return -1;
    }
);

var array_map = uncurryThis(
    Array.prototype.map || function (callback, thisp) {
        var self = this;
        var collect = [];
        array_reduce(self, function (undefined, value, index) {
            collect.push(callback.call(thisp, value, index, self));
        }, void 0);
        return collect;
    }
);

var object_create = Object.create || function (prototype) {
    function Type() { }
    Type.prototype = prototype;
    return new Type();
};

var object_hasOwnProperty = uncurryThis(Object.prototype.hasOwnProperty);

var object_keys = Object.keys || function (object) {
    var keys = [];
    for (var key in object) {
        if (object_hasOwnProperty(object, key)) {
            keys.push(key);
        }
    }
    return keys;
};

var object_toString = uncurryThis(Object.prototype.toString);

function isObject(value) {
    return value === Object(value);
}

// generator related shims

// FIXME: Remove this function once ES6 generators are in SpiderMonkey.
function isStopIteration(exception) {
    return (
        object_toString(exception) === "[object StopIteration]" ||
        exception instanceof QReturnValue
    );
}

// FIXME: Remove this helper and Q.return once ES6 generators are in
// SpiderMonkey.
var QReturnValue;
if (typeof ReturnValue !== "undefined") {
    QReturnValue = ReturnValue;
} else {
    QReturnValue = function (value) {
        this.value = value;
    };
}

// long stack traces

var STACK_JUMP_SEPARATOR = "From previous event:";

function makeStackTraceLong(error, promise) {
    // If possible, transform the error stack trace by removing Node and Q
    // cruft, then concatenating with the stack trace of `promise`. See #57.
    if (hasStacks &&
        promise.stack &&
        typeof error === "object" &&
        error !== null &&
        error.stack &&
        error.stack.indexOf(STACK_JUMP_SEPARATOR) === -1
    ) {
        var stacks = [];
        for (var p = promise; !!p; p = p.source) {
            if (p.stack) {
                stacks.unshift(p.stack);
            }
        }
        stacks.unshift(error.stack);

        var concatedStacks = stacks.join("\n" + STACK_JUMP_SEPARATOR + "\n");
        error.stack = filterStackString(concatedStacks);
    }
}

function filterStackString(stackString) {
    var lines = stackString.split("\n");
    var desiredLines = [];
    for (var i = 0; i < lines.length; ++i) {
        var line = lines[i];

        if (!isInternalFrame(line) && !isNodeFrame(line) && line) {
            desiredLines.push(line);
        }
    }
    return desiredLines.join("\n");
}

function isNodeFrame(stackLine) {
    return stackLine.indexOf("(module.js:") !== -1 ||
           stackLine.indexOf("(node.js:") !== -1;
}

function getFileNameAndLineNumber(stackLine) {
    // Named functions: "at functionName (filename:lineNumber:columnNumber)"
    // In IE10 function name can have spaces ("Anonymous function") O_o
    var attempt1 = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(stackLine);
    if (attempt1) {
        return [attempt1[1], Number(attempt1[2])];
    }

    // Anonymous functions: "at filename:lineNumber:columnNumber"
    var attempt2 = /at ([^ ]+):(\d+):(?:\d+)$/.exec(stackLine);
    if (attempt2) {
        return [attempt2[1], Number(attempt2[2])];
    }

    // Firefox style: "function@filename:lineNumber or @filename:lineNumber"
    var attempt3 = /.*@(.+):(\d+)$/.exec(stackLine);
    if (attempt3) {
        return [attempt3[1], Number(attempt3[2])];
    }
}

function isInternalFrame(stackLine) {
    var fileNameAndLineNumber = getFileNameAndLineNumber(stackLine);

    if (!fileNameAndLineNumber) {
        return false;
    }

    var fileName = fileNameAndLineNumber[0];
    var lineNumber = fileNameAndLineNumber[1];

    return fileName === qFileName &&
        lineNumber >= qStartingLine &&
        lineNumber <= qEndingLine;
}

// discover own file name and line number range for filtering stack
// traces
function captureLine() {
    if (!hasStacks) {
        return;
    }

    try {
        throw new Error();
    } catch (e) {
        var lines = e.stack.split("\n");
        var firstLine = lines[0].indexOf("@") > 0 ? lines[1] : lines[2];
        var fileNameAndLineNumber = getFileNameAndLineNumber(firstLine);
        if (!fileNameAndLineNumber) {
            return;
        }

        qFileName = fileNameAndLineNumber[0];
        return fileNameAndLineNumber[1];
    }
}

function deprecate(callback, name, alternative) {
    return function () {
        if (typeof console !== "undefined" &&
            typeof console.warn === "function") {
            console.warn(name + " is deprecated, use " + alternative +
                         " instead.", new Error("").stack);
        }
        return callback.apply(callback, arguments);
    };
}

// end of shims
// beginning of real work

/**
 * Constructs a promise for an immediate reference, passes promises through, or
 * coerces promises from different systems.
 * @param value immediate reference or promise
 */
function Q(value) {
    // If the object is already a Promise, return it directly.  This enables
    // the resolve function to both be used to created references from objects,
    // but to tolerably coerce non-promises to promises.
    if (value instanceof Promise) {
        return value;
    }

    // assimilate thenables
    if (isPromiseAlike(value)) {
        return coerce(value);
    } else {
        return fulfill(value);
    }
}
Q.resolve = Q;

/**
 * Performs a task in a future turn of the event loop.
 * @param {Function} task
 */
Q.nextTick = nextTick;

/**
 * Controls whether or not long stack traces will be on
 */
Q.longStackSupport = false;

// enable long stacks if Q_DEBUG is set
if (typeof process === "object" && process && process.env && process.env.Q_DEBUG) {
    Q.longStackSupport = true;
}

/**
 * Constructs a {promise, resolve, reject} object.
 *
 * `resolve` is a callback to invoke with a more resolved value for the
 * promise. To fulfill the promise, invoke `resolve` with any value that is
 * not a thenable. To reject the promise, invoke `resolve` with a rejected
 * thenable, or invoke `reject` with the reason directly. To resolve the
 * promise to another thenable, thus putting it in the same state, invoke
 * `resolve` with that other thenable.
 */
Q.defer = defer;
function defer() {
    // if "messages" is an "Array", that indicates that the promise has not yet
    // been resolved.  If it is "undefined", it has been resolved.  Each
    // element of the messages array is itself an array of complete arguments to
    // forward to the resolved promise.  We coerce the resolution value to a
    // promise using the `resolve` function because it handles both fully
    // non-thenable values and other thenables gracefully.
    var messages = [], progressListeners = [], resolvedPromise;

    var deferred = object_create(defer.prototype);
    var promise = object_create(Promise.prototype);

    promise.promiseDispatch = function (resolve, op, operands) {
        var args = array_slice(arguments);
        if (messages) {
            messages.push(args);
            if (op === "when" && operands[1]) { // progress operand
                progressListeners.push(operands[1]);
            }
        } else {
            Q.nextTick(function () {
                resolvedPromise.promiseDispatch.apply(resolvedPromise, args);
            });
        }
    };

    // XXX deprecated
    promise.valueOf = function () {
        if (messages) {
            return promise;
        }
        var nearerValue = nearer(resolvedPromise);
        if (isPromise(nearerValue)) {
            resolvedPromise = nearerValue; // shorten chain
        }
        return nearerValue;
    };

    promise.inspect = function () {
        if (!resolvedPromise) {
            return { state: "pending" };
        }
        return resolvedPromise.inspect();
    };

    if (Q.longStackSupport && hasStacks) {
        try {
            throw new Error();
        } catch (e) {
            // NOTE: don't try to use `Error.captureStackTrace` or transfer the
            // accessor around; that causes memory leaks as per GH-111. Just
            // reify the stack trace as a string ASAP.
            //
            // At the same time, cut off the first line; it's always just
            // "[object Promise]\n", as per the `toString`.
            promise.stack = e.stack.substring(e.stack.indexOf("\n") + 1);
        }
    }

    // NOTE: we do the checks for `resolvedPromise` in each method, instead of
    // consolidating them into `become`, since otherwise we'd create new
    // promises with the lines `become(whatever(value))`. See e.g. GH-252.

    function become(newPromise) {
        resolvedPromise = newPromise;
        promise.source = newPromise;

        array_reduce(messages, function (undefined, message) {
            Q.nextTick(function () {
                newPromise.promiseDispatch.apply(newPromise, message);
            });
        }, void 0);

        messages = void 0;
        progressListeners = void 0;
    }

    deferred.promise = promise;
    deferred.resolve = function (value) {
        if (resolvedPromise) {
            return;
        }

        become(Q(value));
    };

    deferred.fulfill = function (value) {
        if (resolvedPromise) {
            return;
        }

        become(fulfill(value));
    };
    deferred.reject = function (reason) {
        if (resolvedPromise) {
            return;
        }

        become(reject(reason));
    };
    deferred.notify = function (progress) {
        if (resolvedPromise) {
            return;
        }

        array_reduce(progressListeners, function (undefined, progressListener) {
            Q.nextTick(function () {
                progressListener(progress);
            });
        }, void 0);
    };

    return deferred;
}

/**
 * Creates a Node-style callback that will resolve or reject the deferred
 * promise.
 * @returns a nodeback
 */
defer.prototype.makeNodeResolver = function () {
    var self = this;
    return function (error, value) {
        if (error) {
            self.reject(error);
        } else if (arguments.length > 2) {
            self.resolve(array_slice(arguments, 1));
        } else {
            self.resolve(value);
        }
    };
};

/**
 * @param resolver {Function} a function that returns nothing and accepts
 * the resolve, reject, and notify functions for a deferred.
 * @returns a promise that may be resolved with the given resolve and reject
 * functions, or rejected by a thrown exception in resolver
 */
Q.Promise = promise; // ES6
Q.promise = promise;
function promise(resolver) {
    if (typeof resolver !== "function") {
        throw new TypeError("resolver must be a function.");
    }
    var deferred = defer();
    try {
        resolver(deferred.resolve, deferred.reject, deferred.notify);
    } catch (reason) {
        deferred.reject(reason);
    }
    return deferred.promise;
}

promise.race = race; // ES6
promise.all = all; // ES6
promise.reject = reject; // ES6
promise.resolve = Q; // ES6

// XXX experimental.  This method is a way to denote that a local value is
// serializable and should be immediately dispatched to a remote upon request,
// instead of passing a reference.
Q.passByCopy = function (object) {
    //freeze(object);
    //passByCopies.set(object, true);
    return object;
};

Promise.prototype.passByCopy = function () {
    //freeze(object);
    //passByCopies.set(object, true);
    return this;
};

/**
 * If two promises eventually fulfill to the same value, promises that value,
 * but otherwise rejects.
 * @param x {Any*}
 * @param y {Any*}
 * @returns {Any*} a promise for x and y if they are the same, but a rejection
 * otherwise.
 *
 */
Q.join = function (x, y) {
    return Q(x).join(y);
};

Promise.prototype.join = function (that) {
    return Q([this, that]).spread(function (x, y) {
        if (x === y) {
            // TODO: "===" should be Object.is or equiv
            return x;
        } else {
            throw new Error("Can't join: not the same: " + x + " " + y);
        }
    });
};

/**
 * Returns a promise for the first of an array of promises to become settled.
 * @param answers {Array[Any*]} promises to race
 * @returns {Any*} the first promise to be settled
 */
Q.race = race;
function race(answerPs) {
    return promise(function (resolve, reject) {
        // Switch to this once we can assume at least ES5
        // answerPs.forEach(function (answerP) {
        //     Q(answerP).then(resolve, reject);
        // });
        // Use this in the meantime
        for (var i = 0, len = answerPs.length; i < len; i++) {
            Q(answerPs[i]).then(resolve, reject);
        }
    });
}

Promise.prototype.race = function () {
    return this.then(Q.race);
};

/**
 * Constructs a Promise with a promise descriptor object and optional fallback
 * function.  The descriptor contains methods like when(rejected), get(name),
 * set(name, value), post(name, args), and delete(name), which all
 * return either a value, a promise for a value, or a rejection.  The fallback
 * accepts the operation name, a resolver, and any further arguments that would
 * have been forwarded to the appropriate method above had a method been
 * provided with the proper name.  The API makes no guarantees about the nature
 * of the returned object, apart from that it is usable whereever promises are
 * bought and sold.
 */
Q.makePromise = Promise;
function Promise(descriptor, fallback, inspect) {
    if (fallback === void 0) {
        fallback = function (op) {
            return reject(new Error(
                "Promise does not support operation: " + op
            ));
        };
    }
    if (inspect === void 0) {
        inspect = function () {
            return {state: "unknown"};
        };
    }

    var promise = object_create(Promise.prototype);

    promise.promiseDispatch = function (resolve, op, args) {
        var result;
        try {
            if (descriptor[op]) {
                result = descriptor[op].apply(promise, args);
            } else {
                result = fallback.call(promise, op, args);
            }
        } catch (exception) {
            result = reject(exception);
        }
        if (resolve) {
            resolve(result);
        }
    };

    promise.inspect = inspect;

    // XXX deprecated `valueOf` and `exception` support
    if (inspect) {
        var inspected = inspect();
        if (inspected.state === "rejected") {
            promise.exception = inspected.reason;
        }

        promise.valueOf = function () {
            var inspected = inspect();
            if (inspected.state === "pending" ||
                inspected.state === "rejected") {
                return promise;
            }
            return inspected.value;
        };
    }

    return promise;
}

Promise.prototype.toString = function () {
    return "[object Promise]";
};

Promise.prototype.then = function (fulfilled, rejected, progressed) {
    var self = this;
    var deferred = defer();
    var done = false;   // ensure the untrusted promise makes at most a
                        // single call to one of the callbacks

    function _fulfilled(value) {
        try {
            return typeof fulfilled === "function" ? fulfilled(value) : value;
        } catch (exception) {
            return reject(exception);
        }
    }

    function _rejected(exception) {
        if (typeof rejected === "function") {
            makeStackTraceLong(exception, self);
            try {
                return rejected(exception);
            } catch (newException) {
                return reject(newException);
            }
        }
        return reject(exception);
    }

    function _progressed(value) {
        return typeof progressed === "function" ? progressed(value) : value;
    }

    Q.nextTick(function () {
        self.promiseDispatch(function (value) {
            if (done) {
                return;
            }
            done = true;

            deferred.resolve(_fulfilled(value));
        }, "when", [function (exception) {
            if (done) {
                return;
            }
            done = true;

            deferred.resolve(_rejected(exception));
        }]);
    });

    // Progress propagator need to be attached in the current tick.
    self.promiseDispatch(void 0, "when", [void 0, function (value) {
        var newValue;
        var threw = false;
        try {
            newValue = _progressed(value);
        } catch (e) {
            threw = true;
            if (Q.onerror) {
                Q.onerror(e);
            } else {
                throw e;
            }
        }

        if (!threw) {
            deferred.notify(newValue);
        }
    }]);

    return deferred.promise;
};

Q.tap = function (promise, callback) {
    return Q(promise).tap(callback);
};

/**
 * Works almost like "finally", but not called for rejections.
 * Original resolution value is passed through callback unaffected.
 * Callback may return a promise that will be awaited for.
 * @param {Function} callback
 * @returns {Q.Promise}
 * @example
 * doSomething()
 *   .then(...)
 *   .tap(console.log)
 *   .then(...);
 */
Promise.prototype.tap = function (callback) {
    callback = Q(callback);

    return this.then(function (value) {
        return callback.fcall(value).thenResolve(value);
    });
};

/**
 * Registers an observer on a promise.
 *
 * Guarantees:
 *
 * 1. that fulfilled and rejected will be called only once.
 * 2. that either the fulfilled callback or the rejected callback will be
 *    called, but not both.
 * 3. that fulfilled and rejected will not be called in this turn.
 *
 * @param value      promise or immediate reference to observe
 * @param fulfilled  function to be called with the fulfilled value
 * @param rejected   function to be called with the rejection exception
 * @param progressed function to be called on any progress notifications
 * @return promise for the return value from the invoked callback
 */
Q.when = when;
function when(value, fulfilled, rejected, progressed) {
    return Q(value).then(fulfilled, rejected, progressed);
}

Promise.prototype.thenResolve = function (value) {
    return this.then(function () { return value; });
};

Q.thenResolve = function (promise, value) {
    return Q(promise).thenResolve(value);
};

Promise.prototype.thenReject = function (reason) {
    return this.then(function () { throw reason; });
};

Q.thenReject = function (promise, reason) {
    return Q(promise).thenReject(reason);
};

/**
 * If an object is not a promise, it is as "near" as possible.
 * If a promise is rejected, it is as "near" as possible too.
 * If it’s a fulfilled promise, the fulfillment value is nearer.
 * If it’s a deferred promise and the deferred has been resolved, the
 * resolution is "nearer".
 * @param object
 * @returns most resolved (nearest) form of the object
 */

// XXX should we re-do this?
Q.nearer = nearer;
function nearer(value) {
    if (isPromise(value)) {
        var inspected = value.inspect();
        if (inspected.state === "fulfilled") {
            return inspected.value;
        }
    }
    return value;
}

/**
 * @returns whether the given object is a promise.
 * Otherwise it is a fulfilled value.
 */
Q.isPromise = isPromise;
function isPromise(object) {
    return object instanceof Promise;
}

Q.isPromiseAlike = isPromiseAlike;
function isPromiseAlike(object) {
    return isObject(object) && typeof object.then === "function";
}

/**
 * @returns whether the given object is a pending promise, meaning not
 * fulfilled or rejected.
 */
Q.isPending = isPending;
function isPending(object) {
    return isPromise(object) && object.inspect().state === "pending";
}

Promise.prototype.isPending = function () {
    return this.inspect().state === "pending";
};

/**
 * @returns whether the given object is a value or fulfilled
 * promise.
 */
Q.isFulfilled = isFulfilled;
function isFulfilled(object) {
    return !isPromise(object) || object.inspect().state === "fulfilled";
}

Promise.prototype.isFulfilled = function () {
    return this.inspect().state === "fulfilled";
};

/**
 * @returns whether the given object is a rejected promise.
 */
Q.isRejected = isRejected;
function isRejected(object) {
    return isPromise(object) && object.inspect().state === "rejected";
}

Promise.prototype.isRejected = function () {
    return this.inspect().state === "rejected";
};

//// BEGIN UNHANDLED REJECTION TRACKING

// This promise library consumes exceptions thrown in handlers so they can be
// handled by a subsequent promise.  The exceptions get added to this array when
// they are created, and removed when they are handled.  Note that in ES6 or
// shimmed environments, this would naturally be a `Set`.
var unhandledReasons = [];
var unhandledRejections = [];
var reportedUnhandledRejections = [];
var trackUnhandledRejections = true;

function resetUnhandledRejections() {
    unhandledReasons.length = 0;
    unhandledRejections.length = 0;

    if (!trackUnhandledRejections) {
        trackUnhandledRejections = true;
    }
}

function trackRejection(promise, reason) {
    if (!trackUnhandledRejections) {
        return;
    }
    if (typeof process === "object" && typeof process.emit === "function") {
        Q.nextTick.runAfter(function () {
            if (array_indexOf(unhandledRejections, promise) !== -1) {
                process.emit("unhandledRejection", reason, promise);
                reportedUnhandledRejections.push(promise);
            }
        });
    }

    unhandledRejections.push(promise);
    if (reason && typeof reason.stack !== "undefined") {
        unhandledReasons.push(reason.stack);
    } else {
        unhandledReasons.push("(no stack) " + reason);
    }
}

function untrackRejection(promise) {
    if (!trackUnhandledRejections) {
        return;
    }

    var at = array_indexOf(unhandledRejections, promise);
    if (at !== -1) {
        if (typeof process === "object" && typeof process.emit === "function") {
            Q.nextTick.runAfter(function () {
                var atReport = array_indexOf(reportedUnhandledRejections, promise);
                if (atReport !== -1) {
                    process.emit("rejectionHandled", unhandledReasons[at], promise);
                    reportedUnhandledRejections.splice(atReport, 1);
                }
            });
        }
        unhandledRejections.splice(at, 1);
        unhandledReasons.splice(at, 1);
    }
}

Q.resetUnhandledRejections = resetUnhandledRejections;

Q.getUnhandledReasons = function () {
    // Make a copy so that consumers can't interfere with our internal state.
    return unhandledReasons.slice();
};

Q.stopUnhandledRejectionTracking = function () {
    resetUnhandledRejections();
    trackUnhandledRejections = false;
};

resetUnhandledRejections();

//// END UNHANDLED REJECTION TRACKING

/**
 * Constructs a rejected promise.
 * @param reason value describing the failure
 */
Q.reject = reject;
function reject(reason) {
    var rejection = Promise({
        "when": function (rejected) {
            // note that the error has been handled
            if (rejected) {
                untrackRejection(this);
            }
            return rejected ? rejected(reason) : this;
        }
    }, function fallback() {
        return this;
    }, function inspect() {
        return { state: "rejected", reason: reason };
    });

    // Note that the reason has not been handled.
    trackRejection(rejection, reason);

    return rejection;
}

/**
 * Constructs a fulfilled promise for an immediate reference.
 * @param value immediate reference
 */
Q.fulfill = fulfill;
function fulfill(value) {
    return Promise({
        "when": function () {
            return value;
        },
        "get": function (name) {
            return value[name];
        },
        "set": function (name, rhs) {
            value[name] = rhs;
        },
        "delete": function (name) {
            delete value[name];
        },
        "post": function (name, args) {
            // Mark Miller proposes that post with no name should apply a
            // promised function.
            if (name === null || name === void 0) {
                return value.apply(void 0, args);
            } else {
                return value[name].apply(value, args);
            }
        },
        "apply": function (thisp, args) {
            return value.apply(thisp, args);
        },
        "keys": function () {
            return object_keys(value);
        }
    }, void 0, function inspect() {
        return { state: "fulfilled", value: value };
    });
}

/**
 * Converts thenables to Q promises.
 * @param promise thenable promise
 * @returns a Q promise
 */
function coerce(promise) {
    var deferred = defer();
    Q.nextTick(function () {
        try {
            promise.then(deferred.resolve, deferred.reject, deferred.notify);
        } catch (exception) {
            deferred.reject(exception);
        }
    });
    return deferred.promise;
}

/**
 * Annotates an object such that it will never be
 * transferred away from this process over any promise
 * communication channel.
 * @param object
 * @returns promise a wrapping of that object that
 * additionally responds to the "isDef" message
 * without a rejection.
 */
Q.master = master;
function master(object) {
    return Promise({
        "isDef": function () {}
    }, function fallback(op, args) {
        return dispatch(object, op, args);
    }, function () {
        return Q(object).inspect();
    });
}

/**
 * Spreads the values of a promised array of arguments into the
 * fulfillment callback.
 * @param fulfilled callback that receives variadic arguments from the
 * promised array
 * @param rejected callback that receives the exception if the promise
 * is rejected.
 * @returns a promise for the return value or thrown exception of
 * either callback.
 */
Q.spread = spread;
function spread(value, fulfilled, rejected) {
    return Q(value).spread(fulfilled, rejected);
}

Promise.prototype.spread = function (fulfilled, rejected) {
    return this.all().then(function (array) {
        return fulfilled.apply(void 0, array);
    }, rejected);
};

/**
 * The async function is a decorator for generator functions, turning
 * them into asynchronous generators.  Although generators are only part
 * of the newest ECMAScript 6 drafts, this code does not cause syntax
 * errors in older engines.  This code should continue to work and will
 * in fact improve over time as the language improves.
 *
 * ES6 generators are currently part of V8 version 3.19 with the
 * --harmony-generators runtime flag enabled.  SpiderMonkey has had them
 * for longer, but under an older Python-inspired form.  This function
 * works on both kinds of generators.
 *
 * Decorates a generator function such that:
 *  - it may yield promises
 *  - execution will continue when that promise is fulfilled
 *  - the value of the yield expression will be the fulfilled value
 *  - it returns a promise for the return value (when the generator
 *    stops iterating)
 *  - the decorated function returns a promise for the return value
 *    of the generator or the first rejected promise among those
 *    yielded.
 *  - if an error is thrown in the generator, it propagates through
 *    every following yield until it is caught, or until it escapes
 *    the generator function altogether, and is translated into a
 *    rejection for the promise returned by the decorated generator.
 */
Q.async = async;
function async(makeGenerator) {
    return function () {
        // when verb is "send", arg is a value
        // when verb is "throw", arg is an exception
        function continuer(verb, arg) {
            var result;

            // Until V8 3.19 / Chromium 29 is released, SpiderMonkey is the only
            // engine that has a deployed base of browsers that support generators.
            // However, SM's generators use the Python-inspired semantics of
            // outdated ES6 drafts.  We would like to support ES6, but we'd also
            // like to make it possible to use generators in deployed browsers, so
            // we also support Python-style generators.  At some point we can remove
            // this block.

            if (typeof StopIteration === "undefined") {
                // ES6 Generators
                try {
                    result = generator[verb](arg);
                } catch (exception) {
                    return reject(exception);
                }
                if (result.done) {
                    return Q(result.value);
                } else {
                    return when(result.value, callback, errback);
                }
            } else {
                // SpiderMonkey Generators
                // FIXME: Remove this case when SM does ES6 generators.
                try {
                    result = generator[verb](arg);
                } catch (exception) {
                    if (isStopIteration(exception)) {
                        return Q(exception.value);
                    } else {
                        return reject(exception);
                    }
                }
                return when(result, callback, errback);
            }
        }
        var generator = makeGenerator.apply(this, arguments);
        var callback = continuer.bind(continuer, "next");
        var errback = continuer.bind(continuer, "throw");
        return callback();
    };
}

/**
 * The spawn function is a small wrapper around async that immediately
 * calls the generator and also ends the promise chain, so that any
 * unhandled errors are thrown instead of forwarded to the error
 * handler. This is useful because it's extremely common to run
 * generators at the top-level to work with libraries.
 */
Q.spawn = spawn;
function spawn(makeGenerator) {
    Q.done(Q.async(makeGenerator)());
}

// FIXME: Remove this interface once ES6 generators are in SpiderMonkey.
/**
 * Throws a ReturnValue exception to stop an asynchronous generator.
 *
 * This interface is a stop-gap measure to support generator return
 * values in older Firefox/SpiderMonkey.  In browsers that support ES6
 * generators like Chromium 29, just use "return" in your generator
 * functions.
 *
 * @param value the return value for the surrounding generator
 * @throws ReturnValue exception with the value.
 * @example
 * // ES6 style
 * Q.async(function* () {
 *      var foo = yield getFooPromise();
 *      var bar = yield getBarPromise();
 *      return foo + bar;
 * })
 * // Older SpiderMonkey style
 * Q.async(function () {
 *      var foo = yield getFooPromise();
 *      var bar = yield getBarPromise();
 *      Q.return(foo + bar);
 * })
 */
Q["return"] = _return;
function _return(value) {
    throw new QReturnValue(value);
}

/**
 * The promised function decorator ensures that any promise arguments
 * are settled and passed as values (`this` is also settled and passed
 * as a value).  It will also ensure that the result of a function is
 * always a promise.
 *
 * @example
 * var add = Q.promised(function (a, b) {
 *     return a + b;
 * });
 * add(Q(a), Q(B));
 *
 * @param {function} callback The function to decorate
 * @returns {function} a function that has been decorated.
 */
Q.promised = promised;
function promised(callback) {
    return function () {
        return spread([this, all(arguments)], function (self, args) {
            return callback.apply(self, args);
        });
    };
}

/**
 * sends a message to a value in a future turn
 * @param object* the recipient
 * @param op the name of the message operation, e.g., "when",
 * @param args further arguments to be forwarded to the operation
 * @returns result {Promise} a promise for the result of the operation
 */
Q.dispatch = dispatch;
function dispatch(object, op, args) {
    return Q(object).dispatch(op, args);
}

Promise.prototype.dispatch = function (op, args) {
    var self = this;
    var deferred = defer();
    Q.nextTick(function () {
        self.promiseDispatch(deferred.resolve, op, args);
    });
    return deferred.promise;
};

/**
 * Gets the value of a property in a future turn.
 * @param object    promise or immediate reference for target object
 * @param name      name of property to get
 * @return promise for the property value
 */
Q.get = function (object, key) {
    return Q(object).dispatch("get", [key]);
};

Promise.prototype.get = function (key) {
    return this.dispatch("get", [key]);
};

/**
 * Sets the value of a property in a future turn.
 * @param object    promise or immediate reference for object object
 * @param name      name of property to set
 * @param value     new value of property
 * @return promise for the return value
 */
Q.set = function (object, key, value) {
    return Q(object).dispatch("set", [key, value]);
};

Promise.prototype.set = function (key, value) {
    return this.dispatch("set", [key, value]);
};

/**
 * Deletes a property in a future turn.
 * @param object    promise or immediate reference for target object
 * @param name      name of property to delete
 * @return promise for the return value
 */
Q.del = // XXX legacy
Q["delete"] = function (object, key) {
    return Q(object).dispatch("delete", [key]);
};

Promise.prototype.del = // XXX legacy
Promise.prototype["delete"] = function (key) {
    return this.dispatch("delete", [key]);
};

/**
 * Invokes a method in a future turn.
 * @param object    promise or immediate reference for target object
 * @param name      name of method to invoke
 * @param value     a value to post, typically an array of
 *                  invocation arguments for promises that
 *                  are ultimately backed with `resolve` values,
 *                  as opposed to those backed with URLs
 *                  wherein the posted value can be any
 *                  JSON serializable object.
 * @return promise for the return value
 */
// bound locally because it is used by other methods
Q.mapply = // XXX As proposed by "Redsandro"
Q.post = function (object, name, args) {
    return Q(object).dispatch("post", [name, args]);
};

Promise.prototype.mapply = // XXX As proposed by "Redsandro"
Promise.prototype.post = function (name, args) {
    return this.dispatch("post", [name, args]);
};

/**
 * Invokes a method in a future turn.
 * @param object    promise or immediate reference for target object
 * @param name      name of method to invoke
 * @param ...args   array of invocation arguments
 * @return promise for the return value
 */
Q.send = // XXX Mark Miller's proposed parlance
Q.mcall = // XXX As proposed by "Redsandro"
Q.invoke = function (object, name /*...args*/) {
    return Q(object).dispatch("post", [name, array_slice(arguments, 2)]);
};

Promise.prototype.send = // XXX Mark Miller's proposed parlance
Promise.prototype.mcall = // XXX As proposed by "Redsandro"
Promise.prototype.invoke = function (name /*...args*/) {
    return this.dispatch("post", [name, array_slice(arguments, 1)]);
};

/**
 * Applies the promised function in a future turn.
 * @param object    promise or immediate reference for target function
 * @param args      array of application arguments
 */
Q.fapply = function (object, args) {
    return Q(object).dispatch("apply", [void 0, args]);
};

Promise.prototype.fapply = function (args) {
    return this.dispatch("apply", [void 0, args]);
};

/**
 * Calls the promised function in a future turn.
 * @param object    promise or immediate reference for target function
 * @param ...args   array of application arguments
 */
Q["try"] =
Q.fcall = function (object /* ...args*/) {
    return Q(object).dispatch("apply", [void 0, array_slice(arguments, 1)]);
};

Promise.prototype.fcall = function (/*...args*/) {
    return this.dispatch("apply", [void 0, array_slice(arguments)]);
};

/**
 * Binds the promised function, transforming return values into a fulfilled
 * promise and thrown errors into a rejected one.
 * @param object    promise or immediate reference for target function
 * @param ...args   array of application arguments
 */
Q.fbind = function (object /*...args*/) {
    var promise = Q(object);
    var args = array_slice(arguments, 1);
    return function fbound() {
        return promise.dispatch("apply", [
            this,
            args.concat(array_slice(arguments))
        ]);
    };
};
Promise.prototype.fbind = function (/*...args*/) {
    var promise = this;
    var args = array_slice(arguments);
    return function fbound() {
        return promise.dispatch("apply", [
            this,
            args.concat(array_slice(arguments))
        ]);
    };
};

/**
 * Requests the names of the owned properties of a promised
 * object in a future turn.
 * @param object    promise or immediate reference for target object
 * @return promise for the keys of the eventually settled object
 */
Q.keys = function (object) {
    return Q(object).dispatch("keys", []);
};

Promise.prototype.keys = function () {
    return this.dispatch("keys", []);
};

/**
 * Turns an array of promises into a promise for an array.  If any of
 * the promises gets rejected, the whole array is rejected immediately.
 * @param {Array*} an array (or promise for an array) of values (or
 * promises for values)
 * @returns a promise for an array of the corresponding values
 */
// By Mark Miller
// http://wiki.ecmascript.org/doku.php?id=strawman:concurrency&rev=1308776521#allfulfilled
Q.all = all;
function all(promises) {
    return when(promises, function (promises) {
        var pendingCount = 0;
        var deferred = defer();
        array_reduce(promises, function (undefined, promise, index) {
            var snapshot;
            if (
                isPromise(promise) &&
                (snapshot = promise.inspect()).state === "fulfilled"
            ) {
                promises[index] = snapshot.value;
            } else {
                ++pendingCount;
                when(
                    promise,
                    function (value) {
                        promises[index] = value;
                        if (--pendingCount === 0) {
                            deferred.resolve(promises);
                        }
                    },
                    deferred.reject,
                    function (progress) {
                        deferred.notify({ index: index, value: progress });
                    }
                );
            }
        }, void 0);
        if (pendingCount === 0) {
            deferred.resolve(promises);
        }
        return deferred.promise;
    });
}

Promise.prototype.all = function () {
    return all(this);
};

/**
 * Returns the first resolved promise of an array. Prior rejected promises are
 * ignored.  Rejects only if all promises are rejected.
 * @param {Array*} an array containing values or promises for values
 * @returns a promise fulfilled with the value of the first resolved promise,
 * or a rejected promise if all promises are rejected.
 */
Q.any = any;

function any(promises) {
    if (promises.length === 0) {
        return Q.resolve();
    }

    var deferred = Q.defer();
    var pendingCount = 0;
    array_reduce(promises, function (prev, current, index) {
        var promise = promises[index];

        pendingCount++;

        when(promise, onFulfilled, onRejected, onProgress);
        function onFulfilled(result) {
            deferred.resolve(result);
        }
        function onRejected() {
            pendingCount--;
            if (pendingCount === 0) {
                deferred.reject(new Error(
                    "Can't get fulfillment value from any promise, all " +
                    "promises were rejected."
                ));
            }
        }
        function onProgress(progress) {
            deferred.notify({
                index: index,
                value: progress
            });
        }
    }, undefined);

    return deferred.promise;
}

Promise.prototype.any = function () {
    return any(this);
};

/**
 * Waits for all promises to be settled, either fulfilled or
 * rejected.  This is distinct from `all` since that would stop
 * waiting at the first rejection.  The promise returned by
 * `allResolved` will never be rejected.
 * @param promises a promise for an array (or an array) of promises
 * (or values)
 * @return a promise for an array of promises
 */
Q.allResolved = deprecate(allResolved, "allResolved", "allSettled");
function allResolved(promises) {
    return when(promises, function (promises) {
        promises = array_map(promises, Q);
        return when(all(array_map(promises, function (promise) {
            return when(promise, noop, noop);
        })), function () {
            return promises;
        });
    });
}

Promise.prototype.allResolved = function () {
    return allResolved(this);
};

/**
 * @see Promise#allSettled
 */
Q.allSettled = allSettled;
function allSettled(promises) {
    return Q(promises).allSettled();
}

/**
 * Turns an array of promises into a promise for an array of their states (as
 * returned by `inspect`) when they have all settled.
 * @param {Array[Any*]} values an array (or promise for an array) of values (or
 * promises for values)
 * @returns {Array[State]} an array of states for the respective values.
 */
Promise.prototype.allSettled = function () {
    return this.then(function (promises) {
        return all(array_map(promises, function (promise) {
            promise = Q(promise);
            function regardless() {
                return promise.inspect();
            }
            return promise.then(regardless, regardless);
        }));
    });
};

/**
 * Captures the failure of a promise, giving an oportunity to recover
 * with a callback.  If the given promise is fulfilled, the returned
 * promise is fulfilled.
 * @param {Any*} promise for something
 * @param {Function} callback to fulfill the returned promise if the
 * given promise is rejected
 * @returns a promise for the return value of the callback
 */
Q.fail = // XXX legacy
Q["catch"] = function (object, rejected) {
    return Q(object).then(void 0, rejected);
};

Promise.prototype.fail = // XXX legacy
Promise.prototype["catch"] = function (rejected) {
    return this.then(void 0, rejected);
};

/**
 * Attaches a listener that can respond to progress notifications from a
 * promise's originating deferred. This listener receives the exact arguments
 * passed to ``deferred.notify``.
 * @param {Any*} promise for something
 * @param {Function} callback to receive any progress notifications
 * @returns the given promise, unchanged
 */
Q.progress = progress;
function progress(object, progressed) {
    return Q(object).then(void 0, void 0, progressed);
}

Promise.prototype.progress = function (progressed) {
    return this.then(void 0, void 0, progressed);
};

/**
 * Provides an opportunity to observe the settling of a promise,
 * regardless of whether the promise is fulfilled or rejected.  Forwards
 * the resolution to the returned promise when the callback is done.
 * The callback can return a promise to defer completion.
 * @param {Any*} promise
 * @param {Function} callback to observe the resolution of the given
 * promise, takes no arguments.
 * @returns a promise for the resolution of the given promise when
 * ``fin`` is done.
 */
Q.fin = // XXX legacy
Q["finally"] = function (object, callback) {
    return Q(object)["finally"](callback);
};

Promise.prototype.fin = // XXX legacy
Promise.prototype["finally"] = function (callback) {
    callback = Q(callback);
    return this.then(function (value) {
        return callback.fcall().then(function () {
            return value;
        });
    }, function (reason) {
        // TODO attempt to recycle the rejection with "this".
        return callback.fcall().then(function () {
            throw reason;
        });
    });
};

/**
 * Terminates a chain of promises, forcing rejections to be
 * thrown as exceptions.
 * @param {Any*} promise at the end of a chain of promises
 * @returns nothing
 */
Q.done = function (object, fulfilled, rejected, progress) {
    return Q(object).done(fulfilled, rejected, progress);
};

Promise.prototype.done = function (fulfilled, rejected, progress) {
    var onUnhandledError = function (error) {
        // forward to a future turn so that ``when``
        // does not catch it and turn it into a rejection.
        Q.nextTick(function () {
            makeStackTraceLong(error, promise);
            if (Q.onerror) {
                Q.onerror(error);
            } else {
                throw error;
            }
        });
    };

    // Avoid unnecessary `nextTick`ing via an unnecessary `when`.
    var promise = fulfilled || rejected || progress ?
        this.then(fulfilled, rejected, progress) :
        this;

    if (typeof process === "object" && process && process.domain) {
        onUnhandledError = process.domain.bind(onUnhandledError);
    }

    promise.then(void 0, onUnhandledError);
};

/**
 * Causes a promise to be rejected if it does not get fulfilled before
 * some milliseconds time out.
 * @param {Any*} promise
 * @param {Number} milliseconds timeout
 * @param {Any*} custom error message or Error object (optional)
 * @returns a promise for the resolution of the given promise if it is
 * fulfilled before the timeout, otherwise rejected.
 */
Q.timeout = function (object, ms, error) {
    return Q(object).timeout(ms, error);
};

Promise.prototype.timeout = function (ms, error) {
    var deferred = defer();
    var timeoutId = setTimeout(function () {
        if (!error || "string" === typeof error) {
            error = new Error(error || "Timed out after " + ms + " ms");
            error.code = "ETIMEDOUT";
        }
        deferred.reject(error);
    }, ms);

    this.then(function (value) {
        clearTimeout(timeoutId);
        deferred.resolve(value);
    }, function (exception) {
        clearTimeout(timeoutId);
        deferred.reject(exception);
    }, deferred.notify);

    return deferred.promise;
};

/**
 * Returns a promise for the given value (or promised value), some
 * milliseconds after it resolved. Passes rejections immediately.
 * @param {Any*} promise
 * @param {Number} milliseconds
 * @returns a promise for the resolution of the given promise after milliseconds
 * time has elapsed since the resolution of the given promise.
 * If the given promise rejects, that is passed immediately.
 */
Q.delay = function (object, timeout) {
    if (timeout === void 0) {
        timeout = object;
        object = void 0;
    }
    return Q(object).delay(timeout);
};

Promise.prototype.delay = function (timeout) {
    return this.then(function (value) {
        var deferred = defer();
        setTimeout(function () {
            deferred.resolve(value);
        }, timeout);
        return deferred.promise;
    });
};

/**
 * Passes a continuation to a Node function, which is called with the given
 * arguments provided as an array, and returns a promise.
 *
 *      Q.nfapply(FS.readFile, [__filename])
 *      .then(function (content) {
 *      })
 *
 */
Q.nfapply = function (callback, args) {
    return Q(callback).nfapply(args);
};

Promise.prototype.nfapply = function (args) {
    var deferred = defer();
    var nodeArgs = array_slice(args);
    nodeArgs.push(deferred.makeNodeResolver());
    this.fapply(nodeArgs).fail(deferred.reject);
    return deferred.promise;
};

/**
 * Passes a continuation to a Node function, which is called with the given
 * arguments provided individually, and returns a promise.
 * @example
 * Q.nfcall(FS.readFile, __filename)
 * .then(function (content) {
 * })
 *
 */
Q.nfcall = function (callback /*...args*/) {
    var args = array_slice(arguments, 1);
    return Q(callback).nfapply(args);
};

Promise.prototype.nfcall = function (/*...args*/) {
    var nodeArgs = array_slice(arguments);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    this.fapply(nodeArgs).fail(deferred.reject);
    return deferred.promise;
};

/**
 * Wraps a NodeJS continuation passing function and returns an equivalent
 * version that returns a promise.
 * @example
 * Q.nfbind(FS.readFile, __filename)("utf-8")
 * .then(console.log)
 * .done()
 */
Q.nfbind =
Q.denodeify = function (callback /*...args*/) {
    var baseArgs = array_slice(arguments, 1);
    return function () {
        var nodeArgs = baseArgs.concat(array_slice(arguments));
        var deferred = defer();
        nodeArgs.push(deferred.makeNodeResolver());
        Q(callback).fapply(nodeArgs).fail(deferred.reject);
        return deferred.promise;
    };
};

Promise.prototype.nfbind =
Promise.prototype.denodeify = function (/*...args*/) {
    var args = array_slice(arguments);
    args.unshift(this);
    return Q.denodeify.apply(void 0, args);
};

Q.nbind = function (callback, thisp /*...args*/) {
    var baseArgs = array_slice(arguments, 2);
    return function () {
        var nodeArgs = baseArgs.concat(array_slice(arguments));
        var deferred = defer();
        nodeArgs.push(deferred.makeNodeResolver());
        function bound() {
            return callback.apply(thisp, arguments);
        }
        Q(bound).fapply(nodeArgs).fail(deferred.reject);
        return deferred.promise;
    };
};

Promise.prototype.nbind = function (/*thisp, ...args*/) {
    var args = array_slice(arguments, 0);
    args.unshift(this);
    return Q.nbind.apply(void 0, args);
};

/**
 * Calls a method of a Node-style object that accepts a Node-style
 * callback with a given array of arguments, plus a provided callback.
 * @param object an object that has the named method
 * @param {String} name name of the method of object
 * @param {Array} args arguments to pass to the method; the callback
 * will be provided by Q and appended to these arguments.
 * @returns a promise for the value or error
 */
Q.nmapply = // XXX As proposed by "Redsandro"
Q.npost = function (object, name, args) {
    return Q(object).npost(name, args);
};

Promise.prototype.nmapply = // XXX As proposed by "Redsandro"
Promise.prototype.npost = function (name, args) {
    var nodeArgs = array_slice(args || []);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    this.dispatch("post", [name, nodeArgs]).fail(deferred.reject);
    return deferred.promise;
};

/**
 * Calls a method of a Node-style object that accepts a Node-style
 * callback, forwarding the given variadic arguments, plus a provided
 * callback argument.
 * @param object an object that has the named method
 * @param {String} name name of the method of object
 * @param ...args arguments to pass to the method; the callback will
 * be provided by Q and appended to these arguments.
 * @returns a promise for the value or error
 */
Q.nsend = // XXX Based on Mark Miller's proposed "send"
Q.nmcall = // XXX Based on "Redsandro's" proposal
Q.ninvoke = function (object, name /*...args*/) {
    var nodeArgs = array_slice(arguments, 2);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    Q(object).dispatch("post", [name, nodeArgs]).fail(deferred.reject);
    return deferred.promise;
};

Promise.prototype.nsend = // XXX Based on Mark Miller's proposed "send"
Promise.prototype.nmcall = // XXX Based on "Redsandro's" proposal
Promise.prototype.ninvoke = function (name /*...args*/) {
    var nodeArgs = array_slice(arguments, 1);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    this.dispatch("post", [name, nodeArgs]).fail(deferred.reject);
    return deferred.promise;
};

/**
 * If a function would like to support both Node continuation-passing-style and
 * promise-returning-style, it can end its internal promise chain with
 * `nodeify(nodeback)`, forwarding the optional nodeback argument.  If the user
 * elects to use a nodeback, the result will be sent there.  If they do not
 * pass a nodeback, they will receive the result promise.
 * @param object a result (or a promise for a result)
 * @param {Function} nodeback a Node.js-style callback
 * @returns either the promise or nothing
 */
Q.nodeify = nodeify;
function nodeify(object, nodeback) {
    return Q(object).nodeify(nodeback);
}

Promise.prototype.nodeify = function (nodeback) {
    if (nodeback) {
        this.then(function (value) {
            Q.nextTick(function () {
                nodeback(null, value);
            });
        }, function (error) {
            Q.nextTick(function () {
                nodeback(error);
            });
        });
    } else {
        return this;
    }
};

Q.noConflict = function() {
    throw new Error("Q.noConflict only works when Q is used as a global");
};

// All code before this point will be filtered from stack traces.
var qEndingLine = captureLine();

return Q;

});

}).call(this,require("1YiZ5S"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/q/q.js","/../node_modules/q")
},{"1YiZ5S":9,"buffer":6}],11:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*! tether 1.3.1 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require, exports, module);
  } else {
    root.Tether = factory();
  }
}(this, function(require, exports, module) {

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var TetherBase = undefined;
if (typeof TetherBase === 'undefined') {
  TetherBase = { modules: [] };
}

var zeroElement = null;

function getScrollParents(el) {
  // In firefox if the el is inside an iframe with display: none; window.getComputedStyle() will return null;
  // https://bugzilla.mozilla.org/show_bug.cgi?id=548397
  var computedStyle = getComputedStyle(el) || {};
  var position = computedStyle.position;
  var parents = [];

  if (position === 'fixed') {
    return [el];
  }

  var parent = el;
  while ((parent = parent.parentNode) && parent && parent.nodeType === 1) {
    var style = undefined;
    try {
      style = getComputedStyle(parent);
    } catch (err) {}

    if (typeof style === 'undefined' || style === null) {
      parents.push(parent);
      return parents;
    }

    var _style = style;
    var overflow = _style.overflow;
    var overflowX = _style.overflowX;
    var overflowY = _style.overflowY;

    if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
      if (position !== 'absolute' || ['relative', 'absolute', 'fixed'].indexOf(style.position) >= 0) {
        parents.push(parent);
      }
    }
  }

  parents.push(document.body);
  return parents;
}

var uniqueId = (function () {
  var id = 0;
  return function () {
    return ++id;
  };
})();

var zeroPosCache = {};
var getOrigin = function getOrigin() {
  // getBoundingClientRect is unfortunately too accurate.  It introduces a pixel or two of
  // jitter as the user scrolls that messes with our ability to detect if two positions
  // are equivilant or not.  We place an element at the top left of the page that will
  // get the same jitter, so we can cancel the two out.
  var node = zeroElement;
  if (!node) {
    node = document.createElement('div');
    node.setAttribute('data-tether-id', uniqueId());
    extend(node.style, {
      top: 0,
      left: 0,
      position: 'absolute'
    });

    document.body.appendChild(node);

    zeroElement = node;
  }

  var id = node.getAttribute('data-tether-id');
  if (typeof zeroPosCache[id] === 'undefined') {
    zeroPosCache[id] = {};

    var rect = node.getBoundingClientRect();
    for (var k in rect) {
      // Can't use extend, as on IE9, elements don't resolve to be hasOwnProperty
      zeroPosCache[id][k] = rect[k];
    }

    // Clear the cache when this position call is done
    defer(function () {
      delete zeroPosCache[id];
    });
  }

  return zeroPosCache[id];
};

function removeUtilElements() {
  if (zeroElement) {
    document.body.removeChild(zeroElement);
  }
  zeroElement = null;
};

function getBounds(el) {
  var doc = undefined;
  if (el === document) {
    doc = document;
    el = document.documentElement;
  } else {
    doc = el.ownerDocument;
  }

  var docEl = doc.documentElement;

  var box = {};
  // The original object returned by getBoundingClientRect is immutable, so we clone it
  // We can't use extend because the properties are not considered part of the object by hasOwnProperty in IE9
  var rect = el.getBoundingClientRect();
  for (var k in rect) {
    box[k] = rect[k];
  }

  var origin = getOrigin();

  box.top -= origin.top;
  box.left -= origin.left;

  if (typeof box.width === 'undefined') {
    box.width = document.body.scrollWidth - box.left - box.right;
  }
  if (typeof box.height === 'undefined') {
    box.height = document.body.scrollHeight - box.top - box.bottom;
  }

  box.top = box.top - docEl.clientTop;
  box.left = box.left - docEl.clientLeft;
  box.right = doc.body.clientWidth - box.width - box.left;
  box.bottom = doc.body.clientHeight - box.height - box.top;

  return box;
}

function getOffsetParent(el) {
  return el.offsetParent || document.documentElement;
}

function getScrollBarSize() {
  var inner = document.createElement('div');
  inner.style.width = '100%';
  inner.style.height = '200px';

  var outer = document.createElement('div');
  extend(outer.style, {
    position: 'absolute',
    top: 0,
    left: 0,
    pointerEvents: 'none',
    visibility: 'hidden',
    width: '200px',
    height: '150px',
    overflow: 'hidden'
  });

  outer.appendChild(inner);

  document.body.appendChild(outer);

  var widthContained = inner.offsetWidth;
  outer.style.overflow = 'scroll';
  var widthScroll = inner.offsetWidth;

  if (widthContained === widthScroll) {
    widthScroll = outer.clientWidth;
  }

  document.body.removeChild(outer);

  var width = widthContained - widthScroll;

  return { width: width, height: width };
}

function extend() {
  var out = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var args = [];

  Array.prototype.push.apply(args, arguments);

  args.slice(1).forEach(function (obj) {
    if (obj) {
      for (var key in obj) {
        if (({}).hasOwnProperty.call(obj, key)) {
          out[key] = obj[key];
        }
      }
    }
  });

  return out;
}

function removeClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    name.split(' ').forEach(function (cls) {
      if (cls.trim()) {
        el.classList.remove(cls);
      }
    });
  } else {
    var regex = new RegExp('(^| )' + name.split(' ').join('|') + '( |$)', 'gi');
    var className = getClassName(el).replace(regex, ' ');
    setClassName(el, className);
  }
}

function addClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    name.split(' ').forEach(function (cls) {
      if (cls.trim()) {
        el.classList.add(cls);
      }
    });
  } else {
    removeClass(el, name);
    var cls = getClassName(el) + (' ' + name);
    setClassName(el, cls);
  }
}

function hasClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    return el.classList.contains(name);
  }
  var className = getClassName(el);
  return new RegExp('(^| )' + name + '( |$)', 'gi').test(className);
}

function getClassName(el) {
  if (el.className instanceof SVGAnimatedString) {
    return el.className.baseVal;
  }
  return el.className;
}

function setClassName(el, className) {
  el.setAttribute('class', className);
}

function updateClasses(el, add, all) {
  // Of the set of 'all' classes, we need the 'add' classes, and only the
  // 'add' classes to be set.
  all.forEach(function (cls) {
    if (add.indexOf(cls) === -1 && hasClass(el, cls)) {
      removeClass(el, cls);
    }
  });

  add.forEach(function (cls) {
    if (!hasClass(el, cls)) {
      addClass(el, cls);
    }
  });
}

var deferred = [];

var defer = function defer(fn) {
  deferred.push(fn);
};

var flush = function flush() {
  var fn = undefined;
  while (fn = deferred.pop()) {
    fn();
  }
};

var Evented = (function () {
  function Evented() {
    _classCallCheck(this, Evented);
  }

  _createClass(Evented, [{
    key: 'on',
    value: function on(event, handler, ctx) {
      var once = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

      if (typeof this.bindings === 'undefined') {
        this.bindings = {};
      }
      if (typeof this.bindings[event] === 'undefined') {
        this.bindings[event] = [];
      }
      this.bindings[event].push({ handler: handler, ctx: ctx, once: once });
    }
  }, {
    key: 'once',
    value: function once(event, handler, ctx) {
      this.on(event, handler, ctx, true);
    }
  }, {
    key: 'off',
    value: function off(event, handler) {
      if (typeof this.bindings !== 'undefined' && typeof this.bindings[event] !== 'undefined') {
        return;
      }

      if (typeof handler === 'undefined') {
        delete this.bindings[event];
      } else {
        var i = 0;
        while (i < this.bindings[event].length) {
          if (this.bindings[event][i].handler === handler) {
            this.bindings[event].splice(i, 1);
          } else {
            ++i;
          }
        }
      }
    }
  }, {
    key: 'trigger',
    value: function trigger(event) {
      if (typeof this.bindings !== 'undefined' && this.bindings[event]) {
        var i = 0;

        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        while (i < this.bindings[event].length) {
          var _bindings$event$i = this.bindings[event][i];
          var handler = _bindings$event$i.handler;
          var ctx = _bindings$event$i.ctx;
          var once = _bindings$event$i.once;

          var context = ctx;
          if (typeof context === 'undefined') {
            context = this;
          }

          handler.apply(context, args);

          if (once) {
            this.bindings[event].splice(i, 1);
          } else {
            ++i;
          }
        }
      }
    }
  }]);

  return Evented;
})();

TetherBase.Utils = {
  getScrollParents: getScrollParents,
  getBounds: getBounds,
  getOffsetParent: getOffsetParent,
  extend: extend,
  addClass: addClass,
  removeClass: removeClass,
  hasClass: hasClass,
  updateClasses: updateClasses,
  defer: defer,
  flush: flush,
  uniqueId: uniqueId,
  Evented: Evented,
  getScrollBarSize: getScrollBarSize,
  removeUtilElements: removeUtilElements
};
/* globals TetherBase, performance */

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x6, _x7, _x8) { var _again = true; _function: while (_again) { var object = _x6, property = _x7, receiver = _x8; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x6 = parent; _x7 = property; _x8 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (typeof TetherBase === 'undefined') {
  throw new Error('You must include the utils.js file before tether.js');
}

var _TetherBase$Utils = TetherBase.Utils;
var getScrollParents = _TetherBase$Utils.getScrollParents;
var getBounds = _TetherBase$Utils.getBounds;
var getOffsetParent = _TetherBase$Utils.getOffsetParent;
var extend = _TetherBase$Utils.extend;
var addClass = _TetherBase$Utils.addClass;
var removeClass = _TetherBase$Utils.removeClass;
var updateClasses = _TetherBase$Utils.updateClasses;
var defer = _TetherBase$Utils.defer;
var flush = _TetherBase$Utils.flush;
var getScrollBarSize = _TetherBase$Utils.getScrollBarSize;
var removeUtilElements = _TetherBase$Utils.removeUtilElements;

function within(a, b) {
  var diff = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];

  return a + diff >= b && b >= a - diff;
}

var transformKey = (function () {
  if (typeof document === 'undefined') {
    return '';
  }
  var el = document.createElement('div');

  var transforms = ['transform', 'webkitTransform', 'OTransform', 'MozTransform', 'msTransform'];
  for (var i = 0; i < transforms.length; ++i) {
    var key = transforms[i];
    if (el.style[key] !== undefined) {
      return key;
    }
  }
})();

var tethers = [];

var position = function position() {
  tethers.forEach(function (tether) {
    tether.position(false);
  });
  flush();
};

function now() {
  if (typeof performance !== 'undefined' && typeof performance.now !== 'undefined') {
    return performance.now();
  }
  return +new Date();
}

(function () {
  var lastCall = null;
  var lastDuration = null;
  var pendingTimeout = null;

  var tick = function tick() {
    if (typeof lastDuration !== 'undefined' && lastDuration > 16) {
      // We voluntarily throttle ourselves if we can't manage 60fps
      lastDuration = Math.min(lastDuration - 16, 250);

      // Just in case this is the last event, remember to position just once more
      pendingTimeout = setTimeout(tick, 250);
      return;
    }

    if (typeof lastCall !== 'undefined' && now() - lastCall < 10) {
      // Some browsers call events a little too frequently, refuse to run more than is reasonable
      return;
    }

    if (pendingTimeout != null) {
      clearTimeout(pendingTimeout);
      pendingTimeout = null;
    }

    lastCall = now();
    position();
    lastDuration = now() - lastCall;
  };

  if (typeof window !== 'undefined' && typeof window.addEventListener !== 'undefined') {
    ['resize', 'scroll', 'touchmove'].forEach(function (event) {
      window.addEventListener(event, tick);
    });
  }
})();

var MIRROR_LR = {
  center: 'center',
  left: 'right',
  right: 'left'
};

var MIRROR_TB = {
  middle: 'middle',
  top: 'bottom',
  bottom: 'top'
};

var OFFSET_MAP = {
  top: 0,
  left: 0,
  middle: '50%',
  center: '50%',
  bottom: '100%',
  right: '100%'
};

var autoToFixedAttachment = function autoToFixedAttachment(attachment, relativeToAttachment) {
  var left = attachment.left;
  var top = attachment.top;

  if (left === 'auto') {
    left = MIRROR_LR[relativeToAttachment.left];
  }

  if (top === 'auto') {
    top = MIRROR_TB[relativeToAttachment.top];
  }

  return { left: left, top: top };
};

var attachmentToOffset = function attachmentToOffset(attachment) {
  var left = attachment.left;
  var top = attachment.top;

  if (typeof OFFSET_MAP[attachment.left] !== 'undefined') {
    left = OFFSET_MAP[attachment.left];
  }

  if (typeof OFFSET_MAP[attachment.top] !== 'undefined') {
    top = OFFSET_MAP[attachment.top];
  }

  return { left: left, top: top };
};

function addOffset() {
  var out = { top: 0, left: 0 };

  for (var _len = arguments.length, offsets = Array(_len), _key = 0; _key < _len; _key++) {
    offsets[_key] = arguments[_key];
  }

  offsets.forEach(function (_ref) {
    var top = _ref.top;
    var left = _ref.left;

    if (typeof top === 'string') {
      top = parseFloat(top, 10);
    }
    if (typeof left === 'string') {
      left = parseFloat(left, 10);
    }

    out.top += top;
    out.left += left;
  });

  return out;
}

function offsetToPx(offset, size) {
  if (typeof offset.left === 'string' && offset.left.indexOf('%') !== -1) {
    offset.left = parseFloat(offset.left, 10) / 100 * size.width;
  }
  if (typeof offset.top === 'string' && offset.top.indexOf('%') !== -1) {
    offset.top = parseFloat(offset.top, 10) / 100 * size.height;
  }

  return offset;
}

var parseOffset = function parseOffset(value) {
  var _value$split = value.split(' ');

  var _value$split2 = _slicedToArray(_value$split, 2);

  var top = _value$split2[0];
  var left = _value$split2[1];

  return { top: top, left: left };
};
var parseAttachment = parseOffset;

var TetherClass = (function (_Evented) {
  _inherits(TetherClass, _Evented);

  function TetherClass(options) {
    var _this = this;

    _classCallCheck(this, TetherClass);

    _get(Object.getPrototypeOf(TetherClass.prototype), 'constructor', this).call(this);
    this.position = this.position.bind(this);

    tethers.push(this);

    this.history = [];

    this.setOptions(options, false);

    TetherBase.modules.forEach(function (module) {
      if (typeof module.initialize !== 'undefined') {
        module.initialize.call(_this);
      }
    });

    this.position();
  }

  _createClass(TetherClass, [{
    key: 'getClass',
    value: function getClass() {
      var key = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
      var classes = this.options.classes;

      if (typeof classes !== 'undefined' && classes[key]) {
        return this.options.classes[key];
      } else if (this.options.classPrefix) {
        return this.options.classPrefix + '-' + key;
      } else {
        return key;
      }
    }
  }, {
    key: 'setOptions',
    value: function setOptions(options) {
      var _this2 = this;

      var pos = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

      var defaults = {
        offset: '0 0',
        targetOffset: '0 0',
        targetAttachment: 'auto auto',
        classPrefix: 'tether'
      };

      this.options = extend(defaults, options);

      var _options = this.options;
      var element = _options.element;
      var target = _options.target;
      var targetModifier = _options.targetModifier;

      this.element = element;
      this.target = target;
      this.targetModifier = targetModifier;

      if (this.target === 'viewport') {
        this.target = document.body;
        this.targetModifier = 'visible';
      } else if (this.target === 'scroll-handle') {
        this.target = document.body;
        this.targetModifier = 'scroll-handle';
      }

      ['element', 'target'].forEach(function (key) {
        if (typeof _this2[key] === 'undefined') {
          throw new Error('Tether Error: Both element and target must be defined');
        }

        if (typeof _this2[key].jquery !== 'undefined') {
          _this2[key] = _this2[key][0];
        } else if (typeof _this2[key] === 'string') {
          _this2[key] = document.querySelector(_this2[key]);
        }
      });

      addClass(this.element, this.getClass('element'));
      if (!(this.options.addTargetClasses === false)) {
        addClass(this.target, this.getClass('target'));
      }

      if (!this.options.attachment) {
        throw new Error('Tether Error: You must provide an attachment');
      }

      this.targetAttachment = parseAttachment(this.options.targetAttachment);
      this.attachment = parseAttachment(this.options.attachment);
      this.offset = parseOffset(this.options.offset);
      this.targetOffset = parseOffset(this.options.targetOffset);

      if (typeof this.scrollParents !== 'undefined') {
        this.disable();
      }

      if (this.targetModifier === 'scroll-handle') {
        this.scrollParents = [this.target];
      } else {
        this.scrollParents = getScrollParents(this.target);
      }

      if (!(this.options.enabled === false)) {
        this.enable(pos);
      }
    }
  }, {
    key: 'getTargetBounds',
    value: function getTargetBounds() {
      if (typeof this.targetModifier !== 'undefined') {
        if (this.targetModifier === 'visible') {
          if (this.target === document.body) {
            return { top: pageYOffset, left: pageXOffset, height: innerHeight, width: innerWidth };
          } else {
            var bounds = getBounds(this.target);

            var out = {
              height: bounds.height,
              width: bounds.width,
              top: bounds.top,
              left: bounds.left
            };

            out.height = Math.min(out.height, bounds.height - (pageYOffset - bounds.top));
            out.height = Math.min(out.height, bounds.height - (bounds.top + bounds.height - (pageYOffset + innerHeight)));
            out.height = Math.min(innerHeight, out.height);
            out.height -= 2;

            out.width = Math.min(out.width, bounds.width - (pageXOffset - bounds.left));
            out.width = Math.min(out.width, bounds.width - (bounds.left + bounds.width - (pageXOffset + innerWidth)));
            out.width = Math.min(innerWidth, out.width);
            out.width -= 2;

            if (out.top < pageYOffset) {
              out.top = pageYOffset;
            }
            if (out.left < pageXOffset) {
              out.left = pageXOffset;
            }

            return out;
          }
        } else if (this.targetModifier === 'scroll-handle') {
          var bounds = undefined;
          var target = this.target;
          if (target === document.body) {
            target = document.documentElement;

            bounds = {
              left: pageXOffset,
              top: pageYOffset,
              height: innerHeight,
              width: innerWidth
            };
          } else {
            bounds = getBounds(target);
          }

          var style = getComputedStyle(target);

          var hasBottomScroll = target.scrollWidth > target.clientWidth || [style.overflow, style.overflowX].indexOf('scroll') >= 0 || this.target !== document.body;

          var scrollBottom = 0;
          if (hasBottomScroll) {
            scrollBottom = 15;
          }

          var height = bounds.height - parseFloat(style.borderTopWidth) - parseFloat(style.borderBottomWidth) - scrollBottom;

          var out = {
            width: 15,
            height: height * 0.975 * (height / target.scrollHeight),
            left: bounds.left + bounds.width - parseFloat(style.borderLeftWidth) - 15
          };

          var fitAdj = 0;
          if (height < 408 && this.target === document.body) {
            fitAdj = -0.00011 * Math.pow(height, 2) - 0.00727 * height + 22.58;
          }

          if (this.target !== document.body) {
            out.height = Math.max(out.height, 24);
          }

          var scrollPercentage = this.target.scrollTop / (target.scrollHeight - height);
          out.top = scrollPercentage * (height - out.height - fitAdj) + bounds.top + parseFloat(style.borderTopWidth);

          if (this.target === document.body) {
            out.height = Math.max(out.height, 24);
          }

          return out;
        }
      } else {
        return getBounds(this.target);
      }
    }
  }, {
    key: 'clearCache',
    value: function clearCache() {
      this._cache = {};
    }
  }, {
    key: 'cache',
    value: function cache(k, getter) {
      // More than one module will often need the same DOM info, so
      // we keep a cache which is cleared on each position call
      if (typeof this._cache === 'undefined') {
        this._cache = {};
      }

      if (typeof this._cache[k] === 'undefined') {
        this._cache[k] = getter.call(this);
      }

      return this._cache[k];
    }
  }, {
    key: 'enable',
    value: function enable() {
      var _this3 = this;

      var pos = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

      if (!(this.options.addTargetClasses === false)) {
        addClass(this.target, this.getClass('enabled'));
      }
      addClass(this.element, this.getClass('enabled'));
      this.enabled = true;

      this.scrollParents.forEach(function (parent) {
        if (parent !== document) {
          parent.addEventListener('scroll', _this3.position);
        }
      });

      if (pos) {
        this.position();
      }
    }
  }, {
    key: 'disable',
    value: function disable() {
      var _this4 = this;

      removeClass(this.target, this.getClass('enabled'));
      removeClass(this.element, this.getClass('enabled'));
      this.enabled = false;

      if (typeof this.scrollParents !== 'undefined') {
        this.scrollParents.forEach(function (parent) {
          parent.removeEventListener('scroll', _this4.position);
        });
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this5 = this;

      this.disable();

      tethers.forEach(function (tether, i) {
        if (tether === _this5) {
          tethers.splice(i, 1);
        }
      });

      // Remove any elements we were using for convenience from the DOM
      if (tethers.length === 0) {
        removeUtilElements();
      }
    }
  }, {
    key: 'updateAttachClasses',
    value: function updateAttachClasses(elementAttach, targetAttach) {
      var _this6 = this;

      elementAttach = elementAttach || this.attachment;
      targetAttach = targetAttach || this.targetAttachment;
      var sides = ['left', 'top', 'bottom', 'right', 'middle', 'center'];

      if (typeof this._addAttachClasses !== 'undefined' && this._addAttachClasses.length) {
        // updateAttachClasses can be called more than once in a position call, so
        // we need to clean up after ourselves such that when the last defer gets
        // ran it doesn't add any extra classes from previous calls.
        this._addAttachClasses.splice(0, this._addAttachClasses.length);
      }

      if (typeof this._addAttachClasses === 'undefined') {
        this._addAttachClasses = [];
      }
      var add = this._addAttachClasses;

      if (elementAttach.top) {
        add.push(this.getClass('element-attached') + '-' + elementAttach.top);
      }
      if (elementAttach.left) {
        add.push(this.getClass('element-attached') + '-' + elementAttach.left);
      }
      if (targetAttach.top) {
        add.push(this.getClass('target-attached') + '-' + targetAttach.top);
      }
      if (targetAttach.left) {
        add.push(this.getClass('target-attached') + '-' + targetAttach.left);
      }

      var all = [];
      sides.forEach(function (side) {
        all.push(_this6.getClass('element-attached') + '-' + side);
        all.push(_this6.getClass('target-attached') + '-' + side);
      });

      defer(function () {
        if (!(typeof _this6._addAttachClasses !== 'undefined')) {
          return;
        }

        updateClasses(_this6.element, _this6._addAttachClasses, all);
        if (!(_this6.options.addTargetClasses === false)) {
          updateClasses(_this6.target, _this6._addAttachClasses, all);
        }

        delete _this6._addAttachClasses;
      });
    }
  }, {
    key: 'position',
    value: function position() {
      var _this7 = this;

      var flushChanges = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

      // flushChanges commits the changes immediately, leave true unless you are positioning multiple
      // tethers (in which case call Tether.Utils.flush yourself when you're done)

      if (!this.enabled) {
        return;
      }

      this.clearCache();

      // Turn 'auto' attachments into the appropriate corner or edge
      var targetAttachment = autoToFixedAttachment(this.targetAttachment, this.attachment);

      this.updateAttachClasses(this.attachment, targetAttachment);

      var elementPos = this.cache('element-bounds', function () {
        return getBounds(_this7.element);
      });

      var width = elementPos.width;
      var height = elementPos.height;

      if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
        var _lastSize = this.lastSize;

        // We cache the height and width to make it possible to position elements that are
        // getting hidden.
        width = _lastSize.width;
        height = _lastSize.height;
      } else {
        this.lastSize = { width: width, height: height };
      }

      var targetPos = this.cache('target-bounds', function () {
        return _this7.getTargetBounds();
      });
      var targetSize = targetPos;

      // Get an actual px offset from the attachment
      var offset = offsetToPx(attachmentToOffset(this.attachment), { width: width, height: height });
      var targetOffset = offsetToPx(attachmentToOffset(targetAttachment), targetSize);

      var manualOffset = offsetToPx(this.offset, { width: width, height: height });
      var manualTargetOffset = offsetToPx(this.targetOffset, targetSize);

      // Add the manually provided offset
      offset = addOffset(offset, manualOffset);
      targetOffset = addOffset(targetOffset, manualTargetOffset);

      // It's now our goal to make (element position + offset) == (target position + target offset)
      var left = targetPos.left + targetOffset.left - offset.left;
      var top = targetPos.top + targetOffset.top - offset.top;

      for (var i = 0; i < TetherBase.modules.length; ++i) {
        var _module2 = TetherBase.modules[i];
        var ret = _module2.position.call(this, {
          left: left,
          top: top,
          targetAttachment: targetAttachment,
          targetPos: targetPos,
          elementPos: elementPos,
          offset: offset,
          targetOffset: targetOffset,
          manualOffset: manualOffset,
          manualTargetOffset: manualTargetOffset,
          scrollbarSize: scrollbarSize,
          attachment: this.attachment
        });

        if (ret === false) {
          return false;
        } else if (typeof ret === 'undefined' || typeof ret !== 'object') {
          continue;
        } else {
          top = ret.top;
          left = ret.left;
        }
      }

      // We describe the position three different ways to give the optimizer
      // a chance to decide the best possible way to position the element
      // with the fewest repaints.
      var next = {
        // It's position relative to the page (absolute positioning when
        // the element is a child of the body)
        page: {
          top: top,
          left: left
        },

        // It's position relative to the viewport (fixed positioning)
        viewport: {
          top: top - pageYOffset,
          bottom: pageYOffset - top - height + innerHeight,
          left: left - pageXOffset,
          right: pageXOffset - left - width + innerWidth
        }
      };

      var scrollbarSize = undefined;
      if (document.body.scrollWidth > window.innerWidth) {
        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
        next.viewport.bottom -= scrollbarSize.height;
      }

      if (document.body.scrollHeight > window.innerHeight) {
        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
        next.viewport.right -= scrollbarSize.width;
      }

      if (['', 'static'].indexOf(document.body.style.position) === -1 || ['', 'static'].indexOf(document.body.parentElement.style.position) === -1) {
        // Absolute positioning in the body will be relative to the page, not the 'initial containing block'
        next.page.bottom = document.body.scrollHeight - top - height;
        next.page.right = document.body.scrollWidth - left - width;
      }

      if (typeof this.options.optimizations !== 'undefined' && this.options.optimizations.moveElement !== false && !(typeof this.targetModifier !== 'undefined')) {
        (function () {
          var offsetParent = _this7.cache('target-offsetparent', function () {
            return getOffsetParent(_this7.target);
          });
          var offsetPosition = _this7.cache('target-offsetparent-bounds', function () {
            return getBounds(offsetParent);
          });
          var offsetParentStyle = getComputedStyle(offsetParent);
          var offsetParentSize = offsetPosition;

          var offsetBorder = {};
          ['Top', 'Left', 'Bottom', 'Right'].forEach(function (side) {
            offsetBorder[side.toLowerCase()] = parseFloat(offsetParentStyle['border' + side + 'Width']);
          });

          offsetPosition.right = document.body.scrollWidth - offsetPosition.left - offsetParentSize.width + offsetBorder.right;
          offsetPosition.bottom = document.body.scrollHeight - offsetPosition.top - offsetParentSize.height + offsetBorder.bottom;

          if (next.page.top >= offsetPosition.top + offsetBorder.top && next.page.bottom >= offsetPosition.bottom) {
            if (next.page.left >= offsetPosition.left + offsetBorder.left && next.page.right >= offsetPosition.right) {
              // We're within the visible part of the target's scroll parent
              var scrollTop = offsetParent.scrollTop;
              var scrollLeft = offsetParent.scrollLeft;

              // It's position relative to the target's offset parent (absolute positioning when
              // the element is moved to be a child of the target's offset parent).
              next.offset = {
                top: next.page.top - offsetPosition.top + scrollTop - offsetBorder.top,
                left: next.page.left - offsetPosition.left + scrollLeft - offsetBorder.left
              };
            }
          }
        })();
      }

      // We could also travel up the DOM and try each containing context, rather than only
      // looking at the body, but we're gonna get diminishing returns.

      this.move(next);

      this.history.unshift(next);

      if (this.history.length > 3) {
        this.history.pop();
      }

      if (flushChanges) {
        flush();
      }

      return true;
    }

    // THE ISSUE
  }, {
    key: 'move',
    value: function move(pos) {
      var _this8 = this;

      if (!(typeof this.element.parentNode !== 'undefined')) {
        return;
      }

      var same = {};

      for (var type in pos) {
        same[type] = {};

        for (var key in pos[type]) {
          var found = false;

          for (var i = 0; i < this.history.length; ++i) {
            var point = this.history[i];
            if (typeof point[type] !== 'undefined' && !within(point[type][key], pos[type][key])) {
              found = true;
              break;
            }
          }

          if (!found) {
            same[type][key] = true;
          }
        }
      }

      var css = { top: '', left: '', right: '', bottom: '' };

      var transcribe = function transcribe(_same, _pos) {
        var hasOptimizations = typeof _this8.options.optimizations !== 'undefined';
        var gpu = hasOptimizations ? _this8.options.optimizations.gpu : null;
        if (gpu !== false) {
          var yPos = undefined,
              xPos = undefined;
          if (_same.top) {
            css.top = 0;
            yPos = _pos.top;
          } else {
            css.bottom = 0;
            yPos = -_pos.bottom;
          }

          if (_same.left) {
            css.left = 0;
            xPos = _pos.left;
          } else {
            css.right = 0;
            xPos = -_pos.right;
          }

          css[transformKey] = 'translateX(' + Math.round(xPos) + 'px) translateY(' + Math.round(yPos) + 'px)';

          if (transformKey !== 'msTransform') {
            // The Z transform will keep this in the GPU (faster, and prevents artifacts),
            // but IE9 doesn't support 3d transforms and will choke.
            css[transformKey] += " translateZ(0)";
          }
        } else {
          if (_same.top) {
            css.top = _pos.top + 'px';
          } else {
            css.bottom = _pos.bottom + 'px';
          }

          if (_same.left) {
            css.left = _pos.left + 'px';
          } else {
            css.right = _pos.right + 'px';
          }
        }
      };

      var moved = false;
      if ((same.page.top || same.page.bottom) && (same.page.left || same.page.right)) {
        css.position = 'absolute';
        transcribe(same.page, pos.page);
      } else if ((same.viewport.top || same.viewport.bottom) && (same.viewport.left || same.viewport.right)) {
        css.position = 'fixed';
        transcribe(same.viewport, pos.viewport);
      } else if (typeof same.offset !== 'undefined' && same.offset.top && same.offset.left) {
        (function () {
          css.position = 'absolute';
          var offsetParent = _this8.cache('target-offsetparent', function () {
            return getOffsetParent(_this8.target);
          });

          if (getOffsetParent(_this8.element) !== offsetParent) {
            defer(function () {
              _this8.element.parentNode.removeChild(_this8.element);
              offsetParent.appendChild(_this8.element);
            });
          }

          transcribe(same.offset, pos.offset);
          moved = true;
        })();
      } else {
        css.position = 'absolute';
        transcribe({ top: true, left: true }, pos.page);
      }

      if (!moved) {
        var offsetParentIsBody = true;
        var currentNode = this.element.parentNode;
        while (currentNode && currentNode.nodeType === 1 && currentNode.tagName !== 'BODY') {
          if (getComputedStyle(currentNode).position !== 'static') {
            offsetParentIsBody = false;
            break;
          }

          currentNode = currentNode.parentNode;
        }

        if (!offsetParentIsBody) {
          this.element.parentNode.removeChild(this.element);
          document.body.appendChild(this.element);
        }
      }

      // Any css change will trigger a repaint, so let's avoid one if nothing changed
      var writeCSS = {};
      var write = false;
      for (var key in css) {
        var val = css[key];
        var elVal = this.element.style[key];

        if (elVal !== val) {
          write = true;
          writeCSS[key] = val;
        }
      }

      if (write) {
        defer(function () {
          extend(_this8.element.style, writeCSS);
        });
      }
    }
  }]);

  return TetherClass;
})(Evented);

TetherClass.modules = [];

TetherBase.position = position;

var Tether = extend(TetherClass, TetherBase);
/* globals TetherBase */

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _TetherBase$Utils = TetherBase.Utils;
var getBounds = _TetherBase$Utils.getBounds;
var extend = _TetherBase$Utils.extend;
var updateClasses = _TetherBase$Utils.updateClasses;
var defer = _TetherBase$Utils.defer;

var BOUNDS_FORMAT = ['left', 'top', 'right', 'bottom'];

function getBoundingRect(tether, to) {
  if (to === 'scrollParent') {
    to = tether.scrollParents[0];
  } else if (to === 'window') {
    to = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset];
  }

  if (to === document) {
    to = to.documentElement;
  }

  if (typeof to.nodeType !== 'undefined') {
    (function () {
      var size = getBounds(to);
      var pos = size;
      var style = getComputedStyle(to);

      to = [pos.left, pos.top, size.width + pos.left, size.height + pos.top];

      BOUNDS_FORMAT.forEach(function (side, i) {
        side = side[0].toUpperCase() + side.substr(1);
        if (side === 'Top' || side === 'Left') {
          to[i] += parseFloat(style['border' + side + 'Width']);
        } else {
          to[i] -= parseFloat(style['border' + side + 'Width']);
        }
      });
    })();
  }

  return to;
}

TetherBase.modules.push({
  position: function position(_ref) {
    var _this = this;

    var top = _ref.top;
    var left = _ref.left;
    var targetAttachment = _ref.targetAttachment;

    if (!this.options.constraints) {
      return true;
    }

    var _cache = this.cache('element-bounds', function () {
      return getBounds(_this.element);
    });

    var height = _cache.height;
    var width = _cache.width;

    if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
      var _lastSize = this.lastSize;

      // Handle the item getting hidden as a result of our positioning without glitching
      // the classes in and out
      width = _lastSize.width;
      height = _lastSize.height;
    }

    var targetSize = this.cache('target-bounds', function () {
      return _this.getTargetBounds();
    });

    var targetHeight = targetSize.height;
    var targetWidth = targetSize.width;

    var allClasses = [this.getClass('pinned'), this.getClass('out-of-bounds')];

    this.options.constraints.forEach(function (constraint) {
      var outOfBoundsClass = constraint.outOfBoundsClass;
      var pinnedClass = constraint.pinnedClass;

      if (outOfBoundsClass) {
        allClasses.push(outOfBoundsClass);
      }
      if (pinnedClass) {
        allClasses.push(pinnedClass);
      }
    });

    allClasses.forEach(function (cls) {
      ['left', 'top', 'right', 'bottom'].forEach(function (side) {
        allClasses.push(cls + '-' + side);
      });
    });

    var addClasses = [];

    var tAttachment = extend({}, targetAttachment);
    var eAttachment = extend({}, this.attachment);

    this.options.constraints.forEach(function (constraint) {
      var to = constraint.to;
      var attachment = constraint.attachment;
      var pin = constraint.pin;

      if (typeof attachment === 'undefined') {
        attachment = '';
      }

      var changeAttachX = undefined,
          changeAttachY = undefined;
      if (attachment.indexOf(' ') >= 0) {
        var _attachment$split = attachment.split(' ');

        var _attachment$split2 = _slicedToArray(_attachment$split, 2);

        changeAttachY = _attachment$split2[0];
        changeAttachX = _attachment$split2[1];
      } else {
        changeAttachX = changeAttachY = attachment;
      }

      var bounds = getBoundingRect(_this, to);

      if (changeAttachY === 'target' || changeAttachY === 'both') {
        if (top < bounds[1] && tAttachment.top === 'top') {
          top += targetHeight;
          tAttachment.top = 'bottom';
        }

        if (top + height > bounds[3] && tAttachment.top === 'bottom') {
          top -= targetHeight;
          tAttachment.top = 'top';
        }
      }

      if (changeAttachY === 'together') {
        if (tAttachment.top === 'top') {
          if (eAttachment.top === 'bottom' && top < bounds[1]) {
            top += targetHeight;
            tAttachment.top = 'bottom';

            top += height;
            eAttachment.top = 'top';
          } else if (eAttachment.top === 'top' && top + height > bounds[3] && top - (height - targetHeight) >= bounds[1]) {
            top -= height - targetHeight;
            tAttachment.top = 'bottom';

            eAttachment.top = 'bottom';
          }
        }

        if (tAttachment.top === 'bottom') {
          if (eAttachment.top === 'top' && top + height > bounds[3]) {
            top -= targetHeight;
            tAttachment.top = 'top';

            top -= height;
            eAttachment.top = 'bottom';
          } else if (eAttachment.top === 'bottom' && top < bounds[1] && top + (height * 2 - targetHeight) <= bounds[3]) {
            top += height - targetHeight;
            tAttachment.top = 'top';

            eAttachment.top = 'top';
          }
        }

        if (tAttachment.top === 'middle') {
          if (top + height > bounds[3] && eAttachment.top === 'top') {
            top -= height;
            eAttachment.top = 'bottom';
          } else if (top < bounds[1] && eAttachment.top === 'bottom') {
            top += height;
            eAttachment.top = 'top';
          }
        }
      }

      if (changeAttachX === 'target' || changeAttachX === 'both') {
        if (left < bounds[0] && tAttachment.left === 'left') {
          left += targetWidth;
          tAttachment.left = 'right';
        }

        if (left + width > bounds[2] && tAttachment.left === 'right') {
          left -= targetWidth;
          tAttachment.left = 'left';
        }
      }

      if (changeAttachX === 'together') {
        if (left < bounds[0] && tAttachment.left === 'left') {
          if (eAttachment.left === 'right') {
            left += targetWidth;
            tAttachment.left = 'right';

            left += width;
            eAttachment.left = 'left';
          } else if (eAttachment.left === 'left') {
            left += targetWidth;
            tAttachment.left = 'right';

            left -= width;
            eAttachment.left = 'right';
          }
        } else if (left + width > bounds[2] && tAttachment.left === 'right') {
          if (eAttachment.left === 'left') {
            left -= targetWidth;
            tAttachment.left = 'left';

            left -= width;
            eAttachment.left = 'right';
          } else if (eAttachment.left === 'right') {
            left -= targetWidth;
            tAttachment.left = 'left';

            left += width;
            eAttachment.left = 'left';
          }
        } else if (tAttachment.left === 'center') {
          if (left + width > bounds[2] && eAttachment.left === 'left') {
            left -= width;
            eAttachment.left = 'right';
          } else if (left < bounds[0] && eAttachment.left === 'right') {
            left += width;
            eAttachment.left = 'left';
          }
        }
      }

      if (changeAttachY === 'element' || changeAttachY === 'both') {
        if (top < bounds[1] && eAttachment.top === 'bottom') {
          top += height;
          eAttachment.top = 'top';
        }

        if (top + height > bounds[3] && eAttachment.top === 'top') {
          top -= height;
          eAttachment.top = 'bottom';
        }
      }

      if (changeAttachX === 'element' || changeAttachX === 'both') {
        if (left < bounds[0]) {
          if (eAttachment.left === 'right') {
            left += width;
            eAttachment.left = 'left';
          } else if (eAttachment.left === 'center') {
            left += width / 2;
            eAttachment.left = 'left';
          }
        }

        if (left + width > bounds[2]) {
          if (eAttachment.left === 'left') {
            left -= width;
            eAttachment.left = 'right';
          } else if (eAttachment.left === 'center') {
            left -= width / 2;
            eAttachment.left = 'right';
          }
        }
      }

      if (typeof pin === 'string') {
        pin = pin.split(',').map(function (p) {
          return p.trim();
        });
      } else if (pin === true) {
        pin = ['top', 'left', 'right', 'bottom'];
      }

      pin = pin || [];

      var pinned = [];
      var oob = [];

      if (top < bounds[1]) {
        if (pin.indexOf('top') >= 0) {
          top = bounds[1];
          pinned.push('top');
        } else {
          oob.push('top');
        }
      }

      if (top + height > bounds[3]) {
        if (pin.indexOf('bottom') >= 0) {
          top = bounds[3] - height;
          pinned.push('bottom');
        } else {
          oob.push('bottom');
        }
      }

      if (left < bounds[0]) {
        if (pin.indexOf('left') >= 0) {
          left = bounds[0];
          pinned.push('left');
        } else {
          oob.push('left');
        }
      }

      if (left + width > bounds[2]) {
        if (pin.indexOf('right') >= 0) {
          left = bounds[2] - width;
          pinned.push('right');
        } else {
          oob.push('right');
        }
      }

      if (pinned.length) {
        (function () {
          var pinnedClass = undefined;
          if (typeof _this.options.pinnedClass !== 'undefined') {
            pinnedClass = _this.options.pinnedClass;
          } else {
            pinnedClass = _this.getClass('pinned');
          }

          addClasses.push(pinnedClass);
          pinned.forEach(function (side) {
            addClasses.push(pinnedClass + '-' + side);
          });
        })();
      }

      if (oob.length) {
        (function () {
          var oobClass = undefined;
          if (typeof _this.options.outOfBoundsClass !== 'undefined') {
            oobClass = _this.options.outOfBoundsClass;
          } else {
            oobClass = _this.getClass('out-of-bounds');
          }

          addClasses.push(oobClass);
          oob.forEach(function (side) {
            addClasses.push(oobClass + '-' + side);
          });
        })();
      }

      if (pinned.indexOf('left') >= 0 || pinned.indexOf('right') >= 0) {
        eAttachment.left = tAttachment.left = false;
      }
      if (pinned.indexOf('top') >= 0 || pinned.indexOf('bottom') >= 0) {
        eAttachment.top = tAttachment.top = false;
      }

      if (tAttachment.top !== targetAttachment.top || tAttachment.left !== targetAttachment.left || eAttachment.top !== _this.attachment.top || eAttachment.left !== _this.attachment.left) {
        _this.updateAttachClasses(eAttachment, tAttachment);
        _this.trigger('update', {
          attachment: eAttachment,
          targetAttachment: tAttachment
        });
      }
    });

    defer(function () {
      if (!(_this.options.addTargetClasses === false)) {
        updateClasses(_this.target, addClasses, allClasses);
      }
      updateClasses(_this.element, addClasses, allClasses);
    });

    return { top: top, left: left };
  }
});
/* globals TetherBase */

'use strict';

var _TetherBase$Utils = TetherBase.Utils;
var getBounds = _TetherBase$Utils.getBounds;
var updateClasses = _TetherBase$Utils.updateClasses;
var defer = _TetherBase$Utils.defer;

TetherBase.modules.push({
  position: function position(_ref) {
    var _this = this;

    var top = _ref.top;
    var left = _ref.left;

    var _cache = this.cache('element-bounds', function () {
      return getBounds(_this.element);
    });

    var height = _cache.height;
    var width = _cache.width;

    var targetPos = this.getTargetBounds();

    var bottom = top + height;
    var right = left + width;

    var abutted = [];
    if (top <= targetPos.bottom && bottom >= targetPos.top) {
      ['left', 'right'].forEach(function (side) {
        var targetPosSide = targetPos[side];
        if (targetPosSide === left || targetPosSide === right) {
          abutted.push(side);
        }
      });
    }

    if (left <= targetPos.right && right >= targetPos.left) {
      ['top', 'bottom'].forEach(function (side) {
        var targetPosSide = targetPos[side];
        if (targetPosSide === top || targetPosSide === bottom) {
          abutted.push(side);
        }
      });
    }

    var allClasses = [];
    var addClasses = [];

    var sides = ['left', 'top', 'right', 'bottom'];
    allClasses.push(this.getClass('abutted'));
    sides.forEach(function (side) {
      allClasses.push(_this.getClass('abutted') + '-' + side);
    });

    if (abutted.length) {
      addClasses.push(this.getClass('abutted'));
    }

    abutted.forEach(function (side) {
      addClasses.push(_this.getClass('abutted') + '-' + side);
    });

    defer(function () {
      if (!(_this.options.addTargetClasses === false)) {
        updateClasses(_this.target, addClasses, allClasses);
      }
      updateClasses(_this.element, addClasses, allClasses);
    });

    return true;
  }
});
/* globals TetherBase */

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

TetherBase.modules.push({
  position: function position(_ref) {
    var top = _ref.top;
    var left = _ref.left;

    if (!this.options.shift) {
      return;
    }

    var shift = this.options.shift;
    if (typeof this.options.shift === 'function') {
      shift = this.options.shift.call(this, { top: top, left: left });
    }

    var shiftTop = undefined,
        shiftLeft = undefined;
    if (typeof shift === 'string') {
      shift = shift.split(' ');
      shift[1] = shift[1] || shift[0];

      var _shift = shift;

      var _shift2 = _slicedToArray(_shift, 2);

      shiftTop = _shift2[0];
      shiftLeft = _shift2[1];

      shiftTop = parseFloat(shiftTop, 10);
      shiftLeft = parseFloat(shiftLeft, 10);
    } else {
      shiftTop = shift.top;
      shiftLeft = shift.left;
    }

    top += shiftTop;
    left += shiftLeft;

    return { top: top, left: left };
  }
});
return Tether;

}));

}).call(this,require("1YiZ5S"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/tether/dist/js/tether.js","/../node_modules/tether/dist/js")
},{"1YiZ5S":9,"buffer":6}],12:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
(function(){

	var tools = {};

	/* ### ELEMENTS ######################################################## */

	tools.element = {};

	tools.element.hasClass = function(el, className) {
		if (el.classList) {
			return el.classList.contains(className);
		} else {
			return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
		}
	}

	tools.element.addClass = function(el, className) {
		if (el.classList) {
			el.classList.add(className);
		} else {
			el.className += ' ' + className;
			el.className = el.className.trim();
		}
	};

	tools.element.removeClass = function(el, className) {
		if (el.classList) {
			el.classList.remove(className);
		} else {
			el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		}
	};

	tools.element.toggleClass = function(el, className) {
		if (el.classList) {
			el.classList.toggle(className);
		} else {
			if (tools.element.hasClass(el, className)) {
				tools.element.removeClass(el, className);
			} else {
				tools.element.addClass(el, className);
			}
		}
	}

	if (typeof exports === 'object') {
		module.exports = tools;
	} else {
		DarkTip.tools = tools;
	}

})();

}).call(this,require("1YiZ5S"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/darktip-tools.js","/")
},{"1YiZ5S":9,"buffer":6}],13:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
(function(dust) {
	var getResult, helpers;

	getResult = function(obj, key) {
		if (obj && hasOwnProperty.call(obj, key)) {
			return obj[key];
		}
	};

	helpers = {
		i18n: function(chunk, context, bodies, params) {
			var contextlookup, localized, i, il,
				newParams      = params,
				i18nkey        = dust.helpers.tap(params.t, chunk, context),
				locale         = context.get('module.locale'),
				localeFallback = DarkTip.setting('locale.fallback.'+locale),
				localeDefault  = DarkTip.setting('locale.default'),
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

	dust.templateProvider = function(name, chunk, context) {
		var template = context.get('module.template.' + name);
		if (template) {
			return template;
		}
		return false;
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

}).call(this,require("1YiZ5S"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/dustjs-darktip.js","/")
},{"1YiZ5S":9,"buffer":6,"dustjs-linkedin":4}],14:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
(function(globalScope) {

	/* # INIT ################################################## */

	var log, merge, domReady, settings, settingsContext,
		doc                     = globalScope.document,
		MutationObserver        = globalScope.MutationObserver || globalScope.WebkitMutationObserver || false,
		DarkTip                 = {},
		repositoryStyles        = {},
		repositoryModules       = {},
		repositoryTriggerGroups = {},
		queueFnInit             = [],
		queueFnObserveAdd       = [],
		queueFnObserveRemove    = [];

	var q      = require('q'),
		dust   = require('dustjs-linkedin'),
		tether = require('tether'),
		tools  = require('./darktip-tools'),
		anime  = require('animejs');

	require('dustjs-linkedin/lib/compiler');
	require('dustjs-helpers');

	require('./dustjs-darktip');

	DarkTip.q      = q;
	DarkTip.dust   = dust;
	DarkTip.tether = tether;

	/* # TOOLS ################################################# */

	log = (function() {
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

	merge = function(target, src) {
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

	domReady = (function () {
		var listener;
		var queue = [];
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

	var hoverintent = (function() {
		var hoverintent = function(el, over, out) {
			var x, y, pX, pY,
				h = {},
				state = 0,
				timer = 0,
				cleanupFns = [],
				options = {
					sensitivity: 7,
					interval: 100,
					timeout: 0
				};
			var track = function(e) {
				x = e.clientX;
				y = e.clientY;
			};
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
			var dispatchOver = function(e) {
				dispatch(e, over, true);
			}
			var dispatchOut = function(e) {
				dispatch(e, out);
			}
			h.options = function(opt) {
				options = merge(options, opt || {});
			};
			h.remove = function() {
				for (var i = cleanupFns.length - 1; i >= 0; i--) {
					cleanupFns[i]();
				};
			}
			h.add = function(newElem) {
				newElem.addEventListener('mouseover', dispatchOver);
				newElem.addEventListener('mouseout', dispatchOut);
				cleanupFns.push(function() {
					newElem.removeEventListener('mouseover', dispatchOver);
					newElem.removeEventListener('mouseout', dispatchOut);
				});
			}
			if (el) {
				el.addEventListener('mouseover', dispatchOver);
				el.addEventListener('mouseout', dispatchOut);
				cleanupFns.push(function() {
					el.removeEventListener('mouseover', dispatchOver);
					el.removeEventListener('mouseout', dispatchOut);
				});
			}
			return h;
		};
		return hoverintent;
	})();

	/* # SETTINGS ############################################## */

	settings = {
		'cache': true,
		'locale': {
			'default': 'en_GB',
			'fallback': {
				'es_MX': 'es_ES'
			}
		},
		'module': {
			'setting': {
				'apicall': {
					'remoteCallbackParam': 'callback'
				},
				'template': {
					'loading': 'loading',
					'index'  : 'index',
					'error'  : 'error'
				},
				'tether': {
					'classPrefix': 'darktip-tether',
					'attachment': 'bottom center',
					'targetAttachment': 'top center',
					'constraints':[
						{
							'to': 'window',
							'attachment': 'together',
							'pin': true
						}
					]
				}
			},
			'hoverintent': {
				'timeout': 300,
				'interval': 75,
				'sensitivity': 7
			}
		}
	};

	settingsContext = dust.makeBase().push(settings);

	DarkTip.setting = function(key, data) {
		var tplNames = [];
		if (typeof data === 'undefined') {
			return settingsContext.get(key);
		}
		tplNames = key.match(/^module\.template\.([^\.].*)$/);
		if (tplNames && tplNames.length)
		{
			data = dust.loadSource(dust.compile(data, tplNames[1]));
		}
		settingsContext.set(key, data);
		return this;
	};

	DarkTip.css = (function() {
		var styleSheet,
			api        = {},
			styleTag   = doc.createElement('style');
		styleTag.setAttribute('media', 'screen');
		styleTag.setAttribute('type', 'text/css');
		domReady(function() {
			doc.head.appendChild(styleTag);
			styleSheet = styleTag.sheet;
		});
		api.add = function(selector, rules) {
			domReady(function() {
				var index = styleSheet.cssRules.length;
				if (styleSheet.insertRule) {
					styleSheet.insertRule(selector + '{' + rules + '}', index);
				} else if (styleSheet.addRule) {
					styleSheet.addRule(selector, rules, index);
				}
			});
			return api;
		};
		api.debug = function() {
			domReady(function() {
				log(styleSheet);
			});
		};
		return api;
	})();

	DarkTip.init = function() {
		for (var i = 0, j = queueFnInit.length; i < j; i++) {
			queueFnInit[i]();
		}
		domReady(function() {
			if (MutationObserver) {
				var watcher = new MutationObserver(function(mutations) {
					var added, removed, i, l, n, o;
					for (var m = 0, ml = mutations.length; m < ml; m++) {
						added = mutations[m].addedNodes;
						removed = mutations[m].removedNodes;
						for (i = 0, l = added.length; i < l; i++) {
							for (n = 0, o = queueFnObserveAdd.length; n < o; n++) {
								queueFnObserveAdd[n](added[i]);
							}
						}
						for (i = 0, l = removed.length; i < l; i++) {
							for (n = 0, o = queueFnObserveRemove.length; n < o; n++) {
								queueFnObserveRemove[n](removed[i]);
							}
						}
					}
				});
				watcher.observe(doc, {childList: true, subtree: true});
			}
		});
	};

	/* # PRIMING ############################################### */

	DarkTip.css.add('.darktip-tooltip', 'opacity:0; pointer-events:none;')
		.add('.darktip-active', 'opacity: 1; pointer-events:auto;')
		.add('.darktip-tooltip .loadingSpinner', 'animation: DarkTipLoadingSpinner 1s 0s infinite linear normal;')
		.add('@keyframes DarkTipLoadingSpinner', '0%: { transform:rotate(0deg); } 100%: { transform:rotate(360deg); }');

	DarkTip.setting('module.template.loading', '<div class="loading"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="12mm" height="12mm" viewBox="0 0 40 40" preserveAspectRatio="xMidYMid meet" fill="currentColor"><path opacity="0.2" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946 s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634 c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/><path class="loadingSpinner" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0 C22.32,8.481,24.301,9.057,26.013,10.047z"/></svg></div>');

	DarkTip.css.debug();

	/* # JSONP & API ########################################### */

	var dataReceiveFn = function(url, successFn, errorFn, cacheDuration, callBackName) {
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

	DarkTip.callApi = function(url, successFn, errorFn, cacheDuration, validationFn, processFn, remoteCallbackParam) {
		successFn.processFn = processFn;
		successFn.validationFn = validationFn;
		var cache = DarkTip.cache('apicall', url);
		if (typeof cache !== 'undefined') {
			return dataReceiveFn(url, successFn, errorFn, false)(cache);
		}
		return DarkTip.jsonp(url, successFn, errorFn, cacheDuration, remoteCallbackParam);
	};

	DarkTip.jsonp = (function() {
		var callbackId = 0;
		var jsonp = function(url, successFn, errorFn, cacheDuration, remoteCallbackParam, timeout) {
			remoteCallbackParam = remoteCallbackParam || 'callback';
			timeout = timeout || 5000;
			var callBackName = '_cb' + callbackId++;
			var queryString = '?' + remoteCallbackParam + '=DarkTip.jsonp.' + callBackName;
			var scr = doc.createElement('script');
			scr.type = 'text/javascript';
			scr.src = url + queryString;
			var head = doc.querySelector('head');
			head.insertBefore(scr, head.firstChild);
			jsonp[callBackName] = dataReceiveFn(url, successFn, errorFn, cacheDuration, callBackName);
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

	/* # CACHE ################################################# */

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
			var getKey = function(region, key) {
				return ('DarkTip_cache_' + region + '_' + key);
			};
			cache.read = function(region, key) {
				if (!DarkTip.setting('cache')) {
					return undefined;
				}
				var result = undefined;
				var rawitem = globalScope.localStorage.getItem(getKey(region, key));
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
					globalScope.localStorage.setItem(getKey(region, key), JSON.stringify({'maxtime': maxtime, 'content': data}));
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
				if (!DarkTip.setting('cache')) {
					return undefined;
				}
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

	/* # STYLE ################################################# */

	DarkTip.style = function(styleId) {
		if (typeof repositoryStyles[styleId] !== 'undefined') {
			return repositoryStyles[styleId];
		}
		var Style = function() {
			var self = this,
				styleContext = dust.makeBase().push({}),
				wrappperTplIndex,
				wrappperTplLoading;
			var getCssClass = function() {
				return ('darktip-style-' + styleId);
			};
			this.cssClass = function() {
				return getCssClass();
			};
			this.var = function(key, value) {
				styleContext.set(key, value);
				return self;
			};
			this.css = function(selector, rules) {
				selector = '.' + getCssClass() + (selector ? ' ' + selector : '');
				dust.renderSource(rules, styleContext, function(err, compiledRules) {
					if (!err) {
						DarkTip.css.add(selector, compiledRules);
					}
				});
				return self;
			};
			this.wrapper = function(before, after) {
				before = before || '';
				after  = after  || '';
				wrappperTplIndex   = dust.loadSource(dust.compile((before + '{>"{module.setting.template.index}" /}'   + after), 'wrapper-index'));
				wrappperTplLoading = dust.loadSource(dust.compile((before + '{>"{module.setting.template.loading}" /}' + after), 'wrapper-loading'));
				return self;
			};
			this.getWrappedIndexTplName = function() {
				return 'wrapper-index-style-' + styleId;
			};
			this.getWrappedIndexTpl = function() {
				return wrappperTplIndex || false;
			};
			this.getWrappedLoadingTplName = function() {
				return 'wrapper-loading-style-' + styleId;
			};
			this.getWrappedLoadingTpl = function() {
				return wrappperTplLoading || false;
			};
		};
		return (repositoryStyles[styleId] = new Style());
	};

	/* # TRIGGER GROUP ######################################### */

	DarkTip.triggerGroup = function(triggerGroupId) {
		if (typeof repositoryTriggerGroups[triggerGroupId] !== 'undefined') {
			return repositoryTriggerGroups[triggerGroupId];
		}
		var TriggerGroup = function() {
			var self     = this,
				triggers = [];
			var findFirstTrigger = function(candidate) {
				var i, result, trigger;
				for (i = (triggers.length - 1); i >= 0; i--) {
					trigger = triggers[i];
					result  = trigger.extractor(candidate);
					if (result) {
						return {'module': trigger.module, 'params': result}
					}
				}
			};
			var bindEvent = function(event, selector, accessFn, triggerGroup) {
				var addEventListeners = function(elem) {
					var handleEventFire = function(evt, accessed, on) {
						if (typeof on === 'undefined') on = false;
						var result = findFirstTrigger(accessed);
						if (result) {
							var module = DarkTip.module(result.module);
							if (module) {
								evt.preventDefault();
								if (on) {
									evt.stopPropagation();
									module.start(elem, result.params);
								} else {
									module.stop(elem, result.params);
								}
							}
						}
					};
					if (!elem.DarkTip) {
						elem.DarkTip = {
							cleanupFns: []
						};
						var eventOnFn = function(evt) {
							var accessed = accessFn(this);
							if (accessed) {
								handleEventFire(evt, accessed, true);
							}
						};
						var eventOffFn = function(evt) {
							var accessed = accessFn(this);
							if (accessed) {
								handleEventFire(evt, accessed, false);
							}
						};
						var eventClickOnFn = function(evt) {
							var source = this;
							var eventClickOffFn = function(evt) {
								eventOffFn.call(source, evt);
								doc.removeEventListener('click', eventClickOffFn);
							};
							doc.removeEventListener('click', eventClickOffFn);
							doc.addEventListener('click', eventClickOffFn, false);
							eventOnFn.call(this, evt);
						};
						switch (event) {
							case 'hover':
								elem.addEventListener('mouseenter', eventOnFn,  false);
								elem.addEventListener('mouseleave', eventOffFn, false);
								elem.DarkTip.cleanupFns.push(function() {
									elem.removeEventListener('mouseenter', eventOnFn);
									elem.removeEventListener('mouseleave', eventOffFn);
								});
								break;
							case 'hoverintent':
								var opt = {
									'timeout'    : DarkTip.setting('module.hoverintent.timeout'),
									'interval'   : DarkTip.setting('module.hoverintent.interval'),
									'sensitivity': DarkTip.setting('module.hoverintent.sensitivity')
								};
								elem.DarkTip.hoverintent = hoverintent(elem, eventOnFn, eventOffFn);
								elem.DarkTip.hoverintent.options(opt);
								elem.DarkTip.cleanupFns.push(function() {
									elem.DarkTip.hoverintent.remove();
								});
								break;
							case 'click':
								elem.addEventListener('click', eventClickOnFn, false);
								elem.DarkTip.cleanupFns.push(function() {
									elem.removeEventListener('click', eventClickOnFn);
								});
								break;
						}
					}
				};
				var removeEventListeners = function(elem) {
					if (elem.DarkTip) {
						for (var i = 0, j = elem.DarkTip.cleanupFns.length; i < j; i++) {
							elem.DarkTip.cleanupFns[i]();
						}
					}
				};
				queueFnInit.push(function() {
					var elems = doc.querySelectorAll(selector);
					Array.prototype.forEach.call(elems, function(elem) {
						if (!elem.DarkTip) {
							addEventListeners(elem);
						}
					});
				});
				if (MutationObserver) {
					queueFnInit.push(function() {
						queueFnObserveAdd.push(function(elem) {
							if (!elem || elem.nodeType !== 1) {
								return;
							}
							var elems = elem.querySelectorAll(selector);
							Array.prototype.forEach.call(elems, function(elem) {
								if (!elem.DarkTip) {
									addEventListeners(elem);
								}
							});
						});
						queueFnObserveRemove.push(function(elem) {
							if (!elem || elem.nodeType !== 1) {
								return;
							}
							var elems = elem.querySelectorAll(selector);
							Array.prototype.forEach.call(elems, function(elem) {
								if (elem.DarkTip) {
									DarkTip.removeEventListeners(elem, event, accessFn, triggerGroup);
								}
							});
						});
					});
				}
			};
			this.event = function(selector, event, accessFn) {
				if (typeof selector !== 'string')   { log('TriggerGroup.event: Invalid selector! 1st argument must be selector string.');     return this; }
				if (typeof event    !== 'string')   { log('TriggerGroup.event: Invalid show event! 2nd argument must be event type string.'); return this; }
				if (typeof accessFn !== 'function') { log('TriggerGroup.event: Invalid access function! 3rd argument must be a function.');   return this; }
				bindEvent(event, selector, accessFn, this);
				return this;
			};
			this.trigger = function(moduleId, extractorFn, extractorPayload) {
				var builtExtractorFn = (function() {
					var newFn;
					if (typeof extractorFn === 'function') {
						return extractorFn;
					}
					if (typeof extractorFn === 'string') {
						if (typeof extractorPayload === 'undefined') {
							extractorPayload = {};
						}
						if (typeof extractorPayload !== 'object') {
							log('TriggerGroup.trigger: Invalid RegExp payload! 3rd argument must be an object.');
							return false;
						}
						newFn = new RegExp(extractorFn);
						return function(candidate) {
							var data = {};
							var result = newFn.exec(candidate);
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
				})();
				if (typeof builtExtractorFn === 'function') {
					triggers.push({ 'module': moduleId, 'extractor': builtExtractorFn });
				}
				return this;
			};
		};
		return (repositoryTriggerGroups[triggerGroupId] = new TriggerGroup());
	};

	/* # MODULE ################################################ */

	DarkTip.module = function(moduleId, dependencies) {
		var numdeps = 0;
		if (typeof repositoryModules[moduleId] !== 'undefined') {
			return repositoryModules[moduleId];
		}
		if (typeof dependencies === 'string') {
			dependencies = [dependencies];
		}
		if (dust.isArray(dependencies)) {
			numdeps = dependencies.length;
		}
		var Module = function(moduleId, dependencies) {
			var self       = this,
				cssClasses = [('darktip-module-' + moduleId)];
			if (numdeps > 0) {
				for (var i = 0; i < numdeps; i++) {
					if (typeof repositoryModules[dependencies[i]] === 'undefined') {
						log('Module "' + moduleId + '" could not be created! Dependant module "' + dependencies[i] + '" was not found.');
						return;
					} else {
						cssClasses.push('darktip-module-' + dependencies[i]);
					}
				};
			}
			var createTooltipElement = function(content) {
				var tip   = doc.createElement('div'),
					style = moduleContext.get('module.style');
				tools.element.addClass(tip, 'darktip-tooltip');
				if (style) {
					tools.element.addClass(tip, style.cssClass());
				}
				for (var i = cssClasses.length - 1; i >= 0; i--) {
					tools.element.addClass(tip, cssClasses[i]);
				}
				tip.innerHTML = content;
				doc.body.appendChild(tip);
				return tip;
			};
			var buildKey = function() {
				var args = Array.prototype.slice.call(arguments);
				args.unshift('module');
				return args.join('.');
			};
			var dataHandler = function(region, key, data) {
				key = buildKey(region, key);
				if (typeof data === 'undefined') {
					return moduleContext.get(key);
				}
				moduleContext.set(key, data);
				return self;
			};
			var moduleData = {
				'name'    : moduleId,
				'style'   : undefined,
				'map'     : {},
				'i18n'    : {},
				'setting' : {},
				'template': {},
				'apicall' : {}
			};
			var moduleContext = {};
			this.buildContext = function(context) {
				if (numdeps > 0) {
					for (var i = numdeps - 1; i >= 0; i--) {
						context = repositoryModules[dependencies[i]].buildContext(context);
					}
				}
				context = context.push({'module': moduleData});
				return context;
			};
			this.style = function(styleId) {
				var key   = buildKey('style');
				if (typeof styleId !== 'undefined')
				{
					var style = repositoryStyles[styleId];
					if (style) {
						moduleContext.set(key, style);
						moduleContext.set(buildKey('template', style.getWrappedIndexTplName()),   style.getWrappedIndexTpl());
						moduleContext.set(buildKey('template', style.getWrappedLoadingTplName()), style.getWrappedLoadingTpl());
					} else {
						log('Style "' + styleId + '" could not be attached to module "' + moduleId + '"! Style was not found.');
					}
					return self;
				}
				return moduleContext.get(key);
			}
			this.map = function(key, data) {
				return dataHandler('map', key, data);
			};
			this.setting = function(key, data) {
				return dataHandler('setting', key, data);
			};
			this.i18n = function(locale, tplName, data) {
				var key = buildKey('i18n', locale, tplName);
				if (typeof data === 'undefined') {
					return moduleContext.get(key);
				}
				moduleContext.set(key, dust.loadSource(dust.compile(data, tplName)));
				return self;
			};
			this.template = function(tplName, data) {
				var key = buildKey('template', tplName);
				if (typeof data === 'undefined') {
					return moduleContext.get(key);
				}
				moduleContext.set(key, dust.loadSource(dust.compile(data, tplName)));
				return self;
			};
			this.apicall = function(key, url, caching, validationFn, processFn) {
				key = buildKey('apicall', key);
				if (typeof url === 'undefined') {
					return moduleContext.get(key);
				} else {
					moduleContext.set(key, {
						'url'         : url,
						'caching'     : caching || false,
						'validationFn': validationFn || false,
						'processFn'   : processFn || false
					});
				}
				return self;
			};
			this.trigger = function(triggerGroupId, extractorFn, extractorPayload) {
				var triggerGroup = DarkTip.triggerGroup(triggerGroupId);
				if (triggerGroup) {
					if (typeof extractorFn === 'string') {
						DarkTip.dust.renderSource(extractorFn, moduleContext, function(err, out) {
							triggerGroup.trigger(moduleId, out, extractorPayload);
						});
					} else {
						triggerGroup.trigger(moduleId, extractorFn, extractorPayload);
					}
				} else {
					log('Trigger for module "' + moduleId + '" could not be created! Trigger group "' + triggerGroupId + '" was not found.');
				}
				return self;
			};
			this.css = function(selector, rules) {
				effectiveSelector = '.darktip-tooltip' + ((cssClasses && cssClasses.length) ? ('.' + cssClasses.join('.')) : '') + (selector ? ' ' + selector : '');
				DarkTip.css.add(effectiveSelector, rules);
				return self;
			};
			this.start = function(elem, params) {
				var r, style, templateIndex, templateLoading;
				if (!elem.DarkTip.init) {
					elem.DarkTip.init   = true;
					elem.DarkTip.active = true;
					elem.DarkTip.tether = false;
					elem.DarkTip.tip    = false;
					var newContext      = moduleContext.push(params);
					var tetheroptions   = {
						'target': elem
					};
					r = self.setting('tether.attachment');       if (typeof r !== 'undefined' && r !== false) tetheroptions.attachment       = r;
					r = self.setting('tether.targetAttachment'); if (typeof r !== 'undefined' && r !== false) tetheroptions.targetAttachment = r;
					r = self.setting('tether.offset');           if (typeof r !== 'undefined' && r !== false) tetheroptions.offset           = r;
					r = self.setting('tether.targetOffset');     if (typeof r !== 'undefined' && r !== false) tetheroptions.targetOffset     = r;
					r = self.setting('tether.targetModifier');   if (typeof r !== 'undefined' && r !== false) tetheroptions.targetModifier   = r;
					r = self.setting('tether.constraints');      if (typeof r !== 'undefined' && r !== false) tetheroptions.constraints      = r;
					r = self.setting('tether.optimizations');    if (typeof r !== 'undefined' && r !== false) tetheroptions.optimizations    = r;
					r = self.setting('tether.classPrefix');      if (typeof r !== 'undefined' && r !== false) tetheroptions.classPrefix      = r;
					var displayFn = function(err, content) {
						if (!err && content) {
							if (elem.DarkTip.tip && elem.DarkTip.tether) {
								elem.DarkTip.tip.innerHTML = content;
								if (elem.DarkTip.active) {
									tools.element.addClass(elem.DarkTip.tip, 'darktip-active');
									elem.DarkTip.tether.position();
								}
							} else {
								var tip = createTooltipElement(content);
								if (elem.DarkTip.hoverintent) {
									elem.DarkTip.hoverintent.add(tip);
								}
								elem.DarkTip.tip = tetheroptions.element = tip;
								elem.DarkTip.tether = new tether(tetheroptions);
								elem.DarkTip.cleanupFns.push(function() {
									elem.DarkTip.tether.destroy();
								});
								if (!elem.DarkTip.active) {
									elem.DarkTip.tether.disable();
								} else {
									tools.element.addClass(elem.DarkTip.tip, 'darktip-active');
									elem.DarkTip.tether.position();
								}
							}
						}
					};
					var displayTempFn = function(err, content) {
						if (!elem.DarkTip.tip) {
							displayFn(err, content);
						}
					};
					style = self.style();
					if (style) {
						templateLoading = style.getWrappedLoadingTplName();
						templateIndex   = style.getWrappedIndexTplName();
					} else {
						templateLoading = self.setting('template.loading');
						templateIndex   = self.setting('template.index');
					}
					dust.render(templateLoading, newContext, displayTempFn);
					dust.render(templateIndex, newContext, displayFn);
				} else {
					elem.DarkTip.active = true;
					if (elem.DarkTip.tether) {
						elem.DarkTip.tether.enable();
					}
					if (elem.DarkTip.tip) {
						tools.element.addClass(elem.DarkTip.tip, 'darktip-active');
						elem.DarkTip.tether.position();
					}
				}
			}
			this.stop = function(elem, params) {
				if (!elem.DarkTip.init) {
					elem.DarkTip.active = false;
					elem.DarkTip.tether = false;
					elem.DarkTip.tip    = false;
					return;
				}
				elem.DarkTip.active = false;
				if (elem.DarkTip.tip) {
					tools.element.removeClass(elem.DarkTip.tip, 'darktip-active');
				}
				if (elem.DarkTip.tether) {
					elem.DarkTip.tether.disable();
				}
			}
			moduleContext = self.buildContext(settingsContext);
		};
		return (repositoryModules[moduleId] = new Module(moduleId, dependencies));
	};

	/* ######################################################### */

	if (typeof exports === 'object') {
		module.exports = DarkTip;
	}

	globalScope.DarkTip = DarkTip;

})((function(){return this;})())
}).call(this,require("1YiZ5S"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_e62cc0ec.js","/")
},{"./darktip-tools":12,"./dustjs-darktip":13,"1YiZ5S":9,"animejs":1,"buffer":6,"dustjs-helpers":2,"dustjs-linkedin":4,"dustjs-linkedin/lib/compiler":3,"q":10,"tether":11}]},{},[14])