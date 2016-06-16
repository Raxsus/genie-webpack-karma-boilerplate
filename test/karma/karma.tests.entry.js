/**
 * This is need to find and build all tests files using webpack.
 */
// const context = require.context('../../app', true, /.+\.spec\.js$/);
const context = require.context('../../_components', true, /.+\.spec\.js$/);
context.keys().forEach(context);
