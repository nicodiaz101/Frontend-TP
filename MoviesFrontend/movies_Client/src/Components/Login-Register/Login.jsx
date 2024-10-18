import "./register-login.css";
import { Link } from "react-router-dom";

const Login = () => {
    return(
        <div className="r-container">
            <span className="title">Iniciar Sesión</span>
            <form>
                <input type="email" placeholder="Correo Electrónico"></input>
                <input type="password" placeholder="Contraseña"></input>
                <button>Iniciar Sesión</button>
            </form>
            <p>No tiene cuenta?<Link to = "/register"> Registrese</Link></p>
        </div>
    )
}

export default Login;