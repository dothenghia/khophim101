import Head from "next/head";
import Link from "next/link";
import clientPromise from "../lib/mongodb";

import Layout from "../components/Layout";
import MovieCard from "../components/MovieCard/MovieCard";

// Get data from MongoDB
export async function getServerSideProps() {
	const client = await clientPromise;
	const db = client.db("khophim-demo");

	let movieData = await db.collection("phim1").find({}).limit(24).toArray();
	movieData = JSON.parse(JSON.stringify(movieData));

	return {
		props: { movieData },
	};
}

const Home = ({ movieData }) => {
    // console.log(movieData)

    const buttons = []
    for (let i = 1; i <= 4; i++) {
        buttons.push(
            <Link className={(i === 1) ? 'active-btn' : 'normal-btn'} 
                    href={`/phim-moi/${i}`}
                    key={i}>
                        {i}
            </Link>
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
                                      bg-li-bg-2 dark:bg-da-bg-2 shadow-stone-400 dark:shadow shadow-2xl ">

                <div className="p-4">
                    <h1 className="mb-2 pl-2 py-1 border-l-4 heading-text text-lg md:text-xl lg:text-2xl
                                text-li-heading dark:text-da-heading
                                border-li-primary dark:border-da-primary">Phim mới cập nhật</h1>
                    <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {
                            movieData.map((movieInfo, index) => {
                                return (
                                    <MovieCard
                                        key={index}
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
                            <div className="text-li-heading dark:text-da-heading font-medium flex items-end ">...</div>
                            <Link className='normal-btn' href={`/phim-moi/280`}>
                                280
                            </Link>
                        </div>
                    </div>


                </div>

            </div>
        </Layout>
    );
};

export default Home;
