import "../../styles/components/shop/Products.css";
import React, { useEffect, useState, useCallback } from "react";
import ProductCard from "./productsCard/ProductCard";
import { useProducts } from "../../store/useProducts";

/* ----- Constantes ----- */
//***Categorías
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
      const response = await fetch(`https://sangrecriolla-back-end.onrender.com/products`);
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

      // Filtrado por categoría
      if (categoria) {
        filteredProducts = filteredProducts.filter(
          (producto) =>
            producto.categoria.toLowerCase() === categoria.toLowerCase()
        );
      }

      // Filtrado por subcategoría
      if (subcategoria) {
        filteredProducts = filteredProducts.filter(
          (producto) =>
            producto.subcategoria.toLowerCase() === subcategoria.toLowerCase()
        );
      }

      // Filtrado por precio
      if (precioMin != null || precioMax != null) {
        filteredProducts = filteredProducts.filter(
          (producto) =>
            (precioMin == null || producto.precio >= precioMin) &&
            (precioMax == null || producto.precio <= precioMax)
        );
      }

      // Filtrado por tamaño
      if (tamano) {
        filteredProducts = filteredProducts.filter(
          (producto) => producto.size && producto.size.includes(tamano)
        );
      }

      // Filtrado por color
      if (color) {
        filteredProducts = filteredProducts.filter(
          (producto) => producto.color && producto.color.includes(color)
        );
      }

      // Filtrado por término de búsqueda
      if (searchTerm) {
        filteredProducts = filteredProducts.filter((producto) =>
          producto.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      // Ordenar productos
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

// import { json } from "react-router-dom";

// /* ----- Constantes ----- */
// //***URL API
// // const url = "https://fakestoreapi.com";

// const Products = ({ categoria, subcategoria, ordenar, precioMin, precioMax }) => {
//   /* ----- Estados para los productos ----- */
//   const { products, setProducts} = useProducts();
//   const [productosStore, setProductosStore] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   /* ----- API ----- */
//   // const getProductos = useCallback(async () => {
//   //   //***Obtener productos
//   //   // const response = await fetch(`${url}/products`);
//   //   // const dataProducts = await response.json();

//   //   fetch("http://localhost:4000/products")
//   //     .then((response) => {
//   //       if (!response.ok) {
//   //         throw new Error("Error en la solicitud: " + response.status);
//   //       }
//   //       return response.json();
//   //     })
//   //     //***Asigno a los productos de Zustand la info de la API
//   //     .then((data) => setProducts(data))
//   //     .catch((error) => console.error("Error:", error));

//   //   console.log(products);

//   //   // setProductosStore(products);
//   //   //***Ordenar productos
//   //   const sortedProductos = products.sort((a, b) => {
//   //     switch (ordenar) {
//   //       case "alphabetical":
//   //         return a.name.localeCompare(b.name); // Alfabeticamente por el titulo (deberia ser por subcategoria o marca)
//   //       case "highestPrice":
//   //         return b.price - a.price; // Precio descendente
//   //       case "lowestPrice":
//   //         return a.price - b.price; // Precio ascendente
//   //       case "latestAdded":
//   //         return b.id - a.id; // ID descendente (ID más alto representa nuevo producto en la página)
//   //       default:
//   //         return a.id - b.id; // Default ordenados por ID ascendentemente
//   //     }
//   //   });

//   //   //***Asigno a productos los elementos según los elementos filtrados según la categoría y ordenados
//   //   if (categoria) {
//   //     const productosFiltradosCategoria = sortedProductos.filter(
//   //       (producto) => producto.category === categoria
//   //     );
//   //     // Apply price filtering within the category-filtered subset
//   //     if (precioMin || precioMax) {
//   //       const productosFiltradosPrecio = productosFiltradosCategoria.filter(
//   //         (producto) =>
//   //           producto.price >= precioMin && producto.price <= precioMax
//   //       );
//   //       setProductosStore(productosFiltradosPrecio);
//   //     } else {
//   //       setProductosStore(productosFiltradosCategoria);
//   //     }
//   //   } else {
//   //     // Apply price filtering to all products if no category is selected
//   //     if (precioMin || precioMax) {
//   //       const productosFiltradosPrecio = sortedProductos.filter(
//   //         (producto) =>
//   //           producto.price >= precioMin && producto.price <= precioMax
//   //       );
//   //       setProductosStore(productosFiltradosPrecio);
//   //     } else {
//   //       setProductosStore(sortedProductos); // Set all products if no filter is applied
//   //     }
//   //   }
//   //   console.log("productosstore"+productosStore);
//   // },[products]);

//   /* ----- RENDERIZACIÓN CONSTANTE DE PRODUCTOS ----- */
//   // useEffect(() => {
//   //   getProductos();
//   // }, [categoria, ordenar, precioMin, precioMax]); // Según la categoría, precio y el ordenamiento

//     /* ----- RENDERIZACIÓN CONSTANTE DE PRODUCTOS - LLAMADA A LA API ----- */
//   const getProductos = useCallback(async () => {
//     setLoading(true);
//     try {
//       const response = await fetch("http://localhost:4000/products");
//       if (!response.ok) {
//         throw new Error("Error en la solicitud: " + response.status);
//       }
//       const data = await response.json();
//       setProducts(data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error:", error);
//       setError(error);
//       setLoading(false);
//     }
//   }, [setProducts]);

//     /* ----- RENDERIZACIÓN CONSTANTE DE PRODUCTOS ----- */
//   useEffect(() => {
//     getProductos();
//   }, [getProductos]);

//     /* ----- RENDERIZACIÓN CONSTANTE DE PRODUCTOS FILTRADOS ----- */
//   useEffect(() => {
//     const filterAndSortProducts = () => {
//       let filteredProducts = [...products];

//       // Aplicar filtrado por categoría
//       if (categoria) {
//         filteredProducts = filteredProducts.filter(
//           (producto) => producto.category === categoria
//         );
//       }

//       // Aplicar filtrado por precio
//       if (precioMin != null || precioMax != null) {
//         filteredProducts = filteredProducts.filter(
//           (producto) =>
//             (precioMin == null || producto.price >= precioMin) &&
//             (precioMax == null || producto.price <= precioMax)
//         );
//       }

//       // Ordenar productos
//       filteredProducts.sort((a, b) => {
//         switch (ordenar) {
//           case "alphabetical":
//             return a.name.localeCompare(b.name);
//           case "highestPrice":
//             return b.price - a.price;
//           case "lowestPrice":
//             return a.price - b.price;
//           case "latestAdded":
//             return b._id - a._id;
//           default:
//             return a._id - b._id;
//         }
//       });

//       setProductosStore(filteredProducts);
//       console.log(productosStore)
//     };

//     filterAndSortProducts();
//   }, [products, categoria, ordenar, precioMin, precioMax]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   return (
//     <>
//       <div>
//         {productosStore.length > 0 ? (
//           <div className="contenedorProductos" key={1}>
//             {productosStore.map((producto) => (
//               <ProductCard key={producto._id} producto={producto} />
//             ))}
//           </div>
//         ) : (
//           <p className="contenedorProductos">
//             No se encontraron productos para esta categoría.
//           </p>
//         )}
//       </div>
//     </>
//   );
// };

// export default Products;