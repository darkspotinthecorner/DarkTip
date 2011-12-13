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

DarkTip.registerModule('wow.arena', {
	
	'triggers': {
		'explicit': {
			'match' : /arena:(us|eu|kr|tw|cn)\.([^\.]+)\.(2v2|3v3|5v5)\.([^\(]+)\((en|de|fr|es|ru|ko|zh)\)/i,
			'params': {
				'1': 'region',
				'2': 'realm',
				'3': 'teamsize',
				'4': 'teamname',
				'5': 'lang'
			}
		},
		'implicit': {
			'match' : /http:\/\/(us\.battle\.net|eu\.battle\.net|kr\.battle\.net|tw\.battle\.net|cn\.battle\.net|www\.battlenet\.com\.cn)\/wow\/(en|de|fr|es|ru|ko|zh)\/arena\/([^\/]+)\/(2v2|3v3|5v5)\/([^\/#]+).*/i,
			'params': {
				'1': 'host',
				'2': 'lang',
				'3': 'realm',
				'4': 'teamsize',
				'5': 'teamname'
			}
		},
		'api'     : 'http://<%= this["host"] %>/api/wow/arena/<%= this["realm"] %>/<%= this["teamsize"] %>/<%= this["teamname"] %>?locale=<%= this["locale"] %>',
		'hash'    : '<%= this["host"] %>#<%= this["realm"] %>#<%= this["teamsize"] %>#<%= this["teamname"] %>#<%= this["locale"] %>'
	},

	'getParams': {
		'explicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.arena', 'triggers.explicit.params')));
			params['host']   = DarkTip.map('wow', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		},
		'implicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.arena', 'triggers.implicit.params')));
			params['region'] = DarkTip.map('wow', 'maps.host.region', params['host']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		}
	},

	'layout': {
		'width': {
			'core': 325
		}
	},

	'templates': {
		'core': (
			'<div class="tooltip-arena">' +
				'<div class="headline-right"><%= this._loc("rank-current") %></div>' +
				'<div class="darktip-row headline cside-<%= this["side"] %>"><%= this["name"] %></div>' +
				'<% if(this["_meta"]["extendedActive"]) { %><div class="darktip-row highlight-strong darktip-only-x"><%= this._loc("view-mode-current") %></div><% } %>' +
				'<div class="darktip-row highlight-strong darktip-only-s"><%= this._loc("view-mode-season") %></div>' +
				'<div class="darktip-row"><%= this._loc("classification") %></div>' +
				'<div class="darktip-row"><%= this._loc("rank-previous") %></div>' +
				'<div class="darktip-row"><%= this._loc("rating-team") %></div>' +
				'<% if(this["_meta"]["extendedActive"]) { %><div class="darktip-row darktip-only-x"><%= this._loc("matches-current") %></div><% } %>' +
				'<div class="darktip-row darktip-only-s"><%= this._loc("matches-season") %></div>' +
				'<div class="members"><%= this._subLoop("templates.fragments.member", this["members"]) %></div>' +
				'<% if(this["_meta"]["extendedActive"]) { %><div class="darktip-row info-meta darktip-only-x"><%= this._loc("extendedActive") %></div><% } %>' +
				'<% if(this["_meta"]["extendedActive"]) { %><div class="darktip-row info-meta darktip-only-s"><%= this._loc("extendedInactive") %></div><% } %>' +
			'</div>'
		),
		'404': (
			'<div class="tooltip-arena tooltip-404">' +
				'<div class="title">404<span class="sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.teamname") %></span> <span class="value"><%= this["teamname"] %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.teamsize") %></span> <span class="value"><%= this["teamsize"] %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.realm") %></span> <span class="value"><%= this["realm"] %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
		    '</div>'
		),
		'fragments': {
			'member': (
				'<div class="darktip-row padded<% if(this["_loop"] % 2 == 0) { %> alt<% } %>">' +
					'<% if(this["_meta"]["extendedActive"]) { %><div class="pos-right darktip-only-x"><%= this._loc("matches-current-short") %></div><% } %>' +
					'<div class="pos-right darktip-only-s"><%= this._loc("matches-season-short") %></div>' +
					'<img class="icon-18x18" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/race_<%= this["character"]["race"] %>_<%= this["character"]["gender"] %>.jpg" /> ' +
					'<img class="icon-18x18" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/class_<%= this["character"]["class"] %>.jpg" /> ' +
					'<span class="cclass-<%= this["character"]["class"] %><% if(this["rank"]==0) { %> icon-leader-pvp<% } %>"><%= this["character"]["name"] %></span> <span class="sub highlight-reduced">(<%= this["personalRating"] %>)</span>' +
				'</div>'
			)
		}
	},

	'i18n': {
		'en_US': {
			'loading'              : 'Loading arena team...',
			'not-found'            : 'Arena team not found',
			'view-mode-current'    : 'Viewing current week',
			'view-mode-season'     : 'Viewing complete season',
			'classification'       : '<%= this["teamsize"] %>v<%= this["teamsize"] %> <%= this._loc("factionSide." + this["side"]) %> Arena Team, <%= this["realm"] %>',
			'rating-team'          : 'Rating: <%= this["rating"] %>',
			'rank-current'         : 'Rank #<%= this["ranking"] %>',
			'rank-previous'        : 'Last week\'s rank: <% if(this["lastSessionRanking"] > 0) { %>#<%= this["lastSessionRanking"] %><% } else { %>None<% } %>',
			'matches-current'      : 'Matches: <span class="highlight-won"><%= this["gamesWon"] %></span> - <span class="highlight-lost"><%= this["gamesLost"] %></span> <span class="highlight-weak">(Total: <%= this["gamesPlayed"] %><% if(this["gamesPlayed"] > 0) { %>, <%= ((this["gamesWon"] / this["gamesPlayed"])*100).toFixed(0) %>% won<% } %>)</span>',
			'matches-current-short': '<span class="highlight-won"><%= this["gamesWon"] %></span> - <span class="highlight-lost"><%= this["gamesLost"] %></span><% if(this["gamesPlayed"] > 0) { %> | <span class="highlight-weak"><%= ((this["gamesWon"] / this["gamesPlayed"])*100).toFixed(0) %>%</span><% } %>',
			'matches-season'       : 'Matches: <span class="highlight-won"><%= this["sessionGamesWon"] %></span> - <span class="highlight-lost"><%= this["sessionGamesLost"] %></span> <span class="highlight-weak">(Total: <%= this["sessionGamesPlayed"] %><% if(this["sessionGamesPlayed"] > 0) { %>, <%= ((this["sessionGamesWon"] / this["sessionGamesPlayed"])*100).toFixed(0) %>% won<% } %>)</span>',
			'matches-season-short' : '<span class="highlight-won"><%= this["sessionGamesWon"] %></span> - <span class="highlight-lost"><%= this["sessionGamesLost"] %></span><% if(this["sessionGamesPlayed"] > 0) { %> | <span class="highlight-weak"><%= ((this["sessionGamesWon"] / this["sessionGamesPlayed"])*100).toFixed(0) %>%</span><% } %>',
			'extendedInactive'     : 'Hold [<%= this["_meta"]["extendedKeyCodeLabel"] %>] to view current statistics',
			'extendedActive'       : 'Release [<%= this["_meta"]["extendedKeyCodeLabel"] %>] to view seasonal statistics'
		},
		'de_DE': {
			'loading'              : 'Lade Arenateam...',
			'not-found'            : 'Arenateam nicht gefunden',
			'view-mode-current'    : 'Wochenansicht',
			'view-mode-season'     : 'Saisonansicht',
			'classification'       : '<%= this["teamsize"] %>v<%= this["teamsize"] %> <%= this._loc("factionSide." + this["side"]) %> Arenateam, <%= this["realm"] %>',
			'rating-team'          : 'Wertung: <%= this["rating"] %>',
			'rank-current'         : 'Rang #<%= this["ranking"] %>',
			'rank-previous'        : 'Rang der letzten Woche: <% if(this["lastSessionRanking"] > 0) { %>#<%= this["lastSessionRanking"] %><% } else { %>Keiner<% } %>',
			'matches-current'      : 'Spiele: <span class="highlight-won"><%= this["gamesWon"] %></span> - <span class="highlight-lost"><%= this["gamesLost"] %></span> <span class="highlight-weak">(Gesamt: <%= this["gamesPlayed"] %><% if(this["gamesPlayed"] > 0) { %>, <%= ((this["gamesWon"] / this["gamesPlayed"])*100).toFixed(0) %>% gewonnen<% } %>)</span>',
			'matches-current-short': '<span class="highlight-won"><%= this["gamesWon"] %></span> - <span class="highlight-lost"><%= this["gamesLost"] %></span><% if(this["gamesPlayed"] > 0) { %> | <span class="highlight-weak"><%= ((this["gamesWon"] / this["gamesPlayed"])*100).toFixed(0) %>%</span><% } %>',
			'matches-season'       : 'Spiele: <span class="highlight-won"><%= this["sessionGamesWon"] %></span> - <span class="highlight-lost"><%= this["sessionGamesLost"] %></span> <span class="highlight-weak">(Gesamt: <%= this["sessionGamesPlayed"] %><% if(this["sessionGamesPlayed"] > 0) { %>, <%= ((this["sessionGamesWon"] / this["sessionGamesPlayed"])*100).toFixed(0) %>% gewonnen<% } %>)</span>',
			'matches-season-short' : '<span class="highlight-won"><%= this["sessionGamesWon"] %></span> - <span class="highlight-lost"><%= this["sessionGamesLost"] %></span><% if(this["sessionGamesPlayed"] > 0) { %> | <span class="highlight-weak"><%= ((this["sessionGamesWon"] / this["sessionGamesPlayed"])*100).toFixed(0) %>%</span><% } %>',
			'extendedInactive'     : '[<%= this["_meta"]["extendedKeyCodeLabel"] %>] gedrückt halten für aktuelle Wochenwerte',
			'extendedActive'       : '[<%= this["_meta"]["extendedKeyCodeLabel"] %>] loslassen für Saisonwerte'
		},
		'fr_FR': {
			'loading'              : 'Chargement team d\'arènes...',
			'not-found'            : 'Aucune team d\'arènes trouvée',
			'view-mode-current'    : 'Voir la semaine en cours',
			'view-mode-season'     : 'Voir la saison',
			'classification'       : '<%= this["teamsize"] %>v<%= this["teamsize"] %> <%= this._loc("factionSide." + this["side"]) %> team d’arènes, <%= this["realm"] %>',
			'rating-team'          : 'Cote: <%= this["rating"] %>',
			'rank-current'         : 'Classement #<%= this["ranking"] %>',
			'rank-previous'        : 'Classement semaine dernière: <% if(this["lastSessionRanking"] > 0) { %>#<%= this["lastSessionRanking"] %><% } else { %>None<% } %>',
			'matches-current'      : 'Matches: <span class="highlight-won"><%= this["gamesWon"] %></span> - <span class="highlight-lost"><%= this["gamesLost"] %></span> <span class="highlight-weak">(Total: <%= this["gamesPlayed"] %><% if(this["gamesPlayed"] > 0) { %>, <%= ((this["gamesWon"] / this["gamesPlayed"])*100).toFixed(0) %>% won<% } %>)</span>',
			'matches-current-short': '<span class="highlight-won"><%= this["gamesWon"] %></span> - <span class="highlight-lost"><%= this["gamesLost"] %></span><% if(this["gamesPlayed"] > 0) { %> | <span class="highlight-weak"><%= ((this["gamesWon"] / this["gamesPlayed"])*100).toFixed(0) %>%</span><% } %>',
			'matches-season'       : 'Matches: <span class="highlight-won"><%= this["sessionGamesWon"] %></span> - <span class="highlight-lost"><%= this["sessionGamesLost"] %></span> <span class="highlight-weak">(Total: <%= this["sessionGamesPlayed"] %><% if(this["sessionGamesPlayed"] > 0) { %>, <%= ((this["sessionGamesWon"] / this["sessionGamesPlayed"])*100).toFixed(0) %>% won<% } %>)</span>',
			'matches-season-short' : '<span class="highlight-won"><%= this["sessionGamesWon"] %></span> - <span class="highlight-lost"><%= this["sessionGamesLost"] %></span><% if(this["sessionGamesPlayed"] > 0) { %> | <span class="highlight-weak"><%= ((this["sessionGamesWon"] / this["sessionGamesPlayed"])*100).toFixed(0) %>%</span><% } %>',
			'extendedInactive'     : 'Hold [<%= this["_meta"]["extendedKeyCodeLabel"] %>] to view current statistics',
			'extendedActive'       : 'Release [<%= this["_meta"]["extendedKeyCodeLabel"] %>] to view seasonal statistics'
		},
		'es_ES': {
			'loading'              : 'Cargando equipo de arenas...',
			'not-found'            : 'Equipo de arenas no encontrado',
			'view-mode-current'    : 'Esta Semana',
			'view-mode-season'     : 'Temporada',
			'classification'       : '<%= this["teamsize"] %>v<%= this["teamsize"] %> <%= this._loc("factionSide." + this["side"]) %> Arena Team, <%= this["realm"] %>',
			'rating-team'          : 'Puntuación: <%= this["rating"] %>',
			'rank-current'         : 'Rango #<%= this["ranking"] %>',
			'rank-previous'        : 'Rango de la semana pasada: <% if(this["lastSessionRanking"] > 0) { %>#<%= this["lastSessionRanking"] %><% } else { %>no<% } %>',
			'matches-current'      : 'Partidas: <span class="highlight-won"><%= this["gamesWon"] %></span> - <span class="highlight-lost"><%= this["gamesLost"] %></span> <span class="highlight-weak">(Total: <%= this["gamesPlayed"] %><% if(this["gamesPlayed"] > 0) { %>, <%= ((this["gamesWon"] / this["gamesPlayed"])*100).toFixed(0) %>% gewonnen<% } %>)</span>',
			'matches-current-short': '<span class="highlight-won"><%= this["gamesWon"] %></span> - <span class="highlight-lost"><%= this["gamesLost"] %></span><% if(this["gamesPlayed"] > 0) { %> | <span class="highlight-weak"><%= ((this["gamesWon"] / this["gamesPlayed"])*100).toFixed(0) %>%</span><% } %>',
			'matches-season'       : 'Partidas: <span class="highlight-won"><%= this["sessionGamesWon"] %></span> - <span class="highlight-lost"><%= this["sessionGamesLost"] %></span> <span class="highlight-weak">(Total: <%= this["sessionGamesPlayed"] %><% if(this["sessionGamesPlayed"] > 0) { %>, <%= ((this["sessionGamesWon"] / this["sessionGamesPlayed"])*100).toFixed(0) %>% gewonnen<% } %>)</span>',
			'matches-season-short' : '<span class="highlight-won"><%= this["sessionGamesWon"] %></span> - <span class="highlight-lost"><%= this["sessionGamesLost"] %></span><% if(this["sessionGamesPlayed"] > 0) { %> | <span class="highlight-weak"><%= ((this["sessionGamesWon"] / this["sessionGamesPlayed"])*100).toFixed(0) %>%</span><% } %>',
			'extendedInactive'     : '¡Manten pulsado [<%= this["_meta"]["extendedKeyCodeLabel"] %>] para ver las estadísticas actuales!',
			'extendedActive'       : '¡Suelta [<%= this["_meta"]["extendedKeyCodeLabel"] %>] para ver las estadísticas de la temporada!'
		}
	}
	
});

