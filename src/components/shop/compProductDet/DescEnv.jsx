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
          "Envíos procesados en 1-2 días hábiles. Entregas nacionales: envíos gratis de 5 a 15 días. Internacionales: 15 a 30 días. Rastreo disponible. Garantía de satisfacción."
            </p>

        </article>
      </article>
    </section>
  );
}

export default DescEnv;
