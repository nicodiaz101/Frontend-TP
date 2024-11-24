import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies, setQuery } from "../../Redux/searchSlice";
import MovieCard from "../MovieList/MovieCard";
import "./searchBar.css";

const SearchBar = () => {
    const dispatch = useDispatch();
    const { query, movies, loading: isLoading, error } = useSelector((state) => state.search);

    const handleInputChange = (e) => {
        const value = e.target.value;
        dispatch(setQuery(value)); // Actualiza el query en el estado global

        if (value.length > 2) {
            dispatch(fetchMovies(value)); // Lanza la acción de búsqueda
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Buscar peliculas..."
                value={query}
                onChange={handleInputChange}
            />
            {isLoading && <p>Cargando...</p>}
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
