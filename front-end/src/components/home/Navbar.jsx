import React from 'react';

function Navbar() {
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
        <a className="logo fuenteLogo" href="#">
          <img
            src="/img/perfil-negro-1v2-100x100.jpg"
            alt="2 modelos"
            className="w-100 img-fluid"
          />
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-grow-1 justify-content-center paddingNav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Colección
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Otoño
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Invierno
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Primavera
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Verano
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contacto
              </a>
            </li>
            <li className="nav-item" id="itemToHide">
              <a className="nav-link" href="#">
                Administracion
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              id="filtro"
              className="me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
              maxLength="30"
            />
            <button className="bg-transparent ms-2" type="submit">
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
