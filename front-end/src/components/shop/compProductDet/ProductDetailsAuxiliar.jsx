import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchProductById from "./fetchProductById";

function ProductDetails({ onProductLoad }) {
  const { id, category, subcategory } = useParams(); // Obtener el ID del producto de los parámetros de la URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const productData = await fetchProductById(id, category, subcategory);
        setProduct(productData);
        onProductLoad(productData); // Pasar los datos del producto al callback
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getProduct();
  }, [id, onProductLoad]
  [category, onProductLoad]    
  [subcategory, onProductLoad]  
);

  if (!product) {
    return <div>Cargando...</div>;
  }

  return null;
}


export default ProductDetails;
