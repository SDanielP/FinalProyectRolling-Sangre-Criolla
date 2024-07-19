import React from "react";
import "../../../styles/components/shop/apiMessages/Ups.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadTear } from "@fortawesome/free-regular-svg-icons";

const Ups = () => {
  return (
    <>
      <div className="contenedor-msg">
        <h3>Ups!</h3>
        <div>No encontramos productos para esta categoría</div>
        <FontAwesomeIcon icon={faFaceSadTear} size="2xl" className="sad"/>
      </div>
    </>
  );
};

export default Ups;
