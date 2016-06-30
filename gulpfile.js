var gulp       = require('gulp'),
	watch      = require('gulp-watch'),
	browserify = require('gulp-browserify');

gulp.task('browserify', function() {
	return gulp.src('src/darktip.js')
		.pipe(browserify({
			insertGlobals : true
		}))
		.pipe(gulp.dest('./dist'));
});

gulp.task('default', function() {
	return gulp.watch('src/**/*.js', ['browserify']);
});
