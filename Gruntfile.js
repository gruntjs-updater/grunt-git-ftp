/*
 * grunt-git-ftp
 * http://gruntjs.com/
 *
 * Copyright (c) 2013 Roberto Carlos Marte, contributors
 * Licensed under the MIT license.
 */


module.exports = function(grunt) {
	"use strict";
	
	var Config = {}; 

	//jshint
	Config.jshint = {
		options: {
			jshintrc: '.jshintrc'
		},
		packages: [
			'Gruntfile.js','package.json'
		],javascript:[
			'tasks/git_ftp.js'
		]    
	};

	//watch
	Config.watch = {
		options: {
			livereload: false
		},  
		javascript: {
			files: ['tasks/git_ftp.js'],
			tasks: ['jshint:javascript']
		}
	};

	//git_ftp
	Config.git_ftp = {
		default_options: {
			options: {

			},
			files: {
				'tmp/default_options': ['test/fixtures/testing', 'test/fixtures/123'],
			},
		}
    };


	//Init Task
	grunt.initConfig(Config);

	// Actually load this plugin's task(s).
	grunt.loadTasks('tasks');

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');
	grunt.loadNpmTasks('grunt-contrib-copy');
	//grunt.loadNpmTasks('grunt-neuter');    
	grunt.loadNpmTasks('grunt-contrib-watch');  


	//Register the default tasks
	grunt.registerTask('default',[
		'jshint:packages'
	]);

	//Register the test tasks
	grunt.registerTask('test', [
		'jshint:javascript'
	]);

};