const mongoose = require("mongoose");

/**
 * Defines the schema for a category in the database, specifying the structure and validation rules.
 * Each category has a `name` and `image` field, both required.
 *
 * @type {mongoose.Schema} The schema defining the Category model.
 */
const categorySchema = new mongoose.Schema({
    // `name`: The name of the category, required to be a string and cannot be empty.
    name: {
        type: String,            // Specifies that the name should be stored as a string.
        required: "This is required." // Error message shown if `name` is missing.
    },

    // `image`: The image associated with the category, also required to be a string.
    image: {
        type: String,            // Specifies that the image should be stored as a string (e.g., URL or filename).
        required: "This is required." // Error message shown if `image` is missing.
    },
});

/**
 * Creates a Mongoose model for the `Category` collection in MongoDB using the `categorySchema`.
 * This model allows for the creation, retrieval, updating, and deletion of category documents.
 *
 * @module CategoryModel
 * @returns {mongoose.Model} Mongoose model for interacting with the Category collection in MongoDB.
 */
module.exports = mongoose.model("Category", categorySchema);
