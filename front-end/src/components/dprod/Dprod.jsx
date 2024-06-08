import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormProd from './comp-dprod/FormProd';
import DescEnv from './comp-dprod/DescEnv';

function DProd() {
    return (
        <Container>
          <Row xs={1} md={2}>
            <Col> 
            <p>Columna 1</p>
            </Col>
        <Col className='sm-col-12'> 
          <FormProd />
        </Col>
      </Row>
      <Row>
        <Col>
          <DescEnv />
        </Col>
      </Row>
    </Container>
  );
}

export default DProd;