import React from "react";
import { NavLink } from "react-router-dom"
import "../../../styles/components/general/Footer.css"

const SocialContactSection = () => {
  return (
    <footer className="social-contact-section container">
      <section className="p-4 row text-center">
        {/* <article className="col-12 col-md-4">
          <form className="ps-0 ps-lg-5"> */}
            {/* Formulario de suscripción */}
          {/* </form>
        </article> */}
        <article>
          <p>Contacto</p>
        </article>
        <article className="links-redes">
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
          <NavLink to="/page-not-found" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b7/X_logo.jpg"
              alt="X"
              width="35"
              height="35"
            />
          </NavLink>
          <NavLink to="/page-not-found" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
              alt="Pinterest"
              width="24"
              height="24"
            />
          </NavLink>
        </article>
        <article >
          <p>QR DATA FISCAL</p>
        </article>
      </section>
     
    </footer>
  );
};

export default SocialContactSection;
