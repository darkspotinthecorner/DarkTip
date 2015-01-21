(function(){

	var Tools = {};

	/* ### ELEMENTS ######################################################## */

	Tools.element = {};

	Tools.element.hasClass = function(el, className) {
		if (el.classList) {
			return el.classList.contains(className);
		} else {
			return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
		}
	}

	Tools.element.addClass = function(el, className) {
		if (el.classList) {
			el.classList.add(className);
		} else {
			el.className += ' ' + className;
			el.className = el.className.trim();
		}
	};

	Tools.element.removeClass = function(el, className) {
		if (el.classList) {
			el.classList.remove(className);
		} else {
			el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		}
	};

	Tools.element.toggleClass = function(el, className) {
		if (el.classList) {
			el.classList.toggle(className);
		} else {
			if (Tools.element.hasClass(el, className)) {
				Tools.element.removeClass(el, className);
			} else {
				Tools.element.addClass(el, className);
			}
		}
	}

	if (typeof exports === 'object') {
		module.exports = Tools;
	} else {
		DarkTip.Tools = Tools;
	}

})();
