import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { name, id } = useParams(); // Obtener el nombre o el ID del producto de los parámetros de la URL
  const [product, setProduct] = useState(null);

  useEffect(() => {

    fetch(`http://localhost:5000/products/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la solicitud: ' + response.status);
        }
        return response.json();
      })
      .then(data => setProduct(data))
      .catch(error => console.error('Error:', error));
  }, [name, id]);

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Precio: {product.price}</p>
      <p>Descripción: {product.description}</p>
      <p>Categoría: {product.category}</p>
      <p>Stock: {product.stock}</p>
      {/* Otros detalles del producto */}
    </div>
  );
}

export default ProductDetails;