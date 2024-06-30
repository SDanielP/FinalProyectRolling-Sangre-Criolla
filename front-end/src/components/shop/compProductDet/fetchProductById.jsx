const fetchProductById = async (id) => {
    try {
      const response = await fetch(`https://sangrecriolla-back-end.onrender.com/products/${id}`);
      if (!response.ok) {
        throw new Error("Error en la solicitud: " + response.status);
      }
      const product = await response.json();
      return product;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };
  
  export default fetchProductById;