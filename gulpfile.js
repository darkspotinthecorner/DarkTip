var gulp       = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('default', function() {
	gulp.src('./src/darktip.js')
		.pipe(browserify({
			insertGlobals : true
		}))
		.pipe(gulp.dest('./dist'))
});