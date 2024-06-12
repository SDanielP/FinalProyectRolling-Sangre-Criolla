import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar CSS de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importar JS de Bootstrap

const CatalogSection = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 mb-4">
          <div className="extras1 d-flex flex-column align-items-center justify-content-center">
            <div className="extras-contenido d-flex align-items-center mb-4">
              <img src="img/Dia-del-padre-100x100.jpg" alt="Locales" />
              <div className="extras-contenido-texto ml-3">
                <h1>LOCALES</h1>
                <p>También podés encontrar nuestros productos en nuestras tiendas exclusivas.</p>
              </div>
            </div>
            <div className="extras-contenido d-flex align-items-center">
              <img src="img/DSC_4824-100x100.jpg" alt="Colección SC24" />
              <div className="extras-contenido-texto ml-3">
                <h1>COLECCIÓN SC24</h1>
                <p>Conocé el adelanto de la colección.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="extras2 d-flex flex-column justify-content-center align-items-center p-4"
            style={{ backgroundColor: '#A6907C' }}>
            <h1>Horarios de atención</h1>
            <div className="extras2-horario text-center">
              <p>Lunes - Viernes <span>09:00-17:00</span></p>
              <p>Sábado <span>09:00-13:00</span></p>
            </div>
            <div className="extras2-contenido p-4 text-center">
              <h2>Para más información contáctenos</h2>
              <h1>38100000000</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogSection;
