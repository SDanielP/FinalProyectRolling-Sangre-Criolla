import "./styles/App.css";
import { useEffect, useCallback } from "react";
// import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSubcategories } from "./store/useSubcategories.js";


// import NavbarMenu from "./components/general/NavbarMenu.jsx";
import ProductsScreen from "./pages/ProductsScreen";
import Home from "./pages/Home.jsx";
import FrequentQuestions from "./pages/FrequentQuestions.jsx";
import Nosotros from "./pages/AboutUs.jsx";
import PaymentForm from "./pages/payments.jsx";
import DProd from "./components/shop/productDetail/Dprod.jsx";
import RecuperacionContra from "./pages/RecuperacionContra.jsx";
import ErrorScreen from "./pages/ErrorScreen.jsx"
import Contact from "./pages/Contact.jsx";
// import ImgP from "./components/shop/compProductDet/ImgP.jsx";


const App = () => {
  /* ----- Estado Categorías - Zustand ----- */
  const { subcategories, setSubcategories } = useSubcategories();

  /* ----- API ----- */
  // const getCategorias = async () => {
  // const response = await fetch(`${url}/products/categories`);
  // const dataCategories = await response.json();

  // //***Asigno a las categorías la info de la API
  // setCategories(dataCategories);

  //   setCategoriesM(categoríasHOpciones);
  //   setCategoriesW(categoríasMOpciones);
  // };

  const getSubcategories = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:4000/subcategories");
      if (!response.ok) {
        throw new Error("Error en la solicitud: " + response.status);
      }
      const data = await response.json();
      setSubcategories(data);
      console.log(data)
      // console.log('subcategorias en el store: '+subcategories)
    } catch (error) {
      console.error("Error:", error);
      setError(error);
    }
  }, [setSubcategories]);

  /* ----- RENDERIZACIÓN CONSTANTE DE CATEGORÍAS ----- */
  useEffect(() => {
    getSubcategories();
    
  }, [getSubcategories]);

  // useEffect(() => {
  //   getCategorias();
  // }, []);

  return (
    
    <Router>
        <Routes>
          <Route key={1000} path="/" element={<Home />} />
          <Route key={3000} path="products/all" element={<ProductsScreen />} />
          <Route key={4000} path="products/:category" element={<ProductsScreen />} />
          <Route key={4000} path="products/:category/:subcategory" element={<ProductsScreen />} />
          {/* <Route key={5000} path="products/:category/:id" element={<ProdD />} /> */}
          <Route key={5000} path="/products/:id" element={< DProd />} />
           <Route key={6000} path="/payments" element={<PaymentForm/>} />
          {/* <Route key={5000} path="products/:category/:id/modal" element={<ImgP />} /> */}
          <Route key={7000} path="/about-us" element={<Nosotros />} />
          <Route key={8000} path="/contact-us" element={<Contacto />} />
          <Route key={9000} path="/page-not-found" element={<ErrorScreen />} />
          <Route
            key={10000}
            path="/frequent-questions"
            element={<FrequentQuestions />}
          />
          <Route key={11000} path="/rec-contra" element={<RecuperacionContra />} />
          {/* <Route path="/Iniciar-Sesion" element={<Modal />} /> */}
        </Routes>
      </Router>
  );
};

export default App;
