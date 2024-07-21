import React from "react";
import Accordion from "react-bootstrap/Accordion";
import NavbarMenu from "../components/general/NavbarMenu";
import Banner from "../components/home/Banner";
import Footer from "../components/general/footer/Footer";

function FrequentQuestions() {
  return (
    <>
      <Banner />
      <NavbarMenu />
      <section className="container mt-5 mb-5 pb-5">
        <h2>Preguntas Frecuentes</h2>
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <Accordion defaultActiveKey="0" className="mt-3">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  ¿Con qué materia prima se fabrican los cinturones?
                </Accordion.Header>
                <Accordion.Body>
                  En Sangre Criolla Cinturones utilizamos cuero vacuno, mas
                  precisamente: grupón engrasado de 4mm de espesor.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  ¿Los productos tienen garantía?
                </Accordion.Header>
                <Accordion.Body>
                  Sangre Criolla ofrece garantía por cualquier
                  defecto/anormalidad en su fabricación, no obstante, la
                  garantía no cubre daños, roturas, cortes, desgastes, etc.
                  causados por una incorrecta/ irregular utilización y/o
                  manipulación del cinturón
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  ¿Confeccionan talles especiales y/o a pedido?
                </Accordion.Header>
                <Accordion.Body>
                  Fabricamos cinturones personalizados. Para más información
                  comunicarse consúltenos vía e-mail a: info@sangrecriolla.com
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>¿Los envíos son gratis?</Accordion.Header>
                <Accordion.Body>
                  Realizamos envios sin cargo a toda la República Argentina.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  ¿Realizan envíos a otros países?
                </Accordion.Header>
                <Accordion.Body>
                  Realizamos envios a cualquier parte del mundo. Para mas
                  información realice su consulta a: ventas@sangrecriolla.com
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  ¿Realizan descuento por mayor?
                </Accordion.Header>
                <Accordion.Body>
                  ¡Ofertas imperdibles! en ventas al por mayor y/o a
                  revendedores. Para mas información envíenos un correo a:
                  ventas@sangrecriolla.com
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  En el proceso productivo ¿contemplan al medio ambiente?
                </Accordion.Header>
                <Accordion.Body>
                  En Sangre Criolla Cinturones tenemos un fuerte compromiso por
                  coexistir de manera armoniosa con la naturaleza, el entorno y
                  la comunidad. Somos activistas de una política ambiental
                  basada en las tres «R»: RECICLADO, REUTILIZACIÓN Y REDUCCIÓN.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default FrequentQuestions;
