import { useState } from 'react'
import './App.css'
import './styles/style.css'
import Home from './Home.jsx'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Home/>
  )
}

export default App
