import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./removeMovie.css";
import { useDispatch } from "react-redux";
import { deleteMovie } from "../../Redux/movieSlice";

const removeMovie = () => {
    const [id, setId] = useState("");
    const [error, setError] = useState(""); // Estado para el mensaje de error

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleRemoveMovie = async (e) => { // Función para eliminar una película
        e.preventDefault();
        try {
            const movieData = {
                id
            };
            await dispatch(deleteMovie(movieData)).unwrap();
            alert("Película eliminada con exito!");
            navigate("/");
        } catch (error) {
            console.error("Error:", error);
            console.error("Error response:", error.response?.data);
            setError("Error al eliminar la película :( ");
        }
    };

    return (
        <div className="rm-container">
            <span className="title">Eliminar pelicula del catálogo</span>
            <form onSubmit={handleRemoveMovie}>
                <div className="rm-form">
                    <input
                        type="text"
                        placeholder="ID"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                    <button type="submit">Eliminar</button>
                </div>
                {error && <span className="error">{error}</span>}
            </form>
        </div>
    );
}

export default removeMovie;