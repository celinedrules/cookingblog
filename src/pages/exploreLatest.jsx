import {useEffect, useState} from "react";
import RecipeCard from "../components/recipeCard.jsx";

const ExploreLatest = () => {
    const [recipes, setRecipes] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        fetch("/api/exploreLatest")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                if (data.length > 0) {
                    setRecipes(data);
                } else {
                    setErrorMessage("No latest recipes found.");
                }
            })
            .catch((error) => {
                console.error("Error fetching latest recipes:", error);
                setErrorMessage("An error occurred while fetching latest recipes.");
            });
    }, []);

    return (
        <div>
            <h1 className="search-title">Explore Latest Recipes</h1>
            <div className="search-results">
                {errorMessage ? (
                    <p>{errorMessage}</p>
                ) : (
                    recipes.length > 0 ? (
                        recipes.map((recipe, index) => (
                            <div key={index}>
                                <RecipeCard key={index} recipe={recipe}/>
                            </div>
                        ))
                    ) : (
                        <p>No recipes found</p>
                    )
                )}
            </div>
        </div>
    );
};

export default ExploreLatest;