const path = require('path')
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    // entry: './src/index.js',
    entry: {
        'hello': './src/hello.js',
        'dog': './src/dog.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: ''
    },
    mode: 'production',
    optimization : {
        splitChunks: {
            chunks: 'all',
            minSize: 3000  // create separate bundle for any common lib above 3 kb
        }
    },

    module: {
        rules: [
            {
                test: /\.(jpg|png)$/,
                type: 'asset/resource'
            },
            {
                test: /\.txt/,
                type: 'asset/source'
            },
            {
                test: /\.css$/,
                // use: ['style-loader', 'css-loader']
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.scss$/,
                // use: ['style-loader', 'css-loader', 'sass-loader']
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    }, 
    
    plugins: [
        // new TerserPlugin(),
        new MiniCssExtractPlugin({
            filename: 'Styles.[contenthash].css'
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Hello Webpack',
            filename: 'hello.html',
            chunks: ['hello'],
            meta: {
                description: 'Some description of the page'
            },
            minify: false
        }),
        new HtmlWebpackPlugin({
            title: 'Hello Webpack',
            filename: 'dog.html',
            chunks: ['dog'],
            meta: {
                description: 'Some description of the page'
            },
            minify: false
        })
    ]
};
