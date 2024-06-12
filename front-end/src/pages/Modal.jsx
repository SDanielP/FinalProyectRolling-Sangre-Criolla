import InicioSesion from "../components/InicioSesion";
import Registro from "../components/Registro";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../styles/styleModal.css";
import { useState } from "react";

function Modal1() {
  const [mostrarInicio, setMostrarInicio] = useState(true);

  const toggleComponent = () => {
    setMostrarInicio(!mostrarInicio);
  };

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          {mostrarInicio ? (
            <InicioSesion toggleComponent={toggleComponent} />
          ) : (
            <Registro toggleComponent={toggleComponent} />
          )}
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
}
export default Modal1;
