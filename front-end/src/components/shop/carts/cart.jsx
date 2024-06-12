// Cart.jsx
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, ListGroup, ListGroupItem, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cart.css';
import useCart from './useCart';

const Cart = ({ isOpen, toggle }) => {
  const [cartProducts, updateCart] = useCart();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cartTotal = cartProducts.reduce((acc, product) => acc + product.quantity * product.price, 0);
    setTotal(cartTotal);
  }, [cartProducts]);

  const handleQuantityChange = (index, newQuantity) => {
    const updatedProducts = [...cartProducts];
    updatedProducts[index].quantity = newQuantity;
    updateCart(updatedProducts);

    const cartTotal = updatedProducts.reduce((acc, product) => acc + product.quantity * product.price, 0);
    setTotal(cartTotal);
  };

  const handleDeleteProduct = (index) => {
    const updatedProducts = cartProducts.filter((_, i) => i !== index);
    updateCart(updatedProducts);

    const cartTotal = updatedProducts.reduce((acc, product) => acc + product.quantity * product.price, 0);
    setTotal(cartTotal);
  };

  const handleConfirmPurchase = () => {
    localStorage.setItem('compraConfirmada', JSON.stringify(cartProducts));
    localStorage.removeItem('cart');
    alert('Compra confirmada. ¡Gracias por tu compra!');
    updateCart([]);
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} className="shopping-cart-modal">
      <ModalHeader toggle={toggle}>Productos en su Carrito</ModalHeader>
      <ModalBody>
        <ListGroup>
          {cartProducts.map((product, index) => (
            <ListGroupItem key={index}>
              <div>{product.name}</div>
              <div>
                <Input
                  type="number"
                  value={product.quantity}
                  onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                  min={1}
                  step={1}
                />
              </div>
              <div>Precio: ${product.price}</div>
              <div>
                <Button id="btnCart" color="danger" onClick={() => handleDeleteProduct(index)}>Eliminar</Button>
              </div>
            </ListGroupItem>
          ))}
        </ListGroup>
      </ModalBody>
      <ModalFooter>
        <div>Total: ${total}</div>
        <Button id="nextStep" color="primary" onClick={handleConfirmPurchase}>Continuar Compra</Button>
      </ModalFooter>
    </Modal>
  );
};

Cart.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Cart;