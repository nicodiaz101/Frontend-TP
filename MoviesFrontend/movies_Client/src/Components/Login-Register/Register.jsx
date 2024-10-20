import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./register-login.css";

const Register = () => {
    const [nombre, setNombre] = useState("");   // Hooks para los datos del usuario
    const [apellido, setApellido] = useState("");
    const [pais, setPais] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const role = "USER";  // Role default para un nuevo usuario

    const navigate = useNavigate();

    const handleRegister = async (e) => { // Función para registrar al usuario
        e.preventDefault();
        
        if(password !== confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }

        const userData = {  // Datos del usuario
            firstname: nombre,
            lastname: apellido,
            email,
            username,
            role,
            password,
            country: pais
        };

        try {
            const response = await fetch("http://localhost:4002/auth/register", {   // POST al servidor
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                alert("Registro exitoso, ahora puede iniciar sesión");
                navigate("/login"); // Lleva al usuario a la página de login
            } else {
                alert("Error al registrar. Intente de nuevo."); // Mensaje de error
            }
        } catch (error) {
            console.error("Error:", error);
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
                <button type="submit">Registrar</button>
            </form>
            <p>Ya tiene cuenta?<Link to="/login"> Inicie Sesión</Link></p>
        </div>
    );
}

export default Register;