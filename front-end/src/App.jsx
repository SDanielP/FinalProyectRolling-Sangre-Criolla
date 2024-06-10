import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import DProd from './components/dprod/Dprod'
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import ProductDetails from './components/ProductDetails';

function App() {
  return (
    // <Router>
    //   <Switch>
    //     <Route path="/" exact component={DProd} />
    //     <Route path="/product/:name" component={ProductDetails} />
    //     <Route path="/product/:id" component={ProductDetails} />
    //   </Switch>
    // </Router>
    <DProd />
  );
}

export default App;
