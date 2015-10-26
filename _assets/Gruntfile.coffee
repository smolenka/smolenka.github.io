module.exports = (grunt) ->

  # load all grunt tasks
  require("matchdep").filterDev("grunt-*").forEach grunt.loadNpmTasks

  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')

    watch:
      scripts:
        files: ['scss/*', 'js/*']
        options: { nospawn: true }
        tasks: ["sass", "concat", "concat_css", "watch"]

    bower:
      install:
        options:
          verbose: true

    sass:
      options:
        includePaths: [
          'bower_components/foundation/scss'
        ]
      dist:
        options:
          outputStyle: 'compressed'
        files:
          '../static/style.css': [
            'scss/style.scss'
          ]

    concat_css:
      dist:
        files:
          '../static/style.css': [
            '../static/style.css'
            'bower_components/pgwmodal/pgwmodal.css'
          ]

    concat:
      options:
        separator: ';'
      dist:
        src: [  # the files to concatenate
          # 'bower_components/modernizr/modernizr.js'
          'bower_components/zepto/zepto.min.js'
          # 'bower_components/pgwmodal/pgwmodal.min.js'
          'js/**/*.js'
        ]
        dest: '../static/script.js' # the location of the resulting JS file

    uglify:
      common:
        options:
          mangle: true
        files:
          '../static/script.js': '../static/script.js'



  grunt.registerTask 'build', ['sass', 'concat', 'concat_css']
  grunt.registerTask 'default', ['build','watch']
