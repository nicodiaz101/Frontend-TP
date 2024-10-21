import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./register-login.css";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); // Estado para el mensaje de error

    const navigate = useNavigate();

    const handleLogin = async (e) => { // Función para iniciar sesión
        e.preventDefault();

        const credentials = {
            username,
            password,
        };

        try {
            const response = await fetch("http://localhost:4002/auth/login", { // POST al servidor
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem("token", data.token); // Guardar el JWT en el localStorage para mantener la sesión activa
                localStorage.setItem("userRole", data.role); // Guardar el rol del usuario
                localStorage.setItem("user", JSON.stringify(credentials)); // Guardar los datos del usuario en localStorage
                alert("Inicio de sesión exitoso");
                navigate("/"); // Redirigir al home
            } else {
                setError("Credenciales incorrectas!");
            }
        } catch (error) {
            console.error("Error:", error);
            setError("Error al iniciar sesión. Intente de nuevo.");
        }
    };

    return (
        <div className="r-container">
            <span className="title">Iniciar Sesión</span>
            <form onSubmit={handleLogin}>
                <input type="username" placeholder="Nombre de Usuario" onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
                {error && <p className="error">{error}</p>} {/* Muestra el mensaje de error */}
                <button type="submit">Iniciar Sesión</button>
            </form>
            <p>No tiene cuenta?<Link to="/register"> Registrese</Link></p>
        </div>
    );
}

export default Login;
