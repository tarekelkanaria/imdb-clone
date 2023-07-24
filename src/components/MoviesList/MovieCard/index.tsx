import Image from "next/image";
import Link from "next/link";
import { MovieType } from "@/app/types/movie";
import { GoThumbsup } from "react-icons/go";
import { BsFillStarFill } from "react-icons/bs";

const MovieCard: React.FC<MovieType> = ({
  id,
  backdrop_path,
  poster_path,
  overview,
  title,
  release_date,
  vote_count,
  vote_average,
}) => {
  return (
    <article className="group cursor-pointer p-3 sm:hover:shadow-slate-400 sm:shadow-md sm:border sm:border-slate-400 rounded-lg transition-shadow duration-200 sm:m-2">
      <Link href={`/movie/${id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            poster_path || backdrop_path
          }`}
          width={475}
          height={713}
          alt={`${title} Poster not found`}
          placeholder="blur"
          blurDataURL="/loader.svg"
          style={{ maxWidth: "100%", height: "auto" }}
          className="group-hover:opacity-80 sm:rounded-t-lg transition-opacity duration-200"
        />
        <div className="sm:p-2">
          <p className="line-clamp-3 mb-1 text-md">{overview}</p>
          <h2 className="text-lg font-bold truncate">{title}</h2>
          <time dateTime={release_date}>{release_date}</time>
          <p className="flex items-center justify-between border-t-2 mt-2 pt-2 border-t-gray-500">
            <span className="flex">
              <GoThumbsup className="mr-1 text-2xl" />
              {vote_count}
            </span>
            <span className="flex">
              <BsFillStarFill className="text-yellow-300 text-2xl mr-1" />
              {Math.round(vote_average)}
              <em className="mb-1 ml-1 opacity-90 text-sm">/10</em>
            </span>
          </p>
        </div>
      </Link>
    </article>
  );
};

export default MovieCard;
