const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
  mode: 'development',
  entry: "./app.js",
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  plugins: [new HtmlWebpackPlugin()],
  module: {
    rules: [
      {test: /\.js$/, loader: "babel-loader"},
      {test: /\.scss/, loader: [
        "style-loader", "css-loader" 
      ]}
    ]
  }
}

module.exports = config;