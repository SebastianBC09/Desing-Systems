var gulp = require('gulp')
var sass = require('gulp-scss')

function is not longer working properly. Have to use arrow functions instead.

gulp.task('Hello There', function () {
  console.log('Hello There!')
})

gulp.task('sass', function () {
  return gulp.src('scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/stylesheets'))
})