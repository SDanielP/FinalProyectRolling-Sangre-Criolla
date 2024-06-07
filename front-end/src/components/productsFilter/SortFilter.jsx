import React from "react";
import { useEffect } from "react";
import { useSortFilter } from "../../store/productsFilter/useSortFilter";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

/* ----- Constantes ----- */
//***Opciones para el botón ordenar
const ordenarOpciones = [
  { id: 1, value: "alphabetical", label: "Alfabéticamente" },
  { id: 2, value: "highestPrice", label: "Mayor a menor precio" },
  { id: 3, value: "lowestPrice", label: "Menor precio a mayor precio" },
  { id: 4, value: "latestAdded", label: "Últimos cargados" },
];


const SortFilter = () => {
  /* ----- Estados para los botones - Zustand ----- */
  const { ordenarSeleccion, setSortProp, setSortSelected } = useSortFilter();

  useEffect(() => {}, [ordenarSeleccion]);
  return (
    <>
      <DropdownButton
        className="ordenar"
        title={ordenarSeleccion}
        id="bg-nested-dropdown"
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
