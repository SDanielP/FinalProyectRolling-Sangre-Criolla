import "../../../styles/components/shop/productsCard/ProductCard.css";
import "../../../styles/components/shop/Products.css";
import React, { useState, useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Popover from "react-bootstrap/Popover";
import fetchProductById from "../compProductDet/fetchProductById";

/* ----- Importaciones de Silvio ----- */
// ProductCard.jsx
// import { useState } from 'react';
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
// import Button from 'react-bootstrap/Button';
// import { useNavigate } from 'react-router-dom';
import { Form, FormGroup, Input } from 'reactstrap';
// import './ProductCard.css';
import useCart from '../carts/useCart';

const ProductCard = ({ producto }) => {
  const navigate = useNavigate();

  const handleQuickView = async () => {
    try {
      const productData = await fetchProductById(producto._id);
      navigate(`/products/${producto._id}`, { state: { product: productData } });
    } catch (error) {
      console.error("Error al cargar el producto:", error);
    }
  };

    /* ----- Mensajes durante hover en botones Carrito y Fav -----*/
    const tooltipAddToCart = (props) => (
      <Tooltip id="tooltip" {...props} className="hoverBag">
        Añadir al carrito
      </Tooltip>
    );

    const tooltipAddToFavs = (props) => (
      <Tooltip id="tooltip" {...props} className="hoverHeart">
        Añadir a la lista de favoritos
      </Tooltip>
    );

    /* ----- Estados para botones de Agregar al Carrito y Favoritos dento de cada card*/
    const [mostrarOpciones, setMostrarOpciones] = useState(false);

    const mostrarOpcionesCarrito = () => {
      setMostrarOpciones(!mostrarOpciones);
    };

    /* ----- Funcionalidad AGREGAR AL CARRITO de Silvio ----- */

    const [quantities, setQuantities] = useState({ [producto.id]: 1 });
    const [cartProducts, updateCart] = useCart();

    const [buttonText, setButtonText] = useState('Añadir al Carrito');
    // const [buttonClass, setButtonClass] = useState('');

    const handleQuantityChange = (e) => {
      const { id, value } = e.target;
      setQuantities({ ...quantities, [id]: value });
    };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedCart = [...cartProducts];

    for (const [id, quantity] of Object.entries(quantities)) {
      if (parseInt(quantity) > 0) {
        const existingProductIndex = updatedCart.findIndex((product) => product.id === id);
        if (existingProductIndex !== -1) {
          updatedCart[existingProductIndex].quantity = parseInt(quantity);
        } else {
          const newProduct = {
            id,
            name: producto.name,
            quantity: parseInt(quantity),
            price: producto.price
          };
          updatedCart.push(newProduct);
        }
      }
    }

    // Cambiar el texto del botón y agregar la clase de animación
    setButtonText('Producto añadido');
    // setButtonClass('added');

    // Restablecer el texto y la clase del botón después de 2 segundos
    setTimeout(() => {
      setButtonText('Añadir al Carrito');
      // setButtonClass('');
    }, 2000);

    updateCart(updatedCart);
    // alert('Productos añadidos al carrito');
    setQuantities({ [producto._id]: 1 });
  };

  return (
    <div className="background-body">
      <div className="containerCard" key={producto._id}>
        {/* --- Imagen producto y botones (carrito, favorito y vista rapida/añadir al carrito) ---*/}
        <div className="card__container tarjetaProducto">

          {/* --- Imagen producto ---*/}
          <article className="contenedorImg">
            <img
              src={producto.image}
              alt="image"
              className="card__img imgProducto"
              onClick={handleQuickView}
            ></img>

            {/* --- Botones (vista rapida/añadir al carrito) --- */}
            {mostrarOpciones === false ? (
              <div className="card__data">
                <Button
                  className="card__button__vistaRapida"
                  onClick={handleQuickView}
                >
                  Vista rápida
                </Button>
              </div>
            ) : (
              <div className="card__data">
                <div id="transition">
                  <Form onSubmit={handleSubmit} className="formCart">
                    <FormGroup className="quantity">
                      <Input
                        id={producto._id}
                        type="number"
                        placeholder="Cantidad"
                        value={quantities[producto._id]}
                        onChange={handleQuantityChange}
                      />
                    </FormGroup>
                    

                     <Button
                       id="addToCart"
                       color="primary"
                       type="submit"
                       className="card__button__añadirCarrito"
                     >
                       {buttonText}
                     </Button> 
                    
                  </Form>
                </div>
              </div>
            )}
          </article>

          {/* --- Botones (carrito, favorito) --- */}
          <OverlayTrigger
            placement="bottom"
            overlay={tooltipAddToFavs}
          >
            <FontAwesomeIcon icon={faHeart} size="lg" className="fav-btn" />
          </OverlayTrigger>

          <OverlayTrigger
            key={producto._id}
            placement="top"
            overlay={tooltipAddToCart}
          >
            <FontAwesomeIcon
              icon={faBagShopping}
              size="xl"
              className="bag-btn"
              onClick={mostrarOpcionesCarrito}
            />
          </OverlayTrigger>
        </div>

        {/* --- Nombre del producto y precio --- */}
        <div className="card-body">
          <Button
            variant="outline-dark"
            className="btnVerProducto"
            onClick={handleQuickView} // Redirigir a la página del producto
            style={{ height: "6rem", objectFit: "contain", fontSize: "0.9rem" }}
          >
            {producto.name}
          </Button>
          <p className="textoProd">${producto.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;