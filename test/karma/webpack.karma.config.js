const path = require('path'); 
console.log(path.resolve(__dirname,'..', '..',  'node_modules'));
module.exports = {

  // devtool: 'inline-source-map',

  resolveLoader: {
    modulesDirectories: ['node_modules'],
    moduleTemplates: ['*-loader', '*'],
    extensions: ['', '.js', '.jsx'],
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: path.resolve(__dirname, '..', '..', 'node_modules'),
        query: {
          presets:['es2015', 'stage-0', 'react']
        }
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
    ],
  },

  externals: {
    'cheerio': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  }
};
