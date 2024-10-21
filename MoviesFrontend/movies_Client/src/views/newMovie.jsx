import Navbar from "../components/Navbar";
import PrivateRoute from "../components/PrivateRoute";

const NewMovie = () => {
    return (
        <PrivateRoute requiredRole="ADMIN">
            <Navbar></Navbar>
            <h1>Agregar pelicula al catálogo</h1>
            <p>Introduce los datos de la nueva película</p>
            
            <button>Crear pelicula</button>
        </PrivateRoute>
    );
}

export default NewMovie;