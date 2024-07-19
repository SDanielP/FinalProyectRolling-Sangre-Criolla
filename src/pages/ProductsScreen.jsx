import "../styles/ProductsScreen.css";
import "../styles/components/shop/productsFilter/SortFilter.modules.css";
import React, { useState } from "react";
import Products from "../components/shop/Products.jsx";
import FilterPanel from "../components/shop/FilterPanel.jsx";
import FilterPanelResponsive from "../components/shop/FilterPanelResponsive.jsx";
import SortFilter from "../components/shop/productsFilter/SortFilter.jsx";
import NavbarMenu from "../components/general/NavbarMenu.jsx";
import Footer from "../components/general/footer/Footer.jsx";

import { useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useSubcategories } from "../store/useSubcategories.js";
import { useUbication } from "../store/useUbication.js";
import { usePriceFilter } from "../store/productsFilter/usePriceFilter.js";
import { useSortFilter } from "../store/productsFilter/useSortFilter.js";
import { useCategoriesFilter } from "../store/productsFilter/useCategoriesFilter.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import Banner from "../components/home/Banner.jsx";

const ProductsScreen = () => {
  const { category, subcategory } = useParams();
  const navigate = useNavigate();

  const { subcategories } = useSubcategories();
  const { ubication, setUbication } = useUbication();
  const { min, max } = usePriceFilter();
  const { ordenarProp } = useSortFilter();
  const { selectedCategory, setSelectedCategory } = useCategoriesFilter();
  const { selectedSubcategory, setSelectedSubcategory } = useCategoriesFilter();

  //Para manejar el responsive
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleOnClick = () => {
    setSelectedCategory("");
    setSelectedSubcategory("");
    setUbication("Todos");
  };

  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
      setUbication(category.charAt(0).toUpperCase() + category.slice(1));
    }
    if (subcategory) {
      setSelectedSubcategory({ subcategory });
      if (category == "hombres") {
        setUbication(
          `Hombres / ${
            subcategory.charAt(0).toUpperCase() + subcategory.slice(1)
          }`
        );
      } else {
        setUbication(
          `Mujeres / ${
            subcategory.charAt(0).toUpperCase() + subcategory.slice(1)
          }`
        );
      }
    } else {
      setSelectedSubcategory("");
    }
  }, [
    category,
    subcategory,
    setSelectedCategory,
    setUbication,
    setSelectedSubcategory,
  ]);

  return (
    <>
      <Banner />
      <NavbarMenu />
      <nav className="navProductos">
        <h1>COMPRAR</h1>

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
                to="/products/all"
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
              / {" " + ubication + " "}
            </span>
          </div>
        </div>
        <div className="filter-section">
          <SortFilter className="sort-btn" />
          {/* Botón para abrir el menú */}
          <FontAwesomeIcon
            icon={faFilter}
            size="lg"
            onClick={toggleMenu}
            className="filter-btn-menu"
          />
        </div>

        {/* Componente del menú overlay */}
        <FilterPanelResponsive isOpen={isMenuOpen} onClose={closeMenu} />
      </nav>

      <section
        className="contenedor-filtros-productos"
        style={{ justifyContent: "center" }}
      >
        {/* Lateral izquierdo, Filtros */}
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

        {/* Lateral derecho, Productos */}
        <div className="seccion-productos" style={{ width: "75%" }}>
          {/* {loading && <p>Cargando productos...</p>}
          {error && <p>Error: {error}</p>}
          {!loading && !error && (
            <> */}
          {selectedSubcategory !== "" ? (
            <Products
              className="div-products"
              ordenar={ordenarProp}
              precioMin={min}
              precioMax={max}
            />
          ) : (
            <Products
              className="div-products"
              ordenar={ordenarProp}
              precioMin={min}
              precioMax={max}
            />
          )}
          {/* </>
          )} */}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductsScreen;
