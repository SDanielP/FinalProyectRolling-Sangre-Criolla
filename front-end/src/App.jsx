import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarMenu from "./components/general/NavbarMenu.jsx";

import ProductsScreen from "./pages/ProductsScreen";
import ErrorScreen from "./pages/ErrorScreen";

import { useEffect } from "react";
import { useCategories } from "./store/useCategories.js";
// import { useNavigate } from "react-router-dom";

const App = () =>  {
  /* ----- Estado Categorías - Zustand ----- */
  const { setCategories } = useCategories();


  /* ----- API ----- */
  const getCategorias = async () => {
    const url = "https://fakestoreapi.com"
    const response = await fetch(`${url}/products/categories`);
    const dataCategories = await response.json();

    //***Asigno a las categorías la info de la API
    setCategories(dataCategories);
  };

  /* ----- RENDERIZACIÓN CONSTANTE DE CATEGORÍAS ----- */
  useEffect(() => {
    getCategorias();
  }, []);

  return (
    <>
      <Router>
        <NavbarMenu key={9000}/>
        <Routes>
          {/* <Route key={1000} path="/" element={<HomeScreen />} /> */}
          <Route key={3000} path="products/all" element={<ProductsScreen />} />
          <Route key={4000} path="products/:category" element={<ProductsScreen/>} />
          {/* <Route key={5000} path="products/:category/:id" element={<ProductDetail />} /> */}
          <Route key={8000} path="*" element={<ErrorScreen />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
