import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = ( {movies}) => {
    // PARA EL BACKEND

    //const [movies, setMovies] = useState([]);

    //useEffect(()=>{
    //    fetch('localhost:8080/movies') //localhost:8080/products API backend
    //    .then((response) => response.json())
    //    .then((data) => {
    //        setMovies(data) //Actualizamos el estado con los datos obtenidos
   //     })
    //    .catch((error) => {
    //        console.error('Error al obtener los datos:', error)
    //    })
    //}, [])

    return (
        <div className="movie-list">
            <h1>Movies</h1>
            <div>
                {movies.map((movie) => (
                    <MovieCard
                    key={movie.id}
                    title={movie.title}
                    price={movie.price}
                    poster={movie.poster}
                    />
                ))}
            </div>
        </div>
    );
};

export default MovieList;