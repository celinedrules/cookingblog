require("../models/database.cjs");
const Category = require("../models/Category.cjs");
const Recipe = require("../models/Recipe.cjs");
const path = require('path');

/**
 * Fetches homepage data including categories, the latest recipes, and a limited number of recipes for each category.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object to return homepage data.
 */
exports.homepage = async (req, res) => {
    try {
        const limitNumber = 5; // Limit number of results for latest recipes and categories.
        const categories = await Category.find({}).limit(limitNumber);
        const latest = await Recipe.find({}).sort({_id: -1}).limit(limitNumber); // Get latest recipes.

        const distinctCategories = await Recipe.distinct('category'); // Fetch unique recipe categories.
        const food = {latest}; // Prepare data structure for categorized recipes.

        // Retrieve a limited number of recipes for each distinct category.
        const categoryPromises = distinctCategories.map(async (category) => {
            food[category.toLowerCase()] = await Recipe.find({category}).limit(limitNumber);
        });
        await Promise.all(categoryPromises); // Resolve all category promises concurrently.

        // Send the response with homepage data.
        res.json({
            title: "Cooking Blog - Home",
            categories: categories,
            food: food,
            message: "Welcome to the Cooking Blog!",
        });
    } catch (e) {
        res.status(500).send({message: e.message || "Error Occurred"});
    }
};

/**
 * Fetches and returns a limited list of recipe categories.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object containing category data.
 */
exports.exploreCategories = async (req, res) => {
    try {
        const limitNumber = 20; // Limit number of categories.
        const categories = await Category.find({}).limit(limitNumber);

        res.json({
            title: "Cooking Blog - Explore Categories",
            categories: categories,
            message: "Explore a wide range of categories!",
        });
    } catch (e) {
        res.status(500).send({message: e.message || "Error Occurred"});
    }
};

/**
 * Fetches and returns recipes based on the provided category.
 *
 * @param {Object} req - Express request object, including query parameters.
 * @param {Object} res - Express response object containing recipe data for the specified category.
 */
exports.getRecipeByCategory = async (req, res) => {
    try {
        const { category } = req.query; // Get category from query parameters.
        const recipes = await Recipe.find({category});
        res.json({recipes});
    } catch (e) {
        res.status(500).send({message: e.message || "Error Occurred"});
    }
};

/**
 * Fetches and returns a recipe by its unique ID.
 *
 * @param {Object} req - Express request object, with route parameters.
 * @param {Object} res - Express response object containing the requested recipe data.
 */
exports.getRecipe = async (req, res) => {
    try {
        const { id } = req.params; // Get recipe ID from route parameters.
        const recipe = await Recipe.findById(id);
        res.json(recipe);
    } catch (e) {
        res.status(500).json({message: e.message || "Error occurred"});
    }
};

/**
 * Searches for recipes using a text-based query and returns matching results.
 *
 * @param {Object} req - Express request object, containing the search query in the body.
 * @param {Object} res - Express response object with search results.
 */
exports.searchRecipe = async (req, res) => {
    try {
        const { query } = req.body; // Retrieve search query from request body.
        if (!query) {
            return res.status(400).json({message: "Query is required"});
        }

        // Perform text search on recipe documents.
        const recipes = await Recipe.find({
            $text: {$search: query}
        });

        res.json({
            title: "Cooking Blog - Search Results",
            recipes,
        });
    } catch (error) {
        res.status(500).json({message: "Error occurred during the search", error});
    }
};

/**
 * Fetches and returns the latest recipes in descending order.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object with the latest recipes.
 */
exports.exploreLatest = async (req, res) => {
    try {
        const limitNumber = 20; // Limit number of latest recipes.
        const recipes = await Recipe.find({}).sort({_id: -1}).limit(limitNumber);
        res.json(recipes);
    } catch (e) {
        res.status(500).json({message: e.message || "Error occurred"});
    }
};

/**
 * Fetches and returns a randomly selected recipe.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object with a random recipe.
 */
exports.randomRecipe = async (req, res) => {
    try {
        const count = await Recipe.countDocuments(); // Get total number of recipes.
        const random = Math.floor(Math.random() * count); // Generate random index.
        const recipe = await Recipe.findOne().skip(random); // Skip to random recipe.
        res.json(recipe);
    } catch (e) {
        res.status(500).json({message: e.message || "Error occurred"});
    }
};

/**
 * Handles submission of a new recipe, including image upload and saving recipe details to the database.
 *
 * @param {Object} req - Express request object, including recipe details and an optional image file.
 * @param {Object} res - Express response object confirming successful submission or an error message.
 */
exports.submitRecipe = async (req, res) => {
    try {
        let newImageName = "";

        // If an image file is included, handle the upload.
        if (req.files && req.files.image) {
            const imageUploadFile = req.files.image;
            newImageName = path.basename(imageUploadFile.name) + '_' + Date.now(); // Create unique file name.
            const uploadPath = path.resolve('./public/uploads/', newImageName);

            await imageUploadFile.mv(uploadPath); // Move image file to upload directory.
        } else {
            console.log('No files were uploaded!'); // Log if no file was uploaded.
        }

        // Create new recipe document with provided details and image name.
        const newRecipe = new Recipe({
            name: req.body.name,
            description: req.body.description,
            email: req.body.email,
            ingredients: req.body['ingredients[]'],
            category: req.body.category,
            image: newImageName || 'default-recipe.png' // Use default if no image provided.
        });

        await newRecipe.save(); // Save new recipe to the database.

        res.json({
            title: "Cooking Blog - Submit Recipe",
            message: "Recipe submitted successfully!"
        });
    } catch (e) {
        res.status(500).json({message: e.message || "Error occurred"});
    }
};


// async function updateRecipe(){
//     try{
//         const res = await Recipe.updateOne({name: 'New Recipe'}, { name: 'New Recipe Updated'});
//         res.n;
//         res.nModified;
//     } catch (e){
//         console.error("Error in updateRecipe", e);
//     }
// }

// async function deleteRecipe() {
//     try {
//         await Recipe.deleteOne({name: 'New Recipe'});
//     } catch (e) {
//         console.error("Error in updateRecipe", e);
//     }
// }