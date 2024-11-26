import './movie.css';
import { Link } from "react-router-dom";

const MovieCard = ({movieId, title, genre, price, poster, discountPercentage, stock}) => {
    const discountedPrice = price - (price * (discountPercentage / 100));
    return (
        <>
            <div className="contenedor-flex">
                <div className="movie-card">
                    <Link to={`/movies/${movieId}`}>
                        <img src={poster} alt={title} className="movie-poster" />
                    </Link>
                </div>
                <div className="movie-info">
                    <h2>{title}</h2>
                    <p className='genero'>{genre}</p>
                    {stock <= 0 ? (
                        <b className="sin-stock">SIN STOCK</b>
                    ) : discountPercentage > 0 ? (
                        <b>
                            ${discountedPrice.toFixed(2)} <b className="precio-descontado">{discountPercentage}% OFF</b> 
                        </b>
                    ) : (<b>${price}</b>)}
                </div>
            </div>
        </>
    );
};

export default MovieCard;