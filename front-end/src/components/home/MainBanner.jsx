import React from 'react';

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
                src="../../public/img/portada2.jpg"
                className="d-block w-100"
                alt="foto portada 1"
              />
              <div className="carousel-caption2">
                <img src="../../public/img/logosinfondo1.png" style={{ height: '70px' }} alt="logo" />
                <h1>SANGRE CRIOLLA</h1>
                <p>De Argentina, para el mundo</p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="10000">
              <img
                src="../../public/img/portada1200800-1200x800.jpg"
                className="d-block w-100"
                alt="foto portada 2"
              />
              <div className="carousel-caption2">
                <img src="../../public/img/logosinfondo1.png" style={{ height: '70px' }} alt="logo" />
                <h5>p</h5>
                <p></p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="10000">
              <img
                src="../../public/img/cauquen3-1-1200x800.jpg"
                className="d-block w-100"
                alt="foto clinica 3"
              />
              <div className="carousel-caption2">
                <img src="../../public/img/logosinfondo1.png" style={{ height: '70px' }} alt="logo" />
                <h5></h5>
                <p></p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="texto-servicios">
      <h1>
        <span style={{ color: '#73503c' }}>SANGRE </span>
        <span style={{ color: '#A6907C' }}>CRIOLLA</span>
      </h1>
      <h4>Nuestros Productos para toda clase de evento o momento del dia</h4>
    </div>
    </section>
  );
};

export default MainBanner;

