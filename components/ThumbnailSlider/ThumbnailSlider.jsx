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

const ThumnailItem = ({ info }) => {
    return (
        <Link href={`/phim/${info.slug}`}
            className='relative md:h-48 group overflow-hidden rounded-lg'>
            <img src={info.poster_url}
                alt={info.name}
                className='w-full scale-100 group-hover:scale-125 ease-in duration-200' />

            <div className='absolute bottom-0 left-0 w-full pt-20 pb-3 pl-3 shadow-inner-bottom'>
                <h2 className='text-base md:text-lg text-white font-medium line-clamp-1'>{info.name}</h2>
                <p className='text-sm md:text-base text-white'>{info.year}</p>
            </div>
            <div className="absolute top-3 right-3 rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 text-slate-100 text-sm px-3 pt-1 pb-[2px]">
                {info.episode_current}
            </div>
        </Link>
    )
}

const ThumbnailSlider = () => {

    return (
        <div id='thumnail-slider' className='mt-12 mb-12'>

            <div id="default-carousel" className="relative w-full" data-carousel="slide">
                {/* <!-- Carousel wrapper --> */}
                <div className="relative w-full pt-[100%] md:pt-0 md:h-48 overflow-hidden bg-transparent">

                    {
                        slideItems.map((item, index) => {
                            return (
                                <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-5 duration-1000 ease-in-out" data-carousel-item>
                                    <ThumnailItem info={item[0]} />
                                    <ThumnailItem info={item[1]} />
                                </div>
                            )
                        })
                    }

                </div>

            </div>
        </div>
    );
};

export default ThumbnailSlider;
