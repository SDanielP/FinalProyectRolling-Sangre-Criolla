import "../../../styles/components/shop/productsFilter/SortFilter.css";
import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useEffect } from "react";
import { useSortFilter } from "../../../store/productsFilter/useSortFilter";

/* ----- Constantes ----- */
//***Opciones para el botón ordenar
const ordenarOpciones = [
  // { id: 0, value: "defect", label: "Orden por defecto" },git add
  { id: 1, value: "alphabetical", label: "Alfabéticamente" },
  { id: 2, value: "highestPrice", label: "Mayor a menor precio" },
  { id: 3, value: "lowestPrice", label: "Menor precio a mayor precio" },
  { id: 4, value: "latestAdded", label: "Últimos cargados" },
];

const SortFilter = () => {
  /* ----- Estados para los botones Ordenar - Zustand ----- */
  const { ordenarSeleccion, setSortProp, setSortSelected } = useSortFilter();

  useEffect(() => {}, [ordenarSeleccion]);

  return (
    <>
      <DropdownButton
        className="ordenar sort-btn"
        title={"Ordenar por: " + ordenarSeleccion}
        onSelect={(opcionOrdenar) => (
          setSortSelected(ordenarOpciones[opcionOrdenar - 1].label),
          setSortProp(ordenarOpciones[opcionOrdenar - 1].value)
        )}
      >
        {ordenarOpciones.map((opcionOrdenar) => (
          <Dropdown.Item
            className="ordenarOptn"
            key={opcionOrdenar.id}
            eventKey={opcionOrdenar.id}
            value={opcionOrdenar.value}
          >
            {opcionOrdenar.label}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </>
  );
};

export default SortFilter;
