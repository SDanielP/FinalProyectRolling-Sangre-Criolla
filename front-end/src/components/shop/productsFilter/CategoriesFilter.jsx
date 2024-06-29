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

const CategoriesFilter = () => {
  /* ----- Estados para los botones ----- */
  // const [ categories, setCategories ] = useState([])
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [menCategoryOpen, setMenCategoryOpen] = useState(false);
  const [womenCategoryOpen, setWomenCategoryOpen] = useState(false);

  /* ----- Estados para los botones - Zustand ----- */
  const { subcategories } = useSubcategories();
  const { selectedCategory, setSelectedCategory, selectedSubcategory, setSelectedSubcategory } = useCategoriesFilter();
  const { setUbication } = useUbication();
  const { setSelectedColor } = useColorsFilter();
  const { setSelectedSize } = useSizeFilter();

  /* ----- Uso de useNavigate() ----- */
  const navigate = useNavigate(); // Importar useNavigate()

  /* ----- Método manejo de botón para volver a todos los productos ----- */
  const handleOnClickTodos = () => {
    setSelectedCategory("");
    setSelectedSubcategory("");
    setUbication("Todos");
    setSelectedColor("Todos los colores");
    setSelectedSize("Todos los tamaños");
    setWomenCategoryOpen(false);
    setMenCategoryOpen(false);
    navigate("/products/all");
  };

  /* ----- Método manejo de botón para ver los productos de hombres y mujeres ----- */
  // const handleOnClickHombres = () => {
  //   setSelectedCategory("Hombres");
  //   setUbication(`${selectedCategory}`);
  //   navigate(`/products/${selectedCategory.toLowerCase()}`);
  // };

  // const handleOnClickMujeres = () => {
  //   setSelectedCategory("Mujeres");
  //   setUbication(`${selectedCategory}`);
  //   navigate(`/products/${selectedCategory.toLowerCase()}`);
  // };

  /* ----- Método manejo de botón para ver las subcategorías ----- */
  const handleSubcategoryHombres = (nuevaCategoria) => {
    setSelectedCategory("Hombres");
    setSelectedSubcategory(nuevaCategoria);
    setUbication(`Hombres / ${nuevaCategoria.subcategory}`);
    navigate(`/products/hombres/${nuevaCategoria.value}`);
  };

  const handleSubcategoryMujeres = (nuevaCategoria) => {
    setSelectedCategory("Mujeres");
    setSelectedSubcategory(nuevaCategoria);
    setUbication(`Mujeres / ${nuevaCategoria.subcategory}`);
    navigate(`/products/mujeres/${nuevaCategoria.value}`);
  };


  useEffect(() => {
  }, [selectedCategory, selectedSubcategory]);

  return (
    <>
      {/* Todos */}

      <NavLink
        to="/products/all"
        onClick={handleOnClickTodos}
        className="category-btn"
      >
        <Button className="category-btn">Todos</Button>
      </NavLink>

      {/* Mujeres */}
      <Button
        className="category-btn"
        onClick={() => {
          if (!womenCategoryOpen) {
            setSelectedCategory("Mujeres");
            setSelectedSubcategory("");
            setUbication("Mujeres");
            navigate(`/products/mujeres`);
          }
          setWomenCategoryOpen(!womenCategoryOpen);
        }}
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

      <Collapse isOpen={womenCategoryOpen}>
        {subcategories.map(
          (subcategoria, index) =>
            subcategoria.subcategory !== "Bordados" &&
            subcategoria.subcategory !== "Originales" && (
              <div
                className="women-subcategories"
                key={index}
                onClick={() => handleSubcategoryMujeres(subcategoria)}
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
        onClick={() => {
          if (!menCategoryOpen) {
            setSelectedCategory("Hombres");
            setSelectedSubcategory("");
            setUbication("Hombres");
            navigate(`/products/hombres`);
          }
          setMenCategoryOpen(!menCategoryOpen);
        }}
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
            className="men-subcategories"
            key={subcategories.indexOf(subcategoria)}
            onClick={() => handleSubcategoryHombres(subcategoria)}
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