DarkTip.registerModule('wow.character', {
	
	'triggers': {
		'explicit': {
			'match' : /character:(us|eu|kr|tw|cn)\.([^\.]+)\.([^\(]+)\((en|de|fr|es|ru|ko|zh)\)/i,
			'params': {
				'1': 'region',
				'2': 'realm',
				'3': 'character',
				'4': 'lang'
			}
		},
		'implicit': {
			'match' : /http:\/\/(us\.battle\.net|eu\.battle\.net|kr\.battle\.net|tw\.battle\.net|cn\.battle\.net|www\.battlenet\.com\.cn)\/wow\/(en|de|fr|es|ru|ko|zh)\/character\/([^\/]+)\/([^\/#]+).*/i,
			'params': {
				'1': 'host',
				'2': 'lang',
				'3': 'realm',
				'4': 'character'
			}
		},
		'api'     : 'http://<%= this["host"] %>/api/wow/character/<%= this["realm"] %>/<%= this["character"] %>?fields=guild,talents,items,professions,companions,mounts&locale=<%= this["locale"] %>',
		'hash'    : '<%= this["host"] %>#<%= this["realm"] %>#<%= this["character"] %>#<%= this["locale"] %>'
	},

	'getParams': {
		'explicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.character', 'triggers.explicit.params')));
			params['host']   = DarkTip.map('wow', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		},
		'implicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.character', 'triggers.implicit.params')));
			params['region'] = DarkTip.map('wow', 'maps.host.region', params['host']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		}
	},

	'layout': {
		'width': {
			'core': 325
		}
	},

	'templates': {
		'tools': {
			'_renderDateTime': function(datetime) {
				var dto = new Date(datetime);
				return dto.toLocaleString();
			}
		},
		'core': (
			'<div class="tooltip-character">' +
		    	'<img class="icon" src="<%= this["_meta"]["path_host"] %>/static-render/<%= this["_meta"]["region"] %>/<%= this["thumbnail"] %>?alt=/wow/static/images/2d/avatar/<%= this["race"] %>-<%= this["gender"] %>.jpg" />' +
		    	 /* --- START simple mode -------------------------------- */
				'<div class="col-98 darktip-only-s">' +
					'<div class="headline-right"><span class="icon-achievenemtpoints"><%= this["achievementPoints"] %></span></div>' +
		    		'<div class="darktip-row headline cclass-<%= this["class"] %>"><%= this["name"] %></div>' +
		    		'<div class="darktip-row"><%= this._loc("classification") %></div>' +
					'<%= this._subLoop("templates.fragments.talentSpec", this["talents"]) %>' +
					'<% if(this["guild"]) { %><div class="darktip-row highlight-medium">&lt;<%= this["guild"]["name"] %>&gt;<% if(this["guild"]["level"]) { %> (<%= this["guild"]["level"] %>)<% } %></div><% } %>' +
					'<div class="darktip-row"><%= this["realm"] %></div>' +
					'<% if(this["items"]) { %><div class="darktip-row highlight-weak"><%= this._loc("itemLevel", this["items"]) %></div><% } %>' +
			    	'<% if(this["_meta"]["extendedActive"]) { %><div class="darktip-row info-meta"><%= this._loc("extendedInactive") %></div><% } %>' +
		    	'</div>' +
				 /* --- END simple mode ---------------------------------- */
				 /* --- START extended mode ------------------------------ */
			    '<% if(this["_meta"]["extendedActive"]) { %>' +
					'<div class="col-98 darktip-only-x">' +
						'<div class="headline-right"><span class="icon-achievenemtpoints"><%= this["achievementPoints"] %></span></div>' +
			    		'<div class="darktip-row headline cclass-<%= this["class"] %>"><%= this["name"] %></div>' +
						'<% if(this["professions"]) { %>' +
							'<div class="block">' +
								'<%= this._subLoop("templates.fragments.profession.primary", this["professions"]["primary"]) %>' +
								'<%= this._subLoop("templates.fragments.profession.secondary", this["professions"]["secondary"]) %>' +
							'</div>' +
						'<% } %>' +
						'<% if(this["mounts"]) { %><div class="darktip-row"><%= this._loc("mounts") %></div><% } %>' +
						'<% if(this["companions"]) { %><div class="darktip-row"><%= this._loc("companions") %></div><% } %>' +
						'<div class="darktip-row highlight-reduced"><%= this._loc("lastModified") %></div>' +
						'<div class="darktip-row info-meta"><%= this._loc("extendedActive") %></div>' +
			    	'</div>' +
		    	'<% } %>' +
				 /* --- END extended mode -------------------------------- */
		    '</div>'
		),
		'404': (
			'<div class="tooltip-character tooltip-404">' +
				'<div class="title">404<span class="sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.character") %></span> <span class="value"><%= this["character"] %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.realm") %></span> <span class="value"><%= this["realm"] %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
		    '</div>'
		),
		'fragments': {
			'talentSpec': (
				'<div class="block darktip-row<% if(this["selected"]) { %> highlight-strong<% } else { %> highlight-reduced<% } %>">' +
					'<img class="icon-10x10" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/<% if(this["icon"]) { %><%= this["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg"/> ' +
					'<% if(this["name"]) { %><%= this["name"] %><% } else { %><%= this._loc("not-used") %><% } %>' +
				'</div>'
			),
			'profession': {
				'primary'  : (
					'<% if(this["rank"] > 0) { %>' +
						'<div class="darktip-row highlight-medium">' +
							'<img class="icon-10x10" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/<% if(this["icon"]) { %><%= this["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg"/> ' +
							'<%= this["name"] %>: <%= this["rank"] %>' +
						'</div>' +
					'<% } %>'
				),
				'secondary': (
					'<% if(this["rank"] > 0) { %>' +
						'<div class="darktip-row highlight-weak">' +
							'<img class="icon-10x10" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/<% if(this["icon"]) { %><%= this["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg"/> ' +
							'<%= this["name"] %>: <%= this["rank"] %>' +
						'</div>' +
					'<% } %>'
				)
			}
		}
	},

	'i18n': {
		'en_US': {
			'loading'       : 'Loading character...',
			'not-found'     : 'Character not found',
			'classification': '<%= this["level"] %> <%= this._loc("characterRace." + this["race"] + ".0") %> <%= this._loc("characterClass." + this["class"] + ".0") %>',
			'itemLevel'     : '<%= this["averageItemLevelEquipped"] %> average item level (<%= this["averageItemLevel"] %>)',
			'mounts'        : 'Mounts: <%= this["mounts"].length %>',
			'companions'    : 'Companions: <%= this["companions"].length %>',
			'lastModified'  : 'Last modified: <%= this._renderDateTime(this["lastModified"]) %>'
		},
		'de_DE': {
			'loading'       : 'Lade Charakter...',
			'not-found'     : 'Charakter nicht gefunden',
			'classification': '<%= this["level"] %>, <%= this._loc("characterRace." + this["race"] + "." + this["gender"]) %>, <%= this._loc("characterClass." + this["class"] + "." + this["gender"]) %>',
			'itemLevel'     : '<%= this["averageItemLevelEquipped"] %> Durchschnittliche Gegenstandsstufe (<%= this["averageItemLevel"] %>)',
			'mounts'        : 'Reittiere: <%= this["mounts"].length %>',
			'companions'    : 'Begleiter: <%= this["companions"].length %>',
			'lastModified'  : 'Stand von: <%= this._renderDateTime(this["lastModified"]) %>'
		},
		'fr_FR': {
			'loading'       : 'Chargement personnage...',
			'not-found'     : 'Aucun personnage trouvée',
			'classification': '<%= this._loc("characterRace." + this["race"] + "." + this["gender"]) %> <%= this._loc("characterClass." + this["class"] + "." + this["gender"]) %> de niveau <%= this["level"] %>',
			'itemLevel'     : '<%= this["averageItemLevelEquipped"] %> Niveau moyen des objets (<%= this["averageItemLevel"] %>)',
			'mounts'        : 'Montures: <%= this["mounts"].length %>',
			'companions'    : 'Mascottes: <%= this["companions"].length %>',
			'lastModified'  : 'Dernière mise à jour: <%= this._renderDateTime(this["lastModified"]) %>'
		},
		'es_ES': {
			'loading'       : 'Cargando personaje...',
			'not-found'     : 'Personaje no encontrado',
			'classification': '<%= this._loc("characterRace." + this["race"] + "." + this["gender"]) %> <%= this._loc("characterClass." + this["class"] + "." + this["gender"]) %> de nivel <%= this["level"] %>',
			'itemLevel'     : '<%= this["averageItemLevelEquipped"] %> nivel medio de objeto (<%= this["averageItemLevel"] %>)',
			'mounts'        : 'Monturas: <%= this["mounts"].length %>',
			'companions'    : 'Compañeros: <%= this["companions"].length %>',
			'lastModified'  : 'Última modificación: <%= this._renderDateTime(this["lastModified"]) %>'
		},
		'es_MX': {
			'classification': '<%= this._loc("characterClass." + this["class"] + "." + this["gender"]) %> de <%= this._loc("characterRace." + this["race"] + "." + this["gender"]) %>, nivel <%= this["level"] %>'
		}
	}
	
});

DarkTip.registerModule('wow.character.pvp', {
	
	'triggers': {
		'explicit': {
			'match' : /character\-pvp:(us|eu|kr|tw|cn)\.([^\.]+)\.([^\(]+)\((en|de|fr|es|ru|ko|zh)\)/i,
			'params': {
				'1': 'region',
				'2': 'realm',
				'3': 'character',
				'4': 'lang'
			}
		},
		'implicit': {
			'match' : /http:\/\/(us\.battle\.net|eu\.battle\.net|kr\.battle\.net|tw\.battle\.net|cn\.battle\.net|www\.battlenet\.com\.cn)\/wow\/(en|de|fr|es|ru|ko|zh)\/character\/([^\/]+)\/([^\/]+)\/pvp.*/i,
			'params': {
				'1': 'host',
				'2': 'lang',
				'3': 'realm',
				'4': 'character'
			}
		},
		'api'	 : 'http://<%= this["host"] %>/api/wow/character/<%= this["realm"] %>/<%= this["character"] %>?fields=guild,talents,items,pvp&locale=<%= this["locale"] %>',
		'hash'	: '<%= this["host"] %>#<%= this["realm"] %>#<%= this["character"] %>#<%= this["locale"] %>'
	},

	'getParams': {
		'explicit': function(result) {
			var params	   = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.character.pvp', 'triggers.explicit.params')));
			params['host']   = DarkTip.map('wow', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		},
		'implicit': function(result) {
			var params	   = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.character.pvp', 'triggers.implicit.params')));
			params['region'] = DarkTip.map('wow', 'maps.host.region', params['host']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		}
	},

	'layout': {
		'width': {
			'core': 400
		}
	},

	'templates': {
		'core': (
			'<div class="tooltip-character tooltip-pvp">' +
				'<img class="icon" src="<%= this["_meta"]["path_host"] %>/static-render/<%= this["_meta"]["region"] %>/<%= this["thumbnail"] %>?alt=/wow/static/images/2d/avatar/<%= this["race"] %>-<%= this["gender"] %>.jpg" />' +
				 /* --- START simple mode -------------------------------- */
				'<div class="col-98 darktip-only-s">' +
					'<div class="headline-right"><span class="icon-achievenemtpoints"><%= this["achievementPoints"] %></span></div>' +
					'<div class="darktip-row headline cclass-<%= this["class"] %>"><%= this["name"] %></div>' +
					'<div class="darktip-row"><%= this._loc("classification") %></div>' +
					'<%= this._subLoop("templates.fragments.talentSpec", this["talents"]) %>' +
					'<% if(this["pvp"]) { %>' +
						'<div class="darktip-row highlight-medium"><%= this._loc("totalHonorableKills", this["pvp"]) %></div>' +
						'<%= this._sub("templates.fragments.arenaTeams") %>' +
						'<%= this._sub("templates.fragments.ratedBattlegrounds", this["pvp"]["ratedBattlegrounds"]) %>' +
					'<% } %>' +
					'<% if(this["_meta"]["extendedActive"]) { %><div class="darktip-row info-meta"><%= this._loc("extendedInactive") %></div><% } %>' +
				'</div>' +
				 /* --- END simple mode ---------------------------------- */
				 /* --- START extended mode ------------------------------ */
				'<% if(this["_meta"]["extendedActive"]) { %>' +
					'<div class="col-98 darktip-only-x">' +
						'<div class="headline-right"><span class="icon-achievenemtpoints"><%= this["achievementPoints"] %></span></div>' +
						'<div class="darktip-row headline cclass-<%= this["class"] %>"><%= this["name"] %></div>' +
						'<div class="darktip-row"><%= this["realm"] %></div>' +
						'<% if(this["guild"]) { %><div class="darktip-row highlight-medium">&lt;<%= this["guild"]["name"] %>&gt;<% if(this["guild"]["level"]) { %> (<%= this["guild"]["level"] %>)<% } %></div><% } %>' +
						'<% if(this["items"]) { %><div class="darktip-row highlight-weak"><%= this._loc("itemLevel", this["items"]) %></div><% } %>' +
						'<div class="darktip-row highlight-reduced"><%= this._loc("lastModified") %></div>' +
						'<div class="darktip-row info-meta"><%= this._loc("extendedActive") %></div>' +
					'</div>' +
				'<% } %>' +
				 /* --- END extended mode -------------------------------- */
			'</div>'
		),
		'404': (
			'<div class="tooltip-character tooltip-pvp tooltip-404">' +
				'<div class="title">404<span class="sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.character") %></span> <span class="value"><%= this["character"] %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.realm") %></span> <span class="value"><%= this["realm"] %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
			'</div>'
		),
		'fragments': {
			'arenaTeams': (
				'<div class="highlight-weak"><%= this._loc("arenaTeams") %></div>' +
				'<div class="block padded">' +
					'<%= this._subLoop("templates.fragments.arenaTeam", this["pvp"]["arenaTeams"]) %>' +
				'</div>'
			),
			'ratedBattlegrounds': (
				'<div class="highlight-weak"><%= this._loc("ratedBattlegrounds") %></div>' +
				'<div class="block padded">' +
					'<%= this._subLoop("templates.fragments.ratedBattleground", this["battlegrounds"]) %>' +
				'</div>'
			),
			'arenaTeam': (
				'<div class="darktip-row padded<% if(this["_loop"] % 2 == 0) { %> alt<% } %>">' +
					'<div class="pos-right highlight-weak"><%= this["personalRating"] %></div>' +
					'<span><span class="sub highlight-strong"><%= this["size"] %></span> <%= this["name"] %></span> <span class="sub highlight-reduced">(<%= this["teamRating"] %>)</span>' +
				'</div>'
			),
			'ratedBattleground': (
				'<div class="darktip-row padded<% if(this["_loop"] % 2 == 0) { %> alt<% } %>">' +
					'<div class="pos-right">' +
						'<span class="highlight-won"><%= this["won"] %></span> - <span class="highlight-lost"><%= this["played"] - this["won"] %></span>' +
						'<% if(this["played"] > 0) { %> | <span class="highlight-weak"><%= ((this["won"] / this["played"])*100).toFixed(0) %>%</span><% } %>' +
					'</div>' +
					'<span><%= this["name"] %></span>' +
				'</div>'
			)
		}
	},

	'i18n': {
		'en_US': {
			'totalHonorableKills': 'Honorable Kills: <%= this["totalHonorableKills"] %>',
			'arenaTeams'         : 'Arena teams:',
			'ratedBattlegrounds' : 'Rated Battlegrounds: <%= this["personalRating"] %>'
		},
		'de_DE': {
			'totalHonorableKills': 'Ehrenhafte Siege: <%= this["totalHonorableKills"] %>',
			'arenaTeams'         : 'Arenateams:',
			'ratedBattlegrounds' : 'Gewertete Schlachtfelder: <%= this["personalRating"] %>'
		},
		'fr_FR': {
			'totalHonorableKills': 'Victoires honorables: <%= this["totalHonorableKills"] %>',
			'arenaTeams'         : 'Team d\'arènes:',
			'ratedBattlegrounds' : 'Classement en champ de bataille: <%= this["personalRating"] %>'
		}
	}
	
});

DarkTip.registerModule('wow.guild', {
	
	'triggers': {
		'explicit': {
			'match' : /guild:(us|eu|kr|tw|cn)\.([^\.]+)\.([^\(]+)\((en|de|fr|es|ru|ko|zh)\)/i,
			'params': {
				'1': 'region',
				'2': 'realm',
				'3': 'guild',
				'4': 'lang'
			}
		},
		'implicit': {
			'match' : /http:\/\/(us\.battle\.net|eu\.battle\.net|kr\.battle\.net|tw\.battle\.net|cn\.battle\.net|www\.battlenet\.com\.cn)\/wow\/(en|de|fr|es|ru|ko|zh)\/guild\/([^\/]+)\/([^\/#]+).*/i,
			'params': {
				'1': 'host',
				'2': 'lang',
				'3': 'realm',
				'4': 'guild'
			}
		},
		'api'     : 'http://<%= this["host"] %>/api/wow/guild/<%= this["realm"] %>/<%= this["guild"] %>?fields=members&locale=<%= this["locale"] %>',
		'hash'    : '<%= this["host"] %>#<%= this["realm"] %>#<%= this["guild"] %>#<%= this["locale"] %>'
	},

	'getParams': {
		'explicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.guild', 'triggers.explicit.params')));
			params['host']   = DarkTip.map('wow', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		},
		'implicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.guild', 'triggers.implicit.params')));
			params['region'] = DarkTip.map('wow', 'maps.host.region', params['host']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		}
	},

	'layout': {
		'width': {
			'core': 275
		}
	},

	'templates': {
		'core': (
			'<div class="tooltip-guild">' +
				'<div class="headline-right"><span class="icon-achievenemtpoints"><%= this["achievementPoints"] %></span></div>' +
    			'<div class="darktip-row headline cside-<%= this["side"] %>"><%= this["name"] %></div>' +
	    		'<div class="darktip-row highlight-medium"><%= this._loc("classification") %></div>' +
				'<% if(this["members"]) { %><div class="darktip-row"><%= this._loc("members") %></div><% } %>' +
			'</div>'
		),
		'404': (
			'<div class="tooltip-guild tooltip-404">' +
				'<div class="title">404<span class="sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.guild") %></span> <span class="value"><%= this["guild"] %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.realm") %></span> <span class="value"><%= this["realm"] %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
		    '</div>'
		)
	},

	'i18n': {
		'en_US': {
			'loading'       : 'Loading Guild...',
			'not-found'     : 'Guild not found',
			'classification': 'Level <%= this["level"] %> <%= this._loc("factionSide." + this["side"]) %> Guild, <%= this["realm"] %>',
			'members'       : '<%= this["members"].length %> members'
		},
		'de_DE': {
			'loading'       : 'Lade Gilde...',
			'not-found'     : 'Gilde nicht gefunden',
			'classification': 'Stufe <%= this["level"] %> <%= this._loc("factionSide." + this["side"]) %>-Gilde, <%= this["realm"] %>',
			'members'       : '<%= this["members"].length %> Mitglieder'
		},
		'fr_FR': {
			'loading'       : 'Chargement Guilde...',
			'not-found'     : 'Aucune Guilde trouvée',
			'classification': 'Niveau <%= this["level"] %> Faction <%= this._loc("factionSide." + this["side"]) %> , <%= this["realm"] %>',
			'members'       : '<%= this["members"].length %> membres'
		},
		'es_ES': {
			'loading'       : 'Cargando hermandad...',
			'not-found'     : 'Hermandad no encontrada',
			'classification': 'Hermandad (<%= this._loc("factionSide." + this["side"]) %>), nivel <%= this["level"] %>, <%= this["realm"] %>',
			'members'       : '<%= this["members"].length %> miembros'
		}
	}
	
});

