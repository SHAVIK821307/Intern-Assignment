import { useState } from 'react'
import './App.css'
import Home from "./components/Home.jsx"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home></Home>
    </>
  )
}

export default App
