/**
 * This code called before mocha will run tests in order to define sinon chai feature
 */
const chai = require('chai');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
