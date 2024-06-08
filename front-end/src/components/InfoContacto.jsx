import { Container, Row, Col } from 'react-bootstrap';
import { MdLocationPin, MdEmail } from 'react-icons/md';
import './contactoEstilo.css';

function InfoContacto() {
  const icono = <MdEmail />;
  const texto = 'info@sangrecriolla.com';
  return (
    <>
      <Container className="cajaContacto">
        <Row>
          <div className="iconoContacto">{icono}</div>
          <p>{texto}</p>
        </Row>
      </Container>
    </>
  );
}
export default InfoContacto;
