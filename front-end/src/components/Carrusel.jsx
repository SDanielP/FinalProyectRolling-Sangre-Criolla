import { Carousel } from 'react-bootstrap';

const CarouselImage = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="/images/img1.jpg" alt="Primera imagen" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/images/img2.jpg" alt="Segunda imagen" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/images/img3.jpg" alt="Tercera imagen" />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselImage;
