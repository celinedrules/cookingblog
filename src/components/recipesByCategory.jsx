import RecipeCard from "./recipeCard.jsx";

const RecipesByCategory = ({categoryName, recipes = []}) => {
    return (
        <section className="latest">
            <div className="latest-title">
                <h2>{categoryName} Recipes</h2>
                <a href={`/categories/${categoryName}`}>View More</a>
            </div>
            <div className="latest-cards">
                {recipes.length > 0 ? (
                    recipes.map((recipe, index) => (
                        <RecipeCard key={index} recipe={recipe}/>
                    ))) : (<p>No recipes available for {categoryName}</p>
                )}
            </div>
        </section>
    );
};

export default RecipesByCategory;
