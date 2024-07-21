import React from "react";
import { NavLink } from "react-router-dom";
import profileImage from "../../../assets/img/homeIMG/perfil-negro-1v2-100x100.jpg";
import "../../../styles/components/general/Footer.css";
import SocialContactSection from "./SocialContactSection";

const RrhhSection = () => {
  return (
    <footer>
      {/* Section con contactos y formulario */}
      <section className="conteiner-links-columns">
        <article>
          <form className="ps-0 ps-lg-5">
            <NavLink to="/" className="logo fuenteLogo" onClick={window.scrollTo({ top: 0, behavior: "smooth" })}>
              <img
                src={profileImage}
                alt="logo sin el fondo"
                className="w-10 "
              />
            </NavLink>
          </form>
        </article>
        <article>
          <ul className="ps-0 ps-lg-5 p-0 m-0">
            <li className="">
              <h5 className="mb-0">Ventas:</h5>
              <NavLink
                to="/page-not-found"
                className="text-decoration-none text-black"
                onClick={window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                ventas@sangrecriolla.com
              </NavLink>
            </li>
            <li className="d-flex flex-column my-3">
              <h5 className="m-0">Atención al cliente:</h5>
              <NavLink
                to="/page-not-found"
                className="text-decoration-none text-black"
                onClick={window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                3810000000
              </NavLink>
              <NavLink
                to="/page-not-found"
                className="text-decoration-none text-black"
                onClick={window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                ayuda@sangrecriolla.com
              </NavLink>
            </li>
            <li className="">
              <h5 className="m-0">Trabajá con nosotros:</h5>
              <NavLink
                to="/page-not-found"
                className="text-decoration-none text-black"
                onClick={window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                rrhh@sangrecriolla.com
              </NavLink>
            </li>
          </ul>
        </article>
        <article className="links-cliente">
          <ul className="ps-0 ps-lg-5 p-0 m-0">
            <li className="mb-1">
              <NavLink
                to="/page-not-found"
                className="text-decoration-none text-black"
                onClick={window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Cómo comprar
              </NavLink>
            </li>
            <li className="mb-1">
              <NavLink
                to="/page-not-found"
                className="text-decoration-none text-black"
                onClick={window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Cambios y devoluciones
              </NavLink>
            </li>
            <li className="mb-1">
              <NavLink
                to="/page-not-found"
                className="text-decoration-none text-black"
                onClick={window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Envíos
              </NavLink>
            </li>
            <li className="mb-1">
              <NavLink
                to="/page-not-found"
                className="text-decoration-none text-black"
                onClick={window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Pagos
              </NavLink>
            </li>
            <li className="mb-1">
              <NavLink
                to="/frequent-questions"
                className="text-decoration-none text-black"
                onClick={window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Preguntas frecuentes
              </NavLink>
            </li>
          </ul>
        </article>
        <article>
          <SocialContactSection />
        </article>
      </section>

      <section></section>
    </footer>
  );
};

export default RrhhSection;
