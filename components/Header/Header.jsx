
import Image from 'next/image';
import Link from 'next/link';

import logo from '../../public/logo.png'

const Header = () => {
    const toggleNavBar = () => {
        document.querySelector('#navbar-menu').classList.toggle('hidden')
    }


    return (
        <div id="header">
            <div className="bg-li-header dark:bg-da-header drop-shadow-md dark:drop-shadow-none">
                <nav className="container xl:max-w-6xl mx-auto flex items-center justify-between px-3 py-1">
                    <Link href='/' className="flex items-center flex-shrink-0 mr-6 p-1">
                        <Image src={logo} width={36} height={36} alt='Logo' />
                        <span className="font-semibold text-xl ml-2 text-li-heading dark:text-da-heading">KhoPhim101</span>
                    </Link>


                    <div className="block lg:hidden">
                        <button className="flex items-center px-2 py-1 border-[2px] rounded 
                                        text-li-heading border-li-heading hover:text-li-primary hover:border-li-primary
                                        dark:text-da-heading dark:border-da-heading dark:hover:text-da-primary dark:hover:border-da-primary"
                            onClick={toggleNavBar}>
                            <svg className="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                        </button>
                    </div>
                </nav>
            </div>


            <div className="bg-li-bg-3 dark:bg-da-bg-3 drop-shadow-md dark:drop-shadow-none ">
                <nav className="container xl:max-w-6xl mx-auto flex items-center">
                    <div id='navbar-menu' className="w-full hidden lg:flex lg:items-center">
                        <Link href="/" className="header-text">
                            Trang chủ
                        </Link>

                        <Link href="/tim-kiem" className="header-text">
                            Tìm kiếm
                        </Link>

                        <Link href="/phim-moi/1" className="header-text">
                            Phim mới
                        </Link>

                        <Link href="/phim-chieu-rap/1" className="header-text">
                            Phim chiếu rạp
                        </Link>

                        <Link href="/phim-le/1" className="header-text">
                            Phim lẻ
                        </Link>

                        <Link href="/phim-bo/1" className="header-text">
                            Phim bộ
                        </Link>

                        <Link href="/hoat-hinh/1" className="header-text">
                            Hoạt hình
                        </Link>

                    
                    </div>
                </nav>
            </div>


        </div>
    );
};

export default Header;
