import Head from "next/head";
import Link from "next/link";

import Layout from "../components/Layout";
import MovieCard from "../components/MovieCard/MovieCard";

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
        <Layout>
            <Head>
                <title>Trang chủ</title>
            </Head>

            {/* ================================================== */}

            <div id="home" className="container mx-auto">
                <div className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
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
            </div>
        </Layout>
    );
};

export default HomePage;
