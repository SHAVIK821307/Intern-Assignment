import { useState } from "react";
import "./App.css";
import Home from "./pages/Home.jsx";
import LoginPage from "./pages/Login.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
