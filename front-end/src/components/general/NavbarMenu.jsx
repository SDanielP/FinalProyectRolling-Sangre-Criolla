import React, { useState } from "react";
// import styled from 'styled-components'
// import BurguerButton from './BurguerButton'
import "../../styles/components/general/NavbarMenu.css";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar la búsqueda
    console.log("Realizar búsqueda:", searchQuery);
  };

  const [showPromoText, setShowPromoText] = useState(true); // State to control visibility
  
  const handleRemovePromo = () => {
    setShowPromoText(false); // Update state to hide section
  };


  return (
    <>
      {showPromoText && ( // Conditionally render section based on state
        <section className="info-prom">
          <p className="texto-prom">Texto informativo para promociones</p>
          <FontAwesomeIcon icon={faX} size="sm" onClick={handleRemovePromo} className="x"/>  
          
        </section>
      )}

      <nav className="contenedor">
        <NavLink to="/">
          <h2 className="logo-sitio">
          Sangre Criolla
          </h2>
        </NavLink>

        <div className="navegacion">
          <NavLink to="/">Home</NavLink>
          <NavLink to="products/all">Productos</NavLink>
          <NavLink to="about">Sobre nosotros</NavLink>
          <NavLink to="contact">Contacto</NavLink>
        </div>

        <div className="buscador-usuario">
          <div className="buscador-usuario-elemento">
            <form onSubmit={handleSearchSubmit} className="search-form">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Buscar..."
                className="search-input"
              />
              <button type="submit" className="search-button">
                Buscar
              </button>
            </form>
          </div>

          <div className="buscador-usuario-elemento">
            <NavLink to="login">Iniciar sesión</NavLink>
          </div>

          <div className="buscador-usuario-elemento">
            <NavLink to="cart">Carrito de compras</NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
