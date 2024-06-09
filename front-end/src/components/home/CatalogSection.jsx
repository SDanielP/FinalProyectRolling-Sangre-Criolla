import React from 'react';

const CatalogSection = () => {
  return (
    <section className="container border-top border-bottom py-5 my-5">
      <article className="row mb-5 mb-md-0">
        <figure className="col-sm-12 col-md-6 order-last order-md-first">
          <img
            className="img-fluid w-100"
            src="/img/portada4-1200x800.jpg"
            alt="local de ropa"
          />
        </figure>
        <aside className="col-sm-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
          <h2 className="text-secondary espacioLetras">LOCALES</h2>
          <p className="text-center text-secondary">
            También podes encontrar nuestros productos en nuestras tiendas
            exclusivas
          </p>
        </aside>
      </article>
      <article className="row">
        <figure className="col-sm-12 col-md-6 order-last order-md-last">
          <img
            className="img-fluid w-100"
            src="/img/portada1200800-1200x800.jpg"
            alt="modelo con campera y lentes negros"
          />
        </figure>
        <aside className="col-sm-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
          <h2 className="text-secondary espacioLetras">COLECCÍON SC24</h2>
          <p className="text-center text-secondary">
            Conocé el adelanto de la colección
          </p>
        </aside>
      </article>
    </section>
  );
};

export default CatalogSection;
