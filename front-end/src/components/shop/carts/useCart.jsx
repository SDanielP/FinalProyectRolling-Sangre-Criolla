// useCart.jsx
import { useState, useEffect } from 'react';

const useCart = () => {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const handleStorageChange = () => {
      const cartData = JSON.parse(localStorage.getItem('cart')) || [];
      setCartProducts(cartData);
    };

    // Leer inicialmente los datos del localStorage
    handleStorageChange();

    // Agregar un event listener para el evento de cambio de almacenamiento
    window.addEventListener('storage', handleStorageChange);

    return () => {
      // Limpiar el event listener al desmontar el componente
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const updateCart = (newCart) => {
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCartProducts(newCart);
    // Dispatch custom event
    window.dispatchEvent(new Event('storage'));
  };

  return [cartProducts, updateCart];
};

export default useCart;
