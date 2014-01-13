'use strict';

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-mocha-test');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec'
                },
                src: ['test/mocha/unit/*_test.js', 'test/mocha/integrated/*_test.js'] //order is matter .. so first unit test happen and then integrated test
            }
        },

        /* mochaIntTest: {
            test: {
                options: {
                    reporters: 'Nyan'
                },
                src: ['test/mocha/integrated/*_test.js']
            }
        },
*/
        /* nodeunit: {
            files: ['test/*_test.js'],
        },
*/
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            lib: {
                src: ['lib/**/*.js']
            },
            test: {
                src: ['test/**/*.js']
            },
        },
        watch: {
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            lib: {
                files: '<%= jshint.lib.src %>',
                tasks: ['jshint:lib', 'mochaTest']
            },
            test: {
                files: '<%= jshint.test.src %>',
                tasks: ['jshint:test', 'mochaTest']
            },
        },
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');


    // Default task.
    grunt.registerTask('default', ['jshint', 'mochaTest']);

    // Default task.
    grunt.registerTask('test', ['mochaTest']);

};
