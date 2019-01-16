const merge = require('webpack-merge');
const base = require('./webpack.base.conf.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(base, {
    target: 'node',
    mode: 'production',
    entry: {
        server: './entry-server.js',
    },
    output: {
        libraryTarget: 'commonjs2',
        filename: '[name].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.ssr.html',
            filename: 'index.ssr.html',
            files: {
                js: 'client.js'
            },
            excludeChunks: ['server'] // 这个干啥的
        })
    ]
});
