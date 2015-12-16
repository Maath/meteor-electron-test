module.exports = function(grunt) {

  grunt.initConfig({
    'create-windows-installer': {
      x64: {
        appDirectory: '/Users/mike/electron-test/.meteor-electron/win32-x64/builds/Electron-win32-x64',
        outputDirectory: '/tmp/build/installer64',
        authors: 'MixMax-for-Windows',
        exe: 'Electron.exe',
        remoteReleases: "http://104.131.109.93:8000/installer64/"
      }
    }
  });

  grunt.loadNpmTasks('grunt-electron-installer')
  grunt.registerTask('default', ['create-windows-installer']);
};
