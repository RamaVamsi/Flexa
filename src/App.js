import "./App.css";
import HomePage from "./Screens/HomePage";
import Navbar from "../src/Screens/Navbar";
import ProductPage from "../src/Modules/ProductPage";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ProductPage" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
