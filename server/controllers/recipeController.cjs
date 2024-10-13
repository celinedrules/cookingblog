require("../models/database.cjs");
const Category = require("../models/Category.cjs");

exports.homepage = async (req, res) => {
    try {
        const limitNumber = 5;
        const categories = await Category.find({}).limit(limitNumber);
        res.json({
            title: "Cooking Blog - Home",
            categories: categories,
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
        console.log("Categories fetched: ", categories);  // Debugging log

        res.json({
            title: "Cooking Blog - Explore Categories",
            categories: categories,
            message: "Explore a wide range of categories!",
        });
    } catch (e) {
        console.error("Error in exploreCategories:", e);  // Log the error
        res.status(500).send({ message: e.message || "Error Occurred" });
    }
};

// async function insertDummyCategoryData() {
//     try {
//         await Category.insertMany(
//             [
//                 {
//                     "name": "Thai",
//                     "image": "thai-food.jpg"
//                 },
//                 {
//                     "name": "American",
//                     "image": "american-food.jpg"
//                 },
//                 {
//                     "name": "Mexican",
//                     "image": "mexican-food.jpg"
//                 },
//                 {
//                     "name": "Indian",
//                     "image": "indian-food.jpg"
//                 },
//                 {
//                     "name": "Spanish",
//                     "image": "spanish-food.jpg"
//                 }
//             ]
//         )
//     } catch (e) {
//         console.log("err", +e)
//     }
// }
//
// insertDummyCategoryData()