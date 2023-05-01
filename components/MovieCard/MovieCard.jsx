import Link from "next/link";

const MovieCard = ({ movieInfo }) => {
    return (
        <Link href={`/phim/${movieInfo['slug']}`}
              className='w-full h-full relative rounded-md overflow-hidden bg-slate-800 shadow-2xl flex flex-col justify-between
                         hover:outline outline-2 outline-gray-200'
        >
            <img className="w-full flex-1"
                src={movieInfo['thumb_url']}
                alt={movieInfo['origin_name']} />

            <div className="p-3 h-28">
                <h2 className="font-medium text-lg mb-2 text-slate-200 line-clamp-2">
                    {movieInfo['name']}
                </h2>
                <p className="text-md text-slate-400 line-clamp-1">
                    {movieInfo['origin_name']}
                </p>
            </div>
            <div className="inline-block absolute top-2 right-2 rounded-full px-3 pt-1 pb-[2px] bg-gradient-to-br from-sky-500 to-indigo-500 text-base font-medium text-slate-100">
                {movieInfo['episode_current']}
            </div>

        </Link>
    )
};

export default MovieCard;
