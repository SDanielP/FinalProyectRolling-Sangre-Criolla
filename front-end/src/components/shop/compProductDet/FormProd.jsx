import React, { useState, useEffect } from "react";
import "../../../styles/components/shop/Dprod/Dprod.css";
import { Button, Input } from "reactstrap";
import FormSize from "./FormS";
import useCart from "../carts/useCart";



function FormProd({ name, price, color, sizes, id}) {

  // Constantes de Carrito
    const [quantities, setQuantities] = useState({ [id]: 1 });
    // Nuevo estado para el tamaño seleccionado
    const [selectedSize, setSelectedSize] = useState(sizes[0] || '');
    //fin
    const [cartProducts, updateCart] = useCart();
  
    const [buttonText, setButtonText] = useState('Añadir al Carrito');
    const [buttonClass, setButtonClass] = useState('');
  
    // useEffect para inicializar cantidades
  useEffect(() => {
    // Obtener datos del carrito del localStorage
    const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
    // Encontrar el producto actual en el carrito (si existe)
    const existingProduct = initialCart.find(product => product.id === id);
    // Establecer la cantidad inicial basada en el producto encontrado o 1 si no se encuentra
    const initialQuantity = existingProduct ? existingProduct.quantity : 1;
    setQuantities({ [id]: initialQuantity });
    setSelectedSize(existingProduct ? existingProduct.size : '');
    // Establecer tamaño inicial si existe en el carrito
  }, [id]);
  // Fin de useEffect para inicializar cantidades



    const handleQuantityChange = (e) => {
      const { id, value } = e.target;
      setQuantities({ ...quantities, [id]: value });
    };
  
    // Manejar el cambio de tamaño seleccionado
    const handleSizeChange = (size) => {
    setSelectedSize(size);
    };
    //fin

    const handleSubmit = (e) => {
      e.preventDefault();
  
      const quantity = parseInt(quantities[id]);
    if (quantity <= 0) return;

    const updatedCart = [...cartProducts];

    // Verificar si el producto ya está en el carrito con el mismo tamaño
    const existingProductIndex = updatedCart.findIndex(
      (product) => product.id === id && product.size === selectedSize
    );

    if (existingProductIndex !== -1) {
      // Si el producto ya existe, sumar la cantidad
      updatedCart[existingProductIndex].quantity += quantity;
    } else {
      // Si el producto no existe, agregar un nuevo producto al carrito
      const newProduct = {
        id: id,
        name: name,
        quantity: quantity,
        price: price,
        size: selectedSize, // Agregar el tamaño seleccionado
      };
      updatedCart.push(newProduct);
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
  
      // Guardar el producto en localStorage para la compra inmediata
      localStorage.setItem('compraConfirmada', JSON.stringify([product]));
      
      // Redireccionar a la página de pagos
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
         <Button id="addToCart" color="primary" type="submit" className={buttonClass}>
              {buttonText}
            </Button>
          <Button variant="outline-secondary" size="lg" onClick={handleBuyNow}>
            Comprar ahora
          </Button>
        </section>
      </form>
    </section>
  );
}

export default FormProd;
