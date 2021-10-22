import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema({
  description: {
    type: String,
  },

  amount: {
    type: String,
  },

  date: {
    type: String,
  },

  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
  },

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  },
});

module.exports = mongoose.model('Payment', PaymentSchema);
