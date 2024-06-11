import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormProd from "../compProductDet/FormProd";
import DescEnv from "../compProductDet/DescEnv";
import ImgP from "../compProductDet/ImgP";
import { useParams } from "react-router-dom";


function ProductDetail() {
  /* ----- Obtengo la información de la URL ----- */
  const { id, category } = useParams();

  return (
    <Container>
      <Row xs={1} md={2}>
        <Col>
          <ImgP id={id} category={category} />
        </Col>
        <Col className="sm-col-12">
          <FormProd id={id} category={category} />
        </Col>
      </Row>
      <Row>
        <Col>
          <DescEnv id={id} category={category} />
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;
