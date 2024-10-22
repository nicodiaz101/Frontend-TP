import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./createMovie.css";

const CreateMovie = () => {
    const [title, setTitle] = useState("");
    const [releaseDate, setReleaseDate] = useState("");
    const [imdbScore, setImdbScore] = useState("");
    const [price, setPrice] = useState("");
    const [discountPercentnage, setDiscountPercentnage] = useState("");
    const [stock, setStock] = useState("");
    const [poster, setPoster] = useState("");
    const [description, setDescription] = useState("");
    const [genre, setGenre] = useState("");
    const [director, setDirector] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleCreateMovie = async (e) => {
        e.preventDefault();

        const movieData = {
            title,
            releaseDate,
            imdbScore,
            price,
            discountPercentnage,
            stock,
            poster,
            description,
            genre,
            director
        };

        try {
            const response = await fetch("http://localhost:4002/movies", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify(movieData),
            });

            if (response.ok) {
                alert("Movie created successfully");
                navigate("/");
            } else {
                setError("Error creating movie");
            }
        } catch (error) {
            console.error("Error:", error);
            setError("Error creating movie");
        }
    };

    return (
        <div className="cm-container">
            <span className="title">Agregar pelicula al catálogo</span>
            <form onSubmit={handleCreateMovie}>
                <div className="cm-form">
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Release Date"
                        value={releaseDate}
                        onChange={(e) => setReleaseDate(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="IMDB Score"
                        value={imdbScore}
                        onChange={(e) => setImdbScore(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Discount Percentnage"
                        value={discountPercentnage}
                        onChange={(e) => setDiscountPercentnage(e.target.value)}
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
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Genre"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Director"
                        value={director}
                        onChange={(e) => setDirector(e.target.value)}
                    />
                    <button type="submit">Create Movie</button>
                    {error && <span className="error">{error}</span>}
                </div>
            </form>
        </div>
    )
}

export default CreateMovie;
