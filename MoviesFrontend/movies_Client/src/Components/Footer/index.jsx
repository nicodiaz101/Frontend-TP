import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Footer_Nav } from "./styles";

export default function Footer() {

    return (
        <Footer_Nav>
            <div className="logo">
                <img src="./src/Img/cinelogo.png" alt="" />
            </div>
            <div className="links">
                <li>
                    <Link to="/buscar">Buscar</Link>
                </li>
                <li>
                    <Link to="/carrito"><FaShoppingCart /></Link>
                </li>
            </div>
            <div className="legal">
                <li><a href="">Politica de Privacidad</a></li>
                <li><a href="">Terminos y Condiciones</a></li>
                <li><a href="">Cambios y devoluciones</a></li>
            </div>
        </Footer_Nav>
    )





}