const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { type } = require('os');

module.exports = {
    mode: 'development',
    entry:'./src/ui.js',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'TodoThat - A Todo List App',
            template: path.resolve(__dirname, 'src/index.html'),
        }),
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules:[
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};