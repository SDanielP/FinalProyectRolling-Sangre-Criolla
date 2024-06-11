import React from "react";
// import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

import "../../../styles/components/shop/productsCard/ProductCard.css";

const ProductCard = ({ producto }) => {
  /* ----- HISTORIAL ----- */
  const navigate = useNavigate(); // Importar useNavigate()

  return (
    <>
      <div className="container">
        <div className="card__container tarjetaProducto">
          <article className="card__article contenedorImg">
            <img
              src={producto.image}
              alt="image"
              className="card__img  imgProducto"
            ></img>

            <div className="card__data">
              {/* <h5 className="card__title">Vista rápida</h5> */}
              <a href="#" className="card__button">
                Vista rápida
              </a>
            </div>
          </article>

        </div>
          <div className="card-body">
            <Button
              variant="outline-dark"
              className="btnVerProducto"
              onClick={() =>
                navigate(`/products/${producto.category}/${producto.id}`)
              } // Redirigir a la página del producto
            >
              {producto.title}
            </Button>
            <p className="textoProd">${producto.price}</p>
          </div>
      </div>
    </>
  );
};

export default ProductCard;
