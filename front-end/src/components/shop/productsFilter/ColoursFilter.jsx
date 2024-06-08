import React from "react";
import "../../../styles/components/shop/productsFilter/ColoursFilter.css";
import { useColoursFilter } from "../../../store/productsFilter/useColoursFilter";

/* ----- Constantes ----- */
//***Opciones para el botón colores
const colorOptions = [
  { id: 1, value: "black", label: "negro" },
  { id: 2, value: "brown", label: "marron" },
  { id: 3, value: "beige", label: "beige" },
  { id: 4, value: "orange", label: "naranja" },
  { id: 5, value: "white", label: "blanco" },
  { id: 6, value: "red", label: "rojo" },
];

const ColoursFilter = () => {
  const { selectedColour, setSelectedColour } = useColoursFilter();

  return (
    <>
      <div className="colores">
        {colorOptions.map((colorOption) => (
          <span
            className={colorOption.label}
            key={colorOption.id}
            eventKey={colorOption.id}
            value={colorOption.value}
            id={colorOption.label}
            alt={colorOption.value}
          ></span>
        ))}
      </div>
    </>
  );
};

export default ColoursFilter;
