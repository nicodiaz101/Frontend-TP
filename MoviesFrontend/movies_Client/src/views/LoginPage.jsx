import Navbar from "../components/Navbar";
import Login from "../components/Login-Register/Login";
import "./register-loginPage.css";

const LoginPage = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="container">
                <Login></Login>
            </div>
        </>
    )
}

export default LoginPage;