import Contacto from './pages/Contacto';
import Nosotros from './pages/Nosotros';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
