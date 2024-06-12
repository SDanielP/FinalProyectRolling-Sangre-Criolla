
import './App.css'
import { RecuperacionContra } from './pages/RecuperacionContra'
import Modal from './pages/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import InicioSesion from './components/InicioSesion';

function App() {

  // return (
  //   <>
  //   <Modal />
  //   {/* <RecuperacionContra /> */}
  //   </>
  // )
  return (
    <>
      <Router>
      <Modal />
        <Routes>
          <Route path="/recuperacionContra" element={<RecuperacionContra />} />.
          <Route path="/" element={<Modal />} />
          {/* <Route path="*" element={<Error404 />}/> */}
        </Routes>
      </Router>
      
    </>
  );
}
export default App
