import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InicioSesion from './InicioSesion';
import Registro from './Registro';
import '../../styles/styleModal.css';

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
      <button className='button' variant="dark" onClick={handleShow} >
        Iniciar Sesión
      </button>

      <Modal className='' show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header className='modal-InicioYRegistro' closeButton>
        </Modal.Header>
        <Modal.Body className='modal-body modal-InicioYRegistro'>
        {mostrarInicio ? (
            <InicioSesion toggleComponent={toggleComponent} />
          ) : (
            <Registro toggleComponent={toggleComponent} />
          )}
        </Modal.Body>
        <Modal.Footer className='modal-footer'>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalInicioSesion;