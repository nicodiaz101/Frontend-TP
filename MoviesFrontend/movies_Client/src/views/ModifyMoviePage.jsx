import ModifyMovie from "../components/ModifyMovie/ModifyMovie"; // Asegúrate de que esta ruta sea correcta
import Navbar from "../components/Navbar";
import PrivateRoute from "../components/PrivateRoute";
import Footer from "../components/Footer";
import "./ModifyMoviePage.css";

const ModifyMoviePage = () => {
    return (
        <PrivateRoute requiredRole="ADMIN">
            <Navbar />
            <div className="modifyMovieForm">
                <ModifyMovie></ModifyMovie>
            </div>
            <Footer />
        </PrivateRoute>
    );
};

export default ModifyMoviePage;
