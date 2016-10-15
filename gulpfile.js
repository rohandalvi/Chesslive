var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('js', function(){
  browserify('./public/javascripts/hello.jsx')
  .transform(reactify)
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('public/javascripts/lib/'));
});

gulp.task('watch', function(){
  gulp.watch("public/javascripts/*.jsx",["js"])
});

gulp.task('default',['js','watch']);
