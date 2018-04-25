'use strict';
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './app.js',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader' },
      { test: /\.css/, loader: ['style-loader', 'css-loader']}
    ]
  }
};
