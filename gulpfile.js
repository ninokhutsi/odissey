var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');


gulp.task('sass', function(){
    return gulp.src('source-files')
      .pipe(sass()) // Using gulp-sass
      .pipe(gulp.dest('destination'))
  });

  gulp.task('sass', function(){
    return gulp.src('scss/styles.scss')
      .pipe(sass()) // Converts Sass to CSS with gulp-sass
      .pipe(gulp.dest('app/css'))
  });