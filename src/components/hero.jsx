import {useNavigate} from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();
    const handleExploreLatest = () => {
        navigate("/exploreLatest");
    };
    const handleGetRandomRecipe = () => {
        fetch("/api/randomRecipe")
            .then((response) => response.json())
            .then((data) => {
                navigate(`/recipe/${data._id}`);
            })
            .catch((error) => {
                console.error("Error fetching random recipe:", error);
            });
    };

    return (
        <div className="hero-row">
            <div className="her-col">
                <img src="/img/hero-image.png" loading="lazy" alt="hero-image"/>
            </div>
            <div className="hero-col">
                <h1>Huge selection of delicious recipe ideas</h1>
                <p className="lead">
                    Explore our huge selection of delicious recipe ideas including:
                    easy desserts, delicious vegan and vegetarian dinner ideas, gorgeous pasta recipes, quick bakes,
                    family-friendly meals and gluten-free recipes.
                </p>
                <div className="explore">
                    <button className="btn-latest" onClick={handleExploreLatest}>Explore Latest</button>
                    <button className="btn-random" onClick={handleGetRandomRecipe}>Show Random</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;