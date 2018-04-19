'use strict';

// const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

const config = {
  mode: 'development', // production
  entry: './main.js', // name of java script file
  output: {
    path: path.resolve(__dirname, './dist'), // puts dist in current working directory
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.js$/, loader: 'babel-loader'},
      {test: /\.css/, loader: [
        'style-loader', 'css-loader'
      ]},
    ]
  }
};

module.exports = config;