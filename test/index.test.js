const { expect } = require('chai');
const didShowMessage = require('../index');

it('check if true', () => {
  expect(didShowMessage).to.be.true;
});
