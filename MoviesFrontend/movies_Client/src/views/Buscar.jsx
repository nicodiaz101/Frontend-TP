import Navbar from "../components/Navbar";
import SearchBar from "../Components/SearchBar/searchBar";
import Footer from '../components/Footer'


const Buscar = () => {
    return(
        <div>
            <Navbar></Navbar>
            <h1>Busqueda de peliculas</h1>
            <SearchBar></SearchBar>
            <Footer></Footer>
        </div>
    )
}

export default Buscar;