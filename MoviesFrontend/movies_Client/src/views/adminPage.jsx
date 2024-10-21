import Navbar from "../components/Navbar";
import PrivateRoute from "../components/PrivateRoute";

const AdminPage = () => {
    return (
        <PrivateRoute requiredRole="ADMIN">
            <Navbar></Navbar>
            <h1>Admin Page!</h1>
        </PrivateRoute>
    );
}

export default AdminPage;