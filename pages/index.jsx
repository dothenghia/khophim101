import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";

import Layout from "../components/Layout";
import MovieCard from "../components/MovieCard/MovieCard";

// This function runs at build time
export async function getStaticProps() {
    // Use to Fetch external data
    const res = await fetch('https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=1')
    const movieData = await res.json()

    // The value of the `props` key will be passed to the `Home` component
    return {
        props: {
            movieData
        },
    }
}

const Home = ({ movieData }) => {
    // console.log(movieData)

    const [page, setPage] = useState('1')
    const [movieInfoList, setMovieInfoList] = useState(movieData['items'])

    useEffect(() => {
        fetch(`https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=${page}`)
            .then(data => data.json())
            .then(newMovieData => {
                setMovieInfoList(newMovieData['items'])
            })
    }, [page])

    const moveToPage = (e) => {
        setPage(e.target.innerHTML)
    }

    const buttons = []
    for (let i = 1; i <= 28; i++) {
        buttons.push(
            <button className={(i.toString() === page) ? 'active-btn' : 'normal-btn'} 
                    onClick={moveToPage}
                    key={i}>
                        {i}
            </button>
        )
    }

    return (
        <Layout>
            <Head>
                <title>KhoPhim101 | Trang chủ</title>
            </Head>

            {/* ================================================== */}
            <div id="home" className="container lg:max-w-5xl mx-auto
                                      flex flex-col lg:flex-row
                                      bg-[#161f34] shadow-2xl ">

                {/* <div className="basis-3/5 lg:basis-3/4 p-4"> */}
                <div className="p-4">
                    <h1 className="mb-2 pl-2 py-1 border-l-4 border-sky-500 heading-text">Phim mới cập nhật</h1>
                    <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {
                            movieInfoList.map((movieInfo) => {
                                return (
                                    <MovieCard
                                        key={movieInfo['slug']}
                                        movieInfo={movieInfo}
                                    />
                                )
                            })
                        }
                    </div>


                    {/* Buttons switch page */}
                    <div>
                        <div className="mt-10 flex flex-row flex-wrap justify-center">
                            {buttons}
                            {/* <div className="text-white flex items-end ">...</div> */}
                        </div>

                    </div>


                </div>

            </div>
        </Layout>
    );
};

export default Home;
