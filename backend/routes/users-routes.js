const express = require('express');
const router = express.Router();
const {
  getUsers,
  // getUser,
  createUser,
  // deleteUser,
  // updateUser,
  loginUser,
  logoutUser
} = require('../controllers/usersController');
const loginAuth = require('../middleware/login-auth');

// GET all users (for testing only)
router.get("/", getUsers);

// // GET a single user (user's homepage)
// router.get("/:id", getUser)

// CREATE a new user
router.post("/createUser", createUser);

// // DELETE a user
// router.delete("/:id", deleteUser);

// //UPDATE a user
// router.patch("/:id", updateUser);

// LOGIN a user
router.post('/login', loginUser);

// LOGOUT a user
router.get('/logout', logoutUser);

// CHECK if user is logged in
router.get('/loggedIn', loginAuth);

module.exports = router;
