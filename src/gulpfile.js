var gulp = require('gulp'),
	inlineCss = require('gulp-inline-css'),
	uglify = require('gulp-uglify');

gulp.task('css', function() {
    return gulp.src('frontend-nanodegree-mobile-portfolio/*.html')
        .pipe(inlineCss())
        .pipe(gulp.dest('frontend-nanodegree-mobile-portfolio/dist'));
});
 
gulp.task('copy', function(){
  	return gulp.src('frontend-nanodegree-mobile-portfolio/src/*', {
  	base: 'frontend-nanodegree-mobile-portfolio/src'
  })
      .pipe(gulp.dest('frontend-nanodegree-mobile-portfolio/dist'));
});

gulp.task('js', function(){
	return gulp.src('frontend-nanodegree-mobile-portfolio/src/views/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('frontend-nanodegree-mobile-portfolio/dist/views/js'));
});