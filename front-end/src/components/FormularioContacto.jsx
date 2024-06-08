import { Row, Col, Form, Button } from 'react-bootstrap';

function FormularioContacto() {
  return (
    <>
      <Form>
        <Row>
          <Col sm={6}>
            <Form.Group>
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="Nombre y Apellido" required></Form.Control>
            </Form.Group>
          </Col>
          <Col sm={6}>
            <Form.Group>
              <Form.Label></Form.Label>
              <Form.Control type="email" placeholder="Email" required></Form.Control>
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
              <Form.Control as="textarea" rows={3} placeholder="Escriba su Mensaje"></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="d-flex justify-content-center">
            <Button type="submit">Enviar</Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}
export default FormularioContacto;
