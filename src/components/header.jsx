const Header = () => {
    return (
        <div className="header">
            <a href="/" className="logo-container">
                <img src="/img/logo.svg" width="229" height="68" alt="Cooking Blog - Made with Node.js"/>
            </a>
            <ul className="nav-container">
                <li><a href="/" className="nav-link">Home</a></li>
                <li><a href="/about" className="nav-link">About</a></li>
                <li><a href="/submit-recipe" className="nav-link">Submit</a></li>
                <li><a href="/contact" className="nav-link">Contact</a></li>
            </ul>
            <div className="search-container">
                <form method="POST" action="/search">
                    <input type="search" name="searchTerm" className="search-input" placeholder="Search..."
                           aria-label="Search"/>
                </form>
            </div>
        </div>
    );
};

export default Header;