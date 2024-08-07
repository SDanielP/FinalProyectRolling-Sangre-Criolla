import React from "react";
import NavbarMenu from "../components/general/NavbarMenu";
import Banner from "../components/home/Banner";
import MainBanner from "../components/home/MainBanner";
import SecondaryBanner from "../components/home/SecondaryBanner";
import CatalogSection from "../components/home/CatalogSection"; 
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
        <CatalogSection />
        <Footer />
      </main>
    </div>
  );
}

export default Home;
