var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');

gulp.task('style', function() {
	gulp.src(['style.less'])
	.pipe(plumber())
	.pipe(less())
	.pipe(rename({extname: '.css'}))
	.pipe(autoprefixer())
	.pipe(gulp.dest('.'));
});

gulp.task('watch', function () {
	gulp.watch('*.less', ['style']);
	gulp.watch('*.html', ['style']);
});

gulp.task('default', ['style']);
