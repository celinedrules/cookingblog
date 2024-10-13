import RecipeCard from "./recipeCard.jsx";

const Latest = () => {
    return (
        <section className="latest">
            <div className="latest-title">
                <h2>Latest Recipes</h2>
                <a href="/explore-latest">View More</a>
            </div>
            <div className="latest-cards">
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
            </div>
        </section>
    );
};

export default Latest;