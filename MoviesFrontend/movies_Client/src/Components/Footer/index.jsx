import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Footer_Nav } from "./styles";
import { Link } from "react-router-dom";

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
                <li> <Link to="/privacyPolitics">Politica de Privacidad</Link></li>
                <li><Link to="/terms">Terminos y Condiciones</Link></li>
                <li><Link to="/cambios">Cambios y devoluciones</Link></li>
            </div>
        </Footer_Nav>
    )





}