const Hero = () => {
    return (
        <div className="hero-row">
            <div className="her-col">
                <img src="/img/hero-image.png" loading="lazy"/>
            </div>
            <div className="hero-col">
                <h1>Huge selection of delicious recipe ideas</h1>
                <p className="lead">
                    Explore our huge selection of delicious recipe ideas including:
                    easy desserts, delicious vegan and vegetarian dinner ideas, gorgeous pasta recipes, quick bakes,
                    family-friendly meals and gluten-free recipes.
                </p>
                <div className="explore">
                    {/* Change to routes */}
                    <a className="btn-latest" href="/explore-latest">Explore Latest</a>
                    <a className="btn-random" href="/explore-random">Show Random</a>
                </div>
            </div>
        </div>
    );
};

export default Hero;