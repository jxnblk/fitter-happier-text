
var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var browserify = require('gulp-browserify');

var cheerio = require('gulp-cheerio');


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



// Testing
var dom = require('gulp-dom');
var fht = require('./dist/fitter-happier-text.js');
gulp.task('fitter', function() {
  gulp.src('./demo.html')
    .pipe(dom(function() {
      var nodes = this.querySelectorAll('.js-fht');
      console.log(nodes[0]._ownerDocument._documentElement);
      fht(nodes, { doc: this });
    }))
    .pipe(rename('output.html'))
    .pipe(gulp.dest('.'));
});

