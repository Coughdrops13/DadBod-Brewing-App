const Comment = require("../models/commentModel");
const mongoose = require("mongoose");

// GET all comments
const getComments = async (req, res) => {
  const { id } = req.params;
  console.log("BEER_ID FROM PARAMS", id)
  try {
    const comments = await Comment.find({ beer_id: id}).sort({ createdAt: -1 });;

    res.status(200).json(comments);
  }catch (error) {
    res.status(500).json({ errorMessage: "Something went wrong internally: getComments." })
    console.log("ERROR: ", error);
  }
}
// CREATE a comment
const createComment = async (req, res) => {
  const { beer_id, content } = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(beer_id)) {
      return res.status(404).json({ error: "Invalid beer." });
    }

    const comment = await Comment.create({ beer_id, content });

    res.status(200).json(comment);
  }catch (error) {
    res.status(500).json({ errorMessage: "Something went wrong internally: createComment." })
    console.log("ERROR: ", error);
  }
}

module.exports = {
  getComments,
  createComment,
}