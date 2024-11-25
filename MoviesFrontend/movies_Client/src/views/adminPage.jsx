import Navbar from "../components/Navbar";
import PrivateRoute from "../components/PrivateRoute";
import { Link } from "react-router-dom";
import "./adminPage.css";
import Footer from '../components/Footer'

const AdminPage = () => {
    return (
        <PrivateRoute requiredRole="ADMIN">
            <Navbar></Navbar>
            <div className="adminPage">
                <h1>Admin Page!</h1>
                <p className="pAdmin">Elige una de las opciones</p>
                <div className="buttons">
                    <Link to="/newMovie">
                        <button>
                            Agregar pelicula al cátalogo
                        </button>
                    </Link>
                </div>
            </div>
            <Footer></Footer>
        </PrivateRoute>
    );
}

export default AdminPage;