import './admin.css'; // Asegúrate de que la ruta sea correcta

import { useEffect, useState } from 'react';

const Admin = () => {
  const [sidebarHide, setSidebarHide] = useState(window.innerWidth < 768);
  const [searchFormShow, setSearchFormShow] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 576) {
        setSearchFormShow(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSidebarToggle = () => {
    setSidebarHide(!sidebarHide);
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

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

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

  const [mostrarAñadirProductos, setMostrarAñadirProductos] = useState(true);
  const [mostrarAdministrarUsuarios, setMostrarAdministrarUsuarios] = useState(false);
  const [mostrarProductos, setMostrarProductos] = useState(false);

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

  const [users, setUsers] = useState([]);
  const [cambiosRealizados, setCambiosRealizados] = useState(false);

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

  const [products, setProducts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetch('http://localhost:4000/products')
      .then(response => response.json())
      .then(data => {
        console.log("Datos de productos recibidos de la API:", data);
        setProducts(data.products);
      })
      .catch(error => {
        console.error('Ha ocurrido un error:', error);
      });
  }, []);

  const handleProductChange = (id, valor, campo) => {
    const nuevosProductos = products.map(producto => {
      if (producto._id === id) {
        return { ...producto, [campo]: valor, modified: true };
      }
      return producto;
    });
    setProducts(nuevosProductos);
  };

  const handleSubmitProductos = (event) => {
    event.preventDefault();

    const productosModificados = products.filter(product => product.modified);
    const promises = productosModificados.map(product => 
      fetch(`http://localhost:4000/products/${product._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: product.name,
          price: product.price,
          description: product.description,
          color: product.color,
          size: product.size,
          category: product.category,
          stock: product.stock
        })
      })
    );

    Promise.all(promises)
      .then(responses => {
        console.log('Cambios aplicados:', responses);
        setIsEditing(false);
      })
      .catch(error => {
        console.error('Error al aplicar los cambios:', error);
      });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

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
                  <form id="add-product-form">
                    
                    <div className="form-group">
                      <label htmlFor="product-image">Imagen del Producto</label>
                      <input type="file" id="product-image" name="product-image" accept="image/*" required />
                      <label htmlFor="product-image" className="custom-file-upload">
                        Seleccionar archivo
                      </label>
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
          )}
          {mostrarProductos && (
            <div className="contenedor" id="administrarUsuarios">
              <div className="head-title">
                <div className="left">
                  <h1>Productos</h1>
                </div>
              </div>

              <ul className="box-info">
                {products.length > 0 ? (
                  <form onSubmit={handleSubmitProductos}>
                    {products.map(product => (
                      <div key={product._id}>
                        <div>
                          <label>
                            Nombre:
                            <input
                              type="text"
                              value={product.name}
                              onChange={e => handleProductChange(product._id, e.target.value, 'name')}
                              disabled={!isEditing}
                            />
                          </label>
                        </div>
                        <div>
                          <label>
                            Precio:
                            <input
                              type="number"
                              value={product.price}
                              onChange={e => handleProductChange(product._id, e.target.value, 'price')}
                              disabled={!isEditing}
                            />
                          </label>
                        </div>
                        <div>
                          <label>
                            Descripción:
                            <input
                              type="text"
                              value={product.description}
                              onChange={e => handleProductChange(product._id, e.target.value, 'description')}
                              disabled={!isEditing}
                            />
                          </label>
                        </div>
                        <div>
                          <label>
                            Color:
                            <input
                              type="text"
                              value={product.color}
                              onChange={e => handleProductChange(product._id, e.target.value, 'color')}
                              disabled={!isEditing}
                            />
                          </label>
                        </div>
                        <div>
                          <label>
                            Tamaño:
                            <input
                              type="text"
                              value={product.size}
                              onChange={e => handleProductChange(product._id, e.target.value, 'size')}
                              disabled={!isEditing}
                            />
                          </label>
                        </div>
                        <div>
                          <label>
                            Categoría:
                            <select
                              value={product.category}
                              onChange={e => handleProductChange(product._id, e.target.value, 'category')}
                              disabled={!isEditing}
                            >
                              <option value="Electronics">Electrónica</option>
                              <option value="Clothing">Ropa</option>
                              <option value="Home">Hogar</option>
                            </select>
                          </label>
                        </div>
                        <div>
                          <label>
                            Stock:
                            <input
                              type="number"
                              value={product.stock}
                              onChange={e => handleProductChange(product._id, e.target.value, 'stock')}
                              disabled={!isEditing}
                            />
                          </label>
                        </div>
                      </div>
                    ))}
                    {isEditing ? (
                      <button type="submit" className="btn">Guardar Cambios</button>
                    ) : (
                      <button type="button" className="btn" onClick={handleEditClick}>Editar Productos</button>
                    )}
                  </form>
                ) : (
                  <p>No hay productos disponibles.</p>
                )}
              </ul>
            </div>
          )}
          {mostrarAdministrarUsuarios && (
            <div className="contenedor" id="administrarUsuarios">
              <div className="head-title">
                <div className="left">
                  <h1>Lista de Usuarios</h1>
                </div>
              </div>

              <ul className="box-info">
                <form onSubmit={handleSubmitUsuarios}>
                  <table className="tabla">
                    <thead>
                      <tr>
                        <th>Nombre</th>
                        <th>Rol</th>
                        <th>Correo Electrónico</th>
                        <th>Estado</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map(user => (
                        <tr key={user._id}>
                          <td>{user.name}</td>
                          <td>{user.role}</td>
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
                  <button type="submit" disabled={!cambiosRealizados}>Aplicar Cambios</button>
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
