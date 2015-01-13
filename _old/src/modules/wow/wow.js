/* **************************************************************************
 * The DarkTip plugin is a javascript based tooltip framework that enables
 * quick and easy development of modules that hook into specific aspects of a
 * webpage and display context sensitive tooltips.
 *
 * Copyright (C) 2014 Martin Gelder
 * (darkspotinthecorner {at} gmail {dot} com)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/gpl.html.
 * ************************************************************************** */

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
				'cn': 'www.battlenet.com.cn' /* 'cn.battle.net' */
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
				'us+pt': 'pt_BR',
				'eu+en': 'en_GB',
				'eu+es': 'es_ES',
				'eu+fr': 'fr_FR',
				'eu+ru': 'ru_RU',
				'eu+de': 'de_DE',
				'eu+pt': 'pt_PT',
				'eu+it': 'it_IT',
				'kr+ko': 'ko_KR',
				'kr+en': 'en_US',
				'tw+zh': 'zh_TW',
				'tw+en': 'en_US',
				'cn+en': 'en_US',
				'cn+zh': 'zh_CN'
			}
		}
	},

	'layout': {
		'css': {
			'class': 'darktip-tooltip-wow'
		}
	},

	'prepareData': function(state) {
		if(Object.keys(state['data']).length === 0) {
			return false;
		}
		return state['data'];
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

	'templates': {
		'tools': {
			'_renderDateTime': function(datetime) {
				var date = new Date(datetime);
				var temp = {
					'year'  : date.getFullYear(),
					'month' : date.getMonth() + 1,
					'day'   : date.getDate(),
					'hour'  : date.getHours(),
					'minute': date.getMinutes(),
					'second': date.getSeconds(),
					'ampm'  : { 'flag': '', 'hour': 0 }
				};
				if(temp['hour'] == 0)
				{
					temp['ampm']['flag'] = 'AM';
					temp['ampm']['hour'] = temp['hour'] + 12;
				}
				else if(temp['hour'] < 12)
				{
					temp['ampm']['flag'] = 'AM';
					temp['ampm']['hour'] = temp['hour'];
				}
				else if(temp['hour'] == 12)
				{
					temp['ampm']['flag'] = 'PM';
					temp['ampm']['hour'] = temp['hour'];
				}
				else
				{
					temp['ampm']['flag'] = 'PM';
					temp['ampm']['hour'] = temp['hour'] - 12;
				}
				return this._loc('datetime', temp);
			},
			'_padZero': function(number, width) {
				width -= number.toString().length;
				if(width > 0)
				{
					return new Array(width + (/\./.test(number) ? 2 : 1)).join('0') + number;
				}
				return number;
			}
		}
	},

	'i18n': {
		'en_US': {
			'loading'  : 'Loading wow data...',
			'not-found': 'Data not found',
			'not-used' : 'Not used',
			'label'    : {
				'slot'       : 'Slot:',
				'realm'      : 'Realm:',
				'quest'      : 'Quest:',
				'region'     : 'Region:',
				'item'       : 'Item:',
				'character'  : 'Character:',
				'guild'      : 'Guild:',
				'teamname'   : 'Team name:',
				'teamsize'   : 'Team size:',
				'achievement': 'Achievement:',
				'spell'      : 'Spell:'
			},
			'factionSide': {
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
				'10': { '0': 'Monk',         '1': 'Monk' },
				'11': { '0': 'Druid',        '1': 'Druid' }
			},
			'characterRace': {
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
				'22': {	'0': 'Worgen',    '1': 'Worgen' },
				'24': {	'0': 'Pandaren',  '1': 'Pandaren' },
				'25': {	'0': 'Pandaren',  '1': 'Pandaren' },
				'26': {	'0': 'Pandaren',  '1': 'Pandaren' }
			},
			'characterSkill': {
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
			},
			'datetime': '<%= this._loc("date") %> <%= this._loc("time") %> ',
			'date'    : '<%= this._padZero(this["month"], 2) %>/<%= this._padZero(this["day"], 2) %>/<%= this["year"] %>',
			'time'    : '<%= this._padZero(this["ampm"]["hour"], 2) %>:<%= this._padZero(this["minute"], 2) %>:<%= this._padZero(this["second"], 2) %> <%= this["ampm"]["flag"] %>'
		},
		'de_DE': {
			'loading'  : 'Lade WoW Daten...',
			'not-found': 'Keine Daten gefunden',
			'not-used' : 'Ungenutzt',
			'label'    : {
				'slot'       : 'Slot:',
				'realm'      : 'Realm:',
				'quest'      : 'Quest:',
				'region'     : 'Region:',
				'item'       : 'Gegenstand:',
				'character'  : 'Charakter:',
				'guild'      : 'Gilde:',
				'teamname'   : 'Teamname:',
				'teamsize'   : 'Teamgr&ouml;&szlig;e:',
				'achievement': 'Erfolg:',
				'spell'      : 'Zauber:'
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
				'3' : { '0': 'J&auml;ger',        '1': 'J&auml;gerin' },
				'4' : { '0': 'Schurke',      '1': 'Schurkin' },
				'5' : { '0': 'Priester',     '1': 'Priesterin' },
				'6' : { '0': 'Todesritter',  '1': 'Todesritter' },
				'7' : { '0': 'Schamane',     '1': 'Schamanin' },
				'8' : { '0': 'Magier',       '1': 'Magierin' },
				'9' : { '0': 'Hexenmeister', '1': 'Hexenmeisterin' },
				'10': { '0': 'Mönch',        '1': 'Mönch' },
				'11': { '0': 'Druide',       '1': 'Druidin' }
			},
			'characterRace': {
				'1' : { '0': 'Mensch',    '1': 'Mensch' },
				'2' : { '0': 'Orc',       '1': 'Orc' },
				'3' : { '0': 'Zwerg',     '1': 'Zwerg' },
				'4' : { '0': 'Nachtelf',  '1': 'Nachtelfe' },
				'5' : { '0': 'Untoter',   '1': 'Untote' },
				'6' : { '0': 'Tauren',    '1': 'Tauren' },
				'7' : { '0': 'Gnom',      '1': 'Gnom' },
				'8' : { '0': 'Troll',     '1': 'Troll' },
				'9' : { '0': 'Goblin',    '1': 'Goblin' },
				'10': { '0': 'Blutelf',   '1': 'Blutelfe' },
				'11': { '0': 'Draenei',   '1': 'Draenei' },
				'22': { '0': 'Worgen',    '1': 'Worgen' },
				'24': {	'0': 'Pandaren',  '1': 'Pandarin' },
				'25': {	'0': 'Pandaren',  '1': 'Pandarin' },
				'26': {	'0': 'Pandaren',  '1': 'Pandarin' }
			},
			'characterSkill': {
				'129': 'Erste Hilfe',
				'164': 'Schmiedekunst',
				'165': 'Lederverarbeitung',
				'171': 'Alchemie',
				'182': 'Kr&auml;uterkunde',
				'185': 'Kochkunst',
				'186': 'Bergbau',
				'197': 'Schneiderei',
				'202': 'Ingenieurskunst',
				'333': 'Verzauberkunst',
				'356': 'Angeln',
				'393': 'K&uuml;rschnerei',
				'755': 'Juwelenschleifen',
				'762': 'Reiten',
				'773': 'Inschriftenkunde',
				'794': 'Arch&auml;ologie'
			},
			'datetime': '<%= this._loc("date") %> <%= this._loc("time") %> ',
			'date'    : '<%= this._padZero(this["day"], 2) %>.<%= this._padZero(this["month"], 2) %>.<%= this["year"] %>',
			'time'    : '<%= this._padZero(this["hour"], 2) %>:<%= this._padZero(this["minute"], 2) %>:<%= this._padZero(this["second"], 2) %>'
		},
		'fr_FR': {
			'loading'  : 'Chargement des donn&eacute;es WoW...',
			'not-found': 'WoW Aucune donn&eacute;e trouv&eacute;e',
			'not-used' : 'Inutilis&eacute;es',
			'label'    : {
				'slot'       : 'Slot :',
				'realm'      : 'Royaume :',
				'quest'      : 'Qu&ecirc;te :',
				'region'     : 'R&eacute;gion :',
				'item'       : 'Objet :',
				'character'  : 'Personnage :',
				'guild'      : 'Guilde :',
				'teamname'   : 'Nom :',
				'teamsize'   : 'Taille :',
				'achievement': 'Avantage :',
				'spell'      : 'Sorts :'
			},
			'factionSide': {
				'0'       : 'Alliance',
				'1'       : 'Horde',
				'alliance': 'Alliance',
				'horde'   : 'Horde'
			},
			'characterClass': {
				'1' : { '0': 'Guerrier',             '1': 'Guerri&egrave;re' },
				'2' : { '0': 'Paladin',              '1': 'Paladin' },
				'3' : { '0': 'Chasseur',             '1': 'Chasseresse' },
				'4' : { '0': 'Voleur',               '1': 'Voleuse' },
				'5' : { '0': 'Pr&ecirc;tre',         '1': 'Pr&ecirc;tresse' },
				'6' : { '0': 'Chevalier de la mort', '1': 'Chevalier de la mort' },
				'7' : { '0': 'Chaman',               '1': 'Chamane' },
				'8' : { '0': 'Mage',                 '1': 'Mage' },
				'9' : { '0': 'D&eacute;moniste',     '1': 'D&eacute;moniste' },
				'10': { '0': 'Moine',                '1': 'Moniale' },
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
				'22': { '0': 'Worgen',          '1': 'Worgen' },
				'24': {	'0': 'Pandaren',        '1': 'Pandarène' },
				'25': {	'0': 'Pandaren',        '1': 'Pandarène' },
				'26': {	'0': 'Pandaren',        '1': 'Pandarène' }
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
				'202': 'Ing&eacute;nierie',
				'333': 'Enchantement',
				'356': 'P&ecirc;che',
				'393': 'D&eacute;peçage',
				'755': 'Joaillerie',
				'762': 'Riding',
				'773': 'Calligraphie',
				'794': 'Arch&eacute;ologie'
			},
			'datetime': '<%= this._loc("date") %> <%= this._loc("time") %> ',
			'date'    : '<%= this._padZero(this["day"], 2) %>-<%= this._padZero(this["month"], 2) %>-<%= this["year"] %>',
			'time'    : '<%= this._padZero(this["hour"], 2) %>:<%= this._padZero(this["minute"], 2) %>:<%= this._padZero(this["second"], 2) %>'
		},
		'es_ES': {
			'loading'  : 'WoW carga de datos...',
			'not-found': 'No se encontraron datos',
			'not-used' : 'Sin usar',
			'label'    : {
				'slot'       : 'Ranura:',
				'realm'      : 'Reinos:',
				'quest'      : 'Misi&oacute;n:',
				'region'     : 'Regi&oacute;n:',
				'item'       : 'Objeto:',
				'character'  : 'Personaje:',
				'guild'      : 'Hermandad:',
				'teamname'   : 'Nombre:',
				'teamsize'   : 'Tama&ntilde;o:',
				'achievement': 'Ventaja:',
				'spell'      : 'Hechizos:'
			},
			'factionSide': {
				'0'       : 'Alianza',
				'1'       : 'Horda',
				'alliance': 'Alianza',
				'horde'   : 'Horda'
			},
			'characterClass': {
				'1' : { '0': 'Guerrero',               '1': 'Guerrera' },
				'2' : { '0': 'Palad&iacute;n',         '1': 'Palad&iacute;n' },
				'3' : { '0': 'Cazador',                '1': 'Cazadora' },
				'4' : { '0': 'P&iacute;caro',          '1': 'P&iacute;cara' },
				'5' : { '0': 'Sacerdote',              '1': 'Sacerdotisa' },
				'6' : { '0': 'Caballero de la Muerte', '1': 'Caballero de la Muerte' },
				'7' : { '0': 'Chamán',                 '1': 'Chamán' },
				'8' : { '0': 'Mago',                   '1': 'Maga' },
				'9' : { '0': 'Brujo',                  '1': 'Bruja' },
				'10': { '0': 'Monje',                  '1': 'Monje' },
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
				'22': { '0': 'Huargen',          '1': 'Huargen' },
				'24': {	'0': 'Pandaren',         '1': 'Pandaren' },
				'25': {	'0': 'Pandaren',         '1': 'Pandaren' },
				'26': {	'0': 'Pandaren',         '1': 'Pandaren' }
			},
			'characterSkill': {
				'129': 'Primeros auxilios',
				'164': 'Herrer&iacute;a',
				'165': 'Peleter&iacute;a',
				'171': 'Alquimia',
				'182': 'Herborister&iacute;a',
				'185': 'Cocina',
				'186': 'Miner&iacute;a',
				'197': 'Sastrer&iacute;a',
				'202': 'Ingenier&iacute;a',
				'333': 'Encantamiento',
				'356': 'Pesca',
				'393': 'Desuello',
				'755': 'Joyer&iacute;a',
				'762': 'Equitaci&oacute;n',
				'773': 'Inscripci&oacute;n',
				'794': 'Arqueolog&iacute;a'
			},
			'datetime': '<%= this._loc("date") %> <%= this._loc("time") %> ',
			'date'    : '<%= this._padZero(this["day"], 2) %>/<%= this._padZero(this["month"], 2) %>/<%= this["year"] %>',
			'time'    : '<%= this._padZero(this["hour"], 2) %>:<%= this._padZero(this["minute"], 2) %>:<%= this._padZero(this["second"], 2) %>'
		},
		'it_IT': {
			'loading'  : 'Caricamento dei dati...',
			'not-found': 'Dati non trovati',
			'not-used' : 'Non utilizzato',
			'label'    : {
				'slot'       : 'Scomparto:',
				'realm'      : 'Reame:',
				'quest'      : 'Missione:',
				'region'     : 'Regione:',
				'item'       : 'Oggetto:',
				'character'  : 'Personaggio:',
				'guild'      : 'Gilda:',
				'teamname'   : 'Nome Squadra:',
				'teamsize'   : 'Dimension Squadra:',
				'achievement': 'Impresa:',
				'spell'      : 'Incantesimo:'
			},
			'factionSide'   : {
				'0'       : 'Alleanza',
				'1'       : 'Orda',
				'alliance': 'Alleanza',
				'horde'   : 'Orda'
			},
			'characterClass': {
				'1' : { '0': 'Guerriero',      '1': 'Guerriera' },
				'2' : { '0': 'Paladino',      '1': 'Paladina' },
				'3' : { '0': 'Cacciatore',       '1': 'Cacciatrice' },
				'4' : { '0': 'Ladro',        '1': 'Ladra' },
				'5' : { '0': 'Sacerdote',       '1': 'Sacerdotessa' },
				'6' : { '0': 'Cavaliere della Morte', '1': 'Cavaliera della Morte' },
				'7' : { '0': 'Sciamano',       '1': 'Sciamana' },
				'8' : { '0': 'Mago',         '1': 'Maga' },
				'9' : { '0': 'Sregone',      '1': 'Strega' },
				'10': { '0': 'Monaco',         '1': 'Monaca' },
				'11': { '0': 'Druido',        '1': 'Druida' }
			},
			'characterRace' : {
				'1' : { '0': 'Umano',     '1': 'Umana' },
				'2' : { '0': 'Orco',       '1': 'Orca' },
				'3' : { '0': 'Nano',     '1': 'Nana' },
				'4' : { '0': 'Elfo della Notte', '1': 'Elfa della Notte' },
				'5' : { '0': 'Non Morto',  '1': 'Non Morta' },
				'6' : { '0': 'Tauren',    '1': 'Tauren' },
				'7' : { '0': 'Gnomo',     '1': 'Gnoma' },
				'8' : { '0': 'Troll',     '1': 'Troll' },
				'9' : { '0': 'Goblin',    '1': 'Goblin' },
				'10': { '0': 'Elfo del Sangue', '1': 'Elfa del Sangue' },
				'11': { '0': 'Draenei',   '1': 'Draenei' },
				'22': {	'0': 'Worgen',    '1': 'Worgen' },
				'24': {	'0': 'Pandaren',  '1': 'Pandaren' },
				'25': {	'0': 'Pandaren',  '1': 'Pandaren' },
				'26': {	'0': 'Pandaren',  '1': 'Pandaren' }
			},
			'characterSkill'   : {
				'129': 'Primo Soccorso',
				'164': 'Forgiatura',
				'165': 'Conciatura',
				'171': 'Alchimia',
				'182': 'Erbalismo',
				'185': 'Cucina',
				'186': 'Estrazione',
				'197': 'Sartoria',
				'202': 'Ingegneria',
				'333': 'Incantamento',
				'356': 'Pesca',
				'393': 'Scuoiatura',
				'755': 'Oreficeria',
				'762': 'Cavalcatura',
				'773': 'Runografia',
				'794': 'Archeologia'
			},
			'datetime': '<%= this._loc("date") %> <%= this._loc("time") %> ',
			'date'    : '<%= this._padZero(this["month"], 2) %>/<%= this._padZero(this["day"], 2) %>/<%= this["year"] %>',
			'time'    : '<%= this._padZero(this["ampm"]["hour"], 2) %>:<%= this._padZero(this["minute"], 2) %>:<%= this._padZero(this["second"], 2) %> <%= this["ampm"]["flag"] %>'
		}
	}

});