const express = require("express");
const router = express.Router();

// GET all beers
router.get("/", (req, res) => {
  res.json({ mssg: "GET all beers" });
});

// GET a single beer
router.get("/:id", (req, res) => {
  res.json({ mssg: "GET a single beer" });
});

// POST a single beer
router.post("/", (req, res) => {
  res.json({ mssg: "POST a single beer" });
});

// DELETE a single beer
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a single beer" });
});

// UPDATE a single beer
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a single beer" });
});

module.exports = router;
