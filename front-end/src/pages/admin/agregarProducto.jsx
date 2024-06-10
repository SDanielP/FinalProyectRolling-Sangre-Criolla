const AgregarProducto = () => {
  return (
    <div>
      <div className="head-title">
        <div className="left">
          <h1>Añadir Productos</h1>
        </div>
      </div>
      <ul className="box-info">
        <div className="form-container">
          <form id="add-product-form">
            <div className="form-group">
              <label htmlFor="product-image">Imagen del Producto</label>
              <input type="file" id="product-image" name="product-image" accept="image/*" required />
            </div>
            <div className="form-group">
              <label htmlFor="product-name">Nombre del Producto</label>
              <input type="text" id="product-name" name="product-name" required />
            </div>
            <div className="form-group">
              <label htmlFor="product-price">Precio</label>
              <input type="number" id="product-price" name="product-price" step="0.01" required />
            </div>
            <div className="form-group">
              <label htmlFor="product-details">Detalle</label>
              <textarea id="product-details" name="product-details" rows="4" required></textarea>
            </div>
            <div className="form-group">
              <button type="submit">Agregar Producto</button>
            </div>
          </form>
        </div>
      </ul>
    </div>
  );
};

export default AgregarProducto;
