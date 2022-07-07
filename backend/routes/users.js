const express = require('express');
const {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
} = require('../controllers/usersController');
const router = express.Router();

// GET a single user (user's homepage)
router.get("/:id", getUser)

// CREATE a new user
router.post("/createUser", createUser);

// DELETE a user
router.delete("/:id", deleteUser);

//UPDATE a user
router.patch("/:id", updateUser);

// GET all users (for testing only)
router.get("/", getUsers);

module.exports = router;
