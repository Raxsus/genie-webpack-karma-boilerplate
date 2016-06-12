const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: 'inline-source-map',
  entry: [
    './app/index.js'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'build.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.jsx', '.scss', '.js', '.json'],
    modulesDirectories: [
      'node_modules',
      path.resolve(__dirname, './node_modules')
    ]
  },
  module: {
    loaders: [
      {
        test: /(\.js|\.jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
           presets:['es2015', 'stage-0', 'react']
        }
      }
    ]
  }
};
