import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";

// import Header from components...
// import Footer from components...
// import Slider from components...

const MovieCard = ({ movieInfo }) => {
    return (
        <div className="w-full rounded overflow-hidden shadow-lg" key={movieInfo['slug']}>
            <img className="w-full"
                src={`https://img.ophim1.com/uploads/movies/${movieInfo['thumb_url']}`}
                alt={movieInfo['origin_name']} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{movieInfo['name']}</div>
                <p className="text-gray-700 text-base">({movieInfo['origin_name']})</p>
                <p className="text-gray-700 text-base">{movieInfo['year']}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{movieInfo['year']}</span>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=1')
    const movieData = await res.json()
    const movieInfoList = movieData['items']

    return {
        props: {
            movieInfoList,
        },
    }
}

const HomePage = ({ movieInfoList }) => {
    return (
        <div id="home" className="container mx-auto">

            <div className="grid grid-cols-4">

                {
                    movieInfoList.map((movieInfo) => {
                        return (
                            <MovieCard key={movieInfo['slug']}
                                movieInfo={movieInfo}/>
                        )
                    })
                }

            </div>



        </div>
    );
};

export default HomePage;
