import React from "react";
import { NavLink } from "react-router-dom"

const SocialContactSection = () => {
  return (
    <footer className="container">
      <section className="p-4 row">
        <article className="col-12 col-md-4">
          <form className="ps-0 ps-lg-5">
            {/* Formulario de suscripción */}
          </form>
        </article>
        <article className="my-5 my-md-0 col-12 col-md-4">
          <ul className="ps-0 ps-lg-5 p-0 m-0">
            {/* Información de contacto */}
          </ul>
        </article>
        <article className="col-12 col-md-4">
          <ul className="ps-0 ps-lg-5 p-0 m-0">{/* Enlaces útiles */}</ul>
        </article>
      </section>
      <section className="my-5">
        <article className="fs-1 d-flex justify-content-around">
          {/* Iconos de redes sociales */}
          <i className="bi bi-instagram"></i>
          <i className="bi bi-facebook"></i>
          <i className="bi bi-youtube"></i>
          <i className="bi bi-pinterest"></i>
        </article>
      </section>
      <section>
        <article className="text-center">
          <p>
            <small>
              Copyright Sangre Criolla | Todo campo - 2024. Todos los derechos
              reservados.
            </small>
          </p>
          <p>
            <small>
              Defensa de las y los consumidores. Para reclamos{" "}
              <NavLink
                // href="./pages/error404.html"
                to="*"
                className="text-decoration-none text-dark"
              >
                <strong>ingrese aquí</strong>
              </NavLink>
            </small>
          </p>
        </article>
      </section>
    </footer>
  );
};

export default SocialContactSection;
