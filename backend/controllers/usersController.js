const User = require("../models/userModel");
const mongoose = require("mongoose");
const { restart } = require("nodemon");

// GET all users (for testing purposes)
const getUsers = async (req, res) => {
  const users = await User.find({});

  if (!users) {
    return res.status(400).json({ error: error.message });
  }
  res.status(200).json(users);
};

// GET a single user (user's homepage)
const getUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "That user does not exist." });
  }

  const user = await User.findById(id);

  res.status(200).json(user);
};

// CREATE a new user account
const createUser = async (req, res) => {
  const { userName, mailingList } = req.body;

  try {
    const user = await User.create({
      userName,
      mailingList,
      favoriteBeers: [],
    });
    res.status(200).json({ user });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// DELETE a user account
const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No user with that ID exists." });
  }

  const user = await User.findOneAndDelete({ _id: id });

  if (!user) {
    return res
      .status(404)
      .json({ error: "Unable to delete non-existant user." });
  }

  res.status(200).json(user);
};

//UPDATE a user account
const updateUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No user with that ID exists." });
  }

  const user = await User.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!user) {
    return res.status(404).json({ error: "Cannot update non-existant user." });
  }

  res.status(200).json(user);
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
};