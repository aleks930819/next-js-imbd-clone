import Link from 'next/link';
import Image from 'next/image';

const imgPath = 'https://image.tmdb.org/t/p/original';

const Card = ({ result }) => {
  return (
    <div
      className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:mg-2 transition-all duration-200
       max-h-auto
    "
    >
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`${imgPath}${result.poster_path}`}
          width={300}
          height={450}
          className="rounded-lg
           hover:opacity-60 transition-all duration-200
          "
          alt={result.title || result.name}
        />
        <div>
          <h2 className="text-lg font-semibold mt-1">
            {result.title || result.name}
          </h2>
          <p className="text-sm text-gray-400 truncate">{result.overview}</p>
          <p
            className={`text-sm ${
              result.vote_average > 7
                ? 'text-green-500'
                : result.vote_average > 5
                ? 'text-yellow-500'
                : 'text-red-500'
            }`}
          >
            {result.vote_average.toFixed(1)}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
