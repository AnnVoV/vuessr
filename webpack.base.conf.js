const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                ]
            }
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
}
