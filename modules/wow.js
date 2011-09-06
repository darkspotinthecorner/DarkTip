DarkTip.registerModule('wow', {
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
				'cn': 'www.battlenet.com.cn'
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
				'eu+es': 'es_ES',
				'eu+fr': 'fr_FR',
				'eu+ru': 'ru_RU',
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
	
	'validateData': function(data) {
		if(typeof data === 'undefined') {
			return false;
		}
		return data;
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
		jQuery.extend(true, data, add);
		return data;
	},
	
	'i18n': {
		'en_US': {
			'loading'       : 'Loading wow data...',
			'not-found'     : 'Data not found',
			'label'         : {
				'realm' : 'Realm:',
				'quest' : 'Quest:',
				'region': 'Region:',
				'item'  : 'Item:'
			},
			'characterClass': {
				'1' : {
					'0': 'Warrior',
					'1': 'Warrior'
				},
				'2' : {
					'0': 'Paladin',
					'1': 'Paladin'
				},
				'3' : {
					'0': 'Hunter',
					'1': 'Hunter'
				},
				'4' : {
					'0': 'Rogue',
					'1': 'Rogue'
				},
				'5' : {
					'0': 'Priest',
					'1': 'Priest'
				},
				'6' : {
					'0': 'Death Knight',
					'1': 'Death Knight'
				},
				'7' : {
					'0': 'Shaman',
					'1': 'Shaman'
				},
				'8' : {
					'0': 'Mage',
					'1': 'Mage'
				},
				'9' : {
					'0': 'Warlock',
					'1': 'Warlock'
				},
				'11': {
					'0': 'Druid',
					'1': 'Druid'
				}
			},
			'characterRace' : {
				'1' : 'Human',
				'2' : 'Orc',
				'3' : 'Dwarf',
				'4' : 'Night Elf',
				'5' : 'Forsaken',
				'6' : 'Tauren',
				'7' : 'Gnome',
				'8' : 'Troll',
				'9' : 'Goblin',
				'10': 'Blood Elf',
				'11': 'Draenei',
				'22': 'Worgen'
			}
		}
	}
	
});