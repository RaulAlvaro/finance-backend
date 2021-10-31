const Account = require('../models/Account');

class accountService {
  async findAccounts() {
    try {
      return await Account.find().populate('typeAccount').exec();
    } catch (error) {
      throw new Error('findAccounts in Account service failed - ' + error);
    }
  }

  async findAccount(id) {
    try {
      return await Account.findOne({ _id: id });
    } catch (error) {
      throw new Error('findAccount in Account service failed - ' + error);
    }
  }

  async createAccount(name, amount, typeAccount) {
    try {
      return await Account.create({ name, amount, typeAccount });
    } catch (error) {
      throw new Error('createAccount in Account service failed - ' + error);
    }
  }

  async updateAccount(id, data) {
    try {
      const account = await Account.findOne({ _id: id }).exec();
      await Account.update({ _id: account._id }, { $set: { ...data } });
      return await Account.findOne({ _id: id });
    } catch (error) {
      throw new Error('updateAccount in Account service failed - ' + error);
    }
  }

  async deleteAccount(id) {
    try {
      const data = await Account.remove({ _id: id });
      if (data.ok) {
        return true;
      }
      return false;
    } catch (error) {
      throw new Error('deleteAccount in Account service failed - ' + error);
    }
  }
}

module.exports = accountService;
