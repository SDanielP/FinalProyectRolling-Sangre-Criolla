import "../../styles/components/shop/Products.css";
import React, { useEffect, useState, useCallback } from "react";
import ProductCard from "../shop/productsCard/ProductCard";
import { useProducts } from "../../store/useProducts";
import { useParams } from "react-router-dom";
import Loader from "./apiMessages/Loader";
import Ups from "./apiMessages/Ups";
import Button from 'react-bootstrap/Button';

const categoriesOptions = [
  { id: 1, value: "mujeres", label: "Mujeres" },
  { id: 2, value: "hombres", label: "Hombres" },
];

//***URL API
const url = "https://sangrecriolla-back-end.onrender.com";

const Products = ({ ordenar, precioMin, precioMax, tamano, color }) => {
  const { products, setProducts } = useProducts();
  const [productosStore, setProductosStore] = useState([]);
  const { category, subcategory } = useParams();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  /*-----Para la paginación */
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(15);
  /*----- */

  const getProductos = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}/products`);
      if (!response.ok) {
        throw new Error("Error en la solicitud: " + response.status);
      }
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setError(error);
      setLoading(false);
    }
  }, [setProducts]);

  useEffect(() => {
    getProductos();
  }, [getProductos]);

  useEffect(() => {
    const filterAndSortProducts = () => {
      let filteredProducts = [...products];

      if (category) {
        filteredProducts = filteredProducts.filter(
          (producto) => producto.category === category
        );
      }

      if (subcategory) {
        filteredProducts = filteredProducts.filter(
          (producto) => producto.subcategory === subcategory
        );
      }

      if (precioMin != null || precioMax != null) {
        filteredProducts = filteredProducts.filter(
          (producto) =>
            (precioMin == null || producto.price >= precioMin) &&
            (precioMax == null || producto.price <= precioMax)
        );
      }

      if (tamano) {
        filteredProducts = filteredProducts.filter(
          (producto) => producto.size && producto.size.includes(tamano)
        );
      }

      if (color) {
        filteredProducts = filteredProducts.filter(
          (producto) => producto.color && producto.color.includes(color)
        );
      }

      filteredProducts.sort((a, b) => {
        switch (ordenar) {
          case "alphabetical":
            return a.name.localeCompare(b.name);
          case "highestPrice":
            return b.price - a.price;
          case "lowestPrice":
            return a.price - b.price;
          case "latestAdded":
            return b.createdAt - a.createdAt;
          default:
            return b.createdAt - a.createdAt;
        }
      });

      setProductosStore(filteredProducts);
    };

    filterAndSortProducts();
  }, [
    products,
    category,
    subcategory,
    ordenar,
    precioMin,
    precioMax,
    tamano,
    color,
  ]);

  /*----Lógica Paginación */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setProductsPerPage(10); // Mobile: 5 filas x 2 productos
      } else if (window.innerWidth < 1024) {
        setProductsPerPage(12); // Tablet: 4 filas x 3 productos
      } else {
        setProductsPerPage(15); // Web: 3 filas x 5 productos
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(productosStore.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productosStore.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0); // Scroll to top
  }

  /* -----*/

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p className="api-msg">Error al cargar: {error.message}</p>;
  }

  return (
    <div>
      {productosStore.length > 0 ? (
        <>
          {/* Productos */}
          <div className="contenedorProductos" key={1}>
            {currentProducts.map((producto) => (
              <ProductCard key={producto._id} producto={producto} />
            ))}
          </div>
          
          {/* Barra de paginación */}
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => (
              <Button variant="dark"
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={currentPage === i + 1 ? "active" : ""}
              >
                {i + 1}
              </Button>
            ))}
          </div>
        </>
      ) : (
        <Ups />
      )}
    </div>
  );
};

export default Products;
