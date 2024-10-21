import Navbar from "../components/Navbar";
import PrivateRoute from "../components/PrivateRoute";

const RemoveMovie = () => {
    return (
        <PrivateRoute requiredRole="ADMIN">
            <Navbar></Navbar>
            <div className="rmMovie">
                <RemoveMovie></RemoveMovie>
            </div>
        </PrivateRoute>
    );
}

export default RemoveMovie;