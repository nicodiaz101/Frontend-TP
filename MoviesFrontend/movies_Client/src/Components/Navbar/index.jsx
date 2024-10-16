import React from "react";
import { Header, Nav, Menu } from "./styles";
import { IoMenu } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [open, setOpen] = React.useState(false);
    return (
        <Header>
            <Nav>
                <div className="logo">
                    <img src="./src/Img/cinelogo.png" alt="" />
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
                    <Link to="/login">
                        <button>
                            Iniciar Sesión      
                        </button>
                    </Link>
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