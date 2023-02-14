const { Ingredient } = require("../models");
const httpStatus = require("http-status");
const db = ("../db/conn")

const create = async (req, response) => {
    try {
        let db_connect = db.getDb("ingredientsList");
        let myObj = {
            id: req.body.id,
            name: req.body.name,
            remarks: req.body.remarks,
            histamine: req.body.histamine,
            otherAmines: req.body.otherAmines,
            liberator: req.body.liberator,
            blocker: req.body.blocker,
            compatibility: req.body.compatibility,
            yourCompatibility: req.body.yourCompatibility,
            category: req.body.category,
        };

        db_connect.collection("ingredientsList").insertOne(myObj, function (err, res) {
            if (err) throw err;
            response.json(res);
        });
    } catch (e) {
        console.error(e);
        response.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
};

const findAll = async (req, res) => {
    try {
      console.log(req.query);
      const result = await Ingredient.find(req.query).exec();
      res.json(result);
    } catch (e) {
      console.error(e);
      res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
  };


const updateOne = async (req, response) => {
    try {
      console.log(req.body);
      let db_connect = db.getDb("ingredientsList");
      let ingredientId = req.params.id;
      let newIngredient = { id: ingredientId ,
       $set: req.body }

      ;
  
      db_connect
        .collection("ingredientsList")
        .updateOne({ id: ingredientId }, newIngredient, function (err, res) {
          if (err) throw err;
          console.log("1 document updated");
          response.json(res);
        });
    } catch (e) {
      console.error(e);
      response.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  const deleteOne = async (req, response) => {
    try {
      let db_connect = db.getDb("ingredientsList");
      console.log(req.params);
      const ingredientId = req.params.id;
      console.log(ingredientId);

      db_connect.collection("ingredientsList").deleteOne(
        { id: ingredientId },
        function (err, res) {
          if (err) throw err;
          console.log("1 document updated");
          response.json(res);
        }
      );
    } catch (e) {
      console.error(e);
      res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  const findOne = async (req, res) => {
    try {
      const ingredientId = req.params.Id;
      const fetched = await Ingredient.findOne({ id: ingredientId });
      res.json(fetched);
    } catch (e) {
      console.error(e);
      res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  module.exports = {
    create,
    findAll,
    updateOne,
    deleteOne,
    findOne,
  };