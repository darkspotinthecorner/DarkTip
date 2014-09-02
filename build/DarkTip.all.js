/* DarkTip (v1.2.1) by Martin Gelder (Dark Spot in the Corner), Copyright (c) 2014 */

// Paul Irish's console.log() wrapper // http://paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
if(!window.log) {
	window.log=function(){log.history=log.history||[];log.history.push(arguments);if(this.console){console.log(Array.prototype.slice.call(arguments))}};
}

// Check if yepnope.js is defined, if not, we need to define it
if(!window.yepnope) {
	/* yepnope 1.5.4pre with pull request from github/lightsfury (mootools compability) */
	(function(a,b,c){function A(a){return!a||a=="loaded"||a=="complete"||a=="uninitialized"}function B(a,c,d,g,h,i){var k=b.createElement("script"),l,m;g=g||z["errorTimeout"];k.src=a;for(m in d){k.setAttribute(m,d[m])}c=i?D:c||j;k.onreadystatechange=k.onload=function(){if(!l&&A(k.readyState)){l=1;c();k.onload=k.onreadystatechange=null}};e(function(){if(!l){l=1;c(1)}},g);h?k.onload():f.parentNode.insertBefore(k,f)}function C(a,c,d,g,h,i){var k=b.createElement("link"),l,m;g=g||z["errorTimeout"];c=i?D:c||j;k.href=a;k.rel="stylesheet";k.type="text/css";for(m in d){k.setAttribute(m,d[m])}if(!h){f.parentNode.insertBefore(k,f);e(c,0)}}function D(){var a=h.shift();i=1;if(a){if(a["t"]){e(function(){(a["t"]=="c"?z["injectCss"]:z["injectJs"])(a["s"],0,a["a"],a["x"],a["e"],1)},0)}else{a();D()}}else{i=0}}function E(a,c,d,g,j,k,n){function s(b){if(!p&&A(o.readyState)){r["r"]=p=1;!i&&D();o.onload=o.onreadystatechange=null;if(b){if(a!="img"){e(function(){m.removeChild(o)},50)}for(var d in w[c]){if(w[c].hasOwnProperty(d)){w[c][d].onload()}}}}}n=n||z["errorTimeout"];var o=b.createElement(a),p=0,q=0,r={t:d,s:c,e:j,a:k,x:n};if(w[c]===1){q=1;w[c]=[]}if(a=="object"){o.data=c;o.setAttribute("type","text/css")}else{o.src=c;o.type=a}o.width=o.height="0";o.onerror=o.onload=o.onreadystatechange=function(){s.call(this,q)};h.splice(g,0,r);if(a!="img"){if(q||w[c]===2){m.insertBefore(o,l?null:f);e(s,n)}else{w[c].push(o)}}}function F(a,b,c,d,e){i=0;b=b||"j";if(t(a)){E(b=="c"?q:p,a,b,this["i"]++,c,d,e)}else{h.splice(this["i"]++,0,a);h.length==1&&D()}return this}function G(){var a=z;a["loader"]={load:F,i:0};return a}var d=b.documentElement,e=a.setTimeout,f=b.getElementsByTagName("script")[0],g={}.toString,h=[],i=0,j=function(){},k="MozAppearance"in d.style,l=k&&!!b.createRange().compareNode,m=l?d:f.parentNode,n=a.opera&&g.call(a.opera)=="[object Opera]",o=!!b.attachEvent&&!n,p=k?"object":o?"script":"img",q=o?"script":p,r=Array.isArray||function(a){return g.call(a)=="[object Array]"},s=function(a){return Object(a)===a},t=function(a){return typeof a=="string"},u=function(a){return g.call(a)=="[object Function]"},v=[],w={},x={timeout:function(a,b){if(b.length){a["timeout"]=b[0]}return a}},y,z;z=function(a){function f(a){var b=a.split("!"),c=v.length,d=b.pop(),e=b.length,f={url:d,origUrl:d,prefixes:b},g,h,i;for(h=0;h<e;h++){i=b[h].split("=");g=x[i.shift()];if(g){f=g(f,i)}}for(h=0;h<c;h++){f=v[h](f)}return f}function g(a){var b=a.split("?")[0];return b.substr(b.lastIndexOf(".")+1)}function h(a,b,d,e,h){var i=f(a),j=i["autoCallback"],k=g(i["url"]);if(i["bypass"]){return}if(b){b=u(b)?b:b[a]||b[e]||b[a.split("/").pop().split("?")[0]]}if(i["instead"]){return i["instead"](a,b,d,e,h)}else{if(w[i["url"]]){i["noexec"]=true}else{w[i["url"]]=1}d.load(i["url"],i["forceCSS"]||!i["forceJS"]&&"css"==g(i["url"])?"c":c,i["noexec"],i["attrs"],i["timeout"]);if(u(b)||u(j)){d["load"](function(){G();b&&b(i["origUrl"],h,e);j&&j(i["origUrl"],h,e);w[i["url"]]=2})}}}function i(a,b){function m(a,d){if(!a){!d&&i()}else if(t(a)){if(!d){f=function(){var a=[].slice.call(arguments);g.apply(this,a);i()}}h(a,f,b,0,c)}else if(r(a)){k=a.length;for(l=0;l<k;l++){if(a.hasOwnProperty(l)){if(!d&&l+1==k){if(!u(f)){f[l]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b);i()}}(g[l])}else{f=function(){var a=[].slice.call(arguments);g.apply(this,a);i()}}}h(a[l],f,b,l,c)}}}else if(s(a)){k=function(){var b=0,c;for(c in a){if(a.hasOwnProperty(c)){b++}}return b}();for(l in a){if(a.hasOwnProperty(l)){if(!d&&!--k){if(!u(f)){f[l]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b);i()}}(g[l])}else{f=function(){var a=[].slice.call(arguments);g.apply(this,a);i()}}}h(a[l],f,b,l,c)}}}}var c=!!a["test"],d=c?a["yep"]:a["nope"],e=a["load"]||a["both"],f=a["callback"]||j,g=f,i=a["complete"]||j,k,l;m(d,!!e);e&&m(e)}var b,d,e=this["yepnope"]["loader"];if(t(a)){h(a,0,e,0)}else if(r(a)){for(b=0;b<a.length;b++){d=a[b];if(t(d)){h(d,0,e,0)}else if(r(d)){z(d)}else if(s(d)){i(d,e)}}}else if(s(a)){i(a,e)}};z["addPrefix"]=function(a,b){x[a]=b};z["addFilter"]=function(a){v.push(a)};z["errorTimeout"]=1e4;if(b.readyState==null&&b.addEventListener){b.readyState="loading";b.addEventListener("DOMContentLoaded",y=function(){b.removeEventListener("DOMContentLoaded",y,0);b.readyState="complete"},0)}a["yepnope"]=G();a["yepnope"]["executeStack"]=D;a["yepnope"]["injectJs"]=B;a["yepnope"]["injectCss"]=C})(this,document)
}

if (typeof window.___DarkTipSettings === 'undefined')
{
	window.___DarkTipSettings = {};
}

window.___DarkTipSettings['unbindJQuery'] = ((window.jQuery && !DarkTip.checkRequirements('jquery', window.jQuery().jquery)) ? true : false);

yepnope([{
	'test'    : (window.jQuery && DarkTip.checkRequirements('jquery', window.jQuery().jquery)),
	'nope'    : (window.___DarkTipSettings['jquery'] || 'http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'),
	'complete': function() {

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
    // Turn off strict mode for this function so we can assign to global.Q
    /* jshint strict: false */

    // This file will function properly as a <script> tag, or a module
    // using CommonJS and NodeJS or RequireJS module formats.  In
    // Common/Node/RequireJS, the module exports the Q API and when
    // executed as a simple <script>, it creates a Q global instead.

    // Montage Require
    if (typeof bootstrap === "function") {
        bootstrap("promise", definition);

    // CommonJS
    } else if (typeof exports === "object") {
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
    } else {
        Q = definition();
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

    function flush() {
        /* jshint loopfunc: true */

        while (head.next) {
            head = head.next;
            var task = head.task;
            head.task = void 0;
            var domain = head.domain;

            if (domain) {
                head.domain = void 0;
                domain.enter();
            }

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
                    setTimeout(function() {
                       throw e;
                    }, 0);
                }
            }

            if (domain) {
                domain.exit();
            }
        }

        flushing = false;
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

    if (typeof process !== "undefined" && process.nextTick) {
        // Node.js before 0.9. Note that some fake-Node environments, like the
        // Mocha test runner, introduce a `process` global without a `nextTick`.
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
    if (isPromise(value)) {
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
            nextTick(function () {
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
            nextTick(function () {
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
            nextTick(function () {
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
 * Returns a promise for the first of an array of promises to become fulfilled.
 * @param answers {Array[Any*]} promises to race
 * @returns {Any*} the first promise to be fulfilled
 */
Q.race = race;
function race(answerPs) {
    return promise(function(resolve, reject) {
        // Switch to this once we can assume at least ES5
        // answerPs.forEach(function(answerP) {
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

    nextTick(function () {
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
    return isObject(object) &&
        typeof object.promiseDispatch === "function" &&
        typeof object.inspect === "function";
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
    nextTick(function () {
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
    nextTick(function () {
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
        var countDown = 0;
        var deferred = defer();
        array_reduce(promises, function (undefined, promise, index) {
            var snapshot;
            if (
                isPromise(promise) &&
                (snapshot = promise.inspect()).state === "fulfilled"
            ) {
                promises[index] = snapshot.value;
            } else {
                ++countDown;
                when(
                    promise,
                    function (value) {
                        promises[index] = value;
                        if (--countDown === 0) {
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
        if (countDown === 0) {
            deferred.resolve(promises);
        }
        return deferred.promise;
    });
}

Promise.prototype.all = function () {
    return all(this);
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
        nextTick(function () {
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
            nextTick(function () {
                nodeback(null, value);
            });
        }, function (error) {
            nextTick(function () {
                nodeback(error);
            });
        });
    } else {
        return this;
    }
};

// All code before this point will be filtered from stack traces.
var qEndingLine = captureLine();

return Q;

});


/*! Dust - Asynchronous Templating - v2.4.0
* http://linkedin.github.io/dustjs/
* Copyright (c) 2014 Aleksander Williams; Released under the MIT License */
!function(root){function Context(a,b,c,d){this.stack=a,this.global=b,this.blocks=c,this.templateName=d}function Stack(a,b,c,d){this.tail=b,this.isObject=a&&"object"==typeof a,this.head=a,this.index=c,this.of=d}function Stub(a){this.head=new Chunk(this),this.callback=a,this.out=""}function Stream(){this.head=new Chunk(this)}function Chunk(a,b,c){this.root=a,this.next=b,this.data=[],this.flushable=!1,this.taps=c}function Tap(a,b){this.head=a,this.tail=b}var dust={},NONE="NONE",ERROR="ERROR",WARN="WARN",INFO="INFO",DEBUG="DEBUG",loggingLevels=[DEBUG,INFO,WARN,ERROR,NONE],EMPTY_FUNC=function(){},logger={},originalLog,loggerContext,hasOwnProperty=Object.prototype.hasOwnProperty,getResult;dust.debugLevel=NONE,getResult=function(a,b){return a&&hasOwnProperty.call(a,b)?a[b]:void 0},root&&root.console&&root.console.log&&(loggerContext=root.console,originalLog=root.console.log),logger.log=loggerContext?function(){logger.log="function"==typeof originalLog?function(){originalLog.apply(loggerContext,arguments)}:function(){var a=Array.prototype.slice.apply(arguments).join(" ");originalLog(a)},logger.log.apply(this,arguments)}:function(){},dust.log=function(a,b){b=b||INFO,dust.debugLevel!==NONE&&dust.indexInArray(loggingLevels,b)>=dust.indexInArray(loggingLevels,dust.debugLevel)&&(dust.logQueue||(dust.logQueue=[]),dust.logQueue.push({message:a,type:b}),logger.log("[DUST "+b+"]: "+a))},dust.helpers={},dust.cache={},dust.register=function(a,b){a&&(dust.cache[a]=b)},dust.render=function(a,b,c){var d=new Stub(c).head;try{dust.load(a,d,Context.wrap(b,a)).end()}catch(e){d.setError(e)}},dust.stream=function(a,b){var c=new Stream,d=c.head;return dust.nextTick(function(){try{dust.load(a,c.head,Context.wrap(b,a)).end()}catch(e){d.setError(e)}}),c},dust.renderSource=function(a,b,c){return dust.compileFn(a)(b,c)},dust.compileFn=function(a,b){b=b||null;var c=dust.loadSource(dust.compile(a,b));return function(a,d){var e=d?new Stub(d):new Stream;return dust.nextTick(function(){"function"==typeof c?c(e.head,Context.wrap(a,b)).end():dust.log(new Error("Template ["+b+"] cannot be resolved to a Dust function"),ERROR)}),e}},dust.load=function(a,b,c){var d=dust.cache[a];return d?d(b,c):dust.onLoad?b.map(function(b){dust.onLoad(a,function(d,e){return d?b.setError(d):(dust.cache[a]||dust.loadSource(dust.compile(e,a)),void dust.cache[a](b,c).end())})}):b.setError(new Error("Template Not Found: "+a))},dust.loadSource=function(source,path){return eval(source)},dust.isArray=Array.isArray?Array.isArray:function(a){return"[object Array]"===Object.prototype.toString.call(a)},dust.indexInArray=function(a,b,c){if(c=+c||0,Array.prototype.indexOf)return a.indexOf(b,c);if(void 0===a||null===a)throw new TypeError('cannot call method "indexOf" of null');var d=a.length;for(1/0===Math.abs(c)&&(c=0),0>c&&(c+=d,0>c&&(c=0));d>c;c++)if(a[c]===b)return c;return-1},dust.nextTick=function(){return function(a){setTimeout(a,0)}}(),dust.isEmpty=function(a){return dust.isArray(a)&&!a.length?!0:0===a?!1:!a},dust.filter=function(a,b,c){if(c)for(var d=0,e=c.length;e>d;d++){var f=c[d];"s"===f?b=null:"function"==typeof dust.filters[f]?a=dust.filters[f](a):dust.log("Invalid filter ["+f+"]",WARN)}return b&&(a=dust.filters[b](a)),a},dust.filters={h:function(a){return dust.escapeHtml(a)},j:function(a){return dust.escapeJs(a)},u:encodeURI,uc:encodeURIComponent,js:function(a){return JSON?JSON.stringify(a):(dust.log("JSON is undefined.  JSON stringify has not been used on ["+a+"]",WARN),a)},jp:function(a){return JSON?JSON.parse(a):(dust.log("JSON is undefined.  JSON parse has not been used on ["+a+"]",WARN),a)}},dust.makeBase=function(a){return new Context(new Stack,a)},Context.wrap=function(a,b){return a instanceof Context?a:new Context(new Stack(a),{},null,b)},Context.prototype.get=function(a,b){return"string"==typeof a&&("."===a[0]&&(b=!0,a=a.substr(1)),a=a.split(".")),this._get(b,a)},Context.prototype._get=function(a,b){var c,d,e,f,g=this.stack,h=1;if(d=b[0],e=b.length,a&&0===e)f=g,g=g.head;else{if(a)g&&(g=getResult(g.head,d));else{for(;g&&(!g.isObject||(f=g.head,c=getResult(g.head,d),void 0===c));)g=g.tail;g=void 0!==c?c:getResult(this.global,d)}for(;g&&e>h;)f=g,g=getResult(g,b[h]),h++}return"function"==typeof g?function(){try{return g.apply(f,arguments)}catch(a){return dust.log(a,ERROR)}}:(void 0===g&&dust.log("Cannot find the value for reference [{"+b.join(".")+"}] in template ["+this.getTemplateName()+"]"),g)},Context.prototype.getPath=function(a,b){return this._get(a,b)},Context.prototype.push=function(a,b,c){return new Context(new Stack(a,this.stack,b,c),this.global,this.blocks,this.getTemplateName())},Context.prototype.rebase=function(a){return new Context(new Stack(a),this.global,this.blocks,this.getTemplateName())},Context.prototype.current=function(){return this.stack.head},Context.prototype.getBlock=function(a){if("function"==typeof a){var b=new Chunk;a=a(b,this).data.join("")}var c=this.blocks;if(!c)return void dust.log("No blocks for context[{"+a+"}] in template ["+this.getTemplateName()+"]",DEBUG);for(var d,e=c.length;e--;)if(d=c[e][a])return d},Context.prototype.shiftBlocks=function(a){var b,c=this.blocks;return a?(b=c?c.concat([a]):[a],new Context(this.stack,this.global,b,this.getTemplateName())):this},Context.prototype.getTemplateName=function(){return this.templateName},Stub.prototype.flush=function(){for(var a=this.head;a;){if(!a.flushable)return a.error?(this.callback(a.error),dust.log("Chunk error ["+a.error+"] thrown. Ceasing to render this template.",WARN),void(this.flush=EMPTY_FUNC)):void 0;this.out+=a.data.join(""),a=a.next,this.head=a}this.callback(null,this.out)},Stream.prototype.flush=function(){for(var a=this.head;a;){if(!a.flushable)return a.error?(this.emit("error",a.error),dust.log("Chunk error ["+a.error+"] thrown. Ceasing to render this template.",WARN),void(this.flush=EMPTY_FUNC)):void 0;this.emit("data",a.data.join("")),a=a.next,this.head=a}this.emit("end")},Stream.prototype.emit=function(a,b){if(!this.events)return dust.log("No events to emit",INFO),!1;var c=this.events[a];if(!c)return dust.log("Event type ["+a+"] does not exist",WARN),!1;if("function"==typeof c)c(b);else if(dust.isArray(c))for(var d=c.slice(0),e=0,f=d.length;f>e;e++)d[e](b);else dust.log("Event Handler ["+c+"] is not of a type that is handled by emit",WARN)},Stream.prototype.on=function(a,b){return this.events||(this.events={}),this.events[a]?"function"==typeof this.events[a]?this.events[a]=[this.events[a],b]:this.events[a].push(b):(dust.log("Event type ["+a+"] does not exist. Using just the specified callback.",WARN),b?this.events[a]=b:dust.log("Callback for type ["+a+"] does not exist. Listener not registered.",WARN)),this},Stream.prototype.pipe=function(a){return this.on("data",function(b){try{a.write(b,"utf8")}catch(c){dust.log(c,ERROR)}}).on("end",function(){try{return a.end()}catch(b){dust.log(b,ERROR)}}).on("error",function(b){a.error(b)}),this},Chunk.prototype.write=function(a){var b=this.taps;return b&&(a=b.go(a)),this.data.push(a),this},Chunk.prototype.end=function(a){return a&&this.write(a),this.flushable=!0,this.root.flush(),this},Chunk.prototype.map=function(a){var b=new Chunk(this.root,this.next,this.taps),c=new Chunk(this.root,b,this.taps);return this.next=c,this.flushable=!0,a(c),b},Chunk.prototype.tap=function(a){var b=this.taps;return this.taps=b?b.push(a):new Tap(a),this},Chunk.prototype.untap=function(){return this.taps=this.taps.tail,this},Chunk.prototype.render=function(a,b){return a(this,b)},Chunk.prototype.reference=function(a,b,c,d){return"function"==typeof a&&(a=a.apply(b.current(),[this,b,null,{auto:c,filters:d}]),a instanceof Chunk)?a:dust.isEmpty(a)?this:this.write(dust.filter(a,c,d))},Chunk.prototype.section=function(a,b,c,d){if("function"==typeof a&&(a=a.apply(b.current(),[this,b,c,d]),a instanceof Chunk))return a;var e=c.block,f=c["else"];if(d&&(b=b.push(d)),dust.isArray(a)){if(e){var g=a.length,h=this;if(g>0){b.stack.head&&(b.stack.head.$len=g);for(var i=0;g>i;i++)b.stack.head&&(b.stack.head.$idx=i),h=e(h,b.push(a[i],i,g));return b.stack.head&&(b.stack.head.$idx=void 0,b.stack.head.$len=void 0),h}if(f)return f(this,b)}}else if(a===!0){if(e)return e(this,b)}else if(a||0===a){if(e)return e(this,b.push(a))}else if(f)return f(this,b);return dust.log("Not rendering section (#) block in template ["+b.getTemplateName()+"], because above key was not found",DEBUG),this},Chunk.prototype.exists=function(a,b,c){var d=c.block,e=c["else"];if(dust.isEmpty(a)){if(e)return e(this,b)}else if(d)return d(this,b);return dust.log("Not rendering exists (?) block in template ["+b.getTemplateName()+"], because above key was not found",DEBUG),this},Chunk.prototype.notexists=function(a,b,c){var d=c.block,e=c["else"];if(dust.isEmpty(a)){if(d)return d(this,b)}else if(e)return e(this,b);return dust.log("Not rendering not exists (^) block check in template ["+b.getTemplateName()+"], because above key was found",DEBUG),this},Chunk.prototype.block=function(a,b,c){var d=c.block;return a&&(d=a),d?d(this,b):this},Chunk.prototype.partial=function(a,b,c){var d;d=dust.makeBase(b.global),d.blocks=b.blocks,b.stack&&b.stack.tail&&(d.stack=b.stack.tail),c&&(d=d.push(c)),"string"==typeof a&&(d.templateName=a),d=d.push(b.stack.head);var e;return e="function"==typeof a?this.capture(a,d,function(a,b){d.templateName=d.templateName||a,dust.load(a,b,d).end()}):dust.load(a,this,d)},Chunk.prototype.helper=function(a,b,c,d){var e=this;try{return dust.helpers[a]?dust.helpers[a](e,b,c,d):(dust.log("Invalid helper ["+a+"]",WARN),e)}catch(f){return e.setError(f),e}},Chunk.prototype.capture=function(a,b,c){return this.map(function(d){var e=new Stub(function(a,b){a?d.setError(a):c(b,d)});a(e.head,b).end()})},Chunk.prototype.setError=function(a){return this.error=a,this.root.flush(),this},Tap.prototype.push=function(a){return new Tap(a,this)},Tap.prototype.go=function(a){for(var b=this;b;)a=b.head(a),b=b.tail;return a};var HCHARS=new RegExp(/[&<>\"\']/),AMP=/&/g,LT=/</g,GT=/>/g,QUOT=/\"/g,SQUOT=/\'/g;dust.escapeHtml=function(a){return"string"==typeof a&&HCHARS.test(a)?a.replace(AMP,"&amp;").replace(LT,"&lt;").replace(GT,"&gt;").replace(QUOT,"&quot;").replace(SQUOT,"&#39;"):a};var BS=/\\/g,FS=/\//g,CR=/\r/g,LS=/\u2028/g,PS=/\u2029/g,NL=/\n/g,LF=/\f/g,SQ=/'/g,DQ=/"/g,TB=/\t/g;dust.escapeJs=function(a){return"string"==typeof a?a.replace(BS,"\\\\").replace(FS,"\\/").replace(DQ,'\\"').replace(SQ,"\\'").replace(CR,"\\r").replace(LS,"\\u2028").replace(PS,"\\u2029").replace(NL,"\\n").replace(LF,"\\f").replace(TB,"\\t"):a},"object"==typeof exports?module.exports=dust:root.dust=dust}(function(){return this}()),function(a,b){"object"==typeof exports?module.exports=b(require("./dust")):b(a.dust)}(this,function(dust){var a=function(){function b(a){return'"'+a.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\x08/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/[\x00-\x07\x0B\x0E-\x1F\x80-\uFFFF]/g,escape)+'"'}var c={parse:function(c,d){function e(a){var b={};for(var c in a)b[c]=a[c];return b}function f(a,b){for(var d=a.offset+b,e=a.offset;d>e;e++){var f=c.charAt(e);"\n"===f?(a.seenCR||a.line++,a.column=1,a.seenCR=!1):"\r"===f||"\u2028"===f||"\u2029"===f?(a.line++,a.column=1,a.seenCR=!0):(a.column++,a.seenCR=!1)}a.offset+=b}function g(a){R.offset<T.offset||(R.offset>T.offset&&(T=e(R),U=[]),U.push(a))}function h(){var a,b,c;for(c=e(R),a=[],b=i();null!==b;)a.push(b),b=i();return null!==a&&(a=function(a,b,c,d){return["body"].concat(d).concat([["line",b],["col",c]])}(c.offset,c.line,c.column,a)),null===a&&(R=e(c)),a}function i(){var a;return a=G(),null===a&&(a=H(),null===a&&(a=j(),null===a&&(a=q(),null===a&&(a=s(),null===a&&(a=p(),null===a&&(a=D())))))),a}function j(){var a,b,d,i,j,m,n,p,q;if(S++,p=e(R),q=e(R),a=k(),null!==a){for(b=[],d=O();null!==d;)b.push(d),d=O();null!==b?(d=K(),null!==d?(i=h(),null!==i?(j=o(),null!==j?(m=l(),m=null!==m?m:"",null!==m?(n=function(a,b,c,d,e,f,g){if(!g||d[1].text!==g.text)throw new Error("Expected end tag for "+d[1].text+" but it was not found. At line : "+b+", column : "+c);return!0}(R.offset,R.line,R.column,a,i,j,m)?"":null,null!==n?a=[a,b,d,i,j,m,n]:(a=null,R=e(q))):(a=null,R=e(q))):(a=null,R=e(q))):(a=null,R=e(q))):(a=null,R=e(q))):(a=null,R=e(q))}else a=null,R=e(q);if(null!==a&&(a=function(a,b,c,d,e,f){return f.push(["param",["literal","block"],e]),d.push(f),d.concat([["line",b],["col",c]])}(p.offset,p.line,p.column,a[0],a[3],a[4],a[5])),null===a&&(R=e(p)),null===a){if(p=e(R),q=e(R),a=k(),null!==a){for(b=[],d=O();null!==d;)b.push(d),d=O();null!==b?(47===c.charCodeAt(R.offset)?(d="/",f(R,1)):(d=null,0===S&&g('"/"')),null!==d?(i=K(),null!==i?a=[a,b,d,i]:(a=null,R=e(q))):(a=null,R=e(q))):(a=null,R=e(q))}else a=null,R=e(q);null!==a&&(a=function(a,b,c,d){return d.push(["bodies"]),d.concat([["line",b],["col",c]])}(p.offset,p.line,p.column,a[0])),null===a&&(R=e(p))}return S--,0===S&&null===a&&g("section"),a}function k(){var a,b,d,h,i,j,k,l;if(k=e(R),l=e(R),a=J(),null!==a)if(/^[#?^<+@%]/.test(c.charAt(R.offset))?(b=c.charAt(R.offset),f(R,1)):(b=null,0===S&&g("[#?^<+@%]")),null!==b){for(d=[],h=O();null!==h;)d.push(h),h=O();null!==d?(h=t(),null!==h?(i=m(),null!==i?(j=n(),null!==j?a=[a,b,d,h,i,j]:(a=null,R=e(l))):(a=null,R=e(l))):(a=null,R=e(l))):(a=null,R=e(l))}else a=null,R=e(l);else a=null,R=e(l);return null!==a&&(a=function(a,b,c,d,e,f,g){return[d,e,f,g]}(k.offset,k.line,k.column,a[1],a[3],a[4],a[5])),null===a&&(R=e(k)),a}function l(){var a,b,d,h,i,j,k,l;if(S++,k=e(R),l=e(R),a=J(),null!==a)if(47===c.charCodeAt(R.offset)?(b="/",f(R,1)):(b=null,0===S&&g('"/"')),null!==b){for(d=[],h=O();null!==h;)d.push(h),h=O();if(null!==d)if(h=t(),null!==h){for(i=[],j=O();null!==j;)i.push(j),j=O();null!==i?(j=K(),null!==j?a=[a,b,d,h,i,j]:(a=null,R=e(l))):(a=null,R=e(l))}else a=null,R=e(l);else a=null,R=e(l)}else a=null,R=e(l);else a=null,R=e(l);return null!==a&&(a=function(a,b,c,d){return d}(k.offset,k.line,k.column,a[3])),null===a&&(R=e(k)),S--,0===S&&null===a&&g("end tag"),a}function m(){var a,b,d,h,i;return d=e(R),h=e(R),i=e(R),58===c.charCodeAt(R.offset)?(a=":",f(R,1)):(a=null,0===S&&g('":"')),null!==a?(b=t(),null!==b?a=[a,b]:(a=null,R=e(i))):(a=null,R=e(i)),null!==a&&(a=function(a,b,c,d){return d}(h.offset,h.line,h.column,a[1])),null===a&&(R=e(h)),a=null!==a?a:"",null!==a&&(a=function(a,b,c,d){return d?["context",d]:["context"]}(d.offset,d.line,d.column,a)),null===a&&(R=e(d)),a}function n(){var a,b,d,h,i,j,k,l;if(S++,j=e(R),a=[],k=e(R),l=e(R),d=O(),null!==d)for(b=[];null!==d;)b.push(d),d=O();else b=null;for(null!==b?(d=y(),null!==d?(61===c.charCodeAt(R.offset)?(h="=",f(R,1)):(h=null,0===S&&g('"="')),null!==h?(i=u(),null===i&&(i=t(),null===i&&(i=B())),null!==i?b=[b,d,h,i]:(b=null,R=e(l))):(b=null,R=e(l))):(b=null,R=e(l))):(b=null,R=e(l)),null!==b&&(b=function(a,b,c,d,e){return["param",["literal",d],e]}(k.offset,k.line,k.column,b[1],b[3])),null===b&&(R=e(k));null!==b;){if(a.push(b),k=e(R),l=e(R),d=O(),null!==d)for(b=[];null!==d;)b.push(d),d=O();else b=null;null!==b?(d=y(),null!==d?(61===c.charCodeAt(R.offset)?(h="=",f(R,1)):(h=null,0===S&&g('"="')),null!==h?(i=u(),null===i&&(i=t(),null===i&&(i=B())),null!==i?b=[b,d,h,i]:(b=null,R=e(l))):(b=null,R=e(l))):(b=null,R=e(l))):(b=null,R=e(l)),null!==b&&(b=function(a,b,c,d,e){return["param",["literal",d],e]}(k.offset,k.line,k.column,b[1],b[3])),null===b&&(R=e(k))}return null!==a&&(a=function(a,b,c,d){return["params"].concat(d)}(j.offset,j.line,j.column,a)),null===a&&(R=e(j)),S--,0===S&&null===a&&g("params"),a}function o(){var a,b,d,i,j,k,l,m,n;for(S++,l=e(R),a=[],m=e(R),n=e(R),b=J(),null!==b?(58===c.charCodeAt(R.offset)?(d=":",f(R,1)):(d=null,0===S&&g('":"')),null!==d?(i=y(),null!==i?(j=K(),null!==j?(k=h(),null!==k?b=[b,d,i,j,k]:(b=null,R=e(n))):(b=null,R=e(n))):(b=null,R=e(n))):(b=null,R=e(n))):(b=null,R=e(n)),null!==b&&(b=function(a,b,c,d,e){return["param",["literal",d],e]}(m.offset,m.line,m.column,b[2],b[4])),null===b&&(R=e(m));null!==b;)a.push(b),m=e(R),n=e(R),b=J(),null!==b?(58===c.charCodeAt(R.offset)?(d=":",f(R,1)):(d=null,0===S&&g('":"')),null!==d?(i=y(),null!==i?(j=K(),null!==j?(k=h(),null!==k?b=[b,d,i,j,k]:(b=null,R=e(n))):(b=null,R=e(n))):(b=null,R=e(n))):(b=null,R=e(n))):(b=null,R=e(n)),null!==b&&(b=function(a,b,c,d,e){return["param",["literal",d],e]}(m.offset,m.line,m.column,b[2],b[4])),null===b&&(R=e(m));return null!==a&&(a=function(a,b,c,d){return["bodies"].concat(d)}(l.offset,l.line,l.column,a)),null===a&&(R=e(l)),S--,0===S&&null===a&&g("bodies"),a}function p(){var a,b,c,d,f,h;return S++,f=e(R),h=e(R),a=J(),null!==a?(b=t(),null!==b?(c=r(),null!==c?(d=K(),null!==d?a=[a,b,c,d]:(a=null,R=e(h))):(a=null,R=e(h))):(a=null,R=e(h))):(a=null,R=e(h)),null!==a&&(a=function(a,b,c,d,e){return["reference",d,e].concat([["line",b],["col",c]])}(f.offset,f.line,f.column,a[1],a[2])),null===a&&(R=e(f)),S--,0===S&&null===a&&g("reference"),a}function q(){var a,b,d,h,i,j,k,l,o,p,q,r;if(S++,p=e(R),q=e(R),a=J(),null!==a)if(62===c.charCodeAt(R.offset)?(b=">",f(R,1)):(b=null,0===S&&g('">"')),null===b&&(43===c.charCodeAt(R.offset)?(b="+",f(R,1)):(b=null,0===S&&g('"+"'))),null!==b){for(d=[],h=O();null!==h;)d.push(h),h=O();if(null!==d)if(r=e(R),h=y(),null!==h&&(h=function(a,b,c,d){return["literal",d]}(r.offset,r.line,r.column,h)),null===h&&(R=e(r)),null===h&&(h=B()),null!==h)if(i=m(),null!==i)if(j=n(),null!==j){for(k=[],l=O();null!==l;)k.push(l),l=O();null!==k?(47===c.charCodeAt(R.offset)?(l="/",f(R,1)):(l=null,0===S&&g('"/"')),null!==l?(o=K(),null!==o?a=[a,b,d,h,i,j,k,l,o]:(a=null,R=e(q))):(a=null,R=e(q))):(a=null,R=e(q))}else a=null,R=e(q);else a=null,R=e(q);else a=null,R=e(q);else a=null,R=e(q)}else a=null,R=e(q);else a=null,R=e(q);return null!==a&&(a=function(a,b,c,d,e,f,g){var h=">"===d?"partial":d;return[h,e,f,g].concat([["line",b],["col",c]])}(p.offset,p.line,p.column,a[1],a[3],a[4],a[5])),null===a&&(R=e(p)),S--,0===S&&null===a&&g("partial"),a}function r(){var a,b,d,h,i,j;for(S++,h=e(R),a=[],i=e(R),j=e(R),124===c.charCodeAt(R.offset)?(b="|",f(R,1)):(b=null,0===S&&g('"|"')),null!==b?(d=y(),null!==d?b=[b,d]:(b=null,R=e(j))):(b=null,R=e(j)),null!==b&&(b=function(a,b,c,d){return d}(i.offset,i.line,i.column,b[1])),null===b&&(R=e(i));null!==b;)a.push(b),i=e(R),j=e(R),124===c.charCodeAt(R.offset)?(b="|",f(R,1)):(b=null,0===S&&g('"|"')),null!==b?(d=y(),null!==d?b=[b,d]:(b=null,R=e(j))):(b=null,R=e(j)),null!==b&&(b=function(a,b,c,d){return d}(i.offset,i.line,i.column,b[1])),null===b&&(R=e(i));return null!==a&&(a=function(a,b,c,d){return["filters"].concat(d)}(h.offset,h.line,h.column,a)),null===a&&(R=e(h)),S--,0===S&&null===a&&g("filters"),a}function s(){var a,b,d,h,i,j;return S++,i=e(R),j=e(R),a=J(),null!==a?(126===c.charCodeAt(R.offset)?(b="~",f(R,1)):(b=null,0===S&&g('"~"')),null!==b?(d=y(),null!==d?(h=K(),null!==h?a=[a,b,d,h]:(a=null,R=e(j))):(a=null,R=e(j))):(a=null,R=e(j))):(a=null,R=e(j)),null!==a&&(a=function(a,b,c,d){return["special",d].concat([["line",b],["col",c]])}(i.offset,i.line,i.column,a[2])),null===a&&(R=e(i)),S--,0===S&&null===a&&g("special"),a}function t(){var a,b;return S++,b=e(R),a=x(),null!==a&&(a=function(a,b,c,d){var e=["path"].concat(d);return e.text=d[1].join("."),e}(b.offset,b.line,b.column,a)),null===a&&(R=e(b)),null===a&&(b=e(R),a=y(),null!==a&&(a=function(a,b,c,d){var e=["key",d];return e.text=d,e}(b.offset,b.line,b.column,a)),null===a&&(R=e(b))),S--,0===S&&null===a&&g("identifier"),a}function u(){var a,b;return S++,b=e(R),a=v(),null===a&&(a=w()),null!==a&&(a=function(a,b,c,d){return["literal",d]}(b.offset,b.line,b.column,a)),null===a&&(R=e(b)),S--,0===S&&null===a&&g("number"),a}function v(){var a,b,d,h,i,j;if(S++,i=e(R),j=e(R),a=w(),null!==a)if(46===c.charCodeAt(R.offset)?(b=".",f(R,1)):(b=null,0===S&&g('"."')),null!==b){if(h=w(),null!==h)for(d=[];null!==h;)d.push(h),h=w();else d=null;null!==d?a=[a,b,d]:(a=null,R=e(j))}else a=null,R=e(j);else a=null,R=e(j);return null!==a&&(a=function(a,b,c,d,e){return parseFloat(d+"."+e.join(""))}(i.offset,i.line,i.column,a[0],a[2])),null===a&&(R=e(i)),S--,0===S&&null===a&&g("float"),a}function w(){var a,b,d;if(S++,d=e(R),/^[0-9]/.test(c.charAt(R.offset))?(b=c.charAt(R.offset),f(R,1)):(b=null,0===S&&g("[0-9]")),null!==b)for(a=[];null!==b;)a.push(b),/^[0-9]/.test(c.charAt(R.offset))?(b=c.charAt(R.offset),f(R,1)):(b=null,0===S&&g("[0-9]"));else a=null;return null!==a&&(a=function(a,b,c,d){return parseInt(d.join(""),10)}(d.offset,d.line,d.column,a)),null===a&&(R=e(d)),S--,0===S&&null===a&&g("integer"),a}function x(){var a,b,d,h,i;if(S++,h=e(R),i=e(R),a=y(),a=null!==a?a:"",null!==a){if(d=A(),null===d&&(d=z()),null!==d)for(b=[];null!==d;)b.push(d),d=A(),null===d&&(d=z());else b=null;null!==b?a=[a,b]:(a=null,R=e(i))}else a=null,R=e(i);if(null!==a&&(a=function(a,b,c,d,e){return e=e[0],d&&e?(e.unshift(d),[!1,e].concat([["line",b],["col",c]])):[!0,e].concat([["line",b],["col",c]])}(h.offset,h.line,h.column,a[0],a[1])),null===a&&(R=e(h)),null===a){if(h=e(R),i=e(R),46===c.charCodeAt(R.offset)?(a=".",f(R,1)):(a=null,0===S&&g('"."')),null!==a){for(b=[],d=A(),null===d&&(d=z());null!==d;)b.push(d),d=A(),null===d&&(d=z());null!==b?a=[a,b]:(a=null,R=e(i))}else a=null,R=e(i);null!==a&&(a=function(a,b,c,d){return d.length>0?[!0,d[0]].concat([["line",b],["col",c]]):[!0,[]].concat([["line",b],["col",c]])}(h.offset,h.line,h.column,a[1])),null===a&&(R=e(h))}return S--,0===S&&null===a&&g("path"),a}function y(){var a,b,d,h,i;if(S++,h=e(R),i=e(R),/^[a-zA-Z_$]/.test(c.charAt(R.offset))?(a=c.charAt(R.offset),f(R,1)):(a=null,0===S&&g("[a-zA-Z_$]")),null!==a){for(b=[],/^[0-9a-zA-Z_$\-]/.test(c.charAt(R.offset))?(d=c.charAt(R.offset),f(R,1)):(d=null,0===S&&g("[0-9a-zA-Z_$\\-]"));null!==d;)b.push(d),/^[0-9a-zA-Z_$\-]/.test(c.charAt(R.offset))?(d=c.charAt(R.offset),f(R,1)):(d=null,0===S&&g("[0-9a-zA-Z_$\\-]"));null!==b?a=[a,b]:(a=null,R=e(i))}else a=null,R=e(i);return null!==a&&(a=function(a,b,c,d,e){return d+e.join("")}(h.offset,h.line,h.column,a[0],a[1])),null===a&&(R=e(h)),S--,0===S&&null===a&&g("key"),a}function z(){var a,b,d,h,i,j,k,l;if(S++,h=e(R),i=e(R),j=e(R),k=e(R),a=L(),null!==a){if(l=e(R),/^[0-9]/.test(c.charAt(R.offset))?(d=c.charAt(R.offset),f(R,1)):(d=null,0===S&&g("[0-9]")),null!==d)for(b=[];null!==d;)b.push(d),/^[0-9]/.test(c.charAt(R.offset))?(d=c.charAt(R.offset),f(R,1)):(d=null,0===S&&g("[0-9]"));else b=null;null!==b&&(b=function(a,b,c,d){return d.join("")}(l.offset,l.line,l.column,b)),null===b&&(R=e(l)),null===b&&(b=t()),null!==b?(d=M(),null!==d?a=[a,b,d]:(a=null,R=e(k))):(a=null,R=e(k))}else a=null,R=e(k);return null!==a&&(a=function(a,b,c,d){return d}(j.offset,j.line,j.column,a[1])),null===a&&(R=e(j)),null!==a?(b=A(),b=null!==b?b:"",null!==b?a=[a,b]:(a=null,R=e(i))):(a=null,R=e(i)),null!==a&&(a=function(a,b,c,d,e){return e?e.unshift(d):e=[d],e}(h.offset,h.line,h.column,a[0],a[1])),null===a&&(R=e(h)),S--,0===S&&null===a&&g("array"),a}function A(){var a,b,d,h,i,j,k;if(S++,h=e(R),i=e(R),j=e(R),k=e(R),46===c.charCodeAt(R.offset)?(b=".",f(R,1)):(b=null,0===S&&g('"."')),null!==b?(d=y(),null!==d?b=[b,d]:(b=null,R=e(k))):(b=null,R=e(k)),null!==b&&(b=function(a,b,c,d){return d}(j.offset,j.line,j.column,b[1])),null===b&&(R=e(j)),null!==b)for(a=[];null!==b;)a.push(b),j=e(R),k=e(R),46===c.charCodeAt(R.offset)?(b=".",f(R,1)):(b=null,0===S&&g('"."')),null!==b?(d=y(),null!==d?b=[b,d]:(b=null,R=e(k))):(b=null,R=e(k)),null!==b&&(b=function(a,b,c,d){return d}(j.offset,j.line,j.column,b[1])),null===b&&(R=e(j));else a=null;return null!==a?(b=z(),b=null!==b?b:"",null!==b?a=[a,b]:(a=null,R=e(i))):(a=null,R=e(i)),null!==a&&(a=function(a,b,c,d,e){return e?d.concat(e):d}(h.offset,h.line,h.column,a[0],a[1])),null===a&&(R=e(h)),S--,0===S&&null===a&&g("array_part"),a}function B(){var a,b,d,h,i;if(S++,h=e(R),i=e(R),34===c.charCodeAt(R.offset)?(a='"',f(R,1)):(a=null,0===S&&g('"\\""')),null!==a?(34===c.charCodeAt(R.offset)?(b='"',f(R,1)):(b=null,0===S&&g('"\\""')),null!==b?a=[a,b]:(a=null,R=e(i))):(a=null,R=e(i)),null!==a&&(a=function(a,b,c){return["literal",""].concat([["line",b],["col",c]])}(h.offset,h.line,h.column)),null===a&&(R=e(h)),null===a&&(h=e(R),i=e(R),34===c.charCodeAt(R.offset)?(a='"',f(R,1)):(a=null,0===S&&g('"\\""')),null!==a?(b=E(),null!==b?(34===c.charCodeAt(R.offset)?(d='"',f(R,1)):(d=null,0===S&&g('"\\""')),null!==d?a=[a,b,d]:(a=null,R=e(i))):(a=null,R=e(i))):(a=null,R=e(i)),null!==a&&(a=function(a,b,c,d){return["literal",d].concat([["line",b],["col",c]])}(h.offset,h.line,h.column,a[1])),null===a&&(R=e(h)),null===a)){if(h=e(R),i=e(R),34===c.charCodeAt(R.offset)?(a='"',f(R,1)):(a=null,0===S&&g('"\\""')),null!==a){if(d=C(),null!==d)for(b=[];null!==d;)b.push(d),d=C();else b=null;null!==b?(34===c.charCodeAt(R.offset)?(d='"',f(R,1)):(d=null,0===S&&g('"\\""')),null!==d?a=[a,b,d]:(a=null,R=e(i))):(a=null,R=e(i))}else a=null,R=e(i);null!==a&&(a=function(a,b,c,d){return["body"].concat(d).concat([["line",b],["col",c]])}(h.offset,h.line,h.column,a[1])),null===a&&(R=e(h))}return S--,0===S&&null===a&&g("inline"),a}function C(){var a,b;return a=s(),null===a&&(a=p(),null===a&&(b=e(R),a=E(),null!==a&&(a=function(a,b,c,d){return["buffer",d]}(b.offset,b.line,b.column,a)),null===a&&(R=e(b)))),a}function D(){var a,b,d,h,i,j,k,l,m,n;if(S++,k=e(R),l=e(R),a=N(),null!==a){for(b=[],d=O();null!==d;)b.push(d),d=O();null!==b?a=[a,b]:(a=null,R=e(l))}else a=null,R=e(l);if(null!==a&&(a=function(a,b,c,d,e){return["format",d,e.join("")].concat([["line",b],["col",c]])}(k.offset,k.line,k.column,a[0],a[1])),null===a&&(R=e(k)),null===a){if(k=e(R),l=e(R),m=e(R),n=e(R),S++,b=I(),S--,null===b?b="":(b=null,R=e(n)),null!==b?(n=e(R),S++,d=G(),S--,null===d?d="":(d=null,R=e(n)),null!==d?(n=e(R),S++,h=H(),S--,null===h?h="":(h=null,R=e(n)),null!==h?(n=e(R),S++,i=N(),S--,null===i?i="":(i=null,R=e(n)),null!==i?(c.length>R.offset?(j=c.charAt(R.offset),f(R,1)):(j=null,0===S&&g("any character")),null!==j?b=[b,d,h,i,j]:(b=null,R=e(m))):(b=null,R=e(m))):(b=null,R=e(m))):(b=null,R=e(m))):(b=null,R=e(m)),null!==b&&(b=function(a,b,c,d){return d}(l.offset,l.line,l.column,b[4])),null===b&&(R=e(l)),null!==b)for(a=[];null!==b;)a.push(b),l=e(R),m=e(R),n=e(R),S++,b=I(),S--,null===b?b="":(b=null,R=e(n)),null!==b?(n=e(R),S++,d=G(),S--,null===d?d="":(d=null,R=e(n)),null!==d?(n=e(R),S++,h=H(),S--,null===h?h="":(h=null,R=e(n)),null!==h?(n=e(R),S++,i=N(),S--,null===i?i="":(i=null,R=e(n)),null!==i?(c.length>R.offset?(j=c.charAt(R.offset),f(R,1)):(j=null,0===S&&g("any character")),null!==j?b=[b,d,h,i,j]:(b=null,R=e(m))):(b=null,R=e(m))):(b=null,R=e(m))):(b=null,R=e(m))):(b=null,R=e(m)),null!==b&&(b=function(a,b,c,d){return d}(l.offset,l.line,l.column,b[4])),null===b&&(R=e(l));else a=null;null!==a&&(a=function(a,b,c,d){return["buffer",d.join("")].concat([["line",b],["col",c]])}(k.offset,k.line,k.column,a)),null===a&&(R=e(k))}return S--,0===S&&null===a&&g("buffer"),a}function E(){var a,b,d,h,i,j,k;if(S++,h=e(R),i=e(R),j=e(R),k=e(R),S++,b=I(),S--,null===b?b="":(b=null,R=e(k)),null!==b?(d=F(),null===d&&(/^[^"]/.test(c.charAt(R.offset))?(d=c.charAt(R.offset),f(R,1)):(d=null,0===S&&g('[^"]'))),null!==d?b=[b,d]:(b=null,R=e(j))):(b=null,R=e(j)),null!==b&&(b=function(a,b,c,d){return d}(i.offset,i.line,i.column,b[1])),null===b&&(R=e(i)),null!==b)for(a=[];null!==b;)a.push(b),i=e(R),j=e(R),k=e(R),S++,b=I(),S--,null===b?b="":(b=null,R=e(k)),null!==b?(d=F(),null===d&&(/^[^"]/.test(c.charAt(R.offset))?(d=c.charAt(R.offset),f(R,1)):(d=null,0===S&&g('[^"]'))),null!==d?b=[b,d]:(b=null,R=e(j))):(b=null,R=e(j)),null!==b&&(b=function(a,b,c,d){return d}(i.offset,i.line,i.column,b[1])),null===b&&(R=e(i));else a=null;return null!==a&&(a=function(a,b,c,d){return d.join("")}(h.offset,h.line,h.column,a)),null===a&&(R=e(h)),S--,0===S&&null===a&&g("literal"),a}function F(){var a,b;return b=e(R),'\\"'===c.substr(R.offset,2)?(a='\\"',f(R,2)):(a=null,0===S&&g('"\\\\\\""')),null!==a&&(a=function(){return'"'}(b.offset,b.line,b.column)),null===a&&(R=e(b)),a}function G(){var a,b,d,h,i,j,k,l,m;if(S++,i=e(R),j=e(R),"{`"===c.substr(R.offset,2)?(a="{`",f(R,2)):(a=null,0===S&&g('"{`"')),null!==a){for(b=[],k=e(R),l=e(R),m=e(R),S++,"`}"===c.substr(R.offset,2)?(d="`}",f(R,2)):(d=null,0===S&&g('"`}"')),S--,null===d?d="":(d=null,R=e(m)),null!==d?(c.length>R.offset?(h=c.charAt(R.offset),f(R,1)):(h=null,0===S&&g("any character")),null!==h?d=[d,h]:(d=null,R=e(l))):(d=null,R=e(l)),null!==d&&(d=function(a,b,c,d){return d}(k.offset,k.line,k.column,d[1])),null===d&&(R=e(k));null!==d;)b.push(d),k=e(R),l=e(R),m=e(R),S++,"`}"===c.substr(R.offset,2)?(d="`}",f(R,2)):(d=null,0===S&&g('"`}"')),S--,null===d?d="":(d=null,R=e(m)),null!==d?(c.length>R.offset?(h=c.charAt(R.offset),f(R,1)):(h=null,0===S&&g("any character")),null!==h?d=[d,h]:(d=null,R=e(l))):(d=null,R=e(l)),null!==d&&(d=function(a,b,c,d){return d}(k.offset,k.line,k.column,d[1])),null===d&&(R=e(k));null!==b?("`}"===c.substr(R.offset,2)?(d="`}",f(R,2)):(d=null,0===S&&g('"`}"')),null!==d?a=[a,b,d]:(a=null,R=e(j))):(a=null,R=e(j))}else a=null,R=e(j);return null!==a&&(a=function(a,b,c,d){return["raw",d.join("")].concat([["line",b],["col",c]])}(i.offset,i.line,i.column,a[1])),null===a&&(R=e(i)),S--,0===S&&null===a&&g("raw"),a}function H(){var a,b,d,h,i,j,k,l,m;if(S++,i=e(R),j=e(R),"{!"===c.substr(R.offset,2)?(a="{!",f(R,2)):(a=null,0===S&&g('"{!"')),null!==a){for(b=[],k=e(R),l=e(R),m=e(R),S++,"!}"===c.substr(R.offset,2)?(d="!}",f(R,2)):(d=null,0===S&&g('"!}"')),S--,null===d?d="":(d=null,R=e(m)),null!==d?(c.length>R.offset?(h=c.charAt(R.offset),f(R,1)):(h=null,0===S&&g("any character")),null!==h?d=[d,h]:(d=null,R=e(l))):(d=null,R=e(l)),null!==d&&(d=function(a,b,c,d){return d}(k.offset,k.line,k.column,d[1])),null===d&&(R=e(k));null!==d;)b.push(d),k=e(R),l=e(R),m=e(R),S++,"!}"===c.substr(R.offset,2)?(d="!}",f(R,2)):(d=null,0===S&&g('"!}"')),S--,null===d?d="":(d=null,R=e(m)),null!==d?(c.length>R.offset?(h=c.charAt(R.offset),f(R,1)):(h=null,0===S&&g("any character")),null!==h?d=[d,h]:(d=null,R=e(l))):(d=null,R=e(l)),null!==d&&(d=function(a,b,c,d){return d}(k.offset,k.line,k.column,d[1])),null===d&&(R=e(k));null!==b?("!}"===c.substr(R.offset,2)?(d="!}",f(R,2)):(d=null,0===S&&g('"!}"')),null!==d?a=[a,b,d]:(a=null,R=e(j))):(a=null,R=e(j))}else a=null,R=e(j);return null!==a&&(a=function(a,b,c,d){return["comment",d.join("")].concat([["line",b],["col",c]])}(i.offset,i.line,i.column,a[1])),null===a&&(R=e(i)),S--,0===S&&null===a&&g("comment"),a}function I(){var a,b,d,h,i,j,k,l,m,n,o;if(m=e(R),a=J(),null!==a){for(b=[],d=O();null!==d;)b.push(d),d=O();if(null!==b)if(/^[#?^><+%:@\/~%]/.test(c.charAt(R.offset))?(d=c.charAt(R.offset),f(R,1)):(d=null,0===S&&g("[#?^><+%:@\\/~%]")),null!==d){for(h=[],i=O();null!==i;)h.push(i),i=O();if(null!==h){if(n=e(R),o=e(R),S++,j=K(),S--,null===j?j="":(j=null,R=e(o)),null!==j?(o=e(R),S++,k=N(),S--,null===k?k="":(k=null,R=e(o)),null!==k?(c.length>R.offset?(l=c.charAt(R.offset),f(R,1)):(l=null,0===S&&g("any character")),null!==l?j=[j,k,l]:(j=null,R=e(n))):(j=null,R=e(n))):(j=null,R=e(n)),null!==j)for(i=[];null!==j;)i.push(j),n=e(R),o=e(R),S++,j=K(),S--,null===j?j="":(j=null,R=e(o)),null!==j?(o=e(R),S++,k=N(),S--,null===k?k="":(k=null,R=e(o)),null!==k?(c.length>R.offset?(l=c.charAt(R.offset),f(R,1)):(l=null,0===S&&g("any character")),null!==l?j=[j,k,l]:(j=null,R=e(n))):(j=null,R=e(n))):(j=null,R=e(n));else i=null;if(null!==i){for(j=[],k=O();null!==k;)j.push(k),k=O();null!==j?(k=K(),null!==k?a=[a,b,d,h,i,j,k]:(a=null,R=e(m))):(a=null,R=e(m))}else a=null,R=e(m)}else a=null,R=e(m)}else a=null,R=e(m);else a=null,R=e(m)}else a=null,R=e(m);return null===a&&(a=p()),a}function J(){var a;return 123===c.charCodeAt(R.offset)?(a="{",f(R,1)):(a=null,0===S&&g('"{"')),a}function K(){var a;return 125===c.charCodeAt(R.offset)?(a="}",f(R,1)):(a=null,0===S&&g('"}"')),a}function L(){var a;return 91===c.charCodeAt(R.offset)?(a="[",f(R,1)):(a=null,0===S&&g('"["')),a}function M(){var a;return 93===c.charCodeAt(R.offset)?(a="]",f(R,1)):(a=null,0===S&&g('"]"')),a}function N(){var a;return 10===c.charCodeAt(R.offset)?(a="\n",f(R,1)):(a=null,0===S&&g('"\\n"')),null===a&&("\r\n"===c.substr(R.offset,2)?(a="\r\n",f(R,2)):(a=null,0===S&&g('"\\r\\n"')),null===a&&(13===c.charCodeAt(R.offset)?(a="\r",f(R,1)):(a=null,0===S&&g('"\\r"')),null===a&&(8232===c.charCodeAt(R.offset)?(a="\u2028",f(R,1)):(a=null,0===S&&g('"\\u2028"')),null===a&&(8233===c.charCodeAt(R.offset)?(a="\u2029",f(R,1)):(a=null,0===S&&g('"\\u2029"')))))),a
}function O(){var a;return/^[\t\x0B\f \xA0\uFEFF]/.test(c.charAt(R.offset))?(a=c.charAt(R.offset),f(R,1)):(a=null,0===S&&g("[\\t\\x0B\\f \\xA0\\uFEFF]")),null===a&&(a=N()),a}function P(a){a.sort();for(var b=null,c=[],d=0;d<a.length;d++)a[d]!==b&&(c.push(a[d]),b=a[d]);return c}var Q={body:h,part:i,section:j,sec_tag_start:k,end_tag:l,context:m,params:n,bodies:o,reference:p,partial:q,filters:r,special:s,identifier:t,number:u,"float":v,integer:w,path:x,key:y,array:z,array_part:A,inline:B,inline_part:C,buffer:D,literal:E,esc:F,raw:G,comment:H,tag:I,ld:J,rd:K,lb:L,rb:M,eol:N,ws:O};if(void 0!==d){if(void 0===Q[d])throw new Error("Invalid rule name: "+b(d)+".")}else d="body";var R={offset:0,line:1,column:1,seenCR:!1},S=0,T={offset:0,line:1,column:1,seenCR:!1},U=[],V=Q[d]();if(null===V||R.offset!==c.length){var W=Math.max(R.offset,T.offset),X=W<c.length?c.charAt(W):null,Y=R.offset>T.offset?R:T;throw new a.SyntaxError(P(U),X,W,Y.line,Y.column)}return V},toSource:function(){return this._source}};return c.SyntaxError=function(a,c,d,e,f){function g(a,c){var d,e;switch(a.length){case 0:d="end of input";break;case 1:d=a[0];break;default:d=a.slice(0,a.length-1).join(", ")+" or "+a[a.length-1]}return e=c?b(c):"end of input","Expected "+d+" but "+e+" found."}this.name="SyntaxError",this.expected=a,this.found=c,this.message=g(a,c),this.offset=d,this.line=e,this.column=f},c.SyntaxError.prototype=Error.prototype,c}();return dust.parse=a.parse,a}),function(a,b){"object"==typeof exports?module.exports=b(require("./parser").parse,require("./dust")):b(a.dust.parse,a.dust)}(this,function(a,dust){function b(a){var b={};return n.filterNode(b,a)}function c(a,b){var c,d,e,f=[b[0]];for(c=1,d=b.length;d>c;c++)e=n.filterNode(a,b[c]),e&&f.push(e);return f}function d(a,b){var c,d,e,f,g=[b[0]];for(d=1,e=b.length;e>d;d++)f=n.filterNode(a,b[d]),f&&("buffer"===f[0]?c?c[1]+=f[1]:(c=f,g.push(f)):(c=null,g.push(f)));return g}function e(a,b){return["buffer",p[b[1]]]}function f(a,b){return b}function g(){}function h(a,b){var c={name:b,bodies:[],blocks:{},index:0,auto:"h"};return"(function(){dust.register("+(b?'"'+b+'"':"null")+","+n.compileNode(c,a)+");"+i(c)+j(c)+"return body_0;})();"}function i(a){var b,c=[],d=a.blocks;for(b in d)c.push('"'+b+'":'+d[b]);return c.length?(a.blocks="ctx=ctx.shiftBlocks(blocks);","var blocks={"+c.join(",")+"};"):a.blocks=""}function j(a){var b,c,d=[],e=a.bodies,f=a.blocks;for(b=0,c=e.length;c>b;b++)d[b]="function body_"+b+"(chk,ctx){"+f+"return chk"+e[b]+";}";return d.join("")}function k(a,b){var c,d,e="";for(c=1,d=b.length;d>c;c++)e+=n.compileNode(a,b[c]);return e}function l(a,b,c){return"."+c+"("+n.compileNode(a,b[1])+","+n.compileNode(a,b[2])+","+n.compileNode(a,b[4])+","+n.compileNode(a,b[3])+")"}function m(a){return a.replace(q,"\\\\").replace(r,'\\"').replace(s,"\\f").replace(t,"\\n").replace(u,"\\r").replace(v,"\\t")}var n={},o=dust.isArray;n.compile=function(c,d){if(!d&&null!==d)throw new Error("Template name parameter cannot be undefined when calling dust.compile");try{var e=b(a(c));return h(e,d)}catch(f){if(!f.line||!f.column)throw f;throw new SyntaxError(f.message+" At line : "+f.line+", column : "+f.column)}},n.filterNode=function(a,b){return n.optimizers[b[0]](a,b)},n.optimizers={body:d,buffer:f,special:e,format:g,reference:c,"#":c,"?":c,"^":c,"<":c,"+":c,"@":c,"%":c,partial:c,context:c,params:c,bodies:c,param:c,filters:f,key:f,path:f,literal:f,raw:f,comment:g,line:g,col:g},n.pragmas={esc:function(a,b,c){var d,e=a.auto;return b||(b="h"),a.auto="s"===b?"":b,d=k(a,c.block),a.auto=e,d}};var p={s:" ",n:"\n",r:"\r",lb:"{",rb:"}"};n.compileNode=function(a,b){return n.nodes[b[0]](a,b)},n.nodes={body:function(a,b){var c=a.index++,d="body_"+c;return a.bodies[c]=k(a,b),d},buffer:function(a,b){return".write("+w(b[1])+")"},format:function(a,b){return".write("+w(b[1]+b[2])+")"},reference:function(a,b){return".reference("+n.compileNode(a,b[1])+",ctx,"+n.compileNode(a,b[2])+")"},"#":function(a,b){return l(a,b,"section")},"?":function(a,b){return l(a,b,"exists")},"^":function(a,b){return l(a,b,"notexists")},"<":function(a,b){for(var c=b[4],d=1,e=c.length;e>d;d++){var f=c[d],g=f[1][1];if("block"===g)return a.blocks[b[1].text]=n.compileNode(a,f[2]),""}return""},"+":function(a,b){return"undefined"==typeof b[1].text&&"undefined"==typeof b[4]?".block(ctx.getBlock("+n.compileNode(a,b[1])+",chk, ctx),"+n.compileNode(a,b[2])+", {},"+n.compileNode(a,b[3])+")":".block(ctx.getBlock("+w(b[1].text)+"),"+n.compileNode(a,b[2])+","+n.compileNode(a,b[4])+","+n.compileNode(a,b[3])+")"},"@":function(a,b){return".helper("+w(b[1].text)+","+n.compileNode(a,b[2])+","+n.compileNode(a,b[4])+","+n.compileNode(a,b[3])+")"},"%":function(a,b){var c,d,e,f,g,h,i,j,k,l=b[1][1];if(!n.pragmas[l])return"";for(c=b[4],d={},j=1,k=c.length;k>j;j++)h=c[j],d[h[1][1]]=h[2];for(e=b[3],f={},j=1,k=e.length;k>j;j++)i=e[j],f[i[1][1]]=i[2][1];return g=b[2][1]?b[2][1].text:null,n.pragmas[l](a,g,d,f)},partial:function(a,b){return".partial("+n.compileNode(a,b[1])+","+n.compileNode(a,b[2])+","+n.compileNode(a,b[3])+")"},context:function(a,b){return b[1]?"ctx.rebase("+n.compileNode(a,b[1])+")":"ctx"},params:function(a,b){for(var c=[],d=1,e=b.length;e>d;d++)c.push(n.compileNode(a,b[d]));return c.length?"{"+c.join(",")+"}":"{}"},bodies:function(a,b){for(var c=[],d=1,e=b.length;e>d;d++)c.push(n.compileNode(a,b[d]));return"{"+c.join(",")+"}"},param:function(a,b){return n.compileNode(a,b[1])+":"+n.compileNode(a,b[2])},filters:function(a,b){for(var c=[],d=1,e=b.length;e>d;d++){var f=b[d];c.push('"'+f+'"')}return'"'+a.auto+'"'+(c.length?",["+c.join(",")+"]":"")},key:function(a,b){return'ctx.get(["'+b[1]+'"], false)'},path:function(a,b){for(var c=b[1],d=b[2],e=[],f=0,g=d.length;g>f;f++)e.push(o(d[f])?n.compileNode(a,d[f]):'"'+d[f]+'"');return"ctx.getPath("+c+", ["+e.join(",")+"])"},literal:function(a,b){return w(b[1])},raw:function(a,b){return".write("+w(b[1])+")"}};var q=/\\/g,r=/"/g,s=/\f/g,t=/\n/g,u=/\r/g,v=/\t/g,w="undefined"==typeof JSON?function(a){return'"'+m(a)+'"'}:JSON.stringify;return dust.compile=n.compile,dust.filterNode=n.filterNode,dust.optimizers=n.optimizers,dust.pragmas=n.pragmas,dust.compileNode=n.compileNode,dust.nodes=n.nodes,n});

/*! dustjs-helpers - v1.2.0
* https://github.com/linkedin/dustjs-helpers
* Copyright (c) 2014 Aleksander Williams; Released under the MIT License */
!function(dust){function isSelect(a){var b=a.current();return"object"==typeof b&&b.isSelect===!0}function jsonFilter(a,b){return"function"==typeof b?b.toString().replace(/(^\s+|\s+$)/gm,"").replace(/\n/gm,"").replace(/,\s*/gm,", ").replace(/\)\{/gm,") {"):b}function filter(a,b,c,d,e){d=d||{};var f,g,h=c.block,i=d.filterOpType||"";if("undefined"!=typeof d.key)f=dust.helpers.tap(d.key,a,b);else{if(!isSelect(b))return _console.log("No key specified for filter in:"+i+" helper "),a;f=b.current().selectKey,b.current().isResolved&&(e=function(){return!1})}return g=dust.helpers.tap(d.value,a,b),e(coerce(g,d.type,b),coerce(f,d.type,b))?(isSelect(b)&&(b.current().isResolved=!0),h?a.render(h,b):(_console.log("Missing body block in the "+i+" helper "),a)):c["else"]?a.render(c["else"],b):a}function coerce(a,b,c){if(a)switch(b||typeof a){case"number":return+a;case"string":return String(a);case"boolean":return a="false"===a?!1:a,Boolean(a);case"date":return new Date(a);case"context":return c.get(a)}return a}var _console="undefined"!=typeof console?console:{log:function(){}},helpers={tap:function(a,b,c){if("function"!=typeof a)return a;var d,e="";return d=b.tap(function(a){return e+=a,""}).render(a,c),b.untap(),d.constructor!==b.constructor?d:""===e?!1:e},sep:function(a,b,c){var d=c.block;return b.stack.index===b.stack.of-1?a:d?c.block(a,b):a},idx:function(a,b,c){var d=c.block;return d?c.block(a,b.push(b.stack.index)):a},contextDump:function(a,b,c,d){var e,f=d||{},g=f.to||"output",h=f.key||"current";return g=dust.helpers.tap(g,a,b),h=dust.helpers.tap(h,a,b),e="full"===h?JSON.stringify(b.stack,jsonFilter,2):JSON.stringify(b.stack.head,jsonFilter,2),"console"===g?(_console.log(e),a):a.write(e)},"if":function(chunk,context,bodies,params){var body=bodies.block,skip=bodies["else"];if(params&&params.cond){var cond=params.cond;if(cond=dust.helpers.tap(cond,chunk,context),eval(cond))return body?chunk.render(bodies.block,context):(_console.log("Missing body block in the if helper!"),chunk);if(skip)return chunk.render(bodies["else"],context)}else _console.log("No condition given in the if helper!");return chunk},math:function(a,b,c,d){if(d&&"undefined"!=typeof d.key&&d.method){var e=d.key,f=d.method,g=d.operand,h=d.round,i=null;switch(e=dust.helpers.tap(e,a,b),g=dust.helpers.tap(g,a,b),f){case"mod":(0===g||g===-0)&&_console.log("operand for divide operation is 0/-0: expect Nan!"),i=parseFloat(e)%parseFloat(g);break;case"add":i=parseFloat(e)+parseFloat(g);break;case"subtract":i=parseFloat(e)-parseFloat(g);break;case"multiply":i=parseFloat(e)*parseFloat(g);break;case"divide":(0===g||g===-0)&&_console.log("operand for divide operation is 0/-0: expect Nan/Infinity!"),i=parseFloat(e)/parseFloat(g);break;case"ceil":i=Math.ceil(parseFloat(e));break;case"floor":i=Math.floor(parseFloat(e));break;case"round":i=Math.round(parseFloat(e));break;case"abs":i=Math.abs(parseFloat(e));break;default:_console.log("method passed is not supported")}return null!==i?(h&&(i=Math.round(i)),c&&c.block?a.render(c.block,b.push({isSelect:!0,isResolved:!1,selectKey:i})):a.write(i)):a}return _console.log("Key is a required parameter for math helper along with method/operand!"),a},select:function(a,b,c,d){var e=c.block;if(d&&"undefined"!=typeof d.key){var f=dust.helpers.tap(d.key,a,b);return e?a.render(c.block,b.push({isSelect:!0,isResolved:!1,selectKey:f})):(_console.log("Missing body block in the select helper "),a)}return _console.log("No key given in the select helper!"),a},eq:function(a,b,c,d){return d&&(d.filterOpType="eq"),filter(a,b,c,d,function(a,b){return b===a})},ne:function(a,b,c,d){return d?(d.filterOpType="ne",filter(a,b,c,d,function(a,b){return b!==a})):a},lt:function(a,b,c,d){return d?(d.filterOpType="lt",filter(a,b,c,d,function(a,b){return a>b})):void 0},lte:function(a,b,c,d){return d?(d.filterOpType="lte",filter(a,b,c,d,function(a,b){return a>=b})):a},gt:function(a,b,c,d){return d?(d.filterOpType="gt",filter(a,b,c,d,function(a,b){return b>a})):a},gte:function(a,b,c,d){return d?(d.filterOpType="gte",filter(a,b,c,d,function(a,b){return b>=a})):a},"default":function(a,b,c,d){return d&&(d.filterOpType="default"),filter(a,b,c,d,function(){return!0})},size:function(a,b,c,d){var e,f,g,h=0;if(d=d||{},e=d.key,e&&e!==!0)if(dust.isArray(e))h=e.length;else if(!isNaN(parseFloat(e))&&isFinite(e))h=e;else if("object"==typeof e){f=0;for(g in e)Object.hasOwnProperty.call(e,g)&&f++;h=f}else h=(e+"").length;else h=0;return a.write(h)}};dust.helpers=helpers}("undefined"!=typeof exports?module.exports=require("dustjs-linkedin"):dust);

(function(dust){

dust.helpers.i18n = function(chunk, context, bodies, params) {
  var newContext = dust.makeBase(dust.helpers.i18n.context()).push(context);
  var i18nstring = dust.helpers.tap(params.t, chunk, context);
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
    var alias = false;
    var query = params.query;
    var aliasSeperatorPosition = query.indexOf(':', 1);
    delete params.query;
    if (aliasSeperatorPosition > 0)
    {
      //
      var alias = query.substr(0, aliasSeperatorPosition);
      var query = query.substr((aliasSeperatorPosition + 1));
    }

    console.log({'alias': alias, 'query': query});

    var queryId = dust.helpers.tap(query, chunk, context);
    var rawcall = DarkTip.getApicall(queryId);
    var newContext = context.push(params);
    return chunk.map(function(chunk) {
      dust.renderSource(rawcall, newContext, function(err, apicall) {
        if (apicall) {
          DarkTip.callApi(
            apicall,
            function(data) { /* success */
              return chunk.render(body, newContext.push(data)).end();
            },
            function(data) { /* failure */
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

})(dust);

if(!window.jQuery.jsonp){
	/* jquery.jsonp 2.2.0 (c)2010 Julian Aubourg | MIT License | http://code.google.com/p/jquery-jsonp/ */
	(function(a){function b(){}function c(a){A=[a]}function d(a,b,c,d){try{d=a&&a.apply(b.context||b,c)}catch(e){d=!1}return d}function e(a){return/\?/.test(a)?"&":"?"}function D(l){function V(a){O++||(P(),I&&(y[K]={s:[a]}),E&&(a=E.apply(l,[a])),d(l.success,l,[a,t]),d(D,l,[l,t]))}function W(a){O++||(P(),I&&a!=u&&(y[K]=a),d(l.error,l,[l,a]),d(D,l,[l,a]))}l=a.extend({},B,l);var D=l.complete,E=l.dataFilter,F=l.callbackParameter,G=l.callback,H=l.cache,I=l.pageCache,J=l.charset,K=l.url,L=l.data,M=l.timeout,N,O=0,P=b,Q,R,S,T,U;return l.abort=function(){!(O++)&&P()},d(l.beforeSend,l,[l])===!1||O?l:(K=K||h,L=L?typeof L=="string"?L:a.param(L,l.traditional):h,K+=L?e(K)+L:h,F&&(K+=e(K)+encodeURIComponent(F)+"=?"),!H&&!I&&(K+=e(K)+"_"+(new Date).getTime()+"="),K=K.replace(/=\?(&|$)/,"="+G+"$1"),I&&(N=y[K])?N.s?V(N.s[0]):W(N):(v[G]=c,S=a(s)[0],S.id=k+z++,J&&(S[g]=J),C&&C.version()<11.6?(T=a(s)[0]).text="document.getElementById('"+S.id+"')."+n+"()":S[f]=f,!(o in S)&&p in S&&(S.htmlFor=S.id,S.event=m),S[o]=S[n]=S[p]=function(a){if(!S[q]||/loaded|complete/.test(S[q])){try{S[m]&&S[m]()}catch(b){}a=A,A=0,a?V(a[0]):W(i)}},S.src=K,P=function(a){U&&clearTimeout(U),S[p]=S[o]=S[n]=null,w[r](S),T&&w[r](T)},w[j](S,x),T&&w[j](T,x),U=M>0&&setTimeout(function(){W(u)},M)),l)}var f="async",g="charset",h="",i="error",j="insertBefore",k="_jqjsp",l="on",m=l+"click",n=l+i,o=l+"load",p=l+"readystatechange",q="readyState",r="removeChild",s="<script>",t="success",u="timeout",v=window,w=a("head")[0]||document.documentElement,x=w.firstChild,y={},z=0,A,B={callback:k,url:location.href},C=v.opera;D.setup=function(b){a.extend(B,b)},a.jsonp=D})(jQuery)
}

(function(globalScope) {

	// Target browser support - 2 versions back (that's version 9, I'm looking at you, IE!)

	var DarkTip = {};

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

	if (typeof globalScope.dust === 'undefined') {
		DarkTip.log('DarkTip requires dust.js [https://github.com/linkedin/dustjs] to operate!');
		return;
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
				// Check if multiple queries are presend
				// Split it up
				// foreach do a dust.helpers.tap to get the queryId
					// get the rawcalldata via DarkTip.getApicallData
					// push the context
					// create a promise with Q.fcall(function, args)
				// do a Q.all([promise1, promise2, etc...])
				var alias = false;
				var query = params.query;
				var aliasSeperatorPosition = query.indexOf(':', 1);
				delete params.query;
				if (aliasSeperatorPosition > 0)
				{
					var alias = query.substr(0, aliasSeperatorPosition);
					var query = query.substr((aliasSeperatorPosition + 1));
				}
				var queryId = dust.helpers.tap(query, chunk, context);
				var rawcallData = DarkTip.getApicallData(queryId);
				var newContext  = context.push(params);
				return chunk.map(function(chunk) {
					var pushData = {};
					dust.renderSource(rawcallData.url, newContext, function(err, apicall) {
						if (apicall) {
							DarkTip.callApi(
								apicall,
								function(data) {
									if (alias) {
										pushData[alias] = data;
									} else {
										pushData = data;
									}
									return chunk.render(body, newContext.push(pushData)).end();
								},
								function(data) {
									if (skip) {
										if (alias) {
											pushData[alias] = data;
										} else {
											pushData = data;
										}
										return chunk.render(skip, newContext.push(pushData)).end();
									}
									return chunk.end();
								},
								rawcallData.caching,
								rawcallData.validationFn,
								rawcallData.processFn
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
			this.event = function(selector, event, accessFn) {
				if (typeof selector !== 'string') {
					DarkTip.log('TriggerGroup.addEvent: Invalid selector! 1st argument must be selector string.');
					return this;
				}
				if (typeof event !== 'string') {
					DarkTip.log('TriggerGroup.addEvent: Invalid show event! 2nd argument must be event type string.');
					return this;
				}
				if (typeof accessFn !== 'function') {
					DarkTip.log('TriggerGroup.addEvent: Invalid access function! 3rd argument must be a function.');
					return this;
				}
				/*
				if (typeof this.events[selector] === 'undefined') {
					this.events[selector] = {};
				}
				*/
				DarkTip.bindEvent(event, selector, accessFn);
				return this;
			};
		}
		return (DarkTip.triggerGroups[triggerGroupId] = new TriggerGroup(triggerGroupId));
	};

	DarkTip.module = function(moduleId, dependencies)
	{
		if (typeof DarkTip.modules[moduleId] !== 'undefined') {
			return DarkTip.modules[moduleId];
		}
		if (typeof dependencies === 'string') {
			dependencies = [dependencies];
		}
		var Module = function(moduleId, dependencies) {
			if (dust.isArray(dependencies)) {
				var numdeps = dependencies.length;
				for (var i = 0; i < numdeps; i++) {
					if (typeof DarkTip.modules[dependencies[i]] === 'undefined') {
						DarkTip.log('Module "' + moduleId + '" could not be created! Dependant module "' + dependencies[i] + '" was not found.');
						return;
					}
				};
			}
			this.data = {
				'maps'     : {},
				'i18n'     : {},
				'triggers' : {},
				'apicalls' : {},
				'settings' : {},
				'templates': {}
			};
			this.map = function(mapKey, data) {
				this.data.maps[mapKey] = data;
				return this;
			};
			this.i18n = function(locale, data) {
				if (typeof this.data.i18n[locale] === 'undefined')
				{
					this.data.i18n[locale] = data;
				} else {
					this.data.i18n[locale] = DarkTip.merge(this.data.i18n[locale], data);
				}
				return this;
			};
			this.trigger = function(triggerGroupId, extractors) {
				if (DarkTip.triggerGroup(triggerGroupId)) {
					this.data.triggers[triggerGroupId] = extractors;
				} else {
					DarkTip.log('Trigger for module "' + moduleId + '" could not be created! Trigger group "' + triggerGroupId + '" was not found.');
				}
				return this;
			};
			this.apicall = function(apicallId, url, caching, validationFn, processFn) {
				this.data.apicalls[apicallId] = {
					'url'         : url,
					'caching'     : caching || false,
					'validationFn': (validationFn || false),
					'processFn'   : (processFn || false)
				};
				return this;
			};
			this.settings = function(data) {
				this.data.settings = DarkTip.merge(this.data.settings, data);
				return this;
			};
			this.template = function(templateKey, templateCode) {
				return this;
			};
		}
		return (DarkTip.modules[moduleId] = new Module(moduleId, dependencies));
	};

	DarkTip.bindEvent = function(event, selector, accessFn) {
		var doc = globalScope.document;
		DarkTip.domReady(function() {
			var elems = doc.querySelectorAll(selector);
			Array.prototype.forEach.call(elems, function(elem) {
				DarkTip.addEventListeners(elem, event, accessFn);
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

	DarkTip.addEventListeners = function(elem, event, accessFn) {
		var eventFn = function() {
			var accessed = accessFn(this);
			if (accessed) {
				DarkTip.handleEventFire(event, this, accessed);
			}
		};
		if (event === 'hover') {
			elem.addEventListener('mouseenter', eventFn, false);
			elem.addEventListener('mouseleave', eventFn, false);
		}
		if (event === 'hoverintent') {}
		if (event === 'hover&stay') {}
		if (event === 'hoverintent&stay') {}
		if (event === 'click') {}
		if (event === 'click&hover') {}
	};

	DarkTip.handleEventFire = function(event, elem, accessed) {
		console.log({'event': event, 'elem': elem, 'accessed': accessed});
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

		if (this.dust) {
			this.dust.isDebug    = true;
			this.dust.debugLevel = 'DEBUG';
		}

		DarkTip.init();
	}
}]);

DarkTip.registerModule('wow', {

	'triggers': {
		'apiParams': {
			'callback': 'jsonp'
		}
	},

	'maps': {
		'host': {
			'region': {
				'us.battle.net'       : 'us',
				'eu.battle.net'       : 'eu',
				'kr.battle.net'       : 'kr',
				'tw.battle.net'       : 'tw',
				'cn.battle.net'       : 'cn',
				'www.battlenet.com.cn': 'cn'
			}
		},
		'region': {
			'host': {
				'us': 'us.battle.net',
				'eu': 'eu.battle.net',
				'kr': 'kr.battle.net',
				'tw': 'tw.battle.net',
				'cn': 'www.battlenet.com.cn' /* 'cn.battle.net' */
			},
			'mediahost': {
				'us': 'us.media.blizzard.com',
				'eu': 'eu.media.blizzard.com',
				'kr': 'kr.media.blizzard.com',
				'tw': 'us.media.blizzard.com',
				'cn': 'content.battlenet.com.cn'
			}
		},
		'region+lang': {
			'locale': {
				'us+en': 'en_US',
				'us+es': 'es_MX',
				'us+pt': 'pt_BR',
				'eu+en': 'en_GB',
				'eu+es': 'es_ES',
				'eu+fr': 'fr_FR',
				'eu+ru': 'ru_RU',
				'eu+de': 'de_DE',
				'eu+pt': 'pt_PT',
				'eu+it': 'it_IT',
				'kr+ko': 'ko_KR',
				'kr+en': 'en_US',
				'tw+zh': 'zh_TW',
				'tw+en': 'en_US',
				'cn+en': 'en_US',
				'cn+zh': 'zh_CN'
			}
		}
	},

	'layout': {
		'css': {
			'class': 'darktip-tooltip-wow'
		}
	},

	'prepareData': function(state) {
		if(Object.keys(state['data']).length === 0) {
			return false;
		}
		return state['data'];
	},

	'enhanceData': function(module, params, data) {
		var add = {
			'_meta': {
				'path_host'      : 'http://' + params['host'],
				'path_host_media': 'http://' + DarkTip.map('wow', 'maps.region.mediahost', params['region']),
				'region'         : params['region'],
				'locale'         : params['locale'],
				'module'         : module
			}
		};
		DarkTip.jq.extend(true, data, add);
		return data;
	},

	'templates': {
		'tools': {
			'_renderDateTime': function(datetime) {
				var date = new Date(datetime);
				var temp = {
					'year'  : date.getFullYear(),
					'month' : date.getMonth() + 1,
					'day'   : date.getDate(),
					'hour'  : date.getHours(),
					'minute': date.getMinutes(),
					'second': date.getSeconds(),
					'ampm'  : { 'flag': '', 'hour': 0 }
				};
				if(temp['hour'] == 0)
				{
					temp['ampm']['flag'] = 'AM';
					temp['ampm']['hour'] = temp['hour'] + 12;
				}
				else if(temp['hour'] < 12)
				{
					temp['ampm']['flag'] = 'AM';
					temp['ampm']['hour'] = temp['hour'];
				}
				else if(temp['hour'] == 12)
				{
					temp['ampm']['flag'] = 'PM';
					temp['ampm']['hour'] = temp['hour'];
				}
				else
				{
					temp['ampm']['flag'] = 'PM';
					temp['ampm']['hour'] = temp['hour'] - 12;
				}
				return this._loc('datetime', temp);
			},
			'_padZero': function(number, width) {
				width -= number.toString().length;
				if(width > 0)
				{
					return new Array(width + (/\./.test(number) ? 2 : 1)).join('0') + number;
				}
				return number;
			}
		}
	},

	'i18n': {
		'en_US': {
			'loading'  : 'Loading wow data...',
			'not-found': 'Data not found',
			'not-used' : 'Not used',
			'label'    : {
				'slot'       : 'Slot:',
				'realm'      : 'Realm:',
				'quest'      : 'Quest:',
				'region'     : 'Region:',
				'item'       : 'Item:',
				'character'  : 'Character:',
				'guild'      : 'Guild:',
				'teamname'   : 'Team name:',
				'teamsize'   : 'Team size:',
				'achievement': 'Achievement:',
				'spell'      : 'Spell:'
			},
			'factionSide': {
				'0'       : 'Alliance',
				'1'       : 'Horde',
				'alliance': 'Alliance',
				'horde'   : 'Horde'
			},
			'characterClass': {
				'1' : { '0': 'Warrior',      '1': 'Warrior' },
				'2' : { '0': 'Paladin',      '1': 'Paladin' },
				'3' : { '0': 'Hunter',       '1': 'Hunter' },
				'4' : { '0': 'Rogue',        '1': 'Rogue' },
				'5' : { '0': 'Priest',       '1': 'Priest' },
				'6' : { '0': 'Death Knight', '1': 'Death Knight' },
				'7' : { '0': 'Shaman',       '1': 'Shaman' },
				'8' : { '0': 'Mage',         '1': 'Mage' },
				'9' : { '0': 'Warlock',      '1': 'Warlock' },
				'10': { '0': 'Monk',         '1': 'Monk' },
				'11': { '0': 'Druid',        '1': 'Druid' }
			},
			'characterRace': {
				'1' : { '0': 'Human',     '1': 'Human' },
				'2' : { '0': 'Orc',       '1': 'Orc' },
				'3' : { '0': 'Dwarf',     '1': 'Dwarf' },
				'4' : { '0': 'Night Elf', '1': 'Night Elf' },
				'5' : { '0': 'Forsaken',  '1': 'Forsaken' },
				'6' : { '0': 'Tauren',    '1': 'Tauren' },
				'7' : { '0': 'Gnome',     '1': 'Gnome' },
				'8' : { '0': 'Troll',     '1': 'Troll' },
				'9' : { '0': 'Goblin',    '1': 'Goblin' },
				'10': { '0': 'Blood Elf', '1': 'Blood Elf' },
				'11': { '0': 'Draenei',   '1': 'Draenei' },
				'22': {	'0': 'Worgen',    '1': 'Worgen' },
				'24': {	'0': 'Pandaren',  '1': 'Pandaren' },
				'25': {	'0': 'Pandaren',  '1': 'Pandaren' },
				'26': {	'0': 'Pandaren',  '1': 'Pandaren' }
			},
			'characterSkill': {
				'129': 'First Aid',
				'164': 'Blacksmithing',
				'165': 'Leatherworking',
				'171': 'Alchemy',
				'182': 'Herbalism',
				'185': 'Cooking',
				'186': 'Mining',
				'197': 'Tailoring',
				'202': 'Engineering',
				'333': 'Enchanting',
				'356': 'Fishing',
				'393': 'Skinning',
				'755': 'Jewelcrafting',
				'762': 'Riding',
				'773': 'Inscription',
				'794': 'Archeology'
			},
			'datetime': '<%= this._loc("date") %> <%= this._loc("time") %> ',
			'date'    : '<%= this._padZero(this["month"], 2) %>/<%= this._padZero(this["day"], 2) %>/<%= this["year"] %>',
			'time'    : '<%= this._padZero(this["ampm"]["hour"], 2) %>:<%= this._padZero(this["minute"], 2) %>:<%= this._padZero(this["second"], 2) %> <%= this["ampm"]["flag"] %>'
		},
		'de_DE': {
			'loading'  : 'Lade WoW Daten...',
			'not-found': 'Keine Daten gefunden',
			'not-used' : 'Ungenutzt',
			'label'    : {
				'slot'       : 'Slot:',
				'realm'      : 'Realm:',
				'quest'      : 'Quest:',
				'region'     : 'Region:',
				'item'       : 'Gegenstand:',
				'character'  : 'Charakter:',
				'guild'      : 'Gilde:',
				'teamname'   : 'Teamname:',
				'teamsize'   : 'Teamgr&ouml;&szlig;e:',
				'achievement': 'Erfolg:',
				'spell'      : 'Zauber:'
			},
			'factionSide': {
				'0'       :'Allianz',
				'1'       :'Horde',
				'alliance':'Allianz',
				'horde'   :'Horde'
			},
			'characterClass': {
				'1' : { '0': 'Krieger',      '1': 'Kriegerin' },
				'2' : { '0': 'Paladin',      '1': 'Paladin' },
				'3' : { '0': 'J&auml;ger',        '1': 'J&auml;gerin' },
				'4' : { '0': 'Schurke',      '1': 'Schurkin' },
				'5' : { '0': 'Priester',     '1': 'Priesterin' },
				'6' : { '0': 'Todesritter',  '1': 'Todesritter' },
				'7' : { '0': 'Schamane',     '1': 'Schamanin' },
				'8' : { '0': 'Magier',       '1': 'Magierin' },
				'9' : { '0': 'Hexenmeister', '1': 'Hexenmeisterin' },
				'10': { '0': 'Mönch',        '1': 'Mönch' },
				'11': { '0': 'Druide',       '1': 'Druidin' }
			},
			'characterRace': {
				'1' : { '0': 'Mensch',    '1': 'Mensch' },
				'2' : { '0': 'Orc',       '1': 'Orc' },
				'3' : { '0': 'Zwerg',     '1': 'Zwerg' },
				'4' : { '0': 'Nachtelf',  '1': 'Nachtelfe' },
				'5' : { '0': 'Untoter',   '1': 'Untote' },
				'6' : { '0': 'Tauren',    '1': 'Tauren' },
				'7' : { '0': 'Gnom',      '1': 'Gnom' },
				'8' : { '0': 'Troll',     '1': 'Troll' },
				'9' : { '0': 'Goblin',    '1': 'Goblin' },
				'10': { '0': 'Blutelf',   '1': 'Blutelfe' },
				'11': { '0': 'Draenei',   '1': 'Draenei' },
				'22': { '0': 'Worgen',    '1': 'Worgen' },
				'24': {	'0': 'Pandaren',  '1': 'Pandarin' },
				'25': {	'0': 'Pandaren',  '1': 'Pandarin' },
				'26': {	'0': 'Pandaren',  '1': 'Pandarin' }
			},
			'characterSkill': {
				'129': 'Erste Hilfe',
				'164': 'Schmiedekunst',
				'165': 'Lederverarbeitung',
				'171': 'Alchemie',
				'182': 'Kr&auml;uterkunde',
				'185': 'Kochkunst',
				'186': 'Bergbau',
				'197': 'Schneiderei',
				'202': 'Ingenieurskunst',
				'333': 'Verzauberkunst',
				'356': 'Angeln',
				'393': 'K&uuml;rschnerei',
				'755': 'Juwelenschleifen',
				'762': 'Reiten',
				'773': 'Inschriftenkunde',
				'794': 'Arch&auml;ologie'
			},
			'datetime': '<%= this._loc("date") %> <%= this._loc("time") %> ',
			'date'    : '<%= this._padZero(this["day"], 2) %>.<%= this._padZero(this["month"], 2) %>.<%= this["year"] %>',
			'time'    : '<%= this._padZero(this["hour"], 2) %>:<%= this._padZero(this["minute"], 2) %>:<%= this._padZero(this["second"], 2) %>'
		},
		'fr_FR': {
			'loading'  : 'Chargement des donn&eacute;es WoW...',
			'not-found': 'WoW Aucune donn&eacute;e trouv&eacute;e',
			'not-used' : 'Inutilis&eacute;es',
			'label'    : {
				'slot'       : 'Slot :',
				'realm'      : 'Royaume :',
				'quest'      : 'Qu&ecirc;te :',
				'region'     : 'R&eacute;gion :',
				'item'       : 'Objet :',
				'character'  : 'Personnage :',
				'guild'      : 'Guilde :',
				'teamname'   : 'Nom :',
				'teamsize'   : 'Taille :',
				'achievement': 'Avantage :',
				'spell'      : 'Sorts :'
			},
			'factionSide': {
				'0'       : 'Alliance',
				'1'       : 'Horde',
				'alliance': 'Alliance',
				'horde'   : 'Horde'
			},
			'characterClass': {
				'1' : { '0': 'Guerrier',             '1': 'Guerri&egrave;re' },
				'2' : { '0': 'Paladin',              '1': 'Paladin' },
				'3' : { '0': 'Chasseur',             '1': 'Chasseresse' },
				'4' : { '0': 'Voleur',               '1': 'Voleuse' },
				'5' : { '0': 'Pr&ecirc;tre',         '1': 'Pr&ecirc;tresse' },
				'6' : { '0': 'Chevalier de la mort', '1': 'Chevalier de la mort' },
				'7' : { '0': 'Chaman',               '1': 'Chamane' },
				'8' : { '0': 'Mage',                 '1': 'Mage' },
				'9' : { '0': 'D&eacute;moniste',     '1': 'D&eacute;moniste' },
				'10': { '0': 'Moine',                '1': 'Moniale' },
				'11': { '0': 'Druide',               '1': 'Druidesse' }
			},
			'characterRace': {
				'1' : { '0': 'Humain',          '1': 'Humaine' },
				'2' : { '0': 'Orc',             '1': 'Orque' },
				'3' : { '0': 'Nain',            '1': 'Naine' },
				'4' : { '0': 'Elfe de la nuit', '1': 'Elfe de la nuit' },
				'5' : { '0': 'Mort-vivant',     '1': 'Morte-vivante' },
				'6' : { '0': 'Tauren',          '1': 'Tauren' },
				'7' : { '0': 'Gnome',           '1': 'Gnome' },
				'8' : { '0': 'Troll',           '1': 'Trollesse' },
				'9' : { '0': 'Gobelin',         '1': 'Gobeline' },
				'10': { '0': 'Elfe de sang',    '1': 'Elfe de sang' },
				'11': { '0': 'Draeneï',         '1': 'Draeneï' },
				'22': { '0': 'Worgen',          '1': 'Worgen' },
				'24': {	'0': 'Pandaren',        '1': 'Pandarène' },
				'25': {	'0': 'Pandaren',        '1': 'Pandarène' },
				'26': {	'0': 'Pandaren',        '1': 'Pandarène' }
			},
			'characterSkill': {
				'129': 'Secourisme',
				'164': 'Forge',
				'165': 'Travail du cuir',
				'171': 'Alchimie',
				'182': 'Herboristerie',
				'185': 'Cuisine',
				'186': 'Minage',
				'197': 'Couture',
				'202': 'Ing&eacute;nierie',
				'333': 'Enchantement',
				'356': 'P&ecirc;che',
				'393': 'D&eacute;peçage',
				'755': 'Joaillerie',
				'762': 'Riding',
				'773': 'Calligraphie',
				'794': 'Arch&eacute;ologie'
			},
			'datetime': '<%= this._loc("date") %> <%= this._loc("time") %> ',
			'date'    : '<%= this._padZero(this["day"], 2) %>-<%= this._padZero(this["month"], 2) %>-<%= this["year"] %>',
			'time'    : '<%= this._padZero(this["hour"], 2) %>:<%= this._padZero(this["minute"], 2) %>:<%= this._padZero(this["second"], 2) %>'
		},
		'es_ES': {
			'loading'  : 'WoW carga de datos...',
			'not-found': 'No se encontraron datos',
			'not-used' : 'Sin usar',
			'label'    : {
				'slot'       : 'Ranura:',
				'realm'      : 'Reinos:',
				'quest'      : 'Misi&oacute;n:',
				'region'     : 'Regi&oacute;n:',
				'item'       : 'Objeto:',
				'character'  : 'Personaje:',
				'guild'      : 'Hermandad:',
				'teamname'   : 'Nombre:',
				'teamsize'   : 'Tama&ntilde;o:',
				'achievement': 'Ventaja:',
				'spell'      : 'Hechizos:'
			},
			'factionSide': {
				'0'       : 'Alianza',
				'1'       : 'Horda',
				'alliance': 'Alianza',
				'horde'   : 'Horda'
			},
			'characterClass': {
				'1' : { '0': 'Guerrero',               '1': 'Guerrera' },
				'2' : { '0': 'Palad&iacute;n',         '1': 'Palad&iacute;n' },
				'3' : { '0': 'Cazador',                '1': 'Cazadora' },
				'4' : { '0': 'P&iacute;caro',          '1': 'P&iacute;cara' },
				'5' : { '0': 'Sacerdote',              '1': 'Sacerdotisa' },
				'6' : { '0': 'Caballero de la Muerte', '1': 'Caballero de la Muerte' },
				'7' : { '0': 'Chamán',                 '1': 'Chamán' },
				'8' : { '0': 'Mago',                   '1': 'Maga' },
				'9' : { '0': 'Brujo',                  '1': 'Bruja' },
				'10': { '0': 'Monje',                  '1': 'Monje' },
				'11': { '0': 'Druida',                 '1': 'Druida' }
			},
			'characterRace': {
				'1' : { '0': 'Humano',           '1': 'Humana' },
				'2' : { '0': 'Orco',             '1': 'Orco' },
				'3' : { '0': 'Enano',            '1': 'Enana' },
				'4' : { '0': 'Elfo de la noche', '1': 'Elfa de la noche' },
				'5' : { '0': 'No-muerto',        '1': 'No-muerta' },
				'6' : { '0': 'Tauren',           '1': 'Tauren' },
				'7' : { '0': 'Gnomo',            '1': 'Gnoma' },
				'8' : { '0': 'Trol',             '1': 'Trol' },
				'9' : { '0': 'Goblin',           '1': 'Goblin' },
				'10': { '0': 'Elfo de sangre',   '1': 'Elfa de sangre' },
				'11': { '0': 'Draenei',          '1': 'Draenei' },
				'22': { '0': 'Huargen',          '1': 'Huargen' },
				'24': {	'0': 'Pandaren',         '1': 'Pandaren' },
				'25': {	'0': 'Pandaren',         '1': 'Pandaren' },
				'26': {	'0': 'Pandaren',         '1': 'Pandaren' }
			},
			'characterSkill': {
				'129': 'Primeros auxilios',
				'164': 'Herrer&iacute;a',
				'165': 'Peleter&iacute;a',
				'171': 'Alquimia',
				'182': 'Herborister&iacute;a',
				'185': 'Cocina',
				'186': 'Miner&iacute;a',
				'197': 'Sastrer&iacute;a',
				'202': 'Ingenier&iacute;a',
				'333': 'Encantamiento',
				'356': 'Pesca',
				'393': 'Desuello',
				'755': 'Joyer&iacute;a',
				'762': 'Equitaci&oacute;n',
				'773': 'Inscripci&oacute;n',
				'794': 'Arqueolog&iacute;a'
			},
			'datetime': '<%= this._loc("date") %> <%= this._loc("time") %> ',
			'date'    : '<%= this._padZero(this["day"], 2) %>/<%= this._padZero(this["month"], 2) %>/<%= this["year"] %>',
			'time'    : '<%= this._padZero(this["hour"], 2) %>:<%= this._padZero(this["minute"], 2) %>:<%= this._padZero(this["second"], 2) %>'
		},
		'it_IT': {
			'loading'  : 'Caricamento dei dati...',
			'not-found': 'Dati non trovati',
			'not-used' : 'Non utilizzato',
			'label'    : {
				'slot'       : 'Scomparto:',
				'realm'      : 'Reame:',
				'quest'      : 'Missione:',
				'region'     : 'Regione:',
				'item'       : 'Oggetto:',
				'character'  : 'Personaggio:',
				'guild'      : 'Gilda:',
				'teamname'   : 'Nome Squadra:',
				'teamsize'   : 'Dimension Squadra:',
				'achievement': 'Impresa:',
				'spell'      : 'Incantesimo:'
			},
			'factionSide'   : {
				'0'       : 'Alleanza',
				'1'       : 'Orda',
				'alliance': 'Alleanza',
				'horde'   : 'Orda'
			},
			'characterClass': {
				'1' : { '0': 'Guerriero',      '1': 'Guerriera' },
				'2' : { '0': 'Paladino',      '1': 'Paladina' },
				'3' : { '0': 'Cacciatore',       '1': 'Cacciatrice' },
				'4' : { '0': 'Ladro',        '1': 'Ladra' },
				'5' : { '0': 'Sacerdote',       '1': 'Sacerdotessa' },
				'6' : { '0': 'Cavaliere della Morte', '1': 'Cavaliera della Morte' },
				'7' : { '0': 'Sciamano',       '1': 'Sciamana' },
				'8' : { '0': 'Mago',         '1': 'Maga' },
				'9' : { '0': 'Sregone',      '1': 'Strega' },
				'10': { '0': 'Monaco',         '1': 'Monaca' },
				'11': { '0': 'Druido',        '1': 'Druida' }
			},
			'characterRace' : {
				'1' : { '0': 'Umano',     '1': 'Umana' },
				'2' : { '0': 'Orco',       '1': 'Orca' },
				'3' : { '0': 'Nano',     '1': 'Nana' },
				'4' : { '0': 'Elfo della Notte', '1': 'Elfa della Notte' },
				'5' : { '0': 'Non Morto',  '1': 'Non Morta' },
				'6' : { '0': 'Tauren',    '1': 'Tauren' },
				'7' : { '0': 'Gnomo',     '1': 'Gnoma' },
				'8' : { '0': 'Troll',     '1': 'Troll' },
				'9' : { '0': 'Goblin',    '1': 'Goblin' },
				'10': { '0': 'Elfo del Sangue', '1': 'Elfa del Sangue' },
				'11': { '0': 'Draenei',   '1': 'Draenei' },
				'22': {	'0': 'Worgen',    '1': 'Worgen' },
				'24': {	'0': 'Pandaren',  '1': 'Pandaren' },
				'25': {	'0': 'Pandaren',  '1': 'Pandaren' },
				'26': {	'0': 'Pandaren',  '1': 'Pandaren' }
			},
			'characterSkill'   : {
				'129': 'Primo Soccorso',
				'164': 'Forgiatura',
				'165': 'Conciatura',
				'171': 'Alchimia',
				'182': 'Erbalismo',
				'185': 'Cucina',
				'186': 'Estrazione',
				'197': 'Sartoria',
				'202': 'Ingegneria',
				'333': 'Incantamento',
				'356': 'Pesca',
				'393': 'Scuoiatura',
				'755': 'Oreficeria',
				'762': 'Cavalcatura',
				'773': 'Runografia',
				'794': 'Archeologia'
			},
			'datetime': '<%= this._loc("date") %> <%= this._loc("time") %> ',
			'date'    : '<%= this._padZero(this["month"], 2) %>/<%= this._padZero(this["day"], 2) %>/<%= this["year"] %>',
			'time'    : '<%= this._padZero(this["ampm"]["hour"], 2) %>:<%= this._padZero(this["minute"], 2) %>:<%= this._padZero(this["second"], 2) %> <%= this["ampm"]["flag"] %>'
		}
	}

});

DarkTip.registerModule('wow.realm', {

	'triggers': {
		'explicit': {
			'match' : /wow\.realm:(us|eu|kr|tw|cn)\.([^\(]+)\((en|de|fr|es|ru|pt|it|ko|zh)\)/i,
			'params': {
				'1': 'region',
				'2': 'realm',
				'3': 'lang'
			}
		}
	},

	'queries': {
		'realm': {
			'required' : true,
			'condition': true,
			'call'     : '//{host}/api/wow/realm/status?realm={realm}&locale={locale}',
			'caching'  : (60 * 5)
		}
	},

	'getParams': {
		'explicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.realm', 'triggers.explicit.params')));
			params['host']   = DarkTip.map('wow.realm', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow.realm', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		}
	},

	'layout': {
		'width': {
			'core': 350
		}
	},

	'prepareData': function(state) {
		if(Object.keys(state['data']).length === 0) {
			return false;
		}
		if(state['data']['realm']['realms'].length === 1) {
			return state['data']['realm']['realms'][0];
		}
		return false;
	},

	'templates': {
		'core': (
			'<div class="tooltip-realm">' +
				'<div class="darktip-headline-right darktip-crealmtype-<%= this["type"] %>"><%= this._loc("type." + this["type"]) %></div>'+
				'<div class="darktip-row darktip-headline"><%= this["name"] %> <span class="darktip-sub">(<%= this._loc("locales." + this["locale"]) %>)</span></div>' +
				'<div class="darktip-row darktip-highlight-strong"><%= this["battlegroup"] %></div>' +
				'<div class="darktip-row">' +
					'<span class="darktip-crealmstatus-<%= this["status"] %>"><%= this._loc("status." + this["status"]) %></span>' +
					'<% if(this["queue"]) { %> (<span class="darktip-crealmqueue-<%= this["queue"] %>"><%= this._loc("queue." + this["queue"]) %></span>)<% } %>' +
				'</div>' +
				'<div class="darktip-row"><%= this._loc("population." + this["population"]) %></div>' +
				'<div class="darktip-row"><%= this._loc("timezone") %>: <%= this._loc("timezones." + this["timezone"]) %></div>' +
				'<%= this._sub("templates.fragments.worldPvpZones") %>' +
				'<% if(this["_meta"]["extendedActive"]) { %>' +
					'<div class="darktip-row darktip-info-meta darktip-only-s"><%= this._loc("extendedInactive") %></div>' +
					'<div class="darktip-row darktip-info-meta darktip-only-x"><%= this._loc("extendedActive") %></div>' +
				'<% } %>' +
			'</div>'
		),
		'404': (
			'<div class="tooltip-realm darktip-tooltip-404">' +
				'<div class="darktip-title">404<span class="darktip-sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.realm") %></span> <span class="value"><%= this["realm"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
			'</div>'
		),
		'fragments': {
			'worldPvpZones': (
				'<div class="darktip-block">' +
				'<% if(this["wintergrasp"]) { %><div class="darktip-row darktip-highlight-weak">' +
					'<%= this._loc("zones.wintergrasp") %>: ' +
					'<span class="darkstip-cside-<%= this["wintergrasp"]["controlling-faction"] %>">' +
						'<span class="darktip-only-s"><%= this._loc("worldpvpstatus."+this["wintergrasp"]["status"]+"."+this["wintergrasp"]["controlling-faction"]) %></span>' +
						'<span class="darktip-only-x"><%= this._loc("world-pvp-zone-next-battle") %>: <%= this._renderDateTime(this["wintergrasp"]["next"]) %></span>' +
					'</span>' +
				'</div><% } %>' +
				'<% if(this["tol-barad"]) { %><div class="darktip-row darktip-highlight-weak">' +
					'<%= this._loc("zones.tol-barad") %>: ' +
					'<span class="darkstip-cside-<%= this["tol-barad"]["controlling-faction"] %>">' +
						'<span class="darktip-only-s"><%= this._loc("worldpvpstatus."+this["tol-barad"]["status"]+"."+this["tol-barad"]["controlling-faction"]) %></span>' +
						'<span class="darktip-only-x"><%= this._loc("world-pvp-zone-next-battle") %>: <%= this._renderDateTime(this["tol-barad"]["next"]) %></span>' +
					'</span>' +
				'</div><% } %>' +
				'</div>'
			)
		}
	},

	'i18n': {
		'en_US': {
			'loading': 'Loading realm...',
			'not-found': 'Realm not found',
			'type': {
				'pve'  : 'PvE',
				'pvp'  : 'PvP',
				'rp'   : 'RP',
				'rppvp': 'RPPvP'
			},
			'locales': {
				'de_DE': 'German',
				'en_GB': 'British',
				'pt_BR': 'Portugese',
				'fr_FR': 'French',
				'ru_RU': 'Russian',
				'es_ES': 'Spanish',
				'it_IT': 'Italian',
				'en_US': 'American',
				'es_MX': 'Mexican',
				'ko_KR': 'Korean',
				'zh_TW': 'Taiwan',
				'zh_CN': 'Chinese'
			},
			'timezones': {
				'Europe/Paris'       : 'Europe, Paris',
				'America/Los_Angeles': 'America, Los Angeles',
				'America/Sao_Paulo'  : 'America, Sao Paulo',
				'Australia/Melbourne': 'Australia, Melbourne',
				'Asia/Seoul'         : 'Asia, Seoul',
				'Asia/Taipei'        : 'Asia, Taipei',
				'Asia/Shanghai'      : 'Asia, Shanghai'
			},
			'queue': {
				'false': 'No queue',
				'true' : 'Queue'
			},
			'status': {
				'false': 'Offline',
				'true' : 'Online'
			},
			'population': {
				'low'   : 'Low population',
				'medium': 'Medium population',
				'high'  : 'High population'
			},
			'zones': {
				'wintergrasp': 'Wintergrasp',
				'tol-barad'  : 'Tol Barad'
			},
			'worldpvpstatus': {
				'-1': { '0': 'Unknown',             '1': 'Unknown' },
				'0' : { '0': 'Alliance controlled', '1': 'Horde controlled' },
				'1' : { '0': 'Horde attacking',     '1': 'Alliance attacking' },
				'2' : { '0': 'Horde attacking',     '1': 'Alliance attacking' },
				'3' : { '0': 'Alliance controlled', '1': 'Horde controlled' }
			},
			'world-pvp-zone-status'     : 'World PvP zone status',
			'world-pvp-zone-next-battle': 'Next battle',
			'timezone'                  : 'Timezone'
		},
		'de_DE': {
			'loading': 'Lade Realm...',
			'not-found': 'Realm nicht gefunden',
			'type': {
				'pve'  : 'PvE',
				'pvp'  : 'PvP',
				'rp'   : 'RP',
				'rppvp': 'RPPvP'
			},
			'locales': {
				'de_DE': 'Deutsch',
				'en_GB': 'Britisch',
				'pt_BR': 'Portugiesisch',
				'fr_FR': 'Französisch',
				'ru_RU': 'Russisch',
				'es_ES': 'Spanisch',
				'it_IT': 'Italienisch',
				'en_US': 'Amerikanisch',
				'es_MX': 'Mexikanisch',
				'ko_KR': 'Koreanisch',
				'zh_TW': 'Taiwanesisch',
				'zh_CN': 'Chinesisch'
			},
			'timezones': {
				'Europe/Paris'       : 'Europa, Paris',
				'America/Los_Angeles': 'Amerika, Los Angeles',
				'America/Sao_Paulo'  : 'Amerika, Sao Paulo',
				'Australia/Melbourne': 'Australien, Melbourne',
				'Asia/Seoul'         : 'Asien, Seoul',
				'Asia/Taipei'        : 'Asien, Taipei',
				'Asia/Shanghai'      : 'Asien, Shanghai'
			},
			'queue': {
				'false': 'Keine Warteschlange',
				'true' : 'Warteschlange'
			},
			'status': {
				'false': 'Offline',
				'true' : 'Online'
			},
			'population': {
				'low'   : 'Geringe Bev&ouml;lkerung',
				'medium': 'Mittlere Bev&ouml;lkerung',
				'high'  : 'Hohe Bev&ouml;lkerung'
			},
			'zones': {
				'wintergrasp': 'Tausendwintersee',
				'tol-barad'  : 'Tol Barad'
			},
			'worldpvpstatus': {
				'-1': { '0': 'Unbekannt',             '1': 'Unbekannt' },
				'0' : { '0': 'In Besitz der Allianz', '1': 'In Besitz der Horde' },
				'1' : { '0': 'Horde greift an',       '1': 'Allianz greift an' },
				'2' : { '0': 'Horde greift an',       '1': 'Allianz greift an' },
				'3' : { '0': 'In Besitz der Allianz', '1': 'In Besitz der Horde' }
			},
			'world-pvp-zone-status'     : 'Status der Welt-PvP Gebiete',
			'world-pvp-zone-next-battle': 'N&auml;chste Schlacht',
			'timezone'                  : 'Zeitzone'
		},
		'fr_FR': {
			'loading': 'Chargement...',
			'not-found': 'Royaume introuvable',
			'type': {
				'pve'  : 'JcE',
				'pvp'  : 'JcJ',
				'rp'   : 'JR',
				'rppvp': 'JR JcJ'
			},
			'queue': {
				'false': 'No queue',
				'true' : 'Queue'
			},
			'status': {
				'false': 'Hors ligne',
				'true' : 'En ligne'
			},
			'population': {
				'low'   : 'Population faible',
				'medium': 'Population moyenne',
				'high'  : 'Population &eacute;lev&eacute;e'
			},
			'zones': {
				'wintergrasp': 'Joug-d\'hiver',
				'tol-barad'  : 'Tol Barad'
			},
			'worldpvpstatus': {
				'-1': { '0': 'Unknown',                  '1': 'Unknown' },
				'0' : { '0': 'Contrôlé par l\'Alliance', '1': 'Contrôlé par la Horde' },
				'1' : { '0': 'Horde attacking',          '1': 'Alliance attacking' },
				'2' : { '0': 'Horde attacking',          '1': 'Alliance attacking' },
				'3' : { '0': 'Contrôlé par l\'Alliance', '1': 'Contrôlé par la Horde' }
			},
			'world-pvp-zone-status'     : 'World PvP zone status',
			'world-pvp-zone-next-battle': 'Prochaine bataille'
		},
		'es_ES': {
			'loading': 'Cargando reino...',
			'not-found': 'Reino no encontrado',
			'type': {
				'pve'  : 'JcE',
				'pvp'  : 'JcJ',
				'rp'   : 'JR',
				'rppvp': 'JR JcJ'
			},
			'queue': {
				'false': 'no hay cola',
				'true' : 'hay cola'
			},
			'status': {
				'false': 'no conectado',
				'true' : 'conectado'
			},
			'population': {
				'low'   : 'baja poblaci&oacute;n',
				'medium': 'poblaci&oacute;n media',
				'high'  : 'alta poblaci&oacute;n'
			},
			'zones': {
				'wintergrasp': 'Conquista del Invierno',
				'tol-barad'  : 'Tol Barad'
			},
			'worldpvpstatus': {
				'-1': { '0': 'Unknown',             '1': 'Unknown' },
				'0' : { '0': 'Alliance controlled', '1': 'Horde controlled' },
				'1' : { '0': 'Horde attacking',     '1': 'Alliance attacking' },
				'2' : { '0': 'Horde attacking',     '1': 'Alliance attacking' },
				'3' : { '0': 'Alliance controlled', '1': 'Horde controlled' }
			},
			'world-pvp-zone-status'     : 'World PvP zone status',
			'world-pvp-zone-next-battle': 'Next battle'
		},
		'it_IT': {
			'loading': 'Caricamento...',
			'not-found': 'Non trovato',
			'type': {
				'pve'  : 'PvA',
				'pvp'  : 'PvP',
				'rp'   : 'GR',
				'rppvp': 'GR PvA'
			},
			'queue': {
				'false': 'Nessuna coda',
				'true' : 'Coda'
			},
			'status': {
				'false': 'Offline',
				'true' : 'Online'
			},
			'population': {
				'low'   : 'Popolazione Bassa',
				'medium': 'Popolazione Media',
				'high'  : 'Popolazione Alta'
			},
			'zones': {
				'wintergrasp': 'Lungoinverno',
				'tol-barad'  : 'Tol Barad'
			},
			'worldpvpstatus': {
				'-1': { '0': 'Sconosciuto',             '1': 'Sconosciuto' },
				'0' : { '0': 'Controllato dall\'Alleanza', '1': 'Controllato dall\'Orda' },
				'1' : { '0': 'Attaccato dall\'Orda',     '1': 'Attaccato dall\'Alleanza' },
				'2' : { '0': 'Attaccato dall\'Orda',     '1': 'Attaccato dall\'Alleanza' },
				'3' : { '0': 'Controllato dall\'Alleanza', '1': 'Controllato dall\'Orda' }
			},
			'world-pvp-zone-status'     : 'Status del PvP esterno',
			'world-pvp-zone-next-battle': 'Prossima Battaglia'
		}
	}

});


DarkTip.registerModule('wow.quest', {

	'triggers': {
		'explicit': {
			'match' : /wow\.quest:(us|eu|kr|tw|cn)\.([^\(]+)\((en|de|fr|es|ru|pt|it|ko|zh)\)/i,
			'params': {
				'1': 'region',
				'2': 'questid',
				'3': 'lang'
			}
		}
	},

	'queries': {
		'quest': {
			'required' : true,
			'condition': true,
			'call'     : '//{host}/api/wow/quest/{questid}?locale={locale}',
			'caching'  : (60 * 60 * 24 * 90)
		}
	},

	'getParams': {
		'explicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.quest', 'triggers.explicit.params')));
			params['host']   = DarkTip.map('wow.realm', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow.realm', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		}
	},

	'layout': {
		'width': {
			'core': 350
		}
	},

	'templates': {
		'core':(
			'<div class="tooltip-quest">' +
				'<div class="darktip-headline-right"><%= this["quest"]["level"] %></div>' +
				'<div class="darktip-row darktip-headline darktip-highlight-medium"><%= this["quest"]["title"] %></div>' +
				'<div class="darktip-row darktip-highlight-strong"><%= this["quest"]["category"] %></div>' +
				'<div class="darktip-row"><%= this._loc("reqLevel") %></div>' +
				'<% if(this["quest"]["suggestedPartyMembers"] > 1) { %><div class="darktip-row"><%= this._loc("suggestedPartyMembers") %></div><% } %>' +
			'</div>'
		),
		'404':(
			'<div class="tooltip-quest darktip-tooltip-404">' +
				'<div class="darktip-title">404<span class="darktip-sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.quest") %></span> <span class="value"><%= this["questid"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
			'</div>'
		)
	},

	'i18n': {
		'en_US': {
			'loading'              : 'Loading quest...',
			'not-found'            : 'Quest not found',
			'reqLevel'             : 'Requires Level <%= this["quest"]["reqLevel"] %>',
			'suggestedPartyMembers': 'Group Quest (<%= this["quest"]["suggestedPartyMembers"] %>)'
		},
		'de_DE': {
			'loading'              : 'Lade Quest...',
			'not-found'            : 'Quest nicht gefunden',
			'reqLevel'             : 'Ben&ouml;tigt Stufe <%= this["quest"]["reqLevel"] %>',
			'suggestedPartyMembers': 'Gruppenquest (<%= this["quest"]["suggestedPartyMembers"] %>)'
		},
		'fr_FR': {
			'loading'              : 'Chargement...',
			'not-found'            : 'Quête introuvable',
			'reqLevel'             : 'Niveau requis <%= this["quest"]["reqLevel"] %>',
			'suggestedPartyMembers': 'Qu&ecirc;te de groupe (<%= this["quest"]["suggestedPartyMembers"] %>)'
		},
		'es_ES': {
			'loading'              : 'Cargando misi&oacute;n...',
			'not-found'            : 'Misi&oacute;n no encontrada',
			'reqLevel'             : 'Requiere nivel <%= this["quest"]["reqLevel"] %>',
			'suggestedPartyMembers': 'Misi&oacute;n de Grupo (<%= this["quest"]["suggestedPartyMembers"] %>)'
		},
		'it_IT': {
			'loading'              : 'Caricamento missione...',
			'not-found'            : 'Missione non trovata',
			'reqLevel'             : 'Richiede il livello <%= this["quest"]["reqLevel"] %>',
			'suggestedPartyMembers': 'Missione di gruppo (<%= this["quest"]["suggestedPartyMembers"] %>)'
		}
	}

});


DarkTip.registerModule('wow.spell', {

	'triggers': {
		'explicit': {
			'match' : /wow\.spell:(us|eu|kr|tw|cn)\.([^\(]+)\((en|de|fr|es|ru|pt|it|ko|zh)\)/i,
			'params': {
				'1': 'region',
				'2': 'spellid',
				'3': 'lang'
			}
		}
	},

	'queries': {
		'spell': {
			'required' : true,
			'condition': true,
			'call'     : '//{host}/api/wow/spell/{spellid}?locale={locale}',
			'caching'  : (60 * 60 * 24 * 90)
		}
	},

	'prepareData': function(state) {

		if(Object.keys(state['data']).length === 0)
		{
			return false;
		}

		return state['data'];
	},

	'getParams': {
		'explicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.spell', 'triggers.explicit.params')));
			params['host']   = DarkTip.map('wow', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		},
		'implicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.spell', 'triggers.implicit.params')));
			params['region'] = DarkTip.map('wow', 'maps.host.region', params['host']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		}
	},

	'layout': {
		'width': {
			'core': 425
		}
	},

	'templates': {
		'core': (
			'<div class="tooltip-spell">' +
				'<img class="darktip-icon" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/56/<% if(this["spell"]["icon"]) { %><%= this["spell"]["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg" />' +
				'<div class="darktip-col-70">' +
					'<div class="darktip-row darktip-headline"><%= this["spell"]["name"] %></div>' +
					'<div class="darktip-split-row">' +
						'<div class="darktip-row"><% if(this["spell"]["powerCost"]) { %><%= this["spell"]["powerCost"] %><% } %></div>' +
						'<div class="darktip-pos-right"><% if(this["spell"]["range"]) { %><%= this["spell"]["range"] %><% } %></div>' +
					'</div>' +
					'<div class="darktip-split-row">' +
						'<div class="darktip-row"><% if(this["spell"]["castTime"]) { %><%= this["spell"]["castTime"] %><% } %></div>' +
						'<div class="darktip-pos-right"><% if(this["spell"]["cooldown"]) { %><%= this["spell"]["cooldown"] %><% } %></div>' +
					'</div>' +
					'<div class="darktip-row darktip-highlight-medium"><%= this["spell"]["description"] %></div>' +
				'</div>' +
			'</div>'
		),
		'404': (
			'<div class="tooltip-spell darktip-tooltip-404">' +
				'<div class="darktip-title">404<span class="darktip-sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.spell") %></span> <span class="value"><%= this["spellid"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
			'</div>'
		),
		'fragments': {
		}
	},

	'i18n': {
		'en_US': {
			'loading'          : 'Loading spell...',
			'not-found'        : 'Spell not found'
		},
		'de_DE': {
			'loading'          : 'Lade Zauber...',
			'not-found'        : 'Zauber nicht gefunden'
		},
		'fr_FR': {
			'loading'          : 'Chargement Sorts...',
			'not-found'        : 'Sort introuvable'
		},
		'es_ES': {
			'loading'          : 'Cargando Hechizos...',
			'not-found'        : 'Hechizos no encontrado'
		},
		'it_IT': {
			'loading'          : 'Caricamento incantesimo...',
			'not-found'        : 'Incantesimo non trovato'
		}
	}

});


DarkTip.registerModule('wow.guild', {

	'triggers': {
		'explicit': {
			'match' : /wow\.guild:(us|eu|kr|tw|cn)\.([^\.]+)\.([^\(]+)\((en|de|fr|es|ru|pt|it|ko|zh)\)/i,
			'params': {
				'1': 'region',
				'2': 'realm',
				'3': 'guild',
				'4': 'lang'
			}
		},
		'implicit': {
			'match' : /(?:https?:\/\/)?(us\.battle\.net|eu\.battle\.net|kr\.battle\.net|tw\.battle\.net|cn\.battle\.net|www\.battlenet\.com\.cn)\/wow\/(en|de|fr|es|ru|pt|it|ko|zh)\/guild\/([^\/]+)\/([^\/#]+).*/i,
			'params': {
				'1': 'host',
				'2': 'lang',
				'3': 'realm',
				'4': 'guild'
			}
		}
	},

	'queries': {
		'guild': {
			'required' : true,
			'condition': true,
			'call'     : '//<%= this["host"] %>/api/wow/guild/<%= this["realm"] %>/<%= this["guild"] %>?fields=members&locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 3)
		}
	},

	'getParams': {
		'explicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.guild', 'triggers.explicit.params')));
			params['guild']  = params['guild'].replace(/_/g, ' ');
			params['host']   = DarkTip.map('wow', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		},
		'implicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.guild', 'triggers.implicit.params')));
			params['guild']  = params['guild'].replace(/_/g, ' ');
			params['region'] = DarkTip.map('wow', 'maps.host.region', params['host']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		}
	},

	'layout': {
		'width': {
			'core': 275
		}
	},

	'templates': {
		'core': (
			'<div class="tooltip-guild">' +
				'<div class="darktip-headline-right"><span class="darktip-icon-achievenemtpoints"><%= this["guild"]["achievementPoints"] %></span></div>' +
				'<div class="darktip-row darktip-headline darkstip-cside-<%= this["guild"]["side"] %>"><%= this["guild"]["name"] %></div>' +
				'<div class="darktip-row darktip-highlight-medium"><%= this._loc("classification") %></div>' +
				'<% if(this["guild"]["members"]) { %><div class="darktip-row"><%= this._loc("members") %></div><% } %>' +
			'</div>'
		),
		'404': (
			'<div class="tooltip-guild darktip-tooltip-404">' +
				'<div class="darktip-title">404<span class="darktip-sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.guild") %></span> <span class="value"><%= this["guild"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.realm") %></span> <span class="value"><%= this["realm"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
			'</div>'
		)
	},

	'i18n': {
		'en_US': {
			'loading'       : 'Loading Guild...',
			'not-found'     : 'Guild not found',
			'classification': 'Level <%= this["guild"]["level"] %> <%= this._loc("factionSide." + this["guild"]["side"]) %> Guild, <%= this["guild"]["realm"] %>',
			'members'       : '<%= this["guild"]["members"].length %> members'
		},
		'de_DE': {
			'loading'       : 'Lade Gilde...',
			'not-found'     : 'Gilde nicht gefunden',
			'classification': 'Stufe <%= this["guild"]["level"] %> <%= this._loc("factionSide." + this["guild"]["side"]) %>-Gilde, <%= this["guild"]["realm"] %>',
			'members'       : '<%= this["guild"]["members"].length %> Mitglieder'
		},
		'fr_FR': {
			'loading'       : 'Chargement Guilde...',
			'not-found'     : 'Aucune Guilde trouv&eacute;e',
			'classification': 'Niveau <%= this["guild"]["level"] %> Faction <%= this._loc("factionSide." + this["guild"]["side"]) %> , <%= this["guild"]["realm"] %>',
			'members'       : '<%= this["guild"]["members"].length %> membres'
		},
		'es_ES': {
			'loading'       : 'Cargando hermandad...',
			'not-found'     : 'Hermandad no encontrada',
			'classification': 'Hermandad (<%= this._loc("factionSide." + this["guild"]["side"]) %>), nivel <%= this["guild"]["level"] %>, <%= this["guild"]["realm"] %>',
			'members'       : '<%= this["guild"]["members"].length %> miembros'
		},
		'it_IT': {
			'loading'       : 'Caricamento Gilda...',
			'not-found'     : 'Gilda non trovata',
			'classification': 'Gilda (<%= this._loc("factionSide." + this["guild"]["side"]) %>) livello <%= this["guild"]["level"] %>, <%= this["guild"]["realm"] %>',
			'members'       : '<%= this["guild"]["members"].length %> membri'
		}
	}

});


DarkTip.registerModule('wow.arena', {

	'triggers': {
		'explicit': {
			'match' : /wow\.arena:(us|eu|kr|tw|cn)\.([^\.]+)\.(2v2|3v3|5v5)\.([^\(]+)\((en|de|fr|es|ru|pt|it|ko|zh)\)/i,
			'params': {
				'1': 'region',
				'2': 'realm',
				'3': 'teamsize',
				'4': 'teamname',
				'5': 'lang'
			}
		},
		'implicit': {
			'match' : /(?:https?:\/\/)?(us\.battle\.net|eu\.battle\.net|kr\.battle\.net|tw\.battle\.net|cn\.battle\.net|www\.battlenet\.com\.cn)\/wow\/(en|de|fr|es|ru|pt|it|ko|zh)\/arena\/([^\/]+)\/(2v2|3v3|5v5)\/([^\/#]+).*/i,
			'params': {
				'1': 'host',
				'2': 'lang',
				'3': 'realm',
				'4': 'teamsize',
				'5': 'teamname'
			}
		}
	},

	'queries': {
		'arena': {
			'required' : true,
			'condition': true,
			'call'     : '//<%= this["host"] %>/api/wow/arena/<%= this["realm"] %>/<%= this["teamsize"] %>/<%= this["teamname"] %>?locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 1)
		}
	},

	'getParams': {
		'explicit': function(result) {
			var params         = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.arena', 'triggers.explicit.params')));
			params['teamname'] = params['teamname'].replace(/_/g, ' ');
			params['host']     = DarkTip.map('wow', 'maps.region.host', params['region']);
			params['locale']   = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		},
		'implicit': function(result) {
			var params         = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.arena', 'triggers.implicit.params')));
			params['teamname'] = params['teamname'].replace(/_/g, ' ');
			params['region']   = DarkTip.map('wow', 'maps.host.region', params['host']);
			params['locale']   = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		}
	},

	'layout': {
		'width': {
			'core': 325
		}
	},

	'templates': {
		'core': (
			'<div class="tooltip-arena">' +
				'<div class="darktip-headline-right"><%= this._loc("rank-current") %></div>' +
				'<div class="darktip-row darktip-headline darkstip-cside-<%= this["arena"]["side"] %>"><%= this["arena"]["name"] %></div>' +
				'<% if(this["_meta"]["extendedActive"]) { %><div class="darktip-row darktip-highlight-strong darktip-only-x"><%= this._loc("view-mode-current") %></div><% } %>' +
				'<div class="darktip-row darktip-highlight-strong darktip-only-s"><%= this._loc("view-mode-season") %></div>' +
				'<div class="darktip-row"><%= this._loc("classification") %></div>' +
				'<div class="darktip-row"><%= this._loc("rank-previous") %></div>' +
				'<div class="darktip-row"><%= this._loc("rating-team") %></div>' +
				'<% if(this["_meta"]["extendedActive"]) { %><div class="darktip-row darktip-only-x"><%= this._loc("matches-current") %></div><% } %>' +
				'<div class="darktip-row darktip-only-s"><%= this._loc("matches-season") %></div>' +
				'<div class="members"><%= this._subLoop("templates.fragments.member", this["arena"]["members"]) %></div>' +
				'<% if(this["_meta"]["extendedActive"]) { %><div class="darktip-row darktip-info-meta darktip-only-x"><%= this._loc("extendedActive") %></div><% } %>' +
				'<% if(this["_meta"]["extendedActive"]) { %><div class="darktip-row darktip-info-meta darktip-only-s"><%= this._loc("extendedInactive") %></div><% } %>' +
			'</div>'
		),
		'404': (
			'<div class="tooltip-arena darktip-tooltip-404">' +
				'<div class="darktip-title">404<span class="darktip-sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.teamname") %></span> <span class="value"><%= this["teamname"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.teamsize") %></span> <span class="value"><%= this["teamsize"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.realm") %></span> <span class="value"><%= this["realm"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
			'</div>'
		),
		'fragments': {
			'member': (
				'<div class="darktip-row darktip-padded<% if(this["_loop"] % 2 == 0) { %> alt<% } %>">' +
					'<% if(this["_meta"]["extendedActive"]) { %><div class="darktip-pos-right darktip-only-x"><%= this._loc("matches-current-short") %></div><% } %>' +
					'<div class="darktip-pos-right darktip-only-s"><%= this._loc("matches-season-short") %></div>' +
					'<img class="darktip-icon-18x18" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/race_<%= this["character"]["race"] %>_<%= this["character"]["gender"] %>.jpg" /> ' +
					'<img class="darktip-icon-18x18" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/class_<%= this["character"]["class"] %>.jpg" /> ' +
					'<span class="darktip-cclass-<%= this["character"]["class"] %><% if(this["rank"]==0) { %> darktip-icon-leader-pvp<% } %>"><%= this["character"]["name"] %></span> <span class="sub darktip-highlight-reduced">(<%= this["personalRating"] %>)</span>' +
				'</div>'
			)
		}
	},

	'i18n': {
		'en_US': {
			'loading'              : 'Loading arena team...',
			'not-found'            : 'Arena team not found',
			'view-mode-current'    : 'Viewing current week',
			'view-mode-season'     : 'Viewing complete season',
			'classification'       : '<%= this["arena"]["teamsize"] %>v<%= this["arena"]["teamsize"] %> <%= this._loc("factionSide." + this["arena"]["side"]) %> Arena Team, <%= this["arena"]["realm"] %>',
			'rating-team'          : 'Rating: <%= this["arena"]["rating"] %>',
			'rank-current'         : 'Rank #<%= this["arena"]["ranking"] %>',
			'rank-previous'        : 'Last week\'s rank: <% if(this["arena"]["lastSessionRanking"] > 0) { %>#<%= this["arena"]["lastSessionRanking"] %><% } else { %>None<% } %>',
			'matches-current'      : 'Matches: <span class="darktip-highlight-won"><%= this["arena"]["gamesWon"] %></span> - <span class="darktip-highlight-lost"><%= this["arena"]["gamesLost"] %></span> <span class="darktip-highlight-weak">(Total: <%= this["arena"]["gamesPlayed"] %><% if(this["arena"]["gamesPlayed"] > 0) { %>, <%= ((this["arena"]["gamesWon"] / this["arena"]["gamesPlayed"])*100).toFixed(0) %>% won<% } %>)</span>',
			'matches-current-short': '<span class="darktip-highlight-won"><%= this["gamesWon"] %></span> - <span class="darktip-highlight-lost"><%= this["gamesLost"] %></span><% if(this["gamesPlayed"] > 0) { %> | <span class="darktip-highlight-weak"><%= ((this["gamesWon"] / this["gamesPlayed"])*100).toFixed(0) %>%</span><% } %>',
			'matches-season'       : 'Matches: <span class="darktip-highlight-won"><%= this["arena"]["sessionGamesWon"] %></span> - <span class="darktip-highlight-lost"><%= this["arena"]["sessionGamesLost"] %></span> <span class="darktip-highlight-weak">(Total: <%= this["arena"]["sessionGamesPlayed"] %><% if(this["arena"]["sessionGamesPlayed"] > 0) { %>, <%= ((this["arena"]["sessionGamesWon"] / this["arena"]["sessionGamesPlayed"])*100).toFixed(0) %>% won<% } %>)</span>',
			'matches-season-short' : '<span class="darktip-highlight-won"><%= this["sessionGamesWon"] %></span> - <span class="darktip-highlight-lost"><%= this["sessionGamesLost"] %></span><% if(this["sessionGamesPlayed"] > 0) { %> | <span class="darktip-highlight-weak"><%= ((this["sessionGamesWon"] / this["sessionGamesPlayed"])*100).toFixed(0) %>%</span><% } %>',
			'extendedInactive'     : 'Hold [<%= this["_meta"]["extendedKeyCodeLabel"] %>] to view current statistics',
			'extendedActive'       : 'Release [<%= this["_meta"]["extendedKeyCodeLabel"] %>] to view seasonal statistics'
		},
		'de_DE': {
			'loading'              : 'Lade Arenateam...',
			'not-found'            : 'Arenateam nicht gefunden',
			'view-mode-current'    : 'Wochenansicht',
			'view-mode-season'     : 'Saisonansicht',
			'classification'       : '<%= this["arena"]["teamsize"] %>v<%= this["arena"]["teamsize"] %> <%= this._loc("factionSide." + this["arena"]["side"]) %> Arenateam, <%= this["arena"]["realm"] %>',
			'rating-team'          : 'Wertung: <%= this["arena"]["rating"] %>',
			'rank-current'         : 'Rang #<%= this["arena"]["ranking"] %>',
			'rank-previous'        : 'Rang der letzten Woche: <% if(this["lastSessionRanking"] > 0) { %>#<%= this["lastSessionRanking"] %><% } else { %>Keiner<% } %>',
			'matches-current'      : 'Spiele: <span class="darktip-highlight-won"><%= this["arena"]["gamesWon"] %></span> - <span class="darktip-highlight-lost"><%= this["arena"]["gamesLost"] %></span> <span class="darktip-highlight-weak">(Gesamt: <%= this["arena"]["gamesPlayed"] %><% if(this["arena"]["gamesPlayed"] > 0) { %>, <%= ((this["arena"]["gamesWon"] / this["arena"]["gamesPlayed"])*100).toFixed(0) %>% gewonnen<% } %>)</span>',
			'matches-current-short': '<span class="darktip-highlight-won"><%= this["gamesWon"] %></span> - <span class="darktip-highlight-lost"><%= this["gamesLost"] %></span><% if(this["gamesPlayed"] > 0) { %> | <span class="darktip-highlight-weak"><%= ((this["gamesWon"] / this["gamesPlayed"])*100).toFixed(0) %>%</span><% } %>',
			'matches-season'       : 'Spiele: <span class="darktip-highlight-won"><%= this["arena"]["sessionGamesWon"] %></span> - <span class="darktip-highlight-lost"><%= this["arena"]["sessionGamesLost"] %></span> <span class="darktip-highlight-weak">(Gesamt: <%= this["arena"]["sessionGamesPlayed"] %><% if(this["arena"]["sessionGamesPlayed"] > 0) { %>, <%= ((this["arena"]["sessionGamesWon"] / this["arena"]["sessionGamesPlayed"])*100).toFixed(0) %>% gewonnen<% } %>)</span>',
			'matches-season-short' : '<span class="darktip-highlight-won"><%= this["sessionGamesWon"] %></span> - <span class="darktip-highlight-lost"><%= this["sessionGamesLost"] %></span><% if(this["sessionGamesPlayed"] > 0) { %> | <span class="darktip-highlight-weak"><%= ((this["sessionGamesWon"] / this["sessionGamesPlayed"])*100).toFixed(0) %>%</span><% } %>',
			'extendedInactive'     : '[<%= this["_meta"]["extendedKeyCodeLabel"] %>] gedr&uuml;ckt halten f&uuml;r aktuelle Wochenwerte',
			'extendedActive'       : '[<%= this["_meta"]["extendedKeyCodeLabel"] %>] loslassen f&uuml;r Saisonwerte'
		},
		'fr_FR': {
			'loading'              : 'Chargement team d\'ar&egrave;nes...',
			'not-found'            : 'Aucune team d\'ar&egrave;nes trouv&eacute;e',
			'view-mode-current'    : 'Voir la semaine en cours',
			'view-mode-season'     : 'Voir la saison',
			'classification'       : 'Equipe d\'arène <%= this["arena"]["teamsize"] %>v<%= this["arena"]["teamsize"] %>, <%= this._loc("factionSide." + this["arena"]["side"]) %> (<%= this["arena"]["realm"] %>)',
			'rating-team'          : 'Côte: <%= this["arena"]["rating"] %>',
			'rank-current'         : 'Classement #<%= this["arena"]["ranking"] %>',
			'rank-previous'        : 'Classement semaine derni&egrave;re: <% if(this["lastSessionRanking"] > 0) { %>#<%= this["lastSessionRanking"] %><% } else { %>None<% } %>',
			'matches-current'      : 'Matches: <span class="darktip-highlight-won"><%= this["arena"]["gamesWon"] %></span> - <span class="darktip-highlight-lost"><%= this["arena"]["gamesLost"] %></span> <span class="darktip-highlight-weak">(Total: <%= this["arena"]["gamesPlayed"] %><% if(this["arena"]["gamesPlayed"] > 0) { %>, <%= ((this["arena"]["gamesWon"] / this["arena"]["gamesPlayed"])*100).toFixed(0) %>% won<% } %>)</span>',
			'matches-current-short': '<span class="darktip-highlight-won"><%= this["gamesWon"] %></span> - <span class="darktip-highlight-lost"><%= this["gamesLost"] %></span><% if(this["gamesPlayed"] > 0) { %> | <span class="darktip-highlight-weak"><%= ((this["gamesWon"] / this["gamesPlayed"])*100).toFixed(0) %>%</span><% } %>',
			'matches-season'       : 'Matches: <span class="darktip-highlight-won"><%= this["arena"]["sessionGamesWon"] %></span> - <span class="darktip-highlight-lost"><%= this["arena"]["sessionGamesLost"] %></span> <span class="darktip-highlight-weak">(Total: <%= this["arena"]["sessionGamesPlayed"] %><% if(this["arena"]["sessionGamesPlayed"] > 0) { %>, <%= ((this["arena"]["sessionGamesWon"] / this["arena"]["sessionGamesPlayed"])*100).toFixed(0) %>% won<% } %>)</span>',
			'matches-season-short' : '<span class="darktip-highlight-won"><%= this["sessionGamesWon"] %></span> - <span class="darktip-highlight-lost"><%= this["sessionGamesLost"] %></span><% if(this["sessionGamesPlayed"] > 0) { %> | <span class="darktip-highlight-weak"><%= ((this["sessionGamesWon"] / this["sessionGamesPlayed"])*100).toFixed(0) %>%</span><% } %>',
			'extendedInactive'     : 'Appyuez sur [<%= this["_meta"]["extendedKeyCodeLabel"] %>] pour voir les statistiques actuelles',
			'extendedActive'       : 'Relâchez [<%= this["_meta"]["extendedKeyCodeLabel"] %>] pour voir les statistiques de la saison'
		},
		'es_ES': {
			'loading'              : 'Cargando equipo de arenas...',
			'not-found'            : 'Equipo de arenas no encontrado',
			'view-mode-current'    : 'Esta Semana',
			'view-mode-season'     : 'Temporada',
			'classification'       : '<%= this["arena"]["teamsize"] %>v<%= this["arena"]["teamsize"] %> <%= this._loc("factionSide." + this["arena"]["side"]) %> Arena Team, <%= this["arena"]["realm"] %>',
			'rating-team'          : 'Puntuaci&oacute;n: <%= this["arena"]["rating"] %>',
			'rank-current'         : 'Rango #<%= this["arena"]["ranking"] %>',
			'rank-previous'        : 'Rango de la semana pasada: <% if(this["lastSessionRanking"] > 0) { %>#<%= this["lastSessionRanking"] %><% } else { %>no<% } %>',
			'matches-current'      : 'Partidas: <span class="darktip-highlight-won"><%= this["arena"]["gamesWon"] %></span> - <span class="darktip-highlight-lost"><%= this["arena"]["gamesLost"] %></span> <span class="darktip-highlight-weak">(Total: <%= this["arena"]["gamesPlayed"] %><% if(this["arena"]["gamesPlayed"] > 0) { %>, <%= ((this["arena"]["gamesWon"] / this["arena"]["gamesPlayed"])*100).toFixed(0) %>% gewonnen<% } %>)</span>',
			'matches-current-short': '<span class="darktip-highlight-won"><%= this["gamesWon"] %></span> - <span class="darktip-highlight-lost"><%= this["gamesLost"] %></span><% if(this["gamesPlayed"] > 0) { %> | <span class="darktip-highlight-weak"><%= ((this["gamesWon"] / this["gamesPlayed"])*100).toFixed(0) %>%</span><% } %>',
			'matches-season'       : 'Partidas: <span class="darktip-highlight-won"><%= this["arena"]["sessionGamesWon"] %></span> - <span class="darktip-highlight-lost"><%= this["arena"]["sessionGamesLost"] %></span> <span class="darktip-highlight-weak">(Total: <%= this["arena"]["sessionGamesPlayed"] %><% if(this["arena"]["sessionGamesPlayed"] > 0) { %>, <%= ((this["arena"]["sessionGamesWon"] / this["arena"]["sessionGamesPlayed"])*100).toFixed(0) %>% gewonnen<% } %>)</span>',
			'matches-season-short' : '<span class="darktip-highlight-won"><%= this["sessionGamesWon"] %></span> - <span class="darktip-highlight-lost"><%= this["sessionGamesLost"] %></span><% if(this["sessionGamesPlayed"] > 0) { %> | <span class="darktip-highlight-weak"><%= ((this["sessionGamesWon"] / this["sessionGamesPlayed"])*100).toFixed(0) %>%</span><% } %>',
			'extendedInactive'     : '&iexcl;Manten pulsado [<%= this["_meta"]["extendedKeyCodeLabel"] %>] para ver las estad&iacute;sticas actuales!',
			'extendedActive'       : '&iexcl;Suelta [<%= this["_meta"]["extendedKeyCodeLabel"] %>] para ver las estad&iacute;sticas de la temporada!'
		},
		'it_IT': {
			'loading'              : 'Caricamento della squadra arena...',
			'not-found'            : 'Squadra arena non trovata',
			'view-mode-current'    : 'Visualizza la settimana corrente',
			'view-mode-season'     : 'Visualizza la stagione completa',
			'classification'       : '<%= this["arena"]["teamsize"] %>v<%= this["arena"]["teamsize"] %> <%= this._loc("factionSide." + this["arena"]["side"]) %> Squadra Arena, <%= this["arena"]["realm"] %>',
			'rating-team'          : 'Indice d\'arena: <%= this["arena"]["rating"] %>',
			'rank-current'         : 'Posizione #<%= this["arena"]["ranking"] %>',
			'rank-previous'        : 'Posizione dell\'ultima settimana: <% if(this["arena"]["lastSessionRanking"] > 0) { %>#<%= this["arena"]["lastSessionRanking"] %><% } else { %>None<% } %>',
			'matches-current'      : 'Partite: <span class="highlight-won"><%= this["arena"]["gamesWon"] %></span> - <span class="highlight-lost"><%= this["arena"]["gamesLost"] %></span> <span class="highlight-weak">(Total: <%= this["arena"]["gamesPlayed"] %><% if(this["arena"]["gamesPlayed"] > 0) { %>, <%= ((this["arena"]["gamesWon"] / this["arena"]["gamesPlayed"])*100).toFixed(0) %>% won<% } %>)</span>',
			'matches-current-short': '<span class="highlight-won"><%= this["gamesWon"] %></span> - <span class="highlight-lost"><%= this["gamesLost"] %></span><% if(this["gamesPlayed"] > 0) { %> | <span class="highlight-weak"><%= ((this["gamesWon"] / this["gamesPlayed"])*100).toFixed(0) %>%</span><% } %>',
			'matches-season'       : 'Partite: <span class="highlight-won"><%= this["arena"]["sessionGamesWon"] %></span> - <span class="highlight-lost"><%= this["arena"]["sessionGamesLost"] %></span> <span class="highlight-weak">(Total: <%= this["arena"]["sessionGamesPlayed"] %><% if(this["arena"]["sessionGamesPlayed"] > 0) { %>, <%= ((this["arena"]["sessionGamesWon"] / this["arena"]["sessionGamesPlayed"])*100).toFixed(0) %>% won<% } %>)</span>',
			'matches-season-short' : '<span class="highlight-won"><%= this["sessionGamesWon"] %></span> - <span class="highlight-lost"><%= this["sessionGamesLost"] %></span><% if(this["sessionGamesPlayed"] > 0) { %> | <span class="highlight-weak"><%= ((this["sessionGamesWon"] / this["sessionGamesPlayed"])*100).toFixed(0) %>%</span><% } %>',
			'extendedInactive'     : 'Tieni premuto [<%= this["_meta"]["extendedKeyCodeLabel"] %>] per visualizzare le statistiche correnti',
			'extendedActive'       : 'Rilascia [<%= this["_meta"]["extendedKeyCodeLabel"] %>] per visualizzare le statistiche della stagione'
		}
	}

});


DarkTip.registerModule('wow.achievement', {

	'triggers': {
		'explicit': {
			'match' : /wow\.achievement:(us|eu|kr|tw|cn)\.([^\(]+)\((en|de|fr|es|ru|pt|it|ko|zh)\)/i,
			'params': {
				'1': 'region',
				'2': 'achievementid',
				'3': 'lang'
			}
		},
		'implicit': {
			'match' : /(?:https?:\/\/)?(us\.battle\.net|eu\.battle\.net|kr\.battle\.net|tw\.battle\.net|cn\.battle\.net|www\.battlenet\.com\.cn)\/wow\/(en|de|fr|es|ru|pt|it|ko|zh)\/(?:character|guild)\/[^\/]+\/[^\/]+\/achievement#(?:[0-9]+:)+a([0-9]+).*/i,
			'params': {
				'1': 'host',
				'2': 'lang',
				'3': 'achievementid',
			},
		}
	},

	'queries': {
		'achievement': {
			'required' : true,
			'condition': true,
			'call'     : '//<%= this["host"] %>/api/wow/achievement/<%= this["achievementid"] %>?locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 90)
		}
	},

	'getParams': {
		'explicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.achievement', 'triggers.explicit.params')));
			params['host']   = DarkTip.map('wow', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		},
		'implicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.achievement', 'triggers.implicit.params')));
			params['region'] = DarkTip.map('wow', 'maps.host.region', params['host']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		}
	},

	'layout': {
		'width': {
			'core': 425
		}
	},

	'templates': {
		'core': (
			'<div class="tooltip-achievement">' +
				'<img class="darktip-icon" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/56/<% if(this["achievement"]["icon"]) { %><%= this["achievement"]["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg" />' +
				'<div class="darktip-col-70">' +
					'<div class="darktip-headline-right"><span class="darktip-icon-achievenemtpoints"><%= this["achievement"]["points"] %></span></div>' +
					'<div class="darktip-row darktip-headline"><%= this["achievement"]["title"] %></div>' +
					'<div class="darktip-row darktip-highlight-reduced"><%= this["achievement"]["description"] %></div>' +
				'</div>' +
			'</div>'
		),
		'404': (
			'<div class="tooltip-achievement darktip-tooltip-404">' +
				'<div class="darktip-title">404<span class="darktip-sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.achievement") %></span> <span class="value"><%= this["achievementid"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
			'</div>'
		)
	},

	'i18n': {
		'en_US': {
			'loading'       : 'Loading Achievement...',
			'not-found'     : 'Achievement not found'
		},
		'de_DE': {
			'loading'       : 'Lade Erfolg...',
			'not-found'     : 'Erfolg nicht gefunden'
		},
		'fr_FR': {
			'loading'       : 'Chargement Avantage...',
			'not-found'     : 'Haut fait introuvable'
		},
		'es_ES': {
			'loading'       : 'Cargando ventaja...',
			'not-found'     : 'Ventaja no encontrada'
		},
		'it_IT': {
			'loading'       : 'Caricamento Impresa...',
			'not-found'     : 'Impresa non trovata'
		}		
	}

});

DarkTip.registerModule('wow.achievement.character', {

	'triggers': {
		'explicit': {
			'match' : /wow\.achievement\.character:(us|eu|kr|tw|cn)\.([^\.]+)\.([^\.]+)\.([^\(]+)\((en|de|fr|es|ru|pt|it|ko|zh)\)/i,
			'params': {
				'1': 'region',
				'2': 'realm',
				'3': 'character',
				'4': 'achievementid',
				'5': 'lang'
			}
		},
		'implicit': {
			'match' : /(?:https?:\/\/)?(us\.battle\.net|eu\.battle\.net|kr\.battle\.net|tw\.battle\.net|cn\.battle\.net|www\.battlenet\.com\.cn)\/wow\/(en|de|fr|es|ru|pt|it|ko|zh)\/character\/([^\/]+)\/([^\/]+)\/achievement#[0-9]+:a([0-9]+)/i,
			'params': {
				'1': 'host',
				'2': 'lang',
				'3': 'realm',
				'4': 'character',
				'5': 'achievementid'
			}
		}
	},

	'queries': {
		'character': {
			'required' : true,
			'condition': true,
			'call'     : '//<%= this["host"] %>/api/wow/character/<%= this["realm"] %>/<%= this["character"] %>?fields=achievements&locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 1)
		},
		'achievement': {
			'required' : true,
			'condition': true,
			'call'     : '//<%= this["host"] %>/api/wow/achievement/<%= this["achievementid"] %>?locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 90)
		}
	},

	'prepareData': function(state) {

		if(Object.keys(state['data']).length === 0)
		{
			return false;
		}

		return state['data'];
	},

	'getParams': {
		'explicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.achievement', 'triggers.explicit.params')));
			params['host']   = DarkTip.map('wow', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		},
		'implicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.achievement', 'triggers.implicit.params')));
			params['region'] = DarkTip.map('wow', 'maps.host.region', params['host']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		}
	},

	'layout': {
		'width': {
			'core': 425
		}
	},

	'templates': {
		'core': (
			'<div class="tooltip-achievement">' +
				'<img class="darktip-icon" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/56/<% if(this["achievement"]["icon"]) { %><%= this["achievement"]["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg" />' +
				'<div class="darktip-col-70">' +
					'<div class="darktip-headline-right"><span class="darktip-icon-achievenemtpoints"><%= this["achievement"]["points"] %></span></div>' +
					'<div class="darktip-row darktip-headline"><%= this["achievement"]["title"] %></div>' +
					'<div class="darktip-row darktip-highlight-reduced"><%= this["achievement"]["description"] %></div>' +
				'</div>' +
			'</div>'
		),
		'404': (
			'<div class="tooltip-achievement darktip-tooltip-404">' +
				'<div class="darktip-title">404<span class="darktip-sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.achievement") %></span> <span class="value"><%= this["achievementid"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
			'</div>'
		)
	},

	'i18n': {
		'en_US': {
			'loading'       : 'Loading Achievement...',
			'not-found'     : 'Achievement not found'
		},
		'de_DE': {
			'loading'       : 'Lade Erfolg...',
			'not-found'     : 'Erfolg nicht gefunden'
		},
		'fr_FR': {
			'loading'       : 'Chargement Avantage...',
			'not-found'     : 'Haut fait introuvable'
		},
		'es_ES': {
			'loading'       : 'Cargando ventaja...',
			'not-found'     : 'Ventaja no encontrada'
		},
		'it_IT': {
			'loading'       : 'Caricamento Impresa...',
			'not-found'     : 'Impresa non trovata'
		}
	}

});

DarkTip.registerModule('wow.character', {

	'triggers': {
		'explicit': {
			'match' : /wow\.character:(us|eu|kr|tw|cn)\.([^\.]+)\.([^\(]+)\((en|de|fr|es|ru|pt|it|ko|zh)\)/i,
			'params': {
				'1': 'region',
				'2': 'realm',
				'3': 'character',
				'4': 'lang'
			}
		},
		'implicit': {
			'match' : /(?:https?:\/\/)?(us\.battle\.net|eu\.battle\.net|kr\.battle\.net|tw\.battle\.net|cn\.battle\.net|www\.battlenet\.com\.cn)\/wow\/(en|de|fr|es|ru|pt|it|ko|zh)\/character\/([^\/]+)\/([^\/#]+).*/i,
			'params': {
				'1': 'host',
				'2': 'lang',
				'3': 'realm',
				'4': 'character'
			},
			'decorate': function(element, params, data) {

				var color_class     = DarkTip.map('wow.character', 'maps.class.color', data['character']['class']);
				var mediahost       = DarkTip.map('wow', 'maps.region.mediahost', params['region']);
				var icon_racegender = 'http://' + mediahost + '/wow/icons/18/race_' + data['character']['race'] + '_' + data['character']['gender'] + '.jpg';
				var icon_class      = 'http://' + mediahost + '/wow/icons/18/class_' + data['character']['class'] + '.jpg';

				DarkTip.jq(element).css(DarkTip['data']['settings']['decorativeMode']['default']);
				DarkTip.jq(element).css({'color': color_class});
				DarkTip.jq(element).prepend('<img src="' + icon_racegender + '" style="vertical-align: middle;" /> <img src="' + icon_class + '" style="vertical-align: middle;" /> ');
			}
		}
	},

	'queries': {
		'character': {
			'required' : true,
			'condition': true,
			'call'     : '//<%= this["host"] %>/api/wow/character/<%= this["realm"] %>/<%= this["character"] %>?fields=guild,talents,items,professions,pets,mounts,audit&locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 1)
		}
		/*
		'races'    : {
			'required' : false,
			'condition': 'character.race',
			'call'     : '//<%= this["host"] %>/api/wow/data/character/races?locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 90)
		},
		'classes'  : {
			'required' : false,
			'condition': 'character.class',
			'call'     : '//<%= this["host"] %>/api/wow/data/character/classes?locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 90)
		},
		// */
	},

	'maps': {
		'class': {
			'color': {
				'1' : '#C79C6E',
				'2' : '#F58CBA',
				'3' : '#ABD473',
				'4' : '#FFF569',
				'5' : '#FFFFFF',
				'6' : '#C41F3B',
				'7' : '#0070DE',
				'8' : '#69CCF0',
				'9' : '#9482C9',
				'11': '#FF7D0A'
			}
		}
	},

	'prepareData': function(state) {

		if(Object.keys(state['data']).length === 0)
		{
			return false;
		}

		state['data']['character']['talentSpecCount'] = 0;

		if((typeof state['data']['character'] !== 'undefined') && (typeof state['data']['character']['talents'] !== 'undefined'))
		{
			for(var i = 0; i < state['data']['character']['talents'].length; i++)
			{
				var cspec   = state['data']['character']['talents'][i];
				var temp    = {};
				var maxtier = -1;
				var ordered = [];

				if(typeof cspec['spec'] !== 'undefined')
				{
					state['data']['character']['talentSpecCount'] = state['data']['character']['talentSpecCount'] + 1;
				}

				if((typeof cspec['talents'] !== 'undefined') && (cspec['talents'].length > 0))
				{
					for(var j = 0; j < cspec['talents'].length; j++)
					{
						temp[cspec['talents'][j]['tier']] = cspec['talents'][j];

						if(cspec['talents'][j]['tier'] > maxtier)
						{
							maxtier = cspec['talents'][j]['tier'];
						}
					}
				}

				if(maxtier >= 0)
				{
					for(var j = 0; j <= maxtier; j++)
					{
						if(typeof temp[j] !== 'undefined')
						{
							ordered.push(temp[j]);
						}
					}
				}

				cspec['talents_ordered'] = ordered;
			}
		}

		return state['data'];
	},

	'getParams': {
		'explicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.character', 'triggers.explicit.params')));
			params['host']   = DarkTip.map('wow', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		},
		'implicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.character', 'triggers.implicit.params')));
			params['region'] = DarkTip.map('wow', 'maps.host.region', params['host']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		}
	},

	'layout': {
		'width': {
			'core': 325
		}
	},

	'templates': {
		'core': (
			'<div class="tooltip-character">' +
				'<img class="darktip-icon" src="<%= this["_meta"]["path_host"] %>/static-render/<%= this["_meta"]["region"] %>/<%= this["character"]["thumbnail"] %>?alt=/wow/static/images/2d/avatar/<%= this["character"]["race"] %>-<%= this["character"]["gender"] %>.jpg" />' +
				/* --- START simple mode -------------------------------- */
				'<div class="darktip-col-98 darktip-only-s">' +
					'<div class="darktip-headline-right"><span class="darktip-icon-achievenemtpoints"><%= this["character"]["achievementPoints"] %></span></div>' +
					'<div class="darktip-row darktip-headline darktip-cclass-<%= this["character"]["class"] %>"><%= this["character"]["name"] %></div>' +
					'<div class="darktip-row"><%= this._loc("classification") %></div>' +
					'<%= this._subLoop("templates.fragments.talentSpec", this["character"]["talents"]) %>' +
					'<% if(this["character"]["guild"]) { %><div class="darktip-row darktip-highlight-medium">&lt;<%= this["character"]["guild"]["name"] %>&gt;<% if(this["character"]["guild"]["level"]) { %> (<%= this["character"]["guild"]["level"] %>)<% } %></div><% } %>' +
					'<div class="darktip-row"><%= this["character"]["realm"] %></div>' +
					'<% if(this["character"]["items"]) { %><div class="darktip-row darktip-highlight-weak"><%= this._loc("itemLevel", this["character"]["items"]) %></div><% } %>' +
					'<% if(this["_meta"]["extendedActive"]) { %><div class="darktip-row darktip-info-meta"><%= this._loc("extendedInactive") %></div><% } %>' +
				'</div>' +
				/* --- END simple mode ---------------------------------- */
				/* --- START extended mode ------------------------------ */
				'<% if(this["_meta"]["extendedActive"]) { %>' +
					'<div class="darktip-col-98 darktip-only-x">' +
						'<div class="darktip-headline-right"><span class="darktip-icon-achievenemtpoints"><%= this["character"]["achievementPoints"] %></span></div>' +
						'<div class="darktip-row darktip-headline darktip-cclass-<%= this["character"]["class"] %>"><%= this["character"]["name"] %></div>' +
						'<% if(this["character"]["professions"]) { %>' +
							'<div class="darktip-block">' +
								'<%= this._subLoop("templates.fragments.profession.primary", this["character"]["professions"]["primary"]) %>' +
								'<%= this._subLoop("templates.fragments.profession.secondary", this["character"]["professions"]["secondary"]) %>' +
							'</div>' +
						'<% } %>' +
						'<% if(this["character"]["mounts"]) { %><div class="darktip-row"><%= this._loc("mounts") %></div><% } %>' +
						'<% if(this["character"]["pets"]) { %><div class="darktip-row"><%= this._loc("pets") %></div><% } %>' +
						'<div class="darktip-row darktip-highlight-reduced"><%= this._loc("lastModified") %></div>' +
						'<div class="darktip-row darktip-info-meta"><%= this._loc("extendedActive") %></div>' +
					'</div>' +
				'<% } %>' +
				/* --- END extended mode -------------------------------- */
			'</div>'
		),
		'404': (
			'<div class="tooltip-character darktip-tooltip-404">' +
				'<div class="darktip-title">404<span class="darktip-sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.character") %></span> <span class="value"><%= this["character"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.realm") %></span> <span class="value"><%= this["realm"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
			'</div>'
		),
		'fragments': {
			'talentSpec': (
				'<% if(this["spec"]) { %>' +
					'<div class="darktip-block darktip-spec darktip-row<% if(this["selected"]) { %> darktip-highlight-strong<% } else { %> darktip-highlight-reduced<% } %>">' +
						'<img class="darktip-icon-10x10" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/<% if(this["spec"]["icon"]) { %><%= this["spec"]["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg"/> ' +
						'<%= this["spec"]["name"] %> <span class="darktip-role">(<%= this["spec"]["role"] %>)</span>' +
						'<% if(this["talents"].length > 0) { %>' +
							'<%= this._subLoop("templates.fragments.talent", this["talents_ordered"]) %>' +
						'<% } %>' +
					'</div>' +
				'<% } %>'
			),
			'talent': (
				'<div class="darktip-block darktip-talent">' +
					'<img class="darktip-icon-10x10" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/<% if(this["spell"]["icon"]) { %><%= this["spell"]["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg"/> ' +
					'<%= this["spell"]["name"] %>' +
				'</div>'
			),
			'profession': {
				'primary'  : (
					'<% if(this["rank"] > 0) { %>' +
						'<div class="darktip-row darktip-highlight-medium">' +
							'<img class="darktip-icon-10x10" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/<% if(this["icon"]) { %><%= this["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg"/> ' +
							'<%= this["name"] %>: <%= this["rank"] %>' +
						'</div>' +
					'<% } %>'
				),
				'secondary': (
					'<% if(this["rank"] > 0) { %>' +
						'<div class="darktip-row darktip-highlight-weak">' +
							'<img class="darktip-icon-10x10" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/<% if(this["icon"]) { %><%= this["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg"/> ' +
							'<%= this["name"] %>: <%= this["rank"] %>' +
						'</div>' +
					'<% } %>'
				)
			}
		}
	},

	'i18n': {
		'en_US': {
			'loading'       : 'Loading character...',
			'not-found'     : 'Character not found',
			'classification': '<%= this["character"]["level"] %> <%= this._loc("characterRace." + this["character"]["race"] + ".0") %> <%= this._loc("characterClass." + this["character"]["class"] + ".0") %>',
			'itemLevel'     : '<%= this["averageItemLevelEquipped"] %> average item level (<%= this["averageItemLevel"] %>)',
			'mounts'        : 'Mounts: <%= this["character"]["mounts"]["numCollected"] %> / <%= this["character"]["mounts"]["numCollected"] + this["character"]["mounts"]["numNotCollected"] %>',
			'pets'          : 'Pets: <%= this["character"]["pets"]["numCollected"] %> / <%= this["character"]["pets"]["numCollected"] + this["character"]["pets"]["numNotCollected"] %>',
			'lastModified'  : 'Last modified: <%= this._renderDateTime(this["character"]["lastModified"]) %>'
		},
		'de_DE': {
			'loading'       : 'Lade Charakter...',
			'not-found'     : 'Charakter nicht gefunden',
			'classification': '<%= this["character"]["level"] %>, <%= this._loc("characterRace." + this["character"]["race"] + "." + this["character"]["gender"]) %>, <%= this._loc("characterClass." + this["character"]["class"] + "." + this["character"]["gender"]) %>',
			'itemLevel'     : '<%= this["averageItemLevelEquipped"] %> Durchschnittliche Gegenstandsstufe (<%= this["averageItemLevel"] %>)',
			'mounts'        : 'Reittiere: <%= this["character"]["mounts"]["numCollected"] %> / <%= this["character"]["mounts"]["numCollected"] + this["character"]["mounts"]["numNotCollected"] %>',
			'pets'          : 'Haustiere: <%= this["character"]["pets"]["numCollected"] %> / <%= this["character"]["pets"]["numCollected"] + this["character"]["pets"]["numNotCollected"] %>',
			'lastModified'  : 'Stand vom <%= this._renderDateTime(this["character"]["lastModified"]) %>'
		},
		'fr_FR': {
			'loading'       : 'Chargement personnage...',
			'not-found'     : 'Aucun personnage trouv&eacute;',
			'classification': '<%= this._loc("characterRace." + this["character"]["race"] + "." + this["character"]["gender"]) %> <%= this._loc("characterClass." + this["character"]["class"] + "." + this["character"]["gender"]) %> de niveau <%= this["character"]["level"] %>',
			'itemLevel'     : '<%= this["averageItemLevelEquipped"] %> Niveau moyen des objets (<%= this["averageItemLevel"] %>)',
			'mounts'        : 'Montures: <%= this["character"]["mounts"]["numCollected"] %> / <%= this["character"]["mounts"]["numCollected"] + this["character"]["mounts"]["numNotCollected"] %>',
			'pets'          : 'Mascottes: <%= this["character"]["pets"]["numCollected"] %> / <%= this["character"]["pets"]["numCollected"] + this["character"]["pets"]["numNotCollected"] %>',
			'lastModified'  : 'Derni&egrave;re mise à jour: <%= this._renderDateTime(this["character"]["lastModified"]) %>'
		},
		'es_ES': {
			'loading'       : 'Cargando personaje...',
			'not-found'     : 'Personaje no encontrado',
			'classification': '<%= this._loc("characterRace." + this["character"]["race"] + "." + this["character"]["gender"]) %> <%= this._loc("characterClass." + this["character"]["class"] + "." + this["character"]["gender"]) %> de nivel <%= this["character"]["level"] %>',
			'itemLevel'     : '<%= this["averageItemLevelEquipped"] %> nivel medio de objeto (<%= this["averageItemLevel"] %>)',
			'mounts'        : 'Monturas: <%= this["character"]["mounts"]["numCollected"] %> / <%= this["character"]["mounts"]["numCollected"] + this["character"]["mounts"]["numNotCollected"] %>',
			'pets'          : 'Compa&ntilde;eros: <%= this["character"]["pets"]["numCollected"] %> / <%= this["character"]["pets"]["numCollected"] + this["character"]["pets"]["numNotCollected"] %>',
			'lastModified'  : '&Uacute;ltima modificaci&oacute;n: <%= this._renderDateTime(this["character"]["lastModified"]) %>'
		},
		'es_MX': {
			'classification': '<%= this._loc("characterClass." + this["character"]["class"] + "." + this["character"]["gender"]) %> de <%= this._loc("characterRace." + this["character"]["race"] + "." + this["character"]["gender"]) %>, nivel <%= this["character"]["level"] %>'
		},
		'it_IT': {
			'loading'       : 'Caricamento personaggio...',
			'not-found'     : 'Personaggio non trovato',
			'classification': '<%= this["character"]["level"] %> <%= this._loc("characterRace." + this["character"]["race"] + ".0") %> <%= this._loc("characterClass." + this["character"]["class"] + ".0") %>',
			'itemLevel'     : '<%= this["averageItemLevelEquipped"] %> media dei livelli oggetto (<%= this["averageItemLevel"] %>)',
			'mounts'        : 'Cavalcature: <%= this["character"]["mounts"]["numCollected"] %> / <%= this["character"]["mounts"]["numCollected"] + this["character"]["mounts"]["numNotCollected"] %>',
			'pets'          : 'Mascotte: <%= this["character"]["pets"]["numCollected"] %> / <%= this["character"]["pets"]["numCollected"] + this["character"]["pets"]["numNotCollected"] %>',
			'lastModified'  : 'Ultima modifica: <%= this._renderDateTime(this["character"]["lastModified"]) %>'
		}
	}

});


DarkTip.registerModule('wow.character.pvp', {

	'triggers': {
		'explicit': {
			'match' : /wow\.character\.pvp:(us|eu|kr|tw|cn)\.([^\.]+)\.([^\(]+)\((en|de|fr|es|ru|pt|it|ko|zh)\)/i,
			'params': {
				'1': 'region',
				'2': 'realm',
				'3': 'character',
				'4': 'lang'
			}
		},
		'implicit': {
			'match' : /(?:https?:\/\/)?(us\.battle\.net|eu\.battle\.net|kr\.battle\.net|tw\.battle\.net|cn\.battle\.net|www\.battlenet\.com\.cn)\/wow\/(en|de|fr|es|ru|pt|it|ko|zh)\/character\/([^\/]+)\/([^\/]+)\/pvp.*/i,
			'params': {
				'1': 'host',
				'2': 'lang',
				'3': 'realm',
				'4': 'character'
			}
		}
	},

	'queries': {
		'character': {
			'required' : true,
			'condition': true,
			'call'     : '//<%= this["host"] %>/api/wow/character/<%= this["realm"] %>/<%= this["character"] %>?fields=guild,talents,items,pvp&locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 1)
		}
	},

	'getParams': {
		'explicit': function(result) {
			var params	   = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.character.pvp', 'triggers.explicit.params')));
			params['host']   = DarkTip.map('wow', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		},
		'implicit': function(result) {
			var params	   = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.character.pvp', 'triggers.implicit.params')));
			params['region'] = DarkTip.map('wow', 'maps.host.region', params['host']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		}
	},

	'layout': {
		'width': {
			'core': 400
		}
	},

	'templates': {
		'core': (
			'<div class="tooltip-character tooltip-pvp">' +
				'<img class="darktip-icon" src="<%= this["_meta"]["path_host"] %>/static-render/<%= this["_meta"]["region"] %>/<%= this["character"]["thumbnail"] %>?alt=/wow/static/images/2d/avatar/<%= this["character"]["race"] %>-<%= this["character"]["gender"] %>.jpg" />' +
				 /* --- START simple mode -------------------------------- */
				'<div class="darktip-col-98 darktip-only-s">' +
					'<div class="darktip-headline-right"><span class="darktip-icon-achievenemtpoints"><%= this["character"]["achievementPoints"] %></span></div>' +
					'<div class="darktip-row darktip-headline darktip-cclass-<%= this["character"]["class"] %>"><%= this["character"]["name"] %></div>' +
					'<div class="darktip-row"><%= this._loc("classification") %></div>' +
					'<% if(this["character"]["pvp"]) { %>' +
						'<div class="darktip-row darktip-highlight-medium"><%= this._loc("totalHonorableKills", this["character"]["pvp"]) %></div>' +
						'<%= this._sub("templates.fragments.arenaTeams") %>' +
						'<%= this._sub("templates.fragments.ratedBattlegrounds", this["character"]["pvp"]["ratedBattlegrounds"]) %>' +
					'<% } %>' +
					'<% if(this["_meta"]["extendedActive"]) { %><div class="darktip-row darktip-info-meta"><%= this._loc("extendedInactive") %></div><% } %>' +
				'</div>' +
				 /* --- END simple mode ---------------------------------- */
				 /* --- START extended mode ------------------------------ */
				'<% if(this["_meta"]["extendedActive"]) { %>' +
					'<div class="darktip-col-98 darktip-only-x">' +
						'<div class="darktip-headline-right"><span class="darktip-icon-achievenemtpoints"><%= this["character"]["achievementPoints"] %></span></div>' +
						'<div class="darktip-row darktip-headline darktip-cclass-<%= this["character"]["class"] %>"><%= this["character"]["name"] %></div>' +
						'<div class="darktip-row"><%= this["character"]["realm"] %></div>' +
						'<% if(this["character"]["guild"]) { %><div class="darktip-row darktip-highlight-medium">&lt;<%= this["character"]["guild"]["name"] %>&gt;<% if(this["character"]["guild"]["level"]) { %> (<%= this["character"]["guild"]["level"] %>)<% } %></div><% } %>' +
						'<% if(this["character"]["items"]) { %><div class="darktip-row darktip-highlight-weak"><%= this._loc("itemLevel", this["character"]["items"]) %></div><% } %>' +
						'<div class="darktip-row darktip-highlight-reduced"><%= this._loc("lastModified") %></div>' +
						'<div class="darktip-row darktip-info-meta"><%= this._loc("extendedActive") %></div>' +
					'</div>' +
				'<% } %>' +
				 /* --- END extended mode -------------------------------- */
			'</div>'
		),
		'fragments': {
			'arenaTeams': (
				'<div class="darktip-highlight-weak"><%= this._loc("arenaTeams") %></div>' +
				'<div class="darktip-block darktip-padded">' +
					'<%= this._subLoop("templates.fragments.arenaTeam", this["character"]["pvp"]["arenaTeams"]) %>' +
				'</div>'
			),
			'ratedBattlegrounds': (
				'<div class="darktip-highlight-weak"><%= this._loc("ratedBattlegrounds") %></div>' +
				'<div class="darktip-block darktip-padded">' +
					'<%= this._subLoop("templates.fragments.ratedBattleground", this["battlegrounds"]) %>' +
				'</div>'
			),
			'arenaTeam': (
				'<div class="darktip-row darktip-padded<% if(this["_loop"] % 2 == 0) { %> alt<% } %>">' +
					'<div class="darktip-pos-right darktip-highlight-weak"><%= this["personalRating"] %></div>' +
					'<span><span class="sub darktip-highlight-strong"><%= this["size"] %></span> <%= this["name"] %></span> <span class="sub darktip-highlight-reduced">(<%= this["teamRating"] %>)</span>' +
				'</div>'
			),
			'ratedBattleground': (
				'<div class="darktip-row darktip-padded<% if(this["_loop"] % 2 == 0) { %> alt<% } %>">' +
					'<div class="darktip-pos-right">' +
						'<span class="darktip-highlight-won"><%= this["won"] %></span> - <span class="darktip-highlight-lost"><%= this["played"] - this["won"] %></span>' +
						'<% if(this["played"] > 0) { %> | <span class="darktip-highlight-weak"><%= ((this["won"] / this["played"])*100).toFixed(0) %>%</span><% } %>' +
					'</div>' +
					'<span><%= this["name"] %></span>' +
				'</div>'
			)
		}
	},

	'i18n': {
		'en_US': {
			'totalHonorableKills': 'Honorable Kills: <%= this["totalHonorableKills"] %>',
			'arenaTeams'         : 'Arena teams:',
			'ratedBattlegrounds' : 'Rated Battlegrounds: <%= this["personalRating"] %>'
		},
		'de_DE': {
			'totalHonorableKills': 'Ehrenhafte Siege: <%= this["totalHonorableKills"] %>',
			'arenaTeams'         : 'Arenateams:',
			'ratedBattlegrounds' : 'Gewertete Schlachtfelder: <%= this["personalRating"] %>'
		},
		'fr_FR': {
			'totalHonorableKills': 'Victoires honorables: <%= this["totalHonorableKills"] %>',
			'arenaTeams'         : 'Team d\'ar&egrave;nes:',
			'ratedBattlegrounds' : 'Classement en champ de bataille: <%= this["personalRating"] %>'
		},
		'it_IT': {
			'totalHonorableKills': 'Uccisioni Onorevoli: <%= this["totalHonorableKills"] %>',
			'arenaTeams'         : 'Squadre Arena:',
			'ratedBattlegrounds' : 'Campi di Battaglia Classificati: <%= this["personalRating"] %>'
		}
	}

});

DarkTip.registerModule('wow.character.spec', {

	'triggers': {
		'explicit': {
			'match' : /wow\.character.spec:(us|eu|kr|tw|cn)\.([^\.]+)\.([^\(]+)\((en|de|fr|es|ru|pt|it|ko|zh)\)/i,
			'params': {
				'1': 'region',
				'2': 'realm',
				'3': 'character',
				'4': 'lang'
			}
		},
		'implicit': {
			'match' : /(?:https?:\/\/)?(us\.battle\.net|eu\.battle\.net|kr\.battle\.net|tw\.battle\.net|cn\.battle\.net|www\.battlenet\.com\.cn)\/wow\/(en|de|fr|es|ru|pt|it|ko|zh)\/character\/([^\/]+)\/([^\/#]+)\/[^#]*#talents/i,
			'params': {
				'1': 'host',
				'2': 'lang',
				'3': 'realm',
				'4': 'character'
			}
		}
	},

	'queries': {
		'character': {
			'required' : true,
			'condition': true,
			'call'     : '//<%= this["host"] %>/api/wow/character/<%= this["realm"] %>/<%= this["character"] %>?fields=guild,talents&locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 1)
		}
	},

	'getParams': {
		'explicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.character.spec', 'triggers.explicit.params')));
			params['host']   = DarkTip.map('wow', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		},
		'implicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.character.spec', 'triggers.implicit.params')));
			params['region'] = DarkTip.map('wow', 'maps.host.region', params['host']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		}
	},

	'layout': {
		'width': {
			'core': 380
		}
	},

	'templates': {
		'core': (
			'<div class="tooltip-character tooltip-spec">' +
				'<img class="darktip-icon" src="<%= this["_meta"]["path_host"] %>/static-render/<%= this["_meta"]["region"] %>/<%= this["character"]["thumbnail"] %>?alt=/wow/static/images/2d/avatar/<%= this["character"]["race"] %>-<%= this["character"]["gender"] %>.jpg" />' +
				/* --- START simple mode -------------------------------- */
				'<div class="darktip-col-98<% if(this["character"]["talentSpecCount"] > 1) { %> darktip-only-s<% } %>">' +
					'<div class="darktip-headline-right"><%= this._loc("specActive") %></div>' +
					'<div class="darktip-row darktip-headline darktip-cclass-<%= this["character"]["class"] %>"><%= this["character"]["name"] %></div>' +
					'<div class="darktip-row"><%= this._loc("classification") %></div>' +
					'<%= this._subLoop("templates.fragments.talentSpecActive", this["character"]["talents"]) %>' +
					'<% if(this["_meta"]["extendedActive"] && (this["character"]["talentSpecCount"] > 1)) { %>' +
						'<div class="darktip-row darktip-info-meta"><%= this._loc("extendedInactive") %></div>' +
					'<% } else { %>' +
						'<div class="darktip-row darktip-info-meta"><%= this._loc("extendedNotAvailable") %></div>' +
					'<% } %>' +
				'</div>' +
				/* --- END simple mode ---------------------------------- */
				/* --- START extended mode ------------------------------ */
				'<% if(this["_meta"]["extendedActive"] && (this["character"]["talentSpecCount"] > 1)) { %>' +
					'<div class="darktip-col-98 darktip-only-x">' +
						'<div class="darktip-headline-right"><%= this._loc("specInactive") %></div>' +
						'<div class="darktip-row darktip-headline darktip-cclass-<%= this["character"]["class"] %>"><%= this["character"]["name"] %></div>' +
						'<div class="darktip-row"><%= this._loc("classification") %></div>' +
						'<%= this._subLoop("templates.fragments.talentSpecInactive", this["character"]["talents"]) %>' +
						'<div class="darktip-row darktip-info-meta"><%= this._loc("extendedActive") %></div>' +
					'</div>' +
				'<% } %>' +
				/* --- END extended mode -------------------------------- */
			'</div>'
		),
		'fragments': {
			'talentSpecActive': (
				'<% if(this["selected"]) { %>' +
					'<%= this._sub("templates.fragments.talentSpec") %>' +
				'<% } %>'
			),
			'talentSpecInactive': (
				'<% if((typeof this["selected"] === "undefined") || (!this["selected"])) { %>' +
					'<%= this._sub("templates.fragments.talentSpec") %>' +
				'<% } %>'
			),
			'talentSpec': (
				'<% if(this["spec"]) { %>' +
					'<div class="darktip-row darktip-spec darktip-block">' +
						'<img class="darktip-icon-18x18" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/<% if(this["spec"]["icon"]) { %><%= this["spec"]["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg"/> ' +
						'<%= this["spec"]["name"] %> <span class="darktip-role">(<%= this["spec"]["role"] %>)</span>' +
						'<% if(this["talents"].length > 0) { %>' +
							'<%= this._subLoop("templates.fragments.talent", this["talents_ordered"]) %>' +
						'<% } %>' +
					'</div>' +
					'<% if(this["glyphs"]) { %>' +
						'<%= this._sub("templates.fragments.talentSpecGlyphMajor", this["glyphs"]) %>' +
						'<%= this._sub("templates.fragments.talentSpecGlyphMinor", this["glyphs"]) %>' +
					'<% } %>' +
				'<% } %>'
			),
			'talent': (
				'<div class="darktip-block darktip-talent">' +
					'<img class="darktip-icon-10x10" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/<% if(this["spell"]["icon"]) { %><%= this["spell"]["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg"/> ' +
					'<%= this["spell"]["name"] %>' +
				'</div>'
			),
			'talentSpecGlyphMajor': (
				'<div class="darktip-row darktip-spec darktip-block">' +
					'<% if((this["major"]) && (this["major"].length)) { %>' +
						'<div class="darktip-highlight-weak"><%= this._loc("glyphMajor") %></div>' +
						'<%= this._subLoop("templates.fragments.glyph", this["major"]) %>' +
					'<% } else { %>' +
						'<span class="darktip-highlight-weak"><%= this._loc("glyphMajorEmpty") %></span>' +
					'<% } %>' +
				'</div>'
			),
			'talentSpecGlyphMinor': (
				'<div class="darktip-row darktip-spec darktip-block">' +
					'<% if((this["minor"]) && (this["minor"].length)) { %>' +
						'<div class="darktip-highlight-weak"><%= this._loc("glyphMinor") %></div>' +
						'<%= this._subLoop("templates.fragments.glyph", this["minor"]) %>' +
					'<% } else { %>' +
						'<span class="darktip-highlight-weak"><%= this._loc("glyphMinorEmpty") %></span>' +
					'<% } %>' +
				'</div>'
			),
			'glyph': (
				'<div class="darktip-block darktip-glyph">' +
					'<img class="darktip-icon-10x10" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/<% if(this["icon"]) { %><%= this["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg"/> ' +
					'<%= this["name"] %>' +
				'</div>'
			)
		}
	},

	'i18n': {
		'en_US': {
			'loading'             : 'Loading character...',
			'not-found'           : 'Character not found',
			'extendedInactive'    : 'Hold [<%= this["_meta"]["extendedKeyCodeLabel"] %>] for inactive spec',
			'extendedActive'      : 'Release [<%= this["_meta"]["extendedKeyCodeLabel"] %>] for active spec',
			'extendedNotAvailable': 'No alternate spec available',
			'glyphMajor'          : 'Major glyphs:',
			'glyphMinor'          : 'Minor glyphs:',
			'glyphMajorEmpty'     : 'No major glyphs used',
			'glyphMinorEmpty'     : 'No minor glyphs used',
			'specActive'          : 'Active spec',
			'specInactive'        : 'Inactive spec'
		},
		'de_DE': {
			'loading'             : 'Lade Charakter...',
			'not-found'           : 'Charakter nicht gefunden',
			'extendedInactive'    : '[<%= this["_meta"]["extendedKeyCodeLabel"] %>] gedr&uuml;ckt für inaktive Skillung',
			'extendedActive'      : '[<%= this["_meta"]["extendedKeyCodeLabel"] %>] loslassen für aktive Skillung',
			'extendedNotAvailable': 'Keine alternative Skillung vorhanden',
			'glyphMajor'          : 'Erhebliche Glyphen:',
			'glyphMinor'          : 'Geringe Glyphen:',
			'glyphMajorEmpty'     : 'Keine erheblichen Glyphen',
			'glyphMinorEmpty'     : 'Keine geringen Glyphen',
			'specActive'          : 'Aktive Skillung',
			'specInactive'        : 'Inaktive Skillung'
		},
		'fr_FR': {
			'loading'             : 'Chargement personnage...',
			'not-found'           : 'Aucun personnage trouv&eacute;',
			'extendedInactive'    : 'Maintenez [<%= this["_meta"]["extendedKeyCodeLabel"] %>] pour spec inactive',
			'extendedActive'      : 'Relâchez [<%= this["_meta"]["extendedKeyCodeLabel"] %>] pour spec actif',
			'extendedNotAvailable': 'Sans spécialisation remplacement disponible',
			'glyphMajor'          : 'Glyphes majeurs:',
			'glyphMinor'          : 'Glyphes mineurs:',
			'glyphMajorEmpty'     : 'Pas de glyphes majeurs utilisés',
			'glyphMinorEmpty'     : 'Pas de glyphes mineurs utilisés',
			'specActive'          : 'Spéc active',
			'specInactive'        : 'Spéc inactive'
		},
		'es_ES': {
			'loading'             : 'Cargando personaje...',
			'not-found'           : 'Personaje no encontrado',
			'extendedInactive'    : 'Mantenga pulsado [<%= this["_meta"]["extendedKeyCodeLabel"] %>] para spec inactivo',
			'extendedActive'      : 'Suelte [<%= this["_meta"]["extendedKeyCodeLabel"] %>] para spec activo',
			'extendedNotAvailable': 'No disponible especialización alternativo',
			'glyphMajor'          : 'Glifos sublimes:',
			'glyphMinor'          : 'Glifos menores:',
			'glyphMajorEmpty'     : 'No hay glifos sublimes',
			'glyphMinorEmpty'     : 'No hay glifos menores',
			'specActive'          : 'Active spec',
			'specInactive'        : 'Inactive spec'
		},
		'it_IT': {
			'loading'             : 'Caricamento personaggio...',
			'not-found'           : 'Personaggio non trovato',
			'extendedInactive'    : 'Tieni premuto [<%= this["_meta"]["extendedKeyCodeLabel"] %>] per visualizzare la specializzazione inattiva',
			'extendedActive'      : 'Rilascia [<%= this["_meta"]["extendedKeyCodeLabel"] %>] per visualizzare la specializzazione attiva',
			'extendedNotAvailable': 'Nessuna specializzazione alternativa disponibile',
			'glyphMajor'          : 'Glifi maggiori:',
			'glyphMinor'          : 'Glifi minori:',
			'glyphMajorEmpty'     : 'Nessun glifo maggiore utilizzato',
			'glyphMinorEmpty'     : 'Nessun glifo minore utilizzato',
			'specActive'          : 'Specializzazione attiva',
			'specInactive'        : 'Specializzazione inattiva'
		}
	}

});


DarkTip.registerModule('wow.item', {

	'triggers': {
		'explicit': {
			'match' : /wow\.item:(us|eu|kr|tw|cn)\.([^\(]+)\((en|de|fr|es|ru|pt|it|ko|zh)\)/i,
			'params': {
				'1': 'region',
				'2': 'itemid',
				'3': 'lang'
			}
		},
		'implicit': {
			'match' : /(?:https?:\/\/)?(us\.battle\.net|eu\.battle\.net|kr\.battle\.net|tw\.battle\.net|cn\.battle\.net|www\.battlenet\.com\.cn)\/wow\/(en|de|fr|es|ru|pt|it|ko|zh)\/item\/([^\/#]+).*/i,
			'params': {
				'1': 'host',
				'2': 'lang',
				'3': 'itemid'
			},
			'decorate': function(element, params, data) {

				var color_quality = DarkTip.map('wow.item', 'maps.quality.color', data['item']['quality']);
				var mediahost     = DarkTip.map('wow', 'maps.region.mediahost', params['region']);
				var icon_item     = 'http://' + mediahost + '/wow/icons/18/' + data['item']['icon'] + '.jpg';

				DarkTip.jq(element).css(DarkTip['data']['settings']['decorativeMode']['default']);
				DarkTip.jq(element).css({'color': color_quality});
				DarkTip.jq(element).prepend('<img src="' + icon_item + '" style="vertical-align: middle;" /> ');
			}
		}
	},

	'queries': {
		'item': {
			'required' : true,
			'condition': true,
			'call'     : '//{host}/api/wow/item/{itemid}?locale={locale}',
			'caching'  : (60 * 60 * 24 * 90)
		},
		'itemclass': {
			'required' : true,
			'condition': true,
			'call'     : '//{host}/api/wow/data/item/classes?locale={locale}',
			'caching'  : (60 * 60 * 24 * 90)
		},
		'itemset': {
			'required' : false,
			'condition': 'item.itemSet',
			'call'     : '//{host}/api/wow/item/set/{condition"]["id}?locale={locale}',
			'caching'  : (60 * 60 * 24 * 90)
		}
	},

	'patterns': {
		'money': /^([0-9]+)([0-9]{2})([0-9]{2})$|([0-9]{1,2})([0-9]{2})$|([0-9]{1,2})$/i
	},

	'maps': {
		'quality': {
			'color': {
				'0': '#9D9D9D',
				'1': '#FFFFFF',
				'2': '#1EFF00',
				'3': '#0070FF',
				'4': '#C600FF',
				'5': '#FF8000',
				'6': '#E6CC80',
				'7': '#E6CC80'
			}
		},
		'stats': {
			'primary': {
				'3': 'Agility',
				'4': 'Strength',
				'5': 'Intellect',
				'6': 'Spirit',
				'7': 'Stamina'
			},
			'secondary': {
				'13': 'Dodge rating',
				'14': 'Parry rating',
				'31': 'Hit rating',
				'32': 'Critical strike rating',
				'35': 'PvP resilence rating',
				'36': 'Haste rating',
				'37': 'Expertise rating',
				'38': 'Attack power',
				'46': 'Health regeneration',
				'45': 'Spell power',
				'47': 'Spell penetration',
				'49': 'Mastery rating',
				'57': 'PvP power rating'
			}
		}
	},

	'prepareData': function(state) {

		if(Object.keys(state['data']).length === 0)
		{
			return false;
		}

		if(
			(typeof state['data']['item'] !== 'undefined') &&
			(typeof state['data']['item']['itemClass'] !== 'undefined') &&
			(typeof state['data']['item']['itemSubClass'] !== 'undefined') &&
			(typeof state['data']['itemclass'] !== 'undefined') &&
			(typeof state['data']['itemclass']['classes'] !== 'undefined')
		)
		{
			for(var i = 0; i < state['data']['itemclass']['classes'].length; i++)
			{
				var citemclass = state['data']['itemclass']['classes'][i];

				if(citemclass['class'] == state['data']['item']['itemClass'])
				{
					for (var j = 0; j < citemclass['subclasses'].length; j++)
					{
						var citemsubclass = citemclass['subclasses'][j];

						if(citemsubclass['subclass'] == state['data']['item']['itemSubClass'])
						{
							state['data']['item']['itemClassLoc'] = citemsubclass['name'];
						}
					}
				}
			}
		}

		return state['data'];
	},

	'getParams': {
		'explicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.item', 'triggers.explicit.params')));
			params['host']   = DarkTip.map('wow', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		},
		'implicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.item', 'triggers.implicit.params')));
			params['region'] = DarkTip.map('wow', 'maps.host.region', params['host']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		}
	},

	'layout': {
		'width': {
			'core': 425
		}
	},

	'templates': {
		'tools': {
			'_isStatPrimary': function(statid) {
				var result = DarkTip.map(this['_meta']['module'], 'maps.stats.primary', statid);
				return (result !== undefined);
			},
			'_isStatSecondary': function(statid) {
				var result = DarkTip.map(this['_meta']['module'], 'maps.stats.secondary', statid);
				return (result !== undefined);
			},
			'_renderCoins': function(total) {
				var temp   = total.toString();
				var result = temp.match(DarkTip.read(this['_meta']['module'], 'patterns.money'));
				var split  = {
					'gold'  : -1,
					'silver': -1,
					'copper': 0
				};
				if(result)
				{
					if(result[3] !== undefined)
					{
						split = {
							'gold'  : parseInt(result[1]),
							'silver': parseInt(result[2]),
							'copper': parseInt(result[3])
						};
					}
					else if(result[5] !== undefined)
					{
						split = {
							'gold'  : -1,
							'silver': parseInt(result[4]),
							'copper': parseInt(result[5])
						};
					}
					else
					{
						split = {
							'gold'  : -1,
							'silver': -1,
							'copper': parseInt(result[6])
						};
					}
				}
				return DarkTip.jq.jqote(
					DarkTip.read(this['_meta']['module'], 'templates.fragments.coins'),
					DarkTip.jq.extend(true, {}, DarkTip.getTemplateTools(this['_meta']['module'], this['_meta']['locale']), split)
				);
			}
		},
		'core': (
			'<div class="tooltip-item">' +
				'<img class="darktip-icon" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/56/<% if(this["item"]["icon"]) { %><%= this["item"]["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg" />' +
				 // --- START simple mode -----------------------------------
				'<div class="darktip-col-70 darktip-only-s">' +
					'<div class="darktip-headline-right"><%= this["item"]["itemLevel"] %></div>' +
					'<div class="darktip-row darktip-headline darktip-cquality-<%= this["item"]["quality"] %>"><%= this["item"]["name"] %></div>' +
					'<% if(this["item"]["heroic"]) { %><div class="darktip-row"><%= this._loc("heroic") %></div><% } %>' +
					'<% if(this["item"]["boundZone"]) { %><div class="darktip-row"><%= this["item"]["boundZone"]["name"] %></div><% } %>' +
					'<% if(this["item"]["itemBind"]) { %>' +
						'<div class="darktip-row">' +
							'<% if(this["item"]["quality"] == 7) { %>' +
								'<%= this._loc("itemBind.4") %>' +
							'<% } else { %>' +
								'<%= this._loc("itemBind." + this["item"]["itemBind"]) %>' +
							'<% } %>' +
						'</div>' +
					'<% } %>' +
					'<% if(this["item"]["maxCount"]) { %><div class="darktip-row"><%= this._loc("maxCount") %></div><% } %>' +
					'<div class="darktip-row classification">' +
						'<% if(this["item"]["containerSlots"]) { %>' +
							'<%= this._loc("containerSlots") %>' +
						'<% } else { %>' +
							'<% if(this["item"]["equippable"]) { %>' +
								'<%= this._loc("inventoryType." + this["item"]["inventoryType"]) %>' +
								'<div class="darktip-pos-right"><%= this["item"]["itemClassLoc"] %></div>' +
							'<% } else { %>' +
								'<%= this["item"]["itemClassLoc"] %>' +
							'<% } %>' +
						'<% } %>' +
					'</div>' +
					'<% if(this["item"]["baseArmor"]) { %><div class="darktip-row"><%= this._loc("baseArmor") %></div><% } %>' +
					'<% if(this["item"]["weaponInfo"]) { %>' +
						'<div>' +
							'<div class="darktip-row"><%= this._loc("damage", this["item"]["weaponInfo"]["damage"]) %></div>' +
							'<div class="darktip-pos-right"><%= this._loc("weaponSpeed", this["item"]["weaponInfo"]) %></div>' +
							'<div class="darktip-row"><%= this._loc("dps", this["item"]["weaponInfo"]) %></div>' +
						'</div>' +
					'<% } %>' +
					'<%= this._subLoop("templates.fragments.stat.primary", this["item"]["bonusStats"]) %>' +
					'<%= this._subLoop("templates.fragments.stat.secondary", this["item"]["bonusStats"]) %>' +
					'<% if(this["item"]["gemInfo"]) { %><div class="darktip-row"><%= this["item"]["gemInfo"]["bonus"]["name"] %></div><% } %>' +
					'<% if(this["item"]["socketInfo"]) { %><div class="darktip-block darktip-sockets"><%= this._subLoop("templates.fragments.socket", this["item"]["socketInfo"]["sockets"]) %></div><% if(this["item"]["socketInfo"]["socketBonus"]) { %><div class="darktip-row darktip-highlight-reduced"><%= this._loc("socketBonus") %></div><% } %><% } %>' +
					'<% if(this["item"]["allowableClasses"]) { %><div class="darktip-row"><%= this._loc("allowableClasses") %></div><% } %>' +
					'<% if(this["item"]["allowableRaces"]) { %><div class="darktip-row"><%= this._loc("allowableRaces") %></div><% } %>' +
					'<% if(this["item"]["requiredLevel"] > 1) { %><div class="darktip-row"><%= this._loc("requiredLevel") %></div><% } %>' +
					'<% if(this["item"]["requiredSkill"]) { %><div class="darktip-row"><%= this._loc("requiredSkill") %></div><% } %>' +
					'<% if(this["item"]["requiredAbility"]) { %><div class="darktip-row"><%= this._loc("requiredAbility") %></div><% } %>' +
					'<% if(this["item"]["minFactionId"]) { %><div class="darktip-row"><%= this._loc("minFactionId") %></div><% } %>' +
					'<%= this._subLoop("templates.fragments.stat.spell", this["item"]["itemSpells"]) %>' +
					'<% if(this["item"]["description"]) { %><div class="darktip-row darktip-highlight-medium">&quot;<%= this["item"]["description"] %>&quot;</div><% } %>' +
					'<% if(this["item"]["itemSet"]) { %><div class="darktip-row darktip-padded-above">' +
						'<div class="darktip-row darktip-highlight-medium"><%= this["item"]["itemSet"]["name"] %></div>' +
						'<div class="darktip-row darktip-padded-above"><%= this._subLoop("templates.fragments.stat.setBonus", this["item"]["itemSet"]["setBonuses"]) %></div>' +
					'</div><% } %>' +
					'<% if(this["_meta"]["extendedActive"]) { %><div class="darktip-row darktip-info-meta"><%= this._loc("extendedInactive") %></div><% } %>' +
				'</div>' +
				// --- END simple mode -------------------------------------
				// --- START extended mode ---------------------------------
				'<% if(this["_meta"]["extendedActive"]) { %>' +
					'<div class="darktip-col-70 darktip-only-x">' +
						'<div class="darktip-headline-right"><%= this["item"]["itemLevel"] %></div>' +
						'<div class="darktip-row darktip-headline darktip-cquality-<%= this["item"]["quality"] %>"><%= this["item"]["name"] %></div>' +
						'<div class="darktip-row darktip-highlight-strong"><%= this._loc("itemId") %></div>' +
						'<% if(this["item"]["maxDurability"]) { %><div class="darktip-row"><%= this._loc("maxDurability") %></div><% } %>' +
						'<% if(this["item"]["isAuctionable"]) { %><div class="darktip-row"><%= this._loc("auctionable") %></div><% } %>' +
						'<div class="darktip-row"><%= this._loc("disenchantable") %></div>' +
						'<% if(this["item"]["stackable"] > 1) { %><div class="darktip-row"><%= this._loc("stackable") %></div><% } %>' +
						'<div class="darktip-row"><%= this._loc("sellPrice") %></div>' +
						'<div class="darktip-row darktip-info-meta"><%= this._loc("extendedActive") %></div>' +
					'</div>' +
				'<% } %>' +
				// --- END extended mode -----------------------------------
			'</div>'
		),
		'404': (
			'<div class="tooltip-item darktip-tooltip-404">' +
				'<div class="darktip-title">404<span class="darktip-sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.item") %></span> <span class="value"><%= this["itemid"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
			'</div>'
		),
		'fragments': {
			'allowableClass': '<span class="darktip-cclass-<%= this["_value"] %>"><%= this._loc("characterClass." + this["_value"] + ".0")%></span>',
			'allowableRace' : '<span class="crace-<%= this["_value"] %>"><%= this._loc("characterRace." + this["_value"] + ".0")%></span>',
			'coins'         : (
				'<% if(this["gold"] > -1) { %><span class="darktip-icon-gold"><%= this["gold"] %></span><% } %>' +
				'<% if(this["silver"] > -1) { %><span class="darktip-icon-silver"><%= this["silver"] %></span><% } %>' +
				'<% if(this["copper"]) { %><span class="darktip-icon-copper"><%= this["copper"] %></span><% } else { %>' +
				'<span class="darktip-icon-copper">0</span><% } %>'
			),
			'stat'          : {
				'primary'  : (
					'<% if(this._isStatPrimary(this["stat"])) { %>' +
						'<div class="darktip-row">' +
							'<% if(this["amount"] >= 0) { %>+<% } %><%= this["amount"] %> <%= this._loc("itemStat." + this["stat"]) %>' +
						'</div>' +
					'<% }'
				),
				'secondary': (
					'<% if(this._isStatSecondary(this["stat"])) { %>' +
						'<div class="darktip-row darktip-highlight-custom">' +
							'<% if(this["amount"] >= 0) { %>+<% } %><%= this["amount"] %> <%= this._loc("itemStat." + this["stat"]) %>' +
						'</div>' +
					'<% }'
				),
				'spell'    : (
					'<% if(this["spell"]["description"]) { %>' +
						'<div class="darktip-row darktip-highlight-custom">' +
							'<% if(this["trigger"] == "ON_EQUIP") { %>' +
								'<%= this._loc("itemSpell.onEquip") %>' +
							'<% } else if(this["trigger"] == "ON_USE") { %>' +
								'<%= this._loc("itemSpell.onUse") %>' +
							'<% } else if(this["trigger"] == "ON_PROC") { %>' +
								'<%= this._loc("itemSpell.onProc") %>' +
							'<% } else { %>' +
								'<%= this._loc("itemSpell.unknown") %>' +
							'<% } %>' +
						'</div>' +
					'<% } %>'
				),
				'setBonus' : '<div class="darktip-row <% if(this["active"]) { %>darktip-highlight-custom<% } else { %>darktip-highlight-reduced<% } %>"><%= this._loc("setBonus") %></div>'
			},
			'socket': (
				'<div class="darktip-row darktip-socket darktip-highlight-reduced">' +
					'<span class="darktip-icon-socket darktip-socket-<%= this["type"] %>">' +
						'<span class="darktip-empty"></span><span class="darktip-frame"></span>' +
					'</span>' +
					'<%= this._loc("itemSocket." + this["type"]) %>' +
				'</div>'
			)
		}
	},

	'i18n': {
		'en_US': {
			'loading'          : 'Loading item...',
			'not-found'        : 'Item not found',
			'itemId'           : 'Item ID: <%= this["item"]["id"] %>',
			'heroic'           : 'Heroic',
			'maxCount'         : 'Unique<% if(this["item"]["maxCount"] > 1) { %> (<%= this["item"]["maxCount"] %>)<% } %>',
			'containerSlots'   : '<%= this["item"]["containerSlots"] %> Slot <%= this["item"]["itemClassLoc"] %>',
			'damage'           : '<%= this["min"] %> - <%= this["max"] %> Damage',
			'weaponSpeed'      : 'Speed <%= this["weaponSpeed"] %>',
			'dps'              : '(<%= this["dps"].toFixed(2) %> damage per second)',
			'baseArmor'        : '<%= this["item"]["baseArmor"] %> Armor',
			'maxDurability'    : 'Durability <%= this["item"]["maxDurability"] %> / <%= this["item"]["maxDurability"] %>',
			'requiredLevel'    : 'Requires Level <%= this["item"]["requiredLevel"] %>',
			'requiredSkill'    : 'Requires <%= this._loc("characterSkill." + this["item"]["requiredSkill"]) %> (<%= this["item"]["requiredSkillRank"] %>)',
			'requiredAbility'  : 'Requires <%= this["item"]["requiredAbility"]["name"] %>',
			'minFactionId'     : 'Requires Faction ID <%= this["item"]["minFactionId"] %> - <%= this._loc("reputationLevel." + this["item"]["minReputation"]) %>',
			'allowableClasses' : 'Classes: <%= this._subLoop("templates.fragments.allowableClass", this["item"]["allowableClasses"], ", ") %>',
			'allowableRaces'   : 'Races: <%= this._subLoop("templates.fragments.allowableRace", this["item"]["allowableRaces"], ", ") %>',
			'itemStat'         : {
				'3' : 'Agility',
				'4' : 'Strength',
				'5' : 'Intellect',
				'6' : 'Spirit',
				'7' : 'Stamina',
				'25': 'Arcane Resistance',
				'26': 'Fire Resistance',
				'27': 'Nature Resistance',
				'28': 'Frost Resistance',
				'29': 'Shadow Resistance',
				'30': 'Holy Resistance',
				'13': 'Dodge',
				'14': 'Parry',
				'31': 'Hit',
				'32': 'Critical Strike',
				'35': 'Pvp Resilience',
				'36': 'Haste',
				'37': 'Expertise',
				'38': 'Attack Power',
				'46': 'Health Regeneration',
				'45': 'Spell Power',
				'49': 'Mastery',
				'50': 'Armor',
				'57': 'Pvp Power'
			},
			'itemSpell'        : {
				'onEquip': 'Equip: <%= this["spell"]["description"] %>',
				'onUse'  : 'Use: <%= this["spell"]["description"] %>',
				'onProc' : 'Chance on hit: <%= this["spell"]["description"] %>',
				'unknown': '<%= this["spell"]["description"] %>'
			},
			'setBonus'         : '(<%= this["threshold"] %>) Set: <%= this["description"] %>',
			'sellPrice'        : 'Sell Price: <%= this._renderCoins(this["item"]["sellPrice"]) %>',
			'stackable'        : 'Stackable (<%= this["item"]["stackable"] %>)',
			'disenchantable'   : '<% if(this["item"]["disenchantingSkillRank"]) { %>Can be disenchanted (<%= this["item"]["disenchantingSkillRank"] %>)<% } else { %>Cannot be disenchanted<% } %>',
			'auctionable'      : 'Can be auctioned',
			'itemBind'         : { '1': 'Binds when picked up', '2': 'Binds when equipped', '3': 'Binds when used', '4': 'Binds to Battle.net account' },
			'itemSocket'       : {
				'BLUE'     : 'Blue Socket',
				'RED'      : 'Red Socket',
				'YELLOW'   : 'Yellow Socket',
				'META'     : 'Meta Socket',
				'ORANGE'   : 'Orange Socket',
				'PURPLE'   : 'Purple Socket',
				'GREEN'    : 'Green Socket',
				'PRISMATIC': 'Prismatic Socket',
				'HYDRAULIC': 'Hydraulic Socket',
				'COGWHEEL' : 'Cogwheel Socket'
			},
			'socketBonus'      : 'Socket Bonus: <%= this["item"]["socketInfo"]["socketBonus"] %>',
			'reputationLevel'  : { '0': 'Hated', '1': 'Hostile', '2': 'Unfriendly', '3': 'Neutral', '4': 'Friendly', '5': 'Honored', '6': 'Revered', '7': 'Exalted' },
			'inventoryType'   : { '1': 'Head', '2': 'Neck', '3': 'Shoulder', '4': 'Shirt', '5': 'Chest', '6': 'Waist', '7': 'Legs', '8': 'Feet', '9': 'Wrist', '10': 'Hands', '11': 'Finger', '12': 'Trinket', '13': 'One-Hand', '15': 'Ranged' /* Bow */, '16': 'Back', '17': 'Two-Hand', '18': 'Bag', '20': 'Chest', '21': 'Main-hand', '22': 'Off-hand', '23': 'Held in off-hand', '25': 'Ranged' /* Thrown */, '26': 'Ranged' /* Gun, Crossbow, Wand */ }
		},
		'de_DE': {
			'loading'          : 'Lade Gegenstand...',
			'not-found'        : 'Gegenstand nicht gefunden',
			'itemId'           : 'Gegenstands ID: <%= this["item"]["id"] %>',
			'heroic'           : 'Heroisch',
			'maxCount'         : 'Einzigartig<% if(this["item"]["maxCount"] > 1) { %> (<%= this["item"]["maxCount"] %>)<% } %>',
			'containerSlots'   : '<%= this["item"]["containerSlots"] %> Platz <%= this["item"]["itemClassLoc"] %>',
			'damage'           : '<%= this["min"] %> - <%= this["max"] %> Schaden',
			'weaponSpeed'      : 'Geschwindigkeit <%= this["weaponSpeed"] %>',
			'dps'              : '(<%= this["dps"].toFixed(2) %> Schaden pro Sekunde)',
			'baseArmor'        : '<%= this["item"]["baseArmor"] %> R&uuml;stung',
			'maxDurability'    : 'Haltbarkeit <%= this["item"]["maxDurability"] %> / <%= this["item"]["maxDurability"] %>',
			'requiredLevel'    : 'Erfordert Stufe <%= this["item"]["requiredLevel"] %>',
			'requiredSkill'    : 'Erfordert <%= this._loc("characterSkill." + this["item"]["requiredSkill"]) %> (<%= this["item"]["requiredSkillRank"] %>)',
			'requiredAbility'  : 'Erfordert <%= this["item"]["requiredAbility"]["name"] %>',
			'minFactionId'     : 'Erfordert Fraktion ID <%= this["item"]["minFactionId"] %> - <%= this._loc("reputationLevel." + this["item"]["minReputation"]) %>',
			'allowableClasses' : 'Klassen: <%= this._subLoop("templates.fragments.allowableClass", this["item"]["allowableClasses"], ", ") %>',
			'allowableRaces'   : 'Rassen: <%= this._subLoop("templates.fragments.allowableRace", this["item"]["allowableRaces"], ", ") %>',
			'itemStat'         : {
				'3' : 'Beweglichkeit',
				'4' : 'St&auml;rke',
				'5' : 'Intelligenz',
				'6' : 'Willenskraft',
				'7' : 'Ausdauer',
				'25': 'Arkanwiderstand',
				'26': 'Feuerwiderstand',
				'27': 'Naturwiderstand',
				'28': 'Frostwiderstand',
				'29': 'Schattenwiderstand',
				'30': 'Heiligwiderstand',
				'13': 'Ausweichwen',
				'14': 'Parrieren',
				'31': 'Treffer',
				'32': 'Kritische Treffer',
				'35': 'PvP Abh&auml;rtung',
				'36': 'Tempo',
				'37': 'Waffenkunde',
				'38': 'Angriffskraft',
				'46': 'Gesundheitsregenartion',
				'45': 'Zaubermacht',
				'49': 'Meisterschaftswertung',
				'50': 'R&uml;stung',
				'57': 'PvP Macht'
			},
			'itemSpell'        : {
				'onEquip': 'Anlegen: <%= this["spell"]["description"] %>',
				'onUse'  : 'Benutzen: <%= this["spell"]["description"] %>',
				'onProc' : 'Trefferchance: <%= this["spell"]["description"] %>',
				'unknown': '<%= this["spell"]["description"] %>'
			},
			'setBonus'         : '(<%= this["threshold"] %>) Set: <%= this["description"] %>',
			'sellPrice'        : 'Verkaufspreis: <%= this._renderCoins(this["item"]["sellPrice"]) %>',
			'stackable'        : 'Stapelbar (<%= this["item"]["stackable"] %>)',
			'disenchantable'   : '<% if(this["item"]["disenchantingSkillRank"]) { %>Kann entzaubert werden (<%= this["item"]["disenchantingSkillRank"] %>)<% } else { %>Kann nicht entzaubert werden<% } %>',
			'auctionable'      : 'Kann versteigert werden',
			'itemBind'         : { '1': 'Wird beim Aufheben gebunden', '2': 'Wird beim Anlegen gebunden', '3': 'Wird bei Benutzung gebunden', '4': 'Wird an Battle.net-Account gebunden' },
			'itemSocket'       : {
				'BLUE'     : 'Blauer Sockel',
				'RED'      : 'Roter Sockel',
				'YELLOW'   : 'Gelber Sockel',
				'META'     : 'Meta Sockel',
				'ORANGE'   : 'Orangener Sockel',
				'PURPLE'   : 'Lila Sockel',
				'GREEN'    : 'Gr&uuml;ner Sockel',
				'PRISMATIC': 'Prismatischer Sockel',
				'HYDRAULIC': 'Hydraulischer Sockel',
				'COGWHEEL' : 'Zahnrad Sockel'
			},
			'socketBonus'      : 'Sockelbonus: <%= this["item"]["socketInfo"]["socketBonus"] %>',
			'reputationLevel'  : { '0': 'Haßerf&szlig;uuml;llt', '1': 'Feindselig', '2': 'Unfreundlich', '3': 'Neutral', '4': 'Freundlich', '5': 'Wohlwollend', '6': 'Respektvoll', '7': 'Ehrf&uuml;rchtig' },
			'inventoryType'    : { '1': 'Kopf', '2': 'Nacken', '3': 'Schulter', '4': 'Hemd', '5': 'Brust', '6': 'Taille', '7': 'Beine', '8': 'F&uuml;&szlig;e', '9': 'Handgelenke', '10': 'H&auml;nde', '11': 'Finger', '12': 'Schmuckst&uuml;ck', '13': 'Einh&auml;ndig', '15': 'Distanz' /* Bogen */, '16': 'R&uuml;cken', '17': 'Zweih&auml;ndig', '18': 'Tasche', '20': 'Brust', '21': 'Waffenhand', '22': 'Schildhand', '23': 'In Schildhand gef&uuml;hrt', '25': 'Distanz' /* Wurfwaffe */, '26': 'Distanz' /* Gewehr, Armbrust, Zauberstab */ }
		},
		'fr_FR': {
			'loading'          : 'Chargement Objets...',
			'not-found'        : 'Objet introuvable',
			'itemId'           : 'ID Objets: <%= this["item"]["id"] %>',
			'heroic'           : 'H&eacute;roïc',
			'maxCount'         : 'Unique<% if(this["item"]["maxCount"] > 1) { %> (<%= this["item"]["maxCount"] %>)<% } %>',
			'containerSlots'   : '<%= this["item"]["containerSlots"] %> Slot <%= this["item"]["itemClassLoc"] %>',
			'damage'           : '<%= this["min"] %> - <%= this["max"] %> D&eacute;g&acirc;ts',
			'weaponSpeed'      : 'Vitesse <%= this["weaponSpeed"] %>',
			'dps'              : '(<%= this["dps"].toFixed(2) %> domage par second)',
			'baseArmor'        : '<%= this["item"]["baseArmor"] %> Armure',
			'maxDurability'    : 'Durabilit&eacute; <%= this["item"]["maxDurability"] %> / <%= this["item"]["maxDurability"] %>',
			'requiredLevel'    : 'Niveau <%= this["item"]["requiredLevel"] %> requis',
			'requiredSkill'    : 'Requiert <%= this._loc("characterSkill." + this["item"]["requiredSkill"]) %> (<%= this["item"]["requiredSkillRank"] %>)',
			'requiredAbility'  : 'Requiert <%= this["item"]["requiredAbility"]["name"] %>',
			'minFactionId'     : 'Requiert Faction ID <%= this["item"]["minFactionId"] %> - <%= this._loc("reputationLevel." + this["item"]["minReputation"]) %>',
			'allowableClasses' : 'Classes: <%= this._subLoop("templates.fragments.allowableClass", this["item"]["allowableClasses"], ", ") %>',
			'allowableRaces'   : 'Races: <%= this._subLoop("templates.fragments.allowableRace", this["item"]["allowableRaces"], ", ") %>',
			'itemStat'         : {
				'3' : 'Agilit&eacute;',
				'4' : 'Force',
				'5' : 'Intelligence',
				'6' : 'Esprit',
				'7' : 'Endurance',
				'25': 'Arcane Resistance',
				'26': 'Fire Resistance',
				'27': 'Nature Resistance',
				'28': 'Frost Resistance',
				'29': 'Shadow Resistance',
				'30': 'Holy Resistance',
				'13': 'Score d\'esquive',
				'14': 'Score de parade',
				'31': 'Score de toucher',
				'32': 'Score de coup critique',
				'35': 'Score de pvp resilience',
				'36': 'Score de h&acirc;te',
				'37': 'Score d\'expertise',
				'38': 'Puissance d\'attaque',
				'46': 'R&eacute;g&eacute;n&eacute;ration de vie',
				'45': 'Puissance des sorts',
				'49': 'Score maîtrise',
				'50': 'Armor',
				'57': 'Score de pvp power'
			},
			'itemSpell'        : {
				'onEquip': 'Equip&eacute; : <%= this["spell"]["description"] %>',
				'onUse'  : 'Utilis&eacute; : <%= this["spell"]["description"] %>',
				'onProc' : 'Chances quand vous touchez : <%= this["spell"]["description"] %>',
				'unknown': '<%= this["spell"]["description"] %>'
			},
			'setBonus'         : '(<%= this["threshold"] %>) Ensemble : <%= this["description"] %>',
			'sellPrice'        : 'Prix de vente: <%= this._renderCoins(this["item"]["sellPrice"]) %>',
			'stackable'        : 'Empilable (<%= this["item"]["stackable"] %>)',
			'disenchantable'   : '<% if(this["item"]["disenchantingSkillRank"]) { %>Peut &ecirc;tre d&eacute;senchant&eacute; (<%= this["item"]["disenchantingSkillRank"] %>)<% } else { %>Ne peut pas &ecirc;tre d&eacute;senchant&eacute;<% } %>',
			'auctionable'      : 'Peut &ecirc;tre vendu',
			'itemBind'         : { '1': 'Li&eacute; quand ramass&eacute;', '2': 'Li&eacute; quand &eacute;quip&eacute;', '3': 'Li&eacute; quand utilis&eacute;', '4': 'Li&eacute; au compte Battle.net' },
			'itemSocket'       : {
				'BLUE'     : 'Ch&acirc;sse bleue',
				'RED'      : 'Ch&acirc;sse rouge',
				'YELLOW'   : 'Ch&acirc;sse jaune',
				'META'     : 'M&eacute;ta-ch&acirc;sse',
				'ORANGE'   : 'Ch&acirc;sse orange',
				'PURPLE'   : 'Ch&acirc;sse Violette',
				'GREEN'    : 'Ch&acirc;sse verte',
				'PRISMATIC': 'Ch&acirc;sse prismatique',
				'HYDRAULIC': 'Ch&acirc;sse Hydraulique',
				'COGWHEEL' : 'Chambre de roue dent&eacute;e'
			},
			'socketBonus'      : 'Bonus de sertissage: <%= this["item"]["socketInfo"]["socketBonus"] %>',
			'reputationLevel'  : { '0': 'Haï', '1': 'Hostile', '2': 'Inamical', '3': 'Neutre', '4': 'Amical', '5': 'Honor&eacute;', '6': 'R&eacute;v&eacute;r&eacute;', '7': 'Exalt&eacute;' },
			'inventoryType'   : { '1': 'T&ecirc;te', '2': 'Cou', '3': 'Epaule', '4': 'Chemise', '5': 'Torse', '6': 'Taille', '7': 'Jambes', '8': 'Pieds', '9': 'Poignets', '10': 'Mains', '11': 'Doigt', '12': 'Bijou', '13': 'A une mains', '15': 'Ranged' /* Bow */, '16': 'Back', '17': 'A deux mains', '18': 'Sac', '20': 'Torse', '21': 'Main-hand', '22': 'Off-hand', '23': 'Held in off-hand', '25': 'Ranged' /* Thrown */, '26': 'Ranged' /* Gun, Crossbow, Wand */ }
		},
		'es_ES': {
			'loading'          : 'Cargando objeto...',
			'not-found'        : 'Objeto no encontrado',
			'itemId'           : 'ID de Objeto: <%= this["item"]["id"] %>',
			'heroic'           : 'Heroico',
			'maxCount'         : '&Uacute;nico<% if(this["item"]["maxCount"] > 1) { %> (<%= this["item"]["maxCount"] %>)<% } %>',
			'containerSlots'   : '<%= this["item"]["itemClassLoc"] %> con <%= this["item"]["containerSlots"] %> Casillas',
			'damage'           : '<%= this["min"] %> - <%= this["max"] %> Da&ntilde;o',
			'weaponSpeed'      : 'Velocidad <%= this["weaponSpeed"] %>',
			'dps'              : '(<%= this["dps"].toFixed(2) %> da&ntilde;o por segundo)',
			'baseArmor'        : '<%= this["item"]["baseArmor"] %> de armadura',
			'maxDurability'    : 'Durabilidad <%= this["item"]["maxDurability"] %> / <%= this["item"]["maxDurability"] %>',
			'requiredLevel'    : 'Requiere nivel <%= this["item"]["requiredLevel"] %>',
			'requiredSkill'    : 'Requiere <%= this._loc("characterSkill." + this["item"]["requiredSkill"]) %> (<%= this["item"]["requiredSkillRank"] %>)',
			'requiredAbility'  : 'Requiere <%= this["item"]["requiredAbility"]["name"] %>',
			'minFactionId'     : 'Requiere facci&oacute;n con ID <%= this["item"]["minFactionId"] %> - <%= this._loc("reputationLevel." + this["item"]["minReputation"]) %>',
			'allowableClasses' : 'Clases: <%= this._subLoop("templates.fragments.allowableClass", this["item"]["allowableClasses"], ", ") %>',
			'allowableRaces'   : 'Razas: <%= this._subLoop("templates.fragments.allowableRace", this["item"]["allowableRaces"], ", ") %>',
			'itemStat'         : {
				'3' : 'de agilidad',
				'4' : 'de fuerza',
				'5' : 'de intelecto',
				'6' : 'de esp&iacute;ritu',
				'7' : 'de aguante',
				'25': 'Arcane Resistance',
				'26': 'Fire Resistance',
				'27': 'Nature Resistance',
				'28': 'Frost Resistance',
				'29': 'Shadow Resistance',
				'30': 'Holy Resistance',
				'13': 'de esquivar',
				'14': 'de parada',
				'31': 'de golpe',
				'32': 'de golpe cr&iacute;tico',
				'35': 'de pvp temple',
				'36': 'de celeridad',
				'37': 'de pericia',
				'38': 'poder de ataque',
				'46': 'regeneraci&oacute;n de salud',
				'45': 'poder con hechizos',
				'49': '&iacute;ndice de maestr&iacute;a',
				'50': 'Armor',
				'57': 'de pvp power'
			},
			'itemSpell'        : {
				'onEquip': 'Equipar: <%= this["spell"]["description"] %>',
				'onUse'  : 'Uso: <%= this["spell"]["description"] %>',
				'onProc' : 'Probabilidad al acertar: <%= this["spell"]["description"] %>',
				'unknown': '<%= this["spell"]["description"] %>'
			},
			'setBonus'         : '(<%= this["threshold"] %>) Conjunto: <%= this["description"] %>',
			'sellPrice'        : 'Precio de venta: <%= this._renderCoins(this["item"]["sellPrice"]) %>',
			'stackable'        : 'Se puede apilar (<%= this["item"]["stackable"] %>)',
			'disenchantable'   : '<% if(this["item"]["disenchantingSkillRank"]) { %>Se puede desencantar (<%= this["item"]["disenchantingSkillRank"] %>)<% } else { %>No se puede desencantar<% } %>',
			'auctionable'      : 'Se puede subastar',
			'itemBind'         : { '1': 'Se liga al recogerlo', '2': 'Se liga al equiparlo', '3': 'Se liga al usarlo', '4': 'Se liga a la cuenta de Battle.net' },
			'itemSocket'       : {
				'BLUE'     : 'Ranura azul',
				'RED'      : 'Ranura roja',
				'YELLOW'   : 'Ranura amarilla',
				'META'     : 'Ranura meta',
				'ORANGE'   : 'Ranura naranja',
				'PURPLE'   : 'Ranura púrpura',
				'GREEN'    : 'Ranura verde',
				'PRISMATIC': 'Ranura prismática',
				'HYDRAULIC': 'Ranura hidráulica',
				'COGWHEEL' : 'Ranura de engranaje'
			},
			'socketBonus'      : 'Bonus ranura: <%= this["item"]["socketInfo"]["socketBonus"] %>',
			'reputationLevel'  : { '0': 'Odiado', '1': 'Hostil', '2': 'Adverso', '3': 'Neutral', '4': 'Amistoso', '5': 'Honorable', '6': 'Venerado', '7': 'Exaltado' },
			'inventoryType'    : { '1': 'Cabeza', '2': 'Cuello', '3': 'Hombros', '4': 'Camisa', '5': 'Pecho', '6': 'Cintura', '7': 'Piernas', '8': 'Pies', '9': 'Mu&ntilde;equeras', '10': 'Manos', '11': 'Dedo', '12': 'Abalorio', '13': 'Una mano', '15': 'A distancia' /* Bow */, '16': 'Espalda', '17': 'Dos manos', '18': 'Bolsa', '20': 'Pecho', '21': 'Mano derecha', '22': 'Mano izquierda', '23': 'Sostener en mano izquierda', '25': 'Arrojadizas' /* Thrown */, '26': 'Arma a distancia' /* Gun,Crossbow,Wand */ }
		},
		'it_IT': {
			'loading'          : 'Carico oggetto...',
			'not-found'        : 'Oggetto non trovato',
			'itemId'           : 'ID Oggetto: <%= this["item"]["id"] %>',
			'heroic'           : 'Eeroico',
			'maxCount'         : 'Unico equipaggiabile <% if(this["item"]["maxCount"] > 1) { %> (<%= this["item"]["maxCount"] %>)<% } %>',
			'containerSlots'   : '<%= this["item"]["containerSlots"] %> Scomparto <%= this["item"]["itemClassLoc"] %>',
			'damage'           : '<%= this["min"] %> - <%= this["max"] %> Danni',
			'weaponSpeed'      : 'Velocità <%= this["weaponSpeed"] %>',
			'dps'              : '(<%= this["dps"].toFixed(2) %> danni al secondo)',
			'baseArmor'        : '<%= this["item"]["baseArmor"] %> Armatura',
			'maxDurability'    : 'Integrità <%= this["item"]["maxDurability"] %> / <%= this["item"]["maxDurability"] %>',
			'requiredLevel'    : 'Richiede il livello <%= this["item"]["requiredLevel"] %>',
			'requiredSkill'    : 'Richiede <%= this._loc("characterSkill." + this["item"]["requiredSkill"]) %> (<%= this["item"]["requiredSkillRank"] %>)',
			'requiredAbility'  : 'Richiede <%= this["item"]["requiredAbility"]["name"] %>',
			'minFactionId'     : 'Richiede la Fazione <%= this["item"]["minFactionId"] %> - <%= this._loc("reputationLevel." + this["item"]["minReputation"]) %>',
			'allowableClasses' : 'Classi: <%= this._subLoop("templates.fragments.allowableClass", this["item"]["allowableClasses"], ", ") %>',
			'allowableRaces'   : 'Razze: <%= this._subLoop("templates.fragments.allowableRace", this["item"]["allowableRaces"], ", ") %>',
			'itemStat'         : {
				'3' : 'Agilià',
				'4' : 'Forza',
				'5' : 'Intelletto',
				'6' : 'Spirito',
				'7' : 'Tempra',
				'25': 'Resistenza all\'Arcano',
				'26': 'Resistenza al Fuoco',
				'27': 'Resistenza alla Natura',
				'28': 'Resistenza al gelo',
				'29': 'Resistenza all\'Ombra',
				'30': 'Resistenza al Sacro',
				'13': 'Schivata',
				'14': 'Parata',
				'31': 'Impatto',
				'32': 'Indice di Critico',
				'35': 'Resilienza PvP',
				'36': 'Celerità',
				'37': 'Perizia',
				'38': 'Indice di Attacco',
				'46': 'Rigenerazione Salute',
				'45': 'Potenza Magica',
				'49': 'Maestria',
				'50': 'Armatura',
				'57': 'Potenza PvP'
			},
			'itemSpell'        : {
				'onEquip': 'Equipaggia: <%= this["spell"]["description"] %>',
				'onUse'  : 'Usa: <%= this["spell"]["description"] %>',
				'onProc' : 'Probabilità all\'impatto: <%= this["spell"]["description"] %>',
				'unknown': '<%= this["spell"]["description"] %>'
			},
			'setBonus'         : '(<%= this["threshold"] %>) Completo: <%= this["description"] %>',
			'sellPrice'        : 'Costo: <%= this._renderCoins(this["item"]["sellPrice"]) %>',
			'stackable'        : 'Impilabile (<%= this["item"]["stackable"] %>)',
			'disenchantable'   : '<% if(this["item"]["disenchantingSkillRank"]) { %>Può essere disincantato (<%= this["item"]["disenchantingSkillRank"] %>)<% } else { %>Non può essere disincantato<% } %>',
			'auctionable'      : 'Può essere venduto all\'asta',
			'itemBind'         : { '1': 'Vincola alla raccolta', '2': 'Vincola all\'equipaggiamento', '3': 'Vincola all\'uso', '4': 'Vincola all\'account Battle.net' },
			'itemSocket'       : {
				'BLUE'     : 'Incavo Blu',
				'RED'      : 'Incavo Rosso',
				'YELLOW'   : 'Incavo Giallo',
				'META'     : 'Incavo Meta',
				'ORANGE'   : 'Incavo Arancione',
				'PURPLE'   : 'Incavo Viola',
				'GREEN'    : 'Incavo Verde',
				'PRISMATIC': 'Incavo Prismatico',
				'HYDRAULIC': 'Incavo Idraulico',
				'COGWHEEL' : 'Incavo Ingranaggio'
			},
			'socketBonus'      : 'Bonus incavo: <%= this["item"]["socketInfo"]["socketBonus"] %>',
			'reputationLevel'  : { '0': 'Odiato', '1': 'Ostile', '2': 'Avverso', '3': 'Neutrale', '4': 'Amichevole', '5': 'Onorato', '6': 'Reverito', '7': 'Osannato' },
			'inventoryType'   : { '1': 'Testa', '2': 'Collo', '3': 'Spalle', '4': 'Camicia', '5': 'Torso', '6': 'Fianchi', '7': 'Gambe', '8': 'Piedi', '9': 'Polsi', '10': 'Mani', '11': 'Dita', '12': 'Monile', '13': 'A una Mano', '15': 'A Distanza' /* Bow */, '16': 'Schiena', '17': 'A due mani', '18': 'Borsa', '20': 'Torso', '21': 'Mano primaria', '22': 'Mano secondaria', '23': 'Accessorio', '25': 'Da Tiro' /* Thrown */, '26': 'A distanza' /* Gun, Crossbow, Wand */ }
		}
	}

});


DarkTip.registerModule('wow.item.equipped', {

	'triggers': {
		'explicit': {
			'match' : /wow\.item\.equipped:(us|eu|kr|tw|cn)\.([^\.]+)\.([^\.]+)\.(head|neck|shoulder|back|chest|shirt|tabard|wrist|hands|waist|legs|feet|finger1|finger2|trinket1|trinket2|mainhand|offhand)\((en|de|fr|es|ru|pt|it|ko|zh)\)/i,
			'params': {
				'1': 'region',
				'2': 'realm',
				'3': 'character',
				'4': 'slot',
				'5': 'lang'
			}
		}
	},

	'queries': {
		'character': {
			'required' : true,
			'condition': true,
			'call'     : '//{host}/api/wow/character/{realm}/{character}?fields=items,audit&locale={locale}',
			'caching'  : (60 * 60 * 24 * 1)
		},
		'item': {
			'required' : true,
			'condition': 'character.items.{slot}',
			'call'     : '//{host}/api/wow/item/{condition.id}?locale={locale}',
			'caching'  : (60 * 60 * 24 * 90)
		},
		'itemclass': {
			'required' : true,
			'condition': 'character.items.{slot}',
			'call'     : '//{host}/api/wow/data/item/classes?locale={locale}',
			'caching'  : (60 * 60 * 24 * 90)
		},
		'itemset': {
			'required' : false,
			'condition': 'item.itemSet',
			'call'     : '//{host}/api/wow/item/set/{condition.id}?locale={locale}',
			'caching'  : (60 * 60 * 24 * 90)
		},
		'gem0': {
			'required' : false,
			'condition': 'character.items.{slot}.tooltipParams.gem0',
			'call'     : '//{host}/api/wow/item/{condition}?locale={locale}',
			'caching'  : (60 * 60 * 24 * 90)
		},
		'gem1': {
			'required' : false,
			'condition': 'character.items.{slot}.tooltipParams.gem1',
			'call'   : '//{host}/api/wow/item/{condition}?locale={locale}',
			'caching'  : (60 * 60 * 24 * 90)
		},
		'gem2': {
			'required' : false,
			'condition': 'character.items.{slot}.tooltipParams.gem2',
			'call'     : '//{host}/api/wow/item/{condition}?locale={locale}',
			'caching'  : (60 * 60 * 24 * 90)
		},
		'transmog': {
			'required' : false,
			'condition': 'character.items.{slot}.tooltipParams.transmogItem',
			'call'     : '//{host}/api/wow/item/{condition}?locale={locale}',
			'caching'  : (60 * 60 * 24 * 90)
		}
		/*
		'enchant': {
			'required' : false,
			'condition': 'character.items.{slot}.tooltipParams.enchant',
			'call'     : '//{host}/api/wow/spell/{condition}?locale={locale}',
			'caching'  : (60 * 60 * 24 * 90)
		},
		'reforge': {
			'required' : false,
			'condition': 'character.items.{slot}.tooltipParams.reforge',
			'call'     : '//{host}/api/wow/reforge/{condition}?locale={locale}',
			'caching'  : (60 * 60 * 24 * 90)
		}
		// */
	},

	'maps': {
		'slot': {
			'head'    : 'head',
			'neck'    : 'neck',
			'shoulder': 'shoulder',
			'back'    : 'back',
			'chest'   : 'chest',
			'shirt'   : 'shirt',
			'tabard'  : 'tabard',
			'wrist'   : 'wrist',
			'hands'   : 'hands',
			'waist'   : 'waist',
			'legs'    : 'legs',
			'feet'    : 'feet',
			'finger1' : 'finger1',
			'finger2' : 'finger2',
			'trinket1': 'trinket1',
			'trinket2': 'trinket2',
			'mainhand': 'mainHand',
			'offhand' : 'offHand'
		},
		'match': {
			'socket2gem':{
				'META'    : [ 'META' ],
				'RED'     : [ 'PRISMATIC', 'RED',    'PURPLE', 'ORANGE' ],
				'BLUE'    : [ 'PRISMATIC', 'BLUE',   'PURPLE', 'GREEN' ],
				'YELLOW'  : [ 'PRISMATIC', 'YELLOW', 'ORANGE', 'GREEN' ],
				'COGWHEEL': [ 'COGWHEEL' ]
			}
		}
	},

	'prepareData': function(state) {

		if(Object.keys(state['data']).length === 0)
		{
			return false;
		}

		if(
			(typeof state['data']['item'] !== 'undefined') &&
			(typeof state['data']['item']['itemClass'] !== 'undefined') &&
			(typeof state['data']['item']['itemSubClass'] !== 'undefined') &&
			(typeof state['data']['itemclass'] !== 'undefined') &&
			(typeof state['data']['itemclass']['classes'] !== 'undefined')
		)
		{
			for(var i = 0; i < state['data']['itemclass']['classes'].length; i++)
			{
				var citemclass = state['data']['itemclass']['classes'][i];

				if(citemclass['class'] == state['data']['item']['itemClass'])
				{
					for (var j = 0; j < citemclass['subclasses'].length; j++)
					{
						var citemsubclass = citemclass['subclasses'][j];

						if(citemsubclass['subclass'] == state['data']['item']['itemSubClass'])
						{
							state['data']['item']['itemClassLoc'] = citemsubclass['name'];
						}
					}
				}
			}
		}

		var slot = DarkTip.map("wow.item.equipped", "maps.slot", state['repo']['params']['slot'].toLowerCase());

		// check for socket bonus
		if((typeof state['data']['item'] !== 'undefined') && (typeof state['data']['item']['socketInfo'] !== 'undefined') && (typeof state['data']['item']['socketInfo']['socketBonus'] !== 'undefined'))
		{
			state['data']['item']['socketInfo']['mismatchedGems'] = state['data']['item']['socketInfo']['sockets'].length;

			for(var i = 0; i < state['data']['item']['socketInfo']['sockets'].length; i++)
			{
				var gemkey = 'gem' + i;

				if(typeof state['data'][gemkey] !== 'undefined')
				{
					var matchinggems = DarkTip.map("wow.item.equipped", "maps.match.socket2gem", state['data']['item']['socketInfo']['sockets'][i]['type']);

					if(typeof matchinggems !== 'undefined')
					{
						if(DarkTip.jq.inArray(state['data'][gemkey]['gemInfo']['type']['type'], matchinggems) !== -1)
						{
							state['data']['item']['socketInfo']['mismatchedGems'] = state['data']['item']['socketInfo']['mismatchedGems'] - 1;
						}
					}
				}
			}
		}

		if(DarkTip.compareRule(state['data'], ('character.items.'+slot+'.tooltipParams.extraSocket')))
		{
			if(typeof state['data']['item']['socketInfo'] === 'undefined')
			{
				state['data']['item']['socketInfo'] = { 'sockets': [ { 'type': 'PRISMATIC' } ] };
			}
			else
			{
				state['data']['item']['socketInfo']['sockets'].push({ 'type': 'PRISMATIC' });
			}
		}

		if(typeof state['data']['gem0'] !== 'undefined') state['data']['item']['socketInfo']['sockets'][0]['item'] = state['data']['gem0'];
		if(typeof state['data']['gem1'] !== 'undefined') state['data']['item']['socketInfo']['sockets'][1]['item'] = state['data']['gem1'];
		if(typeof state['data']['gem2'] !== 'undefined') state['data']['item']['socketInfo']['sockets'][2]['item'] = state['data']['gem2'];

		var itemLevelOverride = DarkTip.compareRule(state['data'], ('character.items.'+slot+'.itemLevel'));

		if(itemLevelOverride)
		{
			state['data']['item']['itemLevel'] = itemLevelOverride;
		}

		var statsOverride = DarkTip.compareRule(state['data'], ('character.items.'+slot+'.stats'));

		if(statsOverride && (statsOverride.length > 0))
		{
			state['data']['item']['bonusStats'] = statsOverride;
		}

		var upgradeInfo = DarkTip.compareRule(state['data'], ('character.items.'+slot+'.tooltipParams.upgrade'));

		if(upgradeInfo)
		{
			state['data']['item']['upgradeInfo'] = upgradeInfo;
		}

		var reforgeid = DarkTip.compareRule(state['data'], ('character.items.'+slot+'.tooltipParams.reforge'));

		if(reforgeid)
		{
			var index_source  = -1;
			var index_target  = -1;
			var reforgeamount = 0;

			for(var i = 0; i < state['data']['item']['bonusStats'].length; i++)
			{
				if(typeof state['data']['item']['bonusStats'][i]['reforgedAmount'] !== 'undefined')
				{
					index_source  = i;
					reforgeamount = Math.abs(state['data']['item']['bonusStats'][i]['reforgedAmount']);
				}

				if(typeof state['data']['item']['bonusStats'][i]['reforged'] !== 'undefined')
				{
					index_target = i;
				};
			}

			if(index_source >= 0)
			{
				state['data']['item']['reforge'] = {
					'source': state['data']['item']['bonusStats'][index_source]['stat'],
					'target': state['data']['item']['bonusStats'][index_target]['stat'],
					'amount': reforgeamount
				}
			}
		}

		if(DarkTip.compareRule(state['data'], ('character.items.'+slot+'.tooltipParams.set')))
		{
			var set_equipped = state['data']['character']['items'][slot]['tooltipParams']['set'];

			if(typeof state['data']['item']['itemSet'] !== 'undefined')
			{
				state['data']['item']['itemSet']['equipped'] = set_equipped.length;

				for(var i = 0; i < state['data']['item']['itemSet']['setBonuses'].length; i++)
				{
					if(state['data']['item']['itemSet']['equipped'] >= state['data']['item']['itemSet']['setBonuses'][i]['threshold'])
					{
						state['data']['item']['itemSet']['setBonuses'][i]['active'] = true;
					}
				}
			}
		}

		if(DarkTip.compareRule(state['data'], ('character.items.'+slot+'.name')))
		{
			state['data']['item']['name'] = state['data']['character']['items'][slot]['name'];
		}

		return state['data'];
	},

	'getParams': {
		'explicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.item.equipped', 'triggers.explicit.params')));
			params['host']   = DarkTip.map('wow', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		}
	},

	'templates': {
		'core': (
			'<div class="tooltip-item">' +
				'<img class="darktip-icon" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/56/<% if(this["item"]["icon"]) { %><%= this["item"]["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg" />' +
				 // --- START simple mode -----------------------------------
				'<div class="darktip-col-70 darktip-only-s">' +
					'<div class="darktip-headline-right"><%= this["item"]["itemLevel"] %></div>' +
					'<div class="darktip-row darktip-headline darktip-cquality-<%= this["item"]["quality"] %>"><%= this["item"]["name"] %></div>' +
					'<% if(this["item"]["upgradeInfo"]) { %><div class="darktip-row darktip-highlight-medium"><%= this._loc("upgradeInfo") %></div><% } %>' +
					'<% if(this["transmog"]) { %><div class="darktip-row darktip-highlight-transmog"><%= this._loc("transmogged") %></div><% } %>' +
					'<% if(this["item"]["heroic"]) { %><div class="darktip-row"><%= this._loc("heroic") %></div><% } %>' +
					'<% if(this["item"]["boundZone"]) { %><div class="darktip-row"><%= this["item"]["boundZone"]["name"] %></div><% } %>' +
					'<% if(this["item"]["itemBind"]) { %>' +
						'<div class="darktip-row">' +
							'<% if(this["item"]["quality"] == 7) { %>' +
								'<%= this._loc("itemBind.4") %>' +
							'<% } else { %>' +
								'<%= this._loc("itemBind." + this["item"]["itemBind"]) %>' +
							'<% } %>' +
						'</div>' +
					'<% } %>' +
					'<% if(this["item"]["maxCount"]) { %><div class="darktip-row"><%= this._loc("maxCount") %></div><% } %>' +
					'<div class="darktip-row classification">' +
						'<% if(this["item"]["containerSlots"]) { %>' +
							'<%= this._loc("containerSlots") %>' +
						'<% } else { %>' +
							'<% if(this["item"]["equippable"]) { %>' +
								'<%= this._loc("inventoryType." + this["item"]["inventoryType"]) %>' +
								'<div class="darktip-pos-right"><%= this["item"]["itemClassLoc"] %></div>' +
							'<% } else { %>' +
								'<%= this["item"]["itemClassLoc"] %>' +
							'<% } %>' +
						'<% } %>' +
					'</div>' +
					'<% if(this["item"]["reforge"]) { %><div class="darktip-row darktip-highlight-custom"><%= this._loc("reforged") %></div><% } %>' +
					'<% if(this["item"]["baseArmor"]) { %><div class="darktip-row"><%= this._loc("baseArmor") %></div><% } %>' +
					'<% if(this["item"]["weaponInfo"]) { %>' +
						'<div>' +
							'<div class="darktip-row"><%= this._loc("damage", this["item"]["weaponInfo"]["damage"]) %></div>' +
							'<div class="darktip-pos-right"><%= this._loc("weaponSpeed", this["item"]["weaponInfo"]) %></div>' +
							'<div class="darktip-row"><%= this._loc("dps", this["item"]["weaponInfo"]) %></div>' +
						'</div>' +
					'<% } %>' +
					'<%= this._subLoop("templates.fragments.stat.primary", this["item"]["bonusStats"]) %>' +
					'<%= this._subLoop("templates.fragments.stat.secondary", this["item"]["bonusStats"]) %>' +
					'<% if(this["item"]["gemInfo"]) { %><div class="darktip-row"><%= this["item"]["gemInfo"]["bonus"]["name"] %></div><% } %>' +
					'<% if(this["item"]["socketInfo"]) { %><div class="darktip-block darktip-sockets"><%= this._subLoop("templates.fragments.socket", this["item"]["socketInfo"]["sockets"]) %></div><% if(this["item"]["socketInfo"]["socketBonus"]) { %><div class="darktip-row <% if(this["item"]["socketInfo"]["mismatchedGems"] == 0) { %>darktip-highlight-custom<% } else { %>darktip-highlight-reduced<% } %>"><%= this._loc("socketBonus") %></div><% } %><% } %>' +
					'<% if(this["item"]["allowableClasses"]) { %><div class="darktip-row"><%= this._loc("allowableClasses") %></div><% } %>' +
					'<% if(this["item"]["allowableRaces"]) { %><div class="darktip-row"><%= this._loc("allowableRaces") %></div><% } %>' +
					'<% if(this["item"]["requiredLevel"]) { %><div class="darktip-row"><%= this._loc("requiredLevel") %></div><% } %>' +
					'<% if(this["item"]["requiredSkill"]) { %><div class="darktip-row"><%= this._loc("requiredSkill") %></div><% } %>' +
					'<% if(this["item"]["requiredAbility"]) { %><div class="darktip-row"><%= this._loc("requiredAbility") %></div><% } %>' +
					'<% if(this["item"]["minFactionId"]) { %><div class="darktip-row"><%= this._loc("minFactionId") %></div><% } %>' +
					'<%= this._subLoop("templates.fragments.stat.spell", this["item"]["itemSpells"]) %>' +
					'<% if(this["item"]["description"]) { %><div class="darktip-row darktip-highlight-medium">&quot;<%= this["item"]["description"] %>&quot;</div><% } %>' +
					'<% if(this["item"]["itemSet"]) { %><div class="darktip-row darktip-padded-above">' +
						'<div class="darktip-row darktip-highlight-medium"><%= this["item"]["itemSet"]["name"] %> (<%= this["item"]["itemSet"]["equipped"] %>/<%= this["itemset"]["items"].length %>)</div>' +
						'<div class="darktip-row darktip-padded-above"><%= this._subLoop("templates.fragments.stat.setBonus", this["item"]["itemSet"]["setBonuses"]) %></div>' +
					'</div><% } %>' +
					'<% if(this["_meta"]["extendedActive"]) { %><div class="darktip-row darktip-info-meta"><%= this._loc("extendedInactive") %></div><% } %>' +
				'</div>' +
				// --- END simple mode -------------------------------------
				// --- START extended mode ---------------------------------
				'<% if(this["_meta"]["extendedActive"]) { %>' +
					'<div class="darktip-col-70 darktip-only-x">' +
						'<div class="darktip-headline-right"><%= this["item"]["itemLevel"] %></div>' +
						'<div class="darktip-row darktip-headline darktip-cquality-<%= this["item"]["quality"] %>"><%= this["item"]["name"] %></div>' +
						'<div class="darktip-row darktip-padded-below ownerInfo"><%= this._loc("wornBy") %></div>' +
						'<% if(this["character"]["items"]) { %><%= this._sub("templates.fragments.iLevelDiff") %><% } %>' +
						'<div class="darktip-row darktip-highlight-strong"><%= this._loc("itemId") %></div>' +
						'<% if(this["item"]["maxDurability"]) { %><div class="darktip-row"><%= this._loc("maxDurability") %></div><% } %>' +
						'<% if(this["item"]["isAuctionable"]) { %><div class="darktip-row"><%= this._loc("auctionable") %></div><% } %>' +
						'<div class="darktip-row"><%= this._loc("disenchantable") %></div>' +
						'<% if(this["item"]["stackable"] > 1) { %><div class="darktip-row"><%= this._loc("stackable") %></div><% } %>' +
						'<div class="darktip-row"><%= this._loc("sellPrice") %></div>' +
						'<div class="darktip-row darktip-info-meta"><%= this._loc("extendedActive") %></div>' +
					'</div>' +
				'<% } %>' +
				// --- END extended mode -----------------------------------
			'</div>'
		),
		'404': (
			'<div class="tooltip-item darktip-tooltip-404">' +
				'<div class="darktip-title">404<span class="darktip-sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.slot") %></span> <span class="value"><%= this["slot"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.character") %></span> <span class="value"><%= this["character"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.realm") %></span> <span class="value"><%= this["realm"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
			'</div>'
		),
		'fragments': {
			'ownerInfo': (
				'<img class="darktip-icon-18x18" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/race_<%= this["character"]["race"] %>_<%= this["character"]["gender"] %>.jpg" /> ' +
				'<img class="darktip-icon-18x18" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/class_<%= this["character"]["class"] %>.jpg" /> ' +
				'<span class="darktip-cclass-<%= this["character"]["class"] %>"><%= this["character"]["name"] %></span> <span class="sub darktip-highlight-reduced">(<%= this["character"]["level"] %>)</span> ' +
				'@ <span><%= this["character"]["realm"] %></span>'
			),
			'iLevelDiff': (
				'<% this["item"]["iLevelDiff"] = (this["item"]["itemLevel"] - this["character"]["items"]["averageItemLevelEquipped"]); %>' +
				'<% if(this["item"]["iLevelDiff"] < -19) { %>' +
					'<div class="darktip-row darktip-ilvl-2low"><%= this._loc("iLevelDiff.verylow") %></div>' +
				'<% } else if(this["item"]["iLevelDiff"] < 0) { %>' +
					'<div class="darktip-row darktip-ilvl-low"><%= this._loc("iLevelDiff.lower") %></div>' +
				'<% } else if(this["item"]["iLevelDiff"] == 0) { %>' +
					'<div class="darktip-row darktip-ilvl-match"><%= this._loc("iLevelDiff.match") %></div>' +
				'<% } else if(this["item"]["iLevelDiff"] < 20) { %>' +
					'<div class="darktip-row darktip-ilvl-high"><%= this._loc("iLevelDiff.higher") %></div>' +
				'<% } else { %>' +
					'<div class="darktip-row darktip-ilvl-2high"><%= this._loc("iLevelDiff.veryhigh") %></div>' +
				'<% } %>'
			),
			'socket': (
				'<% if(this["item"]) { %>' +
					'<div class="darktip-row darktip-socket">' +
						'<span class="darktip-icon-socket darktip-socket-<%= this["type"] %>">' +
							'<span class="darktip-gem"><img class="darktip-icon" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/56/<% if(this["item"]["icon"]) { %><%= this["item"]["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg" /></span><span class="darktip-frame"></span>' +
						'</span>' +
						'<%= this["item"]["gemInfo"]["bonus"]["name"] %>' +
					'</div>' +
				'<% } else { %>' +
					'<div class="darktip-row darktip-socket darktip-highlight-reduced">' +
						'<span class="darktip-icon-socket darktip-socket-<%= this["type"] %>">' +
							'<span class="darktip-empty"></span><span class="darktip-frame"></span>' +
						'</span>' +
						'<%= this._loc("itemSocket." + this["type"]) %>' +
					'</div>' +
				'<% } %>'
			)
		}
	},

	'i18n': {
		'en_US': {
			'loading'    : 'Loading item...',
			'not-found'  : 'Item not found',
			'upgradeInfo': 'Upgrade Level: <%= this["item"]["upgradeInfo"]["current"] %>/<%= this["item"]["upgradeInfo"]["total"] %>',
			'transmogged': 'Transmogrified to: <%= this["transmog"]["name"] %>',
			'reforged'   : 'Reforged (<%= this["item"]["reforge"]["amount"] %> <%= this._loc("itemStat." + this["item"]["reforge"]["source"]) %> → <%= this["item"]["reforge"]["amount"] %> <%= this._loc("itemStat." + this["item"]["reforge"]["target"]) %>)',
			'wornBy'     : 'Worn by: <%= this._sub("templates.fragments.ownerInfo") %>',
			'iLevelDiff' : {
				'verylow' : 'This item is much below it\'s owner\'s average item level. (<%= Math.abs(this["item"]["iLevelDiff"]) %> item level<% if(Math.abs(this["item"]["iLevelDiff"]) != 1) { %>s<% } %> below)',
				'lower'   : 'This item is slightly below it\'s owner\'s average item level. (<%= Math.abs(this["item"]["iLevelDiff"]) %> item level<% if(Math.abs(this["item"]["iLevelDiff"]) != 1) { %>s<% } %> below)',
				'match'   : 'This item matches it\'s owner\'s average item level.',
				'higher'  : 'This item is slightly above it\'s owner\'s average item level. (<%= Math.abs(this["item"]["iLevelDiff"]) %> item level<% if(Math.abs(this["item"]["iLevelDiff"]) != 1) { %>s<% } %> above)',
				'veryhigh': 'This item is much above it\'s owner\'s average item level. (<%= Math.abs(this["item"]["iLevelDiff"]) %> item level<% if(Math.abs(this["item"]["iLevelDiff"]) != 1) { %>s<% } %> above)'
			}
		},
		'de_DE': {
			'loading'    : 'Lade Gegenstand...',
			'not-found'  : 'Gegenstand nicht gefunden',
			'upgradeInfo': 'Aufwertungsgrad: <%= this["item"]["upgradeInfo"]["current"] %>/<%= this["item"]["upgradeInfo"]["total"] %>',
			'transmogged': 'Transmogrifiziert zu: <%= this["transmog"]["name"] %>',
			'reforged'   : 'Umgeschmiedet (<%= this["item"]["reforge"]["amount"] %> <%= this._loc("itemStat." + this["item"]["reforge"]["source"]) %> → <%= this["item"]["reforge"]["amount"] %> <%= this._loc("itemStat." + this["item"]["reforge"]["target"]) %>)',
			'wornBy'     : 'Getragen von: <%= this._sub("templates.fragments.ownerInfo") %>',
			'iLevelDiff' : {
				'verylow' : 'Dieser Gegenstand ist deutlich unterhalb der durchschnittlichen Gegenstandsstufe seines Besitzers. (<%= Math.abs(this["item"]["iLevelDiff"]) %> Gegenstandsstufe<% if(Math.abs(this["item"]["iLevelDiff"]) != 1) { %>n<% } %> unterhalb)',
				'lower'   : 'Dieser Gegenstand ist unterhalb der durchschnittlichen Gegenstandsstufe seines Besitzers. (<%= Math.abs(this["item"]["iLevelDiff"]) %> Gegenstandsstufe<% if(Math.abs(this["item"]["iLevelDiff"]) != 1) { %>n<% } %> unterhalb)',
				'match'   : 'Dieser Gegenstand entspricht der durchschnittlichen Gegenstandsstufe seines Besitzers.',
				'higher'  : 'Dieser Gegenstand ist oberhalb der durchschnittlichen Gegenstandsstufe seines Besitzers. (<%= Math.abs(this["item"]["iLevelDiff"]) %> Gegenstandsstufe<% if(Math.abs(this["item"]["iLevelDiff"]) != 1) { %>n<% } %> oberhalb)',
				'veryhigh': 'Dieser Gegenstand ist deutlich oberhalb der durchschnittlichen Gegenstandsstufe seines Besitzers. (<%= Math.abs(this["item"]["iLevelDiff"]) %> Gegenstandsstufe<% if(Math.abs(this["item"]["iLevelDiff"]) != 1) { %>n<% } %> oberhalb)'
			}
		},
		'fr_FR': {
			'loading'    : 'Chargement Objets...',
			'not-found'  : 'Objet introuvable',
			'upgradeInfo': 'Niveau d\'am&eacute;lioration: <%= this["item"]["upgradeInfo"]["current"] %>/<%= this["item"]["upgradeInfo"]["total"] %>',
			'transmogged': 'Transmogrifi&eacute;(e) en : <%= this["transmog"]["name"] %>',
			'reforged'   : 'Reforged (<%= this["item"]["reforge"]["amount"] %> <%= this._loc("itemStat." + this["item"]["reforge"]["source"]) %> → <%= this["item"]["reforge"]["amount"] %> <%= this._loc("itemStat." + this["item"]["reforge"]["target"]) %>)',
			'wornBy'     : 'Porté par: <%= this._sub("templates.fragments.ownerInfo") %>',
			'iLevelDiff' : {
				'verylow' : 'This item is much below it\'s owner\'s average item level. (<%= Math.abs(this["item"]["iLevelDiff"]) %> item level<% if(Math.abs(this["item"]["iLevelDiff"]) != 1) { %>s<% } %> below)',
				'lower'   : 'Cet objet est légèrement inférieur au niveau d\'objet moyen du personnage. (<%= Math.abs(this["item"]["iLevelDiff"]) %> point<% if(Math.abs(this["item"]["iLevelDiff"]) != 1) { %>s<% } %> en-dessous)',
				'match'   : 'This item matches it\'s owner\'s average item level.',
				'higher'  : 'This item is slightly above it\'s owner\'s average item level. (<%= Math.abs(this["item"]["iLevelDiff"]) %> item level<% if(Math.abs(this["item"]["iLevelDiff"]) != 1) { %>s<% } %> above)',
				'veryhigh': 'This item is much above it\'s owner\'s average item level. (<%= Math.abs(this["item"]["iLevelDiff"]) %> item level<% if(Math.abs(this["item"]["iLevelDiff"]) != 1) { %>s<% } %> above)'
			}
		},
		'es_ES': {
			'loading'    : 'Cargando objeto...',
			'not-found'  : 'Objeto no encontrado',
			'upgradeInfo': 'Mejorar al nivel: <%= this["item"]["upgradeInfo"]["current"] %>/<%= this["item"]["upgradeInfo"]["total"] %>',
			'transmogged': 'Transfigurado a: <%= this["transmog"]["name"] %>',
			'reforged'   : 'Reforged (<%= this["item"]["reforge"]["amount"] %> <%= this._loc("itemStat." + this["item"]["reforge"]["source"]) %> → <%= this["item"]["reforge"]["amount"] %> <%= this._loc("itemStat." + this["item"]["reforge"]["target"]) %>)'
		},
		'it_IT': {
			'loading'    : 'Carico oggetto...',
			'not-found'  : 'Oggetto non trovato',
			'upgradeInfo': 'Livello di potenziamento: <%= this["item"]["upgradeInfo"]["current"] %>/<%= this["item"]["upgradeInfo"]["total"] %>',
			'transmogged': 'Trasmogrificato in: <%= this["transmog"]["name"] %>',
			'reforged'   : 'Riforgiato (<%= this["item"]["reforge"]["amount"] %> <%= this._loc("itemStat." + this["item"]["reforge"]["source"]) %> → <%= this["item"]["reforge"]["amount"] %> <%= this._loc("itemStat." + this["item"]["reforge"]["target"]) %>)',
			'wornBy'     : 'Indossato da: <%= this._sub("templates.fragments.ownerInfo") %>',
			'iLevelDiff' : {
				'verylow' : 'Questo oggetto è molto al di sotto della media dei livelli oggetto del suo proprietario. (<%= Math.abs(this["item"]["iLevelDiff"]) %> item level<% if(Math.abs(this["item"]["iLevelDiff"]) != 1) { %>s<% } %> below)',
				'lower'   : 'Questo oggetto è leggermente al di sotto della media dei livelli oggetto del suo proprietario. (<%= Math.abs(this["item"]["iLevelDiff"]) %> item level<% if(Math.abs(this["item"]["iLevelDiff"]) != 1) { %>s<% } %> below)',
				'match'   : 'Questo oggetto è pari alla media dei livelli oggetto del suo proprietario.',
				'higher'  : 'Questo oggetto è leggermente al di sopra della media dei livelli oggetto del suo proprietario. (<%= Math.abs(this["item"]["iLevelDiff"]) %> item level<% if(Math.abs(this["item"]["iLevelDiff"]) != 1) { %>s<% } %> above)',
				'veryhigh': 'Questo oggetto è molto al di sopra della media dei livelli oggetto del suo proprietario. (<%= Math.abs(this["item"]["iLevelDiff"]) %> item level<% if(Math.abs(this["item"]["iLevelDiff"]) != 1) { %>s<% } %> above)'
			}
		}
	}

});


DarkTip.registerModule('wow.wowhead', {

	'maps': {
		'wowheadhost': {
			'lang': {
				'www.wowhead.com': 'en',
				'de.wowhead.com' : 'de',
				'es.wowhead.com' : 'es',
				'it.wowhead.com': 'it',
				'fr.wowhead.com' : 'fr',
				'pt.wowhead.com' : 'pt',
				'ru.wowhead.com' : 'ru'
			}
		}
	},

	'enhanceData': function(module, params, data) {
		var add = {
			'_meta': {
				'path_host'      : 'http://' + params['host'],
				'path_host_media': 'http://' + DarkTip.map('wow', 'maps.region.mediahost', params['region']),
				'region'         : params['region'],
				'locale'         : params['locale'],
				'module'         : module
			}
		};
		DarkTip.jq.extend(true, data, add);
		return data;
	}

});

DarkTip.registerModule('wow.wowhead.quest', {

	'triggers': {
		'implicit': {
			'match' : /http:\/\/(www\.wowhead\.com|de\.wowhead\.com|es\.wowhead\.com|fr\.wowhead\.com|it\.wowhead\.com|pt\.wowhead\.com|ru\.wowhead\.com)\/quest=([^\.#]+).*/i,
			'params': {
				'1': 'wowheadhost',
				'2': 'questid'
			}
		}
	},

	'queries': {
		'quest': {
			'required' : true,
			'condition': true,
			'call'     : '//{host}/api/wow/quest/{questid}?locale={locale}',
			'caching'  : (60 * 60 * 24 * 90)
		}
	},

	'getParams': {
		'implicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.wowhead.quest', 'triggers.implicit.params')));
			params['region'] = 'eu';
			params['lang']   = DarkTip.map('wow.wowhead', 'maps.wowheadhost.lang', params['wowheadhost']);
			params['host']   = DarkTip.map('wow', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		}
	},

	'layout': {
		'width': {
			'core': 350
		}
	},

	'templates': {
		'core':(
			'<div class="tooltip-quest">' +
				'<div class="darktip-headline-right"><%= this["quest"]["level"] %></div>' +
				'<div class="darktip-row darktip-headline darktip-highlight-medium"><%= this["quest"]["title"] %></div>' +
				'<div class="darktip-row darktip-highlight-strong"><%= this["quest"]["category"] %></div>' +
				'<div class="darktip-row"><%= this._loc("reqLevel") %></div>' +
				'<% if(this["quest"]["suggestedPartyMembers"] > 1) { %><div class="darktip-row"><%= this._loc("suggestedPartyMembers") %></div><% } %>' +
			'</div>'
		),
		'404':(
			'<div class="tooltip-quest darktip-tooltip-404">' +
				'<div class="darktip-title">404<span class="darktip-sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.quest") %></span> <span class="value"><%= this["questid"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
			'</div>'
		)
	},

	'i18n': {
		'en_US': {
			'loading'              : 'Loading quest...',
			'not-found'            : 'Quest not found',
			'reqLevel'             : 'Requires Level <%= this["quest"]["reqLevel"] %>',
			'suggestedPartyMembers': 'Group Quest (<%= this["quest"]["suggestedPartyMembers"] %>)'
		},
		'de_DE': {
			'loading'              : 'Lade Quest...',
			'not-found'            : 'Quest nicht gefunden',
			'reqLevel'             : 'Ben&ouml;tigt Stufe <%= this["quest"]["reqLevel"] %>',
			'suggestedPartyMembers': 'Gruppenquest (<%= this["quest"]["suggestedPartyMembers"] %>)'
		},
		'fr_FR': {
			'loading'              : 'Chargement...',
			'not-found'            : 'Quête introuvable',
			'reqLevel'             : 'Niveau requis <%= this["quest"]["reqLevel"] %>',
			'suggestedPartyMembers': 'Qu&ecirc;te de groupe (<%= this["quest"]["suggestedPartyMembers"] %>)'
		},
		'es_ES': {
			'loading'              : 'Cargando misi&oacute;n...',
			'not-found'            : 'Misi&oacute;n no encontrada',
			'reqLevel'             : 'Requiere nivel <%= this["quest"]["reqLevel"] %>',
			'suggestedPartyMembers': 'Misi&oacute;n de Grupo (<%= this["quest"]["suggestedPartyMembers"] %>)'
		},
		'it_IT': {
			'loading'              : 'Caricamento missione...',
			'not-found'            : 'Missione non trovata',
			'reqLevel'             : 'Richiede il livello <%= this["quest"]["reqLevel"] %>',
			'suggestedPartyMembers': 'Missione di gruppo (<%= this["quest"]["suggestedPartyMembers"] %>)'
		}
	}

});


DarkTip.registerModule('wow.wowhead.spell', {

	'triggers': {
		'implicit': {
			'match' : /http:\/\/(www\.wowhead\.com|de\.wowhead\.com|es\.wowhead\.com|fr\.wowhead\.com|it\.wowhead\.com|pt\.wowhead\.com|ru\.wowhead\.com)\/spell=([0-9]+).*/i,
			'params': {
				'1': 'wowheadhost',
				'2': 'spellid'
			}
		}
	},

	'queries': {
		'spell': {
			'required' : true,
			'condition': true,
			'call'     : '//{host}/api/wow/spell/{spellid}?locale={locale}',
			'caching'  : (60 * 60 * 24 * 90)
		}
	},

	'prepareData': function(state) {

		if(Object.keys(state['data']).length === 0)
		{
			return false;
		}

		return state['data'];
	},

	'getParams': {
		'implicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.wowhead.spell', 'triggers.implicit.params')));
			params['region'] = 'eu';
			params['lang']   = DarkTip.map('wow.wowhead', 'maps.wowheadhost.lang', params['wowheadhost']);
			params['host']   = DarkTip.map('wow', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		}
	},

	'layout': {
		'width': {
			'core': 425
		}
	},

	'templates': {
		'core': (
			'<div class="tooltip-spell">' +
				'<img class="darktip-icon" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/56/<% if(this["spell"]["icon"]) { %><%= this["spell"]["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg" />' +
				'<div class="darktip-col-70">' +
					'<div class="darktip-darktip-row headline"><%= this["spell"]["name"] %></div>' +
					'<div class="darktip-split-row">' +
						'<div class="darktip-row"><% if(this["spell"]["powerCost"]) { %><%= this["spell"]["powerCost"] %><% } %></div>' +
						'<div class="darktip-pos-right"><% if(this["spell"]["range"]) { %><%= this["spell"]["range"] %><% } %></div>' +
					'</div>' +
					'<div class="darktip-split-row">' +
						'<div class="darktip-row"><% if(this["spell"]["castTime"]) { %><%= this["spell"]["castTime"] %><% } %></div>' +
						'<div class="darktip-pos-right"><% if(this["spell"]["cooldown"]) { %><%= this["spell"]["cooldown"] %><% } %></div>' +
					'</div>' +
					'<div class="darktip-row darktip-highlight-medium"><%= this["spell"]["description"] %></div>' +
				'</div>' +
			'</div>'
		),
		'404': (
			'<div class="tooltip-spell darktip-tooltip-404">' +
				'<div class="darktip-title">404<span class="darktip-sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.spell") %></span> <span class="value"><%= this["spellid"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
			'</div>'
		),
		'fragments': {
		}
	},

	'i18n': {
		'en_US': {
			'loading'          : 'Loading spell...',
			'not-found'        : 'Spell not found'
		},
		'de_DE': {
			'loading'          : 'Lade Zauber...',
			'not-found'        : 'Zauber nicht gefunden'
		},
		'fr_FR': {
			'loading'          : 'Chargement Sorts...',
			'not-found'        : 'Sort introuvable'
		},
		'es_ES': {
			'loading'          : 'Cargando Hechizos...',
			'not-found'        : 'Hechizos no encontrado'
		},
		'it_IT': {
			'loading'          : 'Caricamento incantesimo...',
			'not-found'        : 'Incantesimo non trovato'
		}
	}

});


DarkTip.registerModule('wow.wowhead.guild', {

	'triggers': {
		'implicit': {
			'match' : /http:\/\/(www\.wowhead\.com|de\.wowhead\.com|es\.wowhead\.com|fr\.wowhead\.com|pt\.wowhead\.com|ru\.wowhead\.com)\/guild=(us|eu)\.([^\.]+)\.([^\.#]+).*/i,
			'params': {
				'1': 'wowheadhost',
				'2': 'region',
				'3': 'realm',
				'4': 'guild'
			}
		}
	},

	'queries': {
		'guild': {
			'required' : true,
			'condition': true,
			'call'     : '//{host}/api/wow/guild/{realm}/{guild}?fields=members&locale={locale}',
			'caching'  : (60 * 60 * 24 * 3)
		}
	},

	'getParams': {
		'implicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.wowhead.guild', 'triggers.implicit.params')));
			params['guild']  = params['guild'].replace(/_/g, ' ');
			params['lang']   = DarkTip.map('wow.wowhead', 'maps.wowheadhost.lang', params['wowheadhost']);
			params['host']   = DarkTip.map('wow', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		}
	},

	'layout': {
		'width': {
			'core': 275
		}
	},

	'templates': {
		'core': (
			'<div class="tooltip-guild">' +
				'<div class="darktip-headline-right"><span class="darktip-icon-achievenemtpoints"><%= this["guild"]["achievementPoints"] %></span></div>' +
				'<div class="darktip-row darktip-headline darkstip-cside-<%= this["guild"]["side"] %>"><%= this["guild"]["name"] %></div>' +
				'<div class="darktip-row darktip-highlight-medium"><%= this._loc("classification") %></div>' +
				'<% if(this["guild"]["members"]) { %><div class="darktip-row"><%= this._loc("members") %></div><% } %>' +
			'</div>'
		),
		'404': (
			'<div class="tooltip-guild darktip-tooltip-404">' +
				'<div class="darktip-title">404<span class="darktip-sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.guild") %></span> <span class="value"><%= this["guild"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.realm") %></span> <span class="value"><%= this["realm"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
			'</div>'
		)
	},

	'i18n': {
		'en_US': {
			'loading'       : 'Loading Guild...',
			'not-found'     : 'Guild not found',
			'classification': 'Level <%= this["guild"]["level"] %> <%= this._loc("factionSide." + this["guild"]["side"]) %> Guild, <%= this["guild"]["realm"] %>',
			'members'       : '<%= this["guild"]["members"].length %> members'
		},
		'de_DE': {
			'loading'       : 'Lade Gilde...',
			'not-found'     : 'Gilde nicht gefunden',
			'classification': 'Stufe <%= this["guild"]["level"] %> <%= this._loc("factionSide." + this["guild"]["side"]) %>-Gilde, <%= this["guild"]["realm"] %>',
			'members'       : '<%= this["guild"]["members"].length %> Mitglieder'
		},
		'fr_FR': {
			'loading'       : 'Chargement Guilde...',
			'not-found'     : 'Aucune Guilde trouv&eacute;e',
			'classification': 'Niveau <%= this["guild"]["level"] %> Faction <%= this._loc("factionSide." + this["guild"]["side"]) %> , <%= this["guild"]["realm"] %>',
			'members'       : '<%= this["guild"]["members"].length %> membres'
		},
		'es_ES': {
			'loading'       : 'Cargando hermandad...',
			'not-found'     : 'Hermandad no encontrada',
			'classification': 'Hermandad (<%= this._loc("factionSide." + this["guild"]["side"]) %>), nivel <%= this["guild"]["level"] %>, <%= this["guild"]["realm"] %>',
			'members'       : '<%= this["guild"]["members"].length %> miembros'
		},
		'it_IT': {
			'loading'       : 'Caricamento Gilda...',
			'not-found'     : 'Gilda non trovata',
			'classification': 'Livello <%= this["guild"]["level"] %> <%= this._loc("factionSide." + this["guild"]["side"]) %> Gilda, <%= this["guild"]["realm"] %>',
			'members'       : '<%= this["guild"]["members"].length %> membri'
		}
	}

});


DarkTip.registerModule('wow.wowhead.achievement', {

	'triggers': {
		'implicit': {
			'match' : /http:\/\/(www\.wowhead\.com|de\.wowhead\.com|es\.wowhead\.com|fr\.wowhead\.com|pt\.wowhead\.com|ru\.wowhead\.com)\/achievement=([0-9]+).*/i,
			'params': {
				'1': 'wowheadhost',
				'2': 'achievementid'
			}
		}
	},

	'queries': {
		'achievement': {
			'required' : true,
			'condition': true,
			'call'     : '//{host}/api/wow/achievement/{achievementid}?locale={locale}',
			'caching'  : (60 * 60 * 24 * 90)
		}
	},

	'getParams': {
		'implicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.wowhead.achievement', 'triggers.implicit.params')));
			params['region'] = 'eu';
			params['lang']   = DarkTip.map('wow.wowhead', 'maps.wowheadhost.lang', params['wowheadhost']);
			params['host']   = DarkTip.map('wow', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		}
	},

	'layout': {
		'width': {
			'core': 425
		}
	},

	'templates': {
		'core': (
			'<div class="tooltip-achievement">' +
				'<img class="darktip-icon" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/56/<% if(this["achievement"]["icon"]) { %><%= this["achievement"]["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg" />' +
				'<div class="darktip-col-70">' +
					'<div class="darktip-headline-right"><span class="darktip-icon-achievenemtpoints"><%= this["achievement"]["points"] %></span></div>' +
					'<div class="darktip-row darktip-headline"><%= this["achievement"]["title"] %></div>' +
					'<div class="darktip-row darktip-highlight-reduced"><%= this["achievement"]["description"] %></div>' +
				'</div>' +
			'</div>'
		),
		'404': (
			'<div class="tooltip-achievement darktip-tooltip-404">' +
				'<div class="darktip-title">404<span class="darktip-sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.achievement") %></span> <span class="value"><%= this["achievementid"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
			'</div>'
		)
	},

	'i18n': {
		'en_US': {
			'loading'       : 'Loading Achievement...',
			'not-found'     : 'Achievement not found'
		},
		'de_DE': {
			'loading'       : 'Lade Erfolg...',
			'not-found'     : 'Erfolg nicht gefunden'
		},
		'fr_FR': {
			'loading'       : 'Chargement Avantage...',
			'not-found'     : 'Haut fait introuvable'
		},
		'es_ES': {
			'loading'       : 'Cargando ventaja...',
			'not-found'     : 'Ventaja no encontrada'
		},
		'it_IT': {
			'loading'       : 'Caricamento Impresa...',
			'not-found'     : 'Impresa non trovata'
		}
	}

});

DarkTip.registerModule('wow.wowhead.character', {

	'triggers': {
		'implicit': {
			'match' : /http:\/\/(www\.wowhead\.com|de\.wowhead\.com|es\.wowhead\.com|fr\.wowhead\.com|pt\.wowhead\.com|ru\.wowhead\.com)\/list=[\d]+\/(us|eu)-([^\.]+)-([^\.#]+).*/i,
			'params': {
				'1': 'wowheadhost',
				'2': 'region',
				'3': 'realm',
				'4': 'character'
			},
			'decorate': function(element, params, data) {

				var color_class     = DarkTip.map('wow.character', 'maps.class.color', data['character']['class']);
				var mediahost       = DarkTip.map('wow', 'maps.region.mediahost', params['region']);
				var icon_racegender = 'http://' + mediahost + '/wow/icons/18/race_' + data['character']['race'] + '_' + data['character']['gender'] + '.jpg';
				var icon_class      = 'http://' + mediahost + '/wow/icons/18/class_' + data['character']['class'] + '.jpg';

				DarkTip.jq(element).css(DarkTip['data']['settings']['decorativeMode']['default']);
				DarkTip.jq(element).css({'color': color_class});
				DarkTip.jq(element).prepend('<img src="' + icon_racegender + '" style="vertical-align: middle;" /> <img src="' + icon_class + '" style="vertical-align: middle;" /> ');
			}
		}
	},

	'queries': {
		'character': {
			'required' : true,
			'condition': true,
			'call'     : '//{host}/api/wow/character/{realm}/{character}?fields=guild,talents,items,professions,pets,mounts&locale={locale}',
			'caching'  : (60 * 60 * 24 * 1)
		}
		/*
		'races'    : {
			'required' : false,
			'condition': 'character.race',
			'call'     : '//{host}/api/wow/data/character/races?locale={locale}',
			'caching'  : (60 * 60 * 24 * 90)
		},
		'classes'  : {
			'required' : false,
			'condition': 'character.class',
			'call'     : '//{host}/api/wow/data/character/classes?locale={locale}',
			'caching'  : (60 * 60 * 24 * 90)
		},
		// */
	},

	'prepareData': function(state) {

		if(Object.keys(state['data']).length === 0)
		{
			return false;
		}

		state['data']['character']['talentSpecCount'] = 0;

		if((typeof state['data']['character'] !== 'undefined') && (typeof state['data']['character']['talents'] !== 'undefined'))
		{
			for(var i = 0; i < state['data']['character']['talents'].length; i++)
			{
				var cspec   = state['data']['character']['talents'][i];
				var temp    = {};
				var maxtier = -1;
				var ordered = [];

				if(typeof cspec['spec'] !== 'undefined')
				{
					state['data']['character']['talentSpecCount'] = state['data']['character']['talentSpecCount'] + 1;
				}

				if((typeof cspec['talents'] !== 'undefined') && (cspec['talents'].length > 0))
				{
					for(var j = 0; j < cspec['talents'].length; j++)
					{
						temp[cspec['talents'][j]['tier']] = cspec['talents'][j];

						if(cspec['talents'][j]['tier'] > maxtier)
						{
							maxtier = cspec['talents'][j]['tier'];
						}
					}
				}

				if(maxtier >= 0)
				{
					for(var j = 0; j <= maxtier; j++)
					{
						if(typeof temp[j] !== 'undefined')
						{
							ordered.push(temp[j]);
						}
					}
				}

				cspec['talents_ordered'] = ordered;
			}
		}

		return state['data'];
	},

	'getParams': {
		'implicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.wowhead.character', 'triggers.implicit.params')));
			params['lang']   = DarkTip.map('wow.wowhead', 'maps.wowheadhost.lang', params['wowheadhost']);
			params['host']   = DarkTip.map('wow', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		}
	},

	'layout': {
		'width': {
			'core': 325
		}
	},

	'templates': {
		'core': (
			'<div class="tooltip-character">' +
				'<img class="darktip-icon" src="<%= this["_meta"]["path_host"] %>/static-render/<%= this["_meta"]["region"] %>/<%= this["character"]["thumbnail"] %>?alt=/wow/static/images/2d/avatar/<%= this["character"]["race"] %>-<%= this["character"]["gender"] %>.jpg" />' +
				/* --- START simple mode -------------------------------- */
				'<div class="darktip-col-98 darktip-only-s">' +
					'<div class="darktip-headline-right"><span class="darktip-icon-achievenemtpoints"><%= this["character"]["achievementPoints"] %></span></div>' +
					'<div class="darktip-row darktip-headline darktip-cclass-<%= this["character"]["class"] %>"><%= this["character"]["name"] %></div>' +
					'<div class="darktip-row"><%= this._loc("classification") %></div>' +
					'<%= this._subLoop("templates.fragments.talentSpec", this["character"]["talents"]) %>' +
					'<% if(this["character"]["guild"]) { %><div class="darktip-row darktip-highlight-medium">&lt;<%= this["character"]["guild"]["name"] %>&gt;<% if(this["character"]["guild"]["level"]) { %> (<%= this["character"]["guild"]["level"] %>)<% } %></div><% } %>' +
					'<div class="darktip-row"><%= this["character"]["realm"] %></div>' +
					'<% if(this["character"]["items"]) { %><div class="darktip-row darktip-highlight-weak"><%= this._loc("itemLevel", this["character"]["items"]) %></div><% } %>' +
					'<% if(this["_meta"]["extendedActive"]) { %><div class="darktip-row darktip-info-meta"><%= this._loc("extendedInactive") %></div><% } %>' +
				'</div>' +
				/* --- END simple mode ---------------------------------- */
				/* --- START extended mode ------------------------------ */
				'<% if(this["_meta"]["extendedActive"]) { %>' +
					'<div class="darktip-col-98 darktip-only-x">' +
						'<div class="darktip-headline-right"><span class="darktip-icon-achievenemtpoints"><%= this["character"]["achievementPoints"] %></span></div>' +
						'<div class="darktip-row darktip-headline darktip-cclass-<%= this["character"]["class"] %>"><%= this["character"]["name"] %></div>' +
						'<% if(this["character"]["professions"]) { %>' +
							'<div class="darktip-block">' +
								'<%= this._subLoop("templates.fragments.profession.primary", this["character"]["professions"]["primary"]) %>' +
								'<%= this._subLoop("templates.fragments.profession.secondary", this["character"]["professions"]["secondary"]) %>' +
							'</div>' +
						'<% } %>' +
						'<% if(this["character"]["mounts"]) { %><div class="darktip-row"><%= this._loc("mounts") %></div><% } %>' +
						'<% if(this["character"]["pets"]) { %><div class="darktip-row"><%= this._loc("pets") %></div><% } %>' +
						'<div class="darktip-row darktip-highlight-reduced"><%= this._loc("lastModified") %></div>' +
						'<div class="darktip-row darktip-info-meta"><%= this._loc("extendedActive") %></div>' +
					'</div>' +
				'<% } %>' +
				/* --- END extended mode -------------------------------- */
			'</div>'
		),
		'404': (
			'<div class="tooltip-character darktip-tooltip-404">' +
				'<div class="darktip-title">404<span class="darktip-sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.character") %></span> <span class="value"><%= this["character"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.realm") %></span> <span class="value"><%= this["realm"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
			'</div>'
		),
		'fragments': {
			'talentSpec': (
				'<% if(this["spec"]) { %>' +
					'<div class="darktip-block darktip-spec darktip-row<% if(this["selected"]) { %> darktip-highlight-strong<% } else { %> darktip-highlight-reduced<% } %>">' +
						'<img class="darktip-icon-10x10" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/<% if(this["spec"]["icon"]) { %><%= this["spec"]["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg"/> ' +
						'<%= this["spec"]["name"] %> <span class="darktip-role">(<%= this["spec"]["role"] %>)</span>' +
						'<% if(this["talents"].length > 0) { %>' +
							'<%= this._subLoop("templates.fragments.talent", this["talents_ordered"]) %>' +
						'<% } %>' +
					'</div>' +
				'<% } %>'
			),
			'talent': (
				'<div class="darktip-block darktip-talent">' +
					'<img class="darktip-icon-10x10" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/<% if(this["spell"]["icon"]) { %><%= this["spell"]["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg"/> ' +
					'<%= this["spell"]["name"] %>' +
				'</div>'
			),
			'profession': {
				'primary'  : (
					'<% if(this["rank"] > 0) { %>' +
						'<div class="darktip-row darktip-highlight-medium">' +
							'<img class="darktip-icon-10x10" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/<% if(this["icon"]) { %><%= this["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg"/> ' +
							'<%= this["name"] %>: <%= this["rank"] %>' +
						'</div>' +
					'<% } %>'
				),
				'secondary': (
					'<% if(this["rank"] > 0) { %>' +
						'<div class="darktip-row darktip-highlight-weak">' +
							'<img class="darktip-icon-10x10" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/<% if(this["icon"]) { %><%= this["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg"/> ' +
							'<%= this["name"] %>: <%= this["rank"] %>' +
						'</div>' +
					'<% } %>'
				)
			}
		}
	},

	'i18n': {
		'en_US': {
			'loading'       : 'Loading character...',
			'not-found'     : 'Character not found',
			'classification': '<%= this["character"]["level"] %> <%= this._loc("characterRace." + this["character"]["race"] + ".0") %> <%= this._loc("characterClass." + this["character"]["class"] + ".0") %>',
			'itemLevel'     : '<%= this["averageItemLevelEquipped"] %> average item level (<%= this["averageItemLevel"] %>)',
			'mounts'        : 'Mounts: <%= this["character"]["mounts"]["numCollected"] %> / <%= this["character"]["mounts"]["numCollected"] + this["character"]["mounts"]["numNotCollected"] %>',
			'pets'          : 'Pets: <%= this["character"]["pets"]["numCollected"] %> / <%= this["character"]["pets"]["numCollected"] + this["character"]["pets"]["numNotCollected"] %>',
			'lastModified'  : 'Last modified: <%= this._renderDateTime(this["character"]["lastModified"]) %>'
		},
		'de_DE': {
			'loading'       : 'Lade Charakter...',
			'not-found'     : 'Charakter nicht gefunden',
			'classification': '<%= this["character"]["level"] %>, <%= this._loc("characterRace." + this["character"]["race"] + "." + this["character"]["gender"]) %>, <%= this._loc("characterClass." + this["character"]["class"] + "." + this["character"]["gender"]) %>',
			'itemLevel'     : '<%= this["averageItemLevelEquipped"] %> Durchschnittliche Gegenstandsstufe (<%= this["averageItemLevel"] %>)',
			'mounts'        : 'Reittiere: <%= this["character"]["mounts"]["numCollected"] %> / <%= this["character"]["mounts"]["numCollected"] + this["character"]["mounts"]["numNotCollected"] %>',
			'pets'          : 'Haustiere: <%= this["character"]["pets"]["numCollected"] %> / <%= this["character"]["pets"]["numCollected"] + this["character"]["pets"]["numNotCollected"] %>',
			'lastModified'  : 'Stand vom <%= this._renderDateTime(this["character"]["lastModified"]) %>'
		},
		'fr_FR': {
			'loading'       : 'Chargement personnage...',
			'not-found'     : 'Aucun personnage trouv&eacute;',
			'classification': '<%= this._loc("characterRace." + this["character"]["race"] + "." + this["character"]["gender"]) %> <%= this._loc("characterClass." + this["character"]["class"] + "." + this["character"]["gender"]) %> de niveau <%= this["character"]["level"] %>',
			'itemLevel'     : '<%= this["averageItemLevelEquipped"] %> Niveau moyen des objets (<%= this["averageItemLevel"] %>)',
			'mounts'        : 'Montures: <%= this["character"]["mounts"]["numCollected"] %> / <%= this["character"]["mounts"]["numCollected"] + this["character"]["mounts"]["numNotCollected"] %>',
			'pets'          : 'Mascottes: <%= this["character"]["pets"]["numCollected"] %> / <%= this["character"]["pets"]["numCollected"] + this["character"]["pets"]["numNotCollected"] %>',
			'lastModified'  : 'Derni&egrave;re mise à jour: <%= this._renderDateTime(this["character"]["lastModified"]) %>'
		},
		'es_ES': {
			'loading'       : 'Cargando personaje...',
			'not-found'     : 'Personaje no encontrado',
			'classification': '<%= this._loc("characterRace." + this["character"]["race"] + "." + this["character"]["gender"]) %> <%= this._loc("characterClass." + this["character"]["class"] + "." + this["character"]["gender"]) %> de nivel <%= this["character"]["level"] %>',
			'itemLevel'     : '<%= this["averageItemLevelEquipped"] %> nivel medio de objeto (<%= this["averageItemLevel"] %>)',
			'mounts'        : 'Monturas: <%= this["character"]["mounts"]["numCollected"] %> / <%= this["character"]["mounts"]["numCollected"] + this["character"]["mounts"]["numNotCollected"] %>',
			'pets'          : 'Compa&ntilde;eros: <%= this["character"]["pets"]["numCollected"] %> / <%= this["character"]["pets"]["numCollected"] + this["character"]["pets"]["numNotCollected"] %>',
			'lastModified'  : '&Uacute;ltima modificaci&oacute;n: <%= this._renderDateTime(this["character"]["lastModified"]) %>'
		},
		'es_MX': {
			'classification': '<%= this._loc("characterClass." + this["character"]["class"] + "." + this["character"]["gender"]) %> de <%= this._loc("characterRace." + this["character"]["race"] + "." + this["character"]["gender"]) %>, nivel <%= this["character"]["level"] %>'
		},
		'it_IT': {
			'loading'       : 'Caricamento personaggio...',
			'not-found'     : 'Personaggio non trovato',
			'classification': '<%= this["character"]["level"] %> <%= this._loc("characterRace." + this["character"]["race"] + ".0") %> <%= this._loc("characterClass." + this["character"]["class"] + ".0") %>',
			'itemLevel'     : '<%= this["averageItemLevelEquipped"] %> media dei livelli oggetto (<%= this["averageItemLevel"] %>)',
			'mounts'        : 'Cavalcature: <%= this["character"]["mounts"]["numCollected"] %> / <%= this["character"]["mounts"]["numCollected"] + this["character"]["mounts"]["numNotCollected"] %>',
			'pets'          : 'Mascotte: <%= this["character"]["pets"]["numCollected"] %> / <%= this["character"]["pets"]["numCollected"] + this["character"]["pets"]["numNotCollected"] %>',
			'lastModified'  : 'Ultima modifica: <%= this._renderDateTime(this["character"]["lastModified"]) %>'
		}
	}

});


DarkTip.registerModule('wow.wowhead.item', {

	'triggers': {
		'implicit': {
			'match' : /http:\/\/(www\.wowhead\.com|de\.wowhead\.com|es\.wowhead\.com|fr\.wowhead\.com|pt\.wowhead\.com|ru\.wowhead\.com)\/item=([^\.#\/]+).*/i,
			'params': {
				'1': 'wowheadhost',
				'2': 'itemid'
			},
			'decorate': function(element, params, data) {

				var color_quality = DarkTip.map('wow.item', 'maps.quality.color', data['item']['quality']);
				var mediahost     = DarkTip.map('wow', 'maps.region.mediahost', params['region']);
				var icon_item     = 'http://' + mediahost + '/wow/icons/18/' + data['item']['icon'] + '.jpg';

				DarkTip.jq(element).css(DarkTip['data']['settings']['decorativeMode']['default']);
				DarkTip.jq(element).css({'color': color_quality});
				DarkTip.jq(element).prepend('<img src="' + icon_item + '" style="vertical-align: middle;" /> ');
			}
		}
	},

	'queries': {
		'item': {
			'required' : true,
			'condition': true,
			'call'     : '//{host}/api/wow/item/{itemid}?locale={locale}',
			'caching'  : (60 * 60 * 24 * 90)
		},
		'itemclass': {
			'required' : true,
			'condition': true,
			'call'     : '//{host}/api/wow/data/item/classes?locale={locale}',
			'caching'  : (60 * 60 * 24 * 90)
		},
		'itemset': {
			'required' : false,
			'condition': 'item.itemSet',
			'call'     : '//{host}/api/wow/item/set/{condition.id}?locale={locale}',
			'caching'  : (60 * 60 * 24 * 90)
		}
	},

	'patterns': {
		'money': /^([0-9]+)([0-9]{2})([0-9]{2})$|([0-9]{1,2})([0-9]{2})$|([0-9]{1,2})$/i
	},

	'maps': {
		'quality': {
			'color': {
				'0': '#9D9D9D',
				'1': '#FFFFFF',
				'2': '#1EFF00',
				'3': '#0070FF',
				'4': '#C600FF',
				'5': '#FF8000',
				'6': '#E6CC80',
				'7': '#E6CC80'
			}
		},
		'stats': {
			'primary': {
				'3': 'Agility',
				'4': 'Strength',
				'5': 'Intellect',
				'6': 'Spirit',
				'7': 'Stamina'
			},
			'secondary': {
				'13': 'Dodge rating',
				'14': 'Parry rating',
				'31': 'Hit rating',
				'32': 'Critical strike rating',
				'35': 'PvP resilence rating',
				'36': 'Haste rating',
				'37': 'Expertise rating',
				'38': 'Attack power',
				'46': 'Health regeneration',
				'45': 'Spell power',
				'47': 'Spell penetration',
				'49': 'Mastery rating',
				'57': 'PvP power rating'
			}
		}
	},

	'prepareData': function(state) {

		if(Object.keys(state['data']).length === 0)
		{
			return false;
		}

		if(
			(typeof state['data']['item'] !== 'undefined') &&
			(typeof state['data']['item']['itemClass'] !== 'undefined') &&
			(typeof state['data']['item']['itemSubClass'] !== 'undefined') &&
			(typeof state['data']['itemclass'] !== 'undefined') &&
			(typeof state['data']['itemclass']['classes'] !== 'undefined')
		)
		{
			for(var i = 0; i < state['data']['itemclass']['classes'].length; i++)
			{
				var citemclass = state['data']['itemclass']['classes'][i];

				if(citemclass['class'] == state['data']['item']['itemClass'])
				{
					for (var j = 0; j < citemclass['subclasses'].length; j++)
					{
						var citemsubclass = citemclass['subclasses'][j];

						if(citemsubclass['subclass'] == state['data']['item']['itemSubClass'])
						{
							state['data']['item']['itemClassLoc'] = citemsubclass['name'];
						}
					}
				}
			}
		}

		return state['data'];
	},

	'getParams': {
		'implicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.wowhead.item', 'triggers.implicit.params')));
			params['region'] = 'eu';
			params['lang']   = DarkTip.map('wow.wowhead', 'maps.wowheadhost.lang', params['wowheadhost']);
			params['host']   = DarkTip.map('wow', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		}
	},

	'layout': {
		'width': {
			'core': 425
		}
	},

	'templates': {
		'tools': {
			'_isStatPrimary': function(statid) {
				var result = DarkTip.map(this['_meta']['module'], 'maps.stats.primary', statid);
				return (result !== undefined);
			},
			'_isStatSecondary': function(statid) {
				var result = DarkTip.map(this['_meta']['module'], 'maps.stats.secondary', statid);
				return (result !== undefined);
			},
			'_renderCoins': function(total) {
				var temp   = total.toString();
				var result = temp.match(DarkTip.read(this['_meta']['module'], 'patterns.money'));
				var split  = {
					'gold'  : -1,
					'silver': -1,
					'copper': 0
				};
				if(result)
				{
					if(result[3] !== undefined)
					{
						split = {
							'gold'  : parseInt(result[1]),
							'silver': parseInt(result[2]),
							'copper': parseInt(result[3])
						};
					}
					else if(result[5] !== undefined)
					{
						split = {
							'gold'  : -1,
							'silver': parseInt(result[4]),
							'copper': parseInt(result[5])
						};
					}
					else
					{
						split = {
							'gold'  : -1,
							'silver': -1,
							'copper': parseInt(result[6])
						};
					}
				}
				return DarkTip.jq.jqote(
					DarkTip.read(this['_meta']['module'], 'templates.fragments.coins'),
					DarkTip.jq.extend(true, {}, DarkTip.getTemplateTools(this['_meta']['module'], this['_meta']['locale']), split)
				);
			}
		},
		'core': (
			'<div class="tooltip-item">' +
				'<img class="darktip-icon" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/56/<% if(this["item"]["icon"]) { %><%= this["item"]["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg" />' +
				 // --- START simple mode -----------------------------------
				'<div class="darktip-col-70 darktip-only-s">' +
					'<div class="darktip-headline-right"><%= this["item"]["itemLevel"] %></div>' +
					'<div class="darktip-row darktip-headline darktip-cquality-<%= this["item"]["quality"] %>"><%= this["item"]["name"] %></div>' +
					'<% if(this["item"]["heroic"]) { %><div class="darktip-row"><%= this._loc("heroic") %></div><% } %>' +
					'<% if(this["item"]["boundZone"]) { %><div class="darktip-row"><%= this["item"]["boundZone"]["name"] %></div><% } %>' +
					'<% if(this["item"]["itemBind"]) { %>' +
						'<div class="darktip-row">' +
							'<% if(this["item"]["quality"] == 7) { %>' +
								'<%= this._loc("itemBind.4") %>' +
							'<% } else { %>' +
								'<%= this._loc("itemBind." + this["item"]["itemBind"]) %>' +
							'<% } %>' +
						'</div>' +
					'<% } %>' +
					'<% if(this["item"]["maxCount"]) { %><div class="darktip-row"><%= this._loc("maxCount") %></div><% } %>' +
					'<div class="darktip-row classification">' +
						'<% if(this["item"]["containerSlots"]) { %>' +
							'<%= this._loc("containerSlots") %>' +
						'<% } else { %>' +
							'<% if(this["item"]["equippable"]) { %>' +
								'<%= this._loc("inventoryType." + this["item"]["inventoryType"]) %>' +
								'<div class="darktip-pos-right"><%= this["item"]["itemClassLoc"] %></div>' +
							'<% } else { %>' +
								'<%= this["item"]["itemClassLoc"] %>' +
							'<% } %>' +
						'<% } %>' +
					'</div>' +
					'<% if(this["item"]["baseArmor"]) { %><div class="darktip-row"><%= this._loc("baseArmor") %></div><% } %>' +
					'<% if(this["item"]["weaponInfo"]) { %>' +
						'<div>' +
							'<div class="darktip-row"><%= this._loc("damage", this["item"]["weaponInfo"]["damage"]) %></div>' +
							'<div class="darktip-pos-right"><%= this._loc("weaponSpeed", this["item"]["weaponInfo"]) %></div>' +
							'<div class="darktip-row"><%= this._loc("dps", this["item"]["weaponInfo"]) %></div>' +
						'</div>' +
					'<% } %>' +
					'<%= this._subLoop("templates.fragments.stat.primary", this["item"]["bonusStats"]) %>' +
					'<%= this._subLoop("templates.fragments.stat.secondary", this["item"]["bonusStats"]) %>' +
					'<% if(this["item"]["gemInfo"]) { %><div class="darktip-row"><%= this["item"]["gemInfo"]["bonus"]["name"] %></div><% } %>' +
					'<% if(this["item"]["socketInfo"]) { %><div class="darktip-block darktip-sockets"><%= this._subLoop("templates.fragments.socket", this["item"]["socketInfo"]["sockets"]) %></div><% if(this["item"]["socketInfo"]["socketBonus"]) { %><div class="darktip-row darktip-highlight-reduced"><%= this._loc("socketBonus") %></div><% } %><% } %>' +
					'<% if(this["item"]["allowableClasses"]) { %><div class="darktip-row"><%= this._loc("allowableClasses") %></div><% } %>' +
					'<% if(this["item"]["allowableRaces"]) { %><div class="darktip-row"><%= this._loc("allowableRaces") %></div><% } %>' +
					'<% if(this["item"]["requiredLevel"] > 1) { %><div class="darktip-row"><%= this._loc("requiredLevel") %></div><% } %>' +
					'<% if(this["item"]["requiredSkill"]) { %><div class="darktip-row"><%= this._loc("requiredSkill") %></div><% } %>' +
					'<% if(this["item"]["requiredAbility"]) { %><div class="darktip-row"><%= this._loc("requiredAbility") %></div><% } %>' +
					'<% if(this["item"]["minFactionId"]) { %><div class="darktip-row"><%= this._loc("minFactionId") %></div><% } %>' +
					'<%= this._subLoop("templates.fragments.stat.spell", this["item"]["itemSpells"]) %>' +
					'<% if(this["item"]["description"]) { %><div class="darktip-row darktip-highlight-medium">&quot;<%= this["item"]["description"] %>&quot;</div><% } %>' +
					'<% if(this["item"]["itemSet"]) { %><div class="darktip-row darktip-padded-above">' +
						'<div class="darktip-row darktip-highlight-medium"><%= this["item"]["itemSet"]["name"] %></div>' +
						'<div class="darktip-row darktip-padded-above"><%= this._subLoop("templates.fragments.stat.setBonus", this["item"]["itemSet"]["setBonuses"]) %></div>' +
					'</div><% } %>' +
					'<% if(this["_meta"]["extendedActive"]) { %><div class="darktip-row darktip-info-meta"><%= this._loc("extendedInactive") %></div><% } %>' +
				'</div>' +
				// --- END simple mode -------------------------------------
				// --- START extended mode ---------------------------------
				'<% if(this["_meta"]["extendedActive"]) { %>' +
					'<div class="darktip-col-70 darktip-only-x">' +
						'<div class="darktip-headline-right"><%= this["item"]["itemLevel"] %></div>' +
						'<div class="darktip-row darktip-headline darktip-cquality-<%= this["item"]["quality"] %>"><%= this["item"]["name"] %></div>' +
						'<div class="darktip-row darktip-highlight-strong"><%= this._loc("itemId") %></div>' +
						'<% if(this["item"]["maxDurability"]) { %><div class="darktip-row"><%= this._loc("maxDurability") %></div><% } %>' +
						'<% if(this["item"]["isAuctionable"]) { %><div class="darktip-row"><%= this._loc("auctionable") %></div><% } %>' +
						'<div class="darktip-row"><%= this._loc("disenchantable") %></div>' +
						'<% if(this["item"]["stackable"] > 1) { %><div class="darktip-row"><%= this._loc("stackable") %></div><% } %>' +
						'<div class="darktip-row"><%= this._loc("sellPrice") %></div>' +
						'<div class="darktip-row darktip-info-meta"><%= this._loc("extendedActive") %></div>' +
					'</div>' +
				'<% } %>' +
				// --- END extended mode -----------------------------------
			'</div>'
		),
		'404': (
			'<div class="tooltip-item darktip-tooltip-404">' +
				'<div class="darktip-title">404<span class="darktip-sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.item") %></span> <span class="value"><%= this["itemid"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
			'</div>'
		),
		'fragments': {
			'allowableClass': '<span class="darktip-cclass-<%= this["_value"] %>"><%= this._loc("characterClass." + this["_value"] + ".0")%></span>',
			'allowableRace' : '<span class="crace-<%= this["_value"] %>"><%= this._loc("characterRace." + this["_value"] + ".0")%></span>',
			'coins'         : (
				'<% if(this["gold"] > -1) { %><span class="darktip-icon-gold"><%= this["gold"] %></span><% } %>' +
				'<% if(this["silver"] > -1) { %><span class="darktip-icon-silver"><%= this["silver"] %></span><% } %>' +
				'<% if(this["copper"]) { %><span class="darktip-icon-copper"><%= this["copper"] %></span><% } else { %>' +
				'<span class="darktip-icon-copper">0</span><% } %>'
			),
			'stat'          : {
				'primary'  : (
					'<% if(this._isStatPrimary(this["stat"])) { %>' +
						'<div class="darktip-row">' +
							'<% if(this["amount"] >= 0) { %>+<% } %><%= this["amount"] %> <%= this._loc("itemStat." + this["stat"]) %>' +
						'</div>' +
					'<% }'
				),
				'secondary': (
					'<% if(this._isStatSecondary(this["stat"])) { %>' +
						'<div class="darktip-row darktip-highlight-custom">' +
							'<% if(this["amount"] >= 0) { %>+<% } %><%= this["amount"] %> <%= this._loc("itemStat." + this["stat"]) %>' +
						'</div>' +
					'<% }'
				),
				'spell'    : (
					'<% if(this["spell"]["description"]) { %>' +
						'<div class="darktip-row darktip-highlight-custom">' +
							'<% if(this["trigger"] == "ON_EQUIP") { %>' +
								'<%= this._loc("itemSpell.onEquip") %>' +
							'<% } else if(this["trigger"] == "ON_USE") { %>' +
								'<%= this._loc("itemSpell.onUse") %>' +
							'<% } else if(this["trigger"] == "ON_PROC") { %>' +
								'<%= this._loc("itemSpell.onProc") %>' +
							'<% } else { %>' +
								'<%= this._loc("itemSpell.unknown") %>' +
							'<% } %>' +
						'</div>' +
					'<% } %>'
				),
				'setBonus' : '<div class="darktip-row <% if(this["active"]) { %>darktip-highlight-custom<% } else { %>darktip-highlight-reduced<% } %>"><%= this._loc("setBonus") %></div>'
			},
			'socket': (
				'<div class="darktip-row darktip-socket darktip-highlight-reduced">' +
					'<span class="darktip-icon-socket darktip-socket-<%= this["type"] %>">' +
						'<span class="darktip-empty"></span><span class="darktip-frame"></span>' +
					'</span>' +
					'<%= this._loc("itemSocket." + this["type"]) %>' +
				'</div>'
			)
		}
	},

	'i18n': {
		'en_US': {
			'loading'          : 'Loading item...',
			'not-found'        : 'Item not found',
			'itemId'           : 'Item ID: <%= this["item"]["id"] %>',
			'heroic'           : 'Heroic',
			'maxCount'         : 'Unique<% if(this["item"]["maxCount"] > 1) { %> (<%= this["item"]["maxCount"] %>)<% } %>',
			'containerSlots'   : '<%= this["item"]["containerSlots"] %> Slot <%= this["item"]["itemClassLoc"] %>',
			'damage'           : '<%= this["min"] %> - <%= this["max"] %> Damage',
			'weaponSpeed'      : 'Speed <%= this["weaponSpeed"] %>',
			'dps'              : '(<%= this["dps"].toFixed(2) %> damage per second)',
			'baseArmor'        : '<%= this["item"]["baseArmor"] %> Armor',
			'maxDurability'    : 'Durability <%= this["item"]["maxDurability"] %> / <%= this["item"]["maxDurability"] %>',
			'requiredLevel'    : 'Requires Level <%= this["item"]["requiredLevel"] %>',
			'requiredSkill'    : 'Requires <%= this._loc("characterSkill." + this["item"]["requiredSkill"]) %> (<%= this["item"]["requiredSkillRank"] %>)',
			'requiredAbility'  : 'Requires <%= this["item"]["requiredAbility"]["name"] %>',
			'minFactionId'     : 'Requires Faction ID <%= this["item"]["minFactionId"] %> - <%= this._loc("reputationLevel." + this["item"]["minReputation"]) %>',
			'allowableClasses' : 'Classes: <%= this._subLoop("templates.fragments.allowableClass", this["item"]["allowableClasses"], ", ") %>',
			'allowableRaces'   : 'Races: <%= this._subLoop("templates.fragments.allowableRace", this["item"]["allowableRaces"], ", ") %>',
			'itemStat'         : {
				'3' : 'Agility',
				'4' : 'Strength',
				'5' : 'Intellect',
				'6' : 'Spirit',
				'7' : 'Stamina',
				'25': 'Arcane Resistance',
				'26': 'Fire Resistance',
				'27': 'Nature Resistance',
				'28': 'Frost Resistance',
				'29': 'Shadow Resistance',
				'30': 'Holy Resistance',
				'13': 'Dodge',
				'14': 'Parry',
				'31': 'Hit',
				'32': 'Critical Strike',
				'35': 'Pvp Resilience',
				'36': 'Haste',
				'37': 'Expertise',
				'38': 'Attack Power',
				'46': 'Health Regeneration',
				'45': 'Spell Power',
				'49': 'Mastery',
				'50': 'Armor',
				'57': 'Pvp Power'
			},
			'itemSpell'        : {
				'onEquip': 'Equip: <%= this["spell"]["description"] %>',
				'onUse'  : 'Use: <%= this["spell"]["description"] %>',
				'onProc' : 'Chance on hit: <%= this["spell"]["description"] %>',
				'unknown': '<%= this["spell"]["description"] %>'
			},
			'setBonus'         : '(<%= this["threshold"] %>) Set: <%= this["description"] %>',
			'sellPrice'        : 'Sell Price: <%= this._renderCoins(this["item"]["sellPrice"]) %>',
			'stackable'        : 'Stackable (<%= this["item"]["stackable"] %>)',
			'disenchantable'   : '<% if(this["item"]["disenchantingSkillRank"]) { %>Can be disenchanted (<%= this["item"]["disenchantingSkillRank"] %>)<% } else { %>Cannot be disenchanted<% } %>',
			'auctionable'      : 'Can be auctioned',
			'itemBind'         : { '1': 'Binds when picked up', '2': 'Binds when equipped', '3': 'Binds when used', '4': 'Binds to Battle.net account' },
			'itemSocket'       : {
				'BLUE'     : 'Blue Socket',
				'RED'      : 'Red Socket',
				'YELLOW'   : 'Yellow Socket',
				'META'     : 'Meta Socket',
				'ORANGE'   : 'Orange Socket',
				'PURPLE'   : 'Purple Socket',
				'GREEN'    : 'Green Socket',
				'PRISMATIC': 'Prismatic Socket',
				'HYDRAULIC': 'Hydraulic Socket',
				'COGWHEEL' : 'Cogwheel Socket'
			},
			'socketBonus'      : 'Socket Bonus: <%= this["item"]["socketInfo"]["socketBonus"] %>',
			'reputationLevel'  : { '0': 'Hated', '1': 'Hostile', '2': 'Unfriendly', '3': 'Neutral', '4': 'Friendly', '5': 'Honored', '6': 'Revered', '7': 'Exalted' },
			'inventoryType'   : { '1': 'Head', '2': 'Neck', '3': 'Shoulder', '4': 'Shirt', '5': 'Chest', '6': 'Waist', '7': 'Legs', '8': 'Feet', '9': 'Wrist', '10': 'Hands', '11': 'Finger', '12': 'Trinket', '13': 'One-Hand', '15': 'Ranged' /* Bow */, '16': 'Back', '17': 'Two-Hand', '18': 'Bag', '20': 'Chest', '21': 'Main-hand', '22': 'Off-hand', '23': 'Held in off-hand', '25': 'Ranged' /* Thrown */, '26': 'Ranged' /* Gun, Crossbow, Wand */ }
		},
		'de_DE': {
			'loading'          : 'Lade Gegenstand...',
			'not-found'        : 'Gegenstand nicht gefunden',
			'itemId'           : 'Gegenstands ID: <%= this["item"]["id"] %>',
			'heroic'           : 'Heroisch',
			'maxCount'         : 'Einzigartig<% if(this["item"]["maxCount"] > 1) { %> (<%= this["item"]["maxCount"] %>)<% } %>',
			'containerSlots'   : '<%= this["item"]["containerSlots"] %> Platz <%= this["item"]["itemClassLoc"] %>',
			'damage'           : '<%= this["min"] %> - <%= this["max"] %> Schaden',
			'weaponSpeed'      : 'Geschwindigkeit <%= this["weaponSpeed"] %>',
			'dps'              : '(<%= this["dps"].toFixed(2) %> Schaden pro Sekunde)',
			'baseArmor'        : '<%= this["item"]["baseArmor"] %> R&uuml;stung',
			'maxDurability'    : 'Haltbarkeit <%= this["item"]["maxDurability"] %> / <%= this["item"]["maxDurability"] %>',
			'requiredLevel'    : 'Erfordert Stufe <%= this["item"]["requiredLevel"] %>',
			'requiredSkill'    : 'Erfordert <%= this._loc("characterSkill." + this["item"]["requiredSkill"]) %> (<%= this["item"]["requiredSkillRank"] %>)',
			'requiredAbility'  : 'Erfordert <%= this["item"]["requiredAbility"]["name"] %>',
			'minFactionId'     : 'Erfordert Fraktion ID <%= this["item"]["minFactionId"] %> - <%= this._loc("reputationLevel." + this["item"]["minReputation"]) %>',
			'allowableClasses' : 'Klassen: <%= this._subLoop("templates.fragments.allowableClass", this["item"]["allowableClasses"], ", ") %>',
			'allowableRaces'   : 'Rassen: <%= this._subLoop("templates.fragments.allowableRace", this["item"]["allowableRaces"], ", ") %>',
			'itemStat'         : {
				'3' : 'Beweglichkeit',
				'4' : 'St&auml;rke',
				'5' : 'Intelligenz',
				'6' : 'Willenskraft',
				'7' : 'Ausdauer',
				'25': 'Arkanwiderstand',
				'26': 'Feuerwiderstand',
				'27': 'Naturwiderstand',
				'28': 'Frostwiderstand',
				'29': 'Schattenwiderstand',
				'30': 'Heiligwiderstand',
				'13': 'Ausweichwen',
				'14': 'Parrieren',
				'31': 'Treffer',
				'32': 'Kritische Treffer',
				'35': 'PvP Abh&auml;rtung',
				'36': 'Tempo',
				'37': 'Waffenkunde',
				'38': 'Angriffskraft',
				'46': 'Gesundheitsregenartion',
				'45': 'Zaubermacht',
				'49': 'Meisterschaftswertung',
				'50': 'R&uml;stung',
				'57': 'PvP Macht'
			},
			'itemSpell'        : {
				'onEquip': 'Anlegen: <%= this["spell"]["description"] %>',
				'onUse'  : 'Benutzen: <%= this["spell"]["description"] %>',
				'onProc' : 'Trefferchance: <%= this["spell"]["description"] %>',
				'unknown': '<%= this["spell"]["description"] %>'
			},
			'setBonus'         : '(<%= this["threshold"] %>) Set: <%= this["description"] %>',
			'sellPrice'        : 'Verkaufspreis: <%= this._renderCoins(this["item"]["sellPrice"]) %>',
			'stackable'        : 'Stapelbar (<%= this["item"]["stackable"] %>)',
			'disenchantable'   : '<% if(this["item"]["disenchantingSkillRank"]) { %>Kann entzaubert werden (<%= this["item"]["disenchantingSkillRank"] %>)<% } else { %>Kann nicht entzaubert werden<% } %>',
			'auctionable'      : 'Kann versteigert werden',
			'itemBind'         : { '1': 'Wird beim Aufheben gebunden', '2': 'Wird beim Anlegen gebunden', '3': 'Wird bei Benutzung gebunden', '4': 'Wird an Battle.net-Account gebunden' },
			'itemSocket'       : {
				'BLUE'     : 'Blauer Sockel',
				'RED'      : 'Roter Sockel',
				'YELLOW'   : 'Gelber Sockel',
				'META'     : 'Meta Sockel',
				'ORANGE'   : 'Orangener Sockel',
				'PURPLE'   : 'Lila Sockel',
				'GREEN'    : 'Gr&uuml;ner Sockel',
				'PRISMATIC': 'Prismatischer Sockel',
				'HYDRAULIC': 'Hydraulischer Sockel',
				'COGWHEEL' : 'Zahnrad Sockel'
			},
			'socketBonus'      : 'Sockelbonus: <%= this["item"]["socketInfo"]["socketBonus"] %>',
			'reputationLevel'  : { '0': 'Haßerf&szlig;uuml;llt', '1': 'Feindselig', '2': 'Unfreundlich', '3': 'Neutral', '4': 'Freundlich', '5': 'Wohlwollend', '6': 'Respektvoll', '7': 'Ehrf&uuml;rchtig' },
			'inventoryType'    : { '1': 'Kopf', '2': 'Nacken', '3': 'Schulter', '4': 'Hemd', '5': 'Brust', '6': 'Taille', '7': 'Beine', '8': 'F&uuml;&szlig;e', '9': 'Handgelenke', '10': 'H&auml;nde', '11': 'Finger', '12': 'Schmuckst&uuml;ck', '13': 'Einh&auml;ndig', '15': 'Distanz' /* Bogen */, '16': 'R&uuml;cken', '17': 'Zweih&auml;ndig', '18': 'Tasche', '20': 'Brust', '21': 'Waffenhand', '22': 'Schildhand', '23': 'In Schildhand gef&uuml;hrt', '25': 'Distanz' /* Wurfwaffe */, '26': 'Distanz' /* Gewehr, Armbrust, Zauberstab */ }
		},
		'fr_FR': {
			'loading'          : 'Chargement Objets...',
			'not-found'        : 'Objet introuvable',
			'itemId'           : 'ID Objets: <%= this["item"]["id"] %>',
			'heroic'           : 'H&eacute;roïc',
			'maxCount'         : 'Unique<% if(this["item"]["maxCount"] > 1) { %> (<%= this["item"]["maxCount"] %>)<% } %>',
			'containerSlots'   : '<%= this["item"]["containerSlots"] %> Slot <%= this["item"]["itemClassLoc"] %>',
			'damage'           : '<%= this["min"] %> - <%= this["max"] %> D&eacute;g&acirc;ts',
			'weaponSpeed'      : 'Vitesse <%= this["weaponSpeed"] %>',
			'dps'              : '(<%= this["dps"].toFixed(2) %> domage par second)',
			'baseArmor'        : '<%= this["item"]["baseArmor"] %> Armure',
			'maxDurability'    : 'Durabilit&eacute; <%= this["item"]["maxDurability"] %> / <%= this["item"]["maxDurability"] %>',
			'requiredLevel'    : 'Niveau <%= this["item"]["requiredLevel"] %> requis',
			'requiredSkill'    : 'Requiert <%= this._loc("characterSkill." + this["item"]["requiredSkill"]) %> (<%= this["item"]["requiredSkillRank"] %>)',
			'requiredAbility'  : 'Requiert <%= this["item"]["requiredAbility"]["name"] %>',
			'minFactionId'     : 'Requiert Faction ID <%= this["item"]["minFactionId"] %> - <%= this._loc("reputationLevel." + this["item"]["minReputation"]) %>',
			'allowableClasses' : 'Classes: <%= this._subLoop("templates.fragments.allowableClass", this["item"]["allowableClasses"], ", ") %>',
			'allowableRaces'   : 'Races: <%= this._subLoop("templates.fragments.allowableRace", this["item"]["allowableRaces"], ", ") %>',
			'itemStat'         : {
				'3' : 'Agilit&eacute;',
				'4' : 'Force',
				'5' : 'Intelligence',
				'6' : 'Esprit',
				'7' : 'Endurance',
				'25': 'Arcane Resistance',
				'26': 'Fire Resistance',
				'27': 'Nature Resistance',
				'28': 'Frost Resistance',
				'29': 'Shadow Resistance',
				'30': 'Holy Resistance',
				'13': 'Score d\'esquive',
				'14': 'Score de parade',
				'31': 'Score de toucher',
				'32': 'Score de coup critique',
				'35': 'Score de pvp resilience',
				'36': 'Score de h&acirc;te',
				'37': 'Score d\'expertise',
				'38': 'Puissance d\'attaque',
				'46': 'R&eacute;g&eacute;n&eacute;ration de vie',
				'45': 'Puissance des sorts',
				'49': 'Score maîtrise',
				'50': 'Armor',
				'57': 'Score de pvp power'
			},
			'itemSpell'        : {
				'onEquip': 'Equip&eacute; : <%= this["spell"]["description"] %>',
				'onUse'  : 'Utilis&eacute; : <%= this["spell"]["description"] %>',
				'onProc' : 'Chances quand vous touchez : <%= this["spell"]["description"] %>',
				'unknown': '<%= this["spell"]["description"] %>'
			},
			'setBonus'         : '(<%= this["threshold"] %>) Ensemble : <%= this["description"] %>',
			'sellPrice'        : 'Prix de vente: <%= this._renderCoins(this["item"]["sellPrice"]) %>',
			'stackable'        : 'Empilable (<%= this["item"]["stackable"] %>)',
			'disenchantable'   : '<% if(this["item"]["disenchantingSkillRank"]) { %>Peut &ecirc;tre d&eacute;senchant&eacute; (<%= this["item"]["disenchantingSkillRank"] %>)<% } else { %>Ne peut pas &ecirc;tre d&eacute;senchant&eacute;<% } %>',
			'auctionable'      : 'Peut &ecirc;tre vendu',
			'itemBind'         : { '1': 'Li&eacute; quand ramass&eacute;', '2': 'Li&eacute; quand &eacute;quip&eacute;', '3': 'Li&eacute; quand utilis&eacute;', '4': 'Li&eacute; au compte Battle.net' },
			'itemSocket'       : {
				'BLUE'     : 'Ch&acirc;sse bleue',
				'RED'      : 'Ch&acirc;sse rouge',
				'YELLOW'   : 'Ch&acirc;sse jaune',
				'META'     : 'M&eacute;ta-ch&acirc;sse',
				'ORANGE'   : 'Ch&acirc;sse orange',
				'PURPLE'   : 'Ch&acirc;sse Violette',
				'GREEN'    : 'Ch&acirc;sse verte',
				'PRISMATIC': 'Ch&acirc;sse prismatique',
				'HYDRAULIC': 'Ch&acirc;sse Hydraulique',
				'COGWHEEL' : 'Chambre de roue dent&eacute;e'
			},
			'socketBonus'      : 'Bonus de sertissage: <%= this["item"]["socketInfo"]["socketBonus"] %>',
			'reputationLevel'  : { '0': 'Haï', '1': 'Hostile', '2': 'Inamical', '3': 'Neutre', '4': 'Amical', '5': 'Honor&eacute;', '6': 'R&eacute;v&eacute;r&eacute;', '7': 'Exalt&eacute;' },
			'inventoryType'   : { '1': 'T&ecirc;te', '2': 'Cou', '3': 'Epaule', '4': 'Chemise', '5': 'Torse', '6': 'Taille', '7': 'Jambes', '8': 'Pieds', '9': 'Poignets', '10': 'Mains', '11': 'Doigt', '12': 'Bijou', '13': 'A une mains', '15': 'Ranged' /* Bow */, '16': 'Back', '17': 'A deux mains', '18': 'Sac', '20': 'Torse', '21': 'Main-hand', '22': 'Off-hand', '23': 'Held in off-hand', '25': 'Ranged' /* Thrown */, '26': 'Ranged' /* Gun, Crossbow, Wand */ }
		},
		'es_ES': {
			'loading'          : 'Cargando objeto...',
			'not-found'        : 'Objeto no encontrado',
			'itemId'           : 'ID de Objeto: <%= this["item"]["id"] %>',
			'heroic'           : 'Heroico',
			'maxCount'         : '&Uacute;nico<% if(this["item"]["maxCount"] > 1) { %> (<%= this["item"]["maxCount"] %>)<% } %>',
			'containerSlots'   : '<%= this["item"]["itemClassLoc"] %> con <%= this["item"]["containerSlots"] %> Casillas',
			'damage'           : '<%= this["min"] %> - <%= this["max"] %> Da&ntilde;o',
			'weaponSpeed'      : 'Velocidad <%= this["weaponSpeed"] %>',
			'dps'              : '(<%= this["dps"].toFixed(2) %> da&ntilde;o por segundo)',
			'baseArmor'        : '<%= this["item"]["baseArmor"] %> de armadura',
			'maxDurability'    : 'Durabilidad <%= this["item"]["maxDurability"] %> / <%= this["item"]["maxDurability"] %>',
			'requiredLevel'    : 'Requiere nivel <%= this["item"]["requiredLevel"] %>',
			'requiredSkill'    : 'Requiere <%= this._loc("characterSkill." + this["item"]["requiredSkill"]) %> (<%= this["item"]["requiredSkillRank"] %>)',
			'requiredAbility'  : 'Requiere <%= this["item"]["requiredAbility"]["name"] %>',
			'minFactionId'     : 'Requiere facci&oacute;n con ID <%= this["item"]["minFactionId"] %> - <%= this._loc("reputationLevel." + this["item"]["minReputation"]) %>',
			'allowableClasses' : 'Clases: <%= this._subLoop("templates.fragments.allowableClass", this["item"]["allowableClasses"], ", ") %>',
			'allowableRaces'   : 'Razas: <%= this._subLoop("templates.fragments.allowableRace", this["item"]["allowableRaces"], ", ") %>',
			'itemStat'         : {
				'3' : 'de agilidad',
				'4' : 'de fuerza',
				'5' : 'de intelecto',
				'6' : 'de esp&iacute;ritu',
				'7' : 'de aguante',
				'25': 'Arcane Resistance',
				'26': 'Fire Resistance',
				'27': 'Nature Resistance',
				'28': 'Frost Resistance',
				'29': 'Shadow Resistance',
				'30': 'Holy Resistance',
				'13': 'de esquivar',
				'14': 'de parada',
				'31': 'de golpe',
				'32': 'de golpe cr&iacute;tico',
				'35': 'de pvp temple',
				'36': 'de celeridad',
				'37': 'de pericia',
				'38': 'poder de ataque',
				'46': 'regeneraci&oacute;n de salud',
				'45': 'poder con hechizos',
				'49': '&iacute;ndice de maestr&iacute;a',
				'50': 'Armor',
				'57': 'de pvp power'
			},
			'itemSpell'        : {
				'onEquip': 'Equipar: <%= this["spell"]["description"] %>',
				'onUse'  : 'Uso: <%= this["spell"]["description"] %>',
				'onProc' : 'Probabilidad al acertar: <%= this["spell"]["description"] %>',
				'unknown': '<%= this["spell"]["description"] %>'
			},
			'setBonus'         : '(<%= this["threshold"] %>) Conjunto: <%= this["description"] %>',
			'sellPrice'        : 'Precio de venta: <%= this._renderCoins(this["item"]["sellPrice"]) %>',
			'stackable'        : 'Se puede apilar (<%= this["item"]["stackable"] %>)',
			'disenchantable'   : '<% if(this["item"]["disenchantingSkillRank"]) { %>Se puede desencantar (<%= this["item"]["disenchantingSkillRank"] %>)<% } else { %>No se puede desencantar<% } %>',
			'auctionable'      : 'Se puede subastar',
			'itemBind'         : { '1': 'Se liga al recogerlo', '2': 'Se liga al equiparlo', '3': 'Se liga al usarlo', '4': 'Se liga a la cuenta de Battle.net' },
			'itemSocket'       : {
				'BLUE'     : 'Ranura azul',
				'RED'      : 'Ranura roja',
				'YELLOW'   : 'Ranura amarilla',
				'META'     : 'Ranura meta',
				'ORANGE'   : 'Ranura naranja',
				'PURPLE'   : 'Ranura púrpura',
				'GREEN'    : 'Ranura verde',
				'PRISMATIC': 'Ranura prismática',
				'HYDRAULIC': 'Ranura hidráulica',
				'COGWHEEL' : 'Ranura de engranaje'
			},
			'socketBonus'      : 'Bonus ranura: <%= this["item"]["socketInfo"]["socketBonus"] %>',
			'reputationLevel'  : { '0': 'Odiado', '1': 'Hostil', '2': 'Adverso', '3': 'Neutral', '4': 'Amistoso', '5': 'Honorable', '6': 'Venerado', '7': 'Exaltado' },
			'inventoryType'    : { '1': 'Cabeza', '2': 'Cuello', '3': 'Hombros', '4': 'Camisa', '5': 'Pecho', '6': 'Cintura', '7': 'Piernas', '8': 'Pies', '9': 'Mu&ntilde;equeras', '10': 'Manos', '11': 'Dedo', '12': 'Abalorio', '13': 'Una mano', '15': 'A distancia' /* Bow */, '16': 'Espalda', '17': 'Dos manos', '18': 'Bolsa', '20': 'Pecho', '21': 'Mano derecha', '22': 'Mano izquierda', '23': 'Sostener en mano izquierda', '25': 'Arrojadizas' /* Thrown */, '26': 'Arma a distancia' /* Gun,Crossbow,Wand */ }
		},
		'it_IT': {
			'loading'          : 'Carico oggetto...',
			'not-found'        : 'Oggetto non trovato',
			'itemId'           : 'ID Oggetto: <%= this["item"]["id"] %>',
			'heroic'           : 'Eeroico',
			'maxCount'         : 'Unico equipaggiabile <% if(this["item"]["maxCount"] > 1) { %> (<%= this["item"]["maxCount"] %>)<% } %>',
			'containerSlots'   : '<%= this["item"]["containerSlots"] %> Scomparto <%= this["item"]["itemClassLoc"] %>',
			'damage'           : '<%= this["min"] %> - <%= this["max"] %> Danni',
			'weaponSpeed'      : 'Velocità <%= this["weaponSpeed"] %>',
			'dps'              : '(<%= this["dps"].toFixed(2) %> danni al secondo)',
			'baseArmor'        : '<%= this["item"]["baseArmor"] %> Armatura',
			'maxDurability'    : 'Integrità <%= this["item"]["maxDurability"] %> / <%= this["item"]["maxDurability"] %>',
			'requiredLevel'    : 'Richiede il livello <%= this["item"]["requiredLevel"] %>',
			'requiredSkill'    : 'Richiede <%= this._loc("characterSkill." + this["item"]["requiredSkill"]) %> (<%= this["item"]["requiredSkillRank"] %>)',
			'requiredAbility'  : 'Richiede <%= this["item"]["requiredAbility"]["name"] %>',
			'minFactionId'     : 'Richiede la Fazione <%= this["item"]["minFactionId"] %> - <%= this._loc("reputationLevel." + this["item"]["minReputation"]) %>',
			'allowableClasses' : 'Classi: <%= this._subLoop("templates.fragments.allowableClass", this["item"]["allowableClasses"], ", ") %>',
			'allowableRaces'   : 'Razze: <%= this._subLoop("templates.fragments.allowableRace", this["item"]["allowableRaces"], ", ") %>',
			'itemStat'         : {
				'3' : 'Agilià',
				'4' : 'Forza',
				'5' : 'Intelletto',
				'6' : 'Spirito',
				'7' : 'Tempra',
				'25': 'Resistenza all\'Arcano',
				'26': 'Resistenza al Fuoco',
				'27': 'Resistenza alla Natura',
				'28': 'Resistenza al gelo',
				'29': 'Resistenza all\'Ombra',
				'30': 'Resistenza al Sacro',
				'13': 'Schivata',
				'14': 'Parata',
				'31': 'Impatto',
				'32': 'Indice di Critico',
				'35': 'Resilienza PvP',
				'36': 'Celerità',
				'37': 'Perizia',
				'38': 'Indice di Attacco',
				'46': 'Rigenerazione Salute',
				'45': 'Potenza Magica',
				'49': 'Maestria',
				'50': 'Armatura',
				'57': 'Potenza PvP'
			},
			'itemSpell'        : {
				'onEquip': 'Equipaggia: <%= this["spell"]["description"] %>',
				'onUse'  : 'Usa: <%= this["spell"]["description"] %>',
				'onProc' : 'Probabilità all\'impatto: <%= this["spell"]["description"] %>',
				'unknown': '<%= this["spell"]["description"] %>'
			},
			'setBonus'         : '(<%= this["threshold"] %>) Completo: <%= this["description"] %>',
			'sellPrice'        : 'Costo: <%= this._renderCoins(this["item"]["sellPrice"]) %>',
			'stackable'        : 'Impilabile (<%= this["item"]["stackable"] %>)',
			'disenchantable'   : '<% if(this["item"]["disenchantingSkillRank"]) { %>Può essere disincantato (<%= this["item"]["disenchantingSkillRank"] %>)<% } else { %>Non può essere disincantato<% } %>',
			'auctionable'      : 'Può essere venduto all\'asta',
			'itemBind'         : { '1': 'Vincola alla raccolta', '2': 'Vincola all\'equipaggiamento', '3': 'Vincola all\'uso', '4': 'Vincola all\'account Battle.net' },
			'itemSocket'       : {
				'BLUE'     : 'Incavo Blu',
				'RED'      : 'Incavo Rosso',
				'YELLOW'   : 'Incavo Giallo',
				'META'     : 'Incavo Meta',
				'ORANGE'   : 'Incavo Arancione',
				'PURPLE'   : 'Incavo Viola',
				'GREEN'    : 'Incavo Verde',
				'PRISMATIC': 'Incavo Prismatico',
				'HYDRAULIC': 'Incavo Idraulico',
				'COGWHEEL' : 'Incavo Ingranaggio'
			},
			'socketBonus'      : 'Bonus incavo: <%= this["item"]["socketInfo"]["socketBonus"] %>',
			'reputationLevel'  : { '0': 'Odiato', '1': 'Ostile', '2': 'Avverso', '3': 'Neutrale', '4': 'Amichevole', '5': 'Onorato', '6': 'Reverito', '7': 'Osannato' },
			'inventoryType'   : { '1': 'Testa', '2': 'Collo', '3': 'Spalle', '4': 'Camicia', '5': 'Torso', '6': 'Fianchi', '7': 'Gambe', '8': 'Piedi', '9': 'Polsi', '10': 'Mani', '11': 'Dita', '12': 'Monile', '13': 'A una Mano', '15': 'A Distanza' /* Bow */, '16': 'Schiena', '17': 'A due mani', '18': 'Borsa', '20': 'Torso', '21': 'Mano primaria', '22': 'Mano secondaria', '23': 'Accessorio', '25': 'Da Tiro' /* Thrown */, '26': 'A distanza' /* Gun, Crossbow, Wand */ }
		}
	}

});


DarkTip.registerModule('d3', {

	'triggers': {
		'apiParams': {
			'callback': 'callback'
		}
	},

	'path': {
		'icon_small' : '/d3/icons/skills/21/<%= this["icon_slug"] %>.png',
		'icon_medium': '/d3/icons/skills/42/<%= this["icon_slug"] %>.png'
	},

	'maps': {
		'host': {
			'region': {
				'us.battle.net'       : 'us',
				'eu.battle.net'       : 'eu',
				'kr.battle.net'       : 'kr',
				'tw.battle.net'       : 'tw',
				'www.battlenet.com.cn': 'cn'
			}
		},
		'region': {
			'host': {
				'us': 'us.battle.net',
				'eu': 'eu.battle.net',
				'kr': 'kr.battle.net',
				'tw': 'tw.battle.net',
				'cn': 'www.battlenet.com.cn' /* 'cn.battle.net' */
			},
			'mediahost': {
				'us': 'us.media.blizzard.com',
				'eu': 'eu.media.blizzard.com',
				'kr': 'kr.media.blizzard.com',
				'tw': 'us.media.blizzard.com',
				'cn': 'content.battlenet.com.cn'
			}
		},
		'region+lang': {
			'locale': {
				'us+en': 'en_US',
				'us+es': 'es_MX',
				'eu+en': 'en_GB',
				'eu+it': 'it_IT',
				'eu+es': 'es_ES',
				'eu+pt': 'pt_PT',
				'eu+fr': 'fr_FR',
				'eu+ru': 'ru_RU',
				'eu+pl': 'pl_PL',
				'eu+de': 'de_DE',
				'kr+ko': 'ko_KR',
				'kr+en': 'en_US',
				'tw+zh': 'zh_TW',
				'tw+en': 'en_US',
				'cn+zh': 'zh_CN',
				'cn+en': 'en_US'
			}
		}
	},

	'layout': {
		'css': {
			'class': 'darktip-tooltip-d3'
		}
	},

	'prepareData': function(state) {
		if(Object.keys(state['data']).length === 0) {
			return false;
		}
		return state['data'];
	},

	'enhanceData': function(module, params, data) {
		var add = {
			'_meta': {
				'path_host'      : 'http://' + params['host'],
				'path_host_media': 'http://' + DarkTip.map('wow', 'maps.region.mediahost', params['region']),
				'region'         : params['region'],
				'locale'         : params['locale'],
				'module'         : module
			}
		};
		DarkTip.jq.extend(true, data, add);
		return data;
	},

	'templates': {
		'tools': {
			'_renderDateTime': function(datetime) {
				var date = new Date(datetime);
				var temp = {
					'year'  : date.getFullYear(),
					'month' : date.getMonth() + 1,
					'day'   : date.getDate(),
					'hour'  : date.getHours(),
					'minute': date.getMinutes(),
					'second': date.getSeconds(),
					'ampm'  : { 'flag': '', 'hour': 0 }
				};
				if(temp['hour'] == 0)
				{
					temp['ampm']['flag'] = 'AM';
					temp['ampm']['hour'] = temp['hour'] + 12;
				}
				else if(temp['hour'] < 12)
				{
					temp['ampm']['flag'] = 'AM';
					temp['ampm']['hour'] = temp['hour'];
				}
				else if(temp['hour'] == 12)
				{
					temp['ampm']['flag'] = 'PM';
					temp['ampm']['hour'] = temp['hour'];
				}
				else
				{
					temp['ampm']['flag'] = 'PM';
					temp['ampm']['hour'] = temp['hour'] - 12;
				}
				return this._loc('datetime', temp);
			},
			'_padZero': function(number, width) {
				width -= number.toString().length;
				if(width > 0)
				{
					return new Array(width + (/\./.test(number) ? 2 : 1)).join('0') + number;
				}
				return number;
			}
		}
	},

	'i18n': {
		'en_US': {
			'loading'  : 'Loading d3 data...',
			'not-found': 'Data not found',
			'not-used' : 'Not used',
			'label'    : {
				'slot'       : 'Slot:',
				'region'     : 'Region:',
				'item'       : 'Item:',
				'battletag'  : 'Battle Tag:',
				'character'  : 'Character:',
				'achievement': 'Achievement:'
			},
			'characterGender': {
				'0': 'Male',
				'1': 'Female'
			},
			'characterClass': {
				'barbarian'   : { '0': 'Barbarian',    '1': 'Barbarian' },
				'demon-hunter': { '0': 'Demon Hunter', '1': 'Demon Hunter' },
				'monk'        : { '0': 'Monk',         '1': 'Monk' },
				'witch-doctor': { '0': 'Witch Doctor', '1': 'Witch Doctor' },
				'wizard'      : { '0': 'Wizard',       '1': 'Wizard' },
				'crusader'    : { '0': 'Crusader',     '1': 'Crusader' }
			},
			'followerType': {
				'templar'    : 'Templar',
				'scoundrel'  : 'Scoundrel',
				'enchantress': 'Enchantress'
			},
			'artisanType': {
				'blacksmith': 'Blacksmith',
				'jeweler'   : 'Jeweler'
			},
			'difficultyType': {
				'normal'   : 'Normal',
				'nightmare': 'Nightmare',
				'hell'     : 'Hell',
				'inferno'  : 'Inferno'
			},
			'actName': {
				'act1': 'Act 1',
				'act2': 'Act 2',
				'act3': 'Act 3',
				'act4': 'Act 4'
			},
			'datetime': '<%= this._loc("date") %> <%= this._loc("time") %> ',
			'date'    : '<%= this._padZero(this["month"], 2) %>/<%= this._padZero(this["day"], 2) %>/<%= this["year"] %>',
			'time'    : '<%= this._padZero(this["ampm"]["hour"], 2) %>:<%= this._padZero(this["minute"], 2) %>:<%= this._padZero(this["second"], 2) %> <%= this["ampm"]["flag"] %>'
		},
		'de_DE': {
			'loading'  : 'Lade D3 Daten...',
			'not-found': 'Keine Daten gefunden',
			'not-used' : 'Ungenutzt',
			'label'    : {
				'slot'       : 'Slot:',
				'region'     : 'Region:',
				'item'       : 'Gegenstand:',
				'battletag'  : 'Battletag:',
				'character'  : 'Charakter:',
				'achievement': 'Erfolg:'
			},
			'characterGender': {
				'0': 'Männlich',
				'1': 'Weiblich'
			},
			'characterClass': {
				'barbarian'   : { '0': 'Barbar',       '1': 'Barbarin' },
				'demon-hunter': { '0': 'Dämonenjäger', '1': 'Dämonenjägerin' },
				'monk'        : { '0': 'Mönch',        '1': 'Mönch' },
				'witch-doctor': { '0': 'Hexendoktor',  '1': 'Hexendoktor' },
				'wizard'      : { '0': 'Zauberer',     '1': 'Zauberin' },
				'crusader'    : { '0': 'Kreuzritter',  '1': 'Kreuzritter' }
			},
			'followerType': {
				'templar'    : 'Templer',
				'scoundrel'  : 'Schuft',
				'enchantress': 'Verzauberin'
			},
			'artisanType': {
				'blacksmith': 'Schmied',
				'jeweler'   : 'Juwelier'
			},
			'difficultyType': {
				'normal'   : 'Normal',
				'nightmare': 'Alptraum',
				'hell'     : 'Hölle',
				'inferno'  : 'Inferno'
			},
			'actName': {
				'act1': 'Akt 1',
				'act2': 'Akt 2',
				'act3': 'Akt 3',
				'act4': 'Akt 4'
			},
			'datetime': '<%= this._loc("date") %> <%= this._loc("time") %> ',
			'date'    : '<%= this._padZero(this["day"], 2) %>.<%= this._padZero(this["month"], 2) %>.<%= this["year"] %>',
			'time'    : '<%= this._padZero(this["hour"], 2) %>:<%= this._padZero(this["minute"], 2) %>:<%= this._padZero(this["second"], 2) %>'
		},
		'fr_FR': {
			'datetime': '<%= this._loc("date") %> <%= this._loc("time") %> ',
			'date'    : '<%= this._padZero(this["day"], 2) %>-<%= this._padZero(this["month"], 2) %>-<%= this["year"] %>',
			'time'    : '<%= this._padZero(this["hour"], 2) %>:<%= this._padZero(this["minute"], 2) %>:<%= this._padZero(this["second"], 2) %>'
		},
		'es_ES': {
			'datetime': '<%= this._loc("date") %> <%= this._loc("time") %> ',
			'date'    : '<%= this._padZero(this["day"], 2) %>/<%= this._padZero(this["month"], 2) %>/<%= this["year"] %>',
			'time'    : '<%= this._padZero(this["hour"], 2) %>:<%= this._padZero(this["minute"], 2) %>:<%= this._padZero(this["second"], 2) %>'
		}
	}

});

DarkTip.registerModule('d3.profile', {

	'triggers': {
		'explicit': {
			'match' : /d3\.profile:(us|eu|kr|tw|cn)\.([^\-]+)-(\d+)\((en|de|it|fr|es|pt|pl|ru|ko|zh)\)/i,
			'params': {
				'1': 'region',
				'2': 'battletag_name',
				'3': 'battletag_code',
				'4': 'lang'
			}
		},
		'implicit': {
			'match' : /(?:https?:\/\/)?(us\.battle\.net|eu\.battle\.net|kr\.battle\.net|tw\.battle\.net|cn\.battle\.net|www\.battlenet\.com\.cn)\/d3\/(en|de|it|fr|es|pt|pl|ru|ko|zh)\/profile\/([^\-]+)\-(\d+).*/i,
			'params': {
				'1': 'host',
				'2': 'lang',
				'3': 'battletag_name',
				'4': 'battletag_code'
			}
		}
	},

	'queries': {
		'profile': {
			'required' : true,
			'condition': true,
			'call'     : '//{host}/api/d3/profile/{battletag_name}-{battletag_code}/?locale={locale}',
			'caching'  : (60 * 60 * 4)
		}
	},

	'getParams': {
		'explicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('d3.profile', 'triggers.explicit.params')));
			params['host']   = DarkTip.map('d3', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('d3', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		},
		'implicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('d3.profile', 'triggers.implicit.params')));
			params['region'] = DarkTip.map('d3', 'maps.host.region', params['host']);
			params['locale'] = DarkTip.map('d3', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		}
	},

	'layout': {
		'width': {
			'core': 320
		}
	},

	'prepareData': function(state) {
		if((typeof state['data'] === 'object') && (typeof state['data']['profile'] === 'object') && (typeof state['data']['profile']['battleTag'] === 'string'))
		{
			var classorder = ['barbarian', 'crusader', 'demon-hunter', 'monk', 'witch-doctor', 'wizard'];
			var numclasses = classorder.length;

			// #################### BattleTag ####################
			var parsed = {};
			var temp   = state['data']['profile']['battleTag'].split('#', 2);

			parsed['compiled'] = state['data']['profile']['battleTag'];
			parsed['name']     = temp[0];
			parsed['code']     = temp[1];

			state['data']['profile']['battleTag'] = parsed;

			// ################ Hightlighted heroes ################
			state['data']['profile']['heroesHighlighted'] = [];

			numheroes = Math.min(3, state['data']['profile']['heroes'].length);

			for(var i = 0; i < numheroes; i++)
			{
				state['data']['profile']['heroesHighlighted'].push(state['data']['profile']['heroes'][i])
			}

			// #################### Last online ####################
			state['data']['profile']['lastUpdated'] = state['data']['profile']['lastUpdated'] * 1000;

			// #################### Played time ####################
			var time_played_total = 0;

			for (var i = 0; i < numclasses; i++)
			{
				time_played_total += state['data']['profile']['timePlayed'][classorder[i]] || 0;
			}

			if(time_played_total > 0)
			{
				state['data']['profile']['timePlayed']['total']    = time_played_total;
				state['data']['profile']['timePlayed']['perClass'] = [];

				var control = 100;

				for (var i = 0; i < numclasses; i++)
				{
					var payload = {
						'class'          : classorder[i],
						'relative'       : state['data']['profile']['timePlayed'][classorder[i]],
						'relativePercent': state['data']['profile']['timePlayed'][classorder[i]] * 100,
						'absolute'       : Math.round((state['data']['profile']['timePlayed'][classorder[i]] / time_played_total) * 100)
					};

					if (i == (numclasses -1))
					{
						payload['absolute'] = control;
					}
					else
					{
						control -= payload['absolute'];
					}

					state['data']['profile']['timePlayed']['perClass'].push(payload);
				}
			}

			// #################### Fin ####################
			return state['data'];
		}

		return false;

		if(Object.keys(state['data']).length === 0) {
			return false;
		}
		if(typeof state['data']['profile'] === 'undefined') {
			return false;
		}
		if(state['data']['profile']['code'] === 'OOPS') {
			return false;
		}
		return state['data'];
	},

	'templates': {
		'core': (
			'<div class="tooltip-profile">' +
				/* --- START simple mode -------------------------------- */
				'<div class="darktip-only-s">' +
					'<div class="darktip-headline-right"><span class="darktip-icon-paragon"><%= this["profile"]["paragonLevel"] %><% if(this["profile"]["paragonLevelHardcore"] > 0) { %> / <span class="darktip-dcolor-hardcore"><%= this["profile"]["paragonLevelHardcore"] %></span><% } %></span></div>' +
					'<div class="darktip-row darktip-headline"><span class="darktip-battletag-name"><%= this["profile"]["battleTag"]["name"] %></span> <span class="battletag-code sub">#<%= this["profile"]["battleTag"]["code"] %></span></div>' +
					'<% if((this["profile"]["heroesHighlighted"]) && (this["profile"]["heroesHighlighted"].length > 0)) { %>' +
						'<div class="darktip-row darktip-heroes-highlighted">' +
							'<%= this._subLoop("templates.fragments.hero_deco", this["profile"]["heroesHighlighted"]) %>' +
						'</div>' +
					'<% } %>' +
					'<% if(this["profile"]["timePlayed"]["perClass"]) { %>' +
						'<div class="darktip-row darktip-time-played darktip-padded-above">' +
							'<%= this._subLoop("templates.fragments.timeplayed", this["profile"]["timePlayed"]["perClass"]) %>' +
						'</div>' +
					'<% } %>' +
					'<div class="darktip-row darktip-padded-above darktip-highlight-reduced"><%= this._loc("lastOnline") %></div>' +
					'<% if(this["_meta"]["extendedActive"]) { %><div class="darktip-row darktip-info-meta"><%= this._loc("extendedInactive") %></div><% } %>' +
				'</div>' +
				/* --- END simple mode ---------------------------------- */
				/* --- START extended mode ------------------------------ */
				'<% if(this["_meta"]["extendedActive"]) { %>' +
					'<div class="darktip-only-x">' +
						'<div class="darktip-headline-right"><span class="darktip-icon-star"><%= this["profile"]["kills"]["elites"] %></span></div>' +
						'<div class="darktip-row darktip-headline"><span class="darktip-battletag-name"><%= this["profile"]["battleTag"]["name"] %></span> <span class="battletag-code sub">#<%= this["profile"]["battleTag"]["code"] %></span></div>' +
						'<% if((this["profile"]["heroes"]) && (this["profile"]["heroes"].length > 0)) { %>' +
							'<div class="darktip-row darktip-heroes-list">' +
								'<%= this._subLoop("templates.fragments.hero_list", this["profile"]["heroes"]) %>' +
							'</div>' +
						'<% } %>' +
						'<div class="darktip-row darktip-info-meta"><%= this._loc("extendedActive") %></div>' +
					'</div>' +
				'<% } %>' +
				/* --- END extended mode -------------------------------- */
			'</div>'
		),
		'404': (
			'<div class="tooltip-profile darktip-tooltip-404">' +
				'<div class="darktip-title">404<span class="darktip-sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.battletag") %></span> <span class="value"><%= this["battletag_name"] %>-<%= this["battletag_code"] %></span></div>' +
				'<div class="darktip-row"><span class="darktip-label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
			'</div>'
		),
		'fragments': {
			'hero_deco': (
				'<div class="darktip-hero-portrait-frame darktip-<% if(this["hardcore"]) { %>hardcore<% } else { %>normal<% } %>">' +
					'<div class="darktip-hero darktip-hero-portrait darktip-<%= this["class"] %>-<%= this["gender"] %>"></div><div class="darktip-textbox"><span class="darktip-level"><%= this["level"] %></span><span class="class darktip-ccolor-<%= this["class"] %>"><%= this["name"] %></span></div>' +
				'</div>'
			),
			'timeplayed': (
				'<div class="darktip-container">' +
					'<div class="darktip-hero-badge darktip-<%= this["class"] %>">' +
						'<% if(this["relative"] > 0) { %>' +
							'<div class="darktip-hero-badge darktip-overlay" style="height: <%= this["relativePercent"] %>%;"></div>' +
						'<% } %>' +
					'</div>' +
					'<div class="darktip-label"><%= this["absolute"] %>%</div>' +
				'</div>'
			),
			'hero_list': (
				'<div class="darktip-row darktip-padded <% if(this["hardcore"]) { %>hardcore<% } else { %>normal<% } %><% if(this["_loop"] % 2 == 0) { %> alt<% } %>">' +
					'<span class="darktip-name"><%= this["name"] %></span>' +
					'<span class="darktip-level"><%= this["level"] %></span>' +
					'<span class="darktip-class darktip-ccolor-<%= this["class"] %>"><%= this._loc("characterClass." + this["class"] + "." + this["gender"]) %></span>' +
				'</div>'
			)
		}
	},

	'i18n': {
		'en_US': {
			'loading'   : 'Loading profile...',
			'not-found' : 'Profile not found',
			'hardcore'  : 'Hardcore',
			'lastOnline': 'Last online: <%= this._renderDateTime(this["profile"]["lastUpdated"]) %>'
		},
		'de_DE': {
			'loading'   : 'Lade Profil...',
			'not-found' : 'Profil nicht gefunden',
			'hardcore'  : 'Hardcore',
			'lastOnline': 'Zuletzt online: <%= this._renderDateTime(this["profile"]["lastUpdated"]) %>'
		},
		'fr_FR': {
		},
		'es_ES': {
		}
	}

});
