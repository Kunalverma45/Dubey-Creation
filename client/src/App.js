
// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar"
import Footer from './components/Footer/Footer';
import LandingPage from './pages/LandingPage';
// import other pages if needed
// import Login from './pages/Login';
// import ProductDetails from './pages/ProductDetails';

const App = () => {
  return (
    <Router>
      {/* Navbar is always visible */}
      <Navbar />

      {/* Only this part changes based on route */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/product/:id" element={<ProductDetails />} /> */}
      </Routes>

      {/* Footer is always visible */}
      <Footer />
    </Router>
  );
};

export default App;
