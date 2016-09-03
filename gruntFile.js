module.exports = function (grunt) {

    // Load NPM tasks
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');

    grunt.initConfig({
        application: grunt.file.readJSON('package.json'),

        settings: {
            server: {
                protocol: 'http',
                host: '127.0.0.1',
                port: 3000
            },
            dirs: {
                src: 'src',
                npm: 'node_modules'
            }
        },

        connect: {
            server: {
                options: {
                    debug: true,
                    protocol: '<%= settings.server.protocol %>',
                    hostname: '<%= settings.server.host %>',
                    port: '<%= settings.server.port %>',
                    open: '<%= settings.server.protocol %>://<%= settings.server.host %>:<%= settings.server.port %>'
                },
            }
        },

        sass: {
            // Development
            dev: {
                options: {
                    outputStyle: 'compressed',
                    sourceMap: true,
                    unixNewlines: true,
                    noCache: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= settings.dirs.src %>/assets/scss/',
                    src: ['**/*.scss', '!**/_*.scss'],
                    dest: '<%= settings.dirs.src %>/assets/css/',
                    ext: '.css'
                }]
            },
        },

        watch: {
            options: {
                atBegin: true
            },
            sass: {
                files: '<%= settings.dirs.src %>/assets/scss/**/*.scss',
                tasks: ['sass:dev'],
                options: {
                    spawn: false
                }
            }
        }

    });

    // Develop task
    grunt.registerTask('dev', [
        'connect',
        'watch'
    ]);

}