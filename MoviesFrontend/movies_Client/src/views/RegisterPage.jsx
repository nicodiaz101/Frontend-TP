import Navbar from "../components/Navbar";
import Register from "../components/Login-Register/Register";
import "./register-loginPage.css";

const RegisterPage = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="container">
                <Register></Register>
            </div>
        </>
    );
}

export default RegisterPage;