import Navbar from "../components/Navbar";
import Footer from '../components/Footer'

const PrivacyPolitics = () => {
    return (
        <>
            <Navbar></Navbar>
            <h1>Privacy Politics</h1>
            <div className="politicasPriv">
                <h2>Política de Privacidad</h2>
                <p>
                    En nuestra empresa, valoramos su privacidad y nos comprometemos a proteger su información personal. Esta política de privacidad describe cómo recopilamos, usamos y protegemos su información.
                </p>
                <h3>Recopilación de Información</h3>
                <p>
                    Recopilamos información personal que usted nos proporciona directamente, como su nombre, dirección de correo electrónico y número de teléfono. También podemos recopilar información automáticamente a través de cookies y tecnologías similares.
                </p>
                <h3>Uso de la Información</h3>
                <p>
                    Utilizamos su información personal para proporcionar y mejorar nuestros servicios, comunicarnos con usted y cumplir con nuestras obligaciones legales. No compartimos su información con terceros, excepto cuando sea necesario para cumplir con la ley o proteger nuestros derechos.
                </p>
                <h3>Protección de la Información</h3>
                <p>
                    Implementamos medidas de seguridad adecuadas para proteger su información personal contra el acceso no autorizado, la alteración, divulgación o destrucción. Sin embargo, no podemos garantizar la seguridad absoluta de su información.
                </p>
                <h3>Sus Derechos</h3>
                <p>
                    Usted tiene derecho a acceder, corregir o eliminar su información personal. Si desea ejercer estos derechos, por favor contáctenos a través de la información proporcionada en nuestro sitio web.
                </p>
                <h3>Contacto</h3>
                <p>
                    Si tiene alguna pregunta o inquietud sobre nuestra política de privacidad, no dude en contactarnos.
                </p>
            </div>
            <Footer></Footer>
        </>
    );
}

export default PrivacyPolitics;