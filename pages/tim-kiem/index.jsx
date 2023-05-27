import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import clientPromise from "../../lib/mongodb";

import Layout from "../../components/Layout";
import MovieCard from "../../components/MovieCard/MovieCard";
import { useRouter } from "next/router";


export async function getServerSideProps(context) {
    const queries = context.query

    const client = await clientPromise;
    const db = client.db("movie-db");

    let regex;
    let movieData = [];

    if (queries.name !== undefined) {
        regex = new RegExp(queries.name.replace(/\s/g, '.*'), 'i')
        const query = {
            $or: [
                { name: { $regex: regex } },
                { origin_name: { $regex: regex } }
            ]
        };

        movieData = await db.collection("movie").find(query).toArray();
        movieData = JSON.parse(JSON.stringify(movieData));
    }

    return {
        props: { movieData , queries },
    };
}

const TimKiem = ({ movieData , queries }) => {
    const [input, setQuery] = useState((queries.name !== undefined) ? queries.name : '')
    const router = useRouter()
    const inputDOM = useRef(null)

    useEffect(() => {
        const keyDownHandler = (e) => {
            if (e.key === 'Enter') {
                if (inputDOM.current.value !== "" && inputDOM.current.value.length != 1 && inputDOM.current.value.length != 2) {
                    router.push({
                        pathname: '/tim-kiem',
                        query: {
                            name: `${inputDOM.current.value}`
                        }
                    })
                }
            }
        }

        window.addEventListener('keydown', keyDownHandler)

        // Cleanup function
        return () => {
            window.removeEventListener('keydown', keyDownHandler)
        }
    }, [])

    return (
        <Layout>
            <Head>
                { queries.name === undefined ? 
                    <title>Tìm kiếm</title>
                :
                    <title>Tìm kiếm - "{queries.name}"</title>
                }
            </Head>

            {/* ================================================== */}
            <div id="timkiem" className="h-fit min-h-screen">

                <h1 className="mb-4 heading-text text-center">Tìm kiếm phim</h1>

                <div className="flex py-2 md:py-3 px-3 bg-white rounded-md overflow-hidden drop-shadow-sm shadow-md dark:shadow-sm dark:drop-shadow-none
                                focus-within:outline outline-[2px]
                                outline-li-subheading dark:outline-gray-300">
                    <input type="text"
                        className=" flex-1 outline-none bg-transparent text-base text-li-subheading "
                        placeholder="Nhập tên phim ..."
                        value={input}
                        onChange={(e) => { setQuery(e.target.value) }}
                        required
                        autoComplete="true"
                        ref={inputDOM}
                    />

                    <Link href={{ pathname: '/tim-kiem', query: { name: input } }}
                        className="pl-2 flex items-center text-li-subheading hover:text-li-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </Link>
                </div>

                <div className="mt-6 movies-grid">
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


            </div>
        </Layout>
    );
};

export default TimKiem;
