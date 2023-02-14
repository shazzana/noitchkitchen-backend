// Import dependencies
const mongoose = require("mongoose");
const Title = require("./title.js");
const Review = require("./review.js");

// Config
// const mongoURI = "mongodb://localhost:27017/learn";
const mongoURI = process.env.MONGO_URL;
const db = mongoose.connection;

// Connect
mongoose.connect(mongoURI, () => {
  console.log("Connection to Mongo DB established.");
});

// Helpful events
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected: ", mongoURI));
db.on("disconnected", () => console.log("mongo disconnected"));

// Export models
module.exports = {
  Title,
  Review,
};