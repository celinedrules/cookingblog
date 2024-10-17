import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import RecipeList from "../components/recipeList.jsx";

const CategoryPage = () => {
    const {categoryName} = useParams(); // Extract category name from URL
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch(`/api/recipes?category=${categoryName}`)
            .then(response => response.json())
            .then(data => setRecipes(data.recipes))
            .catch(error => console.error("Error fetching category data:", error));
    }, [categoryName]);

    return (
        <div>
            <h1>{categoryName} Recipes</h1>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><Link to="/categories">Categories</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">{categoryName} Recipes</li>
                </ol>
            </nav>
            <RecipeList recipes={recipes} categoryName={categoryName} />
        </div>
    );
};

export default CategoryPage;