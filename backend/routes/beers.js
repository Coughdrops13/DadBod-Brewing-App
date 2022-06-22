const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ mssg: "Get all beers" });
});

module.exports = router;