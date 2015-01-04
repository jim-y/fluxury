/*global module:false*/
module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/* ' +
      '<%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? " * " + pkg.homepage + "\\n" : "" %>' +
      ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= pkg.license %> \n */\n\n',
    // Task configuration.
    clean: {
      build: {
        src: ["build"]
      }
    },
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: ['build/bundle.<%= pkg.name %>.js'],
        dest: 'build/bundle.<%= pkg.name %>.js'
      }
    },
    browserify: {
      dist: {
        src: ['lib/app.js'],
        dest: 'build/bundle.<%= pkg.name %>.js',
        options: {
          transform: ['reactify'],
          watch: true,
          keepAlive: true
        }
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: '<%= browserify.dist.dest %>',
        dest: 'build/bundle.<%= pkg.name %>.min.js'
      }
    },
    jshint: {
      options: {
        jshintrc: true
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib: {
        src: ['lib/**/*.js', 'lib/**/*.jsx']
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib: {
        files: '<%= jshint.lib.src %>',
        tasks: ['jshint:lib', 'browserify'],
        options: {
          livereload: true
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-jsxhint');
  grunt.loadNpmTasks('grunt-browserify');

  // Default task.
  grunt.registerTask('default', ['jshint', 'clean', 'browserify', 'concat', 'uglify']);
  
  // Tasks
  grunt.registerTask('clear', ['clean']);
  grunt.registerTask('distfull', ['jshint', 'browserify', 'concat', 'uglify']);
  grunt.registerTask('dist', ['jshint', 'browserify']);
};
