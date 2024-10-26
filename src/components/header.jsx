import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        // Redirect to /search?query=searchTerm
        navigate(`/search?query=${searchTerm}`);
    };

    return (
        <div className="header">
            <a href="/" className="logo-container">
                <img src="/img/logo.svg" width="229" height="68" alt="Cooking Blog - Made with Node.js"/>
            </a>
            <ul className="nav-container">
                <li><a href="/" className="nav-link">Home</a></li>
                <li><a href="/about" className="nav-link">About</a></li>
                <li><a href="/submitPage" className="nav-link">Submit</a></li>
                <li><a href="/contact" className="nav-link">Contact</a></li>
            </ul>
            <div className="search-container">
                <form onSubmit={handleSearch}>
                    <input
                        type="search"
                        name="searchTerm"
                        className="search-input"
                        placeholder="Search..."
                        aria-label="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </form>
            </div>
        </div>
    );
};

export default Header;