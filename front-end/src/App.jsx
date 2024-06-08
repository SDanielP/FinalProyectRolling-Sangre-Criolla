import { useState } from 'react'
import './App.css'
import DProd from './components/dprod/Dprod'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <DProd />
    </>
  )
}

export default App
