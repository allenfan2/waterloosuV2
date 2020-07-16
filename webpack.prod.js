const path = require('path')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const webpack = require("webpack")
const {merge} = require('webpack-merge')
const common = require('./webpack.common')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = merge(common,{
    mode: "production",
    output:{
        path: path.join(__dirname,'/build'),
        filename: 'bundle.[contentHash].js',
        chunkFilename: '[name].[chunkhash].js'
    },
    optimization: {
        minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()],
        splitChunks: {
            cacheGroups: {
                default: false,
                vendors: false,
                vendor: {
                    name: "vendor",
                    chunks: 'all',
                    test: /node_modules/
                }
            }
        }
    },
    devtool: "cheap-module-source-map",
    module: {
        rules:[
            {
                test: /\.css$/,
                loaders: [
                    {loader: MiniCSSExtractPlugin.loader},
                    {loader:'css-loader'},
                ]
            }
        ]
        // Add SASS later
    },
    plugins: [
        new MiniCSSExtractPlugin({filename: "[name].[contentHash].css"}),
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                removeComments: true
            }
        })
    ]
})