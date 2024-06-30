import "../../../styles/components/shop/productsCard/ProductCard.css";
import "../../../styles/components/shop/Products.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
// import fetchProductById from "../compProductDet/fetchProductById";
import useCart from "../carts/useCart";
import { useCartModal } from "../../../store/useCartModal"

const ProductCard = ({ producto }) => {
   /* ----- Uso del useNavigate() ----- */
   const navigate = useNavigate(); // Importar useNavigate()

/* ----- Estados para el carrito ----- */
  const [cartProducts, updateCart] = useCart();
  const [tooltipText, setTooltipText] = useState('Añadir al carrito');

/* ----- Traer cada producto ----- */
  // const handleQuickView = async () => {
  //   try {
  //     const productData = await fetchProductById(producto.category, producto.subcategory, producto._id);
  //     navigate(`/products/${producto._id}`, { state: { product: productData } });
  //   } catch (error) {
  //     console.error("Error al cargar el producto:", error);
  //   }
  // };


  /* ----- Mensajes durante hover en botones Carrito y Fav -----*/
  const tooltipAddToCart = (props) => (
    <Tooltip id="tooltip" {...props} className="hoverBag">
      {tooltipText}
    </Tooltip>
  );

  const tooltipAddToFavs = (props) => (
    <Tooltip id="tooltip" {...props} className="hoverHeart">
      Añadir a la lista de favoritos
    </Tooltip>
  );

  
  /* ----- Funcionalidad AGREGAR AL CARRITO ----- */
  const {isOpenCartModal, setOpenCartModal} = useCartModal();

  const handleAddToCart = () => {
    const updatedCart = [...cartProducts];
    const existingProductIndex = updatedCart.findIndex((product) => product.id === producto._id);
    
    if (existingProductIndex !== -1) {
      updatedCart[existingProductIndex].quantity += 1;
    } else {
      const newProduct = {
        id: producto._id,
        name: producto.name,
        quantity: 1,
        price: producto.price
      };
      updatedCart.push(newProduct);
    }

    setTooltipText('Producto añadido');
    setTimeout(() => {
      setTooltipText('Añadir al carrito');
    }, 2000);

    updateCart(updatedCart);
    setOpenCartModal(!isOpenCartModal);
  };

  return (
    <div className="background-body">
      <div className="containerCard" key={producto._id}>
        <div className="card__container tarjetaProducto">
          <article className="contenedorImg">
            <img
              src={producto.image}
              alt="image"
              className="card__img imgProducto"
              onClick={() =>
                (navigate(`/products/${producto.category}/${producto.subcategory}/${producto._id}`))
              }
            ></img>
            <div className="card__data">
              <Button
                className="card__button__vistaRapida"
                // onClick={handleQuickView} //REDIRIGIR AL MODAL - FALTA HACER
              >
                Vista rápida
              </Button>
            </div>
          </article>

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
              onClick={handleAddToCart}
            />
          </OverlayTrigger>
        </div>

        <div className="card-body">
          <Button
            variant="outline-dark"
            className="btnVerProducto"
            onClick={() =>
              (navigate(`/products/${producto.category}/${producto.subcategory}/${producto._id}`))
            }
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
