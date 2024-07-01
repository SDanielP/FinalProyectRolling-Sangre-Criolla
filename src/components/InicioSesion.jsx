import { NavLink } from 'react-router-dom';
import '../styles/styleInicioSesion.css'
import { useState } from 'react';
const url = "https://sangrecriolla-back-end.onrender.com";

    const InicioSesion = ({toggleComponent}) => {
    
    const [formData, setFormData] = useState({
        email: '',
        password: ''
        });
    const [error, setError] = useState(false);

    // Handler para el cambio de los campos del formulario
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handler para el envío del formulario de login
    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://sangrecriolla-back-end.onrender.com/api/auth/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData) // Convertir formData a JSON
            });
            const data = await response.json();
            if (response.ok && data.message === "logueo exitoso") {
                setError(true)
                alert("Logueo exitoso");
                console.log('Usuario logueado con éxito.');
                if (data.user.role === "ADMIN") {
                    window.location.href = '/admin'; // URL para administradores
                } else if (data.user.role === "USER") {
                    window.location.href = '/products/all'; // URL para usuarios normales
                } else {
                    console.log('Usuario logueado con éxito pero sin rol definido.');
                }
            } else {
                console.error('Error al ingresar el usuario:', data.message || response.statusText);
            }
        } catch (error) {
            console.error('Error al ingresar el usuario:', error);
        }
    };

    return (
        < div className="componente-iniciarSesion" >
            {/* --- INICIAR SESION --- */}
            <h1 className="titulo-iniciarSesion transparente">Iniciar Sesión</h1>
            <a className="transparente-iniciarSesion btnChange-inicarSesion" onClick={toggleComponent}>¿Eres nuevo en este sitio? Regístrate</a>
            <div className="formularioInput-iniciarSesion">
                {/* --- COMIENZO DE FORMULARIO --- */}
                <form className="formulario-iniciarSesion transparente-iniciarSesion" onSubmit={handleLoginSubmit} action="">
                    {/* --- INPUT DE EMAIL --- */}
                    <label htmlFor="email">Correo electrónico</label>
                    <input className="input-iniciarSesion transparente-iniciarSesion" type="email" id='email' name="email" value={formData.email} onChange={handleInputChange} required autoComplete="off" />
                    {/* --- INPUT DE CONTRASEÑA --- */}
                    <label htmlFor="password">Contraseña</label>
                    <input className="input-iniciarSesion transparente-iniciarSesion" type="password" id='password' name="password" required autoComplete="off" value={formData.password} onChange={handleInputChange} />
                    {/* --- BOTON SUBMIT --- */}
                    <button type='submit' className='submit-iniciarSesion '>Iniciar sesión</button>
                </form>
            </div>
            {error && <p>Error al ingresar el usuario</p>}
            {/* --- BOTON DE REDIRECCION PARA RECUPERAR CONTRASEÑA --- */}
            <NavLink to="/recuperacion-contrasena">¿Olvidaste la contraseña?</NavLink>
        </div >
    )
}
export default InicioSesion;