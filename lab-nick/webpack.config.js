'use strict';

// const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

const config = {
  mode: 'development', //production
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.js$/, loader: 'babel-loader'}
    ]
  }
};

module.exports = config;