import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Image } from 'react-bootstrap';
import InfoNosotros from '../components/InfoNosotros';
import '../styles/nosotrosEstilo.css';

function Nosotros() {
  return (
    <Container>
      <Row>
        {/* Imagen Seccion  */}
        <Col sm={5}>
          <Image
            src="https://images.pexels.com/photos/10206444/pexels-photo-10206444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fluid
            className="altoImagen"
          />
        </Col>
        {/* Seccion Tabs */}
        <Col sm={7}>
          <InfoNosotros />
        </Col>
      </Row>
    </Container>
  );
}
export default Nosotros;
