import {useNavigate} from "react-router-dom";

const SubmitRecipe = () => {
    const navigate = useNavigate();
    const handleSubmitButton = () =>{
        navigate("/submitPage");
    }
    return (
        <section className="submit">
            <img src="/img/publish-recipe.png" width="566" height="208" loading="lazy"/>
            <h1>Publish your recipe FREE today</h1>
            <div className="submit-col">
                <p> Publish your recipe in from of thousands of people for free. </p>
                <div className="submit-btn">
                    {/*< a href="/submit-recipe">Submit Recipe</a>*/}
                    <button className="submit-btn" onClick={handleSubmitButton}>Submit Recipe</button>
                </div>
            </div>
        </section>
    );
};

export default SubmitRecipe;