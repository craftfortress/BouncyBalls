 module.exports = function(grunt) { 
    grunt.initConfig({
       pkg: grunt.file.readJSON('package.json'),
        bower: {
            install: {
                options: {
                    cleanBowerDir: true
                }
            }
        },
        jshint: {
            all: ['Gruntfile.js', ' js/*.js' ]
        },
        qunit: {
            all: ['test/runner.html']
        }, 
        concat: {
            project: {
                src: ['js/particle.js','js/view.js','js/physics.js','js/controller.js','js/main.js'],
                dest: '../build/js/main.js'
            }
        },  copy: {
              main: {
                files: [ 
                  {expand: true, src: [ 'css/style.css','asset/*' ], dest:   '../build/' , filter: 'isFile'} 
                ],
              },
            } ,

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: '../build/js/main.js',
                dest: '../build/js/main.js'
            }
        }
    }); 

    // Load plugins
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit'); 
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify'); 
    grunt.loadNpmTasks('grunt-contrib-copy');
    // Default task
    grunt.registerTask('default', [ 'copy',  'concat' ]); 
    // Additional tasks
    grunt.registerTask('test', [ 'qunit']);
    grunt.registerTask('complete', ['bower', 'jshint', 'qunit',  'concat', 'uglify']); 
};