DarkTip.registerModule('wow.item', {
	
	'triggers': {
		'explicit': {
			'match' : /item:(us|eu|kr|tw|cn)\.([^\(]+)\((en|de|fr|es|ru|ko|zh)\)/i,
			'params': {
				'1': 'region',
				'2': 'itemid',
				'3': 'lang'
			}
		},
		'implicit': {
			'match' : /http:\/\/(us\.battle\.net|eu\.battle\.net|kr\.battle\.net|tw\.battle\.net|cn\.battle\.net|www\.battlenet\.com\.cn)\/wow\/(en|de|fr|es|ru|ko|zh)\/item\/([^\/#]+).*/i,
			'params': {
				'1': 'host',
				'2': 'lang',
				'3': 'itemid'
			}
		},
		'api'     : 'http://<%= this["host"] %>/api/wow/item/<%= this["itemid"] %>?locale=<%= this["locale"] %>',
		'hash'    : '<%= this["host"] %>#<%= this["itemid"] %>#<%= this["locale"] %>'
	},
	
	'patterns': {
		'money': /^([0-9]+)([0-9]{2})([0-9]{2})$|([0-9]{1,2})([0-9]{2})$|([0-9]{1,2})$/i
	},
	
	'maps': {
		'stats': {
			'primary': {
				'3': 'Agility',
				'4': 'Strength',
				'5': 'Intellect',
				'6': 'Spirit',
				'7': 'Stamina'
			},
			'secondary': {
				'13': 'Dodge rating',
				'14': 'Parry rating',
				'31': 'Hit rating',
				'32': 'Critical strike rating',
				'35': 'Resilience rating',
				'36': 'Haste rating',
				'37': 'Expertise rating',
				'38': 'Attack power',
				'46': 'Health regeneration',
				'45': 'Spell power',
				'47': 'Spell penetration',
				'49': 'Mastery rating'
			}
		}
	},
	
	'getParams': {
		'explicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.item', 'triggers.explicit.params')));
			params['host']   = DarkTip.map('wow', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		},
		'implicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.item', 'triggers.implicit.params')));
			params['region'] = DarkTip.map('wow', 'maps.host.region', params['host']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		}
	},
	
	'layout': {
		'width': {
			'core': 425
		}
	},
	
	'templates': {
		'tools': {
			'_isStatPrimary': function(statid) {
				var result = DarkTip.map(this['_meta']['module'], 'maps.stats.primary', statid);
				if(result !== undefined)
				{
					return true;
				}
				return false;
			},
			'_isStatSecondary': function(statid) {
				var result = DarkTip.map(this['_meta']['module'], 'maps.stats.secondary', statid);
				if(result !== undefined)
				{
					return true;
				}
				return false;
			},
			'_renderCoins': function(total) {
				var temp   = total.toString();
				var result = temp.match(DarkTip.read(this['_meta']['module'], 'patterns.money'));
				var split  = {
					'gold'  : -1,
					'silver': -1,
					'copper': 0
				};
				if(result)
				{
					if(result[3] !== undefined)
					{
						split = {
							'gold'  : parseInt(result[1]),
							'silver': parseInt(result[2]),
							'copper': parseInt(result[3])
						};
					}
					else if(result[5] !== undefined)
					{
						split = {
							'gold'  : -1,
							'silver': parseInt(result[4]),
							'copper': parseInt(result[5])
						};
					}
					else
					{
						split = {
							'gold'  : -1,
							'silver': -1,
							'copper': parseInt(result[6])
						};
					}
				}
				return DarkTip.jq.jqote(
					DarkTip.read(this['_meta']['module'], 'templates.fragments.coins'),
					DarkTip.jq.extend(true, {}, DarkTip.getTemplateTools(this['_meta']['module'], this['_meta']['locale']), split)
				);
			}
		},
		'core': (
			'<div class="tooltip-item">' +
	    		'<img class="icon" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/56/<% if(this["icon"]) { %><%= this["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg" />' +
		    	 // --- START simple mode -----------------------------------
				'<div class="col-70 darktip-only-s">' +
					'<div class="headline-right"><%= this["itemLevel"] %></div>' +
					'<div class="darktip-row headline cquality-<%= this["quality"] %>"><%= this["name"] %></div>' +
					'<% if(this["heroic"]) { %><div class="darktip-row"><%= this._loc("heroic") %></div><% } %>' +
					'<% if(this["boundZone"]) { %><div class="darktip-row"><%= this["boundZone"]["name"] %></div><% } %>' +
					'<% if(this["itemBind"]) { %>' +
						'<div class="darktip-row">' +
							'<% if(this["quality"] == 7) { %>' +
								'<%= this._loc("itemBind.4") %>' +
							'<% } else { %>' +
								'<%= this._loc("itemBind." + this["itemBind"]) %>' +
							'<% } %>' +
						'</div>' +
					'<% } %>' +
					'<% if(this["maxCount"]) { %><div class="darktip-row"><%= this._loc("maxCount") %></div><% } %>' +
					'<div class="darktip-row classification">' +
						'<% if(this["containerSlots"]) { %>' +
							'<%= this._loc("containerSlots") %>' +
						'<% } else { %>' +
							'<% if(this["equippable"]) { %>' +
								'<%= this._loc("inventoryType." + this["inventoryType"]) %>' +
								'<div class="pos-right"><%= this._loc("itemClass." + this["itemClass"] + "." + this["itemSubClass"]) %></div>' +
							'<% } else { %>' +
								'<%= this._loc("itemClass." + this["itemClass"] + "." + this["itemSubClass"]) %>' +
							'<% } %>' +
						'<% } %>' +
					'</div>' +
					'<% if(this["baseArmor"]) { %><div class="darktip-row"><%= this._loc("baseArmor") %></div><% } %>' +
					'<% if(this["weaponInfo"]) { %>' +
						'<div>' +
							'<%= this._subLoop("templates.fragments.weaponDamage", this["weaponInfo"]["damage"]) %>' +
							'<div class="pos-right"><%= this._loc("weaponSpeed", this["weaponInfo"]) %></div>' +
							'<div class="darktip-row"><%= this._loc("dps", this["weaponInfo"]) %></div>' +
						'</div>' +
					'<% } %>' +
					'<%= this._subLoop("templates.fragments.stat.primary", this["bonusStats"]) %>' +
					'<% if(this["gemInfo"]) { %><div class="darktip-row"><%= this["gemInfo"]["bonus"]["name"] %></div><% } %>' +
					'<% if(this["socketInfo"]) { %><div class="block sockets"><%= this._subLoop("templates.fragments.socket", this["socketInfo"]["sockets"]) %></div><% } %>' +
					'<% if(this["allowableClasses"]) { %><div class="darktip-row"><%= this._loc("allowableClasses") %></div><% } %>' +
					'<% if(this["allowableRaces"]) { %><div class="darktip-row"><%= this._loc("allowableRaces") %></div><% } %>' +
					'<% if(this["requiredLevel"]) { %><div class="darktip-row"><%= this._loc("requiredLevel") %></div><% } %>' +
					'<% if(this["requiredSkill"]) { %><div class="darktip-row"><%= this._loc("requiredSkill") %></div><% } %>' +
					'<% if(this["requiredAbility"]) { %><div class="darktip-row"><%= this._loc("requiredAbility") %></div><% } %>' +
					'<% if(this["minFactionId"]) { %><div class="darktip-row"><%= this._loc("minFactionId") %></div><% } %>' +
					'<%= this._subLoop("templates.fragments.stat.secondary", this["bonusStats"]) %>' +
					'<%= this._subLoop("templates.fragments.stat.spell", this["itemSpells"]) %>' +
					'<% if(this["description"]) { %><div class="darktip-row highlight-medium">&quot;<%= this["description"] %>&quot;</div><% } %>' +
			    	'<% if(this["_meta"]["extendedActive"]) { %><div class="darktip-row info-meta"><%= this._loc("extendedInactive") %></div><% } %>' +
				'</div>' +
				// --- END simple mode -------------------------------------
				// --- START extended mode ---------------------------------
			    '<% if(this["_meta"]["extendedActive"]) { %>' +
					'<div class="col-70 darktip-only-x">' +
						'<div class="headline-right"><%= this["itemLevel"] %></div>' +
						'<div class="darktip-row headline cquality-<%= this["quality"] %>"><%= this["name"] %></div>' +
						'<div class="darktip-row highlight-strong"><%= this._loc("itemId") %></div>' +
						'<% if(this["maxDurability"]) { %><div class="darktip-row"><%= this._loc("maxDurability") %></div><% } %>' +
						'<% if(this["isAuctionable"]) { %><div class="darktip-row"><%= this._loc("auctionable") %></div><% } %>' +
						'<div class="darktip-row"><%= this._loc("disenchantable") %></div>' +
						'<% if(this["stackable"] > 1) { %><div class="darktip-row"><%= this._loc("stackable") %></div><% } %>' +
						'<div class="darktip-row"><%= this._loc("sellPrice") %></div>' +
						'<div class="darktip-row info-meta"><%= this._loc("extendedActive") %></div>' +
			    	'</div>' +
		    	'<% } %>' +
				// --- END extended mode -----------------------------------
			'</div>'
		),
		'404': (
			'<div class="tooltip-item tooltip-404">' +
				'<div class="title">404<span class="sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.item") %></span> <span class="value"><%= this["itemid"] %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
		    '</div>'
		),
		'fragments': {
			'allowableClass': '<span class="cclass-<%= this["_value"] %>"><%= this._loc("characterClass." + this["_value"] + ".0")%></span>',
			'allowableRace' : '<span class="crace-<%= this["_value"] %>"><%= this._loc("characterRace." + this["_value"] + ".0")%></span>',
			'weaponDamage'  : '<div class="darktip-row"><%= this._loc("damage") %></div>',
			'coins'         : (
				'<% if(this["gold"] > -1) { %><span class="icon-gold"><%= this["gold"] %></span><% } %>' +
				'<% if(this["silver"] > -1) { %><span class="icon-silver"><%= this["silver"] %></span><% } %>' +
				'<% if(this["copper"]) { %><span class="icon-copper"><%= this["copper"] %></span><% } else { %>' +
				'<span class="icon-copper">0</span><% } %>'
			),
			'stat'          : {
				'primary'  : (
					'<% if(this._isStatPrimary(this["stat"])) { %>' +
						'<div class="darktip-row">' +
							'<% if(this["amount"] >= 0) { %>+<% } %><%= this["amount"] %> <%= this._loc("itemStat." + this["stat"]) %>' +
						'</div>' +
					'<% }'
				),
				'secondary': (
					'<% if(this._isStatSecondary(this["stat"])) { %>' +
						'<div class="darktip-row highlight-custom">' +
							'<%= this._loc("itemStat." + this["stat"]) %>' +
						'</div>' +
					'<% }'
				),
				'spell'    : (
					'<% if(this["spell"]["description"]) { %>' +
						'<div class="darktip-row highlight-custom"><%= this._loc("itemSpell") %></div>' +
					'<% } %>'
				)
			},
			'socket': (
				'<div class="darktip-row socket highlight-reduced">' +
					'<span class="icon-socket socket-<%= this["type"] %>">' +
						'<span class="empty"></span><span class="frame"></span>' +
					'</span>' +
					'<%= this._loc("itemSocket." + this["type"]) %>' +
				'</div>'
			)
		}
	},
	
	'i18n': {
		'en_US': {
			'loading'          : 'Loading item...',
			'not-found'        : 'Item not found',
			'itemId'           : 'Item ID: <%= this["id"] %>',
			'heroic'           : 'Heroic',
			'maxCount'         : 'Unique<% if(this["maxCount"] > 1) { %> (<%= this["maxCount"] %>)<% } %>',
			'containerSlots'   : '<%= this["containerSlots"] %> Slot <%= this._loc("itemClass." + this["itemClass"] + "." + this["itemSubClass"]) %>',
			'damage'           : '<%= this["minDamage"] %> - <%= this["maxDamage"] %> Damage',
			'weaponSpeed'      : 'Speed <%= this["weaponSpeed"] %>',
			'dps'              : '(<%= this["dps"].toFixed(2) %> damage per second)',
			'baseArmor'        : '<%= this["baseArmor"] %> Armor',
			'maxDurability'    : 'Durability <%= this["maxDurability"] %> / <%= this["maxDurability"] %>',
			'requiredLevel'    : 'Requires Level <%= this["requiredLevel"] %>',
			'requiredSkill'    : 'Requires <%= this._loc("characterSkill." + this["requiredSkill"]) %> (<%= this["requiredSkillRank"] %>)',
			'requiredAbility'  : 'Requires <%= this["requiredAbility"]["name"] %>',
			'minFactionId'     : 'Requires Faction ID <%= this["minFactionId"] %> - <%= this._loc("reputationLevel." + this["minReputation"]) %>',
			'allowableClasses' : 'Classes: <%= this._subLoop("templates.fragments.allowableClass", this["allowableClasses"], ", ") %>',
			'allowableRaces'   : 'Races: <%= this._subLoop("templates.fragments.allowableRace", this["allowableRaces"], ", ") %>',
			'itemStat'         : {
				'3' : 'Agility',
				'4' : 'Strength',
				'5' : 'Intellect',
				'6' : 'Spirit',
				'7' : 'Stamina',
				'13': 'Equip: Increases your dodge rating by <%= this["amount"] %>.',
				'14': 'Equip: Increases your parry rating by <%= this["amount"] %>.',
				'31': 'Equip: Increases your hit rating by <%= this["amount"] %>.',
				'32': 'Equip: Increases your critical strike rating by <%= this["amount"] %>.',
				'35': 'Equip: Increases your resilience rating by <%= this["amount"] %>.',
				'36': 'Equip: Increases your haste rating by <%= this["amount"] %>.',
				'37': 'Equip: Increases your expertise rating by <%= this["amount"] %>.',
				'38': 'Equip: Increases your attack power by <%= this["amount"] %>.',
				'46': 'Equip: Increases your health regeneration by <%= this["amount"] %>.',
				'45': 'Equip: Increases spell power by <%= this["amount"] %>.',
				'47': 'Equip: Increases spell penetration by <%= this["amount"] %>.',
				'49': 'Equip: Increases your mastery rating by <%= this["amount"] %>.'
			},
			'itemSpell'        : 'Equip / Use / Chance on Hit: <%= this["spell"]["description"] %>',
			'sellPrice'        : 'Sell Price: <%= this._renderCoins(this["sellPrice"]) %>',
			'stackable'        : 'Stackable (<%= this["stackable"] %>)',
			'disenchantable'   : '<% if(this["disenchantingSkillRank"]) { %>Can be disenchanted (<%= this["disenchantingSkillRank"] %>)<% } else { %>Cannot be disenchanted<% } %>',
			'auctionable'      : 'Can be auctioned',
			'itemBind'         : { '1': 'Binds when picked up', '2': 'Binds when equipped', '3': 'Binds when used', '4': 'Binds to Battle.net account' },
			'itemSocket'       : {
				'BLUE'     : 'Blue Socket',
				'RED'      : 'Red Socket',
				'YELLOW'   : 'Yellow Socket',
				'META'     : 'Meta Socket',
				'ORANGE'   : 'Orange Socket',
				'PURPLE'   : 'Purple Socket',
				'GREEN'    : 'Green Socket',
				'PRISMATIC': 'Prismatic Socket',
				'HYDRAULIC': 'Hydraulic Socket',
				'COGWHEEL' : 'Cogwheel Socket'
			},
			'reputationLevel'  : { '0': 'Hated', '1': 'Hostile', '2': 'Unfriendly', '3': 'Neutral', '4': 'Friendly', '5': 'Honored', '6': 'Revered', '7': 'Exalted' },
			'itemClass'        : {
				'0' : { '0': 'Consumeable', '1': 'Potion', '2': 'Elixir', '3': 'Flask', '4': 'Scroll', '5': 'Food &amp; Drink', '6': 'Item Enhancement', '7': 'Bandage', '8': 'Other' },
				'1' : { '0': 'Bag', '1': 'Soul Bag', '2': 'Herb Bag', '3': 'Enchanting Bag', '4': 'Engineering Bag', '5': 'Gem Bag', '6': 'Mining Bag', '7': 'Leatherworking Bag', '8': 'Inscription Bag', '9': 'Tackle Box' },
				'2' : { '0': 'Axe' /* 1H */, '1': 'Axe' /* 2H */, '2': 'Bow', '3': 'Gun', '4': 'Mace' /* 1H */, '5': 'Mace' /* 2H */, '6': 'Polearm', '7': 'Sword' /* 1H */, '8': 'Sword' /* 2H */, '10': 'Staff', '13': 'Fist Weapon', '14': 'Miscellaneous', '15': 'Dagger', '16': 'Thrown', '18': 'Crossbow', '19': 'Wand', '20': 'Fishing Pole' },
				'3' : { '0': 'Red Gem', '1': 'Blue Gem', '2': 'Yellow Gem', '3': 'Purple Gem', '4': 'Green Gem', '5': 'Orange Gem', '6': 'Meta Gem', '7': 'Simple Gem', '8': 'Prismatic Gem', '9': 'Hydraulic Gem', '10': 'Cogwheel Gem' },
				'4' : { '0': 'Miscellaneous', '1': 'Cloth', '2': 'Leather', '3': 'Mail', '4': 'Plate', '6': 'Shield', '7': 'Libram', '8': 'Idol', '9': 'Totem', '10': 'Sigil', '11': 'Relic' },
				'7' : { '0': 'Trade Goods', '1': 'Parts', '2': 'Explosives', '3': 'Devices', '4': 'Jewelcrafting', '5': 'Cloth', '6': 'Leather', '7': 'Metal &amp; Stone', '8': 'Meat', '9': 'Herb', '10': 'Elemental', '11': 'Other', '12': 'Enchanting', '13': 'Materials', '14': 'Item Enchantment' },
				'9' : { '0': 'Book', '1': 'Leatherworking', '2': 'Tailoring', '3': 'Engineering', '4': 'Blacksmithing', '5': 'Cooking', '6': 'Alchemy', '7': 'First Aid', '8': 'Enchanting', '9': 'Fishing', '10': 'Jewelcrafting', '11': 'Inscription' },
				'12': { '0': 'Quest Item' },
				'13': { '0': 'Key' },
				'15': { '0': 'Junk', '1': 'Reagent', '2': 'Pet', '3': 'Holiday', '4': 'Other', '5': 'Mount' },
				'16': { '0': 'Glyph', '1': 'Warrior', '2': 'Paladin', '3': 'Hunter', '4': 'Rogue', '5': 'Priest', '6': 'Death Knight', '7': 'Shaman', '8': 'Mage', '9': 'Warlock', '11': 'Druid' }
			},
			'inventoryType'   : { '1': 'Head', '2': 'Neck', '3': 'Shoulder', '4': 'Shirt', '5': 'Chest', '6': 'Waist', '7': 'Legs', '8': 'Feet', '9': 'Wrist', '10': 'Hands', '11': 'Finger', '12': 'Trinket', '13': 'One-Hand', '15': 'Ranged' /* Bow */, '16': 'Back', '17': 'Two-Hand', '18': 'Bag', '21': 'Main-hand', '22': 'Off-hand', '23': 'Held in off-hand', '25': 'Ranged' /* Thrown */, '26': 'Ranged' /* Gun, Crossbow, Wand */ }
		},
		'de_DE': {
			'loading'          : 'Lade Gegenstand...',
			'not-found'        : 'Gegenstand nicht gefunden',
			'itemId'           : 'Gegenstands ID: <%= this["id"] %>',
			'heroic'           : 'Heroisch',
			'maxCount'         : 'Einzigartig<% if(this["maxCount"] > 1) { %> (<%= this["maxCount"] %>)<% } %>',
			'containerSlots'   : '<%= this["containerSlots"] %> Platz <%= this._loc("itemClass." + this["itemClass"] + "." + this["itemSubClass"]) %>',
			'damage'           : '<%= this["minDamage"] %> - <%= this["maxDamage"] %> Schaden',
			'weaponSpeed'      : 'Geschwindigkeit <%= this["weaponSpeed"] %>',
			'dps'              : '(<%= this["dps"].toFixed(2) %> Schaden pro Sekunde)',
			'baseArmor'        : '<%= this["baseArmor"] %> Rüstung',
			'maxDurability'    : 'Haltbarkeit <%= this["maxDurability"] %> / <%= this["maxDurability"] %>',
			'requiredLevel'    : 'Erfordert Stufe <%= this["requiredLevel"] %>',
			'requiredSkill'    : 'Erfordert <%= this._loc("characterSkill." + this["requiredSkill"]) %> (<%= this[requiredSkillRank] %>)',
			'requiredAbility'  : 'Erfordert <%= this["requiredAbility"]["name"] %>',
			'minFactionId'     : 'Erfordert Fraktion ID <%= this["minFactionId"] %> - <%= this._loc("reputationLevel." + this["minReputation"]) %>',
			'allowableClasses' : 'Klassen: <%= this._subLoop("templates.fragments.allowableClass", this["allowableClasses"], ", ") %>',
			'allowableRaces'   : 'Rassen: <%= this._subLoop("templates.fragments.allowableRace", this["allowableRaces"], ", ") %>',
			'itemStat'         : {
				'3' : 'Beweglichkeit',
				'4' : 'Stärke',
				'5' : 'Intellekt',
				'6' : 'Willenskraft',
				'7' : 'Ausdauer',
				'13': 'Anlegen: Erhöht eure Ausweichwertung um <%= this["amount"] %>.',
				'14': 'Anlegen: Erhöht eure Parrierwertung um <%= this["amount"] %>.',
				'31': 'Anlegen: Erhöht eure Trefferwertung um <%= this["amount"] %>.',
				'32': 'Anlegen: Erhöht eure kritische Trefferwertung um <%= this["amount"] %>.',
				'35': 'Anlegen: Erhöht eure Abhärtungswertung um <%= this["amount"] %>.',
				'36': 'Anlegen: Erhöht eure Tempowertung um <%= this["amount"] %>.',
				'37': 'Anlegen: Erhöht eure Waffenkundewertung um <%= this["amount"] %>.',
				'38': 'Anlegen: Erhöht eure Angriffswertung um <%= this["amount"] %>.',
				'46': 'Anlegen: Erhöht eure Gesundheitsregenartion um <%= this["amount"] %>.',
				'45': 'Anlegen: Erhöht Zaubermacht um <%= this["amount"] %>.',
				'47': 'Anlegen: Erhöht Zauberdurchschlagskraft um <%= this["amount"] %>.',
				'49': 'Anlegen: Erhöht eure Meisterschaftswertung um <%= this["amount"] %>.'
			},
			'itemSpell'        : 'Anlegen / Benutzen / Chance beim Treffer: <%= this["spell"]["description"] %>',
			'sellPrice'        : 'Verkaufspreis: <%= this._renderCoins(this["sellPrice"]) %>',
			'stackable'        : 'Stapelbar (<%= this["stackable"] %>)',
			'disenchantable'   : '<% if(this["disenchantingSkillRank"]) { %>Kann entzaubert werden (<%= this["disenchantingSkillRank"] %>)<% } else { %>Kann nicht entzaubert werden<% } %>',
			'auctionable'      : 'Kann versteigert werden',
			'itemBind'         : { '1': 'Wird beim Aufheben gebunden', '2': 'Wird beim Anlegen gebunden', '3': 'Wird bei Benutzung gebunden', '4': 'Wird an Battle.net-Account gebunden' },
			'itemSocket'       : {
				'BLUE'     : 'Blauer Sockel',
				'RED'      : 'Roter Sockel',
				'YELLOW'   : 'Gelber Sockel',
				'META'     : 'Meta Sockel',
				'ORANGE'   : 'Orangener Sockel',
				'PURPLE'   : 'Lila Sockel',
				'GREEN'    : 'Grüner Sockel',
				'PRISMATIC': 'Prismatischer Sockel',
				'HYDRAULIC': 'Hydraulischer Sockel',
				'COGWHEEL' : 'Zahnrad Sockel'
			},
			'reputationLevel'  : { '0': 'Haßerfüllt', '1': 'Feindselig', '2': 'Unfreundlich', '3': 'Neutral', '4': 'Freundlich', '5': 'Wohlwollend', '6': 'Respektvoll', '7': 'Ehrfürchtig' },
			'itemClass'        : {
				'0' : { '0': 'Verbrauchbar', '1': 'Trank', '2': 'Elixier', '3': 'Fläschchen', '4': 'Schriftrolle', '5': 'Essen &amp; Drinken', '6': 'Gegenstandsverzauberung', '7': 'Verband', '8': 'Anderes' },
				'1' : { '0': 'Tasche', '1': 'Seelentasche', '2': 'Kräutertasche', '3': 'Verzauberertasche', '4': 'Ingenierstasche', '5': 'Edelsteintasche', '6': 'Bergbautasche', '7': 'Ledertasche', '8': 'Schreibertasche', '9': 'Spinnerkasten' },
				'2' : { '0': 'Axt' /* 1H */, '1' : 'Axt' /* 2H */, '2': 'Bogen', '3': 'Gewehr', '4': 'Streitkolben' /* 1H */, '5': 'Streitkolben' /* 2H */, '6': 'Stangenwaffe', '7': 'Schwert' /* 1H */, '8': 'Schwert' /* 2H */, '10': 'Stab', '13': 'Faustwaffe', '14': 'Verschiedenes', '15': 'Dolch', '16': 'Wurfwaffe', '18': 'Armbrust', '19': 'Zauberstab', '20': 'Angelrute' },
				'3' : { '0': 'Roter Edelstein', '1': 'Blauer Edelstein', '2': 'Gelber Edelstein', '3': 'Violetter Edelstein', '4': 'Grüner Edelstein', '5': 'Orangener Edelstein', '6': 'Meta Edelstein', '7': 'Einfacher Edelstein', '8': 'Prismatischer Edelstein', '9': 'Hydraulischer Edelstein', '10': 'Zahnrad Edelstein' },
				'4' : { '0': 'Verschiedenes', '1': 'Stoff', '2': 'Leder', '3': 'Schwere Rüstung', '4': 'Platte', '6': 'Schild', '7': 'Libram', '8': 'Idol', '9': 'Totem', '10': 'Siegel', '11': 'Relikt' },
				'7' : { '0': 'Handelswaren', '1': 'Teile', '2': 'Sprengstoff', '3': 'Geräte', '4': 'Juwelenschleifen', '5': 'Stoff', '6': 'Leder', '7': 'Metall &amp; Stein', '8': 'Fleisch', '9': 'Kräuter', '10': 'Elementar', '11': 'Anderes', '12': 'Verzauberkunst', '13': 'Materialien', '14': 'Gegenstandsverzauberungen' },
				'9' : { '0': 'Buch', '1': 'Lederverarbeitung', '2': 'Schneiderei', '3': 'Ingenieurskunst', '4': 'Schmiedekunst', '5': 'Kochen', '6': 'Alchemie', '7': 'Erste Hilfe', '8': 'Verzauberkunst', '9': 'Angeln', '10': 'Juwelenschleifen', '11': 'Inschriftenkunde' },
				'12': { '0': 'Questgegenstand' },
				'13': { '0': 'Schlüssel' },
				'15': { '0': 'Plunder', '1': 'Reagenz', '2': 'Haustier', '3': 'Feiertag', '4': 'Anderes', '5': 'Reittier' },
				'16': { '0': 'Glyphe', '1': 'Krieger', '2': 'Paladin', '3': 'Jäger', '4': 'Schurke', '5': 'Priester', '6': 'Todesritter', '7': 'Schamane', '8': 'Magier', '9': 'Hexenmeister', '11': 'Druide' }
			},
			'inventoryType'    : { '1': 'Kopf', '2': 'Nacken', '3': 'Schulter', '4': 'Hemd', '5': 'Brust', '6': 'Taille', '7': 'Beine', '8': 'Füße', '9': 'Handgelenke', '10': 'Hände', '11': 'Finger', '12': 'Schmuckstück', '13': 'Einhändig', '15': 'Distanz' /* Bogen */, '16': 'Rücken', '17': 'Zweihändig', '18': 'Tasche', '21': 'Waffenhand', '22': 'Schildhand', '23': 'In Schildhand geführt', '25': 'Distanz' /* Wurfwaffe */, '26': 'Distanz' /* Gewehr, Armbrust, Zauberstab */ }
		},
		'fr_FR': {
			'loading'          : 'Chargement Objets...',
			'not-found'        : 'Objets introuvable',
			'itemId'           : 'ID Objets: <%= this["id"] %>',
			'heroic'           : 'Héroïc',
			'maxCount'         : 'Unique<% if(this["maxCount"] > 1) { %> (<%= this["maxCount"] %>)<% } %>',
			'containerSlots'   : '<%= this["containerSlots"] %> Slot <%= this._loc("itemClass." + this["itemClass"] + "." + this["itemSubClass"]) %>',
			'damage'           : '<%= this["minDamage"] %> - <%= this["maxDamage"] %> Dégâts',
			'weaponSpeed'      : 'Vitesse <%= this["weaponSpeed"] %>',
			'dps'              : '(<%= this["dps"].toFixed(2) %> domage par second)',
			'baseArmor'        : '<%= this["baseArmor"] %> Armure',
			'maxDurability'    : 'Durabilité <%= this["maxDurability"] %> / <%= this["maxDurability"] %>',
			'requiredLevel'    : 'Niveau <%= this["requiredLevel"] %> requis',
			'requiredSkill'    : 'Requiert <%= this._loc("characterSkill." + this["requiredSkill"]) %> (<%= this["requiredSkillRank"] %>)',
			'requiredAbility'  : 'Requiert <%= this["requiredAbility"]["name"] %>',
			'minFactionId'     : 'Requiert Faction ID <%= this["minFactionId"] %> - <%= this._loc("reputationLevel." + this["minReputation"]) %>',
			'allowableClasses' : 'Classes: <%= this._subLoop("templates.fragments.allowableClass", this["allowableClasses"], ", ") %>',
			'allowableRaces'   : 'Races: <%= this._subLoop("templates.fragments.allowableRace", this["allowableRaces"], ", ") %>',
			'itemStat'         : {
				'3' : 'Agilité',
				'4' : 'Force',
				'5' : 'Intelligence',
				'6' : 'Esprit',
				'7' : 'Endurance',
				'13': 'Equipé: augmente le score d\'esquive de <%= this["amount"] %>.',
				'14': 'Equipé: augmente le score de parade de <%= this["amount"] %>.',
				'31': 'Equipé: augmente votre score de toucher de <%= this["amount"] %>.',
				'32': 'Equipé: augmente votre score de coup critique de <%= this["amount"] %>.',
				'35': 'Equipé: augmente votre score de resilience de <%= this["amount"] %>.',
				'36': 'Equipé: augmente votre score de hâte de <%= this["amount"] %>.',
				'37': 'Equipé: augmente votre score d\'expertise de <%= this["amount"] %>.',
				'38': 'Equipé: augmente de <%= this["amount"] %> la puissance d\'attaque.',
				'46': 'Equipé: augmente votre régénération de vie de <%= this["amount"] %>.',
				'45': 'Equipé: augmente votre puissance des sorts de <%= this["amount"] %>.',
				'47': 'Equipé: augmente la pénétration des sorts de <%= this["amount"] %>.',
				'49': 'Equipé: augmente votre score maîtrise de <%= this["amount"] %>.'
			},
			'itemSpell'        : 'Equipé / Utilisé / Chance lorsque vous touchez: <%= this["spell"]["description"] %>',
			'sellPrice'        : 'Prix de vente: <%= this._renderCoins(this["sellPrice"]) %>',
			'stackable'        : 'Empilable (<%= this["stackable"] %>)',
			'disenchantable'   : '<% if(this["disenchantingSkillRank"]) { %>Peut être désenchanté (<%= this["disenchantingSkillRank"] %>)<% } else { %>Ne peut pas être désenchanté<% } %>',
			'auctionable'      : 'Peut être vendu',
			'itemBind'         : { '1': 'Lié quand ramassé', '2': 'Lié quand équipé', '3': 'Lié quand utilisé', '4': 'Lié au compte Battle.net' },
			'itemSocket'       : {
				'BLUE'     : 'Châsse bleue',
				'RED'      : 'Châsse rouge',
				'YELLOW'   : 'Châsse jaune',
				'META'     : 'Méta-châsse',
				'ORANGE'   : 'Châsse orange',
				'PURPLE'   : 'Châsse Violette',
				'GREEN'    : 'Châsse verte',
				'PRISMATIC': 'Châsse prismatique',
				'HYDRAULIC': 'Châsse Hydraulique',
				'COGWHEEL' : 'Chambre de roue dentée'
			},
			'reputationLevel'  : { '0': 'Haï', '1': 'Hostile', '2': 'Inamical', '3': 'Neutre', '4': 'Amical', '5': 'Honoré', '6': 'Révéré', '7': 'Exalté' },
			'itemClass'        : {
				'0' : { '0': 'Consommable', '1': 'Potion', '2': 'Elixir', '3': 'Flacon', '4': 'Parchemin', '5': 'Nourriture &amp; boissons', '6': 'Amélioration d\'objet', '7': 'Bandage', '8': 'Autre' },
				'1' : { '0': 'Sac', '1': 'Sac d\'âme', '2': 'Sac d\'herbes', '3': 'Sac d\'enchanteur', '4': 'Sac d\'ingénieur', '5': 'Sac de gemmes', '6': 'Sac de mineur', '7': 'Sac de travail du cuir', '8': 'Sac de calligraphie', '9': 'Boîte d\'appâts' },
				'2' : { '0': 'Axe' /* 1H */, '1': 'Axe' /* 2H */, '2': 'Bow', '3': 'Gun', '4': 'Mace' /* 1H */, '5': 'Mace' /* 2H */, '6': 'Polearm', '7': 'Sword' /* 1H */, '8': 'Sword' /* 2H */, '10': 'Staff', '13': 'Fist Weapon', '14': 'Miscellaneous', '15': 'Dagger', '16': 'Thrown', '18': 'Crossbow', '19': 'Wand', '20': 'Fishing Pole' },
				'3' : { '0': 'Gemme rouge', '1': 'Gemme bleue', '2': 'Gemme jaune', '3': 'Gemme Violette', '4': 'Gemme verte', '5': 'Gemme orange', '6': 'Gemme Méta', '7': 'Gemme simple', '8': 'Gemme Prismatique', '9': 'Gemme Hydraulique', '10': 'Gemme Roue dentée' },
				'4' : { '0': 'Divers', '1': 'Cloth', '2': 'Leather', '3': 'Mail', '4': 'Plate', '6': 'Shield', '7': 'Libram', '8': 'Idol', '9': 'Totem', '10': 'Sigil', '11': 'Relic' },
				'7' : { '0': 'Artisanat', '1': 'Eléments', '2': 'Explosifs', '3': 'Appareils', '4': 'Joaillerie', '5': 'Tissu', '6': 'Cuir', '7': 'Métal &amp; pierre', '8': 'Viande', '9': 'Herbes', '10': 'Elémentaire', '11': 'Autre', '12': 'Enchantement', '13': 'Matériaux', '14': 'Enchantement d\'objet' },
				'9' : { '0': 'Livre', '1': 'Travail du cuir', '2': 'Couture', '3': 'Ingénierie', '4': 'Forge', '5': 'Cuisine', '6': 'Alchimie', '7': 'Secourisme', '8': 'Enchantement', '9': 'Pêche', '10': 'Joaillerie', '11': 'Calligraphie' },
				'12': { '0': 'Quête' },
				'13': { '0': 'Key' },
				'15': { '0': 'Camelote', '1': 'Réactif', '2': 'Familier', '3': 'Fête', '4': 'Autre', '5': 'Monture' },
				'16': { '0': 'Glyphe', '1': 'Guerrier', '2': 'Paladin', '3': 'Chasseur', '4': 'Voleur', '5': 'Prêtre', '6': 'Chevalier de la mort', '7': 'Chaman', '8': 'Mage', '9': 'Démoniste', '11': 'Druide' }
			},
			'inventoryType'   : { '1': 'Tête', '2': 'Cou', '3': 'Epaule', '4': 'Chemise', '5': 'Torse', '6': 'Taille', '7': 'Jambes', '8': 'Pieds', '9': 'Poignets', '10': 'Mains', '11': 'Doigt', '12': 'Bijou', '13': 'A une mains', '15': 'Ranged' /* Bow */, '16': 'Back', '17': 'A deux mains', '18': 'Sac', '21': 'Main-hand', '22': 'Off-hand', '23': 'Held in off-hand', '25': 'Ranged' /* Thrown */, '26': 'Ranged' /* Gun, Crossbow, Wand */ }
		},
		'es_ES': {
			'loading'          : 'Cargando objeto...',
			'not-found'        : 'Objeto no encontrado',
			'itemId'           : 'ID de Objeto: <%= this["id"] %>',
			'heroic'           : 'Heroico',
			'maxCount'         : 'Único<% if(this["maxCount"] > 1) { %> (<%= this["maxCount"] %>)<% } %>',
			'containerSlots'   : '<%= this._loc("itemClass." + this["itemClass"] + "." + this["itemSubClass"]) %> con <%= this["containerSlots"] %> Casillas',
			'damage'           : '<%= this["minDamage"] %> - <%= this["maxDamage"] %> Daño',
			'weaponSpeed'      : 'Velocidad <%= this["weaponSpeed"] %>',
			'dps'              : '(<%= this["dps"].toFixed(2) %> daño por segundo)',
			'baseArmor'        : '<%= this["baseArmor"] %> de armadura',
			'maxDurability'    : 'Durabilidad <%= this["maxDurability"] %> / <%= this["maxDurability"] %>',
			'requiredLevel'    : 'Requiere nivel <%= this["requiredLevel"] %>',
			'requiredSkill'    : 'Requiere <%= this._loc("characterSkill." + this["requiredSkill"]) %> (<%= this["requiredSkillRank"] %>)',
			'requiredAbility'  : 'Requiere <%= this["requiredAbility"]["name"] %>',
			'minFactionId'     : 'Requiere facción con ID <%= this["minFactionId"] %> - <%= this._loc("reputationLevel." + this["minReputation"]) %>',
			'allowableClasses' : 'Clases: <%= this._subLoop("templates.fragments.allowableClass", this["allowableClasses"], ", ") %>',
			'allowableRaces'   : 'Razas: <%= this._subLoop("templates.fragments.allowableRace", this["allowableRaces"], ", ") %>',
			'itemStat'         : {
				'3' : 'de agilidad',
				'4' : 'de fuerza',
				'5' : 'de intelecto',
				'6' : 'de espíritu',
				'7' : 'de aguante',
				'13': 'Equipar: Aumenta tu índice de esquivar en <%= this["amount"] %>.',
				'14': 'Equipar: Aumenta tu índice de parada en <%= this["amount"] %>.',
				'31': 'Equipar: Aumenta tu índice de golpe en <%= this["amount"] %>.',
				'32': 'Equipar: Aumenta tu índice de golpe crítico en <%= this["amount"] %>.',
				'35': 'Equipar: Aumenta tu índice de temple en <%= this["amount"] %>.',
				'36': 'Equipar: Aumenta tu índice de celeridad en <%= this["amount"] %>.',
				'37': 'Equipar: Aumenta tu índice de pericia en <%= this["amount"] %>.',
				'38': 'Equipar: Aumenta el poder de ataque en <%= this["amount"] %>.',
				'46': 'Equipar: Aumenta la regeneración de salud en <%= this["amount"] %>.',
				'45': 'Equipar: Aumenta el poder con hechizos en <%= this["amount"] %>.',
				'47': 'Equipar: Aumenta la penetración de hechizos en <%= this["amount"] %>.',
				'49': 'Equipar: Aumenta tu índice de maestría en <%= this["amount"] %>.'
			},
			'itemSpell'        : 'Equipar / Uso / Probabilidad al golpear: <%= this["spell"]["description"] %>',
			'sellPrice'        : 'Precio de venta: <%= this._renderCoins(this["sellPrice"]) %>',
			'stackable'        : 'Se puede apilar (<%= this["stackable"] %>)',
			'disenchantable'   : '<% if(this["disenchantingSkillRank"]) { %>Se puede desencantar (<%= this["disenchantingSkillRank"] %>)<% } else { %>No se puede desencantar<% } %>',
			'auctionable'      : 'Se puede subastar',
			'itemBind'         : { '1': 'Se liga al recogerlo', '2': 'Se liga al equiparlo', '3': 'Se liga al usarlo', '4': 'Se liga a la cuenta de Battle.net' },
			'itemSocket'       : {
				'BLUE'     : 'Ranura azul',
				'RED'      : 'Ranura roja',
				'YELLOW'   : 'Ranura amarilla',
				'META'     : 'Ranura meta',
				'ORANGE'   : 'Ranura naranja',
				'PURPLE'   : 'Ranura púrpura',
				'GREEN'    : 'Ranura verde',
				'PRISMATIC': 'Ranura prismática',
				'HYDRAULIC': 'Ranura hidráulica',
				'COGWHEEL' : 'Ranura de engranaje'
			},
			'reputationLevel': { '0': 'Odiado', '1': 'Hostil', '2': 'Adverso', '3': 'Neutral', '4': 'Amistoso', '5': 'Honorable', '6': 'Venerado', '7': 'Exaltado' },
			'itemClass'      : {
				'0' :{ '0': 'Consumible', '1': 'Poción', '2': 'Elixir', '3': 'Frasco', '4': 'Pergamino', '5': 'Comida y bebida', '6': 'Mejora de Objetos', '7': 'Venda', '8': 'Otros' },
				'1' :{ '0': 'Bolsa', '1': 'Bolsa de almas', '2': 'Bolsa de hierbas', '3': 'Bolsa de encantamiento', '4': 'Bolsa de ingeniería', '5': 'Bolsa de gemas', '6': 'Bolsa de minería', '7': 'Bolsa de peletería', '8': 'Bolsa de inscripción', '9': 'Caja de aparejos' },
				'2' :{ '0': 'Hacha' /* 1H */,'1': 'Hacha' /* 2H */,'2': 'Arco', '3': 'Arma de fuego', '4': 'Maza' /* 1H */,'5': 'Maza' /* 2H */,'6': 'Arma de asta', '7': 'Espada' /* 1H */,'8': 'Espada' /* 2H */,'10': 'Bastón', '13': 'Arma de puño', '14': 'Miscelánea', '15': 'Daga', '16': 'Arma arrojadiza', '18': 'Ballesta', '19': 'Varita', '20': 'Caña de pescar' },
				'3' :{ '0': 'Gema roja', '1': 'Gema azul', '2': 'Gema amarilla', '3': 'Gema púrpura', '4': 'Gema verde', '5': 'Gema naranja', '6': 'Gema meta', '7': 'Gema simple', '8': 'Gema prismática', '9': 'Gema hidráulica', '10': 'Gema de engranaje' },
				'4' :{ '0': 'Miscelánea', '1': 'Tela', '2': 'Cuero', '3': 'Malla', '4': 'Placas', '6': 'Escudo', '7': 'Tratado', '8': 'Ídolo', '9': 'Tótem', '10': 'Sigilo', '11': 'Reliquia' },
				'7' :{ '0': 'Objeto Comerciable', '1': 'Piezas', '2': 'Explosivos', '3': 'Instrumentos', '4': 'Joyería', '5': 'Tela', '6': 'Cuero', '7': 'Metal y piedra', '8': 'Carne', '9': 'Hierba', '10': 'Elemental', '11': 'Otro', '12': 'Encantamiento', '13': 'Materiales', '14': 'Encantamiento de objeto' },
				'9' :{ '0': 'Libro', '1': 'Peletería', '2': 'Sastrería', '3': 'Ingeniería', '4': 'Herrería', '5': 'Cocina', '6': 'Alquimia', '7': 'Primeros auxilios', '8': 'Encantamiento', '9': 'Pesca', '10': 'Joyería', '11': 'Inscripción' },
				'12':{ '0': 'Objeto de misión' },
				'13':{ '0': 'Llave' },
				'15':{ '0': 'Chatarra', '1': 'Componente', '2': 'Mascota', '3': 'Vacaciones', '4': 'Otros', '5': 'Montura' },
				'16':{ '0': 'Glifo', '1': 'Guerrero', '2': 'Paladín', '3': 'Cazador', '4': 'Pícaro', '5': 'Sacerdote', '6': 'Caballero de la Muerte', '7': 'Chamán', '8': 'Mago', '9': 'Brujo', '11': 'Druida' }
			},
			'inventoryType'    : { '1': 'Cabeza', '2': 'Cuello', '3': 'Hombros', '4': 'Camisa', '5': 'Pecho', '6': 'Cintura', '7': 'Piernas', '8': 'Pies', '9': 'Muñequeras', '10': 'Manos', '11': 'Dedo', '12': 'Abalorio', '13': 'Una mano', '15': 'A distancia' /* Bow */, '16': 'Espalda', '17': 'Dos manos', '18': 'Bolsa', '21': 'Mano derecha', '22': 'Mano izquierda', '23': 'Sostener en mano izquierda', '25': 'Arrojadizas' /* Thrown */, '26': 'Arma a distancia' /* Gun,Crossbow,Wand */ }
		}
	}
	
});

