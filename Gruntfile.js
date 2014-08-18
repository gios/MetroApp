module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      minify: {
        src: 'app/styles/<%= pkg.name %>.css',
        dest: 'build/<%= pkg.name %>.min.css'
      }
    },
    requirejs: {
      compile: {
        options: {
          baseUrl: ".",
          mainConfigFile: "app/scripts/config.js",
          name: "app/scripts/<%= pkg.name %>.js",
          include: ["bower_components/requirejs/require.js"],
          out: "build/<%= pkg.name %>.min.js"
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.registerTask('default', ['cssmin', 'requirejs']);

};