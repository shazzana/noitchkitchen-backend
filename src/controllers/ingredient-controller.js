const db = require("../config/database");

exports.createIngredient = async (req, res) => {
    const { name, remarks, histamine, other_amines, 
        liberator, blocker, compatibility, your_compatibility, 
        category } = req.body;
    const { rows } = await db.query(
        "INSERT INTO ingredients (name, remarks, histamine, other_amines, liberator, blocker, compatibility, your_compatibility, category) VALUES ('tapioca flour', null, false, false, false, false, 0, null, 'starch')",
        [name, remarks, histamine, other_amines, 
        liberator, blocker, compatibility, your_compatibility, category]
    );

    res.status(201).send({
        message: "Ingredient added successfully!",
        body: {
            ingredient: { name, remarks, histamine, other_amines, 
                liberator, blocker, compatibility, your_compatibility, category}
        },
    });
}