import "../../../styles/components/shop/productsFilter/CategoriesFilter.css";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSubcategories } from "../../../store/useSubcategories.js";
import { useCategoriesFilter } from "../../../store/productsFilter/useCategoriesFilter.js";
import { useSizeFilter } from "../../../store/productsFilter/useSizeFilter.js";
import { useColorsFilter } from "../../../store/productsFilter/useColorsFilter.js";
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
  const { subcategories } = useSubcategories();
  const { selectedCategory, setSelectedCategory } = useCategoriesFilter();
  const { setUbication } = useUbication();
  const { setSelectedColor } = useColorsFilter();
  const { setSelectedSize } = useSizeFilter();

  /* ----- Uso de useNavigate() ----- */
  const navigate = useNavigate(); // Importar useNavigate()

  const handleCategory = (nuevaCategoria) => {
    setSelectedCategory(nuevaCategoria);
    setUbication(
      "Hombres / " +
        nuevaCategoria.charAt(0).toUpperCase() +
        nuevaCategoria.slice(1)
    );
    // setIsDropdownOpen(true); // Cierra el dropdown al seleccionar una opción
    navigate(`/products/${nuevaCategoria.toLowerCase()}`);
  };

  /* ----- Método manejo de botón para volver a una ruta anterior o padre ----- */
  const handleOnClick = () => {
    setSelectedCategory("");
    setUbication("Todos");
    setSelectedColor("Todos los colores");
    setSelectedSize("Todos los tamaños");
  };

  useEffect(() => {
    // console.log(selectedCategory);
  }, [selectedCategory]);

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };
  return (
    <>
      {/* Todos */}

      <NavLink
        to="/products/all"
        onClick={handleOnClick}
        className="category-btn"
      >
        <Button>Todos</Button>
      </NavLink>

      {/* Mujeres */}
      <Button
        className="category-btn"
        onClick={() => setWomenCategoryOpen(!womenCategoryOpen)}
      >
        <span>Mujeres</span>
        {womenCategoryOpen === false ? (
          <FontAwesomeIcon
            icon={faAngleDown}
            size="xs"
            style={{ color: "#f5f5dc" }}
          />
        ) : (
          <FontAwesomeIcon
            icon={faAngleUp}
            size="xs"
            style={{ color: "#f5f5dc" }}
          />
        )}
      </Button>

      {/* <Collapse isOpen={womenCategoryOpen}>
        {subcategories.map((subcategoria) => (
          <div
            className="women-subcategories"
            key={subcategories.indexOf(subcategoria)}
            onClick={() => handleCategory(subcategoria)}
            style={{ cursor: "pointer" }}
          >
            {subcategoria.subcategory}
          </div>
        ))}
      </Collapse> */}
      <Collapse isOpen={womenCategoryOpen}>
        {subcategories.map(
          (subcategoria, index) =>
            (subcategoria.subcategory !== "Bordados" && subcategoria.subcategory !== "Originales") && (
              <div
                className="women-subcategories"
                key={index}
                onClick={() => handleCategory(subcategoria)}
                style={{ cursor: "pointer" }}
              >
                {subcategoria.subcategory}
              </div>
            )
        )}
      </Collapse>

      {/* Hombres */}
      <Button
        className="category-btn"
        onClick={() => setMenCategoryOpen(!menCategoryOpen)}
      >
        <span>Hombres</span>
        {menCategoryOpen === false ? (
          <FontAwesomeIcon
            icon={faAngleDown}
            size="xs"
            style={{ color: "#f5f5dc" }}
          />
        ) : (
          <FontAwesomeIcon
            icon={faAngleUp}
            size="xs"
            style={{ color: "#f5f5dc" }}
          />
        )}
      </Button>

      <Collapse isOpen={menCategoryOpen}>
        {subcategories.map((subcategoria) => (
          <div
            className="women-subcategories"
            key={subcategories.indexOf(subcategoria)}
            onClick={() => handleCategory(subcategoria)}
            style={{ cursor: "pointer" }}
          >
            {/* {categoria.charAt(0).toUpperCase() + categoria.slice(1)} */}
            {subcategoria.subcategory}
          </div>
        ))}
      </Collapse>
    </>
  );
};

export default CategoriesFilter;
