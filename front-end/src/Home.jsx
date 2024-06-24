import React from 'react';
import Navbar from './components/home/Navbar';
import Banner from './components/home/Banner';
import Header from './components/home/Header';
import MainBanner from './components/home/MainBanner';
import SecondaryBanner from './components/home/SecondaryBanner';
import ProductSection from './components/home/ProductSection';
import RrhhSection from './components/home/RrhhSection';
import CatalogSection from './components/home/CatalogSection'; // Importar componente de catálogo
import SocialContactSection from './components/home/SocialContactSection'; // Importar componente de redes sociales y contacto
import Footer from './components/home/Footer';

function Home() {
  return (
    <div className="App">
      <Banner />
      <Navbar /> 
      <main>
        
        <MainBanner />
        <SecondaryBanner />
        <ProductSection />
        <CatalogSection />
        
        <div style={{display: "flex",justifyContent:"start"}}>
        <RrhhSection />
        
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default Home;

