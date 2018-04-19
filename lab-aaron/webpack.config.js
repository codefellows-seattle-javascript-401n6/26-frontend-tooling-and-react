'use strict';

const path = require('path');

const config = {
  mode: 'development',
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.js$/, loader: 'babel-loader'},
      {test: /\.js$/, loader: [
        'style-loader', 'css-loader'//must be this order!
      ]},
    ]
  }
};

module.exports = config;