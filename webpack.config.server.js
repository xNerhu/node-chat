const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

module.exports = (env, argv) =>
  merge.smart(baseConfig, {
    target: 'node',
    entry: './src/server',

    output: {
      path: __dirname,
      filename: 'server.bundle.js',
    },
  });
