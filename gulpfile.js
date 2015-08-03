var gulp = require('gulp');
var uglify = require('gulp-uglify');
var vulcanize = require('gulp-vulcanize');
var rename = require('gulp-rename');


gulp.task('js', function() {
	gulp.src('src/*.js')
		.pipe(uglify())
		.on('error', console.error.bind(console))
		.pipe(gulp.dest('./js'))
});


gulp.task('vulcanize', function() {
	gulp.src('build.html')
		.pipe(vulcanize({
			inlineCss: true,
			inlineScripts: true,
			stripComments: true
		}))
		.on('error', console.error.bind(console))
		.pipe(rename('index.html'))
		.pipe(gulp.dest(''))
})


gulp.task('watch', function() {
	gulp.watch('bower_components/**/*.*', ['vulcanize'])
	gulp.watch('elements/*.*', ['vulcanize'])
	gulp.watch('images/**/*.*', ['vulcanize'])
	gulp.watch('src/*.*', ['js', 'vulcanize'])
	gulp.watch('build.html', ['vulcanize'])
});


gulp.task('default', ['js', 'vulcanize', 'watch']);