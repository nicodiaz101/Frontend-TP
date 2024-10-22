import Navbar from "../components/Navbar";
import Register from "../components/Login-Register/Register";
import "./register-loginPage.css";
import Footer from '../components/Footer'

const RegisterPage = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="container">
                <Register></Register>
            </div>
            <Footer></Footer>
        </>
    );
}

export default RegisterPage;