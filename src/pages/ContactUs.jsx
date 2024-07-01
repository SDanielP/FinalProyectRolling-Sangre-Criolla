import '../styles/ContactUs.css';
import { Container, Row, Col } from 'react-bootstrap';
import NavbarMenu from '../components/general/NavbarMenu';
import Banner from '../components/home/Banner';
import Footer from '../components/general/footer/Footer';
import InfoContacto from '../components/contact-us/InfoContacto';
import FormularioEmailJS from '../components/contact-us/FormularioEmailJS';
const Contact = () => {
  return (
    <>
      <Banner />
      <NavbarMenu />
      <Container fluid="md">
        <h2 className="tituloFormulario fs-2 mb-4">CONTACTANOS</h2>
        <Container>
          <Row className="bordeFormulario">
            <Col sm={5}>
              <InfoContacto />
            </Col>
            <Col sm={7} className="centrarFormulario">
              <FormularioEmailJS />
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
  );
};
export default Contact;
