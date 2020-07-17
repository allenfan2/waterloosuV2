const path = require('path')
const webpack = require("webpack")
const { merge } = require("webpack-merge")
const common = require('./webpack.common')
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = merge(common, {
    mode: "development",
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    devtool: "eval-source-map",
    module: {
        rules: [
            {
                test: /\.css$/,
                loaders: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ]
            },
            {
                test: /\.(scss|sass)$/,
                loaders: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ]
            }
        ]
    },
    devServer: {
        proxy: {
            '/api':'http://localhost:5000'
        },
        historyApiFallback: true,
        hot: true,
        port: 3000
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebPackPlugin({
            template: "./public/index.html"
        })
    ]
})