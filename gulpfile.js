const gulp = require('gulp');
const path = require('path');
const log = require('fancy-log');
const fs = require('file-system');
const replace = require('gulp-replace');
const flatten = require('gulp-flatten');
const tap = require('gulp-tap');
const search = require('gulp-search');
const cp = require('child_process');
const del = require('del');
const rename = require('gulp-rename');
const browserSync = require('browser-sync');
const notify = require('gulp-notify');
const through = require('through2');
const stylus = require('gulp-stylus');
const mixer = require('./gulp-mixer');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
const minifyCSS = require('gulp-minify-css');
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const sourcemaps = require('gulp-sourcemaps');
const babelify = require('babelify');
const uglify = require('gulp-uglify');
const gulpAtomic = require('./gulp-atomic');


const messages = {
	jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build',
	cssError: '<span style="color: grey">CSS SYNTAX</span> SCSS build error'

};

var onError = function(err) {
	let lineNumber = (err.lineNumber) ? 'LINE ' + err.lineNumber + ' -- ' : '';
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
    let report = '';
    // let chalk = gutil.colors.bgMagenta.white;
    // Pretty reporting for easier spotting
    report += 'TASK:' + ' [' + err.plugin + ']\n';
    report += 'ISSUE:' + ' ' + err.message + '\n';
    if (err.lineNumber) { report += 'LINE:' + ' ' + err.lineNumber + '\n'; }
    if (err.fileName) { report += 'FILE:' + ' ' + err.fileName + '\n'; }
    console.log(report);
    // Prevent the 'watch' task from stopping
    this.emit('end');
};

gulp.task('clean', function() {
	return del([
		'_includes/atomic/index.html',
		]);
})

gulp.task('imports', ['clean'], function(){
	return gulp.src('_scss/*.scss')
			.pipe(mixer('style.scss'))
			.pipe(gulp.dest('_scss/'));
});

gulp.task('sass', ['clean', 'imports'], function () {
	return gulp.src('_scss/style.scss')
			.pipe(plumber({errorHandler: onError}))
			.pipe(sass({
				errLogToConsole: true,
				includePaths: ['scss', './node_modules'],
				onError: onError
			}))
			.pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
			.pipe(gulp.dest('assets/css'))
			.pipe(minifyCSS())
			.pipe(rename('style.min.css'))
			.pipe(gulp.dest('assets/css'))
			.pipe(browserSync.reload({stream: true}));

});

gulp.task('scripts', () => {
  return browserify({debug:true, entries: ['_js/_main.js']})
    .transform(babelify, {
     	presets: ['env'],
    	global: true,
  		ignore: /\/node_modules\/(?!@material\/)/ } )
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./assets/js/'));
});

gulp.task('atomic', ['clean', 'imports', 'sass'], () => {
	const src = [
    '_includes/*/**/*.html', // all html files in _includes sub-folders and their transitive sub-folders
    '!_includes/base/**'     // excluding those in _includes/base
  ]
  return gulp.src(src)
    .pipe(gulpAtomic('index.html'))
    .pipe(gulp.dest('_includes/atomic'))
})

gulp.task('jekyll-build', ['clean', 'imports', 'sass', 'scripts', 'atomic', 'scripts'], function (done) {
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
    .on('close', done);
});


gulp.task('browser-sync', ['jekyll-build'], function () {
	browserSync({
		server: {
			baseDir: '_site'
		}
	});
});
gulp.task('watch', ['browser-sync'], function () {
	gulp.watch(['_scss/**/*.scss', '!_scss/style.scss' ], ['jekyll-rebuild']);
	gulp.watch(['*.html', '_layouts/*.html', '_includes/**/*.html', '_posts/*', '!_includes/atomic/index.html'], ['jekyll-rebuild']);
	gulp.watch(['_js/*.js'], ['scripts', 'jekyll-rebuild']);
});

gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
	browserSync.reload();
});

gulp.task('default', ['browser-sync', 'watch']);
