import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImgP from '../compProductDet/ImgP';
import ProductDetails from '../compProductDet/ProductDetails';
import FormProd from '../compProductDet/FormProd'
import DescEnv from '../compProductDet/DescEnv';

function DProd() {
  const [images, setImages] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [color, setColor] = useState('');
  const [sizes, setSizes] = useState([]);
  const [description, setDescription] = useState('');

  const handleImagesLoad = (images) => {
    setImages(images);
  };

  const handleNamePriceLoad = (name, price, color) => {
    setName(name);
    setPrice(price);
    setColor(color);
  };

  const handleSizesLoad = (sizes) => {
    setSizes(sizes);
  };

  const handleDescriptionLoad = (description) => {
    setDescription(description);
  };

  return (
    <Container>
       <Row xs={1} md={2}>
        <Col > 
          <ImgP images={images} />
        </Col>
        <Col className='sm-col-12'> 
          <FormProd name={name} price={price} color={color} sizes={sizes} />
        </Col>
      </Row>
      <Row>
        <Col>
          <DescEnv description={description}/>
        </Col>
      </Row>
      <ProductDetails 
        onImagesLoad={handleImagesLoad} 
        onNamePriceLoad={handleNamePriceLoad} 
        onSizesLoad={handleSizesLoad}
        onDescriptionLoad={handleDescriptionLoad}
      />
    </Container>
  );
}

export default DProd;