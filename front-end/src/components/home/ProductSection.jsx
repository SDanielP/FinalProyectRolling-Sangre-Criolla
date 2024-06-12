import React from 'react';

const ProductSection = () => {
  return (
    <section className="container-productos">
      <h2 className="productos-titulo">Tendencia</h2>
      <div className="productos-wrapper">
        <article className="producto-card">
          <div className="card h-100">
            <img
              src="/img/25-negro-vesir-men-1067x800.jpg"
              className="card-img-top w-100"
              alt="Modelo femenina de pelo rubio modelando una campera color amarillo con botones"
            />
            <div className="card-body">
              <h5 className="card-title">Cinto 1</h5>
            </div>
            <div className="card-footer">
              <a href="./pages/detalleCampera1995Mujer.html" className="btn btn-dark">
                Hazlo tuyo
              </a>
            </div>
          </div>
        </article>
        <article className="producto-card">
          <div className="card h-100">
            <img
              src="/img/Cauquen.jpg"
              className="card-img-top w-100"
              alt="Modelo masculino modelando una campera color negro con botones"
            />
            <div className="card-body">
              <h5 className="card-title">Cinto 2</h5>
            </div>
            <div className="card-footer">
              <a href="./pages/detalleCampera1995Hombre.html" className="btn btn-dark">
                Hazlo tuyo
              </a>
            </div>
          </div>
        </article>
        <article className="producto-card">
          <div className="card h-100">
            <img
              src="/img/25-negro-lady-1067x800.jpg"
              className="card-img-top w-100"
              alt="Modelo femenino modelando una campera color gris oscuro"
            />
            <div className="card-body">
              <h5 className="card-title">Cinto 3</h5>
            </div>
            <div className="card-footer">
              <a href="./pages/detalleCampera1995Mujer.html" className="btn btn-dark">
                Hazlo tuyo
              </a>
            </div>
          </div>
        </article>
        <article className="producto-card">
          <div className="card h-100">
            <img
              src="/img/20200429_174808-800x800.jpg"
              className="card-img-top w-100"
              alt="Modelo masculino modelando una campera color gris claro con botones"
            />
            <div className="card-body">
              <h5 className="card-title">Cinto 4</h5>
            </div>
            <div className="card-footer">
              <a href="./pages/detalleCampera1995Hombre.html" className="btn btn-dark">
                Hazlo tuyo
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ProductSection;
