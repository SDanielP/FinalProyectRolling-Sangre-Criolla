import React from "react";
import background from "../../assets/img/homeIMG/para-ellas-300x300.jpg"
import background2 from "../../assets/img/homeIMG/bolsa-300x300.jpg"
import background3 from "../../assets/img/homeIMG/para-ellos-300x300.jpg"
import { NavLink } from "react-bootstrap";

const SecondaryBanner = () => {
  return (
    <section className="tarjetas-home">
      <div className="container">
        <div className="cards-wrapper">
          <div
            className="card"
            style={{ backgroundImage: `url(${background})` }}
          >
            <div className="overlay"></div>
            <div className="card-text">
              <h2>Para Ellas</h2>
              <NavLink to="/">Conocer más</NavLink>
            </div>
          </div>
          <div
            className="card"
            style={{ backgroundImage: `url(${background2})` }}
          >
            <div className="overlay"></div>
            <div className="card-text">
              <h2>Accesorios</h2>
              <NavLink to="/">Próximamente</NavLink>
            </div>
          </div>
          <div
            className="card"
            style={{ backgroundImage: `url(${background3})` }}
          >
            <div className="overlay"></div>
            <div className="card-text">
              <h2>Para Ellos</h2>
              <NavLink to="/">Conocer más</NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondaryBanner;
