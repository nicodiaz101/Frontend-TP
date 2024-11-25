import { useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Para capturar el movieId de la URL
import "./detail.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieDetails, deleteMovies } from "../../Redux/movieSlice";
import { useNavigate } from "react-router-dom";

const MovieDetail = () => {
    const { movieId } = useParams(); // Captura el parámetro dinámico movieId desde la URL

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {items: movie, loading, error} = useSelector((state) => state.movies);

    useEffect(() => {
        const response = dispatch(fetchMovieDetails(movieId));
        console.log('Detalles de la película:', response); // Verifica si obtienes los datos
    }, [dispatch, movieId]); // El efecto se ejecuta cada vez que el movieId cambia

    if (loading) return <h1>Cargando detalles de la película...</h1>;
    if (error) return <h1>Error al cargar los detalles de la película: {error}</h1>;

    if (!movie) return <h1>No se encontraron detalles de la película.</h1>

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

    const handleRemove = async (e) => { // Función para eliminar una película
        e.preventDefault();
        try {
            dispatch(deleteMovies(movieId)).unwrap();
            alert("Película eliminada con éxito!");
            navigate("/");
        } catch (error) {
            console.error("Error:", error);
            console.error("Error response:", error.response?.data);
        }
    };

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
                <button className="carrito-btn" onClick={() => addToCart(movie)}>Agregar al Carrito</button>
                {localStorage.getItem("userRole") == "ADMIN" ? (
                    <button className="eliminar-btn" onClick={handleRemove}>Eliminar Película</button>
                ) : null}
            </div>
        </div></>
    );
};

export default MovieDetail;