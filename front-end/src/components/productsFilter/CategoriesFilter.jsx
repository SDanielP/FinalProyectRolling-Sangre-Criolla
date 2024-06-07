import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCategories } from "../../store/useCategories.js";
import { useCategoriesFilter } from "../../store/productsFilter/useCategoriesFilter.js";
import { useUbication } from "../../store/useUbication.js";

import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const CategoriesFilter = () => {
  /* ----- Estados para los botones - Zustand ----- */
  const { categories } = useCategories();
  const { selectedCategory, setSelectedCategory } = useCategoriesFilter();
  const { setUbication } = useUbication();

    /* ----- Uso de useNavigate() ----- */
    const navigate = useNavigate(); // Importar useNavigate()

    useEffect(() => {
      }, [selectedCategory]);

  return (
    <>
      <DropdownButton
        title={selectedCategory}
        id="bg-nested-dropdown"
        onSelect={(nuevaCategoria) => (
          setSelectedCategory(nuevaCategoria),
          setUbication(nuevaCategoria),
          navigate(`/products/${nuevaCategoria.toLowerCase()}`)
        )}
      >
        {categories.map((categoria) => (
          <Dropdown.Item
            eventKey={categoria.charAt(0).toUpperCase() + categoria.slice(1)}
            key={categories.indexOf(categoria)}
          >
            {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </>
  );
};

export default CategoriesFilter;
