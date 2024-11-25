import './movie.css';
import { Link } from "react-router-dom";

const MovieCard = ({movieId,title, genre, price, poster}) => {
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
                    <p>{genre}</p>
                    <b>$ {price}</b>
                </div>
            </div>
        </>
    );
};

export default MovieCard;