var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.config')
var ExtractTextPlugin  = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin')


var webpackConfig = merge(baseWebpackConfig, {
    devtool:'',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new HtmlWebpackPlugin({
            filename: config.build.index,
            template: 'index.html',
            inject: true,
            minify: {
              removeComments: true,
              collapseWhitespace: true,
              removeAttributeQuotes: true
              // more options:
              // https://github.com/kangax/html-minifier#options-quick-reference
            },
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: 'dependency'
          }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
              warnings: false,
              drop_debugger: true,
              drop_console: true
            },
            sourceMap: true
          }),
        new ExtractTextPlugin('style.css') //分离CSS和JS文件
    ]
})
module.exports = webpackConfig