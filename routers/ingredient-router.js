const {
    create,
    findAll,
    findOne,
    updateOne,
    deleteOne,
  } = require("../controllers/ingredient-controller");
  const express = require("express");
  const router = express.Router();
  
  // endpoints here
  router.post("/ingredient", create);
  router.get("/ingredient", findAll);
  router.get("/ingredient/:id", findOne);
  router.put("/ingredient/:id", updateOne);
  router.delete("/ingredient/:id", deleteOne);
  
  module.exports = {
    router,
  };
  