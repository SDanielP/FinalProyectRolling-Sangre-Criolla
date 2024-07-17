import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link } from "react-router-dom";
import logo from '../../assets/img/homeIMG/perfil-negro-1v2-100x100.jpg';
import Cart from "../shop/carts/cart";
import ModalInicioSesion from '../Modal-InicioSesion';
import { useCartModal } from '../../store/useCartModal';

const Navbar = () => {
  const {isOpenCartModal, setOpenCartModal} = useCartModal();
  const toggle = () => setOpenCartModal(!isOpenCartModal);
  const [cartProducts, setCartProducts] = useState([]); // Estado para almacenar los productos del carrito
  const [searchTerm, setSearchTerm] = useState(""); // Estado para almacenar el término de búsqueda

    /* ----- Uso de useNavigate() ----- */
    const navigate = useNavigate(); // Importar useNavigate()

  // Función para cargar los productos del carrito desde el almacenamiento local
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    setCartProducts(cartData);
  }, []);

  // Función para manejar el cambio en el campo de búsqueda
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Función para manejar el envío del formulario de búsqueda
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchTerm}`);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container justify-content-between">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <NavLink to="/" className="logo fuenteLogo">
          <img
            src={logo}
            alt="2 modelos"
            className="w-100 img-fluid"
          />
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-grow-1 justify-content-center paddingNav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link active" aria-current="page">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/products/all"
                className="nav-link"
                aria-current="page"
              >
                Tienda
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about-us" className="nav-link" aria-current="page">
                Nosotros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact-us" className="nav-link" aria-current="page">
                Contacto
              </NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
            <input
              id="filtro"
              className="form-control me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
              maxLength="30"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="bg-transparent ms-2" type="submit">
              <i className="bi bi-search"></i>
            </button>
          </form>
          <Link to="#" onClick={toggle}>
            <button className="ms-2 bg-transparent" type="button">
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ color: "#000000" }}
              />
            </button>
          </Link>
          <Cart isOpen={!isOpenCartModal} toggle={toggle} cartProducts={cartProducts} setCartProducts={setCartProducts} />

          {/* BOTON INICIO SESION */}
          <ModalInicioSesion />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
