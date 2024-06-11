import "./styles/App.css";
import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useCategories } from "./store/useCategories.js";
import NavbarMenu from "./components/general/NavbarMenu.jsx";
import ProductsScreen from "./pages/ProductsScreen";
import ProductDetail from "./components/shop/productDetail/ProductDetail.jsx";
import ErrorScreen from "./pages/ErrorScreen";

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
        <NavbarMenu key={9000}/>
        <Routes>
          {/* <Route key={1000} path="/" element={<HomeScreen />} /> */}
          <Route key={3000} path="products/all" element={<ProductsScreen />} />
          <Route key={4000} path="products/:category" element={<ProductsScreen/>} />
          <Route key={5000} path="products/d/:id" element={<ProductDetail />} />
          <Route key={8000} path="*" element={<ErrorScreen />} />
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

