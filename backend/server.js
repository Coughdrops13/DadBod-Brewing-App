require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const beersRoutes = require("./routes/beers");

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(`PATH:`, req.path, ` METHOD:`, req.method);
});

// routes
app.use("/api/beers", beersRoutes);

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log(`Connected to db and listening on port ${process.env.PORT}!`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

