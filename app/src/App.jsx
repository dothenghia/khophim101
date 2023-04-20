import { useState, useEffect } from 'react';

import './App.css'

import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

import Header from './containers/Header/Header';
import Slider from './containers/Slider/Slider';
import MovieList from './containers/MovieList/MovieList';
import Aside from './containers/Aside/Aside';
import Footer from './containers/Footer/Footer';

const App = () => {
    // const [movie, setMovie] = useState(null)

    // useEffect(() => {
    //     console.log('[Call API]')
    //     fetch('https://ophim1.com/phim/ngoi-truong-xac-song')
    //         .then(data => data.json())
    //         .then((movie) => {
    //             console.log(movie)
    //             console.log(movie["movie"]["actor"])
    //             setMovie(movie)
    //         })
    // }, [])


    return (
        <div id="app">
            <Header/>
            <MovieList/>
            {/* <Slider/> */}
            <Aside/>
            <Footer/>
        </div>
    );
};

export default App;
