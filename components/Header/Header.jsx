
import Image from 'next/image';
import Link from 'next/link';

import logo from '../../public/logo.png'

const Header = () => {
    const toggleNavBar = () => {
        document.querySelector('#navbar-menu').classList.toggle('hidden')
    }


    return (
        <div id="header" className="bg-li-header dark:bg-da-header">

            <div className="container lg:max-w-5xl mx-auto">
                <nav className="flex items-center justify-between flex-wrap px-3 py-1">
                    <Link href='/' className="flex items-center flex-shrink-0 mr-6 p-1
                                             text-li-text dark:text-da-text">
                        <Image src={logo} width={36} height={36} alt='Logo' />
                        <span className="font-semibold text-xl ml-2 
                                       text-li-heading dark:text-da-heading">KhoPhim101</span>
                    </Link>

                    <div className="block lg:hidden">
                        <button className="flex items-center px-3 py-2 border-2 rounded 
                                        text-slate-500 border-slate-500 hover:text-sky-500 hover:border-sky-500
                                        dark:text-white dark:border-slate-300 dark:hover:text-sky-500 dark:hover:border-sky-500"
                                onClick={toggleNavBar}>
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                        </button>
                    </div>

                    <div id='navbar-menu' className="w-full hidden flex-grow lg:flex lg:items-center lg:w-auto">
                        <div className="text-sm lg:flex-grow">
                            <Link href="/" 
                            className="block mt-4 lg:inline-block lg:mt-0 text-li-subheading dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 text-lg font-medium mr-4">
                                Trang chủ
                            </Link>
                            <Link href="/tim-kiem" 
                            className="block mt-4 lg:inline-block lg:mt-0 text-li-subheading dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 text-lg font-medium mr-4">
                                Tìm kiếm
                            </Link>
                            <p className="block mt-4 lg:inline-block lg:mt-0 text-black/20 dark:text-white/20 text-lg font-medium  mr-4 cursor-default">
                                Phim Bộ
                            </p>
                            <p className="block mt-4 lg:inline-block lg:mt-0 text-black/20 dark:text-white/20 text-lg font-medium  mr-4 cursor-default">
                                Phim Lẻ
                            </p>
                            <p className="block mt-4 lg:inline-block lg:mt-0 text-black/20 dark:text-white/20 text-lg font-medium  cursor-default">
                                Hoạt hình
                            </p>
                        </div>
                    </div>

                </nav>
            </div>

        </div>
    );
};

export default Header;
