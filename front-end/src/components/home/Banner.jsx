import React from "react";

const Banner = () => {
  return (
    <section
      id="carouselExampleSlidesOnly"
      className="carousel slide bg-black text-white"
      data-bs-ride="carousel"
    >
      <article className="carousel-inner p-1">
        <div className="carousel-item active">
          <p className="m-0 text-center">ENVÍOS BONIFICADOS + $30.000.-</p>
        </div>
        <div className="carousel-item">
          <p className="m-0 text-center">ENVÍOS EXPRESS A TODO EL PAIS 24HS</p>
        </div>
        <div className="carousel-item">
          <p className="m-0 text-center">HASTA 6 CUOTAS S/INTERÉS</p>
        </div>
      </article>
    </section>
  );
};

export default Banner;
