// import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./login";
import Register from "./register";
import Dashboard from "./dashboard";
import ProductPage from "./productPage";
import CardList from "./card";
import CartPage from "./cartpage";
import Home from "./home";
import { CartProvider } from "./cartContext";
import axios from "axios";
import React, { useState } from "react";

function App() {
  return (
    <div>
      <CartProvider>
        <Router>
          <div>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/home" element={<Home />} />
              <Route path="/products" element={<CardList />} />
              <Route path="/products/:productId" element={<ProductPage />} />
              <Route path="/cartPage" element={<CartPage />} />
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
