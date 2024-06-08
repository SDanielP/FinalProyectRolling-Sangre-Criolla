// import './styleInicioSesion.css'

function InicioSesion() {

    // const [formValues, setFormValues] = useState({
    //     email: "",
    //     contraseña: ""
    // });

    // const {email, contraseña} = formValues;
    // const handleChange = () => {
    //     setFormValues({
    //         ...formValues,
    //         [e.target.name]: target.value
    //     })
    // }
    return (

        < div className="formulario" >

            {/* --- INICIAR SESION --- */}
            <h1 className="titulo transparente">Iniciar Sesión</h1>
            <a className="transparente">¿Eres nuevo en este sitio? Regístrate</a>
            <div className="formularioInput">

                {/* --- COMIENZO DE FORMULARIO --- */}
                <form className="transparente" action="">

                    {/* --- INPUT DE EMAIL --- */}
                    <label htmlFor="usuario">Correo electrónico</label>
                    <input className="transparente" type="email" id='email' name="email"  required autoComplete="off" />

                    {/* --- INPUT DE CONTRASEÑA --- */}
                    <label htmlFor="contraseña">Contraseña</label>
                    <input className="transparente" type="password" id='contraseña' name="contraseña" required autoComplete="off" />
                </form>

                {/* --- BOTON SUBMIT --- */}
                <button className='submit transparente'>Iniciar sesion</button>
            </div>

            {/* --- BOTON DE REDIRECCION PARA RECUPERAR CONTRASEÑA --- */}
            <a>¿Olvidaste la contraseña?</a>
        </div >
    )
}
export default InicioSesion