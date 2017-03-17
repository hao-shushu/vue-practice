var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/dist/',
		filename: 'build.js'
	},
	module: {
	    rules: [
	        {
	            test: /\.vue$/,
	            use: ["vue-loader"]
	        },
	        {
	        	test: /\.css$/,
	        	use: ["vue-style-loader", "css-loader"]
	        },
			{
			    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
			    use: [{
			        loader: "url-loader",
			        options: {
			            limit: 10000,
			            name: 'images/[name].[hash:7].[ext]'    // 将图片都放入images文件夹下，[hash:7]防缓存
			        }
			    }]
			},
			{
			    test: /\.js$/,
			    use: "babel-loader",
			    include: [path.resolve(__dirname, 'src')]
			}
	    ]
	}
};
