// Base
var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var cp = require('child_process');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var ghPages = require('gulp-gh-pages');
var copydir = require('copy-dir');
var messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build',
  cssError: '<span style="color: grey">CSS SYNTAX</span> SCSS build error'

};


/** 
  * SCSS Notification on failed build 
  */

// SCSS syntax error handling  requirements
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');

// SCSS syntax error function

var onError = function(err) {
    var lineNumber = (err.lineNumber) ? 'LINE ' + err.lineNumber + ' -- ' : '';

    // macOS Native notification
    // Wait & timeout make notifications go away from the panel, so they don't linger
    notify({
        title: 'Task failed [' + err.plugin + ']',
        message: lineNumber + 'See console.',
        sound: 'Basso',
        wait: false,
        timeout: 5
    }).write(err);

    // Browsersync notification, in case 'do not distrub' is on
    browserSync.notify(messages.cssError);

    // Report the error on the console
    var report = '';
    var chalk = gutil.colors.bgMagenta.white;

    // Pretty reporting for easier spotting
    report += chalk('TASK:') + ' [' + err.plugin + ']\n';
    report += chalk('ISSUE:') + ' ' + err.message + '\n';
    if (err.lineNumber) { report += chalk('LINE:') + ' ' + err.lineNumber + '\n'; }
    if (err.fileName) { report += chalk('FILE:') + ' ' + err.fileName + '\n'; }
    console.log(report);

    // Prevent the 'watch' task from stopping
    this.emit('end');
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
  browserSync.notify(messages.jekyllBuild);
  return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
    .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
  browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['sass', 'jekyll-build'], function () {
  browserSync({
    server: {
      baseDir: '_site'
    }
  });
});

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
  return gulp.src('_scss/style.scss')
    .pipe(plumber({errorHandler: onError}))
    .pipe(sass({
      errLogToConsole: true,
      includePaths: ['scss'],
      onError: onError
    }))
    .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(gulp.dest('assets/css'))
    .pipe(minifyCSS())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('assets/css'))
    .pipe(browserSync.reload({stream: true}));

});

gulp.task('deploy', function() {
  return gulp.src('_site/**/*')
    .pipe(ghPages());
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
  gulp.watch(['_scss/**/*.scss', '_includes/**/*.scss'], ['sass', 'jekyll-rebuild']);
  gulp.watch(['*.html', '_layouts/*.html', '_includes/**/*.html', '_posts/*'], ['jekyll-rebuild']);
});

gulp.task('copy', function() {
    gulp.src(['_site/**/*'])
        .pipe(gulp.dest('docs'))
});
/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);

// Push to production
gulp.task('production', ['watch', 'minify-css', 'minify-html', 'copy'])
