import "../styles/ErrorScreen.css"; // Archivo de estilos CSS para la página 404
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import NavbarMenu from "../components/general/NavbarMenu";

function NotFoundPage() {
  return (
    <>
      <NavbarMenu />
      <div className="not-found">
        <div className="background-overlay"></div>
        <div className="content">
          <h1>404 </h1>
          <p> Página no encontrada</p>
          <div className="error-animation">
            <div
              aria-label="Orange and tan hamster running in a metal wheel"
              role="img"
              className="wheel-and-hamster"
            >
              <div className="wheel"></div>
              <div className="hamster">
                <div className="hamster__body">
                  <div className="hamster__head">
                    <div className="hamster__ear"></div>
                    <div className="hamster__eye"></div>
                    <div className="hamster__nose"></div>
                  </div>
                  <div className="hamster__limb hamster__limb--fr"></div>
                  <div className="hamster__limb hamster__limb--fl"></div>
                  <div className="hamster__limb hamster__limb--br"></div>
                  <div className="hamster__limb hamster__limb--bl"></div>
                  <div className="hamster__tail"></div>
                </div>
              </div>
              <div className="spoke"></div>
            </div>
          </div>
          <p>Lo sentimos, la página que estás buscando no existe.</p>
          <p>Para seguir comprando:</p>
          <button className="go-back">Click Aquí</button>
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;