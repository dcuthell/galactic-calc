const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');

gulp.task('echo', function(){
  console.log('ECHO...echo');
});

gulp.task('jsBrowserify', function() {
  return browserify({ entries: ['./js/*.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});
