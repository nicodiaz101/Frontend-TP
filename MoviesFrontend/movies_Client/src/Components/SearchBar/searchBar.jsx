import React, { useEffect, useState } from "react";
import MovieCard from "../MovieList/MovieCard";
import "./searchBar.css";

const SearchBar = () => {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Debounce la búsqueda para evitar múltiples llamadas rápidas al servidor
        const delayDebounceFn = setTimeout(() => {
            if (query.length > 2) {
                setIsLoading(true);
                setError(null); // Limpiar errores previos
                fetch(`http://localhost:4002/movies/title?query=${query}`)
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error("Error al solicitar la pelicula");
                        }
                        return response.json();
                    })
                    .then((data) => {
                        setMovies(data.results || []);
                    })
                    .catch((error) => {
                        console.error("Error fetching movies:", error);
                        setError("Incapaz de solicitar la pelicula. Por favor, intentar de nuevo mas tarde.");
                    })
                    .finally(() => {
                        setIsLoading(false);
                    });
            } else {
                setMovies([]);
            }
        }, 300); // 300ms de debounce

        return () => clearTimeout(delayDebounceFn); // Limpiar el timeout anterior
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
            {isLoading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}
            <div className="movie-results">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default SearchBar;
