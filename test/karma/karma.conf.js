const wpConfig = require('./webpack.karma.config');

module.exports = function setup(config) {
  config.set({
    browsers: ['PhantomJS'],

    singleRun: false,

    autoWatch: true,

    frameworks: [
      'mocha',
      'chai',
      'sinon',
      'sinon-chai'
    ],

    files: [
      'karma.tests.entry.js',
    ],

    preprocessors: {
      'karma.tests.entry.js': [
        'webpack',
        // 'sourcemap',
      ],
    },

    reporters: [
      'mocha',
    ],

    webpack: wpConfig,

    webpackServer: {
      noInfo: true,
    },
    
  });
};
