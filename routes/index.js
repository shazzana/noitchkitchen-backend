const express = require('express');
const userController = require('../controller/user-controller');
const ingredientController = require('../controller/ingredient-controller');

const router = express.Router();
router.post('/users', userController.createUser);
router.get('/users', userController.findAllUsers);
router.get('/users/:id', userController.findOneUserById);

router.get('/ingredients', ingredientController.findAllIngredients);

module.exports = router;