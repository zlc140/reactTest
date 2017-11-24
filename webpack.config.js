var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve (dir) {
    return path.join(__dirname, '..', dir)
  }

  
module.exports = {
    entry:{
        app:['react-hot-loader/patch','webpack-hot-middleware/client?reload=true','./src/app.jsx'],
        vender:[
            'react','react-dom'
        ]
    },
    output: {
        publicPath:'/',
        filename:'[name]-[hash].js',
        path:__dirname + "/dist"
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
          '@': resolve('src')
        }
    },
    devServer:{
        hot:true,
        inline:true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader:'babel-loader'
                },
                exclude: /node_modules/
            },
            {
                test:/\.scss$/,
                use:[
                    "style-loader","css-loader","sass-loader"
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader','css-loader'
                ]
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
            }
        ]
    }
  
}