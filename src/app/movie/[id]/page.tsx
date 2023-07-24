import { MovieDetailsType } from "@/app/types/movie";
import Image from "next/image";

const API_ACCESS_TOKEN = process.env.API_ACCESS_TOKEN;

async function getMovieDetails(id: number): Promise<MovieDetailsType> {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
    headers: {
      Authorization: `Bearer ${API_ACCESS_TOKEN}`,
      accept: "application/json",
    },
  });

  if (!response.ok) throw new Error("Error has occurred");

  return response.json();
}
export default async function MovieDetails({
  params,
}: {
  params: { id: number };
}) {
  const movie: MovieDetailsType = await getMovieDetails(params.id);
  const {
    poster_path,
    backdrop_path,
    title,
    overview,
    release_date,
    vote_count,
    vote_average,
    runtime,
    genres,
  } = movie;
  const hours = Math.floor(runtime / 60);
  const mins = runtime - hours * 60;

  return (
    <section className="container pt-4 lg:pt-8 flex flex-col lg:flex-row lg:space-x-6 items-center lg:justify-center">
      <Image
        src={`https://image.tmdb.org/t/p/w500/${poster_path || backdrop_path}`}
        width={475}
        height={713}
        alt={`${title} poster Not found`}
        placeholder="blur"
        blurDataURL="/loader.svg"
        style={{ height: "auto" }}
        className="rounded-lg mb-2 lg:ml-4"
      />
      <article className="mb-2 lg:p-4 lg:mr-4">
        <h2 className="p-2 text-2xl font-bold mb-3">{title}</h2>
        {runtime && runtime > 0 && (
          <p className="p-2 text-sm opacity-90 mb-3">
            {hours}h {mins > 0 && `${mins}m`}
          </p>
        )}
        <p className="p-2 text-sm opacity-90 mb-3">
          {genres &&
            genres.map((genre, i) => (
              <span key={genre.id}>
                {genre.name} {i === genres.length - 1 ? "" : "| "}
              </span>
            ))}
        </p>
        <p className="p-2 mb-3">
          <strong className="mr-1 font-semibold text-xl">Overview: </strong>
          {overview}
        </p>
        <p className="p-2 mb-3">
          <strong className="mr-1 font-semibold text-xl">Release Date: </strong>
          <time dateTime={release_date}>{release_date}</time>
        </p>
        <div className="p-2 mb-3 flex flex-col lg:flex-row lg:justify-between lg:items-center">
          <p>
            <strong className="mr-1 font-semibold text-xl">Votes: </strong>
            {vote_count}
          </p>
          <p>
            <strong className="mr-1 font-semibold text-xl">Rating: </strong>
            {Math.round(vote_average)}{" "}
            <em className="mb-2 ml-1 opacity-90 text-sm">/10</em>
          </p>
        </div>
      </article>
    </section>
  );
}
