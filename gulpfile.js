var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');


gulp.task('default', function() {
  var bundler = watchify(browserify({
    entries: ['./src/app.jsx'],
    transform: [reactify],
    extension:['.jsx'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  }));

  function build(file) {
    if(file) gutil.log('Recompiling ' + file);
    return bundler
      .bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error')) //if there's an error during the bundling process, console log it. Developer can find the error
      .pipe(source('main.js')) //jsx files put into the right order
      .pipe(gulp.dest('./'));
  };
  build() //tells build function to run, Run Gulp, it will immediately build
  bundler.on('update', build) //whenever we make to the files, build again

});
