const path = require('path');
var util = require('util');
const webpack = require('webpack');
var pkg = require('./package.json');
var jsBundle = path.join('js', util.format('[name].%s.js', pkg.version));

module.exports = {
  entry: {
    app: ['./word.jsx']
  },
  output: {
    path: path.resolve(pkg.config.buildDir),
    publicPath: '/',
    filename: jsBundle,
    pathinfo: false
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  }
};
