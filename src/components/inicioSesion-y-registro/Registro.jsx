import React,{ useState } from 'react';
import "../../styles/styleInicioSesion.css"
import toast, {Toaster}  from 'react-hot-toast';
import {useRef} from 'react';
const url = "https://sangrecriolla-back-end.onrender.com";

const Registro = ({toggleComponent}) => {
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    // const form = useRef(null);

    // Handler para el cambio de los campos del formulario
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handler para el envío del formulario de registro

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();  
        try {
            const response = await fetch(`https://sangrecriolla-back-end.onrender.com/api/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                console.log('Usuario registrado con éxito.');
                toast.success('Usuario registrado con éxito.');
                // form.current.reset()
                e.target.reset();
            } else {
                console.error('Error al registrar el usuario:', response.statusText);
                toast.error('Error al registrar el usuario:');
            }
        } catch (error) {
            console.error('Error al registrar el usuario:', error);
            toast('Error al registrar el usuario:');
        }
    };
    return (
        <div className="componente-iniciarSesion">
            <h1 className="titulo-iniciarSesion transparente-iniciarSesion">Regístrate</h1>
            <a className="transparente-iniciarSesion btnChange-iniciarSesion" onClick={toggleComponent}>¿Ya tienes un perfil personal? Inicia sesión</a>
            <div className="formularioInput-iniciarSesion">
                <form className="formulario-iniciarSesion transparente-iniciarSesion" onSubmit={handleRegisterSubmit} action="">

                    {/* --- INPUT DE NOMBRE --- */}
                    <label htmlFor="name">Nombre y Apellido</label>
                    <input className="input-iniciarSesion transparente-iniciarSesion" type="text" name="name" autoComplete="off" id="name" required value={formData.nombre} onChange={handleInputChange} />

                    {/* --- INPUT DE EMAIL --- */}
                    <label htmlFor="email">Correo electrónico</label>
                    <input className="input-iniciarSesion transparente-iniciarSesion" type="email" autoComplete="off" name='email'id='email' value={formData.email} onChange={handleInputChange} />

                    {/* --- INPUT DE CONTRASEÑA --- */}
                    <label htmlFor="password">Contraseña</label>
                    <input className="input-iniciarSesion transparente-iniciarSesion" type="password" autoComplete="off" id='password' name= 'password' value={formData.password} onChange={handleInputChange} required />

                    {/* --- INPUT DE CONFIRMAR CONTRASEÑA --- */}
                    {/* <input className="input-iniciarSesion transparente-iniciarSesion" type="password" autoComplete="off" id='confirmContraseña' name= 'confirmPassword' placeholder="Confirmar contraseña" required /><br /> */}
                    <button type="submit" className='submit-iniciarSesion'>Registrarse</button>
                    <Toaster/>
                </form>
            </div>
        </div>
    )
}
export default Registro;