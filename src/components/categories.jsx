import Category from "./category.jsx";

const Categories = ({categories}) => {
    return (
        <div className="categories">
            {categories.map((category) => (
                <Category key={category.id} category={category}/>
            ))}
            <a href="/categories" className="category-link">
                <div className="category-img">
                    <img src="/img/view-all.jpg" loading="lazy"/>
                </div>
                <div className="category-title">
                    View All
                </div>
            </a>
        </div>
    );
};

export default Categories;