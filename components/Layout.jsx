import Head from 'next/head';

import Header from './Header/Header'
import Footer from './Footer/Footer'
import { useState } from 'react';

export default function Layout({ children }) {
    const [darkMode, setDarkMode] = useState(true)

    return (
        <div id='app-container' className={darkMode && 'dark'}>
        {/* <div id='app-container'> */}
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Web xem phim HD khong quang cao"
                />
            </Head>

            {/* ============================================ */}
            <Header/>

            <main className='bg-li-bg-1 dark:bg-da-bg-1'>
                { children }
            </main>

            <Footer/>
        </div>
    );
};


