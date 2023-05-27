import 'flowbite'
import Link from 'next/link';

const slideItems = [
    [
        {
            id: 1,
            name: "Sát Thủ John Wick: Phần 4",
            slug: "sat-thu-john-wick-phan-4",
            poster_url: "https://techprincess.it/wp-content/uploads/2023/03/John-Wick-4.jpg",
            year: 2023,
            episode_current: "Full",
        },
        {
            id: 2,
            name: "Quá Nhanh Quá Nguy Hiểm 10",
            slug: "qua-nhanh-qua-nguy-hiem-10",
            poster_url: "https://img.ophim1.com/uploads/movies/qua-nhanh-qua-nguy-hiem-10-poster.jpg",
            year: 2023,
            episode_current: "Full",
        },
    ],
    [
        {
            id: 3,
            name: "Vệ Binh Dải Ngân Hà 3",
            slug: "ve-binh-dai-ngan-ha-3",
            poster_url: "http://genk.mediacdn.vn/2018/10/20/photo-1-1540018246468599888897.jpg",
            year: 2023,
            episode_current: "Full",
        },
        {
            id: 4,
            name: "Anh Em Super Mario",
            slug: "anh-em-super-mario",
            poster_url: "https://img.ophim1.com/uploads/movies/anh-em-super-mario-poster.jpg",
            year: 2023,
            episode_current: "Full",
        },
    ],
    [
        {
            id: 5,
            name: "Hộ Tâm",
            slug: "ho-tam",
            poster_url: "https://img.ophim1.com/uploads/movies/ho-tam-poster.jpg",
            year: 2023,
            episode_current: "Tập 24",
        },
        {
            id: 6,
            name: "Người Thầy Y Đức 3",
            slug: "nguoi-thay-y-duc-3",
            poster_url: "https://img.ophim1.com/uploads/movies/nguoi-thay-y-duc-3-poster.jpg",
            year: 2023,
            episode_current: "Tập 8",
        }
    ],
    [
        {
            id: 7,
            name: "Tình Người Duyên Ma: Ngoại Truyện",
            slug: "tinh-nguoi-duyen-ma-ngoai-truyen",
            poster_url: "https://img.ophim1.com/uploads/movies/tinh-nguoi-duyen-ma-ngoai-truyen-poster.jpg",
            year: 2023,
            episode_current: "Full",
        },
        {
            id: 8,
            name: "XO, Kitty",
            slug: "xo-kitty",
            poster_url: "https://img.ophim1.com/uploads/movies/xo,-kitty-poster.jpg",
            year: 2023,
            episode_current: "Hoàn Tất (10/10)",
        }
    ]
]

const ThumbnailSlider = () => {

    return (
        <div id='thumnail-slider' className='mt-12 mb-12'>

            <div id="default-carousel" className="relative w-full" data-carousel="slide">
                {/* <!-- Carousel wrapper --> */}
                <div className="relative h-56 md:h-48 overflow-hidden bg-transparent">

                    {
                        slideItems.map((item, index) => {
                            return (
                                <div key={index} className="h-full grid grid-cols-2 gap-5 duration-1000 ease-in-out" data-carousel-item>
                                    <Link href={`/phim/${item[0].slug}`}
                                        className='relative h-48 group overflow-hidden'>
                                        <img src={item[0].poster_url}
                                            alt={item[0].name}
                                            className='w-full scale-100 group-hover:scale-125 ease-in duration-200' />
                                        <div className='absolute bottom-0 left-0 w-full pt-20 pb-3 pl-3 shadow-inner-bottom'>
                                            <h2 className='text-lg text-white font-medium line-clamp-1'>{item[0].name}</h2>
                                            <p className='text-base text-white'>{item[0].year}</p>
                                        </div>
                                        <div className="absolute top-3 right-3 rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 text-slate-100 text-sm px-3 pt-1 pb-[2px]">
                                            {item[0].episode_current}
                                        </div>
                                    </Link>

                                    <Link href={`/phim/${item[0].slug}`}
                                        className='relative h-48 group overflow-hidden'>
                                        <img src={item[1].poster_url}
                                            alt={item[1].name}
                                            className='w-full scale-100 group-hover:scale-125 ease-in duration-200' />
                                        <div className='absolute bottom-0 left-0 w-full pt-20 pb-3 pl-3 shadow-inner-bottom'>
                                            <h2 className='text-lg text-white font-medium line-clamp-1'>{item[1].name}</h2>
                                            <p className='text-base text-white'>{item[1].year}</p>
                                        </div>
                                        <div className="absolute top-3 right-3 rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 text-slate-100 text-sm px-3 pt-1 pb-[2px]">
                                            {item[1].episode_current}
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }

                </div>

                {/* <!-- Slider controls --> */}
                <button type="button" className="absolute -translate-y-1/2 top-1/2 left-2 z-30 flex items-center justify-center cursor-pointer group" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 group-hover:bg-white/50">
                        <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute -translate-y-1/2 top-1/2 right-2 z-30 flex items-center justify-center cursor-pointer group" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 group-hover:bg-white/50">
                        <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>

        </div>
    );
};

export default ThumbnailSlider;
