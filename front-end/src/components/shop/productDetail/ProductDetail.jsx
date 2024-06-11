import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormProd from '../compProductDet/FormProd';
import DescEnv from '../compProductDet/DescEnv';
import ImgP from '../compProductDet/ImgP';

function ProductDetail() {
    return (
        <Container>
          
          <Row xs={1} md={2}>
            <Col> 
            <ImgP/>
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

export default ProductDetail;