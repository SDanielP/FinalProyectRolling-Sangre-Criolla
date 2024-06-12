import "../../styles/components/shop/Products.css";
import React, { useEffect, useState, useCallback } from "react";
import ProductCard from "../shop/productsCard/ProductCard";
import { useProducts } from "../../store/useProducts";
// import { json } from "react-router-dom";

/* ----- Constantes ----- */
//***URL API
// const url = "https://fakestoreapi.com";

const Products = ({ categoria, ordenar, precioMin, precioMax }) => {
  /* ----- Estados para los productos ----- */
  const { products, setProducts} = useProducts();
  const [productosStore, setProductosStore] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  /* ----- API ----- */
  const getProductos = useCallback(async () => {
    //***Obtener productos
    // const response = await fetch(`${url}/products`);
    // const dataProducts = await response.json();

    fetch("http://localhost:4000/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la solicitud: " + response.status);
        }
        return response.json();
      })
      //***Asigno a los productos de Zustand la info de la API
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error:", error));

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
    console.log(products);

    // setProductosStore(products);    
    //***Ordenar productos
    const sortedProductos = products.sort((a, b) => {
      switch (ordenar) {
        case "alphabetical":
          return a.name.localeCompare(b.name); // Alfabeticamente por el titulo (deberia ser por subcategoria o marca)
        case "highestPrice":
          return b.price - a.price; // Precio descendente
        case "lowestPrice":
          return a.price - b.price; // Precio ascendente
        case "latestAdded":
          return b.id - a.id; // ID descendente (ID más alto representa nuevo producto en la página)
        default:
          return a.id - b.id; // Default ordenados por ID ascendentemente
      }
    });

    //***Asigno a productos los elementos según los elementos filtrados según la categoría y ordenados
    if (categoria) {
      const productosFiltradosCategoria = sortedProductos.filter(
        (producto) => producto.category === categoria
      );
      // Apply price filtering within the category-filtered subset
      if (precioMin || precioMax) {
        const productosFiltradosPrecio = productosFiltradosCategoria.filter(
          (producto) =>
            producto.price >= precioMin && producto.price <= precioMax
        );
        setProductosStore(productosFiltradosPrecio);
      } else {
        setProductosStore(productosFiltradosCategoria);
      }
    } else {
      // Apply price filtering to all products if no category is selected
      if (precioMin || precioMax) {
        const productosFiltradosPrecio = sortedProductos.filter(
          (producto) =>
            producto.price >= precioMin && producto.price <= precioMax
        );
        setProductosStore(productosFiltradosPrecio);
      } else {
        setProductosStore(sortedProductos); // Set all products if no filter is applied
      }
    }
    // console.log(productosStore);
  },[products]);

  /* ----- RENDERIZACIÓN CONSTANTE DE PRODUCTOS ----- */
  useEffect(() => {
    getProductos();
  }, [categoria, ordenar, precioMin, precioMax]); // Según la categoría, precio y el ordenamiento

  /* ----- USO DE VARIABLES ----- */
  // let categoriaCopia;
  // if (categoria === null) {
  //   categoriaCopia = "Todos los productos";
  // } else {
  //   categoriaCopia = categoria;
  // }

  return (
    <>
      <div>
        {products.length > 0 ? (
          <div className="contenedorProductos">
            {products.map((producto) => (
              <ProductCard key={producto.id} producto={producto} />
            ))}
          </div>
        ) : (
          <p className="contenedorProductos">
            No se encontraron productos para esta categoría.
          </p>
        )}
      </div>
    </>
  );
};

export default Products;
