import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const Recipe = () => {
    const {id} = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetch(`/api/recipe/${id}`)
            .then((response) => response.json())
            .then((data) => setRecipe(data))
            .catch((e) => console.error("Error fetching recipe:", e));
    }, [id]);

    if (!recipe)
        return <p>Loading...</p>

    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">{recipe.name}</li>
                </ol>
            </nav>
            <div className="recipe-container">
                <div className="recipe-section recipe-image-md">
                    <img
                        src={`/uploads/${recipe.image}`}
                        className="recipe-image"
                        loading="lazy"
                        alt={recipe.name}
                    />
                </div>

                <div className="recipe-details">
                    <div className="recipe-container">
                        <div className="recipe-section">
                            <h1 className="recipe-title">{recipe.name}</h1>
                        </div>
                        <div className="recipe-section recipe-category">
                            <i className="bi bi-tag"></i>{recipe.category}
                        </div>
                        <div className="recipe-section recipe-directions">
                            <h4 className="subheading">Directions</h4>
                            {recipe.description}
                        </div>
                    </div>

                    <div className="recipe-container recipe-container-ingredients">
                        <div className="recipe-section">
                            <h4 className="subheading">Ingredients</h4>
                            <ul className="recipe-ingredients recipe-ingredients-flush">
                                {recipe.ingredients.map((ingredient, index) => (
                                    <li className="ingredient-item" key={index}>{ingredient}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Recipe;