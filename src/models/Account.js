import mongoose from 'mongoose';
import TypeAccount from './TypeAccount';

const AccountSchema = new mongoose.Schema({
  name: {
    type: String,
  },

  amount: {
    type: String,
  },

  typeAccountId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TypeAccount',
  },
});

module.exports = mongoose.model('Account', AccountSchema);
