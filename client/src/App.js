import React, { useState,useEffect } from 'react';
import './App.css';
import Electricalproducts from './component/Electricalproducts';
import Electricalservices from './component/Electricalservices';
import Nav from '../src/component/layout/Nav';
import Footer from '../src/component/layout/Footer';
import { BrowserRouter, Route, Routes,useLocation } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Contactus from './component/Contactus';
import Signup from './component/Signup';
import Login from './component/Login';
import Industrialtraining from './component/Industrialtraining';
import ShoppingCart from './component/ShoppingCart';
import Checkout from './component/Checkout';
import { Providerproduct } from './component/Providerproduct';
import { Providerservice } from './component/Providerservice';
import Providerhome from './component/Providerhome';
import Profile from './component/Profile';
import WaitingHome from './component/WaitingHome';


function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/About" />
        <Route element={<Contactus />} path="/Contactus" />
        <Route element={<Signup />} path="/Signup" />
        <Route element={<Login />} path="/Login" />
        <Route element={<Electricalproducts />} path="/Electricalproducts" />
        <Route element={<Electricalservices />} path="/Electricalservices" />
        <Route element={<Industrialtraining />} path="/Industrialtraining" />
        <Route element={<ShoppingCart />} path="/ShoppingCart" />
        {/* Providerproduct and Providerservice are nested under Providerhome */}
        <Route element={<Providerproduct />} path="/Providerhome/Providerproduct" />
        <Route element={<Providerservice />} path="/Providerhome/Providerservice" />
        <Route element={<Providerhome />} path="/Providerhome" />
        <Route element={<Profile />} path="/Profile" />
        <Route element={<WaitingHome />} path="/WaitingHome" />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
