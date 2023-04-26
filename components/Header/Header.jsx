
import Image from 'next/image';
import Link from 'next/link';

import logo from '../../public/logo.png'

const Header = () => {
    const toggleNavBar = () => {
        document.querySelector('#navbar-menu').classList.toggle('hidden')
    }


    return (
        <div id="header" className="bg-gray-700">

            <div className="container lg:max-w-5xl mx-auto">
                <nav className="flex items-center justify-between flex-wrap px-3 py-1">
                    <Link href='/' className="flex items-center flex-shrink-0 text-white mr-6 p-1">
                        <Image src={logo} width={36} height={36} alt='Logo' />
                        <span className="font-semibold text-xl ml-2">KhoPhim101</span>
                    </Link>

                    <div className="block lg:hidden">
                        <button className="flex items-center px-3 py-2 border-2 rounded text-white border-slate-300 hover:text-blue-400 hover:border-white"
                                onClick={toggleNavBar}>
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                        </button>
                    </div>

                    <div id='navbar-menu' className="w-full hidden flex-grow lg:flex lg:items-center lg:w-auto">
                        <div className="text-sm lg:flex-grow">
                            <Link href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-sky-500 text-base mr-4">
                                Trang chủ
                            </Link>
                            <p className="block mt-4 lg:inline-block lg:mt-0 text-white/40 text-base mr-4 cursor-default">
                                Phim Bộ
                            </p>
                            <p className="block mt-4 lg:inline-block lg:mt-0 text-white/40 text-base mr-4 cursor-default">
                                Phim Lẻ
                            </p>
                            <p className="block mt-4 lg:inline-block lg:mt-0 text-white/40 text-base cursor-default">
                                Hoạt hình
                            </p>
                        </div>
                        {/* <div>
                            <Link href="/" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Search</Link>
                        </div> */}
                    </div>

                </nav>
            </div>

        </div>
    );
};

export default Header;
