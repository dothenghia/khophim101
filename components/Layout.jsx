import { useState , useEffect } from 'react';
import Head from 'next/head';

import Header from './Header/Header'
import Footer from './Footer/Footer'

export default function Layout({ children }) {
    const [darkMode, setDarkMode] = useState(true)
    
    useEffect(() => {
        console.log('Call MOST-VIEW data')
    }, [])

    return (
        <div id='app-container' className={`${darkMode ? 'dark' : ''} relative`}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Web xem phim HD khong quang cao"
                />
            </Head>

            {/* ============================================ */}
            <Header switchTheme={() => setDarkMode(!darkMode)} />

            <div className='bg-li-bg-1 dark:bg-da-bg-1'>

                <div className='page-container flex flex-col lg:flex-row '>
                    <main className='basis-3/4 p-4'>
                        { children }
                    </main>

                    <div className="basis-1/4 px-4 pt-3 mt-4 
                                    lg:mt-16 mx-4 lg:ml-0 h-fit
                                    rounded-md border-2
                                    border-li-border dark:border-da-border">
                        <h1 className="text-xl text-li-heading dark:text-da-heading font-medium">Bảng xếp hạng</h1>
                        <ul>
                            <li>123</li>
                            <li>123</li>
                            <li>123</li>
                            <li>123</li>
                            <li>123</li>
                            <li>123</li>
                        </ul>
                    </div>

                </div>

            </div>

            <Footer/>
        </div>
    );
};


