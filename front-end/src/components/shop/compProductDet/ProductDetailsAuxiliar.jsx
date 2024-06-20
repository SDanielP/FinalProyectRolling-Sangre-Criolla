import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchProductById from "./fetchProductById";

// function ProductDetails({
//   onImagesLoad,
//   onNamePriceLoad,
//   onSizesLoad,
//   onDescriptionLoad,
//   onIdLoad
// }) {
//   const id  = "66685a1d2f40ca5c72083d66"; // Obtener el ID del producto de los parámetros de la URL
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     fetch(`http://localhost:4000/products/${id}`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Error en la solicitud: " + response.status);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setProduct(data);
//         onImagesLoad(data.image);
//         onNamePriceLoad(data.name, data.price, data.color);
//         onSizesLoad(data.size);
//         onDescriptionLoad(data.description);
//         onIdLoad(data._id);
//       })
//       .catch((error) => console.error("Error:", error));
//   },
//   [id, onImagesLoad, onNamePriceLoad, onSizesLoad, onDescriptionLoad, onIdLoad]);

function ProductDetails({ onProductLoad }) {
  const { id } = useParams(); // Obtener el ID del producto de los parámetros de la URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const productData = await fetchProductById(id);
        setProduct(productData);
        onProductLoad(productData); // Pasar los datos del producto al callback
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getProduct();
  }, [id, onProductLoad]);

  if (!product) {
    return <div>Cargando...</div>;
  }

  return null;
}


export default ProductDetails;
