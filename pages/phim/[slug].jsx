import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

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
    console.log(data)
    const movieInfo = data['movie']
    const episodes = data['episodes'][0]

    const [currEpisode , setCurrEpisode] = useState('1')

    const moveToEpisode = (e) => {
        if (isNaN(e.target.innerHTML) === false) {
            setCurrEpisode(e.target.innerHTML)
        }
        console.log(e.target.innerHTML)
        console.log(typeof(e.target.innerHTML))
        console.log(isNaN(e.target.innerHTML))
        
    }

    return (
        <Layout>
            <Head>
                <title>{movieInfo['name']}</title>
            </Head>

            {/* ================================================== */}

            <div className="container lg:max-w-6xl mx-auto bg-[#161f34] shadow-2xl">
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
                        // src={episodes['server_data'][0]['link_embed']}>
                        src={episodes['server_data'][parseInt(currEpisode-1, 10)]['link_embed']}>
                    </iframe>

                    {/* Buttons switch episodes */}
                    <div className="m-4 px-4 pt-2 pb-4 rounded-md border-2 border-[#333d4d]">
                        <h1 className="heading-text text-lg mb-2">{episodes['server_name']} :</h1>
                        {
                            episodes['server_data'].map((episode , index) => {
                                return (
                                    <button key={index}
                                            onClick={moveToEpisode}
                                            className={`${((index+1).toString() === currEpisode) ? 'active-btn' : 'normal-btn'} inline-flex`}>
                                        {episode['name']}
                                    </button>
                                )
                            })
                        }
                    </div>


                </div>

            </div>

        </Layout>
    );
};

export default Movie;
