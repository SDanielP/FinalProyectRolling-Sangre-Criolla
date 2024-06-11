import { Row, Col, Form, Button } from 'react-bootstrap';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import 'bootstrap-icons/font//bootstrap-icons.css';

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

  return (
    <>
      <Form ref={form} onSubmit={sendEmail}>
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
        <Row>
          <Col sm={12}>
            <Form.Group>
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="Asunto" required></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="mb-3">
            <Form.Group>
              <Form.Label></Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="message"
                placeholder="Escriba su Mensaje por favor"
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="d-flex justify-content-center">
            <Button type="submit" variant="secondary" value="Enviar">
              Enviar
              <i className="bi bi-send btn" />
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};
export default FormularioEmailJS;
