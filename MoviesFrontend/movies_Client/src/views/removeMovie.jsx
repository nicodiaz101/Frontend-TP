import Navbar from "../components/Navbar";
import PrivateRoute from "../components/PrivateRoute";
import Footer from '../components/Footer'

const RemoveMovie = () => {
    return (
        <PrivateRoute requiredRole="ADMIN">
            <Navbar></Navbar>
            <div className="rmMovie">
                <RemoveMovie></RemoveMovie>
            </div>
            <Footer></Footer>
        </PrivateRoute>
    );
}

export default RemoveMovie;