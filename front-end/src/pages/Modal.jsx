import InicioSesion from "../components/InicioSesion";
import Registro from "../components/Registro";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../styles/styleModal.css'

function Modal1() {
    return(
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <InicioSesion />
                    {/* <Registro /> */}
                </Modal.Body>
            </Modal.Dialog>
        </div>
            
    )

}
export default Modal1
