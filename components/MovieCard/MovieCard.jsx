import Link from "next/link";

const MovieCard = ({ movieInfo }) => {
    return (
        <Link href={`/phim/${movieInfo['slug']}`}
              className='w-full relative rounded-md overflow-hidden shadow-2xl flex flex-col justify-between
                        hover:outline outline-2 
                        outline-gray-800 dark:outline-gray-200
                        bg-li-bg-3 dark:bg-da-bg-3'
                        
        >
            <img className="w-full flex-1 sm:flex-none sm:h-[440px] md:h-[370px]"
                src={movieInfo['thumb_url']}
                alt={movieInfo['origin_name']} />

            <div className="p-3 h-28">
                <h2 className="font-medium text-lg mb-2 text-li-heading dark:text-da-heading line-clamp-2">
                    {movieInfo['name']}
                </h2>
                <p className="text-md text-li-subheading dark:text-da-subheading line-clamp-1">
                    {movieInfo['origin_name']}
                </p>
            </div>
            <div className="absolute top-2 right-2 rounded-full bg-gradient-to-br from-sky-500 to-indigo-500 text-slate-100
                            text-xs px-3 pt-1 pb-[2px] font-medium
                            sm:text-sm md:text-base ">
                {movieInfo['episode_current']}
            </div>

        </Link>
    )
};

export default MovieCard;
