const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
  },

  color: {
    type: String,
  },
});

module.exports = mongoose.model('Category', CategorySchema);
