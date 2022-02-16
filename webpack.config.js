/* eslint-disable no-param-reassign */
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const webpack = require("webpack");
const dotenv = require("dotenv");
const fs = require("fs");



const env = dotenv.config().parsed;
const currentPath = path.join(__dirname);

const basePath = `${currentPath  }/.env`;

const envPath = `${basePath  }.${  env.ENVIRONMENT}`;

const finalPath = fs.existsSync(envPath) ? envPath : basePath;

const fileEnv = dotenv.config({ path: finalPath }).parsed;

const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
  return prev;
}, {});

module.exports = {
    entry: './src/index.jsx',
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        chunkFilename: '[name].bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            Components: path.resolve(__dirname, './src/components'),
            Constants: path.resolve(__dirname, './src/constants'),
            Pages: path.resolve(__dirname, './src/pages'),
            Styles: path.resolve(__dirname, './src/style'),
            Routes: path.resolve(__dirname, './src/routes'),
        },
    },
    devServer: {
        port: '3001',
        hot: true,
        watchFiles: ['./src/**'],
        historyApiFallback: true,
    },

    optimization: {
        minimize: true,
        runtimeChunk: true,
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                default: false,
                reactVendor: {
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    chunks: 'all',
                    name: 'react-vendor',
                    filename: 'assets/common.[chunkhash].js',
                    reuseExistingChunk: true,
                    enforce: true,
                    priority: 20,
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    filename: 'assets/vendor.[chunkhash].js',
                    reuseExistingChunk: true,
                    enforce: true,
                    priority: 10,
                },
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
                type: 'asset',
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin(envKeys),
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].css',
        }),
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin({
            // generateStatsFile: true,
            analyzerMode: 'disabled',
            generateStatsFile: true,
        }),
    ],
};
