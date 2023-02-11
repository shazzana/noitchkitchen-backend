const ingredientService = require('../service/ingredient-service');

class IngredientController {
    async createIngredient(req, res) {
        try {
            const id = await ingredientService.createIngredient(req.body);
            res.status(201).json(id);
        } catch (err) {
            console.error(err);
            res.status(500).json('Something went wrong');
        }
    }

    async findAllIngredients(req, res) {
        try {
            const ingredients = await ingredientService.findAllIngredients(req.body);
            res.status(201).json(ingredients);
        } catch (err) {
            console.error(err);
            res.status(500).json('Something went wrong');
        }
    }
}

module.exports = new IngredientController();