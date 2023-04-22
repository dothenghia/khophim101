import Head from 'next/head';

import Header from './Header/Header'
import Footer from './Footer/Footer'

export default function Layout({ children }) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Web xem phim HD khong quang cao"
                />
            </Head>

            {/* ============================================ */}
            <Header/>

            <main className='bg-[#0f172a]'>
                { children }
            </main>

            <Footer/>
        </div>
    );
};


