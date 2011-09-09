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
		DarkTip.jq.extend(true, data, add);
		return data;
	},
	
	'i18n': {
		'en_US': {
			'loading'  : 'Loading wow data...',
			'not-found': 'Data not found',
			'not-used' : 'Not used',
			'label'    : {
				'realm'    : 'Realm:',
				'quest'    : 'Quest:',
				'region'   : 'Region:',
				'item'     : 'Item:',
				'character': 'Character:',
				'guild'    : 'Guild:',
				'teamname' : 'Team name:',
				'teamsize' : 'Team size:'
			},
			'factionSide'   : {
				'0'       : 'Alliance',
				'1'       : 'Horde',
				'alliance': 'Alliance',
				'horde'   : 'Horde'
			},
			'characterClass': {
				'1' : { '0': 'Warrior',      '1': 'Warrior' },
				'2' : { '0': 'Paladin',      '1': 'Paladin' },
				'3' : { '0': 'Hunter',       '1': 'Hunter' },
				'4' : { '0': 'Rogue',        '1': 'Rogue' },
				'5' : { '0': 'Priest',       '1': 'Priest' },
				'6' : { '0': 'Death Knight', '1': 'Death Knight' },
				'7' : { '0': 'Shaman',       '1': 'Shaman' },
				'8' : { '0': 'Mage',         '1': 'Mage' },
				'9' : { '0': 'Warlock',      '1': 'Warlock' },
				'11': { '0': 'Druid',        '1': 'Druid' }
			},
			'characterRace' : {
				'1' : { '0': 'Human',     '1': 'Human' },
				'2' : { '0': 'Orc',       '1': 'Orc' },
				'3' : { '0': 'Dwarf',     '1': 'Dwarf' },
				'4' : { '0': 'Night Elf', '1': 'Night Elf' },
				'5' : { '0': 'Forsaken',  '1': 'Forsaken' },
				'6' : { '0': 'Tauren',    '1': 'Tauren' },
				'7' : { '0': 'Gnome',     '1': 'Gnome' },
				'8' : { '0': 'Troll',     '1': 'Troll' },
				'9' : { '0': 'Goblin',    '1': 'Goblin' },
				'10': { '0': 'Blood Elf', '1': 'Blood Elf' },
				'11': { '0': 'Draenei',   '1': 'Draenei' },
				'22': {	'0': 'Worgen',	  '1': 'Worgen' }
			},
			'characterSkill'   : {
				'129': 'First Aid',
				'164': 'Blacksmithing',
				'165': 'Leatherworking',
				'171': 'Alchemy',
				'182': 'Herbalism',
				'185': 'Cooking',
				'186': 'Mining',
				'197': 'Tailoring',
				'202': 'Engineering',
				'333': 'Enchanting',
				'356': 'Fishing',
				'393': 'Skinning',
				'755': 'Jewelcrafting',
				'762': 'Riding',
				'773': 'Inscription',
				'794': 'Archeology'
			}
		},
		'de_DE': {
			'loading'  : 'Lade WoW Daten...',
			'not-found': 'Keine Daten gefunden',
			'not-used' : 'Ungenutzt',
			'label'    : {
				'realm'    : 'Realm:',
				'quest'    : 'Quest:',
				'region'   : 'Region:',
				'item'     : 'Gegenstand:',
				'character': 'Charakter:',
				'guild'    : 'Gilde:',
				'teamname' : 'Teamname:',
				'teamsize' : 'Teamgröße:'
			},
			'factionSide': {
				'0'       :'Allianz',
				'1'       :'Horde',
				'alliance':'Allianz',
				'horde'   :'Horde'
			},
			'characterClass': {
				'1' : { '0':'Krieger',      '1':'Kriegerin' },
				'2' : { '0':'Paladin',      '1':'Paladin' },
				'3' : { '0':'Jäger',        '1':'Jägerin' },
				'4' : { '0':'Schurke',      '1':'Schurkin' },
				'5' : { '0':'Priester',     '1':'Priesterin' },
				'6' : { '0':'Todesritter',  '1':'Todesritter' },
				'7' : { '0':'Schamane',     '1':'Schamanin' },
				'8' : { '0':'Magier',       '1':'Magierin' },
				'9' : { '0':'Hexenmeister', '1':'Hexenmeisterin' },
				'11': { '0':'Druide',       '1':'Druidin' }
			},
			'characterRace': {
				'1' : { '0':'Mensch',   '1':'Mensch' },
				'2' : { '0':'Orc',      '1':'Orc' },
				'3' : { '0':'Zwerg',    '1':'Zwerg' },
				'4' : { '0':'Nachtelf', '1':'Nachtelfe' },
				'5' : { '0':'Untoter',  '1':'Untote' },
				'6' : { '0':'Tauren',   '1':'Tauren' },
				'7' : { '0':'Gnom',     '1':'Gnom' },
				'8' : { '0':'Troll',    '1':'Troll' },
				'9' : { '0':'Goblin',   '1':'Goblin' },
				'10': { '0':'Blutelf',  '1':'Blutelfe' },
				'11': { '0':'Draenei',  '1':'Draenei' },
				'22': { '0':'Worgen',   '1':'Worgen' }
			},
			'characterSkill'   : {
				'129': 'First Aid',
				'164': 'Blacksmithing',
				'165': 'Leatherworking',
				'171': 'Alchemy',
				'182': 'Herbalism',
				'185': 'Cooking',
				'186': 'Mining',
				'197': 'Tailoring',
				'202': 'Engineering',
				'333': 'Enchanting',
				'356': 'Fishing',
				'393': 'Skinning',
				'755': 'Jewelcrafting',
				'762': 'Riding',
				'773': 'Inscription',
				'794': 'Archeology'
			}
		}
	}
	
});