module.exports = function(grunt) {

  grunt.initConfig({
    'create-windows-installer': {
      ia32: {
        appDirectory: 'C:\\Users\\Michael\\meteor-electron-test\\.meteor-electron\\win32-ia32\\builds\\mixmax-win32-ia32',
        outputDirectory: 'C:\\Users\\Michael\\Electron-Builds',
        authors: 'MixMax Team',
        exe: 'mixmax.exe',
        productName: "MixMax",
        certificateFile: "C:\\Users\\Michael\\Desktop\\MixmaxWindowsCodesigningCertificate.p12",
        remoteReleases: "http://localhost:3000/app/latest"
      }
    }
  })
;
  grunt.loadNpmTasks('grunt-electron-installer')
  grunt.registerTask('default', ['create-windows-installer']);
};
