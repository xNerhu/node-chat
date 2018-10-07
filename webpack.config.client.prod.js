const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { resolve } = require('path');
const baseConfig = require('./webpack.config.base');

const config = merge.smart(baseConfig, {
  devtool: 'source-map',
  mode: 'production',
  output: {
    path: resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.(png|gif|jpg|woff2|ttf|svg)$/,
        include: resolve(__dirname, 'src/client'),
        use: ['url-loader'],
      },
    ],
  },

  plugins: [new CleanWebpackPlugin(['build'])],
});

const appConfig = merge.smart(config, {
  entry: {
    app: ['./src/client'],
  },
});

module.exports = [appConfig];
