const mongoose = require("mongoose");

/**
 * Defines the schema for a recipe in the database, specifying fields, types, and validation requirements.
 * Each recipe includes fields like `name`, `description`, `email`, `ingredients`, `category`, and `image`.
 *
 * @type {mongoose.Schema} The schema defining the Recipe model.
 */
const recipeSchema = new mongoose.Schema({
    // `name`: The name of the recipe, required to be a non-empty string.
    name: {
        type: String,               // Stored as a string.
        required: "This is required." // Error message if `name` is not provided.
    },

    // `description`: A brief description of the recipe, also required to be a non-empty string.
    description: {
        type: String,               // Stored as a string.
        required: "This is required." // Error message if `description` is not provided.
    },

    // `email`: Contact email associated with the recipe, required to be a non-empty string.
    email: {
        type: String,               // Stored as a string (typically an email format).
        required: "This is required." // Error message if `email` is not provided.
    },

    // `ingredients`: List of ingredients used in the recipe, stored as an array of strings.
    ingredients: {
        type: [String],             // Stored as an array of strings.
        required: "This is required." // Error message if `ingredients` array is not provided.
    },

    // `category`: The cuisine type of the recipe, chosen from predefined categories.
    category: {
        type: String,               // Stored as a string.
        enum: ["Thai", "American", "Mexican", "Indian", "Spanish", "Chinese"], // Only allows these values.
        required: "This is required." // Error message if `category` is not provided.
    },

    // `image`: URL or path to an image representing the recipe, required to be a non-empty string.
    image: {
        type: String,               // Stored as a string (URL or filepath).
        required: "This is required." // Error message if `image` is not provided.
    }
});

// Creates a text index on `name` and `description` to enable text search within these fields.
recipeSchema.index({ name: 'text', description: 'text' });

/**
 * Creates a Mongoose model for the `Recipe` collection in MongoDB using the `recipeSchema`.
 * This model enables CRUD operations on recipe documents.
 *
 * @module RecipeModel
 * @returns {mongoose.Model} Mongoose model for interacting with the Recipe collection in MongoDB.
 */
module.exports = mongoose.model("Recipe", recipeSchema);
