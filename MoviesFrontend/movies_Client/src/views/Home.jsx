import Navbar from '../components/Navbar'
import MovieList from '../components/MovieList/MovieList'
import Footer from '../components/Footer'
import './Home.css'

const Home = () => {

    return (
        <>
            <Navbar></Navbar>
            <div className="home-container">
                <MovieList></MovieList>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Home;