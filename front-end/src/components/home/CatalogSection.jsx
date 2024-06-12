import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de que esto esté importado

const CatalogSection = () => {
  return (
    <section class="container border-top border-bottom py-5 my-5">
    <article class="row mb-5 mb-md-0">
      <figure class="col-sm-12 col-md-6 order-last order-md-first">
        <img
          class="img-fluid w-100"
          src="img/portada4-1200x800.jpg"
          alt="local de ropa"
        />
      </figure>
      <aside
        class="col-sm-12 col-md-6 d-flex flex-column align-items-center justify-content-center"
      >
        <h2 class="text-secondary espacioLetras">LOCALES</h2>
        <p class="text-center text-secondary">
          También podes encontrar nuestros productos en nuestras tiendas
          exclusivas
        </p>
      </aside>
    </article>
    <article class="row">
      <figure class="col-sm-12 col-md-6 order-last order-md-last">
        <img
          class="img-fluid w-100"
          src="img/portada1200800-1200x800.jpg"
          alt="modelo con campera y lentes negros"
        />
      </figure>
      <aside
        class="col-sm-12 col-md-6 d-flex flex-column align-items-center justify-content-center"
      >
        <h2 class="text-secondary espacioLetras">COLECCÍON SC24</h2>
        <p class="text-center text-secondary">
          Conocé el adelanto de la colección
        </p>
      </aside>
    </article>
  </section>
  );
};

export default CatalogSection;
