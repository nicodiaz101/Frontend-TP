import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./register-login.css";
import { useDispatch } from "react-redux";
import { registerUsers } from "../../Redux/userSlice"

const Register = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [pais, setPais] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(""); // Estado para el mensaje de error
    const role = "USER";  // Role default para un nuevo usuario

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleRegister = async (e) => { // Función para registrar al usuario
        e.preventDefault();
        
        if (password !== confirmPassword) {
            setError("Las contraseñas no coinciden.");
            return;
        }
        try {
            const userData = {  // Datos del usuario
                firstname: nombre,
                lastname: apellido,
                email,
                username,
                role,
                password,
                country: pais
            };
            const response = await dispatch(registerUsers(userData)).unwrap();
            if (response) {
                alert("Registro exitoso, ahora puede iniciar sesión!"); // Mensaje de éxito
                navigate("/login"); // Lleva al usuario a la página de login
            } else {
                setError("Error al registrar. Intente de nuevo."); // Mensaje de error
            }
        } catch (error) {
            console.error("Error:", error);
            console.error("Error response:", error.response?.data);
            setError("Error al registrar. Intente de nuevo.");
        }
    };

    return (
        <div className="r-container">
            <span className="title">Registro</span>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} />
                <input type="text" placeholder="Apellido" onChange={(e) => setApellido(e.target.value)} />
                <input type="text" placeholder="País" onChange={(e) => setPais(e.target.value)} />
                <input type="email" placeholder="Correo Electrónico" onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder="Nombre de Usuario" onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
                <input type="password" placeholder="Confirmar Contraseña" onChange={(e) => setConfirmPassword(e.target.value)} />
                {error && <p className="error">{error}</p>} {/* Muestra el mensaje de error */}
                <button type="submit">Registrar</button>
            </form>
            <p>Ya tiene cuenta?<Link to="/login"> Inicie Sesión</Link></p>
        </div>
    );
}

export default Register;