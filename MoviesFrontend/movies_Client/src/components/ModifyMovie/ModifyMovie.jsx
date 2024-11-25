import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ModifyMovie.css";
import { useDispatch, useSelector } from "react-redux";
import { updateMovies } from "../../Redux/movieSlice";

const ModifyMovie = () => {
  const { id } = useParams(); // Obtener el ID de la película desde la URL
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Estado para los campos del formulario
  const [title, setTitle] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [imdbScore, setImdbScore] = useState("");
  const [price, setPrice] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [stock, setStock] = useState("");
  const [poster, setPoster] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [director, setDirector] = useState("");
  const [error, setError] = useState(""); // Estado para el mensaje de error

  // Obtener la película desde Redux
  const movie = useSelector((state) =>
    Array.isArray(state.movies.items.content)
      ? state.movies.items.content.find((movie) => movie.id === parseInt(id))
      : null
  );

  useEffect(() => {
    if (movie) {
      // Cargar los valores iniciales si la película está en el estado
      setTitle(movie.title);
      setReleaseDate(movie.releaseDate);
      setImdbScore(movie.imdbScore);
      setPrice(movie.price);
      setDiscountPercentage(movie.discountPercentage);
      setStock(movie.stock);
      setPoster(movie.poster);
      setDescription(movie.description);
      setGenre(movie.genre);
      setDirector(movie.director);
    }
  }, [movie]);

  const handleModifyMovie = async (e) => {
    e.preventDefault();
    try {
      const updatedMovie = {
        id,
        title,
        releaseDate,
        imdbScore: Number(imdbScore),
        price: Number(price),
        discountPercentage: Number(discountPercentage),
        stock: Number(stock),
        poster,
        description,
        genre,
        director,
      };
      await dispatch(updateMovies(updatedMovie)).unwrap();
      alert("Película modificada con éxito!");
      navigate("/"); // Redirigir después de la modificación
    } catch (error) {
      console.error("Error:", error);
      setError("Error al modificar la película :( ");
    }
  };

  if (!movie) {
    return <div>No se encontró la película o no está disponible.</div>;
  }

  return (
    <div className="mm-container">
      <span className="title">Modificar Película</span>
      <form onSubmit={handleModifyMovie}>
        <div className="mm-form">
          <input
            type="text"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Fecha de lanzamiento"
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
          />
          <input
            type="number"
            placeholder="Puntaje IMDB"
            value={imdbScore}
            onChange={(e) => setImdbScore(e.target.value)}
          />
          <input
            type="number"
            placeholder="Precio"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="number"
            placeholder="Porcentaje de descuento"
            value={discountPercentage}
            onChange={(e) => setDiscountPercentage(e.target.value)}
          />
          <input
            type="number"
            placeholder="Stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
          <input
            type="text"
            placeholder="Poster"
            value={poster}
            onChange={(e) => setPoster(e.target.value)}
          />
          <input
            type="text"
            placeholder="Descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Género"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
          <input
            type="text"
            placeholder="Director"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
          />
          <button type="submit">Modificar Película</button>
          {error && <span className="error">{error}</span>}
        </div>
      </form>
    </div>
  );
};

export default ModifyMovie;
