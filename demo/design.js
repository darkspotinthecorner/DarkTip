/* DarkTip by Martin Gelder (Dark Spot in the Corner), Copyright (c) 2014 */

DarkTip.triggerGroup('implicit')
	.event('a[href]', 'hover', function(elem) { return elem.getAttribute('href'); });

DarkTip.triggerGroup('explicit')
	.event('[data-darktip]', 'hover', function(elem) { return elem.getAttribute('data-darktip'); });

DarkTip.module('wow')
	.apicall('wow-data-battlegroups',           '//{host}/wow/data/battlegroups?locale={locale}')
	.apicall('wow-data-character-races',        '//{host}/wow/data/character/races?locale={locale}')
	.apicall('wow-data-character-classes',      '//{host}/wow/data/character/classes?locale={locale}')
	.apicall('wow-data-character-achievements', '//{host}/wow/data/character/achievements?locale={locale}')
	.apicall('wow-data-guild-rewards',          '//{host}/wow/data/guild/rewards?locale={locale}')
	.apicall('wow-data-guild-perks',            '//{host}/wow/data/guild/perks?locale={locale}')
	.apicall('wow-data-guild-achievements',     '//{host}/wow/data/guild/achievements?locale={locale}')
	.apicall('wow-data-item-classes',           '//{host}/wow/data/item/classes?locale={locale}')
	.apicall('wow-data-talents',                '//{host}/wow/data/talents?locale={locale}')
	.apicall('wow-data-pet-types',              '//{host}/wow/data/pet/types?locale={locale}')
	.i18n('en_GB', {
		'Loading': 'Loading'
	})
	i18n('de_DE', {
		'Loading': 'Laden'
	})
	.template('loading-template', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="white" title="{@i18n t="Loading"/}..."><path transform="translate(2)" d="M0 12 V20 H4 V12z"> <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline"  /></path><path transform="translate(8)" d="M0 12 V20 H4 V12z"><animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.2" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline"  /></path><path transform="translate(14)" d="M0 12 V20 H4 V12z"><animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.4" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" /></path><path transform="translate(20)" d="M0 12 V20 H4 V12z"><animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.6" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" /></path><path transform="translate(26)" d="M0 12 V20 H4 V12z"><animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.8" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" /></path></svg>');


DarkTip.module('wow.item', ['wow'])
	.apicall('wow-item', '//{host}/wow/item/{itemid}?locale={locale}')
	.trigger('implicit', [DarkTip.extractorFn(/regex/i, {'1': 'itemid', '2': 'locale'})])
	.trigger('explicit', [DarkTip.extractorFn(/other/i, {'1': 'itemid', '2': 'locale'})])
	.template('main-template', 'something {cool}...')
	.loading('loading-template')
	.done('main-template');

DarkTip.registerModule('wow.character', ['wow'])
	.trigger('implicit', /* register cooler ;) */);

/*
	What will be stacked
	-> partials / templates
	-> translations
	-> api calls
	-> i18n
	-> maps
// */