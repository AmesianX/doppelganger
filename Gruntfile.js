module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		compass: {
			dist: {
				options: {
					basePath: 'public',
					imagesDir: 'images',
					sassDir: 'scss',
					cssDir: 'css',
					outputStyle: 'compressed'
				}
 			}
		},

		jquery: {
			dist: {
				options: {
					prefix: "jquery-"
				},
				output: "public/javascripts/vendor",
				versions: {
					"2.0.3": ["ajax", "wrap", "deprecated", "sizzle", "effects"]
 				}
	  		}
		},

		lodash: {
			build: {
				dest: 'public/javascripts/vendor/lodash.js',
				include: ['backbone'],
				minus: ['template']
			}
		},

		requirejs: {
			production: {
				options: {
					baseUrl: "public/javascripts",
					mainConfigFile: "public/javascripts/config.js",
					name: 'vendor/almond',
					deps: [
						'setup',
						'app/connection/controllers/webrtc',
						'app/connection/controllers/fallback'
					],
					optimize: 'uglify2',
					preserveLicenseComments: false,
					insertRequire: ['setup'],
					out: "public/javascripts/build/doppelganger.min.js",
					removeCombined: true,
					stubModules: ['text', 'hbars']
				}
			}
		},

		watch: {
			options: {
				livereload: true,
				spawn: false
			},
			html: {
				files: ['views/**/*.handlebars'],
				tasks: []
			},
			scripts: {
				files: [
					'public/javascripts/**/*.js',
					'!public/javascripts/build/**/*.js'
				],
				tasks: ['requirejs']
			},
			styles: {
				files: [
					'public/**/*.scss',
					'!public/**/.*'
				],
				tasks: ['compass']
			}
		},

		imagemin: {
			dynamic: {
				options: {
					pngquant: true
				},
				files: [{
					expand: true,
					cwd: 'public/images',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'public/images'
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks("grunt-jquery-builder");
	grunt.loadNpmTasks('grunt-lodash');
	grunt.loadNpmTasks('grunt-contrib-imagemin');

	grunt.registerTask('build', ['compass', 'jquery', 'lodash', 'requirejs']);
	grunt.registerTask('optimize', ['imagemin']);
	grunt.registerTask('default', ['build', 'optimize']);
};