DarkTip.registerModule('wow.quest', {
	
	'triggers': {
		'explicit': {
			'match' : /quest:(us|eu|kr|tw|cn)\.([^\(]+)\((en|de|fr|es|ru|ko|zh)\)/i,
			'params': {
				'1': 'region',
				'2': 'questid',
				'3': 'lang'
			}
		},
		'api'     : 'http://<%= this["host"] %>/api/wow/quest/<%= this["questid"] %>?locale=<%= this["locale"] %>',
		'hash'    : '<%= this["host"] %>#<%= this["questid"] %>#<%= this["locale"] %>'
	},
	
	'getParams': {
		'explicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.quest', 'triggers.explicit.params')));
			params['host']   = DarkTip.map('wow.realm', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow.realm', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		}
	},
	
	'layout': {
		'width': {
			'core': 350
		}
	},
	
	'templates': {
		'core':(
			'<div class="tooltip-quest">' +
				'<div class="headline-right"><%= this["level"] %></div>' +
				'<div class="darktip-row headline highlight-medium"><%= this["title"] %></div>' +
				'<div class="darktip-row highlight-strong"><%= this["category"] %></div>' +
				'<div class="darktip-row"><%= this._loc("reqLevel") %></div>' +
				'<% if(this["suggestedPartyMembers"] > 1) { %><div class="darktip-row"><%= this._loc("suggestedPartyMembers") %></div><% } %>' +
			'</div>'				
		),
		'404':(
			'<div class="tooltip-quest tooltip-404">' +
				'<div class="title">404<span class="sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.quest") %></span> <span class="value"><%= this["questid"] %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
		    '</div>'
		)
	},
	
	'i18n': {
		'en_US': {
			'loading'              : 'Loading quest...',
			'not-found'            : 'Quest not found',
			'reqLevel'             : 'Requires Level <%= this["reqLevel"] %>',
			'suggestedPartyMembers': 'Group Quest (<%= this["suggestedPartyMembers"] %>)'
		},
		'de_DE': {
			'loading'              : 'Lade Quest...',
			'not-found'            : 'Quest nicht gefunden',
			'reqLevel'             : 'Benötigt Stufe <%= this["reqLevel"] %>',
			'suggestedPartyMembers': 'Gruppenquest (<%= this["suggestedPartyMembers"] %>)'
		},
		'fr_FR': {
			'loading'              : 'Chargement...',
			'not-found'            : 'Aucun résultat',
			'reqLevel'             : 'Niveau requis <%= this["reqLevel"] %>',
			'suggestedPartyMembers': 'Quête de groupe (<%= this["suggestedPartyMembers"] %>)'
		},
		'es_ES': {
			'loading'              : 'Cargando misión...',
			'not-found'            : 'Misión no encontrada',
			'reqLevel'             : 'Requiere nivel <%= this["reqLevel"] %>',
			'suggestedPartyMembers': 'Misión de Grupo (<%= this["suggestedPartyMembers"] %>)'
		}
	}
	
});

