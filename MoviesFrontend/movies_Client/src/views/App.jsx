import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home'
import Buscar from './Buscar';
import CarritoPage from './CarritoPage';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import MovieList from "../components/MovieList/MovieList.jsx";
import MoviePage from './MoviePage';
import AdminPage from './adminPage';
import PrivacyPolitics from './privacyPolitics';
import Terminos from './terms';
import Cambios from './cambios';
import NewMovie from './newMovie';
import RemoveMoviePage from './removeMoviePage';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buscar" element={<Buscar />} />
          <Route path="/carrito" element={<CarritoPage />} />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/movies/:movieId" element={<MoviePage />} /> {/* Ruta dinámica con movieId */}
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/adminPage" element={<AdminPage/>} />
          <Route path="/privacyPolitics" element={<PrivacyPolitics/>} />
          <Route path="/terms" element={<Terminos/>} />
          <Route path="/cambios" element={<Cambios/>} />
          <Route path="/newMovie" element={<NewMovie/>} />
          <Route path="/removeMovie" element={<RemoveMoviePage/>} />
        </Routes>
    </Router>
  )
}

export default App
