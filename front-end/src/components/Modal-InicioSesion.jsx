import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InicioSesion from './InicioSesion';
import Registro from './Registro';

const ModalInicioSesion = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [mostrarInicio, setMostrarInicio] = useState(true);

  const toggleComponent = () => {
    setMostrarInicio(!mostrarInicio);
  };
  return (
    <>
      <button variant="dark" onClick={handleShow}>
        Iniciar Sesión
      </button>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            {/* <InicioSesion /> */}
        {mostrarInicio ? (
            <InicioSesion toggleComponent={toggleComponent} />
          ) : (
            <Registro toggleComponent={toggleComponent} />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalInicioSesion;