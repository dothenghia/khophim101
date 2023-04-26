import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

import Layout from "../../components/Layout";

// This gets called on every request
export async function getServerSideProps(context) {
    // Get slug in path url
    const { slug } = context.query

    // Fetch data from external API
    const res = await fetch(`https://ophim1.com/phim/${slug}`)
    const data = await res.json()

    // Pass data to the page via props
    return {
        props: {
            data
        }
    }
}

function RenderInformationArray(array) {
    if (array[0] === '') {
        return ' N/A'
    } else {
        return (
            array.map((item, index) => {
                return (
                    <span key={index}
                        className="body-text-2">
                        {` ${item}${(index === array.length - 1) ? '' : ','}`}
                    </span>
                )
            })
        )
    }
}


const Movie = ({ data }) => {
    // console.log(data)
    const movieInfo = data['movie']
    const episodes = data['episodes'][0]

    const [currEpisode, setCurrEpisode] = useState('1')
    const [modalRestrict, setModalRestrict] = useState(false)

    useEffect(() => {
        movieInfo['category'].forEach((category) => {
            if (category['name'] == 'Phim 18+') {
                setModalRestrict(true)
            }
        })
    }, [])

    const moveToEpisode = (e) => {
        if (isNaN(e.target.innerHTML) === false) {
            setCurrEpisode(e.target.innerHTML)
        }
    }

    return (
        <Layout>
            <Head>
                <title>{movieInfo['name']}</title>
            </Head>

            {/* ================================================== */}

            <div className="container lg:max-w-5xl mx-auto bg-[#161f34] shadow-2xl">
                <div className="flex flex-col md:flex-row items-center p-5">

                    <div className="w-60 rounded-md overflow-hidden">
                        <img src={movieInfo['thumb_url']} alt={movieInfo['name']} />
                    </div>

                    <div className="flex-1 pt-4 px-2 md:pt-1 md:px-6">
                        <h1 className="heading-text">{movieInfo['name']}</h1>
                        <h2 className="subheading-text">{movieInfo['origin_name']}</h2>
                        <p className="body-text">Trạng thái :
                            <span className="text-blue-400 text-base font-bold"> {movieInfo['episode_current']}</span>
                        </p>
                        <p className="body-text">Thời lượng : {movieInfo['time']}</p>
                        <p className="body-text">Đạo diễn : {RenderInformationArray(movieInfo['director'])}</p>
                        <p className="body-text">Diễn viên : {RenderInformationArray(movieInfo['actor'])}</p>
                        <p className="body-text">Thể loại :
                            {movieInfo['category'].map((category, index) => {
                                return (
                                    <span key={index} className="body-text-2">
                                        {` ${category['name']}${(index === movieInfo['category'].length - 1) ? '' : ','}`}
                                    </span>
                                )
                            })}
                        </p>
                        <p className="body-text">Quốc gia : <span className="body-text-2">{movieInfo['country'][0]['name']}</span></p>
                        <p className="body-text">Năm sản xuất : <span className="body-text-2">{movieInfo['year']}</span></p>
                        <p className="body-text">Nội dung :</p>
                        <span className="body-text" dangerouslySetInnerHTML={{ __html: movieInfo['content'] }} />
                    </div>
                </div>

                <div className="pt-10 pb-28">
                    <iframe className="mx-auto w-4/5 h-96"
                        allowFullScreen={true}
                        src={episodes['server_data'][parseInt(currEpisode - 1, 10)]['link_embed']}>
                    </iframe>

                    {/* Buttons switch episodes */}
                    <div className="mx-10 my-5 px-4 pt-2 pb-4 rounded-md border-2 border-[#333d4d]">
                        <h1 className="heading-text text-lg mb-2">{episodes['server_name']} :</h1>
                        {
                            episodes['server_data'].map((episode, index) => {
                                return (
                                    <button key={index}
                                        onClick={moveToEpisode}
                                        className={`${((index + 1).toString() === currEpisode) ? 'active-btn' : 'normal-btn'} inline-flex`}>
                                        {episode['name']}
                                    </button>
                                )
                            })
                        }
                    </div>

                </div>
            </div>


            {/* Modal 18+ */}
            <div className={`${modalRestrict ? '' : 'hidden'} relative z-10`} aria-labelledby="modal-title" role="dialog" aria-modal="true">

                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">

                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                        </svg>
                                    </div>
                                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                        <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Cảnh báo</h3>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">Phim có chứa nội dung nhạy cảm 18+</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <Link href='/' type="button" className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">
                                    Quay về trang chủ
                                </Link>
                                <button type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        onClick={() => {setModalRestrict(false)}}>
                                    Tiếp tục xem
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    );
};

export default Movie;
