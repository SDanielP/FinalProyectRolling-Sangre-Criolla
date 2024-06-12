import { NavLink } from 'react-router-dom';
import '../styles/styleInicioSesion.css'
import { useState } from 'react';

function InicioSesion() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    // Handler para el cambio de los campos del formulario
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handler para el envío del formulario de registro
    const handleLoginSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:4000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData) // Convertir formData a JSON
            });

            const data = await response.json();

            if (response.ok && data.message === "logueo exitoso") {
                alert("Logeo exitoso");
                console.log('Usuario logueado con éxito.');
                // Aquí puedes agregar la lógica adicional, como redireccionar al usuario a otra página.
            } else {
                console.error('Error al ingresar el usuario:', data.message || response.statusText);
            }
        } catch (error) {
            console.error('Error al ingresar el usuario:', error);
        }
    };


    return (

        < div className="formulario" >

            {/* --- INICIAR SESION --- */}
            <h1 className="titulo transparente">Iniciar Sesión</h1>
            <a className="transparente">¿Eres nuevo en este sitio? Regístrate</a>
            <div className="formularioInput">

                {/* --- COMIENZO DE FORMULARIO --- */}
                <form className="transparente" onSubmit={handleLoginSubmit} action="">

                    {/* --- INPUT DE EMAIL --- */}
                    <label htmlFor="email">Correo electrónico</label>
                    <input className="transparente" type="email" id='email' name="email" value={formData.email} onChange={handleInputChange} required autoComplete="off" />

                    {/* --- INPUT DE CONTRASEÑA --- */}
                    <label htmlFor="contraseña">Contraseña</label>
                    <input className="transparente" type="password" id='password' name="password" required autoComplete="off" value={formData.password} onChange={handleInputChange} />

                    {/* --- BOTON SUBMIT --- */}
                    <button type='submit' className='submit transparente'>Iniciar sesión</button>
                </form>
            </div>

            {/* --- BOTON DE REDIRECCION PARA RECUPERAR CONTRASEÑA --- */}
            <NavLink to="/recuperacionContra">¿Olvidaste la contraseña?</NavLink>
        </div >
    )
}
export default InicioSesion