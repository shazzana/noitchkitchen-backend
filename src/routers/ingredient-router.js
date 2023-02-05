const router = require('express-promise-router')();
const ingredientController = require('../controllers/ingredient-controller');

router.post('/ingredients', ingredientController.createIngredient);

module.exports = router;

