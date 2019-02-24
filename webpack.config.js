var path = require('path');

module.exports = {
	// entry: {main: "src/index.js"},
    mode: 'development',
	devtool: 'inline-source-map',

    output: {
		path: path.resolve(__dirname, './dist'),
        filename: 'giza.js'
    },

    devServer: {
		host: '0.0.0.0',
		historyApiFallback: true,
		contentBase: './dist'
    }
};
