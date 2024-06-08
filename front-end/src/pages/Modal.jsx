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
                    <InicioSesion/>
                    {/* <Registro /> */}
                </Modal.Body>

                {/* <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer> */}
            </Modal.Dialog>
        </div>
            
    )

}
export default Modal1


// import Formulario from '../components/Formulario';

// function StaticExample() {
//     const titulo = ['Iniciar Sesion'];
//     return (
//         <div
//             className="modal show"
//             style={{ display: 'block', position: 'initial' }}
//         >
//             <Modal.Dialog>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Modal title</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Formulario/>
//                 </Modal.Body>

//                 <Modal.Footer>
//                     <Button variant="secondary">Close</Button>
//                     <Button variant="primary">Save changes</Button>
//                 </Modal.Footer>
//             </Modal.Dialog>
//         </div>
//     );
// }

// export default StaticExample;