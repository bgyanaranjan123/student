import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import "./css/About.css"
import Header from "./component/Header";
import Footer from "./component/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;