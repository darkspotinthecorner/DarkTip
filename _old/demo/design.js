var DarkTip = {
	triggerGroup = function(name) {

	};
};

DarkTip.triggerGroup('implicit').event('a[href]', 'hover', function(elem) { return elem.getAttribute('href'); });
DarkTip.triggerGroup('explicit').event('[data-darktip]', 'hover', function(elem) { return elem.getAttribute('data-darktip'); });
