import React, { useEffect, useState } from "react";
import { Header, Nav, Menu } from "./styles";
import { IoMenu } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false); // Estado de login
    const navigate = useNavigate();

    // Revisa el estado de autenticación al cargar el componente
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            setLoggedIn(true); // Si hay un usuario, se marca como logueado
        }
    }, []);

    // Función para manejar el cierre de sesión
    const handleLogout = () => {
        localStorage.removeItem("token"); // Remueve el token
        localStorage.removeItem("user"); // Remueve datos del usuario
        setLoggedIn(false); // Actualiza el estado
        navigate("/login"); // Redirige al login
    };

    return (
        <Header>
            <Nav>
                <div className="logo">
                    <img src="./src/Img/cinelogo.png" alt="logo" />
                </div>
                <div className="menu-links">
                    <Menu open={open}>
                        <li>
                            <Link to="/">Inicio</Link>
                        </li>
                        <li>
                            <Link to="/buscar">Buscar</Link>
                        </li>                        
                        <li>
                            <Link to="/carrito"><FaShoppingCart /></Link>
                        </li>
                    </Menu>
                </div>
                <div className="btn">
                    {loggedIn ? (
                        <button onClick={handleLogout}>
                            Cerrar Sesión
                        </button>
                    ) : (
                        <Link to="/login">
                            <button>
                                Iniciar Sesión
                            </button>
                        </Link>
                    )}
                </div>
                <div className="icon-menu">
                    {
                        open ? 
                        <IoClose
                        size="30" 
                        onClick={() => setOpen(!open)}/>
                        : <IoMenu 
                        onClick={() => setOpen(!open)}
                        size="30"></IoMenu>
                    }
                </div>
            </Nav>
        </Header>
    )
}