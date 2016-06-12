const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {

  target: 'node',

  output: {
    path: path.join(__dirname, 'tmp'),
    libraryTarget: 'commonjs',
  },

  isBuildInMemory: true,

  devtool: 'inline-source-map',

  resolve: {
    extensions: ['', '.js'],
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
      },
      {
        test: /sinon\.js$/,
        loader: 'imports?define=>false,require=>false',
      },
    ],
    noParse: [
      /sinon\.js$/,
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['coverage', 'tmp'], {
      root: __dirname,
      verbose: true,
      dry: false,
    }),
    new webpack.ProvidePlugin({
      sinon: 'sinon/pkg/sinon',
    }),
  ],
};
