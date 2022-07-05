const mongoose = require("mongoose");

const Schema = mogoose.Schema;

const beerSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  variety: {
    type: String,
    required: true,
  },
  ABV: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  image: {
    data: Buffer,
    contentType: String,
    required: true,
  }
})