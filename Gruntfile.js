module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		meta: {
			banner: '/*! EventEmitter - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
				' * Author: Alberto La Rocca <alberto.larocca@canvace.com> (https://github.com/71104)\n' +
				' * Released under the MIT license\n' +
				' * Copyright (c) <%= grunt.template.today("yyyy") %> Canvace Srl */\n'
		},

		jshint: {
			options: {
				camelcase: true,
				curly: true,
				forin: true,
				immed: true,
				indent: 4,
				latedef: true,
				newcap: true,
				noarg: true,
				quotmark: 'single',
				undef: true,
				unused: true,
				strict: true,
				trailing: true,
				boss: true,
				expr: true,
				loopfunc: true,
				smarttabs: true,
				supernew: true,
				exported: ['EventEmitter']
			},
			dist: ['src/EventEmitter.js']
		},

		clean: {
			dist: ['bin', 'doc']
		},

		uglify: {
			options: {
				banner: '<%= meta.banner %>',
				report: 'min'
			},
			dist: {
				files: {
					'bin/EventEmitter.js': ['src/EventEmitter.js']
				}
			}
		},

		yuidoc: {
			compile: {
				name: 'EventEmitter',
				description: '',
				version: '<%= pkg.version %>',
				url: '<%= pkg.homepage %>',
				options: {
					paths: 'src/',
					outdir: 'doc/',
					linkNatives: 'true'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-yuidoc');

	grunt.registerTask('default', ['jshint', 'uglify', 'yuidoc']);
};
