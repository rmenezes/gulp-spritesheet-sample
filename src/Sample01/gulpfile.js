/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');

gulp.task('default', function () {
    // place code for your default task here
});

gulp.task('sprite', function () {
    var spriteData = gulp.src('images/*.png').pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.css'
    }));

    return spriteData.pipe(gulp.dest('wwwroot/lib/spritesheet'));
});