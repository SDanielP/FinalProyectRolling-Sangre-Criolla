import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImgP from './ImgP'; 
import { useNavigate } from 'react-router-dom';
import '../../../styles/components/shop/Dprod/ModalVDprod.css';

function ModalDprod({ show, handleClose, product }) {
  const navigate = useNavigate(); 

  const handleVerMas = () => {
    navigate(`/products/${product.category}/${product.subcategory}/${product._id}`);
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Detalles del Producto</Modal.Title>
      </Modal.Header>
      <section className='ModalBodyV'>
        <Modal.Body>
          <Container>
            <Row xs={1} md={2}>
              <Col>
                <ImgP images={product.image} />
              </Col>
              <Col className="sm-col-12">
                <h3 className='mt-3'>{product.name}</h3>
                <h3 className='mt-5'>${product.price}</h3>
                <h3>{product.color}</h3>
                <Button variant="secondary" size="lg" onClick={handleVerMas}>
                  Ver más
                </Button>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </section>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalDprod;