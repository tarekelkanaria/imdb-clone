import { MovieType } from "./types/movie";
import MoviesList from "@/components/MoviesList";
import PaginationActions from "@/components/PaginationActions";

const API_ACCESS_TOKEN = process.env.API_ACCESS_TOKEN;

export default async function Home({
  searchParams,
}: {
  searchParams: { genre?: string; search?: string };
}) {
  const url = `https://api.themoviedb.org/3/${
    searchParams.genre && searchParams.genre === "topRated"
      ? `discover/movie?include_video=false&language=en-US&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200&page=1`
      : searchParams.genre && searchParams.genre === "trending"
      ? "trending/movie/week"
      : searchParams.search
      ? `search/movie?query=${searchParams.search}}&language=en-US&page=1`
      : `discover/movie?include_video=false&language=en-US&sort_by=popularity.desc&page=1`
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
  const { total_pages: allPages }: { total_pages: number } = data;
  const results: MovieType[] = data.results as MovieType[];

  return (
    <>
      {results && results.length === 0 && (
        <section>
          <h2 className="text-center font-bold text-2xl pt-6 text-red-700">
            No Movies Found
          </h2>
        </section>
      )}
      {results && results.length > 0 && <MoviesList movies={results} />}
      {results &&
      results.length > 0 &&
      (!searchParams.genre ||
        searchParams.genre !== "trending" ||
        searchParams.search) ? (
        <PaginationActions
          totalPages={allPages}
          category={
            searchParams.genre === "topRated"
              ? { genre: "topRated" }
              : searchParams.search
              ? { search: searchParams.search }
              : {}
          }
        />
      ) : null}
    </>
  );
}
