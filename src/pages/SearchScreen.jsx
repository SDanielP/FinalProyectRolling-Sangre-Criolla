import "../styles/ProductsScreen.css";
import "../styles/components/shop/productsFilter/SortFilter.modules.css";
import React from "react";
import ProductsSearch from "../components/shop/ProductsSearch.jsx";
import FilterPanel from "../components/shop/FilterPanel.jsx";
import SortFilter from "../components/shop/productsFilter/SortFilter.jsx";
import NavbarMenu from "../components/general/NavbarMenu.jsx";

import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSubcategories } from "../store/useSubcategories.js";
import { useUbication } from "../store/useUbication.js";
import { usePriceFilter } from "../store/productsFilter/usePriceFilter.js";
import { useSortFilter } from "../store/productsFilter/useSortFilter.js";
import { useCategoriesFilter } from "../store/productsFilter/useCategoriesFilter.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Banner from "../components/home/Banner.jsx";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchScreen = () => {
  let query = useQuery();
  let searchTerm = query.get("query");

  const { subcategories } = useSubcategories();
  const { ubication, setUbication } = useUbication();
  const { min, max } = usePriceFilter();
  const { ordenarProp } = useSortFilter();
  const { selectedCategory, setSelectedCategory } = useCategoriesFilter();
  const { selectedSubcategory, setSelectedSubcategory } = useCategoriesFilter();

  useEffect(() => {}, [subcategories, selectedCategory, selectedSubcategory]);

  const handleOnClick = () => {
    setSelectedCategory("");
    setUbication("Todos");
  };

  return (
    <>
      <Banner />
      <NavbarMenu />
      <nav className="navProductos">
        <h1>RESULTADOS DE LA BÚSQUEDA</h1>

        <div className="navUsuario">
          <div className="ubicacion d-flex flex-start mb-3 align-items-center">
            <NavLink to="/">
              <FontAwesomeIcon
                icon={faHouse}
                style={{ color: "beige", paddingRight: "0.5rem" }}
              />
            </NavLink>
            <span className="ubicacionUser">
              /
              <NavLink
                to="/search"
                style={{
                  textDecoration: "none",
                  color: "beige",
                  paddingRight: "0.5rem",
                  paddingLeft: "0.5rem",
                }}
                onClick={handleOnClick}
              >
                Productos
              </NavLink>
              / {' Resultado de la búsqueda para "' + searchTerm + '"'}
            </span>
          </div>
        </div>
        <SortFilter />
      </nav>

      <section
        className="contenedor-filtros-productos"
        style={{ justifyContent: "center" }}
      >
        <div
          className="seccion-filtros"
          style={{
            width: "25%",
            minWidth: "25%",
            justifyItemsContent: "center",
            right: "0",
          }}
        >
          <FilterPanel />
        </div>

        <div className="seccion-productos" style={{ width: "75%" }}>
          <ProductsSearch
            categoria={selectedCategory}
            subcategoria={selectedSubcategory.subcategory}
            ordenar={ordenarProp}
            precioMin={min}
            precioMax={max}
            searchTerm={searchTerm}
          />
        </div>
      </section>
    </>
  );
};

export default SearchScreen;
