import './contactoEstilo.css';
import 'bootstrap-icons/font//bootstrap-icons.css';
import { Container } from 'react-bootstrap';

function InfoContacto() {
  return (
    <>
      <Container className="cajaDatos">
        <div className="cajaContacto">
          <i className="bi bi-facebook fs-4" />
          <p className="fs-6 fw-semibold">Sangre Criolla</p>
        </div>
        <div className="cajaContacto">
          <i className="bi bi-instagram fs-4" />
          <p className="fs-6 fw-semibold">@sangre_criolla</p>
        </div>
        <div className="cajaContacto">
          <i className="bi bi-geo-alt-fill fs-4"></i>
          <p className="fs-6 fw-semibold">Moreno, Buenos Aires</p>
        </div>
      </Container>
    </>
  );
}
export default InfoContacto;
