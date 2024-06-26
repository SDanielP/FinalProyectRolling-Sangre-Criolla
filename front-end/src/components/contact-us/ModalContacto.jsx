import '../styles/Contact.css';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ModalContacto = ({ show, onHide }) => {
  const navegar = useNavigate();
  const ira = () => {
    onHide();
    navegar('/');
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header className="headerColor">
        <Modal.Title>¡Correo Enviado!</Modal.Title>
      </Modal.Header>
      <Modal.Body className="fw-semibold">Tu consulta se ha enviado correctamente.</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={ira} className="colorBoton">
          Volver a Inicio
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalContacto;
