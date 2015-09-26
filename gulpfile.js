var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var del = require('del');
var less = require('gulp-less');
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');

gulp.task('clean-styles', function() {
	del(['public/*.css']);
});

gulp.task('styles', ['clean-styles'], function() {
	gulp.src(['styles/*.less'])
	.pipe(plumber())
	.pipe(concat('styles.less'))
	.pipe(less())
	.pipe(rename({extname: '.css'}))
	.pipe(autoprefixer())
	.pipe(gulp.dest('public'));
});

gulp.task('clean-views', function() {
	del(['public/*.html']);
});

gulp.task('views', ['clean-views'], function() {
	gulp.src(['views/*.html',])
	.pipe(gulp.dest('public/'));
});

gulp.task('clean-scripts', function() {
	del(['public/*.js']);
});

gulp.task('scripts', ['clean-scripts'], function() {
	gulp.src([
		'bower_components/pleasejs/src/Please.js',
		'bower_components/domready/src/ready.js',
		'scripts/*.js',
	])
	.pipe(concat('scripts.js'))
	.pipe(gulp.dest('public/'))
});

gulp.task('watch', function () {
	gulp.watch('styles/*.less', ['styles']);
	gulp.watch('views/*.html', ['views']);
	gulp.watch('scripts/*.js', ['scripts']);
});

gulp.task('default', ['styles', 'views', 'scripts']);
