import Navbar from "../components/Navbar";
import Carrito from '../components/Carrito/Carrito'
import Footer from '../components/Footer'
import './CarritoPage.css'

const CarritoPage = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="cart-container">
                <Carrito></Carrito>
            </div>
            <Footer></Footer>
        </>
    )
}

export default CarritoPage;