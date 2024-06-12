import React from 'react'
import '../styles/styleRecuperarContra.css'
export const RecuperacionContra = () => {
  return (
    <>
      <div className='formulario'>
        <div className='formularioInput'>
          <h1 className="titulo transparente">Restablece la contraseña</h1>
          <h3 className='texto'>Ingresa tu correo electrónico de inicio de sesión y te enviaremos un enlace para restablecer tu contraseña</h3>
        </div>
        <div className="formularioInput">
          <form className="transparente" action="">
            <label htmlFor="usuario">Correo electrónico</label>
            <input className="transparente" type="text" id='usuario' required />
          </form>
          <button className='submit transparente'>Enviar</button>
        </div>
      </div>

      <button className="buttonVolver">Volver a Home</button>
    </>
  )
}

