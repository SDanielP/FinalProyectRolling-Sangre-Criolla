import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import logo from '../../assets/img/homeIMG/perfil-negro-1v2-100x100.jpg';
import Cart from "../shop/carts/cart";

function Navbar() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [cartProducts, setCartProducts] = useState([]); // Estado para almacenar los productos del carrito

  // Función para cargar los productos del carrito desde el almacenamiento local
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    setCartProducts(cartData);
  }, []);
  
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
                Comprar todo
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about-us" className="nav-link" aria-current="page">
                Nosotros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/products/all"
                className="nav-link"
                aria-current="page"
              >
                Contacto
              </NavLink>
            </li>
            <li className="nav-item" id="itemToHide">
              <NavLink to="/" className="nav-link" aria-current="page">
                Administracion
              </NavLink>
            </li>
            <li className="nav-item" id="itemToHide">
              <NavLink to="/" className="nav-link" aria-current="page">
                Iniciar sesión
              </NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              id="filtro"
              className="form-control me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
              maxLength="30"
            />
            <button className="bg-transparent ms-2" type="submit">
              <i className="bi bi-search"></i>
            </button>
            </form>
            <NavLink to="#" onClick={toggle}>
              <button className="ms-2 bg-transparent" type="button">
                <FontAwesomeIcon
                 icon={faCartShopping}
                 style={{ color: "#000000" }}
                />
              </button>

             </NavLink>
             <Cart isOpen={modal} toggle={toggle} cartProducts={cartProducts} setCartProducts={setCartProducts} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
