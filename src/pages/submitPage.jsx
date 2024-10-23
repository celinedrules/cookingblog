import {useState} from "react";

const SubmitPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const handleChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    return (
        <div>
            <div className="title-container">
                <h1 className="title">Submit Recipe</h1>
                <div>
                    <p>
                        Share your amazing recipes with thousands of web developers across the world. Fill our form to
                        get started.
                    </p>
                </div>
            </div>
            <div className="form-container">
                <div className="recipe-col-8">
                    <form action="/submitPage" encType="multipart/form-data" method="POST">
                        <div className="recipe-row">
                            <div className="recipe-col-12">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" name="email" id="email" className="form-control"/>
                            </div>
                            <div className="recipe-col-12">
                                <label htmlFor="name" className="form-label">Recipe Name</label>
                                <input type="text" name="name" id="name" className="form-control"/>
                            </div>
                            <div className="recipe-col-12">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea className="form-control" name="description" id="description" cols={30}
                                          rows={4}/>
                            </div>
                            <div className="recipe-col-12">
                                <label htmlFor="ingredients" className="form-label">Ingredients</label><br/>
                                <small>Example: Ice</small>
                                <div className="ingredientList">
                                    <div className="ingredientDiv">
                                        <input type="text" name="ingredients" className="form-control"/>
                                    </div>
                                </div>
                            </div>

                            <div className="recipe-col-12">
                                <button type="button" className="btn-ingredient" id="addIngredientBtn">+ Ingredient
                                </button>
                            </div>

                            <div className="recipe-col-12">
                                <label htmlFor="category">Select Category</label>
                                <select className="form-control" name="category" value={selectedCategory}
                                        onChange={handleChange} aria-label="category">
                                    <option value="" disabled>Select Category</option>
                                    <option value="Thai">Thai</option>
                                    <option value="American">American</option>
                                    <option value="Mexican">Mexican</option>
                                    <option value="Indian">Indian</option>
                                    <option value="Spanish">Spanish</option>
                                    <option value="Chinese">Chinese</option>
                                </select>
                            </div>

                            <div className="recipe-col-12">
                                <label htmlFor="image">Photo</label>
                                <input type="file" className="form-control" name="image" accept="image/*"/>
                            </div>
                            <div className="recipe-col-12-col">
                                <button type="submit" className="btn-submit">Submit Recipe</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SubmitPage;