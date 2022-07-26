const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  getComments,
  createComment,
} = require('../controllers/commentsControllers');

// GET all comments
router.get('/', getComments);

// CREATE a comment
router.post('/newComment', createComment);

module.exports = router;