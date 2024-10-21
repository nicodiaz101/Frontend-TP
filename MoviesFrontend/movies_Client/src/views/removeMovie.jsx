import Navbar from "../components/Navbar";
import PrivateRoute from "../components/PrivateRoute";

const RemoveMovie = () => {
    return (
        <PrivateRoute requiredRole="ADMIN">
            <Navbar></Navbar>
            <h1>Remove Movie Page!</h1>
            <p>Choose a movie to remove</p>
            <button>Remove</button>
        </PrivateRoute>
    );
}

export default RemoveMovie;