DarkTip.registerModule('wow.realm', {
	
	'triggers': {
		'explicit': {
			'match' : /realm:(us|eu|kr|tw|cn)\.([^\(]+)\((en|de|fr|es|ru|ko|zh)\)/i,
			'params': {
				'1': 'region',
				'2': 'realm',
				'3': 'lang'
			}
		},
		'api'     : 'http://<%= this["host"] %>/api/wow/realm/status?realm=<%= this["realm"] %>&locale=<%= this["locale"] %>',
		'hash'    : '<%= this["host"] %>#<%= this["realm"] %>#<%= this["locale"] %>'
	},
	
	'getParams': {
		'explicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.realm', 'triggers.explicit.params')));
			params['host']   = DarkTip.map('wow.realm', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow.realm', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		}
	},
	
	'validateData': function(data) {
		if(typeof data === 'undefined') {
			return false;
		}
		if(data['realms'].length === 1) {
			return data['realms'][0];
		}
		return false;
	},
	
	'templates': {
		'core':(
			'<div class="tooltip-realm">' +
				'<div class="headline-right crealmtype-<%= this["type"] %>"><%= this._loc("type." + this["type"]) %></div>' +
				'<div class="darktip-row headline"><%= this["name"] %></div>' +
				'<div class="darktip-row highlight-strong"><%= this["battlegroup"] %></div>' +
				'<div class="darktip-row">' +
					'<span class="crealmstatus-<%= this["status"] %>"><%= this._loc("status." + this["status"]) %></span>' +
					'<% if(this["queue"]) { %> (<span class="crealmqueue-<%= this["queue"] %>"><%= this._loc("queue." + this["queue"]) %></span>)<% } %>' +
				'</div>' +
				'<div class="darktip-row"><%= this._loc("population." + this["population"]) %></div>' +
			'</div>'
		),
		'404':(
			'<div class="tooltip-realm tooltip-404">' +
				'<div class="title">404<span class="sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.realm") %></span> <span class="value"><%= this["realm"] %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
		    '</div>'
		)
	},
	
	'i18n': {
		'en_US': {
			'loading': 'Loading realm...',
			'not-found': 'Realm not found',
			'type': {
				'pve'  : 'PvE',
				'pvp'  : 'PvP',
				'rp'   : 'RP',
				'rppvp': 'RPPvP'
			},
			'queue': {
				'false': 'No queue',
				'true' : 'Queue'
			},
			'status': {
				'false': 'Offline',
				'true' : 'Online'
			},
			'population': {
				'low'   : 'Low population',
				'medium': 'Medium population',
				'high'  : 'High population'
			}
		},
		'de_DE': {
			'loading': 'Lade Realm...',
			'not-found': 'Realm nicht gefunden',
			'type': {
				'pve'  : 'PvE',
				'pvp'  : 'PvP',
				'rp'   : 'RP',
				'rppvp': 'RPPvP'
			},
			'queue': {
				'false': 'Keine Warteschlange',
				'true' : 'Warteschlange'
			},
			'status': {
				'false': 'Offline',
				'true' : 'Online'
			},
			'population': {
				'low'   : 'Geringe Bevölkerung',
				'medium': 'Mittlere Bevölkerung',
				'high'  : 'Hohe Bevölkerung'
			}
		},
		'fr_FR': {
			'loading': 'Chargement...',
			'not-found': 'Aucun résultat',
			'type': {
				'pve'  : 'JcE',
				'pvp'  : 'JcJ',
				'rp'   : 'JR',
				'rppvp': 'JR JcJ'
			},
			'queue': {
				'false': 'No queue',
				'true' : 'Queue'
			},
			'status': {
				'false': 'Hors ligne',
				'true' : 'En ligne'
			},
			'population': {
				'low'   : 'Population faible',
				'medium': 'Population moyenne',
				'high'  : 'Population élevée'
			}
		},
		'es_ES': {
			'loading': 'Cargando reino...',
			'not-found': 'Reino no encontrado',
			'type': {
				'pve'  : 'JcE',
				'pvp'  : 'JcJ',
				'rp'   : 'JR',
				'rppvp': 'JR JcJ'
			},
			'queue': {
				'false': 'no hay cola',
				'true' : 'hay cola'
			},
			'status': {
				'false': 'no conectado',
				'true' : 'conectado'
			},
			'population': {
				'low'   : 'baja población',
				'medium': 'población media',
				'high'  : 'alta población'
			}
		}
	}
	
});

DarkTip.registerModule('wow.wowhead', {
	
	'maps': {
		'wowheadhost': {
			'lang': {
				'www.wowhead.com': 'en',
				'de.wowhead.com' : 'de',
				'es.wowhead.com' : 'es',
				'fr.wowhead.com' : 'fr',
				'ru.wowhead.com' : 'ru'
			}
		}
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
	}
	
});

DarkTip.registerModule('wow.wowhead.character', {
	
	'triggers': {
		'implicit': {
			'match' : /http:\/\/(www\.wowhead\.com|de\.wowhead\.com|es\.wowhead\.com|fr\.wowhead\.com|ru\.wowhead\.com)\/profile=(us|eu)\.([^\.]+)\.([^\.#]+).*/i,
			'params': {
				'1': 'wowheadhost',
				'2': 'region',
				'3': 'realm',
				'4': 'character'
			}
		},
		'api'     : 'http://<%= this["host"] %>/api/wow/character/<%= this["realm"] %>/<%= this["character"] %>?fields=guild,talents,items,professions,companions,mounts&locale=<%= this["locale"] %>',
		'hash'    : '<%= this["host"] %>#<%= this["realm"] %>#<%= this["character"] %>#<%= this["locale"] %>'
	},

	'getParams': {
		'implicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.wowhead.character', 'triggers.implicit.params')));
			params['lang']   = DarkTip.map('wow.wowhead', 'maps.wowheadhost.lang', params['wowheadhost']);
			params['host']   = DarkTip.map('wow', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		}
	},

	'layout': {
		'width': {
			'core': 325
		}
	},

	'templates': {
		'tools': {
			'_renderDateTime': function(datetime) {
				var dto = new Date(datetime);
				return dto.toLocaleString();
			}
		},
		'core': (
			'<div class="tooltip-character">' +
		    	'<img class="icon" src="<%= this["_meta"]["path_host"] %>/static-render/<%= this["_meta"]["region"] %>/<%= this["thumbnail"] %>?alt=/wow/static/images/2d/avatar/<%= this["race"] %>-<%= this["gender"] %>.jpg" />' +
		    	 /* --- START simple mode -------------------------------- */
				'<div class="col-98 darktip-only-s">' +
					'<div class="headline-right"><span class="icon-achievenemtpoints"><%= this["achievementPoints"] %></span></div>' +
		    		'<div class="darktip-row headline cclass-<%= this["class"] %>"><%= this["name"] %></div>' +
		    		'<div class="darktip-row"><%= this._loc("classification") %></div>' +
					'<%= this._subLoop("templates.fragments.talentSpec", this["talents"]) %>' +
					'<% if(this["guild"]) { %><div class="darktip-row highlight-medium">&lt;<%= this["guild"]["name"] %>&gt;<% if(this["guild"]["level"]) { %> (<%= this["guild"]["level"] %>)<% } %></div><% } %>' +
					'<div class="darktip-row"><%= this["realm"] %></div>' +
					'<% if(this["items"]) { %><div class="darktip-row highlight-weak"><%= this._loc("itemLevel", this["items"]) %></div><% } %>' +
			    	'<% if(this["_meta"]["extendedActive"]) { %><div class="darktip-row info-meta"><%= this._loc("extendedInactive") %></div><% } %>' +
		    	'</div>' +
				 /* --- END simple mode ---------------------------------- */
				 /* --- START extended mode ------------------------------ */
			    '<% if(this["_meta"]["extendedActive"]) { %>' +
					'<div class="col-98 darktip-only-x">' +
						'<div class="headline-right"><span class="icon-achievenemtpoints"><%= this["achievementPoints"] %></span></div>' +
			    		'<div class="darktip-row headline cclass-<%= this["class"] %>"><%= this["name"] %></div>' +
						'<% if(this["professions"]) { %>' +
							'<div class="block">' +
								'<%= this._subLoop("templates.fragments.profession.primary", this["professions"]["primary"]) %>' +
								'<%= this._subLoop("templates.fragments.profession.secondary", this["professions"]["secondary"]) %>' +
							'</div>' +
						'<% } %>' +
						'<% if(this["mounts"]) { %><div class="darktip-row"><%= this._loc("mounts") %></div><% } %>' +
						'<% if(this["companions"]) { %><div class="darktip-row"><%= this._loc("companions") %></div><% } %>' +
						'<div class="darktip-row highlight-reduced"><%= this._loc("lastModified") %></div>' +
						'<div class="darktip-row info-meta"><%= this._loc("extendedActive") %></div>' +
			    	'</div>' +
		    	'<% } %>' +
				 /* --- END extended mode -------------------------------- */
		    '</div>'
		),
		'404': (
			'<div class="tooltip-character tooltip-404">' +
				'<div class="title">404<span class="sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.character") %></span> <span class="value"><%= this["character"] %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.realm") %></span> <span class="value"><%= this["realm"] %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
		    '</div>'
		),
		'fragments': {
			'talentSpec': (
				'<div class="block darktip-row<% if(this["selected"]) { %> highlight-strong<% } else { %> highlight-reduced<% } %>">' +
					'<img class="icon-10x10" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/<% if(this["icon"]) { %><%= this["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg"/> ' +
					'<% if(this["name"]) { %><%= this["name"] %><% } else { %><%= this._loc("not-used") %><% } %>' +
				'</div>'
			),
			'profession': {
				'primary'  : (
					'<% if(this["rank"] > 0) { %>' +
						'<div class="darktip-row highlight-medium">' +
							'<img class="icon-10x10" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/<% if(this["icon"]) { %><%= this["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg"/> ' +
							'<%= this["name"] %>: <%= this["rank"] %>' +
						'</div>' +
					'<% } %>'
				),
				'secondary': (
					'<% if(this["rank"] > 0) { %>' +
						'<div class="darktip-row highlight-weak">' +
							'<img class="icon-10x10" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/18/<% if(this["icon"]) { %><%= this["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg"/> ' +
							'<%= this["name"] %>: <%= this["rank"] %>' +
						'</div>' +
					'<% } %>'
				)
			}
		}
	},

	'i18n': {
		'en_US': {
			'loading'       : 'Loading character...',
			'not-found'     : 'Character not found',
			'classification': '<%= this["level"] %> <%= this._loc("characterRace." + this["race"] + ".0") %> <%= this._loc("characterClass." + this["class"] + ".0") %>',
			'itemLevel'     : '<%= this["averageItemLevelEquipped"] %> average item level (<%= this["averageItemLevel"] %>)',
			'mounts'        : 'Mounts: <%= this["mounts"].length %>',
			'companions'    : 'Companions: <%= this["companions"].length %>',
			'lastModified'  : 'Last modified: <%= this._renderDateTime(this["lastModified"]) %>'
		},
		'de_DE': {
			'loading'       : 'Lade Charakter...',
			'not-found'     : 'Charakter nicht gefunden',
			'classification': '<%= this["level"] %>, <%= this._loc("characterRace." + this["race"] + "." + this["gender"]) %>, <%= this._loc("characterClass." + this["class"] + "." + this["gender"]) %>',
			'itemLevel'     : '<%= this["averageItemLevelEquipped"] %> Durchschnittliche Gegenstandsstufe (<%= this["averageItemLevel"] %>)',
			'mounts'        : 'Reittiere: <%= this["mounts"].length %>',
			'companions'    : 'Begleiter: <%= this["companions"].length %>',
			'lastModified'  : 'Stand von: <%= this._renderDateTime(this["lastModified"]) %>'
		},
		'fr_FR': {
			'loading'       : 'Chargement personnage...',
			'not-found'     : 'Aucun personnage trouvée',
			'classification': '<%= this._loc("characterRace." + this["race"] + "." + this["gender"]) %> <%= this._loc("characterClass." + this["class"] + "." + this["gender"]) %> de niveau <%= this["level"] %>',
			'itemLevel'     : '<%= this["averageItemLevelEquipped"] %> Niveau moyen des objets (<%= this["averageItemLevel"] %>)',
			'mounts'        : 'Montures: <%= this["mounts"].length %>',
			'companions'    : 'Mascottes: <%= this["companions"].length %>',
			'lastModified'  : 'Dernière mise à jour: <%= this._renderDateTime(this["lastModified"]) %>'
		},
		'es_ES': {
			'loading'       : 'Cargando personaje...',
			'not-found'     : 'Personaje no encontrado',
			'classification': '<%= this._loc("characterRace." + this["race"] + "." + this["gender"]) %> <%= this._loc("characterClass." + this["class"] + "." + this["gender"]) %> de nivel <%= this["level"] %>',
			'itemLevel'     : '<%= this["averageItemLevelEquipped"] %> nivel medio de objeto (<%= this["averageItemLevel"] %>)',
			'mounts'        : 'Monturas: <%= this["mounts"].length %>',
			'companions'    : 'Compañeros: <%= this["companions"].length %>',
			'lastModified'  : 'Última modificación: <%= this._renderDateTime(this["lastModified"]) %>'
		},
		'es_MX': {
			'classification': '<%= this._loc("characterClass." + this["class"] + "." + this["gender"]) %> de <%= this._loc("characterRace." + this["race"] + "." + this["gender"]) %>, nivel <%= this["level"] %>'
		}
	}
	
});

