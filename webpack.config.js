/*Configuando webpack*/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	/*Configuração do nome do aquivo e ond vai salvar*/
	entry: {
		'app': path.resolve(__dirname, 'app')
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'build')
	},
	/*Modules -> criando regras*/
	module: {
		rules: [
		{
			test: /\.jsx?/,
			loader: 'babel-loader',
			options: {
				presets: ['es2015','react']
			},
		},
		{
			test: /\.css*/,
			use: [
					'style-loader',
			 		'css-loader' 
			 	]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: require('html-webpack-template'),
			title: 'hello world',
			appMountId: 'app'
		}),
	],
	resolve: {
		extensions: ['.jsx', '.js']
	}
}