import "../../../styles/components/shop/productsCard/ProductCard.css";
import "../../../styles/components/shop/Products.css";
import React from "react";
import Button from "react-bootstrap/Button";
import { NavLink, useNavigate } from "react-router-dom";

const ProductCard = ({ producto }) => {
  /* ----- Uso del useNavigate() ----- */
  const navigate = useNavigate(); // Importar useNavigate()

  return (
    <>
      <div className="containerCard">
        <div className="card__container tarjetaProducto">
          <article className="card__article contenedorImg">
            <Button
              className="card__button"
              onClick={() =>
                navigate(`/products/${producto.category}/${producto.id}`)
              }
            >
              <img
                src={producto.image}
                alt="image"
                className="card__img imgProducto"
              ></img>
            </Button>

            <div className="card__data">
              {/* <h5 className="card__title">Vista rápida</h5> */}
              <Button
                className="card__button"
                onClick={() =>
                  navigate(`/products/${producto.category}/${producto.id}`)
                }
              >
                Vista rápida
              </Button>
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
