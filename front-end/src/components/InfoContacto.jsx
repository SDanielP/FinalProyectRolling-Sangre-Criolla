// import { MdLocationPin } from 'react-icons/md';
// import { RiInstagramFill } from 'react-icons/ri';
// import { FaFacebook } from 'react-icons/fa';
import './contactoEstilo.css';
import 'bootstrap-icons/font//bootstrap-icons.css';
import { Container } from 'react-bootstrap';

function InfoContacto() {
  // const icono = <MdEmail className="iconoContacto" />;
  return (
    <>
      <Container>
        <div className="cajaContacto">
          {/* <FaFacebook className="iconoContacto" /> */}
          <i className="bi bi-facebook" />
          <p>Sangre Criolla</p>
        </div>
        <div className="cajaContacto">
          {/* <RiInstagramFill className="iconoContacto" /> */}
          <i className="bi bi-instagram" />
          <p>@sangre_criolla</p>
        </div>
        <div className="cajaContacto">
          {/* <MdLocationPin className="iconoContacto" /> */}
          <i className="bi bi-geo-alt-fill"></i>
          <p>Moreno, Buenos Aires</p>
        </div>
      </Container>
    </>
  );
}
export default InfoContacto;
