import { MovieType } from "@/app/types/movie";
import MoviesList from "@/components/MoviesList";
import PaginationActions from "@/components/PaginationActions";

const API_ACCESS_TOKEN = process.env.API_ACCESS_TOKEN;

export default async function ArchivePages({
  params,
  searchParams,
}: {
  params: { pageNumber: string };
  searchParams: { genre?: string; search?: string };
}) {
  const { pageNumber } = params;
  const { genre, search } = searchParams;

  const url = `https://api.themoviedb.org/3/${
    genre && genre === "topRated"
      ? `discover/movie?include_video=false&language=en-US&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200&page=${pageNumber}`
      : search
      ? `search/movie?query=${search}&language=en-US&page=${pageNumber}`
      : `discover/movie?include_video=false&language=en-US&sort_by=popularity.desc&page=${pageNumber}`
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
      <MoviesList movies={results} />
      <PaginationActions
        updatedNumber={parseInt(pageNumber)}
        totalPages={allPages}
        category={genre ? { genre: "topRated" } : search ? { search } : {}}
      />
    </>
  );
}
