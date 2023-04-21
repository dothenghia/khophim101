import Head from 'next/head';

import Header from './Header/Header'
import Footer from './Footer/Footer'

export default function Layout({ children }) {
    return (
        <div>
            <Head>

            </Head>

            {/* ============================================ */}
            <Header/>

            <main>{ children }</main>

            <Footer/>
        </div>
    );
};


