import "../../styles/components/shop/Products.css";
import React, { useEffect, useState, useCallback } from "react";
import ProductCard from "./productsCard/ProductCard";
import { useProducts } from "../../store/useProducts";

const categoriesOptions = [
  { id: 1, value: "mujeres", label: "Mujeres" },
  { id: 2, value: "hombres", label: "Hombres" },
];
//***URL API
const url = "https://sangrecriolla-back-end.onrender.com";

const Products = ({
  categoria,
  subcategoria,
  ordenar,
  precioMin,
  precioMax,
  tamano,
  color,
  searchTerm,
}) => {
  const { products, setProducts } = useProducts();
  const [productosStore, setProductosStore] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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
      
      if (categoria) {
        filteredProducts = filteredProducts.filter(
          (producto) =>
            producto.categoria.toLowerCase() === categoria.toLowerCase()
        );
      }

      if (subcategoria) {
        filteredProducts = filteredProducts.filter(
          (producto) =>
            producto.subcategoria.toLowerCase() === subcategoria.toLowerCase()
        );
      }

      if (precioMin != null || precioMax != null) {
        filteredProducts = filteredProducts.filter(
          (producto) =>
            (precioMin == null || producto.precio >= precioMin) &&
            (precioMax == null || producto.precio <= precioMax)
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

      if (searchTerm) {
        filteredProducts = filteredProducts.filter((producto) =>{
          producto.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
          producto.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          producto.subcategory.toLowerCase().includes(searchTerm.toLowerCase())
        }
        );
      }

      filteredProducts.sort((a, b) => {
        switch (ordenar) {
          case "alphabetical":
            return a.nombre.localeCompare(b.nombre);
          case "highestPrice":
            return b.precio - a.precio;
          case "lowestPrice":
            return a.precio - b.precio;
          case "latestAdded":
            return new Date(b.createdAt) - new Date(a.createdAt);
          default:
            return new Date(b.createdAt) - new Date(a.createdAt);
        }
      });

      setProductosStore(filteredProducts);
    };

    filterAndSortProducts();
  }, [
    products,
    categoria,
    subcategoria,
    ordenar,
    precioMin,
    precioMax,
    searchTerm,
  ]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error al cargar: {error.message}</p>;
  }

  return (
    <div>
      {productosStore.length > 0 ? (
        <div className="contenedorProductos" key={1}>
          {productosStore.map((producto) => (
            <ProductCard key={producto._id} producto={producto} />
          ))}
        </div>
      ) : (
        <p className="contenedorProductos">
          No se encontraron productos para esta categoría.
        </p>
      )}
    </div>
  );
};

export default Products;