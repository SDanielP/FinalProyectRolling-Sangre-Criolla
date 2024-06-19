import React, { useState } from "react";
import "../../../styles/components/shop/Dprod/Dprod.css";
import { Button, Input } from "reactstrap";
import FormSize from "./FormS";
import useCart from "../carts/useCart";



function FormProd({ name, price, color, sizes, id}) {

  // Constantes de Carrito
    const [quantities, setQuantities] = useState({ ["6667bc4f9c6233953f278758"]: 1 });
    const [cartProducts, updateCart] = useCart();
  
    const [buttonText, setButtonText] = useState('Añadir al Carrito');
    const [buttonClass, setButtonClass] = useState('');
  
    const handleQuantityChange = (e) => {
      const { idd, value } = e.target;
      setQuantities({ ...quantities, [idd]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const updatedCart = [...cartProducts];
  
      for (const [idd, quantity] of Object.entries(quantities)) {
        if (parseInt(quantity) > 0) {
          const existingProductIndex = updatedCart.findIndex((product) => id === idd);
          if (existingProductIndex !== -1) {
            updatedCart[existingProductIndex].quantity = parseInt(quantity);
          } else {
            const newProduct = {
              idd,
              name: name,
              quantity: parseInt(quantity),
              price: price
            };
            updatedCart.push(newProduct);
          }
        }
      }
  
      // Cambiar el texto del botón y agregar la clase de animación
      setButtonText('Producto Agregado');
      setButtonClass('added');
  
      // Restablecer el texto y la clase del botón después de 2 segundos
      setTimeout(() => {
        setButtonText('Añadir al Carrito');
        setButtonClass('');
      }, 2000);
  
      updateCart(updatedCart);
      // alert('Productos añadidos al carrito');
      setQuantities({ [idd]: 1 });
    };



  return (
    <section className="formP container-fluid border mt-3 bg-opacity-10 p-2">
      <article className="ms-3">
        <h2 className="fs-3">{name}</h2>
        <h3 className="fs-4">${price}</h3>
        <h4 className="fs-5">{color}</h4>
      </article>
      <form onSubmit={handleSubmit} className="mt-3 ms-3 me-3">
        <section className=" mb-3 d-grid gap-2">
          <FormSize sizes={sizes} />
          <Input
                id={id}
                type="number"
                placeholder="Cantidad"
                value={quantities["6667bc4f9c6233953f278758"]}
                onChange={handleQuantityChange}
              />
         <Button id="addToCart" color="primary" type="submit" className={buttonClass}>
              {buttonText}
            </Button>
          <Button variant="outline-secondary" size="lg">
            Comprar ahora
          </Button>
        </section>
      </form>
    </section>
  );
}

export default FormProd;
