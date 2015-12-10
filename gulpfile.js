var gulp = require('gulp'),
  inlineCss = require('gulp-inline-css'),
  uglify = require('gulp-uglify');

gulp.task('css', ['copy'], function() {
    return gulp.src('./src/*.html')
        .pipe(inlineCss())
        .pipe(gulp.dest('./dist'));
});
 
gulp.task('copy', function(){
    return gulp.src('./src/**/*')
      .pipe(gulp.dest('./dist'));
});

gulp.task('js', ['copy'], function(){
  return gulp.src('./src/views/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/views/js'));
});

gulp.task('default',['js', 'css'])