const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const concat = require('gulp-concat');

gulp.task('echo', function(){
  console.log('ECHO...echo');
});

gulp.task('jsBrowserify', function() {
  return browserify({ entries: ['./js/*.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});

gulp.task('concatInterface', function() {
  return gulp.src(['./js/pingpong-interface.js', './js/signup-interface.js'])
    .pipe(concat('allConcat.js'))
    .pipe(gulp.dest('./tmp'));
});
