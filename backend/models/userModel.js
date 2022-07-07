const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  // password: {
  //   type: String,
  //   required: true,
  // },
  favoriteBeers: {
    type: Array,
    required: false,
  },
  mailingList: {
    type: Boolean,
    required: true,
  },
  admin: {
    type: Boolean,
    required: false,
  },
});

module.exports = mongoose.model('User', userSchema);