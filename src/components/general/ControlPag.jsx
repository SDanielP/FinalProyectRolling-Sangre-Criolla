import React from "react";

const ControlPag = () => {
  return (
    <section className="p-5 d-flex justify-content-center">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item ps-2 pe-2">
            <a className="page-link btn" href="">
              Categoría
            </a>
          </li>
          <li className="page-item ps-2 pe-2">
            <a className="page-link btn" href="">
              Categoría
            </a>
          </li>
          <li className="page-item ps-2 pe-2">
            <a className="page-link btn" href="">
              Categoría
            </a>
          </li>
          <li className="page-item ps-2 pe-2">
            <a className="page-link btn" href="">
              Categoría
            </a>
          </li>
          <li className="page-item ps-2 pe-2">
            <a className="page-link btn" href="">
              Categoría
            </a>
          </li>
        </ul>
        <span className="d-flex justify-content-center" id="paginacion-txt">
          Visita nuestras otras categorías
        </span>
      </nav>
    </section>
  );
};

export default ControlPag;
