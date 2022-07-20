const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  getBeers,
  getBeer,
  createBeer,
  deleteBeer,
  updateBeer,
} = require('../controllers/beersControllers');

// GET all beers
router.get("/", getBeers);

// GET a single beer
router.get("/:id", getBeer);

// POST a single beer
router.post("/", auth, createBeer);

// DELETE a single beer
router.delete("/:id", auth, deleteBeer);

// UPDATE a single beer
router.patch("/:id", auth, updateBeer);

module.exports = router;
