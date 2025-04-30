import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom;
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Acerca from "./components/Acerca";
import Contacto from "./components/Contacto";

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
