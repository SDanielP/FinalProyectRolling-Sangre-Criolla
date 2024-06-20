import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ImgP from "../compProductDet/ImgP";
import ProductDetails from "../compProductDet/ProductDetailsAuxiliar";
import FormProd from "../compProductDet/FormProd";
import DescEnv from "../compProductDet/DescEnv";
import NavbarMenu from "../../general/NavbarMenu";

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
    <>
    <NavbarMenu />
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
      <ProductDetails onProductLoad={handleProductLoad} />
    </Container>
    </>
  );
}

export default DProd;