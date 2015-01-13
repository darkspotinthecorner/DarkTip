// Paul Irish's console.log() wrapper // http://paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
if(!window.log) {
	window.log=function(){log.history=log.history||[];log.history.push(arguments);if(this.console){console.log(Array.prototype.slice.call(arguments))}};
}