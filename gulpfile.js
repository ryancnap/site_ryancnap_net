// This belongs to the test web-app project

// Include gulp.
var gulp = require('gulp');

// Include plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');




// Concatenate and minify JS files
gulp.task('scripts', function() {
	return gulp.src('scripts/*.js')
		.pipe(concat('main.js'))
			.pipe(rename({suffix: '.min'}))
			.pipe(uglify())
			.pipe(gulp.dest('build'))
			// Hope this works
			.pipe(livereload())

});

// Concat and minify HTML files?
gulp.task('html-scripts', function() {
	return gulp.src('./*.html')
		.pipe(concat('main.html'))
			.pipe(rename({suffix: '.min'}))
			// .pipe(uglify())
			.pipe(gulp.dest('build'))
			.pipe(livereload())
});

// Task watching
gulp.task('watch', function() {
	// Watch .js files
	gulp.watch('scripts/*.js', ['scripts']);
	// Watch html files
	gulp.watch('./*.html', ['html-scripts']);

	// Try to make livereload work
	livereload.listen();
	gulp.watch(['./**']).on('change', livereload.changed);
});

gulp.task('connect', function(){
	return connect.server({
		root: ['.'],
		port: 8888,
		livereload: true
	});
});

// Default task
gulp.task('default', ['scripts', 'html-scripts', 'watch', 'connect']);
