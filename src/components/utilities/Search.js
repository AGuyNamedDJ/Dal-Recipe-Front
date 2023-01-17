// Import
import React, { useState } from "react";
import { useNavigate } from "react-router";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${searchTerm}`);
    };

    return (
        <div className="search-container">
            <h1 className="search-header">Search</h1>
            <form onSubmit={handleSubmit} className="search-form">
                <input 
                    type="text" 
                    placeholder="Search for a recipe" 
                    className="search-input"
                    onChange={handleSearch}
                    value={searchTerm}
                />
                <button className="search-button">Search</button>
            </form>
            <ul className="search-results">
                {searchResults.map((recipe, idx) => {
                    return (
                        <li key={idx} className="search-result">
                            <h2 className="search-result-name">{recipe.name}</h2>
                            <p className="search-result-type">{recipe.type}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Search;
