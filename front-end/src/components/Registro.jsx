import '../styles/styleRegistro.css'

function Registro() {
    return (
        <div className="formulario">
            <h1 className="titulo transparente">Regístrate</h1>
            <a className="transparente">¿Ya tienes un perfil personal? Inicia sesión</a>
            <div className="formularioInput">
                <form className="transparente" action="">
                    <input class="transparente" type="text" name="nombre" autoComplete="off" id="nombre" required maxLength="30" minLength="2" placeholder="Ingrese su Nombre"/>
                    <input class="transparente" type="text" name="apellido" autoComplete="off" id="apellido" required maxLength="30" minLength="2" placeholder="Ingrese su Apellido"/>
                    <input class="transparente" type="text" name="direccion" autoComplete="off" id="direccion" required maxLength="30" minLength="2" placeholder="Ingrese su Domicilio"/>
                    <input class="transparente" type="tel" name="telefono" autoComplete="off" id="telefono" required maxLength="15" minLength="7" placeholder="Ingrese su telefono"/>
                    {/* <label htmlFor="usuario">Usuario o correo electrónico</label><br /> */}
                    <input className="transparente" type="email" autoComplete="off" id='usuario' placeholder="Correo Electrónico" required />
                    {/* <label htmlFor="contraseña">Contraseña</label><br /> */}
                    <input className="transparente" type="password" autoComplete="off" id='contraseña' placeholder="Contraseña" required /><br />
                </form>
                <button className='transparente'>Registrarse</button>
            </div>
        </div>
    )
}
export default Registro