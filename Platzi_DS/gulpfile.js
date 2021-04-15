var gulp = require('gulp')
var sass = require('gulp-sass')
var minifyCSS = require ('gulp-minify-css')
var concat = require('gulp-concat')


/* function is not longer working properly. Have to use arrow functions instead. */

gulp.task('hello', done => {
  console.log('Hello There!!!')
  done()
})

gulp.task('sass', function () {
  return gulp.src('scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/stylesheets'))
})

gulp.task('style_min', function () {
  return gulp.src('src/**/*.scss')
  .pipe(sass())
  .pipe(minifyCSS())
  .pipe(concat('style_main.min.css'))
  .pipe(gulp.dest('public/stylesheets'))
})

gulp.task('watch','[style_min]', function () {
  gulp.watch('src/**/*.scss',['style_min'])
})