import Category from "./category.jsx";
import { Link } from "react-router-dom";

const Categories = ({ categories }) => {
    return (
        <div className="categories">
            {categories.map((category) => (
                <Category key={category.name} category={category} />
            ))}
            <Link to="/categories" className="category-link">
                <div className="category-img">
                    <img src="/img/view-all.jpg" loading="lazy" alt="View All" />
                </div>
                <div className="category-title">View All</div>
            </Link>
        </div>
    );
};

export default Categories;
