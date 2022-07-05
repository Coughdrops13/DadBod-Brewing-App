const Beer = require("../models/beerModel");
const mongoose = require("mongoose");

// GET all beers
const getBeers = async (req, res) => {
  const beers = await Beer.find({}).sort({ title: 1 });

  res.status(200).json(beers);
};

// GET a single beer
const getBeer = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "No such beer."})
  }

  const beer = await Beer.findById(id);

  if (!beer) {
    res.status(404).json({ error: "No such beer." });
  }

  res.status(200).json(beer);
};
// CREATE a new beer
// DELETE a single beer
// UPDATE a single beer

module.exports = {
  getBeers,
  getBeer,
  createBeer,
  deleteBeer,
  updateBeer,
};
