const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: ["./client/index.js"],
	output: {
		path: path.resolve(__dirname, "build"),
		publicPath: "/",
		filename: "bundle.js",
	},
	mode:'development',
	devServer: {
		port: 8080,
		// contentBase: path.resolve(__dirname, 'build'),
		publicPath: "/build/",
		proxy: {
			'/': {
        target: 'http://localhost:3000/',
        secure: false,
      },
		},
		hot: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './client/index.html',
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		rules: [
			{
				test: /\.jsx?/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"],
					},
				},
			},
			{
				test: /\.(css|scss)$/,
				exclude: /node_modules/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},
};
