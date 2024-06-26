import '../styles/Contact.css';
import { Container, Row, Col } from 'react-bootstrap';
import NavbarMenu from '../components/general/NavbarMenu';
import InfoContacto from '../components/contact-us/InfoContacto';
import FormularioEmailJS from '../components/contact-us/FormularioEmailJS';

const Contact = () => {
  return (
    <>
      <NavbarMenu />
      <Container>
        <Row className="mb-3 justify-content-center">
          <Col sm={8}>
            <h2>Contactanos</h2>
          </Col>
        </Row>
      </Container>
      <Container className="bordeFormulario">
        <Row>
          <Col sm={5}>
            <InfoContacto />
          </Col>
          <Col sm={7} className="centrarFormulario">
            <FormularioEmailJS />
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Contact;
