import React from 'react';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Services from './pages/Services';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Service from './components/Service';
import OurExclusiveProducts from './components/OurExclusiveProducts';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />

          <Route path="/service" element={<Service />} />
          <Route path="/ourexclusive" element={<OurExclusiveProducts />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
