import React from 'react'
import '../styles/styleRecuperarContra.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import Banner from '../components/home/Banner'
import NavbarMenu from '../components/general/NavbarMenu'

const RecuperacionContra = () => {
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
      <Banner />
      <NavbarMenu />
      <section className='section-recContra'>
        <div className='div-recContra'>
          <h1 className="titulo-recContra transparente-recContra">Restablece la contraseña</h1>
          <h3 className='texto-recContra'>Ingresa tu correo electrónico de inicio de sesión y te enviaremos un enlace para restablecer tu contraseña</h3>
        </div>
        <div className="div-recContra">
          <form onSubmit={handleRecuperacionSubmit} className="transparente-recContra form-recContra" action="">
            <label className='lbl-recContra' htmlFor="email">Correo electrónico</label>
            <input className="transparente-recContra input-recContra" name='email' type="email" id='email' value={formData.email} onChange={handleInputChange} required />
            <button type="submit-recContra" className='submit-recContra transparente-recContra'>Enviar</button>
          </form>
        </div>
      </section>
      <NavLink to="/" >
        <button className="buttonVolverAHome-recContra">Volver a Home</button>
      </NavLink>
    </>
  )
}

export default RecuperacionContra;
