import Navbar from "../components/Navbar";
import Login from "../components/Login-Register/Login";
import "./register-loginPage.css";
import Footer from '../components/Footer'

const LoginPage = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="container">
                <Login></Login>
            </div>
            <Footer></Footer>
        </>
    )
}

export default LoginPage;