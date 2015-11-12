module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch:  {
      options:  {
        spawn: false,
        livereload: true
      },
      scripts:  {
        files:  ['*.js', '*.html'],
      }
    },

    connect:  {
      server: {
        options:  {
          hostname: 'localhost',
          port: 3000,
          livereload: true
        }
      }
    },

    // grunt-open will open your browser at the project's URL
    open: {
      all: {
        // Gets the port from the connect configuration
        path: 'http://localhost:3000/',
        app: 'Google Chrome'
      }
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-open');


  // Default task(s).
  grunt.registerTask('default', ['connect', 'watch']);

};