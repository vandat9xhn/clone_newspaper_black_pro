//
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

// vendor
const VENDOR_LIBS = ['react', 'react-dom', 'react-router-dom', 'axios'];

//
const devServer = {
    port: 8000,
    open: false,
    stats: 'minimal',
    disableHostCheck: true,
    historyApiFallback: true,
    overlay: true,
    inline: true,
    compress: true,
    contentBase: '/',
};

//
const is_prod = process.env.ENVIRONMENT === 'production';
// const is_prod = true;

// 
const config = {
    //
    entry: {
        app: './src/index.js',
        vendor: VENDOR_LIBS,
    },
    //
    output: {
        filename: 'static/js/[name].js',
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
    },
    //
    devtool: 'source-map',
    //
    module: {
        rules: [
            {
                use: ['babel-loader'],
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
            },

            {
                use: [
                    is_prod ? MiniCssExtractPlugin.loader : 'style-loader',
                    { 
                        loader: 'css-loader', 
                        options: { sourceMap: true },
                    },
                    { loader: 'sass-loader' },
                ],
                test: /\.(c|sa|sc)ss$/,
            },

            {
                loader: 'file-loader',
                test: /\.(png|svg|jpe?g|gif|woff2?|eot|ttf|wav|mp3|mp4|ico)$/,
                options: {
                    outputPath: 'static/images_icons',
                },
            },
        ],
    },

    //
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'static/css/[contenthash].min.css',
        }),

        new HtmlWebpackPlugin({
            template: 'src/index.html',
            // favicon: 'image/favicon.svg',
        }),

        new CleanWebpackPlugin(),

        new Dotenv({
            path: '.env',
        }),
    ],

    performance: {
        hints: false,
    },

    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },

    devServer,

    mode: is_prod ? 'production' : 'development',
};

module.exports = config;
