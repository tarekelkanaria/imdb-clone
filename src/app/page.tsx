import MoviesList from "@/components/MoviesList";
import { MovieType } from "./types/movie";

const API_ACCESS_TOKEN = process.env.API_ACCESS_TOKEN;

export default async function Home({
  searchParams,
}: {
  searchParams: { genre?: string };
}) {
  const url = `https://api.themoviedb.org/3/${
    searchParams.genre && searchParams.genre === "topRated"
      ? "discover/movie?include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200"
      : searchParams.genre && searchParams.genre === "trending"
      ? "trending/movie/week"
      : "discover/movie?include_video=false&language=en-US&page=1&sort_by=popularity.desc"
  }`;

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_ACCESS_TOKEN}`,
    },
    next: {
      revalidate: 30 * 60,
    },
  });

  if (!response.ok) throw new Error("Error has occurred");
  const data = await response.json();
  const results: MovieType[] = data.results as MovieType[];

  return <MoviesList movies={results} />;
}
