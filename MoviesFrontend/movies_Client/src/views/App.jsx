import { useState } from 'react'
import './App.css'
import Navbar from '../Components/Navbar'
import MovieList from '../Components/MovieList'
import Footer from '../Components/Footer'


function App() {
  const movies = [ // Ejemplo de movies que se pueden agregar
    {
      id: 1,
      title: "El Padrino",
      poster: "src/img/elPadrino.jpg",
      description: "A great movie",
      price: 1999
    },
    {
      id: 2,
      title: "Titanic",
      poster: "src/img/TITANIC.jpg",
      description: "Another great movie",
      price: 2499
    },
    {
      id: 3,
      title: "Interstellar",
      poster: "src/img/interstellar.jpg",
      description: "Another great movie!!",
      price: 2199
    }
  ];

  return (
    <>
      <Navbar></Navbar>
      <MovieList movies={movies}></MovieList>
      
    </>
  )
}

export default App
