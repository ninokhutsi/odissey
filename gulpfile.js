var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('sass', function(){
    return gulp.src('source-files')
      .pipe(sass()) 
      .pipe(gulp.dest('destination'))
  });

  gulp.task('sass', function(){
    return gulp.src('scss/styles.scss')
      .pipe(sass()) 
      .pipe(gulp.dest('app/css'))
  });
