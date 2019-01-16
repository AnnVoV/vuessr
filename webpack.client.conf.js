const merge = require('webpack-merge');
const base = require('./webpack.base.conf.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(base, {
    mode: 'production',
    entry: {
        client: './entry-client.js',
    },
    output: {
        filename: '[name].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
        })
    ]
});
