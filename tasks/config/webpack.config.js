/**
* @Author: Teerapong Singthong <iamgoangle>
* @Date:   Sep-02-2016
* @Email:  st.teerapong@gmail.com
* @Last modified by:   iamgoangle
* @Last modified time: Sep-03-2016
*/

const root = require('app-root-path')
const webpack = require('webpack')
const path = require('path')

const ENTRY_DIR = path.resolve(__dirname, root.toString(), 'src/index.js')
const BUNDLE_DIR = path.resolve(__dirname, root.toString(), 'dist/src/app')

module.exports = {
	devtool: 'source-map',
	entry: [
		ENTRY_DIR
	],
	devServer: {
		hot: true,
		inline: true,
		progress: true
	},
	output: {
		path: BUNDLE_DIR,
		filename: 'bundle.js'
	},
	resolve: {
		root: [
			path.resolve(__dirname, 'node_modules'),
			path.resolve(__dirname, 'src')
		],
		extensions: ['', '.js', '.json']
	},
	// plugins: [
	// 	new webpack.optimize.OccurenceOrderPlugin(),
	// 	new webpack.NoErrorsPlugin()
	// ],
	module: {
		loaders: [{
			test: /\.(js)$/,
			exclude: /node_modules/,
			// cacheDirectory: true,
			loader: 'babel-loader'
		}, {
			test: /\.(jsx)$/,
			exclude: /node_modules/,
			// cacheDirectory: true,
			loader: 'babel-loader'
		}]
	}
}
