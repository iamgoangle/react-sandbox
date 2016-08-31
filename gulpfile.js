const gulp = require('gulp')
const requireDir = require('require-dir')
requireDir('./tasks')


// gulp.task('default', ['scripts', 'sass']);
gulp.task('dev-build', ['watch-sass'])
