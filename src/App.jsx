import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import "./css/About.css"
import Header from "./component/Header";
import Footer from "./component/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Offer from "./pages/Offer";
import Resturant from "./pages/Resturant";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resturant" element={<Resturant />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;