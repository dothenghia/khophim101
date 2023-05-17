import Link from "next/link";

const MovieCard = ({ movieInfo }) => {
    return (
        <Link href={`/phim/${movieInfo['slug']}`}
              className='w-full relative rounded-md overflow-hidden drop-shadow-2xl shadow-md dark:shadow-sm dark:shadow-black dark:drop-shadow-none flex flex-col justify-between
                        hover:outline outline-[2.5px]
                        outline-gray-800 dark:outline-gray-300
                        bg-li-bg-3 dark:bg-da-bg-3'
        >
            <img className="w-full flex-1 sm:flex-none sm:h-[430px] md:h-[250px] lg:h-[250px] xl:h-[280px]"
                src={movieInfo['thumb_url']}
                alt={movieInfo['slug']} />

            <div className="p-[10px] h-24">
                <h2 className="text-base font-medium mb-2 text-li-heading dark:text-da-heading line-clamp-2">
                    {movieInfo['name']}
                </h2>
                <p className="text-sm text-li-subheading dark:text-da-subheading line-clamp-1">
                    {movieInfo['origin_name']}
                </p>
            </div>

            
            <div className="absolute top-2 right-2 rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 text-slate-100
                            text-xs px-2 pt-1 pb-[2px]
                            sm:text-sm md:text-sm">
                {movieInfo['episode_current']}
            </div>

        </Link>
    )
};

export default MovieCard;
