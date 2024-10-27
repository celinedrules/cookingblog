import {useEffect, useState} from "react";
import Category from "../components/category.jsx";
import Breadcrumb from "../components/breadcrumb.jsx";

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
            <Breadcrumb currentPage="Categories"/>

            <div className="categories-explore">
                {data.categories.map((category) => (
                    <Category key={category.name} category={category}/>
                ))}
            </div>
        </div>
    );
};

export default ExploreCategories;