import Link from "next/link";

const MovieCard = ({ movieInfo }) => {
    return (
        <div className="w-full rounded overflow-hidden shadow-lg" key={movieInfo['slug']}>
            <img className="w-full"
                src={`https://img.ophim1.com/uploads/movies/${movieInfo['thumb_url']}`}
                alt={movieInfo['origin_name']} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{movieInfo['name']}</div>
                <p className="text-gray-700 text-base">{movieInfo['origin_name']}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{movieInfo['year']}</span>
            </div>

            <Link href={`/movies/${movieInfo['slug']}`}>Hehe</Link>

        </div>
    )
};

export default MovieCard;
