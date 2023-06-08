import Head from "next/head";
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
    const [showMore, setShowMore] = useState(false)
    const movieInfo = data['movie']
    const episodes = data['episodes'][0]

    const [currEpisode, setCurrEpisode] = useState('1')

    const moveToEpisode = (e) => {
        if (isNaN(e.target.innerHTML) === false && e.target.innerHTML !== "") {
            setCurrEpisode(e.target.innerHTML)
        }
    }

    return (
        <Layout>
            <Head>
                <title>{movieInfo['name']}</title>
            </Head>

            {/* ================================================== */}

            <div className="mt-0 md:mt-4">
                <div className="flex flex-col md:flex-row items-center md:items-start lg:pl-2">

                    <div className="w-60 mt-2 rounded-md overflow-hidden">
                        <img src={movieInfo['thumb_url']} alt={movieInfo['name']} />
                    </div>

                    <div className="flex-1 pt-4 px-2 md:pt-1 md:pl-4">
                        <h1 className="heading-text">{movieInfo['name']}</h1>
                        <h2 className="subheading-text">{movieInfo['origin_name']}</h2>
                        <p className="body-text">Trạng thái :
                            <span className="text-li-primary dark:text-da-primary text-lg font-bold"> {movieInfo['episode_current']}</span>
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
                        <p className="body-text">Nội dung :
                            <p className={`body-text ${showMore ? '' : 'line-clamp-1'}`} dangerouslySetInnerHTML={{ __html: movieInfo['content'] }} />
                            <button className="text-li-primary dark:text-da-primary underline underline-offset-2" onClick={() => {setShowMore(!showMore)}}>{showMore ? 'Ẩn bớt' : 'Xem thêm'}</button>
                        </p>
                    </div>
                </div>

                <div className="pt-10 pb-28">
                    {
                        (episodes['server_data'][parseInt(currEpisode - 1, 10)]['link_embed'] === "") ?
                            <p className="heading-text text-center py-4">Phim này hiện tại chưa hỗ trợ</p>
                        :
                        <iframe className="w-full h-80 sm:h-96 md:h-[450px] xl:h-[500px]"
                            allowFullScreen={true}
                            src={episodes['server_data'][parseInt(currEpisode - 1, 10)]['link_embed']}>
                        </iframe>
                    }

                    {/* Buttons switch episodes */}
                    <div className="my-6 px-4 pt-2 pb-4 rounded-md border-2 border-li-border dark:border-da-border">
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

        </Layout>
    );
};

export default Movie;
