import Navbar from "../components/Navbar";
import SearchBar from "../Components/SearchBar/searchBar";


const Buscar = () => {
    return(
        <div>
            <Navbar></Navbar>
            <h1>Busqueda de peliculas</h1>
            <SearchBar></SearchBar>
        </div>
    )
}

export default Buscar;