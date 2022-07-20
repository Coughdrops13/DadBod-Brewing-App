const User = require("../models/userModel");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// GET all users (for testing purposes)
const getUsers = async (req, res) => {
  const users = await User.find({});

  if (!users) {
    return res.status(400).json({ error: error.message });
  }
  res.status(200).json(users);
};

// // GET a single user (user's homepage)
// const getUser = async (req, res) => {
//   const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({ error: "That user does not exist." });
//   }

//   const user = await User.findById(id);

//   res.status(200).json(user);
// };

// CREATE a new user account
const createUser = async (req, res) => {
  const { email, password, passwordVerify } = req.body;

  try {
    // email validation
    if (!email || !password || !passwordVerify) {
      return res
        .status(400)
        .json({ errorMessage: "Please enter all required fields." });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ errorMessage: "Password must be at least 6 character long." });
    }
    if (password !== passwordVerify) {
      return res
        .status(400)
        .json({ errorMessage: "Password and verification do not match." });
    }

    const existingUser = await User.findOne({ email });
    // another way to write this would be: const existingUser = User.findOne({ email: email })

    if (existingUser) {
      return res
        .status(400)
        .json({ errorMessage: "User with that email already exists." });
    }

    // hash the password
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    // save a new user account to the database

    const newUser = new User ({
      email,
      passwordHash,
    });

    const savedUser = await newUser.save();

    res.status(200).json({ savedUser });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// // DELETE a user account
// const deleteUser = async (req, res) => {
//   const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({ error: "No user with that ID exists." });
//   }

//   const user = await User.findOneAndDelete({ _id: id });

//   if (!user) {
//     return res
//       .status(404)
//       .json({ error: "Unable to delete non-existant user." });
//   }

//   res.status(200).json(user);
// };

// //UPDATE a user account
// const updateUser = async (req, res) => {
//   const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({ error: "No user with that ID exists." });
//   }

//   const user = await User.findOneAndUpdate({ _id: id }, { ...req.body });

//   if (!user) {
//     return res.status(404).json({ error: "Cannot update non-existant user." });
//   }

//   res.status(200).json(user);
// };

module.exports = {
  getUsers,
  // getUser,
  createUser,
  // deleteUser,
  // updateUser,
};
