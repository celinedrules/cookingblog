import RecipeCard from "./recipeCard.jsx";

const Latest = ({latest}) => {
    return (
        <section className="latest">
            <div className="latest-title">
                <h2>Latest Recipes</h2>
                <a href="/exploreLatest">View More</a>
            </div>
            <div className="latest-cards">
                {latest.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe}/>
                ))}
            </div>
        </section>
    );
};

export default Latest;