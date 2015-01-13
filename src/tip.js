var sheet = (function() {
	var style = document.createElement('style');
	style.setAttribute('media', 'screen');
	style.appendChild(document.createTextNode(''));
	document.head.appendChild(style);
	return style.sheet;
})();

function addCSSRule(sheet, selector, rules, index) {
	if('insertRule' in sheet) {
		sheet.insertRule(selector + '{' + rules + '}', index);
		return true;
	}
	else if('addRule' in sheet) {
		sheet.addRule(selector, rules, index);
		return true;
	}
	return false;
}
