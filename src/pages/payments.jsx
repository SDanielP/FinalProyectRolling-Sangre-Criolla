import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/PaymentForm.css';
import { useEffect, useState } from 'react';
import NavbarMenu from "../components/general/NavbarMenu"
import { useNavigate } from 'react-router-dom';



const PaymentForm = () => {
  const navigate = useNavigate();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem('compraConfirmada');
    if (storedProducts) {
      setProductos(JSON.parse(storedProducts));
    }
  }, []);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const productosTotal = productos.reduce((acc, product) => acc + product.quantity * product.price, 0);
    setTotal(parseFloat(productosTotal.toFixed(2)));
  }, [productos]);

  const formik = useFormik({
    initialValues: {
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      cardHolder: '',
      address: '',
      city: '',
      province: '',
      postalCode: '',
    },
    validationSchema: Yup.object({
      cardNumber: Yup.string()
        .required('Requerido')
        .matches(/^[0-9]{16}$/, 'Debe tener 16 dígitos numéricos'),
      expiryDate: Yup.string()
        .required('Requerido')
        .matches(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/, 'Formato MM/AA'),
      cvv: Yup.string()
        .required('Requerido')
        .matches(/^[0-9]{3,4}$/, 'Debe tener 3 o 4 dígitos'),
      cardHolder: Yup.string().required('Requerido'),
      address: Yup.string().required('Requerido'),
      city: Yup.string().required('Requerido'),
      province: Yup.string().required('Requerido'),
      postalCode: Yup.string()
        .required('Requerido')
        .matches(/^[0-9]{4}$/, 'Debe tener 4 dígitos'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await fetch('/api/payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        alert('Pago realizado con éxito');
      } catch (error) {
        console.error(error);
        alert('Pago realizado con éxito!');
        localStorage.removeItem('cart');
        localStorage.removeItem('compraConfirmada');
        setProductos([]); 
        window.location.href = '/products/all'; 
      }
    },
  });

  return (
    <>
    <NavbarMenu />
    <form onSubmit={formik.handleSubmit} className="payment-form">
      <h2>Ingresar con Tarjeta de Crédito/Débito</h2>
      <div className="card-types">
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="MasterCard" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Visa_Electron.svg/1200px-Visa_Electron.svg.png" alt="Visa Electron" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png" alt="American Express" />
      </div>

      <div className="form-group">
        <label htmlFor="cardNumber">N.º de Tarjeta:</label>
        <input
          id="cardNumber"
          name="cardNumber"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.cardNumber}
        />
        {formik.touched.cardNumber && formik.errors.cardNumber ? (
          <div className="error">{formik.errors.cardNumber}</div>
        ) : null}
      </div>

      <div className="form-group">
        <label htmlFor="expiryDate">Caducidad (MM/AA):</label>
        <input
          id="expiryDate"
          name="expiryDate"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.expiryDate}
        />
        {formik.touched.expiryDate && formik.errors.expiryDate ? (
          <div className="error">{formik.errors.expiryDate}</div>
        ) : null}
      </div>

      <div className="form-group">
        <label htmlFor="cvv">Código de Seguridad/CVV2:</label>
        <input
          id="cvv"
          name="cvv"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.cvv}
        />
        {formik.touched.cvv && formik.errors.cvv ? (
          <div className="error">{formik.errors.cvv}</div>
        ) : null}
      </div>

      <div className="form-group">
        <label htmlFor="cardHolder">Titular de la Tarjeta:</label>
        <input
          id="cardHolder"
          name="cardHolder"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.cardHolder}
        />
        {formik.touched.cardHolder && formik.errors.cardHolder ? (
          <div className="error">{formik.errors.cardHolder}</div>
        ) : null}
      </div>

      <div className="form-group">
        <label htmlFor="address">Dirección:</label>
        <input
          id="address"
          name="address"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.address}
        />
        {formik.touched.address && formik.errors.address ? (
          <div className="error">{formik.errors.address}</div>
        ) : null}
      </div>

      <div className="form-group">
        <label htmlFor="city">Ciudad:</label>
        <input
          id="city"
          name="city"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.city}
        />
        {formik.touched.city && formik.errors.city ? (
          <div className="error">{formik.errors.city}</div>
        ) : null}
      </div>

      <div className="form-group">
        <label htmlFor="province">Provincia:</label>
        <input
          id="province"
          name="province"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.province}
        />
        {formik.touched.province && formik.errors.province ? (
          <div className="error">{formik.errors.province}</div>
        ) : null}
      </div>

      <div className="form-group">
        <label htmlFor="postalCode">Código postal:</label>
        <input
          id="postalCode"
          name="postalCode"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.postalCode}
        />
        {formik.touched.postalCode && formik.errors.postalCode ? (
          <div className="error">{formik.errors.postalCode}</div>
        ) : null}
      </div>

      <div className="product-details">
      <h3>Productos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Ud</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto, index) => (
            <tr key={index}>
              <td>{producto.name}</td>
              <td>{producto.quantity}</td>
              <td>{producto.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Total: ${total}</h2>
    </div >
     <section >
      <button className="btn-paym" type="submit">PAGAR</button>
      <button className="btn-paym" type="button" onClick={() => navigate('/products/all')}>
      CANCELAR
    </button>
      </section>
    </form>
    </>
  );
};

export default PaymentForm;