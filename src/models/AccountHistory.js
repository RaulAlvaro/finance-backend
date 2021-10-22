import mongoose from 'mongoose';

const AccountHistorySchema = new mongoose.Schema({
  initAmount: {
    type: String,
  },

  endAmount: {
    type: String,
  },

  cutOff: {
    type: String,
  },

  account: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Account',
    },
  ],
});

module.exports = mongoose.model('AccountHistory', AccountHistorySchema);
