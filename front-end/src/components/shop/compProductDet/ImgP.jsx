import { Image } from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../../../styles/components/shop/Dprod/Dprod.css'

function ImgP({ images }) {
  if (!images || images.length === 0) {
    return <h3>No hay imágenes disponibles, inténtelo más tarde</h3>;
  } else {
   const imagesExt = [...images, 'https://i.imgur.com/AXT1umi.jpg', 'https://i.imgur.com/QEG1Ddr.jpg'];
   return (
      <section className='col-12'>
        <article id="carouselExample" className="carousel slide col-12" data-bs-ride="carousel" data-bs-theme="dark">
          <article className="carousel-inner">
            {imagesExt.map((image, index) => (
              <article key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <Image className='border' src={image} fluid />
              </article>
            ))}
          </article>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Siguiente</span>
          </button>
        </article>
        <article className='container-fluid mt-3'>
          <article className='row'>
            {imagesExt.map((image, index) => (
              <figure key={index} className='col-3'>
                <Image className='col-12 cursor-pointer' src={image} data-bs-target="#carouselExample" data-bs-slide-to={index} aria-label={`Slide ${index + 1}`} />
              </figure>
            ))}
          </article>
        </article>
      </section>
    );
  }
}

export default ImgP;