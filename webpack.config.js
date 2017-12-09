const path = require('path');
const webpack = require('webpack');
const copyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './js/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                  use: ['css-loader', 'sass-loader']
                })
            }, { 
                test: /\.(svg|gif|png|jpg|jpeg)$/, 
                loader: 'file-loader?name=img/[name].[ext]' 
            }
        ]
    },
     plugins: [
        new ExtractTextPlugin("[name].css"),
        new copyWebpackPlugin([
            { from: "./img", to: "img" },
            { from: "./index.html", to: "" } 
        ]),
    ]
};