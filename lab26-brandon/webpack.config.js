'use strict';

const path = require('path');

const config = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/main.jsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.s?css$/,
        loader: [
          'style-loader', 'css-loader'
        ]
      }
    ]
  }
};
module.exports = config;