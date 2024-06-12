import "../../../styles/components/shop/productsCard/ProductCard.css";
import "../../../styles/components/shop/Products.css";
import React from "react";
import Button from "react-bootstrap/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ producto }) => {
  /* ----- Uso del useNavigate() ----- */
  const navigate = useNavigate(); // Importar useNavigate()

  return (
    <>
      <div className="containerCard">
        <div className="card__container tarjetaProducto">
          <article className="contenedorImg">
            <img
              src={producto.image}
              alt="image"
              className="card__img imgProducto"
              onClick={() =>
                navigate(`/products/${producto.category}/${producto.id}`)
              }
            ></img>

            <div className="card__data">
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
              <FontAwesomeIcon icon={faHeart} size="lg"  className="fav-btn"/>
              <FontAwesomeIcon icon={faBagShopping}  size="xl" className="bag-btn" />
        </div>
        <div className="card-body">
          <Button
            variant="outline-dark"
            className="btnVerProducto"
            onClick={() =>
              navigate(`/products/${producto.category}/${producto.id}`)
            } // Redirigir a la página del producto
            style={{ height: "6rem", objectFit: "contain", fontSize: "0.9rem" }}
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
