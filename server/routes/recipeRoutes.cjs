const express = require("express")
const router = express.Router()
const recipeController = require("../controllers/recipeController.cjs")

router.get("/api", recipeController.homepage);
router.post("/api/search", recipeController.searchRecipe);
router.get("/api/categories", recipeController.exploreCategories);
router.get("/api/recipes", recipeController.getRecipeByCategory);
router.get("/api/recipe/:id", recipeController.getRecipe);
router.get("/api/exploreLatest", recipeController.exploreLatest);
router.get("/api/randomRecipe", recipeController.randomRecipe);
//router.get("/api/submitRecipe", recipeController.submitRecipe);
router.post("/api/submitRecipe", recipeController.submitRecipeOnPost);


module.exports = router;