import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Home from './pages/home/home';
import Services from './pages/services/services';
import Login from './pages/login/login';
import Navbar from './components/navbar/navbar';
import Agile from './pages/services/agile/agile';
import Product from './pages/services/product/product';
import Staffing from './pages/services/staffing/staffing';
import SeriveNav from './pages/services/SeriveNav';
import ItSecurityServices from './pages/services/security services/security';
import Analytics from './pages/services/Analytics/Analytics'; 
import Ai from './pages/services/GENERATIVE-AI-BUSINESS/Ai';
import Internet from './pages/services/INTERNET-OF-THINGS/internet';

import './App.css';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar/>}>
        <Route index element={<Home />} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="services" element={<Services/>} />
        <Route path="login" element={<Login/>} />
        <Route path="services" element={<SeriveNav/>} />
        <Route path="services/agile" element={<Agile/>} />
        <Route path="services/product" element={<Product/>} />
        <Route path="services/staffing" element={<Staffing/>} />
        <Route path="services/itSecurityServices" element={<ItSecurityServices/>} />
        <Route path="services/analytics" element={<Analytics/>} />
        <Route path="services/Ai" element={<Ai/>} />
        <Route path="services/internet" element={<Internet/>} />
        

        
      </Route>
  
    </Routes>
  </BrowserRouter>
  
  );
}

export default App;

