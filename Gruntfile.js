module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    'pkg': grunt.file.readJSON('package.json'),
    'config': {
      'sep': grunt.util.linefeed + grunt.util.linefeed,
      'dirs': {
        'source'   : 'src',
        'modules'  : 'modules',
        'vendor'   : 'vendor',
        'build'    : 'build',
        'temp'     : 'temp',
        'templates': 'templates'
      }
    },
    /* ************************************************** */
    'clean': {
      'all'    : [ '<%= config.dirs.build %>/*', '<%= config.dirs.temp %>/*' ],
      'docs'   : [ 'LICENSE-*' ],
      'scripts': [ '<%= config.dirs.build %>/*.js', '<%= config.dirs.temp %>/*.js' ],
      'styles' : [ '<%= config.dirs.build %>/*.css', '<%= config.dirs.temp %>/*.css' ],
      'images' : [ '<%= config.dirs.build %>/**/*.{png,jpg,jpeg,gif,svg}', '<%= config.dirs.temp %>/**/*.{png,jpg,jpeg,gif,svg}' ]
    },
    /* ************************************************** */
    'watch': {
      'scripts': {
        'files': [ '<%= config.dirs.source %>/**/*.js' ],
        'tasks': 'scriptbuild',
        'options': {
          'interrupt': true,
        }
      },
      'styles': {
        'files': [ '<%= config.dirs.source %>/**/*.css' ],
        'tasks': 'stylebuild',
        'options': {
          'interrupt': true,
        }
      }
    },
    /* ************************************************** */
    'less': {
      'modulesWoW': {
        'src': [ '<%= config.dirs.source %>/<%= config.dirs.modules %>/wow/wow.less' ],
        'dest': '<%= config.dirs.source %>/<%= config.dirs.modules %>/wow/wow.css'
      },
      'modulesD3': {
        'src': [ '<%= config.dirs.source %>/<%= config.dirs.modules %>/d3/d3.less' ],
        'dest': '<%= config.dirs.source %>/<%= config.dirs.modules %>/d3/d3.css'
      }
    },
    /* ************************************************** */
    'concat': {
      'options': {
        'separator': '<%= config.sep %>',
        'stripBanners': true,
        'banner': '/* <%= pkg.name %> (v<%= pkg.version %>) by <%= pkg.author.name %> (<%= pkg.author.alias %>), Copyright (c) <%= grunt.template.today("yyyy") %> */' + '<%= config.sep %>'
      },
      'license': {
        'options': {
          'banner': 'Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>, contributors' + '<%= config.sep %>'
        },
        'files': {
          'LICENSE-<%= pkg.license.type %>': '<%= config.dirs.source %>/doc/license.txt'
        }
      },
      'mainScript': {
        'src': [
          '<%= config.dirs.source %>/log.js',
          '<%= config.dirs.vendor %>/yepnope/yepnope.js',
          '<%= config.dirs.source %>/init_open.js',
          '<%= config.dirs.vendor %>/q/q.js',
          '<%= config.dirs.vendor %>/dustjs/dust-full.min.js',
          '<%= config.dirs.vendor %>/dustjs-helpers/dust-helpers.min.js',
          '<%= config.dirs.source %>/dustjs_helpers.js',
          '<%= config.dirs.vendor %>/jquery.jsonp/jquery.jsonp.min.js',
          '<%= config.dirs.source %>/v2/main.js',
          '<%= config.dirs.source %>/init_close.js'
        ],
        'dest': '<%= config.dirs.temp %>/main.js'
      },
      'mainStyle': {
        'src': [
          '<%= config.dirs.vendor %>/qtip2/jquery.qtip.css'
        ],
        'dest': '<%= config.dirs.temp %>/main.css'
      },
      'modulesWoWScript': {
        'src': [
          '<%= config.dirs.source %>/<%= config.dirs.modules %>/wow/wow.js',
          '<%= config.dirs.source %>/<%= config.dirs.modules %>/wow/wow.realm.js',
          '<%= config.dirs.source %>/<%= config.dirs.modules %>/wow/wow.quest.js',
          '<%= config.dirs.source %>/<%= config.dirs.modules %>/wow/wow.spell.js',
          '<%= config.dirs.source %>/<%= config.dirs.modules %>/wow/wow.guild.js',
          '<%= config.dirs.source %>/<%= config.dirs.modules %>/wow/wow.arena.js',
          '<%= config.dirs.source %>/<%= config.dirs.modules %>/wow/wow.achievement.js',
          '<%= config.dirs.source %>/<%= config.dirs.modules %>/wow/wow.achievement.character.js',
          '<%= config.dirs.source %>/<%= config.dirs.modules %>/wow/wow.character.js',
          '<%= config.dirs.source %>/<%= config.dirs.modules %>/wow/wow.character.pvp.js',
          '<%= config.dirs.source %>/<%= config.dirs.modules %>/wow/wow.character.spec.js',
          '<%= config.dirs.source %>/<%= config.dirs.modules %>/wow/wow.item.js',
          '<%= config.dirs.source %>/<%= config.dirs.modules %>/wow/wow.item.equipped.js',
          '<%= config.dirs.source %>/<%= config.dirs.modules %>/wow/wow.wowhead.js',
          '<%= config.dirs.source %>/<%= config.dirs.modules %>/wow/wow.wowhead.quest.js',
          '<%= config.dirs.source %>/<%= config.dirs.modules %>/wow/wow.wowhead.spell.js',
          '<%= config.dirs.source %>/<%= config.dirs.modules %>/wow/wow.wowhead.guild.js',
          '<%= config.dirs.source %>/<%= config.dirs.modules %>/wow/wow.wowhead.achievement.js',
          '<%= config.dirs.source %>/<%= config.dirs.modules %>/wow/wow.wowhead.character.js',
          '<%= config.dirs.source %>/<%= config.dirs.modules %>/wow/wow.wowhead.item.js'
        ],
        'dest': '<%= config.dirs.temp %>/modules.wow.js'
      },
      'modulesWoWStyle': {
        'src': [
          '<%= less.modulesWoW.dest %>'
        ],
        'dest': '<%= config.dirs.temp %>/modules.wow.css'
      },
      'modulesD3Script': {
        'src': [
          '<%= config.dirs.source %>/<%= config.dirs.modules %>/d3/d3.js',
          '<%= config.dirs.source %>/<%= config.dirs.modules %>/d3/d3.profile.js'
        ],
        'dest': '<%= config.dirs.temp %>/modules.d3.js'
      },
      'modulesD3Style': {
        'src': [
          '<%= less.modulesD3.dest %>'
        ],
        'dest': '<%= config.dirs.temp %>/modules.d3.css'
      },
      'bundleSoloScript': { 'src': [ '<%= concat.mainScript.dest %>' ], 'dest': '<%= config.dirs.build %>/<%= pkg.name %>.solo.js'  },
      'bundleSoloStyle' : { 'src': [ '<%= concat.mainStyle.dest %>'  ], 'dest': '<%= config.dirs.build %>/<%= pkg.name %>.solo.css' },
      'bundleWoWScript' : { 'src': [ '<%= concat.mainScript.dest %>', '<%= concat.modulesWoWScript.dest %>' ], 'dest': '<%= config.dirs.build %>/<%= pkg.name %>.wow.js'  },
      'bundleWoWStyle'  : { 'src': [ '<%= concat.mainStyle.dest %>' , '<%= concat.modulesWoWStyle.dest %>'  ], 'dest': '<%= config.dirs.build %>/<%= pkg.name %>.wow.css' },
      'bundleD3Script'  : { 'src': [ '<%= concat.mainScript.dest %>', '<%= concat.modulesD3Script.dest %>' ], 'dest': '<%= config.dirs.build %>/<%= pkg.name %>.d3.js'  },
      'bundleD3Style'   : { 'src': [ '<%= concat.mainStyle.dest %>' , '<%= concat.modulesD3Style.dest %>'  ], 'dest': '<%= config.dirs.build %>/<%= pkg.name %>.d3.css' },
      'bundleAllScript' : { 'src': [ '<%= concat.mainScript.dest %>', '<%= concat.modulesWoWScript.dest %>', '<%= concat.modulesD3Script.dest %>' ], 'dest': '<%= config.dirs.build %>/<%= pkg.name %>.all.js'  },
      'bundleAllStyle'  : { 'src': [ '<%= concat.mainStyle.dest %>' , '<%= concat.modulesWoWStyle.dest %>' , '<%= concat.modulesD3Style.dest %>'  ], 'dest': '<%= config.dirs.build %>/<%= pkg.name %>.all.css' }
    },
    /* ************************************************** */
    'cssmin': {
      'options': {
        'keepSpecialComments': 0
      },
      'all': {
        'files': {
          '<%= config.dirs.build %>/<%= pkg.name %>.solo.min.css': ['<%= config.dirs.build %>/<%= pkg.name %>.solo.css'],
          '<%= config.dirs.build %>/<%= pkg.name %>.wow.min.css': ['<%= config.dirs.build %>/<%= pkg.name %>.wow.css'],
          '<%= config.dirs.build %>/<%= pkg.name %>.d3.min.css': ['<%= config.dirs.build %>/<%= pkg.name %>.d3.css'],
          '<%= config.dirs.build %>/<%= pkg.name %>.all.min.css': ['<%= config.dirs.build %>/<%= pkg.name %>.all.css']
        }
      }
    },
    /* ************************************************** */
    'replace': {
      'main': {
        'options': {
          'patterns': [
            { 'match': 'darktip_version', 'replacement': '<%= pkg.version %>' }
          ]
        },
        'files': [
          { 'src': ['<%= config.dirs.temp %>/main.js'], 'dest': '<%= config.dirs.temp %>/main.js' }
        ]
      }
    },
    /* ************************************************** */
    'imagemin': {
      'options': {
        'progressive': false,
        'interlaced': false
      },
      'all': {
        'files': [{
          'expand': true,
          'cwd': 'src/img/',
          'src': [ '**/*.{png,jpg,jpeg,gif,svg}' ],
          'dest': 'temp/img/'
        }]
      }
    },
    /* ************************************************** */
    'dataUri': {
      'options': {
        'target': [ '<%= config.dirs.temp %>/**/*.*' ],
        'baseDir': '<%= config.dirs.temp %>/',
        'fixDirLevel': true
      },
      'modulesWoW': {
        'src': [ '<%= less.modulesWoW.dest %>' ],
        'dest': '<%= config.dirs.source %>/<%= config.dirs.modules %>/wow/'
      },
      'modulesD3': {
        'src': [ '<%= less.modulesD3.dest %>' ],
        'dest': '<%= config.dirs.source %>/<%= config.dirs.modules %>/d3/'
      }
    }
    /* ************************************************** */
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-replace');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-data-uri');

  // Default task(s).
  grunt.registerTask('docbuild', [ 'clean:docs', 'concat:license' ]);
  grunt.registerTask('images',   [ 'clean:images', 'imagemin:all' ]);
  grunt.registerTask('prepare',  [ 'clean:scripts','clean:styles', 'less:modulesWoW', 'less:modulesD3', 'dataUri:modulesD3', 'dataUri:modulesWoW', 'concat:mainScript', 'concat:mainStyle', 'replace:main', 'concat:modulesWoWScript', 'concat:modulesWoWStyle', 'concat:modulesD3Script', 'concat:modulesD3Style' ]);
  grunt.registerTask('bundle',   [ 'concat:bundleSoloScript', 'concat:bundleSoloStyle', 'concat:bundleWoWScript', 'concat:bundleWoWStyle', 'concat:bundleD3Script', 'concat:bundleD3Style', 'concat:bundleAllScript', 'concat:bundleAllStyle' ]);
  grunt.registerTask('minify',   [ 'cssmin' ]);

  grunt.registerTask('default',  ['docbuild', 'prepare', 'bundle', 'minify']);

};