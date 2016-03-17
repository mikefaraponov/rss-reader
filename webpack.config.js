'use strict';

const path = require('path'),
    NODE_ENV = process.env.NODE_ENV || 'development',
    webpack = require('webpack'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: [ 'babel-polyfill' , __dirname + '/client/index.jsx'],
    output: {
        path: __dirname + '/static',
        filename: 'dist.js'
    },
    devtool: NODE_ENV == 'development' ? 'cheap-inline-module-source-map' : null,
    watch: NODE_ENV == 'development',
    watchOptions: {
        aggregateTimeout: 100
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss', '.css'],
        fallback: path.join(__dirname, "node_modules")
    },
    resolveLoader: {
        root: path.join(__dirname, "node_modules")
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: "babel",
            exclude: /node_modules/,
            query: {
                plugins: ['transform-decorators-legacy'],
                presets: ['es2015', 'stage-0', 'react']
            }
        }, 
        {
            test: /\.sass$/,
            loader: ExtractTextPlugin.extract("style-loader", "css?minimize!sass?indentedSyntax")
        },
        {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css?minimize")
        }]
    },
    plugins: [
        new ExtractTextPlugin("dist.css"),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new webpack.ProvidePlugin({React: 'react'})
    ]
};

if(NODE_ENV == 'production') {

    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    )

}
