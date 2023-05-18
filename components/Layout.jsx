import { useContext, useEffect, useState } from 'react';
import { themeContext } from '../lib/themeContext';
import Head from 'next/head';
import Link from 'next/link';

import Header from './Header/Header'
import Footer from './Footer/Footer'

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
                    <main className='basis-3/4 p-4'>
                        {children}
                    </main>

                    {/* MOST-VIEW CONTAINER */}
                    <div className="basis-1/4 mt-4 lg:mt-16 mx-4 lg:ml-0 h-fit rounded-md overflow-hidden border-2 border-li-border dark:border-da-border">
                        <h1 className="text-xl px-4 pt-3 text-li-heading dark:text-da-heading font-medium">Bảng xếp hạng</h1>
                        <ul>
                            <li className='text-li-subheading dark:text-da-subheading text-center p-4'>--- Trống ---</li>
                            {
                                // bangXepHangData.map((movieInfo) => {
                                //     return (
                                //         <li key={movieInfo['slug']}>
                                //             <Link href={`/phim/${movieInfo['slug']}`}
                                //                 className="p-3 flex flex-row hover:bg-li-bg-1 dark:hover:bg-da-bg-1">
                                //                 <img className="w-16 h-16 object-cover"
                                //                     src={movieInfo['thumb_url']}
                                //                     alt={movieInfo['slug']} />
                                //                 <div className="px-2 pt-1 flex-1 ">
                                //                     <h3 className="text-sm text-li-heading dark:text-da-heading font-medium line-clamp-1">
                                //                         {movieInfo['name']}
                                //                     </h3>
                                //                     <p className="text-sm text-li-subheading dark:text-da-subheading line-clamp-1">
                                //                         {movieInfo['origin_name']}
                                //                     </p>
                                //                     <p className="text-sm text-li-subheading dark:text-da-subheading line-clamp-1">
                                //                         Lượt xem: {movieInfo['view']}
                                //                     </p>
                                //                 </div>
                                //             </Link>
                                //         </li>
                                //     )
                                // })
                            }
                        </ul>
                    </div>

                </div>

            </div>

            <Footer />
        </div>
    );
};


