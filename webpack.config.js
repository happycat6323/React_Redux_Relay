var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var node_modules = path.resolve(__dirname, 'node_modules');

var APP_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = process.env.NODE_ENV === 'production' ? path.resolve(__dirname, 'dist') : path.resolve(__dirname, 'build');

var providePlugin = new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery',
    'root.jQuery': 'jquery'
});

var htmlWebpackPlugin = new HtmlWebpackPlugin({
    filename:'index.html',
    template:'index.tpl',
    inject:true
});

var extractTextPlugin = new ExtractTextPlugin('bundle.css');

var config = {
    entry: {
        app: process.env.NODE_ENV === 'production' ? [APP_DIR + '/index.js'] : ['webpack/hot/dev-server', APP_DIR + '/index.js']
    },
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react', 'stage-0']
            }
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: 'url-loader?limit=100000'
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.(otf|eot|svg|ttf|woff)\??/,
            loader: 'url-loader?limit=8192'
        }]
    },
    plugins: [
        providePlugin,
        htmlWebpackPlugin,
        extractTextPlugin,
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = config;
