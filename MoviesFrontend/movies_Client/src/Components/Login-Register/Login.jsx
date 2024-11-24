import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./register-login.css";
import { useDispatch } from "react-redux";
import { loginUsers } from "../../Redux/userSlice"

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); // Estado para el mensaje de error

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = async (e) => { // Función para iniciar sesión
        e.preventDefault();
        try {
            const credentials = {
                username,
                password,
            };
            const response = await dispatch(loginUsers(credentials)).unwrap();
            if (response) {
                localStorage.setItem("token", response.token); // Guardar el JWT en el localStorage para mantener la sesión activa
                localStorage.setItem("userRole", response.role); // Guardar el rol del usuario
                localStorage.setItem("userId", response.userId); // Guardar el id del usuario
                localStorage.setItem("email", response.email); // Guardar el email del usuario
                alert("Inicio de sesión exitoso");
                navigate("/"); // Redirigir al home
            } else {
                setError("Credenciales incorrectas. Intente de nuevo.");
            }
        } catch (error) {
            console.error("Error:", error);
            console.error("Error response:", error.response?.data);
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
