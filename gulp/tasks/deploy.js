var gulp = require('gulp'),
    replace = require('gulp-replace'),
    runSequence = require('gulp-run-sequence'),
    zip = require('gulp-zip'),
    sshConfig = require('../sshConfig.js'),
    clean = require('gulp-clean');


var distPath = 'build/';
var remoteZipPath = '/var/lib/tomcat7/webapps/Data_Collection_Platform.zip';
var remoteProjectPath = '/var/lib/tomcat7/webapps/Data_Collection_Platform';



gulp.task('cleanDist', function () {
    return gulp.src('dist')
        .pipe(clean());
});

gulp.task('replaceServerUrl', function () {
    var dirPath = distPath;
    return gulp.src(dirPath + 'bundle.js')
        .pipe(replace(/var SERVER_URL =(.+)/g, 'var SERVER_URL = "/Data_Collection_Platform";'))
        .pipe(gulp.dest(dirPath));
});


gulp.task('zipDist', function () {
    return gulp.src(distPath + '**')
        .pipe(zip('Data_Collection_Platform.zip'))
        .pipe(gulp.dest('dist'));
});

gulp.task('deleteRemoteFiles', function () {
    return ssh.exec(['rm -rf ' + remoteProjectPath], {filePath: 'deleteRemoteFiles.log'})
        .pipe(gulp.dest('dist/logs'));
});

gulp.task('uploadZip', function () {
    return gulp.src('dist/Data_Collection_Platform.zip')
        .pipe(ssh.sftp('write', remoteZipPath));
});

gulp.task('unzipRemoteFiles', function () {
    return ssh.exec(['unzip ' + remoteZipPath + ' -d ' + remoteProjectPath], {filePath: 'unzipRemoteFiles.log'})
        .pipe(gulp.dest('dist/logs'));
});

gulp.task('deleteRemoteZip', function () {
    return ssh.exec(['rm ' + remoteZipPath], {filePath: 'deleteRemoteZip.log'})
        .pipe(gulp.dest('dist/logs'));
});

gulp.task('deploy-aws', function (cb) {
    setDeployServer("aws");
    runSequence(
        'cleanDist',
        'replaceServerUrl',
        'zipDist',
        'deleteRemoteFiles',
        'uploadZip',
        'unzipRemoteFiles',
        'deleteRemoteZip',
        cb);
});

gulp.task('deploy-kiwi', function (cb) {
    setDeployServer("kiwi");
    runSequence(
        'cleanDist',
        'replaceServerUrl',
        'zipDist',
        'deleteRemoteFiles',
        'uploadZip',
        'unzipRemoteFiles',
        'deleteRemoteZip',
        cb);
});

function setSSHConfig(config) {
    ssh = require('gulp-ssh')({
        ignoreErrors: false,
        sshConfig: config
    });
}

function setDeployServer(serverName) {
    switch (serverName) {
        case "aws":
            setSSHConfig(sshConfig.aws);
            break;
        case "kiwi":
            setSSHConfig(sshConfig.kiwi);
            break;
    }
}
