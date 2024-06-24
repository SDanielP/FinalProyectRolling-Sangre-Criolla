import React from "react";
import logo from "../../../assets/img/homeIMG/perfil-negro-1v2-100x100.jpg"
import { NavLink } from "react-router-dom";

const RrhhSection = () => {
  return (
    <footer className="container-fluid bg-white">
      {/* Section con contactos y formulario */}
      <section className="p-4 row">
        <article className="col-12 col-md-4">
          <form className="ps-0 ps-lg-5">
            <fieldset>
                <img
                  src="./img/logosinfondonegro.png"
                  alt="logo sin el fondo"
                  className="w-50 img-fluid"
                />
            </fieldset>
          </form>
        </article>
        <article className="my-5 my-md-0 col-12 col-md-4">
          <ul className="ps-0 ps-lg-5 p-0 m-0">
            <li className="">
              <h5 className="mb-0">Ventas:</h5>
              <NavLink
                to="*"
                className="text-decoration-none text-black"
              >
                ventas@sangrecriolla.com
              </NavLink>
            </li>
            <li className="d-flex flex-column my-3">
              <h5 className="m-0">Atención al cliente:</h5>
              <NavLink
                to="*"
                className="text-decoration-none text-black"
              >
                3810000000
              </NavLink>
              <NavLink
                to="*"
                className="text-decoration-none text-black"
              >
                ayuda@sangrecriolla.com
              </NavLink>
            </li>
            <li className="">
              <h5 className="m-0">Trabajá con nosotros:</h5>
              <NavLink
                to="*"
                className="text-decoration-none text-black"
              >
                rrhh@sangrecriolla.com
              </NavLink>
            </li>
          </ul>
        </article>
        <article className="col-12 col-md-4">
          <ul className="ps-0 ps-lg-5 p-0 m-0">
            <li className="mb-1">
              <NavLink
                to="*"
                className="text-decoration-none text-black"
              >
                ● Como comprar
              </NavLink>
            </li>
            <li className="mb-1">
              <NavLink
                to="*"
                className="text-decoration-none text-black"
              >
                Cambios & devoluciones
              </NavLink>
            </li>
            <li className="mb-1">
              <NavLink
                to="*"
                className="text-decoration-none text-black"
              >
                Envíos
              </NavLink>
            </li>
            <li className="mb-1">
              <NavLink
                to="*"
                className="text-decoration-none text-black"
              >
                Pagos
              </NavLink>
            </li>
            <li className="mb-1">
              <NavLink
                to="/frequent-questions"
                className="text-decoration-none text-black"
              >
                Preguntas frecuentes
              </NavLink>
            </li>
          </ul>
        </article>
      </section>
    </footer>
  );
};

export default RrhhSection;
