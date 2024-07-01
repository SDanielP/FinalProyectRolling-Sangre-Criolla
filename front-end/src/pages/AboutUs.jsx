import '../styles/AboutUs.css';
import { Container, Col, Row, Image } from 'react-bootstrap';
import InfoNosotros from '../components/about-us/InfoNosotros';
import NavbarMenu from '../components/general/NavbarMenu';
import Banner from '../components/home/Banner';
import Footer from '../components/general/footer/Footer';

const Nosotros = () => {
  return (
    <>
      <Banner />
      <NavbarMenu />
      <Container>
        <Row>
          <Col sm={5}>
            <Image
              src="https://images.pexels.com/photos/10206444/pexels-photo-10206444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              fluid
              className="altoImagen"
            />
          </Col>
          <Col sm={7}>
            <InfoNosotros />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};
export default Nosotros;
