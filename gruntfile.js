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
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');


  // Default task(s).
  grunt.registerTask('default', ['connect', 'watch']);

};