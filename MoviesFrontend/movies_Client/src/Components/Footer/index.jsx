import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Footer_Nav, Menu } from "./styles";

export default function Footer() {

    return (
        <Footer_Nav>
            <div className="logo">
                <img src="./src/Img/cinelogo.png" alt="" />
            </div>
            <div className="links">
                <Menu>
                    <li><a href="#">Buscar</a></li>
                    <li><a href="#"><FaShoppingCart /></a></li>
                </Menu>
            </div>
            <div className="legal">
                <Menu>
                    <li><a href="">Politica de Privacidad</a></li>
                    <li><a href="">Terminos y Condiciones</a></li>
                    <li><a href="">Cambios y devoluciones</a></li>
                </Menu>
            </div>
            <div className="copyright">
                <p>© 2024 CineMax. Todos los derechos reservados.</p>
            </div>
        </Footer_Nav>
    )





}