import React from 'react';
import Image from 'react-bootstrap/Image';

function ImgP({id, category}) {
    return ( 
        <section >
         <article id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-theme="dark">
            <article className="carousel-inner">
               <article className="carousel-item active">
                  <Image className='border' src="https://www.hundeo.com/wp-content/uploads/2019/03/Shih-Tzu-Profil.jpg" fluid />
               </article>
               <article className="carousel-item">
                  <Image className='border' src="https://www.purina.es/sites/default/files/styles/square_medium_440x440/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-09Shih20Tzu.jpg?itok=wCQvw6qZ" fluid />
               </article>
               <article className="carousel-item">
                  <Image className='border' src="https://www.purina.es/sites/default/files/2021-02/BREED%20Hero_0117_shih_tzu.jpg" fluid />
               </article>
               <article className="carousel-item">
                  <Image className='border' src="https://artero.com/media/wysiwyg/Shih_Tzu2.png" fluid />
               </article>
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
               <figure className='col-3'>
               <Image className='col-12 cursor-pointer' src="https://www.hundeo.com/wp-content/uploads/2019/03/Shih-Tzu-Profil.jpg" data-bs-target="#carouselExample" data-bs-slide-to="0" aria-label="Slide 1" />
               </figure>
               <figure className='col-3'>
               <Image  className=' col-12 cursor-pointer' src="https://www.purina.es/sites/default/files/styles/square_medium_440x440/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-09Shih20Tzu.jpg?itok=wCQvw6qZ" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2" />
               </figure>
               <figure className='col-3'>
               <Image className='col-12 cursor-pointer' src="https://www.purina.es/sites/default/files/2021-02/BREED%20Hero_0117_shih_tzu.jpg" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3" />
               </figure>
               <figure className='col-3'>
               <Image className='col-12 cursor-pointer' src="https://artero.com/media/wysiwyg/Shih_Tzu2.png" data-bs-target="#carouselExample" data-bs-slide-to="3" aria-label="Slide 4" />
               </figure>
            </article>
         </article>
      </section>
     );
}

export default ImgP;