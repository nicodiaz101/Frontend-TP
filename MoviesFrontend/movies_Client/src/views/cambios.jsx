import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import "./cambios.css";

const Cambios = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="cContainer">
                <h1>Cambios y devoluciones</h1>
                <p className="pCambios">
                    En nuestra tienda, aceptamos cambios y devoluciones dentro de los 30 días posteriores a la compra. 
                    Para ser elegible para un cambio o devolución, el artículo debe estar en las mismas condiciones en que lo recibió, 
                    sin usar y en su embalaje original. Por favor, conserve el recibo o comprobante de compra. 
                    Para iniciar un proceso de cambio o devolución, contáctenos a través de nuestro servicio de atención al cliente.
                </p>
            </div>
            <Footer></Footer>
        </>
    );
}

export default Cambios;