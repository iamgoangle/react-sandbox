/**
* @Author: Teerapong Singthong <iamgoangle>
* @Date:   Sep-02-2016
* @Email:  st.teerapong@gmail.com
* @Last modified by:   iamgoangle
* @Last modified time: Sep-03-2016
*/

const gulp = require('gulp')
const gutil = require('gulp-util')

const webpack = require('webpack')
const WebpackDevServer = require("webpack-dev-server")
const webpackConfig = require("./config/webpack.config.js")

const root = require('app-root-path')
const path = require('path')

// defines _path global variable
const _path = {
	HOME: root,
	SOURCE: path.resolve(__dirname, root.toString(), './src/app/components/**/*.js')
}

// ========================================================================== //
// ======================== Production deployment =========================== //
// ========================================================================== //

// gulp.task("webpack:build-prod", function(callback) {
// 	// modify some webpack config options
// 	var myConfig = Object.create(webpackConfig)
// 	myConfig.plugins = myConfig.plugins.concat(
// 		new webpack.DefinePlugin({
// 			"process.env": {
// 				// This has effect on the react lib size
// 				"NODE_ENV": JSON.stringify("production")
// 			}
// 		}),
// 		new webpack.optimize.DedupePlugin(),
// 		new webpack.optimize.UglifyJsPlugin()
// 	)
//
// 	// run webpack
// 	webpack(myConfig, function(err, stats) {
// 		if(err) throw new gutil.PluginError("webpack:build", err)
// 		gutil.log("[webpack:build]", stats.toString({
// 			colors: true
// 		}))
// 		callback()
// 	})
// })

// Production build
// gulp.task("build-prod", ["webpack:build"])

// modify some webpack config options
const myDevConfig = Object.create(webpackConfig)
myDevConfig.devtool = "sourcemap"
myDevConfig.debug = true

// create a single instance of the compiler to allow caching
const devCompiler = webpack(myDevConfig)

gulp.task("webpack:build-dev", function(callback) {
	// run webpack
	devCompiler.run(function(err, stats) {
		if(err) throw new gutil.PluginError("webpack:build-dev", err)
		gutil.log("[webpack:build-dev]", stats.toString({
			colors: true
		}))
		callback()
	})
})

gulp.task("webpack-dev-server", function(callback) {
	// modify some webpack config options
	const myConfig = Object.create(webpackConfig)
	myConfig.devtool = "eval"
	myConfig.debug = true

	console.log(myConfig);

	// Start a webpack-dev-server
	new WebpackDevServer(webpack(myConfig), {
		// publicPath: "/" + myConfig.output.publicPath,
		stats: {
			colors: true
		},
		hot: true,
		historyApiFallback: true
	}).listen(8080, "localhost", function(err) {
		if(err) throw new gutil.PluginError("webpack-dev-server", err)
		gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html")
	})
})

// The development server (the recommended option for development)
gulp.task("default", ["webpack-dev-server"])
gulp.task("watch-build-dev", ["webpack-dev-server"], function() {
	gulp.watch(['../src/app/components/**/*.js'], ["webpack-dev-server"])
})

// gulp.task("watch-build-dev", ["webpack:build-dev"], function() {
// 	gulp.watch(['../src/app/components/**/*.js'], ["webpack:build-dev"])
// })
