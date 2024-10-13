const RecipeCard = () => {
    return (
        <div className="recipe-card">
            <a href="/recipe#" className="recipe-card-link category-link">
                <div className="category-img category-img-large">
                    <img src="/img/chocolate-banoffe-whoopie-pies.jpg" loading="lazy"/>
                </div>
                <div className="category-title">
                    Chocolate Banoffe
                </div>
            </a>
        </div>
    );
};

export default RecipeCard;