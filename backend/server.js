require("dotenv").config();

// const cookieSession = require('cookie-session');
const express = require("express");
const mongoose = require("mongoose");
const beersRoutes = require("./routes/beers-routes");
const usersRoutes = require("./routes/users-routes");

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(`PATH:`, req.path, ` METHOD:`, req.method, `BODY:`, req.body);
  next();
});

// app.use(cookieSession({
//   name: 'session',
//   keys: ["key1"],
// })) 

// routes
app.use("/DadBod/beers", beersRoutes);
app.use("/DadBod/users", usersRoutes);

//connect server to db
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

