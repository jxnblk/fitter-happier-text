
var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var browserify = require('gulp-browserify');

gulp.task('compile', function() {
  gulp.src('index.js')
    .pipe(browserify({ standalone: 'fitterHappierText' }))
    .pipe(uglify())
    .pipe(rename('fitter-happier-text.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['compile'], function() {
  gulp.watch(['./index.js'], ['compile']);
});


