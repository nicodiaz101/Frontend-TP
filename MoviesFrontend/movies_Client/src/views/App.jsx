import React from 'react'
import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home'
import Buscar from './Buscar';
import Carrito from './Carrito';
import Register from './Register';
import Login from './Login';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buscar" element={<Buscar />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
    </Router>
  )
}

export default App
