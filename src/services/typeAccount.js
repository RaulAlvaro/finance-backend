import TypeAccount from '../models/TypeAccount';

export default {
  async findTypeAccounts() {
    try {
      return await TypeAccount.find();
    } catch (error) {
      throw new Error(
        'findTypeAccounts in TypeAccount service failed - ' + error
      );
    }
  },

  async findTypeAccount(id) {
    try {
      return await TypeAccount.findOne({ _id: id });
    } catch (error) {
      throw new Error(
        'findTypeAccount in TypeAccount service failed - ' + error
      );
    }
  },

  async createTypeAccount(name, color) {
    try {
      return await TypeAccount.create({ name, color });
    } catch (error) {
      throw new Error(
        'createTypeAccount in TypeAccount service failed - ' + error
      );
    }
  },

  async updateTypeAccount(id, data) {
    try {
      const typeAccount = await TypeAccount.findOne({ _id: id }).exec();
      await TypeAccount.update({ _id: typeAccount._id }, { $set: { ...data } });
      return await TypeAccount.findOne({ _id: id });
    } catch (error) {
      throw new Error(
        'updateTypeAccount in TypeAccount service failed - ' + error
      );
    }
  },

  async deleteTypeAccount(id) {
    try {
      const data = await TypeAccount.remove({ _id: id });
      if (data.ok) {
        return true;
      }
      return false;
    } catch (error) {
      throw new Error(
        'deleteTypeAccount in TypeAccount service failed - ' + error
      );
    }
  },
};
