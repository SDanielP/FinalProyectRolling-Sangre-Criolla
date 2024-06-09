import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCategories } from "../../../store/useCategories.js";
import { useCategoriesFilter } from "../../../store/productsFilter/useCategoriesFilter.js";
import { useUbication } from "../../../store/useUbication.js";
import { Collapse, Button } from "reactstrap";

// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";

import "../../../styles/components/shop/productsFilter/DropdownFilter.css"; // Importa los estilos personalizados

const CategoriesFilter = () => {
  /* ----- Estados para los botones ----- */
  // const [ categories, setCategories ] = useState([])
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  /* ----- Estados para los botones - Zustand ----- */
  const { categories } = useCategories();
  const { selectedCategory, setSelectedCategory } = useCategoriesFilter();
  const { setUbication } = useUbication();

  /* ----- Uso de useNavigate() ----- */
  const navigate = useNavigate(); // Importar useNavigate()

  const handleCategory = (nuevaCategoria) => {
    setSelectedCategory(nuevaCategoria);
    setUbication(nuevaCategoria.charAt(0).toUpperCase() + nuevaCategoria.slice(1));
    // setIsDropdownOpen(true); // Cierra el dropdown al seleccionar una opción
    navigate(`/products/${nuevaCategoria.toLowerCase()}`);
  };

  useEffect(() => {
    console.log(selectedCategory);
  }, [selectedCategory]);

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };
  return (
    <>
      <Button
        color="primary"
        onClick={() => setCategoryOpen(!categoryOpen)}
        // style={{ marginBottom: "1rem" }}
        className="custom-dropdown"
      >
        {(selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1))}
      </Button>

      <Collapse isOpen={categoryOpen}>
        {categories.map((categoria) => (
          <div
            // className="card"
            key={categories.indexOf(categoria)}
            onClick={() => (handleCategory(categoria))}
            style={{ cursor: "pointer" }}
            // eventKey={categoria.charAt(0).toUpperCase() + categoria.slice(1)}
          >
              {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
            
          </div>
        ))}
      </Collapse>
    </>
  );
};

export default CategoriesFilter;
