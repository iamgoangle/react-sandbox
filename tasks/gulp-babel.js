/**
 *	@author		Teerapong Singthong
 *
 *	@desc		Inspiration from
 *				https://github.com/akhaku/babel-webpack-react-starter-pack/blob/master/gulpfile.js
 */

import gulp from 'gulp'
import babel from 'gulp-babel'
import gutil from 'gulp-util'
import del from 'del'

const path = {
	CLIENT: 'src/app/client/components/**/*.js'
	DEST: 'dist/src/app/components/*.js'
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
		.pipe(gulp.dest(path.DEST))
})

// DEFAULT
// gulp.task('default', ['images', 'html','scripts', 'styles', 'serve', 'watch']);

// WATCHER
gulp.task('watchBabel', () => {
	return gulp.watch(['src/app/components/**', 'src/app/server/**'], ['bundle-cleaner', 'compile-babel']);
});
