import mongoose from 'mongoose';
import typeAccount from './TypeAccount';

const AccountSchema = new mongoose.Schema({
  name: {
    type: String,
  },

  amount: {
    type: String,
  },

  typeAccount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TypeAccount',
  },
});

module.exports = mongoose.model('Account', AccountSchema);
