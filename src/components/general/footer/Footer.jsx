import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center py-3 mt-4">
      <section className="my-5">
        <p className="mb-0">
          Sangre Criolla &copy; 2024 - Todos los derechos reservados.
        </p>
        <article className="text-center">
          <p>
            <small>
              Defensa de las y los consumidores. Para reclamos{" "}
              <NavLink to="/page-not-found" className="text-decoration-none">
                <strong>ingrese aquí</strong>
              </NavLink>
            </small>
          </p>
        </article>
        <article className="fs-1 d-flex justify-content-around">
          <NavLink
            to="https://www.facebook.com/sangrecriollasc/?locale=es_LA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/1024px-2023_Facebook_icon.svg.png"
              alt="Facebook"
              width="24"
              height="24"
            />
          </NavLink>
          <NavLink
            to="https://www.instagram.com/sangre_criolla/?hl=es"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
              width="24"
              height="24"
            />
          </NavLink>
          <NavLink to="/error404" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b7/X_logo.jpg"
              alt="X"
              width="35"
              height="35"
            />
          </NavLink>
          <NavLink to="/error404" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
              alt="Pinterest"
              width="24"
              height="24"
            />
          </NavLink>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
