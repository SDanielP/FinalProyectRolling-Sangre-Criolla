import React from 'react';

const RrhhSection = () => {
  return (
    <footer className="container-fluid bg-white">
      {/* Section con contactos y formulario */}
      <section className="p-4 row">
        <article className="col-12 col-md-4">
          <form className="ps-0 ps-lg-5">
            <fieldset>
                <img
                  src="./img/logosinfondonegro.png"
                  alt="logo sin el fondo"
                  className="w-50 img-fluid"
                />
            </fieldset>
          </form>
        </article>
        <article className="my-5 my-md-0 col-12 col-md-4">
          <ul className="ps-0 ps-lg-5 p-0 m-0">
            <li className="">
              <h5 className="mb-0">Ventas:</h5>
              <a
                href="mailto:ventas@sangrecriolla.com"
                className="text-decoration-none text-black"
              >
                ventas@sangrecriolla.com
              </a>
            </li>
            <li className="d-flex flex-column my-3">
              <h5 className="m-0">Atención al cliente:</h5>
              <a
                href="tel:3810000000"
                className="text-decoration-none text-black"
              >
                3810000000
              </a>
              <a
                href="mailto:ayuda@streetwear.com"
                className="text-decoration-none text-black"
              >
                ayuda@sangrecriolla.com
              </a>
            </li>
            <li className="">
              <h5 className="m-0">Trabajá con nosotros:</h5>
              <a
                href="mailto:rrhh@streetwear.com"
                className="text-decoration-none text-black"
              >
                rrhh@sangrecriolla.com
              </a>
            </li>
          </ul>
        </article>
        <article className="col-12 col-md-4">
          <ul className="ps-0 ps-lg-5 p-0 m-0">
            <li className="mb-1">
            <h5 className="m-0">Preguntas Frecuentes:</h5>
              <a
                href="./pages/error404.html"
                className="text-decoration-none text-black"
              >
                ● Como comprar
              </a>
            </li>
            <li className="mb-1">
              <a
                href="./pages/error404.html"
                className="text-decoration-none text-black"
              >
                ● Cambios & devoluciones
              </a>
            </li>
            <li className="mb-1">
              <a
                href="./pages/error404.html"
                className="text-decoration-none text-black"
              >
                ● Envíos
              </a>
            </li>
            <li className="mb-1">
              <a
                href="./pages/error404.html"
                className="text-decoration-none text-black"
              >
                ● Pagos
              </a>
            </li>
            <li className="mb-1">
              <a
                href="./pages/error404.html"
                className="text-decoration-none text-black"
              >
                ● Preguntas frecuentes
              </a>
            </li>
          </ul>
        </article>
      </section>
    </footer>
  );
};

export default RrhhSection;
