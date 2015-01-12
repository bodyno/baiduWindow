module.exports=function(grunt){
    grunt.initConfig({
        clean:["dest"],
        uglify:{
            options: {
                preserveComments:'some'
            },
            main:{
                expand: true,
                cwd: 'src',
                src: '**/*.js',
                dest: 'dest',
                ext: '.js'
            }
        },
        cssmin:{
            minify:{
                expand: true,
                cwd: 'src',
                src: '**/*.css',
                dest: 'dest'
            }
        },
        copy: {
            main: {
                files:[
                    {
                        expand: true,
                        cwd: 'src',
                        src: 'images/**',
                        dest: 'dest'
                    }
                ]
            }
        },
        /*concat:{
            dist: {
                src: [
                    "src/dmp/plugins/jquery/jquery.js",
                    "src/dmp/plugins/requirejs/require.js",
                    "src/dmp/scripts/app.js"
                ],
                dest: 'dest/scripts/all.js'
            }
        },*/
        htmlmin:{
            options: {                                 // Target options
                removeComments: true,
                collapseWhitespace: true,
                minifyJS:true,
                processScripts:["text/template"]
            },
            build:{
                expand: true,
                cwd:"src",
                src:"*.html",
                dest:"dest",
                ext: '.html'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-html-build');

    grunt.registerTask('default',['clean','uglify','cssmin','copy','htmlmin']);


}