// import gulp as gulp in python 
var gulp = require('gulp');
var htmlminify = require('gulp-html-minifier');
var cssmin = require('gulp-css');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');


gulp.task('minify-html', function(){
	// look fot html files in src and its subdirectories
	gulp.src('src/**/*.html')
		.pipe(htmlminify({collapseWhitespace: true}))
		.pipe(gulp.dest('dist'));
})

gulp.task('cssMin', function(){
	gulp.src('src/**/*.css')
		.pipe(cssmin())
		.pipe(gulp.dest('dist'));
})

gulp.task('uglify', function(){
	gulp.src('src/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist'));
})

gulp.task('imagemin', function(){
	gulp.src(['src/img/*'])
		.pipe(imagemin())
		.pipe(gulp.dest('dist/img'));
})

gulp.task('imagemin2', function(){
	gulp.src(['src/views/images/*'])
		.pipe(imagemin())
		.pipe(gulp.dest('dist/views/images'));
})


gulp.task('watch', function(){
	gulp.watch('src/**/*html',['minify-html']);
	gulp.watch('src/**/*css', ['cssMin']);
	gulp.watch('src/**/*js', ['uglify']);
})





