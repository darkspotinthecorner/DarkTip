DarkTip.registerModule('wow', {
	
	'triggers': {
		'apiParams': {
			'callback': 'jsonp'
		}
	},
	
	'maps': {
		'host': {
			'region': {
				'us.battle.net'       : 'us',
				'eu.battle.net'       : 'eu',
				'kr.battle.net'       : 'kr',
				'tw.battle.net'       : 'tw',
				'cn.battle.net'       : 'cn',
				'www.battlenet.com.cn': 'cn'
			}
		},
		'region': {
			'host': {
				'us': 'us.battle.net',
				'eu': 'eu.battle.net',
				'kr': 'kr.battle.net',
				'tw': 'tw.battle.net',
				'cn': 'cn.battle.net' /* 'www.battlenet.com.cn' */
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
	
	'layout': {
		'css': {
			'class': 'darktip-tooltip-wow'
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
				'1' : { '0': 'Krieger',      '1': 'Kriegerin' },
				'2' : { '0': 'Paladin',      '1': 'Paladin' },
				'3' : { '0': 'Jäger',        '1': 'Jägerin' },
				'4' : { '0': 'Schurke',      '1': 'Schurkin' },
				'5' : { '0': 'Priester',     '1': 'Priesterin' },
				'6' : { '0': 'Todesritter',  '1': 'Todesritter' },
				'7' : { '0': 'Schamane',     '1': 'Schamanin' },
				'8' : { '0': 'Magier',       '1': 'Magierin' },
				'9' : { '0': 'Hexenmeister', '1': 'Hexenmeisterin' },
				'11': { '0': 'Druide',       '1': 'Druidin' }
			},
			'characterRace': {
				'1' : { '0': 'Mensch',   '1': 'Mensch' },
				'2' : { '0': 'Orc',      '1': 'Orc' },
				'3' : { '0': 'Zwerg',    '1': 'Zwerg' },
				'4' : { '0': 'Nachtelf', '1': 'Nachtelfe' },
				'5' : { '0': 'Untoter',  '1': 'Untote' },
				'6' : { '0': 'Tauren',   '1': 'Tauren' },
				'7' : { '0': 'Gnom',     '1': 'Gnom' },
				'8' : { '0': 'Troll',    '1': 'Troll' },
				'9' : { '0': 'Goblin',   '1': 'Goblin' },
				'10': { '0': 'Blutelf',  '1': 'Blutelfe' },
				'11': { '0': 'Draenei',  '1': 'Draenei' },
				'22': { '0': 'Worgen',   '1': 'Worgen' }
			},
			'characterSkill'   : {
				'129': 'Erste Hilfe',
				'164': 'Schmiedekunst',
				'165': 'Lederverarbeitung',
				'171': 'Alchemie',
				'182': 'Kräuterkunde',
				'185': 'Kochkunst',
				'186': 'Bergbau',
				'197': 'Schneiderei',
				'202': 'Ingenieurskunst',
				'333': 'Verzauberkunst',
				'356': 'Angeln',
				'393': 'Kürschnerei',
				'755': 'Juwelenschleifen',
				'762': 'Reiten',
				'773': 'Inschriftenkunde',
				'794': 'Archäologie'
			}
		},
		'fr_FR': {
			'loading'  : 'Chargement des données WoW...',
			'not-found': 'WoW Aucune donnée trouvée',
			'not-used' : 'Inutilisées',
			'label'    : {
				'realm'    : 'Royaume:',
				'quest'    : 'Quête:',
				'region'   : 'Région:',
				'item'     : 'Objet:',
				'character': 'Personnage:',
				'guild'    : 'Guilde:',
				'teamname' : 'Nom:',
				'teamsize' : 'Taille:'
			},
			'factionSide': {
				'0'       : 'Alliance',
				'1'       : 'Horde',
				'alliance': 'Alliance',
				'horde'   : 'Horde'
			},
			'characterClass': {
				'1' : { '0': 'Guerrier',             '1': 'Guerrière' },
				'2' : { '0': 'Paladin',              '1': 'Paladin' },
				'3' : { '0': 'Chasseur',             '1': 'Chasseresse' },
				'4' : { '0': 'Voleur',               '1': 'Voleuse' },
				'5' : { '0': 'Prêtre',               '1': 'Prêtresse' },
				'6' : { '0': 'Chevalier de la mort', '1': 'Chevalier de la mort' },
				'7' : { '0': 'Chaman',               '1': 'Chamane' },
				'8' : { '0': 'Mage',                 '1': 'Mage' },
				'9' : { '0': 'Démoniste',            '1': 'Démoniste' },
				'11': { '0': 'Druide',               '1': 'Druidesse' }
			},
			'characterRace': {
				'1' : { '0': 'Humain',          '1': 'Humaine' },
				'2' : { '0': 'Orc',             '1': 'Orque' },
				'3' : { '0': 'Nain',            '1': 'Naine' },
				'4' : { '0': 'Elfe de la nuit', '1': 'Elfe de la nuit' },
				'5' : { '0': 'Mort-vivant',     '1': 'Morte-vivante' },
				'6' : { '0': 'Tauren',          '1': 'Tauren' },
				'7' : { '0': 'Gnome',           '1': 'Gnome' },
				'8' : { '0': 'Troll',           '1': 'Trollesse' },
				'9' : { '0': 'Gobelin',         '1': 'Gobeline' },
				'10': { '0': 'Elfe de sang',    '1': 'Elfe de sang' },
				'11': { '0': 'Draeneï',         '1': 'Draeneï' },
				'22': { '0': 'Worgen',          '1': 'Worgen' }
			},
			'characterSkill': {
				'129': 'Secourisme',
				'164': 'Forge',
				'165': 'Travail du cuir',
				'171': 'Alchimie',
				'182': 'Herboristerie',
				'185': 'Cuisine',
				'186': 'Minage',
				'197': 'Couture',
				'202': 'Ingénierie',
				'333': 'Enchantement',
				'356': 'Pêche',
				'393': 'Dépeçage',
				'755': 'Joaillerie',
				'762': 'Riding',
				'773': 'Calligraphie',
				'794': 'Archéologie'
			}
		},
		'es_ES': {
			'loading'  : 'WoW carga de datos...',
			'not-found': 'No se encontraron datos',
			'not-used' : 'Sin usar',
			'label'    : {
				'realm'    : 'Reinos:',
				'quest'    : 'Misión:',
				'region'   : 'Región:',
				'item'     : 'Objeto:',
				'character': 'Personaje:',
				'guild'    : 'Hermandad:',
				'teamname' : 'Nombre:',
				'teamsize' : 'Tamaño:'
			},
			'factionSide': {
				'0'       : 'Alianza',
				'1'       : 'Horda',
				'alliance': 'Alianza',
				'horde'   : 'Horda'
			},
			'characterClass': {
				'1' : { '0': 'Guerrero',               '1': 'Guerrera' },
				'2' : { '0': 'Paladín',                '1': 'Paladín' },
				'3' : { '0': 'Cazador',                '1': 'Cazadora' },
				'4' : { '0': 'Pícaro',                 '1': 'Pícara' },
				'5' : { '0': 'Sacerdote',              '1': 'Sacerdotisa' },
				'6' : { '0': 'Caballero de la Muerte', '1': 'Caballero de la Muerte' },
				'7' : { '0': 'Chamán',                 '1': 'Chamán' },
				'8' : { '0': 'Mago',                   '1': 'Maga' },
				'9' : { '0': 'Brujo',                  '1': 'Bruja' },
				'11': { '0': 'Druida',                 '1': 'Druida' }
			},
			'characterRace': {
				'1' : { '0': 'Humano',           '1': 'Humana' },
				'2' : { '0': 'Orco',             '1': 'Orco' },
				'3' : { '0': 'Enano',            '1': 'Enana' },
				'4' : { '0': 'Elfo de la noche', '1': 'Elfa de la noche' },
				'5' : { '0': 'No-muerto',        '1': 'No-muerta' },
				'6' : { '0': 'Tauren',           '1': 'Tauren' },
				'7' : { '0': 'Gnomo',            '1': 'Gnoma' },
				'8' : { '0': 'Trol',             '1': 'Trol' },
				'9' : { '0': 'Goblin',           '1': 'Goblin' },
				'10': { '0': 'Elfo de sangre',   '1': 'Elfa de sangre' },
				'11': { '0': 'Draenei',          '1': 'Draenei' },
				'22': { '0': 'Huargen',          '1': 'Huargen' }
			},
			'characterSkill': {
				'129': 'Primeros auxilios',
				'164': 'Herrería',
				'165': 'Peletería',
				'171': 'Alquimia',
				'182': 'Herboristería',
				'185': 'Cocina',
				'186': 'Minería',
				'197': 'Sastrería',
				'202': 'Ingeniería',
				'333': 'Encantamiento',
				'356': 'Pesca',
				'393': 'Desuello',
				'755': 'Joyería',
				'762': 'Equitación',
				'773': 'Inscripción',
				'794': 'Arqueología'
			}
		},
		'fr_FR': {
			'loading'  : 'Chargement des données WoW...',
			'not-found': 'WoW Aucune donnée trouvée',
			'not-used' : 'Inutilisées',
			'label'    : {
				'realm'    : 'Royaume:',
				'quest'    : 'Quête:',
				'region'   : 'Région:',
				'item'     : 'Objet:',
				'character': 'Personnage:',
				'guild'    : 'Guilde:',
				'teamname' : 'Nom:',
				'teamsize' : 'Taille:'
			},
			'factionSide': {
				'0'       : 'Alliance',
				'1'       : 'Horde',
				'alliance': 'Alliance',
				'horde'   : 'Horde'
			},
			'characterClass': {
				'1' : { '0': 'Guerrier',             '1': 'Guerrière' },
				'2' : { '0': 'Paladin',              '1': 'Paladin' },
				'3' : { '0': 'Chasseur',             '1': 'Chasseresse' },
				'4' : { '0': 'Voleur',               '1': 'Voleuse' },
				'5' : { '0': 'Prêtre',               '1': 'Prêtresse' },
				'6' : { '0': 'Chevalier de la mort', '1': 'Chevalier de la mort' },
				'7' : { '0': 'Chaman',               '1': 'Chamane' },
				'8' : { '0': 'Mage',                 '1': 'Mage' },
				'9' : { '0': 'Démoniste',            '1': 'Démoniste' },
				'11': { '0': 'Druide',               '1': 'Druidesse' }
			},
			'characterRace': {
				'1' : { '0': 'Humain',          '1': 'Humaine' },
				'2' : { '0': 'Orc',             '1': 'Orque' },
				'3' : { '0': 'Nain',            '1': 'Naine' },
				'4' : { '0': 'Elfe de la nuit', '1': 'Elfe de la nuit' },
				'5' : { '0': 'Mort-vivant',     '1': 'Morte-vivante' },
				'6' : { '0': 'Tauren',          '1': 'Tauren' },
				'7' : { '0': 'Gnome',           '1': 'Gnome' },
				'8' : { '0': 'Troll',           '1': 'Trollesse' },
				'9' : { '0': 'Gobelin',         '1': 'Gobeline' },
				'10': { '0': 'Elfe de sang',    '1': 'Elfe de sang' },
				'11': { '0': 'Draeneï',         '1': 'Draeneï' },
				'22': { '0': 'Worgen',          '1': 'Worgen' }
			},
			'characterSkill': {
				'129': 'Secourisme',
				'164': 'Forge',
				'165': 'Travail du cuir',
				'171': 'Alchimie',
				'182': 'Herboristerie',
				'185': 'Cuisine',
				'186': 'Minage',
				'197': 'Couture',
				'202': 'Ingénierie',
				'333': 'Enchantement',
				'356': 'Pêche',
				'393': 'Dépeçage',
				'755': 'Joaillerie',
				'762': 'Riding',
				'773': 'Calligraphie',
				'794': 'Archéologie'
			}
		}
	}
	
});