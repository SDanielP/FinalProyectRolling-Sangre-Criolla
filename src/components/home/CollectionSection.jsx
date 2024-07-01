import React from "react";

const CollectionSection = () => {
  return (
    <section className="container py-5">
      <h2 className="display-6 text-center espacioLetras">Catálogo</h2>
      <hr />
      <section className="row">
        <figure className="col-12 col-md-4 d-flex justify-content-center align-items-center position-relative">
          <a href="./pages/categoriaRemeras.html">
            <img
              className="img-fluid"
              src="./img/cinto-azul-2v2-600x400.jpg"
              alt="remera negra con letras estampadas en color blanco"
            />
          </a>
          <h3 className="position-absolute text-white fs-1">Cintos Hombre</h3>
        </figure>
        <figure className="col-12 col-md-4 d-flex justify-content-center align-items-center position-relative">
          <a href="./pages/categoriaCamperas.html">
            <img
              className="img-fluid"
              src="./img/cintos-rosa-2v2-600x400.jpg"
              alt="manga de una campera de color gris"
            />
          </a>
          <h3 className="position-absolute text-white fs-1">Cintos Dama</h3>
        </figure>
        <figure className="col-12 col-md-4 d-flex justify-content-center align-items-center position-relative">
          <a href="./pages/categoriaHoodies.html">
            <img
              className="img-fluid"
              src="./img/emblema-negro-2v2-600x400.jpg"
              alt="buzo tipo kanguro de color negro"
            />
          </a>
          <h3 className="position-absolute text-white fs-1">Emblemas</h3>
        </figure>
      </section>
    </section>
  );
};

export default CollectionSection;
