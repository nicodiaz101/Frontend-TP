import './movie.css';
import { Link } from "react-router-dom";
const MovieCard = ({title, price, poster}) => {
    return (
        <>
            <div className="contenedor-flex">
                <div className="movie-card">
                    <Link to="/MoviePage">
                        <img src={poster} alt={title} className="movie-poster" />
                    </Link>
                </div>
                <div className="movie-info">
                    <h2>{title}</h2>
                    <b>$ {price}</b>
                </div>
            </div>
        </>
    );
};

export default MovieCard;