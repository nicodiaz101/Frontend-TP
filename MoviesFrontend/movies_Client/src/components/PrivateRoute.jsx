import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, requiredRole }) => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("userRole");

    // Verifica si el token existe y si el rol del usuario es el adecuado
    if (!token) {
        alert("Debe iniciar sesión para acceder a esta página.");
        return <Navigate to="/login" />;
    }
    else if (role !== requiredRole) {
        alert("NO TIENE PERMISOS PARA ACCEDER A ESTA PÁGINA!");
        return <Navigate to="/" />;
    }

    return children;
};

export default PrivateRoute;