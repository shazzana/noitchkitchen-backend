/*
    Routers are responsible to document APIs
*/
const path = require("path");
const express = require("express");

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const app = express();
const { router: IngredientRouter } = require("./ingredient-router");
const db = require("../db/conn");

// Middleware
app.use(cors(corsOptions)); // Use this after the variable declaration
app.use(express.json());

// Routers
// app.use("/auth", AuthRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the root directory");
});

// Endpoints
app.use("/", IngredientRouter);

app.use(express.static("public"));

// Start server
app.listen(process.env.PORT, () => {
  // perform a database connection when server starts
  db.connectToServer(function(err) {
    if (err) console.error(err);
  });
  console.log("Listening to...", process.env.PORT);
});

