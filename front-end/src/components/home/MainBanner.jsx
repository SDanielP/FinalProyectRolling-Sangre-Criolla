import React from "react";
import portada1 from "../../assets/img/homeIMG/portada2.jpg"
import logoSinFondo1 from "../../assets/img/homeIMG/logosinfondo1.png"
import portada2 from "../../assets/img/homeIMG/portada1200800-1200x800.jpg"
import portada3 from "../../assets/img/homeIMG/cauquen3-1-1200x800.jpg"

const MainBanner = () => {
  return (
    <section>
      <div className="carousel">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img
                src={portada1}
                className="d-block w-100"
                alt="foto portada 1"
              />
              <div className="carousel-caption2">
                <img
                  src={logoSinFondo1}
                  style={{ height: "70px" }}
                  alt="logo"
                />
                <h1>SANGRE CRIOLLA</h1>
                <p>De Argentina, para el mundo</p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="10000">
              <img
                src={portada2}
                className="d-block w-100"
                alt="foto portada 2"
              />
              <div className="carousel-caption2">
                <img
                  src={logoSinFondo1}
                  style={{ height: "70px" }}
                  alt="logo"
                />
                <h1>FABRICA DE CINTURONES</h1>
                <p>Haciendo magia para cualquier detalle.</p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="10000">
              <img
                src={portada3}
                className="d-block w-100"
                alt="foto portada 3"
              />
              <div className="carousel-caption2">
                <img
                  src={logoSinFondo1}
                  style={{ height: "70px" }}
                  alt="logo"
                />
                <h1>Porque la belleza está en los detalles.</h1>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="texto-servicios">
        <h1>
          <span style={{ color: "#73503c" }}>SANGRE </span>
          <span style={{ color: "#A6907C" }}>CRIOLLA</span>
        </h1>
        <h4>Nuestros Productos para toda clase de evento o momento del dia</h4>
      </div>
    </section>
  );
};

export default MainBanner;
