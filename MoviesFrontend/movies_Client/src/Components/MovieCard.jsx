import './movie.css';

const MovieCard = ({title, price, poster}) => {
    return (
        <>
            <div className="movie-card">
                <img src={poster} alt={title} className="movie-poster" />
                <div className="movie-info">
                    <h2>{title}</h2>
                    <p>{price}</p>
                </div>
            </div>
        </>
    );
};

export default MovieCard;