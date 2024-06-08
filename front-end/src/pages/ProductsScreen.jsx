import React from "react";
import { useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";

import { useProducts } from "../store/useProducts.js";
import { useCategories } from "../store/useCategories.js";
import { useUbication } from "../store/useUbication.js";
import { usePriceFilter } from "../store/productsFilter/usePriceFilter.js";
import { useSortFilter } from "../store/productsFilter/useSortFilter.js";
import { useCategoriesFilter } from "../store/productsFilter/useCategoriesFilter.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import Products from "../components/shop/Products.jsx";
import PriceFilter from "../components/shop/productsFilter/PriceFilter.jsx";
import SortFilter from "../components/shop/productsFilter/SortFilter.jsx";
import CategoriesFilter from "../components/shop/productsFilter/CategoriesFilter.jsx";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import "../styles/ProductsScreen.css";
import "../styles/components/shop/Categories.css";
import FilterPanel from "../components/shop/productsFilter/FilterPanel.jsx";
// import "../styles/components/shop/productsFilter/DROP.css";

/* ----- Constantes ----- */
//***URL API
const url = "https://fakestoreapi.com";

const ProductsScreen = () => {
  /* ----- Estados - Zustand ----- */
  const { categories } = useCategories();
  const { setProducts } = useProducts();
  const { ubication, setUbication } = useUbication();
  const { min, max } = usePriceFilter();
  const { ordenarProp } = useSortFilter();
  const { selectedCategory, setSelectedCategory } = useCategoriesFilter();

  //***Obtener productos
  const getProductos = useCallback(async () => {
    const response = await fetch(`${url}/products`);
    const dataProducts = await response.json();

    //***Asigno a los productos de Zustand la info de la API
    setProducts(dataProducts);
  }, []);

  /* ----- RENDERIZACIÓN CONSTANTE DE CATEGORÍAS y PRODUCTOS ----- */
  useEffect(() => {
    // getCategorias();
    getProductos();
  }, [categories, selectedCategory]); //Análogo useCallback()

  /* ----- Método manejo de botón para volver a una ruta anterior o padre ----- */
  const handleOnClick = () => {
    setSelectedCategory("Selecciona una categoría");
    setUbication("Todos");
  };

  /* ----- USO DE useNavigate() ----- */
  // const navigate = useNavigate(); // Importar useNavigate()

  //Volver a la página según el cambio del URL
  // const url = window.location.href;
  // console.log(url);

  // useEffect(() => {
  //   navigate(`/products/${selectedCategory.toLowerCase()}`)
  // }, []);

  return (
    <>
      <nav className="navProductos">
        <h1>COMPRAR TODO</h1>

        <div className="navUsuario">
          <div className="ubicacion d-flex flex-start ps-5 mb-3 align-items-center">
            {/* Sacar los style */}
            <NavLink to="/">
              <FontAwesomeIcon icon={faHouse} style={{ color: "#000000" }} />
            </NavLink>
            <span className="ps-2 ubicacionUser">
              /{" "}
              <NavLink
                to="/products/all"
                style={{ textDecoration: "none", color: "black" }}
                onClick={handleOnClick}
              >
                Productos
              </NavLink>{" "}
              / {ubication}
            </span>
          </div>
        </div>
      </nav>

      <section className="productos">
        <div style={{ width: "20%", minWidth: "20%" }}>
          <SortFilter />
          <FilterPanel />
          <div>
            <CategoriesFilter />
            {/* <PriceFilter /> */}

            {/* 
            <li className="dropdown__list">
              <a href="#" className="dropdown__link">
                <span className="dropdown__span">Subcategorías</span>
                <img
                  src="./assets/icons/down.svg"
                  className="dropdown__arrow"
                />

                <input type="checkbox" className="dropdown__check" />
              </a>

              <div className="dropdown__content">
                <ul className="dropdown__sub">
                  <li className="dropdown__li">
                    <a href="#" className="dropdown__anchor">
                      Subcategoría 1
                    </a>
                  </li>
                  <li className="dropdown__li">
                    <a href="#" className="dropdown__anchor">
                      Subcategoría 2
                    </a>
                  </li>
                  <li className="dropdown__li">
                    <a href="#" className="dropdown__anchor">
                      Subcategoría 3
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="dropdown__list">
              <a href="#" className="dropdown__link">
                <span className="dropdown__span">Color</span>
                <img
                  src="./assets/icons/down.svg"
                  className="dropdown__arrow"
                />

                <input type="checkbox" className="dropdown__check" />
              </a>

              <div className="dropdown__content">
                <ul className="dropdown__sub">
                  <li className="dropdown__li">
                    <a href="#" className="dropdown__anchor">
                      Color 1
                    </a>
                  </li>
                  <li className="dropdown__li">
                    <a href="#" className="dropdown__anchor">
                      Color 2
                    </a>
                  </li>
                  <li className="dropdown__li">
                    <a href="#" className="dropdown__anchor">
                      Color 3
                    </a>
                  </li>
                </ul>
              </div>
            </li>*/}
          </div>
        </div>

        {/* Lateral derecho, Productos */}
        <div className="div-products" style={{ width: "80%" }}>
          {selectedCategory != "Selecciona una categoría" ? (
            <Products
              className="div-products"
              categoria={selectedCategory.toString().toLowerCase()}
              ordenar={ordenarProp}
              precioMin={min}
              precioMax={max}
            />
          ) : (
            <Products
              className="div-products"
              categoria={null}
              ordenar={ordenarProp}
              precioMin={min}
              precioMax={max}
            />
          )}
        </div>
      </section>
    </>
  );
};

export default ProductsScreen;