import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCategories } from "../../../store/useCategories.js";
import { useCategoriesFilter } from "../../../store/productsFilter/useCategoriesFilter.js";
import { useUbication } from "../../../store/useUbication.js";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import "../../../styles/components/shop/productsFilter/DropdownFilter.css"; // Importa los estilos personalizados

const CategoriesFilter = () => {
  /* ----- Estados para los botones ----- */
  // const [ categories, setCategories ] = useState([])
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  /* ----- Estados para los botones - Zustand ----- */
  const { categories } = useCategories();
  const { selectedCategory, setSelectedCategory } = useCategoriesFilter();
  const { setUbication } = useUbication();

  /* ----- API ----- */
  // const getCategorias = async () => {
  //   const url = "https://fakestoreapi.com"
  //   const response = await fetch(`${url}/products/categories`);
  //   const dataCategories = await response.json();

  //   //***Asigno a las categorías la info de la API
  //   setCategories(dataCategories);
  // };

  /* ----- RENDERIZACIÓN CONSTANTE DE CATEGORÍAS ----- */
  // useEffect(() => {
  //   getCategorias();
  // }, []);

  /* ----- Uso de useNavigate() ----- */
  const navigate = useNavigate(); // Importar useNavigate()

  const handleCategory = (nuevaCategoria) => {
    setSelectedCategory(nuevaCategoria);
    setUbication(nuevaCategoria);
    // setIsDropdownOpen(true); // Cierra el dropdown al seleccionar una opción
    navigate(`/products/${nuevaCategoria.toLowerCase()}`);
  };
  useEffect(() => {
    console.log(selectedCategory);
  }, [selectedCategory, handleCategory]);


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <DropdownButton
        title={selectedCategory}
        id="bg-nested-dropdown"
        className="custom-dropdown" // Aplica la clase personalizada
        onSelect={(nuevaCategoria) => handleCategory(nuevaCategoria)}
        show={isDropdownOpen} 
        onToggle={toggleDropdown}
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


      {/* Opción con CSS - No funciona el navigate */}
      {/* <li className="dropdown__list">
        <div className="dropdown__link">
          <span className="dropdown__span">{selectedCategory}</span>
          <img src="./assets/icons/down.svg" className="dropdown__arrow" />

          <input type="checkbox" className="dropdown__check" />
        </div>

        <div className="dropdown__content">
          <ul className="dropdown__sub">
            {categories.map((categoria) => (
              <li
                className="dropdown__li"
                key={categoria}
                onClick={(nuevaCategoria) => (
                  handleCategory(nuevaCategoria)
                )}
              >
                <div className="dropdown__anchor">
                  {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </li> */}
    </>
  );
};

export default CategoriesFilter;
