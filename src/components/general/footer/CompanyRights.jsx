import React from "react";
import { NavLink } from "react-router-dom";

const CompanyRights = () => {
  return (
    <footer className="bg-black text-white text-center py-2 mt-2 letra-copyright">
      <section className="my-3">
        <p className="mb-0">
          Sangre Criolla &copy; 2024 - Todos los derechos reservados.
        </p>
        <article className="text-center">
          <p>
            <small>
              Defensa de las y los consumidores. Para reclamos{" "}
              <NavLink to="/page-not-found" className="text-decoration-none" onClick={window.scrollTo({ top: 0, behavior: "smooth" })}>
                <strong>ingrese aquí</strong>
              </NavLink>
            </small>
          </p>
        </article>
        
      </section>
    </footer>
  );
};

export default CompanyRights;
