const { Ingredient } = require("../models");
const httpStatus = require("http-status");
// const { response } = require("express");
const db = ("../db/conn");

const create = async (req, res) => {
  try {
    const result = await Ingredient.create(req.body)
    res.json(result);
  } catch (e) {
    console.error(e);
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
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


const updateOne = async (req, res) => {
  try {
    const ingredientId = req.params.id;
    const updated = await Ingredient.updateOne(
      { id: ingredientId },
      { $set: req.body }
    );
    res.json(updated);
  } catch (e) {
    console.error(e);
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
};

  const deleteOne = async (req, res) => {
    try {
      const ingredientId = req.params.id;
      const result = await Ingredient.deleteOne({ id: ingredientId })
      res.json(result);
    } catch (e) {
      console.error(e);
      res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  const findOne = async (req, res) => {
    try {
      const ingredientId = req.params.id;
      const fetched = await Ingredient.findOne({ id: ingredientId });
      res.json(fetched);
    } catch (e) {
      console.error(e);
      res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  // const addToList = (req, res) => {
  //   try {
  //     //get product by id
  //     //
  //   } catch (e) {
  //     console.error(e);
  //     res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  //   }
  // };

  module.exports = {
    create,
    findAll,
    updateOne,
    deleteOne,
    findOne,
  };