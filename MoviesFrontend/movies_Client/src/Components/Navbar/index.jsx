import React from "react";
import { Header, Nav, Menu } from "./styles";
export default function Navbar() {
    return (
        <Header>
            <Nav>
                <div className="logo">
                    <img src="./src/Img/cinelogo.png" alt="" />
                </div>
                <Menu>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Buscar</a></li>
                </Menu>
                <div className="btn">
                    <button>Registrarse/Iniciar Sesion</button>
                </div>
            </Nav>
        </Header>
    )
}