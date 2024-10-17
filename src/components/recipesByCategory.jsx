import RecipeList from "./recipeList.jsx";

const RecipesByCategory = ({categoryName, recipes = []}) => {
    return (
        <section className="latest">
            <div className="latest-title">
                <h2>{categoryName} Recipes</h2>
                <a href={`/categories/${categoryName}`}>View More</a>
            </div>
            <RecipeList recipes={recipes} categoryName={categoryName} />
        </section>
    );
};

export default RecipesByCategory;
