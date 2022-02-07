import { expect } from 'chai';

import { argumentDestructuring } from './argumentDestructuring';

describe('argumentDestructuring', function () {
  it('should not throw an error', function () {
    expect(argumentDestructuring()).to.eql('foo');
  });
});
