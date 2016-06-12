/* eslint-disable strict */
'use strict';
/* eslint-enable strict */

const path = require('path');
const webpack = require('webpack');
const MemoryFS = require('memory-fs');
const deasync = require('deasync');
const fs = require('fs');
const config = require('../webpack.mocha.config.js');
const filter = require('./compiler.files.filter');

/**
 * The mocha require to do transform in order to run tests.
 * This compiler uses webpack in order to transform ES6 code to ES5.
 *
 * Specify isBuildInMemory parameter in 'webpack.mocha.config.js' to 'true' to push
 * output to 'tmp' folder
 */
require.extensions['.js'] = function compile(module, filename) {
  if (filter(filename)) {
    return module._compile(fs.readFileSync(filename, 'utf8'), filename);
  }

  const buildConfig = Object.assign({}, config);
  buildConfig.output.filename = path.parse(filename).base;
  buildConfig.entry = {
    target: filename,
  };
  const outPath = path.join(buildConfig.output.path, buildConfig.output.filename);

  const compiler = webpack(buildConfig);
  const out = buildConfig.isBuildInMemory ? new MemoryFS() : fs;
  compiler.outputFileSystem = buildConfig.isBuildInMemory ? out : compiler.outputFileSystem;

  let build = null;
  let done = false;
  /**
   * @private
   */
  compiler.run((err, stats) => {
    if (err) {
      console.error(err);
    } else {
      const jsonStats = stats.toJson();

      if (jsonStats.errors.length > 0) {
        console.log(jsonStats.errors);
      }

      if (jsonStats.warnings.length > 0) {
        console.log(jsonStats.warnings);
      }

      build = out.readFileSync(outPath, 'utf8');
    }

    done = true;
  });

  /**
   * @private
   */
  deasync.loopWhile(() => !done);

  return module._compile(build, filename);
};
