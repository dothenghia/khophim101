import Head from "next/head";
import Link from "next/link";
import clientPromise from "../../lib/mongodb";

import Layout from "../../components/Layout";
import MovieCard from "../../components/MovieCard/MovieCard";

// PHIM LẺ 1285
// Total pages : 52

export async function getServerSideProps(context) {
    const { page } = context.query
    const skip = (page - 1) * 24 || 0;

    const client = await clientPromise;
    const db = client.db("movie-db");

    let movieData = await db.collection("movie").find({"type" : "single" , "chieurap" : false }).skip(skip).limit(24).toArray();
    movieData = JSON.parse(JSON.stringify(movieData));

    return {
        props: { movieData, page },
    };
}

const renderPageButtons = (page, n) => {
    const buttons = []
    let flag = true

    for (let i = 1; i <= n; i++) {
        if (i == 1 || i == n || i == page || i == page - 1 || i == page - 2 || i == page + 1 || i == page + 2) {
            if (flag == false) {
                buttons.push(<div key={-i} className="text-black dark:text-white flex items-end ">...</div>)
                flag = true
            }
            buttons.push(
                <Link className={(i == page) ? 'active-btn' : 'normal-btn'}
                    href={`/phim-le/${i}`}
                    key={i}>
                    {i}
                </Link>
            )
        } else {
            flag = false
        }
    }

    return buttons
}

const PhimLe = ({ movieData, page }) => {
    return (
        <Layout>
            <Head>
                <title>Phim lẻ - Trang {page} | KhoPhim101</title>
            </Head>

            {/* ================================================== */}
            <div id="phimle">

                <div className="mt-5">
                    <h1 className="page-title">
                        PHIM LẺ - Trang {page}
                    </h1>

                    <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
                        {
                            movieData.map((movieInfo) => {
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



                {/* Buttons switch page */}
                <div>
                    <div className="mt-10 flex flex-row flex-wrap justify-center">
                        {renderPageButtons(parseInt(page, 10), 52)}
                    </div>
                </div>

            </div>
        </Layout>
    );
};

export default PhimLe;
