require("dotenv").config();

const express = require("express");
const beersRoutes = require("./routes/beers");

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(`PATH:`, req.path, ` METHOD:`, req.method);
});

// routes
app.get("/api/beers", beersRoutes);

// listen for requests
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}!`);
});
