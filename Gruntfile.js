module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    config: {
      dirs: {
        source: 'src',
        modules: 'modules',
        vendor: 'vendor',
        build: 'build',
        temp: 'temp',
      }
    },
    /* ************************************************** */
    clean: {
      all: ['<%= config.dirs.build %>/*', '<%= config.dirs.temp %>/*'],
      docs: ['LICENSE-*'],
      scripts: ['<%= config.dirs.build %>/*.js', '<%= config.dirs.temp %>/*.js'],
      styles: ['<%= config.dirs.build %>/*.css', '<%= config.dirs.temp %>/*.css']
    },
    /* ************************************************** */
    watch: {
      scripts: {
        files: ['<%= config.dirs.source %>/**/*.js'],
        tasks: 'scriptbuild',
        options: {
          interrupt: true,
        }
      },
      styles: {
        files: ['<%= config.dirs.source %>/**/*.css'],
        tasks: 'stylebuild',
        options: {
          interrupt: true,
        }
      }
    },
    /* ************************************************** */
    less: {
      all: {
        files: {
          '<%= config.dirs.source %>/<%= config.dirs.modules %>/d3.css': '<%= config.dirs.source %>/<%= config.dirs.modules %>/d3.less',
          '<%= config.dirs.source %>/<%= config.dirs.modules %>/wow.css': '<%= config.dirs.source %>/<%= config.dirs.modules %>/wow.less'
        }
      }
    },
    /* ************************************************** */
    concat: {
      options: {
        separator: grunt.util.linefeed + grunt.util.linefeed,
        stripBanners: true,
        banner: '/* <%= pkg.name %> (v<%= pkg.version %>) by <%= pkg.author.name %> (<%= pkg.author.alias %>), Copyright (c) <%= grunt.template.today("yyyy") %> */' + grunt.util.linefeed + grunt.util.linefeed
      },
      license: {
        options: {
          banner: 'Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>, contributors' + grunt.util.linefeed + grunt.util.linefeed
        },
        files: {
          'LICENSE-<%= pkg.license.type %>': '<%= config.dirs.source %>/doc/license.txt'
        }
      },
      'main': {
        files: {
          '<%= config.dirs.temp %>/main.js': [
            '<%= config.dirs.source %>/log.js',
            '<%= config.dirs.vendor %>/yepnope/yepnope.js',
            '<%= config.dirs.source %>/core.js',
            '<%= config.dirs.source %>/init_open.js',
            '<%= config.dirs.vendor %>/jquery.jsonp/jquery.jsonp.min.js',
            '<%= config.dirs.vendor %>/jQote2/jquery.jqote2.min.js',
            '<%= config.dirs.vendor %>/qtip2/jquery.qtip.js',
            '<%= config.dirs.source %>/init_close.js'
          ],
          '<%= config.dirs.temp %>/main.css': [
            '<%= config.dirs.vendor %>/qtip2/jquery.qtip.css'
          ]
        }
      },
      'modules-wow': {
        files: {
          '<%= config.dirs.temp %>/modules.wow.js': [
            '<%= config.dirs.source %>/<%= config.dirs.modules %>/wow.js',
            '<%= config.dirs.source %>/<%= config.dirs.modules %>/wow.realm.js',
            '<%= config.dirs.source %>/<%= config.dirs.modules %>/wow.quest.js',
            '<%= config.dirs.source %>/<%= config.dirs.modules %>/wow.spell.js',
            '<%= config.dirs.source %>/<%= config.dirs.modules %>/wow.guild.js',
            '<%= config.dirs.source %>/<%= config.dirs.modules %>/wow.arena.js',
            '<%= config.dirs.source %>/<%= config.dirs.modules %>/wow.achievement.js',
            '<%= config.dirs.source %>/<%= config.dirs.modules %>/wow.achievement.character.js',
            '<%= config.dirs.source %>/<%= config.dirs.modules %>/wow.character.js',
            '<%= config.dirs.source %>/<%= config.dirs.modules %>/wow.character.pvp.js',
            '<%= config.dirs.source %>/<%= config.dirs.modules %>/wow.character.spec.js',
            '<%= config.dirs.source %>/<%= config.dirs.modules %>/wow.item.js',
            '<%= config.dirs.source %>/<%= config.dirs.modules %>/wow.item.equipped.js',
            '<%= config.dirs.source %>/<%= config.dirs.modules %>/wow.wowhead.js',
            '<%= config.dirs.source %>/<%= config.dirs.modules %>/wow.wowhead.quest.js',
            '<%= config.dirs.source %>/<%= config.dirs.modules %>/wow.wowhead.spell.js',
            '<%= config.dirs.source %>/<%= config.dirs.modules %>/wow.wowhead.guild.js',
            '<%= config.dirs.source %>/<%= config.dirs.modules %>/wow.wowhead.achievement.js',
            '<%= config.dirs.source %>/<%= config.dirs.modules %>/wow.wowhead.character.js',
            '<%= config.dirs.source %>/<%= config.dirs.modules %>/wow.wowhead.item.js'
          ],
          '<%= config.dirs.temp %>/modules.wow.css': [
            '<%= config.dirs.source %>/<%= config.dirs.modules %>/wow.css'
          ]
        }
      },
      'modules-d3': {
        files: {
          '<%= config.dirs.temp %>/modules.d3.js': [
            '<%= config.dirs.source %>/<%= config.dirs.modules %>/d3.js',
            '<%= config.dirs.source %>/<%= config.dirs.modules %>/d3.profile.js'
          ],
          '<%= config.dirs.temp %>/modules.d3.css': [
            '<%= config.dirs.source %>/<%= config.dirs.modules %>/d3.css'
          ]
        }
      },
      'bundle-solo': {
        files: {
          '<%= config.dirs.build %>/<%= pkg.name %>.solo.js': [
            '<%= config.dirs.temp %>/main.js'
          ],
          '<%= config.dirs.build %>/<%= pkg.name %>.solo.css': [
            '<%= config.dirs.vendor %>/qtip2/jquery.qtip.css'
          ]
        }
      },
      'bundle-wow': {
        files: {
          '<%= config.dirs.build %>/<%= pkg.name %>.wow.js': [
            '<%= config.dirs.temp %>/main.js',
            '<%= config.dirs.temp %>/modules.wow.js'
          ],
          '<%= config.dirs.build %>/<%= pkg.name %>.wow.css': [
            '<%= config.dirs.vendor %>/qtip2/jquery.qtip.css',
            '<%= config.dirs.temp %>/modules.wow.css'
          ]
        }
      },
      'bundle-d3': {
        files: {
          '<%= config.dirs.build %>/<%= pkg.name %>.d3.js': [
            '<%= config.dirs.temp %>/main.js',
            '<%= config.dirs.temp %>/modules.d3.js'
          ],
          '<%= config.dirs.build %>/<%= pkg.name %>.d3.css': [
            '<%= config.dirs.vendor %>/qtip2/jquery.qtip.css',
            '<%= config.dirs.temp %>/modules.d3.css'
          ]
        }
      },
      'bundle-all': {
        files: {
          '<%= config.dirs.build %>/<%= pkg.name %>.all.js': [
            '<%= config.dirs.temp %>/main.js',
            '<%= config.dirs.temp %>/modules.wow.js',
            '<%= config.dirs.temp %>/modules.d3.js'
          ],
          '<%= config.dirs.build %>/<%= pkg.name %>.all.css': [
            '<%= config.dirs.vendor %>/qtip2/jquery.qtip.css',
            '<%= config.dirs.temp %>/modules.wow.css',
            '<%= config.dirs.temp %>/modules.d3.css'
          ]
        }
      }
    },
    /* ************************************************** */
    cssmin: {
      options: {
        keepSpecialComments: 0
      },
      all: {
        files: {
          '<%= config.dirs.build %>/<%= pkg.name %>.solo.min.css': ['<%= config.dirs.build %>/<%= pkg.name %>.solo.css'],
          '<%= config.dirs.build %>/<%= pkg.name %>.wow.min.css': ['<%= config.dirs.build %>/<%= pkg.name %>.wow.css'],
          '<%= config.dirs.build %>/<%= pkg.name %>.d3.min.css': ['<%= config.dirs.build %>/<%= pkg.name %>.d3.css'],
          '<%= config.dirs.build %>/<%= pkg.name %>.all.min.css': ['<%= config.dirs.build %>/<%= pkg.name %>.all.css']
        }
      }
    }
    /* ************************************************** */
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('docbuild', ['clean:docs', 'concat:license']);
  grunt.registerTask('prepare',  ['clean:scripts','clean:styles', 'less', 'concat:main', 'concat:modules-wow', 'concat:modules-d3']);
  grunt.registerTask('bundle',   ['concat:bundle-solo', 'concat:bundle-wow', 'concat:bundle-d3', 'concat:bundle-all']);
  grunt.registerTask('minify',   ['cssmin']);

  grunt.registerTask('default',  ['docbuild', 'prepare', 'bundle', 'minify']);

};