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
  const [menCategoryOpen, setMenCategoryOpen] = useState(false);
  const [womenCategoryOpen, setWomenCategoryOpen] = useState(false);

  const { subcategories } = useSubcategories();
  const {
    selectedCategory,
    setSelectedCategory,
    selectedSubcategory,
    setSelectedSubcategory,
  } = useCategoriesFilter();
  const { ubication, setUbication } = useUbication();
  const { setSelectedColor } = useColorsFilter();
  const { setSelectedSize } = useSizeFilter();

  const navigate = useNavigate();

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

  const handleSubcategoryHombres = (nuevaCategoria) => {
    setSelectedCategory("Hombres");
    setSelectedSubcategory(nuevaCategoria);
    // setUbication(`Hombres / ${nuevaCategoria.subcategory}`);
    navigate(`/products/hombres/${nuevaCategoria.value}`);
  };

  const handleSubcategoryMujeres = (nuevaCategoria) => {
    setSelectedCategory("Mujeres");
    setSelectedSubcategory(nuevaCategoria);
    // setUbication(`Mujeres / ${nuevaCategoria.subcategory}`);
    navigate(`/products/mujeres/${nuevaCategoria.value}`);
  };

  useEffect(() => {}, [selectedCategory, selectedSubcategory, ubication]);

  return (
    <section className="sortFilter">
      <NavLink
        to="/products/all"
        onClick={handleOnClickTodos}
        className="category-btn"
      >
        <Button className="category-btn">Todos</Button>
      </NavLink>

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
                style={{ cursor: "pointer" }}
              >
                <span onClick={() => handleSubcategoryMujeres(subcategoria)}>
                  {subcategoria.subcategory}
                </span>
              </div>
            )
        )}
      </Collapse>

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
            style={{ cursor: "pointer" }}
          >
            <span onClick={() => handleSubcategoryHombres(subcategoria)}>
              {subcategoria.subcategory}
            </span>
          </div>
        ))}
      </Collapse>
    </section>
  );
};
export default CategoriesFilter;
