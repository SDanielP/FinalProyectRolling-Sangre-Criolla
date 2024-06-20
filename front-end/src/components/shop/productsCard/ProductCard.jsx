import "../../../styles/components/shop/productsCard/ProductCard.css";
import "../../../styles/components/shop/Products.css";
import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import fetchProductById from "../compProductDet/fetchProductById";

/* ----- Importaciones de Silvio ----- */
// ProductCard.jsx
// import { useState } from 'react';
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
// import Button from 'react-bootstrap/Button';
// import { useNavigate } from 'react-router-dom';
// import { Form, FormGroup, Input } from 'reactstrap';
// import './ProductCard.css';
// import useCart from '../carts/useCart';

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

  /* ----- Funcionalidad AGREGAR AL CARRITO de Silvio ----- */

  // const [quantities, setQuantities] = useState({ [producto.id]: 1 });
  // const [cartProducts, updateCart] = useCart();

  // const [buttonText, setButtonText] = useState('Añadir al Carrito');
  // const [buttonClass, setButtonClass] = useState('');

  // const handleQuantityChange = (e) => {
  //   const { id, value } = e.target;
  //   setQuantities({ ...quantities, [id]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const updatedCart = [...cartProducts];

  //   for (const [id, quantity] of Object.entries(quantities)) {
  //     if (parseInt(quantity) > 0) {
  //       const existingProductIndex = updatedCart.findIndex((product) => product.id === id);
  //       if (existingProductIndex !== -1) {
  //         updatedCart[existingProductIndex].quantity = parseInt(quantity);
  //       } else {
  //         const newProduct = {
  //           id,
  //           name: producto.title,
  //           quantity: parseInt(quantity),
  //           price: producto.price
  //         };
  //         updatedCart.push(newProduct);
  //       }
  //     }
  //   }

  //   // Cambiar el texto del botón y agregar la clase de animación
  //   setButtonText('Producto Agregado');
  //   setButtonClass('added');

  //   // Restablecer el texto y la clase del botón después de 2 segundos
  //   setTimeout(() => {
  //     setButtonText('Añadir al Carrito');
  //     setButtonClass('');
  //   }, 2000);

  //   updateCart(updatedCart);
  //   // alert('Productos añadidos al carrito');
  //   setQuantities({ [producto.id]: 1 });
  // };


  return (
    <>
      <div className="containerCard" key={producto._id}>
        <div className="card__container tarjetaProducto">
          <article className="contenedorImg">
            <img
              src={producto.image}
              alt="image"
              className="card__img imgProducto"
              onClick={handleQuickView}
            ></img>

            <div className="card__data">
              <Button
                className="card__button"
                onClick={handleQuickView}
              >
                Vista rápida
              </Button>
            </div>
          </article>
          <FontAwesomeIcon icon={faHeart} size="lg" className="fav-btn" />
          <FontAwesomeIcon icon={faBagShopping} size="xl" className="bag-btn" />
        </div>
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
    </>
  );
};

export default ProductCard;


/* ----- Return de Silvio ----- */
// return (
//   <>
// <Card key={producto.id} className="tarjetaProducto">
//       <div className="contenedorImg">
//         <Card.Img variant="top" src={producto.image} className="imgProducto" />
//       </div>
//       <Card.Body className="card-body">
//         <Card.Title className="tituloProd">{producto.title}</Card.Title>
//       </Card.Body>
//       <ListGroup className="list-group-flush">
//         <ListGroup.Item className="textoProd">
//           ${producto.price}
//         </ListGroup.Item>
//       </ListGroup>
//       <Card.Body className="card-body">
//         <Button
//           variant="outline-dark"
//           className="btnVerProducto"
//           onClick={() => navigate(`/products/${producto.category}/${producto.id}`)}
//         >
//           Ver producto
//         </Button>
//         <div id='transition'>
//           <Form onSubmit={handleSubmit}>
//             <FormGroup className="quantity">
//               <Input
//                 id={producto.id}
//                 type="number"
//                 placeholder="Cantidad"
//                 value={quantities[producto.id]}
//                 onChange={handleQuantityChange}
//               />
//             </FormGroup>
//             <Button id="addToCart" color="primary" type="submit" className={buttonClass}>
//               {buttonText}
//             </Button>
//           </Form>
//         </div>

//         </Card.Body>
//     </Card>
//   );
// };

// export default ProductCard;