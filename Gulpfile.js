var gulp = require('gulp');
var critical = require('critical').stream;
var modernizr = require('gulp-modernizr');
var saveLicense = require('uglify-save-license');
var uglify = require('gulp-uglify');

gulp.task('modernizr', function() {
  return gulp.src('./src/**/*.js')
    .pipe(modernizr({
      options: [],
      tests: ['csscalc', 'svg', 'flexbox'],
      crawl: false
    }))
    .pipe(uglify({
      output: {
        comments: saveLicense
      }
    }))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('critical', function () {
  return gulp.src('dist/index.html')
    .pipe(critical({
      base: './',
      inline: true,
      css: [
        'dist/app-build.css'
      ]
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['critical', 'modernizr']);