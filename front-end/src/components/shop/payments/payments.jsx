import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './PaymentForm.css'; // Para agregar estilos similares a los de la imagen

const PaymentForm = () => {
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
        const response = await axios.post('/api/payment', values);
        alert('Pago realizado con éxito');
      } catch (error) {
        console.error(error);
        alert('Pago realizado con éxito');
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="payment-form">
      <h2>Ingresar con Tarjeta de Crédito/Débito</h2>
      <div className="card-types">
        <img src="visa.png" alt="Visa"/>
        <img src="mastercard.png" alt="MasterCard"/>
        <img src="visa-electron.png" alt="Visa Electron"/>
        <img src="amex.png" alt="American Express"/>
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

      <button type="submit">PAGAR</button>
      <button onClick="index.js">CANCELAR</button>
    </form>
  );
};

export default PaymentForm;