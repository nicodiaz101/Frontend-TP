import MovieDetail from '../components/MovieDetail/MovieDetail.jsx';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer'

const MoviePage = () => {
    return (
        <>
            <Navbar></Navbar>
            <MovieDetail></MovieDetail>
            <Footer></Footer>
        </>
    )
}

export default MoviePage;