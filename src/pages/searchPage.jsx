import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import RecipeCard from "../components/recipeCard.jsx";

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

const SearchPage = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null); // Handle errors
    const query = useQuery().get("query");

    useEffect(() => {
        if (query) {
            fetch("/api/search", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ query }),
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.json();
                })
                .then((data) => {
                    if (data.recipes) {
                        setSearchResults(data.recipes);
                    } else {
                        setErrorMessage("No results found");
                    }
                })
                .catch((error) => {
                    console.error("Error during search:", error);
                    setErrorMessage("Error occurred during search.");
                });
        }
    }, [query]);

    return (
        <div>
            <h1 className="search-title">Search Results for `{query}`</h1>
            <div className="search-results">
                {errorMessage ? (
                    <p>{errorMessage}</p>
                ) : (
                    searchResults.length > 0 ? (
                        searchResults.map((recipe, index) => (
                            <div key={index}>
                                <RecipeCard key={index} recipe={recipe}/>
                            </div>
                        ))
                    ) : (
                        <p>No results found</p>
                    )
                )}
            </div>
        </div>
    );
};

export default SearchPage;
