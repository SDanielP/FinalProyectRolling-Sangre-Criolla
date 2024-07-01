import { useState } from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font//bootstrap-icons.css';
import '../../styles/AboutUs.css';

const InfoNosotros = () => {
  const [key, setKey] = useState('nosotros');

  return (
    <Container fluid="md">
      <h3 className="fs-2 mbr-4 fw-bolder tituloColor tituloNosotros">
        SANGRE CRIOLLA, DE ARGENTINA PARA TODO EL MUNDO…
      </h3>
      <Tabs
        id="tab-nosotros"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 seccionColor"
      >
        <Tab eventKey="nosotros" title="Sobre Nosotros">
          <h4 className="fst-italic fs-4 py-2 tituloColor">CONEXIÓN PROFUNDA CON NUESTRA TIERRA</h4>
          <p className="fs-5">
            Nos enorgullece profundamente pertenecer a esta tierra y conocer íntimamente cada uno de
            los elementos que componen nuestros productos. Desde la selección de los materiales
            hasta el proceso final de elaboración, cada etapa es un reflejo de nuestra dedicación y
            respeto por nuestras raíces. Antes de compartir nuestros productos con el mundo, los
            hacemos nuestros, asegurándonos de que cumplan con los más altos estándares de calidad y
            autenticidad.
          </p>
          <Container className="py-3">
            <p className="fst-italic fs-5 fw-semibold">
              <i className="bi bi-check-circle-fill" />
              Calidad excepcional que nos distingue.
            </p>
            <p className="fst-italic fs-5 fw-semibold">
              <i className="bi bi-check-circle-fill" />
              Conocemos nuestros productos al detalle.
            </p>
            <p className="fst-italic fs-5 fw-semibold">
              <i className="bi bi-check-circle-fill" />
              Ofrecemos productos funcionales y duraderos.
            </p>
          </Container>
          <p className="fs-5">Llevá con vos una historia y un pedazo de nuestra tierra.</p>
        </Tab>
        <Tab eventKey="productos" title="Nuestros Productos">
          <h4 className="fst-italic fs-4 py-2 tituloColor">EL CUERO, FRUTO DE UN ARTE ANTIGUO.</h4>
          <p className="fs-5">
            El curtido que utilizamos es de origen vegetal, realizado con tanino, una sustancia
            extraída de la corteza de algunos árboles. En nuestro caso, del quebracho. Este proceso
            conserva la fibra del cuero y le otorga características como suavidad y elasticidad,
            permitiéndonos ofrecer un producto duradero y resistente al uso diario y al paso del
            tiempo. Gracias a este método de curtido, logramos obtener cuero de la más alta calidad,
            con el que confeccionamos nuestros productos, como el grupón engrasado de 4 mm de
            espesor.
          </p>
        </Tab>
        <Tab eventKey="fabricacion" title="Fabricación">
          <h4 className="fst-italic fs-4 py-2 tituloColor">
            TRADICIÓN Y MAESTRÍA EN CADA DETALLE.
          </h4>
          <p className="fs-5">
            Nuestros productos son fabricados a mano por artesanos especializados en cuero, quienes
            dedican su experiencia y habilidad para cuidar cada detalle del proceso de creación.
            Desde la selección de las mejores pieles hasta los toques finales de bordado y diseño,
            cada paso es realizado con un esmero excepcional.
          </p>
          <p className="fs-5 mb-2">
            La dedicación y el compromiso de estos artesanos no solo aseguran la durabilidad de
            nuestros artículos, sino que también les confieren un carácter distintivo y una belleza
            que trasciende el tiempo.
          </p>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default InfoNosotros;
