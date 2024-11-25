import Navbar from "../components/Navbar";
import PrivateRoute from "../components/PrivateRoute";
import Footer from '../components/Footer';
import RemoveMovie from "../components/removeMovie/removeMovie";

const RemoveMoviePage = () => {
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

export default RemoveMoviePage;