import Head from "next/head";
import Link from "next/link";
import clientPromise from "../lib/mongodb";

import Layout from "../components/Layout";
import ThumbnailSlider from "../components/ThumbnailSlider/ThumbnailSlider";
import MovieCard from "../components/MovieCard/MovieCard";

// Get data from MongoDB
export async function getServerSideProps() {
    const client = await clientPromise;
    const db = client.db("movie-db");

    let phimMoiData = await db.collection("movie").find({}).limit(8).toArray();
    phimMoiData = JSON.parse(JSON.stringify(phimMoiData));

    let phimChieuRapData = await db.collection("movie").find({"chieurap" : true}).limit(8).toArray();
    phimChieuRapData = JSON.parse(JSON.stringify(phimChieuRapData));

    let phimLeData = await db.collection("movie").find({"type" : "single" , "chieurap" : false }).limit(8).toArray();
    phimLeData = JSON.parse(JSON.stringify(phimLeData));

    let phimBoData = await db.collection("movie").find({"type" : "series" , "chieurap" : false }).limit(8).toArray();
    phimBoData = JSON.parse(JSON.stringify(phimBoData));

    let phimHoatHinhData = await db.collection("movie").find({"type" : "hoathinh" , "chieurap" : false }).limit(8).toArray();
    phimHoatHinhData = JSON.parse(JSON.stringify(phimHoatHinhData));

    return {
        props: { phimMoiData ,
                 phimChieuRapData ,
                 phimLeData ,
                 phimBoData ,
                 phimHoatHinhData
                },
    };
}

const HomePage = ({ phimMoiData , phimChieuRapData , phimLeData , phimBoData , phimHoatHinhData }) => {
    return (
        <Layout>
            <Head>
                <title>Trang chủ | KhoPhim101</title>
            </Head>

            {/* ================================================== */}
            <div id="home">
                <div id="carousel">
                    <ThumbnailSlider/>
                </div>

                <div className="pb-8 border-b-2 border-li-border dark:border-da-border">
                    <Link href='/phim-moi/1' className="page-title inline-block hover:text-li-primary dark:hover:text-da-primary">
                        PHIM MỚI CẬP NHẬT
                    </Link>
                    <div className="movies-grid">
                        {
                            phimMoiData.map((movieInfo, index) => {
                                return (
                                    <MovieCard
                                        key={index}
                                        movieInfo={movieInfo}
                                    />
                                )
                            })
                        }
                    </div>

                    <div className="mt-8 pr-4 lg:pr-2 flex flex-row justify-end">
                        <Link className="flex font-medium text-li-heading dark:text-da-heading hover:text-li-primary dark:hover:text-da-primary"
                            href='/phim-moi/1'>
                            Xem thêm
                            <span className="pl-1 inline-flex flex-row items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" /></svg>
                            </span>
                        </Link>
                    </div>
                </div>


                <div className="mt-5 pb-8 border-b-2 border-li-border dark:border-da-border">
                    <Link href='/phim-chieu-rap/1' className="page-title inline-block hover:text-li-primary dark:hover:text-da-primary">
                        PHIM CHIẾU RẠP
                    </Link>
                    <div className="movies-grid">
                        {
                            phimChieuRapData.map((movieInfo, index) => {
                                return (
                                    <MovieCard
                                        key={index}
                                        movieInfo={movieInfo}
                                    />
                                )
                            })
                        }
                    </div>

                    <div className="mt-6 pr-4 lg:pr-2 flex flex-row justify-end">
                        <Link className="flex font-medium text-li-heading dark:text-da-heading hover:text-li-primary dark:hover:text-da-primary"
                            href='/phim-chieu-rap/1'>
                            Xem thêm
                            <span className="pl-1 inline-flex flex-row items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" /></svg>
                            </span>
                        </Link>
                    </div>
                </div>


                <div className="mt-5 pb-8 border-b-2 border-li-border dark:border-da-border">
                    <Link href='/phim-le/1' className="page-title inline-block hover:text-li-primary dark:hover:text-da-primary">
                        PHIM LẺ
                    </Link>
                    <div className="movies-grid">
                        {
                            phimLeData.map((movieInfo, index) => {
                                return (
                                    <MovieCard
                                        key={index}
                                        movieInfo={movieInfo}
                                    />
                                )
                            })
                        }
                    </div>

                    <div className="mt-6 pr-4 lg:pr-2 flex flex-row justify-end">
                        <Link className="flex font-medium text-li-heading dark:text-da-heading hover:text-li-primary dark:hover:text-da-primary"
                            href='/phim-le/1'>
                            Xem thêm
                            <span className="pl-1 inline-flex flex-row items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" /></svg>
                            </span>
                        </Link>
                    </div>
                </div>


                <div className="mt-5 pb-8 border-b-2 border-li-border dark:border-da-border">
                    <Link href='/phim-bo/1' className="page-title inline-block hover:text-li-primary dark:hover:text-da-primary">
                        PHIM BỘ
                    </Link>
                    <div className="movies-grid">
                        {
                            phimBoData.map((movieInfo, index) => {
                                return (
                                    <MovieCard
                                        key={index}
                                        movieInfo={movieInfo}
                                    />
                                )
                            })
                        }
                    </div>

                    <div className="mt-6 pr-4 lg:pr-2 flex flex-row justify-end">
                        <Link className="flex font-medium text-li-heading dark:text-da-heading hover:text-li-primary dark:hover:text-da-primary"
                            href='/phim-bo/1'>
                            Xem thêm
                            <span className="pl-1 inline-flex flex-row items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" /></svg>
                            </span>
                        </Link>
                    </div>
                </div>


                <div className="mt-5 pb-8">
                    <Link href='/hoat-hinh/1' className="page-title inline-block hover:text-li-primary dark:hover:text-da-primary">
                        PHIM HOẠT HÌNH
                    </Link>
                    <div className="movies-grid">
                        {
                            phimHoatHinhData.map((movieInfo, index) => {
                                return (
                                    <MovieCard
                                        key={index}
                                        movieInfo={movieInfo}
                                    />
                                )
                            })
                        }
                    </div>

                    <div className="mt-6 pr-4 lg:pr-2 flex flex-row justify-end">
                        <Link className="flex font-medium text-li-heading dark:text-da-heading hover:text-li-primary dark:hover:text-da-primary"
                            href='/hoat-hinh/1'>
                            Xem thêm
                            <span className="pl-1 inline-flex flex-row items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" /></svg>
                            </span>
                        </Link>
                    </div>
                </div>


            </div>
        </Layout>
    );
};

export default HomePage;
