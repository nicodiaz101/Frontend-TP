import CreateMovie from "../Components/createMovie/createMovie";
import Navbar from "../components/Navbar";
import PrivateRoute from "../components/PrivateRoute";
import "./newMovie.css";
import Footer from '../components/Footer'

const NewMovie = () => {
    return (
        <PrivateRoute requiredRole="ADMIN">
            <Navbar></Navbar>
            <div className="newMovieForm">
                <CreateMovie></CreateMovie>
            </div>
            <Footer></Footer>
        </PrivateRoute>
    );
}

export default NewMovie;