import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./createMovie.css";
import { useDispatch } from "react-redux";
import { createMovies } from "../../Redux/movieSlice";

const CreateMovie = () => {
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

    const handleCreateMovie = async (e) => { // Función para crear una película
        e.preventDefault();
        try {
            const movieData = {
                title,
                releaseDate,
                imdbScore: Number(imdbScore),
                price: Number(price),
                discountPercentage: Number(discountPercentage),
                stock: Number(stock),
                poster,
                description,
                genre,
                director
            };
            await dispatch(createMovies(movieData)).unwrap();
            alert("Película creada con éxito!");
            navigate("/");
        } catch (error) {
            console.error("Error:", error);
            console.error("Error response:", error.response?.data);
            setError("Error al crear la película :( ");
        }
    };

    return (
        <div className="cm-container">
            <span className="title">Agregar pelicula al catálogo</span>
            <form onSubmit={handleCreateMovie}>
                <div className="cm-form">
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
                    <button type="submit">Crear Película</button>
                    {error && <span className="error">{error}</span>}
                </div>
            </form>
        </div>
    )
}

export default CreateMovie;
