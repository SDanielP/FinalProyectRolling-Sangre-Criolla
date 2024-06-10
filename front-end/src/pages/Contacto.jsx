import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import InfoContacto from '../components/InfoContacto';
import FormularioEmailJS from '../components/FormularioEmailJS';

function Contact() {
  return (
    <>
      <Container>
        <Row className="mb-3 justify-content-center">
          <Col sm={8}>
            <h2>Contactanos</h2>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col sm={4}>
            <InfoContacto />
          </Col>
          <Col sm={8}>
            <FormularioEmailJS />
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Contact;
