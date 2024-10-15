import Categories from "../components/categories.jsx";
import Hero from "../components/hero.jsx";
import Latest from "../components/latest.jsx";
import SubmitRecipe from "../components/SubmitRecipe.jsx";
import {useEffect} from "react";
import RecipesByCategory from "../components/recipesByCategory.jsx";

const Home = ({categories, food}) => {
    const categoryNames = Object.keys(food).filter((category) => category !== 'latest');
    useEffect(() => {
    }, [food]);

    return (
        <div>
            <Hero/>
            <Categories categories={categories}/>
            <Latest latest={food.latest}/>
            {categoryNames.map((categoryName) => {
                const recipes = food[categoryName];
                return (
                    <RecipesByCategory
                        key={categoryName}
                        categoryName={categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
                        recipes={recipes}
                    />
                );
            })}
            <SubmitRecipe/>
        </div>
    );
};

export default Home;