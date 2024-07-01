import { useState } from 'react';
import '../../styles/components/modalAdmin/ModalAdminStyle.css';


const CustomModal = ({ data, closeModal, refreshProducts }) => {
  const [selectedSize, setSelectedSize] = useState(data.size);
  const [name, setName] = useState(data.name);
  const [price, setPrice] = useState(data.price);
  const [description, setDescription] = useState(data.description);
  const [color, setColor] = useState(data.color);
  const [category, setCategory] = useState(data.category);
  const [stock, setStock] = useState(data.stock);
  const [images, setImages] = useState(data.image);

  const handleSave = () => {
    const updatedProduct = {
      name,
      price,
      description,
      color,
      size: selectedSize,
      category,
      stock,
      image: images,
    };

    fetch(`https://sangrecriolla-back-end.onrender.com/products/${data._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProduct),
    })
      .then(response => response.json())
      .then(() => {
        closeModal();
        refreshProducts();
      });
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm('¿Estás seguro de que quieres eliminar este producto?');
    if (confirmDelete) {
      fetch(`https://sangrecriolla-back-end.onrender.com/products/${data._id}`, {
        method: 'DELETE',
      })
        .then(response => response.json())
        .then(() => {
          closeModal();
          refreshProducts();
        });
    }
  };

  const addSize = () => {
    setSelectedSize([...selectedSize, '']);
  };

  const handleSizeChange = (e, index) => {
    const newSize = [...selectedSize];
    newSize[index] = e.target.value;
    setSelectedSize(newSize);
  };

  const handleSizeRemove = (index) => {
    const newSize = selectedSize.filter((_, i) => i !== index);
    setSelectedSize(newSize);
  };

  const addImage = () => {
    setImages([...images, '']);
  };

  const handleImageChange = (e, index) => {
    const newImages = [...images];
    newImages[index] = e.target.value;
    setImages(newImages);
  };

  const handleImageRemove = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
  };

  return (
    <div className="custom-modal-admin">
      <div className="modal-content-admin">
        <div className="modal-header-admin">
          <h2>Editar Producto</h2>
          <span className="close" onClick={closeModal}>&times;</span>
        </div>
        <div className="modal-body-admin">
          <div className="item-info-admin">
            <div className="item-image-admin">
              {images.map((image, index) => (
                <div key={index} className="image-input">
                  <img src={image} alt="Item" />
                  <input
                    className='addBtnImg'
                    type="text"
                    value={image}
                    onChange={(e) => handleImageChange(e, index)}
                  />
                  <button type="button" onClick={() => handleImageRemove(index)}>X</button>
                </div>
              ))}
              <button type="button" onClick={addImage}>Agregar Enlace de Imagen</button>
            </div>
            <div className="item-details-admin">
              <div className="form-group-modal-admin">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group-modal-admin">
                <label htmlFor="price">Precio</label>
                <input
                  type="number"
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="form-group-modal-admin">
                <label htmlFor="description">Descripción</label>
                <textarea
                  id="description"
                  rows="3"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="form-group-modal-admin">
                <label htmlFor="color">Color</label>
                <input
                  type="text"
                  id="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                />
              </div>
              <div className="form-group-modal-admin">
                <label>Talle</label>
                {selectedSize.map((size, index) => (
                  <div key={index} className="size-input-admin">
                    <input
                      type="text"
                      value={size}
                      onChange={(e) => handleSizeChange(e, index)}
                    />
                    <button type="button" onClick={() => handleSizeRemove(index)}>X</button>
                  </div>
                ))}
                <button type="button" onClick={addSize}>Agregar Tamaño</button>
              </div>
              <div className="form-group-modal-admin">
                <label htmlFor="category">Categoría</label>
                <input
                  type="text"
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>
              <div className="form-group-modal-admin">
                <label htmlFor="stock">Stock</label>
                <input
                  type="number"
                  id="stock"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer-admin">
          <button type="button" onClick={closeModal}>Cerrar</button>
          <button type="button" onClick={handleDelete}>Borrar</button>
          <button type="button" onClick={handleSave}>Guardar</button>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