DarkTip.registerModule('wow.wowhead.guild', {
	
	'triggers': {
		'implicit': {
			'match' : /http:\/\/(www\.wowhead\.com|de\.wowhead\.com|es\.wowhead\.com|fr\.wowhead\.com|ru\.wowhead\.com)\/guild=(us|eu)\.([^\.]+)\.([^\.#]+).*/i,
			'params': {
				'1': 'wowheadhost',
				'2': 'region',
				'3': 'realm',
				'4': 'guild'
			}
		},
		'api'     : 'http://<%= this["host"] %>/api/wow/guild/<%= this["realm"] %>/<%= this["guild"] %>?fields=members&locale=<%= this["locale"] %>',
		'hash'    : '<%= this["host"] %>#<%= this["realm"] %>#<%= this["guild"] %>#<%= this["locale"] %>'
	},

	'getParams': {
		'implicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.wowhead.guild', 'triggers.implicit.params')));
			params['lang']   = DarkTip.map('wow.wowhead', 'maps.wowheadhost.lang', params['wowheadhost']);
			params['host']   = DarkTip.map('wow', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		}
	},

	'layout': {
		'width': {
			'core': 275
		}
	},

	'templates': {
		'core': (
			'<div class="tooltip-guild">' +
				'<div class="headline-right"><span class="icon-achievenemtpoints"><%= this["achievementPoints"] %></span></div>' +
    			'<div class="darktip-row headline cside-<%= this["side"] %>"><%= this["name"] %></div>' +
	    		'<div class="darktip-row highlight-medium"><%= this._loc("classification") %></div>' +
				'<% if(this["members"]) { %><div class="darktip-row"><%= this._loc("members") %></div><% } %>' +
			'</div>'
		),
		'404': (
			'<div class="tooltip-guild tooltip-404">' +
				'<div class="title">404<span class="sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.guild") %></span> <span class="value"><%= this["guild"] %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.realm") %></span> <span class="value"><%= this["realm"] %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
		    '</div>'
		)
	},

	'i18n': {
		'en_US': {
			'loading'       : 'Loading Guild...',
			'not-found'     : 'Guild not found',
			'classification': 'Level <%= this["level"] %> <%= this._loc("factionSide." + this["side"]) %> Guild, <%= this["realm"] %>',
			'members'       : '<%= this["members"].length %> members'
		},
		'de_DE': {
			'loading'       : 'Lade Gilde...',
			'not-found'     : 'Gilde nicht gefunden',
			'classification': 'Stufe <%= this["level"] %> <%= this._loc("factionSide." + this["side"]) %>-Gilde, <%= this["realm"] %>',
			'members'       : '<%= this["members"].length %> Mitglieder'
		},
		'fr_FR': {
			'loading'       : 'Chargement Guilde...',
			'not-found'     : 'Aucune Guilde trouvée',
			'classification': 'Niveau <%= this["level"] %> Faction <%= this._loc("factionSide." + this["side"]) %> , <%= this["realm"] %>',
			'members'       : '<%= this["members"].length %> membres'
		},
		'es_ES': {
			'loading'       : 'Cargando hermandad...',
			'not-found'     : 'Hermandad no encontrada',
			'classification': 'Hermandad (<%= this._loc("factionSide." + this["side"]) %>), nivel <%= this["level"] %>, <%= this["realm"] %>',
			'members'       : '<%= this["members"].length %> miembros'
		}
	}
	
});

