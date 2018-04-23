'use strict';

const path = require('path');

const config = {
  mode: 'development', // development or production
  entry: './app.js', // name of java script file
  output: {
    path: path.resolve(__dirname, './dist'), // puts dist in current working directory
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.js$/, loader: 'babel-loader'},
      {test: /\.css$/, loader: [
        'style-loader', 'css-loader' // The order of these matters!
      ]}
    ]
  }
};

module.exports = config;