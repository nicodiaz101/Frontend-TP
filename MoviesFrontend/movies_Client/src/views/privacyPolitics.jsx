import Navbar from "../components/Navbar";
import Footer from '../components/Footer'
import "./privacyPolitics.css";

const PrivacyPolitics = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="politicasPriv">
                <h1>Política de Privacidad</h1>
                <p className="pTerms">
                    En nuestra empresa, valoramos su privacidad y nos comprometemos a proteger su información personal. Esta política de privacidad describe cómo recopilamos, usamos y protegemos su información.
                </p>
                <h2>Recopilación de Información</h2>
                <p className="pTerms">
                    Recopilamos información personal que usted nos proporciona directamente, como su nombre, dirección de correo electrónico y número de teléfono. También podemos recopilar información automáticamente a través de cookies y tecnologías similares.
                </p>
                <h2>Uso de la Información</h2>
                <p className="pTerms">
                    Utilizamos su información personal para proporcionar y mejorar nuestros servicios, comunicarnos con usted y cumplir con nuestras obligaciones legales. No compartimos su información con terceros, excepto cuando sea necesario para cumplir con la ley o proteger nuestros derechos.
                </p>
                <h2>Protección de la Información</h2>
                <p className="pTerms">
                    Implementamos medidas de seguridad adecuadas para proteger su información personal contra el acceso no autorizado, la alteración, divulgación o destrucción. Sin embargo, no podemos garantizar la seguridad absoluta de su información.
                </p>
                <h2>Sus Derechos</h2>
                <p className="pTerms">
                    Usted tiene derecho a acceder, corregir o eliminar su información personal. Si desea ejercer estos derechos, por favor contáctenos a través de la información proporcionada en nuestro sitio web.
                </p>
                <h2>Contacto</h2>
                <p className="pTerms">
                    Si tiene alguna pregunta o inquietud sobre nuestra política de privacidad, no dude en contactarnos.
                </p>
            </div>
            <Footer></Footer>
        </>
    );
}

export default PrivacyPolitics;