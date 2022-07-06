const express = require("express");
const {
  getBeers,
  getBeer,
  createBeer,
  deleteBeer,
  updateBeer,
} = require('../controllers/beersControllers');
const router = express.Router();

// GET all beers
router.get("/", getBeers);

// GET a single beer
router.get("/:id", getBeer);

// POST a single beer
router.post("/", createBeer);

// DELETE a single beer
router.delete("/:id", deleteBeer);

// UPDATE a single beer
router.patch("/:id", updateBeer);

module.exports = router;
