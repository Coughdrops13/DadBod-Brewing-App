const Comment = require("../models/commentModel");
const mongoose = require("mongoose");

// GET all comments
const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({}).sort({ createdAt: -1 });;

    res.status(200).json(comments);
  }catch (error) {
    res.status(500).json({ errorMessage: "Something went wrong internally: getComments." })
    console.log("ERROR: ", error);
  }
}
// CREATE a comment
const createComment = async (req, res) => {
  const { author_id, beer_id, content } = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(author_id)) {
      return res.status(404).json({ error: "Invalid author." });
    }

    if (!mongoose.Types.ObjectId.isValid(beer_id)) {
      return res.status(404).json({ error: "Invalid beer." });
    }

    const comment = await Comment.create({ author_id, beer_id, content });

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