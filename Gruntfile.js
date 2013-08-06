module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

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
			dist: ['bin']
		},

		uglify: {
			options: {
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

	grunt.registerTask('default', ['jshint', 'uglify']);
};
