import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de que esto esté importado

const CatalogSection = () => {
  return (
    <section className="container border-top border-bottom py-5 my-5">
      <article className="row mb-5 mb-md-0">
        <figure className="col-sm-12 col-md-6 order-1 order-md-1">
          <img
            className="img-fluid w-100"
            src="/img/portada4-1200x800.jpg"
            alt="local de ropa"
          />
        </figure>
        <aside className="col-sm-12 col-md-6 d-flex flex-column align-items-center justify-content-center order-2 order-md-2">
          <h2 className="text-secondary espacioLetras">LOCALES</h2>
          <p className="text-center text-secondary">
            También podes encontrar nuestros productos en nuestras tiendas exclusivas
          </p>
        </aside>
      </article>
      <article className="row mb-5 mb-md-0">
        <aside className="col-sm-12 col-md-6 d-flex flex-column align-items-center justify-content-center order-1 order-md-1">
          <h2 className="text-secondary espacioLetras">COLECCIÓN SC24</h2>
          <p className="text-center text-secondary">
            Conocé el adelanto de la colección
          </p>
        </aside>
        <figure className="col-sm-12 col-md-6 order-2 order-md-2">
          <img
            className="img-fluid w-100"
            src="/img/portada1200800-1200x800.jpg"
            alt="modelo con campera y lentes negros"
          />
        </figure>
      </article>
    </section>
  );
};

export default CatalogSection;
