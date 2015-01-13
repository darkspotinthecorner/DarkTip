var gulp       = require('gulp'),
	watch      = require('gulp-watch'),
	browserify = require('gulp-browserify');

gulp.task('default', function() {
	gulp.src('./src/darktip.js')
		.pipe(watch('./src/**/*.js'))
		.pipe(browserify({
			insertGlobals : true
		}))
		.pipe(gulp.dest('./dist'));
});