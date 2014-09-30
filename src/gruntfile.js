module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      options: {
        separator: ';',
      },
      dist: {
          src: ['src/init.js', 'src/step_functions.js', 'src/sketchy_brush.js', 'src/critter.js', 'src/box.js'],
          dest: './../index.js',
        },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
};
