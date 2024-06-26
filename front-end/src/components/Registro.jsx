import { useState } from 'react';
import '../styles/styleRegistro.css'

const Registro = ({toggleComponent}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    // Handler para el cambio de los campos del formulario
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handler para el envío del formulario de registro
    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://localhost:4000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData) // Convertir formData a JSON
            });
            if (response.ok) {
                console.log('Usuario registrado con éxito.');
                // Aquí puedes agregar la lógica adicional, como redireccionar al usuario a otra página.
            } else {
                console.error('Error al registrar el usuario:', response.statusText);
            }
        } catch (error) {
            console.error('Error al registrar el usuario:', error);
        }
    };
    return (
        <div className="formulario">
            <h1 className="titulo transparente">Regístrate</h1>
            <a className="transparente btnChange" onClick={toggleComponent}>¿Ya tienes un perfil personal? Inicia sesión</a>
            <div className="formularioInput">
                <form className="transparente" onSubmit={handleRegisterSubmit} action="">

                    {/* --- INPUT DE NOMBRE --- */}
                    <input className="transparente" type="text" name="name" autoComplete="off" id="nombre" required placeholder="Ingrese su Nombre" value={formData.nombre} onChange={handleInputChange} />

                    {/* --- INPUT DE APELLIDO --- */}
                    {/* <input className="transparente" type="text" name="apellido" autoComplete="off" id="apellido" required maxLength="30" minLength="2" placeholder="Ingrese su Apellido" /> */}

                    {/* --- INPUT DE DIRECCION --- */}
                    {/* <input className="transparente" type="text" name="direccion" autoComplete="off" id="direccion" required maxLength="30" minLength="2" placeholder="Ingrese su Domicilio" /> */}

                    {/* --- INPUT DE TELEFONO --- */}
                    {/* <input className="transparente" type="tel" name="telefono" autoComplete="off" id="telefono" required maxLength="15" minLength="7" placeholder="Ingrese su telefono" /> */}

                    {/* --- INPUT DE EMAIL --- */}
                    <input className="transparente" type="email" autoComplete="off" name='email'id='email' placeholder="Correo Electrónico" value={formData.email} onChange={handleInputChange} />

                    {/* --- INPUT DE CONTRASEÑA --- */}
                    <input className="transparente" type="password" autoComplete="off" id='contraseña' name= 'password'placeholder="Contraseña" value={formData.password} onChange={handleInputChange} required />

                    {/* --- INPUT DE CONFIRMAR CONTRASEÑA --- */}
                    {/* <input className="transparente" type="password" autoComplete="off" id='confirmContraseña' name= 'confirmPassword' placeholder="Confirmar contraseña" required /><br /> */}
                    <button type="submit" className='transparente'>Registrarse</button>
                </form>
            </div>
        </div>
    )
}
export default Registro;