DarkTip.registerModule('wow.wowhead.item', {
	
	'triggers': {
		'implicit': {
			'match' : /http:\/\/(www\.wowhead\.com|de\.wowhead\.com|es\.wowhead\.com|fr\.wowhead\.com|ru\.wowhead\.com)\/item=([^\.#]+).*/i,
			'params': {
				'1': 'wowheadhost',
				'2': 'itemid'
			}
		},
		'api'     : 'http://<%= this["host"] %>/api/wow/item/<%= this["itemid"] %>?locale=<%= this["locale"] %>',
		'hash'    : '<%= this["host"] %>#<%= this["itemid"] %>#<%= this["locale"] %>'
	},
	
	'patterns': {
		'money': /^([0-9]+)([0-9]{2})([0-9]{2})$|([0-9]{1,2})([0-9]{2})$|([0-9]{1,2})$/i
	},
	
	'maps': {
		'stats': {
			'primary': {
				'3': 'Agility',
				'4': 'Strength',
				'5': 'Intellect',
				'6': 'Spirit',
				'7': 'Stamina'
			},
			'secondary': {
				'13': 'Dodge rating',
				'14': 'Parry rating',
				'31': 'Hit rating',
				'32': 'Critical strike rating',
				'35': 'Resilience rating',
				'36': 'Haste rating',
				'37': 'Expertise rating',
				'38': 'Attack power',
				'46': 'Health regeneration',
				'45': 'Spell power',
				'47': 'Spell penetration',
				'49': 'Mastery rating'
			}
		}
	},
	
	'getParams': {
		'implicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.wowhead.item', 'triggers.implicit.params')));
			params['region'] = 'eu';
			params['lang']   = DarkTip.map('wow.wowhead', 'maps.wowheadhost.lang', params['wowheadhost']);
			params['host']   = DarkTip.map('wow', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		}
	},
	
	'layout': {
		'width': {
			'core': 425
		}
	},
	
	'templates': {
		'tools': {
			'_isStatPrimary': function(statid) {
				var result = DarkTip.map(this['_meta']['module'], 'maps.stats.primary', statid);
				if(result !== undefined)
				{
					return true;
				}
				return false;
			},
			'_isStatSecondary': function(statid) {
				var result = DarkTip.map(this['_meta']['module'], 'maps.stats.secondary', statid);
				if(result !== undefined)
				{
					return true;
				}
				return false;
			},
			'_renderCoins': function(total) {
				var temp   = total.toString();
				var result = temp.match(DarkTip.read(this['_meta']['module'], 'patterns.money'));
				var split  = {
					'gold'  : -1,
					'silver': -1,
					'copper': 0
				};
				if(result)
				{
					if(result[3] !== undefined)
					{
						split = {
							'gold'  : parseInt(result[1]),
							'silver': parseInt(result[2]),
							'copper': parseInt(result[3])
						};
					}
					else if(result[5] !== undefined)
					{
						split = {
							'gold'  : -1,
							'silver': parseInt(result[4]),
							'copper': parseInt(result[5])
						};
					}
					else
					{
						split = {
							'gold'  : -1,
							'silver': -1,
							'copper': parseInt(result[6])
						};
					}
				}
				return DarkTip.jq.jqote(
					DarkTip.read(this['_meta']['module'], 'templates.fragments.coins'),
					DarkTip.jq.extend(true, {}, DarkTip.getTemplateTools(this['_meta']['module'], this['_meta']['locale']), split)
				);
			}
		},
		'core': (
			'<div class="tooltip-item">' +
	    		'<img class="icon" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/56/<% if(this["icon"]) { %><%= this["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg" />' +
		    	 // --- START simple mode -----------------------------------
				'<div class="col-70 darktip-only-s">' +
					'<div class="headline-right"><%= this["itemLevel"] %></div>' +
					'<div class="darktip-row headline cquality-<%= this["quality"] %>"><%= this["name"] %></div>' +
					'<% if(this["heroic"]) { %><div class="darktip-row"><%= this._loc("heroic") %></div><% } %>' +
					'<% if(this["boundZone"]) { %><div class="darktip-row"><%= this["boundZone"]["name"] %></div><% } %>' +
					'<% if(this["itemBind"]) { %>' +
						'<div class="darktip-row">' +
							'<% if(this["quality"] == 7) { %>' +
								'<%= this._loc("itemBind.4") %>' +
							'<% } else { %>' +
								'<%= this._loc("itemBind." + this["itemBind"]) %>' +
							'<% } %>' +
						'</div>' +
					'<% } %>' +
					'<% if(this["maxCount"]) { %><div class="darktip-row"><%= this._loc("maxCount") %></div><% } %>' +
					'<div class="darktip-row classification">' +
						'<% if(this["containerSlots"]) { %>' +
							'<%= this._loc("containerSlots") %>' +
						'<% } else { %>' +
							'<% if(this["equippable"]) { %>' +
								'<%= this._loc("inventoryType." + this["inventoryType"]) %>' +
								'<div class="pos-right"><%= this._loc("itemClass." + this["itemClass"] + "." + this["itemSubClass"]) %></div>' +
							'<% } else { %>' +
								'<%= this._loc("itemClass." + this["itemClass"] + "." + this["itemSubClass"]) %>' +
							'<% } %>' +
						'<% } %>' +
					'</div>' +
					'<% if(this["baseArmor"]) { %><div class="darktip-row"><%= this._loc("baseArmor") %></div><% } %>' +
					'<% if(this["weaponInfo"]) { %>' +
						'<div>' +
							'<%= this._subLoop("templates.fragments.weaponDamage", this["weaponInfo"]["damage"]) %>' +
							'<div class="pos-right"><%= this._loc("weaponSpeed", this["weaponInfo"]) %></div>' +
							'<div class="darktip-row"><%= this._loc("dps", this["weaponInfo"]) %></div>' +
						'</div>' +
					'<% } %>' +
					'<%= this._subLoop("templates.fragments.stat.primary", this["bonusStats"]) %>' +
					'<% if(this["gemInfo"]) { %><div class="darktip-row"><%= this["gemInfo"]["bonus"]["name"] %></div><% } %>' +
					'<% if(this["socketInfo"]) { %><div class="block sockets"><%= this._subLoop("templates.fragments.socket", this["socketInfo"]["sockets"]) %></div><% } %>' +
					'<% if(this["allowableClasses"]) { %><div class="darktip-row"><%= this._loc("allowableClasses") %></div><% } %>' +
					'<% if(this["allowableRaces"]) { %><div class="darktip-row"><%= this._loc("allowableRaces") %></div><% } %>' +
					'<% if(this["requiredLevel"]) { %><div class="darktip-row"><%= this._loc("requiredLevel") %></div><% } %>' +
					'<% if(this["requiredSkill"]) { %><div class="darktip-row"><%= this._loc("requiredSkill") %></div><% } %>' +
					'<% if(this["requiredAbility"]) { %><div class="darktip-row"><%= this._loc("requiredAbility") %></div><% } %>' +
					'<% if(this["minFactionId"]) { %><div class="darktip-row"><%= this._loc("minFactionId") %></div><% } %>' +
					'<%= this._subLoop("templates.fragments.stat.secondary", this["bonusStats"]) %>' +
					'<%= this._subLoop("templates.fragments.stat.spell", this["itemSpells"]) %>' +
					'<% if(this["description"]) { %><div class="darktip-row highlight-medium">&quot;<%= this["description"] %>&quot;</div><% } %>' +
			    	'<% if(this["_meta"]["extendedActive"]) { %><div class="darktip-row info-meta"><%= this._loc("extendedInactive") %></div><% } %>' +
				'</div>' +
				// --- END simple mode -------------------------------------
				// --- START extended mode ---------------------------------
			    '<% if(this["_meta"]["extendedActive"]) { %>' +
					'<div class="col-70 darktip-only-x">' +
						'<div class="headline-right"><%= this["itemLevel"] %></div>' +
						'<div class="darktip-row headline cquality-<%= this["quality"] %>"><%= this["name"] %></div>' +
						'<div class="darktip-row highlight-strong"><%= this._loc("itemId") %></div>' +
						'<% if(this["maxDurability"]) { %><div class="darktip-row"><%= this._loc("maxDurability") %></div><% } %>' +
						'<% if(this["isAuctionable"]) { %><div class="darktip-row"><%= this._loc("auctionable") %></div><% } %>' +
						'<div class="darktip-row"><%= this._loc("disenchantable") %></div>' +
						'<% if(this["stackable"] > 1) { %><div class="darktip-row"><%= this._loc("stackable") %></div><% } %>' +
						'<div class="darktip-row"><%= this._loc("sellPrice") %></div>' +
						'<div class="darktip-row info-meta"><%= this._loc("extendedActive") %></div>' +
			    	'</div>' +
		    	'<% } %>' +
				// --- END extended mode -----------------------------------
			'</div>'
		),
		'404': (
			'<div class="tooltip-item tooltip-404">' +
				'<div class="title">404<span class="sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.item") %></span> <span class="value"><%= this["itemid"] %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
		    '</div>'
		),
		'fragments': {
			'allowableClass': '<span class="cclass-<%= this["_value"] %>"><%= this._loc("characterClass." + this["_value"] + ".0")%></span>',
			'allowableRace' : '<span class="crace-<%= this["_value"] %>"><%= this._loc("characterRace." + this["_value"] + ".0")%></span>',
			'weaponDamage'  : '<div class="darktip-row"><%= this._loc("damage") %></div>',
			'coins'         : (
				'<% if(this["gold"] > -1) { %><span class="icon-gold"><%= this["gold"] %></span><% } %>' +
				'<% if(this["silver"] > -1) { %><span class="icon-silver"><%= this["silver"] %></span><% } %>' +
				'<% if(this["copper"]) { %><span class="icon-copper"><%= this["copper"] %></span><% } else { %>' +
				'<span class="icon-copper">0</span><% } %>'
			),
			'stat'          : {
				'primary'  : (
					'<% if(this._isStatPrimary(this["stat"])) { %>' +
						'<div class="darktip-row">' +
							'<% if(this["amount"] >= 0) { %>+<% } %><%= this["amount"] %> <%= this._loc("itemStat." + this["stat"]) %>' +
						'</div>' +
					'<% }'
				),
				'secondary': (
					'<% if(this._isStatSecondary(this["stat"])) { %>' +
						'<div class="darktip-row highlight-custom">' +
							'<%= this._loc("itemStat." + this["stat"]) %>' +
						'</div>' +
					'<% }'
				),
				'spell'    : (
					'<% if(this["spell"]["description"]) { %>' +
						'<div class="darktip-row highlight-custom"><%= this._loc("itemSpell") %></div>' +
					'<% } %>'
				)
			},
			'socket': (
				'<div class="darktip-row socket highlight-reduced">' +
					'<span class="icon-socket socket-<%= this["type"] %>">' +
						'<span class="empty"></span><span class="frame"></span>' +
					'</span>' +
					'<%= this._loc("itemSocket." + this["type"]) %>' +
				'</div>'
			)
		}
	},
	
	'i18n': {
		'en_US': {
			'loading'          : 'Loading item...',
			'not-found'        : 'Item not found',
			'itemId'           : 'Item ID: <%= this["id"] %>',
			'heroic'           : 'Heroic',
			'maxCount'         : 'Unique<% if(this["maxCount"] > 1) { %> (<%= this["maxCount"] %>)<% } %>',
			'containerSlots'   : '<%= this["containerSlots"] %> Slot <%= this._loc("itemClass." + this["itemClass"] + "." + this["itemSubClass"]) %>',
			'damage'           : '<%= this["minDamage"] %> - <%= this["maxDamage"] %> Damage',
			'weaponSpeed'      : 'Speed <%= this["weaponSpeed"] %>',
			'dps'              : '(<%= this["dps"].toFixed(2) %> damage per second)',
			'baseArmor'        : '<%= this["baseArmor"] %> Armor',
			'maxDurability'    : 'Durability <%= this["maxDurability"] %> / <%= this["maxDurability"] %>',
			'requiredLevel'    : 'Requires Level <%= this["requiredLevel"] %>',
			'requiredSkill'    : 'Requires <%= this._loc("characterSkill." + this["requiredSkill"]) %> (<%= this["requiredSkillRank"] %>)',
			'requiredAbility'  : 'Requires <%= this["requiredAbility"]["name"] %>',
			'minFactionId'     : 'Requires Faction ID <%= this["minFactionId"] %> - <%= this._loc("reputationLevel." + this["minReputation"]) %>',
			'allowableClasses' : 'Classes: <%= this._subLoop("templates.fragments.allowableClass", this["allowableClasses"], ", ") %>',
			'allowableRaces'   : 'Races: <%= this._subLoop("templates.fragments.allowableRace", this["allowableRaces"], ", ") %>',
			'itemStat'         : {
				'3' : 'Agility',
				'4' : 'Strength',
				'5' : 'Intellect',
				'6' : 'Spirit',
				'7' : 'Stamina',
				'13': 'Equip: Increases your dodge rating by <%= this["amount"] %>.',
				'14': 'Equip: Increases your parry rating by <%= this["amount"] %>.',
				'31': 'Equip: Increases your hit rating by <%= this["amount"] %>.',
				'32': 'Equip: Increases your critical strike rating by <%= this["amount"] %>.',
				'35': 'Equip: Increases your resilience rating by <%= this["amount"] %>.',
				'36': 'Equip: Increases your haste rating by <%= this["amount"] %>.',
				'37': 'Equip: Increases your expertise rating by <%= this["amount"] %>.',
				'38': 'Equip: Increases your attack power by <%= this["amount"] %>.',
				'46': 'Equip: Increases your health regeneration by <%= this["amount"] %>.',
				'45': 'Equip: Increases spell power by <%= this["amount"] %>.',
				'47': 'Equip: Increases spell penetration by <%= this["amount"] %>.',
				'49': 'Equip: Increases your mastery rating by <%= this["amount"] %>.'
			},
			'itemSpell'        : 'Equip / Use / Chance on Hit: <%= this["spell"]["description"] %>',
			'sellPrice'        : 'Sell Price: <%= this._renderCoins(this["sellPrice"]) %>',
			'stackable'        : 'Stackable (<%= this["stackable"] %>)',
			'disenchantable'   : '<% if(this["disenchantingSkillRank"]) { %>Can be disenchanted (<%= this["disenchantingSkillRank"] %>)<% } else { %>Cannot be disenchanted<% } %>',
			'auctionable'      : 'Can be auctioned',
			'itemBind'         : { '1': 'Binds when picked up', '2': 'Binds when equipped', '3': 'Binds when used', '4': 'Binds to Battle.net account' },
			'itemSocket'       : {
				'BLUE'     : 'Blue Socket',
				'RED'      : 'Red Socket',
				'YELLOW'   : 'Yellow Socket',
				'META'     : 'Meta Socket',
				'ORANGE'   : 'Orange Socket',
				'PURPLE'   : 'Purple Socket',
				'GREEN'    : 'Green Socket',
				'PRISMATIC': 'Prismatic Socket',
				'HYDRAULIC': 'Hydraulic Socket',
				'COGWHEEL' : 'Cogwheel Socket'
			},
			'reputationLevel'  : { '0': 'Hated', '1': 'Hostile', '2': 'Unfriendly', '3': 'Neutral', '4': 'Friendly', '5': 'Honored', '6': 'Revered', '7': 'Exalted' },
			'itemClass'        : {
				'0' : { '0': 'Consumeable', '1': 'Potion', '2': 'Elixir', '3': 'Flask', '4': 'Scroll', '5': 'Food &amp; Drink', '6': 'Item Enhancement', '7': 'Bandage', '8': 'Other' },
				'1' : { '0': 'Bag', '1': 'Soul Bag', '2': 'Herb Bag', '3': 'Enchanting Bag', '4': 'Engineering Bag', '5': 'Gem Bag', '6': 'Mining Bag', '7': 'Leatherworking Bag', '8': 'Inscription Bag', '9': 'Tackle Box' },
				'2' : { '0': 'Axe' /* 1H */, '1': 'Axe' /* 2H */, '2': 'Bow', '3': 'Gun', '4': 'Mace' /* 1H */, '5': 'Mace' /* 2H */, '6': 'Polearm', '7': 'Sword' /* 1H */, '8': 'Sword' /* 2H */, '10': 'Staff', '13': 'Fist Weapon', '14': 'Miscellaneous', '15': 'Dagger', '16': 'Thrown', '18': 'Crossbow', '19': 'Wand', '20': 'Fishing Pole' },
				'3' : { '0': 'Red Gem', '1': 'Blue Gem', '2': 'Yellow Gem', '3': 'Purple Gem', '4': 'Green Gem', '5': 'Orange Gem', '6': 'Meta Gem', '7': 'Simple Gem', '8': 'Prismatic Gem', '9': 'Hydraulic Gem', '10': 'Cogwheel Gem' },
				'4' : { '0': 'Miscellaneous', '1': 'Cloth', '2': 'Leather', '3': 'Mail', '4': 'Plate', '6': 'Shield', '7': 'Libram', '8': 'Idol', '9': 'Totem', '10': 'Sigil', '11': 'Relic' },
				'7' : { '0': 'Trade Goods', '1': 'Parts', '2': 'Explosives', '3': 'Devices', '4': 'Jewelcrafting', '5': 'Cloth', '6': 'Leather', '7': 'Metal &amp; Stone', '8': 'Meat', '9': 'Herb', '10': 'Elemental', '11': 'Other', '12': 'Enchanting', '13': 'Materials', '14': 'Item Enchantment' },
				'9' : { '0': 'Book', '1': 'Leatherworking', '2': 'Tailoring', '3': 'Engineering', '4': 'Blacksmithing', '5': 'Cooking', '6': 'Alchemy', '7': 'First Aid', '8': 'Enchanting', '9': 'Fishing', '10': 'Jewelcrafting', '11': 'Inscription' },
				'12': { '0': 'Quest Item' },
				'13': { '0': 'Key' },
				'15': { '0': 'Junk', '1': 'Reagent', '2': 'Pet', '3': 'Holiday', '4': 'Other', '5': 'Mount' },
				'16': { '0': 'Glyph', '1': 'Warrior', '2': 'Paladin', '3': 'Hunter', '4': 'Rogue', '5': 'Priest', '6': 'Death Knight', '7': 'Shaman', '8': 'Mage', '9': 'Warlock', '11': 'Druid' }
			},
			'inventoryType'   : { '1': 'Head', '2': 'Neck', '3': 'Shoulder', '4': 'Shirt', '5': 'Chest', '6': 'Waist', '7': 'Legs', '8': 'Feet', '9': 'Wrist', '10': 'Hands', '11': 'Finger', '12': 'Trinket', '13': 'One-Hand', '15': 'Ranged' /* Bow */, '16': 'Back', '17': 'Two-Hand', '18': 'Bag', '21': 'Main-hand', '22': 'Off-hand', '23': 'Held in off-hand', '25': 'Ranged' /* Thrown */, '26': 'Ranged' /* Gun, Crossbow, Wand */ }
		},
		'de_DE': {
			'loading'          : 'Lade Gegenstand...',
			'not-found'        : 'Gegenstand nicht gefunden',
			'itemId'           : 'Gegenstands ID: <%= this["id"] %>',
			'heroic'           : 'Heroisch',
			'maxCount'         : 'Einzigartig<% if(this["maxCount"] > 1) { %> (<%= this["maxCount"] %>)<% } %>',
			'containerSlots'   : '<%= this["containerSlots"] %> Platz <%= this._loc("itemClass." + this["itemClass"] + "." + this["itemSubClass"]) %>',
			'damage'           : '<%= this["minDamage"] %> - <%= this["maxDamage"] %> Schaden',
			'weaponSpeed'      : 'Geschwindigkeit <%= this["weaponSpeed"] %>',
			'dps'              : '(<%= this["dps"].toFixed(2) %> Schaden pro Sekunde)',
			'baseArmor'        : '<%= this["baseArmor"] %> Rüstung',
			'maxDurability'    : 'Haltbarkeit <%= this["maxDurability"] %> / <%= this["maxDurability"] %>',
			'requiredLevel'    : 'Erfordert Stufe <%= this["requiredLevel"] %>',
			'requiredSkill'    : 'Erfordert <%= this._loc("characterSkill." + this["requiredSkill"]) %> (<%= this[requiredSkillRank] %>)',
			'requiredAbility'  : 'Erfordert <%= this["requiredAbility"]["name"] %>',
			'minFactionId'     : 'Erfordert Fraktion ID <%= this["minFactionId"] %> - <%= this._loc("reputationLevel." + this["minReputation"]) %>',
			'allowableClasses' : 'Klassen: <%= this._subLoop("templates.fragments.allowableClass", this["allowableClasses"], ", ") %>',
			'allowableRaces'   : 'Rassen: <%= this._subLoop("templates.fragments.allowableRace", this["allowableRaces"], ", ") %>',
			'itemStat'         : {
				'3' : 'Beweglichkeit',
				'4' : 'Stärke',
				'5' : 'Intellekt',
				'6' : 'Willenskraft',
				'7' : 'Ausdauer',
				'13': 'Anlegen: Erhöht eure Ausweichwertung um <%= this["amount"] %>.',
				'14': 'Anlegen: Erhöht eure Parrierwertung um <%= this["amount"] %>.',
				'31': 'Anlegen: Erhöht eure Trefferwertung um <%= this["amount"] %>.',
				'32': 'Anlegen: Erhöht eure kritische Trefferwertung um <%= this["amount"] %>.',
				'35': 'Anlegen: Erhöht eure Abhärtungswertung um <%= this["amount"] %>.',
				'36': 'Anlegen: Erhöht eure Tempowertung um <%= this["amount"] %>.',
				'37': 'Anlegen: Erhöht eure Waffenkundewertung um <%= this["amount"] %>.',
				'38': 'Anlegen: Erhöht eure Angriffswertung um <%= this["amount"] %>.',
				'46': 'Anlegen: Erhöht eure Gesundheitsregenartion um <%= this["amount"] %>.',
				'45': 'Anlegen: Erhöht Zaubermacht um <%= this["amount"] %>.',
				'47': 'Anlegen: Erhöht Zauberdurchschlagskraft um <%= this["amount"] %>.',
				'49': 'Anlegen: Erhöht eure Meisterschaftswertung um <%= this["amount"] %>.'
			},
			'itemSpell'        : 'Anlegen / Benutzen / Chance beim Treffer: <%= this["spell"]["description"] %>',
			'sellPrice'        : 'Verkaufspreis: <%= this._renderCoins(this["sellPrice"]) %>',
			'stackable'        : 'Stapelbar (<%= this["stackable"] %>)',
			'disenchantable'   : '<% if(this["disenchantingSkillRank"]) { %>Kann entzaubert werden (<%= this["disenchantingSkillRank"] %>)<% } else { %>Kann nicht entzaubert werden<% } %>',
			'auctionable'      : 'Kann versteigert werden',
			'itemBind'         : { '1': 'Wird beim Aufheben gebunden', '2': 'Wird beim Anlegen gebunden', '3': 'Wird bei Benutzung gebunden', '4': 'Wird an Battle.net-Account gebunden' },
			'itemSocket'       : {
				'BLUE'     : 'Blauer Sockel',
				'RED'      : 'Roter Sockel',
				'YELLOW'   : 'Gelber Sockel',
				'META'     : 'Meta Sockel',
				'ORANGE'   : 'Orangener Sockel',
				'PURPLE'   : 'Lila Sockel',
				'GREEN'    : 'Grüner Sockel',
				'PRISMATIC': 'Prismatischer Sockel',
				'HYDRAULIC': 'Hydraulischer Sockel',
				'COGWHEEL' : 'Zahnrad Sockel'
			},
			'reputationLevel'  : { '0': 'Haßerfüllt', '1': 'Feindselig', '2': 'Unfreundlich', '3': 'Neutral', '4': 'Freundlich', '5': 'Wohlwollend', '6': 'Respektvoll', '7': 'Ehrfürchtig' },
			'itemClass'        : {
				'0' : { '0': 'Verbrauchbar', '1': 'Trank', '2': 'Elixier', '3': 'Fläschchen', '4': 'Schriftrolle', '5': 'Essen &amp; Drinken', '6': 'Gegenstandsverzauberung', '7': 'Verband', '8': 'Anderes' },
				'1' : { '0': 'Tasche', '1': 'Seelentasche', '2': 'Kräutertasche', '3': 'Verzauberertasche', '4': 'Ingenierstasche', '5': 'Edelsteintasche', '6': 'Bergbautasche', '7': 'Ledertasche', '8': 'Schreibertasche', '9': 'Spinnerkasten' },
				'2' : { '0': 'Axt' /* 1H */, '1' : 'Axt' /* 2H */, '2': 'Bogen', '3': 'Gewehr', '4': 'Streitkolben' /* 1H */, '5': 'Streitkolben' /* 2H */, '6': 'Stangenwaffe', '7': 'Schwert' /* 1H */, '8': 'Schwert' /* 2H */, '10': 'Stab', '13': 'Faustwaffe', '14': 'Verschiedenes', '15': 'Dolch', '16': 'Wurfwaffe', '18': 'Armbrust', '19': 'Zauberstab', '20': 'Angelrute' },
				'3' : { '0': 'Roter Edelstein', '1': 'Blauer Edelstein', '2': 'Gelber Edelstein', '3': 'Violetter Edelstein', '4': 'Grüner Edelstein', '5': 'Orangener Edelstein', '6': 'Meta Edelstein', '7': 'Einfacher Edelstein', '8': 'Prismatischer Edelstein', '9': 'Hydraulischer Edelstein', '10': 'Zahnrad Edelstein' },
				'4' : { '0': 'Verschiedenes', '1': 'Stoff', '2': 'Leder', '3': 'Schwere Rüstung', '4': 'Platte', '6': 'Schild', '7': 'Libram', '8': 'Idol', '9': 'Totem', '10': 'Siegel', '11': 'Relikt' },
				'7' : { '0': 'Handelswaren', '1': 'Teile', '2': 'Sprengstoff', '3': 'Geräte', '4': 'Juwelenschleifen', '5': 'Stoff', '6': 'Leder', '7': 'Metall &amp; Stein', '8': 'Fleisch', '9': 'Kräuter', '10': 'Elementar', '11': 'Anderes', '12': 'Verzauberkunst', '13': 'Materialien', '14': 'Gegenstandsverzauberungen' },
				'9' : { '0': 'Buch', '1': 'Lederverarbeitung', '2': 'Schneiderei', '3': 'Ingenieurskunst', '4': 'Schmiedekunst', '5': 'Kochen', '6': 'Alchemie', '7': 'Erste Hilfe', '8': 'Verzauberkunst', '9': 'Angeln', '10': 'Juwelenschleifen', '11': 'Inschriftenkunde' },
				'12': { '0': 'Questgegenstand' },
				'13': { '0': 'Schlüssel' },
				'15': { '0': 'Plunder', '1': 'Reagenz', '2': 'Haustier', '3': 'Feiertag', '4': 'Anderes', '5': 'Reittier' },
				'16': { '0': 'Glyphe', '1': 'Krieger', '2': 'Paladin', '3': 'Jäger', '4': 'Schurke', '5': 'Priester', '6': 'Todesritter', '7': 'Schamane', '8': 'Magier', '9': 'Hexenmeister', '11': 'Druide' }
			},
			'inventoryType'    : { '1': 'Kopf', '2': 'Nacken', '3': 'Schulter', '4': 'Hemd', '5': 'Brust', '6': 'Taille', '7': 'Beine', '8': 'Füße', '9': 'Handgelenke', '10': 'Hände', '11': 'Finger', '12': 'Schmuckstück', '13': 'Einhändig', '15': 'Distanz' /* Bogen */, '16': 'Rücken', '17': 'Zweihändig', '18': 'Tasche', '21': 'Waffenhand', '22': 'Schildhand', '23': 'In Schildhand geführt', '25': 'Distanz' /* Wurfwaffe */, '26': 'Distanz' /* Gewehr, Armbrust, Zauberstab */ }
		},
		'fr_FR': {
			'loading'          : 'Chargement Objets...',
			'not-found'        : 'Objets introuvable',
			'itemId'           : 'ID Objets: <%= this["id"] %>',
			'heroic'           : 'Héroïc',
			'maxCount'         : 'Unique<% if(this["maxCount"] > 1) { %> (<%= this["maxCount"] %>)<% } %>',
			'containerSlots'   : '<%= this["containerSlots"] %> Slot <%= this._loc("itemClass." + this["itemClass"] + "." + this["itemSubClass"]) %>',
			'damage'           : '<%= this["minDamage"] %> - <%= this["maxDamage"] %> Dégâts',
			'weaponSpeed'      : 'Vitesse <%= this["weaponSpeed"] %>',
			'dps'              : '(<%= this["dps"].toFixed(2) %> domage par second)',
			'baseArmor'        : '<%= this["baseArmor"] %> Armure',
			'maxDurability'    : 'Durabilité <%= this["maxDurability"] %> / <%= this["maxDurability"] %>',
			'requiredLevel'    : 'Niveau <%= this["requiredLevel"] %> requis',
			'requiredSkill'    : 'Requiert <%= this._loc("characterSkill." + this["requiredSkill"]) %> (<%= this["requiredSkillRank"] %>)',
			'requiredAbility'  : 'Requiert <%= this["requiredAbility"]["name"] %>',
			'minFactionId'     : 'Requiert Faction ID <%= this["minFactionId"] %> - <%= this._loc("reputationLevel." + this["minReputation"]) %>',
			'allowableClasses' : 'Classes: <%= this._subLoop("templates.fragments.allowableClass", this["allowableClasses"], ", ") %>',
			'allowableRaces'   : 'Races: <%= this._subLoop("templates.fragments.allowableRace", this["allowableRaces"], ", ") %>',
			'itemStat'         : {
				'3' : 'Agilité',
				'4' : 'Force',
				'5' : 'Intelligence',
				'6' : 'Esprit',
				'7' : 'Endurance',
				'13': 'Equipé: augmente le score d\'esquive de <%= this["amount"] %>.',
				'14': 'Equipé: augmente le score de parade de <%= this["amount"] %>.',
				'31': 'Equipé: augmente votre score de toucher de <%= this["amount"] %>.',
				'32': 'Equipé: augmente votre score de coup critique de <%= this["amount"] %>.',
				'35': 'Equipé: augmente votre score de resilience de <%= this["amount"] %>.',
				'36': 'Equipé: augmente votre score de hâte de <%= this["amount"] %>.',
				'37': 'Equipé: augmente votre score d\'expertise de <%= this["amount"] %>.',
				'38': 'Equipé: augmente de <%= this["amount"] %> la puissance d\'attaque.',
				'46': 'Equipé: augmente votre régénération de vie de <%= this["amount"] %>.',
				'45': 'Equipé: augmente votre puissance des sorts de <%= this["amount"] %>.',
				'47': 'Equipé: augmente la pénétration des sorts de <%= this["amount"] %>.',
				'49': 'Equipé: augmente votre score maîtrise de <%= this["amount"] %>.'
			},
			'itemSpell'        : 'Equipé / Utilisé / Chance lorsque vous touchez: <%= this["spell"]["description"] %>',
			'sellPrice'        : 'Prix de vente: <%= this._renderCoins(this["sellPrice"]) %>',
			'stackable'        : 'Empilable (<%= this["stackable"] %>)',
			'disenchantable'   : '<% if(this["disenchantingSkillRank"]) { %>Peut être désenchanté (<%= this["disenchantingSkillRank"] %>)<% } else { %>Ne peut pas être désenchanté<% } %>',
			'auctionable'      : 'Peut être vendu',
			'itemBind'         : { '1': 'Lié quand ramassé', '2': 'Lié quand équipé', '3': 'Lié quand utilisé', '4': 'Lié au compte Battle.net' },
			'itemSocket'       : {
				'BLUE'     : 'Châsse bleue',
				'RED'      : 'Châsse rouge',
				'YELLOW'   : 'Châsse jaune',
				'META'     : 'Méta-châsse',
				'ORANGE'   : 'Châsse orange',
				'PURPLE'   : 'Châsse Violette',
				'GREEN'    : 'Châsse verte',
				'PRISMATIC': 'Châsse prismatique',
				'HYDRAULIC': 'Châsse Hydraulique',
				'COGWHEEL' : 'Chambre de roue dentée'
			},
			'reputationLevel'  : { '0': 'Haï', '1': 'Hostile', '2': 'Inamical', '3': 'Neutre', '4': 'Amical', '5': 'Honoré', '6': 'Révéré', '7': 'Exalté' },
			'itemClass'        : {
				'0' : { '0': 'Consommable', '1': 'Potion', '2': 'Elixir', '3': 'Flacon', '4': 'Parchemin', '5': 'Nourriture &amp; boissons', '6': 'Amélioration d\'objet', '7': 'Bandage', '8': 'Autre' },
				'1' : { '0': 'Sac', '1': 'Sac d\'âme', '2': 'Sac d\'herbes', '3': 'Sac d\'enchanteur', '4': 'Sac d\'ingénieur', '5': 'Sac de gemmes', '6': 'Sac de mineur', '7': 'Sac de travail du cuir', '8': 'Sac de calligraphie', '9': 'Boîte d\'appâts' },
				'2' : { '0': 'Axe' /* 1H */, '1': 'Axe' /* 2H */, '2': 'Bow', '3': 'Gun', '4': 'Mace' /* 1H */, '5': 'Mace' /* 2H */, '6': 'Polearm', '7': 'Sword' /* 1H */, '8': 'Sword' /* 2H */, '10': 'Staff', '13': 'Fist Weapon', '14': 'Miscellaneous', '15': 'Dagger', '16': 'Thrown', '18': 'Crossbow', '19': 'Wand', '20': 'Fishing Pole' },
				'3' : { '0': 'Gemme rouge', '1': 'Gemme bleue', '2': 'Gemme jaune', '3': 'Gemme Violette', '4': 'Gemme verte', '5': 'Gemme orange', '6': 'Gemme Méta', '7': 'Gemme simple', '8': 'Gemme Prismatique', '9': 'Gemme Hydraulique', '10': 'Gemme Roue dentée' },
				'4' : { '0': 'Divers', '1': 'Cloth', '2': 'Leather', '3': 'Mail', '4': 'Plate', '6': 'Shield', '7': 'Libram', '8': 'Idol', '9': 'Totem', '10': 'Sigil', '11': 'Relic' },
				'7' : { '0': 'Artisanat', '1': 'Eléments', '2': 'Explosifs', '3': 'Appareils', '4': 'Joaillerie', '5': 'Tissu', '6': 'Cuir', '7': 'Métal &amp; pierre', '8': 'Viande', '9': 'Herbes', '10': 'Elémentaire', '11': 'Autre', '12': 'Enchantement', '13': 'Matériaux', '14': 'Enchantement d\'objet' },
				'9' : { '0': 'Livre', '1': 'Travail du cuir', '2': 'Couture', '3': 'Ingénierie', '4': 'Forge', '5': 'Cuisine', '6': 'Alchimie', '7': 'Secourisme', '8': 'Enchantement', '9': 'Pêche', '10': 'Joaillerie', '11': 'Calligraphie' },
				'12': { '0': 'Quête' },
				'13': { '0': 'Key' },
				'15': { '0': 'Camelote', '1': 'Réactif', '2': 'Familier', '3': 'Fête', '4': 'Autre', '5': 'Monture' },
				'16': { '0': 'Glyphe', '1': 'Guerrier', '2': 'Paladin', '3': 'Chasseur', '4': 'Voleur', '5': 'Prêtre', '6': 'Chevalier de la mort', '7': 'Chaman', '8': 'Mage', '9': 'Démoniste', '11': 'Druide' }
			},
			'inventoryType'   : { '1': 'Tête', '2': 'Cou', '3': 'Epaule', '4': 'Chemise', '5': 'Torse', '6': 'Taille', '7': 'Jambes', '8': 'Pieds', '9': 'Poignets', '10': 'Mains', '11': 'Doigt', '12': 'Bijou', '13': 'A une mains', '15': 'Ranged' /* Bow */, '16': 'Back', '17': 'A deux mains', '18': 'Sac', '21': 'Main-hand', '22': 'Off-hand', '23': 'Held in off-hand', '25': 'Ranged' /* Thrown */, '26': 'Ranged' /* Gun, Crossbow, Wand */ }
		},
		'es_ES': {
			'loading'          : 'Cargando objeto...',
			'not-found'        : 'Objeto no encontrado',
			'itemId'           : 'ID de Objeto: <%= this["id"] %>',
			'heroic'           : 'Heroico',
			'maxCount'         : 'Único<% if(this["maxCount"] > 1) { %> (<%= this["maxCount"] %>)<% } %>',
			'containerSlots'   : '<%= this._loc("itemClass." + this["itemClass"] + "." + this["itemSubClass"]) %> con <%= this["containerSlots"] %> Casillas',
			'damage'           : '<%= this["minDamage"] %> - <%= this["maxDamage"] %> Daño',
			'weaponSpeed'      : 'Velocidad <%= this["weaponSpeed"] %>',
			'dps'              : '(<%= this["dps"].toFixed(2) %> daño por segundo)',
			'baseArmor'        : '<%= this["baseArmor"] %> de armadura',
			'maxDurability'    : 'Durabilidad <%= this["maxDurability"] %> / <%= this["maxDurability"] %>',
			'requiredLevel'    : 'Requiere nivel <%= this["requiredLevel"] %>',
			'requiredSkill'    : 'Requiere <%= this._loc("characterSkill." + this["requiredSkill"]) %> (<%= this["requiredSkillRank"] %>)',
			'requiredAbility'  : 'Requiere <%= this["requiredAbility"]["name"] %>',
			'minFactionId'     : 'Requiere facción con ID <%= this["minFactionId"] %> - <%= this._loc("reputationLevel." + this["minReputation"]) %>',
			'allowableClasses' : 'Clases: <%= this._subLoop("templates.fragments.allowableClass", this["allowableClasses"], ", ") %>',
			'allowableRaces'   : 'Razas: <%= this._subLoop("templates.fragments.allowableRace", this["allowableRaces"], ", ") %>',
			'itemStat'         : {
				'3' : 'de agilidad',
				'4' : 'de fuerza',
				'5' : 'de intelecto',
				'6' : 'de espíritu',
				'7' : 'de aguante',
				'13': 'Equipar: Aumenta tu índice de esquivar en <%= this["amount"] %>.',
				'14': 'Equipar: Aumenta tu índice de parada en <%= this["amount"] %>.',
				'31': 'Equipar: Aumenta tu índice de golpe en <%= this["amount"] %>.',
				'32': 'Equipar: Aumenta tu índice de golpe crítico en <%= this["amount"] %>.',
				'35': 'Equipar: Aumenta tu índice de temple en <%= this["amount"] %>.',
				'36': 'Equipar: Aumenta tu índice de celeridad en <%= this["amount"] %>.',
				'37': 'Equipar: Aumenta tu índice de pericia en <%= this["amount"] %>.',
				'38': 'Equipar: Aumenta el poder de ataque en <%= this["amount"] %>.',
				'46': 'Equipar: Aumenta la regeneración de salud en <%= this["amount"] %>.',
				'45': 'Equipar: Aumenta el poder con hechizos en <%= this["amount"] %>.',
				'47': 'Equipar: Aumenta la penetración de hechizos en <%= this["amount"] %>.',
				'49': 'Equipar: Aumenta tu índice de maestría en <%= this["amount"] %>.'
			},
			'itemSpell'        : 'Equipar / Uso / Probabilidad al golpear: <%= this["spell"]["description"] %>',
			'sellPrice'        : 'Precio de venta: <%= this._renderCoins(this["sellPrice"]) %>',
			'stackable'        : 'Se puede apilar (<%= this["stackable"] %>)',
			'disenchantable'   : '<% if(this["disenchantingSkillRank"]) { %>Se puede desencantar (<%= this["disenchantingSkillRank"] %>)<% } else { %>No se puede desencantar<% } %>',
			'auctionable'      : 'Se puede subastar',
			'itemBind'         : { '1': 'Se liga al recogerlo', '2': 'Se liga al equiparlo', '3': 'Se liga al usarlo', '4': 'Se liga a la cuenta de Battle.net' },
			'itemSocket'       : {
				'BLUE'     : 'Ranura azul',
				'RED'      : 'Ranura roja',
				'YELLOW'   : 'Ranura amarilla',
				'META'     : 'Ranura meta',
				'ORANGE'   : 'Ranura naranja',
				'PURPLE'   : 'Ranura púrpura',
				'GREEN'    : 'Ranura verde',
				'PRISMATIC': 'Ranura prismática',
				'HYDRAULIC': 'Ranura hidráulica',
				'COGWHEEL' : 'Ranura de engranaje'
			},
			'reputationLevel': { '0': 'Odiado', '1': 'Hostil', '2': 'Adverso', '3': 'Neutral', '4': 'Amistoso', '5': 'Honorable', '6': 'Venerado', '7': 'Exaltado' },
			'itemClass'      : {
				'0' :{ '0': 'Consumible', '1': 'Poción', '2': 'Elixir', '3': 'Frasco', '4': 'Pergamino', '5': 'Comida y bebida', '6': 'Mejora de Objetos', '7': 'Venda', '8': 'Otros' },
				'1' :{ '0': 'Bolsa', '1': 'Bolsa de almas', '2': 'Bolsa de hierbas', '3': 'Bolsa de encantamiento', '4': 'Bolsa de ingeniería', '5': 'Bolsa de gemas', '6': 'Bolsa de minería', '7': 'Bolsa de peletería', '8': 'Bolsa de inscripción', '9': 'Caja de aparejos' },
				'2' :{ '0': 'Hacha' /* 1H */,'1': 'Hacha' /* 2H */,'2': 'Arco', '3': 'Arma de fuego', '4': 'Maza' /* 1H */,'5': 'Maza' /* 2H */,'6': 'Arma de asta', '7': 'Espada' /* 1H */,'8': 'Espada' /* 2H */,'10': 'Bastón', '13': 'Arma de puño', '14': 'Miscelánea', '15': 'Daga', '16': 'Arma arrojadiza', '18': 'Ballesta', '19': 'Varita', '20': 'Caña de pescar' },
				'3' :{ '0': 'Gema roja', '1': 'Gema azul', '2': 'Gema amarilla', '3': 'Gema púrpura', '4': 'Gema verde', '5': 'Gema naranja', '6': 'Gema meta', '7': 'Gema simple', '8': 'Gema prismática', '9': 'Gema hidráulica', '10': 'Gema de engranaje' },
				'4' :{ '0': 'Miscelánea', '1': 'Tela', '2': 'Cuero', '3': 'Malla', '4': 'Placas', '6': 'Escudo', '7': 'Tratado', '8': 'Ídolo', '9': 'Tótem', '10': 'Sigilo', '11': 'Reliquia' },
				'7' :{ '0': 'Objeto Comerciable', '1': 'Piezas', '2': 'Explosivos', '3': 'Instrumentos', '4': 'Joyería', '5': 'Tela', '6': 'Cuero', '7': 'Metal y piedra', '8': 'Carne', '9': 'Hierba', '10': 'Elemental', '11': 'Otro', '12': 'Encantamiento', '13': 'Materiales', '14': 'Encantamiento de objeto' },
				'9' :{ '0': 'Libro', '1': 'Peletería', '2': 'Sastrería', '3': 'Ingeniería', '4': 'Herrería', '5': 'Cocina', '6': 'Alquimia', '7': 'Primeros auxilios', '8': 'Encantamiento', '9': 'Pesca', '10': 'Joyería', '11': 'Inscripción' },
				'12':{ '0': 'Objeto de misión' },
				'13':{ '0': 'Llave' },
				'15':{ '0': 'Chatarra', '1': 'Componente', '2': 'Mascota', '3': 'Vacaciones', '4': 'Otros', '5': 'Montura' },
				'16':{ '0': 'Glifo', '1': 'Guerrero', '2': 'Paladín', '3': 'Cazador', '4': 'Pícaro', '5': 'Sacerdote', '6': 'Caballero de la Muerte', '7': 'Chamán', '8': 'Mago', '9': 'Brujo', '11': 'Druida' }
			},
			'inventoryType'    : { '1': 'Cabeza', '2': 'Cuello', '3': 'Hombros', '4': 'Camisa', '5': 'Pecho', '6': 'Cintura', '7': 'Piernas', '8': 'Pies', '9': 'Muñequeras', '10': 'Manos', '11': 'Dedo', '12': 'Abalorio', '13': 'Una mano', '15': 'A distancia' /* Bow */, '16': 'Espalda', '17': 'Dos manos', '18': 'Bolsa', '21': 'Mano derecha', '22': 'Mano izquierda', '23': 'Sostener en mano izquierda', '25': 'Arrojadizas' /* Thrown */, '26': 'Arma a distancia' /* Gun,Crossbow,Wand */ }
		}
	}
	
});

