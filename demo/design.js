/* DarkTip by Martin Gelder (Dark Spot in the Corner), Copyright (c) 2014 */

DarkTip.triggerGroup('implicit', 'a[href]', 'hover');
DarkTip.triggerGroup('explicit', '[data-darktip]', 'hover');

DarkTip.module('wow.item', ['wow'])
	.apicall('wow-item', '//{host}/api/wow/item/{itemid}?locale={locale}')
	.trigger('implicit', [DarkTip.extractorFn(/regex/i, {'1': 'foo', '2': 'bar'})])
	.trigger('explicit', [DarkTip.extractorFn(/other/i, {'1': 'foo', '2': 'bar'})])
	.settings({'templates': {'success': 'item-200', 'failed': 'item-404'}})
	.template('item-200', 'A template string')
	.template('item-404', 'Other template string')
	.register();

DarkTip.registerModule('wow.wowhead.item', ['wow.item', 'wow.wowhead'])
	.trigger('implicit', [DarkTip.extractorFn(/regex/i, {'1': 'foo', '2': 'bar'})])


var templates = {
	'api_helper_1': '{@api query="queryid"}{/api}',
};