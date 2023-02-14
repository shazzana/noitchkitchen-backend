const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    remarks: {
        type: String,
        required: false,
    },
    histamine: {
        type: Boolean,
        required: false,
    },
    other_amines: {
        type: Boolean,
        required: false,
    },
    liberator: {
        type: Boolean,
        required: false,
    },
    blocker: {
        type: Boolean,
        required: false,
    },
    compatibility: {
        type: String,
        required: false,
    },
    your_compatibility: {
        type: String,
        required: false,
    },
    category: {
        type: String,
        required: true,
    },
})

const Ingredient = mongoose.model("Ingredient", ingredientSchema);

module.exports = Ingredient;