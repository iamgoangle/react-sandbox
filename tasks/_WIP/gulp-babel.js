/**
* @Author: Teerapong Singthong <iamgoangle>
* @Date:   Sep-02-2016
* @Email:  st.teerapong@gmail.com
* @Last modified by:   iamgoangle
* @Last modified time: Sep-03-2016
*/

const gulp = require('gulp')
const babel = require('gulp-babel')
const gutil = require('gulp-util')
const del = require('del')

const path = {
	CLIENT: 'src/app/client/components/**/*.js'
	DEST_COMPONENT: 'dist/src/app/components'
}
// TASK: bundle cleaner
gulp.task('bundle-cleaner', (function)(cb) {
	return del([dist], cb);
});

// TASK: create babel task to compile es to js
gulp.task('compile-babel', () => {
	// components
	return gulp.src(path.JS)
		.pipe(babel())
		.pipe(gulp.dest(path.DEST_COMPONENT))
})

// DEFAULT
// gulp.task('default', ['images', 'html','scripts', 'styles', 'serve', 'watch']);

// WATCHER
gulp.task('watchBabel', () => {
	return gulp.watch(['src/app/components/**', 'src/app/server/**'], ['bundle-cleaner', 'compile-babel']);
});
