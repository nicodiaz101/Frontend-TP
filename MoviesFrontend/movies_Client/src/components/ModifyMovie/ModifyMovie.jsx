import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ModifyMovie.css";
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
