import "./styles/App.css";
import { useEffect, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSubcategories } from "./store/useSubcategories.js";


import ProductsScreen from "./pages/ProductsScreen";
import Home from "./pages/Home.jsx";
import FrequentQuestions from "./pages/FrequentQuestions.jsx";
import Nosotros from "./pages/AboutUs.jsx";
import PaymentForm from "./pages/payments.jsx";
import DProd from "./components/shop/productDetail/Dprod.jsx";
import RecuperacionContra from "./pages/RecuperacionContra.jsx";
import ErrorScreen from "./pages/ErrorScreen.jsx";
import SearchScreen from "./pages/SearchScreen.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Admin from "./pages/admin.jsx";

const url = "https://sangrecriolla-back-end.onrender.com"

const App = () => {
  const { setSubcategories } = useSubcategories();

  const getSubcategories = useCallback(async () => {
    try {
      const response = await fetch(`${url}/subcategories`);
      if (!response.ok) {
        throw new Error("Error en la solicitud: " + response.status);
      }
      const data = await response.json();

      setSubcategories(data);

    } catch (error) {
      console.error("Error:", error);
    }
  }, [setSubcategories]);

  useEffect(() => {
    getSubcategories();
    
  }, [getSubcategories]);

  return (
    
    <Router>
        <Routes>
          <Route key={1000} path="/" element={<Home />} />
          <Route key={2000} path="/page-not-found" element={<ErrorScreen />} />
          <Route key={2000} path="/*" element={<ErrorScreen />} />
          <Route key={3000} path="products/all" element={<ProductsScreen />} />
          <Route key={4000} path="products/:category" element={<ProductsScreen />} />
          <Route key={4000} path="products/:category/:subcategory" element={<ProductsScreen />} />
          <Route key={5000} path="/products/:category/:subcategory/:id" element={< DProd />} />
           <Route key={6000} path="/payments" element={<PaymentForm />} />
          <Route key={7000} path="/about-us" element={<Nosotros />} />
          <Route key={8000} path="/contact-us" element={<ContactUs />} />
          <Route
            key={9000}
            path="/frequent-questions"
            element={<FrequentQuestions />}
          />
          <Route key={10000} path="/recuperacion-contrasena" element={<RecuperacionContra />} />
          <Route key={11000} path="/search" element={<SearchScreen />} />
          <Route key={12000} path="/admin" element={<Admin />} />
        </Routes>
      </Router>
  );
};

export default App;
