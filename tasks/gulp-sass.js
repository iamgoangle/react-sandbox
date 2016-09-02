const gulp = require('gulp')
const sass = require('gulp-sass')
const del = require('del')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')
const path = require('path')
const root = require('app-root-path')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')

// defines _path global variable
const _path = {
	HOME: root,
	SOURCE: path.resolve(__dirname, root.toString(), './src/app/sass/styles.scss'),
	DEST: path.resolve(__dirname, root.toString(), './dist/src/app/css/'),
	DEST_CSS: path.resolve(__dirname, root.toString(), './dist/src/app/css/*')
}

// sass option
const sassOptions = {
	errLogToConsole: true,
	outputStyle: 'expanded'
}

// TASK: clean css in dest
gulp.task('clean-css', function () {
	return del([_path.DEST_CSS]).then(paths => {
		console.log('Files and folders that would be deleted:\n', paths.join('\n'))
	})
})

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
	gulp.watch(_path.SOURCE, ['build-sass'])
})
