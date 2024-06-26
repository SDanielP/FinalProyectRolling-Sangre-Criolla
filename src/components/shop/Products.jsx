import "../../styles/components/shop/Products.css";
import React, { useEffect, useState, useCallback } from "react";
import ProductCard from "../shop/productsCard/ProductCard";
import { useProducts } from "../../store/useProducts";

const categoriesOptions = [
  { id: 1, value: "mujeres", label: "Mujeres" },
  { id: 2, value: "hombres", label: "Hombres" },
];

const url = "https://sangrecriolla-back-end.onrender.com";

const Products = ({
  categoria,
  subcategoria,
  ordenar,
  precioMin,
  precioMax,
  tamano,
  color,
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
          (producto) => producto.category === categoria
        );
      }

      if (subcategoria) {
        filteredProducts = filteredProducts.filter(
          (producto) => producto.subcategory === subcategoria
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
    console.log(categoria);
    console.log(subcategoria);
  }, [
    products,
    categoria,
    subcategoria,
    ordenar,
    precioMin,
    precioMax,
    tamano,
    color,
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