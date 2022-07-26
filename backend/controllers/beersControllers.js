const Beer = require("../models/beerModel");
const mongoose = require("mongoose");

// GET all beers
const getBeers = async (req, res) => {
  try {
    const beers = await Beer.find({}).sort({ title: 1 });
  
    res.status(200).json(beers);
  } catch (error) {
    res.status(500).json({ errorMessage: "Something went wrong internally: getBeers." })
    console.log("ERROR: ", error);
  }
};

// GET a single beer
const getBeer = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such beer." });
    }
  
    const beer = await Beer.findById(id);
  
    if (!beer) {
      return res.status(404).json({ error: "No such beer." });
    }
  
    res.status(200).json(beer);
  } catch (error) {
    res.status(500).json({ errorMessage: "Something went wrong internally: getBeer." })
    console.log("ERROR: ", error);
  }
};
// CREATE a new beer
const createBeer = async (req, res) => {
  const { title, variety, abv, description } = req.body;

  try {
    const beer = await Beer.create({ title, variety, abv, description});
    res.status(200).json(beer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// DELETE a single beer
const deleteBeer = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such beer to be deleted." });
    }
  
    const beer = await Beer.findOneAndDelete({ _id: id });
  
    if (!beer) {
      return res.status(404).json({ error: "No such beer to be deleted." });
    }
  
    res.status(200).json(beer);
  }catch (error) {
    res.status(500).json({ errorMessage: "Something went wrong internally: deleteBeer." })
    console.log("ERROR: ", error);
  }
};
// UPDATE a single beer
const updateBeer = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Cannot update non-existant beer." });
    }
  
    const beer = await Beer.findOneAndUpdate({ _id: id }, { ...req.body });
  
    if (!beer) {
      return res.status(404).json({error: "Cannot update non-existant beer."})
    }
    
    res.status(200).json(beer);
  }catch (error) {
    res.status(500).json({ errorMessage: "Something went wrong internally: updateBeer." })
    console.log("ERROR: ", error);
  }
}

module.exports = {
  getBeers,
  getBeer,
  createBeer,
  deleteBeer,
  updateBeer,
};
