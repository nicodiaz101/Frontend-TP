const Register = () => {
    return (
        <div className="r-container">
            <span>---------</span>
            <span>Registro</span>
            <form>
                <input type="text" placeholder="Nombre"></input>
                <input type="text" placeholder="Apellido"></input>
                <input type="email" placeholder="Correo Electrónico"></input>
                <input type="text" placeholder="Nombre de Usuario"></input>
                <input type="password" placeholder="Contraseña"></input>
                <input type="password" placeholder="Confirmar Contraseña"></input>
                <button>Registrar</button>
            </form>
        </div>
    );
}

export default Register;