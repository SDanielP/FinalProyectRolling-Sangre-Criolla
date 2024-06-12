import React from 'react'
import '../styles/styleRecuperarContra.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'


export const RecuperacionContra = () => {

  
  const [formData, setFormData] = useState({
    email: ''
    });
    
  const [error, setError] = useState(false);

  // Handler para el cambio de los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRecuperacionSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/api/auth/recuperarContra', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formData }),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok && data.message === "Email de recuperación enviado con éxito.") {
        // setError(true)
        alert("Email de recuperación enviado con éxito");
        console.log('Email de recuperación enviado con éxito.');

        // Aquí puedes agregar la lógica adicional, como redireccionar al usuario a otra página.
      } else {
        console.error('Error al ingresar el usuario:', data.message || response.statusText);
      }

      console.log(data.message)
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <>
      <div className='formulario'>
        <div className='formularioInput'>
          <h1 className="titulo transparente">Restablece la contraseña</h1>
          <h3 className='texto'>Ingresa tu correo electrónico de inicio de sesión y te enviaremos un enlace para restablecer tu contraseña</h3>
        </div>
        <div className="formularioInput">
          <form onSubmit={handleRecuperacionSubmit} className="transparente" action="">
            <label htmlFor="email">Correo electrónico</label>
            <input className="transparente" name='email' type="email" id='email' value={formData.email} onChange={handleInputChange} required />
            <button type="submit" className='submit transparente'>Enviar</button>
          </form>
        </div>
      </div>
      <NavLink to="/" >
        <button className="buttonVolver">Volver a Home</button>
      </NavLink>
    </>
  )
}


