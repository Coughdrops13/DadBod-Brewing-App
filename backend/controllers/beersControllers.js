const Beer = require("../models/beerModel");
const mongoose = require("mongoose");

import emptyFields from "../helpers/emptyFields";

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
const createBeer = async (req, res) => {
  const { title, variety, abv, description, img } = req.body;

  const emptyFieldsArray = emptyFields([title, variety, abv, img]);

  if (emptyFieldsArray.length > 0) {
    return res.status(400).json({error: "Please fill all required fields", emptyFieldsArray})
  }

  try {
    const beer = await Beer.create({ title, variety, abv, description, img });
    res.status(200).json(beer);
  } catch (error) {
    res.status(400).json({error: error.message})
  }
};
// DELETE a single beer
// UPDATE a single beer

module.exports = {
  getBeers,
  getBeer,
  createBeer,
  deleteBeer,
  updateBeer,
};
