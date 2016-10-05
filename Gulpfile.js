var gulp = require('gulp');
var critical = require('critical').stream;

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

gulp.task('default', ['critical']);