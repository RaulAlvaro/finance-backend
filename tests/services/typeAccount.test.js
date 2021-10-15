import sinon from 'sinon';
import { expect } from 'chai';
import faker from 'faker';
import TypeAccountModel from '../../src/models/TypeAccount';
import TypeAccountService from '../../src/services/typeAccount';

describe('typeAccountService', () => {
  describe('create', () => {
    it('should create a new typeAccount', async () => {
      const stubValue = {
        name: faker.finance.account(),
        color: faker.commerce.color(),
      };
      sinon.stub(TypeAccountModel, 'create').returns(stubValue);
      const typeAccount = await TypeAccountService.createTypeAccount(
        stubValue.name,
        stubValue.color
      );
      expect(typeAccount.name).to.equal(stubValue.name);
      expect(typeAccount.color).to.equal(stubValue.color);
    });
  });
});
