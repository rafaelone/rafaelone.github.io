/*Configuando webpack*/
const path = require('path');

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
				presets: ['es2015']
			},
		},
		{
			test: /\.pug/,
			loader: 'pug-loader'
		},
		{
			test: /\.styl*/,
			use: [
					'style-loader',
			 		'css-loader', 
			 		'stylus-loader'
			 	]
		}
		]
	}
}