const ingredientDAO = require('../dao/ingredient-dao');

class IngredientService {
    createIngredient(ingredientDTO) {
        const { name, remarks, histamine, otherAmines, liberator, blocker, compatibility, yourCompatibility, category } = ingredientDTO
        return ingredientDAO.createIngredient(name, remarks, histamine, otherAmines, liberator, blocker, compatibility, yourCompatibility, category);
    }

    findAllIngredients(ingredientDTO) {
        const { name, remarks, histamine, otherAmines, liberator, blocker, compatibility, yourCompatibility, category } = ingredientDTO
        return ingredientDAO.findAllIngredients(name, remarks, histamine, otherAmines, liberator, blocker, compatibility, yourCompatibility, category);
    }
}

module.exports = new IngredientService;