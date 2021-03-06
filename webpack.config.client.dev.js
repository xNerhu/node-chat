const { HotModuleReplacementPlugin } = require('webpack');
const { smart } = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { resolve } = require('path');

const baseConfig = require('./webpack.config.base');

const PORT = 3000;

const config = smart(baseConfig, {
  devtool: 'eval-source-map',
  mode: 'development',
  output: {
    hotUpdateChunkFilename: 'hot/hot-update.js',
    hotUpdateMainFilename: 'hot/hot-update.json',
    path: resolve(__dirname, 'build'),
    filename: '[name].bndle.js',
    publicPath: '...',
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

  plugins: [
    new CleanWebpackPlugin(['build']),
    new HotModuleReplacementPlugin(),
  ],
});

const appConfig = smart(config, {
  entry: {
    app: ['react-hot-loader/patch', './src/client'],
  },

  devServer: {
    port: PORT,
    stats: {
      colors: true,
    },
    watchOptions: {
      aggregateTimeout: 300,
      ignored: /node_modules/,
      poll: 100,
    },
    hot: true,
    inline: true,
    historyApiFallback: true,
  },
});

module.exports = [appConfig];
