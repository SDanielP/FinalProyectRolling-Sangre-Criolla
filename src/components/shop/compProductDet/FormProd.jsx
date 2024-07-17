import React, { useState, useEffect } from "react";
import "../../../styles/components/shop/Dprod/Dprod.css";
import { Input } from "reactstrap";
import FormSize from "./FormS";
import useCart from "../carts/useCart";
import Button from 'react-bootstrap/Button';


function FormProd({ name, price, color, sizes, id}) {

    const [quantities, setQuantities] = useState({ [id]: 1 });
    const [selectedSize, setSelectedSize] = useState(sizes[0] || '');
    const [cartProducts, updateCart] = useCart();
  
    const [buttonText, setButtonText] = useState('Añadir al Carrito');
    const [buttonClass, setButtonClass] = useState('');
  
  useEffect(() => {
    const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = initialCart.find(product => product.id === id);
    const initialQuantity = existingProduct ? existingProduct.quantity : 1;
    setQuantities({ [id]: initialQuantity });
    setSelectedSize(existingProduct ? existingProduct.size : '');
  }, [id]);



    const handleQuantityChange = (e) => {
      const { id, value } = e.target;
      setQuantities({ ...quantities, [id]: value });
    };
  
    const handleSizeChange = (size) => {
    setSelectedSize(size);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
  
      const quantity = parseInt(quantities[id]);
    if (quantity <= 0) return;

    const updatedCart = [...cartProducts];

    const existingProductIndex = updatedCart.findIndex(
      (product) => product.id === id && product.size === selectedSize
    );

    if (existingProductIndex !== -1) {
      updatedCart[existingProductIndex].quantity += quantity;
    } else {
      const newProduct = {
        id: id,
        name: name,
        quantity: quantity,
        price: price,
        size: selectedSize,
      };
      updatedCart.push(newProduct);
    }
  
      setButtonText('Producto Agregado');
      setButtonClass('added');
  
      setTimeout(() => {
        setButtonText('Añadir al Carrito');
        setButtonClass('');
      }, 2000);
  
      updateCart(updatedCart);
      setQuantities({ [id]: 1 });
    };

    const handleBuyNow = () => {
      const quantity = parseInt(quantities[id]);
      if (quantity <= 0) return;
  
      const product = {
        id: id,
        name: name,
        quantity: quantity,
        price: price,
        size: selectedSize,
      };
  
      localStorage.setItem('compraConfirmada', JSON.stringify([product]));
      window.location.href = "/payments";
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
          <FormSize sizes={sizes} onSizeChange={handleSizeChange} />
          <Input
                id={id}
                type="number"
                placeholder="Cantidad"
                value={quantities[id]}
                onChange={handleQuantityChange}
              />
              <article className="btn-Form-DP">
         <Button id="addToCart" variant="outline-secondary"  size="lg" type="submit" className={buttonClass}>
              {buttonText}
            </Button>
          <Button variant="outline-success mt-3" size="lg" onClick={handleBuyNow}>
            Comprar ahora
          </Button>
          </article>
        </section>
      </form>
    </section>
  );
}

export default FormProd;
