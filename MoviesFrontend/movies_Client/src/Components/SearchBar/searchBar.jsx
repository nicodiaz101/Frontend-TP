import React, { useEffect, useState } from "react";
import MovieCard from "../MovieList/MovieCard";
import "./searchBar.css";

const SearchBar = () => {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (query.length > 2) {
            fetch(`http://localhost:4002/movies/title}`)
                .then(response => response.json())
                .then(data => setMovies(data.results))
                .catch(error => console.error("Error fetching movies:", error));
        } else {
            setMovies([]);
        }
    }, [query]);

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <div className="search-bar">
            <input
                type="Long"
                placeholder="Search for movies..."
                value={query}
                onChange={handleInputChange}
            />
            <div className="movie-results">
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default SearchBar;