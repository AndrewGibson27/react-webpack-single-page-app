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
    .pipe(gulp.dest('./dist/libs'))
});

gulp.task('critical', function() {
  return gulp.src('dist/index.html')
    .pipe(critical({
      base: './dist',
      inline: true,
      minify: true,
      css: [
        './dist/build/app-build.css'
      ]
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['critical']);
gulp.task('libs', ['modernizr']);