import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center py-3 mt-4">
       <section className="my-5">
       <p className="mb-0">Sangre Criolla &copy; 2024 - Todos los
       derechos reservados.</p>
       <article className="text-center">
          <p>
            <small>
              Defensa de las y los consumidores. Para reclamos{' '}
              <a href="./pages/error404.html" className="text-decoration-none text-dark">
                <strong>ingrese aquí</strong>
              </a>
            </small>
          </p>
        </article>
        <article className="fs-1 d-flex justify-content-around">
          <i className="bi bi-instagram"></i>
          <i className="bi bi-facebook"></i>
          <i className="bi bi-youtube"></i>
          <i className="bi bi-pinterest"></i>
        </article>
      </section>
      
    </footer>
  );
};

export default Footer;
