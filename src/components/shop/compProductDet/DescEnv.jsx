import React from "react";
import Nav from "react-bootstrap/Nav";

function DescEnv({ description }) {
  return (
    <section className="col-12 mt-4">
      <Nav
        className="nav nav-tabs d-flex justify-content-md-start  justify-content-center"
        id="nav-tab"
        role="tablist"
      >
        <button
          className="nav-link active nav-item texto-desc-DP"
          id="nav-desc-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-desc"
          role="tab"
          type="button"
          aria-controls="nav-desc"
          aria-selected="true"
        >
          Descripción
        </button>
        <button
          className="nav-link nav-item"
          id="nav-pe-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-pe"
          role="tab"
          type="button"
          aria-controls="nav-pe"
          aria-selected="false"
          tabIndex="1"
        >
          Política de Envío
        </button>
      </Nav>
      <article className="tab-content bg-light" id="nav-tabContent">
        <article
          className="tab-pane fade show active mt-3"
          id="nav-desc"
          role="tabpanel"
          aria-labelledby="nav-desc-tab"
          tabIndex="0"
        >
          <p>{description}</p>
        </article>
        <article
          className="tab-pane fade mt-3"
          id="nav-pe"
          role="tabpanel"
          aria-labelledby="nav-pe-tab"
          tabIndex="1"
        >
          <p>
          Si no estás completamente satisfecho con tu compra, puedes devolver los cinturones en un plazo de 30 días desde la fecha de recepción para obtener un reembolso completo. Los productos deben estar en su estado original y sin usar. Para iniciar una devolución contáctanos en nuestras redes sociales, mail o número de teléfono proporcionado.
            </p>

        </article>
      </article>
    </section>
  );
}

export default DescEnv;
