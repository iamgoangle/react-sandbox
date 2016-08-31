const gulp = require('gulp')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')
const minifyCss = require('gulp-minify-css')
const path = require('path')
const root = require('app-root-path')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')

const concat = function(a, b) {
	return a + '' + b;
}

const _path = {
	HOME: root,
	SOURCE: path.resolve(__dirname, root.toString(), './src/app/sass/styles.scss'),
	DEST: path.resolve(__dirname, root.toString(), './dist/src/app/css/'),
	DEST_CSS: path.resolve(__dirname, root.toString(), './dist/src/app/css/*.css')
}

const sassOptions = {
	errLogToConsole: true,
	outputStyle: 'expanded'
}

// TASK: minify-css
// gulp.task('minify-css', function() {
// 	gulp.src(_path.DEST_CSS)
// 	.pipe(cssmin())
// 	.pipe(rename({suffix: '.min'}))
// 	.pipe(_path.DEST)
// })

// TASK: build-sass
gulp.task('build-sass', function () {
	gulp.src(_path.SOURCE)
	.pipe(sourcemaps.init())
	.pipe(sass(sassOptions).on('error', sass.logError))
	.pipe(sourcemaps.write())
	.pipe(autoprefixer())
	.pipe(gulp.dest(_path.DEST))

	// minify css
	.pipe(cssmin())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest(_path.DEST))
})

// WATCH
gulp.task('watch-sass', ['build-sass'], function() {
	gulp.watch(_path.SOURCE, ['build-sass']);
	// gulp.watch(_path.DEST_CSS, ['minify-css']);
});
