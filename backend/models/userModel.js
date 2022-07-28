const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  favoriteBeers: {
    type: Array,
    required: false,
  }
});

module.exports = mongoose.model('User', userSchema);