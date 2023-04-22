import Link from "next/link";

const MovieCard = ({ movieInfo }) => {
    return (
        <Link href={`/phim/${movieInfo['slug']}`}
              className="w-full h-full relative rounded-md overflow-hidden bg-[#1e293b] shadow-2xl flex flex-col justify-between"
        >
            <img className="w-full flex-1"
                src={`https://img.ophim1.com/uploads/movies/${movieInfo['thumb_url']}`}
                alt={movieInfo['origin_name']} />

            <div className="p-3 h-28 hover:bg-[#333d4d]">
                <h2 className="font-medium text-lg mb-2 text-[#e2e8f0] line-clamp-2">
                    {movieInfo['name']}
                </h2>
                <p className="text-md text-[#778394] line-clamp-1">
                    {movieInfo['origin_name']}
                </p>
            </div>
            <div className="inline-block absolute top-2 right-2 rounded-full px-3 pt-1 pb-[2px] bg-gradient-to-br from-violet-500 to-fuchsia-500 text-sm text-slate-100">
                {movieInfo['year']}
            </div>

        </Link>
    )
};

export default MovieCard;
