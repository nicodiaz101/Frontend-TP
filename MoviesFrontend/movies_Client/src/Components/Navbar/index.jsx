import React from "react";
import { Header, Nav, Menu } from "./styles";
import { IoMenu } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
export default function Navbar() {
    const [open, setOpen] = React.useState(false);
    return (
        <Header>
            <Nav>
                <div className="logo">
                    <img src="./src/Img/cinelogo.png" alt="" />
                </div>
                <Menu open={open}>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Buscar</a></li>
                    <li><a href="#"><FaShoppingCart /></a></li>
                </Menu>
                <div className="btn">
                    <button>Registrarse/Iniciar Sesion</button>
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