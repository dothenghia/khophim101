import Head from "next/head";

import Layout from "../../components/Layout";

const TimKiem = () => {

    return (
        <Layout>
            <Head>
                <title>Tìm kiếm</title>
            </Head>

            {/* ================================================== */}
            <div id="search" className="h-screen p-8">

                <h1 className="mb-4 heading-text text-center">Tìm kiếm phim</h1>

                <form className="flex py-2 md:py-3 px-3 bg-white rounded-md overflow-hidden drop-shadow-sm shadow-md dark:shadow-sm dark:drop-shadow-none
                                focus-within:outline outline-[2px]
                                outline-li-subheading dark:outline-gray-300">
                    <input type="text" required placeholder="Nhập tên phim ..."
                        className=" flex-1 outline-none bg-transparent
                                    text-base text-li-subheading "/>
                    <button type="submit"
                        className="pl-2 text-li-subheading hover:text-li-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                    </button>
                </form>



            </div>
        </Layout>
    );
};

export default TimKiem;
