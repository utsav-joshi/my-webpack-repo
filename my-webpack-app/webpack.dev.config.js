const path = require('path')
// const TerserPlugin = require('terser-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    // entry: './src/index.js',
    entry: {
        'hello': './src/hello.js',
        'dog': './src/dog.js'
    },
    output: {
        // filename: 'bundle.js',
        filename: '[name].bundle.js',
        // filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: ''
    },
    mode: 'development',
    devServer: {
        port: 9000,
        static: {
            directory: path.resolve(__dirname, './dist')
        },
        devMiddleware: {
            index: 'index.html',
            writeToDisk: true
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
                use: ['style-loader', 'css-loader']
                // use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
                // use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    }, 
    
    plugins: [
        // new TerserPlugin(),
        // new MiniCssExtractPlugin({
        //     filename: 'Styles.css'
        //     // filename: 'Styles.[contenthash].css'
        // }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Hello Webpack',
            filename: 'hello-webpack.html',
            chunks: ['hello'],
            meta: {
                description: 'Some description of the page'
            }
        }),
        new HtmlWebpackPlugin({
            title: 'dog image',
            filename: 'dog-image.html',
            chunks: ['dog'],
            meta: {
                description: 'Some description of the page'
            }
        })
    ]
};
