import './movie.css';

const MovieCard = ({title, price, poster}) => {
    return (
        <>
            <div className="contenedor-flex">
                <div className="movie-card">
                    <img src={poster} alt={title} className="movie-poster" />
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