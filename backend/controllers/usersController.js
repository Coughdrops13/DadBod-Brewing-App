require("dotenv").config();

const User = require("../models/userModel");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validateEmail = require('../helpers/validateEmail');

// -----------------------------GET all users (for testing purposes)----------------------

const getUsers = async (req, res) => {
  const users = await User.find({});

  if (!users) {
    return res.status(400).json({ error: error.message });
  }
  res.status(200).json(users);
};

// -----------------------------GET a single user (user's homepage)-----------------------

// const getUser = async (req, res) => {
//   const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({ error: "That user does not exist." });
//   }

//   const user = await User.findById(id);

//   res.status(200).json(user);
// };

// --------------------------------CREATE a new user account-------------------------------

const createUser = async (req, res) => {
  const { userName, email, password, passwordVerify } = req.body;

  try {
    
    // userName, email, password, and verification validation
    if (!userName || !email || !password || !passwordVerify) {
      return res
        .status(400)
        .json({ errorMessage: "Please enter all required fields." });
    }
    if (userName.length < 4) {
      return res
        .status(400)
        .json({errorMessage: "Username must be at least 4 characters long."})
    }
    if (!validateEmail(email)) {
      return res
      .status(400)
      .json({ errorMessage: "Please enter a valid email address." }); 
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

    const newUser = new User({
      userName,
      email,
      passwordHash,
    });

    const savedUser = await newUser.save();

    // create and sign jsonwebtoken
    const token = jwt.sign(
      {
        user: savedUser,
      },
      process.env.JWT_SECRET
    );

    // send the token in an http-only cookie
    res
      .cookie("token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ savedUser })
      .send();

    // res.status(200).json({ savedUser });
  } catch (error) {
    console.log("CREATE USER ERROR", error);
    return res.status(500).json({ error: error.message });
  }
};

// --------------------------------DELETE a user account---------------------------------

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

// ----------------------------------UPDATE a user account------------------------------------

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

// ------------------------------------Login a user------------------------------------------
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validate

    if (!email || !password) {
      return res
        .status(400)
        .json({ errorMessage: "Please enter all required fields." });
    }

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res
        .status(401)
        .json({ errorMessage: "Incorrect email or password." });
    }

    const passwordIsCorrect = await bcrypt.compare(
      password,
      existingUser.passwordHash
    );

    if (!passwordIsCorrect) {
      return res
        .status(401)
        .json({ errorMessage: "Incorrect email or password." });
    }

    // sign web token
    const token = jwt.sign(
      {
        user: existingUser,
      },
      process.env.JWT_SECRET
    );

    res
      .cookie("token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ existingUser })
      .send();
  } catch (error) {
    console.log("LOGIN ERROR", error);
    return res.status(500).json({ error: error.message });
  }
};

// ------------------------------------Logout a user------------------------------------------
const logoutUser = (req, res) => {
  res
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
    })
    .status(200)
    .json({ message: "User logged out." })
    .send();
};

// --------------------------------------Exports--------------------------------------------

module.exports = {
  getUsers,
  // getUser,
  createUser,
  // deleteUser,
  // updateUser,
  loginUser,
  logoutUser,
};
