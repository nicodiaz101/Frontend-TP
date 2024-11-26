import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ModifyMovie.css"; // Reutilizando el CSS de CreateMovie
import { useDispatch } from "react-redux";
import { updateMovies } from "../../Redux/movieSlice";

const ModifyMovie = () => {
    const [id, setId] = useState(""); // Campo para ingresar el ID de la película
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

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleModifyMovie = async (e) => {
        e.preventDefault();
        if (!id) {
            setError("Debes ingresar el ID de la película.");
            return;
        }

<<<<<<< Updated upstream
    useEffect(() => {
      if (id) {
          dispatch(fetchMovieDetails(id))
              .unwrap()
              .then((movie) => {
                  setTitle(movie.title || "");
                  setReleaseDate(movie.releaseDate || "");
                  setImdbScore(movie.imdbScore || "");
                  setPrice(movie.price || "");
                  setDiscountPercentage(movie.discountPercentage || "");
                  setStock(movie.stock || "");
                  setPoster(movie.poster || "");
                  setDescription(movie.description || "");
                  setGenre(movie.genre?.name || "")
                  setDirector(movie.director?.name || ""); // Manejar objetos
              })
              .catch((error) => {
                  console.error("Error al obtener los detalles de la película:", error);
                  setError("No se pudo cargar la película con el ID proporcionado.");
              });
      }
  }, [id, dispatch]);
  
    
  

  const handleModifyMovie = async (e) => {
    e.preventDefault();

    if (!id || isNaN(Number(id))) {
        setError("Por favor, ingresa un ID válido.");
        return;
    }

    try {
        const updatedMovie = {
          ...(title && { title }), // String
          ...(releaseDate && { releaseDate }), // Fecha en formato 'yyyy-MM-dd'
          ...(imdbScore && { imdbScore: Number(imdbScore) }), // double
          ...(price && { price: Number(price) }), // double
          ...(discountPercentage && { discountPercentage: Number(discountPercentage) }), // double
          ...(stock && { stock: Number(stock) }), // int
          ...(poster && { poster }), // String
          ...(description && { description }), // String
          ...(genre && { genre }), // String
          ...(director && { director }), // String
      };
    
    

        console.log("Datos enviados al servidor:", updatedMovie);

        await dispatch(updateMovies(updatedMovie)).unwrap();
        alert("Película modificada con éxito!");
        navigate("/");
    } catch (error) {
        console.error("Error:", error);
        console.error("Mensaje del servidor:", error.response?.data);
        setError(error.response?.data?.message || "Error al modificar la película.");
    }
};
=======
        try {
            const updatedMovie = {
                id, // El ID es obligatorio
                ...(title && { title }), // Solo agrega si el campo está lleno
                ...(releaseDate && { releaseDate }),
                ...(imdbScore && { imdbScore: Number(imdbScore) }),
                ...(price && { price: Number(price) }),
                ...(discountPercentage && { discountPercentage: Number(discountPercentage) }),
                ...(stock && { stock: Number(stock) }),
                ...(poster && { poster }),
                ...(description && { description }),
                ...(genre && { genre }),
                ...(director && { director }),
            };
>>>>>>> Stashed changes

            await dispatch(updateMovies(updatedMovie)).unwrap();
            alert("Película modificada con éxito!");
            navigate("/"); // Redirigir después de la modificación
        } catch (error) {
            console.error("Error:", error);
            setError("Error al modificar la película :( ");
        }
    };

    return (
        <div className="mm-container">
            <span className="title">Modificar Película</span>
            <form onSubmit={handleModifyMovie}>
                <div className="mm-form">
                    <input
                        type="text"
                        placeholder="ID de la película"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
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
