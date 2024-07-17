import "../../../styles/components/shop/productsFilter/SizeFilter.modules.css";
import React, { useState, useEffect } from "react";
import { Collapse, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const sizeOptions = [
  { id: 1, value: "xs", label: "XS" },
  { id: 2, value: "s", label: "S" },
  { id: 3, value: "m", label: "M" },
  { id: 4, value: "l", label: "L" },
  { id: 5, value: "xl", label: "XL" },
  { id: 6, value: "xxl", label: "XXL" },
];

const SizeFilter = () => {
  const [sizeOpen, setSizeOpen] = useState(false);

  const handleSize = (nuevoTamanio) => {
    setSizeOpen(nuevoTamanio);
  };

  useEffect(() => {
  }, [sizeOpen]);
  return (
    <section className="sortFilter">
      <Button
        className="size-btn"
        onClick={() => setSizeOpen(!sizeOpen)}
        style={{ marginBottom: "1rem", width: "100%" }}
      >
        <span>Tamaño</span>
        {sizeOpen === false ? (
          <FontAwesomeIcon
            icon={faPlus}
            size="sm"
            style={{ color: "#f5f5dc" }}
          />
        ) : (
          <FontAwesomeIcon
            icon={faMinus}
            size="sm"
            style={{ color: "#f5f5dc" }}
          />
        )}
      </Button>
      <Collapse isOpen={sizeOpen} className="contenedor-colapsable">
        <div className="tallas size-options">
          {sizeOptions.map((size) => (
            <div
              className="talla"
              key={sizeOptions.indexOf(size)}
              onClick={() => handleSize(size)}
              style={{ cursor: "pointer" }}
            >
              <span>{size.label}</span>
            </div>
          ))}
        </div>
        <p className="all-sizes">Todos los tamaños</p>
      </Collapse>
    </section>
  );
};

export default SizeFilter;
