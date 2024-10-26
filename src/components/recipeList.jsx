import RecipeCard from './recipeCard.jsx';

const RecipeList = ({recipes, categoryName}) => {
    return (
        <div className="latest-cards">
            {recipes.length > 0 ? (
                recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe}/>
                ))
            ) : (
                <p>No {categoryName} recipes found!</p>
            )}
        </div>
    );
};

export default RecipeList;