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

DarkTip.registerModule('d3', {

	'triggers': {
		'apiParams': {
			'callback': 'callback'
		}
	},

	'path': {
		'icon_small' : '/d3/icons/skills/21/<%= this["icon_slug"] %>.png',
		'icon_medium': '/d3/icons/skills/42/<%= this["icon_slug"] %>.png'
	},

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
				'eu+en': 'en_GB',
				'eu+it': 'it_IT',
				'eu+es': 'es_ES',
				'eu+pt': 'pt_PT',
				'eu+fr': 'fr_FR',
				'eu+ru': 'ru_RU',
				'eu+pl': 'pl_PL',
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
			'class': 'darktip-tooltip-d3'
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
			'loading'  : 'Loading d3 data...',
			'not-found': 'Data not found',
			'not-used' : 'Not used',
			'label'    : {
				'slot'       : 'Slot:',
				'region'     : 'Region:',
				'item'       : 'Item:',
				'battletag'  : 'Battle Tag:',
				'character'  : 'Character:',
				'achievement': 'Achievement:'
			},
			'characterGender': {
				'0': 'Male',
				'1': 'Female'
			},
			'characterClass': {
				'barbarian'   : { '0': 'Barbarian',    '1': 'Barbarian' },
				'demon-hunter': { '0': 'Demon Hunter', '1': 'Demon Hunter' },
				'monk'        : { '0': 'Monk',         '1': 'Monk' },
				'witch-doctor': { '0': 'Witch Doctor', '1': 'Witch Doctor' },
				'wizard'      : { '0': 'Wizard',       '1': 'Wizard' },
				'crusader'    : { '0': 'Crusader',     '1': 'Crusader' }
			},
			'followerType': {
				'templar'    : 'Templar',
				'scoundrel'  : 'Scoundrel',
				'enchantress': 'Enchantress'
			},
			'artisanType': {
				'blacksmith': 'Blacksmith',
				'jeweler'   : 'Jeweler'
			},
			'difficultyType': {
				'normal'   : 'Normal',
				'nightmare': 'Nightmare',
				'hell'     : 'Hell',
				'inferno'  : 'Inferno'
			},
			'actName': {
				'act1': 'Act 1',
				'act2': 'Act 2',
				'act3': 'Act 3',
				'act4': 'Act 4'
			},
			'datetime': '<%= this._loc("date") %> <%= this._loc("time") %> ',
			'date'    : '<%= this._padZero(this["month"], 2) %>/<%= this._padZero(this["day"], 2) %>/<%= this["year"] %>',
			'time'    : '<%= this._padZero(this["ampm"]["hour"], 2) %>:<%= this._padZero(this["minute"], 2) %>:<%= this._padZero(this["second"], 2) %> <%= this["ampm"]["flag"] %>'
		},
		'de_DE': {
			'loading'  : 'Lade D3 Daten...',
			'not-found': 'Keine Daten gefunden',
			'not-used' : 'Ungenutzt',
			'label'    : {
				'slot'       : 'Slot:',
				'region'     : 'Region:',
				'item'       : 'Gegenstand:',
				'battletag'  : 'Battletag:',
				'character'  : 'Charakter:',
				'achievement': 'Erfolg:'
			},
			'characterGender': {
				'0': 'Männlich',
				'1': 'Weiblich'
			},
			'characterClass': {
				'barbarian'   : { '0': 'Barbar',       '1': 'Barbarin' },
				'demon-hunter': { '0': 'Dämonenjäger', '1': 'Dämonenjägerin' },
				'monk'        : { '0': 'Mönch',        '1': 'Mönch' },
				'witch-doctor': { '0': 'Hexendoktor',  '1': 'Hexendoktor' },
				'wizard'      : { '0': 'Zauberer',     '1': 'Zauberin' },
				'crusader'    : { '0': 'Kreuzritter',  '1': 'Kreuzritter' }
			},
			'followerType': {
				'templar'    : 'Templer',
				'scoundrel'  : 'Schuft',
				'enchantress': 'Verzauberin'
			},
			'artisanType': {
				'blacksmith': 'Schmied',
				'jeweler'   : 'Juwelier'
			},
			'difficultyType': {
				'normal'   : 'Normal',
				'nightmare': 'Alptraum',
				'hell'     : 'Hölle',
				'inferno'  : 'Inferno'
			},
			'actName': {
				'act1': 'Akt 1',
				'act2': 'Akt 2',
				'act3': 'Akt 3',
				'act4': 'Akt 4'
			},
			'datetime': '<%= this._loc("date") %> <%= this._loc("time") %> ',
			'date'    : '<%= this._padZero(this["day"], 2) %>.<%= this._padZero(this["month"], 2) %>.<%= this["year"] %>',
			'time'    : '<%= this._padZero(this["hour"], 2) %>:<%= this._padZero(this["minute"], 2) %>:<%= this._padZero(this["second"], 2) %>'
		},
		'fr_FR': {
			'datetime': '<%= this._loc("date") %> <%= this._loc("time") %> ',
			'date'    : '<%= this._padZero(this["day"], 2) %>-<%= this._padZero(this["month"], 2) %>-<%= this["year"] %>',
			'time'    : '<%= this._padZero(this["hour"], 2) %>:<%= this._padZero(this["minute"], 2) %>:<%= this._padZero(this["second"], 2) %>'
		},
		'es_ES': {
			'datetime': '<%= this._loc("date") %> <%= this._loc("time") %> ',
			'date'    : '<%= this._padZero(this["day"], 2) %>/<%= this._padZero(this["month"], 2) %>/<%= this["year"] %>',
			'time'    : '<%= this._padZero(this["hour"], 2) %>:<%= this._padZero(this["minute"], 2) %>:<%= this._padZero(this["second"], 2) %>'
		}
	}

});