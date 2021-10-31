const AccountHistory = require('../models/AccountHistory');

class AccountHistoryService {
  async findAccountsHistory() {
    try {
      return await AccountHistory.find().populate('account');
    } catch (error) {
      throw new Error(
        'findAccountsHistory in AccountHistory service failed - ' + error
      );
    }
  }

  async findAccountHistory(id) {
    try {
      return await AccountHistory.findOne({ _id: id });
    } catch (error) {
      throw new Error(
        'findAccountHistory in AccountHistory service failed - ' + error
      );
    }
  }

  async createAccountHistory(account, initAmount, endAmount, cutOff) {
    try {
      return await AccountHistory.create({
        account,
        initAmount,
        endAmount,
        cutOff,
      });
    } catch (error) {
      throw new Error(
        'createAccountHistory in AccountHistory service failed - ' + error
      );
    }
  }

  async updateAccountHistory(id, data) {
    try {
      const accountHistory = await AccountHistory.findOne({ _id: id }).exec();
      await AccountHistory.update(
        { _id: accountHistory._id },
        { $set: { ...data } }
      );
      return await AccountHistory.findOne({ _id: id });
    } catch (error) {
      throw new Error(
        'updateAccountHistory in AccountHistory service failed - ' + error
      );
    }
  }

  async deleteAccountHistory(id) {
    try {
      const data = await AccountHistory.remove({ _id: id });
      if (data.ok) {
        return true;
      }
      return false;
    } catch (error) {
      throw new Error(
        'deleteAccountHistory in AccountHistory service failed - ' + error
      );
    }
  }
}

module.exports = AccountHistoryService;
