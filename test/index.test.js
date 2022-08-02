const { expect } = require('chai');
const { it } = require('mocha');
const didShowMessage = require('../index');

it('check if true', () => {
  const check = expect(didShowMessage).to.be.false;
  return check;
});
