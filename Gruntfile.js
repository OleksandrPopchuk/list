/**
 * Created by oleksandrpop on 6/14/2016.
 */
module.exports = function (grunt) {
    "use strict";

    require('time-grunt')(grunt);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        clean: {
            short: ["dest/js", "dest/assets"]
        },

        copy: {
            main: {
                files: [
                    {expand: true, cwd: 'src/assets/imgs', src: ['**'], dest: 'dest/assets/imgs'},
                    {expand: true, cwd: 'src/assets/fonts', src: ['**'], dest: 'dest/assets/fonts'},
                    {expand: true, cwd: 'src/js/libs', src: ['**'], dest: 'dest/js/libs'},
                    {expand: true, cwd: 'src/js/app', src: ['**'], dest: 'src/js/app-out'},
                    {expand: true, cwd: 'src/js/app', src: ['**'], dest: 'dest/js/app'},
                    {expand: true, cwd: 'src', src: ['SpecRunner.html'], dest: 'dest'},
                    {expand: true, cwd: 'src/js/app/tests', src: ['**'], dest: 'dest/tests'}
                ]
            }
        },

        jshint: {
            options: {
                strict: false,
                expr: true,
                onecase: true,
                maxcomplexity: 8,
                curly: false,
                eqeqeq: false,
                forin: true,
                latedef: true,
                newcap: true,
                noarg: true,
                noempty: false,
                nonew: false,
                regexp: true,
                undef: true,
                evil: true,
                jasmine: true,
                globals: {
                    requirejs: true,
                    require: true,
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true,
                    window: true,
                    jasmine: true,
                    define: true
                },
                ignores: [
                    'src/js/app/templates/template.collection.js'
                ]
            },
            uses_defaults: ['src/js/app/**/**/**/*.js']
        },

        uglify: {
            build: {
                files: [{
                    expand: true,
                    src: '**/**/*.js',
                    dest: 'src/js/app-out',
                    cwd: 'src/js/app'
                }]
            }
        },

        htmlmin: {
            options: {
                removeComments: true,
                collapseWhitespace: true
            },
            compile: {
                files: {
                    'dest/index.html': 'src/index.html'
                }
            }
        },

        handlebars: {
            compile: {
                options: {
                    namespace: "List",
                    amd: "handlebars.runtime",
                    partialsUseNamespace: true,
                    partialRegex: /.*/,
                    compilerOptions: {
                        knownHelpers: {
                            "each": true,
                            "if": true,
                            "unless": true
                        }
                    },
                    processPartialName: function (filePath) {
                        var pieces = filePath.split("/");
                        return pieces[pieces.length - 1];
                    }
                },
                files: {
                    'src/js/app/templates/template.collection.js': ['src/js/app/templates/*.hbs']
                }
            }
        },

        imagemin: {
            all: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['assets/imgs/**/*.{png,jpg,gif,svg}'],
                    dest: './dest/assets/imgs'
                }]
            }
        },

        requirejs: {
            compile: {
                options: {
                    optimize: 'none',
                    generateSourceMaps: false,
                    preserveLicenseComments: false,
                    useSourceUrl: true,
                    mainConfigFile: "src/js/app/config/require.config.js",
                    baseUrl: "src/js/app",
                    name: 'init/app.init',
                    out: "dest/js/main.min.js"
                }
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    lineNumbers: true
                },
                files: {
                    'dest/assets/css/main.min.css': 'src/assets/sass/themes/default/main.scss'
                }
            }
        },

        jasmine: {
            src: 'src/js/app/*.js',
            options: {
                vendor: [
                    'src/js/libs/jquery.min.js',
                    'src/js/libs/require.min.js',
                    'src/js/libs/underscore.min.js',
                    'src/js/libs/handlebars.js'
                ],
                specs: 'src/js/app/tests/*.js',
                template: require('grunt-template-jasmine-requirejs'),
                templateOptions: {
                    requireConfig: {
                        baseUrl:"src/js/app",
                        paths:{
                            "jquery":"../libs/jquery.min",
                            "underscore":"../libs/underscore.min",
                            "backbone":"../libs/backbone.min",
                            "handlebars":"../libs/handlebars",
                            "handlebars.runtime":"../libs/handlebars.runtime",
                            "template.collection": "templates/template.collection",
                            "jasmine": "../libs/jasmine/lib/jasmine-2.5.2/jasmine.js",
                            "jasmine-html": "../libs/jasmine/lib/jasmine-2.5.2/jasmine-html.js"
                        },

                        shim:{
                            "backbone":{
                                "deps":["underscore", "jquery"],
                                "exports":"Backbone"
                            },
                            "jasmine-html": {
                                deps : ['jasmine']
                            },
                            "jasmine-boot": {
                                deps : ['jasmine', 'jasmine-html']
                            }
                        }
                    }
                }
            }
        },

        watch: {
            scripts: {
                files: ['src/js/app/**/*.js', 'src/js/libs/**/*.js'],
                tasks: ['jshint', 'handlebars', 'requirejs', 'uglify', 'copy', 'jasmine']
            },
            css: {
                files: ['src/assets/sass/**/*.scss'],
                tasks: ['sass']
            },
            templates: {
                files: ['src/js/app/templates/*.hbs'],
                tasks: ['handlebars']
            }
        },

        connect: {
            apollo: {
                options: {
                    port: 8015,
                    hostname: '*',
                    keepalive: true,
                    protocol: 'http',
                    base: './dest'
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-debug-task');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.registerTask('default',
        ['jshint', 'clean', 'copy', 'htmlmin', 'uglify', 'sass', 'handlebars', 'requirejs', 'jasmine', 'watch']);

    grunt.registerTask('server', ['connect:apollo']);

    grunt.registerTask('test', ['jshint']);
};