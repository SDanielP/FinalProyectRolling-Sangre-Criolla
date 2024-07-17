import React, { useState, useEffect } from "react";
import { Collapse, Button } from "reactstrap";
import "../../../styles/components/shop/productsFilter/ColorsFilter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const colorOptions = [
  { id: 1, value: "black", label: "negro" },
  { id: 2, value: "brown", label: "marron" },
  { id: 3, value: "beige", label: "beige" },
  { id: 4, value: "orange", label: "naranja" },
  { id: 5, value: "white", label: "blanco" },
  { id: 6, value: "red", label: "rojo" },
];

const ColorsFilter = () => {
  const [colorOpen, setColorOpen] = useState(false);

  const handleColor = (nuevoColor) => {
    setColorOpen(nuevoColor);
  };

  useEffect(() => {
  }, [colorOpen]);

  return (
    <section className="sortFilter">
      <Button
        className="color-btn"
        onClick={() => setColorOpen(!colorOpen)}
        style={{ marginBottom: "1rem", width: "100%" }}
      >
        <span>Color</span>
        {colorOpen === false ? (
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

      <Collapse isOpen={colorOpen} className="colores color-options">
        {colorOptions.map((colorOption) => (
          <span
            className="colores-span"
            id={colorOption.label}
            key={colorOption.id}
            onClick={() => handleColor(colorOption)}

          ></span>
        ))}
        <p className="all-colors">Todos los colores</p>
      </Collapse>
    </section>
  );
};

export default ColorsFilter;
