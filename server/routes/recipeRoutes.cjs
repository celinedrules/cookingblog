const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController.cjs");

/**
 * Sets up API routes for recipe-related operations, mapping each route to a specific controller method.
 * Provides endpoints to retrieve, submit, and search for recipes.
 *
 * @module RecipeRouter
 * @returns {express.Router} Express router object configured with recipe-related routes.
 */

// Route to fetch the homepage information, which may include general details or a welcome message.
/**
 * GET /api
 * @summary Retrieves homepage data.
 * @route GET /api
 * @returns {Object} Homepage information as defined in the recipe controller.
 */
router.get("/api", recipeController.homepage);

// Route to fetch all recipe categories available.
/**
 * GET /api/categories
 * @summary Retrieves a list of all recipe categories.
 * @route GET /api/categories
 * @returns {Array} Array of category objects as defined in the recipe controller.
 */
router.get("/api/categories", recipeController.exploreCategories);

// Route to fetch recipes by a specific category.
/**
 * GET /api/recipes
 * @summary Retrieves recipes filtered by category.
 * @route GET /api/recipes
 * @returns {Array} Array of recipe objects belonging to a specific category.
 */
router.get("/api/recipes", recipeController.getRecipeByCategory);

// Route to fetch a specific recipe by its unique ID.
/**
 * GET /api/recipe/:id
 * @summary Retrieves a single recipe by ID.
 * @route GET /api/recipe/{id}
 * @param {string} id - Unique identifier of the recipe.
 * @returns {Object} Recipe object with specified ID.
 */
router.get("/api/recipe/:id", recipeController.getRecipe);

// Route to fetch the latest recipes added to the collection.
/**
 * GET /api/exploreLatest
 * @summary Retrieves the most recently added recipes.
 * @route GET /api/exploreLatest
 * @returns {Array} Array of latest recipe objects.
 */
router.get("/api/exploreLatest", recipeController.exploreLatest);

// Route to fetch a randomly selected recipe.
/**
 * GET /api/randomRecipe
 * @summary Retrieves a random recipe.
 * @route GET /api/randomRecipe
 * @returns {Object} Randomly selected recipe object.
 */
router.get("/api/randomRecipe", recipeController.randomRecipe);

// Route to submit a new recipe to the collection.
/**
 * POST /api/submitRecipe
 * @summary Submits a new recipe.
 * @route POST /api/submitRecipe
 * @param {Object} recipe - Recipe data to be submitted, as defined by the controller.
 * @returns {Object} Confirmation or error message.
 */
router.post("/api/submitRecipe", recipeController.submitRecipe);

// Route to search for recipes based on keywords or criteria.
/**
 * POST /api/search
 * @summary Searches for recipes based on search criteria.
 * @route POST /api/search
 * @param {Object} searchQuery - Search query containing keywords or parameters.
 * @returns {Array} Array of recipes matching the search criteria.
 */
router.post("/api/search", recipeController.searchRecipe);

// Export the router to make it available in the main app or other modules.
module.exports = router;
