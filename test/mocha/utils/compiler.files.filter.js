/**
 * This filter needed to skip files that should not be parsed such as 'node_modules' files or
 * files defined with required option in mocha.opts file
 *
 * @param filename - file name to be checked
 * @returns {boolean} - true if file should be skipped
 */
module.exports = function filter(filename) {
  // TODO: file name may be os specified
  return /node_modules/.test(filename) || /test\\mocha\\spec/.test(filename);
};
