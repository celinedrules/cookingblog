import Categories from "../components/categories.jsx";
import Hero from "../components/hero.jsx";
import Latest from "../components/latest.jsx";
import SubmitRecipe from "../components/SubmitRecipe.jsx";

const Home = ({categories, food}) => {
    return (
        <div>
            <Hero/>
            <Categories categories={categories}/>
            <Latest latest={food.latest}/>
            <SubmitRecipe/>
        </div>
    );
};


export default Home;