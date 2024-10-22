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

    const addToCart = (movie) => {  // Función para agregar la película al carrito
        const savedCart = JSON.parse(localStorage.getItem('cart')) || []; // Obtén el carrito del localStorage o crea uno vacío
        const existingMovie = savedCart.find(item => item.movieId === movie.movieId); // Busca si la película ya está en el carrito

        if (existingMovie) {
            // Si ya está en el carrito, aumenta la cantidad
            existingMovie.quantity += 1;
        } else {
            // Si no está en el carrito, agrégala con cantidad 1
            savedCart.push({ ...movie, quantity: 1 });
        }

        // Guarda el carrito actualizado en localStorage
        localStorage.setItem('cart', JSON.stringify(savedCart));
        alert(`${movie.title} se ha agregado al carrito!`);
    };

    if (!movie) {
        return <p>Cargando detalles de la película...</p>; // Mensaje mientras se cargan los datos
    }

    return (
        <><div
            className="movie-background" style={{backgroundImage:`url(${movie.poster})`, }}>
        </div>
        <div className='contenedor-general'>
            <div className='contenedor-medio'>
                <img src={movie.poster} />
                <div className='contenedor-medio-textos'>
                    <h1>{movie.title}</h1>
                    <p>Género: {movie.genre?.name}</p>
                    <b>Precio: ${movie.price}</b>
                </div>    
            </div>
            <div className='contenedor-chico'>
                <p>{movie.description}</p>
                <div className='boton'>
                    <button type="submit" onClick={() => addToCart(movie)}>Agregar al Carrito</button>
                </div>
            </div>
        </div></>
    );
};

export default MovieDetail;
