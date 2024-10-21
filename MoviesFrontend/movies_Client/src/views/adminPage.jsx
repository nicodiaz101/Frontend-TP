import Navbar from "../components/Navbar";
import PrivateRoute from "../components/PrivateRoute";
import { Link } from "react-router-dom";
import "./adminPage.css";

const AdminPage = () => {
    return (
        <PrivateRoute requiredRole="ADMIN">
            <Navbar></Navbar>
            <h1>Admin Page!</h1>
            <p>Elige una de las opciones</p>
            <div className="buttons">
                <Link to="/newMovie">
                    <button>
                        Agregar pelicula al cátalogo
                    </button>
                </Link>
                <Link to="/removeMovie">
                    <button>
                        Eliminar pelicula del cátalogo
                    </button>
                </Link>
            </div>
        </PrivateRoute>
    );
}

export default AdminPage;