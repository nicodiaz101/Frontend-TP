import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./searchBar.css";

const SearchBar = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:4002/movies/available`)
            .then(response => response.json())
            .then(data => setResults(data))
            .catch(error => console.error("Error fetching data:", error));
    }, [query]);

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search for movies..."
                value={query}
                onChange={handleInputChange}
            />
            <div className="results">
                {results.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default SearchBar;