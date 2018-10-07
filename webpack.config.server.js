const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

module.exports = (env, argv) =>
  merge.smart(baseConfig, {
    target: 'node',
    entry: './src/server',
    mode: 'development',
    output: {
      path: __dirname,
      filename: 'server.bundle.js',
    },

    externals: {
      'socket.io': 'require("socket.io")',
      express: 'require("express")',
      mongoose: 'require("mongoose")',
      bcrypt: 'require("bcrypt")',
    },
  });
