import React, { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image';

function ImgP({ id }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/products/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const productData = await response.json();
        setProduct(productData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product data:', error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!product) {
    return <h5>Producto no Encontrado</h5>;
  }

  const { images } = product;

  return (
    <section>
      <article id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-theme="dark">
        <article className="carousel-inner">
          {images.map((src, index) => (
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
          {images.map((src, index) => (
            <figure key={index} className='col-3'>
              <Image className='col-12 cursor-pointer' src={src} data-bs-target="#carouselExample" data-bs-slide-to={index} aria-label={`Slide ${index + 1}`} />
            </figure>
          ))}
        </article>
      </article>
    </section>
  );
}

export default ImgP;