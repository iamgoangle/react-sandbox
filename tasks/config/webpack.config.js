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

const ENTRY_DIR = path.resolve(__dirname, root.toString(), 'src/app/index.js')
const BUNDLE_DIR = path.resolve(__dirname, root.toString(), 'dist/src/app')

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
		ENTRY_DIR
	],
	devServer: {
		hot: true,
		inline: true,
		progress: true,
		port: 3000
	},
	output: {
		path: BUNDLE_DIR,
		publicPath: '/',
		filename: 'bundle.js'
	},
	resolve: {
		root: [
			path.resolve(__dirname, root.toString(), 'node_modules')
		],
		extensions: ['', '.js', '.json']
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			cacheDirectory: true,
			loader: 'babel-loader'
		}, {
			test: /\.jsx$/,
			exclude: /node_modules/,
			cacheDirectory: true,
			loader: 'babel-loader'
		}]
	}
}
