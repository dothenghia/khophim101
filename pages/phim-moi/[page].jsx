import Head from "next/head";
import Link from "next/link";
import clientPromise from "../../lib/mongodb";
import { getAllDataPages } from "../../lib/pages";

import Layout from "../../components/Layout";
import MovieCard from "../../components/MovieCard/MovieCard";

export async function getStaticPaths() {
    const paths = getAllDataPages();
    return {
        paths,
        fallback: false,
    };
}

// Get data from MongoDB
export async function getStaticProps({ params }) {
    const page = params.page
    const skip = (page - 1) * 24 || 0;

	const client = await clientPromise;
	const db = client.db("khophim-db");

	let movieData = await db.collection("phim").find({}).skip(skip).limit(24).toArray();
	movieData = JSON.parse(JSON.stringify(movieData));

	return {
		props: { movieData , page},
	};
}

const renderPageButtons = (page, n) => {
    const buttons = []
    let flag = true

    for (let i = 1; i <= n; i++) {
        if (i == 1 || i == n || i == page || i == page-1 || i == page-2 || i == page+1 || i == page + 2) {
            if (flag == false) {
                buttons.push(<div className="text-white flex items-end ">...</div>)
                flag = true
            }
            buttons.push(
                <Link className={(i == page) ? 'active-btn' : 'normal-btn'} 
                        href={`/phim-moi/${i}`}
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

const PhimMoi = ({ movieData , page}) => {
    // console.log(`[Trang ${page}]` , movieData)

    return (
        <Layout>
            <Head>
                <title>Phim mới cập nhật - Trang {page} | KhoPhim101</title>
            </Head>

            {/* ================================================== */}
            <div id="phimmoi" className="container lg:max-w-5xl mx-auto
                                      flex flex-col lg:flex-row
                                      bg-li-bg-2 dark:bg-da-bg-2 shadow-stone-400 dark:shadow shadow-2xl ">

                <div className="p-4">
                    <h1 className="mb-2 pl-2 py-1 border-l-4 heading-text text-lg md:text-xl lg:text-2xl
                                text-li-heading dark:text-da-heading
                                border-li-primary dark:border-da-primary">Phim mới cập nhật - Trang {page}</h1>
                    <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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


                    {/* Buttons switch page */}
                    <div>
                        <div className="mt-10 flex flex-row flex-wrap justify-center">
                            {renderPageButtons(parseInt(page, 10) , 96)}
                        </div>
                    </div>


                </div>

            </div>
        </Layout>
    );
};

export default PhimMoi;
