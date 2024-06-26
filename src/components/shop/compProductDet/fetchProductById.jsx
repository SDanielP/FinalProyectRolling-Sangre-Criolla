const url = "https://sangrecriolla-back-end.onrender.com";

const fetchProductById = async (id, category, subcategory) => {
    try {
      const response = await fetch(`${url}/products/${category}/${subcategory}/${id}`);
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