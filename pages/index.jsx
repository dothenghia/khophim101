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
            // .finally(()=> {
            //     console.log('Done')
            // })
    }, [page])

    const moveToPage = (e) => {
        setPage(e.target.innerHTML)
    }

    const leftButtons = []
    for (let i = 1; i < 6; i++) {
        leftButtons.push(
            <button className={(i.toString() === page) ? 'active-btn' : 'normal-btn'} 
                    onClick={moveToPage}
                    key={i}>
                        {i}
            </button>
        )
    }

    const rightButtons = []
    for (let i = 15; i <= 20; i++) {
        rightButtons.push(
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
            {console.log('Render')}
            <div id="home" className="container lg:max-w-6xl mx-auto
                                      flex flex-col lg:flex-row
                                      bg-[#161f34] shadow-2xl ">

                <div className="basis-3/5 lg:basis-3/4 p-4">
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
                        <div className="mt-10 flex flex-row justify-center">
                            {leftButtons}
                            <div className="text-white flex items-end ">...</div>
                            {rightButtons}
                        </div>

                    </div>


                </div>

                <div className="basis-2/5 lg:basis-1/4 px-4 pt-4 mt-4 lg:mt-16 mx-4 lg:ml-0 h-fit
                                rounded-md border-2 border-slate-600">
                    <h1 className="text-xl text-[#e2e8f0] font-bold">Xem nhiều</h1>
                    <ul>
                        {
                            movieInfoList.map((movieInfo) => {
                                return (
                                    <li key={movieInfo['slug']}>
                                        <Link href={`/phim/${movieInfo['slug']}`}
                                            className="my-4 flex flex-row rounded-sm
                                                        hover:overflow-hidden hover:outline outline-2 outline-[#e5e7eb]">
                                            <img className="w-16 h-16 object-cover"
                                                src={`https://img.ophim1.com/uploads/movies/${movieInfo['thumb_url']}`}
                                                alt={movieInfo['origin_name']} />
                                            <div className="px-2 pt-1 flex-1 ">
                                                <h3 className="text-sm text-[#e2e8f0] font-medium mb-0 line-clamp-2">
                                                    {movieInfo['name']}
                                                </h3>
                                                <p className="text-sm text-[#778394] line-clamp-1">
                                                    {movieInfo['origin_name']}
                                                </p>
                                            </div>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

            </div>
        </Layout>
    );
};

export default Home;
