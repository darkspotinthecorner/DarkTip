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

	/* ### EXPORT ######################################################## */

	if (typeof exports === 'object') {
		module.exports = tools;
	} else {
		DarkTip.tools = tools;
	}

})();
