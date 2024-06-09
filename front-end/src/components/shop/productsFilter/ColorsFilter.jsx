import React, { useState, useEffect } from "react";
import { Collapse, Button} from "reactstrap";
import "../../../styles/components/shop/productsFilter/ColorsFilter.css";
// import { useColorsFilter } from "../../../store/productsFilter/useColorsFilter";

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

const ColorsFilter = () => {
  // const { selectedColor, setSelectedColor } = useColorsFilter();
  const [colorOpen, setColorOpen] = useState(false);

  const handleColor = (nuevoColor) => {
    setColorOpen(nuevoColor);
    // setUbication(nuevoTamanio);
    // setIsDropdownOpen(true); // Cierra el dropdown al seleccionar una opción
    // navigate(`/products/${nuevoTamanio.toLowerCase()}`);
  };

  useEffect(() => {
    // console.log(selectedCategory);
  }, [colorOpen]);

  return (
    <>
      <Button
        color="primary"
        onClick={() => setColorOpen(!colorOpen)}
        style={{ marginBottom: "1rem", width:"100%"}}
      >
        Color
      </Button>

      <Collapse isOpen={colorOpen} className="colores">
        {colorOptions.map((colorOption) => (
          <span
            className={colorOption.label}
            key={colorOption.id}
            onClick={() => (handleColor(colorOption))}
            // value={colorOption.value}
            // id={colorOption.label}
          ></span>
        ))}
      </Collapse>
    </>
  );
};

export default ColorsFilter;
