import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Para capturar el movieId de la URL
import "./detail.css";

const MovieDetail = () => {
    const { movieId } = useParams(); // Captura el parámetro dinámico movieId desde la URL
    const [movie, setMovie] = useState(null); // Estado para almacenar los detalles de la película

    useEffect(() => {
        // Realiza el fetch para obtener los detalles de la película con el movieId
        fetch(`http://localhost:4002/movies/${movieId}`)
            .then((response) => response.json())
            .then((data) => {
                console.log('Detalles de la película:', data); // Verifica si obtienes los datos
                setMovie(data); // Guarda los datos de la película en el estado
            })
            .catch((error) => {
                console.error('Error al obtener los detalles de la película:', error);
            });
    }, [movieId]); // El efecto se ejecuta cada vez que el movieId cambia

    if (!movie) {
        return <p>Cargando detalles de la película...</p>; // Mensaje mientras se cargan los datos
    }

    return (
        <div className='contenedor-general'>
            <div className='contenedor-medio'>
                <img src={movie.poster}/>
                <h1>{movie.title}</h1>
                <p>Género: {movie.genre?.name}</p>
                <b>Precio: ${movie.price}</b>
            </div>
            <div className='contenedor-chico'>
                <p>{movie.description}</p>
            </div>
        </div>
    );
};

export default MovieDetail;
