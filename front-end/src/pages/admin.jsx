import './admin.css'; // Asegúrate de que la ruta sea correcta
import CustomModal from './components/Modal';
import { useEffect, useState } from 'react';

const Admin = () => {
  const [sidebarHide, setSidebarHide] = useState(window.innerWidth < 1024);
  const [searchFormShow, setSearchFormShow] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [mostrarAñadirProductos, setMostrarAñadirProductos] = useState(true);
  const [mostrarAdministrarUsuarios, setMostrarAdministrarUsuarios] = useState(false);
  const [mostrarProductos, setMostrarProductos] = useState(false);
  const [users, setUsers] = useState([]);
  const [cambiosRealizados, setCambiosRealizados] = useState(false);
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: 0,
    description: '',
    color: '',
    size: [''],
    category: '',
    stock: 0,
    image: ['']
  });

  useEffect(() => {
    fetch('http://localhost:4000/api/users')
      .then(response => response.json())
      .then(data => {
        console.log("Datos recibidos de la API:", data);
        setUsers(data.users);
      })
      .catch(error => {
        console.error('Ha ocurrido un error:', error);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:4000/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la solicitud: ' + response.status);
        }
        return response.json();
      })
      .then(data => setProducts(data))
      .catch(error => console.error('Error:', error));
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 576) {
        setSearchFormShow(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');
    allSideMenu.forEach(item => {
      const li = item.parentElement;
      item.addEventListener('click', () => {
        allSideMenu.forEach(i => {
          i.parentElement.classList.remove('active');
        });
        li.classList.add('active');
      });
    });
  }, []);

  const handleSidebarToggle = () => {
    if (window.innerWidth < 1024) {
      setSidebarHide(sidebarHide);
    }
    setSidebarHide(!sidebarHide); // Si el ancho de la pantalla es mayor o igual a 768px, siempre oculta el sidebar
    
  };
  
  

  const handleSearchToggle = (e) => {
    if (window.innerWidth < 576) {
      e.preventDefault();
      setSearchFormShow(!searchFormShow);
    }
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleMostrarAñadirProductos = () => {
    setMostrarAñadirProductos(true);
    setMostrarAdministrarUsuarios(false);
    setMostrarProductos(false);
  };

  const handleMostrarAdministrarUsuarios = () => {
    setMostrarAñadirProductos(false);
    setMostrarAdministrarUsuarios(true);
    setMostrarProductos(false);
  };

  const handleMostrarUsuarios = () => {
    setMostrarAñadirProductos(false);
    setMostrarAdministrarUsuarios(false);
    setMostrarProductos(true);
  };

  const handleEstadoChange = (id, nuevoEstado) => {
    const nuevosUsuarios = users.map(usuario => {
      if (usuario._id === id) {
        return { ...usuario, isActive: nuevoEstado, modified: true };
      }
      return usuario;
    });
    setUsers(nuevosUsuarios);
    setCambiosRealizados(true);
  };

  const handleSubmitUsuarios = (event) => {
    event.preventDefault();

    const usuariosModificados = users.filter(user => user.modified);
    const promises = usuariosModificados.map(user => 
      fetch(`http://localhost:4000/api/users/${user._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ isActive: user.isActive })
      })
    );

    Promise.all(promises)
      .then(responses => {
        console.log('Cambios aplicados:', responses);
        setCambiosRealizados(false);
      })
      .catch(error => {
        console.error('Error al aplicar los cambios:', error);
      });
  };

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSizeChange = (e, index) => {
    const newSize = [...newProduct.size];
    newSize[index] = e.target.value;
    setNewProduct(prevState => ({
      ...prevState,
      size: newSize
    }));
  };

  const handleAddSize = () => {
    setNewProduct(prevState => ({
      ...prevState,
      size: [...prevState.size, '']
    }));
  };

  const handleRemoveSize = (index) => {
    const newSize = newProduct.size.filter((_, i) => i !== index);
    setNewProduct(prevState => ({
      ...prevState,
      size: newSize
    }));
  };

  const handleImageChange = (e, index) => {
    const newImages = [...newProduct.image];
    newImages[index] = e.target.value;
    setNewProduct(prevState => ({
      ...prevState,
      image: newImages
    }));
  };

  const handleAddImage = () => {
    setNewProduct(prevState => ({
      ...prevState,
      image: [...prevState.image, '']
    }));
  };

  const handleRemoveImage = (index) => {
    const newImages = newProduct.image.filter((_, i) => i !== index);
    setNewProduct(prevState => ({
      ...prevState,
      image: newImages
    }));
  };

  const handleAddProduct = (event) => {
    event.preventDefault();

    fetch('http://localhost:4000/products/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProduct)
    })
      .then(response => response.json())
      .then(() => {
        alert('Producto registrado');
      // Reiniciar la página
      window.location.reload();
        // Aquí puedes añadir lógica adicional, como limpiar el formulario o actualizar la lista de productos
      })
      .catch(error => console.error('Error al agregar el producto:', error));
  };

  if (products.length === 0) {
    return <div>Cargando...</div>;
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <section id="sidebar" className={sidebarHide ? 'hide' : ''}>
        <a className="brand" href="#">
          <i className="bx bx-user-plus" />
          <span className="text">ADMINISTRADOR</span>
        </a>
        <ul className="side-menu top">
          <li>
            <a href="#" onClick={handleMostrarAñadirProductos}>
              <i className="bx bx-image-add" />
              <span className="text">Añadir Productos</span>
            </a>
          </li>
          <li>
            <a href="#" onClick={handleMostrarUsuarios}>
              <i className="bx bx-store-alt" />
              <span className="text">Productos</span>
            </a>
          </li>
          <li>
            <a href="#" onClick={handleMostrarAdministrarUsuarios}>
              <i className="bx bxs-group" />
              <span className="text">Administrar Usuarios</span>
            </a>
          </li>
        </ul>
        <ul className="side-menu">
          <li>
            <a className="logout" href="#">
              <i className="bx bxs-log-out-circle" />
              <span className="text">Cerrar Sesion</span>
            </a>
          </li>
        </ul>
      </section>
      <section id="content">
        <nav className='navBar'>
          <i className="bx bx-menu" onClick={handleSidebarToggle} />
          <a className="nav-link hidden" href="#">Categorias</a>
          <form action="#" className={`hidden ${searchFormShow ? 'show' : ''}`}>
            <div className="form-input">
              <input type="search" placeholder="Search..." />
              <button type="submit" className="search-btn" onClick={handleSearchToggle}>
                <i className={`bx ${searchFormShow ? 'bx-x' : 'bx-search'}`} />
              </button>
            </div>
          </form>
          
            <i id="changeSun" className="bx bx-sun" />
          <input hidden id="switch-mode" type="checkbox" checked={darkMode} onChange={handleDarkModeToggle} />
          <label className="switch-mode" htmlFor="switch-mode" />
        </nav>
        <main>
          {mostrarAñadirProductos && (
            <div id="añadirProductos">
              <div className="head-title">
                <div className="left">
                  <h1>Añadir Productos</h1>
                </div>
              </div>
              <ul className="box-info">
                <div className="form-container">
                  <form id="add-product-form" onSubmit={handleAddProduct}>
                    
                    <div className="form-group">
                      <label htmlFor="product-name">Nombre del Producto</label>
                      <input type="text" id="product-name" name="name" value={newProduct.name} onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="product-price">Precio</label>
                      <input type="number" id="product-price" name="price" value={newProduct.price} onChange={handleInputChange} step="0.01" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="product-details">Detalle</label>
                      <textarea id="product-details" name="description" value={newProduct.description} onChange={handleInputChange} rows="4" required></textarea>
                    </div>
                    <div className="form-group">
                      <label htmlFor="product-color">Color</label>
                      <input type="text" id="product-color" name="color" value={newProduct.color} onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                      <label>Talle</label>
                      {newProduct.size.map((size, index) => (
                        <div key={index} className="size-input">
                          <input
                            type="text"
                            value={size}
                            onChange={(e) => handleSizeChange(e, index)}
                          />
                          <button type="button" onClick={() => handleRemoveSize(index)}>X</button>
                        </div>
                      ))}
                      <button type="button" onClick={handleAddSize}>Agregar Tamaño</button>
                    </div>
                    <div className="form-group">
                      <label htmlFor="product-category">Categoría</label>
                      <input type="text" id="product-category" name="category" value={newProduct.category} onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="product-stock">Stock</label>
                      <input type="number" id="product-stock" name="stock" value={newProduct.stock} onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                      <label>Imagenes</label>
                      {newProduct.image.map((image, index) => (
                        <div key={index} className="image-input">
                          <input
                            className='addBtnImg'
                            type="text"
                            value={image}
                            onChange={(e) => handleImageChange(e, index)}
                          />
                          <button type="button" onClick={() => handleRemoveImage(index)}>X</button>
                        </div>
                      ))}
                      <button type="button" onClick={handleAddImage}>Agregar Enlace de Imagen</button>
                    </div>
                    <div className="form-group">
                      <button type="submit">Agregar Producto</button>
                    </div>
                  </form>
                </div>
              </ul>
            </div>
          )}
          {mostrarProductos && (
            <>
              {isModalOpen && <CustomModal data={selectedProduct} closeModal={handleCloseModal} />}
              <div className="contenedor" id="administrarProductos">
                <div className="head-title">
                  <div className="left">
                    <h1>Lista de Productos</h1>
                  </div>
                </div>
                <ul className="box-info">
                  <form>
                    <table className="tabla">
                      <thead>
                        <tr>
                          <th>Imagen</th>
                          <th>Nombre</th>
                          <th>Precio</th>
                          <th>Descripción</th>
                          <th>Color</th>
                          <th>Tamaño</th>
                          <th>Categoría</th>
                          <th>Stock</th>
                          <th>Accion</th>
                        </tr>
                      </thead>
                      <tbody>
                        {products.map(product => (
                          <tr key={product._id}>
                            <td>
                              <img src={product.image[0]} alt="Imagen del producto" style={{ width: '50px', height: '50px' }} />
                            </td>
                            <td>{product.name}</td>
                            <td>${product.price}</td>
                            <td>{product.description}</td>
                            <td>{product.color}</td>
                            <td>
                              <select>
                                {product.size.map((size, index) => (
                                  <option key={index} value={size}>
                                    {size}
                                  </option>
                                ))}
                              </select>
                            </td>
                            <td>{product.category}</td>
                            <td>{product.stock}</td>
                            <td>
                              <button type="button" onClick={() => handleEditClick(product)}>
                                Editar
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </form>
                </ul>
              </div>
            </>
          )}
          {mostrarAdministrarUsuarios && (
            <div className="contenedor2" id="administrarUsuarios">
              <div className="head-title">
                <div className="left">
                  <h1>Lista de Usuarios</h1>
                </div>
              </div>

              <ul className="box-info">
                <form onSubmit={handleSubmitUsuarios}>
                  <table id='tablaRz' className="tabla">
                    <thead>
                      <tr>
                        <th>Nombre</th>
                        <th>Correo Electrónico</th>
                        <th>Estado</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map(user => (
                        <tr key={user._id}>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>
                            <select
                              value={user.isActive}
                              onChange={e => handleEstadoChange(user._id, e.target.value)}
                              className="selectEstado"
                            >
                              <option value="Pendiente">Pendiente</option>
                              <option value="Aceptado">Aceptado</option>
                              <option value="Bloqueado">Bloqueado</option>
                            </select>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <button id='btnRz' type="submit" disabled={!cambiosRealizados}>Aplicar Cambios</button>
                </form>
              </ul>
            </div>
          )}
        </main>
      </section>
    </div>
  );
};

export default Admin;
