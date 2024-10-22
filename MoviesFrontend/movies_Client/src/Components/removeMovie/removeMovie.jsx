import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./removeMovie.css";

const RemoveMovie = () => {
    const [id, setId] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleRemoveMovie = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:4002/movies/`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                },
            });

            if (response.ok) {
                alert("Movie removed successfully");
                navigate("/");
            } else {
                setError("Error removing movie");
            }
        } catch (error) {
            console.error("Error:", error);
            setError("Error removing movie");
        }
    };

    return (
        <div className="rm-container">
            <span className="title">Eliminar pelicula del catálogo</span>
            <form className="rm-form" onSubmit={handleRemoveMovie}>
                <input
                    type="text"
                    placeholder="ID"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <button type="submit">Eliminar</button>
            </form>
            {error && <span className="error">{error}</span>}
        </div>
    );
}

export default RemoveMovie;