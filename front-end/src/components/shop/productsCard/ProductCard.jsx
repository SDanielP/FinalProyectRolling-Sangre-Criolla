import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ producto }) => {
      /* ----- HISTORIAL ----- */
  const navigate = useNavigate(); // Importar useNavigate()
  
  return (
    <>
      <Card key={producto.id} className="tarjetaProducto">
        <div className="contenedorImg">
          <Card.Img
            variant="top"
            src={producto.image}
            className="imgProducto"
          />
        </div>
        <Card.Body className="card-body">
          <Card.Title className="tituloProd">{producto.title}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item className="textoProd">
            ${producto.price}
          </ListGroup.Item>
        </ListGroup>
        <Card.Body className="card-body">
          <Button
            variant="outline-dark"
            className="btnVerProducto"
            onClick={() =>
              navigate(`/products/${producto.category}/${producto.id}`)
            } // Redirigir a la página del producto
          >
            Ver producto
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;