DarkTip.registerModule('wow.wowhead.quest', {
	
	'triggers': {
		'implicit': {
			'match' : /http:\/\/(www\.wowhead\.com|de\.wowhead\.com|es\.wowhead\.com|fr\.wowhead\.com|ru\.wowhead\.com)\/quest=([^\.#]+).*/i,
			'params': {
				'1': 'wowheadhost',
				'2': 'questid'
			}
		},
		'api'     : 'http://<%= this["host"] %>/api/wow/quest/<%= this["questid"] %>?locale=<%= this["locale"] %>',
		'hash'    : '<%= this["host"] %>#<%= this["questid"] %>#<%= this["locale"] %>'
	},
	
	'getParams': {
		'implicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.wowhead.quest', 'triggers.implicit.params')));
			params['region'] = 'eu';
			params['lang']   = DarkTip.map('wow.wowhead', 'maps.wowheadhost.lang', params['wowheadhost']);
			params['host']   = DarkTip.map('wow', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		}
	},
	
	'layout': {
		'width': {
			'core': 350
		}
	},
	
	'templates': {
		'core':(
			'<div class="tooltip-quest">' +
				'<div class="headline-right"><%= this["level"] %></div>' +
				'<div class="darktip-row headline highlight-medium"><%= this["title"] %></div>' +
				'<div class="darktip-row highlight-strong"><%= this["category"] %></div>' +
				'<div class="darktip-row"><%= this._loc("reqLevel") %></div>' +
				'<% if(this["suggestedPartyMembers"] > 1) { %><div class="darktip-row"><%= this._loc("suggestedPartyMembers") %></div><% } %>' +
			'</div>'				
		),
		'404':(
			'<div class="tooltip-quest tooltip-404">' +
				'<div class="title">404<span class="sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.quest") %></span> <span class="value"><%= this["questid"] %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
		    '</div>'
		)
	},
	
	'i18n': {
		'en_US': {
			'loading'              : 'Loading quest...',
			'not-found'            : 'Quest not found',
			'reqLevel'             : 'Requires Level <%= this["reqLevel"] %>',
			'suggestedPartyMembers': 'Group Quest (<%= this["suggestedPartyMembers"] %>)'
		},
		'de_DE': {
			'loading'              : 'Lade Quest...',
			'not-found'            : 'Quest nicht gefunden',
			'reqLevel'             : 'Benötigt Stufe <%= this["reqLevel"] %>',
			'suggestedPartyMembers': 'Gruppenquest (<%= this["suggestedPartyMembers"] %>)'
		},
		'fr_FR': {
			'loading'              : 'Chargement...',
			'not-found'            : 'Aucun résultat',
			'reqLevel'             : 'Niveau requis <%= this["reqLevel"] %>',
			'suggestedPartyMembers': 'Quête de groupe (<%= this["suggestedPartyMembers"] %>)'
		},
		'es_ES': {
			'loading'              : 'Cargando misión...',
			'not-found'            : 'Misión no encontrada',
			'reqLevel'             : 'Requiere nivel <%= this["reqLevel"] %>',
			'suggestedPartyMembers': 'Misión de Grupo (<%= this["suggestedPartyMembers"] %>)'
		}
	}
	
});