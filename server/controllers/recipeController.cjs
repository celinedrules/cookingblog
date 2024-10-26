require("../models/database.cjs");
const Category = require("../models/Category.cjs");
const Recipe = require("../models/Recipe.cjs");
const path = require('path');


exports.homepage = async (req, res) => {
    try {
        const limitNumber = 5;
        const categories = await Category.find({}).limit(limitNumber);
        const latest = await Recipe.find({}).sort({_id: -1}).limit(limitNumber);
        const distinctCategories = await Recipe.distinct('category');
        const food = {latest};
        const categoryPromises = distinctCategories.map(async (category) => {
            food[category.toLowerCase()] = await Recipe.find({category}).limit(limitNumber);
        });

        await Promise.all(categoryPromises);

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

exports.exploreCategories = async (req, res) => {
    try {
        const limitNumber = 20;
        const categories = await Category.find({}).limit(limitNumber);
        console.log("Categories fetched: ", categories);

        res.json({
            title: "Cooking Blog - Explore Categories",
            categories: categories,
            message: "Explore a wide range of categories!",
        });
    } catch (e) {
        console.error("Error in exploreCategories:", e);  // Log the error
        res.status(500).send({message: e.message || "Error Occurred"});
    }
};

exports.getRecipeByCategory = async (req, res) => {
    try {
        const {category} = req.query;
        const recipes = await Recipe.find({category});
        res.json({recipes});
    } catch (e) {
        console.error("Error in getRecipeByCategory", e);
        res.status(500).send({message: e.message || "Error Occurred"});
    }
};

exports.getRecipe = async (req, res) => {
    try {
        const {id} = req.params;
        const recipe = await Recipe.findById(id);
        res.json(recipe);
    } catch (e) {
        console.error("Error in getRecipe:", e);
        res.status(500).json({message: e.message || "Error occurred"});
    }
};

exports.searchRecipe = async (req, res) => {
    try {
        const {query} = req.body; // Make sure this is received correctly
        if (!query) {
            return res.status(400).json({message: "Query is required"});
        }

        const recipes = await Recipe.find({
            $text: {$search: query}
        });

        res.json({
            title: "Cooking Blog - Search Results",
            recipes,
        });
    } catch (error) {
        console.error("Error during search:", error);
        res.status(500).json({message: "Error occurred during the search", error});
    }
};

exports.exploreLatest = async (req, res) => {
    try {
        const limitNumber = 20;
        const recipes = await Recipe.find({}).sort({_id: -1}).limit(limitNumber);
        res.json(recipes);
    } catch (e) {
        console.error("Error in exploreLatest:", e);
        res.status(500).json({message: e.message || "Error occurred"});
    }
};

exports.randomRecipe = async (req, res) => {
    try {
        const count = await Recipe.countDocuments();
        const random = Math.floor(Math.random() * count);
        const recipe = await Recipe.findOne().skip(random);
        res.json(recipe);
    } catch (e) {
        console.error("Error in randomRecipe:", e);
        res.status(500).json({message: e.message || "Error occurred"});
    }
};

exports.submitRecipe = async (req, res) => {
    try {
        let newImageName = "";

        if (req.files && req.files.image) {
            const imageUploadFile = req.files.image;
            newImageName = path.basename(imageUploadFile.name) + '_' + Date.now();
            const uploadPath = path.resolve('./public/uploads/', newImageName);

            await imageUploadFile.mv(uploadPath);
        } else {
            console.log('No files were uploaded!');
        }

        const newRecipe = new Recipe({
            name: req.body.name,
            description: req.body.description,
            email: req.body.email,
            ingredients: req.body['ingredients[]'],
            category: req.body.category,
            image: newImageName || 'default-recipe.png'
        });

        await newRecipe.save();

        res.json({
            title: "Cooking Blog - Submit Recipe",
            message: "Recipe submitted successfully!"
        });
    } catch (e) {
        console.error("Error in submitRecipe", e);
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