import React, { useRef, useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import ModalContacto from './ModalContacto';
import '../../styles/ContactUs.css';

const FormularioEmailJS = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_VERSION_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          console.log('¡Correo enviado!');
        },
        (error) => {
          console.log('Error al enviar...', error.text);
        }
      );
  };

  const [show, setShow] = useState(false);

  return (
    <>
      <Form ref={form} onSubmit={sendEmail}>
        {/* Nombre y Correo */}
        <Row>
          <Col sm={6}>
            <Form.Group>
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                name="user_name"
                placeholder="Nombre y Apellido"
                required
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col sm={6}>
            <Form.Group>
              <Form.Label></Form.Label>
              <Form.Control
                type="email"
                name="user_email"
                placeholder="Email"
                required
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        {/* Asunto del correo */}
        <Row>
          <Col sm={12}>
            <Form.Group>
              <Form.Label></Form.Label>
              <Form.Control type="text" name="subject" placeholder="Asunto" required></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        {/* Mensaje del correo */}
        <Row>
          <Col sm={12} className="mb-3">
            <Form.Group>
              <Form.Label></Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="message"
                placeholder="Escriba su Mensaje, por favor"
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        {/* Boton de enviar */}
        <Row>
          <Col sm={12} className="d-flex justify-content-center">
            <Button
              type="submit"
              value="Enviar"
              className="colorBoton"
              onClick={() => setShow(true)}
            >
              Enviar
              <i className="bi bi-send btn" />
            </Button>
            {show && <ModalContacto show={show} onHide={() => setShow(false)} />}
          </Col>
        </Row>
      </Form>
    </>
  );
};
export default FormularioEmailJS;
