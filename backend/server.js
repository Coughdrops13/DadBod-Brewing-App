require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const beersRoutes = require("./routes/beers-routes");
const usersRoutes = require("./routes/users-routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// express app
const app = express();

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.use((req, res, next) => {
  console.log(`PATH:`, req.path, ` METHOD:`, req.method, `BODY:`, req.body);
  next();
});

// routes
app.use("/DadBod/beers", beersRoutes);
app.use("/DadBod/users", usersRoutes);
app.use(express.static("public"));

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
