import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = () => {
    const [movies, setMovies] = useState({ content: [] });

    useEffect(()=>{
        fetch('http://localhost:4002/movies/available') //localhost:8080/products API backend
        .then((response) => response.json())
        .then((data) => {
            console.log('Datos obtenidos:', data)
            setMovies(data) //Actualizamos el estado con los datos obtenidos
        })
        .catch((error) => {
            console.error('Error al obtener los datos:', error)
        })
    }, [])

    return (
        <div className="movie-list">
            {movies.content.map((movie) => (
                <MovieCard
                key={movie.movieId}
                title={movie.title}
                genre={movie.genre.name}
                price={movie.price}
                poster={movie.poster}
                />
            ))}
        </div>
    );
};

export default MovieList;