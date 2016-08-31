/**
 *	@author		Teerapong Singthong
 *
 */

const path = require('path')
const webpack = require('webpack')

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'./app'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: '/',
		filename: 'bundle.js'
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
		}, {
			test: /\.scss$/,
			loaders: ["style", "css", "sass"]
		}]
	}
}
