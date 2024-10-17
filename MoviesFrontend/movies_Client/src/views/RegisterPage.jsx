import Navbar from "../components/Navbar";
import Register from "../components/Login-Register/Register";
import "./registerPage.css";

const RegisterPage = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="register-container">
                <Register></Register>
            </div>
        </>
    );
}

export default RegisterPage;