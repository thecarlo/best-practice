import { expect } from 'chai';
import { cloneDeep, omit } from 'lodash';

import fixturePayload from '@fixtures/payload.json';
import { Product } from '@interfaces/Product';

import { argumentDestructuring } from './argumentDestructuring';

describe('argumentDestructuring', function () {
  it('should not throw an error', function () {
    const clonedPayload = cloneDeep(fixturePayload);

    const payloadWithOmittedProperty = omit(clonedPayload, ['key']) as Product;

    expect(argumentDestructuring(payloadWithOmittedProperty)).to.eql('AU01');
  });
});
