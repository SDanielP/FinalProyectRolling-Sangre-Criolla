import React, { useState } from 'react'; // Agregado useState
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductDetails from './ProductDetailsAuxiliar';
import FormProd from './FormProd';
import ImgP from './ImgP';
import "../../../styles/components/shop/Dprod/ModalVDprod.css"

function ModalDprod({ show, handleClose }) {
  const [product, setProduct] = useState({
    images: [],
    name: "",
    price: "",
    color: "",
    sizes: [],
    description: "",
    id: ""
  });

  const handleProductLoad = (data) => {
    setProduct({
      images: data.image,
      name: data.name,
      price: data.price,
      color: data.color,
      sizes: data.size,
      id: data._id
    });
  };

  return (
    <Modal show={show} onHide={handleClose}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <section className='ModalBodyV'>
      <Modal.Body>
        <Container>
          <Row xs={1} md={2}>
            <Col>
              <ImgP images={product.images} />
            </Col>
            <Col className="sm-col-12">
            
              <FormProd
                name={product.name}
                price={product.price}
                color={product.color}
                sizes={product.sizes}
                id={product.id}
              />
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      </section>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
      </Modal.Footer>
    
    </Modal>
  );
}

export default ModalDprod;