import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar/searchBar";
import Footer from '../components/Footer'
import "./search.css"


const Buscar = () => {
    return(
        <div>
            <Navbar></Navbar>
            <h1 className="h1Search">Busqueda de peliculas</h1>
            <SearchBar></SearchBar>
            <Footer></Footer>
        </div>
    )
}

export default Buscar;