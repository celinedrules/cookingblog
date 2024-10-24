import {useState} from "react";

const SubmitPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [ingredients, setIngredients] = useState([""]); // Initial ingredient input
    const [imagePreview, setImagePreview] = useState(null); // To store image preview

    const handleChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const addIngredient = () => {
        setIngredients([...ingredients, ""]);
    };

    const handleIngredientChange = (index, value) => {
        const updatedIngredients = [...ingredients];
        updatedIngredients[index] = value;
        setIngredients(updatedIngredients);
    };

    const removeIngredient = (index) => {
        const updatedIngredients = ingredients.filter((_, i) => i !== index);
        setIngredients(updatedIngredients);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result); // Set the image preview
            };
            reader.readAsDataURL(file); // Convert image to base64 string
        } else {
            setImagePreview(null); // Clear the preview if no file is selected
        }
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
                                <div className="ingredient-list">
                                    {ingredients.map((ingredient, index) => (
                                        <div className="ingredient-div" key={index}>
                                            <input
                                                type="text"
                                                name={`ingredients[${index}]`}
                                                className="form-control"
                                                value={ingredient}
                                                onChange={(e) => handleIngredientChange(index, e.target.value)}
                                            />
                                            <button type="button" className="btn-ingredient"
                                                    onClick={() => removeIngredient(index)}>-
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="recipe-col-12">
                                <button type="button" className="btn-ingredient" id="addIngredientBtn"
                                        onClick={addIngredient}>+ Ingredient
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
                                <label htmlFor="image" className="form-label">Photo</label>
                                {imagePreview && (
                                    <div className="image-preview-container">
                                        <img src={imagePreview} alt="Preview" className="image-preview"/>
                                    </div>
                                )}
                                <div className="custom-file-upload">
                                    <label htmlFor="image" className="btn-ingredient">Choose file</label>
                                    <input type="file" id="image" name="image" accept="image/*"
                                           className="form-control-file" onChange={handleFileChange}/>
                                </div>
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