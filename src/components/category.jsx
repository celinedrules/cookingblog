import { Link } from "react-router-dom";

const Category = ({ category }) => {
    return (
        <Link to={`/categories/${category.name}`} className="category-link">
            <div className="category-img">
                <img src={`/img/${category.image}`} alt={category.name} loading="lazy"/>
            </div>
            <div className="category-title">
                {category.name}
            </div>
        </Link>
    );
};

export default Category;
