import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails({ onImagesLoad, onNamePriceLoad, onSizesLoad, onDescriptionLoad }) {
    const { id } = useParams(); // Obtener el nombre o el ID del producto de los parámetros de la URL
    const [product, setProduct] = useState(null);
  
    useEffect(() => {
      fetch(`http://localhost:5000/products/${id}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.status);
          }
          return response.json();
        })
        .then(data => {
          setProduct(data);
          onImagesLoad(data.image); 
          onNamePriceLoad(data.name, data.price, data.color);
          onSizesLoad(data.size); 
          onDescriptionLoad(data.description); 
  
        })
        .catch(error => console.error('Error:', error));
    }, []);
  
    if (!product) {
      return <div>Cargando...</div>;
    }
  
  return null
  }
  
  export default ProductDetails;