import React from "react";
import NavbarMenu from "../components/general/NavbarMenu";
import Banner from "../components/home/Banner";
import Header from "../components/general/footer/Header";
import MainBanner from "../components/home/MainBanner";
import SecondaryBanner from "../components/home/SecondaryBanner";
import ProductSection from "../components/home/ProductSection";
import RrhhSection from "../components/general/footer/RrhhSection";
import CatalogSection from "../components/home/CatalogSection"; // Importar componente de catálogo
import SocialContactSection from "../components/general/footer/SocialContactSection"; // Importar componente de redes sociales y contacto
import Footer from "../components/general/footer/Footer";
import "../styles/Home.css"

function Home() {
  return (
    <div className="App-home">
      <Banner />
      <NavbarMenu />
      <main className="main-home">
        <MainBanner />
        <SecondaryBanner />
        <ProductSection />
        <CatalogSection />
        <Footer />
        <div className="ultimaParte-home">
          <RrhhSection />
        </div>
      </main>
    </div>
  );
}

export default Home;
