import { MovieType } from "@/app/types/movie";
import MoviesList from "@/components/MoviesList";

const API_ACCESS_TOKEN = process.env.API_ACCESS_TOKEN;

async function getMovies(
  queryString: string
): Promise<{ results: MovieType[]; total_pages: number }> {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${queryString}&language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${API_ACCESS_TOKEN}`,
        accept: "application/json",
      },
    }
  );

  if (!response.ok) throw new Error("Failed to get movies");
  return response.json();
}

export default async function FindMovies({
  params,
}: {
  params: { searchTerm: string };
}) {
  const { searchTerm } = params;
  const data = await getMovies(searchTerm);
  const foundedMovies = data.results;

  return (
    <>
      {foundedMovies && foundedMovies.length === 0 && (
        <section>
          <h2 className="text-center font-bold text-2xl pt-6 text-red-700">
            No Movies Found
          </h2>
        </section>
      )}
      {foundedMovies && <MoviesList movies={foundedMovies} />}
    </>
  );
}
