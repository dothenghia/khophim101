import Head from "next/head";
import Link from "next/link";
import clientPromise from "../lib/mongodb";

import Layout from "../components/Layout";
import MovieCard from "../components/MovieCard/MovieCard";

// Get data from MongoDB
export async function getServerSideProps() {
	const client = await clientPromise;
	const db = client.db("khophim-demo");

	let movieData = await db.collection("phim").find({}).limit(24).toArray();
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
                                      bg-[#161f34] shadow-2xl ">

                <div className="p-4">
                    <h1 className="mb-2 pl-2 py-1 border-l-4 border-sky-500 heading-text">Phim mới cập nhật</h1>
                    <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {
                            movieData.map((movieInfo, index) => {
                                return (
                                    <MovieCard
                                        key={index}
                                        movieInfo={movieInfo['movie']}
                                    />
                                )
                            })
                        }
                    </div>


                    {/* Buttons switch page */}
                    <div>
                        <div className="mt-10 flex flex-row flex-wrap justify-center">
                            {buttons}
                            <div className="text-white flex items-end ">...</div>
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
