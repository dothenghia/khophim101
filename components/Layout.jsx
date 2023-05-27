import { useContext, useEffect, useState } from 'react';
import { themeContext } from '../lib/themeContext';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import Header from './Header/Header'
import Footer from './Footer/Footer'

const mostViewData = [
    {
        name: "Ẩn Danh 2",
        origin_name: "Taxi Driver 2",
        slug: "an-danh-2",
        thumb_url: "https://img.ophim1.com/uploads/movies/an-danh-2-thumb.jpg",
        view: 331128
    },
    {
        name: "Cầm Tù",
        origin_name: "Esaret",
        slug: "cam-tu",
        thumb_url: "https://img.ophim1.com/uploads/movies/cam-tu-thumb.jpg",
        view: 19195
    },
    {
        name: "Chim Bói Cá",
        origin_name: "Yali Çapkini",
        slug: "chim-boi-ca",
        thumb_url: "https://img.ophim1.com/uploads/movies/chim-boi-ca-thumb.jpg",
        view: 12867
    },
    {
        name: "Ba chị em (Phần 2)",
        origin_name: "Uc Kiz Kardes",
        slug: "ba-chi-em-phan-2",
        thumb_url: "https://img.ophim1.com/uploads/movies/ba-chi-em-phan-2-thumb.jpg",
        view: 4378
    },
    {
        name: "Avatar 2: Dòng Chảy Của Nước",
        origin_name: "Avatar 2",
        slug: "avatar-2-dong-chay-cua-nuoc",
        thumb_url: "https://img.ophim1.com/uploads/movies/avatar-2-dong-chay-cua-nuoc-thumb.jpg",
        view: 4113
    },
    {
        name: "Phát Ngôn Viên Pháp Lý",
        origin_name: "Speakers of Law",
        slug: "phat-ngon-vien-phap-ly",
        thumb_url: "https://img.ophim1.com/uploads/movies/phat-ngon-vien-phap-ly-thumb.jpg",
        view: 3297
    },
    {
        name: "Đảo Hải Tặc",
        origin_name: "One Piece (Luffy)",
        slug: "one-piece",
        thumb_url: "https://img.ophim1.com/uploads/movies/one-piece-thumb.jpg",
        view: 3265
    },
    {
        name: "Biệt Đội Tàng Hình",
        origin_name: "The Invisibles",
        slug: "biet-doi-tang-hinh",
        thumb_url: "https://img.ophim1.com/uploads/movies/biet-doi-tang-hinh-thumb.jpg",
        view: 3213
    },
    {
        name: "Goedam: Chuyện ma đô thị",
        origin_name: "Goedam",
        slug: "goedam-chuyen-ma-do-thi",
        thumb_url: "https://img.ophim1.com/uploads/movies/goedam-chuyen-ma-do-thi-thumb.jpg",
        view: 3040
    },
    {
        name: "Hoa Máu",
        origin_name: "Kan Cicekleri",
        slug: "hoa-mau",
        thumb_url: "https://img.ophim1.com/uploads/movies/hoa-mau-thumb.jpg",
        view: 2519
    }
]


export default function Layout({ children }) {

    const darkModeContext = useContext(themeContext)

    useEffect(() => {
        if (darkModeContext.darkMode === true) {
            document.querySelector('#checkbox-darkMode').checked = true
        }
    }, [])

    return (
        <div id='app-container' className={`${darkModeContext.darkMode ? 'dark' : ''} relative`}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Web xem phim HD khong quang cao"
                />
            </Head>

            {/* ============================================ */}
            <Header />

            {/* SWITCH THEME BUTTON */}
            <div className='fixed bottom-20 -left-5 rotate-90 z-50 
                            flex flex-row items-center border-2 py-1 rounded-full
                            bg-li-bg-2/40 border-gray-500 dark:bg-da-bg-2/40 dark:border-da-bg-2/70'>
                <span className='mx-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-sun-fill h-6 w-6 fill-gray-500 dark:fill-white" viewBox="0 0 16 16">
                        <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                    </svg>
                </span>
                <label className="relative inline-flex items-center cursor-pointer w-11">
                    <input type="checkbox" id='checkbox-darkMode' value="" className="sr-only peer" onClick={darkModeContext.toggleDarkMode} />
                    <div className="absolute w-11 h-6 bg-gray-400 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full 
                                         peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                                         after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all 
                                         peer-checked:bg-gradient-to-r from-sky-500 to-indigo-500"></div>
                </label>
                <span className='mx-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-moon-stars-fill -rotate-90 h-[18px] w-[18px] fill-gray-500 dark:fill-white" viewBox="0 0 16 16">
                        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                        <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
                    </svg>
                </span>
            </div>


            {/* MAIN CONTAINER */}
            <div className='bg-li-bg-1 dark:bg-da-bg-1'>

                <div className='page-container pb-16 lg:pb-10 flex flex-col lg:flex-row '>

                    {/* PAGE CONTAINER */}
                    <main className='basis-3/4 px-5 py-4'>
                        {children}
                    </main>

                    {/* MOST-VIEW CONTAINER */}
                    <div className="basis-1/4 mt-4 lg:mt-16 mx-4 lg:ml-0 h-fit rounded-md overflow-hidden border-2 border-li-border dark:border-da-border">
                        <h1 className="text-xl px-4 pt-3 text-li-heading dark:text-da-heading font-medium">Bảng xếp hạng</h1>
                        <ul>
                            {/* <li className='text-li-subheading dark:text-da-subheading text-center p-4'>--- Trống ---</li> */}
                            {
                                mostViewData.map((movieInfo) => {
                                    return (
                                        <li key={movieInfo['slug']}>
                                            <Link href={`/phim/${movieInfo['slug']}`}
                                                className="py-2 px-3 flex flex-row hover:bg-li-bg-1 dark:hover:bg-da-bg-1">
                                                {/* <img className="w-16 h-16 object-cover"
                                                    src={movieInfo['thumb_url']}
                                                    alt={movieInfo['slug']}
                                                /> */}
                                                <div className='w-[68px] h-[98px] relative'>
                                                    <Image
                                                        priority={true}
                                                        src={movieInfo['thumb_url']}
                                                        alt={movieInfo['slug']}
                                                        fill
                                                        sizes="(max-width: 1200px) 100vw, 100vw"
                                                        quality={60}
                                                        // style={{objectFit: "contain"}}
                                                    />
                                                </div>
                                                <div className="px-2 pt-1 flex-1 flex items-start">
                                                    <div>
                                                        <h3 className="text-base text-li-heading dark:text-da-heading font-medium line-clamp-2">
                                                            {movieInfo['name']}
                                                        </h3>
                                                        <p className="text-sm mb-1 text-li-subheading dark:text-da-subheading line-clamp-1">
                                                            {movieInfo['origin_name']}
                                                        </p>
                                                        <p className="text-sm text-li-subheading dark:text-da-subheading line-clamp-1">
                                                            Lượt xem: {movieInfo['view']}
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                </div>

            </div>

            <Footer />
        </div>
    );
};


