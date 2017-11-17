var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.config')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin  = require('extract-text-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var webpackDevServer = require('webpack-dev-server');

module.exports = merge(baseWebpackConfig, {
    devtool:'eval-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new webpack.HotModuleReplacementPlugin(),//热加载插件
        new HtmlWebpackPlugin({
            template:'index.html',
            inject:true
        }),
        // new ExtractTextPlugin('style.css'), //分离CSS和JS文件
        // new OpenBrowserPlugin({ url: 'http://localhost:8069' })
    ]
  
})