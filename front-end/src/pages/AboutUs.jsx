import '../Styles/AboutUs.css';
import { Container, Col, Row, Image } from 'react-bootstrap';
import InfoNosotros from '../components/about-us/InfoNosotros';
import NavbarMenu from '../components/general/NavbarMenu';

function Nosotros() {
  return (
    <>
      <NavbarMenu />
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
    </>
  );
}
export default Nosotros;
