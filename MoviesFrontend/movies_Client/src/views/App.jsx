import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home'
import Buscar from './Buscar';
import Carrito from './Carrito';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import MoviePage from './MoviePage';
import AdminPage from './AdminPage';
import PrivacyPolitics from './privacyPolitics';
import Terminos from './terms';
import Cambios from './cambios';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buscar" element={<Buscar />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/moviePage" element={<MoviePage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/adminPage" element={<AdminPage/>} />
          <Route path="/privacyPolitics" element={<PrivacyPolitics/>} />
          <Route path="/terms" element={<Terminos/>} />
          <Route path="/cambios" element={<Cambios/>} />
        </Routes>
    </Router>
  )
}

export default App
