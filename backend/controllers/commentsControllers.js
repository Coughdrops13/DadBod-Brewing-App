const Comment = require("../models/commentModel");
const mongoose = require("mongoose");

// GET all comments
const getComments = async (req, res) => {
  const comments = await Comment.find({}).sort({ createdAt: -1 });;
}
// CREATE a comment

module.exports = {
  getComments
}