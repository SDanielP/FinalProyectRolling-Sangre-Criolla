import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function dProd() {
    return (
        <Container>
          <Row xs={1} md={2}>
            <Col> 
            <p>Columna 1</p>
            </Col>
        <Col className='sm-col-12'> 
          <p>Columna 2</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Descripción</p>
        </Col>
      </Row>
    </Container>
  );
}