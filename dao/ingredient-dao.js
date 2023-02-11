const db = require('../db/db');

class IngredientDAO {
    async createIngredient(name, remarks, histamine, otherAmines, liberator, blocker, compatibility, yourCompatibility, category) {
        const [id] = await db('ingredients')
            .insert({
                name, 
                remarks, 
                histamine, 
                other_amines: otherAmines, 
                liberator, 
                blocker, 
                compatibility, 
                yourCompatibility, 
                category
            })
            .returning('id');
        
        return id;
    }

    async findAllIngredients() {
        return db('ingredients');
    }
}

module.exports = new IngredientDAO();