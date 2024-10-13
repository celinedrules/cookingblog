const Category = ({category}) => {
    return (
        <a href={`/categories/${category.name}`} className="category-link">
            <div className="category-img">
                <img src={`/img/${category.image}`} alt={category.name} loading="lazy"/>
            </div>
            <div className="category-title">
                {category.name}
            </div>
        </a>
    );
};

export default Category;