import React, { useState, useEffect } from "react";
import ProductCard from "../shop/productsCard/ProductCard";
import ProductCardPrueba from "../shop/productsCard/ProductCardPrueba";
import "../../styles/components/shop/Products.css";

import contents from '../../store/content';

const Products = ({ categoria, ordenar, precioMin, precioMax }) => {
  const [productosStore, setProductosStore] = useState([]);

  /* ----- API ----- */
  const getProductos = async () => {
    const url = "https://fakestoreapi.com";
    const response = await fetch(`${url}/products`);
    const dataProductos = await response.json();

    //***Ordenar productos
    const sortedProductos = dataProductos.sort((a, b) => {
      switch (ordenar) {
        case "alphabetical":
          return a.title.localeCompare(b.title); // Alfabeticamente por el titulo (deberia ser por subcategoria o marca)
          break;
        case "highestPrice":
          return b.price - a.price; // Precio descendente
          break;
        case "lowestPrice":
          return a.price - b.price; // Precio ascendente
          break;
        case "latestAdded":
          return b.id - a.id; // ID descendente (ID más alto representa nuevo producto en la página)
          break;
        default:
          return a.id - a.id; // Default ordenados por ID ascendentemente
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
  };

  /* ----- RENDERIZACIÓN CONSTANTE DE PRODUCTOS ----- */
  useEffect(() => {
    getProductos();
  }, [categoria, ordenar, precioMin, precioMax]);
  //*Según la categoría, precio y el ordenamiento

  /* ----- USO DE VARIABLES ----- */
  let categoriaCopia;
  if (categoria === null) {
    categoriaCopia = "Todos los productos";
  } else {
    categoriaCopia = categoria;
  }

  return (
    <>
      <div>
        {productosStore.length > 0 ? (
          <div className="contenedorProductos">
            {productosStore.map((producto) => (
              <ProductCard key={producto.id} producto={producto} />
            ))}
          </div>
        ) : (
          <p className="contenedorProductos">No se encontraron productos para esta categoría.</p>
        )}
      </div>



      <div className='App'>
                {contents.map(contents => (
                    <ProductCardPrueba 
                        key={contents.id}
                        image={contents.image}
                        name={contents.name}
                        price={contents.price}
                        totalSales={contents.totalSales}
                        timeLeft={contents.timeLeft}
                        rating={contents.rating}
                    />
                ))}
      </div>
    </>
  );
};

export default Products;
