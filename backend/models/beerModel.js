const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const beerSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  variety: {
    type: String,
    required: true,
  },
  abv: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  img: {
    data: Buffer,
    contentType: String,
    required: true,
  }
});

module.exports = mongoose.model('Beer', beerSchema);