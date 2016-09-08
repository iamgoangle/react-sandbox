/**
* @Author: Teerapong Singthong <iamgoangle>
* @Date:   Sep-02-2016
* @Email:  st.teerapong@gmail.com
* @Last modified by:   Teerapong Singthong
* @Last modified time: Sep-03-2016
*/

const gulp = require('gulp')
const requireDir = require('require-dir')
requireDir('./tasks')

// gulp.task('default', ['scripts', 'sass']);
// gulp.task('dev-build', ['watch-sass', 'watch-build-dev'])
gulp.task('dev-build', ['watch-sass'])
