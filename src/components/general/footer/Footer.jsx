import React from "react";
import { NavLink } from "react-router-dom";
import RrhhSection from "./RrhhSection.jsx";
import SocialContactSection from "./SocialContactSection.jsx";
import "../../../styles/components/general/Footer.css";
import CompanyRights from "./CompanyRights.jsx";

const Footer = () => {
  return (
    <footer className="container-fluid bg-white footer-block">
      <section className="container-links-columns">
        <RrhhSection />
      </section>
      <section>
        <CompanyRights />
      </section>
    </footer>
  );
};

export default Footer;
