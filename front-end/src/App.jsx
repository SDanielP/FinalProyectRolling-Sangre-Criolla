import "./styles/App.css";
import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useCategories } from "./store/useCategories.js";
// import NavbarMenu from "./components/general/NavbarMenu.jsx";
import ProductsScreen from "./pages/ProductsScreen";
import Home from "./pages/Home.jsx";
import FrequentQuestions from "./pages/FrequentQuestions.jsx";
import ProdD from "./components/shop/productDetail/ProdD.jsx";
import ErrorScreen from "./pages/ErrorScreen.jsx";
import Nosotros from "./pages/Nosotros.jsx";
// import Contacto from "./pages/Contacto.jsx";
// import ImgP from "./components/shop/compProductDet/ImgP.jsx";

/* ----- Constantes ----- */
//***URL API
const url = "https://fakestoreapi.com"

const App = () =>  {
  /* ----- Estado Categorías - Zustand ----- */
  const { setCategories } = useCategories();

  /* ----- API ----- */
  const getCategorias = async () => {
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
        {/* <NavbarMenu key={9000}/> */}
        <Routes>
          <Route key={1000} path="/" element={<Home />} />
          <Route key={3000} path="products/all" element={<ProductsScreen />} />
          <Route key={4000} path="products/:category" element={<ProductsScreen />} />
          <Route key={5000} path="products/:category/:id" element={<ProdD />} />
          {/* <Route key={5000} path="products/:category/:id/modal" element={<ImgP />} /> */}
          <Route key={7000} path="/about-us" element={<Nosotros />} />
          {/* <Route key={8000} path="/contact-us" element={<Contacto />} /> */}
          <Route key={9000} path="*" element={<ErrorScreen />} />
          <Route key={10000} path="/frequent-questions" element={<FrequentQuestions />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

// import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import DProd from './components/dprod/Dprod'
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// // import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// // import ProductDetails from './components/ProductDetails';

// function App() {
//   return (
//     // <Router>
//     //   <Switch>
//     //     <Route path="/" exact component={DProd} />
//     //     <Route path="/product/:name" component={ProductDetails} />
//     //     <Route path="/product/:id" component={ProductDetails} />
//     //   </Switch>
//     // </Router>
//     <DProd />
//   );
// }

