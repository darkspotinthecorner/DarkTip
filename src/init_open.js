window.___DarkTipSettings['unbindJQuery'] = ((window.jQuery && !DarkTip.checkRequirements('jquery', window.jQuery().jquery)) ? true : false);

yepnope([{
	'test'    : (window.jQuery && DarkTip.checkRequirements('jquery', window.jQuery().jquery)),
	'nope'    : (window.___DarkTipSettings['jquery'] || 'http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'),
	'complete': function() {