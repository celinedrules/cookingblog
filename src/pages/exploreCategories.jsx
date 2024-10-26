import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import Category from "../components/category.jsx";

const ExploreCategories = () => {
    const [data, setData] = useState({title: '', message: '', categories: []});

    useEffect(() => {
        fetch('/api/categories')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    return (
        <div>
            <h1>{data.title}</h1>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Categories</li>
                </ol>
            </nav>

            <div className="categories-explore">
                {data.categories.map((category) => (
                    <Category key={category.name} category={category}/>
                ))}
            </div>
        </div>
    );
};

export default ExploreCategories;