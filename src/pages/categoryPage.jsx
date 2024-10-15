import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const CategoryPage = () => {
    const { categoryName } = useParams(); // Extract category name from URL
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
            <div className="recipe-list">
                {recipes.map((recipe, index) => (
                    <div key={index} className="recipe-card">
                        <img src={`/img/${recipe.image}`} alt={recipe.name} />
                        <h3>{recipe.name}</h3>
                        <p>{recipe.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryPage;