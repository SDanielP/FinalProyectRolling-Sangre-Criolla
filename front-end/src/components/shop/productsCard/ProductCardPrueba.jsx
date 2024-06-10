import {
  FaShoppingCart,
  FaRegBookmark,
  FaStar,
  FaFireAlt,
  FaHeart,
} from "react-icons/fa";
import "../../../styles/components/shop/productsCard/ProductsCardPrueba.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Container } from "reactstrap";


const ProductsCardPrueba = (props) => {
  return (
    <>
        




      {/* <div className="productList">
        <div key={props.id} className="productCard">
          <img
            src={props.image}
            alt="product-img"
            className="productImage"
          ></img>

          <FaShoppingCart className={"productCard__cart"} />
          <FaRegBookmark className={"productCard__wishlist"} />
          <FaFireAlt className={"productCard__fastSelling"} />

          <div className="productCard__content">
            <h3 className="productName">{props.name}</h3>
            <div className="displayStack__1">
              <div className="productPrice">${props.price}</div>
              <div className="productSales">{props.totalSales} units sold</div>
            </div>
          </div>
        </div>
      </div> */}

      {/* taildwind */}
      {/* <Card className="position-relative overflow-hidden shadow-lg">
        <Image
          src={props.img}
          alt=""
          className="transition-transform duration-200"
          style={{ transition: "transform 0.2s" }}
        />
        <div
          className="position-absolute w-100 h-100 d-flex align-items-end"
          style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent)' }}
        >
          <div className="p-4 text-white">{props.name}</div>
        </div>
      </Card> */}

      {/* pasado a bootstrap */}
      {/* <Container className="App">
        <div>
          <Card className="position-relative overflow-hidden shadow-lg">
            <Card.Img
              src={props.image}
              alt=""
              className="transition-transform duration-200"
              style={{ transition: "transform 0.2s" }}
            />
            <Card.ImgOverlay
              className="d-flex align-items-end"
              style={{
                background:
                  "linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent)",
              }}
            >
              <div className="p-4 text-white w-100">{props.name}</div>
            </Card.ImgOverlay>
          </Card>

          <h3 className="h3 mb-2 font-weight-bold">Lorem Ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            deleniti odit perspiciatis nemo iste error illo labore voluptate.
          </p>
          <div className="d-flex mt-4">
            <Button variant="primary" className="d-flex align-items-center">
              <FaHeart className="mr-2" />
            </Button>
          </div>
        </div>
      </Container> */}



      {/* <div className="d-flex flex-wrap justify-content-center">
        <Card style={{ width: "18rem" }} className="m-3">
          <Card.Img variant="top" src={props.image} />
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>{props.name}</Card.Text>
            <div className="d-flex justify-content-between align-items-center">
              <Button variant="primary">Comprar</Button>
              <span className="text-muted">${props.price}</span>
            </div>
          </Card.Body>
        </Card>
      </div> */}
    </>
  );
};

export default ProductsCardPrueba;
