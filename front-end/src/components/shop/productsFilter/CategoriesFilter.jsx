import "../../../styles/components/shop/productsFilter/CategoriesFilter.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCategories } from "../../../store/useCategories.js";
import { useCategoriesFilter } from "../../../store/productsFilter/useCategoriesFilter.js";
import { useUbication } from "../../../store/useUbication.js";
import { Collapse, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";

// import "../../../styles/components/shop/productsFilter/DropdownFilter.css";

const CategoriesFilter = () => {
  /* ----- Estados para los botones ----- */
  // const [ categories, setCategories ] = useState([])
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [menCategoryOpen, setMenCategoryOpen] = useState(false);
  const [womenCategoryOpen, setWomenCategoryOpen] = useState(false);

  /* ----- Estados para los botones - Zustand ----- */
  const { categories } = useCategories();
  const { selectedCategory, setSelectedCategory } = useCategoriesFilter();
  const { setUbication } = useUbication();

  /* ----- Uso de useNavigate() ----- */
  const navigate = useNavigate(); // Importar useNavigate()

  const handleCategory = (nuevaCategoria) => {
    setSelectedCategory(nuevaCategoria);
    setUbication("Hombres / " + nuevaCategoria.charAt(0).toUpperCase() + nuevaCategoria.slice(1));
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
      {/* Todos */}
      <Button
        // onClick={() => setWomenCategoryOpen(!womenCategoryOpen)}
        // style={{ marginBottom: "1rem" }}
        // className="custom-dropdown"
      >
        <span>Todos</span>
      </Button>

      {/* Mujeres */}
      <Button
        onClick={() => setWomenCategoryOpen(!womenCategoryOpen)}
      >
        <span>Damas</span>
      </Button>

      {/* Hombres */}
      <Button
        className="men-btn"
        onClick={() => setMenCategoryOpen(!menCategoryOpen)}
      >
        <span>Hombres</span>
        { menCategoryOpen === false ? <FontAwesomeIcon icon={faAngleDown} size="xs" style={{color: "#f5f5dc",}} /> : <FontAwesomeIcon icon={faAngleUp} size="xs" style={{color: "#f5f5dc",}} />}
        
      </Button>

      <Collapse isOpen={menCategoryOpen}>
        {categories.map((categoria) => (
          <div
            className="men-subcategories"
            key={categories.indexOf(categoria)}
            onClick={() => (handleCategory(categoria))}
            style={{ cursor: "pointer" }}
          >
              {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
            
          </div>
        ))}
      </Collapse>
    </>
  );
};

export default CategoriesFilter;
