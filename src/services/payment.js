import Payment from '../models/Payment';

export default {
  async findPayments() {
    try {
      return await Payment.find().populate(['account', 'category']);
    } catch (error) {
      throw new Error('findPayments in Payment service failed - ' + error);
    }
  },

  async findPayment(id) {
    try {
      return await Payment.findOne({ _id: id });
    } catch (error) {
      throw new Error('findPayment in Payment service failed - ' + error);
    }
  },

  async createPayment(description, amount, date, account, category) {
    try {
      return await Payment.create({
        description,
        amount,
        date,
        account,
        category,
      });
    } catch (error) {
      throw new Error('createPayment in Payment service failed - ' + error);
    }
  },

  async updatePayment(id, data) {
    try {
      const payment = await Payment.findOne({ _id: id }).exec();
      await Payment.update({ _id: payment._id }, { $set: { ...data } });
      return await Payment.findOne({ _id: id });
    } catch (error) {
      throw new Error('updatePayment in Payment service failed - ' + error);
    }
  },

  async deletePayment(id) {
    try {
      const data = await Payment.remove({ _id: id });
      if (data.ok) {
        return true;
      }
      return false;
    } catch (error) {
      throw new Error('deletePayment in Payment service failed - ' + error);
    }
  },
};
