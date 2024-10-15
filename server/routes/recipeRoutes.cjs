const express = require("express")
const router = express.Router()
const recipeController = require("../controllers/recipeController.cjs")

router.get("/api", recipeController.homepage);
router.get("/api/categories", recipeController.exploreCategories);
router.get("/api/recipes", recipeController.getRecipeByCategory);

module.exports = router;