import "./register-login.css";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="r-container">
            <span className="title">Registro</span>
            <form>
                <input type="text" placeholder="Nombre"></input>
                <input type="text" placeholder="Apellido"></input>
                <input type="country" placeholder="País"></input>
                <input type="email" placeholder="Correo Electrónico"></input>
                <input type="text" placeholder="Nombre de Usuario"></input>
                <input type="password" placeholder="Contraseña"></input>
                <input type="password" placeholder="Confirmar Contraseña"></input>
                <button>Registrar</button>
            </form>

                <p>Ya tiene cuenta?<Link to = "/login"> Inicie Sesión</Link></p>

        </div>
    );
}

export default Register;