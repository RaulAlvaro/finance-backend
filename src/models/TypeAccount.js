const mongoose = require('mongoose');

const TypeAccountSchema = new mongoose.Schema({
  name: {
    type: String,
  },

  color: {
    type: String,
  },
});

module.exports = mongoose.model('TypeAccount', TypeAccountSchema);
