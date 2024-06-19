import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ImgP from "../compProductDet/ImgP";
import ProductDetails from "../compProductDet/ProductDetailsAuxiliar";
import FormProd from "../compProductDet/FormProd";
import DescEnv from "../compProductDet/DescEnv";

function DProd() {
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
      description: data.description,
      id: data._id
    });
  };

  return (
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
      <Row>
        <Col>
          <DescEnv description={product.description} />
        </Col>
      </Row>
      <ProductDetails
        onImagesLoad={(images) => setProduct((prevState) => ({ ...prevState, images }))}
        onNamePriceLoad={(name, price, color) => setProduct((prevState) => ({ ...prevState, name, price, color }))}
        onSizesLoad={(sizes) => setProduct((prevState) => ({ ...prevState, sizes }))}
        onDescriptionLoad={(description) => setProduct((prevState) => ({ ...prevState, description }))}
        onIdLoad={(id) => setProduct((prevState) => ({ ...prevState, id }))}
      />
    </Container>
  );
}

export default DProd;