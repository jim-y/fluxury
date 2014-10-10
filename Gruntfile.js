/*global module:false*/
module.exports = function(grunt) {
	'use strict';

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/* ' +
      '<%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? " * " + pkg.homepage + "\\n" : "" %>' +
      ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= pkg.license %> \n */\n\n',
    // Task configuration.
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
        src: ['lib/app.jsx'],
        dest: 'build/bundle.<%= pkg.name %>.js',
	      options: {
					transform: ['reactify']
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
    jasmine: {
      pivotal: {
        src: 'build/bundle.woowie.js',
        options: {
          specs: 'spec/*Spec.js',
          helpers: 'spec/*Helper.js',
          vendor: 'bower_components/jquery/dist/jquery.min.js'
        }
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'jasmine']
      },
      lib: {
        files: '<%= jshint.lib.src %>',
        tasks: ['jshint:lib', 'browserify', 'concat', 'uglify']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-browserify');

  // Default task.
  grunt.registerTask('default', ['browserify', 'concat', 'uglify']);

	// Tasks
};
