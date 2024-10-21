import Navbar from "../components/Navbar";
import PrivateRoute from "../components/PrivateRoute";

const AdminPage = () => {
    return (
        <PrivateRoute requiredRole="ADMIN">
            <Navbar></Navbar>
            <h1>Admin Page!</h1>
            <p>Elige una de las opciones</p>
            <button>Agregar una pelicula</button>
            <button>Eliminar una pelicula</button>
        </PrivateRoute>
    );
}

export default AdminPage;