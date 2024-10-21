import CreateMovie from "../Components/createMovie/createMovie";
import Navbar from "../components/Navbar";
import PrivateRoute from "../components/PrivateRoute";
import "./newMovie.css";

const NewMovie = () => {
    return (
        <PrivateRoute requiredRole="ADMIN">
            <Navbar></Navbar>
            <div className="newMovieForm">
                <CreateMovie></CreateMovie>
            </div>
        </PrivateRoute>
    );
}

export default NewMovie;