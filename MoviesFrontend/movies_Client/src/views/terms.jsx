import Navbar from "../components/Navbar";
import Footer from '../components/Footer'
import "./terms.css";

const Terminos = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="cContainer">
                <h1>Terminos y Condiciones del marketplace</h1>
                <p className="pTerms">Bienvenido a nuestro marketplace. Al utilizar este sitio web, usted acepta cumplir y estar sujeto a los siguientes términos y condiciones de uso:</p>
                <h2>1. Uso del Sitio</h2>
                <p className="pTerms">El contenido de las páginas de este sitio web es para su información general y uso exclusivo. Está sujeto a cambios sin previo aviso.</p>
                <h2>2. Propiedad Intelectual</h2>
                <p className="pTerms">Este sitio web contiene material que es propiedad o está licenciado para nosotros. Este material incluye, pero no se limita a, el diseño, la apariencia y los gráficos. La reproducción está prohibida salvo en conformidad con el aviso de copyright, que forma parte de estos términos y condiciones.</p>
                <h2>3. Enlaces a Otros Sitios Web</h2>
                <p className="pTerms">De vez en cuando, este sitio web también puede incluir enlaces a otros sitios web. Estos enlaces se proporcionan para su conveniencia para proporcionar más información. No significan que respaldamos el sitio web(s). No tenemos ninguna responsabilidad por el contenido del sitio web vinculado(s).</p>
                <h2>4. Limitación de Responsabilidad</h2>
                <p className="pTerms">El uso de cualquier información o material en este sitio web es completamente bajo su propio riesgo, por lo cual no seremos responsables. Será su propia responsabilidad asegurarse de que cualquier producto, servicio o información disponible a través de este sitio web cumpla con sus requisitos específicos.</p>
                <h2>5. Ley Aplicable</h2>
                <p className="pTerms">El uso de este sitio web y cualquier disputa que surja de dicho uso del sitio web está sujeto a las leyes de [su país/estado].</p>
            </div>
            <Footer></Footer>
        </>
    );
}

export default Terminos;