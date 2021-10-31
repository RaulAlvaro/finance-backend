const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;
const faker = require('faker');

const TypeAccountModel = require('../../src/models/TypeAccount');
const TypeAccount = require('../../src/services/typeAccount');
const TypeAccountService = new TypeAccount();

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
