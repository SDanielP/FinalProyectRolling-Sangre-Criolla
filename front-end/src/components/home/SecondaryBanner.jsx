import React from 'react';

const SecondaryBanner = () => {
  return (
    <section className="tarjetas">
      <div className="container">
        <div className="cards-wrapper">
          <div className="card" style={{ backgroundImage: 'url(/img/para-ellas-300x300.jpg)' }}>
            <div className="overlay"></div>
            <div className="card-text">
              <h2>Para Ellas</h2>
              <a href="#">Conocer más</a>
            </div>
          </div>
          <div className="card" style={{ backgroundImage: 'url(/img/bolsa-300x300.jpg)' }}>
            <div className="overlay"></div>
            <div className="card-text">
              <h2>Accesorios</h2>
              <a href="#">Conocer más</a>
            </div>
          </div>
          <div className="card" style={{ backgroundImage: 'url(/img/para-ellos-300x300.jpg)' }}>
            <div className="overlay"></div>
            <div className="card-text">
              <h2>Para Ellos</h2>
              <a href="#">Conocer más</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondaryBanner;
