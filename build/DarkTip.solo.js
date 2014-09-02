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