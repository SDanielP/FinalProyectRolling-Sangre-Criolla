import React from 'react';
import Image from 'react-bootstrap/Image';


function ImgP({ id }) {
  // Obtener la ruta de la carpeta de imágenes del producto
  const productImagesPath = `../../../assets/productsIMG/${id}`;

  // Construir las rutas completas de las imágenes del producto
  const productImages = Array.from({ length: 4 }, (_, index) => {
    const imagePath = `${productImagesPath}/image${index + 1}.jpg`;
    return index < 2 ? imagePath : null; // Retorna null para las rutas vacías
  }).filter(image => image !== null); // Filtra las rutas vacías

  // Obtener las rutas de las imágenes de la carpeta tallesSC
  const tallesSCImages = Array.from({ length: 2 }, (_, index) => {
    return `../../../assets/tallesSC/image${index + 1}.jpg`;
  });

  // Combinar las imágenes del producto y las de tallesSC
  const combinedImages = [...productImages, ...tallesSCImages];

  // Imprime las rutas de las imágenes en la consola

  return (
    <section>
      <article id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-theme="dark">
        <article className="carousel-inner">
          {combinedImages.map((src, index) => (
            <article key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <Image className='border' src={src} fluid />
            </article>
          ))}
        </article>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </article>
      <article className='container-fluid mt-3'>
        <article className='row'>
          {combinedImages.map((src, index) => (
            <figure key={index} className='col-3'>
              <Image className='col-12 cursor-pointer' src={src} data-bs-target="#carouselExample" data-bs-slide-to={index} aria-label={`Slide ${index + 1}`} />
            </figure>
          ))}
        </article>
      </article>
      <Image src="./asd.jpg" />

    </section>
  );
}
export default ImgP;