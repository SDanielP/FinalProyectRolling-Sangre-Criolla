import "../styles/ErrorScreen.css"; // Archivo de estilos CSS para la página 404
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import NavbarMenu from "../components/general/NavbarMenu";
import Banner from "../components/home/Banner";
import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <Banner />
      <NavbarMenu />
      <div className="not-found-ErrorScreen">
        <div className="background-overlay-ErrorScreen"></div>
        <div className="content-ErrorScreen">
          <h1 className="h1-ErrorScreen">404 </h1>
          <p className="p-ErrorScreen"> Página no encontrada</p>
          <div className="error-animation-ErrorScreen">
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
          <p className="p-ErrorScreen">Lo sentimos, la página que estás buscando no existe.</p>
          <p className="p-ErrorScreen">Para seguir comprando:</p>
          <NavLink to="/">
          <button className="go-back-ErrorScreen">Click Aquí</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;
