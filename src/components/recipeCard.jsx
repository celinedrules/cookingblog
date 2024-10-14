const RecipeCard = ({recipe}) => {
    return (
        <div className="recipe-card">
            <a href={`/recipe/${recipe._id}`} className="recipe-card-link category-link">
                <div className="category-img category-img-large">
                    <img src={`/uploads/${recipe.image}`} alt={recipe.name} loading="lazy"/>
                </div>
                <div className="category-title">
                    {recipe.name}
                </div>
            </a>
        </div>
    );
};

export default RecipeCard;