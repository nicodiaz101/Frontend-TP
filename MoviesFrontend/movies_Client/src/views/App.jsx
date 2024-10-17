import React from 'react'
import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home'
import Buscar from './Buscar';
import Carrito from './Carrito';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import MoviePage from './MoviePage';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buscar" element={<Buscar />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/MoviePage" element={<MoviePage/>} />
        </Routes>
    </Router>
  )
}

export default App
