import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import RecipeList from "../components/recipeList.jsx";
import Breadcrumb from "../components/breadcrumb.jsx";

const CategoryPage = () => {
    const {categoryName} = useParams();
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
            <Breadcrumb currentPage={categoryName} Recipes/>
            <RecipeList recipes={recipes} categoryName={categoryName} />
        </div>
    );
};

export default CategoryPage;