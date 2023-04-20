import { useState, useEffect } from 'react';

import './movielist.scss'

import thumbnail from '../../assets/movieThumnails/di-tim-nemo.jpg'

const MovieList = () => {
    const [movieData, setMovieData] = useState([])

    useEffect(() => {
        console.log('[Call API]')
        fetch('https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=1')
            .then(data => data.json())
            .then(data => {
                console.log(data['items'])
                setMovieData(data['items'])
            })
    }, [])

    return (
        <div id="movielist" className="container">
            {console.log('Render')}
            <div className="row">

                {
                    movieData.map((movieItem) => {
                        return (
                            <div className="col-3" key={movieItem['slug']}>
                                <div className="card mt-3 mb-3">
                                    <img src={`https://img.ophim1.com/uploads/movies/${movieItem['thumb_url']}`} 
                                        className="card-img-top" 
                                        alt={movieItem['origin_name']}/>
                                    <div className="card-body">
                                        <h3 className="card-title">{movieItem['name']}</h3>
                                        <h6 className="card-text">({movieItem['origin_name']})</h6>
                                        <p className="card-text">{movieItem['year']}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }


                <div className="col-3">456</div>
                <div className="col-3">43242</div>
                <div className="col-3">1111</div>
            </div>

        </div>
    );
};

export default MovieList;
