import "../styles/ProductsScreen.css";
import "../styles/components/shop/productsFilter/SortFilter.css";
import React, { useState } from "react";
import Products from "../components/shop/Products.jsx";
import FilterPanel from "../components/shop/FilterPanel.jsx";
import SortFilter from "../components/shop/productsFilter/SortFilter.jsx";

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

/* ----- Constantes ----- */
//***URL API
// const url = "https://fakestoreapi.com";

const ProductsScreen = () => {
  /* ----- Estados - Zustand ----- */
  const { categories } = useCategories();
  // const { products, setProducts } = useProducts();
  const { ubication, setUbication } = useUbication();
  const { min, max } = usePriceFilter();
  const { ordenarProp } = useSortFilter();
  const { selectedCategory, setSelectedCategory } = useCategoriesFilter();
  // const [productosFetch, setProductosFetch] = useState([]);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);

  // ***Obtener productos
  // const getProductos = useCallback(async () => {
  //   // const response = await fetch(`${url}/products`);
  //   // const dataProducts = await response.json();

  //   await fetch("http://localhost:4000/products")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Error en la solicitud: " + response.status);
  //       }
  //       return response.json();
  //     })
  //     //***Asigno a los productos de Zustand la info de la API
  //     .then((data) => setProductosFetch(data))
  //     .catch((error) => console.error("Error:", error));

  //   // setProducts(productosFetch);
  // }, [productosFetch]);
  // const getProductos = useCallback(async () => {

    // fetch("http://localhost:4000/products")
    // .then((response) => {
    //   if (!response.ok) {
    //     throw new Error("Error en la solicitud: " + response.status);
    //   }
    //   return response.json();
    // })
    // //***Asigno a los productos de Zustand la info de la API
    // .then((data) => setProducts(data))
    // .catch((error) => console.error("Error:", error));



    // setLoading(true);
    // setError(null);
    // try {
    //   const response = await fetch("http://localhost:4000/products");
    //   if (!response.ok) {
    //     throw new Error(`Error en la solicitud: ${response.status}`);
    //   }
    //   const data = await response.json();
    //   // setProductosFetch(data);
    //   setProducts(data);
    // } catch (err) {
    //   setError(err.message);
    // } finally {
    //   setLoading(false);
    // }
    // console.log(products);
  // }, []);

  /* ----- RENDERIZACIÓN CONSTANTE DE CATEGORÍAS y PRODUCTOS ----- */
  useEffect(() => {
    // getCategorias();
    // getProductos();
    
  }, [categories, selectedCategory]); //Análogo useCallback()

  /* ----- Método manejo de botón para volver a una ruta anterior o padre ----- */
  const handleOnClick = () => {
    setSelectedCategory("Hombres");
    setUbication("Todos");
  };

  /* ----- Uso de useNavigate() ----- */
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
          <div className="ubicacion d-flex flex-start mb-3 align-items-center">
            {/* Sacar los style */}
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

        {/* Lateral derecho, Productos */}
        <div className="seccion-productos" style={{ width: "75%" }}>
          {/* {loading && <p>Cargando productos...</p>}
          {error && <p>Error: {error}</p>}
          {!loading && !error && (
            <> */}
              {selectedCategory !== "Hombres" ? (
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
            {/* </>
          )} */}
        </div>
      </section>
    </>
  );
};

export default ProductsScreen;
